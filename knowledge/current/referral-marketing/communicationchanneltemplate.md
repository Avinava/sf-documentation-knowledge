---
title: "CommunicationChannelTemplate"
domain: referral-marketing
topic: communicationchanneltemplate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:36.105Z
estimatedTokens: 514
keywords: [CommunicationChannelTemplate, template, different, communication, channels, API, version, 63.0, later, B2C, referral, programs, Calls]
---

# CommunicationChannelTemplate

> Represents the template for different communication channels. This
      object is available in API version 63.0 and later. This object is available only for B2C
      referral programs.

# CommunicationChannelTemplate

Represents the template for different communication channels. This object is available in API version 63.0 and later. This object is available only for B2C referral programs.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CommunicationChannelTypeId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionSpecifies the ID of communication channel type.This field is a relationship field.Relationship NameCommunicationChannelTypeRefers ToCommunicationChannelType |
| ContentIdentifier | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique identifier of the content that is used in a service, such as a Marketing Cloud service. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the template is active (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view.If this value is null, and <parmname>LastReferenceDate</parmname> is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the communication channel template. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of the communication channel template.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| TemplateContent | TypetextareaPropertiesCreate, UpdateDescriptionThe content of the communication channel template. |
