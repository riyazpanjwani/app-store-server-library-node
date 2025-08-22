// Copyright (c) 2025 Apple Inc. Licensed under MIT License.

import { AdvancedCommerceOfferPeriod, AdvancedCommerceOfferPeriodValidator } from "./AdvancedCommerceOfferPeriod";
import { AdvancedCommerceOfferReason, AdvancedCommerceOfferReasonValidator } from "./AdvancedCommerceOfferReason";
import { Validator } from "./Validator";

/**
 * A discount offer for an auto-renewable subscription.
 *
 * @see {@link https://developer.apple.com/documentation/advancedcommerceapi/offer | Offer}
 */
export interface AdvancedCommerceOffer {
    /**
     * The period of the offer.
     */
    period?: AdvancedCommerceOfferPeriod;

    /**
     * The number of periods the offer is active.
     */
    periodCount?: number;

    /**
     * The offer price, in milliunits.
     *
     * @see {@link https://developer.apple.com/documentation/advancedcommerceapi/price | Price}
     */
    price?: number;

    /**
     * The reason for the offer.
     */
    reason?: AdvancedCommerceOfferReason;
}

/**
 * A validator for AdvancedCommerceOffer
 */
export class AdvancedCommerceOfferValidator implements Validator<AdvancedCommerceOffer> {
    static readonly periodValidator = new AdvancedCommerceOfferPeriodValidator();
    static readonly reasonValidator = new AdvancedCommerceOfferReasonValidator();

    validate(obj: any): obj is AdvancedCommerceOffer {
        if (obj === undefined || obj === null) {
            return false;
        }

        // All properties are optional
        if (obj.period !== undefined && !AdvancedCommerceOfferValidator.periodValidator.validate(obj.period)) {
            return false;
        }

        if (obj.periodCount !== undefined && typeof obj.periodCount !== 'number') {
            return false;
        }

        if (obj.price !== undefined && typeof obj.price !== 'number') {
            return false;
        }

        if (obj.reason !== undefined && !AdvancedCommerceOfferValidator.reasonValidator.validate(obj.reason)) {
            return false;
        }

        return true;
    }
}