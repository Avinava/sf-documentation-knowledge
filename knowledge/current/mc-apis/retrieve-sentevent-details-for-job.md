---
title: "Retrieve SentEvent Details for Job"
domain: mc-apis
topic: retrieve-sentevent-details-for-job
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:18.730Z
estimatedTokens: 2428
keywords: [Retrieve, SentEvent, Job, retrieving, sent, event, Why, How, Sample, NET, Code, ContinueRequest, events, Ruby, Rails, Java, Axis, 2.0, SOAP, Envelope]
---

> This page contains information  about retrieving sent event details.

# Retrieve SentEvent Details for Job

This page contains information about retrieving sent event details.

## Why Retrieve Sent Event Details

You can use information about sent events to determine when an email send occurred. Use this information to obtain and understand informations about how your email sends are conducted.

## How To Retrieve Sent Event Details

Use the sample code below as an example to create your own API calls. To request the batchID property, change line 9 in the sample .NET code below to:

```
String[] props = {"SendID","EventDate","TriggeredSendDefinitionObjectID","SubscriberKey","BatchID"};
```

### Sample .NET Code

```
RetrieveRequest retrieveRequest = new RetrieveRequest();
retrieveRequest.ObjectType = "SentEvent";
//TriggeredSendDefinitionObjectID is applicable only for Triggered-Sends
String[] props = {"SendID", "EventDate", "TriggeredSendDefinitionObjectID", "SubscriberKey"};

retrieveRequest.Properties = props;
SimpleFilterPart filter = new SimpleFilterPart();
/*
//Filter by TriggeredSendDefinitionObjectID
filter.Property = "TriggeredSendDefinitionObjectID";
String[] values = { "53fa23c9-7d23-de11-b30f-001cc494ae9e" };
*/
//Filter by SendID
filter.Property = "SendID" ; //aka JobId
String[] values = { "28980" };
filter.Value = values;
SimpleFilterPart dateFilter = new SimpleFilterPart();
dateFilter.Property = "EventDate";
dateFilter.SimpleOperator = SimpleOperators.between;
dateFilter.DateValue = new DateTime[2];
//Use specific dates
dateFilter.DateValue[0] = new DateTime(2009, 01, 01, 12, 0, 0).ToUniversalTime(); //BeingDate;
dateFilter.DateValue[1] = new DateTime(2009, 04, 01, 12, 0, 0).ToUniversalTime(); //EndDate;
//Use calculated dates
//dateFilter.DateValue[0] = DateTime.UtcNow.AddDays(-1);
//dateFilter.DateValue[1] = DateTime.UtcNow;
ComplexFilterPart cfilter = new ComplexFilterPart();
cfilter.LeftOperand = filter;
cfilter.LogicalOperator = LogicalOperators.AND;
cfilter.RightOperand = dateFilter;
retrieveRequest.Filter = cfilter;
/* If send happened from Child account */
/*
ClientID id = new ClientID();
id.ID = 88000;
id.IDSpecified = true;
retrieveRequest.ClientIDs = new ClientID[] { id };
*/
APIObject[] results = null;
String requestId = null;
String response = soapClient.Retrieve(retrieveRequest, out requestId, out results);
SentEvent sentEvent = null;
if (response != null && response.ToLower().Equals("ok"))
{
    if (results != null)
    {
        sentEvent = (SentEvent) results[0];
    }
}
```

### Sample .NET Code - Use ContinueRequest to retrieve all events

```
//Local variables
APIObject[] Results;
SentEvent sEvent;
String requestID;
String status;
//Instantiate the retrieve request
RetrieveRequest rr = new RetrieveRequest();
rr.ObjectType = "SentEvent";//required
//Setting up a simple filter for the date the event occurred
SimpleFilterPart fp = new SimpleFilterPart();
fp.SimpleOperator = SimpleOperators.between;
fp.Property = "EventDate";
DateTime startDate = Convert.ToDateTime("2010-01-01T09:01:00.000-05:00").ToUniversalTime();
DateTime endDate = Convert.ToDateTime("2010-06-17T10:35:00.000-05:00").ToUniversalTime();
fp.DateValue = new DateTime[] {startDate, endDate};
//Setting up a simply filter for a specific triggered send definition
SimpleFilterPart fptwo = new SimpleFilterPart();
fptwo.SimpleOperator = SimpleOperators.equals;
fptwo.Property = "SendID";//Called Job ID in Marketing Cloud UI
fptwo.Value = new String[] { "23954501" };//Available in Marketing Cloud UI [Tracking > My Tracking]
//Add the two simple filters to a ComplexFilter
ComplexFilterPart cfp = new ComplexFilterPart();
cfp.LeftOperand = fp;
cfp.RightOperand = fptwo;
cfp.LogicalOperator = LogicalOperators.AND;
//Add ComplexFilterPart to the RetrieveRequest
rr.Filter = cfp;
rr.Properties = new string[] { "SendID", "SubscriberKey", "EventDate", "BatchID", "ListID" };
//Do While MoreDataAvailable
do
{
    status = client.Retrieve(rr, out requestID, out Results);
    Console.WriteLine("Total Records: " + Results.Length);
    //Display Results
    for (int i = 0; i < Results.Length; i++)
    {
        sEvent = (SentEvent)Results[i];
        Console.WriteLine("SubKey on Event: " + sEvent.SubscriberKey);
    }
    //This call the API again to get the next 2500 records
    rr = new RetrieveRequest();
    rr.ContinueRequest = requestID;
}while (status.Equals("MoreDataAvailable"));//This means there are more than 2500 records
Console.WriteLine("DONE!");
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
  :object => 'SentEvent',
  :props => ['SendID','SubscriberKey','EventDate','EventType','TriggeredSendDefinitionObjectID','BatchID']
}
#Set date to pull from
dateFrom = (DateTime.now - 60).strftime("%m/%d/%y")
#Declare the send filter criteria
filter = {
  :filterType => 'Complex',
  :filter => [['TriggeredSendDefinitionObjectID','isNotNull',nil],'AND',['EventDate','greaterThan',dateFrom]]
}
sentEvent = BuildRetrieve.new
resp = sentEvent.creates(props,filter)
resp.results.each do |result|
  puts result.sendID.to_s + " - " + result.subscriberKey + " - " + result.eventDate.to_s + " - " + result.eventType
end
```

### Sample Java Code (Axis 2.0)

```apex
private static void RetrieveSentEvent(PartnerAPIStub stub) {
        try {
    RetrieveRequestMsgDocument retrieveRequestMsgDocument = RetrieveRequestMsgDocument.Factory.newInstance();
    RetrieveRequest rreq = com.exacttarget.wsdl.partnerapi.RetrieveRequest.Factory.newInstance();
    // Set the Type of object you are retrieving
    rreq.setObjectType("SentEvent");
    String[] fields = { "EventDate", "SubscriberKey", "SendID","BatchID" };
    rreq.setPropertiesArray(fields);    SimpleFilterPart filter1 = SimpleFilterPart.Factory.newInstance();
    filter1.setProperty("EventDate");
    filter1.setSimpleOperator(SimpleOperators.GREATER_THAN);
    Calendar aCalStartDate = new GregorianCalendar();
    aCalStartDate.set(2011, 01, 15, 1, 0);
    String sDate = DateFormat.getInstance().format(
    aCalStartDate.getTime());
    GregorianCalendar[] aCal = new GregorianCalendar[] { (GregorianCalendar) aCalStartDate };
    filter1.setDateValue1Array(aCal);
    SimpleFilterPart filter2 = SimpleFilterPart.Factory.newInstance();
    filter2.setProperty("TriggeredSendDefinitionObjectID");
    filter2.setSimpleOperator(SimpleOperators.EQUALS);
    filter2.setValueArray(new String[] { "bd52a488-2f5c-de11-92ee-001cc494ae9e" });
    ComplexFilterPart cFilter = ComplexFilterPart.Factory.newInstance();
    cFilter.setLeftOperand(filter1);
    cFilter.setRightOperand(filter2);
    cFilter.setLogicalOperator(LogicalOperators.AND);
    rreq.setFilter(cFilter);
    RetrieveRequestMsgDocument.RetrieveRequestMsg retrieveRequestMsg = retrieveRequestMsgDocument.addNewRetrieveRequestMsg();
    retrieveRequestMsg.setRetrieveRequest(rreq);
    RetrieveResponseMsgDocument retrieveResponseMsgDocument = stub.Retrieve(retrieveRequestMsgDocument);    RetrieveResponseMsgDocument.RetrieveResponseMsg retrieveResponseMsg = retrieveResponseMsgDocument
    .getRetrieveResponseMsg();
    APIObject[] results = retrieveResponseMsg.getResultsArray();
    System.out.println(retrieveResponseMsg.getOverallStatus());
    if (retrieveResponseMsg.getOverallStatus().equals("OK") || retrieveResponseMsg.getOverallStatus().equals("MoreDataAvailable")){
    for (APIObject apiObj : results) {
    if (apiObj instanceof SentEvent) {
    System.out.println("SentEvent");
    System.out.println("Sent Time:" + ((SentEvent) apiObj).getEventDate().toString() + "");
    System.out.println("SubscriberKey: " + ((SentEvent) apiObj).getSubscriberKey());
    }
    }
    }
    } catch (RemoteException e) {
    e.printStackTrace();
    } catch (Exception e) {
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
            <ObjectType>SentEvent</ObjectType>
            <Properties>Client.ID</Properties>
            <Properties>TriggeredSendDefinitionObjectID</Properties>
            <Properties>SendID</Properties>
            <Properties>SubscriberKey</Properties>
            <Properties>EventDate</Properties>
            <Properties>EventType</Properties>
            <Properties>BatchID</Properties>
            <Properties>ListID</Properties>
            <Filter xsi:type="ns1:SimpleFilterPart" xmlns:ns1="http://exacttarget.com/wsdl/partnerAPI">
               <Property>EventDate</Property>
               <SimpleOperator>between</SimpleOperator>
               <DateValue>2009-06-30T03:00:00.000Z</DateValue>
               <DateValue>2009-07-29T02:59:59.999Z</DateValue>
            </Filter>
         </RetrieveRequest>
      </RetrieveRequestMsg>
   </soapenv:Body>
</soapenv:Envelope>
```
