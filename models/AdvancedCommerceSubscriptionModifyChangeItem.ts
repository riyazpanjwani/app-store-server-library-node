// Copyright (c) 2025 Apple Inc. Licensed under MIT License.

import { Validator } from './Validator';
import { AdvancedCommercePeriod } from './AdvancedCommercePeriod';
import { AdvancedCommercePeriodValidator } from './AdvancedCommercePeriod';
import { AdvancedCommerceEffective } from './AdvancedCommerceEffective';
import { AdvancedCommerceEffectiveValidator } from './AdvancedCommerceEffective';
import { AdvancedCommerceReason } from './AdvancedCommerceReason';
import { AdvancedCommerceReasonValidator } from './AdvancedCommerceReason';

/**
 * An item for changing subscription items in Advanced Commerce.
 * 
 * @see {@link https://developer.apple.com/documentation/appstoreserverapi/advanced_commerce_subscription_modify_change_item | Advanced Commerce Subscription Modify Change Item}
 */
export interface AdvancedCommerceSubscriptionModifyChangeItem {
    /**
     * The product identifier for the subscription item to change.
     */
    sku?: string;

    /**
     * A description of the subscription item to change.
     */
    description?: string;

    /**
     * The display name for the subscription item to change.
     */
    displayName?: string;

    /**
     * The new product identifier for the subscription item.
     */
    newSku?: string;

    /**
     * The new price for the subscription item.
     */
    newPrice?: number;

    /**
     * The new billing period for the subscription item.
     */
    newPeriod?: AdvancedCommercePeriod;

    /**
     * When the change takes effect.
     */
    effective?: AdvancedCommerceEffective;

    /**
     * The reason for the subscription item change.
     */
    reason?: AdvancedCommerceReason;
}

/**
 * Validator for AdvancedCommerceSubscriptionModifyChangeItem objects.
 */
export class AdvancedCommerceSubscriptionModifyChangeItemValidator implements Validator<AdvancedCommerceSubscriptionModifyChangeItem> {
    static readonly newPeriodValidator = new AdvancedCommercePeriodValidator();
    static readonly effectiveValidator = new AdvancedCommerceEffectiveValidator();
    static readonly reasonValidator = new AdvancedCommerceReasonValidator();

    validate(obj: any): obj is AdvancedCommerceSubscriptionModifyChangeItem {
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

        if (obj.newSku !== undefined && typeof obj.newSku !== 'string') {
            return false;
        }

        // Validate number properties
        if (obj.newPrice !== undefined && typeof obj.newPrice !== 'number') {
            return false;
        }

        // Validate enum properties
        if (obj.newPeriod !== undefined && !AdvancedCommerceSubscriptionModifyChangeItemValidator.newPeriodValidator.validate(obj.newPeriod)) {
            return false;
        }

        if (obj.effective !== undefined && !AdvancedCommerceSubscriptionModifyChangeItemValidator.effectiveValidator.validate(obj.effective)) {
            return false;
        }

        if (obj.reason !== undefined && !AdvancedCommerceSubscriptionModifyChangeItemValidator.reasonValidator.validate(obj.reason)) {
            return false;
        }

        return true;
    }
}