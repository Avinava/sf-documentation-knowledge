---
title: "Real-Time Event Monitoring"
domain: securityImplGuide
topic: real-time-event-monitoring
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:45.037Z
estimatedTokens: 1280
keywords: [Real-Time, Event, Monitoring, helps, monitor, detect, standard, events, Salesforce, near, store, data, auditing, reporting, purposes]
---

# Real-Time Event Monitoring

> Real-Time Event Monitoring helps you monitor and detect standard events
    in Salesforce in near real-time. You can store the event data for auditing or reporting
    purposes. You can create transaction security policies using Condition Builder—a
    point-and-click tool—or Apex code.

# Real-Time Event Monitoring

Real-Time Event Monitoring helps you monitor and detect standard events in Salesforce in near real-time. You can store the event data for auditing or reporting purposes. You can create transaction security policies using Condition Builder—a point-and-click tool—or Apex code.

| Available in both Salesforce Classic (not available in all orgs) and Lightning Experience. |
| --- |
| Available in: Enterprise, Unlimited, and Developer EditionsRequires Salesforce Shield or Salesforce Event Monitoring add-on subscriptions. |


With Real-Time Event Monitoring, gain greater insights into:

-   Who viewed what data and when
-   Where data was accessed
-   When a user changes a record using the UI
-   Who is logging in and from where
-   Who in your org is performing actions related to Platform Encryption administration
-   Which admins logged in as another user and the actions the admin took as that user
-   How long it takes a Lightning page to load
-   Threats detected in your org, such as anomalies in how users view or export reports, session hijacking attacks, or credential stuffing attacks

As a best practice, before creating transaction security policies, you can view or query events to determine appropriate thresholds for normal business usage.

-   **[Real-Time Event Monitoring Definitions](atlas.en-us.securityImplGuide.meta/securityImplGuide/real_time_event_monitoring_definitions.htm)**
    Keep these terms in mind when working with Real-Time Event Monitoring.
-   **[Considerations for Using Real-Time Event Monitoring](atlas.en-us.securityImplGuide.meta/securityImplGuide/real_time_event_monitoring_considerations.htm)**
    Keep the following considerations in mind as you set up and use Real-Time Event Monitoring.
-   **[Enable Access to Real-Time Event Monitoring](atlas.en-us.securityImplGuide.meta/securityImplGuide/real_time_event_monitoring_enable.htm)**
    You can set user access to Real-Time Event Monitoring through profiles and permission sets.
-   **[Stream and Store Event Data](atlas.en-us.securityImplGuide.meta/securityImplGuide/real_time_event_monitoring_details.htm)**
    Explore how you can use the objects in Real-Time Event Monitoring to stream and store event data.
-   **[Create Logout Event Triggers](atlas.en-us.securityImplGuide.meta/securityImplGuide/security_auth_create_logout_event_trigger.htm)**
    If the LogoutEventStream object is available to your org, you can create Apex triggers that respond to security logout events from your org’s UI.
-   **[How Chunking Works with ReportEvent and ListViewEvent](atlas.en-us.securityImplGuide.meta/securityImplGuide/real_time_event_monitoring_chunking.htm)**
    Chunking occurs when a report or list view execution returns many records and Salesforce splits the returned data into chunks.
-   **[Enhanced Transaction Security](atlas.en-us.securityImplGuide.meta/securityImplGuide/enhanced_transaction_security_policy_types.htm)**
    Enhanced Transaction Security is a framework that intercepts real-time events and applies appropriate actions to monitor and control user activity. Each transaction security policy has conditions that evaluate events and the real-time actions that are triggered after those conditions are met. The actions are Block, Multi-Factor Authentication, and Notifications. Before you build your policies, understand the available event types, policy conditions, and common use cases. Enhanced Transaction Security is included in Real-Time Event Monitoring.
-   **[Threat Detection](atlas.en-us.securityImplGuide.meta/securityImplGuide/real_time_em_threat_detection.htm)**
    Threat Detection uses statistical and machine learning methods to detect threats to your Salesforce org. While Salesforce identifies these threats for all Salesforce customers, you can view the information in the events with Threat Detection in Event Monitoring and investigate further if necessary.
-   **[Event Log File Browser](atlas.en-us.securityImplGuide.meta/securityImplGuide/real_time_em_elf_browser.htm)**
    Event Log File (ELF) Browser in Setup gives you quick access to event log files so you can explore and download all of your event log file data.
-   **[Store and Query Log Data with Event Log Objects](atlas.en-us.securityImplGuide.meta/securityImplGuide/real_time_em_event_log_objects.htm)**
    The Event Log Object framework surfaces event data stored in standard objects called Event Log Objects. They store critical event data that you can query via Salesforce Platform APIs. Event log objects contain many but not all events currently represented in the Event Log File framework. Unlike Event Log Files, which surface event data as CSV files, Event Log Objects allow querying of similar data via SOQL.

#### See Also

-   [*Salesforce Help*: What’s the Difference Between the Salesforce Events?](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/platform_events_intro_other_events.htm)

-   [*Learning Map*: Shield Learning Map](https://shieldlearningmap.com "Learning Map: Shield Learning Map - HTML (New Window)")

## Related Topics

- Real-Time Event Monitoring Definitions (atlas.en-us.securityImplGuide.meta/securityImplGuide/real_time_event_monitoring_definitions.htm)
- Considerations for Using Real-Time Event Monitoring (atlas.en-us.securityImplGuide.meta/securityImplGuide/real_time_event_monitoring_considerations.htm)
- Enable Access to Real-Time Event Monitoring (atlas.en-us.securityImplGuide.meta/securityImplGuide/real_time_event_monitoring_enable.htm)
- Stream and Store Event Data (atlas.en-us.securityImplGuide.meta/securityImplGuide/real_time_event_monitoring_details.htm)
- Create Logout Event Triggers (atlas.en-us.securityImplGuide.meta/securityImplGuide/security_auth_create_logout_event_trigger.htm)
- How Chunking Works with ReportEvent and ListViewEvent (atlas.en-us.securityImplGuide.meta/securityImplGuide/real_time_event_monitoring_chunking.htm)
- Enhanced Transaction Security (atlas.en-us.securityImplGuide.meta/securityImplGuide/enhanced_transaction_security_policy_types.htm)
- Threat Detection (atlas.en-us.securityImplGuide.meta/securityImplGuide/real_time_em_threat_detection.htm)
- Event Log File Browser (atlas.en-us.securityImplGuide.meta/securityImplGuide/real_time_em_elf_browser.htm)
- Store and Query Log Data with Event Log Objects (atlas.en-us.securityImplGuide.meta/securityImplGuide/real_time_em_event_log_objects.htm)
