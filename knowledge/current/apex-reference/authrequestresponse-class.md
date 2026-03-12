---
title: "AuthRequestResponse Class"
domain: apex-reference
topic: authrequestresponse-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:20.686Z
estimatedTokens: 887
namespace: RichMessaging
keywords: [AuthRequestResponse, contains, authorization, request, response, data., accessToken, contextRecordId, authProviderName, getAccessToken, getAuthProviderName, getContextRecordId]
---

# AuthRequestResponse Class

> This class contains authorization request response data.

**Namespace:** `RichMessaging`

# AuthRequestResponse Class

This class contains authorization request response data.

## Namespace

[RichMessaging](atlas.en-us.apexref.meta/apexref/apex_namespace_RichMessaging.htm "Provides objects and methods for handling content in enhanced Messaging channels.")

-   **[AuthRequestResponse Constructors](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_AuthRequestResponse.htm#apex_RichMessaging_AuthRequestResponse_constructors)**

-   **[AuthRequestResponse Methods](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_AuthRequestResponse.htm#apex_RichMessaging_AuthRequestResponse_methods)**


## AuthRequestResponse Constructors

The following are constructors for AuthRequestResponse.

-   **[AuthRequestResponse(accessToken, contextRecordId, authProviderName)](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_AuthRequestResponse.htm#apex_RichMessaging_AuthRequestResponse_ctor)**
    Creates a new instance of the RichMessaging.AuthRequestResponse class.

### AuthRequestResponse(accessToken, contextRecordId, authProviderName)

Creates a new instance of the RichMessaging.AuthRequestResponse class.

#### Signature

public AuthRequestResponse(String accessToken, String contextRecordId, String authProviderName)

#### Parameters

accessToken

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The authorization access token.

contextRecordId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The context record ID.

authProviderName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The provider name.

## AuthRequestResponse Methods

The following are methods for AuthRequestResponse.

-   **[getAccessToken()](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_AuthRequestResponse.htm#apex_RichMessaging_AuthRequestResponse_getAccessToken)**
    Gets the authorization access token.
-   **[getAuthProviderName()](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_AuthRequestResponse.htm#apex_RichMessaging_AuthRequestResponse_getAuthProviderName)**
    Get the authorization provider name.
-   **[getContextRecordId()](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_AuthRequestResponse.htm#apex_RichMessaging_AuthRequestResponse_getContextRecordId)**
    Gets the context record ID.

### getAccessToken()

Gets the authorization access token.

#### Signature

public String getAccessToken()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The access token.

### getAuthProviderName()

Get the authorization provider name.

#### Signature

public String getAuthProviderName()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The authorization provider name.

### getContextRecordId()

Gets the context record ID.

#### Signature

public String getContextRecordId()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The context record ID.

## Related Topics

- RichMessaging (atlas.en-us.apexref.meta/apexref/apex_namespace_RichMessaging.htm)
- AuthRequestResponse Constructors (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_AuthRequestResponse.htm)
- AuthRequestResponse Methods (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_AuthRequestResponse.htm)
- AuthRequestResponse(accessToken, contextRecordId, authProviderName) (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_AuthRequestResponse.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- getAccessToken() (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_AuthRequestResponse.htm)
- getAuthProviderName() (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_AuthRequestResponse.htm)
- getContextRecordId() (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_AuthRequestResponse.htm)
