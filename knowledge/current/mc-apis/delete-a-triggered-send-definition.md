---
title: "Delete a Triggered Send Definition"
domain: mc-apis
topic: delete-a-triggered-send-definition
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:21.447Z
estimatedTokens: 494
keywords: [Triggered, Send, Definition, sample, code, below, model, creating, own, API, Marketing, Cloud, changes, external, key]
---

# Delete a Triggered Send Definition

> To delete a triggered send definition, use the sample code below as a model for creating your own API request. Marketing Cloud changes the external key and name of a triggered send definition after it is deleted. This change allows you to reuse deleted names and external keys for new triggered send 

# Delete a Triggered Send Definition

To delete a triggered send definition, use the sample code below as a model for creating your own API request. Marketing Cloud changes the external key and name of a triggered send definition after it is deleted. This change allows you to reuse deleted names and external keys for new triggered send definitions.

> API requests fail if they act on a deleted triggered send definition.

## Sample Ruby, PHP, Python, CSharp, and Java Code

Review the [SDK examples](https://developer.salesforce.com/docs/atlas.en-us.mc-sdks.meta/mc-sdks/triggered-send-delete.htm).

## Sample SOAP Envelope

```
<s:Envelope xmlns:s="http://www.w3.org/2003/05/soap-envelope" xmlns:a="http://schemas.xmlsoap.org/ws/2004/08/addressing" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
   <s:Header>
      <o:Security s:mustUnderstand="1" xmlns:o="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
         <o:UsernameToken u:Id="uuid-c10e3bda-13ef-4868-bacd-6e760cd45cf2-1">
            <o:Username>${#Project#S1:113903:UN}</o:Username>
            <o:Password>${#Project#S1:113903:PW}</o:Password>
         </o:UsernameToken>
      </o:Security>
   </s:Header>
   <s:Body xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
      <DeleteRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
         <Options/>
         <Objects xsi:type="TriggeredSendDefinition">
            <PartnerKey xsi:nil="true"/>
            <ObjectID xsi:nil="true"/>
            <CustomerKey>ExampleTSDDelete</CustomerKey>
         </Objects>
      </DeleteRequest>
   </s:Body>
</s:Envelope>
```

## Related Items

-   [Triggered Emails](https://help.salesforce.com/articleView?id=mc_es_triggered_emails.htm&type=5)
-   SDK: [Delete a TriggeredSend](https://developer.salesforce.com/docs/atlas.en-us.mc-sdks.meta/mc-sdks/triggered-send-delete.htm)
