---
title: "ProgramProduct"
domain: eu-developer-guide
topic: programproduct
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:27.351Z
estimatedTokens: 382
keywords: [ProgramProduct, junction, Program, Product2, hold, API, version, 59.0, later, Calls, Special, Access, Rules]
---

# ProgramProduct

> Represents a junction between Program and Product2. This will hold Product2 values
      related to a Program. This object is available in API version 59.0 and later.

# ProgramProduct

Represents a junction between Program and Product2. This will hold Product2 values related to a Program. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

The following fields are available only with the E&U Cloud Program Access permission set.

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the ProgramProduct object. |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe Product2 object associated with the Program.This field is a relationship field.Relationship NameProductRelationship TypeLookupRefers ToProduct2 |
| ProgramId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe Program parent object associated with the record.This field is a relationship field.Relationship NameProgramRelationship TypeLookupRefers ToProgram |
| RequiredDocuments | TypemultipicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionThe documents required by the customer or contractor so that the application may be approved for this measure within this program. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the status of the ProgramProduct object.Possible values are:ActiveInactivePending For Approval |
