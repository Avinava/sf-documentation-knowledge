---
title: "Create a Subscriber"
domain: mc-apis
topic: create-a-subscriber
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:16.063Z
estimatedTokens: 279
keywords: [Diagram, Subscriber, scenario, how, Marketing, Cloud, via, SOAP, API, instance, account, Once, populate, attributes, Referenced, Items, Why, Sample, Code, NET, PHP, Ruby, Rails, Java, Axis, 1.4, 2.0, CXF, Envelope, Attributes, Behalf]
---

> This page contains information on how to use the Marketing Cloud SOAP API to create a subscriber in your Marketing Cloud account.

# Create a Subscriber

This page contains information on how to use the Marketing Cloud SOAP API to create a subscriber in your Marketing Cloud account.

## Why Use the SOAP API to Create a Subscriber

You can use the SOAP API to automate the addition of subscribers to your Marketing Cloud account as part of activities performed outside of Marketing Cloud. For example, you can use API calls to add subscribers from information gathered from your corporate website.

## How to Use the SOAP API to Create a Subscriber

Create a subscriber through the SOAP API using a create request and the sample code listed below. You can optionally pass in a list as a location to add the subscriber. Otherwise, the subscriber resides on the All Subscribers list.

Follow the steps below to create a subscriber using the SOAP API:

1.  Create a Subscriber object.
2.  Populate the appropriate parameters (leaving ID null), including email address or subscriber key.
3.  Issue a Create request using the SOAP API.

The returned subscriber object includes a populated ID variable (which may be of use in future calls).

The attribute to which you pass values for your new subscriber must already exist.

### Sample Code

Use the sample code below to create a subscriber and create a subscriber with more attributes.

#### Sample .NET Code - Create a Subscriber

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
public partial class SubscriberCreate : System.Web.UI.Page
{
    //Global Variables
    private SoapClient client = new SoapClient();
    protected void Page_Load(object sender, EventArgs e)
    {
        //Authenticate
        client.ClientCredentials.UserName.UserName = System.Configuration.ConfigurationSettings.AppSetting
["wsUserName"];
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
            //Create Subscriber object [Subscribers > My Subscribers > All Subscribers]
            Subscriber sub = new Subscriber();
            sub.SubscriberKey = strGUID;//required //may not be active in all accounts //some choose to set this to email address
            sub.EmailAddress = "tester@example.com";//required
            sub.EmailTypePreference = EmailType.Text;//EmailType.HTML is the default this only needs to be set to override to Text
            sub.EmailTypePreferenceSpecified = true;
            //Create an Array of Lists
            sub.Lists = new SubscriberList[1];//If a list is not specified the Subscriber is added to the "All Subscribers" List
            sub.Lists[0] = new SubscriberList();
            sub.Lists[0].ID = 182857;//Available in the UI via List Properties
            sub.Lists[0].IDSpecified = true;
            //Subscriber Attributes differ per account.  Some may be required to create a Subscriber
            sub.Attributes = new etAPI.Attribute[2];
            sub.Attributes[0] = new etAPI.Attribute();
            sub.Attributes[0].Name = "First Name";
            sub.Attributes[0].Value = "John";
            sub.Attributes[1] = new etAPI.Attribute();
            sub.Attributes[1].Name = "Last Name";
            sub.Attributes[1].Value = "Smith";
            //Create the CreateOptions object for the Create method
            CreateOptions co = new CreateOptions();
            co.SaveOptions = new SaveOption[1];
            co.SaveOptions[0] = new SaveOption();
            co.SaveOptions[0].SaveAction = SaveAction.UpdateAdd;//This sets this call to act as an Upsert, meaning if the Subscriber doesn't exist it creates it. If the Subscriber exists it updates it.
            co.SaveOptions[0].PropertyName = "*";
            try
            {
                string cRequestID = String.Empty;
                string cStatus = String.Empty;
                //Call the Create method on the Subscriber object
                CreateResult[] cResults = client.Create(co, new APIObject[] { sub }, out cRequestID, out cStatus);
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

#### Sample PHP Code

The code below can be used to create a subscriber as well as upsert more attribute information:

```
<?php
require('exacttarget_soap_client.php');
$wsdl = 'https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/etframework.wsdl';
try {
        /* Create the Soap Client */
        $client = new Marketing CloudSoapClient($wsdl, array('trace'=>1));
        /* Set username and password here */
        $client->username = 'xxx';
        $client->password = 'xxx';
        $subscriber = new Marketing Cloud_Subscriber();
        $subscriber->EmailAddress = "help@example.com";
        $subscriber->SubscriberKey = "help@example.com";
        // This section is needed if you are adding a subscriber to a Lock and Publish account using an enterprise API user
        $cl = new Marketing Cloud_ClientID();
        $cl->ID = 123;
        $subscriber->Client = $cl;
        $subscriber->Lists = array();
$ExampleAttribute1 = new Marketing Cloud_Attribute();
        $ExampleAttribute1->Name = "First Name";
        $ExampleAttribute1->Value = "Angel";
        $ExampleAttribute2 = new Marketing Cloud_Attribute();
        $ExampleAttribute2->Name = "Last Name";
        $ExampleAttribute2->Value = "Cruz";
        $subscriber->Attributes=array($ExampleAttribute1,$ExampleAttribute2);
        $list = new Marketing Cloud_SubscriberList();
        $list->ID = "12345"; // This is the ID of the subscriber list
        $subscriber->Lists[] = $list;
        // This is the section needed to define it as an "Upsert"
        $so = new Marketing Cloud_SaveOption();
        $so->PropertyName = "*";
        $so->SaveAction = Marketing Cloud_SaveAction::UpdateAdd;
        $soe = new SoapVar($so, SOAP_ENC_OBJECT, 'SaveOption', "http://exacttarget.com/wsdl/partnerAPI");
        $opts = new Marketing Cloud_UpdateOptions();
        $opts->SaveOptions = array($soe);

        // Below are examples of updating the subscriber status to active or unsub
        //$subscriber->Status = Marketing Cloud_SubscriberStatus::Active;
        //$subscriber->Status = Marketing Cloud_SubscriberStatus::Unsubscribed;
        $object = new SoapVar($subscriber, SOAP_ENC_OBJECT, 'Subscriber', "http://exacttarget.com/wsdl/partnerAPI");

        $request = new Marketing Cloud_CreateRequest();
        $request->Options = $opts;
        $request->Objects = array($object);
        var_dump($request);

        $results = $client->Create($request);
        var_dump($results);
}
catch (SoapFault $e) {
    var_dump($e);
}
?>
```

#### Sample Ruby on Rails Code

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

#### Sample Java Code (Axis 1.4)

```apex
public void testAddSubscriber() throws RemoteException {
  Soap stub = init();
  Subscriber subscriber = new Subscriber();
  subscriber.setEmailAddress("aruiz@example.com");
  subscriber.setSubscriberKey(subscriber.getEmailAddress()); // unique identifier
  subscriber.setStatus(SubscriberStatus.Active);
  Attribute a1 = new Attribute();
  a1.setName("ByAPI");
  a1.setValue("Yes");
  Attribute a2 = new Attribute();
  a2.setName("first_name");
  a2.setValue("Angel");

  subscriber.setAttributes(new Attribute[]{a1, a2});
  APIObject[] apiObjects = {subscriber};
  CreateRequest createRequest = new CreateRequest(new CreateOptions(), apiObjects);
  CreateResponse createResponse = stub.create(createRequest);
  System.out.println("Subscriber created in list ::: " + createResponse.getOverallStatus());
}
```

The sample code below creates a new subscriber if none exists and updates the subscriber if found:

```apex
public void testUpdateDataExtension() throws RemoteException {
        Subscriber subscriber = new Subscriber();
        subscriber.setEmailAddress("aruiz@example.com"); // updating to new email address.
        subscriber.setSubscriberKey("test_Key"); //subscriber unique, cannot update
        /*subscriber.Status = SubscriberStatus.Unsubscribed;
            SubscriberList list = new SubscriberList();
            list.ID = 12345; //List in which subscriber is there
          subscriber.Lists = new SubscriberList[] { list };*/
        Attribute attribute = new Attribute();
        attribute.setName("username");
        attribute.setValue("aruiz");
        subscriber.setAttributes(new Attribute[]{attribute});
        //upsert option, it adds if subscriber is not present or updates if subscriber exists in system
        CreateOptions co = new CreateOptions();
        SaveOption saveOption = new SaveOption();
        saveOption.setSaveAction(SaveAction.UpdateAdd);
        saveOption.setPropertyName("*");
        co.setSaveOptions(new SaveOption[]{saveOption});
        Soap stub = init();
        CreateRequest createRequest = new CreateRequest(co, new APIObject[]{subscriber});
        CreateResponse createResponse = stub.create(createRequest);
        System.out.println("CreateResposne :::: " + createResponse.getOverallStatus());
    }
```

#### Sample Java Code (Axis 2.0)

```apex
private static void CreateSubscriber(PartnerAPIStub stub) {
    try {
    Subscriber subscriber = Subscriber.Factory.newInstance();
    subscriber.setEmailAddress("help@example.com");
    subscriber.setSubscriberKey("help@example.com");
    Attribute attribute1 = Attribute.Factory.newInstance();
    attribute1.setName("First Name");
    attribute1.setValue("Java");
    Attribute attribute1a = Attribute.Factory.newInstance();
    attribute1a.setName("Last Name");
    attribute1a.setValue("Axis2");
    subscriber.setAttributesArray(new Attribute[]{attribute1, attribute1a});
    SubscriberList list = SubscriberList.Factory.newInstance();
    list.setID(12345);        subscriber.setListsArray(new SubscriberList[] {list});
    CreateOptions createOptions = CreateOptions.Factory.newInstance();
    //The six lines below are necessary if you want to do an update/add
    SaveOption sOption = SaveOption.Factory.newInstance();
    sOption.setSaveAction(SaveAction.UPDATE_ADD);
    sOption.setPropertyName("*");
    SaveOptions sa = SaveOptions.Factory.newInstance();
    sa.setSaveOptionArray(new SaveOption[] {sOption});
    createOptions.setSaveOptions(sa);        CreateRequestDocument createRequestDocument = CreateRequestDocument.Factory.newInstance();
    CreateRequestDocument.CreateRequest createRequest = CreateRequestDocument.CreateRequest.Factory.newInstance();
    createRequest.setObjectsArray(new APIObject[]{subscriber});
    createRequest.setOptions(createOptions);
    createRequestDocument.setCreateRequest(createRequest);
    CreateResponseDocument responseDoc = stub.Create(createRequestDocument);        CreateResponse cr = responseDoc.getCreateResponse();
    System.out.println("Create Result: " + cr.getOverallStatus());
    } catch (RemoteException e) {
    e.printStackTrace();
    } catch (Exception e) {
    e.printStackTrace();
    }
    }
```

#### Sample Java Code (CXF)

The sample code below creates the subscriber if the subscriber does not exist and adds that subscriber to multiple lists:

```apex
// If the subscriber does not exist on all subscribers
public void testAddSubscriberToList() throws RemoteException {
    try {
               Soap stub = init();

              Subscriber subscriber = new Subscriber();

              subscriber.setEmailAddress("jdoe@example.com"); // updating to new email address.
              subscriber.setSubscriberKey(subscriber.getEmailAddress()); //subscriber unique, cannot update

              subscriber.setStatus(SubscriberStatus.ACTIVE);

              SubscriberList subscriberList1 = new SubscriberList();
              subscriberList1.setID(12345);

              SubscriberList subscriberList2 = new SubscriberList();
              subscriberList2.setID(123456);

              SubscriberList subscriberList3 = new SubscriberList();
              subscriberList3.setID(1234567);

              SubscriberList[] subscriberLists = {subscriberList1, subscriberList2, subscriberList3};
              subscriber.getLists().addAll(Arrays.asList(subscriberLists));

              APIObject[] apiObjects = {subscriber};

              CreateRequest createRequest = new CreateRequest();
              createRequest.setOptions(new CreateOptions());
              createRequest.getObjects().addAll(Arrays.asList(apiObjects));

              CreateResponse createResponse = stub.create(createRequest);

              System.out.println("Subscriber created ::: " + createResponse.getOverallStatus());

               } catch (Exception e) {
                   e.printStackTrace();  //To change body of catch statement use File | Settings | File Templates.
               }

           }
```

The sample code below adds subscribers only and does not add the subscriber to any lists:

```apex
// Adding subscriber to All Subscribers list only - no sub lists, with attributes
        public void testAddSubscriber() throws RemoteException {

       try{
           Soap stub = init();

            Subscriber subscriber = new Subscriber();

            subscriber.setEmailAddress("jdoe@example.com");
            subscriber.setSubscriberKey(subscriber.getEmailAddress()); // unique identifier
            subscriber.setStatus(SubscriberStatus.ACTIVE);

              Attribute a1 = new Attribute();
              a1.setName("Full Name");
              a1.setValue("Jon Doe");
              Attribute a2 = new Attribute();
              a2.setName("home_airport");
              a2.setValue("ORD");

              Attribute[] AttributeLists = {a1, a2};
              subscriber.getAttributes().addAll(Arrays.asList(AttributeLists));

              APIObject[] apiObjects = {subscriber};

              CreateRequest createRequest = new CreateRequest();
             createRequest.setOptions(new CreateOptions());
              createRequest.getObjects().addAll(Arrays.asList(apiObjects));

              CreateResponse createResponse = stub.create(createRequest);
              System.out.println("Subscriber created in list ::: " + createResponse.getOverallStatus());

             } catch (Exception e) {
                e.printStackTrace();  //To change body of catch statement use File | Settings | File Templates.

        }
    }
```

### Sample SOAP Envelope - Create a Subscriber with Attributes

```
<?xml version="1.0" encoding="utf-8"?>
<s:Envelope xmlns:s="http://www.w3.org/2003/05/soap-envelope" xmlns:a="http://schemas.xmlsoap.org/ws/2004/08/addressing" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
    <s:Header>
        <a:Action s:mustUnderstand="1">Create</a:Action>
        <a:MessageID>urn:uuid:7e0cca04-57bd-4481-864c-6ea8039d2ea0</a:MessageID>
        <a:ReplyTo>
            <a:Address>http://schemas.xmlsoap.org/ws/2004/08/addressing/role/anonymous</a:Address>
        </a:ReplyTo>
        <a:To s:mustUnderstand="1">https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/Service.asmx</a:To>
        <o:Security s:mustUnderstand="1" xmlns:o="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
            <o:UsernameToken u:Id="uuid-b82c6428-caa1-49fc-986b-dc613c990c49-1">
                <o:Username>
                    <!-- Removed-->
                </o:Username>
                <o:Password>
                    <!-- Removed-->
                </o:Password>
            </o:UsernameToken>
        </o:Security>
    </s:Header>
    <s:Body xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
        <CreateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
            <Objects xsi:type="Subscriber">
                <ObjectID xsi:nil="true">
                </ObjectID>
                <EmailAddress>help@example.com</EmailAddress>
                <Lists>
                    <ID>123</ID>
                    <ObjectID xsi:nil="true">
                    </ObjectID>
                </Lists>
                <Attributes>
                    <Name>First Name</Name>
                    <Value>Lee</Value>
                </Attributes>
                <Attributes>
                    <Name>Last Name</Name>
                    <Value>Cruz</Value>
                </Attributes>
                <Attributes>
                    <Name>Company</Name>
                    <Value>Northern Trail Outfitters</Value>
                </Attributes>
            </Objects>
        </CreateRequest>
    </s:Body>
</s:Envelope>
```

## Sample SOAP Envelope - Create a Subscriber for an On Your Behalf Account

```
<CreateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
    <Objects xsi:type="Subscriber">
        <PartnerKey xsi:nil="true">
        </PartnerKey>
        <ObjectID xsi:nil="true">
        </ObjectID>
        <EmailAddress>acruz@example.com</EmailAddress>
        <Attributes>
            <Name>ChannelMemberID</Name>
            <Value>123456</Value>
        </Attributes>
        <Lists>
            <PartnerKey xsi:nil="true" />
            <ID>12345</ID>
            <ObjectID xsi:nil="true" />
        </Lists>
    </Objects>
 </CreateRequest>
```

## Related Items

[Subscriber Object](atlas.en-us.noversion.mc-apis.meta/mc-apis/subscriber.htm)

## Related Topics

- Create (atlas.en-us.noversion.mc-apis.meta/mc-apis/create.htm)
- Subscriber (atlas.en-us.noversion.mc-apis.meta/mc-apis/subscriber.htm)
- Create a Subscriber (atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_a_subscriber.htm)
- Subscriber Object (atlas.en-us.noversion.mc-apis.meta/mc-apis/subscriber.htm)
