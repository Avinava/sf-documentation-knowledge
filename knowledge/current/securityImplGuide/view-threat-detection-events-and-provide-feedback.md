---
title: "View Threat Detection Events and Provide Feedback"
domain: securityImplGuide
topic: view-threat-detection-events-and-provide-feedback
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:44.893Z
estimatedTokens: 397
keywords: [View, Threat, Detection, Events, Provide, Feedback, Launch, app, detected, threats, occurred, Salesforce, org, include, anomalies]
---

# View Threat Detection Events and Provide Feedback

> Launch the Threat Detection app and view all the detected threats that occurred in your
    Salesforce org. Threats include anomalies in how users run reports, session hijacking attempts,
    and credential stuffing. Use the same app to easily provide feedback about the severity of a
    specific threat.

# View Threat Detection Events and Provide Feedback

Launch the Threat Detection app and view all the detected threats that occurred in your Salesforce org. Threats include anomalies in how users run reports, session hijacking attempts, and credential stuffing. Use the same app to easily provide feedback about the severity of a specific threat.

| Available in both Salesforce Classic (not available in all orgs) and Lightning Experience. |
| --- |
| Available in: Enterprise, Unlimited, and Developer EditionsRequires Salesforce Shield or Salesforce Event Monitoring add-on subscriptions. |


| User Permissions Needed |  |
| --- | --- |
| To view the Threat Detection events: | View Threat Detection Events |

-   **[Make the Threat Detection App Visible to Users](atlas.en-us.securityImplGuide.meta/securityImplGuide/real_time_em_td_ui_enable_app.htm)**
    Before you can view the Threat Detection events in Salesforce and provide feedback, you must make the app visible to users. You also specify which of the four tabs are visible to different user profiles.
-   **[View Events and Provide Feedback](atlas.en-us.securityImplGuide.meta/securityImplGuide/real_time_em_td_ui_view_and_feedback.htm)**
    View recent or all Threat Detection events using the Threat Detection app in the Salesforce UI. The displayed events are stored in their corresponding storage objects: ReportAnomalyEventStore, SessionHijackingEventStore, and CredentialStuffingEventStore. Associate a feedback object with a particular event to record the severity of the threat, such as Malicious or Not a Threat.

## Related Topics

- Make the Threat Detection App Visible to Users (atlas.en-us.securityImplGuide.meta/securityImplGuide/real_time_em_td_ui_enable_app.htm)
- View Events and Provide Feedback (atlas.en-us.securityImplGuide.meta/securityImplGuide/real_time_em_td_ui_view_and_feedback.htm)
