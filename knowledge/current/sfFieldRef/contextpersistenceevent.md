---
title: "ContextPersistenceEvent"
domain: sfFieldRef
topic: contextpersistenceevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:54.277Z
estimatedTokens: 265
keywords: [ContextPersistenceEvent, Notifies, subscribers, Context, Persistence, event, initiated, API, completed, execution, designed, inform, customers, clients, success]
---

# ContextPersistenceEvent

> Notifies subscribers when the Context Persistence event, initiated by the Context
		Persistence API has completed its execution. This event is designed to inform
		customers/clients about the success or failure of their Context Persistence request. This
		object is available in API version 59.0 and later.

# ContextPersistenceEvent

Notifies subscribers when the Context Persistence event, initiated by the Context Persistence API has completed its execution. This event is designed to inform customers/clients about the success or failure of their Context Persistence request. This object is available in API version 59.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see ContextPersistenceEvent in the Industries Common Resources Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CorrelationIdentifier | Correlation Identifier | string |  | 80 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EventUuid | Event UUID | string |  | 36 |  |  |
| HasErrors | Has Errors | boolean |  |  |  |  |
| ReplayId | Replay ID | string |  | 1000 |  |  |
| RequestIdentifier | Request Identifier | string |  | 80 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
