// Copyright (c) 2025 Apple Inc. Licensed under MIT License.

import { Validator } from './Validator';
import { AdvancedCommerceDescriptors } from './AdvancedCommerceDescriptors';
import { AdvancedCommerceDescriptorsValidator } from './AdvancedCommerceDescriptors';
import { AdvancedCommerceEffective } from './AdvancedCommerceEffective';
import { AdvancedCommerceEffectiveValidator } from './AdvancedCommerceEffective';

/**
 * An item for modifying subscription descriptors in Advanced Commerce.
 * 
 * @see {@link https://developer.apple.com/documentation/appstoreserverapi/advanced_commerce_subscription_modify_descriptors | Advanced Commerce Subscription Modify Descriptors}
 */
export interface AdvancedCommerceSubscriptionModifyDescriptors {
    /**
     * The descriptors containing metadata for the subscription.
     */
    descriptors?: AdvancedCommerceDescriptors;

    /**
     * When the descriptor modification takes effect.
     */
    effective?: AdvancedCommerceEffective;
}

/**
 * Validator for AdvancedCommerceSubscriptionModifyDescriptors objects.
 */
export class AdvancedCommerceSubscriptionModifyDescriptorsValidator implements Validator<AdvancedCommerceSubscriptionModifyDescriptors> {
    static readonly descriptorsValidator = new AdvancedCommerceDescriptorsValidator();
    static readonly effectiveValidator = new AdvancedCommerceEffectiveValidator();

    validate(obj: any): obj is AdvancedCommerceSubscriptionModifyDescriptors {
        if (obj === undefined || obj === null) {
            return false;
        }

        // Validate object properties
        if (obj.descriptors !== undefined && !AdvancedCommerceSubscriptionModifyDescriptorsValidator.descriptorsValidator.validate(obj.descriptors)) {
            return false;
        }

        // Validate enum properties
        if (obj.effective !== undefined && !AdvancedCommerceSubscriptionModifyDescriptorsValidator.effectiveValidator.validate(obj.effective)) {
            return false;
        }

        return true;
    }
}