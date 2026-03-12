---
title: "User Recommendations for a Specific Action and Object ID"
domain: chatterapi
topic: user-recommendations-for-a-specific-action-and-object-id
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.903Z
estimatedTokens: 575
keywords: [User, Recommendations, Specific, Action, Chatter, custom, context, recommendation]
---

# User Recommendations for a Specific Action and Object ID

> Get the Chatter, custom, and static
            recommendations for the specified action and object ID for the context user. Also used
            to delete a recommendation.

# User Recommendations for a Specific Action and Object ID

Get the Chatter, custom, and static recommendations for the specified action and object ID for the context user. Also used to delete a recommendation.

Resource

```

```

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

userId must be the ID of the context user or the alias me.

-   Valid values for action:
    -   follow
    -   join
    -   view (version 25.0 and later)
-   Valid values for objectId:
    -   If action is follow, objectId is a user ID, file ID, record ID, or topic ID (version 36.0 and later).
    -   If action is join, objectId is a group ID.
    -   If action is view, objectId is a user ID, file ID, group ID, record ID, custom recommendation ID (version 34.0 and later), Today for static recommendations (version 35.0 and later), or an article ID (version 37.0 and later).

Available since version

24.0

Requires Chatter

Yes

HTTP methods

GET, DELETE

DELETE is used to remove a recommendation and is only valid for the following resources:

-   /chatter/users/userId/recommendations/follow/recommendedUserId
-   /chatter/users/userId/recommendations/follow/recommendedFileId
-   /chatter/users/userId/recommendations/follow/recommendedRecordId
-   /chatter/users/userId/recommendations/follow/recommendedTopicId
-   /chatter/users/userId/recommendations/join/recommendedGroupId
-   /chatter/users/userId/recommendations/view/customRecommendationId
-   /chatter/users/userId/recommendations/view/Today
-   /chatter/users/userId/recommendations/view/recommendedArticleId

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

userId must be the ID of the context user or the alias me.

Response body for GET

[Chatter Recommendations](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_recommendations.htm "A list of Chatter, custom, and static recommendations.")

Response for DELETE

[204: Successful Delete](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.")

## Code Examples

```
/chatter/users/userId/recommendations/action/objectId
```

```
/connect/communities/communityId/chatter/users/userId/recommendations/action/objectId
```

## Related Topics

- Chatter
                            Recommendations (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_recommendations.htm)
- 204: Successful
                            Delete (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
