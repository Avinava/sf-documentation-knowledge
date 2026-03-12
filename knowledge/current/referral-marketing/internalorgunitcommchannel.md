---
title: "InternalOrgUnitCommChannel"
domain: referral-marketing
topic: internalorgunitcommchannel
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:36.139Z
estimatedTokens: 461
keywords: [InternalOrgUnitCommChannel, communication, channel, internal, organization, unit, API, version, 63.0, later, B2C, referral, programs, Calls, Special]
---

# InternalOrgUnitCommChannel

> Represents the communication channel for the internal organization unit.
      This object is available in API version 63.0 and later. This object is available only for B2C
      referral programs.

# InternalOrgUnitCommChannel

Represents the communication channel for the internal organization unit. This object is available in API version 63.0 and later. This object is available only for B2C referral programs.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

## Fields

| Field | Details |
| --- | --- |
| ChannelIdentifier | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique identifier of the communication channel. |
| CommunicationChannelTypeId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionSpecifies the ID of the communication channel type.This field is a relationship field.Relationship NameCommunicationChannelTypeRefers ToCommunicationChannelType |
| InternalOrganizationUnitId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the parent internal organization unit that's associated with the communication channel.This field is a relationship field.Relationship NameInternalOrganizationUnitRelationship TypeMaster-detailRefers ToInternalOrganizationUnit (the master object) |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view.If this value is null, and <parmname>LastReferenceDate</parmname> is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the internal organization unit communication channel. |
