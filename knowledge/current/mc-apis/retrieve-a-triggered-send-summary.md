---
title: "Retrieve a Triggered Send Summary"
domain: mc-apis
topic: retrieve-a-triggered-send-summary
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:18.778Z
estimatedTokens: 1248
keywords: [Retrieve, Triggered, Send, Summary, retrieving, via, SOAP, API, Why, How, Sample, NET, Code, PHP, Envelope]
---

> This page contains information  about retrieving a summary of information associated with a triggered send via the SOAP API.

# Retrieve a Triggered Send Summary

This page contains information about retrieving a summary of information associated with a triggered send via the SOAP API.

## Why Retrieve a Triggered Send Summary

The triggered send summary provides more tracking information regarding a triggered send, allowing you to better understand the effectiveness of the email message being sent and make decisions based on the information.

## How to Retrieve a Triggered Send Summary

Use the sample code below as a model to construct your own API code. To view information on a specific triggered send event, perform this retrieve and filter the results on the TriggeredSendDefinitionObjectID property.

### Sample .NET Code

```apex
public APIObject[] TSSummary()
{
            RetrieveRequest rr = new RetrieveRequest();
            rr.ObjectType = "TriggeredSendSummary";
            rr.Properties = new String[] { "Sent", "Bounces", "Opens", "Clicks" };
            TriggeredSendSummary tss = new TriggeredSendSummary();
            SimpleFilterPart sfp = new SimpleFilterPart();
            sfp.SimpleOperator = SimpleOperators.equals;
            sfp.Property = "CustomerKey";
            sfp.Value = new string[] { "Weekly_Newsletter_-_2009_07_16" };
            rr.Filter = sfp;
            string requestID;

            APIObject[] results;
            string status = client.Retrieve(rr, out requestID, out results);
            return results;
}
```

### Sample PHP Code

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
$rr->ObjectType = 'TriggeredSendSummary';
//Set the properties to return
$props = array("Sent", "Bounces", "Opens", "Clicks");
$rr->Properties = $props;
//Setup account filtering, to look for a given account MID
$filterPart = new Marketing Cloud_SimpleFilterPart();
$filterPart->Property = 'CustomerKey';
$values = array('test');
$filterPart->Value = $values;
$filterPart->SimpleOperator = Marketing Cloud_SimpleOperators::equals;
//Encode the SOAP package
$filterPart = new SoapVar($filterPart, SOAP_ENC_OBJECT,'SimpleFilterPart', "http://exacttarget.com/wsdl/partnerAPI");
//Set the filter to NULL to return all MIDs, otherwise set to filter object
//$rr->Filter = NULL;
$rr->Filter = $filterPart;
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

### Sample SOAP Envelope

```
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <soapenv:Header>
      <wsse:Security soapenv:mustUnderstand="1" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
         <wsse:UsernameToken wsu:Id="UsernameToken-24440876" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
            <wsse:Username>XXXXX</wsse:Username>
            <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">XXXXX</wsse:Password>
         </wsse:UsernameToken>
      </wsse:Security>
   </soapenv:Header>
   <soapenv:Body>
      <RetrieveRequestMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">
         <RetrieveRequest>
            <ObjectType>TriggeredSendSummary</ObjectType>
            <Properties>Sent</Properties>
            <Properties>CustomerKey</Properties>
            <Properties>NotSentDueToOptOut</Properties>
            <Properties>NotSentDueToUndeliverable</Properties>
            <Properties>Bounces</Properties>
            <Properties>Opens</Properties>
            <Properties>Clicks</Properties>
            <Properties>UniqueOpens</Properties>
            <Properties>UniqueClicks</Properties>
            <Properties>OptOuts</Properties>
            <Properties>SurveyResponses</Properties>
            <Properties>Conversions</Properties>
            <Properties>UniqueConversions</Properties>
            <Properties>InProcess</Properties>
            <Properties>NotSentDueToError</Properties>
            <Filter xsi:type="ns1:SimpleFilterPart" xmlns:ns1="http://exacttarget.com/wsdl/partnerAPI">
               <Property>CustomerKey</Property>
               <SimpleOperator>equals</SimpleOperator>
               <Value>TESTING</Value>
            </Filter>
         </RetrieveRequest>
      </RetrieveRequestMsg>
   </soapenv:Body>
</soapenv:Envelope>
```
