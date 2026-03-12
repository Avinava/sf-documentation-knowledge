---
title: "SocialPost"
domain: object-reference
topic: socialpost
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:17.352Z
estimatedTokens: 3145
keywords: [SocialPost, snapshot, post, social, network, Facebook, Twitter, API, version, 23.0, later, Calls, Usage, Associated, Objects]
---

# SocialPost

> Represents a snapshot of a post on a social network such as a Facebook
			or Twitter. This object is available in API version 23.0 and later.

# SocialPost

Represents a snapshot of a post on a social network such as a Facebook or Twitter. This object is available in API version 23.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field Name | Details |
| --- | --- |
| AnalyzerScore | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionScore set on the social post in Social Studio. |
| AssignedTo | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionUser in Social Studio that the social post is assigned to. |
| AttachmentType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionType of the first attachment on the social post. Values are:APPLICATIONAUDIOIMAGELINKTEXTUNKNOWNVIDEO |
| AttachmentUrl | TypeurlPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionURL for the first attachment on the social post. |
| Classification | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionClassification for the social post, such as inquiry or customer case. |
| CommentCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNumber of comments on the social post. |
| Content | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionBody of the social post. |
| DeletedById | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIf the social post is deleted, ID of the person who deleted the social post.This is a relationship field.Relationship NameDeletedByRelationship TypeLookupRefers ToUser |
| EngagementLevel | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionEngagement level of the social post, such as reviewed or resolved. |
| ExternalPostId | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the social post in its social network. |
| Handle | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionHandle of the person who posted the social post. |
| HarvestDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate and time when Social Studio collected the social post. |
| Headline | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionHeadline of the social post. |
| HiddenById | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIf the social post is hidden, ID of the person who hid it.This is a relationship field.Relationship NameHiddenByRelationship TypeLookupRefers ToUser |
| InboundLinkCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNumber of links on the inbound social post. |
| IsOutbound | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, SortDescriptionSpecifies whether the social post is outbound or not. |
| KeywordGroupName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRadian6 field that is no longer used. |
| Language | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLanguage of the social post. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionDate when the social post was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionDate when the social post was last viewed. |
| LikedBy | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the managed social account in the social network that liked the social post. |
| LikesAndVotes | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRadian6 number of likes and votes on the social post. |
| MediaProvider | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSocial network of the social post. |
| MediaType | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionType of social network of the social post. |
| MessageType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionType of message. Values are:Comment—Facebook commentDirect—Twitter direct messagePost—Facebook postPrivate—Facebook private messageReply—Twitter or Facebook replyRetweet—Twitter retweetTweet—Twitter tweet |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the social post. |
| Notes | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionNotes added by Social Hub actions for the social post. |
| OutboundSocialAccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionID of the social account used for outbound social posts.This is a relationship field.Relationship NameOutboundSocialAccountRelationship TypeLookupRefers ToExternalSocialAccount |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of the social post.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ParentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the parent record of the social post, for example, the ID of a case.This is a relationship field.Relationship NameParentRelationship TypeLookupRefers ToCase |
| PersonaId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the social persona who made the post.This is a relationship field.Relationship NamePersonaRelationship TypeLookupRefers ToSocialPersona |
| PostPriority | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPriority of the social post set in Social Studio. |
| PostTags | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionComma-separated list of tags on the social post. |
| PostUrl | TypeurlPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionURL for the social post. |
| Posted | TypedateTimePropertiesCreate, Defaulted on create, Filter, Sort, UpdateDescriptionDate and time when the social post was made. |
| Provider | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionSocial network of the social post. |
| R6PostId | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionUnique ID of the post in Social Studio. |
| R6SourceId | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the author in Social Studio. |
| R6TopicId | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID for either the topic profile or the managed account in Social Studio. |
| Recipient | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the recipient of the social post in Social Studio. |
| RecipientType | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionType of the recipient of the social post, such as a person. |
| ReplyToId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionDynamically generated from replyToExternalPostId in Social Studio.This is a relationship field.Relationship NameReplyToRelationship TypeLookupRefers ToSocialPost |
| ResponseContextExternalId | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionExternal ID, such as a conversation ID, author ID, or post ID, for the item you’re responding to. |
| ReviewScale | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionReview scale for the social post. |
| ReviewScore | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionReview score for the social post. |
| ReviewedStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStatus of the social post review. |
| Sentiment | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSentiment of the social post. Values are:NegativeNeutralPositiveSomewhatNegativeSomewhatPositive |
| Shares | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNumber of times the social post has been shared. |
| SourceTags | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionComma-separated list of author type tags. |
| SpamRating | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpam rating of the social post. Values are:NotSpamSpam |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionStatus of the social post. Values are:DELETEDFAILEDHIDDENPENDINGPENDING_APPROVALRECALL_APPROVALREJECTED_APPROVALREPLIEDSENTUNKNOWN |
| StatusMessage | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStatus message for the social post. |
| ThreadSize | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRadian6 field. No longer used. |
| TopicProfileName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of the topic profile for the social post in Social Studio. |
| TopicType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionType of topic. Values are:KeywordManaged |
| TruncatedContent | TypestringPropertiesFilter, Group, Nillable, SortDescriptionTruncated content of the social post. |
| UniqueCommentors | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNumber of unique people who commented on the social post. |
| ViewCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNumber of times the social post was viewed. |
| WhoId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPolymorphic ID of a person such as a lead or a contact.This is a polymorphic relationship field.Relationship NameWhoRelationship TypeLookupRefers ToAccount, Contact, Lead |

## Usage

The fields on a SocialPost object don’t provide real-time data. They provide a snapshot of information from the last time Salesforce collected the post from the social network. Many of the Radian6-related fields are no longer accurate or used.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[SocialPostChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 48.0)

Change events are available for the object.

[SocialPostFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.") (API version 26.0)

Feed tracking is available for the object.

[SocialPostHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.") (API version 26.0)

History is available for tracked fields of the object.

[SocialPostOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[SocialPostShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- SocialPostChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- SocialPostFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- SocialPostHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- SocialPostOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- SocialPostShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
