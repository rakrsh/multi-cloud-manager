# ☁️ Multi-Cloud Manager

[![Go Version](https://img.shields.io/github/go-mod/go-version/rakrsh/multi-cloud-manager?logo=go)](https://go.dev/)
[![React](https://img.shields.io/badge/React-19-blue)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**Multi-Cloud Manager** is a high-performance, centralized dashboard designed to monitor and manage resources across multiple cloud providers (AWS, Azure, GCP) and SaaS platforms (Salesforce) from a single pane of glass.

Built with a focus on **high-density data visualization** and **low-latency aggregation**, it utilizes a Go-based backend for parallel data fetching and a modern React frontend with a premium Glassmorphism design system.

---

## ✨ Key Features

- 🚀 **Parallel Data Fetching:** Backend orchestrator fetches metadata from multiple providers simultaneously using Go routines for sub-second latency.
- 🧩 **Universal Resource Schema:** All vendor-specific JSON is normalized into a consistent, cloud-agnostic schema before reaching the UI.
- 🎨 **Glassmorphism Design:** A premium, modern UI built with vanilla CSS tokens, providing a high-density yet breathable data experience.
- 🔄 **Cross-Cloud Analysis:** Easily switch between providers or view aggregated health statuses across your entire infrastructure.
- 🛡️ **Resilient Architecture:** Designed with future-ready patterns like circuit breakers and provider-specific adapter isolation.

---

## 🛠️ Tech Stack

### Backend
- **Language:** Go (Golang)
- **Framework:** Gin Gonic (HTTP Router)
- **Concurrency:** Go Routines & Channels for parallel provider integration.

### Frontend
- **Framework:** React 19 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS + Custom Glassmorphism System
- **State Management:** TanStack Query (React Query)
- **Visualization:** Recharts & Lucide Icons

---

## 📂 Project Structure

```text
├── backend/            # Go backend (Adapters, Services, API)
├── frontend/           # React frontend (Vite, TypeScript, Tailwind)
├── docs/               # Documentation (MkDocs source)
├── mkdocs.yml          # Documentation configuration
└── README.md           # Project overview
```

---

## 🚀 Getting Started

### Prerequisites
- [Go](https://go.dev/doc/install) 1.21+
- [Node.js](https://nodejs.org/) 20+
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### 1. Backend Setup
```bash
cd backend
go mod download
go run main.go
```
The API will be available at `http://localhost:8080`.

### 2. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
The dashboard will be available at `http://localhost:5173`.

---

## 📖 Documentation

Detailed documentation, including architecture diagrams and setup guides, is available in the `/docs` directory or can be viewed as a static site:

```bash
# To run docs locally
pip install mkdocs-material
mkdocs serve
```

Visit the live docs at [rakrsh.github.io/multi-cloud-manager/](https://rakrsh.github.io/multi-cloud-manager/)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
