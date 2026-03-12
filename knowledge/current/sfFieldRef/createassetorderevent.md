---
title: "CreateAssetOrderEvent"
domain: sfFieldRef
topic: createassetorderevent
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:54.971Z
estimatedTokens: 306
keywords: [CreateAssetOrderEvent, Notifies, subscribers, process, started, actions, standard, createOrUpdateAssetFromOrder, successful, event, new, assets, isn't, errors, how]
---

# CreateAssetOrderEvent

> Notifies subscribers that the  process started by the /actions/standard/createOrUpdateAssetFromOrder request is complete. If the
			process is successful, use this event to learn about the new assets. If the request
			isn't successful, use this event to learn about the errors and how to fix them. This
			object is available in API version 55.0 and later.

# CreateAssetOrderEvent

Notifies subscribers that the process started by the /actions/standard/createOrUpdateAssetFromOrder request is complete. If the process is successful, use this event to learn about the new assets. If the request isn't successful, use this event to learn about the errors and how to fix them. This object is available in API version 55.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see CreateAssetOrderEvent in the Platform Events Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AssetDetails | Create Asset Order Detail Event ID | complexvalue |  |  |  |  |
| CorrelationIdentifier | Correlation Identifier | string |  | 80 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EventUuid | Event UUID | string |  | 36 |  |  |
| IsLastEvent | Final Event | boolean |  |  |  |  |
| OrderIdentifier | Order | string |  | 40 |  |  |
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
