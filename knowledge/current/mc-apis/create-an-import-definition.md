---
title: "Create an Import Definition"
domain: mc-apis
topic: create-an-import-definition
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:21.163Z
estimatedTokens: 12050
keywords: [Import, Definition, creating, Why, How, Defintion, Sample, NET, Code, Output, Manual, Mapping, Perform, Java, Axis]
---

# Create an Import Definition

> This page contains information about creating an import definition.

# Create an Import Definition

This page contains information about creating an import definition.

## Why Create an Import Definition

You can create an import definition to move information from your system or development environment to Marketing Cloud

## How to Create an Import Defintion

This example demonstrates creating an ImportDefinition object. Use the example as an example to create your own API call. You must create the FileTransferActivity in Marketing Cloud. Supply only the parameters to change when updating an ImportDefinition object.

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
public partial class ImportDefinitionCreate : System.Web.UI.Page
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
            //Create a GUID to ensure a unique subscriber key
            string strGUID = System.Guid.NewGuid().ToString();
            //Create an Import Definition object
            ImportDefinition id = new ImportDefinition();
            id.Name = strGUID;
            id.CustomerKey = strGUID;
            //Optional
            id.AllowErrors = true;
            id.AllowErrorsSpecified = true;
            //Associate Data-Extenison to Import-Defintion
            DataExtension de = new DataExtension();
            de.CustomerKey = "810f461c-231a-440a-8543-837460be6c7a";//required //The External Key of the Data Extension to import into
            id.DestinationObject = de;
            //Specify the notification type //optional
            id.Notification = new AsyncResponse();
            id.Notification.ResponseType = AsyncResponseType.email;
            id.Notification.ResponseAddress = "help@example.com";
            //Specify the File Transfer Location
            id.RetrieveFileTransferLocation = new FileTransferLocation();
            id.RetrieveFileTransferLocation.CustomerKey = "ExactTarget Enhanced FTP";//required
            //Optional
            id.UpdateType = ImportDefinitionUpdateType.Overwrite;
            id.UpdateTypeSpecified = true;
            //Map fields
            id.FieldMappingType = ImportDefinitionFieldMappingType.InferFromColumnHeadings;//required
            id.FieldMappingTypeSpecified = true;
            //Specify the File naming Specifications
            id.FileSpec = "TEST.csv";
            //Specify the FileType
            id.FileType = FileType.CSV;//required
            id.FileTypeSpecified = true;
            try
            {
                string cRequestID = String.Empty;
                string cStatus = String.Empty;
                //Call the Create method on the ImportDefinition object
                CreateResult[] cResults = client.Create(new CreateOptions(), new APIObject[] { id }, out cRequestID, out cStatus);
                //Display Results
                lblMessage.Text += "Overall Create Status: " + cStatus;
                lblMessage.Text += "<br/>";
                lblMessage.Text += "Number of Results: " + cResults.Length;
                lblMessage.Text += "<br/>";
                //Loop through each object returned and display the StatusMessage
                foreach (CreateResult cr in cResults)
                {
                    lblMessage.Text += "Status Message: " + cr.StatusMessage;
                    lblMessage.Text += "<br/>";
                }
            }
            catch (Exception exCreate)
            {
                //Set Message
                lblMessage.Text += "<br/><br/>CREATE SEND ERROR:<br/>" + exCreate.Message;
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
// Intialize the variables string requestID; string status;  // Create an Import Definition object ImportDefinition id = new ImportDefinition();
id.Name = "Web Service Created Import Definition";
id.CustomerKey = "1234";
id.Description = "This import definition was created through the API.";
// Allow errors during the import? (optional)
id.AllowErrors = true;
id.AllowErrorsSpecified = true; //.NET Specific
// Specify the list (required)
id.DestinationObject = new List();
id.DestinationObject.ID = 566;
id.DestinationObject.IDSpecified = true;
// Specify the notification type (optional)
id.Notification = new AsyncResponse();
id.Notification.ResponseType = AsyncResponseType.email;
id.Notification.ResponseAddress = "dsmith@example.com";
// Specify the File Transfer Location (where is the file coming from?) (required)
id.RetrieveFileTransferLocation = new FileTransferLocation();
id.RetrieveFileTransferLocation.CustomerKey = "ExactTarget Enhanced FTP";
// Specify the UpdateType (optional)
id.UpdateType = ImportDefinitionUpdateType.AddAndDoNotUpdate;
id.UpdateTypeSpecified = true;
// Map fields (required)
id.FieldMappingType = ImportDefinitionFieldMappingType.MapByOrdinal;
id.FieldMappingTypeSpecified = true;
id.FieldMaps = new FieldMap[2];
id.FieldMaps[0] = new FieldMap();
id.FieldMaps[0].DestinationName = "Subscriber Key";
id.FieldMaps[0].Item = "1";
id.FieldMaps[1] = new FieldMap();
id.FieldMaps[1].DestinationName = "Email Address";
id.FieldMaps[1].Item = "2";
// Specify the File naming Specifications
id.FileSpec = "APIImport%%Year%%%%Month%%%%Day%%.txt";
// Specify the FileType
id.FileType = FileType.CSV;
id.FileTypeSpecified = true;
// Create the Import Definition
CreateResult[] results = integrationFramework.Create(new CreateOptions(), new APIObject[] { id }, out requestID, out status);
// Print out overall results
System.Text.StringBuilder sb = new System.Text.StringBuilder();
sb.Append("Add Import Definition");
sb.AppendFormat("
Overall result: {0}.  RequestID: {1}", status, requestID);
// Print out results for each new object created
for (int cntr = 0; cntr < results.Length; cntr++)
{
       sb.AppendFormat("
Results for object {0}: Status code: {1}.  Message: {2}.  Marketing CloudObjectID: {3} Error Code {4}", cntr, results[cntr].StatusCode, results[cntr].StatusMessage, results[cntr].NewObjectID, results[cntr].ErrorCode);
}
Console.WriteLine(sb.ToString());
```

#### Output

```
Add Import Definition Overall result: OK.  RequestID: fd515c55-b7f6-43e3-9bb6-d7c736e33b8c Results for object 0: Status code: OK.  Message: ImportDefinition created.. Marketing CloudObjectID: 537496f3-cbe0-dc11-bfbd-0017a43c44a8 Error Code 0
```

#### Sample .NET Code - Create an Import Definition using Manual Mapping

```apex
private void CreateImportDef()
                {
                    SoapClient framework = new SoapClient();
                    framework.ClientCredentials.UserName.UserName = "XXXXX";
                    framework.ClientCredentials.UserName.Password = "XXXXX";
                    string requestID;
                    string status;
                    ImportDefinition id = new ImportDefinition();
                    id.Name = "Web Service Created Import Definition With ManualMap";
                    id.CustomerKey = "12345";
                    id.Description = "";

                    id.AllowErrors = true;
                    id.AllowErrorsSpecified = true;

                    id.DestinationObject = new DataExtension();
                    id.DestinationObject.ObjectID = "12345";
                    id.Notification = new AsyncResponse();
                    id.Notification.ResponseType = AsyncResponseType.email;
                    id.Notification.ResponseAddress = "aruiz@example.com";
            id.RetrieveFileTransferLocation = new FileTransferLocation();
            id.RetrieveFileTransferLocation.CustomerKey = "ExactTarget Enhanced FTP";
            id.UpdateType = ImportDefinitionUpdateType.Overwrite;
            id.UpdateTypeSpecified = true;
            //Specify details about the field mapping
            id.FieldMappingType = ImportDefinitionFieldMappingType.ManualMap;
            id.FieldMappingTypeSpecified = true;
            FieldMap fmEmail = new FieldMap();
            fmEmail.Item = "Test1";
            fmEmail.DestinationName = "EMAIL";
            FieldMap fmReason = new FieldMap();
            fmReason.Item = "Test2";
            fmReason.DestinationName = "Reason";
            id.FieldMaps = new FieldMap[] { fmEmail, fmReason };

            //Specify details about the file
            id.FileSpec = "MacTest.txt";
            id.FileType = FileType.CSV;
            id.FileTypeSpecified = true;
            // Create the Import Definition
            CreateResult[] results = framework.Create(new CreateOptions(), new APIObject[] { id }, out requestID, out status);
            Console.WriteLine("
Overall result: {0}. RequestID: {1}", status, requestID);
            for (int cntr = 0; cntr < results.Length; cntr++)
            {
                Console.WriteLine("
Results for object {0}: Status code: {1}. Message: {2}. Marketing CloudObjectID: {3} Error Code {4}", cntr, results[cntr].StatusCode, results[cntr].StatusMessage, results[cntr].NewObjectID, results[cntr].ErrorCode);
            }
        }
```

#### Create and Perform an Import Definition

```apex
public static PerformResult[] importSubscribers(SoapClient client, int MID, String ListName, String DefnName, String DataFile, String emailAddress, String TransferLocation)
{
    String pStatus = String.Empty;
    String pStatusMsg = String.Empty;
    String requestID = String.Empty;
    CreateResult[] result = Utilities.CreateImportDefinition(client, MID, ListName, DefnName, DataFile, emailAddress, TransferLocation);
    if (result != null)
    {
        APIObject[] Definitions = new APIObject[1];
        Definitions[0] = result[0].Object;
        PerformOptions pOpts = new PerformOptions();
        pOpts.Client = Utilities.getClientID(MID);
        PerformResult[] pResult = client.Perform(pOpts, "Start", Definitions, out pStatus, out pStatusMsg, out requestID);
        return pResult;
    }
    else
    {
        return null;
    }
}
public static CreateResult[] CreateImportDefinition(SoapClient client, int MID, String ListName, String ImportDefnName, String DataFile, String emailAddress, String TransferLocation)
{
    string strGUID = System.Guid.NewGuid().ToString();

    // Create the Definition object.
    ImportDefinition importDefn = new ImportDefinition();
    // Set the import definition Name and External Key.
    importDefn.Name = ImportDefnName;
    importDefn.CustomerKey = strGUID;
    // Specify the account where it is created.
    importDefn.Client = getClientID(MID);
    // Set it up so import doesn't fail because of an error.
    importDefn.AllowErrors = true;
    importDefn.AllowErrorsSpecified = true;
    // Set it up to send notification when the import is complete.
    importDefn.Notification = new AsyncResponse();
    importDefn.Notification.ResponseType = AsyncResponseType.email;
    importDefn.Notification.ResponseAddress = emailAddress;
    // Identify the location of the data file.
    importDefn.RetrieveFileTransferLocation = new FileTransferLocation();
    importDefn.RetrieveFileTransferLocation.CustomerKey = TransferLocation;
    // Specify the way the subscriber list is updated.
    importDefn.UpdateType = ImportDefinitionUpdateType.AddAndUpdate;
    importDefn.UpdateTypeSpecified = true;
    // Specify that the import file has column heading on the first row.
    importDefn.FieldMappingType = ImportDefinitionFieldMappingType.InferFromColumnHeadings;
    importDefn.FieldMappingTypeSpecified = true;
    // Identify the data file name and file type.
    importDefn.FileSpec = DataFile;
    importDefn.FileType = FileType.CSV;
    importDefn.FileTypeSpecified = true;
    // Get the list ID of the list to which the data is imported, using the list name.
    int listID = Utilities.getListID(client, MID, ListName);
    // Specify the list on the import definition.
    List list = new List();
    list.ID = listID;
    list.IDSpecified = true;
    importDefn.DestinationObject = list;
    // Create the import definition and return it for use.
    CreateResult[] results = null;
    String requestID = String.Empty;
    String status = String.Empty;
    try
    {
        results = client.Create(new CreateOptions(), new APIObject[] { importDefn }, out requestID, out status);
    }
    catch (Exception e)
    {
        Console.WriteLine(e.Message);
    }
    if (status == "OK")
    {
        return results;
    }
    else
    {
        return null;
    }
}
public static ClientID getClientID(int MID)
{
    ClientID clientID = new ClientID();
    clientID.ID = MID;
    clientID.IDSpecified = true;
    return clientID;
}
public static SoapClient getClient()
{
    SoapClient client = new SoapClient();
    client.ClientCredentials.UserName.UserName = "userID";
    client.ClientCredentials.UserName.Password = "userIDPassword";
    return client;
}

public static int getListID(SoapClient client, int MID, String listName)
{
    int listID = 0;
    APIObject[] results;
    String requestID;
    String status;
    RetrieveRequest rr = new RetrieveRequest();
    rr.ObjectType = "List";
    rr.ClientIDs = new ClientID[1];
    rr.ClientIDs[0] = new ClientID();
    rr.ClientIDs[0].ID = MID;
    rr.ClientIDs[0].IDSpecified = true;
    SimpleFilterPart sf1 = new SimpleFilterPart();
    sf1.Property = "ListName";
    sf1.SimpleOperator = SimpleOperators.equals;
    sf1.Value = new String[] { listName };
    rr.Filter = sf1;
    rr.Properties = new string[] { "ID" };
    status = client.Retrieve(rr, out requestID, out results);
    if (results.Length > 0)
    {
        listID = results[0].ID;
    }
    return listID;
}
```

Use the DataFormattingLocale property to specify how dates are formatted in import data. The Marketing Cloud application uses this information to ensure the data is interpreted correctly when it is being loaded. For example, you can use DateFormattingLocale to determine whether '01-09-2010' means January 9th, 2010 or September 1st, 2010. If no LocaleCode is supplied, the call defaults to "en-US".

This sample code shows how to set the value for DateFormattingLocale for Create and Update methods:

```
ExactTarget.Integration.WSDL.ImportDefinition importDef = new ImportDefinition();
importDef.DateFormattingLocale = new Locale();
importDef.DateFormattingLocale.LocaleCode = "en-US"; // For US DateFormat
```

### Sample Java Code (Axis 1.4)

```apex
public class ImportDefTestCase extends BaseTestCase {
    public void testCreateImportDef() throws RemoteException {
        Soap stub = init();
        ImportDefinition impDef = new ImportDefinition();
        impDef.setName("ImportDefinitionSeed_1");
        impDef.setCustomerKey("ImportDefinitionSeed_1");
        impDef.setDescription("This import definition was created through the API.");
        impDef.setAllowErrors(true);
        impDef.setDestinationObject(new List());
        impDef.getDestinationObject().setID(new Integer(2464));
        // Specify the notification type (optional)
        AsyncResponse asyncResponse = new AsyncResponse();
        asyncResponse.setResponseType(AsyncResponseType.email);
        asyncResponse.setResponseAddress("test@example.com");
        impDef.setNotification(asyncResponse);
        FileTransferLocation fileTransferLocation = new FileTransferLocation();
        fileTransferLocation.setCustomerKey("ExactTarget Enhanced FTP");
        impDef.setRetrieveFileTransferLocation(fileTransferLocation);
        impDef.setUpdateType(ImportDefinitionUpdateType.AddAndDoNotUpdate);
        // Map fields (required)
        impDef.setFieldMappingType(ImportDefinitionFieldMappingType.MapByOrdinal);
        FieldMap map1 = new FieldMap();
        map1.setDestinationName("Subscriber Key");
        map1.setSourceName("1");
        //map1.setSourceOrdinal(new Integer(1));
        FieldMap map2 = new FieldMap();
        map2.setDestinationName("Email Address");
        //map2.setSourceOrdinal(new Integer(2));
        map2.setSourceName("2");
        FieldMap[] maps = {map1, map2};
        impDef.setFieldMaps(maps);
        impDef.setFileSpec("12345.csv");
        // Specify the FileType
        impDef.setFileType(FileType.CSV);
        //Assign ImportDefinition to sub-account
        ClientID clientID = new ClientID();
        clientID.setPartnerClientKey("12345");// Partner Key
        impDef.setClient(clientID);
        CreateRequest createRequest = new CreateRequest();
        createRequest.setOptions(new CreateOptions());
        APIObject[] apiObjectList = {impDef};
        createRequest.setObjects(apiObjectList);
        CreateResponse createResponse = stub.create(createRequest);
        System.out.println("CreateResponse ::: " + createResponse.getOverallStatus());
    }
    public void testCreateImportDefToDataExtension() throws RemoteException {
        try {
            Soap stub = init();
            DataExtension dataExtension = getDataExtension(stub);
            ImportDefinition impDef = new ImportDefinition();
            impDef.setName("Import_Definition_UpdateButDoNotAdd");
            impDef.setCustomerKey("Import_UpdateButDoNotAdd_Key");
            impDef.setDescription("Import_Definition_UpdateButDoNotAdd_Desc");
            impDef.setAllowErrors(true);
            //dataExtension.setID(new Integer(12345));
            impDef.setDestinationObject(dataExtension);
            // Specify the notification type (optional)
            AsyncResponse asyncResponse = new AsyncResponse();
            asyncResponse.setResponseType(AsyncResponseType.email);
            asyncResponse.setResponseAddress("test@example.com");
            impDef.setNotification(asyncResponse);
            FileTransferLocation fileTransferLocation = new FileTransferLocation();
            fileTransferLocation.setCustomerKey("ExactTarget Enhanced FTP");
            impDef.setRetrieveFileTransferLocation(fileTransferLocation);
            impDef.setUpdateType(ImportDefinitionUpdateType.UpdateButDoNotAdd);
            // Map fields (required)
            //impDef.setFieldMappingType(ImportDefinitionFieldMappingType.MapByOrdinal);
            impDef.setFieldMappingType(ImportDefinitionFieldMappingType.InferFromColumnHeadings);
            //impDef.setSubscriberImportType(ImportDefinitionSubscriberImportType.Email);
            FieldMap map1 = new FieldMap();
            map1.setDestinationName("EmailId");
            map1.setSourceOrdinal(new Integer(1));
            FieldMap map2 = new FieldMap();
            map2.setDestinationName("StatusField");
            map2.setSourceOrdinal(new Integer(2));
            FieldMap[] maps = {map1, map2};
            impDef.setFieldMaps(maps);
            impDef.setFileSpec("Test2.csv");
            // Specify the FileType
            impDef.setFileType(FileType.CSV);
            //impDef.setClient(dataExtension.getClient());
            CreateRequest createRequest = new CreateRequest();
            createRequest.setOptions(new CreateOptions());
            APIObject[] apiObjectList = {impDef};
            createRequest.setObjects(apiObjectList);
            CreateResponse createResponse = stub.create(createRequest);
            System.out.println("CreateResponse ::: " + createResponse.getOverallStatus());
        } catch (RemoteException e) {
            e.printStackTrace();  //To change body of catch statement use File | Settings | File Templates.
        } catch (IOException e) {
            e.printStackTrace();  //To change body of catch statement use File | Settings | File Templates.
        }
    }
```

This sample code creates an import definition and associates it with a specific data extension.

```apex
/**
     * Creating Import-Definition and associating it with a Data Extension
     *
     * @throws RemoteException
     */
   public void testCreateImportDefToDataExtensionMarket2Lead() throws RemoteException{
        try {
            Soap_PortType stub = init();
            ImportDefinition impDef = new ImportDefinition();
            impDef.setName("Import_To_DE");
            impDef.setCustomerKey("Import_To_DE_Key");
            impDef.setDescription("Import_To_DE");
            impDef.setAllowErrors(true);
            // Associate Data-Extenison to Import-Defintion
        DataExtension dataExtension = new DataExtension();
            dataExtension.setCustomerKey("UsingAPI_For_Key");
            impDef.setDestinationObject(dataExtension);
            // Specify the notification
            AsyncResponse asyncResponse = new AsyncResponse();
            asyncResponse.setResponseType(AsyncResponseType.email);
            asyncResponse.setResponseAddress("response@example.com");
            impDef.setNotification(asyncResponse);
        //Specify Location of File, In this case it is FTP
        FileTransferLocation fileTransferLocation = new FileTransferLocation();
            fileTransferLocation.setCustomerKey("ExactTarget Enhanced FTP");
            impDef.setRetrieveFileTransferLocation(fileTransferLocation);
            impDef.setUpdateType(ImportDefinitionUpdateType.AddAndDoNotUpdate);
            //Map fields by Column headings.
            impDef.setFieldMappingType(ImportDefinitionFieldMappingType.InferFromColumnHeadings);
            FieldMap map1 = new FieldMap();
            map1.setDestinationName("EmailAddress");
            //map1.setSourceOrdinal(new Integer(1));
            FieldMap map2 = new FieldMap();
            map2.setDestinationName("ChannelUser");
            //map2.setSourceOrdinal(new Integer(2));
            FieldMap map3 = new FieldMap();
            map3.setDestinationName("ChannelUser_EmailAddress");
            FieldMap map4 = new FieldMap();
            map4.setDestinationName("Demographic_Address");
            FieldMap[] maps = {map1, map2, map3, map4};
            impDef.setFieldMaps(maps);
            impDef.setFileSpec("Import2L.csv");
            // Specify the FileType
            impDef.setFileType(FileType.CSV);
            CreateRequest createRequest = new CreateRequest();
            createRequest.setOptions(new CreateOptions());
            APIObject[] apiObjectList = {impDef};
            createRequest.setObjects(apiObjectList);
            CreateResponse createResponse = stub.create(createRequest);
            //ImportResultsSummary importResultsSummary = (ImportResultsSummary) createResponse.getResults();
            System.out.println("CreateResponse ::: " + createResponse.getOverallStatus());

            }
            catch (RemoteException e)
            {
            e.printStackTrace();
            }
            catch (IOException e)
            {
            e.printStackTrace();
            }
        }
```

### Sample PHP Code

#### Create an Import Definition

```
<?php
require('exacttarget_soap_client.php');
$wsdl = 'https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/etframework.wsdl';
try    {
       /* Create the Soap Client */
       $client = new Marketing CloudSoapClient($wsdl, array('trace'=>1));
       /* Set username and password
       *
       *  here */
       $client->username = 'XXX';
       $client->password = 'XXX';
       $importdef = new Marketing Cloud_ImportDefinition();
       $importdef->Name = "PHP Import Definition";
       $importdef->CustomerKey = "PHP ID";
       $importdef->Description = "This import definition was created through the API.";
       $importdef->AllowErrors = true;
       $list = new Marketing Cloud_List();
       $list->ID = "1719725";
       $lo = new SoapVar($list, SOAP_ENC_OBJECT, 'List', "http://exacttarget.com/wsdl/partnerAPI");
       $importdef->DestinationObject = $lo;
       $as = new Marketing Cloud_AsyncResponse();
       $as->ResponseType = Marketing Cloud_AsyncResponseType::email;
       $as->ResponseAddress = "help@exacttarget.com";
       $importdef->Notification = $as;
       $ftl= new Marketing Cloud_FileTransferLocation();
       $ftl->CustomerKey = "ExactTarget Enhanced FTP";
       $importdef->RetrieveFileTransferLocation = $ftl;
       $importdef->UpdateType  = Marketing Cloud_ImportDefinitionUpdateType::AddAndUpdate;
       $importdef->FieldMappingType = Marketing Cloud_ImportDefinitionFieldMappingType::InferFromColumnHeadings;
       $importdef->FileSpec = "Testlookup.csv";
      $importdef->FileType = Marketing Cloud_FileType::CSV;
      $object = new SoapVar($importdef, SOAP_ENC_OBJECT, 'ImportDefinition', "http://exacttarget.com/wsdl/partnerAPI");
      $request = new Marketing Cloud_CreateRequest();
      $request->Options = NULL;
      $request->Objects = array($object);
      $results = $client->Create($request);
       var_dump($results);
} catch (SoapFault $e) {
       var_dump($e);
}
?>
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
desc = customerKey + ' created through the API'
de = DataExtension.new(nil,nil,nil,nil,nil,nil,nil,'APITestDe0',nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil)
importDef = ImportDefinition.new(nil,nil,nil,nil,nil,nil,nil,customerKey,nil,nil,customerKey,desc,nil,nil,0,de,'InferFromColumnHeadings',nil,'Members_New.txt','TAB',AsyncResponse.new('email','acruz@example.com','Always',1,0,0),FileTransferLocation.new(nil,nil,nil,nil,nil,nil,nil,'ExactTarget Enhanced FTP',nil,nil),nil,'AddAndUpdate',nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,1,nil)
apiObj = importDef
resp = $driver.create(CreateRequest.new(options,[*apiObj]))
```

### SOAP Request For Import Definiton Creation

The envelope below infers mapping from column headings:

```
<?xml version="1.0" encoding="UTF-8"?>
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <soapenv:Header>
        <wsse:Security xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" soapenv:mustUnderstand="1">             <wsse:UsernameToken xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd" wsu:Id="UsernameToken-10154161">
                <wsse:Username>XXXX</wsse:Username>
                <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">XXXX</wsse:Password>
            </wsse:UsernameToken>
        </wsse:Security>
    </soapenv:Header>
    <soapenv:Body>
        <CreateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
            <Options></Options>
            <Objects xmlns:ns1="http://exacttarget.com/wsdl/partnerAPI" xsi:type="ns1:ImportDefinition">
                <CustomerKey>Import_To_DE_Market2Lead_Key</CustomerKey>
                <Name>Import_To_DE_Market2Lead</Name>
                <Description>Import_To_DE_Market2Lead</Description>
                <AllowErrors>true</AllowErrors>
                <DestinationObject xsi:type="ns1:DataExtension">
                    <CustomerKey>UsingAPI_For_Market2Lead_Key</CustomerKey>
                    <ObjectID xsi:nil="true"/>
                </DestinationObject>
                <FieldMappingType>InferFromColumnHeadings</FieldMappingType>
                <FileSpec>Import2M2L.csv</FileSpec>
                <FileType>CSV</FileType>
                <Notification>
                    <ResponseType>email</ResponseType>
                    <ResponseAddress>response@example.com</ResponseAddress>
                </Notification>
                <RetrieveFileTransferLocation>
                    <CustomerKey>ExactTarget Enhanced FTP</CustomerKey>
                </RetrieveFileTransferLocation>
                <UpdateType>AddAndDoNotUpdate</UpdateType>
            </Objects>
        </CreateRequest>
    </soapenv:Body>
</soapenv:Envelope>
```

The envelope below maps fields via ordinals:

```
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:wsa="http://schemas.xmlsoap.org/ws/2004/08/addressing" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
   <soap:Header>
      <wsa:Action>Create</wsa:Action>
      <wsa:MessageID>urn:uuid:e133baeb-0ea6-48c4-97a2-a35259159789</wsa:MessageID>
      <wsa:ReplyTo>
         <wsa:Address>http://schemas.xmlsoap.org/ws/2004/08/addressing/role/anonymous</wsa:Address>
      </wsa:ReplyTo>
      <wsa:To>https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/Service.asmx</wsa:To>
      <wsse:Security soap:mustUnderstand="1">
         <wsse:UsernameToken wsu:Id="SecurityToken-cfa5c193-106c-42b5-80fc-2f1bd831e480">
            <wsse:Username>ccc</wsse:Username>
            <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">ccc</wsse:Password>
         </wsse:UsernameToken>
      </wsse:Security>
   </soap:Header>
   <soap:Body>
      <CreateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
         <Options/>
         <Objects xsi:type="ImportDefinition">
            <ObjectID xsi:nil="true"/>
            <CustomerKey>UsingAPI</CustomerKey>
            <Name>UsingAPI</Name>
            <Description>UsingAPI to Import to DE Definition</Description>
            <DestinationObject xsi:type="DataExtension">
               <Client>
                  <ID>113903</ID>
               </Client>
               <CreatedDate>2008-10-16T14:53:26.613</CreatedDate>
               <ObjectID>2300bb16-bc9b-dd11-be9d-001e0bcf2c98</ObjectID>
               <CustomerKey>Test2_Key</CustomerKey>
               <Name>Test2</Name>
              <Description/>
               <IsSendable>true</IsSendable>
               <IsTestable>false</IsTestable>
               <SendableSubscriberField>
                  <Name>_SubscriberKey</Name>
               </SendableSubscriberField>
            </DestinationObject>
            <FieldMappingType>MapByOrdinal</FieldMappingType>
            <FieldMaps>
               <FieldMap>
                  <SourceName>1</SourceName>
                  <DestinationName>EmailId</DestinationName>
               </FieldMap>
               <FieldMap>
                  <SourceName>2</SourceName>
                  <DestinationName>StatusField</DestinationName>
               </FieldMap>
            </FieldMaps>
            <FileSpec>Test2.csv</FileSpec>
            <FileType>CSV</FileType>
            <Notification>
               <ResponseType>email</ResponseType>
               <ResponseAddress>bgogineni@exacttarget.com</ResponseAddress>
            </Notification>
            <RetrieveFileTransferLocation>
               <ObjectID xsi:nil="true"/>
               <CustomerKey>ExactTarget Enhanced FTP</CustomerKey>
            </RetrieveFileTransferLocation>
            <UpdateType>AddAndDoNotUpdate</UpdateType>
         </Objects>
      </CreateRequest>
   </soap:Body>
</soap:Envelope>
```

### SOAP Response For Import Definiton Creation

The API returns a response like this for inferred field mappings:

```
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:wsa="http://schemas.xmlsoap.org/ws/2004/08/addressing" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
    <soap:Header>
        <wsa:Action>CreateResponse</wsa:Action>
        <wsa:MessageID>urn:uuid:107dc09d-fdff-408e-af80-373012788c53</wsa:MessageID>
        <wsa:RelatesTo>urn:uuid:02be8551-f51a-45c2-a298-2cfbd23fe715</wsa:RelatesTo>
        <wsa:To>http://schemas.xmlsoap.org/ws/2004/08/addressing/role/anonymous</wsa:To>
        <wsse:Security>
        </wsse:Security>
    </soap:Header>
    <soap:Body>
        <CreateResponse xmlns="http://exacttarget.com/wsdl/partnerAPI">
            <Results>
                <StatusCode>OK</StatusCode>
                <StatusMessage>ImportDefinition created.</StatusMessage>
                <OrdinalID>0</OrdinalID>
                <NewID>0</NewID>
                <NewObjectID>4da7bd99-6d0e-de11-b30f-001cc494ae9e</NewObjectID>
                <Object xsi:type="ImportDefinition">
                    <ObjectID>4da7bd99-6d0e-de11-b30f-001cc494ae9e</ObjectID>
                    <CustomerKey>Import_To_DE_Market2Lead_Key</CustomerKey>
                    <Name>Import_To_DE_Market2Lead</Name>
                    <Description>Import_To_DE_Market2Lead</Description>
                    <AllowErrors>true</AllowErrors>
                    <DestinationObject xsi:type="DataExtension">
                        <ObjectID xsi:nil="true"/>
                        <CustomerKey>UsingAPI_For_Market2Lead_Key</CustomerKey>
                    </DestinationObject>
                    <FieldMappingType>InferFromColumnHeadings</FieldMappingType>
                    <FileSpec>Import2M2L.csv</FileSpec>
                    <FileType>CSV</FileType>
                    <Notification>
                        <ResponseType>email</ResponseType>
                            <ResponseAddress>response@exacttarget.com</ResponseAddress>
                        </Notification>
                    <RetrieveFileTransferLocation>
                        <ObjectID xsi:nil="true"/>
                        <CustomerKey>ExactTarget Enhanced FTP</CustomerKey>
                    </RetrieveFileTransferLocation>
                    <UpdateType>AddAndDoNotUpdate</UpdateType>
                </Object>0
            </Results>
            <RequestID>a491e5d7-6388-4e19-afb8-506d4136542a</RequestID>
            <OverallStatus>OK</OverallStatus>
        </CreateResponse>
    </soap:Body>
</soap:Envelope>
```

### How to Start the Import Definition

After starting the import definition, the system returns "TaskResultID," capture the "TaskResultID" and check against the system to verify if import is completed or not.

```apex
/**
     * Shows how to start Import-Definitions
     * Capture TaskResultID from response object and use it for checking import start
     * status.
     * @throws RemoteException
     */
     public void testStartImportDefinition() throws RemoteException {
        try             {
            Soap_PortType stub = init();
            // Create the ImportDefinition
            ImportDefinition impDef = new ImportDefinition();
            impDef.setCustomerKey("Import_To_DE_Market2Lead_Key");
            PerformRequestMsg performRequestMsg = new PerformRequestMsg();
            performRequestMsg.setAction("start");
            performRequestMsg.setOptions(new PerformOptions());
            performRequestMsg.setDefinitions(new InteractionBaseObject[]{impDef});
            PerformResponseMsg performResponseMsg = stub.perform(performRequestMsg);
            System.out.println(performResponseMsg.getOverallStatusMessage());
            }             catch (RemoteException e)             {
            e.printStackTrace();
            } catch (IOException e)             {
            e.printStackTrace();
            }
         }
```

### SOAP Request For Starting Import Definiton

```
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <soapenv:Header>
        <wsse:Security xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" soapenv:mustUnderstand="1">
            <wsse:UsernameToken xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd" wsu:Id="UsernameToken-25926258">
                <wsse:Username>XXXX</wsse:Username>
                <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">XXXX</wsse:Password>
            </wsse:UsernameToken>
        </wsse:Security>
    </soapenv:Header>
    <soapenv:Body>
        <PerformRequestMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">
            <Options></Options>
            <Action>start</Action>
            <Definitions>
                <Definition xmlns:ns1="http://exacttarget.com/wsdl/partnerAPI" xsi:type="ns1:ImportDefinition">
                    <CustomerKey>Import_To_DE_Market2Lead_Key</CustomerKey>
                </Definition>
            </Definitions>
        </PerformRequestMsg>
    </soapenv:Body>
</soapenv:Envelope>
```

### SOAP Response For Starting Import Definiton

```
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:wsa="http://schemas.xmlsoap.org/ws/2004/08/addressing" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
    <soap:Header>
        <wsa:Action>PerformResponse</wsa:Action>
        <wsa:MessageID>urn:uuid:9d81e7a4-74b5-441f-9ded-7fb2f526bf0e</wsa:MessageID>
        <wsa:RelatesTo>urn:uuid:d1c32df8-bae7-47dd-889e-4de8fbb05ff7</wsa:RelatesTo>
        <wsa:To>http://schemas.xmlsoap.org/ws/2004/08/addressing/role/anonymous</wsa:To>
        <wsse:Security>
        </wsse:Security>
    </soap:Header>
    <soap:Body>
        <PerformResponseMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">
            <Results>
                <Result>
                    <StatusCode>OK</StatusCode>
                    <StatusMessage>ImportDefinition performed AsyncID:130040236</StatusMessage>
                    <Object xsi:type="ImportDefinition">
                        <ObjectID xsi:nil="true"/>
                        <CustomerKey>Import_To_DE_Market2Lead_Key</CustomerKey>
                    </Object>
                    <Task>
                        <StatusCode>OK</StatusCode>
                        <StatusMessage>OK</StatusMessage>
                        <ID>130040236</ID>
                        <InteractionObjectID>f2471f20-6f0e-de11-b30f-001cc494ae9e</InteractionObjectID>
                    </Task>
                </Result>
            </Results>
            <OverallStatus>OK</OverallStatus>
            <OverallStatusMessage/>
            <RequestID>360ecbe7-70aa-4591-8bca-3d220445b531</RequestID>
       </PerformResponseMsg>
    </soap:Body>
</soap:Envelope>
```

### How to Retrieve the Import Start Results Summary

```apex
/**
     * Shows how to retrieve import start results summary
     *
     * @throws RemoteException
     */
    public void testRetrieveImportDefinitionSummary() throws RemoteException {
        try
            {
            Soap_PortType stub = init();
            RetrieveRequest request = new RetrieveRequest();
            request.setObjectType("ImportResultsSummary");
            ImportDefinition impDef = new ImportDefinition();
            impDef.setCustomerKey("Import_To_DE_Market2Lead_Key");
            String[] string = {"ImportDefinitionCustomerKey", "ImportType", "ImportStatus", "ID", "ObjectID", "NumberDuplicated", "NumberErrors", "NumberSuccessful", "DestinationID", "TaskResultID"};
            request.setProperties(string);
            RetrieveRequestMsg requestMsg = new RetrieveRequestMsg();
            SimpleFilterPart filterPart = new SimpleFilterPart();
            filterPart.setProperty("TaskResultID");
            String[] values = {"130040236"};
            filterPart.setValue(values);
            filterPart.setSimpleOperator(SimpleOperators.equals);
            request.setFilter(filterPart);
            requestMsg.setRetrieveRequest(request);
            RetrieveResponseMsg responseMsg = stub.retrieve(requestMsg);
            System.out.println(responseMsg.getOverallStatus());
            }
            catch (RemoteException e)
            {
            e.printStackTrace();
            }
            catch (IOException e)
            {
            e.printStackTrace();
            }
      }
```

### SOAP Request to Get Start Summary

```
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <soapenv:Header>
        <wsse:Security xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" soapenv:mustUnderstand="1">
            <wsse:UsernameToken xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd" wsu:Id="UsernameToken-12793227">
                <wsse:Username>XXXX</wsse:Username>
                <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">XXXX</wsse:Password>
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
                <Filter xmlns:ns1="http://exacttarget.com/wsdl/partnerAPI" xsi:type="ns1:SimpleFilterPart">
                    <Property>TaskResultID</Property>
                    <SimpleOperator>equals</SimpleOperator>
                    <Value>130040236</Value>
                </Filter>
            </RetrieveRequest>
        </RetrieveRequestMsg>
    </soapenv:Body>
</soapenv:Envelope>
```

### SOAP Response to Get Start Summary

```
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:wsa="http://schemas.xmlsoap.org/ws/2004/08/addressing" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
    <soap:Header>
        <wsa:Action>RetrieveResponse</wsa:Action>
        <wsa:MessageID>urn:uuid:09b16372-7a90-47d2-a1dd-669d7c00bcf9</wsa:MessageID>
        <wsa:RelatesTo>urn:uuid:6d510939-fee8-4b7d-8630-49cfc27b207d</wsa:RelatesTo>
        <wsa:To>http://schemas.xmlsoap.org/ws/2004/08/addressing/role/anonymous</wsa:To>
        <wsse:Security>
        </wsse:Security>
    </soap:Header>
    <soap:Body>
        <RetrieveResponseMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">
            <OverallStatus>OK</OverallStatus>
            <RequestID>f37fa7f0-0203-4f45-9cde-4eec947d13bd</RequestID>
            <Results xsi:type="ImportResultsSummary">
                <ObjectID>f7471f20-6f0e-de11-b30f-001cc494ae9e</ObjectID>
                <ImportDefinitionCustomerKey>Import_To_DE_Market2Lead_Key</ImportDefinitionCustomerKey>
                <DestinationID>UsingAPI_For_Market2Lead_Key</DestinationID>
                <NumberSuccessful>2</NumberSuccessful>
                <NumberDuplicated>0</NumberDuplicated>
                <NumberErrors>0</NumberErrors>
                <ImportType>Data Extensions</ImportType>
                <ImportStatus>Completed</ImportStatus>
                <TaskResultID>130040236</TaskResultID>
            </Results>
        </RetrieveResponseMsg>
    </soap:Body>
</soap:Envelope>
```

### SOAP Envelope to Create Import Definition with MapByOrdinal

```
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:wsa="http://schemas.xmlsoap.org/ws/2004/08/addressing" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
   <soap:Header>
      <wsa:Action>Create</wsa:Action>
      <wsa:MessageID>urn:uuid:e133baeb-0ea6-48c4-97a2-a35259159789</wsa:MessageID>
      <wsa:ReplyTo>
         <wsa:Address>http://schemas.xmlsoap.org/ws/2004/08/addressing/role/anonymous</wsa:Address>
      </wsa:ReplyTo>
      <wsa:To>https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/Service.asmx</wsa:To>
      <wsse:Security soap:mustUnderstand="1">
         <wsse:UsernameToken wsu:Id="SecurityToken-cfa5c193-106c-42b5-80fc-2f1bd831e480">
            <wsse:Username>xxxx</wsse:Username>
            <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">xxxx</wsse:Password>
         </wsse:UsernameToken>
      </wsse:Security>
   </soap:Header>
   <soap:Body>
      <CreateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
         <Options/>
         <Objects xsi:type="ImportDefinition">
            <ObjectID xsi:nil="true"/>
            <CustomerKey>UsingAPI</CustomerKey>
            <Name>UsingAPI</Name>
            <Description>UsingAPI to Import to DE Definition</Description>
            <DestinationObject xsi:type="DataExtension">
               <Client>
                  <ID>123</ID>
               </Client>
               <CreatedDate>2008-10-16T14:53:26.613</CreatedDate>
               <ObjectID>2300bb16-bc9b-dd11-be9d-001e0bcf2c98</ObjectID>
               <CustomerKey>Test2_Key</CustomerKey>
               <Name>Test2</Name>
               <Description/>
               <IsSendable>true</IsSendable>
               <IsTestable>false</IsTestable>
               <SendableSubscriberField>
                  <Name>_SubscriberKey</Name>
               </SendableSubscriberField>
            </DestinationObject>
            <FieldMappingType>MapByOrdinal</FieldMappingType>
            <FieldMaps>
               <FieldMap>
                  <SourceName>1</SourceName>
                  <DestinationName>EmailId</DestinationName>
               </FieldMap>
               <FieldMap>
                  <SourceName>2</SourceName>
                  <DestinationName>StatusField</DestinationName>
               </FieldMap>
            </FieldMaps>
            <FileSpec>Test2.csv</FileSpec>
            <FileType>CSV</FileType>
            <Notification>
               <ResponseType>email</ResponseType>
               <ResponseAddress>help@example.com</ResponseAddress>
            </Notification>
            <RetrieveFileTransferLocation>
               <ObjectID xsi:nil="true"/>
               <CustomerKey>ExactTarget Enhanced FTP</CustomerKey>
            </RetrieveFileTransferLocation>
            <UpdateType>AddAndDoNotUpdate</UpdateType>
         </Objects>
      </CreateRequest>
   </soap:Body>
</soap:Envelope>
```

## Related Items

[Import Activity](https://help.salesforce.com/articleView?id=mc_as_use_an_import_activity.htm&type=5)
