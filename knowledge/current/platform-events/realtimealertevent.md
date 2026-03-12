---
title: "RealtimeAlertEvent"
domain: platform-events
topic: realtimealertevent
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:29.146Z
estimatedTokens: 461
keywords: [RealtimeAlertEvent, Notifies, subscribers, Amazon, CloudWatch, alarm, events, Service, Cloud, Voice, Connect, instance, API, version, 54.0]
---

# RealtimeAlertEvent

> Notifies subscribers of Amazon CloudWatch alarm events from your
         Service Cloud Voice Amazon Connect instance. This object is available in API version
      54.0 and later.

# RealtimeAlertEvent

Notifies subscribers of Amazon CloudWatch alarm events from your Service Cloud Voice Amazon Connect instance. This object is available in API version 54.0 and later.

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

/event/RealtimeAlertEvent

## Special Access Rules

Accessing this object requires Service Cloud Voice with Amazon Connect enabled.

## Event Delivery Allocation Enforced

Yes

## Fields

| Field | Details |
| --- | --- |
| Description | TypestringPropertiesNoneDescriptionRequired. Description of the alert fired. |
| EventDateTime | TypedatetimePropertiesNoneDescriptionDate and time when the alert occurred. For example: 2020-12-18 21:59:48. |
| Name | TypestringPropertiesNoneDescriptionRequired. Name of the alert fired. |
| Payload | TypestringPropertiesNoneDescriptionMore information and data associated with the alert. |
| Severity | TypestringPropertiesNoneDescriptionRequired. Severity of the triggered alarm. Possible values:CriticalWarningInformationWhen using Amazon CloudWatch with Service Cloud Voice, the following alarm states map to severity values:ALARM maps to CriticalINSUFFICIENT_DATA maps to WarningOK maps to Information |
| Source | TypestringPropertiesNoneDescriptionRequired. The source of the alert. For example, this value can be the service name: AWS Cloudwatch. |

## Usage

The following example shows how to process RealtimeAlert events. This Apex trigger example fires when a platform event message is published and creates a Chatter post on the admin profile with event details.

```

```

## Example

The code example displays as a Chatter post that contains the following:

```

```

## Code Examples

```
trigger RealtimeAlertEventTrigger on RealtimeAlertEvent (after insert) {
   Id profileId = [select Id from User where User.Profile.Name = 'System Administrator' limit 1].Id;
    for(RealtimeAlertEvent e : trigger.new) {        
       Feeditem Post = New Feeditem();
       Post.ParentId= profileId;
       Post.Body = 'Alert occurred in the service: ' + e.Source + '
' +
            'Name: ' + e.Description + '
' +
            'Severity: ' + e.EventDateTime + '
' +
            'Payload: ' + e.Payload + '
' +
            'EventDate: ' + e.EventDateTime + '
' +
            'Description: ' + e.Name + '
';
       insert Post;
    }
}
```

```
Alert occurred in the service: aws cloudwatch alarm
Name: alert description
Severity: 2021-11-05 11:11:11
Payload: payload
EventDate: 2021-11-05 11:11:11
Description: alert name
```
