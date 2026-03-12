---
title: "SandboxStatusEventLog"
domain: object-reference
topic: sandboxstatuseventlog
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:16.558Z
estimatedTokens: 381
keywords: [SandboxStatusEventLog, stores, Sandbox, copies, API, version, 62.0, later, Calls, Special, Access, Rules]
---

# SandboxStatusEventLog

> SandboxStatusEventLog stores details about Sandbox copies. This
      object is available in API version 62.0 and later.

# SandboxStatusEventLog

SandboxStatusEventLog stores details about Sandbox copies. This object is available in API version 62.0 and later.

## Supported Calls

describeSObjects(), query()

## Special Access Rules

To access this object, you must have the View Event Log Object Data user permission.

## Fields

| Field | Details |
| --- | --- |
| CurrentSandboxOrganizationIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe 15-character ID of the current sandbox organization. |
| PendingSandboxOrganizationIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe 15-character ID of the target sandbox org. |
| RequestIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique ID of a single transaction. A transaction can contain one or more events. Each event in a given transaction has the same REQUEST_ID. For example: 3nWgxWbDKWWDIk0FKfF5DV. |
| SandboxOrganizationIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe 15-character ID of the target sandbox org. |
| Status | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe status of the sandbox copy. |
| Timestamp | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe access time of Salesforce services in GMT. For example: 20130715233322.670. |
| UserIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe 15-character ID of the user who’s using Salesforce services through the UI or the API. For example: 00530000009M943YAS. |
