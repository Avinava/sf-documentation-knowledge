---
title: "PBE Derived Pricing (POST)"
domain: revenue-cloud
topic: pbe-derived-pricing-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:07.009Z
estimatedTokens: 254
keywords: [PBE, Derived, Pricing, POST, Get, source, product, Price, Book, Entry, derived, pricing.]
---

# PBE Derived Pricing (POST)

> Get the source product for the Price Book Entry (PBE) derived
      pricing.

# PBE Derived Pricing (POST)

Get the source product for the Price Book Entry (PBE) derived pricing.

Resource

```

```

Resource example

```

```

Available version

61.0

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| effective​From | String | Date from when the price book entry is effective. | Required | 61.0 |
| effective​To | String | Date until when the price book entry is effective. | Required | 61.0 |
| pricebook​EntryId | String | ID of the price book entry. | Required | 61.0 |
| product​Id | String | ID of the price book. | Required | 61.0 |

Response body for POST

[PBE Derived Pricing](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_p_b_e_derived_pricing_out_put.htm "Output representation of the response that includes the source product for the Price Book Entry (PBE) derived pricing.")

## Code Examples

```
/connect/core-pricing/pbeDerivedPricingSourceProduct
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/core-pricing/pbeDerivedPricingSourceProduct
```

```
{
"productId":"01txx0000006i2SAAQ",
"pricebookEntryId":"01uxx0000008yYcAAI",
"effectiveFrom":"2020-01-01T22:53:20.000Z",
"effectiveTo":"2021-01-01T22:53:20.000Z"
}
```

## Related Topics

- PBE Derived Pricing (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_p_b_e_derived_pricing_out_put.htm)
