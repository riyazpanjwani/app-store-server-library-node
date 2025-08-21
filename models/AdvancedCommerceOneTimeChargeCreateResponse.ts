// Copyright (c) 2025 Apple Inc. Licensed under MIT License.

import { AdvancedCommerceResponse, AdvancedCommerceResponseValidator } from "./AdvancedCommerceResponse";
import { Validator } from "./Validator";

/**
 * A response that contains the status and details of a one-time charge creation in the Advanced Commerce API.
 * 
 * @see {@link https://developer.apple.com/documentation/appstoreserverapi/advanced_commerce_api | Advanced Commerce API}
 */
export interface AdvancedCommerceOneTimeChargeCreateResponse extends AdvancedCommerceResponse {
    /**
     * The unique identifier for the transaction.
     */
    transactionId?: string;

    /**
     * The date when the purchase was made.
     */
    purchaseDate?: string;
}

/**
 * A validator for AdvancedCommerceOneTimeChargeCreateResponse
 */
export class AdvancedCommerceOneTimeChargeCreateResponseValidator implements Validator<AdvancedCommerceOneTimeChargeCreateResponse> {
    static readonly baseValidator = new AdvancedCommerceResponseValidator();

    validate(obj: any): obj is AdvancedCommerceOneTimeChargeCreateResponse {
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
        if (obj.transactionId !== undefined && typeof obj.transactionId !== 'string') {
            return false;
        }

        if (obj.purchaseDate !== undefined && typeof obj.purchaseDate !== 'string') {
            return false;
        }

        return true;
    }
}