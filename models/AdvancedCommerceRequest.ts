// Copyright (c) 2025 Apple Inc. Licensed under MIT License.

import { AdvancedCommerceRequestInfo } from "./AdvancedCommerceRequestInfo";

/**
 * Base interface for Advanced Commerce requests.
 */
export interface AdvancedCommerceRequest {
    /**
     * The metadata to include in server requests.
     *
     * @see {@link https://developer.apple.com/documentation/advancedcommerceapi/requestinfo | RequestInfo}
     */
    requestInfo?: AdvancedCommerceRequestInfo;
}