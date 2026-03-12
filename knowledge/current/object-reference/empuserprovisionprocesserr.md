---
title: "EmpUserProvisionProcessErr"
domain: object-reference
topic: empuserprovisionprocesserr
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:08.566Z
estimatedTokens: 523
keywords: [EmpUserProvisionProcessErr, employee-user, provisioning, process, error, API, version, 52.0, later, Calls, Special, Access, Rules, Usage]
---

# EmpUserProvisionProcessErr

> Represents an employee-user provisioning process error. This object is
      available in API version 52.0 and later.

# EmpUserProvisionProcessErr

Represents an employee-user provisioning process error. This object is available in API version 52.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

This object requires a Workplace Command Center add-on license, or an Employee Experience add-on license.

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the Person Account linked to the employee record associated with the error.This is a relationship field.Relationship NameAccountRefers ToAccount |
| EmployeeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the employee record associated with the error.This is a relationship field.Relationship NameEmployeeRelationship TypeLookupRefers ToEmployee |
| ErrorCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe error code if the provisioning isn’t successful. |
| ErrorMessage | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIf an error occurred, this field contains the error message. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the error was last referenced, with a precision of one second. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the error was last viewed, with a precision of one second. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the error. |
| ProvisioningProcessId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the associated user provisioning process.This is a relationship field.Relationship NameProvisioningProcessRelationship TypeLookupRefers ToEmpUserProvisioningProcess |

## Usage

Use the EmpUserProvisionProcessErr to view the errors for an employee-user provisioning process.
