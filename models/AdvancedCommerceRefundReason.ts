// Copyright (c) 2025 Apple Inc. Licensed under MIT License.

import { StringValidator } from "./Validator";

/**
 * The reason to request a refund.
 *
 * @see {@link https://developer.apple.com/documentation/advancedcommerceapi/refundreason | RefundReason}
 */
export enum AdvancedCommerceRefundReason {
    UNINTENDED_PURCHASE = "UNINTENDED_PURCHASE",
    FULFILLMENT_ISSUE = "FULFILLMENT_ISSUE",
    UNSATISFIED_WITH_PURCHASE = "UNSATISFIED_WITH_PURCHASE",
    LEGAL = "LEGAL",
    OTHER = "OTHER",
    MODIFY_ITEMS_REFUND = "MODIFY_ITEMS_REFUND",
    SIMULATE_REFUND_DECLINE = "SIMULATE_REFUND_DECLINE"
}

/**
 * A validator for AdvancedCommerceRefundReason
 */
export class AdvancedCommerceRefundReasonValidator extends StringValidator {
    validate(obj: any): obj is AdvancedCommerceRefundReason {
        return obj !== undefined && (Object.keys(AdvancedCommerceRefundReason) as Array<keyof typeof AdvancedCommerceRefundReason>)
            .map(key => AdvancedCommerceRefundReason[key]).indexOf(obj) !== -1;
    }
}