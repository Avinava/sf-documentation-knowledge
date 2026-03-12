---
title: "Topics, Opt Out from Knowledgeable People List"
domain: chatterapi
topic: topics-opt-out-from-knowledgeable-people-list
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.747Z
estimatedTokens: 280
keywords: [Topics, Opt, Knowledgeable, People, Topic, hiding, yourself, show, again]
---

# Topics, Opt Out from Knowledgeable People List

> Topic opt
out. After hiding yourself from the Knowledgeable People list, show
yourself again.

# Topics, Opt Out from Knowledgeable People List

Topic opt out. After hiding yourself from the Knowledgeable People list, show yourself again.

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

[Topic Opt Out](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_topics_opt_out.htm "An “opt out” from a topic. Indicates that a user doesn’t want to be identified as knowledgeable about a topic.")

Response body for DELETE

[204: Successful Delete](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.")

Example for DELETE

When you opt out of the knowledgeable people list for a topic, a topic opt out record is created with the key prefix 0eb. To show yourself in the knowledgeable people list after you’ve opted out, delete the topic opt out record.

```

```

This is the response:

```

```

## Code Examples

```
/connect/topic-opt-outs/topicOptOutId
```

```
/connect/communities/communityId/topic-opt-outs/topicOptOutId
```

```
DELETE /connect/topic-opt-outs/0ebD0000000003oIAA
```

## Related Topics

- Topic Opt Out (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_topics_opt_out.htm)
- 204: Successful
Delete (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
