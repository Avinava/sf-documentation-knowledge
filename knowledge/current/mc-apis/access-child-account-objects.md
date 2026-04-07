---
title: "Access Child Account Objects"
domain: mc-apis
topic: access-child-account-objects
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:22.378Z
estimatedTokens: 819
keywords: [Access, Child, Account, Objects, execute, certain, actions, view, permissions, roles, assigned, different, user, impersonation, help]
---

# Access Child Account Objects

> To execute certain actions or view information related to a child account, use the permissions and roles assigned to a different user. You can also use impersonation to help another user and troubleshoot their problems or issues inside their own account. You need admin access to perform impersonatio

# Access Child Account Objects

To execute certain actions or view information related to a child account, use the permissions and roles assigned to a different user. You can also use impersonation to help another user and troubleshoot their problems or issues inside their own account. You need admin access to perform impersonation.

> These examples are for agency or Enterprise 1.0 with Lock and Publish account types. For Enterprise 2.0 accounts, use the ClientIDs property on a retrieve request to specify multiple child accounts for a single call.

### Sample .NET Code

```
//Options
deo.Client = new ClientID();
deo.Client.ID = Convert.ToInt32(txtMID.Text);
deo.Client.IDSpecified = true;
```

### Sample .NET Code - Retrieve Request with Impersonation

```
RetrieveRequest rr = new RetrieveRequest();
rr.ObjectType = "Send";//required

ClientID rrclient = new ClientID();
rrclient.ID = 12345;
rrclient.IDSpecified = true;

RetrieveOptions ro = new RetrieveOptions();
ro.Client = rrclient;
rr.Options = ro;
```

### Sample PHP Code

```
$clientObject = new Marketing Cloud_ClientID();
$clientObject->PartnerClientKey="SamplePartnerClientKey";
$configureOptions = new Marketing Cloud_ConfigureOptions();
//assign to options
$configureOptions->Client = new SoapVar($clientObject, SOAP_ENC_OBJECT, 'ClientID', "http://exacttarget.com/wsdl/partnerAPI");
```

### Sample SOAP Envelope

```
XXXXX<?xml version="1.0" encoding="utf-8"?>
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <soapenv:Header>
      <wsse:Security soapenv:mustUnderstand="1" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
         <wsse:UsernameToken wsu:Id="UsernameToken-32259181" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
            <wsse:Username>XXXXXXX</wsse:Username>
            <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">XXXXX</wsse:Password>
         </wsse:UsernameToken>
      </wsse:Security>
   </soapenv:Header>
   <soapenv:Body>
      <RetrieveRequestMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">
         <RetrieveRequest>
            <ClientIDs>
               <ID>12345</ID>
            </ClientIDs>
            <ObjectType>Subscriber</ObjectType>
            <Properties>ID</Properties>
            <Properties>PartnerKey</Properties>
            <Properties>CreatedDate</Properties>
            <Properties>Client.ID</Properties>
            <Properties>Client.PartnerClientKey</Properties>
            <Properties>EmailAddress</Properties>
            <Properties>SubscriberKey</Properties>
            <Properties>Status</Properties>
            <Properties>UnsubscribedDate</Properties>
            <!--<Filter xsi:type="SimpleFilterPart">
               <Property>SubscriberKey</Property>
               <SimpleOperator>equals</SimpleOperator>
               <Value>123456</Value>
            </Filter>
-->
         </RetrieveRequest>
         <QueryAllAccounts>true</QueryAllAccounts>
      </RetrieveRequestMsg>
   </soapenv:Body>
</soapenv:Envelope>
```
