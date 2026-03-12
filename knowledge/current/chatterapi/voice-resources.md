---
title: "Voice Resources"
domain: chatterapi
topic: voice-resources
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:17.007Z
estimatedTokens: 215
keywords: [Voice, Resources, email, address, AWS, root, user, that's, associated, account, apply, Service, Cloud, Amazon, Connect]
---

# Voice Resources

> Update the email address of the AWS root user that's associated
            with the Voice account. These resources apply to the Service Cloud Voice with Amazon
                Connect partner telephony model.

# Voice Resources

Update the email address of the AWS root user that's associated with the Voice account. These resources apply to the *Service Cloud Voice with Amazon Connect* partner telephony model.

Available resources are:

| Resource | Description |
| --- | --- |
| /connect/voice/root-email-address-update/start | Start the process to change the email address of the AWS root user that's associated with the Voice account. Start the email address update process by sending an email message to the AWS root user. The message includes a one-time password (OTP), which the email recipient uses to accept the email address change. Email notifications are also sent to all admins of the Salesforce org. |
| /connect/voice/root-email-address-update/accept | Accept the email address change for the AWS root user that's associated with the Voice account. |

## Related Topics

- /connect/voice/root-email-address-update/start (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_voice_email_address_update_start.htm)
- /connect/voice/root-email-address-update/accept (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_voice_email_address_update_accept.htm)
