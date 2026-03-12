---
title: "ServiceAppointmentEvent"
domain: sfFieldRef
topic: serviceappointmentevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:13.334Z
estimatedTokens: 253
keywords: [ServiceAppointmentEvent, Notifies, subscribers, service, appointment, generated, event, platform, API, version, 59.0, later]
---

# ServiceAppointmentEvent

> Notifies subscribers of the service appointment details that are
			generated from the event platform. This object is available in API version 59.0 and
		later.

# ServiceAppointmentEvent

Notifies subscribers of the service appointment details that are generated from the event platform. This object is available in API version 59.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see ServiceAppointmentEvent in the Platform Events Developer Guide and Salesforce Scheduler Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AsgnRsrcApptSchdDtlEvent | Assigned Resource Appointment Scheduling Event ID | complexvalue |  |  |  |  |
| ChangeType | Change Type | string |  | 6 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EventUuid | Event UUID | string |  | 36 |  |  |
| ReplayId | Replay ID | string |  | 1000 |  |  |
| ServiceApptSchduleEvent | Service Appointment Scheduling Event ID | complexvalue |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
