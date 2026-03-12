---
title: "Configure a Google Authentication Provider"
domain: headless-identity
topic: configure-a-google-authentication-provider
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:31.849Z
estimatedTokens: 422
keywords: [Configure, Google, Authentication, Provider, users, log]
---

# Configure a Google Authentication Provider

> For this example, configure a Google authentication provider so that users can log in
  with Google.

# Configure a Google Authentication Provider

For this example, configure a Google authentication provider so that users can log in with Google.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Enterprise, Unlimited, and Developer Editions |


Authentication providers require you to use an app on the external identity provider to communicate with Salesforce. You can either set up an app yourself or use the default global app provided by Salesforce. In production, we recommend that you create your own app. For testing and for this example, you can use the global app, so you’re only required to fill in a few fields. Salesforce handles the rest.

1.  From Setup, in the Quick Find box, enter Auth, and then select **Auth. Providers**.
2.  Click **New**.
3.  From the Provider Type dropdown, select **Google**.
4.  For the name, enter Google IDP.
5.  Ensure that the URL suffix is Google\_IDP.
6.  For Registration Handler, click ![Lookup icon](/docs/resources/img/en-us/260.0?doc_id=help%2Fimages%2Flookup.png&folder=headless_identity), and then search for the name of the registration handler Apex class that you created.
7.  For Execute Registration As, click ![Lookup icon](/docs/resources/img/en-us/260.0?doc_id=help%2Fimages%2Flookup.png&folder=headless_identity), and then search for a user to run the registration handler Apex class. This user must have the Manage Users permission. For this example, you can use your admin user.
8.  Leave the rest of the values blank, and save your changes.

    In production, when you set up your own app on the third-party SSO provider, you must fill in these fields.
