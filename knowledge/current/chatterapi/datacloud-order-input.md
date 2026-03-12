---
title: "Datacloud Order Input"
domain: chatterapi
topic: datacloud-order-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.487Z
estimatedTokens: 259
keywords: [Datacloud, Order, Input, Data.com, identification, numbers, purchase, contacts, companies, specific, user]
---

# Datacloud Order Input

> A list of Data.com identification numbers that are used to purchase
      contacts or companies by a specific user type.

# Datacloud Order Input

A list of Data.com identification numbers that are used to purchase contacts or companies by a specific user type.

Root XML tag

<DatacloudOrder>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| companyIds | String | The list of companies to purchase. If contactIds are included with companyIds, your purchase fails. | Required to purchase companies | 32.0 |
| contactIds | String | The list of contacts to purchase. If companyIds are included with contactIds, your purchase fails. | Required to purchase contacts | 32.0 |
| userType | String | The Data.com user type.Monthly—A user type that’s assigned monthly point limits for purchasing Data.com records. Only the assigned user can use monthly points. Points expire at the end of the month. Monthly is the default setting for DatacloudUserType.Listpool—A user type that allows users to draw from a pool of points to purchase Data.com records. | Optional | 32.0 |

## Code Examples

```
{
   "companyIds":[
      "23456",
      "24548"
   ],
   "userType":"Monthly"
}
```
