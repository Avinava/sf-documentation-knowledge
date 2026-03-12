---
title: "LogoutEventStream"
domain: platform-events
topic: logouteventstream
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:28.959Z
estimatedTokens: 1165
keywords: [LogoutEventStream, Tracks, user, logout, event, records, successful, org’s, can’t, retrieve, SOQL, query, API, version, 41.0]
---

# LogoutEventStream

> Tracks user UI logout. A logout event records a successful user logout
			from your org’s UI. This object is read only, and you can’t retrieve it using a SOQL
			query. This object is available in API version 41.0 and later.

# LogoutEventStream

Tracks user UI logout. A logout event records a successful user logout from your org’s UI. This object is read only, and you can’t retrieve it using a SOQL query. This object is available in API version 41.0 and later.

When LogoutEventStream is enabled, Salesforce publishes logout events, and you can add an Apex trigger to subscribe to those events. You can then implement custom logic during logout. For example, you can revoke all refresh tokens for a user at logout.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_events)

#### Note

LogoutEventStream records logouts, not timeouts. Timeouts don't cause a LogoutEventStream object to be published. An exception is when a user is automatically logged out of the org after their session times out because the org has the **Force logout on session timeout** setting enabled. In this case, a logout event is recorded. However, if users close their browser during a session, regardless of whether the **Force logout on session timeout** setting is enabled, a logout event isn't recorded.

## Supported Calls

describeSObjects()

## Special Access Rules

As of Summer ’20 and later, only users with the Customize Application user permission can access this object.

## Supported Subscribers

| Subscriber | Supported? |
| --- | --- |
| Apex Triggers |  |
| Flows |  |
| Processes |  |
| Pub/Sub API |  |
| Streaming API (CometD) |  |

## Subscription Channel

/event/LogoutEventStream

## Event Delivery Allocation Enforced

No

## Fields

| Field Name | Details |
| --- | --- |
| EventDate | TypedatetimePropertiesNillableDescriptionRepresents when the event started. For example, 2020-01-20T19:12:26.965Z. Milliseconds are the most granular setting. |
| EventIdentifier | TypestringPropertiesNillableDescriptionThe unique ID of the event, which is shared with the corresponding storage object. For example, 0a4779b0-0da1-4619-a373-0a36991dff90. Use this field to correlate the event with its storage object. |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. This field is available in API version 52.0 and later. |
| LoginKey | TypestringPropertiesNillableDescriptionThe string that ties together all events in a given user’s login session. It starts with a login event and ends with either a logout event or the user session expiring. |
| RelatedEventIdentifier | TypestringPropertiesNillableDescriptionRepresents the EventIdentifier of the related event. |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
| SessionKey | TypestringPropertiesNillableDescriptionThe user’s unique session ID. You can use this value to identify all user events within a session. When a user logs out and logs in again, a new session is started. |
| SessionLevel | TypepicklistPropertiesNillable, Restricted picklistDescriptionIndicates the session-level security of the session that the user is logging out of for this event. Session-level security controls user access to features that support it, such as connected apps and reporting. Possible values are:HIGH_ASSURANCE—A high assurance session was used for resource access. For example, when the user tries to access a resource such as a connected app, report, or dashboard that requires a high-assurance session level.LOW—The user’s security level for the current session meets the lowest requirements.NoteThis low level is not available, nor used, in the Salesforce UI. User sessions through the UI are either standard or high assurance. You can set this level using the API, but users assigned this level experience unpredictable and reduced functionality in their Salesforce org.STANDARD—The user’s security level for the current session meets the Standard requirements set in the org’s Session Security Levels. |
| SourceIp | TypestringPropertiesNillableDescriptionThe source IP address of the client logging out. For example, 126.7.4.2. |
| UserId | TypereferencePropertiesNillableDescriptionRepresents the ID of the user associated with the logout event. |
| Username | TypestringPropertiesNillableDescriptionRepresents the username of the user associated with the logout event. |

## Usage

In this example, the subscriber inserts a custom logout event record during logout.

```

```

## Code Examples

```
trigger LogoutEventTrigger on LogoutEventStream (after insert) { 
  LogoutEventStream event = Trigger.new[0];
  LogoutEvent__c record = new LogoutEvent__c();
  record.EventIdentifier__c = event.EventIdentifier;
  record.UserId__c = event.UserId;
  record.Username__c = event.Username;
  record.EventDate__c = event.EventDate;
  record.RelatedEventIdentifier__c = event.RelatedEventIdentifier;
  record.SessionKey__c = event.SessionKey;
  record.LoginKey__c = event.LoginKey;
  insert(record);
}
```
