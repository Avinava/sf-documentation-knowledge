---
title: "Loyalty View Transaction Journal History Output"
domain: loyalty
topic: loyalty-view-transaction-journal-history-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:51.498Z
estimatedTokens: 173
keywords: [Loyalty, View, Transaction, Journal, History, Output, representation]
---

# Loyalty View Transaction Journal History Output

> Output representation of the view transaction history
    request.

# Loyalty View Transaction Journal History Output

Output representation of the view transaction history request.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| message | String | The message explaining why the request failed. | Small, 56.0 | 56.0 |
| status | Boolean | Indicates whether the request succeeded (true) or failed (false). | Small, 56.0 | 56.0 |
| totalCount | Integer | The total number of transaction journals that match the input criteria. | Small, 56.0 | 56.0 |
| transactionJournals | Map<String, Object>[] | The details of the transaction journals. | Small, 56.0 | 56.0 |

## Code Examples

```
{
   "message":null,
   "status":true,
   "totalCount":2,
   "transactionJournals":[
      {
         "ActivityDate":"2021-11-27T00:00:00Z",
         "BookedFareClass":"",
         "BookedRoomType":"",
         "BookingDate":"2020-10-23T00:00:00Z",
         "Brand":"Ikea",
         "Channel":"Offline",
         "Destination":"London",
         "Distance":0,
         "EndDate":"2021-10-23T00:00:00Z",
         "ErrorDescription":"",
         "EscrowPointsCreditDate":"2020-10-23",
         "Establishment":"Build",
         "ExternalTransactionNumber":"1",
         "FlightNumber":"123456",
         "Industry":"Wellness",
         "InvoiceDate":"2020-10-23",
         "JournalDate":"2021-12-25T00:00:00Z",
         "JournalReason":"",
         "JournalSubTypeId":"0lST10000000045MAA",
         "JournalTypeId":"0lET1000000009GMAQ",
         "LoyaltyProgramId":"0lpT100000000HbIAI",
         "MemberId":"0lMT100000000ZLMAY",
         "OrderId":"",
         "OrderItemId":"",
         "Origin":"NewYork",
         "PartnerId":"",
         "PaymentMethod":"",
         "ProductCategoryId":"0ZGT100000000AsOAI",
         "ProductId":"01tT1000000EQcXIAW",
         "PromotionId":"",
         "Quantity":1,
         "QuantityUnitOfMeasureId":"",
         "ReferredMemberId":"",
         "RelatedCorporateMembershipId":"",
         "RelatedJournalId":"",
         "StartDate":"2020-10-23T00:00:00Z",
         "TransactionAmount":45,
         "TransactionLocation":"",
         "TraveledFareClass":"",
         "VoucherCode":""
      },
      {
         "ActivityDate":"2021-11-27T00:00:00Z",
         "BookedFareClass":"",
         "BookedRoomType":"",
         "BookingDate":"2020-10-23T00:00:00Z",
         "Brand":"Ikea",
         "Channel":"Offline",
         "Destination":"London",
         "Distance":0,
         "EndDate":"2021-10-23T00:00:00Z",
         "ErrorDescription":"",
         "EscrowPointsCreditDate":"2020-10-23",
         "Establishment":"Build",
         "ExternalTransactionNumber":"1",
         "FlightNumber":"123456",
         "Industry":"Wellness",
         "InvoiceDate":"2020-10-23",
         "JournalDate":"2021-12-25T00:00:00Z",
         "JournalReason":"",
         "JournalSubTypeId":"0lST10000000045MAA",
         "JournalTypeId":"0lET1000000009GMAQ",
         "LoyaltyProgramId":"0lpT100000000HbIAI",
         "MemberId":"0lMT100000000ZLMAY",
         "OrderId":"",
         "OrderItemId":"",
         "Origin":"NewYork",
         "PartnerId":"",
         "PaymentMethod":"",
         "ProductCategoryId":"0ZGT100000000AsOAI",
         "ProductId":"01tT1000000EQcXIAW",
         "PromotionId":"",
         "Quantity":2,
         "QuantityUnitOfMeasureId":"",
         "ReferredMemberId":"",
         "RelatedCorporateMembershipId":"",
         "RelatedJournalId":"",
         "StartDate":"2020-10-23T00:00:00Z",
         "TransactionAmount":55,
         "TransactionLocation":"",
         "TraveledFareClass":"",
         "VoucherCode":""
      }
   ]
}
```
