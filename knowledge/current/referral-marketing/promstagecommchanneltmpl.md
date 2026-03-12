---
title: "PromStageCommChannelTmpl"
domain: referral-marketing
topic: promstagecommchanneltmpl
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:36.287Z
estimatedTokens: 493
keywords: [PromStageCommChannelTmpl, junction, promotion, stage, communication, channel, template, API, version, 63.0, later, B2C, referral, programs, Calls]
---

# PromStageCommChannelTmpl

> Represents a junction between promotion stage and communication channel
         template. This object is available in API version 63.0 and later. This object is
      available only for B2C referral programs.

# PromStageCommChannelTmpl

Represents a junction between promotion stage and communication channel template. This object is available in API version 63.0 and later. This object is available only for B2C referral programs.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CommChannelTemplateId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the communication channel template associated with the promotion stage.This field is a relationship field.Relationship NameCommChannelTemplateRefers ToCommunicationChannelTemplate |
| InternalOrgUnitCommChannelId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the internal organization unit communication channel associated with the promotion stage.This field is a relationship field.Relationship NameInternalOrgUnitCommChannelRefers ToInternalOrgUnitCommChannel |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view.If this value is null, and <parmname>LastReferenceDate</parmname> is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the promotion stage communication channel template. |
| PromotionStageId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the parent promotion stage record.This field is a relationship field.Relationship NamePromotionStageRelationship TypeMaster-detailRefers ToPromotionStage (the master object) |
