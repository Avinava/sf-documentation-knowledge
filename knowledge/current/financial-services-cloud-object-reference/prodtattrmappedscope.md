---
title: "ProdtAttrMappedScope"
domain: financial-services-cloud-object-reference
topic: prodtattrmappedscope
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:31.424Z
estimatedTokens: 711
keywords: [ProdtAttrMappedScope, junction, product, attribute, scope, classification, API, version, 65.0, later, Calls, Associated, Objects]
---

# ProdtAttrMappedScope

> Represents a junction between the product attribute scope and the product
         classification attribute. This object is available in API version 65.0 and later.

# ProdtAttrMappedScope

Represents a junction between the product attribute scope and the product classification attribute. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AssocProdtAttrId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe product classification attribute or product attribute definition that's associated with the product attribute mapped scope. |
| IsSubcoverage | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the product attribute is associated with the subcoverage level.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| ParentMappedScopeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product attribute mapped scope that's associated with the product attribute to define the parent child relationship. |
| ProdtAttrScopeId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe product attribute scope that's associated with the product attribute. |
| BenefitName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionBenefit name that's associated with the product attribute mapped scope as a subcoverage. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ProdtAttrMappedScopeHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ProdtAttrMappedScopeShare](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- ProdtAttrMappedScopeHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
- ProdtAttrMappedScopeShare (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm)
