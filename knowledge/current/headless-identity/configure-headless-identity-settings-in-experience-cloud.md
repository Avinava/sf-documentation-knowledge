---
title: "Configure Headless Identity Settings in Experience Cloud"
domain: headless-identity
topic: configure-headless-identity-settings-in-experience-cloud
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:31.924Z
estimatedTokens: 1339
keywords: [Configure, Headless, Identity, Settings, Experience, Cloud, control, enablement, access, security, Registration, Flow, Forgot, Password, Login]
---

# Configure Headless Identity Settings in Experience Cloud

> You control enablement, access, and security for the Headless Registration Flow and the
  Headless Forgot Password Flow on the Experience Cloud Login & Registration page. For this
  example, configure settings to support headless identity for a single-page app.

# Configure Headless Identity Settings in Experience Cloud

You control enablement, access, and security for the Headless Registration Flow and the Headless Forgot Password Flow on the Experience Cloud Login & Registration page. For this example, configure settings to support headless identity for a single-page app.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Enterprise, Unlimited, and Developer Editions |


![Experience Cloud Login & Registration page](/docs/resources/img/en-us/260.0?doc_id=help%2Fbundle_identity%2Fimages%2Flogin_and_registration_page.png&folder=headless_identity)

The Login & Registration page is also where you configure identity features for users who interact with your Experience Cloud site directly. Most of the settings on this page, including settings for login, logout, password, and registration pages, affect the identity experiences for your site users.

The settings in the Headless Identity Configuration section are separate and affect how your app calls Headless Identity APIs via your site. Headless Identity Configuration settings don’t affect how users interact with your Experience Cloud site.

In general, only the settings in Headless Identity Configuration are relevant for setting up your implementation. There’s one exception, though. To create a native single sign-on (SSO) experience in your app, you must add the SSO provider to the Experience Cloud login page. During the flow, the browser is briefly redirected to the login page URL so that Salesforce can check to see if the SSO provider is enabled. The browser is then redirected to the provider. The redirection happens so quickly that the user never sees the Experience Cloud login page. The experience feels like headless SSO, even though it technically isn’t.

1.  Go to the Login & Registration page. From Setup, in the Quick Find box, enter Sites, and then select **All Sites**. Next to your site name, click **Workspaces**, select **Administration**, and then select **Login & Registration**.
2.  Add your SSO provider to the Experience Cloud login page. Under Login Page Setup, for login options, enable the Google IDP authentication provider you set up.
3.  Enable headless registration.
    1.  Select **Allow self-registration via the Headless Registration API**.

        Enabling this setting exposes other settings related to headless registration.

    2.  Select **Require reCAPTCHA to access this API**, and leave **Require authentication to access this API** deselected.

        These settings control whether you need extra information—either a reCAPTCHA token or an access token— in your initial POST request to Headless Registration API. When you configure headless registration, you must require either authentication or reCAPTCHA—you can’t save your settings without at least one of these settings turned on. For this example, which is focused on single-page apps, requiring authentication isn’t recommended. A single-page app submits the registration POST request via the browser, and it can’t keep an access token safe. So requiring reCAPTCHA is the way to go.

    3.  For Default Profile, select the Headless Demo profile you set up. This profile gets assigned to new users automatically.
    4.  For Registration Handler, click ![Lookup icon](/docs/resources/img/en-us/260.0?doc_id=help%2Fimages%2Flookup.png&folder=headless_identity), and then select your headless registration handler class.
    5.  For Run As, click ![Lookup icon](/docs/resources/img/en-us/260.0?doc_id=help%2Fimages%2Flookup.png&folder=headless_identity), and then select your admin user.

        This user runs the headless registration handler. They must be able to access the account that contains your end users, and they must be assigned to the Headless Identity Admin role that you created. For this example, you can select yourself as the Run As user to make testing easier. In production, select a user that isn’t tied to a real person. That way, you don’t experience service disruptions if someone leaves the company and their account is disabled.

4.  Enable headless password reset.
    1.  Select **Allow password reset via the Headless Forgot Password API**.
    2.  Select **Require reCAPTCHA to access this API**, and leave **Require authentication to access this API** deselected.

        These settings work the same way for headless password reset as they do for headless registration. Similarly, we recommend requiring reCAPTCHA and not authentication for this example.

    3.  For the maximum number of password reset attempts, keep the default of 5 attempts.
5.  Configure reCAPTCHA options.

    The reCAPTCHA options apply to Headless Registration API and Headless Forgot Password API.

    1.  For Secret Key, enter the secret key from your reCAPTCHA API key pair. You get this information from Google when you set up reCAPTCHA.
    2.  For Score Threshold, enter 0.7.

        The score threshold is the lowest value that you accept for the reCAPTCHA score issued by Google. This score helps you determine whether new registration requests are valid. Scores closer to 0 are more likely to be bots, while scores closer to 1 are more likely to be valid users. The minimum score threshold that Salesforce allows is 0.5.

6.  Save your settings.
