// Copyright (c) 2025 Apple Inc. Licensed under MIT License.

import { AdvancedCommerceResponse, AdvancedCommerceResponseValidator } from "./AdvancedCommerceResponse";
import { Validator } from "./Validator";

/**
 * A response that contains the status and details of a subscription metadata change in the Advanced Commerce API.
 * 
 * @see {@link https://developer.apple.com/documentation/appstoreserverapi/advanced_commerce_api | Advanced Commerce API}
 */
export interface AdvancedCommerceSubscriptionChangeMetadataResponse extends AdvancedCommerceResponse {
    /**
     * The date when the metadata change was applied.
     */
    changeDate?: string;
}

/**
 * A validator for AdvancedCommerceSubscriptionChangeMetadataResponse
 */
export class AdvancedCommerceSubscriptionChangeMetadataResponseValidator implements Validator<AdvancedCommerceSubscriptionChangeMetadataResponse> {
    static readonly baseValidator = new AdvancedCommerceResponseValidator();

    validate(obj: any): obj is AdvancedCommerceSubscriptionChangeMetadataResponse {
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
        if (obj.changeDate !== undefined && typeof obj.changeDate !== 'string') {
            return false;
        }

        return true;
    }
}