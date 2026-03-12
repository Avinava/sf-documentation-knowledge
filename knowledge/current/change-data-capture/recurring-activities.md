---
title: "Recurring Activities"
domain: change-data-capture
topic: recurring-activities
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:09.720Z
estimatedTokens: 980
keywords: [Recurring, Activities, activity, series, record, tracked, change, event, occurrence, individual]
---

# Recurring Activities

> The activity series record is tracked in a single change event. Each occurrence in the
    series is tracked by an individual change event.

# Recurring Activities

The activity series record is tracked in a single change event. Each occurrence in the series is tracked by an individual change event.

## Example

These two change events are delivered to a Pub/Sub API client when creating a recurring calendar event. The first change event is for the event series record, which represents the recurrence pattern, with GroupEventType set to 3. The second change event is for the first occurrence. The ActivityDateTime and ActivityDate are in Epoch time. The other occurrences are omitted in this example.

// Change event generated for the event series record. { "ChangeEventHeader": { "entityName": "Event", "recordIds": \[ "00UZM000000wuBw2AI" \], "changeType": "CREATE", "changeOrigin": "com/salesforce/api/soap/61.0;client=SfdcInternalAPI/", "transactionKey": "000a48c7-f73c-5d0b-7650-123ab3a20e70", "sequenceNumber": 1, "commitTimestamp": 1714408223000, "commitNumber": 72779532308, "commitUser": "005ZM000000M6o1YAC", "nulledFields": \[\], "diffFields": \[\], "changedFields": \[\] }, "WhoId": null, "WhatId": null, "Subject": "Product Planning", "Location": "San Francisco", "IsAllDayEvent": false, "ActivityDateTime": 1715014800000, "ActivityDate": 1714953600000, "DurationInMinutes": 60, "Description": "Let's meet to discuss product requirements.", "AccountId": null, "OwnerId": "005ZM000000M6o1YAC", "Type": null, "IsPrivate": false, "ShowAs": "Busy", "IsChild": false, "IsGroupEvent": false, "GroupEventType": "3", "CreatedDate": 1714408223000, "CreatedById": "005ZM000000M6o1YAC", "LastModifiedDate": 1714408223000, "LastModifiedById": "005ZM000000M6o1YAC", "RecurrenceActivityId": null, "IsRecurrence": false, "RecurrenceStartDateTime": null, "RecurrenceEndDateOnly": null, "RecurrenceTimeZoneSidKey": null, "RecurrenceType": null, "RecurrenceInterval": null, "RecurrenceDayOfWeekMask": null, "RecurrenceDayOfMonth": null, "RecurrenceInstance": null, "RecurrenceMonthOfYear": null, "ReminderDateTime": null, "IsReminderSet": false, "IsRecurrence2Exclusion": false, "Recurrence2PatternText": "RRULE:FREQ=WEEKLY;BYDAY=MO;WKST=SU;INTERVAL=1;COUNT=13", "Recurrence2PatternVersion": "1", "ActivityRecurrence2Id": "828ZM0000000001YAA", "ActivityRecurrence2ExceptionId": null } // Change event generated for the first occurrence. { "ChangeEventHeader": { "entityName": "Event", "recordIds": \[ "00UZM000000wuBx2AI" \], "changeType": "CREATE", "changeOrigin": "com/salesforce/api/soap/61.0;client=SfdcInternalAPI/", "transactionKey": "000a48c7-f73c-5d0b-7650-123ab3a20e70", "sequenceNumber": 2, "commitTimestamp": 1714408224000, "commitNumber": 72779532308, "commitUser": "005ZM000000M6o1YAC", "nulledFields": \[\], "diffFields": \[\], "changedFields": \[\] }, "WhoId": null, "WhatId": null, "Subject": "Product Planning", "Location": "San Francisco", "IsAllDayEvent": false, "ActivityDateTime": 1715014800000, "ActivityDate": 1714953600000, "DurationInMinutes": 60, "Description": "Let's meet to discuss product requirements.", "AccountId": null, "OwnerId": "005ZM000000M6o1YAC", "Type": null, "IsPrivate": false, "ShowAs": "Busy", "IsChild": false, "IsGroupEvent": false, "GroupEventType": "0", "CreatedDate": 1714408224000, "CreatedById": "005ZM000000M6o1YAC", "LastModifiedDate": 1714408224000, "LastModifiedById": "005ZM000000M6o1YAC", "RecurrenceActivityId": null, "IsRecurrence": false, "RecurrenceStartDateTime": null, "RecurrenceEndDateOnly": null, "RecurrenceTimeZoneSidKey": null, "RecurrenceType": null, "RecurrenceInterval": null, "RecurrenceDayOfWeekMask": null, "RecurrenceDayOfMonth": null, "RecurrenceInstance": null, "RecurrenceMonthOfYear": null, "ReminderDateTime": null, "IsReminderSet": false, "IsRecurrence2Exclusion": false, "Recurrence2PatternText": "RRULE:FREQ=WEEKLY;BYDAY=MO;WKST=SU;INTERVAL=1;COUNT=13", "Recurrence2PatternVersion": "1", "ActivityRecurrence2Id": "828ZM0000000001YAA", "ActivityRecurrence2ExceptionId": null }
