---
title: "ServiceResourceLeaveBalance"
domain: eu-developer-guide
topic: serviceresourceleavebalance
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:27.388Z
estimatedTokens: 289
keywords: [ServiceResourceLeaveBalance, Stores, leave, balances, service, resources, API, version, 64.0, later, Calls]
---

# ServiceResourceLeaveBalance

> Stores the leave balances for service resources. This object is available in API version 64.0 and
      later.

# ServiceResourceLeaveBalance

Stores the leave balances for service resources. This object is available in API version 64.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the service resource leave balance. |
| Service Resource | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe service resource associated with the leave balance. |
| LeaveType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of the leave.Possible values are:VacationSickParentalBereavementOthers |
| TotalLeaveCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe total number of leave days allotted to the service resource. |
| AvailableLeaveCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe remaining number of leave days available to the service resource. |
