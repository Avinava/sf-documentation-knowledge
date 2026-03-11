---
title: "AuthToken Class"
domain: apex-reference
topic: authtoken-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.236Z
keywords: [AuthToken, Class, Revokes, access, token, specified, SSO, user, provider, such, Facebook., method, only, IsNotSsoUsable, field, associated, ThirdPartyAccountLink, object, set, false.]
---

# AuthToken Class

> Revokes the access token for a specified SSO user from a provider such as Facebook. You
    can use this method only if the IsNotSsoUsable field on the associated
    ThirdPartyAccountLink object is set to false.

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