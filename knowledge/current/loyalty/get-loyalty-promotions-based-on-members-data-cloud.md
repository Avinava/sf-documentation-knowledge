---
title: "Get Loyalty Promotions Based on Member's Data Cloud"
domain: loyalty
topic: get-loyalty-promotions-based-on-members-data-cloud
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:51.973Z
estimatedTokens: 413
keywords: [Loyalty, Promotions, Member's, Data, Cloud, Retrieve, eligible, member, their, market, segment, Special, Access, Rules, REST]
---

# Get Loyalty Promotions Based on Member's Data Cloud

> Retrieve the promotions that are eligible for a member based on their
   market segment.

# Get Loyalty Promotions Based on Member's Data Cloud

Retrieve the promotions that are eligible for a member based on their market segment.

For more information about how the getLoyaltyPromotionBasedOnSalesforceCDP action filters eligible promotions, see [Get a List of Promotions Applicable for a Member](https://help.salesforce.com/articleView?id=loyalty_promotion_action_cdp.htm&language=en_US) in Salesforce Help.

This action is available in API version 53.0 and later.

## Special Access Rules

This action is available in orgs where either B2C - Loyalty, B2C - Loyalty Plus, Loyalty Management - Growth, or Loyalty Management - Advanced license and Data Cloud are enabled.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/getLoyaltyPromotionBasedOnSalesforceCDP

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearertoken

## Inputs

| Input | Details |
| --- | --- |
| MemberId | TypeIDDescriptionRequired. ID of the loyalty program member for whom promotions must be filtered. Make sure that the member is part of a Data Cloud market segment. |
| PromotionRecords | TypesObjectDescriptionPromotion records to filter the promotions that are applicable to the member's market segment. |

## Outputs

| Output | Details |
| --- | --- |
| PromotionRecords | TypesObjectDescriptionPromotion records that the member is eligible for based on the member's market segment. |

## Example

POST

Here's a sample request for the Get Promotions Based on Member's Data Cloud Segment action.

```

```

Here's a sample response for the Get Promotions Based on Member's Data Cloud Segment action.

```

```

## Code Examples

```
{
   "inputs": [ {
      "MemberId":"0lMxx0000000EYAMA2"
   } ]
}
```

```
[ {
  "actionName" : "getLoyaltyPromotionBasedOnSalesforceCDP",
  "errors" : null,
  "isSuccess" : true,
  "outputValues" : {
    "PromotionRecords" : [ {
      "attributes" : {
        "type" : "Promotion",
        "url" : "/services/data/v53.0/sobjects/Promotion/0c8T10000004CBEIA2"
      },
      "Id" : "0c8xx0000004CBEIA2",
      "OwnerId" : "005xx000000HwDoIAK",
      "IsDeleted" : false,
      "Name" : "Sample Promotion",
      "CreatedDate" : "2021-07-21T04:13:15.000+0000",
      "CreatedById" : "005xx000000HwDoIAK",
      "LastModifiedDate" : "2021-07-21T04:13:15.000+0000",
      "LastModifiedById" : "005xx000000HwDoIAK",
      "SystemModstamp" : "2021-07-21T04:13:15.000+0000",
      "LastViewedDate" : "2021-07-21T04:15:21.000+0000",
      "LastReferencedDate" : "2021-07-21T04:15:21.000+0000",
      "StartDate" : "2021-07-20",
      "IsActive" : true,
      "LoyaltyPromotionType" : "Cumulative",
      "IsEnrollmentRequired" : false,
      "CumulativeUsageTarget" : 100,
      "FulfillmentAction" : "CreditPoints",
      "LoyaltyProgramId" : "0lpxx00000000HWIAY",
      "TotalRewardPoints" : 100,
      "LoyaltyProgramCurrencyId" : "0lcxx00000000XeIAI",
      "TransactionJournalType" : "Accrual",
      "IsPointsWithFactor" : false
    } ]
  }
} ]
```
