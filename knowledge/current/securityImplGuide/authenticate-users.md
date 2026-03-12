---
title: "Authenticate Users"
domain: securityImplGuide
topic: authenticate-users
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:45.213Z
estimatedTokens: 979
keywords: [Authenticate, Users, Authentication, means, preventing, unauthorized, access, organization, data, making, sure, logged, user, they, say]
---

# Authenticate Users

> Authentication means preventing unauthorized access to your organization or its data
            by making sure each logged in user is who they say they are.

# Authenticate Users

Authentication means preventing unauthorized access to your organization or its data by making sure each logged in user is who they say they are.

-   **[Multi-Factor Authentication](atlas.en-us.securityImplGuide.meta/securityImplGuide/mfa_pointer.htm)**
    Multi-factor authentication (MFA) is a secure authentication method that requires users to prove their identity by supplying two or more pieces of evidence (or factors) when they log in. One factor is something the user knows, such as their username and password. Other factors include something the user has, such as an authenticator app or security key. By tying user access to multiple types of factors, MFA makes it much harder for common threats like phishing attacks and account takeovers to succeed.
-   **[Single Sign-On](atlas.en-us.securityImplGuide.meta/securityImplGuide/single_signon_pointer.htm)**
    Single sign-on (SSO) is an authentication method that enables users to access multiple applications with one login and one set of credentials. For example, after users log in to your org, they can automatically access all apps from the App Launcher. You can set up your Salesforce org to trust a third-party identity provider to authenticate users. Or you can configure a third-party app to rely on your org for authentication.
-   **[Custom Login Flows](atlas.en-us.securityImplGuide.meta/securityImplGuide/custom_login_flows_pointer.htm)**
    A login flow directs users through a login process before they access your Salesforce org or Experience Cloud site. You can use a login flow to control the business processes that your users follow when they log in to Salesforce. After Salesforce authenticates a user, the login flow directs the user through a process such as enforcing strong authentication or collecting user information. When users complete the login flow successfully, they’re redirected to their Salesforce org or site. If unsuccessful, the flow can log out users immediately.
-   **[Connected Apps](atlas.en-us.securityImplGuide.meta/securityImplGuide/connected_apps.htm)**
    A connected app is a framework that enables an external application to integrate with Salesforce using APIs and standard protocols, such as SAML, OAuth, and OpenID Connect. Connected apps use these protocols to authenticate, authorize, and provide single sign-on (SSO) for external apps. The external apps that are integrated with Salesforce can run on the customer success platform, other platforms, devices, or SaaS subscriptions. For example, when you log in to your Salesforce mobile app and see your data from your Salesforce org, you’re using a connected app.
-   **[Manage User Passwords](atlas.en-us.securityImplGuide.meta/securityImplGuide/manage_user_passwords_pointer.htm)**
    Salesforce provides each of your users with a unique username and password that they enter at each login. As an admin, you can configure several settings to ensure that your users' passwords are strong and secure.
-   **[Device Activation](atlas.en-us.securityImplGuide.meta/securityImplGuide/device_activation_pointer.htm)**
    With device activation, Salesforce challenges users to verify their identity when they log in from an unrecognized browser or device or from an IP address outside of a trusted range. By adding extra verification to unfamiliar login attempts, device activation keeps your orgs and Experience Cloud sites secure.
-   **[Session Security](atlas.en-us.securityImplGuide.meta/securityImplGuide/session_settings_pointer.htm)**
    After logging in, a user establishes a session with the platform. Use session security to limit exposure to your network when a user leaves the computer unattended while still logged in. Session security also limits the risk of internal attacks such as when one employee tries to use another employee’s session. Choose from several session settings to control session behavior.

## Related Topics

- Multi-Factor Authentication (atlas.en-us.securityImplGuide.meta/securityImplGuide/mfa_pointer.htm)
- Single Sign-On (atlas.en-us.securityImplGuide.meta/securityImplGuide/single_signon_pointer.htm)
- Custom Login Flows (atlas.en-us.securityImplGuide.meta/securityImplGuide/custom_login_flows_pointer.htm)
- Connected Apps (atlas.en-us.securityImplGuide.meta/securityImplGuide/connected_apps.htm)
- Manage User Passwords (atlas.en-us.securityImplGuide.meta/securityImplGuide/manage_user_passwords_pointer.htm)
- Device Activation (atlas.en-us.securityImplGuide.meta/securityImplGuide/device_activation_pointer.htm)
- Session Security (atlas.en-us.securityImplGuide.meta/securityImplGuide/session_settings_pointer.htm)
