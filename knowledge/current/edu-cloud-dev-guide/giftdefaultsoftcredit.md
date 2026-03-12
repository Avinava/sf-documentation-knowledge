---
title: "GiftDefaultSoftCredit"
domain: edu-cloud-dev-guide
topic: giftdefaultsoftcredit
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:25.508Z
estimatedTokens: 1013
keywords: [GiftDefaultSoftCredit, allocation, soft, credits, gift, commitment, transactions, created, recurrence, engine, credited, constituents, influenced, API, version]
---

# GiftDefaultSoftCredit

> Represents the default allocation for soft credits on gift commitment
         transactions that are created by a recurrence engine and credited to constituents who
         influenced the commitment. This object is available in API version 62.0 and later.

# GiftDefaultSoftCredit

Represents the default allocation for soft credits on gift commitment transactions that are created by a recurrence engine and credited to constituents who influenced the commitment. This object is available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available only if the Fundraising Access license is enabled and the Fundraising User system permission is assigned to users.

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe unique, auto-numbered name of the gift default soft credit. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of this object.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ParentRecordId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe parent opportunity, or gift commitment record that's related to this default soft credit.This field is a polymorphic relationship field.Relationship NameParentRecordRefers ToGiftCommitment, Opportunity |
| PartialAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount of the gift transaction that's allocated as a soft credit to the specified recipient. |
| PartialPercent | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of the gift transaction that's allocated as a soft credit to the specified recipient. |
| RecipientId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe person or organization account that's associated with the soft credit.This field is a relationship field.Relationship NameRecipientRefers ToAccount |
| Role | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe soft credit role of the account or contact.Possible values are:HonoreeHousehold MemberInfluencerMatched DonorOtherSoft CreditSolicitorThird Party DonorThe default value is Soft Credit. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[GiftDefaultSoftCreditChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_change_event.htm) (API Version 64.0)

Change events are available for the object.

[GiftDefaultSoftCreditFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_feed.htm) (API Version 64.0)

Feed tracking is available for the object.

[GiftDefaultSoftCreditHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_history.htm)

History is available for tracked fields of the object.

[GiftDefaultSoftCreditOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[GiftDefaultSoftCreditShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_share.htm)

Sharing is available for the object.
