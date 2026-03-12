---
title: "LoyaltyMemberTier"
domain: loyalty
topic: loyaltymembertier
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:53.100Z
estimatedTokens: 1153
keywords: [LoyaltyMemberTier, current, tier, member, across, groups, API, version, 51.0, later, Calls, Associated, Objects]
---

# LoyaltyMemberTier

> Represents information about the current tier of the member across tier
      groups. This object is available in API version 51.0 and later.

# LoyaltyMemberTier

Represents information about the current tier of the member across tier groups. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AreBenefitsAssigned | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether benefits are already assigned to a member tier. |
| ChangeReasonType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRepresents the information of the reason for changing a member tier.Possible values are:Based on Past Activities or TierResolve Tier ConflictVIP Member |
| EffectiveDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date from which the tier is in effect. |
| EnrollmentStartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date on which the member has enrolled in the associated tier. |
| EffectiveTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time on which a member is assigned the associated tier. |
| EnrollmentType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of enrollment for the loyalty member tier.Possible values are:PaidSegmentTierThe default value is Segment. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| LoyaltyMemberId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the loyalty program member.This is a relationship field.Relationship NameLoyaltyMemberRelationship TypeLookupRefers ToLoyaltyProgramMember |
| LoyaltyTierGroupId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the loyalty tier group.This is a relationship field.Relationship NameLoyaltyTierGroupRelationship TypeLookupRefers ToLoyaltyTierGroup |
| LoyaltyTierId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the loyalty tier.This is a relationship field.Relationship NameLoyaltyTierRelationship TypeLookupRefers ToLoyaltyTier |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the loyalty member tier. |
| ReasonForChange | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe reason to change a member tier. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the loyalty member tier.Possible values are:ActiveInactiveTrialThe default value is Active. |
| TierExpirationDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date on which the tier expires. |
| TierExpirationTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time on which the tier membership ends. |
| TierMemberIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUnique membership number of the member tier. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[LoyaltyMemberTierChangeEvent](atlas.en-us.loyalty.meta/loyalty/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API Version 62.0)

Change events are available for the object.

[LoyaltyMemberTierHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm) (API version 62.0)

Sharing is available for the object.

## Related Topics

- LoyaltyMemberTierChangeEvent (atlas.en-us.loyalty.meta/loyalty/sforce_api_associated_objects_change_event.htm)
