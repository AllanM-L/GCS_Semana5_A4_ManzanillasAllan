# GCS_Semana6_ManzanillasAllan

## Práctica "Repo Auditable" — Arreglar versionado + registrar estados

**Asignatura:** Gestión de Configuración de Software  
**Semana:** 6   
**Autor:** Allan Manzanillas  
**Fecha:** 2026-08-24  

---

## Descripción

Tarea 6: Ejercicio práctico - Auditoría de configuración + Release controlado

## Estructura del Proyecto
GCS_Semana5_A4_ManzanillasAllan/
├── .github/ISSUE_TEMPLATE/solicitud_cambio.md
├── basededatos/migrations/001_add_lote_caducidad.sql
├── config/
│ ├── .env (ignorado por .gitignore)
│ └── .env.example
├── docs/
│ ├── 01-requisitos/HU-022-Lote-Caducidad.md
│ ├── 02-diseno/diseno-tecnico.md
│ ├── 03-manual-usuario/manual-inventario.md
│ ├── CM/CM_STATUS_REGISTER.md
│ └── requisitos/HU-022-Lote-Caducidad.md
├── src/
│ ├── backend/models/Product.js
│ ├── backend/services/reportGenerator.js
│ └── frontend/views/inventory/form.html
├── tests/
│ ├── integration/api.test.js
│ ├── regression/reports.test.js
│ └── unit/product.test.js
├── .gitignore
├── CHANGELOG.md
├── package.json
└── README.md


---

## Versionado (SemVer)

| Tag | Descripción | SemVer |
|-----|-------------|--------|
| v1.0.0 | Baseline del proyecto: estructura inicial, requisitos y pruebas base | ✅ |
| v1.1.0 | Auditoría y corrección de versionado (SemVer, seguridad, documentación) | ✅ |
| v1.2.0 | Auditoría de configuración + Release controlado (5 roles documentados) | ✅ |

**Tags Finales:** v1.0.0, v1.1.0, v1.2.0

---

## Registro de Estados (CM_STATUS_REGISTER)

| EC-ID | Elemento de Configuración | Tipo | Versión/Ref | Estado | Responsable | Evidencia |
|------:|---------------------------|------|-------------|--------|------------|-----------|
| EC-01 | docs/requisitos/HU-022-Lote-Caducidad.md | Doc | v1.0.0 | Baselined | Analista | commit + tag v1.0.0 |
| EC-02 | src/backend/models/Product.js | Code | commit SHA | Integrado | Dev | PR/commit |
| EC-03 | tests/unit/product.test.js | Test | commit SHA | Verificado | QA | resultado |
| EC-04 | CHANGELOG.md | Doc | v1.1.0 | Aprobado | PM | commit + release notes |
| EC-05 | .gitignore | Config | commit SHA | Aprobado | DevOps | commit |
| EC-06 | config/.env.example | Config | commit SHA | Integrado | DevOps | commit |
| EC-07 | .github/ISSUE_TEMPLATE/solicitud_cambio.md | Process | commit SHA | Aprobado | Líder | commit |
| EC-08 | README.md | Doc | v1.0.0 | Baselined | Equipo | tag + release |

---

## Hallazgos y Correcciones

| # | Problema | Gravedad | Corrección |
|---|----------|----------|------------|
| 1 | Tag v1.0 no cumple SemVer | Alta | Creado v1.0.0 |
| 2 | Tag release-1.1 mezcla formatos | Media | Creado v1.1.0 |
| 3 | Commit sin ISSUE | Media | Añadido (ISSUE-01) |
| 4 | Commit sin ISSUE | Media | Añadido (ISSUE-01) |
| 5 | Commit no técnico | Alta | Corregido con rebase |
| 6 | Falta .gitignore | Alta | Creado .gitignore |
| 7 | Falta .env.example | Media | Creado .env.example |
| 8 | Falta CM_STATUS_REGISTER | Media | Creado con 8 ECs |
| 9 | CHANGELOG no actualizado | Media | Actualizado |

---

## Correcciones Realizadas

1. **Versionado (SemVer):** Eliminados tags incorrectos (v1.0, release-1.1) y creados tags correctos (v1.0.0, v1.1.0, v1.2.0).

2. **Trazabilidad:** Corregidos mensajes de commit con rebase para incluir ISSUE-01.

3. **Seguridad:** Creado .gitignore para prevenir secretos y config/.env.example como plantilla.

4. **Documentación:** Creado CM_STATUS_REGISTER.md con 8 ECs, actualizado CHANGELOG.md y README.md.

---

## Enlaces de Interés

- Issues: #1, #3, #4, #5, #6, #7
- Pull Requests: #2, #8, #9, #10, #11, #12
- Releases: v1.0.0, v1.1.0, v1.2.0

---

## Autor

**Allan Manzanillas**  
GitHub: https://github.com/AllanM-L

---

## Historial de Cambios

| Fecha | Versión | Cambio |
|-------|---------|--------|
| 2026-08-21 | v1.0.0 | Baseline del proyecto |
| 2026-08-21 | v1.1.0 | Auditoría y corrección de versionado |
| 2026-08-24 | v1.2.0 | Auditoría de configuración + Release controlado |
