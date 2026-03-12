---
title: "Complete Prerequisites for Headless Identity"
domain: headless-identity
topic: complete-prerequisites-for-headless-identity
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:32.000Z
estimatedTokens: 1018
keywords: [Prerequisites, Headless, Identity, Cross, off, basic, setup, steps, Salesforce, Google]
---

# Complete Prerequisites for Headless Identity

> Cross off some basic setup steps in Salesforce and Google.

# Complete Prerequisites for Headless Identity

Cross off some basic setup steps in Salesforce and Google.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Enterprise, Unlimited, and Developer Editions |


In Salesforce, these prerequisites include creating a role to manage your users, setting up a demo profile, enabling Cross-Origin Resource Sharing (CORS), and setting up an account to contain your users. You must also enable the Authorization Code and Credentials Flow at an org-wide level so that you can set up headless login and registration.

You must also implement Google reCAPTCHA to get a reCAPTCHA token so that you can use in the Postman examples. For single-page apps, with reCAPTCHA, you can secure your flow without passing secret information, like an integration user’s access token, in any of your requests to Salesforce.

-   **[Create a Role to Manage Headless Identity Features](atlas.en-us.headless_identity.meta/headless_identity/headless_identity_create_role.htm)**
    For identity and access management, it’s important to define who can access what. Create a role to ensure that you have the right level of access to manage Headless Identity features.
-   **[Assign the Headless Identity Admin Role to Yourself](atlas.en-us.headless_identity.meta/headless_identity/headless_identity_assign_role.htm)**
    Assign the role that you created to your System Administrator user.
-   **[Set Up a Demo Profile for End Users](atlas.en-us.headless_identity.meta/headless_identity/headless_identity_create_profile.htm)**
    For Headless Identity, you use profiles to define how your end users access data in Salesforce. New users are automatically assigned to this profile when they register. Create a demo profile so that you can test your headless login, registration, forgot password, and single sign-on processes as an end user.
-   **[Set Up Cross-Origin Resource Sharing (CORS)](atlas.en-us.headless_identity.meta/headless_identity/headless_identity_cors.htm)**
    In production, to use Headless Identity features in a web app, you must enable Cross-Origin Resource Sharing (CORS) so that your app can communicate with Salesforce. This step isn’t necessary for the example implementation in this guide, so you can skip it for now. But if you want to learn how to set up CORS, here’s how it’s done.
-   **[Create an Account for End Users](atlas.en-us.headless_identity.meta/headless_identity/headless_identity_create_account.htm)**
    You must use an account to store information about your end users, including their contact records. For Headless Identity, you reference the account in your Apex registration handlers. When new users log in via an authentication provider or sign up directly through your site, they’re added as contacts.
-   **[Enable the Authorization Code and Credentials Flow](atlas.en-us.headless_identity.meta/headless_identity/headless_identity_enable_auth_code_creds_flow.htm)**
    The Authorization Code and Credentials Flow is the foundation of headless login and headless registration. Enable this flow at an org-wide level.
-   **[Implement reCAPTCHA on a Web App](atlas.en-us.headless_identity.meta/headless_identity/headless_identity_recaptcha.htm)**
    For the Headless Registration Flow and the Headless Forgot Password Flow, you must configure at least one of two security settings on the Experience Cloud Login & Registration page. These settings add requirements to the requests that your app sends to Headless Identity APIs. You can require your app to send an access token issued to an internal integration user. Or you can require your app to send a reCAPTCHA token. For single-page apps, because you can’t keep the integration user’s access token private in the browser, we recommend that you require your app to send a reCAPTCHA token instead. Requiring reCAPTCHA helps you filter out invalid requests, such as requests from bots. To work with the Headless Identity API Postman collection, you must have a valid reCAPTCHA token.

## Related Topics

- Create a Role to Manage Headless Identity Features (atlas.en-us.headless_identity.meta/headless_identity/headless_identity_create_role.htm)
- Assign the Headless Identity Admin Role to Yourself (atlas.en-us.headless_identity.meta/headless_identity/headless_identity_assign_role.htm)
- Set Up a Demo Profile for End Users (atlas.en-us.headless_identity.meta/headless_identity/headless_identity_create_profile.htm)
- Set Up Cross-Origin Resource Sharing (CORS) (atlas.en-us.headless_identity.meta/headless_identity/headless_identity_cors.htm)
- Create an Account for End Users (atlas.en-us.headless_identity.meta/headless_identity/headless_identity_create_account.htm)
- Enable the Authorization Code and Credentials Flow (atlas.en-us.headless_identity.meta/headless_identity/headless_identity_enable_auth_code_creds_flow.htm)
- Implement reCAPTCHA on a Web App (atlas.en-us.headless_identity.meta/headless_identity/headless_identity_recaptcha.htm)
