---
title: "GiftDefaultDesignation"
domain: edu-cloud-dev-guide
topic: giftdefaultdesignation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:25.499Z
estimatedTokens: 914
keywords: [GiftDefaultDesignation, designation, gifts, originate, opportunity, campaign, commitment, API, version, 59.0, later, Calls, Special, Access, Rules]
---

# GiftDefaultDesignation

> Represents the default designation for gifts that originate from an
         opportunity, campaign, or commitment. This object is available in API version 59.0 and
      later.

# GiftDefaultDesignation

Represents the default designation for gifts that originate from an opportunity, campaign, or commitment. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available only if the Fundraising Access license is enabled and the Fundraising User system permission is assigned to users.

## Fields

| Field | Details |
| --- | --- |
| AllocatedPercentage | TypepercentPropertiesCreate, Filter, Sort, UpdateDescriptionThe percentage of the gift that's allocated to this designation. |
| GiftDesignationId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe gift designation associated with this gift default designation.A value is always required in this field to save the record.This field is a relationship field.Relationship NameGiftDesignationRelationship TypeLookupRefers ToGiftDesignation |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate isn’t null, the user accessed this record or list view. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe auto-numbered name that uniquely identifies this gift default designation. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of this object. ID of the creator of this object.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ParentRecordId | TypereferencePropertiesCreate, Filter, Group, True, Sort, UpdateDescriptionThe parent record of this gift default designation.A value is always required in this field to save the record.This field is a polymorphic relationship field.Relationship NameParentRecordRelationship TypeLookupRefers ToCampaign, GiftCommitment, Opportunity |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[GiftDefaultDesignationChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_change_event.htm) (API Version 64.0)

Change events are available for the object.

[GiftDefaultDesignationFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_feed.htm)

Feed tracking is available for the object.

[GiftDefaultDesignationHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_history.htm)

History is available for tracked fields of the object.

[GiftDefaultDesignationOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_ownersharingrule.htm) (API Version 64.0)

Sharing rules are available for the object.

[GiftDefaultDesignationShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_share.htm)

Sharing is available for the object.
