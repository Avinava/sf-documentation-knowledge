---
title: "FlexibleHierarchyNode"
domain: financial-services-cloud-object-reference
topic: flexiblehierarchynode
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:30.336Z
estimatedTokens: 583
keywords: [FlexibleHierarchyNode, unique, entity, hierarchy, company, subsidiary, branch, unit, individual, person, API, version, 66.0, later, Calls]
---

# FlexibleHierarchyNode

> Represents a unique entity within the hierarchy, such as a company, a
         subsidiary, a branch unit, or an individual person. This object is available in API
      version 66.0 and later.

# FlexibleHierarchyNode

Represents a unique entity within the hierarchy, such as a company, a subsidiary, a branch unit, or an individual person. This object is available in API version 66.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This is a standard object and is available only when you turn on the Flexible Hierarchies setting.

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThree-letter ISO currency code associated with the hierarchy.Possible values are:INR—Indian RupeeUSD—U.S. DollarThe default value is USD. |
| FlexibleHierarchyId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe flexible hierarchy that's associated with the flexible hierarchy node.This field is a relationship field.Relationship NameFlexibleHierarchyRelationship TypeMaster-detailRefers ToFlexibleHierarchy (the master object) |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date when a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date when a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the record. |
| ReferenceRecord | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the record that this node represents in the hierarchy. |
| ReferenceRecordObject | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe API name of the object that's the reference record in this flexible hierarchy node. |
| Role | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the business role or classification of this node within the hierarchy. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique identifier of this record in an external system. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the external system this record was obtained from. |
