---
title: "VerificationAction Enum"
domain: apex-reference
topic: verificationaction-enum
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:29.464Z
estimatedTokens: 144
keywords: [VerificationAction, send, one-time, password, OTP, user, headless, passwordless, login, flow, Usage]
---

# VerificationAction Enum

> Indicates the method that you use to send a one-time password (OTP) to a user during the
    headless passwordless login flow.

# VerificationAction Enum

Indicates the method that you use to send a one-time password (OTP) to a user during the headless passwordless login flow.

## Usage

Use this enum to specify the user's method of receiving a one-time password when you implement the Auth.HeadlessUserDiscoveryHandler interface.

## Enum Values

The following are the values of the Auth.VerificationAction enum.

| Value | Description |
| --- | --- |
| EMAIL | Indicates that the user is verifying their identity with email. |
| SMS | Indicates that the user is verifying their identity with SMS. |
