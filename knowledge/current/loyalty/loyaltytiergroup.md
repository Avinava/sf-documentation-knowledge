---
title: "LoyaltyTierGroup"
domain: loyalty
topic: loyaltytiergroup
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:53.340Z
estimatedTokens: 1378
keywords: [LoyaltyTierGroup, tier, groups, loyalty, program, group, categorizes, members, their, points, API, version, 51.0, later, Calls]
---

# LoyaltyTierGroup

> Represents information about tier groups of a loyalty program. Tier
      group categorizes members based on their loyalty points. This object is available in API
    version 51.0 and later.

# LoyaltyTierGroup

Represents information about tier groups of a loyalty program. Tier group categorizes members based on their loyalty points. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Category | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe category of the loyalty tier group.Possible values are:ClubsTier_Group - Tier Group |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDetailed description of the tier group. |
| EndDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe end date of the loyalty tier group. |
| ExtendExpiration | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionRequired. The field decides if the tier is changed on the exact day or the last day of the month.Possible values are:MemberEnrollmentAnniversary— Select this option only when TierModel is Anniversary. This change is available from API version 52.0 and later.NoneQualifyingPointsResetDate— This value can only be selected when TierModel is Fixed. This change is available from API version 52.0 and later.TillEndOfMonth— This value isn't supported in API version 52.0 and later. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. Indicates whether the loyalty tier group is active (true) or not (false). |
| IsHiddenToMembers | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the loyalty tier group is hidden (true) or not (false). |
| IsPrimary | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the loyalty tier group is primary (true) or not (false). |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| LoyaltyProgramId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the loyalty program.This is a relationship field.Relationship NameLoyaltyProgramRelationship TypeMaster-detailRefers ToLoyaltyProgram |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the loyalty tier group. |
| QpResetDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRequired. Start date of the QP reset process. |
| QpResetFrequency | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRequired. The frequency at which members’ qualifying points must be reset. |
| QpResetPeriod | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionRequired. Unit of the period for QP reset.Possible values are:Days—This value isn't supported in API version 52.0 and later.Months— This value isn't supported in API version 52.0 and later.Years |
| StartDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe start date of the loyalty tier group. |
| TierAssessmentCurrencyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the Loyalty Program Currency that's used to assess and assign tiers to members of the loyalty program. Members are assigned tiers based on their points balance for the currency. This field is available in API version 58.0 and later.This field is a relationship field.Relationship NameTierAssessmentCurrencyRelationship TypeLookupRefers ToLoyaltyProgramCurrency |
| TierModel | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionRequired. It’s the model that decides the start date of the qualifying period.Possible values are:AnniversaryFixed |
| TierPeriodQuantity | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRequired. The period after which members’ tier must be reset. |
| TierPeriodUnit | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionRequired. The frequency type for the tier assessment.Possible values are:Days—This value isn't supported in API version 52.0 and later.MonthsYears |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[LoyaltyTierGroupChangeEvent](atlas.en-us.loyalty.meta/loyalty/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API Version 62.0)

Change events are available for the object.

## Related Topics

- LoyaltyTierGroupChangeEvent (atlas.en-us.loyalty.meta/loyalty/sforce_api_associated_objects_change_event.htm)
