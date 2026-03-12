---
title: "Submit Return Output"
domain: chatterapi
topic: submit-return-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:21.231Z
estimatedTokens: 219
keywords: [Submit, Output, change, order, created, action, financial]
---

# Submit Return Output

> ID of the change order created for a return action, and a set of its
      financial values.

# Submit Return Output

ID of the change order created for a return action, and a set of its financial values.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| changeBalances | Change Item Output | Financial values resulting from the return. | Big, 48.0 | 48.0 |
| changeOrderId | String | ID of the change order created for the returned order items and shipping charges. Use this change order to create a credit memo. | Big, 48.0 | 48.0 |
| errors | Error Response Output[] | Any errors that were returned. | Big, 48.0 | 48.0 |
| feeChangeOrderId | String | ID of the change order created by returning order items with associated return fees. Use this change order to create an invoice. | Big, 57.0 | 57.0 |
| success | Boolean | Indicates whether the transaction was successful. | Big, 48.0 | 48.0 |

## Related Topics

- Change Item Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_change_item_output.htm)
- Error Response Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_error_response.htm)
