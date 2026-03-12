---
title: "EventRelayConfig"
domain: metadata-api
topic: eventrelayconfig
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:39.390Z
estimatedTokens: 970
keywords: [EventRelayConfig, Represents, configuration, event, relay, which, relays, platform, events, change, data, capture, Salesforce, Amazon, EventBridge., Parent, File, Suffix, Directory, Location]
---

# EventRelayConfig

> Represents the configuration of an event relay, which
      relays platform events and change data capture events from Salesforce to Amazon
      EventBridge.

# EventRelayConfig

Represents the configuration of an event relay, which relays platform events and change data capture events from Salesforce to Amazon EventBridge.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

EventRelayConfig components have the suffix .eventRelay and are stored in the eventRelays folder.

## Version

EventRelayConfig components are available in API version 56.0 and later.

## Special Access Rules

-   You must have the Customize Application permission to deploy and retrieve this type.
-   You can update only the state and relayOption fields and not eventChannel or destinationResourceName.

## Fields

| Field Name | Description |
| --- | --- |
| destinationResourceName | Field TypestringDescriptionRequired. The developer name of the named credential, which stores the AWS account information. The destinationResourceName value contains the callout: prefix. For example: callout:MyRelayNamedCredential |
| eventChannel | Field TypestringDescriptionRequired. The full name of the event channel used in the event relay. For example: MyRelayChannel__chn |
| label | Field TypestringDescriptionThe label for the event relay. The label is displayed in the user interface. Make sure you use a meaningful label that describes your event relay and try to make it unique. |
| relayOption | Field TypestringDescriptionA JSON-encoded string that contains an option for resuming an event relay after the system recovers from an error. This option is used if the event relay can't resume after the last relayed event. The options available are:{"ReplayRecovery":"LATEST"}—(Default) Start relaying events from new events received in the event bus. Use this option if you aren’t interested in missed events while the relay was down.{"ReplayRecovery":"EARLIEST"}—Resend all events stored in the event bus and relay new events thereafter. The event bus stores events for up to three days. Use this option if you want to reprocess all stored events and catch up on missed events. |
| state | Field TypeEventRelayAdminState (enumeration of type string)DescriptionThe execution state of the event relay. Possible values are:RUN—The event relay is running and actively relaying event messages from Salesforce to Amazon EventBridge.PAUSE—An administrator paused the event relay. No events are relayed to Amazon EventBridge during this status. All current state information is saved.STOP—(Default) The event relay is stopped and no events are relayed to Amazon EventBridge. All current state information is deleted.The event relay is created with a default state of STOP if you don't specify this field. If you specify this field when creating an event relay, the only valid value you can set is STOP.DELETE—Reserved for future use. |
| usageType | Field TypestringDescriptionReserved for future use. |

## Declarative Metadata Sample Definition

The following is an example of an EventRelayConfig component with the file name Carbon\_Comparison\_Relay.eventRelay.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<EventRelayConfig xmlns="http://soap.sforce.com/2006/04/metadata">
    <destinationResourceName>callout:AWS_Account</destinationResourceName>
    <eventChannel>Carbon_Comparison_Channel__chn</eventChannel>
    <label>Carbon Comparison Relay</label>
    <relayOption>{"ReplayRecovery":"LATEST"}</relayOption>
    <state>STOP</state>
</EventRelayConfig>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>Carbon_Comparison_Relay</members>
        <name>EventRelayConfig</name>
    </types>
    <version>66.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
