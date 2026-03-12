---
title: "Managed Topic Input"
domain: chatterapi
topic: managed-topic-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.082Z
estimatedTokens: 573
keywords: [Managed, Topic, Input]
---

# Managed Topic Input

> A managed topic.

# Managed Topic Input

A managed topic.

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

#### See Also

-   [Create a Topic Hierarchy in Experience Cloud Sites](atlas.en-us.chatterapi.meta/chatterapi/quickreference_create_topic_hierarchy.htm "Create a topic hierarchy in Experience Cloud sites.")

## Code Examples

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

- Create a Topic Hierarchy in Experience Cloud Sites (atlas.en-us.chatterapi.meta/chatterapi/quickreference_create_topic_hierarchy.htm)
