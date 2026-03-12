---
title: "LoyaltyMembershipLifecycle"
domain: loyalty
topic: loyaltymembershiplifecycle
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:53.090Z
estimatedTokens: 821
keywords: [LoyaltyMembershipLifecycle, member's, lifecycle, loyalty, program, API, version, 57.0, later, Calls, Associated, Objects]
---

# LoyaltyMembershipLifecycle

> Represents information about a member's lifecycle in the loyalty
         program. This object is available in API version 57.0 and later.

# LoyaltyMembershipLifecycle

Represents information about a member's lifecycle in the loyalty program. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Comment | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe comments for the member's lifecycle event. |
| EffectiveEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date till when the member's lifecycle event is effective. |
| EffectiveEndDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe start date and time of the lifecycle event. |
| EffectiveStartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date from when the member's lifecycle event is effective. |
| EffectiveStartDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe start date and time of the lifecycle event. |
| ExternalIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe external identifier of the member's lifecycle event. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| LoyaltyMemberTierId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the loyalty member tier associated with the loyalty membership lifecycle.This field is a relationship field.Relationship NameLoyaltyMemberTierRefers ToLoyaltyMemberTier |
| LoyaltyProgramMemberId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe loyalty program member whose lifecycle is tracked.This field is a relationship field.Relationship NameLoyaltyProgramMemberRelationship TypeLookupRefers ToLoyaltyProgramMember |
| MembershipStatus | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. Specifies the status of the member's lifecycle event. |
| MembershipType | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. Specifies the type of lifecycle event of the member. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the lifecycle event. |
| OrderItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe order associated with the lifecycle event.This field is a relationship field.Relationship NameOrderItemRelationship TypeLookupRefers ToOrderItem |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[LoyaltyMembershipLifecycleHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm "HTML (New Window)")

History is available for tracked fields of the object.
