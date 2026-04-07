---
title: "Perform a Query Activity"
domain: mc-apis
topic: perform-a-query-activity
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:18.117Z
estimatedTokens: 953
keywords: [Perform, Query, Activity, performing, SQL, SOAP, API, Why, How, Queries, Sample, Envelope, Checking, Status, Asynchronous, Result, Items]
---

> This page contains information about performing an SQL query activity using the SOAP API.

# Perform a Query Activity

This page contains information about performing an SQL query activity using the SOAP API.

## Why Perform a Query Activity

You can use the SOAP API to perform existing query activities and return any data the activity may return. You must create the query activity in Marketing Cloud before you can use the API to perform the activity. Note that you must use the ObjectID for the query definition (which you can find by performing a retrieve on the QueryDefinition object) when performing that query definition.

## How to Perform SQL Queries

Identify your query activity with the specified ObjectID. Use the sample code below as a model for your own code:

### Sample SOAP Request - Performing a Query Activity

```
<soap-ENV:Body>
  <PerformRequestMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">
   <Action>Start</Action>
   <Definitions>
    <ns1:Definition xmlns:ns1="http://exacttarget.com/wsdl/partnerAPI" xsi:type="ns1:QueryDefinition">
     <ns1:PartnerKey xsi:nil="true"/>
     <ns1:ModifiedDate xsi:nil="true"/>
     <ns1:ObjectID>XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX</ns1:ObjectID>
    </ns1:Definition>
   </Definitions>
  </PerformRequestMsg>
</SOAP-ENV:Body>
```

### Sample SOAP Response - Performing a Query Activity

```
<soap:Body>
      <PerformResponseMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">
         <Results>
            <Result>
               <StatusCode>OK</StatusCode>
               <StatusMessage>QueryDefinition perform called successfully</StatusMessage>
               <Object xsi:type="QueryDefinition">
                  <PartnerKey xsi:nil="true"/>
                  <ModifiedDate xsi:nil="true"/>
                  <ObjectID>XXXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX</ObjectID>
               </Object>
               <Task>
                  <StatusCode>OK</StatusCode>
                  <StatusMessage>OK</StatusMessage>
                  <ID>123</ID>
                  <InteractionObjectID>123456789</InteractionObjectID>
               </Task>
            </Result>
         </Results>
         <OverallStatus>OK</OverallStatus>
         <OverallStatusMessage/>
         <RequestID>123</RequestID>
      </PerformResponseMsg>
   </soap:Body>
```

### Sample SOAP Envelope - Checking the Status of the Query Activity Asynchronous Result

The response to your request includes the TaskID, which you can use as a filter with the AsyncActivityStatus object to retrieve the status of the query activity.

```
<soapenv:Body>
      <RetrieveRequestMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">
         <RetrieveRequest>
            <ObjectType>AsyncActivityStatus</ObjectType>
            <Properties>Status</Properties>
            <Properties>StartTime</Properties>
            <Properties>EndTime</Properties>
            <Properties>TaskID</Properties>
            <Properties>ParentInteractionObjectID</Properties>
            <Properties>InteractionID</Properties>
            <Properties>Program</Properties>
            <Properties>StepName</Properties>
            <Properties>ActionType</Properties>
            <Properties>Type</Properties>
            <Properties>Status</Properties>
            <Properties>CustomerKey</Properties>
            <Properties>ErrorMsg</Properties>
            <Properties>CompletedDate</Properties>
            <Properties>StatusMessage</Properties>
            <Filter xsi:type="SimpleFilterPart">
               <Property>TaskID</Property>
               <SimpleOperator>equals</SimpleOperator>
               <Value>XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX</Value>
            </Filter>
         </RetrieveRequest>
      </RetrieveRequestMsg>
   </soapenv:Body>
```

## Related Items

[Query Activity](https://help.salesforce.com/articleView?id=mc_as_using_the_query_activity.htm&type=5)
