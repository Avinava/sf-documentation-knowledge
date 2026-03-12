---
title: "Voice Root Email Address Update Accept Input"
domain: chatterapi
topic: voice-root-email-address-update-accept-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.733Z
estimatedTokens: 150
keywords: [Voice, Root, Email, Address, Accept, Input, change, AWS, user, that's, associated, account, Service, Cloud, Amazon]
---

# Voice Root Email Address Update Accept Input

> Accept the email address change for the AWS root user that's associated with the Voice
    account. This request applies to the Service Cloud Voice with Amazon Connect partner telephony
    model.

# Voice Root Email Address Update Accept Input

Accept the email address change for the AWS root user that's associated with the Voice account. This request applies to the Service Cloud Voice with Amazon Connect partner telephony model.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| emailAddress | String | New email address for the AWS account root user. | Required | 64.0 |
| otp | String | Six-digit one-time password sent to the new email address of the AWS account root user. | Required | 64.0 |

## Code Examples

```
{
  "emailAddress": "awsrootuser@mycompany.com",
  "otp": "340146",
}
```
