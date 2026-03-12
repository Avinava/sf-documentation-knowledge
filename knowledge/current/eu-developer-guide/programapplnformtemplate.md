---
title: "ProgramApplnFormTemplate"
domain: eu-developer-guide
topic: programapplnformtemplate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:27.342Z
estimatedTokens: 209
keywords: [ProgramApplnFormTemplate, application, form, template, enroll, program, API, version, 62.0, later, Calls]
---

# ProgramApplnFormTemplate

> Represents an application form template used to enroll in a program. 
      This object is available in API version 62.0 and later.

# ProgramApplnFormTemplate

Represents an application form template used to enroll in a program. This object is available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ApplicationFormTemplateId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe application form template associated with the record.This field is a relationship field.Relationship NameApplicationFormTemplateRefers ToApplicationFormTemplate |
| ProgramId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe program associated with the record.This field is a relationship field.Relationship NameProgramRefers ToProgram |
