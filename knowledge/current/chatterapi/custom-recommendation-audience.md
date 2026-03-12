---
title: "Custom Recommendation Audience"
domain: chatterapi
topic: custom-recommendation-audience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.316Z
estimatedTokens: 868
keywords: [Custom, Recommendation, Audience]
---

# Custom Recommendation Audience

> Get information about, update, and delete a custom recommendation
      audience.

# Custom Recommendation Audience

Get information about, update, and delete a custom recommendation audience.

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

GET, PATCH, DELETE

Response body for GET

[Custom Recommendation Audience](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_recommendation_audience.htm "A custom recommendation audience.")

Request body for PATCH

Root XML tag

<recommendationAudience>

JSON example for updating a custom list recommendation audience

```

```

JSON example for updating a new members recommendation audience

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| criteria | Custom List Audience Criteria InputorNew User Audience Criteria Input | The criteria for the custom recommendation audience type. | OptionalIf not specified when creating a recommendation audience, the audience criteria type defaults to custom list. | 36.0 |
| member​OperationType | String | ImportantThis property is available only in version 35.0. In version 36.0 and later, use Custom List Audience Criteria Input.The operation to carry out on the audience members. Values are:Add—Adds specified members to the audience.Remove—Removes specified members from the audience. | Required to update a recommendation audienceDon’t use or specify null to create a recommendation audience | 35.0 only |
| members | User ID Collection Input | ImportantThis property is available only in version 35.0. In version 36.0 and later, use Custom List Audience Criteria Input.A collection of user IDs.When updating an audience, you can include up to 100 members. An audience can have up to 100,000 members, and each Experience Cloud site can have up to 100 audiences. | Required to update a recommendation audienceDon’t use or specify null to create a recommendation audience | 35.0 only |
| name | String | The unique name of the custom recommendation audience. | Optional to update a recommendation audienceRequired to create a recommendation audience | 35.0 |

Request parameters for PATCH

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| name | String | The unique name of the custom recommendation audience. | Required | 35.0 |

Response body for PATCH

[Custom Recommendation Audience](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_recommendation_audience.htm "A custom recommendation audience.")

Response body for DELETE

[204: Successful Delete](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.")

#### See Also

-   [Create and Schedule Custom Recommendations with Audiences](atlas.en-us.chatterapi.meta/chatterapi/quickreference_create_custom_rec.htm "Create and schedule custom recommendations with audiences.")

## Code Examples

```
/connect/recommendation-audiences/recommendationAudienceId
```

```
/connect/communities/communityId/recommendation-audiences/recommendationAudienceId
```

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

## Related Topics

- Custom Recommendation Audience (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_recommendation_audience.htm)
- Custom List Audience Criteria Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_custom_list_audience_criteria_input.htm)
- New User Audience Criteria Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_new_user_audience_criteria_input.htm)
- User ID Collection Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_user_id_collection_input.htm)
- 204: Successful Delete (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
- Create and Schedule Custom Recommendations with Audiences (atlas.en-us.chatterapi.meta/chatterapi/quickreference_create_custom_rec.htm)
- Custom List Audience Criteria (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_custom_list_audience_criteria.htm)
- New User Audience Criteria (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_new_user_audience_criteria.htm)
- User Reference Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_reference_collection.htm)
- User Detail (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_detail.htm)
