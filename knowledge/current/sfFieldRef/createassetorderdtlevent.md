---
title: "CreateAssetOrderDtlEvent"
domain: sfFieldRef
topic: createassetorderdtlevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:54.967Z
estimatedTokens: 303
keywords: [CreateAssetOrderDtlEvent, attempt, asset, result, actions, standard, createOrUpdateAssetFromOrder, successful, event, failed, error, included, CreateAssetOrderEvent, message, can't]
---

# CreateAssetOrderDtlEvent

> Contains information about an attempt to create or update an asset as a
			result of /actions/standard/createOrUpdateAssetFromOrder. If the request was
			successful, the event shows information about the asset. If the request failed, the
			event shows error information. This object is included in an CreateAssetOrderEvent message. You can't subscribe to
			CreateAssetOrderDtlEvent directly. This object is
		available in API version 55.0 and later.

# CreateAssetOrderDtlEvent

Contains information about an attempt to create or update an asset as a result of /actions/standard/createOrUpdateAssetFromOrder. If the request was successful, the event shows information about the asset. If the request failed, the event shows error information. This object is included in an CreateAssetOrderEvent message. You can't subscribe to CreateAssetOrderDtlEvent directly. This object is available in API version 55.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see CreateAssetOrderDtlEvent in the Platform Events Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AssetId | Asset ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| ErrorCode | Error Code | string |  | 255 |  |  |
| ErrorMessage | Error Message | string |  | 1000 |  |  |
| EventUuid | Event UUID | string |  | 36 |  |  |
| IsSuccess | Success | boolean |  |  |  |  |
| OrderItemId | Order Product ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
