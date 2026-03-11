---
title: "postOrder(orderInput)"
domain: apex-reference
topic: postorderorderinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.070Z
keywords: [postOrder, orderInput, Purchase, records, listed, input, file., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Example]
---

# postOrder(orderInput)

> Purchase records that are listed in an input file.

### postOrder(orderInput)

Purchase records that are listed in an input file.

#### API Version

32.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.DatacloudOrder postOrder(ConnectApi.DatacloudOrderInput orderInput)

#### Parameters

orderInput

Type: [ConnectApi.DatacloudOrderInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_datacloud_order.htm#apex_connectapi_input_datacloud_order "Input representation for a Datacloud order to purchase contacts or companies and retrieve purchase information.")

A list that contains IDs for the contacts or companies that you want to see.

#### Return Value

Type: [ConnectApi.DatacloudOrder](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_datacloud_order.htm#apex_connectapi_output_datacloud_order "Represents a Datacloud order.")

#### Example

```

```