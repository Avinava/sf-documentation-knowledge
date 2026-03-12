---
title: "Create Financial Records Actions"
domain: financial-services-cloud-object-reference
topic: create-financial-records-actions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:28.722Z
estimatedTokens: 327
keywords: [Financial, Records, Actions, Creates, person, accounts, contacts, assets, liabilities, residential, loan, application, REST, HTTP, Inputs]
---

# Create Financial Records Actions

> Creates person accounts, contacts, financial accounts, properties,
   assets, and liabilities from a residential loan application.

# Create Financial Records Actions

Creates person accounts, contacts, financial accounts, properties, assets, and liabilities from a residential loan application.

This object is available in API version 49.0 and later for users with a Financial Services Cloud license.

## Supported REST HTTP Methods

URI

/services/data/vXX.X/actions/standard/createFinancialRecords

Formats

JSON, XML

HTTP Methods

GET, HEAD, POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| recordId | TypeIDDescriptionID of the residential loan application. |

## Outputs

| Input | Details |
| --- | --- |
| status | TypestringDescriptionWhether the creation process succeeded, partially succeeded, or failed. |
| customerPropertiesIdList | TypestringDescriptionList of IDs created for CustomerProperty records. |
| assetsAndLiabilitiesIdList | TypestringDescriptionList of IDs created for AssetsAndLiabilities records. |
| financialAccountsIdList | TypestringDescriptionList of IDs created for FinancialAccount records. |
| personAccountsIdList | TypestringDescriptionList of IDs created for PersonAccount records. |
| errors | TypestringDescriptionList of errors that occurred during the creation process. |

## Example

JSON Request Body

```

```

JSON Response Body

```

```

## Code Examples

```
{
  "recordId" : "0cdB0000000CbVGIA0"
}
```

```
{
    "customerPropertiesIdList" : [ "0b8B0000000GnjdIAC" ],
    "assetsAndLiabilitiesIdList" : [ "a03B000000735LrIAI", "a03B000000735LsIAI", "a03B000000735LtIAI" ],
    "personAccountsIdList" : [ "001B000001K8Zx5IAF" ],
    "errors" : [ ],
    "status" : "SUCCESS",
    "financialAccountsIdList" : [ "a0EB000000227WoMAI", "a0EB000000227WpMAI", "a0EB000000227WqMAI" ]
  }
```
