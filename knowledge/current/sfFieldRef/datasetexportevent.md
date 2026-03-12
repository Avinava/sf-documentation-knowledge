---
title: "DatasetExportEvent"
domain: sfFieldRef
topic: datasetexportevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:55.952Z
estimatedTokens: 262
keywords: [DatasetExportEvent, Notifies, subscribers, export, Analytics, dataset, API, version, 41.0, later]
---

# DatasetExportEvent

> Notifies subscribers on the export of an Analytics dataset. This
		object is available in API version 41.0 and later.

# DatasetExportEvent

Notifies subscribers on the export of an Analytics dataset. This object is available in API version 41.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see DatasetExportEvent in the Platform Events Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DataflowInstanceId | Dataflow Instance Id | string |  | 18 |  |  |
| DatasetExportId | Dataset Export ID | string |  | 18 |  |  |
| EventUuid | Event UUID | string |  | 36 |  |  |
| Message | Message | string |  | 255 |  |  |
| Owner | Owner | string |  | 18 |  |  |
| PublisherInfo | Publisher Info | string |  | 1000 |  |  |
| PublisherType | Publisher Type | picklist |  | 255 |  |  |
| ReplayId | Replay ID | string |  | 1000 |  |  |
| Status | Status | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
