// Copyright (c) 2025 Apple Inc. Licensed under MIT License.

import { Validator } from './Validator';
import { AdvancedCommerceRefundType } from './AdvancedCommerceRefundType';
import { AdvancedCommerceRefundTypeValidator } from './AdvancedCommerceRefundType';
import { AdvancedCommerceRefundReason } from './AdvancedCommerceRefundReason';
import { AdvancedCommerceRefundReasonValidator } from './AdvancedCommerceRefundReason';

/**
 * An item for requesting refunds on items in Advanced Commerce.
 * 
 * @see {@link https://developer.apple.com/documentation/appstoreserverapi/advanced_commerce_request_refund_item | Advanced Commerce Request Refund Item}
 */
export interface AdvancedCommerceRequestRefundItem {
    /**
     * The product identifier for the item to refund.
     */
    sku?: string;

    /**
     * The type of refund to request.
     */
    refundType?: AdvancedCommerceRefundType;

    /**
     * The reason for the refund request.
     */
    refundReason?: AdvancedCommerceRefundReason;

    /**
     * The amount to refund for the item.
     */
    refundAmount?: number;
}

/**
 * Validator for AdvancedCommerceRequestRefundItem objects.
 */
export class AdvancedCommerceRequestRefundItemValidator implements Validator<AdvancedCommerceRequestRefundItem> {
    static readonly refundTypeValidator = new AdvancedCommerceRefundTypeValidator();
    static readonly refundReasonValidator = new AdvancedCommerceRefundReasonValidator();

    validate(obj: any): obj is AdvancedCommerceRequestRefundItem {
        if (obj === undefined || obj === null) {
            return false;
        }

        // Validate string properties
        if (obj.sku !== undefined && typeof obj.sku !== 'string') {
            return false;
        }

        // Validate number properties
        if (obj.refundAmount !== undefined && typeof obj.refundAmount !== 'number') {
            return false;
        }

        // Validate enum properties
        if (obj.refundType !== undefined && !AdvancedCommerceRequestRefundItemValidator.refundTypeValidator.validate(obj.refundType)) {
            return false;
        }

        if (obj.refundReason !== undefined && !AdvancedCommerceRequestRefundItemValidator.refundReasonValidator.validate(obj.refundReason)) {
            return false;
        }

        return true;
    }
}