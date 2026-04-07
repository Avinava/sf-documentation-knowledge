---
title: "AcademicCredential"
domain: edu-cloud-dev-guide
topic: academiccredential
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:30.481Z
estimatedTokens: 224
keywords: [AcademicCredential, credential, earned, learners, API, 59.0]
---

> A credential which can be earned by learners. This object is available
      in API version 59.0 and later.

# AcademicCredential

A credential which can be earned by learners. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| IssuerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Account of the issuer institution associated with the Academic Credential. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the Academic Credential. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of Academic Credential.Possible values are:Associate DegreeBachelor's DegreeBadgeDoctoral DegreeCertificateMaster's DegreeSecondary Diploma |
