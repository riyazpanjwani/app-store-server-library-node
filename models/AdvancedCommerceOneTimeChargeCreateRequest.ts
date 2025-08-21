// Copyright (c) 2025 Apple Inc. Licensed under MIT License.

import { AdvancedCommerceInAppRequest } from "./AdvancedCommerceInAppRequest";
import { AdvancedCommerceRequest } from "./AdvancedCommerceRequest";
import { AdvancedCommerceRequestInfo, AdvancedCommerceRequestInfoValidator } from "./AdvancedCommerceRequestInfo";
import { AdvancedCommerceOneTimeChargeItem, AdvancedCommerceOneTimeChargeItemValidator } from "./AdvancedCommerceOneTimeChargeItem";
import { Validator } from "./Validator";

/**
 * The request data your app provides when a customer purchases a one-time-charge product.
 *
 * @see {@link https://developer.apple.com/documentation/advancedcommerceapi/onetimechargecreaterequest | OneTimeChargeCreateRequest}
 */
export interface AdvancedCommerceOneTimeChargeCreateRequest extends AdvancedCommerceRequest, AdvancedCommerceInAppRequest {
    /**
     * The operation type for this request.
     */
    readonly operation: string;

    /**
     * The version of the request format.
     */
    readonly version: string;

    /**
     * The currency of the price of the product.
     *
     * @see {@link https://developer.apple.com/documentation/advancedcommerceapi/currency | currency}
     */
    currency?: string;

    /**
     * The details of the product for purchase.
     *
     * @see {@link https://developer.apple.com/documentation/advancedcommerceapi/onetimechargeitem | OneTimeChargeItem}
     */
    item?: AdvancedCommerceOneTimeChargeItem;

    /**
     * The storefront for the transaction.
     *
     * @see {@link https://developer.apple.com/documentation/advancedcommerceapi/onetimechargecreaterequest | storefront}
     */
    storefront?: string;

    /**
     * The tax code for this product.
     *
     * @see {@link https://developer.apple.com/documentation/advancedcommerceapi/onetimechargecreaterequest | taxCode}
     */
    taxCode?: string;
}

/**
 * A validator for AdvancedCommerceOneTimeChargeCreateRequest
 */
export class AdvancedCommerceOneTimeChargeCreateRequestValidator implements Validator<AdvancedCommerceOneTimeChargeCreateRequest> {
    static readonly requestInfoValidator = new AdvancedCommerceRequestInfoValidator();
    static readonly itemValidator = new AdvancedCommerceOneTimeChargeItemValidator();
    
    static readonly OPERATION = "CREATE_ONE_TIME_CHARGE";
    static readonly VERSION = "1";

    validate(obj: any): obj is AdvancedCommerceOneTimeChargeCreateRequest {
        if (obj === undefined || obj === null) {
            return false;
        }

        // Validate inherited properties from AdvancedCommerceRequest
        if (obj.requestInfo !== undefined && !AdvancedCommerceOneTimeChargeCreateRequestValidator.requestInfoValidator.validate(obj.requestInfo)) {
            return false;
        }

        // Validate required operation and version constants
        if (obj.operation !== AdvancedCommerceOneTimeChargeCreateRequestValidator.OPERATION) {
            return false;
        }

        if (obj.version !== AdvancedCommerceOneTimeChargeCreateRequestValidator.VERSION) {
            return false;
        }

        if (obj.currency !== undefined && typeof obj.currency !== 'string') {
            return false;
        }

        if (obj.item !== undefined && !AdvancedCommerceOneTimeChargeCreateRequestValidator.itemValidator.validate(obj.item)) {
            return false;
        }

        if (obj.storefront !== undefined && typeof obj.storefront !== 'string') {
            return false;
        }

        if (obj.taxCode !== undefined && typeof obj.taxCode !== 'string') {
            return false;
        }

        return true;
    }
}