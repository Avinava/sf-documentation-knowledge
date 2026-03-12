---
title: "Implement reCAPTCHA on a Web App"
domain: headless-identity
topic: implement-recaptcha-on-a-web-app
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:32.011Z
estimatedTokens: 532
keywords: [Implement, reCAPTCHA, Web, App, Headless, Registration, Flow, Forgot, Password, configure, least, two, security, settings, Experience]
---

# Implement reCAPTCHA on a Web App

> For the Headless Registration Flow and the Headless Forgot Password Flow, you must
  configure at least one of two security settings on the Experience Cloud Login & Registration
  page. These settings add requirements to the requests that your app sends to Headless Identity
  APIs. You can require your app to send an access token issued to an internal integration user. Or
  you can require your app to send a reCAPTCHA token. For single-page apps, because you can’t keep
  the integration user’s access token private in the browser, we recommend that you require your app
  to send a reCAPTCHA token instead. Requiring reCAPTCHA helps you filter out invalid requests, such
  as requests from bots. To work with the Headless Identity API Postman collection, you must have a
  valid reCAPTCHA token.

# Implement reCAPTCHA on a Web App

For the Headless Registration Flow and the Headless Forgot Password Flow, you must configure at least one of two security settings on the Experience Cloud Login & Registration page. These settings add requirements to the requests that your app sends to Headless Identity APIs. You can require your app to send an access token issued to an internal integration user. Or you can require your app to send a reCAPTCHA token. For single-page apps, because you can’t keep the integration user’s access token private in the browser, we recommend that you require your app to send a reCAPTCHA token instead. Requiring reCAPTCHA helps you filter out invalid requests, such as requests from bots. To work with the Headless Identity API Postman collection, you must have a valid reCAPTCHA token.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Enterprise, Unlimited, and Developer Editions |


Though full-blown instructions for implementing reCAPTCHA are outside the scope of this guide, we show you where to go and what information you need. Salesforce supports reCAPTCHA v2 and reCAPTCHA v3 for Headless Identity. For this example, we use reCAPTCHA v3.

To get a reCAPTCHA token, you must set up and host reCAPTCHA on a web app. In production, you implement reCAPTCHA on your off-platform app.

For this example, if you don’t have a test web app in mind, you can create one using [Heroku](https://www.salesforce.com/editions-pricing/heroku/ "HTML (New Window)")—you can try a basic account for free.

To implement reCAPTCHA, see reCAPTCHA v3 in the reCAPTCHA Developer’s Guide at [https://developers.google.com/recaptcha/docs/v3](https://developers.google.com/recaptcha/docs/v3 "HTML (New Window)").

When you set up reCAPTCHA for this example, follow these guidelines.

-   For the domain, enter the URL for your web app, such as https://www.myapp.com.
-   For reCAPTCHA type, choose reCAPTCHA v3.
-   Note your API key pair, which you use later in this guide.
-   Ensure that you can get a reCAPTCHA token before you move on.
