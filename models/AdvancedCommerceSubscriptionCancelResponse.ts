// Copyright (c) 2025 Apple Inc. Licensed under MIT License.

import { AdvancedCommerceResponse, AdvancedCommerceResponseValidator } from "./AdvancedCommerceResponse";
import { Validator } from "./Validator";

/**
 * A response that contains the status and details of a subscription cancellation in the Advanced Commerce API.
 * 
 * @see {@link https://developer.apple.com/documentation/appstoreserverapi/advanced_commerce_api | Advanced Commerce API}
 */
export interface AdvancedCommerceSubscriptionCancelResponse extends AdvancedCommerceResponse {
    /**
     * The date when the subscription was cancelled.
     */
    cancellationDate?: string;

    /**
     * Whether the cancellation is effective immediately or at the end of the current billing period.
     */
    effective?: string;
}

/**
 * A validator for AdvancedCommerceSubscriptionCancelResponse
 */
export class AdvancedCommerceSubscriptionCancelResponseValidator implements Validator<AdvancedCommerceSubscriptionCancelResponse> {
    static readonly baseValidator = new AdvancedCommerceResponseValidator();

    validate(obj: any): obj is AdvancedCommerceSubscriptionCancelResponse {
        if (obj === undefined || obj === null) {
            return false;
        }

        // Validate base response properties (signedRenewalInfo, signedTransactionInfo)
        if (obj.signedRenewalInfo !== undefined && typeof obj.signedRenewalInfo !== 'string') {
            return false;
        }

        if (obj.signedTransactionInfo !== undefined && typeof obj.signedTransactionInfo !== 'string') {
            return false;
        }

        // Validate response-specific properties
        if (obj.cancellationDate !== undefined && typeof obj.cancellationDate !== 'string') {
            return false;
        }

        if (obj.effective !== undefined && typeof obj.effective !== 'string') {
            return false;
        }

        return true;
    }
}