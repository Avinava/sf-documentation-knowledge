---
title: "View Events and Provide Feedback"
domain: securityImplGuide
topic: view-events-and-provide-feedback
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:44.901Z
estimatedTokens: 766
keywords: [View, Events, Provide, Feedback, recent, Threat, Detection, app, Salesforce, stored, their, corresponding, storage, objects, ReportAnomalyEventStore]
---

# View Events and Provide Feedback

> View recent or all Threat Detection events using the Threat Detection app in the
    Salesforce UI. The displayed events are stored in their corresponding storage objects:
    ReportAnomalyEventStore, SessionHijackingEventStore, and CredentialStuffingEventStore. Associate
    a feedback object with a particular event to record the severity of the threat, such as
    Malicious or Not a Threat.

# View Events and Provide Feedback

View recent or all Threat Detection events using the Threat Detection app in the Salesforce UI. The displayed events are stored in their corresponding storage objects: ReportAnomalyEventStore, SessionHijackingEventStore, and CredentialStuffingEventStore. Associate a feedback object with a particular event to record the severity of the threat, such as Malicious or Not a Threat.

| Available in both Salesforce Classic (not available in all orgs) and Lightning Experience. |
| --- |
| Available in: Enterprise, Unlimited, and Developer EditionsRequires Salesforce Shield or Salesforce Event Monitoring add-on subscriptions. |


| User Permissions Needed |  |
| --- | --- |
| To view the Threat Detection events: | View Threat Detection Events |

By default, the Threat Detection app isn’t visible in Salesforce. If necessary, make it visible as described in [Make the Threat Detection App Visible to Users](atlas.en-us.securityImplGuide.meta/securityImplGuide/real_time_em_td_ui_enable_app.htm "Before you can view the Threat Detection events in Salesforce and provide feedback, you must make the app visible to users. You also specify which of the four tabs are visible to different user profiles.").

1.  From App Launcher, click **Threat Detection**.

    ![App Launcher with Threat Detection app highlighted.](/docs/resources/img/en-us/260.0?doc_id=help%2Fbundle_setup%2Fimages%2Frtem_td_ui_app.png&folder=securityImplGuide)

2.  Click the tabs for list views of recent or all events stored in the GuestUserAnomalyEventStore, ReportAnomalyEventStore, SessionHijackingEventStore, ApiAnomalyEventStore, or CredentialStuffingEventStore objects.
3.  To view an event’s details, click its link. Information such as the date the event occurred, its score, and a summary of the event is displayed.

    Each type of event displays other details appropriate to the type of detected threat. For example, the Session Hijacking Event Store tab displays previous and current browser fingerprint information. The Report Anomaly Event Store tab displays the report ID associated with the detected threat.

    Click Related to view the associated feedback, if any.

4.  Click Provide Feedback to specify whether a specific detected threat is Malicious, Suspicious, Not a Threat, or Unknown.

    You can associate only one feedback object with each event. If you try to provide more than one feedback object, you get an error. If the severity of a threat changes after you provided feedback, edit the response.

    ![Guest User Anomaly Event details page with Provide Feedback button highlighted](/docs/resources/img/en-us/260.0?doc_id=help%2Fbundle_setup%2Fimages%2Frtem_td_ui_feedback.png&folder=securityImplGuide)


#### See Also

-   [*Platform Events Developer Guide*: Real-Time Event Monitoring Objects](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/platform_events_objects_monitoring.htm "Platform Events Developer Guide: Real-Time Event Monitoring
    Objects - HTML (New Window)")

## Related Topics

- Make the Threat Detection App Visible to Users (atlas.en-us.securityImplGuide.meta/securityImplGuide/real_time_em_td_ui_enable_app.htm)
