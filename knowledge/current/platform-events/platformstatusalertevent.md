---
title: "PlatformStatusAlertEvent"
domain: platform-events
topic: platformstatusalertevent
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:29.111Z
estimatedTokens: 1074
keywords: [PlatformStatusAlertEvent, Notifies, subscribers, alerts, occur, processing, user, service, job, execution, API, version, 45.0, later, Calls]
---

# PlatformStatusAlertEvent

> Notifies subscribers of alerts that occur during the processing of a
         user request or service job execution. This object is available in API version 45.0
      and later.

# PlatformStatusAlertEvent

Notifies subscribers of alerts that occur during the processing of a user request or service job execution. This object is available in API version 45.0 and later.

For example, suppose that a formula is evaluated as part of processing user requests. A platform event message can be generated during the processing of a user request when an error is encountered from evaluating an invalid formula.

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

/event/PlatformStatusAlertEvent

## Special Access Rules

Accessing this object requires the Customize Application, Modify All Data, or Manage Next Best Action Strategies user permission.

## Event Delivery Allocation Enforced

Yes

## Fields

| Field | Details |
| --- | --- |
| ApiErrorCode | TypestringPropertiesNillableDescriptionThe API error code. |
| ComponentName | TypestringPropertiesNillableDescriptionName of the component in which the alert occurred. |
| EventDate | TypedatetimePropertiesNillableDescriptionDate and time when the event occurred. Example: 2018-12-18 21:59:48 |
| EventIdentifier | TypestringPropertiesNillableDescriptionUnique identifier of the event. This field is reserved for future use and is always null in API version 45.0. |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. This field is available in API version 52.0 and later. |
| ExtendErrorCode | TypestringPropertiesNillableDescriptionExtended error code which provides more details about the issue. |
| RelatedEventIdentifier | TypestringPropertiesNillableDescriptionEventIdentifier (uuid) of the related event. This field is reserved for future use and is always null in API version 45.0. |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
| RequestId | TypestringPropertiesNillableDescriptionThe unique ID of the service job that fired the event. It can be used to correlate the alert with logging information. |
| ServiceJobId | TypestringPropertiesNillableDescriptionService-specific job ID, if one exists. For Next Best Action, the service job ID is executionToken. This field can be used to correlate the alert with logging information. |
| ServiceName | TypestringPropertiesNillableDescriptionName of the service that triggered the alert. |
| StatusType | TypestringPropertiesNillableDescriptionStatus of the event. |
| SubComponentName | TypestringPropertiesNillableDescriptionName of the subcomponent where the alert occurs. |
| Subject | TypestringPropertiesNillableDescriptionShort description of the alert. |
| UserId | TypereferencePropertiesNillableDescriptionID of the user who caused the event. |
| Username | TypestringPropertiesNillableDescriptionUsername of the user who caused the event. |

## Usage

The following example shows how to process platform status alert events. Only internal services can publish these events. This Apex trigger example fires when a platform event message is published and creates a Chatter post on the admin profile with event details.

```

```

## Example

The code example ultimately displays as a Chatter post that contains the following:

Alert occurred in the service: Next Best Action Strategy

APIErrorCode: INVALID\_OPERATION

ComponentName: Strategy\_for\_error\_event\_demo

EventDate: 2018-12-18 21:59:48

EventIdentifier: null

ExtendedErrorCode: FORMULA\_EXPRESSION\_INVALID

RelatedEventIdentifier: null

ReplayId: 63

RequestId: TID:89715900005e40b69a

ServiceJobId: 1014fd4e-4a19-4910-be36-377a7f2f1b75

ServiceName: Next Best Action Strategy

StatusType: Error

SubComponentName: filter\_node1

Subject: Something went wrong with filter element 'filter\_node1': 'Unknown function ISBLANC. Check spelling.'

UserId: 005RM000001ZnzAYAS

Username: xxx@yyy.com

## Code Examples

```apex
trigger PlatformStatusAlertEventTrigger on PlatformStatusAlertEvent (after insert) {
    List<Feeditem> posts = new List<Feeditem>();
    Id profileId = [select Id from User where User.Profile.Name = 'System Administrator' limit 1].Id;
    
    for(PlatformStatusAlertEvent e : trigger.new) {        
       Feeditem post = New Feeditem();
       post.ParentId= profileId;
       post.Body = 'Alert occured in the service: ' + e.ServiceName + '
' +
            'APIErrorCode: ' + e.APIErrorCode + '
' +
            'ComponentName: ' + e.ComponentName + '
' +
            'EventDate: ' + e.EventDate + '
'+
            'EventIdentifier: ' + e.EventIdentifier + '
' +
            'ExtendedErrorCode: '+ e.ExtendedErrorCode + '
' +
            'RelatedEventIdentifier: ' + e.RelatedEventIdentifier + '
' +
            'ReplayId: ' + e.ReplayId + '
' +
            'RequestId: ' + e.RequestId + '
' +
            'ServiceJobId: ' + e.ServiceJobId + '
' +
            'ServiceName: ' + e.ServiceName + '
'+
            'StatusType: ' + e.StatusType + '
' +
            'SubComponentName: ' + e.SubComponentName + '
' +
            'Subject: '+ e.Subject + '
' +
            'UserId: ' + e.UserId + '
' +
            'Username: ' + e.Username + '
';
       posts.add(post);
    }
    if (posts.size() > 0) {
        insert(posts);
    }
}
```
