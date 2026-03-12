---
title: "Custom List Audience Criteria Input"
domain: chatterapi
topic: custom-list-audience-criteria-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.465Z
estimatedTokens: 296
keywords: [Custom, Audience, Criteria, Input, recommendation]
---

# Custom List Audience Criteria Input

> Criteria for the custom list type of custom recommendation
      audience.

# Custom List Audience Criteria Input

Criteria for the custom list type of custom recommendation audience.

Root XML tag

<criteria>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| member​OperationType | String | The operation to carry out on the audience members. Values are:Add—Adds specified members to the audience.Remove—Removes specified members from the audience. | Required to update a recommendation audienceDon’t use or specify null to create a recommendation audience | 36.0 |
| members | User ID Collection Input | A collection of user IDs.When updating an audience, you can include up to 100 members. An audience can have up to 100,000 members, and each Experience Cloud site can have up to 100 audiences. | Required to update a recommendation audienceDon’t use or specify null to create a recommendation audience | 36.0 |
| type | String | Value must be CustomList. | Required | 36.0 |

#### See Also

-   [Custom Recommendation Audience Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_recommendation_audience_input.htm "A custom recommendation audience.")

## Code Examples

```
{
   "memberOperationType" : "Add",
   "members" : {
      "userIds" : [
         "005B0000000Ge16",
         "005D0000001GpHp"
         ]
      },
   "type" : "CustomList"
}
```

## Related Topics

- User ID Collection Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_user_id_collection_input.htm)
- Custom Recommendation Audience Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_recommendation_audience_input.htm)
