---
title: "AuthRequestResult Class"
domain: apex-reference
topic: authrequestresult-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:20.694Z
estimatedTokens: 965
namespace: RichMessaging
keywords: [AuthRequestResult, contains, result, handling, authorization, request, response., redirectPageReference, resultStatus, expirationDateTime]
---

# AuthRequestResult Class

> This class contains  the result from handling the authorization request
    response.

**Namespace:** `RichMessaging`

# AuthRequestResult Class

This class contains the result from handling the authorization request response.

## Namespace

[RichMessaging](atlas.en-us.apexref.meta/apexref/apex_namespace_RichMessaging.htm "Provides objects and methods for handling content in enhanced Messaging channels.")

-   **[AuthRequestResult Constructors](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_AuthRequestResult.htm#apex_RichMessaging_AuthRequestResult_constructors)**

-   **[AuthRequestResult Properties](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_AuthRequestResult.htm#apex_RichMessaging_AuthRequestResult_properties)**


## AuthRequestResult Constructors

The following are constructors for AuthRequestResult.

-   **[AuthRequestResult(redirectPageReference, resultStatus, expirationDateTime)](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_AuthRequestResult.htm#apex_RichMessaging_AuthRequestResult_ctor)**
    Creates a new instance of the RichMessaging.AuthRequestResult class.

### AuthRequestResult(redirectPageReference, resultStatus, expirationDateTime)

Creates a new instance of the RichMessaging.AuthRequestResult class.

#### Signature

public AuthRequestResult(System.PageReference redirectPageReference, RichMessaging.AuthRequestResultStatus resultStatus, Datetime expirationDateTime)

#### Parameters

redirectPageReference

Type: [System.PageReference](atlas.en-us.apexref.meta/apexref/apex_system_pagereference.htm "A PageReference is a reference to an instantiation of a page. Among other attributes, PageReferences consist of a URL and a set of query parameter names and values.")

The reference to the redirect page.

resultStatus

Type: [RichMessaging.AuthRequestResultStatus](atlas.en-us.apexref.meta/apexref/apex_enum_RichMessaging_AuthRequestResultStatus.htm "This enum describes the authentication result status.")

The result status value.

expirationDateTime

Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

The expiration time.

## AuthRequestResult Properties

The following are properties for AuthRequestResult.

-   **[expirationDateTime](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_AuthRequestResult.htm#apex_RichMessaging_AuthRequestResult_expirationDateTime)**
    The expiration date and time.
-   **[redirectPageReference](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_AuthRequestResult.htm#apex_RichMessaging_AuthRequestResult_redirectPageReference)**
    The reference to the redirect page.
-   **[resultStatus](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_AuthRequestResult.htm#apex_RichMessaging_AuthRequestResult_resultStatus)**
    The result status value.

### expirationDateTime

The expiration date and time.

#### Signature

public Datetime expirationDateTime {get; set;}

#### Property Value

Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

### redirectPageReference

The reference to the redirect page.

#### Signature

public System.PageReference redirectPageReference {get; set;}

#### Property Value

Type: [System.PageReference](atlas.en-us.apexref.meta/apexref/apex_system_pagereference.htm "A PageReference is a reference to an instantiation of a page. Among other attributes, PageReferences consist of a URL and a set of query parameter names and values.")

### resultStatus

The result status value.

#### Signature

public RichMessaging.AuthRequestResultStatus resultStatus {get; set;}

#### Property Value

Type: [RichMessaging.AuthRequestResultStatus](atlas.en-us.apexref.meta/apexref/apex_enum_RichMessaging_AuthRequestResultStatus.htm "This enum describes the authentication result status.")

## Related Topics

- RichMessaging (atlas.en-us.apexref.meta/apexref/apex_namespace_RichMessaging.htm)
- AuthRequestResult Constructors (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_AuthRequestResult.htm)
- AuthRequestResult Properties (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_AuthRequestResult.htm)
- AuthRequestResult(redirectPageReference, resultStatus, expirationDateTime) (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_AuthRequestResult.htm)
- System.PageReference (atlas.en-us.apexref.meta/apexref/apex_system_pagereference.htm)
- RichMessaging.AuthRequestResultStatus (atlas.en-us.apexref.meta/apexref/apex_enum_RichMessaging_AuthRequestResultStatus.htm)
- Datetime (atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm)
- expirationDateTime (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_AuthRequestResult.htm)
- redirectPageReference (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_AuthRequestResult.htm)
- resultStatus (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_AuthRequestResult.htm)
