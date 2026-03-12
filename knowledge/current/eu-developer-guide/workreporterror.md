---
title: "WorkReportError"
domain: eu-developer-guide
topic: workreporterror
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:27.485Z
estimatedTokens: 376
keywords: [WorkReportError, errors, Work, Report, Line, Item, API, version, 59.0, later, Calls, Special, Access, Rules]
---

# WorkReportError

> Represents errors in the Work Report through the Work Report Line Item
         object. This object is available in API version 59.0 and later.

# WorkReportError

Represents errors in the Work Report through the Work Report Line Item object. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

The following fields are available only with the Contractor Work Report Access and User Work Report Access permission sets.

## Fields

| Field | Details |
| --- | --- |
| Code | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionCode that represents the error.Possible values are:Account MissingInvalid ProductInvalid Program |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe instructions and information about the error that can be used to diagnose and fix the error. |
| IsOverridden | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the work report error can be overridden for work report submission.The default value is false. |
| OverrideReason | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe reason why the work report error was overridden. |
| WorkReportLineItemId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe Work Report Line Item object associated with the Work Report Error..Relationship NameWorkReportLineItemRelationship TypeLookupRefers ToWorkReportLineItem |
