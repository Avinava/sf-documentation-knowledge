---
title: "PBE Derived Pricing Input"
domain: revenue-cloud
topic: pbe-derived-pricing-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:06.216Z
estimatedTokens: 155
keywords: [PBE, Derived, Pricing, Input, representation, request, get, source, product, Price, Book, Entry, derived, pricing.]
---

# PBE Derived Pricing Input

> Input representation of the request to get the source product for the Price Book Entry
    (PBE) derived pricing.

# PBE Derived Pricing Input

Input representation of the request to get the source product for the Price Book Entry (PBE) derived pricing.

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

## Code Examples

```
{
"productId":"01txx0000006i2SAAQ",
"pricebookEntryId":"01uxx0000008yYcAAI",
"effectiveFrom":"2020-01-01T22:53:20.000Z",
"effectiveTo":"2021-01-01T22:53:20.000Z"
}
```
