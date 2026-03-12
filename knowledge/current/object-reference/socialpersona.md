---
title: "SocialPersona"
domain: object-reference
topic: socialpersona
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:17.325Z
estimatedTokens: 1394
keywords: [SocialPersona, snapshot, contact's, profile, social, network, Facebook, Twitter, API, version, 22.0, later, Calls, Usage, Associated]
---

# SocialPersona

> Represents a snapshot of a contact's profile on a social network
			such as Facebook or Twitter. This object is available in API version 22.0 and
		later.

# SocialPersona

Represents a snapshot of a contact's profile on a social network such as Facebook or Twitter. This object is available in API version 22.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field Name | Details |
| --- | --- |
| AreWeFollowing | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether a Salesforce social account is following the social persona or not. |
| AuthorLabels | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionComma-separated list of author type tags. |
| AvatarUrl | TypestringPropertiesNillableDescriptionRetrieves the user's social network avatar. It's a read-only field and you can't specify or update its value. |
| Bio | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionBiography of the social persona. |
| ExternalId | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the social persona on the social network. |
| ExternalPictureURL | TypeurlPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionURL to the picture of the social persona on the social network. |
| Followers | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNumber of followers that the social persona has. |
| Following | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNumber of people that the social persona is following. |
| InfluencerScore | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRadian6 score describing the influence of the social persona. No longer used. |
| IsBlacklisted | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether the social persona is blacklisted or not. |
| IsDefault | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether the social persona supplies the default avatar image that’s displayed on the contact or account. |
| IsFollowingUs | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether the social persona is following a Salesforce social account or not. |
| IsVerified | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether the social persona is verified or not. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionDate and time when the social persona was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionDate and time when the social persona was last viewed. |
| ListedCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRadian6 field. No longer used. |
| MediaProvider | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSocial network of the social persona. |
| MediaType | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSocial network type of the social persona. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the social persona. |
| NumberOfFriends | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNumber of friends that the social persona has. |
| NumberOfTweets | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNumber of tweets made by the social persona. |
| ParentId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionID of the contact parent record for the social persona.This is a polymorphic relationship field.Relationship NameParentRelationship TypeLookupRefers ToAccount, Contact, Lead, SocialPost |
| ProfileType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionType of profile. Values are:PersonPage |
| ProfileUrl | TypeurlPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionURL for the profile. |
| Provider | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSocial network, such as Facebook or Twitter, of the social persona. |
| R6SourceId | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the social persona in Social Studio. |
| RealName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReal name of the social persona. |
| SourceApp | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionSalesforce product that created the social persona. |
| TopicType | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionType of topic, such as keyword or managed. |

## Usage

The fields on a SocialPersona object don’t provide real-time data. They provide a snapshot of information from the last time Salesforce collected a post from the social persona. Many of the Radian6-related fields are no longer accurate or used.

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[SocialPersonaHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.") (API version 26.0)

History is available for tracked fields of the object.

## Related Topics

- SocialPersonaHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
