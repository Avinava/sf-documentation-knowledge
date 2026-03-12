---
title: "AssetAmendInitiatedEvent"
domain: platform-events
topic: assetamendinitiatedevent
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:28.309Z
estimatedTokens: 692
keywords: [AssetAmendInitiatedEvent, Notifies, subscribers, process, started, asset-management, assets, collection, actions, initiate-amend-quantity, REST, successful, event, amendment, order]
---

# AssetAmendInitiatedEvent

> Notifies subscribers when the process started by the
            /asset-management/assets/collection/actions/initiate-amend-quantity REST
         request is complete. If the process is successful, use this event to learn about the
         amendment order that was created. If the process isn't successful, use the
         RevenueTransactionErrorLog records to learn about the errors and how to fix them. This
      object is available in API version 56.0 and later.

# AssetAmendInitiatedEvent

Notifies subscribers when the process started by the /asset-management/assets/collection/actions/initiate-amend-quantity REST request is complete. If the process is successful, use this event to learn about the amendment order that was created. If the process isn't successful, use the RevenueTransactionErrorLog records to learn about the errors and how to fix them. This object is available in API version 56.0 and later.

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

/event/AssetAmendInitiatedEvent

## Event Delivery Allocation Enforced

No

## Special Access Rules

This object is available when Subscription Management is enabled.

## Fields

| Field | Details |
| --- | --- |
| AmendmentRecordId | TypestringPropertiesNillableDescriptionThe ID of the amendment record; for example, the amendment order. If the process failed, this field is null. |
| AssetAmendErrorDetailEvents | TypeAssetAmendErrorDtlEvent[]PropertiesNillableDescriptionContains a list of error messages and error codes if the request failed. This field is available in API versions 55.0 and 56.0 only. |
| CorrelationIdentifier | TypestringPropertiesNillableDescriptionReserved for future use. |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. |
| HasErrors | TypebooleanPropertiesDefaulted on createDescriptiontrue if errors occurred during the processing of this request; otherwise false. |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
| RequestIdentifier | TypestringPropertiesNillableDescriptionThe unique ID returned in the requestIdentifier parameter in the /asset-management/assets/collection/actions/initiate-renew response. Use this ID to identify the event for a specific request. |

-   **[AssetAmendErrorDtlEvent](atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_assetamenderrordtlevent.htm)**
    Contains information about errors that occurred during the processing of an /asset-management/assets/collection/actions/initiate-amend-quantity request. This object is included in an AssetAmendInitiatedEvent message. You can’t subscribe to AssetAmendErrorDtlEvent directly. This object is available in API version 56.0 only.

## Related Topics

- AssetAmendErrorDtlEvent (atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_assetamenderrordtlevent.htm)
