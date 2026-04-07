---
title: "CaseRelatedSubject"
domain: eu-developer-guide
topic: caserelatedsubject
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:32.543Z
estimatedTokens: 212
keywords: [CaseRelatedSubject, junction, case, impacted, API, 62.0]
---

> Represents a junction between a case and an object impacted by the case.
       This object is available in API version 62.0 and later.

# CaseRelatedSubject

Represents a junction between a case and an object impacted by the case. This object is available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CaseId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe case number associated with the reference object.This field is a relationship field.Relationship NameCaseRefers ToCase |
| ReferenceObjectId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe name of the object that's associated with the case.This field is a polymorphic relationship field.Relationship NameReferenceObjectRefers ToBillingAccount, Location, ServicePoint |
