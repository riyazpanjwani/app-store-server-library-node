// Copyright (c) 2025 Apple Inc. Licensed under MIT License.

import { Validator } from './Validator';
import { AdvancedCommerceEffective } from './AdvancedCommerceEffective';
import { AdvancedCommerceEffectiveValidator } from './AdvancedCommerceEffective';

/**
 * An item for changing subscription prices in Advanced Commerce.
 * 
 * @see {@link https://developer.apple.com/documentation/appstoreserverapi/advanced_commerce_subscription_price_change_item | Advanced Commerce Subscription Price Change Item}
 */
export interface AdvancedCommerceSubscriptionPriceChangeItem {
    /**
     * The product identifier for the subscription item to change price.
     */
    sku?: string;

    /**
     * The new price for the subscription item.
     */
    newPrice?: number;

    /**
     * The currency code for the new subscription item price.
     */
    currency?: string;

    /**
     * When the price change takes effect.
     */
    effective?: AdvancedCommerceEffective;
}

/**
 * Validator for AdvancedCommerceSubscriptionPriceChangeItem objects.
 */
export class AdvancedCommerceSubscriptionPriceChangeItemValidator implements Validator<AdvancedCommerceSubscriptionPriceChangeItem> {
    static readonly effectiveValidator = new AdvancedCommerceEffectiveValidator();

    validate(obj: any): obj is AdvancedCommerceSubscriptionPriceChangeItem {
        if (obj === undefined || obj === null) {
            return false;
        }

        // Validate string properties
        if (obj.sku !== undefined && typeof obj.sku !== 'string') {
            return false;
        }

        if (obj.currency !== undefined && typeof obj.currency !== 'string') {
            return false;
        }

        // Validate number properties
        if (obj.newPrice !== undefined && typeof obj.newPrice !== 'number') {
            return false;
        }

        // Validate enum properties
        if (obj.effective !== undefined && !AdvancedCommerceSubscriptionPriceChangeItemValidator.effectiveValidator.validate(obj.effective)) {
            return false;
        }

        return true;
    }
}