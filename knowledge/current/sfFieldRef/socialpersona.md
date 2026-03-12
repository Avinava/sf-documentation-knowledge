---
title: "SocialPersona"
domain: sfFieldRef
topic: socialpersona
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:14.218Z
estimatedTokens: 684
keywords: [SocialPersona, snapshot, contact's, profile, social, network, Facebook, Twitter, API, version, 22.0, later]
---

# SocialPersona

> Represents a snapshot of a contact's profile on a social network
			such as Facebook or Twitter. This object is available in API version 22.0 and
		later.

# SocialPersona

Represents a snapshot of a contact's profile on a social network such as Facebook or Twitter. This object is available in API version 22.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [SocialPersona](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_socialpersona.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AreWeFollowing | Are we following | boolean |  |  |  |  |
| AuthorLabels | Author Labels | string |  | 255 |  |  |
| AvatarUrl | Avatar URL | string |  | 1024 |  |  |
| Bio | Bio | textarea |  | 32000 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| ExternalId | Social Persona Provider External Id | string |  | 255 |  |  |
| ExternalPictureURL | Provider External Picture URL | url |  | 255 |  |  |
| Followers | Followers | int | 9 |  |  |  |
| Following | Following | int | 9 |  |  |  |
| Id | Social Persona ID | id |  | 18 |  |  |
| InfluencerScore | Influencer Score | int | 9 |  |  |  |
| IsBlacklisted | Blocklisted | boolean |  |  |  |  |
| IsDefault | Default | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsFollowingUs | Is following us | boolean |  |  |  |  |
| IsVerified | Verified | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| ListedCount | Listed Count | int | 9 |  |  |  |
| MediaProvider | Social Studio Media Provider | string |  | 255 |  |  |
| MediaType | Social Studio Media Type | string |  | 255 |  |  |
| Name | Social Handle | string |  | 255 |  |  |
| NumberOfFriends | Number Of Friends | int | 9 |  |  |  |
| NumberOfTweets | Number Of Tweets | int | 9 |  |  |  |
| ParentId | Parent ID | reference |  | 18 |  |  |
| ProfileType | Profile Type | picklist |  | 255 |  |  |
| ProfileUrl | Profile URL | url |  | 255 |  |  |
| Provider | Social Network | picklist |  | 255 |  |  |
| R6SourceId | Social Studio Source Id | string |  | 255 |  |  |
| RealName | Real Name | string |  | 255 |  |  |
| SourceApp | Source App | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TopicType | Topic Type | string |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
