---
title: "Retrieve Profile Attributes on the Subscriber Object"
domain: mc-apis
topic: retrieve-profile-attributes-on-the-subscriber-object
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:23.660Z
estimatedTokens: 991
keywords: [Retrieve, Profile, Attributes, Subscriber, retrieving, attribute, defined, account, Once, retrieved, own, custom, application, system, build]
---

# Retrieve Profile Attributes on the Subscriber Object

> By retrieving information from the Subscriber object, you can get a list of values for each profile attribute defined in your account for each subscriber. Once retrieved, you can use this information in your own custom application or system. For example, you could build an application that dynamical

# Retrieve Profile Attributes on the Subscriber Object

By retrieving information from the Subscriber object, you can get a list of values for each profile attribute defined in your account for each subscriber. Once retrieved, you can use this information in your own custom application or system. For example, you could build an application that dynamically retrieves available attributes from your Marketing Cloud account and uses that information in a triggered email send.

If you don't have more profile attributes defined in your account, this call retrieves the following information:

```
Attribute.Name = "Email Address"
Attribute.Value = "[subscriber email address]"
```

## Sample .NET Code

```
RetrieveRequest rr = new RetrieveRequest();
    rr.ObjectType = "Subscriber";
    rr.Properties = new String[] { "ID" };
    APIObject[] objs = null;
    status = partnerAPI.Retrieve(rr, out reqID, out objs);
    foreach (Subscriber s in objs)
    {
        foreach (etapi.Attribute att in s.Attributes)
        {
            Console.WriteLine("Name: " + att.Name + " Value: " + att.Value);
        }
    }
```

## Sample PHP Code

```
<?php
    echo '<pre>';
$path = $_SERVER[DOCUMENT_ROOT].'/00 Includes/';
require($path . 'exacttarget_soap_client.php');
$wsdl = 'https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/etframework.wsdl';
try{
/* Create the Soap Client */
$client = new Marketing CloudSoapClient($wsdl, array('trace'=>1));
/* Set username and password here */
$client->username = XXXXX;
$client->password = XXXXX;
$rr = new Marketing Cloud_RetrieveRequest();
$rr->ObjectType = 'Subscriber';
//Set the properties to return
$props = array("ID");
$rr->Properties = $props;
//Setup and execute request
$rrm = new Marketing Cloud_RetrieveRequestMsg();
$rrm->RetrieveRequest = $rr;
$results = $client->Retrieve($rrm);
    print_r($results);
} catch (SoapFault $e) {
    /* output the resulting SoapFault upon an error */
    var_dump($e);
}
    echo '</pre>';
?>
```

## Sample SOAP Envelope

```
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <soapenv:Header>
      <wsse:Security soapenv:mustUnderstand="1" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
         <wsse:UsernameToken wsu:Id="UsernameToken-24440876" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
            <wsse:Username>${#Project#username}</wsse:Username>
            <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">${#Project#pw}</wsse:Password>
         </wsse:UsernameToken>
      </wsse:Security>
   </soapenv:Header>
   <soapenv:Body>
      <RetrieveRequestMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">
         <RetrieveRequest>
            <ClientIDs>
               <ClientID>1234567</ClientID>
            </ClientIDs>
            <ObjectType>Subscriber</ObjectType>
            <Properties>CreatedDate</Properties>
            <Properties>Client.ID</Properties>
            <Properties>EmailAddress</Properties>
            <Properties>SubscriberKey</Properties>
            <Properties>Status</Properties>
            <Properties>UnsubscribedDate</Properties>
            <Properties>EmailTypePreference</Properties>
            <Properties>ID</Properties>
            <!--This makes Profile Attributes show in the Results-->
            <Filter xsi:type="ns1:SimpleFilterPart" xmlns:ns1="http://exacttarget.com/wsdl/partnerAPI">
               <Property>SubscriberKey</Property>
               <SimpleOperator>equals</SimpleOperator>
               <Value>example@email.com</Value>
            </Filter>
            <QueryAllAccounts>false</QueryAllAccounts>
         </RetrieveRequest>
      </RetrieveRequestMsg>
   </soapenv:Body>
</soapenv:Envelope>
```
