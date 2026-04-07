---
title: "Summary of Send Using JobId"
domain: mc-apis
topic: summary-of-send-using-jobid
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:20.563Z
estimatedTokens: 1644
keywords: [Summary, Send, JobId, retrieving, email, Why, Retrieve, How, Sample, NET, Code, Java, Axis, 1.4, PHP]
---

> This page contains information  about retrieving a summary of tracking information for an email send using the JobID of the send.

# Summary of Send Using JobId

This page contains information about retrieving a summary of tracking information for an email send using the JobID of the send.

## Why Retrieve a Tracking Summary of an Email Send Using JobID

You can use this tracking information to view how your subscribers interact with your email sends and plan future actions based on that information.

## How to Retrieve a Tracking Summary of an Email Send Using JobID

Use the sample code below as a model to construct your own API call.

### Sample .NET Code

```apex
/**
*Returns details of send - when you send email, it returns JobID.
*Use returned ID to get details.
*/
        public void testSendDetails()
        {

            RetrieveRequest retrieveRequest = new RetrieveRequest();
            retrieveRequest.ObjectType = "Send";
            String[] props = { "SentDate", "UniqueOpens", "NumberSent", "NumberDelivered", "HardBounces", "SoftBounces" };
            retrieveRequest.Properties =props;
            /**
             * Use date range to get all sends that happened in range
         */
            /**
            SimpleFilterPart filter = new SimpleFilterPart();
            filter.Property = "SendDate";
            filter.SimpleOperator = SimpleOperators.greaterThanOrEqual;
            filter.DateValue = new DateTime[1];
            filter.DateValue[0] = DateTime.Now;
            retrieveRequest.Filter = filter;
             */
            /**
             * Details for the particular job
             */
            SimpleFilterPart filter = new SimpleFilterPart();
            filter.Property = "ID";
            filter.SimpleOperator = SimpleOperators.equals;
            filter.Value= new string[] {"12043295"};

            retrieveRequest.Filter = filter;
            /**
             * If this job happened from Child Account include ClientId in request.
             */
             /*
            ClientID id = new ClientID();
            id.ID = 90554;
            id.IDSpecified = true;
            retrieveRequest.ClientIDs = new ClientID[] {id};
            */
            APIObject[] results = null;
            String requestId = null;
            String response = soapClient.Retrieve(retrieveRequest, out requestId, out results);
            Send send = null;
            if (response != null && response.ToLower().Equals("ok"))
            {
                if (results != null)
                {
                    send = (Send) results[0];
                }
            }
            Assert.IsNotNull(send);
          }
```

### Sample Java Code (Axis 1.4)

```apex
public void testGetOpenEventsforSendId() throws RemoteException {
        Soap stub = init();       //Initiate soap connection
        RetrieveRequest request = new RetrieveRequest();
        request.setObjectType("SentEvent");                  //You can replace objectTypes with following Values :: OpenEvent,NotSentEvent,BounceEvent
        String[] stringArray = { "EventDate", "SendID", "SubscriberKey","BatchID"};
        request.setProperties(stringArray);
        /*
        SimpleFilterPart filter = new SimpleFilterPart();
        filter.setProperty("SendID");
        String[] filterValues = {"12345"};
        filter.setValue(filterValues);
        filter.setSimpleOperator(SimpleOperators.equals);*/
        SimpleFilterPart dateFilter = new SimpleFilterPart();
        dateFilter.setProperty("EventDate");
        dateFilter.setSimpleOperator(SimpleOperators.between);
        Calendar aCalStartDate = new GregorianCalendar();
        aCalStartDate.set(2009, 8, 20, 1, 1, 0);
        Calendar aCalEndDate = new GregorianCalendar();
        aCalEndDate.set(2009, 8, 20, 7, 10, 20);
        GregorianCalendar[] aCal = new GregorianCalendar[]{(GregorianCalendar) aCalStartDate, (GregorianCalendar) aCalEndtDate};
        dateFilter.setDateValue(aCal);
        /*SimpleFilterPart filter2 = new SimpleFilterPart();
        filter2.setProperty("EventType");
        String[] filterValues2 = {"Click"};
        filter2.setValue(filterValues2);
        filter2.setSimpleOperator(SimpleOperators.equals);
        ComplexFilterPart complexFilterPart = new ComplexFilterPart();
        complexFilterPart.setLeftOperand(filter);
        complexFilterPart.setRightOperand(filter2);
        complexFilterPart.setLogicalOperator(LogicalOperators.AND);*/
        request.setFilter(dateFilter);
       //request.setRetrieveAllSinceLastBatch(true);
       //This brings only the latest records. It eliminates previous records from the result set.
        RetrieveRequestMsg requestMsg = new RetrieveRequestMsg();
        requestMsg.setRetrieveRequest(request);
        RetrieveResponseMsg responseMsg = stub.retrieve(requestMsg);
        System.out.println("Overall request status ::: " + responseMsg.getOverallStatus());
    }
```

### Sample PHP Code

```
<?php
require('exacttarget_soap_client.php');
$wsdl = 'https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/etframework.wsdl';
try   {
        /* Create the Soap Client */
        $client = new Marketing CloudSoapClient($wsdl, array('trace'=>1));

        /* Set username and password here */
        $client->username = 'XXX';
        $client->password = 'XXX';

        $rr = new Marketing Cloud_RetrieveRequest();
        $rr->ObjectType = "Send";   // Example DE is the name of the data extension
        $rr->Properties =  array();
            $rr->Properties[] = "ID";
        $rr->Properties[] = "SentDate";
        $rr->Properties[] = "UniqueOpens";
        $rr->Properties[] = "NumberSent";
        $rr->Properties[] = "NumberDelivered";
            $rr->Properties[] = "HardBounces";
            $rr->Properties[] = "SoftBounces";

            // Setup a simple filter based on the key column you want to match on
        $sfp= new Marketing Cloud_SimpleFilterPart();
        $sfp->Value =  array("12345");
        $sfp->SimpleOperator = Marketing Cloud_SimpleOperators::equals;
        $sfp->Property="ID";

        $rr->Filter = new SoapVar($sfp, SOAP_ENC_OBJECT, 'SimpleFilterPart', "http://exacttarget.com/wsdl/partnerAPI");
        $rr->Options = NULL;
        $rrm = new Marketing Cloud_RetrieveRequestMsg();
        $rrm->RetrieveRequest = $rr;
        $results = $client->Retrieve($rrm);
            var_dump($results);

            /* Output The Results */
            print('ID: '.$results->Results->ID.'<br>');
            print('Sent Date: '.$results->Results->SentDate.'<br>');
            print('NumberSent: '.$results->Results->NumberSent.'<br>');

} catch (Exception  $e) {
      var_dump($e);
}
?>
```
