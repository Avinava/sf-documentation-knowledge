---
title: "InboundEmail.AuthenticationResult Class"
domain: apex-reference
topic: inboundemailauthenticationresult-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:20.761Z
estimatedTokens: 958
namespace: Messaging
keywords: [InboundEmail.AuthenticationResult, authentication, inbound, emails, authenticationResultFields, result]
---

# InboundEmail.AuthenticationResult Class

> Contains the authentication type and response for inbound emails.

**Namespace:** `Messaging`

# InboundEmail.AuthenticationResult Class

Contains the authentication type and response for inbound emails.

## Namespace

[Messaging](atlas.en-us.apexref.meta/apexref/apex_namespace_Messaging.htm "The Messaging namespace provides classes and methods for Salesforce outbound and inbound email functionality.")

-   **[InboundEmail.AuthenticationResult Constructors](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_InboundEmail_AuthenticationResult.htm#apex_Messaging_InboundEmail_AuthenticationResult_constructors)**

-   **[InboundEmail.AuthenticationResult Properties](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_InboundEmail_AuthenticationResult.htm#apex_Messaging_InboundEmail_AuthenticationResult_properties)**


## InboundEmail.AuthenticationResult Constructors

The following are constructors for InboundEmail.AuthenticationResult.

-   **[InboundEmail.AuthenticationResult()](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_InboundEmail_AuthenticationResult.htm#apex_Messaging_InboundEmail_AuthenticationResult_ctor)**
    Creates a new instance of the Messaging.InboundEmail.AuthenticationResult class.

### InboundEmail.AuthenticationResult()

Creates a new instance of the Messaging.InboundEmail.AuthenticationResult class.

#### Signature

public InboundEmail.AuthenticationResult()

## InboundEmail.AuthenticationResult Properties

The following are properties for InboundEmail.AuthenticationResult.

-   **[authenticationResultFields](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_InboundEmail_AuthenticationResult.htm#apex_Messaging_InboundEmail_AuthenticationResult_authenticationResultFields)**
    Additional information in authentication result headers. Examples include: name: smtp.mailfrom and value: example.com.
-   **[method](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_InboundEmail_AuthenticationResult.htm#apex_Messaging_InboundEmail_AuthenticationResult_method)**
    The authentication method used for the security check. Possible values include dkim, dmarc, or spf.
-   **[result](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_InboundEmail_AuthenticationResult.htm#apex_Messaging_InboundEmail_AuthenticationResult_result)**
    The result of the authentication check. When the email service is configured to verify the legitimacy of the sending server before processing a message, possible values include pass or fail. Otherwise, the value returned is none.

### authenticationResultFields

Additional information in authentication result headers. Examples include: name: smtp.mailfrom and value: example.com.

#### Signature

public InboundEmail.AuthenticationResultField\[\] authenticationResultFields {get; set;}

#### Property Value

Type: [InboundEmail.AuthenticationResultField](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_InboundEmail_AuthenticationResultField.htm#apex_class_Messaging_InboundEmail_AuthenticationResultField "Contains field data from the authentication result response for inbound emails.")\[\]

### method

The authentication method used for the security check. Possible values include dkim, dmarc, or spf.

#### Signature

public String method {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### result

The result of the authentication check. When the email service is configured to verify the legitimacy of the sending server before processing a message, possible values include pass or fail. Otherwise, the value returned is none.

#### Signature

public String result {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

## Related Topics

- Messaging (atlas.en-us.apexref.meta/apexref/apex_namespace_Messaging.htm)
- InboundEmail.AuthenticationResult Constructors (atlas.en-us.apexref.meta/apexref/apex_class_Messaging_InboundEmail_AuthenticationResult.htm)
- InboundEmail.AuthenticationResult Properties (atlas.en-us.apexref.meta/apexref/apex_class_Messaging_InboundEmail_AuthenticationResult.htm)
- InboundEmail.AuthenticationResult() (atlas.en-us.apexref.meta/apexref/apex_class_Messaging_InboundEmail_AuthenticationResult.htm)
- authenticationResultFields (atlas.en-us.apexref.meta/apexref/apex_class_Messaging_InboundEmail_AuthenticationResult.htm)
- method (atlas.en-us.apexref.meta/apexref/apex_class_Messaging_InboundEmail_AuthenticationResult.htm)
- result (atlas.en-us.apexref.meta/apexref/apex_class_Messaging_InboundEmail_AuthenticationResult.htm)
- InboundEmail.AuthenticationResultField (atlas.en-us.apexref.meta/apexref/apex_class_Messaging_InboundEmail_AuthenticationResultField.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
