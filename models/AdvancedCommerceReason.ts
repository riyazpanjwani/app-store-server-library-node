// Copyright (c) 2025 Apple Inc. Licensed under MIT License.

import { StringValidator } from "./Validator";

/**
 * The reason for a subscription change.
 */
export enum AdvancedCommerceReason {
    UPGRADE = "UPGRADE",
    DOWNGRADE = "DOWNGRADE",
    APPLY_OFFER = "APPLY_OFFER"
}

/**
 * A validator for AdvancedCommerceReason
 */
export class AdvancedCommerceReasonValidator extends StringValidator {
    validate(obj: any): obj is AdvancedCommerceReason {
        return obj !== undefined && (Object.keys(AdvancedCommerceReason) as Array<keyof typeof AdvancedCommerceReason>)
            .map(key => AdvancedCommerceReason[key]).indexOf(obj) !== -1;
    }
}