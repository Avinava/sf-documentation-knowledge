---
title: "ConnectApi.EntityRecommendation"
domain: apex-reference
topic: connectapientityrecommendation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:38.698Z
keywords: [ConnectApi.EntityRecommendation]
---

# ConnectApi.EntityRecommendation

# ConnectApi.EntityRecommendation

A Chatter, custom, or static recommendation.

Subclass of [ConnectApi.AbstractRecommendation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_abstract_recommendation.htm "A Chatter, custom, or static recommendation.").

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| actOnUrl | String | For user, file, group, topic, and record entity types, use this Connect REST URL with a POST request to take action on the recommendation.For ConnectApi.RecommendedObject entity types, such as custom recommendations, use the actionUrl property of the ConnectApi.PlatformAction to take action on the recommendation. | 32.0 |
| action | ConnectApi.​Recommendation​ActionType | Specifies the action to take on a recommendation.follow—Follow a file, record, topic, or user.join—Join a group.view—View a file, group, article, record, user, custom, or static recommendation. | 32.0 |
| entity | ConnectApi.Actor | The entity with which the receiver is recommended to take action. | 32.0 |