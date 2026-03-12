---
title: "Create Logout Event Triggers"
domain: securityImplGuide
topic: create-logout-event-triggers
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:45.080Z
estimatedTokens: 322
keywords: [Logout, Event, Triggers, LogoutEventStream, org, Apex, respond, security, events, org’s]
---

# Create Logout Event Triggers

> If the LogoutEventStream object is available to your org, you can create Apex triggers
  that respond to security logout events from your org’s UI.

# Create Logout Event Triggers

If the LogoutEventStream object is available to your org, you can create Apex triggers that respond to security logout events from your org’s UI.

| Available in: All Editions |
| --- |


When LogoutEventStream is enabled, Salesforce publishes logout events when users log out from the UI. You can add an Apex trigger to subscribe to those events. You can then implement custom logic during logout. For example, you can revoke all refresh tokens for a user at logout.

Timeouts don't cause a LogoutEventStream object to be published. An exception is when a user is automatically logged out of the org after their session times out because the org has the **Force logout on session timeout** setting enabled. In this case, a logout event is recorded. However, if users close their browser during a session, regardless of whether the **Force logout on session timeout** setting is enabled, a logout event isn't recorded.

1.  From Setup, enter Event Manager in the Quick Find box, then select **Event Manager**.
2.  Next to Logout Event, click the dropdown, and select **Enable Streaming**.
3.  Create Apex triggers that subscribe to logout events.

## Example

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
