---
title: "Interest Tags for Records (GET)"
domain: omnistudio
topic: interest-tags-for-records-get
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:08.863Z
keywords: [Interest, Tags, Records, GET]
---

# Interest Tags for Records (GET)

# Interest Tags for Records (GET)

Retrieve a list of Interest Tags assigned to a Salesforce object record.

Resource

```

```

Example

```

```

Available version

54.0

Requires Chatter

No

HTTP methods

GET

Query parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| limit | Integer | The maximum number of Interest Tags to return in the response. | Optional | 54.0 |
| offset | Integer | The offset for the next set of results. The offset parameter specifies the end of the last batch retrieved. For example, to retrieve 15 Interest Tags at a time:Request the first 15 with an offset of 0.Request the second 15 with an offset of 15. | Optional | 54.0 |
| orderBy | String | Order the results to display by Interest Tags name. | Optional | 54.0 |
| sort | String | Sort the results in ascending or descending order. | Optional | 54.0 |

Response body for GET

[Interest Tag List](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_interest_tag_list.htm "Output representation of the list of Interest Tags.")