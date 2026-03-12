---
title: "VerificationPolicy Enum"
domain: apex-reference
topic: verificationpolicy-enum
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:29.470Z
estimatedTokens: 256
keywords: [VerificationPolicy, Auth.VerificationPolicy, identity, verification, policy, Usage]
---

# VerificationPolicy Enum

> The Auth.VerificationPolicy
      enum contains an identity verification policy value used by the SessionManagement.generateVerificationUrl method.

# VerificationPolicy Enum

The Auth.VerificationPolicy enum contains an identity verification policy value used by the SessionManagement.generateVerificationUrl method.

## Usage

The enum value is an argument in the [SessionManagement.generateVerificationUrl](atlas.en-us.apexref.meta/apexref/apex_class_Auth_SessionManagement.htm#apex_Auth_SessionManagement_generateVerificationUrl "Initiates a user identity verification flow with the verification method that the user registered with, and returns a URL to the identity verification screen. For example, if you have a custom Visualforce page that displays sensitive account details, you can prompt the user to verify identity before viewing it.") method. The value indicates the session security policy required to initiate identity verification for the user’s session.

## Enum Values

The Auth.VerificationPolicy enum has this value.

| Value | Description |
| --- | --- |
| HIGH_ASSURANCE | The security level for the user’s current session must be High Assurance. |

## Related Topics

- SessionManagement.generateVerificationUrl (atlas.en-us.apexref.meta/apexref/apex_class_Auth_SessionManagement.htm)
