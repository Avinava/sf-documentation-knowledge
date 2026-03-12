---
title: "Managed Topic"
domain: chatterapi
topic: managed-topic
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.727Z
estimatedTokens: 350
keywords: [Managed, Topic, Experience, Cloud, site]
---

# Managed Topic

> Get information about or delete a managed topic in an Experience Cloud
   site.

# Managed Topic

Get information about or delete a managed topic in an Experience Cloud site.

Only community managers (users with the Create and Set Up Experiences or Manage Experiences permission) can delete managed topics.

Resource

```

```

Available version

32.0

HTTP methods

GET, DELETE, HEAD

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| depth | Integer | Specify an integer 1–8. If you specify 1, the children property of the Managed Topic response body is null. If you specify 2, the children property of the Managed Topic response body contains the direct children managed topics, if any, of the managed topic. If you specify 3–8, you get the direct children managed topics and their children managed topics if there are any. If depth isn’t specified, it defaults to 1. | Optional | 35.0 |

Response body for GET

[Managed Topic](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_topic.htm "Managed topic in an Experience Cloud site.")

Response body for DELETE

[204: Successful Delete](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.")

## Code Examples

```
/connect/communities/communityId/managed-topics/managedTopicId
```

## Related Topics

- Managed Topic (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_topic.htm)
- 204: Successful Delete (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
- Reference (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_reference.htm)
- Topic (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_topics.htm)
- Managed Topic Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_topic_collection.htm)
