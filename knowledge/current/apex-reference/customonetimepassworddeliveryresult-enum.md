---
title: "CustomOneTimePasswordDeliveryResult Enum"
domain: apex-reference
topic: customonetimepassworddeliveryresult-enum
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:29.390Z
estimatedTokens: 282
keywords: [CustomOneTimePasswordDeliveryResult, Indicates, status, attempt, send, one-time, password, OTP, external, user, via, custom, messaging, provider., Usage, Values]
---

# CustomOneTimePasswordDeliveryResult Enum

> Indicates the status of an attempt to send a one-time password (OTP) to an external user
    via a custom messaging provider.

# CustomOneTimePasswordDeliveryResult Enum

Indicates the status of an attempt to send a one-time password (OTP) to an external user via a custom messaging provider.

## Usage

To use this feature, contact Salesforce Customer Support.

This enum specifies the result of the sendOneTimePassword method in an implementation of the Auth.CustomOneTimePasswordDeliveryHandler interface.

## Enum Values

The following are the values of the Auth.CustomOneTimePasswordDeliveryResult enum.

| Value | Description |
| --- | --- |
| COUNTRY_BLOCK | Indicates that the user’s phone number has a country code that Salesforce doesn’t support. |
| EXCEPTION | Indicates that the handler threw an exception. |
| INVALID_PHONE_NUMBER | Indicates that the user’s phone number isn’t valid. For example, it’s in the wrong format or contains characters that aren’t numbers. |
| MESSAGE_LIMIT_EXCEEDED | Indicates that your Experience Cloud site reached the message limit allowed by your license. |
| PROVIDER_ERROR | Indicates an error with the custom OTP service. |
| SUCCESS | Indicates that the OTP message was successfully sent to the user. |
