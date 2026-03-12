---
title: "JournalType"
domain: referral-marketing
topic: journaltype
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:36.152Z
estimatedTokens: 964
keywords: [JournalType, category, transaction, journal, identify, reason, journals, created, API, version, 59.0, later, Calls, Associated, Objects]
---

# JournalType

> Represents a category of transaction journal. Journal types identify
         the reason for which transaction journals are created. This object is available in API
      version 59.0 and later.

# JournalType

Represents a category of transaction journal. Journal types identify the reason for which transaction journals are created. This object is available in API version 59.0 and later.

Referral Marketing provides the following journal types by default:

-   Referral—This journal type is used to identify all transaction journals that are created for your referral programs.
-   Manual Points Adjustment—Reserved for internal use and isn't required for B2C or B2B referral programs. Don't use this journal type to customize or extend your implementation.
-   Qualifying Points Reset—Reserved for internal use and isn't required for B2C or B2B referral programs. Don't use this journal type to customize or extend your implementation.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=referral_marketing)

#### Tip

Transaction Journals are automatically created for referral events like referral signup, referral purchase, and member reward. The transaction journals are associated with the Referral journal type. For your custom processes, we recommend creating journal subtypes associated with the Referral journal type instead of creating journal types.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe description or the use of the journal type. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the journal type. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner ID of the journal type.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ProcessType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. The type of business process for which you want to use the journal type. For business processes related to Referral Marketing, enter Referral.Possible values are:LoyaltyReferralThe default value is Loyalty. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[JournalTypeHistory](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[JournalTypeOwnerSharingRule](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[JournalTypeShare](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- JournalTypeHistory (atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_associated_objects_history.htm)
- JournalTypeOwnerSharingRule (atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_associated_objects_ownersharingrule.htm)
- JournalTypeShare (atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_associated_objects_share.htm)
