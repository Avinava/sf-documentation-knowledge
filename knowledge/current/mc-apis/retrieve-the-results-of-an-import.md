---
title: "Retrieve the Results of an Import"
domain: mc-apis
topic: retrieve-the-results-of-an-import
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:23.689Z
estimatedTokens: 2942
keywords: [Retrieve, Results, Import, retrieving, Why, How, Sample, NET, Code, Loop, Print, New, Output, Java, Axis]
---

# Retrieve the Results of an Import

> This page contains information  about retrieving the results of an import.

# Retrieve the Results of an Import

This page contains information about retrieving the results of an import.

## Why Retrieve the Results of an Import

Retrieving the results of an import allows you to view whether information was successfully brought into your Marketing Cloud application and determine if further action is necessary.

Because the system processes imports asynchronously, information for a recently executed import may not be readily available. If your process retrieves no results, repeat your process at a later time to get the appropriate information.

## How to Retrieve the Results of an Import

Use the sample code below as an example to construct your own API calls. Possible values include:

-   **New** \- The Retrieve request has yet to be processed by the application.
-   **Processing** \- The application is processing the Retrieve request.
-   **Completed** \- The application has completely processed the Retrieve request.
-   **Error** \- An error occurred while processing the Retrieve request.
-   **IOWork** \- The application is currently writing information to disk.
-   **Unknown** \- No status is currently available for the Retrieve request.

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
public partial class ImportResultsSummaryRetrieve : System.Web.UI.Page
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
            //Local variables
            APIObject[] Results;
            String requestID;
            String status;
            // Instantiate the retrieve request
            RetrieveRequest rr = new RetrieveRequest();
            rr.ObjectType = "ImportResultsSummary";//required
            // Setting up a simple filter
            SimpleFilterPart sf = new SimpleFilterPart();
            sf.SimpleOperator = SimpleOperators.equals;
            sf.Property = "TaskResultID";
            sf.Value = new String[] { "14112914" };
            //Add Filter
            rr.Filter = sf;
            rr.Properties = new string[] { "RowID", "ImportStatus", "NumberSuccessful", "NumberDuplicated", "NumberErrors", "TotalRows" };//required
            status = client.Retrieve(rr, out requestID, out Results);
            lblMessage.Text += "<br/>Total Records: " + Results.Length;
        }
        catch (Exception ex)
        {
            lblMessage.Text += ex.Message;
            lblMessage.Text += "<br/>";
        }
    }
}
```

### Sample .NET Code (Using For Loop to Print Out Results For Each New Object)

```apex
// Instantiate variables
string requestID;
// Filter by TaskResultID (the unique id for the import)
SimpleFilterPart sfp = new SimpleFilterPart();
sfp.Property = "TaskResultID";
sfp.SimpleOperator = SimpleOperators.equals;
sfp.Value = new string[] { "1234" };
// Create the RetrieveRequest
RetrieveRequest request = new RetrieveRequest();
request.ObjectType = "ImportResultsSummary";
request.Filter = sfp;
request.Properties = new string[] { "ImportDefinitionCustomerKey", "ImportType", "ImportStatus", "ID", "ObjectID", "NumberDuplicated", "NumberErrors", "NumberSuccessful", "DestinationID", "TaskResultID" };
// Execute the RetrieveRequest
APIObject[] results;
string status = integrationFramework.Retrieve(request, out requestID, out results);
// Output the results
System.Text.StringBuilder sb = new System.Text.StringBuilder();
sb.Append("Retrieve Import Results Summary");
sb.AppendFormat("
Overall result: {0}.  RequestID: {1}", status, requestID);
// Print out results for each new object created
for (int cntr = 0; cntr < results.Length; cntr++)
{
       sb.Append(string.Format("
 ---- Index {0}", cntr));
       ImportResultsSummary id = results[cntr] as ImportResultsSummary;
       sb.Append("
 ID: " + id.ID);
       sb.Append("
 ObjectID: " + id.ObjectID);
       sb.Append("
 CustomerKey: " + id.ImportDefinitionCustomerKey);
       sb.Append("
 ImportType: " + id.ImportType);
       sb.Append("
 ImportStatus: " + id.ImportStatus);
       sb.Append("
 NumberDuplicated: " + id.NumberDuplicated);
       sb.Append("
 NumberErrors: " + id.NumberErrors);
       sb.Append("
 NumberSuccessful: " + id.NumberSuccessful);
       sb.Append("
 DestinationID: " + id.DestinationID);
       sb.Append("
 TaskResultID: " + id.TaskResultID);
       sb.Append("
");
}
Console.WriteLine(sb.ToString());
```

### Output

```
Retrieve Import Results Summary Overall result: OK.  RequestID: debe61e9-b07f-4eb1-aaba-31c2e2178d61  ---- Index 0 ID: 0 ObjectID: d05a44f3-13dc-dc11-bfbd-0017a43c44a8 CustomerKey: cn2import ImportType: Data Extensions ImportStatus: Completed NumberDuplicated: 0 NumberErrors: 1 NumberSuccessful: 406 DestinationID: cn2 TaskResultID: 1234
```

### Sample Java Code (Axis 1.4)

```apex
public void testRetrieveImportDefinitionSummary() throws RemoteException {
        try {
            Soap stub = init();
            RetrieveRequest request = new RetrieveRequest();
            request.setObjectType("ImportResultsSummary")
            ImportDefinition impDef = new ImportDefinition();
            impDef.setCustomerKey("Import_To_DE_Market2Lead_Key");
            String[] string = {"ImportDefinitionCustomerKey", "ImportType", "ImportStatus", "ID", "ObjectID", "NumberDuplicated", "NumberErrors", "NumberSuccessful", "DestinationID", "TaskResultID"};
            request.setProperties(string);
            RetrieveRequestMsg requestMsg = new RetrieveRequestMsg();
            SimpleFilterPart filterPart = new SimpleFilterPart();
            filterPart.setProperty("TaskResultID");
            String[] values = {"12345"};
            filterPart.setValue(values);
            filterPart.setSimpleOperator(SimpleOperators.equals);
            request.setFilter(filterPart);
            requestMsg.setRetrieveRequest(request);
            RetrieveResponseMsg responseMsg = stub.retrieve(requestMsg);  //Soap call to request Account object
            System.out.println(responseMsg.getOverallStatus());
        } catch (RemoteException e) {
            e.printStackTrace();  //To change body of catch statement use File | Settings | File Templates.
        } catch (IOException e) {
            e.printStackTrace();  //To change body of catch statement use File | Settings | File Templates.
        }
    }

    private DataExtension getDataExtension(Soap stub) throws RemoteException {
        DataExtension dataExtensionObject = null;

        RetrieveRequest request = new RetrieveRequest();
        request.setObjectType("DataExtension");                  //You can replace objectTypes with following Values :: OpenEvent,NotSentEvent,BounceEvent
        // String[] stringArray = new String[]{"ObjectID", "CustomerKey", "Name", "CreatedDate", "ModifiedDate", "Client.ID", "Description", "IsSendable", "IsTestable", "Template.CustomerKey", "SendableSubscriberField.Name"};
        String[] stringArray = new String[]{"ObjectID", "Client.ID", "CustomerKey", "Name", "CreatedDate", "ModifiedDate", "Description", "IsSendable", "IsTestable", "Template.CustomerKey"};
        request.setProperties(stringArray);
        SimpleFilterPart filter = new SimpleFilterPart();
        filter.setProperty("CustomerKey");
        String[] filterValues = {"Test2_Key"};
        filter.setValue(filterValues);
        filter.setSimpleOperator(SimpleOperators.equals);
        request.setFilter(filter);
        RetrieveRequestMsg requestMsg = new RetrieveRequestMsg();
        requestMsg.setRetrieveRequest(request);
        RetrieveResponseMsg responseMsg = stub.retrieve(requestMsg);
        System.out.println("Overall request status ::: " + responseMsg.getOverallStatus());
        dataExtensionObject = (DataExtension) responseMsg.getResults(0);
        return dataExtensionObject;
    }
}
```

### Sample PHP Code

```
<?php
require('exacttarget_soap_client.php');
$wsdl = 'https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/etframework.wsdl';
set_time_limit(360);
try {
  print_r('<br>');
  /* Create the Soap Client */
  $client = new Marketing CloudSoapClient($wsdl, array('trace' => 1));
  /* Set username and password here */
  $client->username = 'XXXXX';
  $client->password = 'XXXXX';
  $rr = new Marketing Cloud_RetrieveRequest();
  $rr->ObjectType = 'ImportResultsSummary';
  $rr->Properties = array('ImportDefinitionCustomerKey', 'ImportType', 'ImportStatus', 'ID', 'ObjectID', 'NumberDuplicated', 'NumberErrors', 'NumberSuccessful', 'DestinationID', 'TaskResultID');
  $sfp = new Marketing Cloud_SimpleFilterPart();
  $sfp->Property = 'TaskResultID';  $sfp->SimpleOperator = Marketing Cloud_SimpleOperators::equals;
  $sfp->Value = array('ImportResultID');
  $rr->Filter = new SoapVar($sfp, SOAP_ENC_OBJECT, 'SimpleFilterPart', 'http://exacttarget.com/wsdl/partnerAPI');
  $rrm = new Marketing Cloud_RetrieveRequestMsg();
  $rrm->RetrieveRequest =
  $rr;
  $results = $client->Retrieve($rrm);

  print_r($results->OverallStatus . ' : ' . $results->RequestID . ' : ' .
$results->Results->ImportStatus);
  print_r('<br>');
} catch (Exception $e) {
  var_dump($e);
}
?>
```

### Sample SOAP Envelope

```
<?xml version="1.0" encoding="utf-8"?>
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <soapenv:Header>
      <wsse:Security soapenv:mustUnderstand="1" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
         <wsse:UsernameToken wsu:Id="UsernameToken-32259181" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
            <wsse:Username>XXXXX</wsse:Username>
            <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">XXXXX</wsse:Password>
         </wsse:UsernameToken>
      </wsse:Security>
   </soapenv:Header>
   <soapenv:Body>
      <RetrieveRequestMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">
         <RetrieveRequest>
            <ObjectType>ImportResultsSummary</ObjectType>
            <Properties>ImportDefinitionCustomerKey</Properties>
            <Properties>ImportType</Properties>
            <Properties>ImportStatus</Properties>
            <Properties>ID</Properties>
            <Properties>ObjectID</Properties>
            <Properties>NumberDuplicated</Properties>
            <Properties>NumberErrors</Properties>
            <Properties>NumberSuccessful</Properties>
            <Properties>DestinationID</Properties>
            <Properties>TaskResultID</Properties>
     <Filter xsi:type="ns1:SimpleFilterPart" xmlns:ns1="http://exacttarget.com/wsdl/partnerAPI">
               <Property>TaskResultID</Property>
               <SimpleOperator>equals</SimpleOperator>
               <Value>125574039</Value>
            </Filter>
         </RetrieveRequest>
      </RetrieveRequestMsg>
   </soapenv:Body>
</soapenv:Envelope>
```

## Related Items

[Import Activity](https://help.salesforce.com/articleView?id=mc_as_use_an_import_activity.htm&type=5)

## Code Examples

```apex
// Instantiate variables
string requestID;  
// Filter by TaskResultID (the unique id for the import)
SimpleFilterPart sfp = new SimpleFilterPart();
sfp.Property = "TaskResultID";
sfp.SimpleOperator = SimpleOperators.equals;
sfp.Value = new string[] { "1234" };
// Create the RetrieveRequest
RetrieveRequest request = new RetrieveRequest();
request.ObjectType = "ImportResultsSummary";
request.Filter = sfp;
request.Properties = new string[] { "ImportDefinitionCustomerKey", "ImportType", "ImportStatus", "ID", "ObjectID", "NumberDuplicated", "NumberErrors", "NumberSuccessful", "DestinationID", "TaskResultID" };
// Execute the RetrieveRequest
APIObject[] results;
string status = integrationFramework.Retrieve(request, out requestID, out results);
// Output the results
System.Text.StringBuilder sb = new System.Text.StringBuilder();
sb.Append("Retrieve Import Results Summary");
sb.AppendFormat("
Overall result: {0}.  RequestID: {1}", status, requestID);
// Print out results for each new object created
for (int cntr = 0; cntr < results.Length; cntr++)
{
       sb.Append(string.Format("
 ---- Index {0}", cntr));
       ImportResultsSummary id = results[cntr] as ImportResultsSummary;
       sb.Append("
 ID: " + id.ID);
       sb.Append("
 ObjectID: " + id.ObjectID);
       sb.Append("
 CustomerKey: " + id.ImportDefinitionCustomerKey);
       sb.Append("
 ImportType: " + id.ImportType);
       sb.Append("
 ImportStatus: " + id.ImportStatus);
       sb.Append("
 NumberDuplicated: " + id.NumberDuplicated);
       sb.Append("
 NumberErrors: " + id.NumberErrors);
       sb.Append("
 NumberSuccessful: " + id.NumberSuccessful);
       sb.Append("
 DestinationID: " + id.DestinationID);
       sb.Append("
 TaskResultID: " + id.TaskResultID);
       sb.Append("
");
}
Console.WriteLine(sb.ToString());
```
