---
title: "WorkStepStatus"
domain: field-service
topic: workstepstatus
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:56.916Z
estimatedTokens: 297
keywords: [WorkStepStatus, Represents, picklist, status, category, work, step., API, version, 52.0, later., Supported, Calls, Special, Access, Rules, Fields]
---

# WorkStepStatus

> Represents a picklist for a status category on a work step. This object is
    available in API version 52.0 and later.

# WorkStepStatus

Represents a picklist for a status category on a work step. This object is available in API version 52.0 and later.

## Supported Calls

describeSObjects(), query(), retrieve()

## Special Access Rules

Field Service must be enabled.

## Fields

| Field | Details |
| --- | --- |
| ApiName | TypestringPropertiesFilter, Group, idLookup, SortDescriptionRequired. The name of the work step status. |
| IsDefault | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionControls whether this status is the default value of the picklist of the corresponding status category (true) or not (false). Default is false. |
| MasterLabel | TypestringPropertiesFilter, Group, Nillable, SortDescriptionRequired. The label of the work step status. |
| SortOrder | TypeintPropertiesFilter, Group, Nillable, SortDescriptionRequired. The order in which the work step statuses are displayed in the status category's picklist. |
| StatusCode | TypepicklistPropertiesRequired. Defaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe status category that this status belongs to.Possible values are:CompletedInProgressNewNotApplicablePaused |
