# Trazabilidad de Cambios

## Convención de Commits
- Formato: `tipo: descripción (#issue)`
- Tipos: feat, fix, docs, chore, test, refactor

## Tabla de Trazabilidad

| Issue | PR | Commit(s) | Release | Evidencia |
|-------|----|-----------|---------|-----------|
| #3 | PR #8 | abc123, def456 | v1.2.0 | docs/AUDITORIA_FISICA.md |
| #4 | PR #9 | ghi789, jkl012 | v1.2.0 | docs/AUDITORIA_FUNCIONAL.md |
| #5 | PR #10 | mno345 | v1.2.0 | docs/TRAZABILIDAD.md |
| #6 | PR #11 | pqr678 | v1.2.0 | Release Notes |
| #7 | PR #12 | stu901 | v1.2.0 | docs/CHECKLIST_AUDITORIA.md |

## Referencias Cruzadas
- Todos los commits referencian su issue correspondiente
- Todos los PRs están vinculados a un issue
- El release v1.2.0 incluye todos los cambios
