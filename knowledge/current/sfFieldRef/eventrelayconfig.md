---
title: "EventRelayConfig"
domain: sfFieldRef
topic: eventrelayconfig
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:57.529Z
estimatedTokens: 417
namespace: NamespacePrefix
keywords: [EventRelayConfig, configuration, event, relay, relays, platform, events, change, data, capture, Salesforce, Amazon, EventBridge, API, version]
---

# EventRelayConfig

> Represents the configuration of an event relay, which relays platform events
         and change data capture events from Salesforce to Amazon EventBridge. This object is
      available in API version 56.0 and later.

**Namespace:** `NamespacePrefix`

# EventRelayConfig

Represents the configuration of an event relay, which relays platform events and change data capture events from Salesforce to Amazon EventBridge. This object is available in API version 56.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [EventRelayConfig](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_eventrelayconfig.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DestinationResourceName | Destination Resource Name | string |  | 255 |  |  |
| DeveloperName | Name | string |  | 80 |  |  |
| EventChannel | Relayed Event Channel | picklist |  | 255 |  |  |
| Id | Event Relay Config ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| Language | Master Language | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MasterLabel | Label | string |  | 80 |  |  |
| NamespacePrefix | Namespace Prefix | string |  | 15 |  |  |
| RelayOption | Event Relay Config Option | textarea |  | 4000 |  |  |
| State | Event Relay Config State | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| UsageType | Event Relay Usage Type | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
