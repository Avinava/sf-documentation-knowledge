---
title: "Owner"
domain: mc-apis
topic: owner
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:18.047Z
estimatedTokens: 442
keywords: [Owner, subscriber, triggered, Client, specify, On-Your-Behalf, AccountID, send, Otherwise, FromAddress, FromName, Sample, SOAP, Envelope]
---

> The Owner object specifies the owner of a subscriber for triggered sends. Use the Client property to specify the On-Your-Behalf AccountID as the owner of the triggered send. Otherwise, use the FromAddress and FromName to specify the owner.

# Owner

The Owner object specifies the owner of a subscriber for triggered sends. Use the Client property to specify the On-Your-Behalf AccountID as the owner of the triggered send. Otherwise, use the FromAddress and FromName to specify the owner.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| Client | ClientID | Specifies the account ownership and context of an object. |
| FromAddress | xsd:string | Indicates From address associated with a object. Deprecated for email send definitions and triggered send definitions. |
| FromName | xsd:string | Specifies the default email message From Name. Deprecated for email send definitions and triggered send definitions. |
| User | AccountUser | Specifies the account user listed as owner. |

### Sample SOAP Envelope

```
<soapenv:Body>
      <CreateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
         <Options/>
         <Objects xsi:type="ns1:TriggeredSend" xmlns:ns1="http://exacttarget.com/wsdl/partnerAPI">
            <TriggeredSendDefinition>
               <CustomerKey>TE_Test_Key</CustomerKey>
            </TriggeredSendDefinition>
            <Subscribers>
               <Attributes>
                  <Name>Message</Name>
                  <Value>Subject GBK</Value>
               </Attributes>
               <Owner>
                  <FromName>From_Name</FromName>
                  <FromAddress>johndoe@example.com</FromAddress>
                  <Client>
                     <ID>10008968</ID>
                  </Client>
               </Owner>
              <SubscriberKey>Subscriber</SubscriberKey>
               <EmailAddress>example@example.com</EmailAddress>
            </Subscribers>
         </Objects>
      </CreateRequest>
   </soapenv:Body>
```
