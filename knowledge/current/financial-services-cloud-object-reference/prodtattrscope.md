---
title: "ProdtAttrScope"
domain: financial-services-cloud-object-reference
topic: prodtattrscope
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:31.434Z
estimatedTokens: 1100
keywords: [ProdtAttrScope, scope, definition, product, attribute, claims, processing, API, version, 65.0, later, Calls, Associated, Objects]
---

# ProdtAttrScope

> Represents the scope definition for a product attribute so that it can be
         used during claims processing. This object is available in API version 65.0 and later.

# ProdtAttrScope

Represents the scope definition for a product attribute so that it can be used during claims processing. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ApplicableActions | TypemultipicklistPropertiesCreate, Filter, Nillable, Restricted picklist, UpdateDescriptionSpecifies the action type that initiates the attribute processing.Possible values are:Calculate AdjustmentPayment AttemptedReserve Adjustment |
| Category | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the processing category of the associated attribute.Possible values are:CoinsuranceCopayDeductibleLimit—CurrencyLimit—Unit CountOut-of-Pocket Max |
| DurationType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the duration type over which the attribute consumption is actively monitored during claims processing.Possible values are:Calendar YearCustomOverride —Available in API version 66.0 and later.LifetimePolicy TermRolling Time PeriodThe default value is Policy Term. |
| DurationUnit | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the unit of measure for the duration value.Possible values are:DaysMonthsWeeksYearsThe default value is Days. |
| DurationValue | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe duration when the duration type is set to Rolling Time Period. |
| ItemType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the item type for the attribute processing.Possible values are:AnyInjuryProperty |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the product attribute scope record. |
| OverrideDate | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe calendar day of the month when the yearly override or limit refresh becomes effective.Available in API version 66.0 and later. |
| OverrideMonth | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe calendar month when the yearly override or limit refresh becomes effective.Available in API version 66.0 and later. |
| Scope | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the scope for tracking the associated attribute.Possible values are:ClaimClaim CoveragePolicyPolicy Coverage |
| UsageType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the usage of the associated attribute. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ProdtAttrScopeHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ProdtAttrScopeShare](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- ProdtAttrScopeHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
- ProdtAttrScopeShare (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm)
