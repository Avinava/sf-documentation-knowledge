---
title: "Interact with Automation Studio"
domain: mc-apis
topic: interact-with-automation-studio
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:17.673Z
estimatedTokens: 6349
keywords: [Prerequisites, Interact, Automation, Studio, SOAP, API, Marketing, Cloud, Why, Sample, NET, Code, Perform, Immediately, Retrieve, Instance, Envelope, Schedule, Pause]
---

> This page contains information about using the SOAP API to interact with Automation Studio within Marketing Cloud.

# Interact with Automation Studio

This page contains information about using the SOAP API to interact with Automation Studio within Marketing Cloud.

## Prerequisites

You must use an active API user on a Marketing Cloud account enabled with Automation Studio for the code samples in this document.

You can view more information on Automation Studio by logging into your Marketing Cloud account, clicking **Welcome**, and selecting **Help**.

The code samples in this document refer only to automations created via the SOAP API. To interact with these automations, you must use the NewObjectID value returned during the SOAP API creation process. If you don't record this value or wish to interact with automation created within Marketing Cloud, you must contact Global Support to retrieve the applicable value. Marketing Cloud recommends creating the automations using the SOAP API if you wish to interact with those automations with more API calls.

## Why Interact with Automation Studio

You can use the SOAP API to perform the following actions within the Automation Studio via your own application or development environment:

-   [Create an automation, including all steps and tasks included in the automation](#create-an-automation)
-   [Perform an automation immediately](#perform-an-automation-immediately)
-   [Retrieve the status of an automation already in progress](#retrieve-an-existing-automation)
-   [Retrieve the status of a single automation instance](#retrieve-a-single-instance-of-an-existing-automation)
-   [Schedule an existing automation](#schedule-an-existing-automation)
-   [Update an automation](#update-an-automation)
-   [Pause an automation](#pause-an-automation)

## Create an Automation

### Sample .NET Code

```apex
public static void CreateAutomation(SoapClient soapClient,
        string iEmailSendDefinitionName,
        string iEmailSendDefinitionCustomerKey,
        string iEmailSendDefinitionObjectID)
{
    Automation automation = new Automation();
    automation.Name = "SOAPAPI Test2_" + Guid.NewGuid().ToString();
    // CustomerKey can be any string value, GUID is only used for example purposes
    automation.CustomerKey = Guid.NewGuid().ToString();
    automation.Description = "SOAP API Created Example";
    automation.AutomationType = "scheduled";
    AutomationActivity activityOne = new AutomationActivity();
    activityOne = new AutomationActivity();
    // This is the ObjectID of the Definition Object
    activityOne.ObjectID = iEmailSendDefinitionObjectID;
    // This is the Name of the Definition Object
    activityOne.Name = iEmailSendDefinitionName;
    activityOne.Definition = new APIObject();
    EmailSendDefinition activityOneDefinition = new EmailSendDefinition();
    // Again this is the ObjectID of the Definition Object
    activityOneDefinition.ObjectID = iEmailSendDefinitionObjectID;
    // Again this is the Name of the Definition Object
    activityOneDefinition.Name = iEmailSendDefinitionName;
    activityOneDefinition.CustomerKey = iEmailSendDefinitionCustomerKey;
    activityOne.ActivityObject = activityOneDefinition;
    AutomationTask taskOne = new AutomationTask();
    taskOne.Name = "Task 1";
    taskOne.Activities = new AutomationActivity[] { activityOne };
    automation.AutomationTasks = new AutomationTask[] { taskOne };
    string RequestID = String.Empty;
    string OverallStatus = String.Empty;
    CreateResult[] createResults = soapClient.Create(new CreateOptions(), new APIObject[] { automation }, out RequestID, out OverallStatus);
    Console.WriteLine("Status: " + OverallStatus);
    foreach (CreateResult cr in createResults)
    {
        Console.WriteLine("NewObjectID: " + cr.NewObjectID);
        Console.WriteLine("StatusCode: " + cr.StatusCode);
        Console.WriteLine("ErrorCode: " + cr.ErrorCode);
        Console.WriteLine("StatusMessage: " + cr.StatusMessage);
    }
}
```

### Sample SOAP Request

```
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:wsa="http://schemas.xmlsoap.org/ws/2004/08/addressing" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
   <soapenv:Header>
      <wsse:Security soapenv:mustUnderstand="1">
         <wsse:UsernameToken>
            <wsse:Username>username</wsse:Username>
            <wsse:Password>password</wsse:Password>
         </wsse:UsernameToken>
      </wsse:Security>
   </soapenv:Header>
   <soapenv:Body>
      <CreateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
         <Options/>
         <Objects xsi:type="Automation">
            <Client>
               <ID>1234567</ID>
            </Client>
            <Name>AUT_ONEOFF</Name>
            <CustomerKey>AUT_ONEOFF</CustomerKey>
            <Description>AUT_ONEOFF</Description>
            <!--<CategoryID>74052</CategoryID>-->
            <!--<Notifications> DOES NOT WORK
               <Notification>
                 <Address>swhitmore@salesforce.com</Address>
                 <NotificationType>-1</NotificationType>
               </Notification>
            </Notifications>-->
            <AutomationTasks>
               <AutomationTask>
                  <PartnerKey xsi:nil="true"/>
                  <ObjectID xsi:nil="true"/>
                  <Name>Task 1</Name>
                  <Activities>
                     <Activity>
                        <PartnerKey xsi:nil="true"/>
                        <ObjectID>c7ccca24-4567-4317-b8d0-3874d69c130c</ObjectID><!-- ObjectID of Query -->
                        <Name>Query 1</Name><!-- Name of Activity -->
                        <!--<Definition>
                           <PartnerKey xsi:nil="true"/>
                           <ObjectID xsi:nil="true"/>
                        </Definition>-->
                        <ActivityObject xsi:type="QueryDefinition">
                           <PartnerKey xsi:nil="true"/>
                           <ObjectID>c7ccca24-4567-4317-b8d0-3874d69c130c</ObjectID><!-- ObjectID of Query -->
                           <CustomerKey>546012e7-4438-4526-9e6c-5ec73939848b</CustomerKey><!-- CustomerKey of Query -->
                           <Name>BrowseAbandon_US_Unica_Sendable_Audience_Approved</Name><!-- Name of Query -->
                        </ActivityObject>
                     </Activity>
                  </Activities>
               </AutomationTask>
            </AutomationTasks>
            <AutomationType>scheduled</AutomationType>
         </Objects>
      </CreateRequest>
   </soapenv:Body>
</soapenv:Envelope>
```

### Sample SOAP Response

```
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:wsa="http://schemas.xmlsoap.org/ws/2004/08/addressing" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
  <soap:Header>
    <wsa:Action>CreateResponse</wsa:Action>
    <wsa:MessageID>urn:uuid:663bdbf6-b24d-45cf-bb4f-0f849228906d</wsa:MessageID>
    <wsa:RelatesTo>urn:uuid:28100dbe-b01f-4bbc-aac5-88bb9e2d9ee5</wsa:RelatesTo>
    <wsa:To>http://schemas.xmlsoap.org/ws/2004/08/addressing/role/anonymous</wsa:To>
    <wsse:Security>
      <wsu:Timestamp wsu:Id="Timestamp-95b6f164-6835-4d46-9d9d-e9f67cf8a9dc">
        <wsu:Created>2013-10-04T17:32:11Z</wsu:Created>
        <wsu:Expires>2013-10-04T17:37:11Z</wsu:Expires>
      </wsu:Timestamp>
    </wsse:Security>
  </soap:Header>
  <soap:Body>
    <CreateResponse xmlns="http://exacttarget.com/wsdl/partnerAPI">
      <Results>
        <StatusCode>OK</StatusCode>
        <OrdinalID>0</OrdinalID>
        <NewID>0</NewID>
        <NewObjectID>1856a6fb-12dd-4472-a822-8b6ef77b7fd7</NewObjectID>
        <Object xsi:type="Automation">
          <PartnerKey xsi:nil="true"/>
          <ObjectID xsi:nil="true"/>
        </Object>
      </Results>
      <RequestID>522fc2a8-cbbd-4868-8b4b-d14facaa9a03</RequestID>
      <OverallStatus>OK</OverallStatus>
    </CreateResponse>
  </soap:Body>
</soap:Envelope>
```

## Perform an Automation Immediately

### Sample .NET Code

The sample code below starts the specified automation. To perform a stop for the specified option, change the string action in the code to **stop**.

```apex
public static void PerformAutomation(SoapClient soapClient,
    string iAutomationObjectID)
{
    Automation automation = new Automation();
    automation.ObjectID = iAutomationObjectID;
    string sStatus = "";
    string sStatusMessage = "";
    string sRequestId = "";
    PerformResult[] pResults = soapClient.Perform(new PerformOptions(), "start", new APIObject[] { automation }, out sStatus, out sStatusMessage, out sRequestId);
    Console.WriteLine("Status: " + sStatus);
    Console.WriteLine("Status Message: " + sStatusMessage);
    Console.WriteLine("Request ID: " + sRequestId);
    foreach (PerformResult pr in pResults)
    {
        Console.WriteLine("StatusCode: " + pr.StatusCode);
        Console.WriteLine("ErrorCode: " + pr.ErrorCode);
        Console.WriteLine("StatusMessage: " + pr.StatusMessage);
    }
}
```

### Sample SOAP Request

```
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:wsa="http://schemas.xmlsoap.org/ws/2004/08/addressing" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
   <soapenv:Header>
      <wsse:Security soapenv:mustUnderstand="1">
         <wsse:UsernameToken>
            <wsse:Username>Username</wsse:Username>
            <wsse:Password>Password</wsse:Password>
         </wsse:UsernameToken>
      </wsse:Security>
   </soapenv:Header>
   <soapenv:Body>
      <PerformRequestMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">
         <Action>start</Action>
         <Definitions>
            <Definition xsi:type="Automation">
               <Client>
                  <ID>1234567</ID>
               </Client>
               <ObjectID>d3f5e492-f1a9-47be-a510-15b0d8de65d3</ObjectID>
            </Definition>
         </Definitions>
      </PerformRequestMsg>
   </soapenv:Body>
</soapenv:Envelope>
```

## Retrieve an Existing Automation

### Sample .NET Code

```apex
public static void RetrieveAutomation(SoapClient soapClient,
    string iAutomationCustomerKey)
{
    RetrieveRequest rr = new RetrieveRequest();
    rr.ObjectType = "Automation";
    SimpleFilterPart sf = new SimpleFilterPart();
    sf.Property = "CustomerKey";
    sf.SimpleOperator = SimpleOperators.equals;
    sf.Value = new String[] { iAutomationCustomerKey };
    rr.Filter = sf;
    rr.Properties = new string[] { "ProgramID", "Name", "Description", "RecurrenceID", "CustomerKey",  "IsActive", "CreatedDate",  "ModifiedDate", "Status"};
    string sStatus = "";
    string sRequestId = "";
    APIObject[] rResults;
    sStatus = soapClient.Retrieve(rr, out sRequestId, out rResults);
    Console.WriteLine("Status: " + sStatus);
    Console.WriteLine("RequestID: " + sRequestId);
    foreach (Automation automation in rResults)
    {
        Console.WriteLine("ObjectID: " + automation.ObjectID);
        Console.WriteLine("Name: " + automation.Name);
        Console.WriteLine("Description: " + automation.Description);
        if (automation.Schedule != null)
        {
            Console.WriteLine("Schedule.ID: " + automation.Schedule.ID );
        }
        Console.WriteLine("CustomerKey: " + automation.CustomerKey);
        Console.WriteLine("IsActive: " + automation.IsActive);
        Console.WriteLine("CreatedDate: " + automation.CreatedDate.ToString());
        Console.WriteLine("ModifiedDate: " + automation.ModifiedDate);
        Console.WriteLine("Status: " + automation.Status);
    }
}
```

### Sample SOAP Request

```
<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
   <s:Header>
       <o:Security xmlns:o="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" s:mustUnderstand="1">
         <o:UsernameToken u:Id="uuid-4e7d733b-f16d-44e1-b947-b27ce4cda3fe-1">
            <o:Username>ccc</o:Username>
            <o:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">ccc</o:Password>
         </o:UsernameToken>
      </o:Security>
   </s:Header>
   <s:Body xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
      <RetrieveRequestMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">
         <RetrieveRequest>
            <ClientIDs>
               <ClientID>1234567</ClientID>
            </ClientIDs>
            <ObjectType>Automation</ObjectType>
            <Properties>ProgramID</Properties>
            <Properties>Name</Properties>
            <Properties>Description</Properties>
            <Properties>RecurrenceID</Properties>
            <Properties>CustomerKey</Properties>
            <Properties>IsActive</Properties>
            <Properties>CreatedDate</Properties>
            <Properties>ModifiedDate</Properties>
            <Properties>Status</Properties>
            <Filter xsi:type="SimpleFilterPart">
               <Property>ProgramID</Property>
               <SimpleOperator>equals</SimpleOperator>
               <Value>aa697ba2-3531-4c26-8669-20594a949145</Value>
            </Filter>
         </RetrieveRequest>
      </RetrieveRequestMsg>
   </s:Body>
</s:Envelope>
```

### Sample SOAP Response

```
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:wsa="http://schemas.xmlsoap.org/ws/2004/08/addressing" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
   <soap:Body>
      <RetrieveResponseMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">
         <OverallStatus>MoreDataAvailable</OverallStatus>
         <RequestID>147c8363-3cbb-40fa-96b0-b242d51cacc5</RequestID>
         <Results xsi:type="Automation">
            <PartnerKey/>
            <PartnerProperties>
               <Name>AutomationType</Name>
               <Value>scheduled</Value>
            </PartnerProperties>
            <CreatedDate>2014-04-24T07:02:53.857</CreatedDate>
            <ModifiedDate>2014-04-24T07:33:53.27</ModifiedDate>
            <ObjectID>8b6aea33-6f91-4556-bae3-794650b328eb</ObjectID>
            <CustomerKey>aa697ba2-3531-4c26-8669-20594a949145</CustomerKey>
            <ObjectState/>
            <Name>Example Automation</Name>
            <Description>SOAP API Created Example</Description>
            <Keyword/>
            <AutomationTasks>
               <AutomationTask>
                  <PartnerKey xsi:nil="true"/>
                  <ObjectID xsi:nil="true"/>
                  <AutomationTaskType>42</AutomationTaskType>
                  <Activities>
                     <Activity>
                        <PartnerKey xsi:nil="true"/>
                        <ObjectID>5a0d3995-0cf2-4fcf-bb6b-c2cfc50e0c8b</ObjectID>
                        <Name>MyEmailSendDefinition</Name>
                        <IsActive>true</IsActive>
                        <Definition>
                           <PartnerKey xsi:nil="true"/>
                           <ObjectID xsi:nil="true"/>
                           <CustomerKey>aa697ba2-3531-4c26-8669-20594a949145</CustomerKey>
                        </Definition>
                        <Sequence>0</Sequence>
                     </Activity>
                  </Activities>
               </AutomationTask>
            </AutomationTasks>
            <IsActive>true</IsActive>
            <Status>2</Status>
            <AutomationType>scheduled</AutomationType>
         </Results>
      </RetrieveResponseMsg>
   </soap:Body>
</soap:Envelope>
```

## Retrieve a Single Instance of an Existing Automation

Use Automation ID and AutomationInstanceID to retrieve existing automations. If your account has been migrated, ProgramID is still supported.

### Sample .NET Code

```apex
// This query requires a filter
private APIObject[] RetrieveAutomationInstances(string id)
{
  string requestID = null;
  string status = null;
  APIObject[] results = null;
  Automation automation = null;
  RetrieveRequest request = new RetrieveRequest();
  SimpleFilterPart fp = new SimpleFilterPart();
  fp.Property = "ProgramInstanceID";
  fp.SimpleOperator = SimpleOperators.equals;
  fp.Value = new string[] { id }; // The instance ID is returned as the ObjectID when calling Perform for Automation
  try
  {
    request.ObjectType = "AutomationInstance";
    request.Properties = new string[] { "ProgramID", "Status", "Name", "CreatedDate", "ModifiedDate", "CustomerKey", "RecurrenceID", "ClientID"};
    request.Filter = fp;
    status = sc.Retrieve(request, ref requestID, out results);
    if (status == StatusCodes.OK)
    {
       foreach (var x in results)
       {
          Console.WriteLine(x.ID + " " + x.ObjectID.ToString());
       }
    }
    else
    {
           Console.WriteLine(status);
    }
  }
  catch (Exception e)
  {
        Console.WriteLine(e);
  }
  return results;
}
```

### Sample SOAP Envelope

```
<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <Header>
     <fueloauth>YOUR_ACCESS_TOKEN</fueloauth>
   </Header>
   <Body>
      <RetrieveRequestMsg xmlns="http://exacttarget.com/wsdl/partnerAPI ">
         <RetrieveRequest>
            <ObjectType>AutomationInstance</ObjectType>
            <Properties>ProgramID</Properties>
            <Properties>Status</Properties>
            <Properties>Name</Properties>
            <Properties>CreatedDate</Properties>
            <Properties>ModifiedDate</Properties>
            <Properties>CustomerKey</Properties>
            <Properties>RecurrenceID</Properties>
            <Properties>ClientID</Properties>
            <Filter xsi:type="SimpleFilterPart">
                  <Property>ProgramInstanceID</Property>
                  <SimpleOperator>equals</SimpleOperator>
                  <Value>4948b9f5-5f88-4b3f-bf84-5faf8014b5a2</Value>
                  <!-- GUID Value for ProgramInstanceID is returned from Automation Perform as the ObjectID -->
            </Filter>
         </RetrieveRequest>
      </RetrieveRequestMsg>
   </Body>
</Envelope>
```

## Schedule an Existing Automation

### Sample .NET Code

```apex
private bool ScheduleAutomation(string automationName, SoapClient soapClient)
        {
            PerformOptions options = new PerformOptions();

      //Retrieve an existing non-Scheduled Automation
            var automation = RetrieveAutomation( "F2608540-4D63-403C-9EC4-1A34206EE36F", soapClient );

            Assert.IsNotNull(automation);
            //A success schedules the automation
            //createResults includes an automation object
            //that passes to the schedule
            /**/
            ScheduleOptions scheduleOptions = new ScheduleOptions();
   scheduleOptions.ScheduledTime = DateTime.Now;
   scheduleOptions.ScheduledTimeSpecified = true;
   ScheduleDefinition schedule = new ScheduleDefinition();
   schedule.StartDateTime = DateTime.Now.AddMinutes(45);
   schedule.StartDateTimeSpecified = true;
   schedule.RecurrenceType = RecurrenceTypeEnum.Hourly;
   schedule.RecurrenceTypeSpecified = true;
            schedule.RecurrenceRangeType = RecurrenceRangeTypeEnum.EndAfter;
   schedule.RecurrenceRangeTypeSpecified = true;
   schedule.Occurrences = 3;
   schedule.OccurrencesSpecified = true;
   Marketing Cloud.APIImplementation.Programs3.Automation.Tests.AutomationClient.TimeZone tz = new Marketing Cloud.APIImplementation.Programs3.Automation.Tests.AutomationClient.TimeZone();
   tz.ID = 79;
   tz.IDSpecified = true;
   schedule.TimeZone = tz;
   var recurrence = new HourlyRecurrence();
   recurrence.HourInterval = 1;
   recurrence.HourIntervalSpecified = true;
   recurrence.HourlyRecurrencePatternType = HourlyRecurrencePatternTypeEnum.Interval;
   recurrence.HourlyRecurrencePatternTypeSpecified = true;
   schedule.Recurrence = recurrence;

            var scheduleRequest = new ScheduleRequest(scheduleOptions, "start", schedule,
                                                      new APIObject[] {automation});

            var scheduleResponse = soapClient.Schedule(scheduleRequest);

            return true;
        }
```

## Update an Automation

### Sample .NET Code

```apex
private void UpdateAutomation(SoapClient soapClient)
        {
            //retrieve an Automation
            //modify Automation
            //update Automation

     var automation = RetrieveAutomation( "F2608540-4D63-403C-9EC4-1A34206EE36F", soapClient );

            if ( automation != null )
            {
                automation.Description = "This is an update to an Automation";
                var updateOptions = new UpdateOptions();
                var updateObjects = new APIObject[1] {automation};
                var updateRequest = new UpdateRequest(updateOptions, updateObjects);
                var updateResults = soapClient.Update(updateRequest);
                if(updateResults.OverallStatus != "Error")
                {

                }
            }
        }
```

### Sample .NET Code

```apex
public static void UpdateAutomation(SoapClient soapClient,
            string AutomationObjectID,
            string NewNameForAutomation)
        {
            Automation automation = new Automation();
            automation.ObjectID = AutomationObjectID;
            automation.Name = NewNameForAutomation;

            string RequestID = String.Empty;
            string OverallStatus = String.Empty;

            UpdateResult[] createResults = soapClient.Update(new UpdateOptions(), new APIObject[] { automation }, out RequestID, out OverallStatus);

            Console.WriteLine("Status: " + OverallStatus);
            foreach (UpdateResult ur in createResults)
            {
                Console.WriteLine("StatusCode: " + ur.StatusCode);
                Console.WriteLine("ErrorCode: " + ur.ErrorCode);
                Console.WriteLine("StatusMessage: " + ur.StatusMessage);
            }
        }
```

### Sample SOAP Envelope

```
<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
   <s:Header>
      <o:Security s:mustUnderstand="1" xmlns:o="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
         <o:UsernameToken u:Id="uuid-4058d7c8-2104-490a-a67f-88de530a4506-1">
            <o:Username>XXXXX</o:Username>
            <o:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">XXXXX</o:Password>
         </o:UsernameToken>
      </o:Security>
   </s:Header>
   <s:Body xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
      <UpdateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
         <Options/>
         <Objects xsi:type="Automation">
            <PartnerKey xsi:nil="true"/>
            <ObjectID>8b6aea33-6f91-4556-bae3-794650b328eb</ObjectID>
            <Name>This automation received a new name</Name>
         </Objects>
      </UpdateRequest>
   </s:Body>
</s:Envelope>
```

## Pause an Automation

### Sample SOAP Envelope

```
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:wsa="http://schemas.xmlsoap.org/ws/2004/08/addressing" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
   <soap:Header>
      <wsse:Security soap:mustUnderstand="1">
         <wsse:UsernameToken wsu:Id="SecurityToken-4c1eed3b-75ee-4d19-8712-731028aaad77">
            <wsse:Username>XXXXX</wsse:Username>
            <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">XXXXX</wsse:Password>
         </wsse:UsernameToken>
      </wsse:Security>
   </soap:Header>
   <soap:Body>
      <ScheduleRequestMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">
         <Action>pause</Action>
         <Schedule>
         </Schedule>
         <Interactions>
            <Interaction xsi:type="Automation">
               <ObjectID>78d55eb5-0811-4638-a574-374a242426f7</ObjectID>
            </Interaction>
         </Interactions>
      </ScheduleRequestMsg>
   </soap:Body>
</soap:Envelope>
```
