---
title: "ApplnFormAppealStsChgEvnt"
domain: health-cloud-object-reference
topic: applnformappealstschgevnt
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:36.023Z
estimatedTokens: 244
keywords: [ApplnFormAppealStsChgEvnt, Notifies, subscribers, changes, status, appeal, filed, against, Financial, Assistance, Program, API, version, 63.0, later]
---

# ApplnFormAppealStsChgEvnt

> Notifies subscribers of changes to the status of an appeal filed against a Financial
      Assistance Program. This object is available in API version 63.0 and later.

# ApplnFormAppealStsChgEvnt

Notifies subscribers of changes to the status of an appeal filed against a Financial Assistance Program. This object is available in API version 63.0 and later.

## Supported Calls

create(), describeSObjects()

## Special Access Rules

This object is available to users with Health Cloud Starter and Manage Financial Assistance Program permission set.

## Fields

| Field | Details |
| --- | --- |
| AppealIdentifier | TypestringPropertiesCreate, NillableDescriptionThe identifier of an appeal that has a status change. |
| AppealStatus | TypepicklistPropertiesCreate, Nillable, Restricted picklistDescriptionSpecifies the status of an appeal.Possible values are:AcceptedRejected |
| ApplicationFormIdentifier | TypestringPropertiesCreate, NillableDescriptionThe identifier of the application associated with an appeal. |
| EventCreationDateTime | TypedateTimePropertiesCreate, NillableDescriptionThe date and time when the event was created. |
