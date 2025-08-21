// Copyright (c) 2025 Apple Inc. Licensed under MIT License.

import { Validator } from "./Validator";

/**
 * The metadata to include in server requests.
 *
 * @see {@link https://developer.apple.com/documentation/advancedcommerceapi/requestinfo | RequestInfo}
 */
export interface AdvancedCommerceRequestInfo {
    /**
     * A UUID that represents an app account token, to associate with the transaction in the request.
     *
     * @see {@link https://developer.apple.com/documentation/appstoreserverapi/appaccounttoken | AppAccountToken}
     */
    appAccountToken?: string;

    /**
     * The value of the advancedCommerceConsistencyToken that you receive in the JWSRenewalInfo renewal information for a subscription. Don't generate this value.
     *
     * @see {@link https://developer.apple.com/documentation/advancedcommerceapi/advancedCommerceConsistencyToken | advancedCommerceConsistencyToken}
     */
    consistencyToken?: string;

    /**
     * A UUID that you provide to uniquely identify each request. If the request times out, you can use the same requestReferenceId value to retry the request. Otherwise, provide a unique value.
     */
    requestReferenceId?: string;
}

/**
 * A validator for AdvancedCommerceRequestInfo
 */
export class AdvancedCommerceRequestInfoValidator implements Validator<AdvancedCommerceRequestInfo> {
    validate(obj: any): obj is AdvancedCommerceRequestInfo {
        if (obj === undefined || obj === null) {
            return false;
        }

        // All properties are optional, but if present they should be strings
        if (obj.appAccountToken !== undefined && typeof obj.appAccountToken !== 'string') {
            return false;
        }

        if (obj.consistencyToken !== undefined && typeof obj.consistencyToken !== 'string') {
            return false;
        }

        if (obj.requestReferenceId !== undefined && typeof obj.requestReferenceId !== 'string') {
            return false;
        }

        return true;
    }
}