---
title: "Entitlement Settings Input"
domain: chatterapi
topic: entitlement-settings-input
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:11.591Z
estimatedTokens: 199
keywords: [Entitlement, Settings, Input, applicable, product, rows, import, csv, file]
---

# Entitlement Settings Input

> Entitlement settings applicable to all product rows in a product
      import .csv file.

# Entitlement Settings Input

Entitlement settings applicable to all product rows in a product import .csv file.

Root XML tag

<entitlementSettings>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| defaultEntitlementPolicyId | String | ID of entitlement policy to associate with each product row in a product import .csv file. | Required if you specify one or more entitlement-related column headings in your .csv file | 54.0 |

#### See Also

-   [*Salesforce B2B Commerce and D2C Commerce*: Import Comerce Data](https://help.salesforce.com/s/articleView?id=commerce.comm_data_import.htm&type=5&language=en_US "Salesforce B2B Commerce and D2C Commerce: Import Comerce
    Data - HTML (New Window)")

## Code Examples

```
{
   "entitlement":{
      "defaultEntitlementPolicyId":"1CeRM00000003o40AA"
   }
}
```
