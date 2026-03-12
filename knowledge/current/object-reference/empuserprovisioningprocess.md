---
title: "EmpUserProvisioningProcess"
domain: object-reference
topic: empuserprovisioningprocess
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:08.560Z
estimatedTokens: 538
keywords: [EmpUserProvisioningProcess, employee-user, provisioning, process, API, version, 52.0, later, Calls, Special, Access, Rules, Usage]
---

# EmpUserProvisioningProcess

> Represents an employee-user provisioning process. This object is
      available in API version 52.0 and later.

# EmpUserProvisioningProcess

Represents an employee-user provisioning process. This object is available in API version 52.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

This object requires a Workplace Command Center add-on license, or an Employee Experience add-on license.

## Fields

| Field | Details |
| --- | --- |
| EndTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time that the user provisioning process ended. |
| ErrorRecordCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of records that encountered an error during the user provisioning process. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the user provisioning process was last referenced, with a precision of one second. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the user provisioning process was last viewed, with a precision of one second. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the user provisioning process. |
| ProcessStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe status of the user provisioning process.Possible values are:AbortedCancelledFailedFinishedInitializingProcessingQueued |
| StartTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time that the user provisioning process started. |
| SuccessRecordCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of records that were successfully provisioned during the user provisioning process. |
| TotalRecordCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe total number of records in the user provisioning process. |

## Usage

Use the EmpUserProvisioningProcess to view the status of an employee-user provisioning process.
