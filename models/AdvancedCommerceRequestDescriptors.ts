// Copyright (c) 2025 Apple Inc. Licensed under MIT License.

import { AdvancedCommerceDescriptors, AdvancedCommerceDescriptorsValidator } from "./AdvancedCommerceDescriptors";
import { Validator } from "./Validator";

/**
 * The description and display name of the subscription to migrate to that you manage in a request.
 */
export interface AdvancedCommerceRequestDescriptors {
    /**
     * The descriptors for the subscription.
     */
    descriptors?: AdvancedCommerceDescriptors;
}

/**
 * A validator for AdvancedCommerceRequestDescriptors
 */
export class AdvancedCommerceRequestDescriptorsValidator implements Validator<AdvancedCommerceRequestDescriptors> {
    static readonly descriptorsValidator = new AdvancedCommerceDescriptorsValidator();

    validate(obj: any): obj is AdvancedCommerceRequestDescriptors {
        if (obj === undefined || obj === null) {
            return false;
        }

        // All properties are optional
        if (obj.descriptors !== undefined && !AdvancedCommerceRequestDescriptorsValidator.descriptorsValidator.validate(obj.descriptors)) {
            return false;
        }

        return true;
    }
}