---
title: "FlexibleHierarchy"
domain: financial-services-cloud-object-reference
topic: flexiblehierarchy
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:30.329Z
estimatedTokens: 794
keywords: [FlexibleHierarchy, structure, hierarchy, relationships, among, individuals, entities, organization, organizations, API, version, 66.0, later, Calls, Special]
---

# FlexibleHierarchy

> Represents the structure and hierarchy of relationships among
         individuals or entities within an organization or between organizations. This object
      is available in API version 66.0 and later.

# FlexibleHierarchy

Represents the structure and hierarchy of relationships among individuals or entities within an organization or between organizations. This object is available in API version 66.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This is a standard object and is available only when you turn on the Flexible Hierarchies setting.

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThree-letter ISO currency code associated with the hierarchy.Possible values are:INR—Indian RupeeUSD—U.S. DollarThe default value is USD. |
| EffectiveFromDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when this hierarchy becomes effective. |
| EffectiveToDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date until when this hiearchy remains effective. |
| HierarchyTypeReferenceId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe hierarchy type associated with the flexible hierarchy.This field is a relationship field.Relationship NameHierarchyTypeReferenceRefers ToRelationshipGraphDefinition |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates if the hierarchy is active (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date when a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date when a user viewed this record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the flexible hierarchy record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| RootRecord | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the record that's the root of this hierarchy. |
| RootRecordObject | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe API name of the object that's the root of this hierarchy. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique identifier of this record in an external system. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the external system this record was obtained from. |
| Status | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies the current state of the hierarchy in its lifecycle.Possible values are:DraftInvalidInValidationValid |
| ValidationError | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe error message generated while validating the structure of this hierarchy. |
