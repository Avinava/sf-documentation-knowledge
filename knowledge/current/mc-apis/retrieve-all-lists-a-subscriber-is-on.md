---
title: "Retrieve All Lists a Subscriber is On"
domain: mc-apis
topic: retrieve-all-lists-a-subscriber-is-on
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:23.597Z
estimatedTokens: 1857
keywords: [Retrieve, Subscriber, retrieving, understand, email, receives, whether, removed, Subscription, Center, show, individual, subscribed, Sample, NET]
---

# Retrieve All Lists a Subscriber is On

> By retrieving all of the lists a subscriber is on, you can understand which email sends a subscriber receives and whether that subscriber is removed from these lists. You can use this in your Subscription Center to show to which lists an individual subscriber is subscribed.

# Retrieve All Lists a Subscriber is On

By retrieving all of the lists a subscriber is on, you can understand which email sends a subscriber receives and whether that subscriber is removed from these lists. You can use this in your Subscription Center to show to which lists an individual subscriber is subscribed.

This call also returns any groups associated with the subscriber's email address. Perform a follow-up call using the specific ID to determine if that ID refers to a list or group.

Use the sample code below as an example to construct your own API calls. The describe call can be used to retrieve the retrievable properties for the ListSubscriber object.

### Sample .NET Code

```
// Filter by SubscriberKey (default value is email address)
SimpleFilterPart sfp  = new SimpleFilterPart();
sfp.Property = "SubscriberKey";
sfp.SimpleOperator = SimpleOperators.equals;
sfp.Value = new string[] { "users@example.com" };
// Create the RetrieveRequest ListSubscriber objects
RetrieveRequest rr = new RetrieveRequest();
rr.ObjectType = "ListSubscriber";
rr.Properties = new string[] { "ListID", "SubscriberKey", "Status" };
rr.Filter = sfp;
// Execute the Retrieve call
APIObject[] results;
string requestID;
//Change integrationFramework to the name of your own development environment
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
List Subscriber Details:      List ID    SubscriberKey       Status
List Subscriber Details:      503        users@example.com   Unsubscribed
List Subscriber Details:      566        users@example.com   Unsubscribed
```

### Sample Java Code (Axis 1.4)

This example uses the subscriber key to return all of the requested lists.

```apex
/**
     * Return List of Lists for a given SubscriberKey
     */
    public void testGetListsForSubscriber() {
        try {
            Soap stub = init();
            String OBJECT_LIST_SUBSCRIBERS = "ListSubscriber";
            java.util.List list = new ArrayList();
            list.add("SubscriberKey");
            list.add("ListID");
            list.add("Status");
            String SubscriberKey = "acruz@example.com";
            RetrieveRequest retrieveRequest = new RetrieveRequest();

            retrieveRequest.setObjectType(OBJECT_LIST_SUBSCRIBERS);
            String[] stringArray = (String[]) list.toArray(new String[list.size()]);
            retrieveRequest.setProperties(stringArray);
            SimpleFilterPart filter = new SimpleFilterPart();
            filter.setProperty("SubscriberKey");
            filter.setSimpleOperator(SimpleOperators.equals);
            java.util.List filterValues = new ArrayList();
            filterValues.add(SubscriberKey);
            String[] filerValuesArray = (String[])filterValues.toArray(new String[filterValues.size()]);
            filter.setValue(filerValuesArray);
            retrieveRequest.setFilter(filter);
            RetrieveRequestMsg retrieveRequestMsg = new RetrieveRequestMsg();
            retrieveRequestMsg.setRetrieveRequest(retrieveRequest);
            RetrieveResponseMsg retrieveResponseMsg = stub.retrieve(retrieveRequestMsg);
            System.out.println("[overall status message] " + retrieveResponseMsg.getOverallStatus());
            APIObject[] apiObjectList = retrieveResponseMsg.getResults();
            for (APIObject dumpStepThrough : apiObjectList) {
                ListSubscriber listSubscriber = (ListSubscriber) dumpStepThrough;
                System.out.print("  [List ID ::: ] " + listSubscriber.getListID());
                System.out.print("  [Subscriber Key ::: ] " + listSubscriber.getSubscriberKey());
                System.out.println("  [Subscriber Status ::: ] " + listSubscriber.getStatus());
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
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
$rr->ObjectType = 'ListSubscriber';
//Set the properties to return
$props = array("ListID", "SubscriberKey", "Status");
$rr->Properties = $props;
//Setup account filtering, to look for a given account MID
$filterPart = new Marketing Cloud_SimpleFilterPart();
$filterPart->Property = 'SubscriberKey';
$values = array('acruz@example.com');
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
            <ObjectType>ListSubscriber</ObjectType>
            <Properties>SubscriberKey</Properties>
            <Properties>ListID</Properties>
            <Properties>Status</Properties>
            <Filter xsi:type="ns1:SimpleFilterPart" xmlns:ns1="http://exacttarget.com/wsdl/partnerAPI">
               <Property>SubscriberKey</Property>
               <SimpleOperator>equals</SimpleOperator>
               <Value>users@example.com</Value>
            </Filter>
         </RetrieveRequest>
      </RetrieveRequestMsg>
   </soapenv:Body>
</soapenv:Envelope>
```

## Related Items

-   [Subscription Center](https://help.salesforce.com/articleView?id=mc_es_preview_subscription_center.htm&type=5)
-   [Describe Method](atlas.en-us.noversion.mc-apis.meta/mc-apis/describe.htm)
-   [ListSubscriber Object](atlas.en-us.noversion.mc-apis.meta/mc-apis/listsubscriber.htm)

## Related Topics

- Describe Method (atlas.en-us.noversion.mc-apis.meta/mc-apis/describe.htm)
- ListSubscriber Object (atlas.en-us.noversion.mc-apis.meta/mc-apis/listsubscriber.htm)
