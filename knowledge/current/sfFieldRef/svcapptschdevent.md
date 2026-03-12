---
title: "SvcApptSchdEvent"
domain: sfFieldRef
topic: svcapptschdevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:14.934Z
estimatedTokens: 552
keywords: [SvcApptSchdEvent, service, appointment, event, included, streamed, notification, received, channels, parent, platform, events, can’t, subscribe, channel]
---

# SvcApptSchdEvent

> Represents the service appointment event. This object is included in a streamed
      notification received on the channels for the parent platform events. You can’t subscribe to
      the SvcApptSchdEvent channel directly. This object is available in API version 50.0 and
    later.

# SvcApptSchdEvent

Represents the service appointment event. This object is included in a streamed notification received on the channels for the parent platform events. You can’t subscribe to the SvcApptSchdEvent channel directly. This object is available in API version 50.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see SvcApptSchdEvent in the Platform Events Developer Guide and Salesforce Scheduler Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AdditionalInformation | Additional Information | string |  | 80 |  |  |
| Address | Address | string |  | 255 |  |  |
| AppointmentType | Appointment Type | string |  | 30 |  |  |
| ChangedFields | Changed Fields | complexvalue |  |  |  |  |
| Comments | Comment | string |  | 80 |  |  |
| ContactId | Contact ID | string |  | 30 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DurationInMinutes | Duration in Minutes | double |  |  | 18 | 0 |
| Email | Email | string |  | 30 |  |  |
| EventUuid | Event UUID | string |  | 36 |  |  |
| ParentRecordId | Parent Record ID | string |  | 30 |  |  |
| Phone | Phone | string |  | 30 |  |  |
| ScheduledEndTime | Scheduled End | datetime |  |  |  |  |
| ScheduledStartTime | Scheduled Start | datetime |  |  |  |  |
| ServiceAppointmentId | Service Appointment ID | string |  | 30 |  |  |
| ServiceTerritoryId | Territory ID | string |  | 30 |  |  |
| Status | Status | string |  | 30 |  |  |
| StatusCategory | Status Category | string |  | 30 |  |  |
| Subject | Subject | string |  | 80 |  |  |
| WorkTypeBlockTimeAfterAppointment | Work Type Post-Appointment Time Buffer | int | 9 |  |  |  |
| WorkTypeBlockTimeAfterUnit | Work Type Post-Appointment Time Buffer Unit | string |  | 30 |  |  |
| WorkTypeBlockTimeBeforeAppointment | Work Type Pre-Appointment Time Buffer | int | 9 |  |  |  |
| WorkTypeBlockTimeBeforeUnit | Work Type Pre-Appointment Time Buffer Unit | string |  | 30 |  |  |
| WorkTypeId | Work Type ID | string |  | 30 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
