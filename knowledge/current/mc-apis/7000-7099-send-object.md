---
title: "7000-7099 Send Object"
domain: mc-apis
topic: 7000-7099-send-object
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:19.882Z
estimatedTokens: 429
keywords: [7000-7099, Send]
---

# 7000-7099 Send Object

# 7000-7099 Send Object

| Error | Type | Message | Resolution |
| --- | --- | --- | --- |
| 7000 | Validation | Email failed validation: [validation error] | This error occurs when the email does not contain one of the required elements: An unsubscribe link, A physical mailing address, or Correct syntax for attributes. To correct this error, add the missing required element. |
| 7001 | Validation | An email ID, Partner Key, or body must be specified | Specify an identifier for an existing email (ID or PartnerKey) or specify a body for a new email. |
| 7002 | Validation | A list must be specified | Specify an identifier for an existing list (ID or PartnerKey) or specify subscribers for a new list. |
| 7003 | System | No lists were created to send to | Log the error and contact Marketing Cloud. |
| 7004 | System or Validation | Error creating/updating lists. List creations failed: [error message] | Log the error and contact Marketing CloudThis message is generic, therefore it is recommended to create List objects prior to creating the Send object. |
| 7005 | Validation | Invalid E-mail partner key: [PartnerKey] | Log the error and ensure the correct PartnerKey is set on the Email object. |
| 7006 | System or Validation | Email Creation FailedEmail Creation Failed: [Email Error Message] | Check the properties of the emailThis message is generic, therefore it is recommended to create the Email object prior to creating the Send object. |
| 7007 | System | Unable to load email | Log the error and contact Marketing Cloud. |
| 7008 | System | Job Creation Failed | Log the error and contact Marketing Cloud. |
| 7009 |  | Send Job Creation Failure |  |
| 7010 |  | Send Account Status Failure |  |
