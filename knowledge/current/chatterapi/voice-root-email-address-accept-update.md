---
title: "Voice Root Email Address, Accept Update"
domain: chatterapi
topic: voice-root-email-address-accept-update
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:17.021Z
estimatedTokens: 220
keywords: [Voice, Root, Email, Address, Accept, change, AWS, user, that's, associated, account, resource, Service, Cloud, Amazon]
---

# Voice Root Email Address, Accept Update

> Accept the email address change for the AWS root user that's associated
    with the Voice account. This resource applies to the Service Cloud Voice with Amazon Connect
    partner telephony model.

# Voice Root Email Address, Accept Update

Accept the email address change for the AWS root user that's associated with the Voice account. This resource applies to the Service Cloud Voice with Amazon Connect partner telephony model.

Resource

```

```

Available version

64.0

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| emailAddress | String | New email address for the AWS account root user. | Required | 64.0 |
| otp | String | Six-digit one-time password sent to the new email address of the AWS account root user. | Required | 64.0 |

Response body for POST

[Voice Email Address Change Status](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_voice_email_address_update_result.htm "AWS root user email address update.")

## Code Examples

```
/connect/voice/root-email-address-update/accept
```

```
{
  "emailAddress": "awsrootuser@mycompany.com",
  "otp": "340146",
}
```

## Related Topics

- Voice Email Address Change Status (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_voice_email_address_update_result.htm)
