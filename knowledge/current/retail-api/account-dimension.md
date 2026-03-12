---
title: "Account Dimension"
domain: retail-api
topic: account-dimension
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:37.224Z
estimatedTokens: 196
keywords: [Account, Dimension, integration, export, configured, sales, org, CSV, exports, executed, meta, JSON]
---

# Account Dimension

> The account dimension for integration export must be configured for each sales org on
  which CSV exports is executed.

# Account Dimension

The account dimension for integration export must be configured for each sales org on which CSV exports is executed.

The integration export fetches content of the account dimension from the Salesforce object—[Account](https://developer.salesforce.com/docs/atlas.en-us.260.0.retail_api.meta/retail_api/sforce_api_objects_account.htm "HTML (New Window)"). After creation of RTR Report Configuration" records, provide the following information and a meta JSON:
| Attribute | Description |
| --- | --- |
| Information Internal Name | A unique internal name of the account. |
| Configuration Usage | Integration Account Dimension |
| Configuration of sales org | The sales organization to which the account belongs. |

## Account dimension meta JSON example

```

```

## Code Examples

```
[
   {
      "name":"name",
      "fieldsf":"Name",
      "fieldsf$label":"Name"
   },
   {
      "name":"externalid",
      "fieldsf":"CGCloud__ExternalId__c",
      "fieldsf$label":"CGCloud__ExternalId__c"
   },
   {
      "name":"accountnumber",
      "fieldsf":"CGCloud__Account_Number__c",
      "fieldsf$label":"CGCloud__Account_Number__c"
   }
]
```
