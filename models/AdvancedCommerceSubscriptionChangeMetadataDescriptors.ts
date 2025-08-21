// Copyright (c) 2025 Apple Inc. Licensed under MIT License.

import { AdvancedCommerceDescriptors, AdvancedCommerceDescriptorsValidator } from "./AdvancedCommerceDescriptors";
import { Validator } from "./Validator";

/**
 * The descriptors for a subscription metadata change, including description and display name.
 *
 * @see {@link https://developer.apple.com/documentation/advancedcommerceapi/subscriptionchangemetadatadescriptors | SubscriptionChangeMetadataDescriptors}
 */
export interface AdvancedCommerceSubscriptionChangeMetadataDescriptors {
    /**
     * The description and display name of the subscription to migrate to that you manage.
     *
     * @see {@link https://developer.apple.com/documentation/advancedcommerceapi/descriptors | descriptors}
     */
    descriptors?: AdvancedCommerceDescriptors;
}

/**
 * A validator for AdvancedCommerceSubscriptionChangeMetadataDescriptors
 */
export class AdvancedCommerceSubscriptionChangeMetadataDescriptorsValidator implements Validator<AdvancedCommerceSubscriptionChangeMetadataDescriptors> {
    static readonly descriptorsValidator = new AdvancedCommerceDescriptorsValidator();

    validate(obj: any): obj is AdvancedCommerceSubscriptionChangeMetadataDescriptors {
        if (obj === undefined || obj === null) {
            return false;
        }

        // All properties are optional, but if present they should be of correct type
        if (obj.descriptors !== undefined && !AdvancedCommerceSubscriptionChangeMetadataDescriptorsValidator.descriptorsValidator.validate(obj.descriptors)) {
            return false;
        }

        return true;
    }
}