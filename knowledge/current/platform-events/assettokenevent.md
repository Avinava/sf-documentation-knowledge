---
title: "AssetTokenEvent"
domain: platform-events
topic: assettokenevent
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:28.339Z
estimatedTokens: 903
keywords: [AssetTokenEvent, Notifies, subscribers, asset, token, issuance, registration, connected, device, API, version, 39.0, later, Calls, Subscription]
---

# AssetTokenEvent

> Notifies subscribers of asset token issuance and
			registration of a connected device as an Asset. This object is available in API
		version 39.0 and later.

# AssetTokenEvent

Notifies subscribers of asset token issuance and registration of a connected device as an Asset. This object is available in API version 39.0 and later.

An asset token event records successful completion of an OAuth 2.0 asset token flow for a connected device. An event is published whenever an access token and actor token (optional) are successfully exchanged for an asset token. This object is designed to support custom business processes, such as automatic logging of a case when an event occurs. Create Apex triggers that subscribe to an event and execute after asset token issuance. This object is read only and can’t be retrieved using a SOQL query. Asset token events are not displayed in the Setup user interface for Platform Events.

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

/event/AssetTokenEvent

## Event Delivery Allocation Enforced

Yes

## Fields

| Field Name | Details |
| --- | --- |
| ActorTokenPayload | TypetextareaPropertiesNillableDescriptionIf the asset token request included an actor token, the payload portion containing claims about the connected device, asset token, and if applicable, the registered Asset. |
| AssetId | TypereferencePropertiesNillableDescriptionID of the Asset record if the Asset was newly created or an existing Asset was linked to in the asset token request. |
| AssetName | TypestringPropertiesNillableDescriptionIf specified in the actor token, the display name of the existing Asset. This value is otherwise null. |
| AssetSerialNumber | TypestringPropertiesNillableDescriptionIf specified in the actor token, the serial number of the existing Asset. This value is otherwise null. |
| ConnectedAppId | TypereferencePropertiesNillableDescriptionID of the connected app associated with the access token for the device. |
| DeviceId | TypestringPropertiesNillableDescriptionID of the connected device. Value is the did (device ID) claim specified in the actor token. |
| DeviceKey | TypetextareaPropertiesNillableDescriptionIf specified in the actor token, the device-specific RSA public key as a JSON Web Key (JWK). Value is the jwk claim within the confirmation claim from the actor token. |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. This field is available in API version 52.0 and later. |
| Expiration | TypedateTimePropertiesNillableDescriptionThe expiration time on or after which the asset token JWT must not be accepted for processing. A numeric value representing the number of seconds from 1970-01-01T00:00:00Z UTC until the specified UTC date/time, ignoring leap seconds. |
| ExternalClientApplicationId | TypereferencePropertiesNillableDescriptionFor internal use only. |
| Name | TypestringPropertiesNillableDescriptionDisplay name of the asset token. |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
| UserId | TypereferencePropertiesNillableDescriptionID of the user associated with the access token. |

## Usage

The following example shows how to trigger an action after an asset token event.

```

```

## Code Examples

```apex
trigger AssetTokenEventTrigger on AssetTokenEvent (after insert) {
      System.assertEquals(1,Trigger.new.size(),'One record expected');
      AssetTokenEvent event = Trigger.new[0];
      AssetTokenRecord__c record = new AssetTokenRecord__c();
      record.ConnectedAppId__c = event.ConnectedAppId;
      record.UserId__c = event.UserId;
      record.AssetId__c = event.AssetId;
      record.AssetTokenName__c = event.AssetTokenName;
      record.DeviceId__c = event.DeviceId;
      record.DeviceKey__c = event.DeviceKey;
      record.Expiration__c = event.Expiration;
      record.AssetSerialNumber__c = event.AssetSerialNumber;
      record.AssetName__c = event.AssetName;
      record.ActorTokenPayload__c = event.ActorTokenPayload;
      insert(record);
}
```
