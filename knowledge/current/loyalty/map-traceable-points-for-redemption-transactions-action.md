---
title: "Map Traceable Points for Redemption Transactions Action"
domain: loyalty
topic: map-traceable-points-for-redemption-transactions-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.446Z
estimatedTokens: 383
keywords: [Map, Traceable, Points, Redemption, Transactions, Action, Maps, Debit, loyalty, ledgers, Credit, ledger, traceability, records, pending]
---

# Map Traceable Points for Redemption Transactions Action

> Maps Debit type loyalty ledgers to Credit type loyalty ledgers for loyalty ledger
        traceability records that are pending.

# Map Traceable Points for Redemption Transactions Action

Maps Debit type loyalty ledgers to Credit type loyalty ledgers for loyalty ledger traceability records that are pending.

This action is available in API version 66.0 and later.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/mapTraceablePtForRedemTrxn

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearertoken

## Inputs

Either LoyaltyLedgerTraceabilityId or MemberId is required. If both are provided and the MemberId doesn’t belong to the specified LoyaltyLedgerTraceabilityId, an error is returned.

| Input | Details |
| --- | --- |
| loyaltyLedgerTraceabilityId | TypestringDescriptionThe ID of the traceable loyalty ledger. Processes all the pending traceable ledgers for the loyalty program member associated with the traceability ID. |
| loyaltyProgramMemberId | TypestringDescriptionThe ID of the loyalty program member for whom you want to trace pending traceable ledgers. |

## Outputs

| Output | Details |
| --- | --- |
| loyaltyProgramMemberId | TypestringDescriptionThe ID of the loyalty program member whose pending traceable ledgers are processed. |
| numberOfTracesProcessed | TypeintegerDescriptionThe number of traceable loyalty ledgers processed for a loyalty program member. |

## Example

POST

Here's a sample request for the Map Traceable Points for Redemption Transactions action.

```

```

Here's a sample response for the Map Traceable Points for Redemption Transactions action.

```

```

## Code Examples

```
{
  "inputs": [
    {
      "loyaltyLedgerTraceabilityId": "0ltRM0000008Abc2AE",
      "loyaltyProgramMemberId": "0lMRM0000004Eqv2AE"
    }
  ]
}
```

```
{
  "actionName": "mapTraceablePtForRedemTrxn",
  "errors": null,
  "isSuccess": true,
  "outputs": {
    "loyaltyProgramMemberId": "0lMRM0000004Eqv2AE",
    "numberOfTracesProcessed": 5
  }
}
```
