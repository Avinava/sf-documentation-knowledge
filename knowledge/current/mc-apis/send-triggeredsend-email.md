---
title: "Send TriggeredSend Email"
domain: mc-apis
topic: send-triggeredsend-email
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:24.968Z
estimatedTokens: 1621
keywords: [Send, TriggeredSend, Email, triggered, reach, subscriber, they, perform, specific, action, Sample, NET, Code, PHP, Java]
---

# Send TriggeredSend Email

> Use a triggered send to reach a subscriber after they perform a specific action.

# Send TriggeredSend Email

Use a triggered send to reach a subscriber after they perform a specific action.

### Sample .NET Code

```apex
/**
* Use this code to send triggered email to subscriber
*/
public void testTriggeredSendEmail()
        {
            TriggeredSendDefinition definition = new TriggeredSendDefinition();
            definition.CustomerKey = "Definition_Key";

            //subscriber to whom email is sent
            Subscriber subscriber = new Subscriber();
            subscriber.EmailAddress = "aruiz@example.com";
            subscriber.SubscriberKey = "aruiz@example.com";
            TriggeredSend send = new TriggeredSend();

            send.TriggeredSendDefinition = definition;

            //If passing Full HTML_Body, pass value to HTML__Body
            ETServiceClient.ETClient.Attribute attribute1 = new ETServiceClient.ETClient.Attribute();
            attribute1.Name = "HTML__BODY";
            //attribute2.Value = html;
            //set HTML content to Email, Testing foreign language.
            attribute1.Value = "????????????????????";
            subscriber.Attributes = new ETServiceClient.ETClient.Attribute[] { attribute1 }; //set attribute value and assign that to subscriber
            send.Subscribers = new Subscriber[] { subscriber }; //set subscriber to Triggered send
            APIObject[] sends = { send };
            String requestId = null;
            String overAllStatus = null;
            CreateOptions test = new CreateOptions();
            //If you want to send email Asynchronous, enable permission.
            test.RequestType = RequestType.Asynchronous;
             CreateResult[] results = soapClient.Create(new CreateOptions(), sends, out requestId, out overAllStatus);
            Console.Write("Status ::: " + overAllStatus);
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
    /* Set username and password
    *
    *  here */
    $client->username = 'xxx';
    $client->password = 'xxxx';
    $ts = new Marketing Cloud_TriggeredSend();
    $tsd = new Marketing Cloud_TriggeredSendDefinition();
    $tsd->CustomerKey = "thankyou";
    $sub = new Marketing Cloud_Subscriber();    $sub->EmailAddress = "help@example.com";
    $sub->SubscriberKey = "help@example.com";
$LeadType =  new Marketing Cloud_Attribute(); $LeadType->Name = "Lead_Type";  $LeadType->Value = "auto";
$LeadID =  new Marketing Cloud_Attribute();  $LeadID->Name = "Lead_ID";  $LeadID->Value = "999965";
$EmailHash =  new Marketing Cloud_Attribute();  $EmailHash->Name = "Email_Hash";  $EmailHash->Value = "059bfef71d8c83c384f845390191df39fba8941cbcb934abbe5e15a74f25bab3";
$ConsumerFirstName =  new Marketing Cloud_Attribute();  $ConsumerFirstName->Name = "Consumer_First_Name";  $ConsumerFirstName->Value = "Angel";
$ConsumerLastName =  new Marketing Cloud_Attribute();  $ConsumerLastName->Name = "Consumer_Last_Name";  $ConsumerLastName->Value = "Ruiz";
    $sub->Attributes = array($LeadType,$LeadID,$EmailHash,$ConsumerFirstName,$ConsumerLastName);
    $ts->Subscribers = array();
    $ts->Subscribers = $sub;    $ts->TriggeredSendDefinition = $tsd;
    $object = new SoapVar($ts, SOAP_ENC_OBJECT, 'TriggeredSend', "http://exacttarget.com/wsdl/partnerAPI");
    var_dump($object);
    echo "<br><br>";
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

### Sample Java Code (Axis 1.4)

```apex
public void testTriggeredSend () throws RemoteException {

        Soap_PortType stub = init();
        TriggeredSendDefinition sendDefinition = new TriggeredSendDefinition();
        sendDefinition.setCustomerKey("Test_Dynamic_Href");         //this is that External_Key
        TriggeredSend triggeredSend = new TriggeredSend();
        Subscriber subscriber = new Subscriber();
        subscriber.setEmailAddress("acruz@example.com");  //Subscriber to whom email is sent.
        subscriber.setSubscriberKey("Dynamic_Herf");          //Unique identifier for this email_Id
        Attribute attribute = new Attribute();
        attribute.setName("LINK_HREF_1");                    //Attribute in body similar to "HTML__Body"
        // attribute.setName("%%=TREATASCONTENT(HTML_HREF_1)=%%");
        attribute.setValue("<a href='httpgetwrap|http://www.marketingcloud.com' alias='MC'>Dynamic Marketing Cloud Link</a>");
        subscriber.setAttributes(new Attribute[]{attribute});
       /* Owner owner = new Owner();
        owner.setFromName("FromName");       //At run time you change from user and email address
        owner.setFromAddress("example@example.com");
        triggeredSend.setOwner(owner);*/
        triggeredSend.setSubscribers(new Subscriber[]{subscriber});
        triggeredSend.setTriggeredSendDefinition(sendDefinition);
        CreateOptions createOptions = new CreateOptions();
        //createOptions.setRequestType(RequestType.Synchronous);
        CreateRequest createRequest = new CreateRequest(createOptions, new APIObject[]{triggeredSend});
        CreateResponse createResponse = stub.create(createRequest);
        System.out.println("TriggeredSend :::  " + createResponse.getOverallStatus());
}
```

### Sample SOAP Envelope

```
<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance
">
 <Header>
    <fueloauth>YOUR_ACCESS_TOKEN</fueloauth>
 </Header>
 <Body>
   <CreateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
    <Objects xsi:type="TriggeredSend">
      <PartnerKey xsi:nil="true"/>
      <ObjectID xsi:nil="true"/>
      <TriggeredSendDefinition>
       <PartnerKey xsi:nil="true"/>
       <ObjectID xsi:nil="true"/>
       <CustomerKey>Definition_Key</CustomerKey>
      </TriggeredSendDefinition>
      <Subscribers>
       <PartnerKey xsi:nil="true"/>
       <ObjectID xsi:nil="true"/>
       <EmailAddress>aruiz@example.com</EmailAddress>
       <SubscriberKey>aruiz@example.com</SubscriberKey>
       <Attributes>
         <Name>HTML__BODY</Name>
         <Value>????????????????????</Value>
       </Attributes>
      </Subscribers>
    </Objects>
   </CreateRequest>
 </Body>
</Envelope>
```
