---
title: "Delete a Data Extension"
domain: mc-apis
topic: delete-a-data-extension
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:21.480Z
estimatedTokens: 620
keywords: [Data, Extension, longer, require, stored, moved, new, current, can't, access, again, Sample, SOAP, Envelope, Items]
---

# Delete a Data Extension

> If you no longer require the information stored in a data extension or have moved that data to a new data extension, you can delete the current data extension object. After you delete the data extension, you can't access the data again.

# Delete a Data Extension

If you no longer require the information stored in a data extension or have moved that data to a new data extension, you can delete the current data extension object. After you delete the data extension, you can't access the data again.

The name of the deleted data extension is not immediately available for reuse. The application retains data extension information for an extended period of time even after the delete call to make sure current processes have access to that data.

Don’t delete a data extension that is assigned to a triggered send definition. If you delete a data extension assigned to a triggered send definition, the triggered send definition goes into an errored state.

Use the sample code below as a model to create your own API call.

### Sample SOAP Envelope

```
<s:Envelope xmlns:s="http://www.w3.org/2003/05/soap-envelope" xmlns:a="http://schemas.xmlsoap.org/ws/2004/08/addressing" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
   <s:Header>
      <a:Action s:mustUnderstand="1">Delete</a:Action>
      <a:MessageID>urn:uuid:d5c8c2ee-384e-4492-af18-b01e0d438b62</a:MessageID>
      <a:ReplyTo>
         <a:Address>http://schemas.xmlsoap.org/ws/2004/08/addressing/role/anonymous</a:Address>
      </a:ReplyTo>
      <a:To s:mustUnderstand="1">https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/Service.asmx</a:To>
      <o:Security s:mustUnderstand="1" xmlns:o="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
         <o:UsernameToken u:Id="uuid-c10e3bda-13ef-4868-bacd-6e760cd45cf2-1">
            <o:Username>
               USERNAME
            </o:Username>
            <o:Password>
               PASSWORD
            </o:Password>
         </o:UsernameToken>
      </o:Security>
   </s:Header>
   <s:Body xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
      <DeleteRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
         <Options></Options>
         <Objects xsi:type="DataExtension">
            <PartnerKey xsi:nil="true"></PartnerKey>
            <ObjectID xsi:nil="true"></ObjectID>
            <CustomerKey>External key of Data Extension</CustomerKey>
         </Objects>
      </DeleteRequest>
   </s:Body>
</s:Envelope>
```

## Related Items

[Data Extensions](https://help.salesforce.com/articleView?id=mc_es_data_extension_data_relationships_classic.htm&type=5)
