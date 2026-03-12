---
title: "GiftTransactionDesignation"
domain: edu-cloud-dev-guide
topic: gifttransactiondesignation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:25.602Z
estimatedTokens: 1014
keywords: [GiftTransactionDesignation, junction, gift, transaction, designation, API, version, 59.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# GiftTransactionDesignation

> Represents a junction between a gift transaction and a gift designation.
      This object is available in API version 59.0 and later.

# GiftTransactionDesignation

Represents a junction between a gift transaction and a gift designation. This object is available in API version 59.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=edu_cloud_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

This object is available only if the Fundraising Access license is enabled and the Fundraising User system permission is assigned to users.

## Fields

| Field | Details |
| --- | --- |
| Amount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount of the transaction allocated to the designation. |
| GiftDesignationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe gift designation associated with this transaction designation. A value is always required in this field to save the record.This field is a relationship field.Relationship NameGiftDesignationRelationship TypeLookupRefers ToGiftDesignation |
| GiftTransactionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe transaction associated with this transaction designation. A value is always required in this field to save the record.This field is a relationship field.Relationship NameGiftTransactionRelationship TypeMaster-DetailRefers ToGiftTransaction |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe auto-numbered name that uniquely identifies this transaction designation. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of this object.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| Percent | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of the transaction amount allocated to the designation. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[GiftTransactionDesignationChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_change_event.htm "HTML (New Window)") (API Version 62.0)

Change events are available for the object.

[GiftTransactionDesignationFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_feed.htm)

Feed tracking is available for the object.

[GiftTransactionDesignationHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_history.htm)

History is available for tracked fields of the object.

[GiftTransactionDesignationOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_ownersharingrule.htm) (API Version 64.0)

Sharing rules are available for the object.

[GiftTransactionDesignationShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_share.htm)

Sharing is available for the object.
