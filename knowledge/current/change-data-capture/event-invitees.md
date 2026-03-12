---
title: "Event Invitees"
domain: change-data-capture
topic: event-invitees
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:09.718Z
estimatedTokens: 456
keywords: [Event, Invitees, Change, events, generated, addition, calendar, record, Salesforce, user, invited, child, created, invitee, IsChild]
---

# Event Invitees

> Change events are generated for event invitees in addition to the calendar event
    record. When a Salesforce user is invited to a calendar event, a child calendar event record is
    created for the invitee. A child calendar event is an Event record with the IsChild field set to
    true and OwnerId set to the invitee’s user ID.

# Event Invitees

Change events are generated for event invitees in addition to the calendar event record. When a Salesforce user is invited to a calendar event, a child calendar event record is created for the invitee. A child calendar event is an Event record with the IsChild field set to true and OwnerId set to the invitee’s user ID.

A child calendar event isn’t created for an invitee who isn’t a Salesforce user, such as a contact, a lead, or a resource. For each invitee added, an EventRelation record is created to represent the relationship to the calendar event. In a recurring series, child calendar events are created for invitees in each occurrence.

For example, if a calendar event is created with two invitees, three calendar event records are created in Salesforce: one record for the calendar event, and two records for the invitees. The three records result in three change events being generated on the channel for the Event standard object. In addition, two EventRelation records are created and generate two change events on the channel for EventRelation.

## Example

These events are delivered to a Pub/Sub API client when creating a calendar event and inviting one user. The first change event is for the calendar event. The second change event is the child calendar event for the invitee, with IsChild set to true and OwnerID set to the invitee’s user ID. The third change event is for the EventRelation record representing the relationship between the invitee and the calendar event.

```

```

#### See Also

-   [*Object Reference for Salesforce and Force.com*: EventRelation](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_eventattendee.htm "Object Reference for Salesforce and Force.com: EventRelation - HTML (New Window)")

## Code Examples

```
// Change event generated for the calendar event record.
{
  "ChangeEventHeader": {
    "entityName": "Event",
    "recordIds": [
      "00UZM00000165Ps2AI"
    ],
    "changeType": "CREATE",
    "changeOrigin": "com/salesforce/api/soap/61.0;client=SfdcInternalAPI/",
    "transactionKey": "000a4b85-7abf-fb12-9d7f-d5d6987da21b",
    "sequenceNumber": 1,
    "commitTimestamp": 1714411236000,
    "commitNumber": 72780631358,
    "commitUser": "005ZM000000M6o1YAC",
    "nulledFields": [],
    "diffFields": [],
    "changedFields": []
  },
  "WhoId": null,
  "WhatId": null,
  "Subject": "Meeting with Jane",
  "Location": "San Francisco",
  "IsAllDayEvent": false,
  "ActivityDateTime": 1715104800000,
  "ActivityDate": 1715040000000,
  "DurationInMinutes": 60,
  "Description": "One-on-one meeting with Jane.",
  "AccountId": null,
  "OwnerId": "005ZM000000M6o1YAC",
  "Type": null,
  "IsPrivate": false,
  "ShowAs": "Busy",
  "IsChild": false,
  "IsGroupEvent": true,
  "GroupEventType": "1",
  "CreatedDate": 1714411236000,
  "CreatedById": "005ZM000000M6o1YAC",
  "LastModifiedDate": 1714411236000,
  "LastModifiedById": "005ZM000000M6o1YAC",
  "RecurrenceActivityId": null,
  "IsRecurrence": false,
  "RecurrenceStartDateTime": null,
  "RecurrenceEndDateOnly": null,
  "RecurrenceTimeZoneSidKey": null,
  "RecurrenceType": null,
  "RecurrenceInterval": null,
  "RecurrenceDayOfWeekMask": null,
  "RecurrenceDayOfMonth": null,
  "RecurrenceInstance": null,
  "RecurrenceMonthOfYear": null,
  "ReminderDateTime": null,
  "IsReminderSet": false,
  "IsRecurrence2Exclusion": false,
  "Recurrence2PatternText": null,
  "Recurrence2PatternVersion": null,
  "ActivityRecurrence2Id": null,
  "ActivityRecurrence2ExceptionId": null
}


// Change event generated for the child calendar event record for the invitee.
{
  "ChangeEventHeader": {
    "entityName": "Event",
    "recordIds": [
      "00UZM00000165Pt2AI"
    ],
    "changeType": "CREATE",
    "changeOrigin": "com/salesforce/api/soap/61.0;client=SfdcInternalAPI/",
    "transactionKey": "000a4b85-7abf-fb12-9d7f-d5d6987da21b",
    "sequenceNumber": 2,
    "commitTimestamp": 1714411237000,
    "commitNumber": 72780631358,
    "commitUser": "005ZM000000M6o1YAC",
    "nulledFields": [],
    "diffFields": [],
    "changedFields": []
  },
  "WhoId": null,
  "WhatId": null,
  "Subject": "Meeting with Jane",
  "Location": "San Francisco",
  "IsAllDayEvent": false,
  "ActivityDateTime": 1715104800000,
  "ActivityDate": 1715040000000,
  "DurationInMinutes": 60,
  "Description": "One-on-one meeting with Jane.",
  "AccountId": null,
  "OwnerId": "005ZM000000MJSoYAO",
  "Type": null,
  "IsPrivate": false,
  "ShowAs": "Busy",
  "IsChild": true,
  "IsGroupEvent": true,
  "GroupEventType": "1",
  "CreatedDate": 1714411237000,
  "CreatedById": "005ZM000000M6o1YAC",
  "LastModifiedDate": 1714411237000,
  "LastModifiedById": "005ZM000000M6o1YAC",
  "RecurrenceActivityId": null,
  "IsRecurrence": false,
  "RecurrenceStartDateTime": null,
  "RecurrenceEndDateOnly": null,
  "RecurrenceTimeZoneSidKey": null,
  "RecurrenceType": null,
  "RecurrenceInterval": null,
  "RecurrenceDayOfWeekMask": null,
  "RecurrenceDayOfMonth": null,
  "RecurrenceInstance": null,
  "RecurrenceMonthOfYear": null,
  "ReminderDateTime": null,
  "IsReminderSet": false,
  "IsRecurrence2Exclusion": false,
  "Recurrence2PatternText": null,
  "Recurrence2PatternVersion": null,
  "ActivityRecurrence2Id": null,
  "ActivityRecurrence2ExceptionId": null
}


// Change event generated for the EventRelation record representing the 
// relationship between the invitee and the calendar event.
{
  "ChangeEventHeader": {
    "entityName": "EventRelation",
    "recordIds": [
      "0REZM000000005o4AA"
    ],
    "changeType": "CREATE",
    "changeOrigin": "com/salesforce/api/soap/61.0;client=SfdcInternalAPI/",
    "transactionKey": "000a4b85-7abf-fb12-9d7f-d5d6987da21b",
    "sequenceNumber": 3,
    "commitTimestamp": 1714411237000,
    "commitNumber": 72780631358,
    "commitUser": "005ZM000000M6o1YAC",
    "nulledFields": [],
    "diffFields": [],
    "changedFields": []
  },
  "RelationId": "005ZM000000MJSoYAO",
  "EventId": "00UZM00000165Ps2AI",
  "IsWhat": false,
  "IsParent": false,
  "IsInvitee": true,
  "AccountId": null,
  "Status": "New",
  "RespondedDate": null,
  "Response": null,
  "CreatedDate": 1714411237000,
  "CreatedById": "005ZM000000M6o1YAC",
  "LastModifiedDate": 1714411237000,
  "LastModifiedById": "005ZM000000M6o1YAC"
}
```
