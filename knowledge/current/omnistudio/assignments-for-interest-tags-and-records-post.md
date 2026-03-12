---
title: "Assignments for Interest Tags and Records (POST)"
domain: omnistudio
topic: assignments-for-interest-tags-and-records-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:49.399Z
estimatedTokens: 222
keywords: [Assignments, Interest, Tags, Records, POST, Create, assignments, Salesforce, records.]
---

# Assignments for Interest Tags and Records (POST)

> Create assignments for Interest Tags and Salesforce object
      records.

# Assignments for Interest Tags and Records (POST)

Create assignments for Interest Tags and Salesforce object records.

Resource

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

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| recordsForTag | Records For Tag Input | List of Salesforce object record IDs to assign to an Interest Tag. | Optional | 54.0 |
| tagsForRecord | Tags For Record Input | List of Interest Tags to assign to a Salesforce object record. | Optional | 54.0 |

Response body for POST

[Interest Tag Assignment Output](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_interest_tag_assignment_output.htm "Output representation of an Interest Tag record assignment.")

## Code Examples

```
/connect/interest-tags/assignments
```

```
https://yourInstance.salesforce.com/services/data/vXX.X/connect/interest-tags/assignments
```

```
{
  "recordsForTag": {
    "tagId": "0TOi000001AWbWugta",
    "recordIds": [
      "001i000001AWbWuabc",
      "001i000001AWbWuabd"
    ]
  },
  "tagsForRecord": {
    "recordId": "001i000001AWbWuabc",
    "tagIds": [
      "0TOi000001AWbWugta",
      "0TOi000001AWbWugtb"
    ]
  }
}
```

## Related Topics

- Records For Tag Input (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_records_for_ta.htm)
- Tags For Record Input (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_tags_for_recor.htm)
- Interest Tag Assignment Output (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_interest_tag_assignment_output.htm)
