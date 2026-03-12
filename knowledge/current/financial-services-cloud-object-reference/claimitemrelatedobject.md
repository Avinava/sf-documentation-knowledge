---
title: "ClaimItemRelatedObject"
domain: financial-services-cloud-object-reference
topic: claimitemrelatedobject
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:29.784Z
estimatedTokens: 595
keywords: [ClaimItemRelatedObject, relationship, claim, item, attributes, referenced, relevant, product, API, version, 65.0, later, Calls, Associated, Objects]
---

# ClaimItemRelatedObject

> Represents the relationship between a claim item and a related object. The
         values of the attributes from the related object are referenced by the relevant product
         attributes on the claim item. This object is available in API version 65.0 and later.

# ClaimItemRelatedObject

Represents the relationship between a claim item and a related object. The values of the attributes from the related object are referenced by the relevant product attributes on the claim item. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ClaimItemId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe claim item associated with the related object |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the claim item related object record. |
| RelatedRecordIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the object that's associated with the related record identifier. |
| RelatedRecordObjectName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the claim item related object record. |
| UsageType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the usage of the related record object. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ClaimItemRelatedObjectHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- ClaimItemRelatedObjectHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
