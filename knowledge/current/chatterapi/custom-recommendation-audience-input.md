---
title: "Custom Recommendation Audience Input"
domain: chatterapi
topic: custom-recommendation-audience-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.665Z
estimatedTokens: 508
keywords: [Custom, Recommendation, Audience, Input]
---

# Custom Recommendation Audience Input

> A custom recommendation audience.

# Custom Recommendation Audience Input

A custom recommendation audience.

Root XML tag

<recommendationAudience>

JSON example for updating a custom list recommendation audience

```

```

JSON example for updating a new members recommendation audience

```

```

JSON example for creating a custom recommendation audience

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| criteria | Custom List Audience Criteria InputorNew User Audience Criteria Input | The criteria for the custom recommendation audience type. | OptionalIf not specified when creating a recommendation audience, the audience criteria type defaults to custom list. | 36.0 |
| member​OperationType | String | ImportantThis property is available only in version 35.0. In version 36.0 and later, use Custom List Audience Criteria Input.The operation to carry out on the audience members. Values are:Add—Adds specified members to the audience.Remove—Removes specified members from the audience. | Required to update a recommendation audienceDon’t use or specify null to create a recommendation audience | 35.0 only |
| members | User ID Collection Input | ImportantThis property is available only in version 35.0. In version 36.0 and later, use Custom List Audience Criteria Input.A collection of user IDs.When updating an audience, you can include up to 100 members. An audience can have up to 100,000 members, and each Experience Cloud site can have up to 100 audiences. | Required to update a recommendation audienceDon’t use or specify null to create a recommendation audience | 35.0 only |
| name | String | The unique name of the custom recommendation audience. | Optional to update a recommendation audienceRequired to create a recommendation audience | 35.0 |

#### See Also

-   [Create and Schedule Custom Recommendations with Audiences](atlas.en-us.chatterapi.meta/chatterapi/quickreference_create_custom_rec.htm "Create and schedule custom recommendations with audiences.")

## Code Examples

```
{ 
   "criteria" : {
      "memberOperationType" : "Add",
      "members" : {
         "userIds" : [
            "005B0000000Ge16",
            "005D0000001GpHp"
            ]
         },
      "type" : "CustomList"
   },
   "name" : "My Custom List"
}
```

```
{ 
   "criteria" : {
      "value" : "30",
      "type" : "MaxDaysInCommunity"
   },
   "name" : "New Hires"
}
```

```
{ 
   "name" : "Custom App Users"
}
```

## Related Topics

- Custom List Audience Criteria Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_custom_list_audience_criteria_input.htm)
- New User Audience Criteria Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_new_user_audience_criteria_input.htm)
- User ID Collection Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_user_id_collection_input.htm)
- Create and Schedule Custom Recommendations with Audiences (atlas.en-us.chatterapi.meta/chatterapi/quickreference_create_custom_rec.htm)
