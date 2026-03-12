---
title: "Preview Return Output"
domain: chatterapi
topic: preview-return-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.377Z
estimatedTokens: 144
keywords: [Preview, Output, Expected, financial, proposed, action]
---

# Preview Return Output

> Expected financial values for a proposed return
    action.

# Preview Return Output

Expected financial values for a proposed return action.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| changeBalances | Change Item Output | Expected financial values for the proposed return action. | Big, 48.0 | 48.0 |
| errors | Error Response Output[] | Any errors that were returned. | Big, 48.0 | 48.0 |
| orderSummaryId | String | ID of the OrderSummary. | Big, 48.0 | 48.0 |
| success | Boolean | Indicates whether the transaction was successful. | Big, 48.0 | 48.0 |

## Related Topics

- Change Item Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_change_item_output.htm)
- Error Response Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_error_response.htm)
