---
title: "LoyaltyProgram"
domain: referral-marketing
topic: loyaltyprogram
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:36.177Z
estimatedTokens: 949
keywords: [LoyaltyProgram, referral, program, records, program’s, promotions, rewards, advocates, referrals, associated, API, version, 59.0, later, Calls]
---

# LoyaltyProgram

> Represents the referral program. All records related to the referral
         program’s promotions, rewards, advocates, and referrals are associated with the referral
         program. This object is available in API version 59.0 and later.

# LoyaltyProgram

Represents the referral program. All records related to the referral program’s promotions, rewards, advocates, and referrals are associated with the referral program. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Description | TypestringPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe description or the business value of the referral program. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the referral program. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the referral program.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. Specifies the status of the referral program.Possible values are:ActiveInactiveThe default value is Active. |
| SubType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionRequired. Specifies the type of referral program.Possible values are:For B2B referral programs: B2B — Business to BusinessFor B2C referral programs: B2C — Business to Customer |
| Type | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. Specifies the type of program.Possible values are:REFERRAL_PROGRAMLOYALTY_PROGRAM—Reserved for internal use and isn't required for B2C or B2B referral programs. Don't use this value to customize or extend your implementation. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[LoyaltyProgramFeed](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[LoyaltyProgramHistory](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[LoyaltyProgramOwnerSharingRule](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[LoyaltyProgramShare](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- LoyaltyProgramFeed (atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_associated_objects_feed.htm)
- LoyaltyProgramHistory (atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_associated_objects_history.htm)
- LoyaltyProgramOwnerSharingRule (atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_associated_objects_ownersharingrule.htm)
- LoyaltyProgramShare (atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_associated_objects_share.htm)
