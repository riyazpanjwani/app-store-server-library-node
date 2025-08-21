// Copyright (c) 2025 Apple Inc. Licensed under MIT License.

import { Validator } from "./Validator";

/**
 * The details of a one-time charge product, including its display name, price, SKU, and metadata.
 *
 * @see {@link https://developer.apple.com/documentation/advancedcommerceapi/onetimechargeitem | OneTimeChargeItem}
 */
export interface AdvancedCommerceOneTimeChargeItem {
    /**
     * The product identifier of an in-app purchase product you manage in your own system.
     *
     * @see {@link https://developer.apple.com/documentation/appstoreserverapi/sku | SKU}
     */
    sku?: string;

    /**
     * A string you provide that describes a SKU.
     *
     * @see {@link https://developer.apple.com/documentation/appstoreserverapi/description | Description}
     */
    description?: string;

    /**
     * A string with a product name that you can localize and is suitable for display to customers.
     *
     * @see {@link https://developer.apple.com/documentation/appstoreserverapi/displayname | DisplayName}
     */
    displayName?: string;

    /**
     * The price, in milliunits of the currency, of the one-time charge product.
     *
     * @see {@link https://developer.apple.com/documentation/advancedcommerceapi/price | price}
     */
    price?: number;
}

/**
 * A validator for AdvancedCommerceOneTimeChargeItem
 */
export class AdvancedCommerceOneTimeChargeItemValidator implements Validator<AdvancedCommerceOneTimeChargeItem> {
    validate(obj: any): obj is AdvancedCommerceOneTimeChargeItem {
        if (obj === undefined || obj === null) {
            return false;
        }

        // All properties are optional, but if present they should be of correct type
        if (obj.sku !== undefined && typeof obj.sku !== 'string') {
            return false;
        }

        if (obj.description !== undefined && typeof obj.description !== 'string') {
            return false;
        }

        if (obj.displayName !== undefined && typeof obj.displayName !== 'string') {
            return false;
        }

        if (obj.price !== undefined && typeof obj.price !== 'number') {
            return false;
        }

        return true;
    }
}