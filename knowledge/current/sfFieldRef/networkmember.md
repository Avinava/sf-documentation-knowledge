---
title: "NetworkMember"
domain: sfFieldRef
topic: networkmember
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:04.856Z
estimatedTokens: 720
keywords: [NetworkMember, member, Experience, Cloud, site, Members, either, users, company, external, portal, profiles, API, version, 26.0]
---

# NetworkMember

> Represents a member of an Experience Cloud
    site. Members can be either users in your company or external users with portal profiles.
   This object is available in API version 26.0 and later.

# NetworkMember

Represents a member of an Experience Cloud site. Members can be either users in your company or external users with portal profiles. This object is available in API version 26.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [NetworkMember](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_networkmember.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DefaultGroupNotificationFrequency | Default Notification Frequency when Joining Groups | picklist |  | 40 |  |  |
| DigestFrequency | Chatter Email Highlights Frequency | picklist |  | 40 |  |  |
| Id | Network Member ID | id |  | 18 |  |  |
| LastChatterActivityDate | Last Chatter Activity Date | date |  |  |  |  |
| MemberId | User ID | reference |  | 18 |  |  |
| NetworkId | Network ID | reference |  | 18 |  |  |
| PreferencesDisCommentAfterLikeEmail | DisCommentAfterLikeEmail | boolean |  |  |  |  |
| PreferencesDisMentionsCommentEmail | DisMentionsCommentEmail | boolean |  |  |  |  |
| PreferencesDisProfPostCommentEmail | DisProfPostCommentEmail | boolean |  |  |  |  |
| PreferencesDisableAllFeedsEmail | DisableAllFeedsEmail | boolean |  |  |  |  |
| PreferencesDisableBestAnswerEmail | DisableBestAnswerEmail | boolean |  |  |  |  |
| PreferencesDisableBookmarkEmail | DisableBookmarkEmail | boolean |  |  |  |  |
| PreferencesDisableChangeCommentEmail | DisableChangeCommentEmail | boolean |  |  |  |  |
| PreferencesDisableDirectMessageEmail | DisableDirectMessageEmail | boolean |  |  |  |  |
| PreferencesDisableEndorsementEmail | DisableEndorsementEmail | boolean |  |  |  |  |
| PreferencesDisableFollowersEmail | DisableFollowersEmail | boolean |  |  |  |  |
| PreferencesDisableItemFlaggedEmail | DisableItemFlaggedEmail | boolean |  |  |  |  |
| PreferencesDisableLaterCommentEmail | DisableLaterCommentEmail | boolean |  |  |  |  |
| PreferencesDisableLikeEmail | DisableLikeEmail | boolean |  |  |  |  |
| PreferencesDisableMentionsPostEmail | DisableMentionsPostEmail | boolean |  |  |  |  |
| PreferencesDisableMessageEmail | DisableMessageEmail | boolean |  |  |  |  |
| PreferencesDisablePendingReviewEmail | DisablePendingReviewEmail | boolean |  |  |  |  |
| PreferencesDisableProfilePostEmail | DisableProfilePostEmail | boolean |  |  |  |  |
| PreferencesDisableSharePostEmail | DisableSharePostEmail | boolean |  |  |  |  |
| ReputationPoints | Reputation Points | double |  |  | 15 | 0 |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
