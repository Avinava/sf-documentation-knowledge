---
title: "ConnectApi.CreateCreditMemoInputRepresentation"
domain: apex-reference
topic: connectapicreatecreditmemoinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:24.700Z
estimatedTokens: 154
keywords: [ConnectApi.CreateCreditMemoInputRepresentation, list, change, orders, used, create, credit, memo.]
---

# ConnectApi.CreateCreditMemoInputRepresentation

> A list of change orders used to create a credit
    memo.

# ConnectApi.CreateCreditMemoInputRepresentation

A list of change orders used to create a credit memo.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| changeOrderIds | List<String> | List of IDs of the change orders. | Required | 48.0 |

#### See Also

-   [createCreditMemo(orderSummaryId, creditMemoInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OrderSummary_static_methods.htm#apex_ConnectAPI_OrderSummary_createCreditMemo_1 "Create a credit memo to represent the refund for one or more change orders associated with an OrderSummary.")

## Related Topics

- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- createCreditMemo(orderSummaryId, creditMemoInput) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OrderSummary_static_methods.htm)
