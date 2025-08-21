// Copyright (c) 2025 Apple Inc. Licensed under MIT License.

import { Validator } from './Validator';
import { AdvancedCommerceEffective } from './AdvancedCommerceEffective';
import { AdvancedCommerceEffectiveValidator } from './AdvancedCommerceEffective';
import { AdvancedCommerceReason } from './AdvancedCommerceReason';
import { AdvancedCommerceReasonValidator } from './AdvancedCommerceReason';

/**
 * An item for removing items from subscriptions in Advanced Commerce.
 * 
 * @see {@link https://developer.apple.com/documentation/appstoreserverapi/advanced_commerce_subscription_modify_remove_item | Advanced Commerce Subscription Modify Remove Item}
 */
export interface AdvancedCommerceSubscriptionModifyRemoveItem {
    /**
     * The product identifier for the subscription item to remove.
     */
    sku?: string;

    /**
     * When the removal takes effect.
     */
    effective?: AdvancedCommerceEffective;

    /**
     * The reason for the subscription item removal.
     */
    reason?: AdvancedCommerceReason;
}

/**
 * Validator for AdvancedCommerceSubscriptionModifyRemoveItem objects.
 */
export class AdvancedCommerceSubscriptionModifyRemoveItemValidator implements Validator<AdvancedCommerceSubscriptionModifyRemoveItem> {
    static readonly effectiveValidator = new AdvancedCommerceEffectiveValidator();
    static readonly reasonValidator = new AdvancedCommerceReasonValidator();

    validate(obj: any): obj is AdvancedCommerceSubscriptionModifyRemoveItem {
        if (obj === undefined || obj === null) {
            return false;
        }

        // Validate string properties
        if (obj.sku !== undefined && typeof obj.sku !== 'string') {
            return false;
        }

        // Validate enum properties
        if (obj.effective !== undefined && !AdvancedCommerceSubscriptionModifyRemoveItemValidator.effectiveValidator.validate(obj.effective)) {
            return false;
        }

        if (obj.reason !== undefined && !AdvancedCommerceSubscriptionModifyRemoveItemValidator.reasonValidator.validate(obj.reason)) {
            return false;
        }

        return true;
    }
}