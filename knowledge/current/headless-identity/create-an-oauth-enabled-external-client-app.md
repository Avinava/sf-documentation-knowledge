---
title: "Create an OAuth-Enabled External Client App"
domain: headless-identity
topic: create-an-oauth-enabled-external-client-app
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:31.866Z
estimatedTokens: 502
keywords: [OAuth-Enabled, External, Client, App, headless, identity, add, scopes, enable, Authorization, Code, Credentials, flow, level]
---

# Create an OAuth-Enabled External Client App

> Create your external client app for headless identity, add the required scopes, and
    enable the Authorization Code and Credentials flow at the app level.

# Create an OAuth-Enabled External Client App

Create your external client app for headless identity, add the required scopes, and enable the Authorization Code and Credentials flow at the app level.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Enterprise, Unlimited, and Developer Editions |


1.  [Create an external client app](https://www.passkeycentral.org/introduction-to-passkeys/passkey-security) and set the distribution state to Local.
2.  Under API (Enable OAuth Settings), select **Enable OAuth Settings**.
3.  For Callback URL, enter https://MyExperienceCloudSite.my.site.com/services/oauth2/echo, where https://MyExperienceCloudSite.my.site.com is your Experience Cloud site domain.

    This URL points to the Salesforce OAuth 2.0 echo endpoint on your Experience Cloud site. The echo endpoint handles the code extraction step for headless login and headless registration, which saves you the work of writing and hosting your own code extraction endpoint. It returns the authorization code and other parameters from the 302 redirect as a JSON object that you can easily parse.

4.  For Selected OAuth Scopes, add the **Manage user data via APIs (api)** and **Access unique user identifiers (openid)** scopes
5.  For security, deselect these settings.

    -   **Require Secret for Web Server Flow**
    -   **Require Secret for Refresh Token Flow**

    Because this example is focused on single-page apps, which can’t keep information private, you don't want to send the app's consumer secret in HTTP requests.

6.  Select **Enable Code and Credential Flow**.

    Enabling the flow exposes another setting to require user credentials in the POST body of your authorization request. Leave this setting deselected—again, your app can’t keep this information secret.

7.  Save your external client app settings.

Now that you have an OAuth-enabled external client app, you can get your consumer key and consumer secret.
