---
title: "CreateAssetOrderEvent"
domain: revenue-cloud
topic: createassetorderevent
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:11.179Z
estimatedTokens: 1048
keywords: [CreateAssetOrderEvent, Notifies, subscribers, process, started, actions, standard, createOrUpdateAssetFromOrder, createOrUpdateAssetFromOrderItem, successful, event, new, assets, isn't, errors]
---

# CreateAssetOrderEvent

> Notifies subscribers that the process started by the /actions/standard/createOrUpdateAssetFromOrder or  /actions/standard/createOrUpdateAssetFromOrderItem
			request is complete. If the process is successful, use this event to learn about the new
			assets. If the request isn't successful, use this event to learn about the errors and
			how to fix them. This object is available in API version 55.0 and
		later.

# CreateAssetOrderEvent

Notifies subscribers that the process started by the /actions/standard/createOrUpdateAssetFromOrder or /actions/standard/createOrUpdateAssetFromOrderItem request is complete. If the process is successful, use this event to learn about the new assets. If the request isn't successful, use this event to learn about the errors and how to fix them. This object is available in API version 55.0 and later.

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

/event/CreateAssetOrderEvent

## Event Delivery Allocation Enforced

No

## Special Access Rules

This object is available if Subscription Management or Revenue Cloud is enabled in your org. Users must have Read access on this event to receive or view event notifications.

## Fields

| Field | Details |
| --- | --- |
| AssetDetails | TypeCreateAssetOrderDtlEventPropertiesNillableDescriptionA list of AssetDetail records created as a result of a successful request.Each AssetDetail contains an order item ID, asset ID, and IsSuccess flag. If the request failed, the AssetDetail also contains an error code and error message. |
| CorrelationIdentifier | TypestringPropertiesNillableDescriptionReserved for future use. |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. |
| IsLastEvent | TypebooleanPropertiesDefaulted on createDescriptionIndicates whether this event is the final event in the request (true) or not (false). If true, then there are no more events associated with the request. This field is populated only in the final event in the request.The default value is false.This field is available in API version 62.0 and later. |
| OrderIdentifier | TypestringPropertiesNillableDescriptionThe ID of the order associated with this event. Available with Revenue Cloud in API version 64.0 and later. |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
| RequestIdentifier | TypestringPropertiesNillableDescriptionId of the request that triggered the event. |

## Example

A user successfully runs a createOrUpdateAssetFromOrder request on an order with two order items. The published createAssetOrderEvent contains this information.

-   RequestId: 0001
-   AssetDetail
    -   OrderItemId: 802XX0000000001
    -   AssetId: 02iXX000000001
    -   IsSuccess: True
-   AssetDetail
    -   OrderItemId: 802XX0000000001
    -   AssetId: 02iXX000000002
    -   IsSuccess: True

## Example

A user runs a createOrUpdateAssetFromOrder request on an order with two order items, but doesn't have Create access on assets. The request fails, and the published createAssetOrderEvent contains this information.

-   RequestId: 0002
-   AssetDetail
    -   OrderItemId: 802XX0000000001
    -   IsSuccess: False
    -   ErrorCode: INSUFFICIENT\_ACCESS
    -   ErrorMessage: User doesn’t have Create Access to asset.
-   AssetDetail
    -   OrderItemId: 802XX0000000001
    -   IsSuccess: False
    -   ErrorCode: INSUFFICIENT\_ACCESS
    -   ErrorMessage: User doesn’t have Create Access to asset.

-   **[CreateAssetOrderDtlEvent](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_createassetorderdtlevent.htm)**
    Contains information about an attempt to create or update an asset as a result of /actions/standard/createOrUpdateAssetFromOrder. If the request was successful, the event shows information about the asset. If the request failed, the event shows error information. This object is included in an CreateAssetOrderEvent message. You can't subscribe to CreateAssetOrderDtlEvent directly. This object is available in API version 55.0 and later.

## Related Topics

- CreateAssetOrderDtlEvent (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_createassetorderdtlevent.htm)
