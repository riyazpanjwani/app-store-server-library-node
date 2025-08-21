// Copyright (c) 2025 Apple Inc. Licensed under MIT License.

import { StringValidator } from "./Validator";

/**
 * The reason for the offer.
 *
 * @see {@link https://developer.apple.com/documentation/advancedcommerceapi/offer | Offer}
 */
export enum AdvancedCommerceOfferReason {
    ACQUISITION = "ACQUISITION",
    WIN_BACK = "WIN_BACK",
    RETENTION = "RETENTION"
}

/**
 * A validator for AdvancedCommerceOfferReason
 */
export class AdvancedCommerceOfferReasonValidator extends StringValidator {
    validate(obj: any): obj is AdvancedCommerceOfferReason {
        return obj !== undefined && (Object.keys(AdvancedCommerceOfferReason) as Array<keyof typeof AdvancedCommerceOfferReason>)
            .map(key => AdvancedCommerceOfferReason[key]).indexOf(obj) !== -1;
    }
}