---
title: "Create or Clone Profiles"
domain: securityImplGuide
topic: create-or-clone-profiles
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:45.271Z
estimatedTokens: 453
keywords: [Clone, Profiles, custom, API, customize, fit, business’s, needs]
---

# Create or Clone Profiles

> Create custom profiles using the API, or clone existing profiles and customize them to
      fit your business’s needs.

# Create or Clone Profiles

Create custom profiles using the API, or clone existing profiles and customize them to fit your business’s needs.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Essentials, Professional, Enterprise, Performance, Unlimited, Developer, and Database.com Editions |
| Custom Profiles available in: Essentials, Professional, Enterprise, Performance, Unlimited, and Developer Editions |


| User Permissions Needed |
| --- |
| To create profiles: | Manage Profiles and Permission Sets |

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=securityImplGuide)

#### Tip

If you clone profiles to enable certain permissions or access settings, consider using permission sets. Because you can reuse smaller permission set building blocks, you can avoid creating dozens or even hundreds of profiles for each user and job function.

To create an empty custom profile without any base permissions included, use the Profile SOAP API object. On the Profile Setup page, you must first clone an existing profile to create a custom profile.

1.  To clone a profile, from Setup, in the Quick Find box, enter Profiles, and then select **Profiles**.
2.  In the Profiles list page, do one of the following:

    -   Click **New Profile**, then select an existing profile that’s similar to the one you want to create.
    -   If enhanced profile list views are enabled, click **Clone** next to a profile that’s similar to the one you want to create.
    -   Click the name of a profile that’s similar to the one you want to create, then in the profile page, click **Clone**.

    A new profile uses the same user license as the profile it was cloned from.

3.  Enter a profile name.
4.  Click **Save**.
