---
title: "Interest Tags (PATCH)"
domain: omnistudio
topic: interest-tags-patch
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:49.522Z
estimatedTokens: 225
keywords: [Interest, Tags, PATCH, Update, Tags.]
---

# Interest Tags (PATCH)

> Update Interest Tags.

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

## Code Examples

```
/connect/interest-tags/tags/${tagId}
```

```
https://yourInstance.salesforce.com/services/data/vXX.X/connect
/interest-tags/tags/0qOxx0000004C94EAE
```

```
{
   "tagDescription":"High networth group",
   "tagName":"High networth",
   "addCategoryIds":[
      "0ZOi000001CkbWugnd",
      "0ZOi000001CkbWugne",
      "0ZOi000001CkbWugnf"
   ],
   "removeCategoryIds":[
      "0ZOi000001CkbWnnnn",
   ]
}
```

## Related Topics

- Interest Tag Update Output (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_interest_tag_update_output.htm)
