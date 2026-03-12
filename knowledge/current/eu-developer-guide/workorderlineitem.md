---
title: "WorkOrderLineItem"
domain: eu-developer-guide
topic: workorderlineitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:27.474Z
estimatedTokens: 210
keywords: [WorkOrderLineItem, subtask, work, order, service, API, version, 62.0, later, Calls]
---

# WorkOrderLineItem

> Represents a subtask on a work order in field service. This object is
      available in API version 62.0 and later.

# WorkOrderLineItem

Represents a subtask on a work order in field service. This object is available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CostCenterId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe cost center associated with the work order line item.This field is a relationship field.Relationship NameCostCenterRefers ToCostCenter |
| JobExpenseTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe job expense type associated with the work order line item.This field is a relationship field.Relationship NameJobExpenseTypeRefers ToJobExpenseType |
