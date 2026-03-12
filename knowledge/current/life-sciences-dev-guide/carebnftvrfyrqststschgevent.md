---
title: "CareBnftVrfyRqstStsChgEvent"
domain: life-sciences-dev-guide
topic: carebnftvrfyrqststschgevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:45.237Z
estimatedTokens: 209
keywords: [CareBnftVrfyRqstStsChgEvent, Notifies, subscribers, changes, status, care, benefit, verify, API, version, 65.0, later, Calls, Special, Access]
---

# CareBnftVrfyRqstStsChgEvent

> Notifies subscribers of changes to the status of a care benefit verify
      request. This object is available in API version 65.0 and later.

# CareBnftVrfyRqstStsChgEvent

Notifies subscribers of changes to the status of a care benefit verify request. This object is available in API version 65.0 and later.

## Supported Calls

create(), describeSObjects()

## Special Access Rules

This object is available to users with Manage Pharmacy Benefits Verification and Health Cloud Starter (for Life Sciences Cloud) or Health Cloud Foundation (for Health Cloud) permission set.

## Fields

| Field | Details |
| --- | --- |
| EventCreationDateTime | TypedateTimePropertiesCreate, NillableDescriptionThe date and time when the event was created. |
| RecordIdentifier | TypestringPropertiesCreateDescriptionThe identifier of the associated care benefit verify request record. |
| Status | TypestringPropertiesCreateDescriptionSpecifies the status of a care benefit verify request. |
