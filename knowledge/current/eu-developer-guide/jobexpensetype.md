---
title: "JobExpenseType"
domain: eu-developer-guide
topic: jobexpensetype
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:27.257Z
estimatedTokens: 341
keywords: [JobExpenseType, unique, expense, associated, standard, job, organization, measure, costs, budget, API, version, 61.0, later, Calls]
---

# JobExpenseType

> Represents a unique expense type associated with a standard job in an
         organization, which is used to measure the job costs and budget. This object is
      available in API version 61.0 and later.

# JobExpenseType

Represents a unique expense type associated with a standard job in an organization, which is used to measure the job costs and budget. This object is available in API version 61.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the job expense in the Enterprise Asset Management system. |
| EffectiveEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the job expense is no longer in effect. |
| EffectiveStartDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe date when the job expense takes effect. |
| ExternalIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe external identifier of the job expense. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the job expense type is active.The default value is false. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the job expense in the Enterprise Asset Management system. |
