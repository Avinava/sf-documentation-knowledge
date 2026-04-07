---
title: "Create and Schedule Custom Recommendations with Audiences"
domain: chatterapi
topic: create-and-schedule-custom-recommendations-with-audiences
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:03:37.084Z
estimatedTokens: 1423
keywords: [Schedule, Custom, Recommendations, Audiences, Step, Define, Recommendation, Add, Image, Audience, Members]
---

# Create and Schedule Custom Recommendations with Audiences

> Create and schedule custom recommendations with audiences.

# Create and Schedule Custom Recommendations with Audiences

Create and schedule custom recommendations with audiences.

Community managers can access, create, and delete audiences, definitions, and schedules for custom recommendations. (Community managers are users with the Create and Set Up Experiences or Manage Experiences permission.) Users with the Modify All Data permission can also access, create, and delete custom recommendation audiences, custom recommendation definitions, and scheduled custom recommendations.

These recommendations appear by default on the Customer Service template. They appear on the home and question detail pages and in the feed in Salesforce mobile web. They also appear anywhere community managers add recommendations using Experience Builder in the Customer Service template.

So that users don’t see the same recommendations all the time, Salesforce periodically removes and brings back custom recommendations that haven’t been accepted or dismissed.

## Step 1: Define the Custom Recommendation

Resource

[/connect/communities/communityId/recommendation-definitions](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_recommendation_defn_list.htm#connect_resources_recommendation_defn_list "Get a list of custom recommendation definitions or create a custom recommendation definition.")

HTTP method

POST

Request body

[Custom Recommendation Definition Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_recommendation_definition_input.htm "A custom recommendation definition.")

Request body example

```

```

Response body

[Custom Recommendation Definition](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_recommendation_definition.htm "A custom recommendation definition.")

## Step 2: Add an Image to the Custom Recommendation

This example adds an image file that has been uploaded to Salesforce. To upload a new image file, see [Uploading Binary Files](atlas.en-us.chatterapi.meta/chatterapi/intro_input.htm#cc_upload_binary_files).

Resource

[/connect/recommendation-definitions/recommendationDefinitionId/photo](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_recommendation_defn_photo.htm#connect_resources_recommendation_defn_photo "Get information about, upload, modify, or delete the photo for a custom recommendation definition.")

Use the recommendationDefinitionId returned in the Recommendation Definition response body in Step 1.

HTTP method

PUT

Request body

[Photo Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_photo_input.htm "Describes a photo input.")

Request body example

```

```

Response body

[Photo](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_pictures.htm "Photo.")

## Step 3: Create a Recommendation Audience

Resource

[/connect/communities/communityId/recommendation-audiences](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_recommendation_audiences_list.htm#connect_resources_recommendation_audiences_list "Get a list of custom recommendation audiences and create a custom recommendation audience.")

HTTP method

POST

Request body

[Custom Recommendation Audience Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_recommendation_audience_input.htm "A custom recommendation audience.")

Request body example

```

```

Response body

[Custom Recommendation Audience](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_recommendation_audience.htm "A custom recommendation audience.")

## Step 4: Add Members to the Recommendation Audience

Resource

[/connect/communities/communityId/recommendation-audiences/recommendationAudienceId](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_recommendation_audience.htm#connect_resources_recommendation_audience "Get information about, update, and delete a custom recommendation audience.")

Use the recommendationAudienceId returned in the Recommendation Audience response body in Step 3.

HTTP method

PATCH

Request body

[Custom Recommendation Audience Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_recommendation_audience_input.htm "A custom recommendation audience.")

In this example, this Recommendation Audience Input request body includes a criteria property that is a [Custom List Audience Criteria Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_custom_list_audience_criteria_input.htm "Criteria for the custom list type of custom recommendation audience.") request body. The Custom List Audience Criteria Input request body includes a members property that is a [User ID Collection Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_user_id_collection_input.htm "A collection of user IDs.") request body.

Request body example

```

```

Response body

[Custom Recommendation Audience](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_recommendation_audience.htm "A custom recommendation audience.")

## Step 5: Schedule the Custom Recommendation with the Audience

Resource

[/connect/communities/communityId/scheduled-recommendations](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_recommendations_scheduled_list.htm#connect_resources_recommendations_scheduled_list "Get a list of scheduled custom recommendations or create a scheduled custom recommendation.")

HTTP method

POST

Request body

[Scheduled Custom Recommendation Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_scheduled_recommendation_input.htm "A scheduled custom recommendation.")

Request body example

```

```

Response body

[Scheduled Custom Recommendation](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_scheduled_recommendation.htm "Represents a scheduled custom recommendation.")

## Code Examples

```
{
   "name":"Corporate Training Project",
   "title":"Want to learn more about the Corporate Training Project?",
   "explanation":"Click this link to learn more!",
   "actionUrl":"https://www.example.com",
   "actionUrlName":"Launch"
}
```

```
{
   "cropSize" : "120",
   "cropX" : "0",
   "cropY" : "0",
   "fileId" : "069D00000001IOh"
}
```

```
{
   "name" : "Custom App Users"
}
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
   }
}
```

```
{
   "recommendationDefinitionId" : "0RDD00000004CEhOAM",
   "recommendationAudienceId":"02JD00000008SfdMAE"
}
```

## Related Topics

- /connect/communities/communityId/recommendation-definitions (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_recommendation_defn_list.htm)
- Custom Recommendation Definition Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_recommendation_definition_input.htm)
- Custom Recommendation Definition (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_recommendation_definition.htm)
- Uploading Binary Files (atlas.en-us.chatterapi.meta/chatterapi/intro_input.htm)
- /connect/recommendation-definitions/recommendationDefinitionId/photo (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_recommendation_defn_photo.htm)
- Photo Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_photo_input.htm)
- Photo (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_pictures.htm)
- /connect/communities/communityId/recommendation-audiences (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_recommendation_audiences_list.htm)
- Custom Recommendation Audience Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_recommendation_audience_input.htm)
- Custom Recommendation Audience (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_recommendation_audience.htm)
