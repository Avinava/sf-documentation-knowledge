---
title: "SendEmailResult"
domain: api
topic: sendemailresult
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:57.585Z
estimatedTokens: 644
keywords: [SendEmailResult, sendEmail, call, objects, SendEmailError]
---

# SendEmailResult

> The sendEmail() call returns a list of
            SendEmailResult objects. Each SendEmailResult object has the following properties:

# SendEmailResult

The [sendEmail()](atlas.en-us.api.meta/api/sforce_api_calls_sendemail.htm "Immediately sends an email message.") call returns a list of SendEmailResult objects. Each SendEmailResult object has the following properties:

| Name | Type | Description |
| --- | --- | --- |
| success | boolean | If sending single email: Indicates whether the email was successfully accepted for delivery by the message transfer agent (true) or not (false). Even if success = true, it does not mean the intended recipients received the email, as it could have bounced or been blocked by a spam blocker. Also, even if the email is successfully accepted for delivery by the message transfer agent, there can still be errors in the error array related to individual addresses within the email.If sending mass email: Indicates whether the email was successfully added to the queue for processing (true) or not (false). Even if the email was added to the queue, there can still be processing errors that prevent delivery to the intended recipients. |
| SendEmailError | Error[] | If an error occurred during the sendEmail() call, a list of SendEmailError objects is returned. For single email, errors indicate that Salesforce wasn't able to deliver the email. For mass email, errors indicate that the email wasn't added to the queue for processing. |

## SendEmailError

SendEmailError can have the following attributes:

| Name | Type | Description |
| --- | --- | --- |
| Fields | Field[] | Reserved for future use. Array of one or more field names. Identifies which fields in the object, if any, affected the error condition. |
| Message | string | Error message text. |
| StatusCode | statusCode | A code that characterizes the error. The full list of status codes is available in the WSDL file for your organization. |
| TargetObjectId | ID | The object ID of the target for which the error occurred. |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api)

#### Note

If an error occurs that prevents [sendEmail()](atlas.en-us.api.meta/api/sforce_api_calls_sendemail.htm "Immediately sends an email message.") from sending the email to one or more targets, each TargetObjectId for those targets has an associated error in SendEmailResult. A TargetObjectId that does not have an associated error in SendEmailResult indicates the email was sent to the target. If SendEmailResult has an error that does not have an associated TargetObjectId, no email was sent.

The following is an example of how to parse through a resulting set for errors:

```

```

## Code Examples

```apex
Messaging.SingleEmailMessage email = new Messaging.SingleEmailMessage();
email.setToAddresses(new String[] { 'admin@acme.com' });
email.setSubject('my subject');
email.setPlainTextBody('plain text body');
List<Messaging.SendEmailResult> results = 
    Messaging.sendEmail(new Messaging.Email[] { email });
if (!results.get(0).isSuccess()) {
    System.StatusCode statusCode = results.get(0).getErrors()[0].getStatusCode();
    String errorMessage = results.get(0).getErrors()[0].getMessage();
}
```

## Related Topics

- sendEmail() (atlas.en-us.api.meta/api/sforce_api_calls_sendemail.htm)
- the WSDL file for your
                                organization (atlas.en-us.api.meta/api/sforce_api_quickstart_intro.htm)
