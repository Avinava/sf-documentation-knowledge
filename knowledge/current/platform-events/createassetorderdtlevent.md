---
title: "CreateAssetOrderDtlEvent"
domain: platform-events
topic: createassetorderdtlevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:28.453Z
estimatedTokens: 597
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

## Supported Calls

describeSObjects()

## Supported Subscribers

| Subscriber | Supported? |
| --- | --- |
| Apex Triggers |  |
| Flows |  |
| Processes |  |
| Pub/Sub API |  |
| Streaming API (CometD) |  |

## Subscription Channel

/event/CreateAssetOrderDtlEvent

## Special Access Rules

This object is available if Revenue Cloud is installed in your org. Users must have Read access on this event to receive or view event notifications.

## Fields

| Field | Details |
| --- | --- |
| AssetId | TypereferencePropertiesNillableDescriptionThe ID of the asset that was created or updated.This field is a relationship field.Relationship NameAssetRelationship TypeLookupRefers ToAsset |
| ErrorCode | TypestringPropertiesNillableDescriptionReference code for the type of error that occurred. |
| ErrorMessage | TypestringPropertiesNillableDescriptionInformation about the error that occurred after the request was made. |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. |
| IsSuccess | TypebooleanPropertiesDefaulted on createDescriptionIndicates whether the request to create the asset for the order item was successful (true) or not (false).The default value is false. Available in API version 61.0 and later. |
| OrderItemId | TypereferencePropertiesDescriptionThe ID of the order item used in the request. Available in API version 61.0 and later.This field is a relationship field.Relationship NameOrderItemRelationship TypeLookupRefers ToOrderItem |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
