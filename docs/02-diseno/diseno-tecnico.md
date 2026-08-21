# Diseño Técnico - CR-004

## Cambios en Base de Datos
```sql
ALTER TABLE productos 
ADD COLUMN lote VARCHAR(20),
ADD COLUMN fecha_caducidad DATE,
ADD COLUMN is_perecedero BOOLEAN DEFAULT FALSE;