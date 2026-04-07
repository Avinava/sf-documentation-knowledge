---
title: "Start an Import Definition"
domain: mc-apis
topic: start-an-import-definition
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:20.469Z
estimatedTokens: 2154
keywords: [Start, Import, Definition, Starting, via, SOAP, API, maintaining, tight, integration, system, development, environment, Why, How, Sample, NET, Code, Java, Axis, 1.4, 2.0, Ruby, Rails, Envelope, Items]
---

> Starting an import definition via the SOAP API allows you to import information while maintaining a tight integration with your system or development environment.

# Start an Import Definition

## Why Start an Import Definition

Starting an import definition via the SOAP API allows you to import information while maintaining a tight integration with your system or development environment.

## How to Start an Import Definition

Use the sample code below to create your own call to start the import definition. The PerformResult Task.ID property provides the unique identifier needed to track the import using the ImportSummaryResults retrieve.

### Sample .NET Code

```apex
using System;
using System.Configuration;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Xml.Linq;
using etAPI;
public partial class PerformImportDefinition : System.Web.UI.Page
{
    //Global Variables
    private SoapClient client = new SoapClient();
    protected void Page_Load(object sender, EventArgs e)
    {
        //Authenticate
        client.ClientCredentials.UserName.UserName = System.Configuration.ConfigurationSettings.AppSettings["wsUserName"];
        client.ClientCredentials.UserName.Password = System.Configuration.ConfigurationSettings.AppSettings["wsPassword"];
        if (!IsPostBack)
        {
        }
    }
    protected void btnSubmit_Click(object sender, EventArgs e)
    {
        try
        {
            //Create Subscriber object [Interactions > Activities > Import]
            ImportDefinition id = new ImportDefinition();
            id.CustomerKey = "3f42394b-7f89-44c6-a653-f80aaa00935c";
            try
            {
                //Call the Perform method on the ImportDefinition object
                string pStatus = String.Empty;
                string pMessage = String.Empty;
                string pRequestID = String.Empty;
                PerformResult[] pResults = client.Perform(new PerformOptions(), "Start", new InteractionBaseObject[] { id }, out pStatus, out pMessage, out pRequestID);
                //Display Results
                lblMessage.Text += "Overall Perform Status: " + pStatus;
                lblMessage.Text += "<br/>";
                lblMessage.Text += "Number of Results: " + pResults.Length;
                lblMessage.Text += "<br/>";
                //Loop through each object returned and display the StatusMessage
                foreach (PerformResult pr in pResults)
                {
                    lblMessage.Text += "Status Message: " + pr.StatusMessage;
                    lblMessage.Text += "<br/>";
                }
            }
            catch (Exception exCreate)
            {
                //Set Message
                lblMessage.Text += "<br/><br/>PERFORM ERROR:<br/>" + exCreate.Message;
            }
        }
        catch (Exception exc)
        {
            //Set Message
            lblMessage.Text += "<br/><br/>###ERROR<br/>" + exc.Message;
        }
    }
}
```
```apex
// Intialize variables string requestID; string status; string message;  // Create the ImportDefinition ImportDefinition id = new ImportDefinition();
id.CustomerKey = "cn2importa";
// Start the import
PerformResult[] results = integrationFramework.Perform(null, "start", new InteractionBaseObject[] { id },out status, out message, out requestID);
// Print out overall results
System.Text.StringBuilder sb = new System.Text.StringBuilder();
sb.Append("Perform Import Definition");
sb.AppendFormat("
Overall result: {0}.  RequestID: {1}, {2}
{3}
{4}
Task.ID{5}", status, requestID, message, results[0].ErrorCode, results[0].StatusCode, results[0].Task.ID.toString());
Console.WriteLine(sb.ToString());
```

### Output

```
Perform Import Definition Overall result: OK.  RequestID: 21d7d5a5-871a-4584-b61a-18c523189c2b, OK 0 OK Task.ID:3458
```

### Sample Java Code (Axis 1.4)

```apex
public void testStartImportDefinition() throws RemoteException {
        try {
            Soap stub = init();
            // Create the ImportDefinition
            ImportDefinition impDef = new ImportDefinition();
            impDef.setCustomerKey("CODES");
            PerformRequestMsg performRequestMsg = new PerformRequestMsg();
            performRequestMsg.setAction("start");
            performRequestMsg.setOptions(new PerformOptions());
            performRequestMsg.setDefinitions(new InteractionBaseObject[]{impDef});
            PerformResponseMsg performResponseMsg = stub.perform(performRequestMsg);
            System.out.println(performResponseMsg.getOverallStatus());
        } catch (RemoteException e) {
            e.printStackTrace();  //To change body of catch statement use File | Settings | File Templates.
        } catch (IOException e) {
            e.printStackTrace();  //To change body of catch statement use File | Settings | File Templates.
        }
    }
```

### Sample Java Code (Axis 2.0)

```apex
private static void PerformImport(PartnerAPIStub stub) {

    try {
    PerformRequestMsgDocument prmd = PerformRequestMsgDocument.Factory.newInstance();
    PerformRequestMsg pr = PerformRequestMsg.Factory.newInstance();
    com.exacttarget.wsdl.partnerapi.PerformRequestMsgDocument.PerformRequestMsg.Definitions defs = com.exacttarget.wsdl.partnerapi.PerformRequestMsgDocument.PerformRequestMsg.Definitions.Factory.newInstance();
    ImportDefinition id = ImportDefinition.Factory.newInstance();
    id.setCustomerKey("Import_GenderDE");
        defs.setDefinitionArray(new ImportDefinition[] {id});
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
importDef = ImportDefinition.new(nil,nil,nil,nil,nil,nil,nil,customerKey,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil)
apiObj = importDef
resp = $driver.perform(PerformRequestMsg.new(options,'start',[apiObj]))
```

### Sample SOAP Envelope

```
<?xml version="1.0" encoding="utf-8"?>
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
            <wsse:Username>USERNAME</wsse:Username>
            <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">PASSWORD</wsse:Password>
            <wsse:Nonce>R2f0uhYWm7whOu2Bjg7lvQ==</wsse:Nonce>
            <wsu:Created>2008-09-17T20:58:36Z</wsu:Created>
         </wsse:UsernameToken>
      </wsse:Security>
   </soap:Header>
   <soap:Body>
      <PerformRequestMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">
         <Action>start</Action>
         <Definitions>
            <Definition xsi:type="ImportDefinition">
               <ObjectID xsi:nil="true"/>
               <CustomerKey>2043</CustomerKey>
            </Definition>
         </Definitions>
      </PerformRequestMsg>
   </soap:Body>
</soap:Envelope>
```

## Related Items

[Import Activity](https://help.salesforce.com/articleView?id=mc_as_use_an_import_activity.htm&type=5)
