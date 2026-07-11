# Stage 1: Build Frontend
FROM node:22-slim AS frontend-builder
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm ci
COPY frontend/ ./
RUN npm run build

# Stage 2: Build Backend
FROM golang:1.26.5-alpine AS backend-builder
WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN go build -o /app/server backend/main.go

# Stage 3: Final Image (pinned and non-root)
FROM alpine:3.18 AS runtime
RUN apk add --no-cache ca-certificates

# create a non-root user to avoid running the app as root
ARG APP_USER=app
ARG APP_UID=1000
RUN addgroup -g ${APP_UID} ${APP_USER} \
	&& adduser -D -G ${APP_USER} -u ${APP_UID} ${APP_USER}

WORKDIR /home/${APP_USER}
COPY --from=backend-builder /app/server .
COPY --from=frontend-builder /app/frontend/dist ./public

RUN chown -R ${APP_USER}:${APP_USER} /home/${APP_USER} \
	&& chmod +x /home/${APP_USER}/server

USER ${APP_USER}
EXPOSE 8080
CMD ["./server"]
