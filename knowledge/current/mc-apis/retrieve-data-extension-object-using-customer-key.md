---
title: "Retrieve Data Extension Object Using Customer Key"
domain: mc-apis
topic: retrieve-data-extension-object-using-customer-key
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:18.849Z
estimatedTokens: 1165
keywords: [Retrieve, Extension, Customer, Key, retrieving, CustomerKey, Why, How, Sample, NET, Code, PHP, SOAP, Envelopes, XML]
---

> This page contains information  about retrieving a data extension object using the CustomerKey property.

# Retrieve Data Extension Object Using Customer Key

This page contains information about retrieving a data extension object using the CustomerKey property.

## Why Retrieve a Data Extension Object using Customer Key

You can use the CustomerKey property to pull back data from applicable data extensions. Use the information retrieved in more API calls or to filter subscribers into different groups.

## How To Retrieve the Data Extension Object Using Customer Key

Use the sample code below as a model to create your own API call.

### Sample .NET Code

```apex
/**
        * Retrieve Data Extension using CustomerKey of Object.
        */
        public void testRetrieveDataExtension()
        {
            APIObject[] results;
            // Create RetrieveRequest
            RetrieveRequest rr = new RetrieveRequest();
            rr.ObjectType = "DataExtension";
            rr.Properties =
                new string[]
                    {
                        "ObjectID", "CustomerKey", "Name", "IsSendable", "SendableSubscriberField.Name"
                    };
            SimpleFilterPart filter = new SimpleFilterPart();
            filter.Property = "CustomerKey";
            filter.SimpleOperator = SimpleOperators.equals;
            filter.Value = new string[]{"Testing_Forigen_Char_key"};
            rr.Filter = filter;
            // Execute RetrieveRequest
            String status = soapClient.Retrieve(rr, out requestID, out results);
            // Output the Values
            Console.WriteLine(status);
            Console.WriteLine(requestID);
            Console.WriteLine(results.Length);
            Console.WriteLine("_________Properties______________");
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
$rr->ObjectType = 'DataExtension';
//Set the properties to return
$props = array("ObjectID", "CustomerKey", "Name", "IsSendable", "SendableSubscriberField.Name");
$rr->Properties = $props;
//Setup account filtering, to look for a given account MID
$filterPart = new Marketing Cloud_SimpleFilterPart();
$filterPart->Property = 'CustomerKey';
$values = array('newsletter');
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

### Sample SOAP Envelopes

#### Request XML

```
<Body xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
   <RetrieveRequestMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">
      <RetrieveRequest>
         <ObjectType>DataExtension</ObjectType>
         <Properties>ObjectID</Properties>
         <Properties>CustomerKey</Properties>
         <Properties>Name</Properties>
         <Properties>IsSendable</Properties>
         <Properties>SendableSubscriberField.Name</Properties>
         <Filter xsi:type="SimpleFilterPart">
            <Property>CustomerKey</Property>
            <SimpleOperator>equals</SimpleOperator>
            <Value>Testing_Forigen_Char_key</Value>
         </Filter>
      </RetrieveRequest>
   </RetrieveRequestMsg>
</Body>
```

#### Response XML

```
<Body xmlns:xsi="xsi">
   <RetrieveResponseMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">
      <OverallStatus>OK</OverallStatus>
      <RequestID>8786bab5-51ff-41b6-a485-3d24d8f43b69</RequestID>
      <Results xsi:type="DataExtension">
         <ObjectID>6f64f34b-4254-de11-92ee-001cc494ae9e</ObjectID>
         <CustomerKey>Testing_Forigen_Char_key</CustomerKey>
         <Name>Testing_Forigen_Char</Name>
         <IsSendable>true</IsSendable>
         <SendableSubscriberField>
            <Name>_SubscriberKey</Name>
         </SendableSubscriberField>
      </Results>
   </RetrieveResponseMsg>
</Body>
```
