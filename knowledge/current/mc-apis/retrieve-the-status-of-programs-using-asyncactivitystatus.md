---
title: "Retrieve the Status of Programs Using AsyncActivityStatus"
domain: mc-apis
topic: retrieve-the-status-of-programs-using-asyncactivitystatus
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:23.700Z
estimatedTokens: 2893
keywords: [Retrieve, Status, Programs, AsyncActivityStatus, retrieving, Campaign, representing, program, itself, Why, How, Sample, NET, Code, PHP]
---

# Retrieve the Status of Programs Using AsyncActivityStatus

> This page contains information about retrieving the status of programs using the Campaign object (representing the program itself) and AsyncActivityStatus.

# Retrieve the Status of Programs Using AsyncActivityStatus

This page contains information about retrieving the status of programs using the Campaign object (representing the program itself) and AsyncActivityStatus.

## Why Retrieve the Status of Programs

You can view the status of active programs to determine how far along these processes are and determine further action from that point.

## How to Retrieve the Status of Programs

Use the sample code below as a model to construct your own API call. Note that this Retrieve call ignores the DateValue property of the SimpleFilterPart and the operand for the ComplexFilterPart. The call returns information on calls started between the StartTime and EndTime only.

You can only set up your filters to use the following properties:

-   ParentInteractionObjectID
-   TaskID
-   StartTime
-   EndTime
-   ClientID
-   QueryAllChildren

The call returns ObjectExtension instances for each program that can include the following information:

-   ParentInteractionObjectID
-   ParentTaskID
-   Program
-   ProcessID
-   StepID
-   StepTaskID
-   StepName
-   InteractionID
-   ClientID
-   TaskID
-   ActionType
-   Type
-   AsyncAction
-   AsyncSubAction
-   Status
-   ProcessedCount
-   TotalCount
-   DuplicateCount
-   ErrorCount
-   CustomerKey
-   ErrorMsg
-   ScheduledTime
-   StartDate
-   CompletedDate
-   StatusMessage

Note that this call can return a large amount of information that could cause timeouts. If you encounter this problem, break your request into several smaller calls.

### Sample .NET Code

```
RetrieveRequest request = new RetrieveRequest();
// Step 1: This is the object type for async activity statuses
request.ObjectType = 'AsyncActivityStatus';
// Step 2: Select the properties you want request.
request.Properties = new string[] { 'CompletedDate', 'Program', 'StepName', 'ActionType', 'Type', 'Status', 'ProcessedCount', 'TotalCount', 'DuplicateCount', 'ErrorCount', 'CustomerKey', 'ErrorMsg', 'StatusMessage' };
// Step 3: Define the filter to get the last two hours worth of activity
ComplexFilterPart filter = new ComplexFilterPart();
// AsyncActivityStatus is a very special case, for date queries the string value is used, not DateValue
        filter.LeftOperand = new SimpleFilterPart() {
        Property = 'StartTime',
        Value = new string[] { DateTime.Now.AddHours(-2).ToString() } };
// filter.LogicalOperator = LogicalOperators.AND;
// For AsyncActivityStatus, the LogicalOperator is not relevant/required
        filter.RightOperand = new SimpleFilterPart() {
            Property = 'EndTime',
            Value = new string[] {
            DateTime.Now.ToString()} };
            request.Filter = filter;
            string requestId;
            APIObject[] results;
            string response = soapClient.Retrieve(request, out requestId, out results);
```

### Sample PHP Code

```
<?php
require('exacttarget_soap_client.php');

$wsdl = 'https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/etframework.wsdl';

try          {
        $client = new Marketing CloudSoapClient($wsdl, array('trace'=>1));

        $client->username = 'XXXXX';
        $client->password = 'XXXXX';

        $rr = new Marketing Cloud_RetrieveRequest();
        $rr->ObjectType = "AsyncActivityStatus";
        $rr->Properties =  array("Program", "StepName", "ActionType", "Type", "Status", "ProcessedCount", "TotalCount", "DuplicateCount", "ErrorCount", "CustomerKey", "ErrorMsg", "CompletedDate", "StatusMessage");
        $rr->Options = NULL;

                                $sfp= new Marketing Cloud_SimpleFilterPart();
                                $sfp->Property="ParentInteractionObjectID";
                                $sfp->SimpleOperator = Marketing Cloud_SimpleOperators::equals;
                                $sfp->Value =  array("d33d7fc7-e6ca-426f-9900-af4685ca45df");
                                $rr->Filter = new SoapVar($sfp, SOAP_ENC_OBJECT, 'SimpleFilterPart', "http://exacttarget.com/wsdl/partnerAPI");

        $rrm = new Marketing Cloud_RetrieveRequestMsg();
        $rrm->RetrieveRequest = $rr;

        $results = $client->Retrieve($rrm);

                                echo 'Status '.$results->OverallStatus."
";
                                echo 'Results '.print_r($results->Results,true);

} catch (SoapFault $e) {
                var_dump($e);
}
?>
```

### Sample Java Code (Axis 1.4)

```apex
public void testGetCampaignStatus() throws RemoteException {
         try {
     Soap stub = init();
                String[] props = {"Program", "StepName", "ActionType", "Type", "Status", "ProcessedCount", "TotalCount", "DuplicateCount", "ErrorCount", "CustomerKey", "ErrorMsg", "CompletedDate", "StatusMessage"};
                RetrieveRequest retrieveRequest = new RetrieveRequest();
                        retrieveRequest.setProperties(props);
                retrieveRequest.setObjectType("AsyncActivityStatus");
                    SimpleFilterPart filter1 = new SimpleFilterPart();
                filter1.setProperty("StartTime");
                filter1.setSimpleOperator(SimpleOperators.equals);
                        Calendar aCalStartDate = new GregorianCalendar();
                //public final void set(int year, int month, int date, int hourOfDay, int minute)
                aCalStartDate.set(2010, 8, 15, 1, 0); //today-10
                String sDate = DateFormat.getInstance().format(aCalStartDate.getTime());
                GregorianCalendar[] aCal = new GregorianCalendar[]{(GregorianCalendar) aCalStartDate};
                filter1.setDateValue(aCal);
                filter1.setValue(new String[]{sDate});
                        System.out.println(" 1. " + DateFormat.getInstance().format(aCalStartDate.getTime()));
                    Calendar aCalEndDate = new GregorianCalendar();
                //public final void set(int year, int month, int date, int hourOfDay, int minute)
                aCalEndDate.set(2010, 8, 26, 23, 59); //today-10
                String eDate = DateFormat.getInstance().format(aCalEndDate.getTime());
                        SimpleFilterPart filter2 = new SimpleFilterPart();
                filter2.setProperty("EndTime");
                filter2.setSimpleOperator(SimpleOperators.equals);
                GregorianCalendar[] bCal = new GregorianCalendar[]{(GregorianCalendar) aCalEndDate};
                filter2.setDateValue(bCal);
                filter2.setValue(new String[]{eDate});

                System.out.println(" 3. " + DateFormat.getInstance().format(aCalEndDate.getTime()));
                    ComplexFilterPart cFilter = new ComplexFilterPart();
                cFilter.setLeftOperand(filter1);
                cFilter.setRightOperand(filter2);
                cFilter.setLogicalOperator(LogicalOperators.OR);
                    retrieveRequest.setFilter(cFilter);
                    RetrieveRequestMsg retrieveRequestMsg = new RetrieveRequestMsg();
                retrieveRequestMsg.setRetrieveRequest(retrieveRequest);
                RetrieveResponseMsg retrieveResponseMsg = stub.retrieve(retrieveRequestMsg);
                System.out.println("[overall status message] " + retrieveResponseMsg.getOverallStatus());
                APIObject[] apiObjectList = retrieveResponseMsg.getResults();
                    if (apiObjectList != null && apiObjectList.length > 0) {
                    for (APIObject dumpStepThrough : apiObjectList) {
                       ObjectExtension s = (ObjectExtension) dumpStepThrough;
                        if(s.getProperties()!=null && s.getProperties().length >0){
                            for(APIProperty api: s.getProperties()){
                                System.out.println("Name :: " + api.getName() + "       Value ::: " + api.getValue() );
                            }
                        }
                    }
                }
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
         <wsse:UsernameToken xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
            <wsse:Username>XXXXX</wsse:Username>
            <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">XXXXX</wsse:Password>
         </wsse:UsernameToken>
      </wsse:Security>
   </soapenv:Header>
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
            <Filter xsi:type="SimpleFilterPart">
               <Property>ParentInteractionObjectID</Property>
               <SimpleOperator>equals</SimpleOperator>
               <Value>8f083fc7-0439-df11-b817-00237d540dfc</Value>
            </Filter>
            <!--Only can filter on ParentInteractionObjectID, TaskID, StartTime, and EndTime-->
         </RetrieveRequest>
      </RetrieveRequestMsg>
   </soapenv:Body>
</soapenv:Envelope>
```

### Sample SOAP Envelope Using Complex Filter

```
<soap-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
 <SOAP-ENV:Header>
 <wsse:Security mustUnderstand="true" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
 <wsse:UsernameToken>
 <wsse:Username>XXXXX</wsse:Username>
 <wsse:Password>XXXXX</wsse:Password>
 </wsse:UsernameToken>
 </wsse:Security>
 </SOAP-ENV:Header>
 <SOAP-ENV:Body>
 <RetrieveRequestMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">
 <RetrieveRequest>
 <Options>
 <Client>
 <ID>REPLACE with MID</ID>
 </Client>
 </Options>
 <ObjectType>AsyncActivityStatus</ObjectType>
 <Properties>Status</Properties>
 <Properties>StartTime</Properties>
 <Properties>EndTime</Properties>
 <Properties>ErrorMsg</Properties>
 <Properties>CompletedDate</Properties>
 <Properties>StatusMessage</Properties>
 <Properties>TaskID</Properties>
 <Properties>ParentInteractionObjectID</Properties>
 <Properties>InteractionID</Properties>
 <Filter xsi:type="par:ComplexFilterPart" xmlns:par="http://exacttarget.com/wsdl/partnerAPI">
 <LeftOperand xsi:type="par:SimpleFilterPart">
 <Property>TaskID</Property>
 <SimpleOperator>equals</SimpleOperator>
 <Value>ccc</Value>
 </LeftOperand>
 <LogicalOperator>AND</LogicalOperator>
 <RightOperand xsi:type="par:SimpleFilterPart">
 <Property>StartTime</Property>
 <SimpleOperator>greaterThan</SimpleOperator>
 <Value>XXXX-XX-XX</Value>
 </RightOperand>
 </Filter>
 </RetrieveRequest>
 </RetrieveRequestMsg>
 </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

## Related Items

[Programs](https://help.salesforce.com/articleView?id=mc_es_interactions_programs.htm&type=5)
