---
title: "Start an Email Send Definition"
domain: mc-apis
topic: start-an-email-send-definition
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:25.223Z
estimatedTokens: 3323
keywords: [Start, Email, Send, Definition, how, Why, Sample, NET, Code, Output, Filter, Java, Axis2, Ruby, Rails]
---

# Start an Email Send Definition

> This page contains information on how to start an email send definition.

# Start an Email Send Definition

This page contains information on how to start an email send definition.

## Why Start an Email Send Definition

You can use the SOAP API to start an email send definition from your development environment or another system. This allows you to send an email without accessing Marketing Cloud.

## How to Start an Email Send Definition

Use the sample code as a model for your own API calls.

### Sample .NET Start and Create Code

You can use the sample code to set up your call to start an email send definition. The code uses the following API calls:

1.  Create a simple email send definition.
2.  Start the email send.
3.  Output the results of your send

```apex
// 1. Create the EmailSendDefinition
EmailSendDefinition sd = new EmailSendDefinition();
sd.CustomerKey = "95";
// 2. Start the Send
PerformResult[] results = integrationFramework.Perform(new PerformOptions(), "start", new InteractionBaseObject[] { sd }, out status, out message, out requestID);
// 3. Print out overall results
System.Text.StringBuilder sb = new System.Text.StringBuilder();
sb.Append("Perform Send Definition");
sb.AppendFormat("
Overall result: {0}.  RequestID: {1}, {2}
{3}
{4}
{5}
TaskID: {6}", status, requestID, message, results[0].ErrorCode, results[0].StatusCode, results[0].StatusMessage, results[0].Task.ID);
Console.WriteLine(sb.ToString());
```

### Output

```
Perform Send Definition Overall result: OK.  RequestID: f111b13f-fea3-42f7-8e48-367cf09ea4cb, OK 0 OK EmailSendDefinition performed TaskID: 10937228
```

### Sample .NET Start Code

The sample code below includes a dynamic From name and email address and returns the JobID.

```apex
/**
* How to start email send definition from account. After perform call is executed system returns JobId.
*/
    public void startEmailSendDefinition()
        {
            EmailSendDefinition definition = new EmailSendDefinition();
            definition.CustomerKey = "Definition_Key";
            //By default fromAddress picks from Account object or SenderProfile defined for Classification
            definition.SenderProfile.FromName = "Dynamic from Name";
            definition.SenderProfile.FromAddress = "SendTime@example.com";
            PerformOptions options = new PerformOptions();
            //Use this client only if object belongs to Sub-Account
            ClientID clientID = new ClientID();
            clientID.ID = 12029;
            clientID.IDSpecified = true;
            options.Client = clientID;
            APIObject[] objects = {definition};
            PerformResult[] result =
                soapClient.Perform(options, "start", objects, out overallStatus, out overallStatusMessage, out requestID);
            //Capture JobId from Result object
        }
```

### Sample .NET Start Code Using a Filter Definition

```apex
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using ET_API_WFC.ExactTargetWebReference;
namespace ET_API_WFC
{
    public partial class API_CREATE_SEND_DEF : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
        }
        protected void btn_create_send_def_Click(object sender, EventArgs e)
        {
            string Username, Password;
            string requestID, status;
            Username = "xxxxx";
            Password = "xxxx";
            SoapClient client = new Marketing CloudWebReference.SoapClient();
            client.ClientCredentials.UserName.UserName = Username;
            client.ClientCredentials.UserName.Password = Password;
                //Create a GUID for ESD
                string strGUID = System.Guid.NewGuid().ToString();
                //Create EmailSendDefinition object to refer to current users ESD [Messages > Email > User-Initiated]
                EmailSendDefinition esd = new EmailSendDefinition();
                esd.Name = "EmailSendDefinition";
                esd.CustomerKey = "CustomerKey";
                esd.Description = "Description";
                //Create Email object to refer to pre-created email
                Email em = new Email();
                em.ID = 12345;//Found via a Retreive or UI
                em.IDSpecified = true;
                esd.Email = em;
                esd.EmailSubject = "ESD Email Subject";
                //Create SendClassification
                SendClassification sc = new SendClassification();
                sc.ObjectID = "123456";
                //Found via a Retreive
                esd.SendClassification = sc;
                esd.IsSendLogging = false;
                esd.IsSendLoggingSpecified = true;
                esd.DeduplicateByEmail = true;
                esd.DeduplicateByEmailSpecified = true;
                //Set Send Definition List for the Email Send Definition
                esd.SendDefinitionList = new SendDefinitionList[2];
                esd.SendDefinitionList[0] = new SendDefinitionList();
                FilterDefinition fd = new FilterDefinition();
                fd.ObjectID = "1234567";
                fd.CustomerKey = "FilterCustomerKey";
                esd.SendDefinitionList[0].SendDefinitionListType = SendDefinitionListTypeEnum.SourceList;
                esd.SendDefinitionList[0].SendDefinitionListTypeSpecified = true;

                esd.SendDefinitionList[0].FilterDefinition = fd;
                esd.SendDefinitionList[0].DataSourceTypeID = DataSourceTypeEnum.FilterDefinition;
                esd.SendDefinitionList[0].DataSourceTypeIDSpecified = true;
                esd.SendDefinitionList[1] = new SendDefinitionList();
                DataExtension ea = new DataExtension();
                ea.ObjectID = "123456";
                ea.CustomerKey = "DECustomerKey";
                esd.SendDefinitionList[1].SendDefinitionListType = SendDefinitionListTypeEnum.ExclusionList;
                esd.SendDefinitionList[1].SendDefinitionListTypeSpecified = true;

                esd.SendDefinitionList[1].DataSourceTypeID = DataSourceTypeEnum.CustomObject;
                esd.SendDefinitionList[1].DataSourceTypeIDSpecified = true;
                esd.SendDefinitionList[1].CustomObjectID = ea.ObjectID;
                //Create the EmailSendDefinition, it is visible as a user-initiated Email in Marketing Cloud
                string cRequestID = "";
                string cStatus = "";
                CreateResult[] cResults = client.Create(new CreateOptions(), new APIObject[] { esd }, out cRequestID, out cStatus);
                PerformResult[] results = client.Perform(new PerformOptions(), "start", new InteractionBaseObject[] { esd }, out status, out message, out requestID);
                lblStatus.Text = cStatus;
            }
        }
    }
```

### Sample Java Code (Axis2)

```apex
private static void PerformESD(PartnerAPIStub stub) {
                try {
                                PerformRequestMsgDocument prmd = PerformRequestMsgDocument.Factory.newInstance();
                                PerformRequestMsg pr = PerformRequestMsg.Factory.newInstance();
                                com.exacttarget.wsdl.partnerapi.PerformRequestMsgDocument.PerformRequestMsg.Definitions defs = com.exacttarget.wsdl.partnerapi.PerformRequestMsgDocument.PerformRequestMsg.Definitions.Factory.newInstance();
                                EmailSendDefinition id = EmailSendDefinition.Factory.newInstance();
                                id.setCustomerKey("ExampleExternalKey");
                                defs.setDefinitionArray(new EmailSendDefinition[] {id});
                                pr.setAction("start");
                                pr.setDefinitions(defs);
                                prmd.setPerformRequestMsg(pr);
                                PerformResponseMsgDocument performResponseMsgDoc = stub.Perform(prmd);
                                PerformResponseMsgDocument.PerformResponseMsg performResponseMsg = performResponseMsgDoc.getPerformResponseMsg();
                                System.out.println(performResponseMsg.getOverallStatus() + " " +performResponseMsg.getOverallStatusMessage());
                                System.out.println(performResponseMsgDoc.toString());
                } catch (RemoteException e) {
                                e.printStackTrace();
                } catch (Exception e) {
                                e.printStackTrace();
                }
    }
```

### Sample Ruby on Rails Code

```
require 'rubygems'
gem 'soap4r'
require 'soap/wsdlDriver'
require 'soap/header/simplehandler'
require 'defaultDriver.rb'
require 'authStub.rb'
#Async create options
#options = CreateOptions.new(nil,nil,nil,nil,nil,nil,nil,nil,'Asynchronous')
options = nil
customerKey = 'API-Test-1'
emailSendDef = EmailSendDefinition.new(nil,nil,nil,nil,nil,nil,nil,customerKey,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil)
apiObj = emailSendDef
resp = $driver.perform(PerformRequestMsg.new(options,'start',[apiObj]))
```

### SOAP Request

```
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:wsa="http://schemas.xmlsoap.org/ws/2004/08/addressing" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
   <soap:Header>
      <wsa:Action>Perform</wsa:Action>
      <wsa:MessageID>urn:uuid:30ffce73-2bdc-422a-b3da-1e71e3f15270</wsa:MessageID>
      <wsa:ReplyTo>
         <wsa:Address>http://schemas.xmlsoap.org/ws/2004/08/addressing/role/anonymous</wsa:Address>
      </wsa:ReplyTo>
      <wsa:To>https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/Service.asmx</wsa:To>
      <wsse:Security soap:mustUnderstand="1">
         <wsse:UsernameToken wsu:Id="SecurityToken-4c1eed3b-75ee-4d19-8712-731028aaad77">
            <wsse:Username>username</wsse:Username>
            <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">password</wsse:Password>
         </wsse:UsernameToken>
      </wsse:Security>
   </soap:Header>
   <soap:Body>
      <PerformRequestMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">
         <Action>start</Action>
         <Definitions>
            <Definition xsi:type="EmailSendDefinition">
               <CustomerKey>Definition_Key</CustomerKey>
               <SenderProfile>
                  <FromName>FromName</FromName>
                  <FromAddress>johndoe@example.com</FromAddress>
               </SenderProfile>
            </Definition>
         </Definitions>
      </PerformRequestMsg>
   </soap:Body>
</soap:Envelope>
```

### SOAP Response

```
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:wsa="http://schemas.xmlsoap.org/ws/2004/08/addressing" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
   <soap:Header>
      <wsa:Action>PerformResponse</wsa:Action>
      <wsa:MessageID>urn:uuid:5fe18fef-cc88-416c-862d-28013ef1d379</wsa:MessageID>
      <wsa:RelatesTo>urn:uuid:30ffce73-2bdc-422a-b3da-1e71e3f15270</wsa:RelatesTo>
      <wsa:To>http://schemas.xmlsoap.org/ws/2004/08/addressing/role/anonymous</wsa:To>
      <wsse:Security>
         <wsu:Timestamp wsu:Id="Timestamp-22862e3f-fefa-45db-ba7f-e69d88571df3">
            <wsu:Created>2010-02-22T20:29:14Z</wsu:Created>
            <wsu:Expires>2010-02-22T20:34:14Z</wsu:Expires>
         </wsu:Timestamp>
      </wsse:Security>
   </soap:Header>
   <soap:Body>
      <PerformResponseMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">
         <Results>
            <Result>
               <StatusCode>OK</StatusCode>
               <StatusMessage>EmailSendDefinition performed</StatusMessage>
               <Object xsi:type="EmailSendDefinition">
                  <ObjectID>fb3f4fff-8a6c-de11-8fc9-00215adef71a</ObjectID>
                  <CustomerKey>Definition_Key</CustomerKey>
                  <Name>Definition_Name</Name>
                  <SenderProfile>
                     <ObjectID xsi:nil="true"/>
                     <FromName>FromName</FromName>
                     <FromAddress>johndoe@example.com</FromAddress>
                  </SenderProfile>
               </Object>
               <Task>
                  <StatusCode>OK</StatusCode>
                  <StatusMessage>OK</StatusMessage>
                 <!-- JobId ->
                 <ID>12052743</ID>
                  <InteractionObjectID>49d6e0eb-f01f-df11-9b82-00237dd3560e</InteractionObjectID>
               </Task>
            </Result>
         </Results>
         <OverallStatus>OK</OverallStatus>
         <OverallStatusMessage/>
         <RequestID>6fb20bc4-2772-4681-8ee3-b36445457676</RequestID>
      </PerformResponseMsg>
   </soap:Body>
</soap:Envelope>
```
