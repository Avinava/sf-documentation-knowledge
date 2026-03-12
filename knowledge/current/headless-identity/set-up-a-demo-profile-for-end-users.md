---
title: "Set Up a Demo Profile for End Users"
domain: headless-identity
topic: set-up-a-demo-profile-for-end-users
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:31.874Z
estimatedTokens: 353
keywords: [Demo, Profile, End, Users, Headless, Identity, profiles, define, how, access, data, Salesforce, New, automatically, assigned]
---

# Set Up a Demo Profile for End Users

> For Headless Identity, you use profiles to define how your end users access data in
  Salesforce. New users are automatically assigned to this profile when they register. Create a demo
  profile so that you can test your headless login, registration, forgot password, and single
  sign-on processes as an end user.

# Set Up a Demo Profile for End Users

For Headless Identity, you use profiles to define how your end users access data in Salesforce. New users are automatically assigned to this profile when they register. Create a demo profile so that you can test your headless login, registration, forgot password, and single sign-on processes as an end user.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Enterprise, Unlimited, and Developer Editions |


Instead of creating a new profile, you can clone an existing standard profile to get all of its preconfigured permissions and access settings. You can then customize the profile as needed. Because you use an Experience Cloud site to call Headless Identity APIs and store user data, your end users must be able to access Experience Cloud. We recommend cloning only these standard profiles so that users can log in via an Experience Cloud site.

-   Customer Community User
-   Customer Community Plus User
-   External Identity User
-   Partner Community User
-   Partner User

For this example, we clone the Customer Community User profile.

1.  From Setup, in the Quick Find box, enter Profiles, and then select **Profiles**.
2.  From the profile list, select the checkbox next to Customer Community User.
3.  Click **Clone**.
4.  Name the profile Headless Demo Profile.
5.  Save your changes.
