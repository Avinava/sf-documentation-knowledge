---
title: "Edit Multiple Profiles with Profile List Views"
domain: securityImplGuide
topic: edit-multiple-profiles-with-profile-list-views
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:45.258Z
estimatedTokens: 847
keywords: [Edit, Multiple, Profiles, Profile, Views, enhanced, enabled, organization, change, permissions, directly, view, accessing, individual, pages]
---

# Edit Multiple Profiles with Profile List Views

> If enhanced profile list views are enabled for your organization, you can change
        permissions in up to 200 profiles directly from the list view, without accessing individual
        profile pages.

# Edit Multiple Profiles with Profile List Views

If enhanced profile list views are enabled for your organization, you can change permissions in up to 200 profiles directly from the list view, without accessing individual profile pages.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Enterprise, Performance, Unlimited, Developer, and Database.com Editions |


| User Permissions Needed |
| --- |
| To edit multiple profiles from the list view: | Manage Profiles and Permission SetsANDCustomize Application |

Editable cells display a pencil icon (![Editable Field](/docs/resources/img/en-us/260.0?doc_id=help%2Fresources-global%2F_corporate%2Fimages%2Fpencil.png&folder=securityImplGuide)) when you hover over the cell, while non-editable cells display a lock icon (![Uneditable Field](/docs/resources/img/en-us/260.0?doc_id=help%2Fresources-global%2F_corporate%2Fimages%2Flock.png&folder=securityImplGuide)). In some cases, such as in standard profiles, the pencil icon appears but the setting isn’t actually editable.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=securityImplGuide)

#### Warning

Use care when editing profiles with this method. Because profiles affect a user's fundamental access, making mass changes may have a widespread effect on users in your organization.

1.  Select or [create](https://help.salesforce.com/apex/HTViewHelpDoc?id=users_custom_profile_lists.htm&language=en_US) a list view that includes the profiles and permissions you want to edit.
2.  To edit multiple profiles, select the checkbox next to each profile you want to edit.

    If you select profiles on multiple pages, Salesforce remembers which profiles are selected.

3.  Double-click the permission you want to edit.

    For multiple profiles, double-click the permission in any of the selected profiles.

4.  In the dialog box that appears, enable or disable the permission.

    In some cases, changing a permission may also change other permissions. For example, if “Customize Application” and “View Setup and Configuration” are disabled and you enable “Customize Application,” then “View Setup and Configuration” is also enabled. In this case, the dialog box lists the affected permissions.

5.  To change multiple profiles, select **All n selected records** (where n is the number of profiles you selected).
6.  Click **Save**.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=securityImplGuide)

#### Note

-   For standard profiles, inline editing is available only for the “Single Sign-On” and “Affected By Divisions” permissions.
-   If you edit multiple profiles, only those profiles that support the permission you’re changing will change. For example, if you use inline editing to add “Modify All Data” to multiple profiles, but because of its user license the profile doesn't have “Modify All Data,” the profile won't change.

If any errors occur, an error message appears, listing each profile in error and a description of the error. Click the profile name to open the profile detail page. The profiles you've clicked appear in the error window in gray, strike-through text. To view the error console, you must have pop-up blockers disabled for the Salesforce domain.

Any changes you make are recorded in the setup audit trail.
