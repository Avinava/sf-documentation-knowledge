---
title: "Using the InboundEmail Object"
domain: apex-guide
topic: using-the-inboundemail-object
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:46.544Z
keywords: [InboundEmail, Object, Example, Create, Tasks, Contacts, Handle, Unsubscribe, Email, See]
---

# Using the InboundEmail Object

# Using the InboundEmail Object

For every email the Apex email service domain receives, Salesforce creates a separate InboundEmail object that contains the contents and attachments of that email. You can use Apex classes that implement the Messaging.InboundEmailHandler interface to handle an inbound email message. Using the handleInboundEmail method in that class, you can access an InboundEmail object to retrieve the contents, headers, and attachments of inbound email messages, as well as perform many functions.

## Example 1: Create Tasks for Contacts

The following is an example of how you can look up a contact based on the inbound email address and create a new task.

```

```

## Example 2: Handle Unsubscribe Email

Companies that send marketing email to their customers and prospects must provide a way to let the recipients unsubscribe. The following is an example of how an email service can process unsubscribe requests. The code searches the subject line of inbound email for the word “unsubscribe.” If the word is found, the code finds all contacts and leads that match the From email address and sets the Email Opt Out field (HasOptedOutOfEmail) to True.

```

```

```

```

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_classes_email_inbound_what_is.htm "Apex Email Service")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_pages.htm "Visualforce Classes")

#### See Also

-   [*Apex Reference Guide*: InboundEmail Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_classes_email_inbound_inbound.htm "Apex Reference Guide: InboundEmail Class - HTML (New Window)")
    
-   [*Apex Reference Guide*: InboundEnvelope Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_classes_email_inbound_envelope.htm "Apex Reference Guide: InboundEnvelope Class - HTML (New Window)")
    
-   [*Apex Reference Guide*: InboundEmailResult Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_classes_email_inbound_result.htm "Apex Reference Guide: InboundEmailResult Class - HTML (New Window)")