---
title: "ConcurLongRunApexErrEvent"
domain: sfFieldRef
topic: concurlongrunapexerrevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:53.703Z
estimatedTokens: 410
keywords: [ConcurLongRunApexErrEvent, Notifies, subscribers, errors, occur, Salesforce, org, exceeds, concurrent, long-running, Apex, limit, high, volume, events]
---

# ConcurLongRunApexErrEvent

> Notifies subscribers of errors that occur when a Salesforce org exceeds
			the concurrent long-running Apex limit. If a high volume of these events occur
			concurrently in an org, we may rate limit the events based on resource availability.
			Event log files, which are the predecessor of Real-time Event Monitoring, provide a list
			of Apex-related events. For more information, see Apex-related EventLogFile events. This
		object is available in API version 49.0 and later.

# ConcurLongRunApexErrEvent

Notifies subscribers of errors that occur when a Salesforce org exceeds the concurrent long-running Apex limit. If a high volume of these events occur concurrently in an org, we may rate limit the events based on resource availability. Event log files, which are the predecessor of Real-time Event Monitoring, provide a list of Apex-related events. For more information, see Apex-related EventLogFile events. This object is available in API version 49.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see ConcurLongRunApexErrEvent in the Platform Events Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrentValue | Current Value | int | 9 |  |  |  |
| EventDate | Event Date | datetime |  |  |  |  |
| EventIdentifier | Event Identifier | string |  | 80 |  |  |
| EventUuid | Event UUID | string |  | 36 |  |  |
| LimitValue | Limit Value | int | 9 |  |  |  |
| LoginKey | Login Key | string |  | 24 |  |  |
| Quiddity | Quiddity | string |  | 50 |  |  |
| ReplayId | Replay ID | string |  | 1000 |  |  |
| RequestId | Jetty Request ID | string |  | 18 |  |  |
| RequestUri | Request URI | string |  | 5000 |  |  |
| SessionKey | Session Key | string |  | 24 |  |  |
| SessionLevel | Session Level | picklist |  | 255 |  |  |
| SourceIp | Source IP | string |  | 255 |  |  |
| UserId | User ID | reference |  | 18 |  |  |
| Username | Username | string |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
