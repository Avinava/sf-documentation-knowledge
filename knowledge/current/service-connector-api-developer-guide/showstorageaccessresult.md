---
title: "ShowStorageAccessResult"
domain: service-connector-api-developer-guide
topic: showstorageaccessresult
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:45.615Z
estimatedTokens: 125
keywords: [ShowStorageAccessResult, Result, publishEvent, event, SHOW_STORAGE_ACCESS]
---

# ShowStorageAccessResult

> Result returned by publishEvent when the event type is SHOW_STORAGE_ACCESS.

# ShowStorageAccessResult

Result returned by publishEvent when the event type is SHOW\_STORAGE\_ACCESS.

## Signature

ShowStorageAccessResult

## Fields

| Field | Details |
| --- | --- |
| success | TypebooleanDescriptionIndicates whether the operation completed successfully.RequiredNo |
| showLogin | TypebooleanDescriptionTrue if the softphone should display a login iframe.RequiredNo |
| loginFrameHeight | TypenumberDescriptionThe desired height (in pixels) of the login iframe.RequiredNo |
