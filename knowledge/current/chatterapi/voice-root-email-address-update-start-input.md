---
title: "Voice Root Email Address Update Start Input"
domain: chatterapi
topic: voice-root-email-address-update-start-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:10.079Z
estimatedTokens: 122
keywords: [Voice, Root, Email, Address, Start, process, change, AWS, user, that's, account, Service, Cloud, Amazon, Connect, partner, telephony, model]
---

> Start the process to change the email address of the AWS root user that's associated
    with the Voice account. This request applies to the Service Cloud Voice with Amazon Connect
    partner telephony
    model.

# Voice Root Email Address Update Start Input

Start the process to change the email address of the AWS root user that's associated with the Voice account. This request applies to the Service Cloud Voice with Amazon Connect partner telephony model.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| emailAddress | String | New email address for the AWS account root user. | Required | 64.0 |

## Code Examples

```
{
  "emailAddress": "awsrootuser@mycompany.com"
}
```
