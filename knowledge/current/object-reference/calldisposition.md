---
title: "CallDisposition"
domain: object-reference
topic: calldisposition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:05.975Z
estimatedTokens: 179
keywords: [CallDisposition, call, result, sales, reps, select, logging, API, version, 47.0, later, Calls, Special, Access, Rules]
---

# CallDisposition

> Represents a call result value that sales reps select when logging a call. This object is available in API version 47.0 and later.

# CallDisposition

Represents a call result value that sales reps select when logging a call. This object is available in API version 47.0 and later.

## Supported Calls

describeSObjects(), query(), retrieve()

## Special Access Rules

As of Spring ’20 and later, only your Salesforce org's internal users can access this object.

## Fields

| Field | Details |
| --- | --- |
| Disposition | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe result of a phone call, such as whether a call was connected or the rep left a voicemail. |
| DispositionCategoryId | TypereferencePropertiesFilter, Group, SortDescriptionThe related call outcome that is used in reports and branching criteria for cadences. |
