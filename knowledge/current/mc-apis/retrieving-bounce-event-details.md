---
title: "Retrieving Bounce Event Details"
domain: mc-apis
topic: retrieving-bounce-event-details
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:23.640Z
estimatedTokens: 3428
keywords: [Retrieving, Bounce, Event, regarding, events, Why, Retrieve, How, Sample, NET, Code, Java, Axis2, Axis, 1.4]
---

# Retrieving Bounce Event Details

> This page contains information regarding retrieving details about bounce events.

# Retrieving Bounce Event Details

This page contains information regarding retrieving details about bounce events.

## Why Retrieve Bounce Events Details

You can use the details about bounce events to understand why emails are not reaching your subscribers and take appropriate action. Maintaining subscriber lists that don't include a high number of bounces helps your emails get to your subscribers and reduces deliverability issues with email service providers.

Use this call only for real-time data retrieval or to retrieve only specifically bounce information. Otherwise, use the tracking extract for large amounts of data or programmatic retrieval of data.

## How To Retrieve Bounce Events Details

Use the sample code below as a model to construct your own API calls.

### Sample .NET Code

```apex
/** Code to retrieve BounceEvents. EventType :: HardBounce, SoftBounces */
public void testBounceEventDetails(){
                RetrieveRequest retrieveRequest = new RetrieveRequest();
                retrieveRequest.ObjectType = "BounceEvent";

                String[] props = {
                                  "SubscriberKey", "BounceType", "SMTPCode", "SMTPReason", "BounceCategory", "EventDate", "EventType"
                                 };

                retrieveRequest.Properties = props;

                SimpleFilterPart filter = new SimpleFilterPart();
                //Use this only if you are retrieving for TriggeredSend
                /**
                filter.Property = "TriggeredSendDefinitionObjectID";
                String[] vlaues = {"bd8d9f17-64c5-dd11-be9d-001e0bcf2c98"};
                */
                filter.Property = "SendID";
                String[] vlaues = {"28980"};
                filter.Value = vlaues;

                SimpleFilterPart dateFilter = new SimpleFilterPart();
                dateFilter.Property = "EventDate";
                dateFilter.SimpleOperator = SimpleOperators.between;
                dateFilter.DateValue = new DateTime[2];
                dateFilter.DateValue[0] = new DateTime(2009, 1, 16, 12, 15, 0).ToUniversalTime(); //BeingDate;
                dateFilter.DateValue[1] = new DateTime(2009, 1, 16, 12, 45, 0).ToUniversalTime(); //EndDate;

                ComplexFilterPart cfilter = new ComplexFilterPart();
                cfilter.LeftOperand = filter;
                cfilter.LogicalOperator = LogicalOperators.AND;
                cfilter.RightOperand = dateFilter;

                retrieveRequest.Filter = cfilter;
                /**
                * Use this only if you are retrieving data from sub-account
                */
                ClientID id = new ClientID();
                id.ID = 84116;
                id.IDSpecified = true;
                retrieveRequest.ClientIDs = new ClientID[] {id};

                APIObject[] results = null;
                String requestId = null;
                String response = soapClient.Retrieve(retrieveRequest, out requestId, out results);
                BounceEvent bounceEvent = null;
                if (response != null && response.ToLower().Equals("ok"))
                {
                                if (results != null)
                                {
                                                bounceEvent = (BounceEvent) results[0];
                                }
                }

                Assert.IsNotNull(bounceEvent);
}
```

### Sample Java (Axis2) Code

```apex
public static void RetrieveBounceEvent(PartnerAPIStub stub)
 {
        try {
            RetrieveRequestMsgDocument retrieveRequestMsgDocument = RetrieveRequestMsgDocument.Factory.newInstance();
            RetrieveRequest rreq = RetrieveRequest.Factory.newInstance();
            rreq.setObjectType("BounceEvent");
            String rreqProperties[] = {"ID","EventDate", "SubscriberKey", "SendID", "EventType"};
            rreq.setPropertiesArray(rreqProperties);

            // Declare the filter in order to find a single Subscriber record by SubscriberKey
            SimpleFilterPart sfp = SimpleFilterPart.Factory.newInstance();
            sfp.setProperty("SubscriberKey");
            sfp.setSimpleOperator(SimpleOperators.EQUALS);
            String sfpValues[] = {"jdoe@example.com"};
            sfp.setValueArray(sfpValues);

            SimpleFilterPart sfpSendID = SimpleFilterPart.Factory.newInstance();
            sfpSendID.setProperty("SendID");
            sfpSendID.setSimpleOperator(SimpleOperators.EQUALS);
            String sfpSendIDValues[] = {"10616064"};
            sfpSendID.setValueArray(sfpSendIDValues);

            ComplexFilterPart cfp = ComplexFilterPart.Factory.newInstance();
            cfp.setLeftOperand(sfp);
            cfp.setRightOperand(sfpSendID);
            cfp.setLogicalOperator(LogicalOperators.AND);

            rreq.setFilter(cfp);

            RetrieveRequestMsgDocument.RetrieveRequestMsg retrieveRequestMsg = retrieveRequestMsgDocument.addNewRetrieveRequestMsg();
            retrieveRequestMsg.setRetrieveRequest(rreq);

            // Call the Retrive method
            RetrieveResponseMsgDocument retrieveResponseMsgDocument = stub.Retrieve(retrieveRequestMsgDocument);

            RetrieveResponseMsgDocument.RetrieveResponseMsg retrieveResponseMsg = retrieveResponseMsgDocument.getRetrieveResponseMsg();

            // Output the overall status
            System.out.println((new StringBuilder()).append("Response ::: ").append(retrieveResponseMsg.getOverallStatus()).toString());

            // Loop through all subscribers record, there is a maximum of 1 since filtering on SubscriberKey
            for(APIObject ao : retrieveResponseMsg.getResultsArray())
            {
             BounceEvent be = (BounceEvent) ao;
                System.out.println("BounceEvent- Subscriber: " + be.getSubscriberKey() + ", BounceType: " + be.getEventType().toString() + " on " + be.getEventDate().toString() + " ");
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

### Sample Java (Axis 1.4) Code

```apex
public void testGetOpenEventsforSendIdIn(Soap stub) throws RemoteException {
        RetrieveRequest request = new RetrieveRequest();
        request.setObjectType("BounceEvent");
        String rreqProperties[] = {"ID","EventDate", "SubscriberKey", "SendID", "EventType"};
        request.setProperties(rreqProperties);
        SimpleFilterPart filter2 = new SimpleFilterPart();
        filter2.setProperty("SubscriberKey");
        String[] filterValues2 = {"jdoe@example.com"};
        filter2.setValue(filterValues2);
        filter2.setSimpleOperator(SimpleOperators.equals);
        SimpleFilterPart inf = new SimpleFilterPart();
        inf.setProperty("SendID");
        inf.setSimpleOperator(SimpleOperators.IN);
        String [] val= {"10616064"} ;
        inf.setValue(val);
        ComplexFilterPart complexFilterPart = new ComplexFilterPart();
        complexFilterPart.setLeftOperand(inf);
        complexFilterPart.setRightOperand(filter2);
        complexFilterPart.setLogicalOperator(LogicalOperators.AND);
        request.setFilter(complexFilterPart);
        RetrieveRequestMsg requestMsg = new RetrieveRequestMsg();
        requestMsg.setRetrieveRequest(request);
        RetrieveResponseMsg responseMsg = stub.retrieve(requestMsg);
        System.out.println("Overall request status ::: " + responseMsg.getOverallStatus());
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
$rr->ObjectType = 'BounceEvent';
//Set the properties to return
$props = array("SendID", "EventDate", "TriggeredSendDefinitionObjectID", "SubscriberKey");
$rr->Properties = $props;
//Setup account filtering, to look for a given account MID
$filterPart = new Marketing Cloud_SimpleFilterPart();
$filterPart->Property = 'SendID';
$values = array('27537821');
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

### Sample Java (Axis2) Code

```apex
public static void RetrieveBounceEvent(PartnerAPIStub stub)
 {
        try {
            RetrieveRequestMsgDocument retrieveRequestMsgDocument = RetrieveRequestMsgDocument.Factory.newInstance();
            RetrieveRequest rreq = RetrieveRequest.Factory.newInstance();
            rreq.setObjectType("BounceEvent");
            String rreqProperties[] = {"ID","EventDate", "SubscriberKey", "SendID", "EventType"};
            rreq.setPropertiesArray(rreqProperties);

            // Declare the filter in order to find a single Subscriber record by SubscriberKey
            SimpleFilterPart sfp = SimpleFilterPart.Factory.newInstance();
            sfp.setProperty("SubscriberKey");
            sfp.setSimpleOperator(SimpleOperators.EQUALS);
            String sfpValues[] = {"jdoe@example.com"};
            sfp.setValueArray(sfpValues);

            SimpleFilterPart sfpSendID = SimpleFilterPart.Factory.newInstance();
            sfpSendID.setProperty("SendID");
            sfpSendID.setSimpleOperator(SimpleOperators.EQUALS);
            String sfpSendIDValues[] = {"12345"};
            sfpSendID.setValueArray(sfpSendIDValues);

            ComplexFilterPart cfp = ComplexFilterPart.Factory.newInstance();
            cfp.setLeftOperand(sfp);
            cfp.setRightOperand(sfpSendID);
            cfp.setLogicalOperator(LogicalOperators.AND);

            rreq.setFilter(cfp);

            RetrieveRequestMsgDocument.RetrieveRequestMsg retrieveRequestMsg = retrieveRequestMsgDocument.addNewRetrieveRequestMsg();
            retrieveRequestMsg.setRetrieveRequest(rreq);

            // Call the Retrive method
            RetrieveResponseMsgDocument retrieveResponseMsgDocument = stub.Retrieve(retrieveRequestMsgDocument);

            RetrieveResponseMsgDocument.RetrieveResponseMsg retrieveResponseMsg = retrieveResponseMsgDocument.getRetrieveResponseMsg();

            // Output the overall status
            System.out.println((new StringBuilder()).append("Response ::: ").append(retrieveResponseMsg.getOverallStatus()).toString());

            // Loop through all subscribers record, there is a maximum of 1 since filtering on SubscriberKey
            for(APIObject ao : retrieveResponseMsg.getResultsArray())
            {
             BounceEvent be = (BounceEvent) ao;
                System.out.println("BounceEvent- Subscriber: " + be.getSubscriberKey() + ", BounceType: " + be.getEventType().toString() + " on " + be.getEventDate().toString() + " ");
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
            <ObjectType>BounceEvent</ObjectType>
            <Properties>Client.ID</Properties>
            <Properties>TriggeredSendDefinitionObjectID</Properties>
            <Properties>SendID</Properties>
            <Properties>SubscriberKey</Properties>
            <Properties>EventDate</Properties>
            <Properties>EventType</Properties>
            <Properties>BatchID</Properties>
            <Filter xsi:type="ns1:SimpleFilterPart" xmlns:ns1="http://exacttarget.com/wsdl/partnerAPI">
               <Property>EventDate</Property>
               <SimpleOperator>between</SimpleOperator>
               <DateValue>2009-06-30T03:00:00.000Z</DateValue>
               <DateValue>2009-09-29T02:59:59.999Z</DateValue>
            </Filter>
         </RetrieveRequest>
      </RetrieveRequestMsg>
   </soapenv:Body>
</soapenv:Envelope>
```

## Related Items

-   [Bounce Mail Management](https://help.salesforce.com/articleView?id=mc_es_bounce_mail_management.htm&type=5)
-   [Data Extract Activity](https://help.salesforce.com/articleView?id=mc_es_data_extract_activity.htm&type=5)
