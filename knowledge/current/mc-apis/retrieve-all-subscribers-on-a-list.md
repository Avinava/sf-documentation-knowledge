---
title: "Retrieve All Subscribers on a List"
domain: mc-apis
topic: retrieve-all-subscribers-on-a-list
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:23.611Z
estimatedTokens: 1033
keywords: [Retrieve, Subscribers, retrieving, Why, How, Sample, NET, Code, Output, PHP, SOAP, Envelope]
---

# Retrieve All Subscribers on a List

> This page contains information  about retrieving all subscribers on a list.

# Retrieve All Subscribers on a List

This page contains information about retrieving all subscribers on a list.

## Why Retrieve All Subscribers on a List

You can use this call to get information on the subscribers on a list, including their subscription status.

## How To Retrieve All Subscribers on a List

Use the sample code below as an example to build your own API calls.

### Sample .NET Code

```
// Filter by ListID
SimpleFilterPart sfp = new SimpleFilterPart();
sfp.Property = "ListID";
sfp.SimpleOperator = SimpleOperators.equals;
sfp.Value = new string[] {"503" };
// Create the RetrieveRequest ListSubscriber objects
RetrieveRequest rr = new RetrieveRequest();
rr.ObjectType = "ListSubscriber";
rr.Properties = new string[] { "ListID", "SubscriberKey", "Status" };
rr.Filter = sfp;
string status = integrationFramework.Retrieve(rr, out requestID, out results);
// Iterate over the results
Console.WriteLine("List Subscriber Details:\tList ID\tSubscriberKey\tStatus");
for (int i = 0; i < results.Length; i++)
{
       ListSubscriber ls = (ListSubscriber)results[i];
       Console.WriteLine("List Subscriber Details:\t{0}\t{1}\t{2}", ls.ListID, ls.SubscriberKey, ls.Status);
}
```

### Output

```
List Subscriber Details:      List ID   SubscriberKey         Status
List Subscriber Details:      503       test1@example.com     Active
List Subscriber Details:      503       test2@example.com     Active
List Subscriber Details:      503       hello@example.com     Active
List Subscriber Details:      503       hello22@example.com   Unsubscribed
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
$client->username = 'XXXXX';
$client->password = 'XXXXX';
$rr = new Marketing Cloud_RetrieveRequest();
$rr->ObjectType = 'ListSubscriber';
//Set the properties to return
$props = array("ListID", "SubscriberKey", "Status");
$rr->Properties = $props;
//Setup account filtering, to look for a given account MID
$filterPart = new Marketing Cloud_SimpleFilterPart();
$filterPart->Property = 'ListID';
$values = array('12345');
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
<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <Header>
      <fueloauth>YOUR_ACCESS_TOKEN</fueloauth>
   </Header>
   <Body>
      <RetrieveRequestMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">
         <RetrieveRequest>
            <ObjectType>ListSubscriber</ObjectType>
            <Properties>ObjectID</Properties>
            <Properties>SubscriberKey</Properties>
            <Properties>CreatedDate</Properties>
            <Properties>ModifiedDate</Properties>
            <Properties>Client.ID</Properties>
            <Properties>Client.PartnerClientKey</Properties>
            <Properties>ListID</Properties>
            <Properties>Status</Properties>
            <Filter xmlns:ns1="http://exacttarget.com/wsdl/partnerAPI" xsi:type="ns1:SimpleFilterPart">
               <Property>ListID</Property>
               <SimpleOperator>equals</SimpleOperator>
               <Value>503</Value>
            </Filter>
         </RetrieveRequest>
      </RetrieveRequestMsg>
   </Body>
</Envelope>
```
