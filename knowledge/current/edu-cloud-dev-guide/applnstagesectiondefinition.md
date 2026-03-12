---
title: "ApplnStageSectionDefinition"
domain: edu-cloud-dev-guide
topic: applnstagesectiondefinition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:25.929Z
estimatedTokens: 359
keywords: [ApplnStageSectionDefinition, junction, application, stage, definition, API, version, 59.0, later, Calls]
---

# ApplnStageSectionDefinition

> Represents a junction between an application stage definition and application
         section definition. This object is available in API version 59.0 and later.

# ApplnStageSectionDefinition

Represents a junction between an application stage definition and application section definition. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ApplicationSectionDefinitionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe Application Section Definition associated with the Application Stage Section Definition.This field is a relationship field.Relationship NameApplicationSectionDefinitionRelationship TypeLookupRefers ToApplicationSectionDefinition |
| ApplicationStageDefinitionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe Application Stage Definition associated with the Application Stage Section Definition.This field is a relationship field.Relationship NameApplicationStageDefinitionRelationship TypeLookupRefers ToApplicationStageDefinition |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the Application Stage Section Definition. |
| Type | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of the Application Stage Section Definition.Possible values are:Recruitment and Admissions |
