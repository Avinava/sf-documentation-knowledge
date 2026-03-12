---
title: "getDisputeItems(caseId)"
domain: financial-services-cloud-object-reference
topic: getdisputeitemscaseid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:28.027Z
estimatedTokens: 148
keywords: [getDisputeItems, caseId, disputed, transactions, Case, createDisputeItemMerchAlert, getAlertStatusDetails, getDisputeBatchDetails, actions, call]
---

# getDisputeItems(caseId)

> Returns disputed transactions related to the specified Case ID. Called by the
    createDisputeItemMerchAlert, getAlertStatusDetails, getDisputeBatchDetails actions of the call
    method.

# getDisputeItems(caseId)

Returns disputed transactions related to the specified Case ID. Called by the createDisputeItemMerchAlert, getAlertStatusDetails, getDisputeBatchDetails actions of the call method.

## Signature

public static Map<String, Object\> getDisputeItems(String caseId)

## Parameters

caseId

Type: String

The ID of the Case related to the disputed transactions.

## Return Value

Type: Map<String, Object>

Returns the disputed transactions related to the specified Case ID.

## Example

Here is sample output. The keys correspond to DisputeItem object fields.

```

```

## Code Examples

```
{
  "output": [
    {
      "transaction_date": "2023-01-01",
      "transaction_identifier": "1",
      "transaction_amount": 213.1,
      "transaction_description": "t1"
    },
    {
      "transaction_date": "2023-01-01",
      "transaction_identifier": "2",
      "transaction_amount": 150.94,
      "transaction_description": "t2"
    }
  ]
}
```
