// Copyright (c) 2025 Apple Inc. Licensed under MIT License.

import { Validator } from "./Validator";

/**
 * The description and display name of the subscription to migrate to that you manage.
 */
export interface AdvancedCommerceDescriptors {
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
}

/**
 * A validator for AdvancedCommerceDescriptors
 */
export class AdvancedCommerceDescriptorsValidator implements Validator<AdvancedCommerceDescriptors> {
    validate(obj: any): obj is AdvancedCommerceDescriptors {
        if (obj === undefined || obj === null) {
            return false;
        }

        // All properties are optional, but if present they should be strings
        if (obj.description !== undefined && typeof obj.description !== 'string') {
            return false;
        }

        if (obj.displayName !== undefined && typeof obj.displayName !== 'string') {
            return false;
        }

        return true;
    }
}