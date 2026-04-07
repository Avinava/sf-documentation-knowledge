---
title: "Retrieve All Records Since Last Batch"
domain: mc-apis
topic: retrieve-all-records-since-last-batch
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:23.606Z
estimatedTokens: 1445
keywords: [Retrieve, Records, Since, Batch, RetriveAllSinceLastBatch, argument, Why, How, Sample, NET, Code, SOAP, Envelopes]
---

# Retrieve All Records Since Last Batch

> This page contains information about using the RetriveAllSinceLastBatch Boolean argument.

# Retrieve All Records Since Last Batch

This page contains information about using the RetriveAllSinceLastBatch Boolean argument.

## Why Retrieve All Records Since Last Batch

You can use the RetrieveAllSinceLastBatch argument to reduce the amount of records returned by a call and retrieve only the most current information. By retrieving only the most current records, you can save the amount of time and resources devoted to a call.

## How to Retrieve All Records Since Last Batch

Use the sample code below as a model for your own call. Note that you add the applicable object type and retrieveable properties to the this sample code.

### Sample .NET Code

```apex
public void retrieveSentEvent_RASLB(string objectType, string[] retrievableProperties, SimpleFilterPart sfp, bool withObjectType)
        {
            string status = "";
            string requestID = "";
            APIObject[] results = null;
            int count = 0;
            RetrieveRequest retrieveRequest = new RetrieveRequest();

            retrieveRequest.ObjectType = objectType;
            retrieveRequest.Properties = retrievableProperties;
            retrieveRequest.Filter = sfp;
            retrieveRequest.RetrieveAllSinceLastBatchSpecified = true;
            retrieveRequest.RetrieveAllSinceLastBatch = true;
            status = API.Retrieve(retrieveRequest, out requestID, out results);
            if (status.Equals("Error"))
             {
               throw new Exception("Error status " + objectType);
             }
            count = results.Length;
            if (count != 4)
            {
                 throw new Exception("RASLB: Error in number of results retrieved " + objectType);
            }
        }
```

### Sample SOAP Envelopes

The sample code demonstrates a call retrieving SentEvent with **RetrieveAllSinceLastBatch** set to **true**.

#### Example Request

```
<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <Header>
        <fueloauth>YOUR_ACCESS_TOKEN</fueloauth>
   </Header>
   <Body>
      <RetrieveRequestMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">
         <RetrieveRequest>
            <ObjectType>SentEvent</ObjectType>
            <Properties>SubscriberKey</Properties>
            <Properties>EventDate</Properties>
            <QueryAllAccounts>false</QueryAllAccounts>
            <Filter xsi:type="SimpleFilterPart">
               <Property>SendID</Property>
               <SimpleOperator>equals</SimpleOperator>
               <Value>12345</Value>
            </Filter>
            <RetrieveAllSinceLastBatch>true</RetrieveAllSinceLastBatch>
         </RetrieveRequest>
      </RetrieveRequestMsg>
   </Body>
</Envelope>
```

#### Example Response

```
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:wsa="http://schemas.xmlsoap.org/ws/2004/08/addressing" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
   <soap:Header>
      <wsa:Action>RetrieveResponse</wsa:Action>
      <wsa:MessageID>urn:uuid:cdb7b621-8341-4a35-840d-c4ec56fb8a6d</wsa:MessageID>
      <wsa:RelatesTo>urn:uuid:e6a83541-3ae7-412d-9412-d40ee321c4aa</wsa:RelatesTo>
      <wsa:To>http://schemas.xmlsoap.org/ws/2004/08/addressing/role/anonymous</wsa:To>
   </soap:Header>
   <soap:Body>
      <RetrieveResponseMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">
         <OverallStatus>OK</OverallStatus>
         <RequestID>cefcfd29-d44f-4bbd-9188-e2bd51e2de5f</RequestID>
         <Results xsi:type="SentEvent">
            <PartnerKey xsi:nil="true"/>
            <ObjectID xsi:nil="true"/>
            <SubscriberKey>acruz@example.com</SubscriberKey>
            <EventDate>2014-03-26T10:02:01.987</EventDate>
         </Results>
         <Results xsi:type="SentEvent">
            <PartnerKey xsi:nil="true"/>
            <ObjectID xsi:nil="true"/>
            <SubscriberKey>jsmith@example.com</SubscriberKey>
            <EventDate>2014-03-26T10:02:01.987</EventDate>
         </Results>
         <Results xsi:type="SentEvent">
            <PartnerKey xsi:nil="true"/>
            <ObjectID xsi:nil="true"/>
            <SubscriberKey>rc@example.com</SubscriberKey>
            <EventDate>2014-03-26T10:02:01.987</EventDate>
         </Results>
      </RetrieveResponseMsg>
   </soap:Body>
</soap:Envelope>
```

If you run the request again and return no new SentEvents that meet the filter criteria for the original request, you see a response similar to the one shown below:

```
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:wsa="http://schemas.xmlsoap.org/ws/2004/08/addressing" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
   <soap:Header>
      <wsa:Action>RetrieveResponse</wsa:Action>
      <wsa:MessageID>urn:uuid:d6934621-4f81-452e-95f2-682b228199c5</wsa:MessageID>
      <wsa:RelatesTo>urn:uuid:84c278de-0b7c-49df-9e00-49271d603e39</wsa:RelatesTo>
      <wsa:To>http://schemas.xmlsoap.org/ws/2004/08/addressing/role/anonymous</wsa:To>
   </soap:Header>
   <soap:Body>
      <RetrieveResponseMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">
         <OverallStatus>OK</OverallStatus>
         <RequestID>66d292a4-580c-43f3-bc6c-6a9ac450c382</RequestID>
      </RetrieveResponseMsg>
   </soap:Body>
</soap:Envelope>
```
