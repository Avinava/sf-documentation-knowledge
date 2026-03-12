---
title: "User ID Collection Input"
domain: chatterapi
topic: user-id-collection-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.996Z
estimatedTokens: 128
keywords: [User, Collection, Input, IDs]
---

# User ID Collection Input

> A collection of user IDs.

# User ID Collection Input

A collection of user IDs.

Root XML tag

<userIds>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| userIds | String[] | A list of user IDs. | Required | 35.0 |

#### See Also

-   [Custom List Audience Criteria Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_custom_list_audience_criteria_input.htm "Criteria for the custom list type of custom recommendation audience.")

## Code Examples

```
{ 
   "userIds" : [
      "005B0000000Ge16",
      "005D0000001GpHp"
      ]
}
```

## Related Topics

- Custom List Audience Criteria Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_custom_list_audience_criteria_input.htm)
