---
title: "ChatterActivity"
domain: sfFieldRef
topic: chatteractivity
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:52.972Z
estimatedTokens: 292
keywords: [ChatterActivity, number, posts, comments, made, user, likes, received, API, version, 23.0, later]
---

# ChatterActivity

> ChatterActivity represents the number of
    posts and comments made by a user and the number of comments and likes on posts and comments
    received by the same user.
  This object is available in API version 23.0 and
   later.

# ChatterActivity

ChatterActivity represents the number of posts and comments made by a user and the number of comments and likes on posts and comments received by the same user. This object is available in API version 23.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ChatterActivity](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_chatteractivity.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CommentCount | Comment Count | int | 9 |  |  |  |
| CommentReceivedCount | Comment Received Count | int | 9 |  |  |  |
| Id | Chatter Activity ID | id |  | 18 |  |  |
| InfluenceRawRank | Influence Raw Rank | int | 9 |  |  |  |
| LikeReceivedCount | Like Received Count | int | 9 |  |  |  |
| ParentId | Parent ID | reference |  | 18 |  |  |
| PostCount | Post Count | int | 9 |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
