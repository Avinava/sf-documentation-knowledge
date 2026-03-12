---
title: "Set Up an Experience Cloud Site for Headless Identity"
domain: headless-identity
topic: set-up-an-experience-cloud-site-for-headless-identity
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:31.888Z
estimatedTokens: 572
keywords: [Experience, Cloud, Site, Headless, Identity, Because, APIs, exposed, creating, crucial, part, configuring]
---

# Set Up an Experience Cloud Site for Headless Identity

> Because Headless Identity APIs are exposed through Experience Cloud, creating a site is
    a crucial part of configuring Headless Identity.

# Set Up an Experience Cloud Site for Headless Identity

Because Headless Identity APIs are exposed through Experience Cloud, creating a site is a crucial part of configuring Headless Identity.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Enterprise, Unlimited, and Developer Editions |


Through your Experience Cloud site, you control enablement and access for headless flows, including your site membership. You also control security settings for the Headless Registration Flow and Headless Forgot Password Flow.

If you already have an Experience Cloud site, we still recommend creating a new one for this example.

-   **[Enable Digital Experiences and Create Your Site](atlas.en-us.headless_identity.meta/headless_identity/headless_identity_enable_digital_experiences.htm)**
    Enabling digital experiences is the first step to creating your Experience Cloud site.
-   **[Configure Experience Cloud Site Membership](atlas.en-us.headless_identity.meta/headless_identity/headless_identity_membership.htm)**
    Because your Experience Cloud site stores all your user information, you must add your end-user profile to the site’s membership.
-   **[Create a Headless Registration Handler](atlas.en-us.headless_identity.meta/headless_identity/headless_identity_create_headless_registration_handler.htm)**
    Create an Apex class for your registration handler. You reference this Apex class when you configure Experience Cloud settings on the Login & Registration page.
-   **[Configure Headless Identity Settings in Experience Cloud](atlas.en-us.headless_identity.meta/headless_identity/headless_identity_login_registration_settings.htm)**
    You control enablement, access, and security for the Headless Registration Flow and the Headless Forgot Password Flow on the Experience Cloud Login & Registration page. For this example, configure settings to support headless identity for a single-page app.
-   **[Activate Your Site](atlas.en-us.headless_identity.meta/headless_identity/headless_identity_activate_site.htm)**
    To complete your Experience Cloud site setup for headless identity, activate your site. This important but often overlooked step is required to expose Headless Identity API endpoints.

## Related Topics

- Enable Digital Experiences and Create Your Site (atlas.en-us.headless_identity.meta/headless_identity/headless_identity_enable_digital_experiences.htm)
- Configure Experience Cloud Site Membership (atlas.en-us.headless_identity.meta/headless_identity/headless_identity_membership.htm)
- Create a Headless Registration Handler (atlas.en-us.headless_identity.meta/headless_identity/headless_identity_create_headless_registration_handler.htm)
- Configure Headless Identity Settings in Experience Cloud (atlas.en-us.headless_identity.meta/headless_identity/headless_identity_login_registration_settings.htm)
- Activate Your Site (atlas.en-us.headless_identity.meta/headless_identity/headless_identity_activate_site.htm)
