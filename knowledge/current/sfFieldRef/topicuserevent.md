---
title: "TopicUserEvent"
domain: sfFieldRef
topic: topicuserevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:15.435Z
estimatedTokens: 219
keywords: [TopicUserEvent, action, comment, post, share, made, user, topic, API, version, 42.0, later]
---

# TopicUserEvent

> Represents an action (such as comment, post, like, or share) made by a
   user on a topic. This object is available in API version 42.0 and later.

# TopicUserEvent

Represents an action (such as comment, post, like, or share) made by a user on a topic. This object is available in API version 42.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [TopicUserEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_topicuserevent.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ActionEnum | Action | picklist |  | 40 |  |  |
| CreatedDate | Create Date | datetime |  |  |  |  |
| Id | Event ID | id |  | 18 |  |  |
| TopicId | Topic ID | reference |  | 18 |  |  |
| UserId | User ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
