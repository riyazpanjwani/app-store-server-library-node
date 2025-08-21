// Copyright (c) 2025 Apple Inc. Licensed under MIT License.

import { StringValidator } from "./Validator";

/**
 * The type of refund.
 */
export enum AdvancedCommerceRefundType {
    FULL = "FULL",
    PRORATED = "PRORATED"
}

/**
 * A validator for AdvancedCommerceRefundType
 */
export class AdvancedCommerceRefundTypeValidator extends StringValidator {
    validate(obj: any): obj is AdvancedCommerceRefundType {
        return obj !== undefined && (Object.keys(AdvancedCommerceRefundType) as Array<keyof typeof AdvancedCommerceRefundType>)
            .map(key => AdvancedCommerceRefundType[key]).indexOf(obj) !== -1;
    }
}