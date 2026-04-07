---
title: "Create an Email Send Definition"
domain: mc-apis
topic: create-an-email-send-definition
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:21.136Z
estimatedTokens: 5918
keywords: [Email, Send, Definition, how, uses, data, extensions, emails, Why, Sample, NET, Code, Retrieve, Classifications, Bind]
---

# Create an Email Send Definition

> This page shows how to create an Email Send Definition that uses data extensions to send emails.

# Create an Email Send Definition

This page shows how to create an Email Send Definition that uses data extensions to send emails.

## Why Create an Email Send Definition

You can use the SOAP API to handle all aspects of the email send definition, including calling information from an existing data extension. This allows you to send an email directly from your development environment or other system.

## How To Create an Email Send Definition

You can use the sample code to set up your call to create an email send definition. The code uses the following API calls:

1.  Create email send definition
2.  Perform call to send email using data from data extension

Set up those calls to match your system and add the appropriate code to retrieve the necessary information for your send.

### Sample .NET Code - Retrieve Send Classifications for Email Send Definition

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
         part.setProperty("Name"); //If Unique, or identify which is unique in    your case
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

### Sample .NET Code - Bind a Publication List to an Email Send Definition

```
definition.SendDefinitionList = new SendDefinitionList[1];
definition.SendDefinitionList[0] = new SendDefinitionList();
definition.SendDefinitionList[0].CustomObjectID = "d4b05e36-fc01-df11-9bf1-00215ade7416";
definition.SendDefinitionList[0].DataSourceTypeID = DataSourceTypeEnum.CustomObject;
definition.SendDefinitionList[0].DataSourceTypeIDSpecified = true;
definition.SendDefinitionList[0].SendDefinitionListType = SendDefinitionListTypeEnum.SourceList;
definition.SendDefinitionList[0].List = new List();
definition.SendDefinitionList[0].List.ID = 12345;  //This is Pub List Id
definition.SendDefinitionList[0].List.IDspecified= true;
```

### Sample Jave Code (Axis 1.4) - Start an Email Send Definition with SOAP API

```apex
/**
     * Start Email send definition using perform call. This internally sends email using Data Extensions.
     * In Response capture Task ID="7029017" which is sendID. You use this to
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

### Sample PHP Code

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
//Set up the Send Classification
$sendClass = new Marketing Cloud_SendClassification();
$sendClass->CustomerKey = "12345";
$emailSendDef->SendClassification = $sendClass;
//Set up Up the Source List
$emailSendDef->SendDefinitionList = array();
$sendDefList = new Marketing Cloud_SendDefinitionList();
$list = new Marketing Cloud_List();$list->ID = "12345";
$sendDefList->List = $list;
$sendDefList->DataSourceTypeID = "List";
$sendDefList->SendDefinitionListType = "SourceList";
$emailSendDef->SendDefinitionList[] = $sendDefList;
//Set up the exclude list
$sendDefListExclude = new Marketing Cloud_SendDefinitionList();
$listExclude = new Marketing Cloud_List();$listExclude->ID = "12345";
$sendDefListExclude->List = $listExclude;$sendDefListExclude->DataSourceTypeID = "List";
$sendDefListExclude->SendDefinitionListType = "ExclusionList";$emailSendDef->SendDefinitionList[] = $sendDefListExclude;
// Specify the Email To Send
$email = new Marketing Cloud_Email();
$email->ID = "12345";$emailSendDef->Email = $email;
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
<?xml version="1.0" encoding="UTF-8"?>
    <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:wsa="http://schemas.xmlsoap.org/ws/2004/08/addressing" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
        <soap:Header>
            <wsa:Action>CreateResponse</wsa:Action>
            <wsa:MessageID>urn:uuid:7e2a4dca-a4ad-4438-9d7a-734b41d17fdb</wsa:MessageID>
            <wsa:RelatesTo>urn:uuid:ffdf04bc-9bf4-4c72-8f4b-91a1c18f454e</wsa:RelatesTo>
            <wsa:To>http://schemas.xmlsoap.org/ws/2004/08/addressing/role/anonymous</wsa:To>
            <wsse:Security>
                <wsu:Timestamp wsu:Id="Timestamp-6d614a6e-9a84-4680-b6c7-fb8cdc353e9d">
                    <wsu:Created>2011-07-12T15:13:12Z</wsu:Created>
                    <wsu:Expires>2011-07-12T15:18:12Z</wsu:Expires>
                </wsu:Timestamp>
            </wsse:Security>
        </soap:Header>
        <soap:Body>
            <CreateResponse xmlns="http://exacttarget.com/wsdl/partnerAPI">
                <Results>
                    <StatusCode>OK</StatusCode>
                    <StatusMessage>EmailSendDefinition created</StatusMessage>
                    <OrdinalID>0</OrdinalID>
                    <NewID>0</NewID>
                    <NewObjectID>ede30875-99ac-e011-a29b-001cc494c760</NewObjectID>
                    <Object xsi:type="EmailSendDefinition">
                        <ModifiedDate xsi:nil="true"/>
                        <ObjectID>ede30875-99ac-e011-a29b-001cc494c760</ObjectID>
                        <Name>Test</Name>
                        <SendClassification>
                            <ModifiedDate xsi:nil="true"/>
                            <ObjectID xsi:nil="true"/>
                            <CustomerKey>12345</CustomerKey>
                        </SendClassification>
                        <SendDefinitionList>
                            <ModifiedDate xsi:nil="true"/>
                            <ObjectID xsi:nil="true"/>
                            <CustomObjectID>7191221b-7946-e011-b0d5-001cc49493b0</CustomObjectID>
                            <DataSourceTypeID>CustomObject</DataSourceTypeID>
                        </SendDefinitionList>
                        <Email>
                            <ModifiedDate xsi:nil="true"/>
                            <ID>298</ID>
                            <ObjectID xsi:nil="true"/>
                        </Email>
                       <EmailSubject>Test</EmailSubject>
                   </Object>
                </Results>
                <RequestID>82ae03f2-6aca-4d10-8dd2-86f1f208f8c6</RequestID>
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
      <ns1:ModifiedDate xsi:nil="true"/>
      <ns1:ObjectID>12345</ns1:ObjectID>
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
