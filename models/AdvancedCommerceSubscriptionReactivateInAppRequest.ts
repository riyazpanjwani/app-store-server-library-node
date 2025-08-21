// Copyright (c) 2025 Apple Inc. Licensed under MIT License.

import { AdvancedCommerceInAppRequest } from "./AdvancedCommerceInAppRequest";
import { AdvancedCommerceRequest } from "./AdvancedCommerceRequest";
import { AdvancedCommerceRequestInfo, AdvancedCommerceRequestInfoValidator } from "./AdvancedCommerceRequestInfo";
import { AdvancedCommerceSubscriptionReactivateItem, AdvancedCommerceSubscriptionReactivateItemValidator } from "./AdvancedCommerceSubscriptionReactivateItem";
import { Validator } from "./Validator";

/**
 * The request data your app provides when reactivating a cancelled subscription.
 *
 * @see {@link https://developer.apple.com/documentation/advancedcommerceapi/subscriptionreactivateinapprequest | SubscriptionReactivateInAppRequest}
 */
export interface AdvancedCommerceSubscriptionReactivateInAppRequest extends AdvancedCommerceRequest, AdvancedCommerceInAppRequest {
    /**
     * The operation type for this request.
     */
    readonly operation: string;

    /**
     * The version of the request format.
     */
    readonly version: string;

    /**
     * The details of the subscription product for reactivation.
     *
     * @see {@link https://developer.apple.com/documentation/advancedcommerceapi/subscriptionreactivateitem | SubscriptionReactivateItem}
     */
    item?: AdvancedCommerceSubscriptionReactivateItem;
}

/**
 * A validator for AdvancedCommerceSubscriptionReactivateInAppRequest
 */
export class AdvancedCommerceSubscriptionReactivateInAppRequestValidator implements Validator<AdvancedCommerceSubscriptionReactivateInAppRequest> {
    static readonly requestInfoValidator = new AdvancedCommerceRequestInfoValidator();
    static readonly itemValidator = new AdvancedCommerceSubscriptionReactivateItemValidator();
    
    static readonly OPERATION = "SUBSCRIPTION_REACTIVATE";
    static readonly VERSION = "1.0";

    validate(obj: any): obj is AdvancedCommerceSubscriptionReactivateInAppRequest {
        if (obj === undefined || obj === null) {
            return false;
        }

        // Validate inherited properties from AdvancedCommerceRequest
        if (obj.requestInfo !== undefined && !AdvancedCommerceSubscriptionReactivateInAppRequestValidator.requestInfoValidator.validate(obj.requestInfo)) {
            return false;
        }

        // Validate required operation and version constants
        if (obj.operation !== AdvancedCommerceSubscriptionReactivateInAppRequestValidator.OPERATION) {
            return false;
        }

        if (obj.version !== AdvancedCommerceSubscriptionReactivateInAppRequestValidator.VERSION) {
            return false;
        }

        if (obj.item !== undefined && !AdvancedCommerceSubscriptionReactivateInAppRequestValidator.itemValidator.validate(obj.item)) {
            return false;
        }

        return true;
    }
}