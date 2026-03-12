---
title: "TimeSheetEntryItem"
domain: eu-developer-guide
topic: timesheetentryitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:27.422Z
estimatedTokens: 898
keywords: [TimeSheetEntryItem, time, sheet, entry, Enterprise, Asset, Management, system, pay, service, worker, accroding, labor, laws, company]
---

# TimeSheetEntryItem

> Represents the details of the time sheet entry that is used by an Enterprise
         Asset Management system to pay the field service worker accroding to labor laws and company
         policy.  This object is available in API version 62.0 and later.

# TimeSheetEntryItem

Represents the details of the time sheet entry that is used by an Enterprise Asset Management system to pay the field service worker accroding to labor laws and company policy. This object is available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CostCenterId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe cost center associated with the time sheet entry item.This field is a relationship field.Relationship NameCostCenterRefers ToCostCenter |
| DurationHours | TypedoublePropertiesFilter, Nillable, SortDescriptionThe difference in hours between the end time and the start time of the time sheet entry item.This field is a calculated field. |
| DurationMinutes | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe difference in minutes beetween the end time and the start time of the time sheet entry item |
| EndTime | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe time when the item from the time sheet entry ends. |
| JobExpenseTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe job expense type associated with the time sheet entry item.This field is a relationship field.Relationship NameJobExpenseTypeRefers ToJobExpenseType |
| OvertimeApproverId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe overtime approver associated with the time sheet entry item.This field is a relationship field.Relationship NameOvertimeApproverRefers ToOvertimeApprover |
| OvertimeTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe overtime type associated with the time sheet entry item.This field is a relationship field.Relationship NameOvertimeTypeRefers ToOvertimeType |
| PayTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe pay type associated with the time sheet entry item, used to classify the time sheet entry.This field is a relationship field.Relationship NamePayTypeRefers ToPayType |
| ServiceResourceId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe service resource associated with the time sheet entry.This field is a relationship field.Relationship NameServiceResourceRefers ToServiceResource |
| StartTime | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe time when the item from the time sheet entry starts. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the approval status of the time sheet entry item by the crew lead or supervisor.Possible values are:ApprovedNewRejectedSubmittedValidation In ProgressApproval PendingReviewedErrorVerification PendingVerifiedVerification Failed |
| StatusComment | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe comment added with a status change to a time sheet entry item. |
| SubmitDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the crew lead or supervisor submits the time sheet entry item record. |
| TimeSheetEntryId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe time sheet associated with the time sheet entry item.This field is a relationship field.Relationship NameTimeSheetEntryRelationship TypeMaster-detailRefers ToTimeSheetEntry (the master object) |
