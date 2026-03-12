---
title: "View and Edit Login Hours in Profiles"
domain: securityImplGuide
topic: view-and-edit-login-hours-in-profiles
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:44.794Z
estimatedTokens: 497
keywords: [View, Edit, Login, Hours, Profiles, Specify, users, log, user, profile]
---

# View and Edit Login Hours in Profiles

> Specify the hours when users can log in based on the user profile.

# View and Edit Login Hours in Profiles

Specify the hours when users can log in based on the user profile.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Enterprise, Performance, Unlimited, Developer, and Database.com Editions |


| User Permissions Needed |
| --- |
| To set login hours: | Manage Profiles and Permission Sets |

1.  From Setup, in the Quick Find box, enter Profiles, and then select **Profiles**.
2.  Select a profile.
3.  Depending on which user interface you're using, do one of the following:
    -   In the enhanced profile user interface, click **Login Hours**, and then click **Edit**.
    -   In the original profile user interface, scroll down to the Login Hours related list, and then click **Edit**.
4.  Set the days and hours when users with this profile can log in to the org.

    To let users log in at any time, click **Clear all times**. To prohibit users from logging in on a specific day, set Start Time to **12 AM** and End Time to **12 AM**.

    If users are logged in when their login hours end, they can continue to view their current page, but they can’t take any further action.

5.  Click **Save**.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=securityImplGuide)

#### Note

The first time login hours are set for a profile, the hours are based on the org’s default time zone as specified on the Company Information page in Setup. After that, changes to the org’s default time zone on the Company Information page don’t affect the time zone for the profile’s login hours. The profile login hours remain the same, even when a user is in a different time zone or the org’s default time zone changes.

Depending on whether you’re viewing or editing login hours, the hours appear differently. On the profile detail page, hours appear in your specified time zone. On the Login Hours edit page, the hours appear in the org’s default time zone.
