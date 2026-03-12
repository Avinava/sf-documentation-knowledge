---
title: "Enable Access to Real-Time Event Monitoring"
domain: securityImplGuide
topic: enable-access-to-real-time-event-monitoring
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:45.033Z
estimatedTokens: 426
keywords: [Enable, Access, Real-Time, Event, Monitoring, user, profiles, permission]
---

# Enable Access to Real-Time Event Monitoring

> You can set user access to Real-Time Event Monitoring through profiles and permission
    sets.

# Enable Access to Real-Time Event Monitoring

You can set user access to Real-Time Event Monitoring through profiles and permission sets.

| Available in both Salesforce Classic (not available in all orgs) and Lightning Experience. |
| --- |
| Available in: Enterprise, Unlimited, and Developer EditionsRequires Salesforce Shield or Salesforce Event Monitoring add-on subscriptions. |


| User Permissions Needed |
| --- |
| To view events: | View Real-Time Event Monitoring Data |
| To view transaction security policies: | View All Data |
| To create, edit, and manage transaction security policies: | Customize Application |

1.  Do one of the following.
    1.  From Setup, in the Quick Find box, enter Permission Sets, and then select **Permission Sets**.
    2.  From Setup, in the Quick Find box, enter Profiles, and then select **Profiles**.
2.  Select a permission set or profile.
3.  Depending on whether you’re using permission sets or profiles, do one of the following.

    1.  In permission sets or the enhanced profile user interface, select a permission. In the Find Settings dialog box, enter View Real-Time Event Monitoring Data. Click **Edit**, select the option, and click **Save**. Repeat these steps for the Customize Application permission.
    2.  In the original profile user interface, select a profile name, and then click **Edit**. Select **View Real-Time Event Monitoring Data**, **View All Data**, and **Customize Application** if you plan to create transaction security policies. Click **Save**.

    In addition to enabling Real-Time Event Monitoring, set user permissions to Real-Time Event objects. Real-Time Event Monitoring objects sometimes contain sensitive data.
