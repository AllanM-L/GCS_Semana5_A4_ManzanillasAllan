// Modelo de Producto - Actualizado para CR-004
class Product {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.sku = data.sku;
        this.price = data.price;
        this.stock = data.stock;
        
        // NUEVOS CAMPOS - CR-004
        this.lote = data.lote || null;
        this.fechaCaducidad = data.fechaCaducidad || null;
        this.isPerecible = data.isPerecible || false;
    }

    validate() {
        if (this.isPerecible) {
            if (!this.lote) {
                throw new Error('El número de lote es obligatorio');
            }
            if (!this.fechaCaducidad) {
                throw new Error('La fecha de caducidad es obligatoria');
            }
        }
        return true;
    }
}

module.exports = Product;
