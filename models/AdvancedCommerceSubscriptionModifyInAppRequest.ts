// Copyright (c) 2025 Apple Inc. Licensed under MIT License.

import { AdvancedCommerceInAppRequest } from "./AdvancedCommerceInAppRequest";
import { AdvancedCommerceRequest } from "./AdvancedCommerceRequest";
import { AdvancedCommerceRequestInfo, AdvancedCommerceRequestInfoValidator } from "./AdvancedCommerceRequestInfo";
import { AdvancedCommerceSubscriptionModifyPeriodChange, AdvancedCommerceSubscriptionModifyPeriodChangeValidator } from "./AdvancedCommerceSubscriptionModifyPeriodChange";
import { Validator } from "./Validator";

/**
 * The request data your app provides when modifying subscription details.
 *
 * @see {@link https://developer.apple.com/documentation/advancedcommerceapi/subscriptionmodifyinapprequest | SubscriptionModifyInAppRequest}
 */
export interface AdvancedCommerceSubscriptionModifyInAppRequest extends AdvancedCommerceRequest, AdvancedCommerceInAppRequest {
    /**
     * The operation type for this request.
     */
    readonly operation: string;

    /**
     * The version of the request format.
     */
    readonly version: string;

    /**
     * An array of modification items that specify the changes to make to the subscription.
     *
     * @see {@link https://developer.apple.com/documentation/advancedcommerceapi/subscriptionmodifyperiodchange | SubscriptionModifyPeriodChange}
     */
    modifications?: AdvancedCommerceSubscriptionModifyPeriodChange[];
}

/**
 * A validator for AdvancedCommerceSubscriptionModifyInAppRequest
 */
export class AdvancedCommerceSubscriptionModifyInAppRequestValidator implements Validator<AdvancedCommerceSubscriptionModifyInAppRequest> {
    static readonly requestInfoValidator = new AdvancedCommerceRequestInfoValidator();
    static readonly modificationValidator = new AdvancedCommerceSubscriptionModifyPeriodChangeValidator();
    
    static readonly OPERATION = "SUBSCRIPTION_MODIFY";
    static readonly VERSION = "1.0";

    validate(obj: any): obj is AdvancedCommerceSubscriptionModifyInAppRequest {
        if (obj === undefined || obj === null) {
            return false;
        }

        // Validate inherited properties from AdvancedCommerceRequest
        if (obj.requestInfo !== undefined && !AdvancedCommerceSubscriptionModifyInAppRequestValidator.requestInfoValidator.validate(obj.requestInfo)) {
            return false;
        }

        // Validate required operation and version constants
        if (obj.operation !== AdvancedCommerceSubscriptionModifyInAppRequestValidator.OPERATION) {
            return false;
        }

        if (obj.version !== AdvancedCommerceSubscriptionModifyInAppRequestValidator.VERSION) {
            return false;
        }

        if (obj.modifications !== undefined) {
            if (!Array.isArray(obj.modifications)) {
                return false;
            }
            
            for (const modification of obj.modifications) {
                if (!AdvancedCommerceSubscriptionModifyInAppRequestValidator.modificationValidator.validate(modification)) {
                    return false;
                }
            }
        }

        return true;
    }
}