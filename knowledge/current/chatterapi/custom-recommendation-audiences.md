---
title: "Custom Recommendation Audiences"
domain: chatterapi
topic: custom-recommendation-audiences
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.331Z
estimatedTokens: 857
keywords: [Custom, Recommendation, Audiences, audience]
---

# Custom Recommendation Audiences

> Get a list of custom recommendation audiences and create a custom
      recommendation audience.

# Custom Recommendation Audiences

Get a list of custom recommendation audiences and create a custom recommendation audience.

Community managers can access, create, and delete audiences, definitions, and schedules for custom recommendations. (Community managers are users with the Create and Set Up Experiences or Manage Experiences permission.) Users with the Modify All Data permission can also access, create, and delete custom recommendation audiences, custom recommendation definitions, and scheduled custom recommendations.

Resource

```

```

```

```

Available version

35.0

Requires Chatter

Yes

HTTP methods

GET, POST

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| page | Integer | Zero-index page number. If not specified, page zero is used. | Optional | 35.0 |
| pageSize | Integer | Number of items per page. Default is 25. | Optional | 35.0 |

Response body for GET

[Custom Recommendation Audience Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_recommendation_audience_collection.htm "A collection of custom recommendation audiences.")

Request body for POST

Root XML tag

<recommendationAudience>

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

Request parameters for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| name | String | The unique name of the custom recommendation audience. | Required | 35.0 |

Response body for POST

[Custom Recommendation Audience](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_recommendation_audience.htm "A custom recommendation audience.")

#### See Also

-   [Create and Schedule Custom Recommendations with Audiences](atlas.en-us.chatterapi.meta/chatterapi/quickreference_create_custom_rec.htm "Create and schedule custom recommendations with audiences.")

## Code Examples

```
/connect/recommendation-audiences
```

```
/connect/communities/communityId/recommendation-audiences
```

```
{ 
   "name" : "Custom App Users"
}
```

## Related Topics

- Custom Recommendation Audience Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_recommendation_audience_collection.htm)
- Custom List Audience Criteria Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_custom_list_audience_criteria_input.htm)
- New User Audience Criteria Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_new_user_audience_criteria_input.htm)
- User ID Collection Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_user_id_collection_input.htm)
- Custom Recommendation Audience (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_recommendation_audience.htm)
- Create and Schedule Custom Recommendations with Audiences (atlas.en-us.chatterapi.meta/chatterapi/quickreference_create_custom_rec.htm)
