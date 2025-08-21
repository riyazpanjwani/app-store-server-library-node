// Copyright (c) 2025 Apple Inc. Licensed under MIT License.

import { Validator } from './Validator';
import { AdvancedCommercePeriod } from './AdvancedCommercePeriod';
import { AdvancedCommercePeriodValidator } from './AdvancedCommercePeriod';

/**
 * An item for migrating subscription items in Advanced Commerce.
 * 
 * @see {@link https://developer.apple.com/documentation/appstoreserverapi/advanced_commerce_subscription_migrate_item | Advanced Commerce Subscription Migrate Item}
 */
export interface AdvancedCommerceSubscriptionMigrateItem {
    /**
     * The product identifier for the subscription item.
     */
    sku?: string;

    /**
     * A description of the subscription item.
     */
    description?: string;

    /**
     * The display name for the subscription item.
     */
    displayName?: string;

    /**
     * The price of the subscription item.
     */
    price?: number;

    /**
     * The billing period for the subscription item.
     */
    period?: AdvancedCommercePeriod;

    /**
     * The currency code for the subscription item price.
     */
    currency?: string;

    /**
     * The original transaction identifier for the subscription item.
     */
    originalTransactionId?: string;
}

/**
 * Validator for AdvancedCommerceSubscriptionMigrateItem objects.
 */
export class AdvancedCommerceSubscriptionMigrateItemValidator implements Validator<AdvancedCommerceSubscriptionMigrateItem> {
    static readonly periodValidator = new AdvancedCommercePeriodValidator();

    validate(obj: any): obj is AdvancedCommerceSubscriptionMigrateItem {
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

        if (obj.originalTransactionId !== undefined && typeof obj.originalTransactionId !== 'string') {
            return false;
        }

        // Validate number properties
        if (obj.price !== undefined && typeof obj.price !== 'number') {
            return false;
        }

        // Validate enum properties
        if (obj.period !== undefined && !AdvancedCommerceSubscriptionMigrateItemValidator.periodValidator.validate(obj.period)) {
            return false;
        }

        return true;
    }
}