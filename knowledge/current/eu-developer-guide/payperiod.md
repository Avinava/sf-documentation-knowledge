---
title: "PayPeriod"
domain: eu-developer-guide
topic: payperiod
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:27.299Z
estimatedTokens: 304
keywords: [PayPeriod, fixed, time, span, employee's, work, hours, earnings, recorded, calculated, payroll, API, version, 66.0, later]
---

# PayPeriod

> Indicates the fixed time span of employee's work hours and earnings that are recorded and
         calculated for payroll. This object is available in API version 66.0 and later.

# PayPeriod

Indicates the fixed time span of employee's work hours and earnings that are recorded and calculated for payroll. This object is available in API version 66.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe name of the pay period. |
| ExternalId | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe external ID of the pay period. |
| StartDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe start date of the pay period. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe end date of the pay period. |
| PayDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe payment date for the employees. |
| PayGroup | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe group of employees that get paid during the same pay periods.This field is a relationship field.Relationship NamePayGroupRefers ToPayGroup |
