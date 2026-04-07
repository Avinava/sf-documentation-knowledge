---
title: "SignatureTask"
domain: retail-api
topic: signaturetask
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:05:22.476Z
estimatedTokens: 209
keywords: [SignatureTask, signature-related, visitor, captures, part, visit, API, version, 50.0, later, Calls]
---

# SignatureTask

> Represents the signature-related information that a visitor captures as part of a
      visit. This object is available in API version 50.0 and later.

# SignatureTask

Represents the signature-related information that a visitor captures as part of a visit. This object is available in API version 50.0 and later.

## Supported Calls



create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()



## Fields

| Field | Details |
| --- | --- |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDescription of the signature task. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the signature task. |
| ParentTaskId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionAssessment Task associated with the signature task.Relationship NameParentTaskRelationship TypeMaster-detailRefers ToAssessmentTask |
