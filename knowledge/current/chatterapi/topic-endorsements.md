---
title: "Topic Endorsements"
domain: chatterapi
topic: topic-endorsements
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.736Z
estimatedTokens: 240
keywords: [Topic, Endorsements, endorsement, remove]
---

# Topic Endorsements

> An endorsement. Get information
about an endorsement and remove an endorsement.

# Topic Endorsements

An endorsement. Get information about an endorsement and remove an endorsement.

Resource

```

```

```

```

Available since version

30.0

Requires Chatter

Yes

HTTP methods

GET, HEAD, DELETE

Response body for GET

[Topic Endorsement](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_topics_endorsement.htm "Represents one user endorsing another user for a single topic.")

Response body for DELETE

[204: Successful Delete](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.")

Example for DELETE

When you endorse someone for a topic, an endorsement record is created with the key prefix 0en. To remove an endorsement, delete the endorsement record.

```

```

This is the response:

```

```

## Code Examples

```
/connect/topic-endorsements/endorsementId
```

```
/connect/communities/communityId/topic-endorsements/endorsementId
```

```
DELETE /connect/topic-endorsements/0enD0000000003UIAQ
```

## Related Topics

- Topic Endorsement (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_topics_endorsement.htm)
- 204: Successful
Delete (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
