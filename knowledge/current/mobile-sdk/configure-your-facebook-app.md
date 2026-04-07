---
title: "Configure Your Facebook App"
domain: mobile-sdk
topic: configure-your-facebook-app
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:25.248Z
estimatedTokens: 230
keywords: [Configure, Facebook, App, Experience, Cloud, site, Salesforce, Auth, Provider, logins]
---

> Next, you need to configure the Experience Cloud site to use your Salesforce Auth.
    Provider for logins.

# Configure Your Facebook App

Next, you need to configure the Experience Cloud site to use your Salesforce Auth. Provider for logins.

Now that you’ve defined a Salesforce Auth. Provider, complete the authentication protocol by linking your Facebook app to your Auth. Provider. You provide the Salesforce login URL and the callback URL, which contains your Auth. Provider ID and the Auth. Provider’s URL suffix.

1.  In your Facebook app, go to **Settings**.
2.  In App Domains, enter MyDomainName.my.salesforce.com.
3.  Click **+Add Platform**.
4.  Select **Website**.
5.  For Site URL, enter your Auth. Provider’s callback URL.
6.  For **Contact Email**, enter your valid email address.
7.  In the left panel, set Status & Review to **Yes**. With this setting, all Facebook users can use their Facebook logins to create user accounts in your Experience Cloud site.
8.  Click **Save Changes**.
9.  Click **Confirm**.
