---
title: "ManufacturingProgram"
domain: mfg-api-devguide
topic: manufacturingprogram
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:55.806Z
estimatedTokens: 617
keywords: [ManufacturingProgram, manufacturing, program, Verican, Account, manufacture, auto, components, their, upcoming, concept, vehicle, staring, 01-Jan-2022, until]
---

# ManufacturingProgram

> Represents information about a manufacturing program. For example, Verican X
         program for Verican Account to manufacture auto components for their upcoming concept
         vehicle, staring from 01-Jan-2022 and valid until 01-Dec-2024. This object is
      available in API version 55.0 and later.

# ManufacturingProgram

Represents information about a manufacturing program. For example, Verican X program for Verican Account to manufacture auto components for their upcoming concept vehicle, staring from 01-Jan-2022 and valid until 01-Dec-2024. This object is available in API version 55.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account for which the manufacturing program is created.This is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the manufacturing program. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe end date of the manufacturing program. |
| ExternalName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name used for the manufacturing program by external organizations. |
| ManufacturingProgramTemplateId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe template used for the manufacturing program.This is a relationship field.Relationship NameManufacturingProgramTemplateRelationship TypeLookupRefers ToMfgProgramTemplate |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the manufacturing program record. |
| ProgramType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of manufacturing program. |
| RelatedManufacturingProgramId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAnother manufacturing program associated with the manufacturing program.This is a relationship field.Relationship NameRelatedManufacturingProgramRelationship TypeLookupRefers ToManufacturingProgram |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe start date of the manufacturing program. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the manufacturing program.Possible values are:ActiveDraftInactiveThe default value is 'Draft'. |
