---
title: "Configure External Client App Policies"
domain: headless-identity
topic: configure-external-client-app-policies
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:31.855Z
estimatedTokens: 308
keywords: [Configure, External, Client, App, Policies, standard, OAuth, flow, users, often, approval, they, confirm, allowed, access]
---

# Configure External Client App Policies

> In a standard OAuth flow, users often see an approval page where they confirm that an
  external client app is allowed to access their Salesforce data. With headless identity flows, you
  don’t want to show users a Salesforce approval page. To preapprove access, configure OAuth
  policies on your external client app.

# Configure External Client App Policies

In a standard OAuth flow, users often see an approval page where they confirm that an external client app is allowed to access their Salesforce data. With headless identity flows, you don’t want to show users a Salesforce approval page. To preapprove access, configure OAuth policies on your external client app.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Enterprise, Unlimited, and Developer Editions |


1.  Go to your external client app policy page.
    1.  From Setup, in the Quick Find box, enter App, and then select **App Manager**.
    2.  Next to your app, click ![External client app edit dropdown arrow](/docs/resources/img/en-us/260.0?doc_id=help%2Fbundle_identity%2Fimages%2Fconnectedappdropdown.png&folder=headless_identity), and then select **Edit Policies**.
2.  Click **Edit Policies**.
3.  Under OAuth Policies, set the Permitted Users policy to **Admin approved users are pre-authorized**.
4.  Save the policy change.
5.  On the external client app policy page, scroll down to and select **Manage Profiles**.
6.  Select the headless demo profile that you created.
7.  Save the policy change.
