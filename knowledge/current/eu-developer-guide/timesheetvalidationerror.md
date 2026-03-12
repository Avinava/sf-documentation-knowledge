---
title: "TimeSheetValidationError"
domain: eu-developer-guide
topic: timesheetvalidationerror
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:27.427Z
estimatedTokens: 472
keywords: [TimeSheetValidationError, validation, errors, time, sheets, sheet, entries, entry, items, rules, defined, admin, API, version, 62.0]
---

# TimeSheetValidationError

> Represents validation errors in time sheets, time sheet entries, and time
         sheet entry items based on the rules defined by the admin. This object is available in
      API version 62.0 and later.

# TimeSheetValidationError

Represents validation errors in time sheets, time sheet entries, and time sheet entry items based on the rules defined by the admin. This object is available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Category | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the category of the time sheet validation error.Possible values are:Data ValidationMeal Time Validation |
| Description | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe description of the time sheet validation error. |
| IsResolved | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the time sheet validation error is resolved (true) or not (false).The default value is false. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe ID of the time sheet validation error. |
| ReferenceRecordId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe time sheet or time sheet entry record associated with the validation error.This field is a polymorphic relationship field.Relationship NameReferenceRecordRefers ToTimeSheet, TimeSheetEntry |
| ReferenceRecordObjectName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the object that's associated with the validation error. |
| ServiceResourceCostRuleId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe service resource cost rule associated with the time sheet validation error.This field is a relationship field.Relationship NameServiceResourceCostRuleRefers ToServiceResourceCostRule |
