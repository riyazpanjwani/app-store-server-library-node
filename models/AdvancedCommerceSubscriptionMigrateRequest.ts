// Copyright (c) 2025 Apple Inc. Licensed under MIT License.

import { AdvancedCommerceInAppRequest } from "./AdvancedCommerceInAppRequest";
import { AdvancedCommerceRequest } from "./AdvancedCommerceRequest";
import { AdvancedCommerceRequestInfo, AdvancedCommerceRequestInfoValidator } from "./AdvancedCommerceRequestInfo";
import { AdvancedCommerceSubscriptionCreateItem, AdvancedCommerceSubscriptionCreateItemValidator } from "./AdvancedCommerceSubscriptionCreateItem";
import { Validator } from "./Validator";

/**
 * The request data your app provides when migrating an existing subscription.
 *
 * @see {@link https://developer.apple.com/documentation/advancedcommerceapi/subscriptionmigraterequest | SubscriptionMigrateRequest}
 */
export interface AdvancedCommerceSubscriptionMigrateRequest extends AdvancedCommerceRequest, AdvancedCommerceInAppRequest {
    /**
     * The operation type for this request.
     */
    operation?: string;

    /**
     * The version of the request format.
     */
    version?: string;

    /**
     * The currency of the price of the product.
     *
     * @see {@link https://developer.apple.com/documentation/advancedcommerceapi/currency | currency}
     */
    currency?: string;

    /**
     * The details of the subscription product for migration.
     *
     * @see {@link https://developer.apple.com/documentation/advancedcommerceapi/subscriptioncreateitem | SubscriptionCreateItem}
     */
    item?: AdvancedCommerceSubscriptionCreateItem;

    /**
     * The storefront for the transaction.
     *
     * @see {@link https://developer.apple.com/documentation/advancedcommerceapi/subscriptionmigraterequest | storefront}
     */
    storefront?: string;

    /**
     * The tax code for this product.
     *
     * @see {@link https://developer.apple.com/documentation/advancedcommerceapi/subscriptionmigraterequest | taxCode}
     */
    taxCode?: string;

    /**
     * The original transaction identifier of the subscription to migrate.
     *
     * @see {@link https://developer.apple.com/documentation/appstoreserverapi/originaltransactionid | originalTransactionId}
     */
    originalTransactionId?: string;
}

/**
 * A validator for AdvancedCommerceSubscriptionMigrateRequest
 */
export class AdvancedCommerceSubscriptionMigrateRequestValidator implements Validator<AdvancedCommerceSubscriptionMigrateRequest> {
    static readonly requestInfoValidator = new AdvancedCommerceRequestInfoValidator();
    static readonly itemValidator = new AdvancedCommerceSubscriptionCreateItemValidator();

    validate(obj: any): obj is AdvancedCommerceSubscriptionMigrateRequest {
        if (obj === undefined || obj === null) {
            return false;
        }

        // Validate inherited properties from AdvancedCommerceRequest
        if (obj.requestInfo !== undefined && !AdvancedCommerceSubscriptionMigrateRequestValidator.requestInfoValidator.validate(obj.requestInfo)) {
            return false;
        }

        // All properties are optional, but if present they should be of correct type
        if (obj.operation !== undefined && typeof obj.operation !== 'string') {
            return false;
        }

        if (obj.version !== undefined && typeof obj.version !== 'string') {
            return false;
        }

        if (obj.currency !== undefined && typeof obj.currency !== 'string') {
            return false;
        }

        if (obj.item !== undefined && !AdvancedCommerceSubscriptionMigrateRequestValidator.itemValidator.validate(obj.item)) {
            return false;
        }

        if (obj.storefront !== undefined && typeof obj.storefront !== 'string') {
            return false;
        }

        if (obj.taxCode !== undefined && typeof obj.taxCode !== 'string') {
            return false;
        }

        if (obj.originalTransactionId !== undefined && typeof obj.originalTransactionId !== 'string') {
            return false;
        }

        return true;
    }
}