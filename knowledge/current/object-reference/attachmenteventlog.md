---
title: "AttachmentEventLog"
domain: object-reference
topic: attachmenteventlog
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:05.192Z
estimatedTokens: 413
keywords: [AttachmentEventLog, Attachment, event, logs, contain, attachments, API, version, 65.0, later, Calls, Special, Access, Rules]
---

# AttachmentEventLog

> Attachment event logs contain information about attachments. This object
      is available in API version 65.0 and later.

# AttachmentEventLog

Attachment event logs contain information about attachments. This object is available in API version 65.0 and later.

## Supported Calls

describeSObjects(), query()

## Special Access Rules

To access this object, you must have the View Event Log Object Data user permission.

## Fields

| Field | Details |
| --- | --- |
| AttachmentIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the attachment. |
| ContentType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe content type of the attachment. |
| IsPrivateOn | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionWhether the attachment is flagged as private or not.The default value is false. |
| OperationType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe operation type of the attachment. |
| ParentIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the parent object of the attachment. For example, a07EE00001LgsUH |
| RequestIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique ID of a single transaction. A transaction can contain one or more events. Each event in a given transaction has the same REQUEST_ID. |
| Timestamp | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe access time of Salesforce services in GMT. For example, 2020-01-20T19:12:26.965Z. Milliseconds are the most granular setting. |
| UserIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe 15-character ID of the user who’s using Salesforce services through the UI or the API. For example: 00530000009M943. |
