---
title: "Create a Triggered Send for an On-Your-Behalf Account"
domain: mc-apis
topic: create-a-triggered-send-for-an-on-your-behalf-account
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:16.246Z
estimatedTokens: 701
keywords: [Triggered, Send, On-Your-Behalf, Account, conceptual, procedural, creating, via, SOAP, API, Why, How, Sample, Code]
---

> This page contains conceptual and procedural information about creating a triggered send for an On-Your-Behalf account via the SOAP API.

# Create a Triggered Send for an On-Your-Behalf Account

This page contains conceptual and procedural information about creating a triggered send for an On-Your-Behalf account via the SOAP API.

## Why Create a Triggered Send for an On-Your-Behalf Account

By creating a triggered send tied to an On-Your-Behalf account, you can take advantage of the personalization capabilities of the account while utilizing the immediacy and availability of a triggered send.

## How To Create a Triggered Send for an On-Your-Behalf Account

Use the sample code below to create a triggered send for an On-Your-Behalf account. Use the ID of the specific On-Your-Behalf account as the value of OwnerID to create the send for an On-Your-Behalf account from the top level admin account.

### Sample Code

```
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:wsa="http://schemas.xmlsoap.org/ws/2004/08/addressing" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
   <soap:Header>
      <wsa:Action>Create</wsa:Action>
      <wsa:MessageID>urn:uuid:bd9bc23b-42da-4c2e-b4c1-b1e822f520a6</wsa:MessageID>
      <wsa:ReplyTo>
         <wsa:Address>http://schemas.xmlsoap.org/ws/2004/08/addressing/role/anonymous</wsa:Address>
      </wsa:ReplyTo>
      <wsa:To>https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/Service.asmx</wsa:To>
      <wsse:Security soap:mustUnderstand="1">
         <wsse:UsernameToken wsu:Id="SecurityToken-884da619-59bb-4db6-834d-138322342442">
            <wsse:Username>USER</wsse:Username>
            <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">PASSWORD</wsse:Password>
         </wsse:UsernameToken>
      </wsse:Security>
   </soap:Header>
   <soap:Body>
      <CreateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
         <Options/>
         <Objects xsi:type="TriggeredSend">
            <ObjectID xsi:nil="true"/>
            <TriggeredSendDefinition>
               <ObjectID xsi:nil="true"/>
               <CustomerKey>Test_Triggered</CustomerKey>
            </TriggeredSendDefinition>
            <Subscribers>
               <ObjectID xsi:nil="true"/>
               <Owner>
                  <Client>
                     <ID>INSERT ID NUMBER HERE</ID>
                  </Client>
               </Owner>
               <EmailAddress>help@example</EmailAddress>
               <SubscriberKey>help@example.com</SubscriberKey>
            </Subscribers>
         </Objects>
      </CreateRequest>
   </soap:Body>
</soap:Envelope>
```
