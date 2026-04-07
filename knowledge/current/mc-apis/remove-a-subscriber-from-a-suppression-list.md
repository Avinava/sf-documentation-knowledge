---
title: "Remove a Subscriber from a Suppression List"
domain: mc-apis
topic: remove-a-subscriber-from-a-suppression-list
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:18.485Z
estimatedTokens: 219
keywords: [Remove, Subscriber, Suppression, removing, enable, again, receive, application, previously, did, send, Sample, SOAP, Envelope]
---

> By removing a subscriber from a suppression list, you enable that subscriber to again receive sends that the application previously did not send.

# Remove a Subscriber from a Suppression List

By removing a subscriber from a suppression list, you enable that subscriber to again receive sends that the application previously did not send.

This information does not remove a subscriber's record from your account, and Marketing Cloud recommends avoiding deletion of the actual subscriber information.

Use the sample code below as a model for your own API call:

### Sample SOAP Envelope

```
<soap:Body>
   <UpdateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
      <Objects xsi:type="Subscriber">
         <EmailAddress>example@example.com</EmailAddress>
         <SubscriberKey>example@example.com</SubscriberKey>
         <Lists>
            <PartnerKey xsi:nil="true"/>
            <ID>123456</ID>
            <Action>delete</Action>
         </Lists>
      </Objects>
   </UpdateRequest>
</soap:Body>
```
