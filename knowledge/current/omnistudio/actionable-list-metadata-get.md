---
title: "Actionable List Metadata (GET)"
domain: omnistudio
topic: actionable-list-metadata-get
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:08.816Z
keywords: [Actionable, List, Metadata, GET]
---

# Actionable List Metadata (GET)

# Actionable List Metadata (GET)

Retrieve the actionable list member statuses, the count of actionable list members in each status, and the quick action metadata for a specified actionable list ID.

Resource

```

```

Resource Example

```

```

Available version

58.0

Requires Chatter

No

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| hasMemberStatus | Boolean | Indicates whether to include (true) actionable list member statuses and the count of actionable list members in each status in the response or not (false). Default value is true. | Optional | 58.0 |
| hasQuickActions | Boolean | Indicates whether to include (true) information about quick actions fields of the configured object in the response or not (false). Default value is true. | Optional | 58.0 |
| searchTerm | String | Object record's name that is configured in the actionable list for retrieving the actionable list member count for each status. | Optional | 58.0 |

Response body for GET

[Actionable List Metadata](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_actionable_list_metadata.htm "Output representation of the actionable list metadata request.")