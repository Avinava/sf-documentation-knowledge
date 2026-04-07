---
title: "Create a Triggered Send Definition"
domain: mc-apis
topic: create-a-triggered-send-definition
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:16.238Z
estimatedTokens: 2355
keywords: [Triggered, Send, Definition, documentation, managed, Email, Studio, transactional, messaging, REST, API, review, Why, How, Sample, NET, Code, Ruby, Rails, Java, Axis, 1.4, 2.0, PHP, SOAP, Envelope, Items]
---

> This documentation applies only to triggered sends that are managed in Email Studio. To use the transactional messaging REST API, review Transactional Messaging API.

# Create a Triggered Send Definition

> This documentation applies only to triggered sends that are managed in Email Studio. To use the transactional messaging REST API, review [Transactional Messaging API](https://developer.salesforce.com/docs/atlas.en-us.noversion.mc-apis.meta/mc-apis/transactional-messaging-api.htm).
>
> You can create up to 500 total email triggered send definitions plus email transactional send definitions in a seven-day period for one business unit. This limit applies to send definitions created in the Marketing Cloud application and via API. It doesn’t apply to the Journey Builder email activity triggered send definition.

## Why Create a Triggered Send Definition

You can create a triggered send definition to be referenced by your external application or development environment to send a predetermined message to subscribers that complete a certain action, such as signing up on your email list or requesting more information. Reference the triggered send definition in your triggered send request.

### How To Create a Triggered Send Definition

Use the sample code below as a model for creating your own API call.

When you update a triggered send definition via the SOAP API with the Email object, you must set the EmailSubject property on the triggered send definition. If you don't pass the new subject to the triggered send definition, it retains the old subject for that definition.

### Sample .NET Code

```apex
/**
* Code showing how to create Triggered Send Definition in Main/Sub-Account
*/
public void createTriggeredSendDefinition()
        {
            TriggeredSendDefinition definition = new TriggeredSendDefinition();
            definition.Name = "Definition_Name";
            definition.CustomerKey = "Definition_Key"; //this is Unique identifier
            //RetrieveEmail or if you know Id sepcify here
            Email email = new Email();
            email.ID = 12312;
            email.IDSpecified = true;
            definition.Email = email;
            definition.TriggeredSendStatus = TriggeredSendStatusEnum.New;
            //Tells system that it is new, to make it active we need to set it to Active
            definition.SendClassification = retrieveSendClassifications();
            /** Use this if you are creating Object in Sub-Account */
            ClientID clientID = new ClientID();
            clientID.PartnerClientKey = "partnerkey_subaccount_2"; //this is sub-accounts partner-key
            //Tell system to create this definition in Sub-account
            definition.Client = clientID;
            definition.IsMultipart = true;
            definition.IsMultipartSpecified = true;
            APIObject[] createObjects = { definition };
            String requestId = null;
            String overallStatus = null;
            CreateResult[] results =
                soapClient.Create(new CreateOptions(), createObjects, out requestId, out overallStatus);
            Console.Write("Results ::: " + overallStatus);
            //Will only return success or failure.
        }
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
#Subscriber Object Create
subObjs = []
date = Date.today.strftime("%m/%d/%Y")
5.times do |i|
  email = "api-test-#{i}37@bh.exacttarget.com"
  subkey = "api-test#{i}37"
  subObjs.push(Subscriber.new(nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,email,[Attribute.new('Gender','M'),Attribute.new('AddedOn',date)],subkey))
end
apiObj = subObjs
resp = $driver.create(CreateRequest.new(options,[*apiObj]))
```

### Sample Java Code (Axis 1.4)

```apex
public void testCreateTriggeredSendDefinition() throws RemoteException {
        Soap stub = init();
        TriggeredSendDefinition definition = new TriggeredSendDefinition();
        definition.setName("MyFirst_TSD");
        definition.setCustomerKey("First_TSDef_Key"); //this is Unique identifier
        //RetrieveEmail or if you defined email with partnerkey you can pull like this
        Email email = retrieveEmail(stub);
        definition.setEmail(email);
        definition.setTriggeredSendStatus(TriggeredSendStatusEnum.New);
        //Tells system that it is new, to make it active we need to set it to Active
        definition.setSendClassification(retrieveSendClassifications(stub));
        /*ClientID clientID = new ClientID();
        clientID.setPartnerClientKey("partnerkey_subaccount_2"); //this is sub-accounts partner-key
        //Tell system to create this definition in Sub-account
        definition.setClient(clientID);*/
        definition.setIsMultipart(true);
        /*ClientID clientID = new ClientID();
        clientID.setPartnerClientKey("partnerKey");*/
        CreateRequest createRequest = new CreateRequest();
        createRequest.setOptions(new CreateOptions());
        APIObject[] createObjects = {definition};
        createRequest.setObjects(createObjects);
        CreateResponse createResponse = stub.create(createRequest);
        if (createResponse != null) {
            System.out.println(" createResponse:::Response ::: " + createResponse.getOverallStatus());
        } else {
            System.out.println(" Error .......  ");
        }
    }
```

### Sample Java Code (Axis 2.0)

```apex
private static void TriggeredSend(PartnerAPIStub stub) {
        try {
            TriggeredSendDefinition Tdef = TriggeredSendDefinition.Factory.newInstance();
            Tdef.setCustomerKey("TriggerExternalKey");
            TriggeredSend triggeredSend = TriggeredSend.Factory.newInstance();
            Subscriber subscriber1 = Subscriber.Factory.newInstance();
            subscriber1.setEmailAddress("help@example.com");
            subscriber1.setSubscriberKey("help@example.com");
            Attribute attribute1 = Attribute.Factory.newInstance();
            //Send-time attribute name
            attribute1.setName("HTML__BODY");
            attribute1.setValue("<html><b>THIS IS A TEST</b></html>");
            Attribute attribute1a = Attribute.Factory.newInstance();
            attribute1a.setName("Subject");
            attribute1a.setValue("Check out this subject!!!");
            subscriber1.setAttributesArray(new Attribute[]{attribute1, attribute1a});
            triggeredSend.setSubscribersArray(new Subscriber[]{subscriber1});
            triggeredSend.setTriggeredSendDefinition(Tdef);
            CreateOptions createOptions = CreateOptions.Factory.newInstance();
            CreateRequestDocument createRequestDocument = CreateRequestDocument.Factory.newInstance();
            CreateRequestDocument.CreateRequest createRequest = CreateRequestDocument.CreateRequest.Factory.newInstance();
            createRequest.setObjectsArray(new APIObject[]{triggeredSend});
            createRequest.setOptions(createOptions);
            createRequestDocument.setCreateRequest(createRequest);
            CreateResponseDocument responseDoc = stub.Create(createRequestDocument);
    CreateResponse cr = responseDoc.getCreateResponse();
    System.out.println("Create Result: " + cr.getOverallStatus());
        }
        catch (RemoteException e) {
            e.printStackTrace();
        }
        catch (Exception e) {
            e.printStackTrace();
        }
        }
```

### Sample PHP Code

Use the SDK examples from the PHP SDK for your PHP code.

### Sample SOAP Envelope

```
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <soapenv:Header>
      <wsse:Security soapenv:mustUnderstand="1" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
         <wsse:UsernameToken wsu:Id="UsernameToken-33340097" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
            <wsse:Username>XXXXX</wsse:Username>
            <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">XXXXX</wsse:Password>
         </wsse:UsernameToken>
      </wsse:Security>
   </soapenv:Header>
   <soapenv:Body>
      <CreateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
         <Options/>
         <Objects xsi:type="TriggeredSendDefinition">
            <PartnerKey xsi:nil="true"/>
            <ObjectID xsi:nil="true"/>
            <CustomerKey>TSD</CustomerKey>
            <Name>TSD</Name>
            <SendClassification>
               <PartnerKey xsi:nil="true"/>
               <CustomerKey>12345</CustomerKey>
               <ObjectID xsi:nil="true"/>
            </SendClassification>
            <Email>
               <PartnerKey xsi:nil="true"/>
               <ObjectID xsi:nil="true"/>
               <ID>123456</ID>
            </Email>
            <SendSourceDataExtension>
               <CustomerKey>EmptyTriggeredSendDE</CustomerKey>
            </SendSourceDataExtension>
         </Objects>
      </CreateRequest>
   </soapenv:Body>
</soapenv:Envelope>
```

## Related Items

-   [Triggered Emails](https://help.salesforce.com/articleView?id=mc_es_triggered_emails.htm&type=5)
-   [PHP SDK](https://github.com/salesforce-marketingcloud/FuelSDK-PHP)
