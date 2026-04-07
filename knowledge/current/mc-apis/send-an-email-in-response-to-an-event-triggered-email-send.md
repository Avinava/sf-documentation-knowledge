---
title: "Send an Email in Response to an Event (Triggered Email Send)"
domain: mc-apis
topic: send-an-email-in-response-to-an-event-triggered-email-send
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:24.954Z
estimatedTokens: 380
keywords: [Send, Email, Event, Triggered, scenario, how, message, definition, ensure, running, Once, trigger, Diagram, Objects, Referenced]
---

# Send an Email in Response to an Event (Triggered Email Send)

> This scenario describes how to send a triggered email message using an existing triggered send definition. Note that you must first create your triggered send definition and ensure that the triggered send definition is running before you can use it to send a triggered email message. Once the trigger

# Send an Email in Response to an Event (Triggered Email Send)

This scenario describes how to send a triggered email message using an existing triggered send definition. Note that you must first create your triggered send definition and ensure that the triggered send definition is running before you can use it to send a triggered email message. Once the triggered send definition is running, you can submit a recipient's information to that triggered send definition in order to conduct the send. For example, you could include code in your application that gathers the email address of a recipient, submits that information to the triggered send definition, and send an email to that recipient.

## Diagram

![SendTriggeredSend.jpg](/docs/resources/img/en-us/noversion?doc_id=images%2Fsendtriggeredsend.jpg&folder=mc-apis)

## Methods Used

-   [Create](atlas.en-us.noversion.mc-apis.meta/mc-apis/create.htm "Create")

## Objects Referenced

-   [TriggeredSendDefinition](atlas.en-us.noversion.mc-apis.meta/mc-apis/triggeredsenddefinition.htm "TriggeredSendDefinition")
-   [TriggeredSend](atlas.en-us.noversion.mc-apis.meta/mc-apis/triggeredsend.htm "TriggeredSend")
-   [Email](atlas.en-us.noversion.mc-apis.meta/mc-apis/email.htm "Email")

## Required Properties

-   TriggeredSendDefinition.CustomerKey
-   Subscriber.EmailAddress or Subscriber.SubscriberKey, depending on account configuration

## Related Items

[Triggered Emails](https://help.salesforce.com/articleView?id=mc_es_triggered_emails.htm&type=5)

## Related Topics

- Create (atlas.en-us.noversion.mc-apis.meta/mc-apis/create.htm)
- TriggeredSendDefinition (atlas.en-us.noversion.mc-apis.meta/mc-apis/triggeredsenddefinition.htm)
- TriggeredSend (atlas.en-us.noversion.mc-apis.meta/mc-apis/triggeredsend.htm)
- Email (atlas.en-us.noversion.mc-apis.meta/mc-apis/email.htm)
