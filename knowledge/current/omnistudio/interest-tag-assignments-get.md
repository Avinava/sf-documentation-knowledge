---
title: "Interest Tag Assignments (GET)"
domain: omnistudio
topic: interest-tag-assignments-get
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:49.293Z
estimatedTokens: 295
keywords: [Interest, Tag, Assignments, GET, Retrieve, list, record, assignments, Tag.]
---

# Interest Tag Assignments (GET)

> Retrieve a list of record assignments by an Interest
    Tag.

# Interest Tag Assignments (GET)

Retrieve a list of record assignments by an Interest Tag.

Resource for GET

```

```

Example for GET

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
| limit | Integer | The maximum number of assignments to return in the response. | Optional | 54.0 |
| offset | Integer | The offset for the next set of results. The offset parameter specifies the end of the last batch retrieved. For example, to retrieve 15 assignments at a time:Request the first 15 with an offset of 0.Request the second 15 with an offset of 15. | Optional | 54.0 |
| orderBy | String | Order the results to display by the assignment name. | Optional | 54.0 |
| sort | String | Sort the results in ascending or descending order. | Optional | 54.0 |

Response body for GET

[Tag Record Assignment Collection](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_tag_record_assignment_collection.htm "Output representation of a collection of record assignments for an Interest Tag.")

## Code Examples

```
/connect/interest-tags/assignments/tag/${tagId}
```

```
https://yourInstance.salesforce.com/services/data/vXX.X/connect
/interest-tags/assignments/tag/0qOxx0000004C94EAE
```

## Related Topics

- Tag Record Assignment Collection (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_tag_record_assignment_collection.htm)
