---
title: "Interest Tags (PATCH)"
domain: omnistudio
topic: interest-tags-patch
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:09.017Z
keywords: [Interest, Tags, PATCH]
---

# Interest Tags (PATCH)

# Interest Tags (PATCH)

Update Interest Tags.

Resource

```

```

Example for PATCH

```

```

Available version

54.0

Requires Chatter

No

HTTP methods

PATCH

Request body for PATCH

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| addCategoryIds | String[] | The categories to assign to an Interest Tag. | Optional | 54.0 |
| removeCategoryIds | String[] | The categories to remove from an Interest Tag. | Optional | 54.0 |
| tagDescription | String | The description of an Interest Tag. | Optional | 54.0 |
| tagName | String | The name of an Interest Tag. | Optional | 54.0 |

Response body for PATCH

[Interest Tag Update Output](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_interest_tag_update_output.htm "Output representation of Interest Tag update request.")