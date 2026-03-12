---
title: "ConnectApi.SubmitReturnOutputRepresentation"
domain: apex-reference
topic: connectapisubmitreturnoutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:29.127Z
estimatedTokens: 209
keywords: [change, order, created, action, financial]
---

# ConnectApi.SubmitReturnOutputRepresentation

> ID of the change order created for a return action, and a set of its
      financial values.

# ConnectApi.SubmitReturnOutputRepresentation

ID of the change order created for a return action, and a set of its financial values.

Subclass of [ConnectApi.BaseOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_base_output.htm "Base Order Management output class.").

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| changeBalances | ConnectApi.​ChangeItem​OutputRepresentation | Financial values resulting from the return. | 48.0 |
| changeOrderId | String | ID of the change order created for the returned order items and shipping charges. Use this change order to create a credit memo. | 48.0 |
| feeChangeOrderId | String | ID of the change order created by returning order items with associated return fees. Use this change order to create an invoice. | 57.0 |

## Related Topics

- ConnectApi.BaseOutputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_base_output.htm)
- ConnectApi.​ChangeItem​OutputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_change_item_output.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
