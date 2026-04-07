---
title: "Create a Data Extension Using an Existing Template"
domain: mc-apis
topic: create-a-data-extension-using-an-existing-template
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:20.970Z
estimatedTokens: 2439
keywords: [Data, Extension, Template, creating, Why, How, Sample, PHP, Code, Retrieve, Templates, SOAP, Envelope]
---

# Create a Data Extension Using an Existing Template

> This page contains information  about creating a data extension using an existing data extension template.

# Create a Data Extension Using an Existing Template

This page contains information about creating a data extension using an existing data extension template.

## Why Create a Data Extension Using an Existing Template

Because the data extension templates already exist, you can easily create the data extension for a specified use without outlining every necessary column and specification. This speeds your development time and ensures all correct information makes it into your data extension.

## How to Create a Data Extension Using an Existing Template

Use the sample code below as a model for your own API call. Use the following SOAP envelope to retrieve all data extension templates available to your account:

### Sample PHP Code - Retrieve Available Data Extension Templates

```
<?php
require('exacttarget_soap_client.php');
$wsdl = 'https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/etframework.wsdl';

try {

        /* Create the Soap Client */
        $client = new Marketing CloudSoapClient($wsdl, array('trace'=>1));

        /* Set username and password here */
        $client->username = '&lt;username>';
        $client->password = '&lt;password>';

        /* Create the retrieve request */
        $request = new Marketing Cloud_RetrieveRequest();
        $objectType= "DataExtensionTemplate";
        $request->ObjectType= $objectType;

        $request->Properties=array("Name", "ObjectID")  ;   //Get all properties of object

        /* Create the filter to filter out the data extension we want */
        $filter1 = new Marketing Cloud_SimpleFilterPart() ;
        $filter1->Property= "Name";
        $filter1->SimpleOperator=ExactTarget_SimpleOperators::equals;
        $filter1->Value=array("SmsSend");   //key for the data extension
        /* Attach the filter to the request */
        $request->Filter = new SoapVar($filter1, SOAP_ENC_OBJECT, 'SimpleFilterPart', "http://exacttarget.com/wsdl/partnerAPI");
        /* Retrieve */
        $requestMsg = new Marketing Cloud_RetrieveRequestMsg();
        $requestMsg->RetrieveRequest=$request;
        $results = $client->Retrieve($requestMsg);

        /* Print out the results */
        if($results->Results!=null){
            $resultObjs=$results->Results;
        if (count($resultObjs) == 1) {
                print "Name ::: "   .$resultObjs->Name   ."
";
                print "ObjectID ::: "     .$resultObjs->ObjectID   ."
";
        }
        else {
            foreach( $resultObjs as $obj ){
                print "Name ::: "   .$obj->Name   ."
";
                print "ObjectID ::: "     .$obj->ObjectID   ."
";
            }
}
        }

  } catch (SoapFault $e) {
    /* output the resulting SoapFault upon an error */
    var_dump($e);
}
// Output the request and response
print "Request:
".   $client->__getLastRequestHeaders() ."
";
print "Request:
".
$client->__getLastRequest() ."
";
print "Response:
".
$client->__getLastResponseHeaders()."
";
print "Response:
".
$client->__getLastResponse()."
";
?>
```

### Sample SOAP Envelope - Retrieve Available Data Extension Templates

```
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <soapenv:Header>
      <wsse:Security soapenv:mustUnderstand="1" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
         <wsse:UsernameToken wsu:Id="UsernameToken-11893489" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
            <wsse:Username>www</wsse:Username>
            <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">www</wsse:Password>
         </wsse:UsernameToken>
      </wsse:Security>
   </soapenv:Header>
   <soapenv:Body>
      <RetrieveRequestMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">
         <RetrieveRequest>
            <ObjectType>DataExtensionTemplate</ObjectType>
            <Properties>ObjectID</Properties>
            <Properties>CustomerKey</Properties>
            <Properties>Name</Properties>
            <Properties>CreatedDate</Properties>
            <Properties>ModifiedDate</Properties>
            <Properties>Client.ID</Properties>
            <Properties>Description</Properties>
            <Properties>IsSendable</Properties>
            <Properties>IsTestable</Properties>
            <Properties>SendableCustomObjectField</Properties>
            <Properties>SendableSubscriberField</Properties>
            <Properties>DataRetentionPeriodLength</Properties>
            <Properties>DataRetentionPeriodUnitOfMeasure</Properties>
            <Properties>RowBasedRetention</Properties>
            <Properties>ResetRetentionPeriodOnImport</Properties>
            <Properties>DeleteAtEndOfRetentionPeriod</Properties>
            <Properties>RetainUntil</Properties>
         </RetrieveRequest>
      </RetrieveRequestMsg>
   </soapenv:Body>
</soapenv:Envelope>
```

### Sample PHP Code - Create a Data Extension from a Template

```
<?php
require('exacttarget_soap_client.php');
$wsdl = 'https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/etframework.wsdl';
try    {
        /* Create the Soap Client */
        $client = new Marketing CloudSoapClient($wsdl, array('trace'=>1));
        /* Set username and password here */
        $client->username = '&lt;username>';
        $client->password = '&lt;password>';

        /* define the data extension */
        $dataextension = new Marketing Cloud_DataExtension();
        $dataextension->Name = "API Created Data Extension - Sendable"; // name of the data extension
        $dataextension->CustomerKey = "API Created Data Extension - Sendable"; // unique identifier for the data extension

        /* set the data extension to be sendable */
        $dataextension->IsSendable = "True";

        $template = new Marketing Cloud_DataExtensionTemplate();
        $template->ObjectID = "30e48b7e-f8d6-df11-8681-00237d54d2e0";
        $dataextension->Template = $template;

        /* set it so that the data extension fields EmailAddress maps to attribute Subscriber Key */
        //$dataextension->SendableDataExtensionField = new Marketing Cloud_DataExtensionField();
        //$dataextension->SendableDataExtensionField->Name = "EmailAddress";
        //$dataextension->SendableSubscriberField  = new Marketing Cloud_Attribute();
        //$dataextension->SendableSubscriberField ->Name = "Subscriber Key"; /* This could be Email Address or Subscriber ID */

        $object = new SoapVar($dataextension, SOAP_ENC_OBJECT, 'DataExtension', "http://exacttarget.com/wsdl/partnerAPI");
        /* create the data extension */
        $request = new Marketing Cloud_CreateRequest();
        $request->Options = NULL;
        $request->Objects = array($object);
        $results = $client->Create($request);
        /* output the results */
        echo '&lt;pre>';
        var_dump($results);
        echo '&lt;/pre>';
} catch (SoapFault $e) {
    var_dump($e);
}
?>
```

### Sample SOAP Envelope - Create a Data Extension from a Template

This SOAP envelope creates a data extension using the TriggeredSendDataExtension envelope.

```
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <soapenv:Header>
        <wsse:Security soapenv:mustUnderstand="1" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
            <wsse:UsernameToken wsu:Id="UsernameToken-5501096" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
                <wsse:Username>XXX</wsse:Username>
                <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">XXX</wsse:Password>
            </wsse:UsernameToken>
        </wsse:Security>
    </soapenv:Header>
    <soapenv:Body>
        <CreateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
            <Options />
            <Objects xsi:type="ns1:DataExtension" xmlns:ns1="http://exacttarget.com/wsdl/partnerAPI">
                <Name>FromAPI_3</Name>
                <SendableDataExtensionField>
                    <Name>EmailAddress</Name>
                    <FieldType>Text</FieldType>
                </SendableDataExtensionField>
                <SendableSubscriberField>
                    <Name>EmailAddress</Name>
                    <Value />
                </SendableSubscriberField>
                <Template>
                    <ObjectID>123456</ObjectID>
                </Template>
                <Fields>
                    <Field>
                        <CustomerKey>Namet_Key</CustomerKey>
                        <Name>Name</Name>
                        <FieldType>Text</FieldType>
                    </Field>
                    <Field>
                        <CustomerKey>HTMLContent_Key</CustomerKey>
                        <Name>HTMLContent</Name>
                        <MaxLength>4000</MaxLength>
                    </Field>
                </Fields>
            </Objects>
        </CreateRequest>
    </soapenv:Body>
</soapenv:Envelope>
```

While you can create a data extension with an external key larger than 36 characters, doing so may cause problems when using the data extension in conjunction with other processes (especially if working with the UI, which truncates the external key to the first 36 characters). Be sure to limit your data extension external keys to 36 characters to help ensure all further processes function correctly.
