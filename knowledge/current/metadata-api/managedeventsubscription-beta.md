---
title: "ManagedEventSubscription (Beta)"
domain: metadata-api
topic: managedeventsubscription-beta
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:53.439Z
keywords: [ManagedEventSubscription, Beta, Note, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# ManagedEventSubscription (Beta)

# ManagedEventSubscription (Beta)

Represents a managed event subscription in Pub/Sub API. Use a managed event subscription to track the events that a subscriber client consumed and resume a subscription where it left off. This type extends the metadata type and inherits its fullName field.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

This feature is a Beta Service. Customer may opt to try such Beta Service in its sole discretion. Any use of the Beta Service is subject to the applicable Beta Services Terms provided at Agreements and Terms.

## File Suffix and Directory Location

ManagedEventSubscription components have the suffix .managedEventSubscription and are stored in the managedEventSubscriptions folder.

## Version

ManagedEventSubscription components are available in API version 60.0 and later.

## Special Access Rules

You must have the Customize Application permission to deploy and retrieve this type.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| defaultReplay | EventSubscriptionReplayPreset (enumeration of type string) | The position in the stream where the subscription starts when the client initiates the subscription for the first time or if the client doesn’t commit a Replay ID. Possible values are:LATEST—(Default) The subscription starts from the latest events received. This option skips sending events that were published when the client was disconnected.EARLIEST—The subscription starts from the earliest events stored in the event bus. This option sends new events and any other events less than 72 hours old. You can reprocess all stored events and catch up on missed events. Use this option sparingly. Subscribing with the EARLIEST option when a large number of event messages are stored can slow performance and exhaust the event delivery allocation. |
| errorRecoveryReplay | EventSubscriptionReplayPreset (enumeration of type string) | The position in the stream where the subscription restarts if the committed Replay ID is invalid. The Replay ID can be invalid if it’s older than the event retention window. Possible values are:LATEST—(Default) The subscription restarts from the latest events received. This option skips sending events that were published when the client was disconnected.EARLIEST—The subscription restarts from the earliest events stored in the event bus. This option sends new events and any other events less than 72 hours old. You can reprocess all stored events and catch up on missed events. Use this option sparingly. Subscribing with the EARLIEST option when a large number of event messages are stored can slow performance and exhaust the event delivery allocation. |
| label | string | The label for the managed subscription. |
| state | EventSubscriptionAdminState (enumeration of type string) | The execution state that the ManagedSubscribe RPC call consumes. If state is set to RUN, the subscription starts when the ManagedSubscribe RPC call is made. Otherwise, the subscription doesn't start. If an administrator later changes state from RUN to STOP, the system notifies the Pub/Sub API client of the new state value and the subscription disconnects. Also, the stored Replay ID value that was committed previously is deleted. The next time the ManagedSubscribe RPC call is made after state is changed from STOP to RUN, the subscription starts from the defaultReplay value.The possible values for state are:RUN—(Default) The subscription is running and delivering new events to the Pub/Sub API client.STOP—The subscription is stopped. No events are delivered to the Pub/Sub API client during this state and the previously committed Replay ID is deleted.PAUSE—Reserved for internal use. |
| topicName | string | The topic name of the platform event or change event or the channel name of a custom platform event channel or custom or standard change data capture channel. The topic name can be one of the following values.For a platform event—/event/EventName__eFor a custom platform event channel—/event/CustomPEChannel__chnFor the standard change event channel—/data/ChangeEventsFor a change event (replace Object with the object name)—/data/ObjectChangeEvent. For example, for Account, it’s /data/AccountChangeEvent.For a custom change event channel—/data/CustomChangeChannel__chn |
| version | string | Reserved for internal use. |

## Declarative Metadata Sample Definition

The following is an example of a ManagedEventSubscription component with the file name My\_Managed\_Subscription.managedSubscription.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").