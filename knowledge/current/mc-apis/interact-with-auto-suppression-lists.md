---
title: "Interact with Auto-Suppression Lists"
domain: mc-apis
topic: interact-with-auto-suppression-lists
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:22.485Z
estimatedTokens: 2432
keywords: [Interact, Auto-Suppression, interacting, via, SOAP, API, Why, How, Sample, Envelopes, Retrieve, Contexts, Send, Classification, Sender]
---

# Interact with Auto-Suppression Lists

> This page contains information about interacting with auto-suppression lists via the SOAP API.

# Interact with Auto-Suppression Lists

This page contains information about interacting with auto-suppression lists via the SOAP API.

## Why Interact with Auto-Suppression Lists

Auto-suppression lists also you to automatically exclude one or more subscribers from a send based on the content in which a send takes place. You can use the sample code in this document to create and modify auto-suppression lists. You can also retrieve information both on the auto-suppression list itself and the context in which your account uses these auto-suppression lists.

## How to Interact with Auto-Suppression Lists

Use the sample code below as a model for your own calls.

### Sample SOAP Envelopes

#### Retrieve an Auto-Suppression List

```
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <soapenv:Header>
      <wsse:Security soapenv:mustUnderstand="1" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
         <wsse:UsernameToken wsu:Id="UsernameToken-11893489" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
            <wsse:Username>XXXXX</wsse:Username>
            <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">XXXXX</wsse:Password>
         </wsse:UsernameToken>
      </wsse:Security>
   </soapenv:Header>
   <soapenv:Body>
      <RetrieveRequestMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">
         <RetrieveRequest>
            <ObjectType>SuppressionListDefinition</ObjectType>
            <Properties>ObjectID</Properties>
            <Properties>CustomerKey</Properties>
            <Properties>Name</Properties>
            <Properties>Description</Properties>
            <Properties>Client.CreatedBy</Properties>
            <Properties>CreatedDate</Properties>
            <Properties>Client.ModifiedBy</Properties>
            <Properties>ModifiedDate</Properties>
            <Properties>Category</Properties>
            <Properties>Client.ID</Properties>
            <Properties>Client.EnterpriseID</Properties>
            <Properties>SubscriberCount</Properties>
         </RetrieveRequest>
      </RetrieveRequestMsg>
   </soapenv:Body>
</soapenv:Envelope>
```

#### Retrieve Contexts for an Auto-Suppression List

```
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <soapenv:Header>
      <wsse:Security soapenv:mustUnderstand="1" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
         <wsse:UsernameToken wsu:Id="UsernameToken-11893489" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
            <wsse:Username>XXXXX</wsse:Username>
            <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">XXXXX</wsse:Password>
         </wsse:UsernameToken>
      </wsse:Security>
   </soapenv:Header>
   <soapenv:Body>
      <RetrieveRequestMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">
         <RetrieveRequest>
            <ObjectType>SuppressionListContext</ObjectType>
            <Properties>ObjectID</Properties>
            <Properties>Definition.ObjectID</Properties>
            <Properties>Definition.Name</Properties>
            <Properties>Definition.CustomerKey</Properties>
            <Properties>Definition.Category</Properties>
            <Properties>Definition.Description</Properties>
            <Properties>Context</Properties>
            <Properties>SendClassification.ObjectID</Properties>
            <Properties>Send.ID</Properties>
            <Properties>SenderProfile.ObjectID</Properties>
            <Properties>SendClassificationType</Properties>
            <Properties>Client.CreatedBy</Properties>
            <Properties>CreatedDate</Properties>
            <Properties>Client.ModifiedBy</Properties>
            <Properties>ModifiedDate</Properties>
            <Properties>Client.ID</Properties>
            <Properties>Client.EnterpriseID</Properties>
            <Properties>AppliesToAllSends</Properties>
         </RetrieveRequest>
      </RetrieveRequestMsg>
   </soapenv:Body>
</soapenv:Envelope>
```

#### Create an Auto-Suppression List for a Specified Send Classification

```
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <soapenv:Header>
      <wsse:Security soapenv:mustUnderstand="1" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
         <wsse:UsernameToken wsu:Id="UsernameToken-5501096" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
            <wsse:Username>XXXXX</wsse:Username>
            <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">XXXXX</wsse:Password>
         </wsse:UsernameToken>
      </wsse:Security>
   </soapenv:Header>
   <soapenv:Body>
      <CreateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
         <Options/>
         <Objects xsi:type="SuppressionListDefinition" xmlns:ns1="http://exacttarget.com/wsdl/partnerAPI">
            <PartnerKey xsi:nil="true"/>
            <CustomerKey>CustomerKey</CustomerKey>
            <Name>Name</Name>
            <Category>123456</Category>
            <Description>API Created</Description>
            <Contexts>
               <Context>
                  <Client>
                     <ID>123456</ID>
                     <EnterpriseID>123456</EnterpriseID>
                  </Client>
                  <Context>BusinessUnit</Context>
                  <SendClassificationType>Marketing</SendClassificationType>
                  <AppliesToAllSends>false</AppliesToAllSends>
               </Context>
            </Contexts>
         </Objects>
      </CreateRequest>
   </soapenv:Body>
</soapenv:Envelope>
```

#### Create an Auto-Suppression List for a Specified Sender Profile

```
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <soapenv:Header>
      <wsse:Security soapenv:mustUnderstand="1" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
         <wsse:UsernameToken wsu:Id="UsernameToken-5501096" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
            <wsse:Username>XXXXX</wsse:Username>
            <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">XXXXX</wsse:Password>
         </wsse:UsernameToken>
      </wsse:Security>
   </soapenv:Header>
   <soapenv:Body>
      <CreateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
         <Options/>
         <Objects xsi:type="SuppressionListDefinition" xmlns:ns1="http://exacttarget.com/wsdl/partnerAPI">
            <PartnerKey xsi:nil="true"/>
            <CustomerKey>ASLCustomerKey</CustomerKey>
            <Name>New ASL</Name>
            <Category>1338839</Category>
            <Description>API Created</Description>
            <Contexts>
               <Context>
                  <Client>
                     <ID>123456</ID>
                     <EnterpriseID>123456</EnterpriseID>
                  </Client>
                  <Context>SenderProfile</Context>
                  <SenderProfile>
                     <ObjectID>6e4d1a05-18fb-de11-b817-00237d540dfc</ObjectID>
                  </SenderProfile>
                  <AppliesToAllSends>false</AppliesToAllSends>
               </Context>
            </Contexts>
         </Objects>
      </CreateRequest>
   </soapenv:Body>
</soapenv:Envelope>
```

#### Add a Subscriber to an Auto-Suppression List

```
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:wsa="http://schemas.xmlsoap.org/ws/2004/08/addressing" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
   <soap:Header>
      <wsse:Security soap:mustUnderstand="1">
         <wsse:UsernameToken wsu:Id="SecurityToken-6421ac0b-a454-42a3-99f7-a77ace024446">
            <wsse:Username>XXXXX</wsse:Username>
            <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">XXXXX</wsse:Password>
         </wsse:UsernameToken>
      </wsse:Security>
   </soap:Header>
   <soap:Body>
      <CreateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
         <Objects xsi:type="DataExtensionObject">
            <PartnerKey xsi:nil="true"/>
            <ObjectID xsi:nil="true"/>
            <CustomerKey>CustomerKey</CustomerKey>
            <Properties>
               <Property>
                  <Name>Email Address</Name>
                  <Value>acruz@example.com</Value>
               </Property>
            </Properties>
         </Objects>
      </CreateRequest>
   </soap:Body>
</soap:Envelope>
```

## Related Items

[Auto-Suppression Lists](https://help.salesforce.com/articleView?id=mc_es_auto_suppresion_lists.htm&type=5)
