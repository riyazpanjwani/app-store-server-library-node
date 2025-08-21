// Copyright (c) 2025 Apple Inc. Licensed under MIT License.

import { Validator } from "./Validator";

/**
 * Base interface for Advanced Commerce responses.
 */
export interface AdvancedCommerceResponse {
    /**
     * A response that contains signed renewal and transaction information after a subscription successfully migrates to the Advanced Commerce API.
     *
     * @see {@link https://developer.apple.com/documentation/appstoreserverapi/jwsrenewalinfo | JWSRenewalInfo}
     */
    signedRenewalInfo?: string;

    /**
     * Transaction information signed by the App Store, in JSON Web Signature (JWS) Compact Serialization format.
     *
     * @see {@link https://developer.apple.com/documentation/appstoreserverapi/jwstransaction | JWSTransaction}
     */
    signedTransactionInfo?: string;
}

/**
 * A validator for AdvancedCommerceResponse
 */
export class AdvancedCommerceResponseValidator implements Validator<AdvancedCommerceResponse> {
    validate(obj: any): obj is AdvancedCommerceResponse {
        if (obj === undefined || obj === null) {
            return false;
        }

        // All properties are optional, but if present they should be strings
        if (obj.signedRenewalInfo !== undefined && typeof obj.signedRenewalInfo !== 'string') {
            return false;
        }

        if (obj.signedTransactionInfo !== undefined && typeof obj.signedTransactionInfo !== 'string') {
            return false;
        }

        return true;
    }
}