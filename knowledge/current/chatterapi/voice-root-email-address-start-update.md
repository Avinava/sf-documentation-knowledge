---
title: "Voice Root Email Address, Start Update"
domain: chatterapi
topic: voice-root-email-address-start-update
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:17.025Z
estimatedTokens: 260
keywords: [Voice, Root, Email, Address, Start, process, change, AWS, user, that's, associated, account, resource, Service, Cloud]
---

# Voice Root Email Address, Start Update

> Start the process to change the email address of the AWS root user
    that's associated with the Voice account. This resource applies to the Service Cloud Voice with
    Amazon Connect partner telephony model. Start the email address update process by sending an
    email message to the AWS root user. The message includes a one-time password (OTP), which the
    email recipient uses to accept the email address change. Email notifications are also sent to
    all admins of the Salesforce org.

# Voice Root Email Address, Start Update

Start the process to change the email address of the AWS root user that's associated with the Voice account. This resource applies to the Service Cloud Voice with Amazon Connect partner telephony model. Start the email address update process by sending an email message to the AWS root user. The message includes a one-time password (OTP), which the email recipient uses to accept the email address change. Email notifications are also sent to all admins of the Salesforce org.

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

Response body for POST

[Voice Email Address Change Status](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_voice_email_address_update_result.htm "AWS root user email address update.")

## Code Examples

```
/connect/voice/root-email-address-update/start
```

```
{
  "emailAddress": "awsrootuser@mycompany.com"
}
```

## Related Topics

- Voice Email Address Change Status (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_voice_email_address_update_result.htm)
