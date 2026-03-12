---
title: "AssetAmendErrorDtlEvent"
domain: platform-events
topic: assetamenderrordtlevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:28.302Z
estimatedTokens: 234
keywords: [AssetAmendErrorDtlEvent, errors, occurred, processing, asset-management, assets, collection, actions, initiate-amend-quantity, included, AssetAmendInitiatedEvent, message, can’t, subscribe, directly]
---

# AssetAmendErrorDtlEvent

> Contains information about errors that occurred during the processing of an
            /asset-management/assets/collection/actions/initiate-amend-quantity
         request. This object is included in an AssetAmendInitiatedEvent message. You can’t subscribe to AssetAmendErrorDtlEvent directly. This object is available in
      API version 56.0 only.

# AssetAmendErrorDtlEvent

Contains information about errors that occurred during the processing of an /asset-management/assets/collection/actions/initiate-amend-quantity request. This object is included in an AssetAmendInitiatedEvent message. You can’t subscribe to AssetAmendErrorDtlEvent directly. This object is available in API version 56.0 only.

## Supported Calls

describeSObjects()

## Special Access Rules

This object is available when Subscription Management is enabled.

## Event Delivery Allocation Enforced

No

## Fields

| Field | Details |
| --- | --- |
| ErrorCode | TypestringPropertiesNillableDescriptionReference code for the type of error that occurred. |
| ErrorMessage | TypestringPropertiesNillableDescriptionInformation about the error that occurred during processing. |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. |
