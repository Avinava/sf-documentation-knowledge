---
title: "ApplicationSectionDefinition"
domain: edu-cloud-dev-guide
topic: applicationsectiondefinition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:30.673Z
estimatedTokens: 265
keywords: [ApplicationSectionDefinition, application, API, 59.0]
---

> Represents the section of an application. This object is available in
      API version 59.0 and later.

# ApplicationSectionDefinition

Represents the section of an application. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the Application Section Definition. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the Application Section Definition is active (true) or not (false).The default value is false. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the Application Section Definition. |
| Type | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of the Application Section Definition.Possible values are:Recruitment and Admissions |
