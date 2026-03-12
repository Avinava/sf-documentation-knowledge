---
title: "ProgramEnrollment"
domain: eu-developer-guide
topic: programenrollment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:27.346Z
estimatedTokens: 240
keywords: [ProgramEnrollment, API, version, 59.0, later, Calls, Special, Access, Rules]
---

# ProgramEnrollment

> This object is available in API version 59.0 and later.

# ProgramEnrollment

This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

The following fields are available only with the E&U Cloud Program Access permission set.

## Fields

| Field | Details |
| --- | --- |
| EnrolleeRole | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the role of the account enrolling for the program.Possible values are:ConsumerContractorDeveloperThe default value is Contractor. |
| IndividualApplicationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Individual Application object associated with the program enrollment.Relationship NameIndividualApplicationRelationship TypeLookupRefers ToIndividualApplication |
