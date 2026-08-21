# CM_STATUS_REGISTER.md
## Registro de Estados de Configuración

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

### Estados Posibles
- **Registrado**: EC identificado y documentado
- **En revisión**: Bajo evaluación por el equipo
- **Aprobado**: Revisión completada y aceptada
- **Baselined**: Versión base definida y congelada
- **En implementación**: Desarrollo en curso
- **Integrado**: Fusionado en rama principal
- **Verificado**: Pruebas completadas exitosamente
- **Liberado**: En producción o disponible para uso
- **Retirado**: Ya no se utiliza

### Cambios Recientes
- **2026-08-21**: Registro inicial con 8 ECs (ISSUE-01)
