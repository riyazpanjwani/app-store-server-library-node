// Copyright (c) 2025 Apple Inc. Licensed under MIT License.

import { Validator } from './Validator';
import { AdvancedCommerceDescriptors } from './AdvancedCommerceDescriptors';
import { AdvancedCommerceDescriptorsValidator } from './AdvancedCommerceDescriptors';

/**
 * An item for changing subscription metadata in Advanced Commerce.
 * 
 * @see {@link https://developer.apple.com/documentation/appstoreserverapi/advanced_commerce_subscription_change_metadata_item | Advanced Commerce Subscription Change Metadata Item}
 */
export interface AdvancedCommerceSubscriptionChangeMetadataItem {
    /**
     * The product identifier for the subscription item to change metadata.
     */
    sku?: string;

    /**
     * The descriptors containing metadata for the subscription item.
     */
    descriptors?: AdvancedCommerceDescriptors;
}

/**
 * Validator for AdvancedCommerceSubscriptionChangeMetadataItem objects.
 */
export class AdvancedCommerceSubscriptionChangeMetadataItemValidator implements Validator<AdvancedCommerceSubscriptionChangeMetadataItem> {
    static readonly descriptorsValidator = new AdvancedCommerceDescriptorsValidator();

    validate(obj: any): obj is AdvancedCommerceSubscriptionChangeMetadataItem {
        if (obj === undefined || obj === null) {
            return false;
        }

        // Validate string properties
        if (obj.sku !== undefined && typeof obj.sku !== 'string') {
            return false;
        }

        // Validate object properties
        if (obj.descriptors !== undefined && !AdvancedCommerceSubscriptionChangeMetadataItemValidator.descriptorsValidator.validate(obj.descriptors)) {
            return false;
        }

        return true;
    }
}