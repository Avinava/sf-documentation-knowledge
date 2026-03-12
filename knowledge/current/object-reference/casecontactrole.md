---
title: "CaseContactRole"
domain: object-reference
topic: casecontactrole
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:06.275Z
estimatedTokens: 406
keywords: [CaseContactRole, role, Contact, plays, Case, Calls, Usage]
---

# CaseContactRole

> Represents the role that a given Contact plays on a
    Case.

# CaseContactRole

Represents the role that a given Contact plays on a Case.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CasesId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the cases associated with this contact.This is a relationship field.Relationship NameCasesRelationship TypeLookupRefers ToCase |
| ContactId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. ID of the contact.This is a relationship field.Relationship NameContactRelationship TypeLookupRefers ToContact |
| IsDeleted | TypebooleanPropertiesDefaulted on create, FilterDescriptionIndicates whether the object has been moved to the Recycle Bin (true) or not (false). Label is Deleted. |
| Role | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of the role played by the contact on this case, such as Technical Contact, Business Contact, Decision Maker, and so on. Must be unique—there can't be multiple records in which the CaseId, ContactId , and Role values are identical. Different contacts can play the same role on the same case. A contact can play different roles on the same case. |

## Usage

Use this object to define the role that a given Case plays on a given Contact. For example, you can use this object to be able to see all contacts who are associated to a case, or, given a contact, be able to query all cases that they are associated with, even if they are not the primary contact on the case.
