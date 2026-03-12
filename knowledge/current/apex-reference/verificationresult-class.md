---
title: "VerificationResult Class"
domain: apex-reference
topic: verificationresult-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:20.348Z
estimatedTokens: 1939
namespace: Auth
keywords: [VerificationResult, result, verification, challenge, invoke, own, Verify, initiated, either, Usage, redirect, success, message, clone]
---

# VerificationResult Class

> Contains the result of a verification challenge
      that you invoke when you create your own Verify page. The challenge can be initiated by either
      the System.UserManagement.verifyPasswordlessLogin or
        System.UserManagement.verifySelfRegistration
      method.

**Namespace:** `Auth`

# VerificationResult Class

Contains the result of a verification challenge that you invoke when you create your own Verify page. The challenge can be initiated by either the [System.UserManagement.verifyPasswordlessLogin](atlas.en-us.apexref.meta/apexref/apex_class_System_UserManagement.htm#apex_System_UserManagement_verifyPasswordlessLogin "Completes a verification challenge during a passwordless login that uses a custom Verify page (Visualforce only). If the user who is trying to log in enters the verification code successfully, the user is logged in.") or [System.UserManagement.verifySelfRegistration](atlas.en-us.apexref.meta/apexref/apex_class_System_UserManagement.htm#apex_System_UserManagement_verifySelfRegistration "Completes a verification challenge when creating a custom (Visualforce) Verify page for Experience Cloud site self-registration. If the person who is attempting to register enters the verification code successfully, the user is created and logged in.") method.

## Namespace

[Auth](atlas.en-us.apexref.meta/apexref/apex_namespace_Auth.htm "The Auth namespace provides an interface and classes for single sign-on into Salesforce and session security management.")

## Usage

When users sign up for or log in to your Experience Cloud site with an email address or phone number, Salesforce sends them a verification code. At the same time, Salesforce generates the Verify page for users to enter the code to verify their identity. You can replace the Salesforce-generated Verify page with one that you create with Visualforce. Then invoke the verification challenge and, if the verification code is entered correctly, log in the user. For sign-up, you use the [System.UserManagement.verifySelfRegistration](atlas.en-us.apexref.meta/apexref/apex_class_System_UserManagement.htm#apex_System_UserManagement_verifySelfRegistration "Completes a verification challenge when creating a custom (Visualforce) Verify page for Experience Cloud site self-registration. If the person who is attempting to register enters the verification code successfully, the user is created and logged in.") method. For passwordless login, you use the [System.UserManagement.verifyPasswordlessLogin](atlas.en-us.apexref.meta/apexref/apex_class_System_UserManagement.htm#apex_System_UserManagement_verifyPasswordlessLogin "Completes a verification challenge during a passwordless login that uses a custom Verify page (Visualforce only). If the user who is trying to log in enters the verification code successfully, the user is logged in.") method. The methods return the verification result, which contains the message displayed as a result of the challenge. This message also indicates whether the challenge is successful and where to direct the user when the verification code is entered correctly.

## Example

This code contains the result of a verification challenge that registers a new user.

```

```

-   **[VerificationResult Constructor](atlas.en-us.apexref.meta/apexref/apex_class_Auth_VerificationResult.htm#apex_Auth_VerificationResult_constructors)**

-   **[VerificationResult Properties](atlas.en-us.apexref.meta/apexref/apex_class_Auth_VerificationResult.htm#apex_Auth_VerificationResult_properties)**

-   **[VerificationResult Method](atlas.en-us.apexref.meta/apexref/apex_class_Auth_VerificationResult.htm#apex_Auth_VerificationResult_methods)**


## VerificationResult Constructor

VerificationResult has the following constructor.

-   **[VerificationResult(redirect, success, message)](atlas.en-us.apexref.meta/apexref/apex_class_Auth_VerificationResult.htm#apex_Auth_VerificationResult_ctor)**
    Creates an instance of the VerificationResult class that contains the verification result from System.UserManagement.verifySelfRegistration.

### VerificationResult(redirect, success, message)

Creates an instance of the VerificationResult class that contains the verification result from System.UserManagement.verifySelfRegistration.

#### Signature

public VerificationResult(System.PageReference redirect, Boolean success, String message)

#### Parameters

redirect

Type: System.PageReference[System.PageReference](atlas.en-us.apexref.meta/apexref/apex_system_pagereference.htm "A PageReference is a reference to an instantiation of a page. Among other attributes, PageReferences consist of a URL and a set of query parameter names and values.")

Where user is directed upon successful verification.

success

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Indicates whether verification succeeded.

message

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Message that displays as a result of a verification challenge.

## VerificationResult Properties

The following are properties for VerificationResult.

-   **[message](atlas.en-us.apexref.meta/apexref/apex_class_Auth_VerificationResult.htm#apex_Auth_VerificationResult_message)**
    Message that displays as a result of a verification challenge. Token is valid if the identity verification is successful. Other values are FAILURE, PENDING, RATE\_LIMITED, or FAILURE\_REPORT.
-   **[redirect](atlas.en-us.apexref.meta/apexref/apex_class_Auth_VerificationResult.htm#apex_Auth_VerificationResult_redirect)**
    Where the user is directed after entering the verification code successfully, for example, the Experience Cloud site’s home page or location specified by the start URL.
-   **[success](atlas.en-us.apexref.meta/apexref/apex_class_Auth_VerificationResult.htm#apex_Auth_VerificationResult_success)**
    The verification challenge is successful.

### message

Message that displays as a result of a verification challenge. Token is valid if the identity verification is successful. Other values are FAILURE, PENDING, RATE\_LIMITED, or FAILURE\_REPORT.

#### Signature

public String message {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### redirect

Where the user is directed after entering the verification code successfully, for example, the Experience Cloud site’s home page or location specified by the start URL.

#### Signature

public System.PageReference redirect {get; set;}

#### Property Value

Type: System.PageReference[System.PageReference](atlas.en-us.apexref.meta/apexref/apex_system_pagereference.htm "A PageReference is a reference to an instantiation of a page. Among other attributes, PageReferences consist of a URL and a set of query parameter names and values.")

### success

The verification challenge is successful.

#### Signature

public Boolean success {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

## VerificationResult Method

VerificationResult has the following method.

-   **[clone()](atlas.en-us.apexref.meta/apexref/apex_class_Auth_VerificationResult.htm#apex_Auth_VerificationResult_clone)**
    Duplicates the Auth.VerificationResult object.

### clone()

Duplicates the Auth.VerificationResult object.

#### Signature

public Object clone()

#### Return Value

Type: [VerificationResult](#apex_class_Auth_VerificationResult "Contains the result of a verification challenge that you invoke when you create your own Verify page. The challenge can be initiated by either the System.UserManagement.verifyPasswordlessLogin or System.UserManagement.verifySelfRegistration method.")

## Code Examples

```apex
String id = System.UserManagement.initSelfRegistration​
          (Auth.VerificationMethod.SMS, user);
        Auth.VerificationResult res = System.UserManagement.verifySelfRegistration​
          (Auth.VerificationMethod.SMS, id, ‘123456’, null);
        if(res.success == true){
     //redirect
}
```

## Related Topics

- System.UserManagement.verifyPasswordlessLogin (atlas.en-us.apexref.meta/apexref/apex_class_System_UserManagement.htm)
- System.UserManagement.verifySelfRegistration (atlas.en-us.apexref.meta/apexref/apex_class_System_UserManagement.htm)
- Auth (atlas.en-us.apexref.meta/apexref/apex_namespace_Auth.htm)
- VerificationResult Constructor (atlas.en-us.apexref.meta/apexref/apex_class_Auth_VerificationResult.htm)
- VerificationResult Properties (atlas.en-us.apexref.meta/apexref/apex_class_Auth_VerificationResult.htm)
- VerificationResult Method (atlas.en-us.apexref.meta/apexref/apex_class_Auth_VerificationResult.htm)
- VerificationResult(redirect, success, message) (atlas.en-us.apexref.meta/apexref/apex_class_Auth_VerificationResult.htm)
- System.PageReference (atlas.en-us.apexref.meta/apexref/apex_system_pagereference.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
