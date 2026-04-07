---
title: "33000-33999 SMSTriggeredSend Object"
domain: mc-apis
topic: 33000-33999-smstriggeredsend-object
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:19.711Z
estimatedTokens: 703
keywords: [33000-33999, SMSTriggeredSend]
---

# 33000-33999 SMSTriggeredSend Object

# 33000-33999 SMSTriggeredSend Object

| Error | Type | Message | Resolution |
| --- | --- | --- | --- |
| 33000 | Client Validation Error | You must include a SMS Triggered Send Definition | Include a SMS triggered send definition in your API call. |
| 33001 | Client Validation Error | You must include a valid SMS Triggered Send Definition | Check to make sure the SMS triggered send definition you wish to use exists. |
| 33002 | Client Validation Error | You must include a customer key on the SMS Triggered Send Definition | Include a valid customer key in the SMS triggered send definition. |
| 33003 | Client Validation Error | SMSTrigSend_Client Error_Message Missing | Enter a valid message for the send. |
| 33004 | Client Validation Error | The message is too long. | Shorten message to accepted SMS standards. |
| 33005 | Client Validation Error | Invalid characters in message | Remove invalid characters in message. |
| 33006 | Client Validation Error | From address '{0}' Not Found | If the From Address used belongs to you, contact Global Supportfor assistance in solving the error.If the From Address does not belong to you, choose a valid From Address. |
| 33100 | Client Validation Single Send Error | Single sends must include a subscriber | Add a valid subscriber to the send. |
| 33101 | Client Validation Single Send Error | This subscriber does not currently exist, you must include a mobile number | Include a valid mobile number in your send. |
| 33102 | Client Validation Single Send Error | Mobile number does not comply with NANPA | Resolve any error with the phone numbers associated with the send. |
| 33300 | Subscriber Opt Out Error | This subscriber has opted out of receiving messages | Remove the subscriber from the send. |
| 33301 | Subscriber Opt Out Error | This subscriber has globally opted out of receiving messages | Remove the subscriber from the send. |
| 33302 | Subscriber Opt Out Error | SMSTrigSend_Subscriber_InvalidBlackoutTime |  |
| 33303 | Subscriber Opt Out Error | SMSTrigSend_Subscriber_InvalidBlackoutTimeZone |  |
| 33500 | Critical Error | Unknown SMS Triggered Send Type | Correct the configuration of the SMS triggered send definition |
| 33501 | Critical Error | Critical Error contact your support representative | Contact Global Support- the error has been logged. |
| 33502 | Critical Error | Critical Error unable to send message | Contact Global Support- the error has been logged. |
| 33503 | Critical Error | Critical Error contact your support representative | The application cannot create the send job. Contact Global Support- the error has been logged. |
| 33504 | Critical Error | Critical Error contact your support representative | The application cannot create a new subscriber. Contact Global Support- the error has been logged. |
