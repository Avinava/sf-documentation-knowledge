---
title: "JournalSubType"
domain: referral-marketing
topic: journalsubtype
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:36.145Z
estimatedTokens: 863
keywords: [JournalSubType, subcategory, transaction, journals, Journal, subtypes, identify, advocate, referred, party, activity, created, API, version, 59.0]
---

# JournalSubType

> Represents a subcategory of transaction journals. Journal subtypes
         identify the type of advocate or referred party activity for which transaction journals are
         created. This object is available in API version 59.0 and later.

# JournalSubType

Represents a subcategory of transaction journals. Journal subtypes identify the type of advocate or referred party activity for which transaction journals are created. This object is available in API version 59.0 and later.

Referral Marketing provides journal subtypes that you can use to create custom processes for referral promotion based on your company’s requirements.

These subtypes are provided by default for B2C referral programs:

-   Advocate Enrollment—Used for transaction journals that are created when an existing customer joins as an advocate of the referral program.
-   Advocate Reward—Used for transaction journals that are created to reward advocates after their referrals sign up.
-   Referral Purchase—Used for transaction journals that are created when a referral completes a purchase.
-   Referral Signup—Used for transaction journals that are created when a referral signs up as a new customer.
-   Member Purchase—Reserved for internal use and isn't required for B2C or B2B referral programs. Don't use this journal subtype to customize or extend your implementation.

These subtypes are provided by default for B2B referral programs:

-   Advocate Enrollment—Used for transaction journals that are created when an existing partner joins as an advocate of the referral program.
-   Advocate Reward—Used for transaction journals that are created to reward advocates.
-   Referral Lead Creation—Used for transaction journals that are created when a lead record is created for a referred party.
-   Referral Qualification—Used for transaction journals that are created when a referral lead qualifies.
-   Referred Party Reward—Used for transaction journals that are created to reward a referred party.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe description or the use of the journal subtype. |
| JournalTypeId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the journal type associated with the journal subtype. In Referral Marketing, journal subtypes are always associated with the Referral journal type.This field is a relationship field.Relationship NameJournalTypeRelationship TypeLookupRefers ToJournalType |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the journal subtype. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[JournalSubTypeHistory](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- JournalSubTypeHistory (atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_associated_objects_history.htm)
