---
title: "Custom Profile Settings"
domain: pkg2-dev
topic: custom-profile-settings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:26.235Z
estimatedTokens: 503
keywords: [Custom, Profile, Settings, profiles, define, how, users, access, objects, data, they, app, specify, permissions, tab]
---

# Custom Profile Settings

> Create profiles to define how users access objects and data, and what they can do within
  your app. For example, profiles specify custom object permissions and the tab visibility for your
  app. When installing or upgrading your app, admins can associate your custom profiles with
  existing non-standard profiles. Permissions in your custom profile that are related to new
  components created as part of the install or upgrade are added to the existing profile. The
  security settings associated with standard objects and existing custom objects in an installer’s
  organization are unaffected.

# Custom Profile Settings

Create profiles to define how users access objects and data, and what they can do within your app. For example, profiles specify custom object permissions and the tab visibility for your app. When installing or upgrading your app, admins can associate your custom profiles with existing non-standard profiles. Permissions in your custom profile that are related to new components created as part of the install or upgrade are added to the existing profile. The security settings associated with standard objects and existing custom objects in an installer’s organization are unaffected.

Consider these tips when creating custom profiles for apps you want to publish.

-   Give each custom profile a name that identifies the profile as belonging to the app. For example, if you’re creating a Human Resources app named “HR2GO,” a good profile name would be ”HR2GO Approving Manager.”
-   If your custom profiles have a hierarchy, use a name that indicates the profile’s location in the hierarchy. For example, name a senior-level manager’s profile ”HR2GO Level 2 Approving Manager.”
-   Avoid custom profile names that can be interpreted differently in other organizations. For example, the profile name ”HR2GO Level 2 Approving Manager” is open to less interpretation than ”Sr. Manager.”
-   Provide a meaningful description for each profile. The description displays to the user installing your app.

Alternatively, you can use permission sets to maintain control of permission settings through the upgrade process. Permission sets contain a subset of profile access settings, including object permissions, field permissions, Apex class access, and Visualforce page access. These permissions are the same as those available on profiles. You can add a permission set as a component in a package.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg2_dev)

#### Note

In packages, assigned apps and tab settings aren’t included in permission set components.
