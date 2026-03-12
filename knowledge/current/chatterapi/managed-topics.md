---
title: "Managed Topics"
domain: chatterapi
topic: managed-topics
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.747Z
estimatedTokens: 2196
keywords: [Managed, Topics, Experience, Cloud, site, topic, hierarchies, reorder]
---

# Managed Topics

> Get all the managed topics for an Experience Cloud site. Create a
      managed topic, create managed topic hierarchies, and reorder managed topics.

# Managed Topics

Get all the managed topics for an Experience Cloud site. Create a managed topic, create managed topic hierarchies, and reorder managed topics.

Only community managers (users with the Create and Set Up Experiences or Manage Experiences permission) can create or reorder managed topics.

Resource

```

```

Available version

32.0

HTTP methods

GET, POST, PATCH, HEAD

Request parameters for GET

If you make a GET request without request parameters, you get only featured and navigational topics. To get content topics, make a GET request with the managedTopicType parameter set to Content, for example:

```

```

To see all your managed topic hierarchies, make a GET request with the depth parameter set to 8 and the managedTopicType set to Navigational, for example:

```

```

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| depth | Integer | Specify an integer 1–8. If you specify 1, the children property of the Managed Topic response body is null. If you specify 2, the children property of the Managed Topic response body contains the direct children managed topics, if any, of the managed topic. If you specify 3–8, you get the direct children managed topics and their children managed topics if there are any. If depth isn’t specified, it defaults to 1. | Optional | 35.0 |
| managedTopic​Type | String | Type of managed topic.Content—Topics that are associated with native content.Featured—Topics that are featured, for example, on the Experience Cloud site home page, but don’t provide overall navigation.Navigational—Topics that display in a navigational menu in the Experience Cloud site.A topic can be associated with all three managed topic types, so a topic can be a Featured, Navigational, and Content topic.If you specify Content and you want more than 50 topics to be returned, use the page and pageSize parameters. | OptionalRequired if specifying recordIds or depthRequired for Content topics | 32.0 |
| page | Integer | Number of the page you want returned. Starts at 0. If you don’t specify a value or if you specify 0, the first page is returned. If you specify 2–8 for the depth, the page and pageSize properties apply only to the top-level managed topics and not to children managed topics. | Optional | 44.0 |
| pageSize | Integer | Specifies the number of items per page. Valid values are from 1 through 100. If you pass in null, the default size is 50. If you specify 2–8 for the depth, the page and pageSize properties apply only to the top-level managed topics and not to children managed topics. | Optional | 44.0 |
| recordId | String | ID of the topic associated with the managed topics.In version 38.0 and later, use recordIds. | Optional | 35.0–37.0 |
| recordIds | List<String> | List of up to 100 topic IDs associated with the managed topics.If you list more than 10 topic IDs, you can’t specify 2–8 for depth. | Optional | 38.0 |

Response body for GET

[Managed Topic Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_topic_collection.htm "A collection of managed topics in an Experience Cloud site.")

Request body for POST

Make POST requests to create managed topics and create topic hierarchies.

Root XML tag

<managedTopic>

JSON example using recordId

This example creates a managed topic from an existing standard topic (using the recordId of the standard topic). It also creates a topic hierarchy by assigning a parent topic with the parentId.

```

```

JSON example using name

This example creates a new managed topic by name and creates a topic hierarchy by assigning a parent topic with the parentId.

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| managedTopic​Type | String | Type of managed topic.Content—Topics that are associated with native content.Featured—Topics that are featured, for example, on the Experience Cloud site home page, but don’t provide overall navigation.Navigational—Topics that display in a navigational menu in the Experience Cloud site.A topic can be associated with all three managed topic types, so a topic can be a Featured, Navigational, and Content topic.You can create up to 25 Featured and 5,000 Content topics. You can create up to eight levels of Navigational managed topics with 25 top-level topics and 10 children topics per level for a maximum of 2,775 Navigational topics.To create a child managed topic, specify Navigational as the managedTopicType and specify a parentId. | Required | 32.0 |
| name | String | Name of the managed topic. | Required for new topicsYou must specify either name or recordId. You can’t specify both. | 32.0 |
| parentId | String | ID of the parent managed topic.If you specify a parentId, also specify Navigational as the managedTopicType.You can create up to eight levels (parent, direct children, their children, etc.) of managed topics and up to 10 children managed topics per managed topic. | Optional | 35.0 |
| recordId | String | ID of the record to become a managed topic.In version 32.0 and later, recordId must be a topic ID. | Required for existing topics if the Name property isn’t usedYou must specify either name or recordId. You can’t specify both. | 32.0 |

Request parameters for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| managedTopic​Type | String | Type of managed topic.Content—Topics that are associated with native content.Featured—Topics that are featured, for example, on the Experience Cloud site home page, but don’t provide overall navigation.Navigational—Topics that display in a navigational menu in the Experience Cloud site.A topic can be associated with all three managed topic types, so a topic can be a Featured, Navigational, and Content topic.You can create up to 25 Featured and 5,000 Content topics. You can create up to eight levels of Navigational managed topics with 25 top-level topics and 10 children topics per level for a maximum of 2,775 Navigational topics.To create a child managed topic, specify Navigational as the managedTopicType and specify a parentId. | Required | 32.0 |
| name | String | Name of the managed topic. | Required for new topicsYou must specify either name or recordId. You can’t specify both. | 32.0 |
| parentId | String | ID of the parent managed topic.If you specify a parentId, also specify Navigational as the managedTopicType.You can create up to eight levels (parent, direct children, their children, etc.) of managed topics and up to 10 children managed topics per managed topic. | Optional | 35.0 |
| recordId | String | ID of the record to become a managed topic.In version 32.0 and later, recordId must be a topic ID. | Required if the Name property isn’t usedYou must specify either name or recordId. You can’t specify both. | 32.0 |

Response body for POST

[Managed Topic](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_topic.htm "Managed topic in an Experience Cloud site.")

Request body for PATCH

Make a PATCH request to reorder parent managed topics or children managed topics with the same parent. You can’t reorder Content topics.

Root XML tag

<managedTopicPositionCollection>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| managedTopic​Positions | Managed Topic Position Input[] | Collection of managed topic position request bodies. This collection can include Featured and Navigational managed topics and doesn’t have to include all managed topics.If you don’t include all managed topics in managedTopicPositions, the managed topics are reordered by respecting the positions indicated in managedTopicPositions. Any managed topics that aren’t included in managedTopicPositions are pushed down to the next available position. See Reorder managed topics example. | Required | 32.0 |

Reorder managed topics example

If you have these managed topics:

| Managed Topic | Position |
| --- | --- |
| ManagedTopicA | 0 |
| ManagedTopicB | 1 |
| ManagedTopicC | 2 |
| ManagedTopicD | 3 |
| ManagedTopicE | 4 |

And you reorder managed topics by including this information in Managed Topic Position Collection Input:

| Managed Topic | Position |
| --- | --- |
| ManagedTopicD | 0 |
| ManagedTopicE | 2 |

The result is:

| Managed Topic | Position |
| --- | --- |
| ManagedTopicD | 0 |
| ManagedTopicA | 1 |
| ManagedTopicE | 2 |
| ManagedTopicB | 3 |
| ManagedTopicC | 4 |

Response body for PATCH

[Managed Topic Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_topic_collection.htm "A collection of managed topics in an Experience Cloud site.")

## Code Examples

```
/connect/communities/communityId/managed-topics
```

```
/connect/communities/communityId/managed-topics?&managedTopicType=Content
```

```
/connect/communities/communityId/managed-topics?depth=8&managedTopicType=Navigational
```

```
{
"managedTopicType":"Navigational",
"parentId": "0mtR000000001KLIAY",
"recordId":"0TOD00000000cwk"
}
```

```
{
"name":"Child Topic",
"managedTopicType":"Navigational",
"parentId":"0mtR000000001KLIAY"
}
```

## Related Topics

- Managed Topic
            Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_topic_collection.htm)
- Managed Topic (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_topic.htm)
- Managed Topic Position Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_managed_topic_position_input.htm)
