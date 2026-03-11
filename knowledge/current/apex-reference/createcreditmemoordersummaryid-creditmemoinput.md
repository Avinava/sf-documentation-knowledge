---
title: "createCreditMemo(orderSummaryId,
    creditMemoInput)"
domain: apex-reference
topic: createcreditmemoordersummaryid-creditmemoinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.498Z
keywords: [createCreditMemo, orderSummaryId, creditMemoInput, Create, credit, memo, represent, refund, change, orders, associated, OrderSummary., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# createCreditMemo(orderSummaryId,
    creditMemoInput)

> Create a credit memo to represent the refund for one or more change
      orders associated with an OrderSummary.

### createCreditMemo(orderSummaryId, creditMemoInput)

Create a credit memo to represent the refund for one or more change orders associated with an OrderSummary.

#### API Version

48.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CreateCreditMemoOutputRepresentation createCreditMemo(String orderSummaryId, ConnectApi.CreateCreditMemoInputRepresentation creditMemoInput)

#### Parameters

orderSummaryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the OrderSummary.

creditMemoInput

Type: [ConnectApi.CreateCreditMemoInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_create_credit_memo.htm "A list of change orders used to create a credit memo.")

The list of change order IDs.

#### Return Value

Type: [ConnectApi.CreateCreditMemoOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_create_credit_memo_output.htm "ID of a created Credit Memo.")