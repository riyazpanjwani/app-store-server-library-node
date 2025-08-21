// Copyright (c) 2025 Apple Inc. Licensed under MIT License.

import { Validator } from './Validator';
import { AdvancedCommercePeriod } from './AdvancedCommercePeriod';
import { AdvancedCommercePeriodValidator } from './AdvancedCommercePeriod';
import { AdvancedCommerceEffective } from './AdvancedCommerceEffective';
import { AdvancedCommerceEffectiveValidator } from './AdvancedCommerceEffective';

/**
 * An item for migrating subscription renewal items in Advanced Commerce.
 * 
 * @see {@link https://developer.apple.com/documentation/appstoreserverapi/advanced_commerce_subscription_migrate_renewal_item | Advanced Commerce Subscription Migrate Renewal Item}
 */
export interface AdvancedCommerceSubscriptionMigrateRenewalItem {
    /**
     * The product identifier for the subscription renewal item.
     */
    sku?: string;

    /**
     * A description of the subscription renewal item.
     */
    description?: string;

    /**
     * The display name for the subscription renewal item.
     */
    displayName?: string;

    /**
     * The billing period for the subscription renewal item.
     */
    period?: AdvancedCommercePeriod;

    /**
     * When the migration takes effect.
     */
    effective?: AdvancedCommerceEffective;

    /**
     * The renewal date for the subscription item.
     */
    renewalDate?: string;
}

/**
 * Validator for AdvancedCommerceSubscriptionMigrateRenewalItem objects.
 */
export class AdvancedCommerceSubscriptionMigrateRenewalItemValidator implements Validator<AdvancedCommerceSubscriptionMigrateRenewalItem> {
    static readonly periodValidator = new AdvancedCommercePeriodValidator();
    static readonly effectiveValidator = new AdvancedCommerceEffectiveValidator();

    validate(obj: any): obj is AdvancedCommerceSubscriptionMigrateRenewalItem {
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

        if (obj.renewalDate !== undefined && typeof obj.renewalDate !== 'string') {
            return false;
        }

        // Validate enum properties
        if (obj.period !== undefined && !AdvancedCommerceSubscriptionMigrateRenewalItemValidator.periodValidator.validate(obj.period)) {
            return false;
        }

        if (obj.effective !== undefined && !AdvancedCommerceSubscriptionMigrateRenewalItemValidator.effectiveValidator.validate(obj.effective)) {
            return false;
        }

        return true;
    }
}