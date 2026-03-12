---
title: "Data Sync (POST)"
domain: clm-developer-guide
topic: data-sync-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:22.225Z
estimatedTokens: 343
keywords: [Data, Sync, POST, Synchronize, save, updated, content, link, IDs]
---

# Data Sync (POST)

> Synchronize and save the updated values for a specified reference ID
      and a set of content link IDs.

# Data Sync (POST)

Synchronize and save the updated values for a specified reference ID and a set of content link IDs.

Resource

```

```

Resource example

```

```

Available version

65.0

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| contentLink​DetailsList | Content Link Details Input[] | List of content link records with their IDs and updated values. Each object includes a contentLinkId and a contentValue property value. | Required | 65.0 |
| isBulk​Request | Boolean | Indicates whether fields associated with the same object ID are grouped and fetched together in a single bulk request (true) or not (false). | Optional | 66.0 |
| partialCommit | Boolean | Indicates whether successful records should be committed in case of partial errors (true) or not (false). The default value is false. | Optional | 65.0 |
| reference​ObjectId | String | ID of the target Salesforce object that must be updated, such as a Contract record. | Optional | 65.0 |

Response body for POST

[Content Link Data Sync](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_responses_content_link_data_sync_output.htm "Output representation that contains the details of data synchronization with success and failure information.")

## Code Examples

```
/connect/content-link/data-sync
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/content-link/data-sync
```

```
{
  "referenceObjectId": "069xx0000004CsCAAU",
  "partialCommit": "false",
  "isBulkRequest": "false",
  "contentLinkDetailsList": [
    {
      "contentLinkId": "6UPVW00000003CQ4AY",
      "contentValue": "Contract Description for JSON"
    },
    {
      "contentLinkId": "6UPxx0000004CCGGA2",
      "contentValue": "3"
    }
  ]
}
```

## Related Topics

- Content Link Details Input (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_requests_content_link_details_input.htm)
- Content Link Data Sync (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_responses_content_link_data_sync_output.htm)
