// Copyright (c) 2025 Apple Inc. Licensed under MIT License.

import { AdvancedCommerceResponse, AdvancedCommerceResponseValidator } from "./AdvancedCommerceResponse";
import { Validator } from "./Validator";

/**
 * A response that contains the status and details of a refund request in the Advanced Commerce API.
 * 
 * @see {@link https://developer.apple.com/documentation/appstoreserverapi/advanced_commerce_api | Advanced Commerce API}
 */
export interface AdvancedCommerceRequestRefundResponse extends AdvancedCommerceResponse {
    /**
     * The status of the refund request.
     */
    refundStatus?: string;

    /**
     * The unique identifier for the refund.
     */
    refundId?: string;
}

/**
 * A validator for AdvancedCommerceRequestRefundResponse
 */
export class AdvancedCommerceRequestRefundResponseValidator implements Validator<AdvancedCommerceRequestRefundResponse> {
    static readonly baseValidator = new AdvancedCommerceResponseValidator();

    validate(obj: any): obj is AdvancedCommerceRequestRefundResponse {
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
        if (obj.refundStatus !== undefined && typeof obj.refundStatus !== 'string') {
            return false;
        }

        if (obj.refundId !== undefined && typeof obj.refundId !== 'string') {
            return false;
        }

        return true;
    }
}