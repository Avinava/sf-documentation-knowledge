---
title: "ConnectApi.ManagedTopic"
domain: apex-reference
topic: connectapimanagedtopic
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:39.244Z
keywords: [ConnectApi.ManagedTopic, See]
---

# ConnectApi.ManagedTopic

# ConnectApi.ManagedTopic

Represents a managed topic in an Experience Cloud site.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| children | List<ConnectApi.​ManagedTopic> | Children managed topics of the managed topic; null if the depth request parameter isn’t specified or is 1. | 35.0 |
| id | String | ID of managed topic. | 32.0 |
| managedTopicType | ConnectApi.Managed​Topic​Type | Type of managed topic.Content—Topics that are associated with native content.Featured—Topics that are featured, for example, on the Experience Cloud site home page, but don’t provide overall navigation.Navigational—Topics that display in a navigational menu in the Experience Cloud site. | 32.0 |
| parent | ConnectApi.Reference | Parent managed topic of the managed topic. | 35.0 |
| topic | ConnectApi.​Topic | Information about the topic. | 32.0 |
| url | String | Connect REST API URL to the managed topic. | 32.0 |

#### See Also

-   [ConnectApi.ManagedTopicCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_topic_collection.htm "A collection of managed topics.")