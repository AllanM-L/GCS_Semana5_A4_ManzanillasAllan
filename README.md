# GCS_Semana5_A4_ManzanillasAllan

## Práctica "Repo Auditable" — Arreglar versionado + registrar estados

**Asignatura:** Gestión de Configuración de Software  
**Semana:** 5  
**Actividad:** 4  
**Autor:** Allan Manzanillas  
**Fecha:** 2026-08-21  

---

## Descripción

Este repositorio es el resultado de la práctica **"Repo Auditable"**, cuyo objetivo fue auditar y corregir un repositorio con problemas de versionado, trazabilidad y seguridad, dejando evidencia de todos los cambios realizados.

### Objetivo de la Práctica

Aplicar el registro de estados de configuración y la gestión de versiones en un repositorio Git, mediante:
- Creación de un proyecto auditable
- Detección y corrección de inconsistencias de versionado
- Generación de evidencia (tags/releases, commits trazables, changelog y estados)
- Asegurar integridad, control de cambios y trazabilidad del producto

---

## 📁 Estructura del Proyecto
GCS_Semana5_A4_ManzanillasAllan/
├── .github/
│ └── ISSUE_TEMPLATE/
│ └── solicitud_cambio.md
├── basededatos/
│ └── migrations/
│ └── 001_add_lote_caducidad.sql
├── config/
│ ├── .env (ignorado por .gitignore)
│ └── .env.example
├── docs/
│ ├── 01-requisitos/
│ │ └── HU-022-Lote-Caducidad.md
│ ├── 02-diseno/
│ │ └── diseno-tecnico.md
│ ├── 03-manual-usuario/
│ │ └── manual-inventario.md
│ ├── CM/
│ │ └── CM_STATUS_REGISTER.md
│ └── requisitos/
│ └── HU-022-Lote-Caducidad.md
├── src/
│ ├── backend/
│ │ ├── models/
│ │ │ └── Product.js
│ │ └── services/
│ │ └── reportGenerator.js
│ └── frontend/
│ └── views/
│ └── inventory/
│ └── form.html
├── tests/
│ ├── integration/
│ │ └── api.test.js
│ ├── regression/
│ │ └── reports.test.js
│ └── unit/
│ └── product.test.js
├── .gitignore
├── CHANGELOG.md
├── package.json
└── README.md

---

## 🏷️ Versionado (SemVer)

| Tag | Descripción | SemVer |
|-----|-------------|--------|
| **v1.0.0** | Baseline del proyecto: estructura inicial, requisitos y pruebas base | ✅ MAJOR.MINOR.PATCH |
| **v1.1.0** | Auditoría completa: corrección de versionado, seguridad y documentación | ✅ MAJOR.MINOR.PATCH |

### Tags Finales
```bash
$ git tag
v1.0.0
v1.1.0
