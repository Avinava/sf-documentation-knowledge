---
title: "Understanding Outbound Messaging"
domain: api
topic: understanding-outbound-messaging
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:33:57.809Z
estimatedTokens: 191
keywords: [Understanding, Outbound, Messaging, uses, notifications, call, send, SOAP, messages, over, HTTP, designated, endpoint, triggered, workflow]
---

# Understanding Outbound Messaging

> Outbound messaging uses the notifications() call to
         send SOAP messages over HTTP(S) to a designated endpoint when triggered by a workflow rule.

# Understanding Outbound Messaging

Outbound messaging uses the [notifications()](atlas.en-us.api.meta/api/sforce_api_om_outboundmessaging_wsdl.htm#i1473596) call to send SOAP messages over HTTP(S) to a designated endpoint when triggered by a workflow rule.

![outbound messaging workflow diagram](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapi%2Fimages%2Foutbound_overview.gif&folder=api)

After you set up outbound messaging, when a triggering event occurs, a message is sent to the specified endpoint URL. The message contains the fields specified when you created the outbound message. After the endpoint URL receives the message, it can take the information from the message and process it. To do that, you must examine the outbound messaging WSDL.

## Related Topics

- notifications() (atlas.en-us.api.meta/api/sforce_api_om_outboundmessaging_wsdl.htm)
