---
title: "User Recommendations for a Specific Action and Object Type"
domain: chatterapi
topic: user-recommendations-for-a-specific-action-and-object-type
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.897Z
estimatedTokens: 292
keywords: [User, Recommendations, Specific, Action, Chatter, recommendation, context]
---

# User Recommendations for a Specific Action and Object Type

> Get the static Chatter recommendation for the specified action and
      object type for the context user. Also used to delete a static
    recommendation.

# User Recommendations for a Specific Action and Object Type

Get the static Chatter recommendation for the specified action and object type for the context user. Also used to delete a static recommendation.

Resource

```

```

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

userId must be the ID of the context user or the alias me.

-   Valid values for action:
    -   view
-   Valid values for objectEnum:
    -   Today—Static recommendations that don’t have an ID, for example, the Today app recommendation.

Available version

34.0

Requires Chatter

Yes

HTTP methods

GET, DELETE

Response body for GET

[Chatter Recommendations](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_recommendations.htm "A list of Chatter, custom, and static recommendations.")

Response for DELETE

[204: Successful Delete](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.")

## Code Examples

```
/chatter/users/userId/recommendations/action/objectEnum
```

```
/connect/communities/communityId/chatter/users/userId/recommendations/action/objectEnum
```

## Related Topics

- Chatter Recommendations (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_recommendations.htm)
- 204: Successful Delete (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
