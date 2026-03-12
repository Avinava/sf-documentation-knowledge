---
title: "BatchJobStatusChangedEvent"
domain: sfFieldRef
topic: batchjobstatuschangedevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:49.533Z
estimatedTokens: 241
keywords: [BatchJobStatusChangedEvent, Notifies, subscribers, batch, job, completed, flow, API, version, 51.0, later]
---

# BatchJobStatusChangedEvent

> Notifies subscribers of when a batch job is completed in a
			flow. This object is available in API version 51.0 and later.

# BatchJobStatusChangedEvent

Notifies subscribers of when a batch job is completed in a flow. This object is available in API version 51.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see BatchJobStatusChangedEvent in the Industries Shared Features Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| BatchJob | Batch Job | string |  | 20 |  |  |
| BatchJobDefinition | Batch Job Definition | string |  | 20 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EndDateTime | End Date Time | datetime |  |  |  |  |
| EventUuid | Event UUID | string |  | 36 |  |  |
| ReplayId | Replay ID | string |  | 1000 |  |  |
| StartDateTime | Start Date Time | datetime |  |  |  |  |
| Status | Status | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
