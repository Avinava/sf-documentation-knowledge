---
title: "setOneClickPost(oneClickPost)"
domain: apex-reference
topic: setoneclickpostoneclickpost
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.284Z
keywords: [setOneClickPost, oneClickPost, Optional., set, true, List-Unsubscribe-Post, header, added, email, List-Unsubscribe=One-Click., method, support, unsubscribe, functionality, sent, via, Salesforce., provide, additional, instructions]
---

# setOneClickPost(oneClickPost)

> Optional. If set to true, a List-Unsubscribe-Post header is added to an email with
    List-Unsubscribe=One-Click. Use this method to support unsubscribe functionality in email sent
    via Salesforce. You can provide additional instructions on how to send unsubscribe requests by
    using the header. This includes specifying the HTTP method and content type to use and provides
    a secure way to add more info to unsubscribe requests. Default is false.

### setOneClickPost(oneClickPost)

Optional. If set to true, a List-Unsubscribe-Post header is added to an email with List-Unsubscribe=One-Click. Use this method to support unsubscribe functionality in email sent via Salesforce. You can provide additional instructions on how to send unsubscribe requests by using the header. This includes specifying the HTTP method and content type to use and provides a secure way to add more info to unsubscribe requests. Default is false.

#### Signature

public void setOneClickPost(Boolean oneClickPost)

#### Parameters

oneClickPost

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Return Value

Type: void

#### Usage

You can set the oneClickPost method to true only after invoking the setUnsubscribeUrls method. If set to true, pass at least one HTTPS unsubscribe URL to unsubscribe.

#### Example

This example demonstrates how to send an email using Salesforce's Messaging.SingleEmailMessage class with enhanced unsubscribe functionality. It creates an email message with a recipient, subject, and body, and includes an unsubscribe URL. It also enables the oneClickPost feature, allowing for a simplified unsubscribe process. The email message is added to a list and sent using the Messaging.sendEmail method.

```

```