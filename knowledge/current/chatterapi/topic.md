---
title: "Topic"
domain: chatterapi
topic: topic
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.766Z
estimatedTokens: 898
keywords: [Topic, topic’s, merge, topics]
---

# Topic

> Information about the specified topic. Get information
         about a topic, update a topic’s name or description, merge topics, and delete a
      topic.

# Topic

Information about the specified topic. Get information about a topic, update a topic’s name or description, merge topics, and delete a topic.

Users with the Edit Topics or Modify All Data permission can edit topic names and descriptions. Users with the Delete Topics or Modify All Data permission can merge and delete topics.

Resource

```

```

```

```

Available since version

29.0

In version 28.0, use /chatter/topics/topicId.

HTTP methods

GET, PATCH, DELETE, and HEAD

Request body for PATCH

Root XML tag

<topic>

JSON example

```

```

Properties

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| description | String | Text description of the topic | 28.0 |
| idsToMerge | String[] | List of up to five secondary topic IDs to merge with the primary topicIf any of the secondary topics are navigational or featured topics, they lose their topic type, topic images, and children topics. Their feed items are reassigned to the primary topic. If you merge a topic with a content topic, the content associations are preserved. If you merge a topic with an inactive endorsee, the endorsement isn’t mapped to the primary topic. | 33.0 |
| name | String | Name of the topicUse this property to change only the capitalization and spacing of the topic name. | 28.0 |

Request parameters for PATCH

| Parameter Name | Type | Description | Available Since |
| --- | --- | --- | --- |
| description | String | Text description of the topic | 28.0 |
| idsToMerge | String[] | List of up to five secondary topic IDs to merge with the primary topicIf any of the secondary topics are navigational or featured topics, they lose their topic type, topic images, and children topics. Their feed items are reassigned to the primary topic. If you merge a topic with a content topic, the content associations are preserved. If you merge a topic with an inactive endorsee, the endorsement isn’t mapped to the primary topic. | 33.0 |
| name | String | Name of the topicUse this property to change only the capitalization and spacing of the topic name. | 28.0 |

Response body for GET, HEAD, or PATCH

[Topic](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_topics.htm "Topic.")

Response body for DELETE

[204: Successful Delete](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.")

Topic deletion is asynchronous. If a topic is requested before the deletion completes, the response is [200: Successful](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.") and the isBeingDeleted property of the Topic output is true in version 33.0 and later. If a topic is requested after the deletion completes, the response is [404: Not found](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.").

Example for PATCH

This example uses request parameters to update the description of a topic:

```

```

This example uses a JSON request body to make the same request:

```

```

## Code Examples

```
/connect/topics/topicId
```

```
/connect/communities/communityId/topics/topicId
```

```
{
"description":"World Wide Web Consortium (W3C) is the main international standards organization for the web.",
"name":"W3C"
}
```

```
/connect/topics/0TOD000000006RxOAI?description=Edit+requests
```

```
/connect/topics/0TOD000000006RxOAI

{
   "description" : "Edit requests"
}
```

## Related Topics

- Topic (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_topics.htm)
- 204: Successful Delete (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
- 200: Successful (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
- 404: Not
                     found (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
- Topic Images (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_topic_images.htm)
- 404: Not Found (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
- Managed Topic (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_topic.htm)
- Topic (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_topics_specific.htm)
- List of Topics (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_topics_list.htm)
- Topics on Records Resource (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_records_topics.htm)
