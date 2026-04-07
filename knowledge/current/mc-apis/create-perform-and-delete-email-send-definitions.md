---
title: "Create, Perform, and Delete Email Send Definitions"
domain: mc-apis
topic: create-perform-and-delete-email-send-definitions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:21.184Z
estimatedTokens: 11196
keywords: [Perform, Email, Send, Definitions, creating, performing, deleting, Why, How, Sample, NET, Code, Definition, Start, API]
---

# Create, Perform, and Delete Email Send Definitions

> This page contains information  about creating, performing, and deleting email send definitions.

# Create, Perform, and Delete Email Send Definitions

This page contains information about creating, performing, and deleting email send definitions.

## Why Create, Perform, and Delete Email Send Definitions

You can use email send definitions to send emails via the SOAP API. Email send definitions are known as email message interactions in Marketing Cloud. This helps you maintain a integration between your external system or development environment and Marketing Cloud

## How to Create, Perform, and Delete Email Send Definitions

Use the sample code below as a model for creating your own API calls related to email send definitions.

When you update a user-initiated send definition via the SOAP API with the Email object, you must set the EmailSubject property on the email send definition. If you don't pass the new subject to the email send definition, it retains the old subject for that definition.

### Sample .NET Code - Create Email Send Definition

```apex
//Create a GUID for ESD
        string strGUID = System.Guid.NewGuid().ToString();
        //Create EmailSendDefinition object to refer to current users ESD [Messages > Email > User-Initiated]
        EmailSendDefinition esd = new EmailSendDefinition();
        esd.Name = "ESD_Name_" + strGUID;
        esd.CustomerKey = strGUID;
        esd.Description = "ESD_Desc_" + strGUID;

        //Create Email object to refer to pre-created email
        Email em = new Email();
        em.ID = 542894;//Found via a Retreive or UI
        em.IDSpecified = true;
        esd.Email = em;
        esd.EmailSubject = "ESD Email Subject";
        //Create SendClassification
        SendClassification sc = new SendClassification();
        sc.ObjectID = "51422ad6-6f65-de11-bf42-001e0bbb7678";
        //Found via a Retreive
        esd.SendClassification = sc;
        //Pass the ID of the Content via this property
        esd.Additional = "01c59e4f-dac8-4dcb-ab99-a00f565bcc00";
        //DataExtension to Send to
        DataExtension de = new DataExtension();
        de.ObjectID = "729860f8-7d66-de11-bf42-001e0bbb7678";//This can be obtained via a Retrieve (Named Send_DE)
        //Set Send Definition List for the Email Send Definition
        esd.SendDefinitionList = new SendDefinitionList[1];
        esd.SendDefinitionList[0] = new SendDefinitionList();
        esd.SendDefinitionList[0].Name = "SDL Name";
        esd.SendDefinitionList[0].CustomerKey = "SDL CustomerKey";
        esd.SendDefinitionList[0].SendDefinitionListType = SendDefinitionListTypeEnum.SourceList;
        esd.SendDefinitionList[0].SendDefinitionListTypeSpecified = true;
        esd.SendDefinitionList[0].CustomObjectID = de.ObjectID;
        esd.SendDefinitionList[0].DataSourceTypeID = DataSourceTypeEnum.CustomObject;//This specifies a Data Extension
        esd.SendDefinitionList[0].DataSourceTypeIDSpecified = true;
        //Create the EmailSendDefinition, it is visible as a user-initiated Email in Marketing Cloud
        string cRequestID = "";
        string cStatus = "";
        CreateResult[] cResults = client.Create(new CreateOptions(), new APIObject[] { esd }, out cRequestID, out cStatus);
```
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
public partial class EmailSendDefinitionCreate : System.Web.UI.Page
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
            //Create a GUID for ESD to ensure a unique name and customer key
            string strGUID = System.Guid.NewGuid().ToString();
            //Create EmailSendDefinition object [Messages > Email > User-Initiated]
            EmailSendDefinition esd = new EmailSendDefinition();
            esd.Name = "ESD_Name_" + strGUID;//required
            esd.CustomerKey = strGUID;//required
            esd.TestEmailAddr = "bjennings@exacttarget.com";
            //Create Email object to refer to pre-create Email
            Email em = new Email();
            em.ID = 542894;//required //Available in Marketing Cloud UI [Content > My Emails > Properties]
            em.IDSpecified = true;//required
            //Apply Email object to the EmailSendDefiniton object
            esd.Email = em;//required
            //Create SendClassification
            SendClassification sc = new SendClassification();
            sc.ObjectID = "51422ad6-6f65-de11-bf42-001e0bbb7678";//required
            esd.SendClassification = sc;//required
            //The Additional property is OPTIONAL
            esd.Additional = "AdditionalInformationVariable";//A Great way to pass values from your API call to the Email, this is available via AMP Script to the Email

            //DataExtension object to be passed into SendDefinitionList's CustomObjectID property
            DataExtension de = new DataExtension();
            de.ObjectID = "729860f8-7d66-de11-bf42-001e0bbb7678";//required //This can be obtained via a Retrieve filtered by the External Key of the Data Extension
            //Set Send Definition List for the EmailSendDefinition
            esd.SendDefinitionList = new SendDefinitionList[1];//You can have many SendDefinitonLists of different SendDefinitionListTypes
            esd.SendDefinitionList[0] = new SendDefinitionList();
            esd.SendDefinitionList[0].SendDefinitionListType = SendDefinitionListTypeEnum.SourceList;
            esd.SendDefinitionList[0].SendDefinitionListTypeSpecified = true;
            esd.SendDefinitionList[0].CustomObjectID = de.ObjectID;
            esd.SendDefinitionList[0].DataSourceTypeID = DataSourceTypeEnum.CustomObject;//This specifies a Data Extension
            esd.SendDefinitionList[0].DataSourceTypeIDSpecified = true;
            try
            {
                string cRequestID = String.Empty;
                string cStatus = String.Empty;
                //Call the Create method on the Subscriber object
                CreateResult[] cResults = client.Create(new CreateOptions(), new APIObject[] { esd }, out cRequestID, out cStatus);
                //Display Results
                lblMessage.Text += "Overall Status: " + cStatus;
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
                lblMessage.Text += "<br/><br/>CREATE ERROR:<br/>" + exCreate.Message;
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

### Sample .NET Code - Perform an Email Send Definition

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
public partial class EmailSendDefinitionPerform : System.Web.UI.Page
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
            //Create EmailSendDefinition object [Messages > Email > User-Initiated]
            EmailSendDefinition esd = new EmailSendDefinition();
            esd.CustomerKey = "359866e9-1ec1-4854-ba49-c50a0ca61dd5";//required //Called External Key in the UI
            try
            {
                //Perform the ESD
                string pStatus = String.Empty;
                string pMessage = String.Empty;
                string pRequestID = String.Empty;
                PerformResult[] pResults = client.Perform(new PerformOptions(), "start", new InteractionBaseObject[] { esd }, out pStatus, out pMessage, out pRequestID);
                //Display Results
                lblMessage.Text += "Overall Status: " + pStatus;
                lblMessage.Text += "<br/>";
                lblMessage.Text += "Number of Results: " + pResults.Length;
                lblMessage.Text += "<br/>";
                //Loop through each object returned and display the StatusMessage
                foreach (PerformResult pr in pResults)
                {
                    lblMessage.Text += "Status Message: " + pr.StatusMessage;
                    lblMessage.Text += "<br/>";                }
                }
            catch (Exception exCreate)
            {
                //Set Message
                lblMessage.Text += "<br/><br/>CREATE ERROR:<br/>" + exCreate.Message;
            }
        }
        catch (Exception exc)
        {
            //Set Message
            lblMessage.Text += "<br/><br/>ERROR<br/>" + exc.Message;
        }
    }
}
```

### Sample .NET Code - Start an Email Send Definition with API

```apex
/**
     * Start Email send definiton using perform call. This internally sends email using Data Extensions.
     * In Response capture Task ID="12345" which is sendID. Use this to
     * retrieve tracking information.
     * @throws RemoteException
     */
    public void startEmailSendDefinition() throws RemoteException {
       EmailSendDefinition definition = new EmailSendDefinition();
        definition.setCustomerKey("Market2Lead_Email_Definition_Key");
        Soap_PortType stub = init();
        PerformRequestMsg performRequestMsg = new PerformRequestMsg();
        performRequestMsg.setOptions(new PerformOptions());
        performRequestMsg.setAction("start");
        performRequestMsg.setDefinitions(new EmailSendDefinition[]{definition});
        //This sends email using User-Initiated-Email-definition.
        PerformResponseMsg responseMsg = stub.perform(performRequestMsg);
        System.out.println(responseMsg.getOverallStatus());
    }
```

### Sample PHP Code - Create an Email Send Definition

```
<?php
require('exacttarget_soap_client.php');
$wsdl = 'https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/etframework.wsdl';
try{
    /* Create the Soap Client */
    $client = new Marketing CloudSoapClient($wsdl, array('trace'=>1));
    /* Set username and password here */
    $client->username = 'xxx';
    $client->password = 'xxx';
    //Setup the Email Send Definition
        $emailSendDef = new Marketing Cloud_EmailSendDefinition();
        $emailSendDef->CustomerKey = "PHP Test Send Definition";
        $emailSendDef->Name = "PHP Test Send Definition";
        //Setup the Send Classification
        $sendClass = new Marketing Cloud_SendClassification();
        $sendClass->CustomerKey = "2239";
        $emailSendDef->SendClassification = $sendClass;
        // Setting Up the Source List
        $emailSendDef->SendDefinitionList = array();
        $sendDefList = new Marketing Cloud_SendDefinitionList();
        $list = new Marketing Cloud_List();
        $list->ID = "1727073";
        $sendDefList->List = $list;
        $sendDefList->DataSourceTypeID = "List";
        $sendDefList->SendDefinitionListType = "SourceList";
        $emailSendDef->SendDefinitionList[] = $sendDefList;
        // Setting up the exclude list
        $sendDefListExclude = new Marketing Cloud_SendDefinitionList();
        $listExclude = new Marketing Cloud_List();
        $listExclude->ID = "1729515";
        $sendDefListExclude->List = $listExclude;
        $sendDefListExclude->DataSourceTypeID = "List";
        $sendDefListExclude->SendDefinitionListType = "ExclusionList";
        $emailSendDef->SendDefinitionList[] = $sendDefListExclude;

        // Specify the Email To Send
        $email = new Marketing Cloud_Email();
        $email->ID = "3096380";
        $emailSendDef->Email = $email;
        $object = new SoapVar($emailSendDef, SOAP_ENC_OBJECT, 'EmailSendDefinition', "http://exacttarget.com/wsdl/partnerAPI");
        $request = new Marketing Cloud_CreateRequest();
        $request->Options = NULL;
        $request->Objects = array($object);
        $results = $client->Create($request);
        var_dump($results);
} catch (Exception $e) {
echo 'Message: ' .$e->getMessage();
}
?>
```
```
<?php
require('../../00 Includes/exacttarget_soap_client.php');
$wsdl = 'https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/etframework.wsdl';
try{
        /* Create the Soap Client */
        $client = new Marketing CloudSoapClient($wsdl, array('trace'=>1));
        /* Set username and password here */
        $client->username = '<username>';
        $client->password = '<password>';
/* Create the list object to associate with the send */
$list = new Marketing Cloud_List();
$list->ID = "1729965";
/* Create the send definition list object to associate with the send */
/* You could also create a data extension object and use that instead */
$senddeflist = new Marketing Cloud_SendDefinitionList();
$senddeflist->List = $list;
$senddeflist->DataSourceTypeID = "List"; // in this example, we are sending to a list
/* Create the email object that is associated with the send */
$email = new Marketing Cloud_Email();
$email->ID = "3096692";
/* Create the send classification that is associated with this send */
$sendclass = new Marketing Cloud_SendClassification();
$sendclass->CustomerKey = "test";
/* Create the email send definition object */
$esd = new Marketing Cloud_EmailSendDefinition();
$esd->SendDefinitionList = $senddeflist;
$esd->Email = $email;
$esd->Name = "API Created2";
$esd->SendClassification = $sendclass;
$object = new SoapVar($esd, SOAP_ENC_OBJECT, 'EmailSendDefinition', "http://exacttarget.com/wsdl/partnerAPI");
/* Create the email send definition in Marketing Cloud*/
$request = new Marketing Cloud_CreateRequest();
$request->Options = NULL;
$request->Objects = array($object);
$results = $client->Create($request);
/* Output the results */
var_dump($results);
} catch (SoapFault $e) {
    var_dump($e);
}
?>
```

### Sample PHP Code - Perform an Email Send Definition

```
<?php
require('exacttarget_soap_client.php');
$wsdl = 'https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/etframework.wsdl';
try{
        /* Create the Soap Client */
        $client = new Marketing CloudSoapClient($wsdl, array('trace'=>1));
        /* Set username and password here */
        $client->username = 'XXXX';
        $client->password = 'XXXX';
        $pr = new Marketing Cloud_PerformRequestMsg();
        $pr->Action = "start";
        $pr->Definitions =  array();

            $def = new Marketing Cloud_EmailSendDefinition();
            $def->CustomerKey = "TESTUISEND";
            $pr->Definitions[] = new SoapVar($def, SOAP_ENC_OBJECT, 'EmailSendDefinition', "http://exacttarget.com/wsdl/partnerAPI");
        $pr->Options = NULL;
        $results = $client->Perform($pr);
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
require 'WSHelpers.rb'
props = {
  :object => 'DataExtension',
  :props => ['Name','Description','CustomerKey','ObjectID']
}
filter = {
  :filterType => 'Simple',
  :filter => ['CustomerKey','equals','APITestSendDe0']
}
de = BuildRetrieve.new
resp = de.creates(props,filter)
objID = String.new
resp.results.each do |result|
  objID = result.objectID
end
#Async create options
#options = CreateOptions.new(nil,nil,nil,nil,nil,nil,nil,nil,'Asynchronous')
options = nil
customerKey = 'API-Test-1'
desc = customerKey + ' created through the API'
sendClass = SendClassification.new(nil,nil,nil,nil,nil,nil,nil,189,nil,nil,nil,nil,nil,nil,nil,nil)
sendProf = SenderProfile.new(nil,nil,nil,nil,nil,nil,nil,352,nil,nil,nil,nil,'NTO Customer Support','acruz@example.com',nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil)
delProf = DeliveryProfile.new(nil,nil,nil,nil,nil,nil,nil,306,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil)
email = Email.new(nil,nil,nil,nil,nil,2052608,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil)
sendDefList = SendDefinitionList.new(nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,objID,'CustomObject',nil,nil,nil,nil,nil)
emailSendDef = EmailSendDefinition.new(nil,nil,nil,nil,nil,nil,nil,customerKey,nil,nil,customerKey,desc,nil,nil,nil,sendClass,sendProf,nil,nil,delProf,nil,nil,nil,nil,nil,nil,nil,nil,0,0,sendDefList,email,nil,nil,nil,'Thank You for Contacting NTO Customer Support',nil,1,1,nil,nil,nil,nil,1,nil,nil,nil,'acruz@example.com')
apiObj = emailSendDef
resp = $driver.create(CreateRequest.new(options,[*apiObj]))
```

### Sample Java Code (Axis 1.4)

```apex
/**
      * Create User-Intiated-Send-definition using Data Extension
      */
    public void testCreateEmailSendDefinition() throws RemoteException {
        EmailSendDefinition definition = new EmailSendDefinition();
        Soap_PortType stub = init();
        definition.setName("Market2Lead_Email_Definition");   //Name
        //This is Unique identifier for Definition
        definition.setCustomerKey("Market2Lead_Email_Definition_Key");
        //RetrieveEmail
        Email email = retrieveEmail(stub);//Retrieve email
        definition.setEmail(email); //Associate what email you are going to send
        // Retrieve sendClassification and attach to Definition
        definition.setSendClassification(retrieveSendClassifications(stub));
        SendDefinitionList sendDefinitionList = new SendDefinitionList();
       //This is objectId of DataExtension, You can retrieve DataExtension and assign value.
       //1a3e2c14-580e-de11-b30f-001cc494ae9e Captured after creating DataExtension.
       //Refer this link for Retrieving Data Extension
        //http://wiki.memberlandingpages.com/API_References/Web_Service_Guide/_Technical_Articles/Retrieving_DataExtension_Object
        sendDefinitionList.setCustomObjectID("1a3e2c14-580e-de11-b30f-001cc494ae9e");
        sendDefinitionList.setDataSourceTypeID(DataSourceTypeEnum.CustomObject);
        definition.setIsMultipart(true);
        definition.setSendDefinitionList(new SendDefinitionList[]{sendDefinitionList});
        APIObject[] createObjects = {definition};
        //Create Request to create EmailDefinition
        CreateRequest createRequest = new CreateRequest(new   CreateOptions(),reateObjects);
        CreateResponse createResponse = stub.create(createRequest);
        System.out.println(createResponse.getOverallStatus());
    }
```

### Sample Java Code (Axis 1.4) - Retrieve Send Classifications for Email Send Definition

```apex
/**
         * Retrieve SendClassifications Transactional or Commerical type.
         * @throws RemoteException
     */
   private SendClassification retrieveSendClassifications(Soap_PortType stub) throws RemoteException {
        String[] props = { "ObjectID", "Name", "Description", "CustomerKey",
         "SenderProfile.CustomerKey","Client.ID", "Client.PartnerClientKey", "PartnerKey"
        };
        RetrieveRequest request = new RetrieveRequest();
        request.setObjectType("SendClassification");
        request.setProperties(props);
        /*
        ClientID clientID = new ClientID();
        clientID.setPartnerClientKey("partnerkey_subaccount_2");         ClientID[] clientIDs = {clientID};
        request.setClientIDs(clientIDs);         */
        //Default Transactional
        SimpleFilterPart filterPart = new SimpleFilterPart();         String[] filterValues = {"Default Commercial"};
        filterPart.setProperty("Name");
        filterPart.setSimpleOperator(SimpleOperators.equals);
        filterPart.setValue(filterValues);
        request.setFilter(filterPart);
        RetrieveRequestMsg requestMsg = new RetrieveRequestMsg();
        requestMsg.setRetrieveRequest(request);
        RetrieveResponseMsg responseMsg = stub.retrieve(requestMsg);
        SendClassification classification = null;
        if (responseMsg.getResults() != null && responseMsg.getResults().length > 0){
            classification = (SendClassification) responseMsg.getResults(0);
         }
        return classification;
    }

     /**
     * Reteive email from System
     * @param stub
     * @return
     * @throws RemoteException
     */
    public Email retrieveEmail(Soap_PortType stub) throws RemoteException {
        Email email = null;
        RetrieveRequest request = new RetrieveRequest();
        request.setObjectType("Email");
        String[] props = {"ID", "Name", "Subject", "Status", "PartnerKey"};
        request.setProperties(props);
        SimpleFilterPart part = new SimpleFilterPart();
         part.setProperty("Name"); //If Uniquie, or indentify which is unique in    your case
        part.setSimpleOperator(SimpleOperators.equals);
        String[] values = {"Market2Lead"};
        part.setValue(values);
        request.setFilter(part);
        RetrieveRequestMsg requestMsg = new RetrieveRequestMsg();
        requestMsg.setRetrieveRequest(request);
        RetrieveResponseMsg responseMsg = stub.retrieve(requestMsg);
        if (responseMsg.getResults() != null && responseMsg.getResults().length > 0){
            email = (Email) responseMsg.getResults(0);
        }
        return email;
    }
```

### Sample Create SOAP Envelope

```
<s:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
    <soapenv:Header xmlns:wsa="http://www.w3.org/2005/08/addressing">
        <wsse:Security soapenv:mustUnderstand="1" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
            <wsse:UsernameToken wsu:Id="UsernameToken-30851894" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
                <wsse:Username>Username</wsse:Username>
                <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">Password</wsse:Password>
            </wsse:UsernameToken>
        </wsse:Security>
        <wsa:To>https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/Service.asmx</wsa:To>
        <wsa:MessageID>urn:uuid:FAB69169EC56A8F9D51228490514867</wsa:MessageID>
        <wsa:Action>Retrieve</wsa:Action>
    </soapenv:Header>
    <s:Body xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
        <CreateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
            <Options></Options>
            <Objects xmlns:q1="http://exacttarget.com/wsdl/partnerAPI" xsi:type="q1:EmailSendDefinition">
                <q1:ObjectID xsi:nil="true"></q1:ObjectID>
                <q1:CustomerKey>7dc973cc-e0ab-4aec-9ba8-cf0b739e02dc</q1:CustomerKey>
                <q1:Name>ESD_Name_7dc973cc-e0ab-4aec-9ba8-cf0b739e02dc</q1:Name>
                <q1:Description>ESD_Desc_7dc973cc-e0ab-4aec-9ba8-cf0b739e02dc</q1:Description>
                <q1:SendClassification>
                    <q1:ObjectID>51422ad6-6f65-de11-bf42-001e0bbb7678</q1:ObjectID>
                </q1:SendClassification>
                <q1:SendDefinitionList>
                    <q1:ObjectID xsi:nil="true"></q1:ObjectID>
                    <q1:CustomerKey>SDL CustomerKey</q1:CustomerKey>
                    <q1:SendDefinitionListType>SourceList</q1:SendDefinitionListType>
                    <q1:CustomObjectID>729860f8-7d66-de11-bf42-001e0bbb7678</q1:CustomObjectID>
                    <q1:DataSourceTypeID>CustomObject</q1:DataSourceTypeID>
                    <q1:Name>SDL Name</q1:Name>
                </q1:SendDefinitionList>
                <q1:Email>
                    <q1:ID>542894</q1:ID>
                    <q1:ObjectID xsi:nil="true"></q1:ObjectID>
                </q1:Email>
                <q1:EmailSubject>ESD Email Subject</q1:EmailSubject>
                <q1:Additional>cb99f3b1-67a4-452a-94c0-886e9a930961</q1:Additional>
            </Objects>
        </CreateRequest>
    </s:Body>
</s:Envelope>
```

### Sample Perform SOAP Envelope

```
<s:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
    <soapenv:Header xmlns:wsa="http://www.w3.org/2005/08/addressing">
        <wsse:Security soapenv:mustUnderstand="1" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
            <wsse:UsernameToken wsu:Id="UsernameToken-30851894" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd"> <wsse:Username>Username</wsse:Username>
                <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">Password</wsse:Password>
            </wsse:UsernameToken>
        </wsse:Security>
        <wsa:To>https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/Service.asmx</wsa:To>
        <wsa:MessageID>urn:uuid:FAB69169EC56A8F9D51228490514867</wsa:MessageID>
        <wsa:Action>Retrieve</wsa:Action>
    </soapenv:Header>
    <s:Body xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
        <PerformRequestMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">
            <Options></Options>
            <Action>start</Action>
            <Definitions>
                <Definition xmlns:q1="http://exacttarget.com/wsdl/partnerAPI" xsi:type="q1:EmailSendDefinition">
                    <q1:ObjectID xsi:nil="true"></q1:ObjectID>
                    <q1:CustomerKey>7dc973cc-e0ab-4aec-9ba8-cf0b739e02dc</q1:CustomerKey>
                    <q1:Name>ESD_Name_7dc973cc-e0ab-4aec-9ba8-cf0b739e02dc</q1:Name>
                    <q1:Description>ESD_Desc_7dc973cc-e0ab-4aec-9ba8-cf0b739e02dc</q1:Description>
                    <q1:SendClassification>
                        <q1:ObjectID>51422ad6-6f65-de11-bf42-001e0bbb7678</q1:ObjectID>
                    </q1:SendClassification>
                    <q1:SendDefinitionList>
                        <q1:ObjectID xsi:nil="true"></q1:ObjectID>
                        <q1:CustomerKey>SDL CustomerKey</q1:CustomerKey>
                        <q1:SendDefinitionListType>SourceList</q1:SendDefinitionListType>
                        <q1:CustomObjectID>729860f8-7d66-de11-bf42-001e0bbb7678</q1:CustomObjectID>
                        <q1:DataSourceTypeID>CustomObject</q1:DataSourceTypeID>
                        <q1:Name>SDL Name</q1:Name>
                    </q1:SendDefinitionList>
                    <q1:Email>
                        <q1:ID>123</q1:ID>
                        <q1:ObjectID xsi:nil="true"></q1:ObjectID>
                    </q1:Email>
                    <q1:EmailSubject>ESD Email Subject</q1:EmailSubject>
                    <q1:Additional>cb99f3b1-67a4-452a-94c0-886e9a930961</q1:Additional>
                </Definition>
            </Definitions>
        </PerformRequestMsg>
    </s:Body>
</s:Envelope>
```

### Sample Delete SOAP Envelope

```
<s:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
    <soapenv:Header xmlns:wsa="http://www.w3.org/2005/08/addressing">
        <wsse:Security soapenv:mustUnderstand="1" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
            <wsse:UsernameToken wsu:Id="UsernameToken-30851894" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
                <wsse:Username>Username</wsse:Username>
                <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">Password</wsse:Password>
            </wsse:UsernameToken>
        </wsse:Security>
        <wsa:To>https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/Service.asmx</wsa:To>
        <wsa:MessageID>urn:uuid:FAB69169EC56A8F9D51228490514867</wsa:MessageID>
        <wsa:Action>Retrieve</wsa:Action>
    </soapenv:Header>
    <s:Body xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
        <DeleteRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
            <Options></Options>
            <Objects xmlns:q1="http://exacttarget.com/wsdl/partnerAPI" xsi:type="q1:EmailSendDefinition">
                <q1:ObjectID xsi:nil="true"></q1:ObjectID>
                <q1:CustomerKey>7dc973cc-e0ab-4aec-9ba8-cf0b739e02dc</q1:CustomerKey>
                <q1:Name>ESD_Name_7dc973cc-e0ab-4aec-9ba8-cf0b739e02dc</q1:Name>
                <q1:Description>ESD_Desc_7dc973cc-e0ab-4aec-9ba8-cf0b739e02dc</q1:Description>
                <q1:SendClassification>
                    <q1:ObjectID>51422ad6-6f65-de11-bf42-001e0bbb7678</q1:ObjectID>
                </q1:SendClassification>
                <q1:SendDefinitionList>
                    <q1:ObjectID xsi:nil="true"></q1:ObjectID>
                    <q1:CustomerKey>SDL CustomerKey</q1:CustomerKey>
                    <q1:SendDefinitionListType>SourceList</q1:SendDefinitionListType>
                    <q1:CustomObjectID>729860f8-7d66-de11-bf42-001e0bbb7678</q1:CustomObjectID>
                    <q1:DataSourceTypeID>CustomObject</q1:DataSourceTypeID>
                    <q1:Name>SDL Name</q1:Name>
                </q1:SendDefinitionList>
                <q1:Email>
                    <q1:ID>542894</q1:ID>
                    <q1:ObjectID xsi:nil="true"></q1:ObjectID>
                </q1:Email>
                <q1:EmailSubject>ESD Email Subject</q1:EmailSubject>
                <q1:Additional>cb99f3b1-67a4-452a-94c0-886e9a930961</q1:Additional>
            </Objects>
        </DeleteRequest>
    </s:Body>
</s:Envelope>
```

### SOAP Request to Create an Email Send Definition

```
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <soapenv:Header>
      <wsse:Security soapenv:mustUnderstand="1" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
         <wsse:UsernameToken wsu:Id="UsernameToken-9560865" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">             <wsse:Username>username</wsse:Username>
            <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">password</wsse:Password>          </wsse:UsernameToken>       </wsse:Security>    </soapenv:Header>    <soapenv:Body>
      <CreateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
         <Options/>
         <Objects xsi:type="ns1:EmailSendDefinition" xmlns:ns1="http://exacttarget.com/wsdl/partnerAPI">
            <CustomerKey>Market2Lead_Email_Definition_Key</CustomerKey>
            <Name>Market2Lead_Email_Definition</Name>
            <SendClassification>
               <Client>
                  <ID>75741</ID>
               </Client>
               <ObjectID>4819efef-4527-dd11-8126-001a4be9433a</ObjectID>
               <CustomerKey>3542</CustomerKey>
               <Name>Default Commercial</Name>
               <Description>Default Commercial Send Classification</Description>
               <SenderProfile>
                  <CustomerKey>1973</CustomerKey>
               </SenderProfile>
            </SendClassification>
            <SendDefinitionList>
               <CustomObjectID>1a3e2c14-580e-de11-b30f-001cc494ae9e</CustomObjectID>
               <DataSourceTypeID>CustomObject</DataSourceTypeID>
            </SendDefinitionList>
            <Email>
               <ID>794527</ID>
               <Name>Market2Lead</Name>
               <Subject>Market2Lead-Email</Subject>
               <Status>New</Status>
            </Email>
            <IsMultipart>true</IsMultipart>
         </Objects>
      </CreateRequest>
   </soapenv:Body>
</soapenv:Envelope>
```

### SOAP Response to Request to Create an Email Send Definition

```
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:wsa="http://schemas.xmlsoap.org/ws/2004/08/addressing" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
   <soap:Header>
      <wsa:Action>CreateResponse</wsa:Action>
      <wsa:MessageID>urn:uuid:107dc09d-fdff-408e-af80-373012788c53</wsa:MessageID>
      <wsa:RelatesTo>urn:uuid:02be8551-f51a-45c2-a298-2cfbd23fe715</wsa:RelatesTo>
      <wsa:To>http://schemas.xmlsoap.org/ws/2004/08/addressing/role/anonymous</wsa:To>
      <wsse:Security>
         <wsu:Timestamp wsu:Id="Timestamp-e41f7772-de26-4ef4-9aec-950e013c39e6">
            <wsu:Created>2009-03-11T18:51:24Z</wsu:Created>
            <wsu:Expires>2009-03-11T18:56:24Z</wsu:Expires>
         </wsu:Timestamp>
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
               <FieldMaps>
                  <FieldMap>
                     <DestinationName>EmailAddress</DestinationName>
                  </FieldMap>
                  <FieldMap>
                     <DestinationName>ChannelUser</DestinationName>
                  </FieldMap>
                  <FieldMap>
                     <DestinationName>ChannelUser_EmailAddress</DestinationName>
                  </FieldMap>
                  <FieldMap>
                     <DestinationName>Demographic_Address</DestinationName>
                  </FieldMap>
               </FieldMaps>
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
            </Object>
         </Results>
         <RequestID>a491e5d7-6388-4e19-afb8-506d4136542a</RequestID>
         <OverallStatus>OK</OverallStatus>
      </CreateResponse>
   </soap:Body>
</soap:Envelope>
```

### SOAP Envelope to Create an Email Send Definition Using Profile Attributes and a Data Filter to Create an Audience

```
<?xml version="1.0" encoding="UTF-8"?>
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
<SOAP-ENV:Header>
  <wsse:Security xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
   <wsu:Timestamp>
    <wsu:Created>2011-05-20T21:24:16Z</wsu:Created>
    <wsu:Expires>2011-05-20T21:29:16Z</wsu:Expires>
   </wsu:Timestamp>
   <wsse:UsernameToken>
    <wsse:Username>XXXXX</wsse:Username>
    <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">XXXXX</wsse:Password>
    <wsse:Nonce>CvdDChr6jtfX++xFZVEoCAm6TXQ=</wsse:Nonce>
    <wsu:Created>2011-05-20T21:24:16Z</wsu:Created>
   </wsse:UsernameToken>
  </wsse:Security>
</SOAP-ENV:Header>
<SOAP-ENV:Body>
  <CreateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
   <Options/>
   <ns1:Objects xmlns:ns1="http://exacttarget.com/wsdl/partnerAPI" xsi:type="ns1:EmailSendDefinition">
    <ns1:ModifiedDate xsi:nil="true"/>
    <ns1:ObjectID xsi:nil="true"/>
    <ns1:Name>12345</ns1:Name>
    <ns1:SendClassification>
     <ns1:ModifiedDate xsi:nil="true"/>
     <ns1:CustomerKey>12345</ns1:CustomerKey>
    </ns1:SendClassification>
    <ns1:SendDefinitionList>
     <ns1:ModifiedDate xsi:nil="true"/>
     <ns1:List>
      <ns1:ModifiedDate xsi:nil="true"/>
      <ns1:ID>12345</ns1:ID>
      <ns1:ObjectID xsi:nil="true"/>
     </ns1:List>
     <ns1:SendDefinitionListType>SourceList</ns1:SendDefinitionListType>
     <ns1:DataSourceTypeID>FilterDefinition</ns1:DataSourceTypeID>
     <ns1:FilterDefinition>
      <ns1:PartnerKey xsi:nil="true"/>
      <ns1:ModifiedDate xsi:nil="true"/>
      <ns1:ObjectID>12345</ns1:ObjectID>
      <ns1:CustomerKey>123456<ns1:CustomerKey>
     </ns1:FilterDefinition>
    </ns1:SendDefinitionList>
    <ns1:Email>
     <ns1:ModifiedDate xsi:nil="true"/>
     <ns1:ID>12345</ns1:ID>
     <ns1:ObjectID xsi:nil="true"/>
    </ns1:Email>
   </ns1:Objects>
  </CreateRequest>
</SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

### SOAP Request for Starting Email Send Definition

```
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <soapenv:Header>
      <wsse:Security soapenv:mustUnderstand="1" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
         <wsse:UsernameToken wsu:Id="UsernameToken-28677619" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
            <wsse:Username>username</wsse:Username>
            <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">password</wsse:Password>
         </wsse:UsernameToken>
      </wsse:Security>
   </soapenv:Header>
   <soapenv:Body>
      <PerformRequestMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">
         <Options/>
         <Action>start</Action>
         <Definitions>
            <Definition xsi:type="ns1:EmailSendDefinition" xmlns:ns1="http://exacttarget.com/wsdl/partnerAPI">
               <CustomerKey>Market2Lead_Email_Definition_Key</CustomerKey>
            </Definition>
         </Definitions>
      </PerformRequestMsg>
   </soapenv:Body>
</soapenv:Envelope>
```

### SOAP Response for Starting Email Definition

```
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:wsa="http://schemas.xmlsoap.org/ws/2004/08/addressing" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
   <soap:Header>
      <wsa:Action>PerformResponse</wsa:Action>
      <wsa:MessageID>urn:uuid:9a508056-981a-4290-83ba-50c5471ec5a1</wsa:MessageID>
      <wsa:RelatesTo>urn:uuid:bab6f37f-ceab-4a5a-a8d3-9c3f3eb708d9</wsa:RelatesTo>
      <wsa:To>http://schemas.xmlsoap.org/ws/2004/08/addressing/role/anonymous</wsa:To>
      <wsse:Security>
         <wsu:Timestamp wsu:Id="Timestamp-5dd9cc39-7484-49cf-b203-440b4ecc181e">
            <wsu:Created>2009-03-11T21:05:55Z</wsu:Created>
            <wsu:Expires>2009-03-11T21:10:55Z</wsu:Expires>
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
                  <ObjectID>66f6728e-7c0e-de11-b30f-001cc494ae9e</ObjectID>
                  <CustomerKey>Market2Lead_Email_Definition_Key</CustomerKey>
                  <Name>Market2Lead_Email_Definition</Name>
               </Object>
               <Task>
                  <StatusCode>OK</StatusCode>
                  <StatusMessage>OK</StatusMessage>
                  <ID>7029017</ID>
                  <InteractionObjectID>ed9aae62-800e-de11-b30f-001cc494ae9e</InteractionObjectID>
               </Task>
            </Result>
         </Results>
         <OverallStatus>OK</OverallStatus>
         <OverallStatusMessage/>
         <RequestID>1b9a83ff-9588-4185-92bc-8a138368f243</RequestID>
      </PerformResponseMsg>
   </soap:Body>
</soap:Envelope>
```

### SOAP Request to Update Email Send Definition

```
<soapenv:Body>
      <UpdateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
         <Options/>
         <Objects xsi:type="ns1:EmailSendDefinition" xmlns:ns1="http://exacttarget.com/wsdl/partnerAPI">
            <CustomerKey>Testing_Pub_List_Key</CustomerKey>
            <Client>
               <ID>12345</ID>
            </Client>
            <Email>
               <Client>
                  <ID>12345</ID>
               </Client>
               <ID>123456</ID>
               <ObjectID xsi:nil="true"/>
               <Subject>Test Email with Content Areas</Subject>
            </Email>
            <SendDefinitionList>
               <PartnerKey xsi:nil="true"/>
               <ObjectID xsi:nil="true"/>
               <List>
                  <Client>
                     <ID>12345</ID>
                  </Client>
                  <ID>1234567</ID>
               </List>
               <DataSourceTypeID>List</DataSourceTypeID>
            </SendDefinitionList>
         </Objects>
      </UpdateRequest>
   </soapenv:Body>
```

### SOAP Request to Update Email Send Definition with New Subject

```
<soapenv:Body>
      <UpdateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
         <Options/>
         <Objects xsi:type="ns1:EmailSendDefinition" xmlns:ns1="http://exacttarget.com/wsdl/partnerAPI">
            <CustomerKey>Testing_Pub_List_Key</CustomerKey>
            <Client>
               <ID>12345</ID>
            </Client>
            <Email>
               <Client>
                  <ID>12345</ID>
               </Client>
               <ID>123456</ID>
               <ObjectID xsi:nil="true"/>
               <Subject>Test Email with Content Areas</Subject>
            </Email>
  <EmailSubject>EmailSendDef subject updated via API</EmailSubject>
            <SendDefinitionList>
               <PartnerKey xsi:nil="true"/>
               <ObjectID xsi:nil="true"/>
               <List>
                  <Client>
                     <ID>12345</ID>
                  </Client>
                  <ID>1234567</ID>
               </List>
               <DataSourceTypeID>List</DataSourceTypeID>
            </SendDefinitionList>
         </Objects>
      </UpdateRequest>
   </soapenv:Body>
```

## Related Items

[Email Message Interactions](https://help.salesforce.com/articleView?id=mc_es_email_messages.htm&type=5)
