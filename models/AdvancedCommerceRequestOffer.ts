// Copyright (c) 2025 Apple Inc. Licensed under MIT License.

import { AdvancedCommerceOffer, AdvancedCommerceOfferValidator } from "./AdvancedCommerceOffer";
import { Validator } from "./Validator";

/**
 * A discount offer for an auto-renewable subscription in a request.
 */
export interface AdvancedCommerceRequestOffer {
    /**
     * The offer details.
     */
    offer?: AdvancedCommerceOffer;
}

/**
 * A validator for AdvancedCommerceRequestOffer
 */
export class AdvancedCommerceRequestOfferValidator implements Validator<AdvancedCommerceRequestOffer> {
    static readonly offerValidator = new AdvancedCommerceOfferValidator();

    validate(obj: any): obj is AdvancedCommerceRequestOffer {
        if (obj === undefined || obj === null) {
            return false;
        }

        // All properties are optional
        if (obj.offer !== undefined && !AdvancedCommerceRequestOfferValidator.offerValidator.validate(obj.offer)) {
            return false;
        }

        return true;
    }
}