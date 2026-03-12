---
title: "AuthToken Class"
domain: apex-reference
topic: authtoken-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:20.153Z
estimatedTokens: 3416
namespace: Auth
keywords: [AuthToken, getting, revoking, access, refresh, tokens, issued, user, logs, via, sign-on, SSO, flow, uses, authentication]
---

# AuthToken Class

> Contains methods for getting and revoking access and refresh tokens that are issued when
    a user logs in via a single sign-on (SSO) flow that uses an authentication provider, such as
    Facebook.

**Namespace:** `Auth`

# AuthToken Class

Contains methods for getting and revoking access and refresh tokens that are issued when a user logs in via a single sign-on (SSO) flow that uses an authentication provider, such as Facebook.

## Namespace

[Auth](atlas.en-us.apexref.meta/apexref/apex_namespace_Auth.htm "The Auth namespace provides an interface and classes for single sign-on into Salesforce and session security management.")

## Usage

To authenticate users via an authentication provider, you must create a class that implements the [Auth.RegistrationHandler interface](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_auth_plugin.htm). When a user logs in to Salesforce via a provider such as Facebook, they’re issued an access token and in some cases, a refresh token. To retrieve and revoke these tokens, use the methods in the Auth.AuthToken class.

## AuthToken Methods

The following are methods for AuthToken. All methods are static.

-   **[getAccessToken(authProviderId, providerName)](atlas.en-us.apexref.meta/apexref/apex_class_Auth_AuthToken.htm#apex_Auth_AuthToken_getAccessToken)**
    Returns an access token for the current user using the specified 18-character identifier of an AuthProvider definition in your org and the proper name of the provider, such as Salesforce or Facebook.
-   **[getAccessTokenMap(authProviderId, providerName)](atlas.en-us.apexref.meta/apexref/apex_class_Auth_AuthToken.htm#apex_Auth_AuthToken_getAccessTokenMap)**
    Returns a map from the provider’s identifier to the access token for the currently logged-in Salesforce user. The identifier value depends on the provider. For example, for Salesforce, it’s the user ID, while for Facebook, it’s the user number.
-   **[refreshAccessToken(authProviderId, providerName, oldAccessToken)](atlas.en-us.apexref.meta/apexref/apex_class_Auth_AuthToken.htm#apex_Auth_AuthToken_refreshAccessToken)**
    Returns a map from the third-party provider’s identifier containing a refreshed access token for the currently logged-in Salesforce user.
-   **[revokeAccess(authProviderId, providerName, userId, remoteIdentifier)](atlas.en-us.apexref.meta/apexref/apex_class_Auth_AuthToken.htm#apex_Auth_AuthToken_revokeAccess)**
    Revokes the access token for a specified SSO user from a provider such as Facebook. You can use this method only if the IsNotSsoUsable field on the associated ThirdPartyAccountLink object is set to false.

### getAccessToken(authProviderId, providerName)

Returns an access token for the current user using the specified 18-character identifier of an AuthProvider definition in your org and the proper name of the provider, such as Salesforce or Facebook.

#### Signature

public static String getAccessToken(String authProviderId, String providerName)

#### Parameters

authProviderId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

providerName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The proper name of the provider. Here are valid values for each provider type.

-   Apple—Apple
-   Custom—For a custom authentication provider, use the value in the FriendlyName field on the [AuthProvider object](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_authprovider.htm), such as MyProvider.
-   Facebook—Facebook
-   GitHub—GitHub
-   Google—Google
-   Janrain—Use the proper name of the third party, such as Yahoo!.
-   LinkedIn—LinkedIn
-   Microsoft—Microsoft
-   Microsoft Access Control Service—Microsoft Access Control Service
-   MuleSoft—MuleSoft
-   Open ID Connect—Open ID Connect
-   Salesforce—Salesforce
-   Slack—Slack
-   Twitter—This method doesn’t support the Twitter authentication provider.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

The providerName value that you pass into this method can be different from the value that’s returned if you query the ProviderType field on the AuthProvider object. For example, for Open ID Connect providers, OpenIdConnect is the ProviderType value for the AuthProvider object, but the expected providerName is Open ID Connect.

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getAccessTokenMap(authProviderId, providerName)

Returns a map from the provider’s identifier to the access token for the currently logged-in Salesforce user. The identifier value depends on the provider. For example, for Salesforce, it’s the user ID, while for Facebook, it’s the user number.

#### Signature

public static Map<String, String\> getAccessTokenMap(String authProviderId, String providerName)

#### Parameters

authProviderId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

providerName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The proper name of the provider. Here are valid values for each provider type.

-   Apple—Apple
-   Custom—For a custom authentication provider, use the value in the FriendlyName field on the [AuthProvider object](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_authprovider.htm), such as MyProvider.
-   Facebook—Facebook
-   GitHub—GitHub
-   Google—Google
-   Janrain—Use the proper name of the third party, such as Yahoo!.
-   LinkedIn—LinkedIn
-   Microsoft—Microsoft
-   Microsoft Access Control Service—Microsoft Access Control Service
-   MuleSoft—MuleSoft
-   Open ID Connect—Open ID Connect
-   Salesforce—Salesforce
-   Slack—Slack
-   Twitter—This method doesn’t support the Twitter authentication provider.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

The providerName value that you pass into this method can be different from the value that’s returned if you query the ProviderType field on the AuthProvider object. For example, for Open ID Connect providers, OpenIdConnect is the ProviderType value for the AuthProvider object, but the expected providerName is Open ID Connect.

#### Return Value

Type: [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."), [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

### refreshAccessToken(authProviderId, providerName, oldAccessToken)

Returns a map from the third-party provider’s identifier containing a refreshed access token for the currently logged-in Salesforce user.

#### Signature

public static Map<String, String\> refreshAccessToken(String authProviderId, String providerName, String oldAccessToken)

#### Parameters

authProviderId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

providerName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The proper name of the third party. Here are valid values for each provider type.

-   Apple—Apple
-   Custom—For a custom authentication provider, use the value in the FriendlyName field on the [AuthProvider object](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_authprovider.htm), such as MyProvider.
-   Facebook—Facebook
-   GitHub—GitHub
-   Google—Google
-   Janrain—Use the proper name of the third party, such as Yahoo!.
-   LinkedIn—LinkedIn
-   Microsoft—Microsoft
-   Microsoft Access Control Service—Microsoft Access Control Service
-   MuleSoft—MuleSoft
-   Open ID Connect—Open ID Connect
-   Salesforce—Salesforce
-   Slack—Slack
-   Twitter—This method doesn’t support the Twitter authentication provider.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

The providerName value that you pass into this method can be different from the value that’s returned if you query the ProviderType field on the AuthProvider object. For example, for Open ID Connect providers, OpenIdConnect is the ProviderType value for the AuthProvider object, but the expected providerName is Open ID Connect.

oldAccessToken

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."), [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

#### Usage

The returned map contains AccessToken and RefreshError keys. Evaluate the keys in the response to check if the request was successful. For a successful request, the RefreshError value is null, and AccessToken is a token value. For an unsuccessful request, the RefreshError value is an error message, and the AccessToken value is null.

When successful, this method updates the token stored in the database, which you can get using Auth.AuthToken.getAccessToken().

If you’re using an OpenID Connect authentication provider, an id\_token isn’t required in the response from the provider. If a **Token Issuer** is specified in the **Auth. Provider** settings and an id\_token is provided anyway, Salesforce verifies it.

#### Example

```

```

A successful request includes the access token in the response.

```

```

### revokeAccess(authProviderId, providerName, userId, remoteIdentifier)

Revokes the access token for a specified SSO user from a provider such as Facebook. You can use this method only if the IsNotSsoUsable field on the associated ThirdPartyAccountLink object is set to false.

#### Signature

public static Boolean revokeAccess(String authProviderId, String providerName, String userId, String remoteIdentifier)

#### Parameters

authProviderId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the authentication provider in Salesforce.

providerName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The name of the third party. Here are valid providerName values for each provider type.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexref)

#### Important

The providerName value that you pass into this method must be lowercase.

-   Apple—apple
-   Custom—For a custom authentication provider, use a lowercase version of the value in the FriendlyName field on the [AuthProvider object](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_authprovider.htm). For example, if the FriendlyName is MyProvider, use myprovider.
-   Facebook—facebook
-   GitHub—github
-   Google—google
-   Janrain—Use a lowercase version of the name of the third party, such as yahoo!.
-   LinkedIn—linkedin
-   Microsoft—microsoft
-   Microsoft Access Control Service—microsoft access control service
-   MuleSoft—mulesoft
-   Open ID Connect—open id connect
-   Salesforce—salesforce
-   Slack—slack
-   Twitter—twitter

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

The providerName that you pass into this method is different from the value that you get if you query the ProviderType field on the AuthProvider object. For example, for Open ID Connect providers, the providerType value for the AuthProvider object is OpenIdConnect, but the providerName for the revokeAccess method is open id connect.

userId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The 15-character ID for the user whose access is being revoked.

remoteIdentifier

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The unique ID for the user in the third-party system (this value is in the associated ThirdPartyAccountLink standard object).

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

The return value is true if the revokeAccess() operation is successful; otherwise false.

#### Example

The following example revokes a Facebook user's access token.

```

```

## Code Examples

```apex
String accessToken = Auth.AuthToken.getAccessToken('0SOD000000000DeOAI', 'Open ID Connect');
Map<String, String> responseMap = Auth.AuthToken.refreshAccessToken('0SOD000000000DeOAI', 'Open ID Connect', accessToken);
```

```
(RefreshError,null)(AccessToken,00DD00000007BhE!AQkAQFzj...)
```

```
Auth.AuthToken.revokeAccess('0SOxx00000#####', 'facebook', '005xx00000#####', 'ThirdPartyIdentifier_exist214176560#####');
```

## Related Topics

- Auth (atlas.en-us.apexref.meta/apexref/apex_namespace_Auth.htm)
- getAccessToken(authProviderId, providerName) (atlas.en-us.apexref.meta/apexref/apex_class_Auth_AuthToken.htm)
- getAccessTokenMap(authProviderId, providerName) (atlas.en-us.apexref.meta/apexref/apex_class_Auth_AuthToken.htm)
- refreshAccessToken(authProviderId, providerName, oldAccessToken) (atlas.en-us.apexref.meta/apexref/apex_class_Auth_AuthToken.htm)
- revokeAccess(authProviderId, providerName, userId, remoteIdentifier) (atlas.en-us.apexref.meta/apexref/apex_class_Auth_AuthToken.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Map (atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
