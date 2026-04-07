---
title: "SignatureTaskLineItem"
domain: retail-api
topic: signaturetasklineitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:05:22.483Z
estimatedTokens: 316
keywords: [SignatureTaskLineItem, junction, task, digital, captured, visit, API, version, 50.0, later, Calls]
---

# SignatureTaskLineItem

> Represents a junction between a signature task and a digital signature captured in a
      visit. This object is available in API version 50.0 and later.

# SignatureTaskLineItem

Represents a junction between a signature task and a digital signature captured in a visit. This object is available in API version 50.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| DigitalSignatureId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the digital signature collected in a visit.Relationship NameDigitalSignatureRefers ToDigitalSignature |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the signature task line item. |
| ParentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAssessment task or signature task associated with this line item.Relationship NameParentRefers ToAssessmentTask, SignatureTask |
