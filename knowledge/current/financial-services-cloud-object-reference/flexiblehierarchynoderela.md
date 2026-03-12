---
title: "FlexibleHierarchyNodeRela"
domain: financial-services-cloud-object-reference
topic: flexiblehierarchynoderela
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:30.346Z
estimatedTokens: 708
keywords: [FlexibleHierarchyNodeRela, relationship, any, two, nodes, hierarchy, instance, parent-subsidiary, companies, individual's, affiliation, company, API, version, 66.0]
---

# FlexibleHierarchyNodeRela

> Represents the type of relationship between any two nodes in an hierarchy.
         For instance, a parent-subsidiary relationship between companies or an individual's
         affiliation with a company. This object is available in API version 66.0 and later.

# FlexibleHierarchyNodeRela

Represents the type of relationship between any two nodes in an hierarchy. For instance, a parent-subsidiary relationship between companies or an individual's affiliation with a company. This object is available in API version 66.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This is a standard object and is available only when you turn on the Flexible Hierarchies setting.

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThree-letter ISO currency code associated with the hierarchy.Possible values are:INR—Indian RupeeUSD—U.S. DollarThe default value is USD. |
| FlexibleHierarchyId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe Flexible Hierarchy that's associated with the flexible hierarchy node.This field is a relationship field.Relationship NameFlexibleHierarchyRelationship TypeMaster-detailRefers ToFlexibleHierarchy (the master object) |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date when a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date when a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the record. |
| PredecessorNodeId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe parent node associated with the relationship that's defined by this record.This field is a relationship field.Relationship NamePredecessorNodeRefers ToFlexibleHierarchyNode |
| RelatedRecord | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe related record that provides additional context for this node relationship, such as an Account Account Relation record. |
| RelatedRecordObject | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe API name of the object that's the related record in this flexible hierarchy node relation. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique identifier of this record in an external system. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the external system this record was obtained from. |
| SuccessorNodeId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe child node associated with the relationship that's defined by this record.This field is a relationship field.Relationship NameSuccessorNodeRefers ToFlexibleHierarchyNode |
