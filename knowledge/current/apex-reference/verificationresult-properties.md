---
title: "VerificationResult Properties"
domain: apex-reference
topic: verificationresult-properties
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.408Z
keywords: [VerificationResult, Properties, Message, displays, result, verification, challenge., Token, valid, identity, successful., values, FAILURE, PENDING, RATE_LIMITED, FAILURE_REPORT., message, Signature, Property, Value]
---

# VerificationResult Properties

> Message that displays as a result of a verification challenge.
        Token is valid if the identity verification is
      successful. Other values are FAILURE, PENDING, RATE_LIMITED, or
        FAILURE_REPORT.

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