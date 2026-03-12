---
title: "WorkOrder"
domain: eu-developer-guide
topic: workorder
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:27.469Z
estimatedTokens: 259
keywords: [WorkOrder, service, work, performed, customer, API, version, 62.0, later, Calls]
---

# WorkOrder

> Represents field service work to be performed for a customer. This
      object is available in API version 62.0 and later.

# WorkOrder

Represents field service work to be performed for a customer. This object is available in API version 62.0 and later.

The standard fields are documented in the [WorkOrder](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_workorder.htm "HTML (New Window)") object reference.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CostCenterId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe cost center associated with the work type.This field is a relationship field.Relationship NameCostCenterRefers ToCostCenter |
| JobExpenseTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe job expense type associated with the work type.This field is a relationship field.Relationship NameJobExpenseTypeRefers ToJobExpenseType |
