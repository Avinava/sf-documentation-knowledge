---
title: "Create an Email"
domain: mc-apis
topic: create-an-email
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:21.129Z
estimatedTokens: 310
keywords: [Email, scenario, how, message, SOAP, API, instance, including, either, HTML, text-only, content, provided, Diagram, Objects, Why, How, Sample, NET, Code]
---

# Create an Email

> This page contains information  about using the SOAP API to create an email message.

# Create an Email

Marketing Cloud has a new model for storing, finding, managing, creating, sharing, and distributing all content-related objects. Access the objects created with the new Content Builder tools using the REST API. Your existing SOAP API integrations only function with the Classic tools in Marketing Cloud.

This page contains information about using the SOAP API to create an email message.

## Why Create an Email

By using the SOAP API to create your email, you can integrate the process of creating an email with your system or development environment. This allows you to create email messages outside of Marketing Cloud.

## How To Create an Email

Use the sample code below as a model to construct your own email creation call:

### Sample .NET Code

```
// Create e-mail object
            // We do this separately so that the results of the e-mail creation can
            // be reported clearly back to caller.
            Email email = new Email();
            email.Subject = "Check out my way cool email";
            email.Name = "Dynamic Email_" + DateTime.Now.ToShortTimeString();
            email.HTMLBody = "<center>##Way Cool Email</center>";
            email.TextBody = "Way Cool Email";
            email.CharacterSet = "iso-8859-1";
            email.CategoryID = 556442;  //This is the Folder where the email is stored.
                                          //Get the Category ID by hovering over the folder in the account and looking at the CID= in the URL at the bottom.
            email.CategoryIDSpecified = true; //Not sure this is needed for PHP, but is needed for .Net
            CreateResult[] results = proxy.Create(new CreateOptions(), new APIObject[] { email }, out requestID, out status);
```

### Sample Java Code (Axis 1.4)

```apex
public void testCreateEmail() throws RemoteException {
        Email email = new Email();
        email.setStatus("Test Email with Content Areas");
        email.setName("Test Email with Content Areas");
        email.setSubject("email subject line");
        email.setCharacterSet("UTF-8");
        email.setHTMLBody("<html><body><custom type="content" name="cell1"></body></html>");
        ContentArea contentArea = new ContentArea();
        contentArea.setKey("cell1");
        contentArea.setContent("%%[ var @maintenance_items, @recallrows, @recallstring , @MOP_DESC1]%%
" +
                "%%[if trim(MOP_DESC1) != "" then]%%%%MOP_DESC1%%");
        email.setContentAreas(new ContentArea[]{contentArea});
        Soap stub = init();
          //  email.setIsHTMLPaste();
        CreateRequest createRequest = new CreateRequest();
        createRequest.setObjects(new APIObject[]{email});
        createRequest.setOptions(new CreateOptions());
        CreateResponse results = stub.create(createRequest);
        System.out.println("results :: " + results.getOverallStatus());
    }
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
                $email->Name = 'Test Email';
                $email->Description = 'Test Email';
                $email->HTMLBody = 'Example HTML Body';
                $email->Subject = 'Test Subject';
                $email->EmailType = 'HTML';
                $email->IsHTMLPaste = 'true';

                $object = new SoapVar($email, SOAP_ENC_OBJECT, 'Email', "http://exacttarget.com/wsdl/partnerAPI");
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
<%#Async create options%>
<%#options = CreateOptions.new(nil,nil,nil,nil,nil,nil,nil,nil,'Asynchronous')%>
options = nil
footer = "<table cellpadding='2' cellspacing='0' width='600' border='0' align='center'><tr><td valign='top' align='left' style='line-height: 16px;'><p><font face='verdana' size='1' color='#777777'>This email was sent to:  <b>%%emailaddr%%</b><br /><a href='%%subscription_center_url%%' alias='Manage Subscriptions'>Manage Subscriptions</a> | <a href='%%profile_center_url%%' alias='Update Profile'>Update Profile</a> | <a href='%%unsub_center_url%%' alias='Unsubscribe'>One-Click Unsubscribe</a></p><p>This email was sent by: <b>%%Member_Busname%%</b><br />%%Member_Addr%% %%Member_City%%, %%Member_State%% %%Member_PostalCode%% %%Member_Country%%</p><p>We respect your right to privacy - <a href='http://email.exacttarget.com/ETWeb/company.aspx?id=80' alias='View Privacy Policy' style='color: #0000ff'>view our policy</a></p></font></td><td width='145' align='right' valign='center'><a href='http://www.exacttarget.com' title='This email is Powered By Marketing Cloud' alias='Powered By'><img src='http://email.exacttarget.com/images/Powered_By_1206.jpg' width='124' height='55' alt='This email is Powered By Marketing Cloud' border='0' /></a></td></tr></table>"
Params = {
  :CustomerKey => "API-Test-9",
  :Name => "API-Test-9",
  :ID => nil,
  :ClonedFromID => 2723760,
  :Subject => "Thank you for subscribing",
  :HTMLBody => "<table width="600" cellpadding="0" cellspacing="0" border="0" align="center" style="border-top: 1px solid #CCC; border-bottom: 1px solid #CCC; padding: 16px 0;"><tbody><tr><td align="left"><p>Now is the time for all good men to come to the aid of their country.</p><p>Now is the time for all good men to come to the aid of their country.</p><p>Now is the time for all good men to come to the aid of their country.</p><p>Now is the time for all good men to come to the aid of their country.</p><p>Now is the time for all good men to come to the aid of their country.</p></td></tr><tr><td align="left"><custom type="content" name="cell2"></custom></td></tr></tbody></table><custom name="opencounter" type="tracking"></custom>" + footer
}
emailObj = Email.new(nil,nil,nil,nil,nil,Params[:ID],nil,Params[:CustomerKey],nil,nil,Params[:Name],nil,nil,Params[:HTMLBody],Params[:HTMLBody].gsub(/<\/?[^>]*>/,""),nil,Params[:Subject],nil,1)
apiObj = emailObj
resp = $driver.create(CreateRequest.new(options,[*apiObj]))
```

### Sample SOAP Envelope

```
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:wsa="http://schemas.xmlsoap.org/ws/2004/08/addressing" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
   <soap:Header>
      <wsa:Action>Create</wsa:Action>
      <wsa:MessageID>urn:uuid:0caa9e7d-bd29-4dab-b268-668343be00bd</wsa:MessageID>
      <wsa:ReplyTo>
         <wsa:Address>http://schemas.xmlsoap.org/ws/2004/08/addressing/role/anonymous</wsa:Address>
      </wsa:ReplyTo>
      <wsa:To>https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/Service.asmx</wsa:To>
      <wsse:Security soap:mustUnderstand="1">
         <wsse:UsernameToken wsu:Id="SecurityToken-8ab9d52b-cf40-465b-9464-1a7c7f000460">
            <wsse:Username>XXXX</wsse:Username>
            <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">XXXX</wsse:Password>
         </wsse:UsernameToken>
      </wsse:Security>
   </soap:Header>
   <soap:Body>
      <CreateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
         <Options/>
         <Objects xsi:type="Email">
            <Client>
                <ID>12345678</ID>
                <UserID>12345678</UserID>
            </Client>
            <ObjectID xsi:nil="true"/>
            <Name>Test Email with Content Areas</Name>
            <Description>Description</Description>
            <HTMLBody>Example HTML Body</HTMLBody>
            <Subject>Test Subject</Subject>
            <EmailType>HTML</EmailType>
            <IsHTMLPaste>true</IsHTMLPaste>
         </Objects>
      </CreateRequest>
   </soap:Body>
```

If you want to include dynamic content in your email messages, use AMPscript to dynamically assign content. You cannot create content areas containing dynamic script via the SOAP API.

## Related Items

-   [REST API](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/content-api.htm)
-   [Creating, Building, and Maintaining Emails](https://help.salesforce.com/articleView?id=mc_es_create_an_email.htm&type=5)
-   [AMPscript](https://developer.salesforce.com/docs/atlas.en-us.mc-programmatic-content.meta/mc-programmatic-content/index.htm)

## Related Topics

- Email (atlas.en-us.noversion.mc-apis.meta/mc-apis/email.htm)
- Create an Email (atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_an_email_via_the_web_service_api.htm)
- Create a Text-Only Email (atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_a_text_only_email_via_the_web_service_api.htm)
- Create Method (atlas.en-us.noversion.mc-apis.meta/mc-apis/create.htm)
