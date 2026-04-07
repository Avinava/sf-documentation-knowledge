---
title: "Update the Subject and Body of an Email Message"
domain: mc-apis
topic: update-the-subject-and-body-of-an-email-message
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:25.745Z
estimatedTokens: 870
keywords: [Subject, Email, Message, updating, line, via, SOAP, API, Why, How, toUpdate, Sample, Envelope, PHP, Code]
---

# Update the Subject and Body of an Email Message

> This page contains information  about updating the subject line and body of an email message via the SOAP API.

# Update the Subject and Body of an Email Message

Marketing Cloud has a new model for storing, finding, managing, creating, sharing, and distributing all content-related objects. Access the objects created with the new Content Builder tools using the REST API. Your existing SOAP API integrations only function with the Classic tools in Marketing Cloud.

This page contains information about updating the subject line and body of an email message via the SOAP API.

## Why Update the Subject and Body of an Email Message

Using the information in this document, you can update your email messages to contain any changes or updates you may require. Using the SOAP API allows you to update this information programmatically and avoid manual contact with your code.

## How toUpdate the Subject and Body of an Email Message

Use the sample code below as a model for your own call.

### Sample SOAP Envelope

```
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <soapenv:Header>
      <wsse:Security soapenv:mustUnderstand="1" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
         <wsse:UsernameToken wsu:Id="UsernameToken-8891751" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
            <wsse:Username>XXXXX</wsse:Username>
            <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">XXXXX</wsse:Password>
         </wsse:UsernameToken>
      </wsse:Security>
   </soapenv:Header>
   <soapenv:Body>
      <UpdateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
         <Options/>
         <Objects xsi:type="ns1:Email" xmlns:ns1="http://exacttarget.com/wsdl/partnerAPI">
            <ID>12345</ID>
            <Subject>UPDATED SUBJECT LINE</Subject>
            <HTMLBody><![CDATA[<html><body><table><tr><td>UPDATED BODY CONTENT</td></tr></table></br><a href="http://www.example.com">UPDATED BODY LINK<a/></br>ADDITIONAL UPDATED BODY CONTENT</body></html>]]></HTMLBody>
         </Objects>
      </UpdateRequest>
   </soapenv:Body>
</soapenv:Envelope>
```

### Sample PHP Code

```
<?php
require('exacttarget_soap_client.php');
$wsdl = 'https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/etframework.wsdl';
try          {
            /* Create the Soap Client */
            $client = new Marketing CloudSoapClient($wsdl, array('trace'=>1));
            /* Set username and password here */
            $client->username = 'xxx';
            $client->password = 'xxx';

                $email = new Marketing Cloud_Email();
                $email->Name = 'Name of Email';
                $email->ID = 'EmailID';
                $email->HTMLBody = 'Example Updated HTML Body';
                $email->Subject = 'Updated Test Subject';

                $object = new SoapVar($email, SOAP_ENC_OBJECT, 'Email', 'http://exacttarget.com/wsdl/partnerAPI');
                $request = new Marketing Cloud_UpdateRequest();
                $request->Options = NULL;
                $request->Objects = array($object);
                $results = $client->Update($request);
                var_dump($results);
} catch (SoapFault $e) {
      var_dump($e);
}
?>
```

## Related Items

[REST API](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/content-api.htm)
