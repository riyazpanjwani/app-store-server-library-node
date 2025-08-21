// Copyright (c) 2025 Apple Inc. Licensed under MIT License.

import { AdvancedCommerceInAppRequest } from "./AdvancedCommerceInAppRequest";
import { AdvancedCommerceRequest } from "./AdvancedCommerceRequest";
import { AdvancedCommerceRequestInfo, AdvancedCommerceRequestInfoValidator } from "./AdvancedCommerceRequestInfo";
import { AdvancedCommerceSubscriptionChangeMetadataDescriptors, AdvancedCommerceSubscriptionChangeMetadataDescriptorsValidator } from "./AdvancedCommerceSubscriptionChangeMetadataDescriptors";
import { Validator } from "./Validator";

/**
 * The request data your app provides when changing subscription metadata.
 *
 * @see {@link https://developer.apple.com/documentation/advancedcommerceapi/subscriptionchangemetadatarequest | SubscriptionChangeMetadataRequest}
 */
export interface AdvancedCommerceSubscriptionChangeMetadataRequest extends AdvancedCommerceRequest, AdvancedCommerceInAppRequest {
    /**
     * The operation type for this request.
     */
    operation?: string;

    /**
     * The version of the request format.
     */
    version?: string;

    /**
     * The descriptors for the subscription metadata change.
     *
     * @see {@link https://developer.apple.com/documentation/advancedcommerceapi/subscriptionchangemetadatadescriptors | SubscriptionChangeMetadataDescriptors}
     */
    descriptors?: AdvancedCommerceSubscriptionChangeMetadataDescriptors;
}

/**
 * A validator for AdvancedCommerceSubscriptionChangeMetadataRequest
 */
export class AdvancedCommerceSubscriptionChangeMetadataRequestValidator implements Validator<AdvancedCommerceSubscriptionChangeMetadataRequest> {
    static readonly requestInfoValidator = new AdvancedCommerceRequestInfoValidator();
    static readonly descriptorsValidator = new AdvancedCommerceSubscriptionChangeMetadataDescriptorsValidator();

    validate(obj: any): obj is AdvancedCommerceSubscriptionChangeMetadataRequest {
        if (obj === undefined || obj === null) {
            return false;
        }

        // Validate inherited properties from AdvancedCommerceRequest
        if (obj.requestInfo !== undefined && !AdvancedCommerceSubscriptionChangeMetadataRequestValidator.requestInfoValidator.validate(obj.requestInfo)) {
            return false;
        }

        // All properties are optional, but if present they should be of correct type
        if (obj.operation !== undefined && typeof obj.operation !== 'string') {
            return false;
        }

        if (obj.version !== undefined && typeof obj.version !== 'string') {
            return false;
        }

        if (obj.descriptors !== undefined && !AdvancedCommerceSubscriptionChangeMetadataRequestValidator.descriptorsValidator.validate(obj.descriptors)) {
            return false;
        }

        return true;
    }
}