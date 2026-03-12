---
title: "SocialPost"
domain: sfFieldRef
topic: socialpost
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:14.241Z
estimatedTokens: 1100
keywords: [SocialPost, snapshot, post, social, network, Facebook, Twitter, API, version, 23.0, later]
---

# SocialPost

> Represents a snapshot of a post on a social network such as a Facebook
			or Twitter. This object is available in API version 23.0 and later.

# SocialPost

Represents a snapshot of a post on a social network such as a Facebook or Twitter. This object is available in API version 23.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [SocialPost](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_socialpost.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AnalyzerScore | Analyzer Score | double |  |  | 18 | 3 |
| AssignedTo | Assigned To | string |  | 255 |  |  |
| AttachmentType | Attachment Type | picklist |  | 255 |  |  |
| AttachmentUrl | Attachment URL | url |  | 255 |  |  |
| Classification | Classification | picklist |  | 40 |  |  |
| CommentCount | Comment Count | int | 9 |  |  |  |
| Content | Message | textarea |  | 32000 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| DeletedById | Deleted By ID | reference |  | 18 |  |  |
| EngagementLevel | Engagement Level | picklist |  | 40 |  |  |
| ExternalPostId | External Post Id | string |  | 255 |  |  |
| Handle | Social Handle | string |  | 255 |  |  |
| HarvestDate | Harvest Date | datetime |  |  |  |  |
| Headline | Headline | string |  | 255 |  |  |
| HiddenById | Hidden By ID | reference |  | 18 |  |  |
| Id | Social Post ID | id |  | 18 |  |  |
| InboundLinkCount | Inbound Link Count | int | 9 |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsOutbound | Is Outbound | boolean |  |  |  |  |
| KeywordGroupName | Keyword Group Name | string |  | 255 |  |  |
| Language | Language | string |  | 255 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LikedBy | Liked By | string |  | 255 |  |  |
| LikesAndVotes | Likes and Votes | int | 9 |  |  |  |
| MediaProvider | Social Studio Media Provider | string |  | 255 |  |  |
| MediaType | Social Studio Media Type | string |  | 255 |  |  |
| MessageType | Message Type | picklist |  | 255 |  |  |
| Name | Name | string |  | 255 |  |  |
| Notes | Notes | textarea |  | 32000 |  |  |
| OutboundSocialAccountId | Managed Social Account ID | reference |  | 18 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ParentId | Parent ID | reference |  | 18 |  |  |
| PersonaId | Social Persona ID | reference |  | 18 |  |  |
| PostPriority | Post Priority | string |  | 255 |  |  |
| PostTags | Post Tags | textarea |  | 32000 |  |  |
| PostUrl | Post URL | url |  | 255 |  |  |
| Posted | Posted Date | datetime |  |  |  |  |
| Provider | Social Network | picklist |  | 255 |  |  |
| R6PostId | Social Studio Post Id | string |  | 255 |  |  |
| R6SourceId | Social Studio Source Id | string |  | 255 |  |  |
| R6TopicId | Social Studio Topic Id | string |  | 255 |  |  |
| Recipient | Recipient | string |  | 255 |  |  |
| RecipientType | Recipient Type | string |  | 255 |  |  |
| ReplyToId | In Reply To ID | reference |  | 18 |  |  |
| ResponseContextExternalId | Response Context | string |  | 255 |  |  |
| ReviewScale | Review Scale | double |  |  | 18 | 2 |
| ReviewScore | Review Score | double |  |  | 18 | 2 |
| ReviewedStatus | Reviewed Status | picklist |  | 40 |  |  |
| Sentiment | Sentiment | picklist |  | 255 |  |  |
| Shares | Shares | int | 9 |  |  |  |
| SourceTags | Source Tags | textarea |  | 32000 |  |  |
| SpamRating | Spam Rating | picklist |  | 255 |  |  |
| Status | Status | picklist |  | 255 |  |  |
| StatusMessage | Status Message | textarea |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| ThreadSize | Thread Size | int | 9 |  |  |  |
| TopicProfileName | Topic Profile Name | string |  | 255 |  |  |
| TopicType | Topic Type | picklist |  | 255 |  |  |
| TruncatedContent | Message Clipping | string |  | 255 |  |  |
| UniqueCommentors | Unique Commentors | int | 9 |  |  |  |
| ViewCount | View Count | int | 9 |  |  |  |
| WhoId | Who ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
