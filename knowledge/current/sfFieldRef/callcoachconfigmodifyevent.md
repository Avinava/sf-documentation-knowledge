---
title: "CallCoachConfigModifyEvent"
domain: sfFieldRef
topic: callcoachconfigmodifyevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:51.120Z
estimatedTokens: 217
keywords: [CallCoachConfigModifyEvent, Notifies, subscribers, Conversation, Insights, configuration, change, API, version, 49.0, later]
---

# CallCoachConfigModifyEvent

> Notifies subscribers of a Conversation Insights configuration
			change. This object is available in API version 49.0 and later.

# CallCoachConfigModifyEvent

Notifies subscribers of a Conversation Insights configuration change. This object is available in API version 49.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see CallCoachConfigModifyEvent in the Platform Events Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ChangeType | Change Type | picklist |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EventUuid | Event UUID | string |  | 36 |  |  |
| OrganizationId | Organization ID | string |  | 18 |  |  |
| ProviderIdChange | Provider ID Change | string |  | 18 |  |  |
| ReplayId | Replay ID | string |  | 1000 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
