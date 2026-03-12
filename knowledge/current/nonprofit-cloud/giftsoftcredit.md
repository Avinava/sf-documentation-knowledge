---
title: "GiftSoftCredit"
domain: nonprofit-cloud
topic: giftsoftcredit
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:01.623Z
estimatedTokens: 1114
keywords: [GiftSoftCredit, soft, credit, attributed, person, organization, gift, transaction, API, version, 59.0, later, Calls, Special, Access]
---

# GiftSoftCredit

> Represents the soft credit attributed to a person or organization for the
         gift transaction. This object is available in API version 59.0 and later.

# GiftSoftCredit

Represents the soft credit attributed to a person or organization for the gift transaction. This object is available in API version 59.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=nonprofit_cloud)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available only if the Fundraising Access license is enabled and the Fundraising User system permission is assigned to users.

## Fields

| Field | Details |
| --- | --- |
| GiftTransactionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe gift transaction associated with this soft credit.This field is a relationship field.Relationship NameGiftTransactionRelationship TypeMaster-DetailRefers ToGiftTransaction |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate isn’t null, the user accessed this record or list view |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe unique, auto-numbered name of the gift soft credit. |
| PartialAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount of the soft credit when it isn't the full transaction amount. |
| PartialPercent | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of the full transaction amount for this soft credit when it isn't the full transaction amount.NoteSoft Credit percent values don’t need to total to 100% when there are multiple soft credit records. |
| PartyPhilanthropicRsrchPrflId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe research profile associated with the gift.This field is a relationship field.Relationship NamePartyPhilanthropicRsrchPrflRelationship TypeLookupRefers ToPartyPhilanthropicRsrchPrfl |
| RecipientId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe person account that's associated with the soft credit.This field is a relationship field.Relationship NameRecipientRelationship TypeLookupRefers ToAccount |
| Role | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe soft credit role of the account or contact.Possible values are:HonoreeHousehold MemberInfluencerMatched DonorOtherSoft CreditSolicitorThird Party DonorThe default value is Soft Credit. |
| SoftCreditAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe calculated amount of the soft credit. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[GiftSoftCreditChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_change_event.htm "HTML (New Window)") (API Version 62.0)

Change events are available for the object.

[GiftSoftCreditFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_feed.htm)

Feed tracking is available for the object.

[GiftSoftCreditHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_history.htm)

History is available for tracked fields of the object.

[GiftSoftCreditOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[GiftSoftCreditShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_share.htm) (API Version 64.0)

Sharing is available for the object.
