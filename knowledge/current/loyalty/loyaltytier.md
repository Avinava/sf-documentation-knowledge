---
title: "LoyaltyTier"
domain: loyalty
topic: loyaltytier
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:53.323Z
estimatedTokens: 1012
keywords: [LoyaltyTier, tiers, loyalty, program, tier, group, sequential, order, API, version, 51.0, later, Calls, Associated, Objects]
---

# LoyaltyTier

> Represents information about tiers of a loyalty program. A tier group
      has a set of tiers in a sequential order. This object is available in API version 51.0
    and later.

# LoyaltyTier

Represents information about tiers of a loyalty program. A tier group has a set of tiers in a sequential order. This object is available in API version 51.0 and later.

You can set up Loyalty Tiers to group the members based on their qualifying points. Qualifying points are awarded to members based on their activities in a loyalty program. The hierarchies are created in the tiers using the sequence number. The qualifying points are used to assess a member’s tier for upgrade or downgrade.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Color | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe color that represents the tier. This field is available in API version 62.0 and later. |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDetailed description of the tier. |
| EligibleEnrollmentType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of enrollment for which a member is eligible.Possible values are:FreePaidSegmentBasedTierBasedTrial |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| LoyaltyProgramId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the loyalty program associated with the loyalty tier. This field is available in API version 64.0 and later.This field is a relationship field.Relationship NameLoyaltyProgramRefers ToLoyaltyProgram |
| LoyaltyTierGroupId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the loyalty tier group.This is a relationship field.Relationship NameLoyaltyTierGroupRelationship TypeLookupRefers ToLoyaltyTierGroup |
| MaximumEligibleBalance | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe maximum balance that's required for loyalty program members to be eligible for the tier. This field is available in API version 58.0 and later. |
| MinimumEligibleBalance | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe minimum balance that's required for loyalty program members to be eligible for the tier. This field is available in API version 58.0 and later. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the loyalty tier. |
| SequenceNumber | TypeintPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe sequence number indicates the ranking of the tier. The tier with the highest sequence number indicates the highest tier. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[LoyaltyTierChangeEvent](atlas.en-us.loyalty.meta/loyalty/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API Version 62.0)

Change events are available for the object.

[LoyaltyTierHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

## Related Topics

- LoyaltyTierChangeEvent (atlas.en-us.loyalty.meta/loyalty/sforce_api_associated_objects_change_event.htm)
