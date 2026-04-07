---
title: "Describe"
domain: mc-apis
topic: describe
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:21.518Z
estimatedTokens: 230
keywords: [Describe, metadata, associated, dynamically, build, profile, centers, track, data, retrieval, interfaces, supports, form, ObjectDefinitionRequest, Output]
---

# Describe

> Use the Describe method to get information about the metadata associated with an object. You could use the Describe method to dynamically build profile centers and track data retrieval interfaces. The Describe method supports a request for object metadata in the form of an ObjectDefinitionRequest an

# Describe

Use the Describe method to get information about the metadata associated with an object. You could use the Describe method to dynamically build profile centers and track data retrieval interfaces. The Describe method supports a request for object metadata in the form of an ObjectDefinitionRequest and returns a single ObjectDefinition object.

## C# Syntax

```
ObjectDefinition[] describe = Describe(DescribeRequests, RequestID)
```

## Parameters

| Name | Data Type | Description |
| --- | --- | --- |
| DescribeRequests | ObjectDefinitionRequest | A collection of requests to describe objects. |
| RequestID | String | Marketing Cloud's unique identifier for every request. |
| ObjectDefinition |  | Object containing the requested metadata. |

## Output

-   PropertyDefinition Object

## Related Items

[Describe a Subscriber](atlas.en-us.noversion.mc-apis.meta/mc-apis/describing_a_subscriber.htm)

## Related Topics

- Describe a Subscriber (atlas.en-us.noversion.mc-apis.meta/mc-apis/describing_a_subscriber.htm)
