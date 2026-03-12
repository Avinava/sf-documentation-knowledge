---
title: "PayGroup"
domain: eu-developer-guide
topic: paygroup
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:27.294Z
estimatedTokens: 197
keywords: [PayGroup, employees, share, payroll, schedule, rules, API, version, 66.0, later, Calls]
---

# PayGroup

> Represents a set of employees who share the same payroll schedule and rules. This object is available in API version 66.0 and later.

# PayGroup

Represents a set of employees who share the same payroll schedule and rules. This object is available in API version 66.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| IsDefault | TypebooleanPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndicates whether the assigned pay group is assigned by default or assigned manually. |
| Name | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe name of the pay group of the employees. |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the pay group. |
