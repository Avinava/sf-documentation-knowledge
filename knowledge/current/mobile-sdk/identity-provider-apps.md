---
title: "Identity Provider Apps"
domain: mobile-sdk
topic: identity-provider-apps
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:25.197Z
estimatedTokens: 1400
keywords: [Identity, Provider, Apps, providers, help, known, users, avoid, reentering, their, Salesforce, credentials, every, time, they, log, Mobile, SDK, app, preserves, stringent, security, level, previous, releases]
---

> Identity providers help known users avoid reentering their Salesforce credentials every time
  they log in to a Mobile SDK
  app. At the same time, it preserves the stringent security level of previous Mobile SDK
  releases.

# Identity Provider Apps

Identity providers help known users avoid reentering their Salesforce credentials every time they log in to a Mobile SDK app. At the same time, it preserves the stringent security level of previous Mobile SDK releases.

An identity provider setup consists of two primary components:

-   An identity provider (IDP) is an ordinary Mobile SDK app that’s configured to manage Salesforce logins for one or more users on a single mobile device. This app serves as the broker between Mobile SDK apps on the device and the Salesforce authentication service. It tracks device users that have recently logged in and kicks off the authentication process when they return to the app.
-   An identity provider client is an ordinary Mobile SDK app that’s configured to use an identity provider for logins. These apps are also called “service providers” or “SPs” because they provide the services that the user is trying to access. A traditional service provider gives the user one choice for authentication: the Salesforce login screen. An identity provider client, on the other hand, gives the user the choice of logging in through either the Salesforce login screen or a specific identity provider. With the identity provider option, an authorization request to the current active user in the IDP app is sent to a Salesforce authorization endpoint.

Typically, a single device hosts a single identity provider app, but this limitation is not enforced. A single device can host any number of identity provider client apps.

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

#### Note

Mobile SDK introduced support for identity provider services in version 6.0. In Mobile SDK 11.0, we reworked our support to improve the user experience and added new functionality. Apps built with Mobile SDK versions 6.0–10.2 can continue to use the IDP / SP flows introduced in Mobile SDK 6.0. However, apps built on Mobile SDK 11.0 and on require the respective IDP/ SP flows reworked in Mobile SDK 11.0 to implement the feature.

Several rules apply to identity provider apps and their clients. The following apply to the latest IDP and SP flows supported in Mobile SDK 11.0.

-   They must be built with Mobile SDK 11.0 or later.
-   They must be discrete apps. You can’t combine identity provider and identity provider client implementations in a single app.
-   A client and the identity provider it delegates to must use different Salesforce connected apps with differing OAuth callback URIs.

-   **[Identity Providers: Architecture, Flow, and Connected App Requirements](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/auth_identity_arch_flow_general.htm)**
    All Mobile SDK identity provider setups follow the same flows and architectural outlines, regardless of platform. Salesforce connected apps for identity provider components also impose a few special requirements.
-   **[Android Architecture and Flow](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/auth_identity_provider_arch_flow_android.htm)**
    To kick off the identity provider flow, a user can open either an identity provider or an identity provider client app. In Android, the implementation differs depending on which side initiates it.
-   **[Configuring an Android App as an Identity Provider](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/auth_identity_provider_android.htm)**
    You can configure any app built on Mobile SDK 11.0 or later as an identity provider. You call a method to define which identity provider client apps you want to connect to, then select the identity provider client in your app’s UI.
-   **[Configuring an Android App as an Identity Provider Client](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/auth_identity_provider_client_android.htm)**
    You can configure any app built on Mobile SDK 11.0 or later as an identity provider client, as long as it’s not the same app being used as an identity provider. You configure it to identify itself as an identity provider client, call a method to identify the IDP app, and Mobile SDK does the rest.
-   **[Configuring an iOS App as an Identity Provider](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/auth_identity_provider_ios.htm)**
    You can configure any app built on Mobile SDK 11.0 or later as an identity provider. You configure it to identify itself as an identity provider, and Mobile SDK does the rest.
-   **[Configuring an iOS App as an Identity Provider Client](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/auth_identity_provider_client_ios.htm)**
    You can configure any app built on Mobile SDK 11.0 or later as an identity provider client. You configure it to identify itself as an identity provider client and to specify its identity provider. Mobile SDK does the rest.
-   **[Implementing Mobile Identity Provider Apps Without Mobile SDK](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/auth_identity_idp_without_sdk.htm)**
    If you own a website that hosts apps that connect to Salesforce, you can configure Salesforce to provide identity services for those apps. Users of the hosted apps can then enjoy single sign-on ease through their host website. But can you adopt the same service in native mobile apps, and if so, what does it take? The answers are yes, and it's not difficult. You can define native mobile apps as Salesforce identity providers either of two ways: with Salesforce Mobile SDK, or without Salesforce Mobile SDK. This article gives you instructions for creating mobile identity providers and their clients without Salesforce Mobile SDK.

## Related Topics

- Identity Providers: Architecture, Flow, and Connected App Requirements (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/auth_identity_arch_flow_general.htm)
- Android Architecture and Flow (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/auth_identity_provider_arch_flow_android.htm)
- Configuring an Android App as an Identity Provider (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/auth_identity_provider_android.htm)
- Configuring an Android App as an Identity Provider Client (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/auth_identity_provider_client_android.htm)
- Configuring an iOS App as an Identity Provider (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/auth_identity_provider_ios.htm)
- Configuring an iOS App as an Identity Provider Client (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/auth_identity_provider_client_ios.htm)
- Implementing Mobile Identity Provider Apps Without Mobile SDK (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/auth_identity_idp_without_sdk.htm)
