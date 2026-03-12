---
title: "Commerce Webstore Pricing Products"
domain: chatterapi
topic: commerce-webstore-pricing-products
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.457Z
estimatedTokens: 746
keywords: [Commerce, Webstore, Pricing, Products, prices, multiple]
---

# Commerce Webstore Pricing Products

> Get the prices for multiple products.

# Commerce Webstore Pricing Products

Get the prices for multiple products.

Getting prices for products respects buyer entitlements and only users entitled to view product and price data can access it.

To get price information, the context store and account must have 25 or fewer price books associated with them. To reduce the number of active price books for the account within the store, you can change the active status, modify valid dates, or remove assignments of price books.

If a store is segmented into markets, this API looks at the language parameter appended to the URL to determine the shopper’s locale and returns the appropriate values.

Resource

```

```

Resource examples

```

```

```

```

Available version

49.0

HTTP methods

GET, POST

POST methods typically create an item, but for this resource POST is used to retrieve information. GET calls can be cached.

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| currencyIsoCode | String | Three-letter ISO 4217 currency code associated with the product pricing record.Products are priced using the currency for the buyer account or guest buyer profile. If your store doesn’t support the currency for the buyer account or guest buyer profile, products are priced using the default currency for your store. | Optional | 54.0 |
| effective​AccountId | String | ID of the buyer account or guest buyer profile for which the request is made. If unspecified, the default value is determined from context. | Optional | 54.0 |
| productIds | String[] | List of product IDs for which you want to get prices. | Required | 54.0 |

Response body for GET

[Pricing Result](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_pricing_result.htm "Product pricing result.")

Request parameters for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| currencyIsoCode | String | Three-letter ISO 4217 currency code associated with the product pricing record.Products are priced using the currency for the buyer account or guest buyer profile. If your store doesn’t support the currency for the buyer account or guest buyer profile, products are priced using the default currency for your store. | Optional | 49.0 |
| effective​AccountId | String | ID of the buyer account or guest buyer profile for which the request is made. If unspecified, the default value is determined from context. | Optional | 49.0 |

Request body for POST

Root XML tag

<PricingInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| pricingLine​Items | Pricing Line Item Input[] | Up to 500 line items for pricing. | Required | 49.0 |

Response body for POST

[Pricing Result](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_pricing_result.htm "Product pricing result.")

## Code Examples

```
/commerce/webstores/${webstoreId}/pricing/products
```

```
https://yourInstance.salesforce.com/services/data/v66.0/commerce/webstores/0ZExx0000000002GAA/pricing/products
```

```
https://yourInstance.salesforce.com/services/data/v66.0/commerce/webstores/0ZEOK00000008vK4AQ​/pricing/products?currencyIsoCode=USD&effectiveAccountId=001OK000001o5FtYAI&productIds=01txx000000000A,01txx000000000V
```

```
{
   "pricingLineItems":[
      {
         "productId":"01txx000000000V"
      },
      {
         "productId":"01txx000000000W"
      },
      {
         "productId":"01txx000000000A"
      }
   ]
}
```

## Related Topics

- Pricing Result (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_pricing_result.htm)
- Pricing Line Item Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_pricing_input_line_item.htm)
