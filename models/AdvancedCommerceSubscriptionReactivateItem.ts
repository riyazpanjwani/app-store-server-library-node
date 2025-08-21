// Copyright (c) 2025 Apple Inc. Licensed under MIT License.

import { AdvancedCommerceEffective, AdvancedCommerceEffectiveValidator } from "./AdvancedCommerceEffective";
import { Validator } from "./Validator";

/**
 * The details of a subscription reactivation item, including its display name, SKU, and when the reactivation takes effect.
 *
 * @see {@link https://developer.apple.com/documentation/advancedcommerceapi/subscriptionreactivateitem | SubscriptionReactivateItem}
 */
export interface AdvancedCommerceSubscriptionReactivateItem {
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
     * A string value that indicates when a requested change to an auto-renewable subscription goes into effect.
     *
     * @see {@link https://developer.apple.com/documentation/advancedcommerceapi/effective | effective}
     */
    effective?: AdvancedCommerceEffective;
}

/**
 * A validator for AdvancedCommerceSubscriptionReactivateItem
 */
export class AdvancedCommerceSubscriptionReactivateItemValidator implements Validator<AdvancedCommerceSubscriptionReactivateItem> {
    static readonly effectiveValidator = new AdvancedCommerceEffectiveValidator();

    validate(obj: any): obj is AdvancedCommerceSubscriptionReactivateItem {
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

        if (obj.effective !== undefined && !AdvancedCommerceSubscriptionReactivateItemValidator.effectiveValidator.validate(obj.effective)) {
            return false;
        }

        return true;
    }
}