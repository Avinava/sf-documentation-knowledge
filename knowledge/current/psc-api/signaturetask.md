---
title: "SignatureTask"
domain: psc-api
topic: signaturetask
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:34.503Z
estimatedTokens: 268
keywords: [SignatureTask, signature-related, visitor, captures, part, visit, API, version, 50.0, later, Calls]
---

# SignatureTask

> Represents the signature-related information that a visitor captures as part of
      a visit. This object is available in API version 50.0 and later.

# SignatureTask

Represents the signature-related information that a visitor captures as part of a visit. This object is available in API version 50.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDescription of the signature task. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the signature task. |
| ParentTaskId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe assessment task that is associated with the signature task. |
