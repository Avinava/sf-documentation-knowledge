---
title: "Create a Triggered Send Using AMPscript and the SOAP Web Service API"
domain: mc-programmatic-content
topic: create-a-triggered-send-using-ampscript-and-the-soap-web-service-api
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:22.103Z
estimatedTokens: 493
keywords: [Triggered, Send, AMPscript, SOAP, Web, Service, API, contained, landing, interact, creates, instance, personalized, content, message, sample, below, model, own, scrip]
---

> Use AMPscript contained in a landing page to interact with the web service SOAP API to create a triggered send. The AMPscript creates the instance of the triggered send and provides personalized content in the triggered send message. Use the sample AMPscript below as a model to create your own scrip

# Create a Triggered Send Using AMPscript and the SOAP Web Service API

Use AMPscript contained in a landing page to interact with the web service SOAP API to create a triggered send. The AMPscript creates the instance of the triggered send and provides personalized content in the triggered send message. Use the sample AMPscript below as a model to create your own script. Set variables within the triggered send message or email template to hold subscriber information and use it within the message.

This code demonstrates an actual triggered send script.

```
%%[

var @emailaddr, @ts, @tsDef, @ts_subkey, @ts_sub, @ts_statusCode, @errorCode
SET @emailaddr = "help@example.com"

   SET @ts = CreateObject("TriggeredSend")
   SET @tsDef = CreateObject("TriggeredSendDefinition")
   SET @ts_subkey = @emailaddr

   SetObjectProperty(@tsDef, "CustomerKey", "VolConfirm")
   SetObjectProperty(@ts, "TriggeredSendDefinition", @tsDef)

   SET @ts_sub = CreateObject("Subscriber")
   SetObjectProperty(@ts_sub, "EmailAddress", @emailaddr)

   IF NOT EMPTY(@ts_subkey) THEN
       SetObjectProperty(@ts_sub, "SubscriberKey", @ts_subkey)
   ELSE
       SetObjectProperty(@ts_sub, "SubscriberKey", @emailaddr)
   ENDIF
   AddObjectArrayItem(@ts, "Subscribers", @ts_sub)
   SET @ts_statusCode = InvokeCreate(@ts, @ts_statusMsg, @errorCode)

   IF @ts_statusCode != "OK" THEN
       RaiseError(@ts_statusMsg, 0, @ts_statusCode, @errorCode)
   ENDIF

]%%
```

Triggered send messages retrieve information for variables in the same way other email templates retrieve that information when sending to lists or data extensions.

Dynamically include email addresses in your triggered sends for use as primary recipients and CC recipients. For example, the data extension could use %%EmailAddress%% to pull information from the EmailAddress data extension field for the primary recipient and %%CCEmailAddress%% for the CC recipient. Separate multiple personalizations with semicolons.
