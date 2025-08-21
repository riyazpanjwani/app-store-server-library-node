// Copyright (c) 2025 Apple Inc. Licensed under MIT License.

import { AdvancedCommerceInAppRequest } from "./AdvancedCommerceInAppRequest";
import { AdvancedCommerceRequest } from "./AdvancedCommerceRequest";
import { AdvancedCommerceRequestInfo, AdvancedCommerceRequestInfoValidator } from "./AdvancedCommerceRequestInfo";
import { AdvancedCommerceEffective, AdvancedCommerceEffectiveValidator } from "./AdvancedCommerceEffective";
import { Validator } from "./Validator";

/**
 * The request data your app provides when cancelling a subscription.
 *
 * @see {@link https://developer.apple.com/documentation/advancedcommerceapi/subscriptioncancelrequest | SubscriptionCancelRequest}
 */
export interface AdvancedCommerceSubscriptionCancelRequest extends AdvancedCommerceRequest, AdvancedCommerceInAppRequest {
    /**
     * The operation type for this request.
     */
    operation?: string;

    /**
     * The version of the request format.
     */
    version?: string;

    /**
     * A string value that indicates when a requested change to an auto-renewable subscription goes into effect.
     *
     * @see {@link https://developer.apple.com/documentation/advancedcommerceapi/effective | effective}
     */
    effective?: AdvancedCommerceEffective;
}

/**
 * A validator for AdvancedCommerceSubscriptionCancelRequest
 */
export class AdvancedCommerceSubscriptionCancelRequestValidator implements Validator<AdvancedCommerceSubscriptionCancelRequest> {
    static readonly requestInfoValidator = new AdvancedCommerceRequestInfoValidator();
    static readonly effectiveValidator = new AdvancedCommerceEffectiveValidator();

    validate(obj: any): obj is AdvancedCommerceSubscriptionCancelRequest {
        if (obj === undefined || obj === null) {
            return false;
        }

        // Validate inherited properties from AdvancedCommerceRequest
        if (obj.requestInfo !== undefined && !AdvancedCommerceSubscriptionCancelRequestValidator.requestInfoValidator.validate(obj.requestInfo)) {
            return false;
        }

        // All properties are optional, but if present they should be of correct type
        if (obj.operation !== undefined && typeof obj.operation !== 'string') {
            return false;
        }

        if (obj.version !== undefined && typeof obj.version !== 'string') {
            return false;
        }

        if (obj.effective !== undefined && !AdvancedCommerceSubscriptionCancelRequestValidator.effectiveValidator.validate(obj.effective)) {
            return false;
        }

        return true;
    }
}