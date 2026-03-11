---
title: "Assignments for Interest Tags and Records (POST)"
domain: omnistudio
topic: assignments-for-interest-tags-and-records-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:08.941Z
keywords: [Assignments, Interest, Tags, Records, POST]
---

# Assignments for Interest Tags and Records (POST)

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