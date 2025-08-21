// Copyright (c) 2025 Apple Inc. Licensed under MIT License.

import { StringValidator } from "./Validator";

/**
 * A string value that indicates when a requested change to an auto-renewable subscription goes into effect.
 *
 * @see {@link https://developer.apple.com/documentation/advancedcommerceapi/effective | effective}
 */
export enum AdvancedCommerceEffective {
    IMMEDIATELY = "IMMEDIATELY",
    NEXT_BILL_CYCLE = "NEXT_BILL_CYCLE"
}

/**
 * A validator for AdvancedCommerceEffective
 */
export class AdvancedCommerceEffectiveValidator extends StringValidator {
    validate(obj: any): obj is AdvancedCommerceEffective {
        return obj !== undefined && (Object.keys(AdvancedCommerceEffective) as Array<keyof typeof AdvancedCommerceEffective>)
            .map(key => AdvancedCommerceEffective[key]).indexOf(obj) !== -1;
    }
}