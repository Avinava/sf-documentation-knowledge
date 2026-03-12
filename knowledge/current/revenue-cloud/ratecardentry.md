---
title: "RateCardEntry"
domain: revenue-cloud
topic: ratecardentry
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:12.419Z
estimatedTokens: 1326
keywords: [RateCardEntry, rule, determines, charge, rate, product's, resource, entry, linked, card, exclusively, activation, deactivation, controlled, assigning]
---

# RateCardEntry

> Represents a rule that determines the charge rate for using a
         product's resource. Each entry is linked to one rate card exclusively, and its activation
         or deactivation can be controlled by assigning effective dates. This object is
      available in API version 62.0 and later.

# RateCardEntry

Represents a rule that determines the charge rate for using a product's resource. Each entry is linked to one rate card exclusively, and its activation or deactivation can be controlled by assigning effective dates. This object is available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| DefaultUnitOfMeasureClassId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the default unit of measure classification record associated with this rate card entry.This field is a relationship field.Relationship NameDefaultUnitOfMeasureClassRefers ToUnitOfMeasureClass |
| DefaultUnitOfMeasureId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the default unit of measure record associated with this rate card entry.This field is a relationship field.Relationship NameDefaultUnitOfMeasureRefers ToUnitOfMeasure |
| EffectiveFrom | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionDate and time when the rate card entry comes into effect. |
| EffectiveTo | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate and time until when the rate card entry remains effective. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp for when the current user last referred to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp for when the current user last viewed a record related to this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAuto-generated identifier for the rate card entry record. |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the product whose resource is being used as a rate card entry.This field is a relationship field.Relationship NameProductRefers ToProduct2 |
| ProductSellingModelId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the product selling model associated with this rate card entry.This field is a relationship field.Relationship NameProductSellingModelRefers ToProductSellingModel |
| Rate | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionValue of the rate card entry. |
| RateCardId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the rate card associated with this rate card entry.This field is a relationship field.Relationship NameRateCardRelationship TypeMaster-detailRefers ToRateCard (the master object) |
| RateCardType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionType of rate card associated with this rate card entry.Valid values are:AttributeBaseTierAvailable in API version 63.0 and later. |
| RateNegotiation | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionType of rate negotiation applicable to the rate card entry.Valid values are:NegotiableNonNegotiableThe default value is Negotiable. Available in API version 63.0 and later. |
| RateUnitOfMeasureClassId | TypereferencePropertiesFilter, Group, SortDescriptionID of the unit of measure classification record associated with this rate card entry.This field is a relationship field.Relationship NameRateUnitOfMeasureClassRefers ToUnitOfMeasureClass |
| RateUnitOfMeasureId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionID of the standard unit of measure record associated with this rate card entry.This field is a relationship field.Relationship NameRateUnitOfMeasureRefers ToUnitOfMeasure |
| RateUnitOfMeasureName | TypestringPropertiesFilter, Group, SortDescriptionName of the standard unit of measure record of the associated rate card entry. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionStatus of the rate card entry.ActiveDraftInactiveThe default value is Draft. Available in API version 63.0 and later. |
| UsageProductId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the product associated with the resource for which the rate is specified.This field is a relationship field.Relationship NameUsageProductRefers ToProduct2 |
| UsageResourceId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionID of the resource associated with this rate card entry.This field is a relationship field.Relationship NameUsageResourceRefers ToUsageResource |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[RateCardEntryFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[RateCardEntryHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.
