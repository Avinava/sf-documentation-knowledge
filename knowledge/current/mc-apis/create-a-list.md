---
title: "Create a List"
domain: mc-apis
topic: create-a-list
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:16.058Z
estimatedTokens: 299
keywords: [Diagram, scenario, how, SOAP, API, attributes, several, subscribers, recipient, send, modifier, Marketing, Cloud, interact, three, different, kinds, Referenced, Items, including, publication, suppression, development, environment, system, account, Why, How, Sample, NET, Code, Java, Axis, 1.4, Axis2, Ruby, Rails, PHP]
---

> You can use the SOAP API to create lists (including publication lists and suppression lists) from within your development environment or other system to your Marketing Cloud account.

# Create a List

## Why Use the SOAP API to Create a List

You can use the SOAP API to create lists (including publication lists and suppression lists) from within your development environment or other system to your Marketing Cloud account.

## How to Use the SOAP API to Create a List

Create a list through the Marketing Cloud SOAP API using a create request and the sample code listed below.

Follow the steps below to create a list using the SOAP API:

1.  Create a List object, including a name and a description.
2.  Populate the appropriate parameters (leaving ID null)
3.  Issue a Create request using the SOAP API.

The returned List object includes a populated ID variable (which may be of use in future calls).

### Sample .NET Code

```
List list = new List();
list.Description = "Sales Leads";
list.ListName = "Leads";
CreateOptions options = new CreateOptions();
APIObject[] objects = new APIObject[] { list };
// If successful, results are a 1-dimensional array
// consisting of a List object with the ID variable populated?
CreateResult[] results = partnerAPI.Create(options, objects, out reqID, out status);
```

For this sample code, replace **partnerAPI** with the name of your connection to the SOAP API.

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
public partial class ListCreate : System.Web.UI.Page
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
            //Create a GUID to ensure a unique key
            string strGUID = System.Guid.NewGuid().ToString();
            //Create List object [Subscribers > My Subscribers > My Lists]
            List l = new List();
            l.ListName = strGUID;//required
            l.Description = "Test List from API"; //Use this property, otherwise the application auto-fill this with "Auto-generated list"
            try
            {
                string cRequestID = String.Empty;
                string cStatus = String.Empty;
                //Call the Create method on the List object
                CreateResult[] cResults = client.Create(new CreateOptions(), new APIObject[] { l }, out cRequestID, out cStatus);
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

You can optionally set a send classification on a subscriber list using either the ID or the CustomerKey of the send classification. Add the sample code below to your list if you wish to set a specific send classification to your list. Otherwise, the list uses the default commercial send classification for the account.

```
// case 1 - Specify Send Classification using ID:
list.SendClassification = new SendClassification();
list.SendClassification.ID = 123;
//case 2 - Specify Send Classification using Customer Key:
list.SendClassification = new SendClassification();
list.SendClassification.CustomerKey = myCustomerKey;
//case 3 - Specify Send Classification using Customer Key and ID:
list.SendClassification = new SendClassification();
list.SendClassification.CustomerKey = myCustomerKey;
list.SendClassification.ID = 123;
```

### Sample Java Code (Axis 1.4)

```apex
public class ListTestCase extends BaseTestCase {
    public void testCreateTestCase() {
        try {
            Soap stub = init();
            List list = new List();
            list.setListName("MyList");
            list.setDescription("MyList Desc");
            list.setType(ListTypeEnum.Public);
            CreateRequest createRequest = new CreateRequest(new CreateOptions(), new APIObject[]{list});
            CreateResponse createResponse = stub.create(createRequest);
            System.out.println("Response :: " + createResponse.getOverallStatus());
        } catch (Exception e) {
        }
    }
    public void testDeleteListAndSubscribers() throws RemoteException {
        //List Id == 910838
        Soap stub = init();
        List list = new List();
        list.setID(new Integer(910838));
        DeleteOptions deleteOptions = new DeleteOptions();
        APIObject[] apiObjects = {list};
        DeleteRequest deleteRequest = new DeleteRequest(deleteOptions, apiObjects);
        DeleteResponse deleteResponse = stub.delete(deleteRequest);
        System.out.println("Delete Response :: " + deleteResponse.getOverallStatus());
    }
```

### Sample Java Code (Axis2)

```apex
private static void CreateList(PartnerAPIStub stub) {
    try {

    List li = List.Factory.newInstance();

    li.setName("Sample List Name");
    li.setDescription("Sample List Description");

    CreateOptions createOptions = CreateOptions.Factory.newInstance();
    CreateRequestDocument createRequestDocument = CreateRequestDocument.Factory.newInstance();
    CreateRequestDocument.CreateRequest createRequest = CreateRequestDocument.CreateRequest.Factory.newInstance();

    createRequest.setObjectsArray(new APIObject[]{li});
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
listObjs = []
listType = 'Public'
5.times do |i|
  listName = "API-TestList-#{i}"
  listDesc = listName + 'Generated through the API'
  listObjs.push(List.new(nil,nil,nil,nil,nil,nil,nil,listName,nil,nil,listName,nil,listType,listDesc))
end
apiObj = listObjs
resp = $driver.create(CreateRequest.new(options,[*apiObj]))
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
            $list = new Marketing Cloud_List();
            $list->Description = "PHP Created List";
            $list->ListName = "PHP API Created List";
            $object = new SoapVar($list, SOAP_ENC_OBJECT, 'List', "http://exacttarget.com/wsdl/partnerAPI");
            $request = new Marketing Cloud_CreateRequest();
            $request->Options = NULL;
            $request->Objects = array($object);
            $results = $client->Create($request);
        if ($results->OverallStatus == 'OK')
        {
        echo 'SUCCESS';
        }
        else
        {
        echo 'FAILED';
        }
} catch (SoapFault $e) {
    var_dump($e);
}
?>
```

### Sample SOAP Request

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
            <wsse:Username>*****</wsse:Username>
            <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">*****</wsse:Password>
         </wsse:UsernameToken>
      </wsse:Security>
   </soap:Header>
   <soap:Body>
      <CreateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
         <Options/>
         <Objects xsi:type="List">
            <ListName>Test_List_Public_1</ListName>
            <Type>Public</Type>
         </Objects>
      </CreateRequest>
   </soap:Body>
</soap:Envelope>
```

## Related Items

-   [Subscriber Lists](https://help.salesforce.com/articleView?id=mc_es_lists_classic_subscriber.htm&type=5)
-   [Publication Lists](https://help.salesforce.com/articleView?id=mc_es_publication_lists.htm&type=5)
-   [Suppression Lists](https://help.salesforce.com/articleView?id=mc_es_suppression_lists.htm&type=5)
-   [Send Classification](https://help.salesforce.com/articleView?id=mc_es_send_classifications.htm&type=5)
-   [Create Method](atlas.en-us.noversion.mc-apis.meta/mc-apis/create.htm)
-   [Get Started with the SOAP API](atlas.en-us.noversion.mc-apis.meta/mc-apis/getting_started_developers_and_the_exacttarget_api.htm)

## Related Topics

- Create (atlas.en-us.noversion.mc-apis.meta/mc-apis/create.htm)
- List (atlas.en-us.noversion.mc-apis.meta/mc-apis/list.htm)
- Create a List (atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_a_list.htm)
- Create Method (atlas.en-us.noversion.mc-apis.meta/mc-apis/create.htm)
- Get Started with the SOAP API (atlas.en-us.noversion.mc-apis.meta/mc-apis/getting_started_developers_and_the_exacttarget_api.htm)
