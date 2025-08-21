// Copyright (c) 2025 Apple Inc. Licensed under MIT License.

import { StringValidator } from "./Validator";

/**
 * The period of the offer.
 *
 * @see {@link https://developer.apple.com/documentation/advancedcommerceapi/offer | Offer}
 */
export enum AdvancedCommerceOfferPeriod {
    P3D = "P3D",
    P1W = "P1W",
    P2W = "P2W",
    P1M = "P1M",
    P2M = "P2M",
    P3M = "P3M",
    P6M = "P6M",
    P9M = "P9M",
    P1Y = "P1Y"
}

/**
 * A validator for AdvancedCommerceOfferPeriod
 */
export class AdvancedCommerceOfferPeriodValidator extends StringValidator {
    validate(obj: any): obj is AdvancedCommerceOfferPeriod {
        return obj !== undefined && (Object.keys(AdvancedCommerceOfferPeriod) as Array<keyof typeof AdvancedCommerceOfferPeriod>)
            .map(key => AdvancedCommerceOfferPeriod[key]).indexOf(obj) !== -1;
    }
}