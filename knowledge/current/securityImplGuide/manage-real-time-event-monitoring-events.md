---
title: "Manage Real-Time Event Monitoring Events"
domain: securityImplGuide
topic: manage-real-time-event-monitoring-events
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:44.765Z
estimatedTokens: 365
keywords: [Manage, Real-Time, Event, Monitoring, Events, streaming, storage, settings, declaratively, Manager, programmatically, Metadata, API, helps, monitor]
---

# Manage Real-Time Event Monitoring Events

> Manage streaming and storage settings for Real-Time Event Monitoring events
  declaratively with the Event Manager. You can also manage settings programmatically with the
  Metadata API. Real-Time Event Monitoring helps you monitor and detect standard events in
  Salesforce in near real-time. You can store the event data for auditing or reporting purposes. You
  can create transaction security policies using Condition Builder—a point-and-click
  tool—or Apex code.

# Manage Real-Time Event Monitoring Events

Manage streaming and storage settings for Real-Time Event Monitoring events declaratively with the Event Manager. You can also manage settings programmatically with the Metadata API. Real-Time Event Monitoring helps you monitor and detect standard events in Salesforce in near real-time. You can store the event data for auditing or reporting purposes. You can create transaction security policies using Condition Builder—a point-and-click tool—or Apex code.


| User Permissions Needed |
| --- |
| To update events in Event Manager: | Customize Application AND View Setup |

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=securityImplGuide)

#### Important

Viewing Real-Time Event Monitoring events requires Salesforce Shield or Salesforce Event Monitoring add-on subscriptions. You don’t need this add-on to view streaming logout events.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=securityImplGuide)

#### Note

Real-Time Event Monitoring objects sometimes contain sensitive data. Assign object permissions to Real-Time Events accordingly in profiles or permission sets.

1.  From Setup, in the Quick Find box, enter Events, then select **Event Manager**.
2.  Next to the event you want to enable or disable streaming for, click the dropdown menu.
3.  Select whether you want to enable or disable streaming or storing on the event.
