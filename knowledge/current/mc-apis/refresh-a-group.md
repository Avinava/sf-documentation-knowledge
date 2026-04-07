---
title: "Refresh a Group"
domain: mc-apis
topic: refresh-a-group
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:18.475Z
estimatedTokens: 842
keywords: [Refresh, Group, SOAP, API, Why, How, Sample, NET, Code, PHP, Envelope, Items]
---

> This page contains information  about using the SOAP API to refresh a group.

# Refresh a Group

This page contains information about using the SOAP API to refresh a group.

## Why Refresh a Group

You can refresh a group using the SOAP API to reload the subscribers into the group using the current subscriber data prior to a send or other activity.

## How to Refresh a Group

Refresh a group via the SOAP API using the execute method. You can use the sample code as a model to construct your own API call.

### Sample .NET Code

```
ExecuteRequest request = new ExecuteRequest();
request.Name = "RefreshGroup";
request.Parameters = new APIProperty[1];
request.Parameters[0] = new APIProperty();
request.Parameters[0].Name = "ID";
request.Parameters[0].Value = listID.ToString();
status = proxy.Execute(ref requestKey, new ExecuteRequest[] { request }, out results);
```

### Sample PHP Code

```
<?php
require('exacttarget_soap_client.php');
$wsdl = 'https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/etframework.wsdl';
try{
        /* Create the Soap Client */
        $client = new Marketing CloudSoapClient($wsdl, array('trace'=>1));
        /* Set username and password here */
        $client->username = 'USERNAME';
        $client->password = 'PASSWORD';

        $er = new Marketing Cloud_ExecuteRequest();
        $er->Name = "RefreshGroup";
        $er->Parameters =  array();
            $prop = new Marketing Cloud_APIProperty();
            $prop->Name = "ID";
            $prop->Value = "111";
        $er->Parameters[] = $prop;
        $er->Options = NULL;

        $erm = new Marketing Cloud_ExecuteRequestMsg();
            $erm->Requests  = array();
        $erm->Requests[] = new SoapVar($er, SOAP_ENC_OBJECT, 'ExecuteRequest', "http://exacttarget.com/wsdl/partnerAPI");

        $results = $client->Execute($erm);
            var_dump($results);
} catch (SoapFault $e) {
    var_dump($e);
}
?>
```

### Sample SOAP Envelope

```
<s:Envelope xmlns:s="http://www.w3.org/2003/05/soap-envelope" xmlns:a="http://schemas.xmlsoap.org/ws/2004/08/addressing" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
   <s:Header>
      <a:Action s:mustUnderstand="1">Execute</a:Action>
      <a:MessageID>urn:uuid:e34544b5-b951-44b0-9d56-2e8750d78b81</a:MessageID>
      <a:ReplyTo>
         <a:Address>http://schemas.xmlsoap.org/ws/2004/08/addressing/role/anonymous</a:Address>
      </a:ReplyTo>
      <a:To s:mustUnderstand="1">https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/Service.asmx</a:To>
      <o:Security s:mustUnderstand="1" xmlns:o="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
         <o:UsernameToken u:Id="uuid-f3c9811c-42fd-44b2-8575-4561e0904070-1">
            <o:Username>XXXXX</o:Username>
            <o:Password>XXXXX</o:Password>
         </o:UsernameToken>
      </o:Security>
   </s:Header>
   <s:Body xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
      <ExecuteRequestMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">
         <Requests>
            <Name>RefreshGroup</Name>
            <Parameters>
               <Name>ID</Name>
               <Value>123456</Value>
            </Parameters>
         </Requests>
      </ExecuteRequestMsg>
   </s:Body>
</s:Envelope>
```

## Related Items

[Execute Method](atlas.en-us.noversion.mc-apis.meta/mc-apis/execute.htm)

## Code Examples

```
ExecuteRequest request = new ExecuteRequest(); 
request.Name = "RefreshGroup"; 
request.Parameters = new APIProperty[1]; 
request.Parameters[0] = new APIProperty(); 
request.Parameters[0].Name = "ID"; 
request.Parameters[0].Value = listID.ToString();
status = proxy.Execute(ref requestKey, new ExecuteRequest[] { request }, out results);
```

```
<?php 
require('exacttarget_soap_client.php');
$wsdl = 'https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/etframework.wsdl';
try{
        /* Create the Soap Client */
        $client = new Marketing CloudSoapClient($wsdl, array('trace'=>1));
        /* Set username and password here */
        $client->username = 'USERNAME';
        $client->password = 'PASSWORD';

        $er = new Marketing Cloud_ExecuteRequest();
        $er->Name = "RefreshGroup";   
        $er->Parameters =  array();
            $prop = new Marketing Cloud_APIProperty();
            $prop->Name = "ID";
            $prop->Value = "111";
        $er->Parameters[] = $prop; 
        $er->Options = NULL;

        $erm = new Marketing Cloud_ExecuteRequestMsg();
            $erm->Requests  = array();
        $erm->Requests[] = new SoapVar($er, SOAP_ENC_OBJECT, 'ExecuteRequest', "http://exacttarget.com/wsdl/partnerAPI");        

        $results = $client->Execute($erm);  
            var_dump($results);
} catch (SoapFault $e) {
    var_dump($e);
}
?>
```

## Related Topics

- Execute Method (atlas.en-us.noversion.mc-apis.meta/mc-apis/execute.htm)
