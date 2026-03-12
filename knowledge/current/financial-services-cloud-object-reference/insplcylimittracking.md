---
title: "InsPlcyLimitTracking"
domain: financial-services-cloud-object-reference
topic: insplcylimittracking
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:30.542Z
estimatedTokens: 1221
keywords: [InsPlcyLimitTracking, calculated, consumption, policy, coverage, attributes, claims, processing, API, version, 65.0, later, Calls, Associated, Objects]
---

# InsPlcyLimitTracking

> Represents the calculated values based on the consumption of the policy and
         coverage attributes during claims processing. This object is available in API version
      65.0 and later.

# InsPlcyLimitTracking

Represents the calculated values based on the consumption of the policy and coverage attributes during claims processing. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CalcInitialAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe calculated currency amount that's used as the base value for tracking the policy attribute consumption. |
| CalcInitialValue | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe count that's used as the base for tracking the policy attribute consumption. |
| ClaimCoverageId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe claim coverage that's associated with the insurance policy limit tracking. |
| ClaimCoveragePaymentDetailId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe claim coverage payment detail that's associated with the insurance policy limit tracking. |
| ClaimId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe claim that's associated with the insurance policy limit tracking. |
| ClaimItemId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe claim item that's associated with the insurance policy limit tracking. |
| InsPlcyLimitId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe insurance policy limit that's associated with the insurance limit tracking. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the insurance policy limit tracking. |
| PostedAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount posted by the claimant when submitting the claim. |
| PostedValue | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe count that's populated when submitting the claim. |
| PymtDtlOperationNbr | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe sequential number that's assigned to the insurance policy limit tracking record corresponding to the claim coverage payment detail operation.Available in API version 66.0 and later. |
| RemainingAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe remaining amount to carry forward for the next payment. It's the difference between the calculated initial amount and the requested amount. |
| RemainingValue | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe remaining value to carry forward for the next payment. It's the difference between the calculated initial value and the requested value. |
| RequestedDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date on which the claim payment was requested. |
| Status | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe status of the record.Possible values are:CreatedIntermediateReversedAvailable in API version 66.0 and later. |
| TotalUsedAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total amount used till date. |
| TotalUsedValue | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe total value used till date. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[InsPlcyLimitTrackingHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[InsPlcyLimitTrackingShare](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- InsPlcyLimitTrackingHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
- InsPlcyLimitTrackingShare (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm)
