---
title: "Transaction Journals Execution"
domain: loyalty
topic: transaction-journals-execution
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:51.124Z
estimatedTokens: 895
keywords: [Transaction, Journals, Execution, resource, process, against, corresponding, loyalty, program]
---

# Transaction Journals Execution

> Use this resource to create and process a list of transaction
      journals against a corresponding loyalty program process.

# Transaction Journals Execution

Use this resource to create and process a list of transaction journals against a corresponding loyalty program process.

The loyalty program processes determine how transaction journals are processed. When transaction journals meet the criteria and conditions for a program process, actions that are set up in the process are triggered for the transaction journals. For more information on how to set up program process, see [LoyaltyProgramSetup](https://developer.salesforce.com/docs/atlas.en-us.260.0.loyalty.meta/loyalty/meta_loyaltyprogramsetup.htm).

Special Access Rules

To use this resource, your org must have either B2C - Loyalty, B2C - Loyalty Plus, Loyalty Management - Growth, or Loyalty Management - Advanced license enabled, and you must be assigned the Loyalty Management permission set.

Resource

```

```

Resource example

```

```

Available version

54.0

Requires Chatter

No

HTTP methods

POST

Request body for POST

JSON example

In the JSON, you can either provide the details of transaction journals that aren’t available in the org, or a list of IDs that belong to transaction journals available in the org. If you provide the details of transaction journals that aren’t available in the org, each transaction journal’s applicable loyalty program process applies the eligible rules, executes the applicable actions, and then creates the transaction journal.

Using the transaction journal details:

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=loyalty)

#### Note

Some of the API request fields contain field names that are interchangeable. For information on the list of interchangeable field names, see [Loyalty Management Connect API Interchangeable Request Fields](atlas.en-us.loyalty.meta/loyalty/loyalty_connect_interchangeable_request_fields.htm "The Loyalty Management Business API supports interchangeable fields in JSON requests. For some of the request fields, you can use either an ID, number, or name. For example, if you don’t want to store and use Salesforce IDs when accessing Loyalty Management-related data from an external system, simply use names and numbers instead.").

Here’s a JSON example that creates a transaction journal for a purchase-related transaction made by a loyalty program member of a retail company. It has all the transaction journal-related information along with the details of the promotion applied, including the different types of rewards the transaction is eligible for. For information on the TransactionJournal object fields, see [https://developer.salesforce.com/docs/atlas.en-us.loyalty.meta/loyalty/sforce\_api\_objects\_transactionjournal.htm](https://developer.salesforce.com/docs/atlas.en-us.260.0.loyalty.meta/loyalty/sforce_api_objects_transactionjournal.htm).

```

```

Here’s a JSON example to create a transaction journal for a loyalty program member of an airline company.

```

```

Using the transaction journal ID:

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=loyalty)

#### Note

This is supported in API version 55.0 and later.

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| processInput | Map<String, Object> | List of the Transaction Journal records to process and create. | Required | 54.0 |

Response body for POST

[Loyalty Engine Realtime Output](atlas.en-us.loyalty.meta/loyalty/connect_responses_loyalty_engine_realtime_output.htm "Output representation of the loyalty program process result.")

## Code Examples

```
/connect/realtime/loyalty/programs/${programName}
```

```
https://yourInstance.salesforce.com/services/data/vXX.X/connect
/realtime/loyalty/programs/CloudKicksInnerCircle
```

```
{
  "transactionJournals": [
    {
      "ActivityDate": "2023-11-27T12:45:19Z",
      "JournalTypeId": "0lERM00000001Bb2AI",
      "LoyaltyProgramId": "0lpRM00000002YTYAY",
      "MemberId": "0lMRM0000002Fmu2AE",
      "Status": "Pending",
      "ProductId": "01txx0000006iTsAAI",
      "ProductCategoryId": "0ZSSB0000002d8X4AQ",
      "Quantity": "4",
      "TransactionAmount": "500",
      "appliedPromotions": [
        {
          "promotionId": "0c8RM0000004FiXYAU",
          "couponCode": "COUPON100",
          "rewards": [
            {
              "rewardType": "Discount",
              "discountAmount": 15
            },
            {
              "rewardType": "Points",
              "loyaltyProgramCurrencyName": "Coins",
              "points": 100,
              "relatedInformation": "Test",
              "notes": "points reward"
            },
            {
              "rewardType": "Voucher",
              "voucherDefinitionName": "10% Discount Voucher",
              "voucherExpirationDate": "2023-12-15",
              "voucherEffectiveDate": "2023-11-29",
              "notes": "discount voucher"
            },
            {
              "rewardType": "Badge",
              "loyaltyProgramBadgeName": "Gen AI Badge",
              "memberBadgeStatus": "Active",
              "badgeValidityEndDate": "2023-12-15",
              "reason": "purchase"
            },
            {
              "rewardType": "Game",
              "gameDefinitionName": "SpintheWheelGame"
            }
          ]
        }
      ]
    }
  ]
}
```

```
{
   "transactionJournals":[
      {
         "ActivityDate":"2022-01-04T12:45:19Z",
         "JournalDate":"2022-01-04T00:45:19Z",
         "Brand":"Tata",
         "Establishment":"Vistara",
         "ExternalTransactionNumber":"P1-981950",
         "JournalTypeId":"0lET10000004CQp",
         "LoyaltyProgramId":"0lpT10000004CdN",
         "MemberId":"0lMT10000004CfA",
         "TransactionAmount":"117",
         "TransactionLocation":"HitechCity",
         "VoucherCode":"",
         "Origin":"Bangalore",
         "Distance":"5",
         "Destination":"Hyderabad",
         "FlightNumber":"VS-Ran-001",
         "Status":"Pending"
      }
   ]
}
```

```
{
  "transactionJournals": [
    {
      "Id": "0lVxx00000000cj"
    }
  ]
}
```

## Related Topics

- Loyalty Management Connect API Interchangeable Request Fields (atlas.en-us.loyalty.meta/loyalty/loyalty_connect_interchangeable_request_fields.htm)
- Loyalty Engine Realtime Output (atlas.en-us.loyalty.meta/loyalty/connect_responses_loyalty_engine_realtime_output.htm)
