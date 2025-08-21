// Copyright (c) 2025 Apple Inc. Licensed under MIT License.

/**
 * Utility functions for Advanced Commerce API validation
 * 
 * This class provides static utility methods for validating data used in
 * Advanced Commerce API requests and responses.
 * 
 * {@link https://developer.apple.com/documentation/appstoreserverapi Advanced Commerce API}
 */
export class AdvancedCommerceValidationUtils {
    
    /**
     * Validates a description string
     * 
     * @param description The description string to validate
     * @returns The validated description string
     * @throws Error if the description is invalid
     * 
     * {@link https://developer.apple.com/documentation/appstoreserverapi/description Description}
     */
    static validateDescription(description: string): string {
        if (!description || typeof description !== 'string') {
            throw new Error('Description cannot be null or empty');
        }
        
        // Description should have reasonable length limits
        if (description.length > 1000) {
            throw new Error('Description length exceeds maximum allowed');
        }
        
        return description;
    }
    
    /**
     * Validates a display name string
     * 
     * @param displayName The display name string to validate
     * @returns The validated display name string
     * @throws Error if the display name is invalid
     * 
     * {@link https://developer.apple.com/documentation/appstoreserverapi/displayname DisplayName}
     */
    static validateDisplayName(displayName: string): string {
        if (!displayName || typeof displayName !== 'string') {
            throw new Error('Display name cannot be null or empty');
        }
        
        // Display name should have reasonable length limits
        if (displayName.length > 255) {
            throw new Error('Display name length exceeds maximum allowed');
        }
        
        return displayName;
    }
    
    /**
     * Validates a currency code according to ISO 4217 standards
     * 
     * @param currency The currency code to validate (e.g., "USD", "EUR")
     * @returns The validated currency code
     * @throws Error if the currency code is invalid
     * 
     * {@link https://developer.apple.com/documentation/appstoreserverapi/currency Currency}
     */
    static validateCurrency(currency: string): string {
        if (!currency || typeof currency !== 'string') {
            throw new Error('Currency cannot be null or empty');
        }
        
        // Currency code should be exactly 3 uppercase letters (ISO 4217)
        const currencyPattern = /^[A-Z]{3}$/;
        if (!currencyPattern.test(currency)) {
            throw new Error('Currency must be a valid 3-letter ISO 4217 code');
        }
        
        return currency;
    }
    
    /**
     * Validates a tax code
     * 
     * @param taxCode The tax code to validate
     * @returns The validated tax code
     * @throws Error if the tax code is invalid
     * 
     * {@link https://developer.apple.com/documentation/appstoreserverapi/taxcode TaxCode}
     */
    static validateTaxCode(taxCode: string): string {
        if (!taxCode || typeof taxCode !== 'string') {
            throw new Error('Tax code cannot be null or empty');
        }
        
        // Tax code should have reasonable length limits
        if (taxCode.length > 50) {
            throw new Error('Tax code length exceeds maximum allowed');
        }
        
        return taxCode;
    }
    
    /**
     * Validates a price value for Advanced Commerce transactions
     * 
     * @param price The price value to validate (in milliunits)
     * @returns The validated price value
     * @throws Error if the price is invalid
     * 
     * {@link https://developer.apple.com/documentation/appstoreserverapi/price Price}
     */
    static validatePrice(price: number): number {
        if (typeof price !== 'number' || isNaN(price)) {
            throw new Error('Price must be a valid number');
        }
        
        // Price should be non-negative and within reasonable bounds
        if (price < 0) {
            throw new Error('Price cannot be negative');
        }
        
        // Maximum price check (reasonable upper bound)
        if (price > 9007199254740991) { // Number.MAX_SAFE_INTEGER equivalent
            throw new Error('Price exceeds maximum allowed value');
        }
        
        return price;
    }
    
    /**
     * Validates a SKU (Stock Keeping Unit) format
     * 
     * @param sku The SKU string to validate
     * @returns The validated SKU string
     * @throws Error if the SKU is invalid
     * 
     * {@link https://developer.apple.com/documentation/appstoreserverapi/sku SKU}
     */
    static validateSku(sku: string): string {
        if (!sku || typeof sku !== 'string') {
            throw new Error('SKU cannot be null or empty');
        }
        
        const MAXIMUM_SKU_LENGTH = 128;
        if (sku.length > MAXIMUM_SKU_LENGTH) {
            throw new Error('SKU length longer than maximum allowed');
        }
        
        return sku;
    }
    
    /**
     * Validates a UUID (Universally Unique Identifier)
     * 
     * @param uuid The UUID to validate
     * @returns The validated UUID
     * @throws Error if the UUID is invalid
     * 
     * {@link https://developer.apple.com/documentation/appstoreserverapi/appaccounttoken appAccountToken}
     */
    static validUUID(uuid: string): string {
        if (!uuid || typeof uuid !== 'string') {
            throw new Error('UUID cannot be null or empty');
        }
        
        // UUID v4 pattern: xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
        const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
        if (!uuidPattern.test(uuid)) {
            throw new Error('UUID must be a valid UUID v4 format');
        }
        
        return uuid;
    }
}