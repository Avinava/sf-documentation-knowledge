---
title: "OmniSupervisorConfigQueue"
domain: sfFieldRef
topic: omnisupervisorconfigqueue
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:05.379Z
estimatedTokens: 286
keywords: [OmniSupervisorConfigQueue, queues, visible, supervisors, Omni-Channel, supervisor, configuration, queue, appears, Backlog, Assigned, Work, tabs, Omni, API]
---

# OmniSupervisorConfigQueue

> Represents the queues that are visible to the supervisors of an Omni-Channel supervisor configuration. The queue, if visible, appears in the Queues Backlog and Assigned
		Work tabs of Omni Supervisor. This object is available in API version 53.0 and later.

# OmniSupervisorConfigQueue

Represents the queues that are visible to the supervisors of an Omni-Channel supervisor configuration. The queue, if visible, appears in the Queues Backlog and Assigned Work tabs of Omni Supervisor. This object is available in API version 53.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see OmniSupervisorConfigQueue in the Omnistudio Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Omni Supervisor Configuration Queue ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| OmniSupervisorConfigId | Omni Supervisor Configuration ID | reference |  | 18 |  |  |
| QueueId | Queue ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
