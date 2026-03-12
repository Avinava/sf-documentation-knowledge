---
title: "AssetRenewErrorDtlEvent"
domain: platform-events
topic: assetrenewerrordtlevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:28.323Z
estimatedTokens: 223
keywords: [AssetRenewErrorDtlEvent, errors, occurred, processing, asset-management, assets, collection, actions, initiate-renew, included, AssetRenewInitiatedEvent, message, can't, subscribe, directly]
---

# AssetRenewErrorDtlEvent

> Contains information about errors that occurred during the processing of an
            /asset-management/assets/collection/actions/initiate-renew request. This
      object is included in an AssetRenewInitiatedEvent
      message. You can't subscribe to AssetRenewErrorDtlEvent
      directly. This object is available in API versions 55.0
      and
      56.0
      only.

# AssetRenewErrorDtlEvent

Contains information about errors that occurred during the processing of an /asset-management/assets/collection/actions/initiate-renew request. This object is included in an AssetRenewInitiatedEvent message. You can't subscribe to AssetRenewErrorDtlEvent directly. This object is available in API versions 55.0 and 56.0 only.

## Supported Calls

describeSObjects()

## Special Access Rules

This object is available when Subscription Management is enabled.

## Fields

| Field | Details |
| --- | --- |
| ErrorCode | TypestringPropertiesNillableDescriptionReference code for the type of error that occurred. |
| ErrorMessage | TypestringPropertiesNillableDescriptionInformation about the error that occurred during processing. |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. |
