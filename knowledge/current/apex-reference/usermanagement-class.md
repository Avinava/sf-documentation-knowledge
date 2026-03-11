---
title: "UserManagement Class"
domain: apex-reference
topic: usermanagement-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.583Z
keywords: [UserManagement, Class, Completes, verification, service, email, phone, SMS, Salesforce, Authenticator, password, time-based, one-time, TOTP, methods., verifyVerificationMethod, identifier, code, method, Signature]
---

# UserManagement Class

> Completes the verification service for email, phone (SMS), Salesforce
      Authenticator, password, or time-based one-time password (TOTP) verification
    methods.

### verifyVerificationMethod(identifier, code, method)

Completes the verification service for email, phone (SMS), Salesforce Authenticator, password, or time-based one-time password (TOTP) verification methods.

#### Signature

public static VerificationResult verifyVerificationMethod(String identifier, String code, Auth.VerificationMethod method)

#### Parameters

identifier

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Identifier returned from initVerificationMethod for EMAIL, SMS, and SALESFORCE\_AUTHENTICATOR.

code

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Code used to verify the user’s identity for EMAIL, SMS, or PASSWORD.

method

Type: [Auth.VerificationMethod](atlas.en-us.apexref.meta/apexref/apex_enum_Auth_VerificationMethod.htm "Contains the different ways users can identify themselves when logging in. You can use it to implement mobile-centric passwordless login pages and to self-register (and deregister) verification methods.")

Method used to verify the user’s identity, which can be EMAIL, PASSWORD, SALESFORCE\_AUTHENTICATOR, SMS, or TOTP.

#### Return Value

Type: [VerificationResult](atlas.en-us.apexref.meta/apexref/apex_class_Auth_VerificationResult.htm#apex_class_Auth_VerificationResult "Contains the result of a verification challenge that you invoke when you create your own Verify page. The challenge can be initiated by either the System.UserManagement.verifyPasswordlessLogin or System.UserManagement.verifySelfRegistration method.")

#### Usage

Use this method along with its paired initVerificationMethod to customize a verification service for EMAIL, SMS, or SALESFORCE\_AUTHENTICATOR verification methods. Or use this method alone to provide a complete verification service for PASSWORD and TOTP verification methods.

This method checks whether the user entered the correct verification code or password. If the verification code or password is correct, the method verifies the user’s identity.

If the verification code or password isn’t valid, the service returns an error message.

#### Examples

This example shows multi-factor authentication using email.

```

```

The next two examples show multi-factor authentication using only the verifyVerificationMethod for password and TOTP verifications.

```

```

```

```