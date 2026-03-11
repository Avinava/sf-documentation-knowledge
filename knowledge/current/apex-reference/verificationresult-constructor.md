---
title: "VerificationResult Constructor"
domain: apex-reference
topic: verificationresult-constructor
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.408Z
keywords: [VerificationResult, Constructor, Creates, instance, class, contains, verification, result, System.UserManagement.verifySelfRegistration., redirect, success, message, Signature, Parameters]
---

# VerificationResult Constructor

> Creates an instance of the VerificationResult class that contains the verification result from System.UserManagement.verifySelfRegistration.

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