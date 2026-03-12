---
title: "Mortgage Application"
domain: financial-services-cloud-object-reference
topic: mortgage-application
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:28.449Z
estimatedTokens: 300
keywords: [Mortgage, Application, API, call, borrowers, declarations, incomes, addresses, financial, transactions, liabilities, assets, title, holders, loanApplicationId]
---

# Mortgage Application

> Use a single API call to get and update mortgage application
      information like borrowers, declarations, incomes, addresses, financial transactions,
      liabilities, assets, properties, and title holders. You can use both the loanApplicationId and the externalID of an external system to get a mortgage application.

# Mortgage Application

Use a single API call to get and update mortgage application information like borrowers, declarations, incomes, addresses, financial transactions, liabilities, assets, properties, and title holders. You can use both the loanApplicationId and the externalID of an external system to get a mortgage application.

Resource

```

```

Available version

48.0

Authentication

Use OAuth to connect to Salesforce and get an access token. Pass the access token in your requests. For more information, see Connect to Connect REST API Using OAuth.

HTTP methods

GET, PATCH

Path Parameters

| Parameter Name | Type | Description | Required | Available version |
| --- | --- | --- | --- | --- |
| loanId | String | id or externalId associated with a loan application. | Yes | 48.0 |

Request body JSON Example

```

```

Response body for GET and PATCH

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| message | String | Error message, if any. | Small, 48.0 | 48.0 |
| result | Mortgage Information Output[] | Data of the mortgage result. | Small, 48.0 | 48.0 |

Sample response body for GET and PATCH

```

```

## Code Examples

```
/connect/financialservices/mortgages/loanId
```

```
{
  "amortizationTerm": 30
}
```

```
{
  "result" : {
    "accountId" : "001RM000004Xra2YAC",
    "assets" : [ ],
    "borrowers" : [ ],
    "createdById" : "005RM000001vbghYAA",
    "createdDate" : "2019-11-06T19:29:10.000Z",
    "extendedFields" : [ ],
    "externalId" : "tt2",
    "financials" : [ ],
    "hasOtherLoanFeature" : false,
    "hasPrepaymentPenalty" : false,
    "id" : "0cdRM00000000n5YAA",
    "isBalloon" : false,
    "isBorrowerInCommunityPropState" : false,
    "isConstructionToPermanent" : false,
    "isContractForDeed" : false,
    "isDeleted" : false,
    "isEnergyRelatedImprovement" : false,
    "isInterestOnly" : false,
    "isNegativeAmortization" : false,
    "isPropInCommunityPropState" : false,
    "isRenovation" : false,
    "isSingleClosing" : false,
    "isSubjectToPriorityLien" : false,
    "isTempIntRateBuydown" : false,
    "lastModifiedById" : "005RM000001vbghYAA",
    "lastModifiedDate" : "2019-11-06T19:31:07.000Z",
    "lastReferencedDate" : "2019-11-06T19:35:31.000Z",
    "lastViewedDate" : "2019-11-06T19:35:31.000Z",
    "liabilities" : [ ],
    "name" : "tt2",
    "ownerId" : "005RM000001vbghYAA",
    "properties" : [ ],
    "systemModstamp" : "2019-11-06T19:31:07.000Z",
    "titleHolders" : [ {
      "createdById" : "005RM000001vbghYAA",
      "createdDate" : "2019-11-06T19:29:10.000Z",
      "extendedFields" : [ ],
      "externalId" : "tt1",
      "id" : "0cTRM000000009e2AA",
      "isCurrentTitleHolder" : false,
      "isDeleted" : false,
      "lastModifiedById" : "005RM000001vbghYAA",
      "lastModifiedDate" : "2019-11-06T19:31:07.000Z",
      "lastReferencedDate" : "2019-11-06T19:31:07.000Z",
      "lastViewedDate" : "2019-11-06T19:31:07.000Z",
      "loanApplicationId" : "0cdRM00000000n5YAA",
      "name" : "tt2",
      "systemModstamp" : "2019-11-06T19:31:07.000Z"
    } ]
  }
}
```

## Related Topics

- Mortgage Information Output (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_responses_get_mortgage_result.htm)
