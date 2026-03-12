---
title: "CommerceDiagnosticEvent"
domain: platform-events
topic: commercediagnosticevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:28.415Z
estimatedTokens: 1670
keywords: [CommerceDiagnosticEvent, Tracks, checkout, pricing, search, activity, Commerce, implementation, monitor, events, diagnose, issues, API, version, 49.0]
---

# CommerceDiagnosticEvent

> Tracks checkout, pricing, search, and other activity within your
			Commerce implementation to monitor events and diagnose issues. This object is
		available in API version 49.0 and later.

# CommerceDiagnosticEvent

Tracks checkout, pricing, search, and other activity within your Commerce implementation to monitor events and diagnose issues. This object is available in API version 49.0 and later.

## Supported Calls

create(),describeSObjects()

## Supported Subscribers

| Subscriber | Supported? |
| --- | --- |
| Apex Triggers |  |
| Flows |  |
| Processes |  |
| Pub/Sub API |  |
| Streaming API (CometD) |  |

## Subscription Channel

/event/CommerceDiagnosticEvent

## Special Access Rules

CommerceDiagnosticEvent is available only if the B2B Commerce license is enabled.

## Event Delivery Allocation Enforced

Yes

## Fields

| Field | Details |
| --- | --- |
| B2bEdition | TypestringPropertiesCreate, NillableDescriptionThe edition of B2B Commerce. The edition can include Lightning (LB2B), CCRZ, or future flavors. This field is available in API version 51.0 and later. |
| B2bVersion | TypestringPropertiesCreate, NillableDescriptionThis field is optional. For a managed package, B2BVersion includes Major, Minor, Patch revision numbers. For Lightning, B2BVersion includes the optional service version. This field is available in API version 51.0 and later. |
| BrowswerDeviceType | TypeintPropertiesCreate, NillableDescriptionA code used to identify the browser and device type. This field is available in API version 51.0 and later.The code is in the format “BBVVVXYZ,” with the following signification:BB — Two digits that indicate the browser type.INTERNET_EXPLORER: “10”CHROME: "13"FIREFOX: "11"SAFARI: "14"OPERA: "15"ANDROID_WEBKIT: "16"NETSCAPE: "17"OTHER_WEBKIT: "18"OTHER_GECKO: "19"OTHER_KHTML: "20"OTHER_MOBILE: "21"SALESFORCE_DESKTOP: "22"BLACKBERRY: "23"GOOD_ACCESS: "24"EDGE: "25"SALESFORCE_MOBILE: "26"VVV—Three digits that indicate version, with leading zeroes.XYZ—Browser-type specific flags or options. Each digit in XYZ represents a different flag depending on the BrowserType:X=1: If the parser recognizes a "touch" browser. Here, touch means the older touch native client, not that the device supports touch.Y=1: If the parser recognizes a browser in compatibility mode. Only for IE.Z=1: If the browser is recognized as MOBILE.Z=2: If the browser is recognized as PHONE.Z=3: If the browser is recognized as TABLET.Z=4: If the browser is a recognized as MEDIA PLAYER.Z=6: Only for Opera Mini. |
| ContextId | TypestringPropertiesCreate, NillableDescriptionThe Key Business Domain Value in which the operation is done. For example, for Cart, the ContextId is cartId. |
| ContextId2 | TypestringPropertiesCreate, NillableDescriptionAnother field used to identify a context ID for a given operation. |
| ContextMap | TypestringPropertiesCreate, NillableDescriptionA JSON string that captures extra operational context or other diagnostic information. |
| CorrelationId | TypestringPropertiesCreate, NillableDescriptionUsed to correlate client and server calls, and other async calls to Commerce subsystems. Calls can take place across several services and operations. |
| Count | TypeintPropertiesCreate, NillableDescriptionThe number of records impacted by an operation. |
| EffectiveAccountId | TypestringPropertiesCreate, NillableDescriptionThe Commerce Effective Account ID in the context of an operation. |
| ErrorCode | TypestringPropertiesCreate, NillableDescriptionThe API error code that appears when an operation fails. |
| ErrorMessage | TypestringPropertiesCreate, NillableDescriptionThe user-friendly error message that appears when an operation fails. |
| EventDate | TypedateTimePropertiesCreate, NillableDescriptionThe date when the event occurred. |
| EventIdentifier | TypestringPropertiesCreate, NillableDescriptionThe unique ID of the event, which is shared with the corresponding object. For example, 0a4779b0-0da1-4619-a373-0a36991dff90. Use this field value to correlate the event with its corresponding object. |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. This field is available in API version 52.0 and later. |
| IsRetry | TypebooleanPropertiesCreate, Defaulted on createDescriptionDescribes whether an event occurred during a retried operation (true), or not (false). Default value is false. |
| Operation | TypestringPropertiesCreate, NillableDescriptionThe operation where the event originated. For example, CreateCart, EditCart, and CreateOrder. |
| OperationStage | TypestringPropertiesCreate, NillableDescriptionThe stage of the operation where the event originated. This value varies depending on the operation. |
| OperationStatus | TypestringPropertiesCreate, NillableDescriptionThe status of the operation. Values include:SuccessSystemErrorAdminErrorUserErrorDependencyError |
| OperationTime | TypestringPropertiesCreate, NillableDescriptionDuration of the operation in minutes and/or seconds. |
| OsVersion | TypeintPropertiesCreate, NillableDescriptionCode used to identify the operating system and version. OsVersion is equal to 9999 for an unknown platform. This field is available in API version 51.0 and later. |
| RelatedEventIdentifier | TypestringPropertiesCreate, NillableDescriptionEventIdentifier (UUID) of the related event. |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
| ServiceName | TypestringPropertiesCreate, NillableDescriptionThe service where the event originated. When Commerce generates the event, possible values include:BuyerGroupBuyerAccountBuyerManagementCartCartAsyncCheckoutEntitlementsOrderPricingProductEtlProductsReOrderSearchStorefrontIntegrationWishlistExternalManagedAccoutsEffectiveAccountServiceEffectiveAccountUIService |
| UserId | TypestringPropertiesCreate, NillableDescriptionThe ID of the user associated with this event. |
| Username | TypestringPropertiesCreate, NillableDescriptionReserved for future use. |
| WebStoreId | TypestringPropertiesCreate, NillableDescriptionThe ID of the Webstore associated with this event. |
| WebStoreType | TypestringPropertiesCreate, NillableDescriptionThe type of webstore. For example: B2B, B2C, and OMS. This field is available in API version 51.0 and later. |

#### See Also

-   [Subscribing to Platform Events](atlas.en-us.platform_events.meta/platform_events/platform_events_subscribe.htm "Receive platform events in processes, flows, Apex triggers, Pub/Sub API, or CometD clients.")

## Related Topics

- Subscribing to Platform Events (atlas.en-us.platform_events.meta/platform_events/platform_events_subscribe.htm)
