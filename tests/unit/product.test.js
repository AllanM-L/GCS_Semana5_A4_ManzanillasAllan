// Pruebas unitarias para Product - CR-004
const Product = require('../../src/backend/models/Product');

describe('Product Model - CR-004', () => {
    test('debe validar que lote es obligatorio para perecibles', () => {
        const product = new Product({
            name: 'Leche',
            isPerecible: true,
            lote: null
        });
        expect(() => product.validate()).toThrow('El número de lote es obligatorio');
    });

    test('debe aceptar producto perecible con lote válido', () => {
        const product = new Product({
            name: 'Leche',
            isPerecible: true,
            lote: 'L20260811-001',
            fechaCaducidad: '2026-09-11'
        });
        expect(product.validate()).toBe(true);
    });
});
