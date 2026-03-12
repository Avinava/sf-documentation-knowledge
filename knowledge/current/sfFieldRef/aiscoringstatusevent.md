---
title: "AIScoringStatusEvent"
domain: sfFieldRef
topic: aiscoringstatusevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:45.754Z
estimatedTokens: 257
keywords: [AIScoringStatusEvent, Notifies, subscribers, scoring, job, started, services, data, release, version, connect, aiaccelerator, predictions, REST, executed]
---

# AIScoringStatusEvent

> Notifies subscribers when the scoring job started by the
			/services/data/{release version}/connect/aiaccelerator/predictions REST request,
			executed in asynchronous mode, is complete.

# AIScoringStatusEvent

Notifies subscribers when the scoring job started by the /services/data/{release version}/connect/aiaccelerator/predictions REST request, executed in asynchronous mode, is complete.

For more information, see AIScoringStatusEvent in the Industries Common Resources Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AiScoringRequestResponse | AI Scoring Request Response | string |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EventUuid | Event Uuid | string |  | 36 |  |  |
| PrimaryResponseRecordList | Primary Response Record List | textarea |  | 32000 |  |  |
| ReplayId | Replay Id | string |  | 1000 |  |  |
| SecondaryResponseRecordList | Secondary Response Record List | textarea |  | 32000 |  |  |
| Status | Status | picklist |  | 255 |  |  |
| StatusDescription | Status Description | string |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
