---
title: "Commerce Webstore Taxes"
domain: chatterapi
topic: commerce-webstore-taxes
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.602Z
estimatedTokens: 310
keywords: [Commerce, Webstore, Taxes, product, store, state, country, buyer, account, guest, profile]
---

# Commerce Webstore Taxes

> Get taxes for a product based on the store, state, country, and
      buyer account or guest profile ID.

# Commerce Webstore Taxes

Get taxes for a product based on the store, state, country, and buyer account or guest profile ID.

Resource

```

```

Resource example

```

```

Available version

56.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| countryIsoCode | String | ISO code of the country. Must match one of the valid ISO codes defined within the org’s State-Country picklist. For example, US for United States.If unspecified, the default value is the default country for the webstore. | Required | 56.0 |
| effective​AccountId | String | ID of the buyer account or guest buyer profile for which the request is made. If unspecified, the default value is determined from context. | Required | 56.0 |
| stateIsoCode | String | ISO code of the state. Must match one of the valid ISO codes defined within the org’s State picklist. For example, CA for California state. | Optional | 56.0 |

Response body for GET

[Store Taxes Info](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_commerce_get_store_tax_info.htm "Output representation of the tax type along with a collection of tax details about a product.")

## Code Examples

```
/commerce/webstores/${webstoreId}/taxes/products/${productId}
```

```
https://yourInstance.salesforce.com/services/data/v66.0/commerce/webstores/0ZEPI0000000j8Q4AQ/taxes/​products/01tPI0000003fLBYAY?effectiveAccountId=001PI0000025YckYAE&countryIsoCode=US&stateIsoCode=CA
```

## Related Topics

- Store Taxes
              Info (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_commerce_get_store_tax_info.htm)
