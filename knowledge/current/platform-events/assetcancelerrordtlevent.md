---
title: "AssetCancelErrorDtlEvent"
domain: platform-events
topic: assetcancelerrordtlevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:28.313Z
estimatedTokens: 229
keywords: [AssetCancelErrorDtlEvent, errors, occurred, processing, asset-management, assets, collection, actions, initiate-cancellation, included, AssetCancelInitiatedEvent, message, can't, subscribe, directly]
---

# AssetCancelErrorDtlEvent

> Contains information about errors that occurred during the processing of an
				/asset-management/assets/collection/actions/initiate-cancellation
			request. This object is included in an AssetCancelInitiatedEvent message. You can't subscribe to AssetCancelErrorDtlEvent directly. This object is available
		in API versions 55.0 and 56.0 only.

# AssetCancelErrorDtlEvent

Contains information about errors that occurred during the processing of an /asset-management/assets/collection/actions/initiate-cancellation request. This object is included in an AssetCancelInitiatedEvent message. You can't subscribe to AssetCancelErrorDtlEvent directly. This object is available in API versions 55.0 and 56.0 only.

## Supported Calls

describeSObjects()

## Special Access Rules

This object is available if Subscription Management is installed in your org.

## Fields

| Field | Details |
| --- | --- |
| ErrorCode | TypestringPropertiesNillableDescriptionReference code for the type of error that occurred. |
| ErrorMessage | TypestringPropertiesNillableDescriptionInformation about the error that occurred during processing. |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. |
