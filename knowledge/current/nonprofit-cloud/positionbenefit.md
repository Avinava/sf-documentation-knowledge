---
title: "PositionBenefit"
domain: nonprofit-cloud
topic: positionbenefit
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:02.763Z
estimatedTokens: 700
keywords: [PositionBenefit, how, position, benefit, API, version, 64.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# PositionBenefit

> Represents how a position and benefit are related.  This object
      is available in API version 64.0 and later.

# PositionBenefit

Represents how a position and benefit are related. This object is available in API version 64.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available only if the VolunteerManagementPsl permission set license is enabled and the Manage Volunteer Data permission is assigned to users.

## Fields

| Field | Details |
| --- | --- |
| BenefitId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe lookup to the related job benefit.This field is a relationship field.Relationship NameBenefitRefers ToBenefit |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the position benefit. |
| PositionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe job position that receives the benefit.This field is a relationship field.Relationship NamePositionRelationship TypeMaster-detailRefers ToPosition (the master object) |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as Position Benefit. Otherwise, they're available in the specified API version and later.

[PositionBenefitChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_change_event.htm "HTML (New Window)")

Change events are available for the object.

[PositionBenefitFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_feed.htm)

Feed tracking is available for the object.

[PositionBenefitHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_history.htm)

History is available for tracked fields of the object.

[PositionBenefitOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[PositionBenefitShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_share.htm)

Sharing is available for the object.
