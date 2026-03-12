---
title: "Threat Detection"
domain: securityImplGuide
topic: threat-detection
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:44.917Z
estimatedTokens: 2009
keywords: [Threat, Detection, uses, statistical, machine, learning, detect, threats, Salesforce, org, identifies, customers, view, events, Event]
---

# Threat Detection

> Threat Detection uses statistical and machine learning methods to detect threats to your
    Salesforce org. While Salesforce identifies these threats for all Salesforce customers, you can
    view the information in the events with Threat Detection in Event Monitoring and investigate
    further if necessary.

# Threat Detection

Threat Detection uses statistical and machine learning methods to detect threats to your Salesforce org. While Salesforce identifies these threats for all Salesforce customers, you can view the information in the events with Threat Detection in Event Monitoring and investigate further if necessary.

| Available in both Salesforce Classic (not available in all orgs) and Lightning Experience. |
| --- |
| Available in: Enterprise, Performance, and Unlimited EditionsRequires Salesforce Shield or Salesforce Event Monitoring add-on subscriptions. |


Threat Detection identifies:

-   If a user session is hijacked
-   When a user successfully logs in during an identified credential stuffing attack. Credential stuffing occurs when large-scale automated login requests use stolen user credentials to gain access to Salesforce.
-   Anomalies in a user's report views or exports
-   Anomalies in how users make API calls

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=securityImplGuide)

#### Note

Not all third-party proxies pass network-related parameters, such as IP addresses, into Salesforce. Without network-related parameters, Salesforce doesn’t detect all threats to these proxies.

## Respond to Detected Threat Events

Use Threat Detection to plan and implement appropriate responses that keep your data safe. When we detect anomalous activity, the resulting Threat Detection events are compatible with transaction security policies and flows.

Use Transaction Security Policies to Monitor Threats

Create a transaction security policy on the Threat Detection events that generate email or in-app notifications when Salesforce detects a threat. After investigating the detected threat, consider creating a policy to control users’ behavior.

For example, you receive multiple ReportAnomalyEvents about a user who exported many more records of a report on Leads than usual. Because you created a transaction security policy on ReportAnomalyEventStore, you receive a notification each time this anomaly occurs. To further protect the Lead object, you can create a ReportEvent policy on the report to block users from exporting more than 10 rows.

Automate Responses with Platform Event-Triggered Flows

You can build flows to respond to anomalies detected on the ApiAnomalyEvent, CredentialStuffingEvent, ReportAnomalyEvent, and SessionHijackingEvent. For example, create flows that generate a case for a follow-up investigation, send an email to a security specialist, or deactivate an affected user pending further investigation.

Aggregate Detected Threats with Security Center

You can save time by aggregating information on detected threats across your entire Salesforce rollout in one place with the Threat Detection app in Security Center. For more information, see [Review Threat Detection Events](https://help.salesforce.com/s/articleView?id=sf.security_center_threat_detection_events.htm&type=5&language=en_US)

-   **[Session Hijacking](atlas.en-us.securityImplGuide.meta/securityImplGuide/real_time_em_threat_session.htm)**
    Session Hijacking is a customer-focused attack where attackers try to steal information from using a client’s access to a web application. In our case, this application is Salesforce. When a client successfully authenticates with Salesforce, they receive a session token. The attacker tries to hijack the client’s session by obtaining their session token.
-   **[Credential Stuffing](atlas.en-us.securityImplGuide.meta/securityImplGuide/real_time_em_threat_credstuff.htm)**
    Credential stuffing is a type of cyber attack that uses stolen account credentials. It’s also known as “password spraying” or “credential spills”. Attackers obtain large numbers of usernames and passwords through data breaches or other types of cyber attacks. They then use these credentials to gain unauthorized access to user accounts through large-scale automated login requests against a web application such as Salesforce.
-   **[Report Anomaly](atlas.en-us.securityImplGuide.meta/securityImplGuide/real_time_em_threat_reportanomaly.htm)**
    An *anomaly* is any user activity that is sufficiently different from the historical activity of the same user. We use the metadata in Salesforce Core application logs about report generation and surrounding activities to build a baseline model of the historical activity. We then compare any new report generation activity against this baseline to determine if the new activity is sufficiently different to be called an anomaly. We don't look at the actual data that a user interacts with— we look at *how* the user interacts with the data.
-   **[API Anomaly](atlas.en-us.securityImplGuide.meta/securityImplGuide/real_time_em_threat_apianomaly.htm)**
    An *anomaly* is any user activity that is sufficiently different from the historical activity of the same user. We use the metadata in Salesforce Core application logs about API generation and surrounding activities to build a baseline model of the historical activity. We then compare any new API generation activity against this baseline to determine if the new activity is sufficiently different to be called an anomaly. We don't look at the actual data that a user interacts with— we look at *how* the user interacts with the data.
-   **[Guest User Anomaly](atlas.en-us.securityImplGuide.meta/securityImplGuide/real_time_em_threat_detection_guest_user_anomaly.htm)**
    An *anomaly* is any user activity that is sufficiently different from the other users. We use the metadata in Salesforce Core application logs to build profiles representing guest users’ data access activities. This threat detection event identifies suspicious attempts by guest users to access organization data.
-   **[View Threat Detection Events and Provide Feedback](atlas.en-us.securityImplGuide.meta/securityImplGuide/real_time_em_td_ui.htm)**
    Launch the Threat Detection app and view all the detected threats that occurred in your Salesforce org. Threats include anomalies in how users run reports, session hijacking attempts, and credential stuffing. Use the same app to easily provide feedback about the severity of a specific threat.

#### See Also

-   [*Platform Events Developer Guide*: Real-Time Event Monitoring Objects](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/platform_events_objects_monitoring.htm "Platform Events Developer Guide: Real-Time Event Monitoring
    Objects - HTML (New Window)")

-   [*Platform Events Developer Guide*: Subscribe to Platform Event Messages with Flows](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/platform_events_subscribe_flow.htm "Platform Events Developer Guide: Subscribe to Platform Event Messages with
    Flows - HTML (New Window)")

-   [Enhanced Transaction Security](atlas.en-us.securityImplGuide.meta/securityImplGuide/enhanced_transaction_security_policy_types.htm "Enhanced Transaction Security is a framework that intercepts real-time events and applies appropriate actions to monitor and control user activity. Each transaction security policy has conditions that evaluate events and the real-time actions that are triggered after those conditions are met. The actions are Block, Multi-Factor Authentication, and Notifications. Before you build your policies, understand the available event types, policy conditions, and common use cases. Enhanced Transaction Security is included in Real-Time Event Monitoring.")

-   [How Salesforce Helps Protect You From Insider Threats](https://engineering.salesforce.com/how-salesforce-helps-protect-you-from-insider-threats-5f9ae8b0e55d "How Salesforce Helps Protect You From Insider Threats - HTML (New Window)")

-   [How Salesforce Helps Protect You From Credential Stuffers](https://engineering.salesforce.com/how-salesforce-helps-protect-you-from-credential-stuffers-ffd2a9fe0330 "How Salesforce Helps Protect You From Credential Stuffers - HTML (New Window)")

## Related Topics

- Session Hijacking (atlas.en-us.securityImplGuide.meta/securityImplGuide/real_time_em_threat_session.htm)
- Credential Stuffing (atlas.en-us.securityImplGuide.meta/securityImplGuide/real_time_em_threat_credstuff.htm)
- Report Anomaly (atlas.en-us.securityImplGuide.meta/securityImplGuide/real_time_em_threat_reportanomaly.htm)
- API Anomaly (atlas.en-us.securityImplGuide.meta/securityImplGuide/real_time_em_threat_apianomaly.htm)
- Guest User Anomaly (atlas.en-us.securityImplGuide.meta/securityImplGuide/real_time_em_threat_detection_guest_user_anomaly.htm)
- View Threat Detection Events and Provide Feedback (atlas.en-us.securityImplGuide.meta/securityImplGuide/real_time_em_td_ui.htm)
- Enhanced Transaction Security (atlas.en-us.securityImplGuide.meta/securityImplGuide/enhanced_transaction_security_policy_types.htm)
