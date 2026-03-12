---
title: "Invoking Apex"
domain: apex-guide
topic: invoking-apex
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:33.582Z
estimatedTokens: 765
keywords: [Invoking, Apex, run, code, triggers, asynchronously, SOAP, REST, web, services]
---

# Invoking Apex

> You can run Apex code with triggers, or asynchronously, or as SOAP or REST web
        services.

# Invoking Apex

You can run Apex code with triggers, or asynchronously, or as SOAP or REST web services.

1.  [Anonymous Blocks](atlas.en-us.apexcode.meta/apexcode/apex_anonymous_block.htm)
    An anonymous block is Apex code that doesn’t get stored in the metadata, but that can be compiled and executed.
2.  [Triggers](atlas.en-us.apexcode.meta/apexcode/apex_triggers.htm)
    Apex can be invoked by using triggers. Apex triggers enable you to perform custom actions before or after changes to Salesforce records, such as insertions, updates, or deletions.
3.  [Asynchronous Apex](atlas.en-us.apexcode.meta/apexcode/apex_async_overview.htm)
    Apex offers multiple ways for running your Apex code asynchronously. Choose the asynchronous Apex feature that best suits your needs.
4.  [Exposing Apex Methods as SOAP Web Services](atlas.en-us.apexcode.meta/apexcode/apex_web_services.htm)
    You can expose your Apex methods as SOAP web services so that external applications can access your code and your application.
5.  [Exposing Apex Classes as REST Web Services](atlas.en-us.apexcode.meta/apexcode/apex_rest.htm)
    You can expose your Apex classes and methods so that external applications can access your code and your application through the REST architecture.
6.  [Apex Email Service](atlas.en-us.apexcode.meta/apexcode/apex_classes_email_inbound_what_is.htm)
    You can use email services to process the contents, headers, and attachments of inbound email. For example, you can create an email service that automatically creates contact records based on contact information in messages.
7.  [Using the InboundEmail Object](atlas.en-us.apexcode.meta/apexcode/apex_classes_email_inbound_using.htm)
    For every email the Apex email service domain receives, Salesforce creates a separate InboundEmail object that contains the contents and attachments of that email. You can use Apex classes that implement the Messaging.InboundEmailHandler interface to handle an inbound email message. Using the handleInboundEmail method in that class, you can access an InboundEmail object to retrieve the contents, headers, and attachments of inbound email messages, as well as perform many functions.
8.  [Visualforce Classes](atlas.en-us.apexcode.meta/apexcode/apex_pages.htm)
    In addition to giving developers the ability to add business logic to Salesforce system events such as button clicks and related record updates, Apex can also be used to provide custom logic for Visualforce pages through custom Visualforce controllers and controller extensions.
9.  [JavaScript Remoting](atlas.en-us.apexcode.meta/apexcode/apex_invoking_javascript_remoting.htm)
    Use JavaScript remoting in Visualforce to call methods in Apex controllers from JavaScript. Create pages with complex, dynamic behavior that isn’t possible with the standard Visualforce AJAX components.
10.  [Apex in AJAX](atlas.en-us.apexcode.meta/apexcode/apex_and_ajax.htm)
     The AJAX toolkit includes built-in support for invoking Apex through anonymous blocks or public webservice methods.

## Related Topics

- Anonymous Blocks (atlas.en-us.apexcode.meta/apexcode/apex_anonymous_block.htm)
- Triggers (atlas.en-us.apexcode.meta/apexcode/apex_triggers.htm)
- Asynchronous Apex (atlas.en-us.apexcode.meta/apexcode/apex_async_overview.htm)
- Exposing Apex Methods as SOAP Web Services (atlas.en-us.apexcode.meta/apexcode/apex_web_services.htm)
- Exposing Apex Classes as REST Web Services (atlas.en-us.apexcode.meta/apexcode/apex_rest.htm)
- Apex Email Service (atlas.en-us.apexcode.meta/apexcode/apex_classes_email_inbound_what_is.htm)
- Using the InboundEmail Object (atlas.en-us.apexcode.meta/apexcode/apex_classes_email_inbound_using.htm)
- Visualforce Classes (atlas.en-us.apexcode.meta/apexcode/apex_pages.htm)
- JavaScript Remoting (atlas.en-us.apexcode.meta/apexcode/apex_invoking_javascript_remoting.htm)
- Apex in AJAX (atlas.en-us.apexcode.meta/apexcode/apex_and_ajax.htm)
