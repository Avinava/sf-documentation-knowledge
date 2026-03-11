---
title: "Interest Tags and Categories (POST)"
domain: omnistudio
topic: interest-tags-and-categories-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:08.904Z
keywords: [Interest, Tags, Categories, POST]
---

# Interest Tags and Categories (POST)

# Interest Tags and Categories (POST)

Create interest tags and categories simultaneously. Associate existing categories and tags with specific records.

This API supports creating up to 10 categories and 200 tags in total per request.

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
| interestTags | Interest Tag and Category Item Input[] | List of tag categories and interest tags. | Required | 65.0 |

Response body for POST

[Interest Tag and Category Create](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_interest_tag_and_category_create_output.htm "Output representation of the details for simultaneously creating interest tags and categories.")