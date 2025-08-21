// Copyright (c) 2025 Apple Inc. Licensed under MIT License.

import { AdvancedCommercePeriod, AdvancedCommercePeriodValidator } from "./AdvancedCommercePeriod";
import { Validator } from "./Validator";

/**
 * The details of a subscription creation item, including its display name, price, SKU, period, and currency.
 *
 * @see {@link https://developer.apple.com/documentation/advancedcommerceapi/subscriptioncreateitem | SubscriptionCreateItem}
 */
export interface AdvancedCommerceSubscriptionCreateItem {
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
     * The price, in milliunits of the currency, of the subscription product.
     *
     * @see {@link https://developer.apple.com/documentation/advancedcommerceapi/price | price}
     */
    price?: number;

    /**
     * The duration of a single cycle of an auto-renewable subscription.
     *
     * @see {@link https://developer.apple.com/documentation/advancedcommerceapi/period | period}
     */
    period?: AdvancedCommercePeriod;

    /**
     * The three-letter ISO 4217 currency code for the price of the subscription.
     *
     * @see {@link https://developer.apple.com/documentation/advancedcommerceapi/currency | currency}
     */
    currency?: string;
}

/**
 * A validator for AdvancedCommerceSubscriptionCreateItem
 */
export class AdvancedCommerceSubscriptionCreateItemValidator implements Validator<AdvancedCommerceSubscriptionCreateItem> {
    static readonly periodValidator = new AdvancedCommercePeriodValidator();

    validate(obj: any): obj is AdvancedCommerceSubscriptionCreateItem {
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

        if (obj.period !== undefined && !AdvancedCommerceSubscriptionCreateItemValidator.periodValidator.validate(obj.period)) {
            return false;
        }

        if (obj.currency !== undefined && typeof obj.currency !== 'string') {
            return false;
        }

        return true;
    }
}