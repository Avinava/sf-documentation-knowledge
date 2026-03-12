---
title: "Set Up Cross-Origin Resource Sharing (CORS)"
domain: headless-identity
topic: set-up-cross-origin-resource-sharing-cors
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:31.859Z
estimatedTokens: 339
keywords: [Cross-Origin, Resource, Sharing, CORS, production, Headless, Identity, features, web, app, enable, communicate, Salesforce, step, isn’t]
---

# Set Up Cross-Origin Resource Sharing (CORS)

> In production, to use Headless Identity features in a web app, you must enable
  Cross-Origin Resource Sharing (CORS) so that your app can communicate with Salesforce. This step
  isn’t necessary for the example implementation in this guide, so you can skip it for now. But if
  you want to learn how to set up CORS, here’s how it’s done.

# Set Up Cross-Origin Resource Sharing (CORS)

In production, to use Headless Identity features in a web app, you must enable Cross-Origin Resource Sharing (CORS) so that your app can communicate with Salesforce. This step isn’t necessary for the example implementation in this guide, so you can skip it for now. But if you want to learn how to set up CORS, here’s how it’s done.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Enterprise, Unlimited, and Developer Editions |


| User Permissions Needed |
| --- |
| To create, read, update, and delete: | Modify All Data |

In production, you set up CORS using the domain of your off-platform app. For this example implementation, if you don’t have a test app in mind, you can create one using [Heroku](https://www.salesforce.com/editions-pricing/heroku/ "HTML (New Window)")—you can try a basic account for free. Later in this guide, you can use the same app when you implement reCAPTCHA.

1.  From Setup, in the Quick Find box, enter CORS, and then select **CORS**.
2.  For Allowed Origins List, click **New**.
3.  Enter a URL pattern that can identify your web app. For example, if your app is hosted on myapp.com, you enter https://www.myapp.com.
4.  Save your changes.

    Your web app can now request resources from Salesforce.
