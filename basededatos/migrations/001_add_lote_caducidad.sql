-- Migración para CR-004
ALTER TABLE productos 
ADD COLUMN lote VARCHAR(20),
ADD COLUMN fecha_caducidad DATE,
ADD COLUMN is_perecedero BOOLEAN DEFAULT FALSE;

-- Actualizar productos existentes con valores por defecto
UPDATE productos SET lote = 'S/N' WHERE lote IS NULL;
UPDATE productos SET fecha_caducidad = '2026-12-31' WHERE fecha_caducidad IS NULL;
