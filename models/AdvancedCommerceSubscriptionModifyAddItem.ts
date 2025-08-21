// Copyright (c) 2025 Apple Inc. Licensed under MIT License.

import { Validator } from './Validator';
import { AdvancedCommercePeriod } from './AdvancedCommercePeriod';
import { AdvancedCommercePeriodValidator } from './AdvancedCommercePeriod';
import { AdvancedCommerceEffective } from './AdvancedCommerceEffective';
import { AdvancedCommerceEffectiveValidator } from './AdvancedCommerceEffective';

/**
 * An item for adding items to subscriptions in Advanced Commerce.
 * 
 * @see {@link https://developer.apple.com/documentation/appstoreserverapi/advanced_commerce_subscription_modify_add_item | Advanced Commerce Subscription Modify Add Item}
 */
export interface AdvancedCommerceSubscriptionModifyAddItem {
    /**
     * The product identifier for the subscription item to add.
     */
    sku?: string;

    /**
     * A description of the subscription item to add.
     */
    description?: string;

    /**
     * The display name for the subscription item to add.
     */
    displayName?: string;

    /**
     * The price of the subscription item to add.
     */
    price?: number;

    /**
     * The billing period for the subscription item to add.
     */
    period?: AdvancedCommercePeriod;

    /**
     * The currency code for the subscription item price.
     */
    currency?: string;

    /**
     * When the addition takes effect.
     */
    effective?: AdvancedCommerceEffective;
}

/**
 * Validator for AdvancedCommerceSubscriptionModifyAddItem objects.
 */
export class AdvancedCommerceSubscriptionModifyAddItemValidator implements Validator<AdvancedCommerceSubscriptionModifyAddItem> {
    static readonly periodValidator = new AdvancedCommercePeriodValidator();
    static readonly effectiveValidator = new AdvancedCommerceEffectiveValidator();

    validate(obj: any): obj is AdvancedCommerceSubscriptionModifyAddItem {
        if (obj === undefined || obj === null) {
            return false;
        }

        // Validate string properties
        if (obj.sku !== undefined && typeof obj.sku !== 'string') {
            return false;
        }

        if (obj.description !== undefined && typeof obj.description !== 'string') {
            return false;
        }

        if (obj.displayName !== undefined && typeof obj.displayName !== 'string') {
            return false;
        }

        if (obj.currency !== undefined && typeof obj.currency !== 'string') {
            return false;
        }

        // Validate number properties
        if (obj.price !== undefined && typeof obj.price !== 'number') {
            return false;
        }

        // Validate enum properties
        if (obj.period !== undefined && !AdvancedCommerceSubscriptionModifyAddItemValidator.periodValidator.validate(obj.period)) {
            return false;
        }

        if (obj.effective !== undefined && !AdvancedCommerceSubscriptionModifyAddItemValidator.effectiveValidator.validate(obj.effective)) {
            return false;
        }

        return true;
    }
}