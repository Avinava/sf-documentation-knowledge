---
title: "Perform an Import without an Existing Import Definition"
domain: mc-apis
topic: perform-an-import-without-an-existing-import-definition
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:18.122Z
estimatedTokens: 1773
keywords: [Perform, Import, Definition, performing, SOAP, API, creating, Why, How, Sample, NET, Code, PHP, Envelope]
---

> This page contains information about performing an import using the SOAP API without first creating an import definition.

# Perform an Import without an Existing Import Definition

This page contains information about performing an import using the SOAP API without first creating an import definition.

## Why Perform an Import without an Existing Import Definition

The sample code below allows you to create an import definition at the time of the import, so you don't have to rely on an existing import definition to perform the import. By specifying the information at the time of the import, you can customize your code to the needs of the import. You can only use this import method to import information to a data extension.

## How to Perform an Import without an Existing Import Definition

Use the sample code below as a model for your own API call.

### Sample .NET Code

```apex
// Intialize variables
String requestID;
String status;
String message;
String error;
// Create the ImportDefinition
ImportDefinition id = new ImportDefinition();
id.Name = "Web Service Created Import Definition during Perform";
id.Description = "This import defition was created through the API.";
id.AllowErrors = true;
id.AllowErrorsSpecified = true;
id.UpdateType = ImportDefinitionUpdateType.AddAndUpdate;
id.UpdateTypeSpecified = true;
DataExtension de = new DataExtension();
de.CustomerKey = "Connections";
id.DestinationObject = de;
// Specify the notification type (optional)
id.Notification = new AsyncResponse();
id.Notification.ResponseType = AsyncResponseType.Email;
id.Notification.ResponseAddress = "aruiz@example.com";
// Specify the File Transfer Location (where is the file coming from?) (required)
id.RetrieveFileTransferLocation = new FileTransferLocation();
id.RetrieveFileTransferLocation.CustomerKey = "ExactTarget Enhanced FTP";
// Map fields (required)
id.FieldMappingType = ImportDefinitionFieldMappingType.InferFromColumnHeadings;
id.FieldMappingTypeSpecified = true;
// Specify the File naming Specifications
id.FileSpec = "ConnectionsLeads.csv";
// Specify the FileType
id.FileType = FileType.CSV;
id.FileTypeSpecified = true;
// Start the import
PerformResult[] results = proxy.Perform(po, "start", new InteractionBaseObject[] { id },
    out status, out message, out requestID);
System.Text.StringBuilder sb = new System.Text.StringBuilder();
sb.Append("Execute Import");
sb.AppendFormat("
Overall result: {0}. RequestID: {1}", status, requestID);
```

### Sample PHP Code

```
<?php
require('exacttarget_soap_client.php');
$wsdl = 'https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/etframework.wsdl';
try {
        /* Create the Soap Client */
        $client = new Marketing CloudSoapClient($wsdl, array('trace'=>1));
        /* Set username and password here */
        $client->password = 'XXXXX';
        $client->username = 'XXXXX';
        $pr = new Marketing Cloud_PerformRequestMsg();
        $pr->Action = "start";
        $pr->Definitions =  array();

  $def = new Marketing Cloud_ImportDefinition();
  $def->Name = "Web Service Created Import Definition during Perform";
  $def->Description = "This import definition was created through the API.";
    $def->AllowErrors = true;

  $def->UpdateType = Marketing Cloud_ImportDefinitionUpdateType::AddAndUpdate;
  $def->MaxFileAge = "1";
  $def->MaxFileAgeScheduleOffset = "0";
  $def->MaxImportFrequency = "0";

  $de = new Marketing Cloud_DataExtension();
  $de->CustomerKey = "testdatextension 2";
  $def->DestinationObject = new SoapVar($de, SOAP_ENC_OBJECT, 'DataExtension', "http://exacttarget.com/wsdl/partnerAPI");

  $ar = new Marketing Cloud_AsyncResponse();
  $ar->ResponseType = Marketing Cloud_AsyncResponseType::email;
  $ar->ResponseAddress = "help@example.com";
  $def->Notification = $ar;

  $ftl= new Marketing Cloud_FileTransferLocation();
  $ftl->CustomerKey  = "ExactTarget Enhanced FTP";
  $def->RetrieveFileTransferLocation  = $ftl;

  $def->FieldMappingType  = Marketing Cloud_ImportDefinitionFieldMappingType::InferFromColumnHeadings;
  $def->FileSpec = "TestEmails.csv";
  $def->FileType = Marketing Cloud_FileType::CSV;

  $pr->Definitions[] = new SoapVar($def, SOAP_ENC_OBJECT, 'ImportDefinition', "http://exacttarget.com/wsdl/partnerAPI");

        $pr->Options = NULL;

        $results = $client->Perform($pr);

  var_dump($results);
} catch (SoapFault $e) {
 var_dump($e);
}
?>
```

### Sample SOAP Envelope

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
            <wsse:Username>xxx</wsse:Username>
            <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">xxx</wsse:Password>
         </wsse:UsernameToken>
      </wsse:Security>
   </soap:Header>
   <soap:Body>
      <PerformRequestMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">
         <Action>start</Action>
         <Definitions>
            <Definition xsi:type="ImportDefinition" xmlns:ns1="http://exacttarget.com/wsdl/partnerAPI">
               <Name>Web Service Created Import Definition during Perform</Name>
               <Description>This import definition was created through the API.</Description>
               <AllowErrors>true</AllowErrors>
               <SubscriberImportType>Email</SubscriberImportType>
               <UpdateType>AddAndUpdate</UpdateType>
               <MaxFileAge>1</MaxFileAge>
               <MaxFileAgeScheduleOffset>0</MaxFileAgeScheduleOffset>
               <MaxImportFrequency>0</MaxImportFrequency>
               <DestinationObject xsi:type="DataExtension">
                  <ObjectID>12345</ObjectID>
                  <CustomerKey>testdatextension 2</CustomerKey>
               </DestinationObject>
               <FieldMappingType>InferFromColumnHeadings</FieldMappingType>
               <FileSpec>TestEmails.csv</FileSpec>
               <FileType>CSV</FileType>
               <Notification>
                  <ResponseType>email</ResponseType>
                  <ResponseAddress>aruiz@example.com</ResponseAddress>
               </Notification>
               <RetrieveFileTransferLocation>
                  <CustomerKey>ExactTarget Enhanced FTP</CustomerKey>
               </RetrieveFileTransferLocation>
            </Definition>
         </Definitions>
      </PerformRequestMsg>
   </soap:Body>
</soap:Envelope>
```
