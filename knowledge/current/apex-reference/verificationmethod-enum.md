---
title: "VerificationMethod Enum"
domain: apex-reference
topic: verificationmethod-enum
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:29.420Z
estimatedTokens: 606
keywords: [VerificationMethod, Contains, different, ways, users, identify, themselves, logging, in., implement, mobile-centric, passwordless, login, pages, self-register, deregister, verification, methods., Usage, Values]
---

# VerificationMethod Enum

> Contains the different ways users can identify themselves when
      logging in. You can use it to implement mobile-centric passwordless login pages and to
      self-register (and deregister) verification methods.

# VerificationMethod Enum

Contains the different ways users can identify themselves when logging in. You can use it to implement mobile-centric passwordless login pages and to self-register (and deregister) verification methods.

## Usage

The enum value is an argument in [System.Site.passwordlessLogin](atlas.en-us.apexref.meta/apexref/apex_classes_sites.htm#apex_System_Site_passwordlessLogin "Logs in a user to a Salesforce Site or Experience Cloud site using an identity verification method, such as email or text, instead of a password. Passwordless login is a convenient, mobile-centric way to welcome users into your site. Let your users log in with something other than their password, like their email address or phone number."), [System.UserManagement.registerVerificationMethod](atlas.en-us.apexref.meta/apexref/apex_class_System_UserManagement.htm#apex_System_UserManagement_registerVerificationMethod "Registers an identity verification method. Verification methods can be a time-based one-time password (TOTP), email or text verification code, Salesforce Authenticator, or U2F-compatible security key. End users register verification methods for themselves."), and [System.UserManagement.deregisterVerificationMethod](atlas.en-us.apexref.meta/apexref/apex_class_System_UserManagement.htm#apex_System_UserManagement_deregisterVerificationMethod "Deregisters an identity verification method. Use this method to let users delete an existing verification method.") methods. The value indicates the method used to verify a user’s identity.

## Enum Values

The following are the values of the Auth.VerificationMethod enum.

| Value | Description |
| --- | --- |
| BUILT_IN_AUTHENTICATOR | Identity verified with a built-in authenticator. |
| EMAIL | Identity verified with a verification code sent in an email message. |
| PASSWORD | Identity verified with a password. |
| SALESFORCE_AUTHENTICATOR | Identity verified by Salesforce Authenticator. |
| SECURITY_KEY | Identity verified by a WebAuthn-compatible physical security key. Includes all security keys registered or used after Summer ’22. |
| SMS | Identity verified with a verification code sent via SMS message. |
| TOTP | Identity verified with a time-based one-time password (TOTP). |
| U2F | Identity verified by a U2F physical security key, such as a YubiKey.NoteFor U2F security keys registered or used after Summer ’22, use SECURITY_KEY instead. |

## Related Topics

- System.Site.passwordlessLogin (atlas.en-us.apexref.meta/apexref/apex_classes_sites.htm)
- System.UserManagement.registerVerificationMethod (atlas.en-us.apexref.meta/apexref/apex_class_System_UserManagement.htm)
- System.UserManagement.deregisterVerificationMethod (atlas.en-us.apexref.meta/apexref/apex_class_System_UserManagement.htm)
