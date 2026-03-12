---
title: "EventRelayFeedback"
domain: sfFieldRef
topic: eventrelayfeedback
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:57.535Z
estimatedTokens: 476
keywords: [EventRelayFeedback, execution, state, event, relay, Salesforce, Amazon, EventBridge, platform, events, change, data, capture, Query, status]
---

# EventRelayFeedback

> Represents execution state information about an event relay from Salesforce
         to Amazon EventBridge for platform events and change data capture events. Query this object
         to get information such as the event relay status and any error message. This object
      is available in API version 56.0 and later.

# EventRelayFeedback

Represents execution state information about an event relay from Salesforce to Amazon EventBridge for platform events and change data capture events. Query this object to get information such as the event relay status and any error message. This object is available in API version 56.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [EventRelayFeedback](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_eventrelayfeedback.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| ErrorCode | Error Code | string |  | 128 |  |  |
| ErrorIdentifier | Error Identifier | string |  | 255 |  |  |
| ErrorMessage | Error Message | textarea |  | 1024 |  |  |
| ErrorTime | Error Time | datetime |  |  |  |  |
| EventRelayConfigId | Event Relay Config ID | reference |  | 18 |  |  |
| EventRelayNumber | Event Relay Feedback Name | string |  | 255 |  |  |
| Id | Event Relay Feedback ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastRelayedEventTime | Last Relayed Event Timestamp | datetime |  |  |  |  |
| RemoteResource | Remote Resource | string |  | 255 |  |  |
| Status | Current Status | picklist |  | 255 |  |  |
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
