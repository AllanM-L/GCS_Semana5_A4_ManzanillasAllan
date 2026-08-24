# Changelog

## [v1.1.0] - 2026-08-21

### Added
- Implementación de lote y fecha de caducidad (CR-004)
- Registro de estados en CM_STATUS_REGISTER.md
- Archivo .env.example para configuración segura
- .gitignore para prevenir versionado de secretos

### Fixed
- Corregidos tags a formato SemVer (v1.0.0, v1.1.0)
- Corregidos mensajes de commit con referencia ISSUE-01
- Eliminados tags incorrectos (v1.0, release-1.1)

### Security
- Añadido .gitignore para evitar versionar secretos
- Configuración sensible ahora usa .env.example

## [v1.0.0] - 2026-08-21

### Added
- Baseline: estructura inicial del proyecto
- Requisitos HU-022 (Lote y Caducidad)
- Pruebas unitarias y de integración iniciales
- Documentación técnica y de usuario
- Estructura de carpetas profesional

### Changed
- README con información del proyecto
- Organización de documentos en carpetas

### Dependencies
- Configuración inicial de Node.js

## [v1.2.0] - 2026-08-24

### Added
- Auditoría física de configuración (#3)
- Auditoría funcional de requisitos HU-022 (#4)
- Documentación de trazabilidad (#5)
- Plantilla de pull request (#5)
- Checklist de integridad (#7)
- Informes de auditoría en docs/

### Changed
- README.md actualizado con información de auditoría
- Estructura de documentación mejorada

### Security
- Controles de integridad establecidos
- Checklist de auditoría para PRs
