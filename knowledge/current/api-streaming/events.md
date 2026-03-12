---
title: "Events"
domain: api-streaming
topic: events
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:00.344Z
estimatedTokens: 469
keywords: [Events, may, generate, notification, creation, undelete, record, PushTopic, NotifyForOperationCreate, NotifyForOperationUpdate, NotifyForOperationDelete, NotifyForOperationUndelete, enable, specify, notifica]
---

# Events

> Events that may generate a notification are the creation, update, delete, or undelete of a
   record. The PushTopic NotifyForOperationCreate,
    NotifyForOperationUpdate, NotifyForOperationDelete,
   and NotifyForOperationUndelete fields enable you to specify which events may
   generate a notifica

# Events

Events that may generate a notification are the creation, update, delete, or undelete of a record. The PushTopic NotifyForOperationCreate, NotifyForOperationUpdate, NotifyForOperationDelete, and NotifyForOperationUndelete fields enable you to specify which events may generate a notification in that PushTopic channel. The fields are set as follows:

| Field | Description |
| --- | --- |
| NotifyForOperationCreate | true if a create operation should generate a notification, otherwise, false. |
| NotifyForOperationDelete | true if a delete operation should generate a notification, otherwise, false. |
| NotifyForOperationUndelete | true if an undelete operation should generate a notification, otherwise, false. |
| NotifyForOperationUpdate | true if an update operation should generate a notification, otherwise, false. |

In API version 28.0 and earlier, you use the NotifyForOperations field to specify which events generate a notification, and can only specify create or update events. The NotifyForOperations values are:

| NotifyForOperations Value | Description |
| --- | --- |
| All (default) | Evaluate a record to possibly generate a notification whether the record has been created or updated. |
| Create | Evaluate a record to possibly generate a notification only if the record has been created. |
| Update | Evaluate a record to possibly generate a notification only if the record has been updated. |
| Extended | A value of Extended means that neither create or update operations are set to generate events. This value is provided to allow clients written to API version 28.0 or earlier to work with Salesforce organizations configured to generate delete and undelete notifications. |

The event field values together with the NotifyForFields value provides flexibility when configuring when you want to generate notifications using Streaming API.
