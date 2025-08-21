// Copyright (c) 2025 Apple Inc. Licensed under MIT License.

import { AdvancedCommercePeriod, AdvancedCommercePeriodValidator } from "./AdvancedCommercePeriod";
import { AdvancedCommerceEffective, AdvancedCommerceEffectiveValidator } from "./AdvancedCommerceEffective";
import { AdvancedCommerceReason, AdvancedCommerceReasonValidator } from "./AdvancedCommerceReason";
import { Validator } from "./Validator";

/**
 * The details of a subscription period modification, including the new period, when it takes effect, and the reason for the change.
 *
 * @see {@link https://developer.apple.com/documentation/advancedcommerceapi/subscriptionmodifyperiodchange | SubscriptionModifyPeriodChange}
 */
export interface AdvancedCommerceSubscriptionModifyPeriodChange {
    /**
     * The duration of a single cycle of an auto-renewable subscription.
     *
     * @see {@link https://developer.apple.com/documentation/advancedcommerceapi/period | period}
     */
    period?: AdvancedCommercePeriod;

    /**
     * A string value that indicates when a requested change to an auto-renewable subscription goes into effect.
     *
     * @see {@link https://developer.apple.com/documentation/advancedcommerceapi/effective | effective}
     */
    effective?: AdvancedCommerceEffective;

    /**
     * The reason for the subscription change.
     *
     * @see {@link https://developer.apple.com/documentation/advancedcommerceapi/reason | reason}
     */
    reason?: AdvancedCommerceReason;
}

/**
 * A validator for AdvancedCommerceSubscriptionModifyPeriodChange
 */
export class AdvancedCommerceSubscriptionModifyPeriodChangeValidator implements Validator<AdvancedCommerceSubscriptionModifyPeriodChange> {
    static readonly periodValidator = new AdvancedCommercePeriodValidator();
    static readonly effectiveValidator = new AdvancedCommerceEffectiveValidator();
    static readonly reasonValidator = new AdvancedCommerceReasonValidator();

    validate(obj: any): obj is AdvancedCommerceSubscriptionModifyPeriodChange {
        if (obj === undefined || obj === null) {
            return false;
        }

        // All properties are optional, but if present they should be of correct type
        if (obj.period !== undefined && !AdvancedCommerceSubscriptionModifyPeriodChangeValidator.periodValidator.validate(obj.period)) {
            return false;
        }

        if (obj.effective !== undefined && !AdvancedCommerceSubscriptionModifyPeriodChangeValidator.effectiveValidator.validate(obj.effective)) {
            return false;
        }

        if (obj.reason !== undefined && !AdvancedCommerceSubscriptionModifyPeriodChangeValidator.reasonValidator.validate(obj.reason)) {
            return false;
        }

        return true;
    }
}