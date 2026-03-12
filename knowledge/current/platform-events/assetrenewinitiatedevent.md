---
title: "AssetRenewInitiatedEvent"
domain: platform-events
topic: assetrenewinitiatedevent
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:28.330Z
estimatedTokens: 693
keywords: [AssetRenewInitiatedEvent, Notifies, subscribers, process, started, asset-management, assets, collection, actions, initiate-renew, REST, successful, event, renewal, order]
---

# AssetRenewInitiatedEvent

> Notifies subscribers when the process started by the
            /asset-management/assets/collection/actions/initiate-renew REST request is
         complete. If the process is successful, use this event to learn about the renewal order
         that was created. If the process isn't successful, use the RevenueTransactionErrorLog
         records to learn about the errors and how to fix them. This object is available in API
      version 55.0 and later.

# AssetRenewInitiatedEvent

Notifies subscribers when the process started by the /asset-management/assets/collection/actions/initiate-renew REST request is complete. If the process is successful, use this event to learn about the renewal order that was created. If the process isn't successful, use the RevenueTransactionErrorLog records to learn about the errors and how to fix them. This object is available in API version 55.0 and later.

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

/event/AssetRenewInitiatedEvent

## Event Delivery Allocation Enforced

No

## Special Access Rules

This object is available when Subscription Management is enabled.

## Fields

| Field | Details |
| --- | --- |
| AssetRenewErrorDetailEvents | TypeAssetRenewErrorDtlEvent[]PropertiesNillableDescriptionContains a list of error messages and error codes if the request failed. This field is available in API versions 55.0 and 56.0 only. |
| CorrelationIdentifier | TypestringPropertiesNillableDescriptionReserved for future use. |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. |
| HasErrors | TypebooleanPropertiesDefaulted on createDescriptionContains true if errors occurred during the process; otherwise false. The default value is false. |
| RenewalRecordId | TypestringPropertiesNillableDescriptionThe ID of the renewal record; for example, the renewal order. If the process failed, this field is null. |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
| RequestIdentifier | TypestringPropertiesNillableDescriptionThe unique ID returned in the requestIdentifier parameter in the /asset-management/assets/collection/actions/initiate-renew response. Use this ID to identify the event for a specific request. |

-   **[AssetRenewErrorDtlEvent](atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_assetrenewerrordtlevent.htm)**
    Contains information about errors that occurred during the processing of an /asset-management/assets/collection/actions/initiate-renew request. This object is included in an AssetRenewInitiatedEvent message. You can't subscribe to AssetRenewErrorDtlEvent directly. This object is available in API versions 55.0 and 56.0 only.

## Related Topics

- AssetRenewErrorDtlEvent[] (atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_assetrenewerrordtlevent.htm)
- AssetRenewErrorDtlEvent (atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_assetrenewerrordtlevent.htm)
