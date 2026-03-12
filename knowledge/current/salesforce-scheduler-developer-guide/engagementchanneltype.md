---
title: "EngagementChannelType"
domain: salesforce-scheduler-developer-guide
topic: engagementchanneltype
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:43.692Z
estimatedTokens: 722
keywords: [EngagementChannelType, channel, customer, reached, communication, Engagement, supports, English, language, API, version, 48.0, later, Calls, Special]
---

# EngagementChannelType

> Represents a channel through which a customer can be reached for
         communication. The Engagement Channel Type object supports only the English language.
      This object is available in API version 48.0 and later.

# EngagementChannelType

Represents a channel through which a customer can be reached for communication. The Engagement Channel Type object supports only the English language. This object is available in API version 48.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Salesforce Scheduler must be enabled.

## Fields

| Field | Details |
| --- | --- |
| ContactPointType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe contact point type of the channel.Possible values are:InPerson—In PersonPhoneVideo |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the engagement channel type is active (true) or not (false). This field is available in API version 56.0 and later. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. Name of the communication subscription consent record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the account owner associated with this customer.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| UsageType | TypemultipicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionSpecifies the usage of the engagement channel type. This field is available in API version 56.0 and later.Possible values are:Salesforce Scheduler |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[EngagementChannelTypeFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_associated_objects_feed.htm "HTML (New Window)")

Feed tracking is available for the object.

[EngagementChannelTypeHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_associated_objects_history.htm "html (New Window)")

History is available for tracked fields of the object.

[EngagementChannelTypeShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_associated_objects_share.htm "HTML (New Window)")

Sharing is available for the object.
