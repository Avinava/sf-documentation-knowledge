---
title: "Submit a Triggered Send Definition with Tracking Via HTTPGETWRAP"
domain: mc-apis
topic: submit-a-triggered-send-definition-with-tracking-via-httpgetwrap
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:25.243Z
estimatedTokens: 1283
keywords: [Submit, Triggered, Send, Definition, Tracking, Via, HTTPGETWRAP, submitting, Marketing, Cloud, Why, How, Sample, Code, SOAP]
---

# Submit a Triggered Send Definition with Tracking Via HTTPGETWRAP

> This page contains information  about submitting a triggered send definition that can return tracking information to Marketing Cloud

# Submit a Triggered Send Definition with Tracking Via HTTPGETWRAP

This page contains information about submitting a triggered send definition that can return tracking information to Marketing Cloud

## Why Submit a Triggered Send Definition with Tracking

This function includes a link that can be tracked via normal tracking functionality. By including tracking in your triggered send definition, you can get more information on how subscribers use your triggered sends and modify your email sends to better serve your subscribers and meet your email send needs.

The string "httpgetwrap|" must be before the "http" for the system to track this URL.

## How To Submit a Triggered Send Definition with Tracking

Marketing Cloud recommends using personalization strings in your URLs instead of actual attributes (such as [http://example.com/?userid=%%userid%%](http://example.com/?userid=%%userid%%)) where applicable to ensure correct and accurate processing. Test your triggered sends using this functionality to ensure that you get the best possible send times.

Use the sample code below as a model for submitting your own triggered send definitions with tracking information:

### Sample Code

```
//Create a new Subscriber to send the Trigger to
Subscriber newSub = new Subscriber();
newSub.EmailAddress = txtEmail1.Text;
newSub.SubscriberKey = txtEmail1.Text;
//Create Subscriber Attributes
newSub.Attributes = new Attribute[2];
//Attribute 1
newSub.Attributes[0] = new Attribute();
newSub.Attributes[0].Name = "FromName";
newSub.Attributes[0].Value = "From John Doe";
//Attribute 2 newSub.Attributes[1] = new Attribute();
newSub.Attributes[1].Name = "HTML_Content";
newSub.Attributes[1].Value = "This is a test <a href="httpgetwrap|http://example.com" alias="Google Link">link</a>";
//Create a new Subscriber to send the Trigger to
Subscriber newSub2 = new Subscriber();
newSub2.EmailAddress = txtEmail2.Text;
newSub2.SubscriberKey = txtEmail2.Text;
//Create Subscriber Attributes
newSub2.Attributes = new Attribute[2];
//Attribute 1 newSub2.Attributes[0] = new Attribute();
newSub2.Attributes[0].Name = "FromName";
newSub2.Attributes[0].Value = "From John Doe";
//Attribute 2 newSub2.Attributes[1] = new Attribute();
newSub2.Attributes[1].Name = "HTML_Content";
newSub2.Attributes[1].Value = "This is a test <a href="httpgetwrap|http://example.com" alias="ET Link">link</a>";
//Create a TriggeredSend that uses a pre-created
TriggeredSend ts = new TriggeredSend();
ts.TriggeredSendDefinition = new TriggeredSendDefinition();
ts.TriggeredSendDefinition.CustomerKey = "ETWSEX_TSD";
ts.Subscribers = new Subscriber[] { newSub, newSub2 };
string tsRequestID = ""; string tsStatus = "";
CreateResult[] tsResults = client.Create(new CreateOptions(), new APIObject[] { ts }, out tsRequestID, out tsStatus);
TriggeredSendCreateResult tsCreateResults = tsResults[0] as TriggeredSendCreateResult;
//Check for Error
if (tsStatus != "OK") { throw new Exception(); }
```

### Sample SOAP Envelope

```
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:wsa="http://schemas.xmlsoap.org/ws/2004/08/addressing" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
   <soap:Header>
      <wsa:Action>Create</wsa:Action>
      <wsa:MessageID>urn:uuid:bd9bc23b-42da-4c2e-b4c1-b1e822f520a6</wsa:MessageID>
      <wsa:ReplyTo>
         <wsa:Address>http://schemas.xmlsoap.org/ws/2004/08/addressing/role/anonymous</wsa:Address>
      </wsa:ReplyTo>
      <wsa:To>https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/Service.asmx</wsa:To>
      <wsse:Security soap:mustUnderstand="1">
         <wsse:UsernameToken wsu:Id="SecurityToken-884da619-59bb-4db6-834d-138322342442">
            <wsse:Username>XXXXX</wsse:Username>
            <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">XXXXX</wsse:Password>
         </wsse:UsernameToken>
      </wsse:Security>
   </soap:Header>
   <soap:Body>
      <CreateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
         <Options/>
         <Objects xsi:type="TriggeredSend">
            <ObjectID xsi:nil="true"/>
            <TriggeredSendDefinition>
               <ObjectID xsi:nil="true"/>
               <CustomerKey>Test_Triggered</CustomerKey>
            </TriggeredSendDefinition>
            <Subscribers>
               <ObjectID xsi:nil="true"/>
               <Owner>
                  <Client>
                     <ID>12345</ID>
                  </Client>
               </Owner>
               <EmailAddress>help@exacttarget.com</EmailAddress>
               <SubscriberKey>help@exacttarget.com</SubscriberKey>
            </Subscribers>
         </Objects>
      </CreateRequest>
   </soap:Body>
</soap:Envelope>
```

## Related Items

[Personalization Strings](https://help.salesforce.com/articleView?id=mc_es_personalization_strings.htm&type=5)
