import Medusa from "@medusajs/medusa-js";

export class MedusaApi {
    constructor() {
        this.medusa = new Medusa({
            maxRetries: 0,
            baseUrl: 'http://localhost:9000/',
        });
    }
    async getProducts() {
        const data = (await this.medusa.products.list()).products;
        return data;
    }


    async getProductByHandle(handle) {
        return ((await this.medusa.products.list({ handle: handle })).products[0]);
    }


    async getCategories() {
        return (await this.medusa.collections.list()).collections;
    }

    async getCart(cartId) {
        const cart = await this.medusa.carts.retrieve(cartId);
        return cart;
    }

    async createCart() {
        const response = await this.medusa.carts.create();
        return response.cart.id;
    }

    async addItemToCart(cartId, variantId, quantity) {
        await this.medusa.carts.lineItems.create(cartId, {
            variant_id: variantId,
            quantity: quantity
        })
    }
    async removeItemFromCart(cartId, lineId) {
        await this.medusa.carts.lineItems.delete(cartId, lineId)
    }

    async getCartItems(cartId) { 
        const data = (await this.medusa.carts.retrieve(cartId)).cart.items;
        return data;
    }

    async cartProccess() {
        try {
            let id;
            id = (await this.medusa.carts.create()).cart.id;
            await this.medusa.carts.lineItems.create(id, {
                variant_id: 'variant_01H00ANWTT7WDHYKCEAE2981N9',
                quantity: 1,
            });
            await this.medusa.carts.createPaymentSessions(id);
            await this.medusa.carts.setPaymentSession(id, {
                provider_id: 'manual'
            });
            await this.medusa.carts.complete(id);
            console.log((await this.medusa.carts.retrieve(id)).cart);
        } catch (error) {
            console.log(error)
        }
    }
}

export const medusaApi = new MedusaApi();