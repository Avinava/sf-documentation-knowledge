---
title: "Application Context"
domain: chatterapi
topic: application-context
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:17.218Z
estimatedTokens: 1098
keywords: [Application, Context, Commerce, store]
---

# Application Context

> Application context for a Commerce store.

# Application Context

Application context for a Commerce store.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| cartCalculate​Enabled | Boolean | Indicates whether the cart is enabled (true) or not (false). | Small, 60.0 | 60.0 |
| catalogSnapshot​VersionId | String | ID of the catalog snapshot's version. | Small, 54.0 | 54.0 |
| checkoutSettings | Checkout Settings | Settings for Salesforce Checkout. | Small, 61.0 | 61.0 |
| clientSide​Payment​Configuration | Client-Side Payment Configuration | Client-side payment configuration. | Small, 54.0 | 54.0 |
| country | String | Two-digit ISO code of the store's country. | Small, 55.0 | 55.0 |
| defaultCurrency | String | Default currency for the store. | Small, 54.0 | 54.0 |
| giftingConfig | Gifting Config | Gifting configuration settings for the org. | Small, 64.0 | 64.0 |
| guestBrowsing​Enabled | Boolean | Indicates if guest browsing is enabled (true) or not (false). | Small, 57.0 | 57.0 |
| guestCart​Enabled | Boolean | Indicates whether the guest cart access is enabled (true) or not (false). | Small, 58.0 | 58.0 |
| guestCart​CheckoutEnabled | Boolean | Indicates whether the guest cart checkout feature is enabled (true) or not (false).In API version 58.0 and later, use guestCartEnabled and guestCheckoutEnabled instead. | Small, 54.0 | 54.0-57.0 |
| guestCheckout​Enabled | Boolean | Indicates whether the guest checkout access is enabled (true) or not (false). | Small, 58.0 | 58.0 |
| inventory​Configuration | Inventory Configuration | Inventory configuration settings for the store. | Small, 58.0 | 58.0 |
| managedCheckout​Version | String | Managed checkout version number for the store. | Small, 62.0 | 62.0 |
| markets | Markets | Market configuration for the store. | Small, 58.0 | 58.0 |
| orderStatuses | Order Status[] | Order statuses available in the Status picklist of the Order Summary object. | Small, 62.0 | 62.0 |
| placeOrderV2​Enabled | Boolean | Indicates whether place order orchestration V2 is enabled (true) or not (false) for your web store. | Small, 64.0 | 64.0 |
| productConfig | Product Config | Product configuration settings for the org. | Small, 65.0 | 65.0 |
| propertiesEx | Map<String,Object> | Map of extra properties. Properties contained here should not be relied on and may be removed at any time. | Small, 54.0 | 54.0 |
| sessionDriven​Currency | Boolean | Indicates whether to base the currency on the session context value (true) or not (false). For D2C stores without markets, this property is set to false. For D2C stores with markets and for all B2B stores (with or without markets), the property is set to true. | Small, 57.0 | 57.0 |
| shipping​Countries | String[] | Array of two-digit ISO codes of the countries to which purchases in the store can be shipped. If the store’s Supported Ship To Countries field is set, this value matches it. If not, then this value matches the country value. | Small, 55.0 | 55.0 |
| shopperConsent​Enabled | Boolean | Indicates whether shopper consent is enabled (true) or not (false) for your web store. | Small, 64.0 | 64.0 |
| skipPhoneNumber​ValidationEnabled | Boolean | Indicates whether skip phone number validation is enabled (true) or not (false) for your web store. | Small, 64.0 | 64.0 |
| splitShipment​Enabled | Boolean | Indicates whether split shipment is enabled (true) or not (false) for your web store. | Small, 60.0 | 60.0 |
| subscription​Config | Subscription Config | Commerce subscription configuration settings for the org. | Small, 63.0 | 63.0 |
| supported​Currencies | String[] | List of currencies supported for the store. | Small, 54.0 | 54.0 |
| taxType | String | Tax type of the store. Gross if prices include tax. Net if prices don't include tax. | Small, 55.0 | 55.0 |
| usesSingle​Entitlement​Policy | Boolean | Indicates if the store uses a single entitlement policy (true) or not (false). | Small, 54.0 | 54.0 |
| usesUniversal​Pricebooks | Boolean | Indicates if the store uses a single price book for both guest and authenticated users (true) or not (false). | Small, 62.0 | 62.0 |

#### See Also

-   [Commerce Webstore Application Context](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_application_context.htm "Get application context information for a Commerce store.")

## Code Examples

```
{
  "cartCalculateEnabled": true,
  "checkoutSettings": {
    "isManagedCheckoutEnabled": false,
    "isMngCheckoutAutoPublished": true,
    "paymentConfiguration": {
      "businessAchEnabled": false,
      "paymentMethodManualCaptureEnabled": false,
      "paymentMethodSetDevName": ""
    },
    "shippingMethodsEnabled": true
  },
  "country": "US",
  "defaultCurrency": "USD",
  "giftingConfig": {
    "isGiftMessageEnabled": false,
    "isGiftWrapEnabled": false,
    "isGiftingEnabled": false
  },
  "guestBrowsingEnabled": false,
  "guestCartCheckoutEnabled": true,
  "guestCartEnabled": true,
  "guestCheckoutEnabled": true,
  "inventoryConfiguration": {
    "isInventoryEnabled": false
  },
  "managedCheckoutVersion": "0.117.0",
  "markets": [],
  "orderStatuses": [
    {
      "apiName": "Created",
      "displayValue": "Created"
    }
  ],
  "placeOrderV2Enabled": true,
  "productConfig": {
    "configuratorFlowApiName": "Commerce_Product_Configurator_Flow"
  },
  "propertiesEx": {
    "shopperCopilotUIEnabled": false,
    "highScaleCartEnabled": false
  },
  "sessionDrivenCurrency": true,
  "shippingCountries": [
    "US"
  ],
  "shopperConsentEnabled": false,
  "skipPhoneNumberValidationEnabled": false,
  "splitShipmentEnabled": false,
  "subscriptionConfig": {
    "commerceSubscriptionARCUIEnabled": false,
    "rlmSubscriptionEnabled": false,
    "subscriptionPlusEnabled": false
  },
  "supportedCurrencies": [
    "USD"
  ],
  "taxType": "Gross",
  "usesSingleEntitlementPolicy": false,
  "usesUniversalPricebooks": false
}
```

## Related Topics

- Checkout Settings (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_checkout_setting.htm)
- Client-Side Payment Configuration (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_client_side_payment_configuration.htm)
- Gifting
                Config (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_gifting_config.htm)
- Inventory Configuration (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_inventory_configuration.htm)
- Markets (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_markets.htm)
- Order Status (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_order_status.htm)
- Product Config (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_config.htm)
- Subscription Config (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_subscription_config.htm)
- Commerce Webstore Application Context (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_application_context.htm)
