---
title: "previewReturn(orderSummaryId, changeInput)"
domain: apex-reference
topic: previewreturnordersummaryid-changeinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.498Z
keywords: [previewReturn, orderSummaryId, changeInput, Retrieve, expected, change, order, values, simple, return, OrderItemSummaries, OrderSummary, without, actually, executing, return., API, Version, Requires, Chatter]
---

# previewReturn(orderSummaryId, changeInput)

> Retrieve the expected change order values for a simple return of one
      or more OrderItemSummaries from an OrderSummary, without actually executing the
    return.

### previewReturn(orderSummaryId, changeInput)

Retrieve the expected change order values for a simple return of one or more OrderItemSummaries from an OrderSummary, without actually executing the return.

#### API Version

48.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.PreviewReturnOutputRepresentation previewReturn(String orderSummaryId, ConnectApi.ChangeInputRepresentation changeInput)

#### Parameters

orderSummaryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the OrderSummary.

changeInput

Type: [ConnectApi.ChangeInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_change.htm "A list of changes to OrderItemSummaries that make up an order change, such as a cancel or return.")

A list of changes to OrderItemSummaries that make up an order change, such as a cancel or return.

#### Return Value

Type: [ConnectApi.PreviewReturnOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_preview_return_output.htm "Expected financial values for a proposed return action.")

#### See Also

-   [createCreditMemo(orderSummaryId, creditMemoInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OrderSummary_static_methods.htm#apex_ConnectAPI_OrderSummary_createCreditMemo_1 "Create a credit memo to represent the refund for one or more change orders associated with an OrderSummary.")
    
-   [ensureRefundsAsync(orderSummaryId, ensureRefundsInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OrderSummary_static_methods.htm#apex_ConnectAPI_OrderSummary_ensureRefundsAsync_1 "Ensure refunds for a CreditMemo or excess funds by sending a request to a payment provider. This method inserts a background operation into an asynchronous job queue and returns the ID of that operation so you can track its status. Payment gateway responses appear in the payment gateway log and don’t affect the background operation status.")
    
-   [submitReturn(orderSummaryId, changeInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OrderSummary_static_methods.htm#apex_ConnectAPI_OrderSummary_submitReturn_1 "Return one or more OrderItemSummaries from an OrderSummary, and create a corresponding change order. This return is a simple return that creates a change order but not a ReturnOrder.")