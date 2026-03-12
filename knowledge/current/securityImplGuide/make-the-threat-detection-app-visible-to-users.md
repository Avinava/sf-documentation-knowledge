---
title: "Make the Threat Detection App Visible to Users"
domain: securityImplGuide
topic: make-the-threat-detection-app-visible-to-users
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:44.898Z
estimatedTokens: 986
keywords: [Threat, Detection, App, Visible, Users, view, events, Salesforce, provide, feedback, specify, four, tabs, different, user]
---

# Make the Threat Detection App Visible to Users

> Before you can view the Threat Detection events in Salesforce and provide feedback, you
    must make the app visible to users. You also specify which of the four tabs are visible to
    different user profiles.

# Make the Threat Detection App Visible to Users

Before you can view the Threat Detection events in Salesforce and provide feedback, you must make the app visible to users. You also specify which of the four tabs are visible to different user profiles.

| Available in both Salesforce Classic (not available in all orgs) and Lightning Experience. |
| --- |
| Available in: Enterprise, Unlimited, and Developer EditionsRequires Salesforce Shield or Salesforce Event Monitoring add-on subscriptions. |


| User Permissions Needed |  |
| --- | --- |
| To view the Threat Detection events: | View Threat Detection Events |

1.  Use Event Manager to enable streaming and storage for the three Threat Detection events: ReportAnomalyEvent, SessionHijackingEvent, and CredentialStuffingEvent.
2.  Create a permission set that’s associated with the Salesforce license.
3.  Edit the System Permissions page of your permission set and enable the **View Threat Detection Events** permission.
4.  Assign the permission set to the user who administers the Threat Detection app.

    Salesforce recommends that you create a profile specifically for security administrators who are responsible for managing threat detections. For example, create a profile called Threat Detection Administrator. Then assign the permission set to a user with the Threat Detection Administrator profile.

5.  Edit the Tab Settings of each user profile that uses the Threat Detection app and specify the visibility of the four tabs. The four tabs are named Report Anomaly Event Store, Session Hijacking Event Store, Credential Stuffing Event Store, and Threat Detection Feedback.

    For example, system administrators usually access everything in the UI, so set the visibility of all four tabs to Default On for the System Administrator profile. If you created a Threat Detection Administrator profile, set the same visibility. If you don’t want standard users to view feedback, set the visibility of Threat Detection Feedback for the Standard User profile to Tab Hidden.

6.  In Setup, navigate to the Lightning Experience App Manager by entering App Manager in the quick search box.
7.  Edit the Threat Detection app by selecting **Edit** in the dropdown box to the right of the app.

    ![Lightning Experience App Manager with Threat Detection app highlighted](/docs/resources/img/en-us/260.0?doc_id=help%2Fbundle_setup%2Fimages%2Frtem_td_ui_leap.png&folder=securityImplGuide)

8.  In the Assign to Profiles section, select the profiles for which the Threat Detection app is visible.

    ![Assign to Profiles section of the Threat Detection app in the App Manager, with System Administrator, Threat Detection Administrator, and Standard User selected in the Visibility column.](/docs/resources/img/en-us/260.0?doc_id=help%2Fbundle_setup%2Fimages%2Frtem_td_ui_leap_assign_profiles.png&folder=securityImplGuide)

9.  Save your changes.

The Threat Detection app is now visible to selected users.

#### See Also

-   [*Salesforce Help*: Monitor Streaming Events with Event Manager](https://help.salesforce.com/articleView?id=event_monitoring_monitor_events_with_event_manager.htm&language=en_US "Salesforce Help: Monitor Streaming Events with Event Manager - HTML (New Window)")

-   [*Salesforce Help*: Permission Sets](https://help.salesforce.com/articleView?id=perm_sets_overview.htm&language=en_US "Salesforce Help: Permission Sets - HTML (New Window)")

-   [*Salesforce Help*: App and System Settings in Permission Sets](https://help.salesforce.com/articleView?id=perm_sets_about_app_and_system.htm&language=en_US "Salesforce Help: App and System Settings in Permission Sets - HTML (New Window)")

-   [*Salesforce Help*: View and Edit Tab Settings in Permission Sets and Profiles](https://help.salesforce.com/articleView?id=users_tab_visibility.htm&language=en_US "Salesforce Help: View and Edit Tab Settings in Permission Sets and
    Profiles - HTML (New Window)")
