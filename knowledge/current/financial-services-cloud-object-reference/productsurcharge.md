---
title: "ProductSurcharge"
domain: financial-services-cloud-object-reference
topic: productsurcharge
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:31.535Z
estimatedTokens: 967
keywords: [ProductSurcharge, association, product, surcharge, API, version, 63.0, later, Calls, Associated, Objects]
---

# ProductSurcharge

> Represents an association between a product and a surcharge. This object
      is available in API version 63.0 and later.

# ProductSurcharge

Represents an association between a product and a surcharge. This object is available in API version 63.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| EffectiveFromDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the product surcharge becomes active. |
| EffectiveToDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the product surcharge becomes inactive. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the product surcharge is active (true) or not (false).The default value is false. |
| IsProrationAllowed | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the product surcharge is eligible for proration (true) or not (false).The default value is false. |
| IsRefundAllowed | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the product surcharge is eligible for a refund (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the product surcharge. |
| ProductPath | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA path containing the product IDs that roll up to the parent product. |
| ProductRelatedComponentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product related component associated with the product surcharge.This field is a relationship field.Relationship NameProductRelatedComponentRefers ToProductRelatedComponent |
| RuleApiName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe API name of the rule that's used to trigger the surcharge. |
| RuleKey | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe key of the variable defined in CML that represents the constraint for the insurance product clause.Available in API version 66.0 and later. |
| SurchargeId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe surcharge associated with the product surcharge.This field is a relationship field.Relationship NameSurchargeRelationship TypeMaster-detailRefers ToSurcharge (the master object) |
| TaxTreatmentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe tax treatment associated with the product surcharge.This field is a relationship field.Relationship NameTaxTreatmentRefers ToTaxTreatment |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ProductSurchargeHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object in API version 64.0 and later.

## Related Topics

- ProductSurchargeHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
