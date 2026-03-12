---
title: "Get Promotions Based on Transaction Journal"
domain: loyalty
topic: get-promotions-based-on-transaction-journal
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:51.968Z
estimatedTokens: 354
keywords: [Promotions, Transaction, Journal, Retrieve, active, eligible, action, process, accrual, redemption, transactions, Special, Access, Rules, REST]
---

# Get Promotions Based on Transaction Journal

> Retrieve active promotions that are eligible for a transaction journal.
   The action can process accrual or redemption transactions.

# Get Promotions Based on Transaction Journal

Retrieve active promotions that are eligible for a transaction journal. The action can process accrual or redemption transactions.

For more information about how the getLoyaltyPromotion action filters eligible promotions, see [Get a List of Promotions Applicable for a Transaction](https://help.salesforce.com/articleView?id=loyalty_promotion_action_transaction.htm&language=en_US "HTML (New Window)") in Salesforce Help.

This action is available in API version 53.0 and later.

## Special Access Rules

This action is available in orgs where either B2C - Loyalty, B2C - Loyalty Plus, Loyalty Management - Growth, or Loyalty Management - Advanced license is enabled.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/getLoyaltyPromotion

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearertoken

## Inputs

| Input | Details |
| --- | --- |
| JournalId | TypeIDDescriptionRequired. ID of an Accrual or Redemption type Transaction Journal record. |

## Outputs

| Output | Details |
| --- | --- |
| PromotionRecords | TypesObjectDescriptionPromotion records that are eligible for the transaction journal. |

## Example

POST

Here's a sample request for the Get Promotions Based on Transaction Journal action.

```

```

Here's a sample response for the Get Promotions Based on Transaction Journal action.

```

```

## Code Examples

```
{
   "inputs": [ {
      "JournalId":"0lVxx000000016GMAQ"
   } ]
}
```

```
[ {
  "actionName" : "getLoyaltyPromotion",
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
