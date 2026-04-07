---
title: "Retrieve the SubscriberStatusEvent"
domain: mc-apis
topic: retrieve-the-subscriberstatusevent
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:18.908Z
estimatedTokens: 3486
keywords: [Retrieve, SubscriberStatusEvent, retrieving, Why, How, Sample, NET, Code, Results, PHP, Incremental, Periods, Time, SOAP, Envelopes]
---

> This page contains information  about retrieving the SubscriberStatusEvent object.

# Retrieve the SubscriberStatusEvent

This page contains information about retrieving the SubscriberStatusEvent object.

## Why Retrieve the SubscriberStatusEvent

Retrieving this information gives you identification information about the subscriber, the current subscription status, and the reason why the subscriber unsubscribed, if any. This call only logs events at the All Subscriber list level.

## How to Retrieve the SubscriberStatusEvent

Use the sample code below as a model to construct your own API call.

The CurrentStatus and PreviousStatus properties accept the following values:

-   Normal
-   Held
-   Unsub

The Retrieve call returns an arrary of ObjectExtensions when the ObjectType of the RetrieveRequest is set to SubscriberStatusEvent. If the Retrieve request returns more than 2500 objects, the status of the Retrieve call is MoreDataAvailable, indicating that you need to retrieve the rest of the results in batches using the ContinueRequest property on a RetrieveRequest.

### Sample .NET Code Request

```
// intialize variables
String requestID;
APIObject[] results;
SimpleFilterPart sfp = new SimpleFilterPart();
sfp.Property = "SubscriberKey";
sfp.SimpleOperator = SimpleOperators.IN;
sfp.Value = new string[] { "ts","ts1","ts2","ts3","ts4","ts5"};
// Create RetrieveRequest
RetrieveRequest rr = new RetrieveRequest();
rr.ObjectType = "SubscriberStatusEvent";
rr.Properties = new string[] { "Client.ID", "SubscriberID", "SubscriberKey", "ReasonUnsub", "CurrentStatus", "PreviousStatus", "CreatedDate" };
rr.Filter = sfp;
// Execute RetrieveRequest
String status = integrationFramework.Retrieve(rr, out requestID, out results);
// Output the Values
Console.WriteLine(status);
Console.WriteLine(requestID);
Console.WriteLine(results.Length);
Console.WriteLine("_________Properties______________");
for (int i = 0; i < results.Length; i++)
{
    for (int x = 0; x < ((ObjectExtension)results[i]).Properties.Length; x++)
    {
        Console.WriteLine("Date:{0}\tName:{1} \t Value:{2}", ((ObjectExtension)results[i]).CreatedDate,  ((ObjectExtension)results[i]).Properties[x].Name, ((ObjectExtension)results[i]).Properties[x].Value);
    }
   }
}
```

### Sample .NET Code Results

If the unsubscribe occurs due to a Feedback loop, the reason is Spam complaint from `<domain>`

```
c1edd148-8bbc-4a19-8818-fc3d01ecf3a9
6
_________Properties______________
Date:4/14/2009 11:54:31 PM    Name:SubscriberID      Value:199652891
Date:4/14/2009 11:54:31 PM    Name:SubscriberKey      Value:ts
Date:4/14/2009 11:54:31 PM    Name:ReasonUnsub      Value:unsubscribed by Marketing Cloud RMM service based on subscriber reply email request
Date:4/14/2009 11:54:31 PM    Name:CurrentStatus      Value:unsub
Date:4/14/2009 11:54:31 PM    Name:PreviousStatus      Value:normal
Date:4/14/2009 11:54:51 PM    Name:SubscriberID      Value:199652895
Date:4/14/2009 11:54:51 PM    Name:SubscriberKey      Value:ts3
Date:4/14/2009 11:54:51 PM    Name:ReasonUnsub      Value:unsubscribed by Marketing Cloud RMM service based on subscriber reply email request
Date:4/14/2009 11:54:51 PM    Name:CurrentStatus      Value:unsub
Date:4/14/2009 11:54:51 PM    Name:PreviousStatus      Value:normal
Date:4/14/2009 11:58:33 PM    Name:SubscriberID      Value:199652896
Date:4/14/2009 11:58:33 PM    Name:SubscriberKey      Value:ts4
Date:4/14/2009 11:58:33 PM    Name:ReasonUnsub      Value:unsub by email
Date:4/14/2009 11:58:33 PM    Name:CurrentStatus      Value:unsub
Date:4/14/2009 11:58:33 PM    Name:PreviousStatus      Value:normal
Date:4/15/2009 12:00:09 AM    Name:SubscriberID      Value:199652897
Date:4/15/2009 12:00:09 AM    Name:SubscriberKey      Value:ts5
Date:4/15/2009 12:00:09 AM    Name:ReasonUnsub      Value:unsub by email
Date:4/15/2009 12:00:09 AM    Name:CurrentStatus      Value:unsub
Date:4/15/2009 12:00:09 AM    Name:PreviousStatus      Value:normal
Date:4/15/2009 12:01:10 AM    Name:SubscriberID      Value:199652893
Date:4/15/2009 12:01:10 AM    Name:SubscriberKey      Value:ts2
Date:4/15/2009 12:01:10 AM    Name:ReasonUnsub      Value:unsub by email
Date:4/15/2009 12:01:10 AM    Name:CurrentStatus      Value:unsub
Date:4/15/2009 12:01:10 AM    Name:PreviousStatus      Value:normal
Date:4/15/2009 12:11:46 AM    Name:SubscriberID      Value:199652892
Date:4/15/2009 12:11:46 AM    Name:SubscriberKey      Value:ts1
Date:4/15/2009 12:11:46 AM    Name:ReasonUnsub      Value:unsub by email
Date:4/15/2009 12:11:46 AM    Name:CurrentStatus      Value:unsub
Date:4/15/2009 12:11:46 AM    Name:PreviousStatus      Value:normal
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
    $rr->ObjectType = 'SubscriberStatusEvent';
    //Set the properties to return
    $props = array("Client.ID", "SubscriberID", "SubscriberKey", "ReasonUnsub", "CurrentStatus", "PreviousStatus", "CreatedDate");
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

## How to Retrieve the SubscriberStatusEvent for Incremental Periods of Time

The code below retrieves a list of subscriber status changes for an account for a date range using SubscriberStatusEvent. Using this object, your can read the data into your application to build a subscriber status history for subscribers.

The Describe call provides the properties available to be retrieved. A Describe call accepts one or many ObjectDefinitionRequest and returns one or many ObjectDefinitions. The ObjectDefinitionRequest takes an ObjectType to specify which object you wish to describe.

### Sample .NET Code Request

```
ObjectDefinitionRequest request = new ObjectDefinitionRequest();
request.ObjectType = "SubscriberStatusEvent";
ObjectDefinition[] results = integrationFramework.Describe(new ObjectDefinitionRequest[] { request }, out requestID);
Console.WriteLine("_________Properties______________");
for (int i = 0; i < results[0].Properties.Length; i++)
{
    Console.WriteLine("Name:\t" + results[0].Properties[i].Name);
    Console.WriteLine("PropertyType:\t" + results[0].Properties[i].PropertyType);
    Console.WriteLine("isRetrievable:\t" + results[0].Properties[i].IsRetrievable + "
");
}
```

### Sample .NET Results

```
_________Properties______________
Name:    ObjectID
PropertyType:    string
isRetrievable:    True
Name:    SubscriberID
PropertyType:    string
isRetrievable:    True
Name:    Client.ID
PropertyType:    string
isRetrievable:    True
Name:    CurrentStatus
PropertyType:    string
isRetrievable:    True
Name:    PreviousStatus
PropertyType:    string
isRetrievable:    True
Name:    CreatedDate
PropertyType:    string
isRetrievable:    True
Name:    SubscriberKey
PropertyType:    string
isRetrievable:    True
Name:    ReasonUnsub
PropertyType:    string
isRetrievable:    True
Name:    Client
PropertyType:    string
isRetrievable:    False
Name:    PartnerProperties
PropertyType:    string
isRetrievable:    False
Name:    ModifiedDate
PropertyType:    string
isRetrievable:    False
Name:    ID
PropertyType:    string
isRetrievable:    False
Name:    CustomerKey
PropertyType:    string
isRetrievable:    False
Name:    Owner
PropertyType:    string
isRetrievable:    False
_________ExtendedProperties______________
```

### Sample SOAP Envelopes

This sample code demonstrates how to describe the SubscriberStatusEvent to see what information can be retrieved:

```
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <soapenv:Header>
      <wsse:Security soapenv:mustUnderstand="1" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
         <wsse:UsernameToken wsu:Id="UsernameToken-31606811" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
            <wsse:Username>XXXXX</wsse:Username>
            <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">XXXXX</wsse:Password>
         </wsse:UsernameToken>
      </wsse:Security>
   </soapenv:Header>
   <soapenv:Body>
      <DefinitionRequestMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">
         <DescribeRequests>
            <ObjectDefinitionRequest>
               <ObjectType>SubscriberStatusEvent</ObjectType>
            </ObjectDefinitionRequest>
         </DescribeRequests>
      </DefinitionRequestMsg>
   </soapenv:Body>
</soapenv:Envelope>
```

This sample code demonstrates how to retrieve the SubscriberStatusEvent.

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
            <Options/>
            <ObjectType>SubscriberStatusEvent</ObjectType>
            <Properties>ObjectID</Properties>
            <Properties>SubscriberID</Properties>
            <Properties>Client.ID</Properties>
            <Properties>CurrentStatus</Properties>
            <Properties>PreviousStatus</Properties>
            <Properties>CreatedDate</Properties>
            <Properties>SubscriberKey</Properties>
            <Properties>ReasonUnsub</Properties>
            <Filter xsi:type="par:ComplexFilterPart" xmlns:par="http://exacttarget.com/wsdl/partnerAPI">
               <LeftOperand xsi:type="par:SimpleFilterPart">
                  <Property>CurrentStatus</Property>
                  <SimpleOperator>equals</SimpleOperator>
                  <Value>Held</Value>
               </LeftOperand>
               <LogicalOperator>AND</LogicalOperator>
               <RightOperand xsi:type="par:SimpleFilterPart">
                  <Property>CreatedDate</Property>
                  <SimpleOperator>between</SimpleOperator>
                  <DateValue>2009-01-01T19:58:33.434707Z</DateValue>
                  <DateValue>2010-04-07T19:58:33.434707Z</DateValue>
               </RightOperand>
            </Filter>
         </RetrieveRequest>
      </RetrieveRequestMsg>
   </soapenv:Body>
</soapenv:Envelope>
```

This sample code demonstrates how to use the RetrieveAllSinceLastBatch option to pull back the most recent information:

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
            <Options>
               <Client>
                  <ID>12345</ID>
               </Client>
            </Options>
            <ObjectType>SubscriberStatusEvent</ObjectType>
            <Properties>ObjectID</Properties>
            <Properties>SubscriberID</Properties>
            <Properties>Client.ID</Properties>
            <Properties>CurrentStatus</Properties>
            <Properties>PreviousStatus</Properties>
            <Properties>CreatedDate</Properties>
            <Properties>SubscriberKey</Properties>
            <Properties>ReasonUnsub</Properties>
            <Filter xsi:type="par:ComplexFilterPart" xmlns:par="http://exacttarget.com/wsdl/partnerAPI">
               <LeftOperand xsi:type="par:SimpleFilterPart">
                  <Property>CurrentStatus</Property>
                  <SimpleOperator>equals</SimpleOperator>
                  <Value>Unsubscribed</Value>
               </LeftOperand>
               <LogicalOperator>AND</LogicalOperator>
               <RightOperand xsi:type="par:SimpleFilterPart">
                  <Property>CreatedDate</Property>
                  <SimpleOperator>greaterThan</SimpleOperator>
                  <DateValue>2011-04-07T19:58:33.434707Z</DateValue>
               </RightOperand>
            </Filter>
            <RetrieveAllSinceLastBatch>true</RetrieveAllSinceLastBatch>
         </RetrieveRequest>
      </RetrieveRequestMsg>
   </soapenv:Body>
</soapenv:Envelope>
```
