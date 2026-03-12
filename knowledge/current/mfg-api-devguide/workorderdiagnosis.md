---
title: "WorkOrderDiagnosis"
domain: mfg-api-devguide
topic: workorderdiagnosis
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:56.361Z
estimatedTokens: 260
keywords: [WorkOrderDiagnosis, diagnosis, Work, Order, user, records, depot, repair, Calls]
---

# WorkOrderDiagnosis

> Represents the diagnosis details of the Work Order that the user records during depot
      repair.

# WorkOrderDiagnosis

Represents the diagnosis details of the Work Order that the user records during depot repair.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| WorkOrder | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe work order associated with the diagnosis. |
| WorkOrderLineItem | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe work order line item associated with the diagnosis. |
| FaultCode | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe fault code associated with the asset or product. |
| CausalPart | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe part of the asset or product causing the fault. |
| Diagnosis | TypestringPropertiesCreate, Filter, Group, SortDescriptionThe details of the fault or issue that's being diagnosed. |
| Solution | TypestringPropertiesCreate, Filter, Group, SortDescriptionThe details about the solution to fix the fault. |
