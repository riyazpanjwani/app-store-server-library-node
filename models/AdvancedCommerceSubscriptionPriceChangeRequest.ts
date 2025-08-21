// Copyright (c) 2025 Apple Inc. Licensed under MIT License.

import { AdvancedCommerceInAppRequest } from "./AdvancedCommerceInAppRequest";
import { AdvancedCommerceRequest } from "./AdvancedCommerceRequest";
import { AdvancedCommerceRequestInfo, AdvancedCommerceRequestInfoValidator } from "./AdvancedCommerceRequestInfo";
import { AdvancedCommerceEffective, AdvancedCommerceEffectiveValidator } from "./AdvancedCommerceEffective";
import { Validator } from "./Validator";

/**
 * The request data your app provides when changing subscription prices.
 *
 * @see {@link https://developer.apple.com/documentation/advancedcommerceapi/subscriptionpricechangerequest | SubscriptionPriceChangeRequest}
 */
export interface AdvancedCommerceSubscriptionPriceChangeRequest extends AdvancedCommerceRequest, AdvancedCommerceInAppRequest {
    /**
     * The operation type for this request.
     */
    operation?: string;

    /**
     * The version of the request format.
     */
    version?: string;

    /**
     * The new price, in milliunits of the currency, for the subscription product.
     *
     * @see {@link https://developer.apple.com/documentation/advancedcommerceapi/price | price}
     */
    newPrice?: number;

    /**
     * The three-letter ISO 4217 currency code for the new price of the subscription.
     *
     * @see {@link https://developer.apple.com/documentation/advancedcommerceapi/currency | currency}
     */
    currency?: string;

    /**
     * A string value that indicates when a requested change to an auto-renewable subscription goes into effect.
     *
     * @see {@link https://developer.apple.com/documentation/advancedcommerceapi/effective | effective}
     */
    effective?: AdvancedCommerceEffective;
}

/**
 * A validator for AdvancedCommerceSubscriptionPriceChangeRequest
 */
export class AdvancedCommerceSubscriptionPriceChangeRequestValidator implements Validator<AdvancedCommerceSubscriptionPriceChangeRequest> {
    static readonly requestInfoValidator = new AdvancedCommerceRequestInfoValidator();
    static readonly effectiveValidator = new AdvancedCommerceEffectiveValidator();

    validate(obj: any): obj is AdvancedCommerceSubscriptionPriceChangeRequest {
        if (obj === undefined || obj === null) {
            return false;
        }

        // Validate inherited properties from AdvancedCommerceRequest
        if (obj.requestInfo !== undefined && !AdvancedCommerceSubscriptionPriceChangeRequestValidator.requestInfoValidator.validate(obj.requestInfo)) {
            return false;
        }

        // All properties are optional, but if present they should be of correct type
        if (obj.operation !== undefined && typeof obj.operation !== 'string') {
            return false;
        }

        if (obj.version !== undefined && typeof obj.version !== 'string') {
            return false;
        }

        if (obj.newPrice !== undefined && typeof obj.newPrice !== 'number') {
            return false;
        }

        if (obj.currency !== undefined && typeof obj.currency !== 'string') {
            return false;
        }

        if (obj.effective !== undefined && !AdvancedCommerceSubscriptionPriceChangeRequestValidator.effectiveValidator.validate(obj.effective)) {
            return false;
        }

        return true;
    }
}