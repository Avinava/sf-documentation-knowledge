---
title: "WorkOrder"
domain: workdotcom-dev-guide
topic: workorder
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:22.588Z
estimatedTokens: 233
keywords: [WorkOrder, service, work, performed, customer, Work.com, adds, new, custom, associated, Shift, Manager, facility, plan, API]
---

# WorkOrder

> Represents field service work to be performed for a customer. Work.com adds new
      custom fields to the WorkOrder object. The custom field associated with Shift Manager contains
      information about the facility plan for that shift. This object is available in API
    version 36.0 and later.

# WorkOrder

Represents field service work to be performed for a customer. Work.com adds new custom fields to the WorkOrder object. The custom field associated with Shift Manager contains information about the facility plan for that shift. This object is available in API version 36.0 and later.

For standard fields on the WorkOrder object, see [Object Reference - WorkOrder](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_workorder.htm).

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Custom Fields

| Field | Details |
| --- | --- |
| wkfsl__Facility_Plan__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe facility plan record for the shift. This field is available in API version 48.0 and later. |
