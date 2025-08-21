// Copyright (c) 2025 Apple Inc. Licensed under MIT License.

import { AdvancedCommerceInAppRequest } from "./AdvancedCommerceInAppRequest";
import { AdvancedCommerceRequest } from "./AdvancedCommerceRequest";
import { AdvancedCommerceRequestInfo, AdvancedCommerceRequestInfoValidator } from "./AdvancedCommerceRequestInfo";
import { AdvancedCommerceRefundType, AdvancedCommerceRefundTypeValidator } from "./AdvancedCommerceRefundType";
import { AdvancedCommerceRefundReason, AdvancedCommerceRefundReasonValidator } from "./AdvancedCommerceRefundReason";
import { Validator } from "./Validator";

/**
 * The request data your app provides when requesting a refund.
 *
 * @see {@link https://developer.apple.com/documentation/advancedcommerceapi/requestrefundrequest | RequestRefundRequest}
 */
export interface AdvancedCommerceRequestRefundRequest extends AdvancedCommerceRequest, AdvancedCommerceInAppRequest {
    /**
     * The operation type for this request.
     */
    operation?: string;

    /**
     * The version of the request format.
     */
    version?: string;

    /**
     * The type of refund to request.
     *
     * @see {@link https://developer.apple.com/documentation/advancedcommerceapi/refundtype | RefundType}
     */
    refundType?: AdvancedCommerceRefundType;

    /**
     * The reason for the refund request.
     *
     * @see {@link https://developer.apple.com/documentation/advancedcommerceapi/refundreason | RefundReason}
     */
    refundReason?: AdvancedCommerceRefundReason;
}

/**
 * A validator for AdvancedCommerceRequestRefundRequest
 */
export class AdvancedCommerceRequestRefundRequestValidator implements Validator<AdvancedCommerceRequestRefundRequest> {
    static readonly requestInfoValidator = new AdvancedCommerceRequestInfoValidator();
    static readonly refundTypeValidator = new AdvancedCommerceRefundTypeValidator();
    static readonly refundReasonValidator = new AdvancedCommerceRefundReasonValidator();

    validate(obj: any): obj is AdvancedCommerceRequestRefundRequest {
        if (obj === undefined || obj === null) {
            return false;
        }

        // Validate inherited properties from AdvancedCommerceRequest
        if (obj.requestInfo !== undefined && !AdvancedCommerceRequestRefundRequestValidator.requestInfoValidator.validate(obj.requestInfo)) {
            return false;
        }

        // All properties are optional, but if present they should be of correct type
        if (obj.operation !== undefined && typeof obj.operation !== 'string') {
            return false;
        }

        if (obj.version !== undefined && typeof obj.version !== 'string') {
            return false;
        }

        if (obj.refundType !== undefined && !AdvancedCommerceRequestRefundRequestValidator.refundTypeValidator.validate(obj.refundType)) {
            return false;
        }

        if (obj.refundReason !== undefined && !AdvancedCommerceRequestRefundRequestValidator.refundReasonValidator.validate(obj.refundReason)) {
            return false;
        }

        return true;
    }
}