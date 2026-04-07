---
title: "Retrieve Subscribers by Subscriber Key"
domain: mc-apis
topic: retrieve-subscribers-by-subscriber-key
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:23.665Z
estimatedTokens: 1932
keywords: [Retrieve, Subscribers, Subscriber, Key, retrieving, account, subaccount, via, pull, back, view, gives, Sample, NET, Code]
---

# Retrieve Subscribers by Subscriber Key

> This page contains information about retrieving subscribers from an account or subaccount via the subscriber key. By retrieving subscribers from an account or subaccount using the subscriber key, you can pull back a complete view of all of the subscribers within that account. That view gives you the

# Retrieve Subscribers by Subscriber Key

This page contains information about retrieving subscribers from an account or subaccount via the subscriber key. By retrieving subscribers from an account or subaccount using the subscriber key, you can pull back a complete view of all of the subscribers within that account. That view gives you the status of those subscribers and other information that can help you better target your sends.

### Sample .NET Code

You can retrieve one or many Subscribers using SubscriberKey with a SimpleFilterPart.

```
string requestID = null;
APIObject[] results = null;
SimpleFilterPart sfp = new SimpleFilterPart();
sfp.Property = "SubscriberKey";
sfp.SimpleOperator = SimpleOperators.IN;
sfp.Value = new String[] { "1", "2", "8" };
// Retrieve the ID, SubscriberKey and EmailAddress for the Subscribers
RetrieveRequest rr = new RetrieveRequest();
rr.ObjectType = "Subscriber";
rr.Properties = new string[] { "ID", "SubscriberKey", "EmailAddress" };
rr.Filter = sfp;
// You can retrieve subscribers from specific accounts
// rr.ClientIDs = ...
// Or, you can retrieve subscribers across the parent account and all sub accounts
// rr.QueryAllAccounts = true;
// rr.QueryAllAccountsSpecified = true;
string status = integrationFramework.Retrieve(rr, out requestID, out results);
Console.Write(status);
Console.Write(results.Length);
```

### Sample PHP Code

```
<?php
require('exacttarget_soap_client.php');

$wsdl = 'https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/etframework.wsdl';
set_time_limit(360);
try{
     print_r('<br>');
     /* Create the Soap Client */
     $client = new Marketing CloudSoapClient($wsdl, array('trace'=>1));

     /* Set username and password here */
     $client->username = 'xxxx';
     $client->password = 'xxxx';

     $rr = new Marketing Cloud_RetrieveRequest();
     $rr->ObjectType = "Subscriber";
     $rr->Properties = array("ID","EmailAddress", "SubscriberKey", "Status");
 $sfp= new Marketing Cloud_SimpleFilterPart();
        $sfp->Value =  array("acruz@example.com ");
        $sfp->SimpleOperator = Marketing Cloud_SimpleOperators::equals;
        $sfp->Property="SubscriberKey";

     $rr->Filter = new SoapVar($sfp, SOAP_ENC_OBJECT, 'SimpleFilterPart', "http://exacttarget.com/wsdl/partnerAPI");
     $rr->Options = NULL;
     $rrm = new Marketing Cloud_RetrieveRequestMsg();
     $rrm->RetrieveRequest = $rr;
     $results = $client->Retrieve($rrm);
     print_r($results->OverallStatus.' : '.$results->RequestID.' : '.count($results->Results));
     print_r('<br>');

     while ($results->OverallStatus=="MoreDataAvailable") {
          $rr = new Marketing Cloud_RetrieveRequest();
          $rr->ContinueRequest = $results->RequestID;
          $rrm = new Marketing Cloud_RetrieveRequestMsg();
          $rrm->RetrieveRequest = $rr;
          $results = null;
          $results = $client->Retrieve($rrm);
          $tempRequestID = $results->RequestID;
          print_r($results->OverallStatus.' : '.$results->RequestID.' : '.count($results->Results));
          print_r('<br>');
     }
} catch (Exception  $e) {
     var_dump($e);
}
?>
```

### Sample Ruby on Rails Code

```
require 'rubygems'
gem 'soap4r'
require 'soap/wsdlDriver'
require 'soap/header/simplehandler'
require 'defaultDriver.rb'
require 'authStub.rb'
require 'WSHelpers.rb'
props = {
  :object => 'Subscriber',
  :props => ['ID','SubscriberKey','EmailAddress']
}
filter = {
  :filterType => 'Simple',
  :filter => ['SubscriberKey','like','api-test']
}
subs = BuildRetrieve.new
resp = subs.creates(props,filter)
resp.results.each do |result|
  puts result.iD.to_s + " - " + result.subscriberKey + " - " + result.emailAddress
end
```

### Sample Java Code (Axis2)

```apex
public static void RetrieveSubscriber(PartnerAPIStub stub)
 {
        try {
            RetrieveRequestMsgDocument retrieveRequestMsgDocument = com.exacttarget.wsdl.partnerapi.RetrieveRequestMsgDocument.Factory.newInstance();
            RetrieveRequest rreq = com.exacttarget.wsdl.partnerapi.RetrieveRequest.Factory.newInstance();
            rreq.setObjectType("Subscriber");
            String rreqProperties[] = {"ID","EmailAddress", "SubscriberKey", "Status"};
            rreq.setPropertiesArray(rreqProperties);

            // Declare the filter in order to find a single Subscriber record by SubscriberKey
            SimpleFilterPart sfp = com.exacttarget.wsdl.partnerapi.SimpleFilterPart.Factory.newInstance();
            sfp.setProperty("SubscriberKey");
            sfp.setSimpleOperator(SimpleOperators.EQUALS);
            String sfpValues[] = {"help@exacttarget.com"};
            sfp.setValueArray(sfpValues);
            rreq.setFilter(sfp);

            RetrieveRequestMsgDocument.RetrieveRequestMsg retrieveRequestMsg = retrieveRequestMsgDocument.addNewRetrieveRequestMsg();
            retrieveRequestMsg.setRetrieveRequest(rreq);

            // Call the Retrieve method
            RetrieveResponseMsgDocument retrieveResponseMsgDocument = stub.Retrieve(retrieveRequestMsgDocument);

            RetrieveResponseMsgDocument.RetrieveResponseMsg retrieveResponseMsg = retrieveResponseMsgDocument.getRetrieveResponseMsg();

            // Output the overall status
            System.out.println((new StringBuilder()).append("Response ::: ").append(retrieveResponseMsg.getOverallStatus()).toString());

            // Loop through all subscribers record, there is a maximum of 1 since filtering on SubscriberKey
            for(APIObject s : retrieveResponseMsg.getResultsArray())
            {
             Subscriber sub = (Subscriber) s;
                System.out.println("Subscriber with SubscriberKey: " + sub.getSubscriberKey() + " has an email address of " + sub.getEmailAddress() + " and is "+ sub.getStatus());
            }
        }
        catch (RemoteException e) {
            e.printStackTrace();
        }
        catch (Exception e) {
            e.printStackTrace();
        }
 }
```

### Sample SOAP Envelope

```
<s:Envelope xmlns:a="http://schemas.xmlsoap.org/ws/2004/08/addressing" xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">
  <s:Header>
    <a:Action s:mustUnderstand="1">Retrieve</a:Action>
    <a:MessageID>urn:uuid:12afdce4-062d-45e9-98b6-d221ace9cc95</a:MessageID>
    <ActivityId CorrelationId="007731bc-31c3-40a2-8fbe-108de7783a57" xmlns="http://schemas.microsoft.com/2004/09/ServiceModel/Diagnostics">8d3425a9-1d88-4af3-a987-ea52e660437a</ActivityId>
    <a:ReplyTo>
      <a:Address>http://schemas.xmlsoap.org/ws/2004/08/addressing/role/anonymous</a:Address>
    </a:ReplyTo>
  </s:Header>
  <s:Body xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
    <RetrieveRequestMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">
      <RetrieveRequest>
        <ObjectType>Subscriber</ObjectType>
        <Properties>ID</Properties>
        <Properties>CreatedDate</Properties>
        <Properties>Client.ID</Properties>
        <Properties>EmailAddress</Properties>
        <Properties>SubscriberKey</Properties>
        <Properties>UnsubscribedDate</Properties>
        <Properties>Status</Properties>
        <Properties>EmailTypePreference</Properties>
        <Filter xmlns:q1="http://exacttarget.com/wsdl/partnerAPI" xsi:type="q1:SimpleFilterPart">
          <q1:Property>SubscriberKey</q1:Property>
          <q1:SimpleOperator>equals</q1:SimpleOperator>
          <q1:Value>12345</q1:Value>
        </Filter>
      </RetrieveRequest>
    </RetrieveRequestMsg>
  </s:Body>
</s:Envelope>
```

## Related Items

[Migrate Your Account to Use the Subscriber Key Feature](https://help.salesforce.com/articleView?id=mc_es_migrate_your_account_to_use_the_subscriber_key_feature.htm&type=5)

## Code Examples

```
<?php   
require('exacttarget_soap_client.php');  

$wsdl = 'https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/etframework.wsdl';  
set_time_limit(360);  
try{  
     print_r('<br>');  
     /* Create the Soap Client */  
     $client = new Marketing CloudSoapClient($wsdl, array('trace'=>1));  

     /* Set username and password here */  
     $client->username = 'xxxx';  
     $client->password = 'xxxx';  

     $rr = new Marketing Cloud_RetrieveRequest();  
     $rr->ObjectType = "Subscriber";  
     $rr->Properties = array("ID","EmailAddress", "SubscriberKey", "Status");  
 $sfp= new Marketing Cloud_SimpleFilterPart();
        $sfp->Value =  array("acruz@example.com ");
        $sfp->SimpleOperator = Marketing Cloud_SimpleOperators::equals;
        $sfp->Property="SubscriberKey";

     $rr->Filter = new SoapVar($sfp, SOAP_ENC_OBJECT, 'SimpleFilterPart', "http://exacttarget.com/wsdl/partnerAPI");
     $rr->Options = NULL;  
     $rrm = new Marketing Cloud_RetrieveRequestMsg();  
     $rrm->RetrieveRequest = $rr;  
     $results = $client->Retrieve($rrm);  
     print_r($results->OverallStatus.' : '.$results->RequestID.' : '.count($results->Results));  
     print_r('<br>');  

     while ($results->OverallStatus=="MoreDataAvailable") {  
          $rr = new Marketing Cloud_RetrieveRequest();  
          $rr->ContinueRequest = $results->RequestID;  
          $rrm = new Marketing Cloud_RetrieveRequestMsg();  
          $rrm->RetrieveRequest = $rr;  
          $results = null;  
          $results = $client->Retrieve($rrm);  
          $tempRequestID = $results->RequestID;  
          print_r($results->OverallStatus.' : '.$results->RequestID.' : '.count($results->Results));  
          print_r('<br>');  
     }  
} catch (Exception  $e) {  
     var_dump($e);  
}  
?>
```
