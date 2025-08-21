// Copyright (c) 2025 Apple Inc. Licensed under MIT License.

import { StringValidator } from "./Validator";

/**
 * The duration of a single cycle of an auto-renewable subscription.
 *
 * @see {@link https://developer.apple.com/documentation/advancedcommerceapi/period | period}
 */
export enum AdvancedCommercePeriod {
    P1W = "P1W",
    P1M = "P1M",
    P2M = "P2M",
    P3M = "P3M",
    P6M = "P6M",
    P1Y = "P1Y"
}

/**
 * A validator for AdvancedCommercePeriod
 */
export class AdvancedCommercePeriodValidator extends StringValidator {
    validate(obj: any): obj is AdvancedCommercePeriod {
        return obj !== undefined && (Object.keys(AdvancedCommercePeriod) as Array<keyof typeof AdvancedCommercePeriod>)
            .map(key => AdvancedCommercePeriod[key]).indexOf(obj) !== -1;
    }
}