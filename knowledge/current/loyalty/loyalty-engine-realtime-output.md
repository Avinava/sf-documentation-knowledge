---
title: "Loyalty Engine Realtime Output"
domain: loyalty
topic: loyalty-engine-realtime-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:51.418Z
estimatedTokens: 369
keywords: [Loyalty, Engine, Realtime, Output, representation, program, process, result]
---

# Loyalty Engine Realtime Output

> Output representation of the loyalty program process
    result.

# Loyalty Engine Realtime Output

Output representation of the loyalty program process result.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| message | String | Error message. | Small, 54.0 | 54.0 |
| processResult | Process Result | Details of each transaction journal in a request, and also the member points balance that is the currency-wise balances after all the transaction journals are processed.The process result collection is empty when the simulation is run. | Small, 54.0 | 54.0 |
| programName | String | Name of the loyalty program. | Small, 55.0 | 55.0 |
| simulationResults | Transaction Journal Map Output | Simulation result that details how the loyalty program process rules can process a transaction journal.The simulation result collection is empty when the loyalty program process is run. | Small, 55.0 | 55.0 |
| status | Boolean | Indicates whether the request succeeded (true) or failed (false). | Small, 54.0 | 54.0 |

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=loyalty)

#### Important

The response contains only the details of the points, badges, games, and vouchers that are provided by the loyalty program process rules executed for the member's order. The response doesn't contain the details of the rewards provided by the flows or the subprocesses that the loyalty program process rules execute.

## Code Examples

```
{
   "message":null,
   "processResult":{
      "memberPointsBalance":[
         {
            "memberCurrencies":[
               {
                  "currencyName":"Tier Coins",
                  "currencyType":"Qualifying",
                  "escrowPointsBalance":0.0,
                  "pointsBalance":350.0
               },
               {
                  "currencyName":"Coins",
                  "currencyType":"NonQualifying",
                  "escrowPointsBalance":0.0,
                  "pointsBalance":300.0
               }
            ],
            "memberShipNumber":"M5"
         }
      ],
      "transactionJournalResult":[
         {
            "badgesAssigned":[
               {
                  "badgeValidityEndDate":"2023-12-15",
                  "loyaltyProgramBadgeName":"Gen AI Badge",
                  "memberBadgeStatus":"1",
                  "reason":"Test"
               }
            ],
            "changeInMemberPoints":[
               {
                  "changeInMemberCurrencies":[
                     {
                        "changeInPointsBalance":100.0,
                        "currencyName":"Coins",
                        "currencyType":"NonQualifying",
                        "promotionId":"0c8RM0000004FiX"
                     }
                  ],
                  "memberShipNumber":"M5"
               }
            ],
            "gamesAssigned":[
               {
                  "gameDefinitionName":"3PRRM0000004C98",
                  "gameExpirationDate":"2023-12-28T00:00:00.000Z",
                  "reason":"Test"
               }
            ],
            "id":"0lVRM0000002qnB2AQ",
            "voucherResult":{
               "vouchersIssued":[
                  {
                     "discountPercent":10,
                     "effectiveDate":"2023-11-29",
                     "expirationDate":"2023-12-15",
                     "promotionId":"0c8RM0000004FiX",
                     "voucherDefinitionName":"10% Discount Voucher"
                  }
               ]
            }
         }
      ]
   },
   "programName":"NTO",
   "simulationResults":null,
   "status":true
}
```

## Related Topics

- Process Result (atlas.en-us.loyalty.meta/loyalty/connect_responses_process_result.htm)
- Transaction Journal Map Output (atlas.en-us.loyalty.meta/loyalty/connect_responses_transaction_journal_map_output.htm)
