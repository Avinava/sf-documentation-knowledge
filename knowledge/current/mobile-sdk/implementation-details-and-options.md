---
title: "Implementation Details and Options"
domain: mobile-sdk
topic: implementation-details-and-options
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:25.161Z
estimatedTokens: 790
keywords: [Implementation, Options, Besides, basic, communication, certain, standard, scenarios, apply, identity, provider, setups, Initiate, Authentication, IdP, App, Fetch, Salesforce, Authorization, Code, Verify, User, Selection, Result]
---

> Besides the basic communication details, certain standard scenarios apply to most
    identity provider setups.

# Implementation Details and Options

Besides the basic communication details, certain standard scenarios apply to most identity provider setups.

## Initiate Authentication from an IdP App

You can also design your IdP app to allow customers to use it, rather than the SP app, as the start point for authentication. In this case, your IdP app sends the following information to the SP app.

user\_hint

A value providing a handle to a user reference. The SP App can use this hint to verify the customer's existence. If the user account is not found, the SP app uses this value to invoke the IdP App. The IdP app then obtains an authorization code as in (A). On the other hand, if the user account is available in the SP app, the SP app simply switches to that user.

login\_host

The selected login host that was used for the auth request (A).

start\_url

The URL to navigate to once the user is selected.

Use the SP app's custom scheme on iOS, or launch an intent with a bundle containing the key-value pairs on Android. For example, on iOS:

```

```

## Fetch the Salesforce Authorization Code

Once the selected user has logged in and passed any other security requirements, your IdP app obtains an authorization code from Salesforce. How you retrieve this code depends on your identity service implementation. If the connected app policy requires permission to access the customer's data, your IdP app must also display the Salesforce permission screen.

For example, Mobile SDK launches a web view that calls a JSP server app. This server page accesses the Salesforce authorization endpoint, obtains the authorization code, and displays the access permission screen.

## Verify the SP App

For protection from rogue SP apps, an IdP app can do the following.

1.  Extract the calling app's bundle identifier.
2.  Compare this identifier with the redirect\_uri. If the two values don't match, return an authentication error.

By definition, the IdP app isn't expected to have prior knowledge of SP apps. However, an IdP app can choose to maintain a "white list" of apps that it intends to support.

## User Selection

For user selection, the IdP app presents one of the following screens.

**User selection screen**—Presented if one or more users are present in the Account Manager, but none of them match the **user\_hint**.

**Login screen**—Presented in either of the following cases:

-   If no user has logged in to the IdP app.
-   If the specified user has never logged in.

## Return Result

Your IdP app intercepts requests that match the oauth\_redirect\_uri and calls the SP app using the provided scheme or bundle ID.

## See Also

The following related links on configuring Salesforce as an identity provider are provided for general background knowledge. Most of this information is not used in configuring a mobile app as a Salesforce IdP or SP.

-   [Identity Providers and Service Providers](https://help.salesforce.com/articleView?id=identity_provider_about.htm&language=en_US) in *Salesforce Help*
-   [Single Sign-On](https://help.salesforce.com/articleView?id=sso_about.htm&language=en_US "HTML (New Window)") in *Salesforce Help*

## Code Examples

```
<SP-APP-URL-SCHEME>://oauth2/v1.0/idpinit?
  user_hint={orgid:userId}
  &login_host={loginhost}
  &start_url={starturl}
```
