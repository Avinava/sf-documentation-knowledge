---
title: "InsPlcyLimit"
domain: financial-services-cloud-object-reference
topic: insplcylimit
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:30.529Z
estimatedTokens: 801
keywords: [InsPlcyLimit, data, that's, base, track, insurance, policy, consumption, API, version, 65.0, later, Calls, Associated, Objects]
---

# InsPlcyLimit

> Represents the data that's used as a base to track the insurance policy
         consumption. This object is available in API version 65.0 and later.

# InsPlcyLimit

Represents the data that's used as a base to track the insurance policy consumption. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Amount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe currency amount for the insurance policy or coverage attributes. |
| AssociatedAttributeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe insurance policy attribute or insurance policy coverage attribute that's associated with the insurance policy limit. |
| InsurancePlcyLmtCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique code of the insurance policy limits across all policy versions. |
| InsurancePolicyAssetId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe insurance policy asset that's associated with the insurance policy limit. |
| InsurancePolicyCoverageId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe insurance policy coverage that's associated with the insurance policy limit. |
| InsuredPolicyParticipantId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe insurance policy participant that's associated with the insurance policy limit. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the insurance policy limit record. |
| PolicyVersionId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe insurance policy version that's associated with the insurance policy limit. |
| ProdtAttrMappedScopeId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe product attribute mapped scope that's associated with the insurance policy limit. |
| Value | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe count for the insurance policy or coverage attributes. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[InsPlcyLimitHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- InsPlcyLimitHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
