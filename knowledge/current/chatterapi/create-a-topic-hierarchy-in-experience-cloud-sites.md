---
title: "Create a Topic Hierarchy in Experience Cloud Sites"
domain: chatterapi
topic: create-a-topic-hierarchy-in-experience-cloud-sites
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:03:37.102Z
estimatedTokens: 1602
keywords: [Topic, Hierarchy, Experience, Cloud, Sites, Managed, Topics, Standard]
---

# Create a Topic Hierarchy in Experience Cloud Sites

> Create a topic hierarchy in Experience Cloud sites.

# Create a Topic Hierarchy in Experience Cloud Sites

Create a topic hierarchy in Experience Cloud sites.

## Example 1: Create a Hierarchy with Managed Topics

**Step 1: Identify or Create the Parent Topic**

The parent topic must be a navigational managed topic.

Resource

[/connect/communities/communityId/managed-topics](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_managed_topics_list.htm#connect_resources_managed_topics_list "Get all the managed topics for an Experience Cloud site. Create a managed topic, create managed topic hierarchies, and reorder managed topics.")

HTTP method

**GET** to retrieve a list of navigational managed topics to identify the parent topic.

**POST** to create a parent topic. Community managers (users with the Create and Set Up Experiences or Manage Experiences permission) can create managed topics.

Response body for GET

[Managed Topic Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_topic_collection.htm "A collection of managed topics in an Experience Cloud site.")

Make a note of the ID of the navigational managed topic you want to be the parent topic. It has a prefix of 0mt.

Request body for POST

[Managed Topic Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_managed_topic_input.htm "A managed topic.")

Request body example for POST

```

```

Response body for POST

[Managed Topic](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_topic.htm "Managed topic in an Experience Cloud site.")

Make a note of the ID of the parent topic you created. It has a prefix of 0mt.

**Step 2: Create the Child Topic and Link to the Parent in a Hierarchy**

In this step, create a managed child topic and link it to its parent in one step.

Resource

[/connect/communities/communityId/managed-topics](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_topics_list.htm#connect_resources_topics_list "Get information about topics in the organization or create a topic.")

HTTP method

POST

Community managers (users with the Create and Set Up Experiences or Manage Experiences permission) can create managed topics.

Request body

[Managed Topic Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_managed_topic_input.htm "A managed topic.")

Request body example

Use the navigational managed topic ID from Step 1 as the parentId.

```

```

Response body for POST

[Managed Topic](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_topic.htm "Managed topic in an Experience Cloud site.")

## See the Hierarchy

By default, the managed topic response body shows only the top level of a hierarchy. You can have up to three levels in your topic hierarchy. To see all the levels, use this resource and these parameters:

```

```

## Example 2: Create a Hierarchy with Managed and Standard Topics

It’s also possible to use a standard topic, instead of a managed topic, to be the child topic, but this requires an additional step.

**Step 1: Identify or Create the Parent Topic**

The parent topic must be a navigational managed topic.

Resource

[/connect/communities/communityId/managed-topics](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_managed_topics_list.htm#connect_resources_managed_topics_list "Get all the managed topics for an Experience Cloud site. Create a managed topic, create managed topic hierarchies, and reorder managed topics.")

HTTP method

**GET** to retrieve a list of navigational managed topics to identify the parent topic.

**POST** to create a parent topic. Community managers (users with the Create and Set Up Experiences or Manage Experiences permission) can create managed topics.

Response body for GET

[Managed Topic Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_topic_collection.htm "A collection of managed topics in an Experience Cloud site.")

Make a note of the ID of the navigational managed topic you want to be the parent topic. It has a prefix of 0mt.

Request body for POST

[Managed Topic Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_managed_topic_input.htm "A managed topic.")

Request body example for POST

```

```

Response body for POST

[Managed Topic](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_topic.htm "Managed topic in an Experience Cloud site.")

Make a note of the ID of the parent topic you created. It has a prefix of 0mt.

**Step 2: Identify or Create the Child Topic**

In this example, identify or create a standard topic, instead of a managed topic, to be the child topic.

Resource

[/connect/communities/communityId/topics](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_topics_list.htm#connect_resources_topics_list "Get information about topics in the organization or create a topic.")

HTTP method

**GET** to retrieve a list of topics to identify the child topic.

**POST** to create a child topic. Users with the Create Topics permission can create topics.

Response body for GET

[Topic Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_topics_collection.htm "Topic collection.")

Make a note of the ID of the topic you want to be the child topic. It has a prefix of 0TO.

Request body for POST

[Topic Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_topic_input.htm "Topic input.")

Request body example for POST

```

```

Response body for POST

[Topic](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_topics.htm "Topic.")

Make a note of the ID of the child topic you created. It has a prefix of 0TO.

**Step 3: Link the Child and Parent Topic in a Hierarchy**

Resource

[/connect/communities/communityId/managed-topics](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_managed_topics_list.htm#connect_resources_managed_topics_list "Get all the managed topics for an Experience Cloud site. Create a managed topic, create managed topic hierarchies, and reorder managed topics.")

HTTP method

POST

Request body

[Managed Topic Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_managed_topic_input.htm "A managed topic.")

Request body example

Use the managed topic ID from Example 2, Step 1 as the parentId and the topic ID from Example 2, Step 2 as the recordId.

```

```

Response body

[Managed Topic](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_topic.htm "Managed topic in an Experience Cloud site.")

## Code Examples

```
{
"name":"Parent Topic",
"managedTopicType":"Navigational"
}
```

```
{
"name":"Child Topic",
"managedTopicType":"Navigational",
"parentId":"0mtR000000001KLIAY"
}
```

```
/connect/communities/communityId/managed-topics?depth=3&managedTopicType=Navigational
```

```
{
"name":"Parent Topic",
"managedTopicType":"Navigational"
}
```

```
{
"description":"This topic will be a child topic of Parent Topic.",
"name":"Child Topic"
}
```

## Related Topics

- /connect/communities/communityId/managed-topics (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_managed_topics_list.htm)
- Managed Topic Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_topic_collection.htm)
- Managed Topic Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_managed_topic_input.htm)
- Managed Topic (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_topic.htm)
- /connect/communities/communityId/managed-topics (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_topics_list.htm)
- /connect/communities/communityId/topics (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_topics_list.htm)
- Topic Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_topics_collection.htm)
- Topic Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_topic_input.htm)
- Topic (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_topics.htm)
