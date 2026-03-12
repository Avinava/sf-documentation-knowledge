---
title: "Real-Time Event Monitoring Data Streaming"
domain: securityImplGuide
topic: real-time-event-monitoring-data-streaming
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:45.051Z
estimatedTokens: 1552
keywords: [Real-Time, Event, Monitoring, Data, Streaming, subscribe, standard, events, published, Salesforce, monitor, activity, org, external, system]
---

# Real-Time Event Monitoring Data Streaming

> Use Real-Time Event Monitoring to subscribe to standard events published by Salesforce
    to monitor activity in your org. You can subscribe to this data from an external data system of
    your choice using a Pub/Sub API client, or use event relays to send the real-time events to
    Amazon EventBridge.

# Real-Time Event Monitoring Data Streaming

Use Real-Time Event Monitoring to subscribe to standard events published by Salesforce to monitor activity in your org. You can subscribe to this data from an external data system of your choice using a Pub/Sub API client, or use event relays to send the real-time events to Amazon EventBridge.

| Available in both Salesforce Classic (not available in all orgs) and Lightning Experience. |
| --- |
| Available in: Enterprise, Unlimited, and Developer EditionsRequires Salesforce Shield or Salesforce Event Monitoring add-on subscriptions. |


Data is streamed using a publish-subscribe model. Salesforce publishes streaming data to an event subscription channel, and your app subscribes, or listens, to the event channel to get the data close to real time. Streaming events are retained for up to three days. Real-Time Event Monitoring’s streaming events don’t count against your Platform Events delivery allocation. Some system protection limits apply. For example, Salesforce delivers a maximum of 50 million real-time events per day.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=securityImplGuide)

#### Tip

To more efficiently obtain and process event data from three days ago or less, we recommend querying events from big objects instead of subscribing to past events in a stream.

To send real-time events to Amazon EventBridge, where you can store and process the events, use [event relays](https://help.salesforce.com/s/articleView?id=sf.ev_relay_intro.htm&type=5&language=en_US).

Here are some examples.
| Event Object | Use Case | Considerations |
| --- | --- | --- |
| ApiEventStream | Detect when a user queries sensitive data, such as patent records. | Object is available only in Real-Time Event Monitoring. |
| ApiAnomalyEvent | Track anomalies in how users make API calls. | Object is available only in Real-Time Event Monitoring. |
| BulkApiResultEvent | Track when a user downloads the results of a Bulk API or Bulk API 2.0 request. | Object is available only in Real-Time Event Monitoring. |
| ConcurLongRunApexErrEvent | Detect errors that occur when an org exceeds the concurrent long-running Apex limit. | Object is available only in Real-Time Event Monitoring. |
| CredentialStuffingEvent | Track when a user successfully logs into Salesforce during an identified credential stuffing attack. Credential stuffing refers to large-scale automated login requests using stolen user credentials. | Object is available only in Real-Time Event Monitoring. |
| FileEvent | Detects file-related events, such as when a user downloads a file. | Object is available only in Real-Time Event Monitoring. |
| LightningUriEventStream | Detect when a user creates, accesses, updates, or deletes a record containing sensitive data in Lightning Experience. | Object is available only in Real-Time Event Monitoring. |
| ListViewEventStream | Detect when a user accesses, updates, or exports list view data using Salesforce Classic, Lightning Experience, or the API. | Object is available only in Real-Time Event Monitoring. |
| LoginAsEventStream | Detect when a Salesforce admin logs in as another user and track the admin’s activities. | Object is available only in Real-Time Event Monitoring. |
| LoginEventStream | Detect when a user tries to log in under certain conditions—for example, from an unsupported browser or from an IP address that is outside of your corporate range. | Object is available only in Real-Time Event Monitoring. |
| LogoutEventStream | Detect when a user logs out of Salesforce by clicking Log Out in the Salesforce UI. | Object is available to all customers. |
| MobileEmailEvent | Track your users’ email activity in a Salesforce mobile app. | Object is available only in Real-Time Event Monitoring and Enhanced Mobile App Security. |
| MobileEnforcedPolicyEvent | Track enforcement of Enhanced Mobile Security policy events on a Salesforce mobile app. | Object is available only in Real-Time Event Monitoring and Enhanced Mobile App Security. |
| MobileScreenshotEvent | Track your users’ screenshots in a Salesforce mobile app. | Object is available only in Real-Time Event Monitoring and Enhanced Mobile App Security. |
| MobileTelephonyEvent | Track your users’ phone calls and text messages in a Salesforce mobile app. | Object is available only in Real-Time Event Monitoring and Enhanced Mobile App Security. |
| PermissionSetEvent | Detect permission assignment changes in permission sets and permission set groups. | Object is available only in Real-Time Event Monitoring. |
| ReportAnomalyEvent | Track anomalies in how users run or export reports. | Object is available only in Real-Time Event Monitoring. |
| ReportEventStream | Detect when a user creates, runs, updates, or exports a report that contains sensitive data. | Object is available only in Real-Time Event Monitoring. |
| SessionHijackingEvent | Track when unauthorized users gain ownership of a Salesforce user’s session with a stolen session identifier. | Object is available only in Real-Time Event Monitoring. |
| UriEventStream | Detect when a user creates, accesses, updates, or deletes a record containing sensitive data in Salesforce Classic. | Object is available only in Real-Time Event Monitoring |
For more information about building apps that listen to streaming data channels, see the [Pub/Sub API Developer Guide](https://developer.salesforce.com/docs/platform/pub-sub-api/overview).

For a quick start about subscribing to streaming events, see the [Java Quick Start for Publishing and Subscribing to Events](https://developer.salesforce.com/docs/platform/pub-sub-api/guide/qs-java-quick-start.html) in the Pub/Sub API Developer Guide. The quick start shows how to subscribe to a platform event using a Java client. Follow the steps and supply the subscription channel for a real-time event.

For reference documentation of the standard platform events and the corresponding big objects, see [Real-Time Event Monitoring Objects](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/platform_events_objects_monitoring.htm) in the Platform Events Developer Guide.
