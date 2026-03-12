---
title: "Loyalty Engine Input"
domain: loyalty
topic: loyalty-engine-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:50.921Z
estimatedTokens: 423
keywords: [Loyalty, Engine, Input, representation, Runtime, API]
---

# Loyalty Engine Input

> Input representation of the Loyalty Engine Runtime
    API.

# Loyalty Engine Input

Input representation of the Loyalty Engine Runtime API.

Root XML tag

<loyaltyEngineInput>

JSON example

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=loyalty)

#### Note

Some of the API request fields contain field names that are interchangeable. For information on the list of interchangeable field names, see [Loyalty Management Connect API Interchangeable Request Fields](atlas.en-us.loyalty.meta/loyalty/loyalty_connect_interchangeable_request_fields.htm "The Loyalty Management Business API supports interchangeable fields in JSON requests. For some of the request fields, you can use either an ID, number, or name. For example, if you don’t want to store and use Salesforce IDs when accessing Loyalty Management-related data from an external system, simply use names and numbers instead.").

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=loyalty)

#### Note

Provide contactId to retrieve rewards related to a Person Account.

Using the transaction journal ID:

```

```

Sample payload to retrieve rewards assigned to accounts.

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| shouldCheckCouponUsageLimit | Boolean | Indicates whether the coupon usage limit check is enabled. | Required | 62.0 |
| transactionJournals | Loyalty Engine Input Map | Represents the transaction journals records to process. | Required | 54.0 |
| runSetting | Loyalty Engine Run Settings Input | Loyalty runtime setting to run the simulation on the transaction journals. | Required for simulation, otherwise optional | 55.0 |

## Code Examples

```
{
  "shouldCheckCouponUsageLimit": true
  "transactionJournals": [
    {
      "ActivityDate": "2022-01-04T12:45:19Z",
      "JournalDate": "2022-01-04T00:45:19Z",
      "Brand": "",
      "Establishment": "Apple",
      "ExternalTransactionNumber": "P1-981950",
      "JournalTypeId": "0lET10000004CQp",
      "LoyaltyProgramId": "0lpT10000004CdN",
      "MemberId": "0lMT10000004CfA",
      "TransactionAmount": "117",
      "TransactionLocation": "HitechCity",
      "VoucherCode": "",
      "Origin": "asdf",
      "Distance": "5",
      "Destination": "Hyderabad",
      "FlightNumber": "SF-Ran-001",
      "Status": "Pending"
    }
  ],
  "runSetting": {
    "isSimulation": true
  }
}
```

```
{
  "transactionJournals": [
    {
      "Id": "0lVxx00000000cj"
    }
  ],
  "runSetting": {
    "isSimulation": true
  }
}
```

```
{
    "transactionJournals": [
      {
        "ActivityDate": "2024-11-27T12:45:19Z",
        "JournalTypeId": "0lERM00000001Bb2AI",
        "LoyaltyProgramId": "0lpRM00000002YTYAY",
        "ReferredPartyId": "001xx000003H3NnAAK",
        "Status": "Pending",
        "ProductId": "01txx0000006i44AAA",
        "ProductCategoryId": "0ZGxx0000000001GAA",
        "Quantity": "1",
        "TransactionAmount": "42",
        "appliedPromotions": [
          {
            "promotionId": "0c8xx00000000mPAAQ",
            "rewards": [
              {
                "rewardType": "Discount",
                "discountAmount": 5
              },
              {
                "rewardType": "Discount",
                "discountAmount": 10
              },
              {
                "rewardType": "Voucher",
                "voucherDefinitionName": "Voucher2",
                "voucherExpirationDate": "2025-08-07",
                "voucherEffectiveDate": "2024-08-08",
              },
              {
                "rewardType": "Game",
                "gameDefinitionName": "TestPostFacto",
              },
            ]
          }
        ] 
      }
    ]
  }
```

## Related Topics

- Loyalty Management Connect API Interchangeable Request Fields (atlas.en-us.loyalty.meta/loyalty/loyalty_connect_interchangeable_request_fields.htm)
- Loyalty Engine Input Map (atlas.en-us.loyalty.meta/loyalty/connect_requests_loyalty_engine_input_map.htm)
- Loyalty Engine Run Settings Input (atlas.en-us.loyalty.meta/loyalty/connect_requests_loyalty_engine_run_settings.htm)
