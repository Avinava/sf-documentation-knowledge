---
title: "LoginDiscoveryHandler Example Implementation"
domain: apex-reference
topic: logindiscoveryhandler-example-implementation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:40.630Z
keywords: [LoginDiscoveryHandler, Example, Implementation, Note, Code, Filter, Login, Discovery, Users, Profile]
---

# LoginDiscoveryHandler Example Implementation

## LoginDiscoveryHandler Example Implementation

This Apex code example implements the Auth.LoginDiscoveryHandler interface. It checks whether the user who is logging in has a verified email or phone number, depending on which identifier was supplied on the login page. If verified, with Auth.VerificationMethod.EMAIL or Auth.VerificationMethod.SMS, we send a challenge to the identifier, either the user’s email address or mobile device. If the user enters the code correctly on the verify page, the user is redirected to the Experience Cloud site’s page specified by the start URL. If the user isn’t verified, the user must enter a password to log in. The handler also checks that the email and phone number are unique with this code: users.size()==1.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

Passwordless login works only with verified methods. You can check the verification status on the User object, for example, with User list view, a report, or the API. Make sure that your solution handles the case where the user doesn’t have a verification method. This code example falls back to a password.

The default discoverable login handler checks whether the user entered a valid email address or phone number before redirecting the user to the verification page. If an invalid entry is made, the handler returns an error. Because this behavior is vulnerable to user enumeration attack, make sure that your solution prevents this attack. For example, you can create a dummy page similar to the verification page and redirect the user to the dummy page when invalid user identifier is entered. Also, use generic error messages to avoid providing additional information.

The discoveryResult function calls the Site.passwordlessLogin method to log the user in with the specified verification method. The getSsoRedirect function looks up whether the user logs in with SAML or an Auth Provider. Add the implementation-specific logic to handle the lookup.

```

```

### Code Example: Filter Login Discovery Users by Profile

Your production org can have multiple users with the same verified email address and mobile number. But your customers must have unique ones. To address this problem, you can add a few lines of code that filters users by profile to ensure uniqueness. This code example handles users with the External Identity User profile, but can be adapted to support other use cases. For example, you can modify the first line of code to address users with other user licenses or criteria.

Login Discovery is available with the following user licenses: Customer Community, Customer Community Plus, External Identity, Partner Community, and Partner Community Plus. It depends on which profiles have access to your Experience Cloud site.

```

```