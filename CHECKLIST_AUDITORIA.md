# Checklist de Auditoría para Pull Requests

## Integridad del Cambio
- [ ] Los cambios son consistentes y completos
- [ ] No hay archivos sueltos o temporales
- [ ] No hay secretos o credenciales expuestas
- [ ] .env.example está actualizado si hay cambios de configuración

## Trazabilidad
- [ ] El PR referencia un issue (#XX)
- [ ] Todos los commits referencian el issue
- [ ] Los mensajes de commit siguen la convención establecida

## Calidad
- [ ] El código está probado (unitarias/integración)
- [ ] La documentación está actualizada
- [ ] No hay conflictos con main

## Revisión
- [ ] El PR ha sido revisado por al menos 1 compañero
- [ ] Los comentarios de revisión han sido atendidos
- [ ] El checklist de auditoría está completado

## Estado
- [ ] Cambios aprobados
- [ ] Merge a main completado
- [ ] Tag y release creados

## Reglas de Protección (Branch Protection)
- [ ] main protegida
- [ ] PR obligatorio para merges
- [ ] Al menos 1 aprobación requerida
- [ ] Status checks pasando (si aplica)

---
**Versión:** 1.0
**Fecha:** 2026-08-24
**Responsable:** Allan Manzanillas
