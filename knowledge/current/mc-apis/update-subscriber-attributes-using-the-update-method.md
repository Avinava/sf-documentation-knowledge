---
title: "Update Subscriber Attributes using the Update Method"
domain: mc-apis
topic: update-subscriber-attributes-using-the-update-method
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:21.010Z
estimatedTokens: 4314
keywords: [Subscriber, Attributes, updating, via, SOAP, API, Why, How, Sample, NET, Code, Java, Axis, 1.4, CXF, PHP, Call]
---

> This page contains information about updating subscriber attributes via the SOAP API using the Update method.

# Update Subscriber Attributes using the Update Method

This page contains information about updating subscriber attributes via the SOAP API using the Update method.

## Why Update Subscriber Attributes Using the Update Method

Updating subscriber attributes via the SOAP API allows you to better maintain your subscriber information while utilizing a tight integration with your system or development environment.

## How to Update Subscriber Attributes Using the Update Method

Use the sample code below as an example to construct your own API update call. You must include the unique identifier (either an email address or subscriber key) and the name/value pairs for the attributes to be updated.

You must create a new record if you want to create a new value for the subscriber's primary key.

### Sample .NET Code

```
//Create Subscriber object [Subscribers > My Subscribers > All Subscribers]
            Subscriber sub = new Subscriber();
            sub.SubscriberKey = "12345";//required //may not be active in all accounts //use EmailAddress instead
                sub.EmailAddress = "tester@example.com";//required
            sub.EmailTypePreference = EmailType.Text;//EmailType.HTML is the default this only needs to be set to override to Text
            sub.EmailTypePreferenceSpecified = true;
            //Create an Array of Lists
            sub.Lists = new SubscriberList[2];//If a list is not specified the Subscriber is added to the "All Subscribers" List
            sub.Lists[0] = new SubscriberList();
            sub.Lists[0].ID = 123;//Available in the UI via List Properties
            sub.Lists[0].IDSpecified = true;
            sub.Lists[1] = new SubscriberList();
            sub.Lists[1].ID = 1234;//Available in the UI via List Properties
            sub.Lists[1].IDSpecified = true;
            //Subscriber Attributes differ per account.  Some may be required to create a Subscriber
            sub.Attributes = new etAPI.Attribute[2];
            sub.Attributes[0] = new etAPI.Attribute();
            sub.Attributes[0].Name = "First Name";
            sub.Attributes[0].Value = "Updated";
            sub.Attributes[1] = new etAPI.Attribute();
            sub.Attributes[1].Name = "Last Name";
            sub.Attributes[1].Value = "ViaAPI";
            try
            {
                string uRequestID = String.Empty;
                string uStatus = String.Empty;
                //Call the Update method on the Subscriber object
                UpdateResult[] uResults = client.Update(new UpdateOptions(), new APIObject[] { sub }, out uRequestID, out uStatus);
                //Display Results
                lblMessage.Text += "Overall Status: " + uStatus;
                lblMessage.Text += "<br/>";
                lblMessage.Text += "Number of Results: " + uResults.Length;
                lblMessage.Text += "<br/>";
                //Loop through each object returned and display the StatusMessage
                foreach (UpdateResult ur in uResults)
                {
                    lblMessage.Text += "Status Message: " + ur.StatusMessage;
                    lblMessage.Text += "<br/>";
                }
            }
            catch (Exception ex)
            {
                //Set Message
                lblMessage.Text += "<br/><br/>UPDATE ERROR:<br/>" + ex.Message;
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
public partial class SubscriberUpdate : System.Web.UI.Page
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
            //Create Subscriber object [Subscribers > My Subscribers > All Subscribers]
            Subscriber sub = new Subscriber();
            sub.SubscriberKey = "0613d278-888e-4825-b796-74a21a071391";//required //may not be active in all accounts //use EmailAddress instead
            sub.EmailTypePreference = EmailType.Text;//EmailType.HTML is the default this only needs to be set to override to Text
            sub.EmailTypePreferenceSpecified = true;
            //Create an Array of Lists
            sub.Lists = new SubscriberList[2];//If a list is not specified the Subscriber is added to the "All Subscribers" List
            sub.Lists[0] = new SubscriberList();
            sub.Lists[0].ID = 182857;//Available in the UI via List Properties
            sub.Lists[0].IDSpecified = true;
            sub.Lists[1] = new SubscriberList();
            sub.Lists[1].ID = 947244;//Available in the UI via List Properties
            sub.Lists[1].IDSpecified = true;
            //Subscriber Attributes differ per account.  Some may be required to create a Subscriber
            sub.Attributes = new etAPI.Attribute[2];
            sub.Attributes[0] = new etAPI.Attribute();
            sub.Attributes[0].Name = "First Name";
            sub.Attributes[0].Value = "Updated";
            sub.Attributes[1] = new etAPI.Attribute();
            sub.Attributes[1].Name = "Last Name";
            sub.Attributes[1].Value = "ViaAPI";
            try
            {
                string uRequestID = String.Empty;
                string uStatus = String.Empty;
                //Call the Update method on the Subscriber object
                UpdateResult[] uResults = client.Update(new UpdateOptions(), new APIObject[] { sub }, out uRequestID, out uStatus);
                //Display Results
                lblMessage.Text += "Overall Status: " + uStatus;
                lblMessage.Text += "<br/>";
                lblMessage.Text += "Number of Results: " + uResults.Length;
                lblMessage.Text += "<br/>";
                //Loop through each object returned and display the StatusMessage
                foreach (UpdateResult ur in uResults)
                {
                    lblMessage.Text += "Status Message: " + ur.StatusMessage;
                    lblMessage.Text += "<br/>";
                }
            }
            catch (Exception ex)
            {
                //Set Message
                lblMessage.Text += "<br/><br/>UPDATE ERROR:<br/>" + ex.Message;
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

The code sample below demonstrates how to unsubscribe a subscriber. Note that StatusSpecified must be set to true in order to change the status.

```
Subscriber subscriber = new Subscriber()
            {
                EmailAddress = emailAddress,
                // If your account does not have subscriber key enabled, ensure the following line is commented-out
                CustomerKey = subscriberKey,
                Status = SubscriberStatus.Unsubscribed,
                StatusSpecified = true
            };

            //Specifies this as an upsert call
            UpdateOptions options = new UpdateOptions
            {
                SaveOptions = new SaveOption[] { new SaveOption {SaveAction = SaveAction.UpdateAdd, PropertyName = '*'} }
            };
            string requestID, requestStatus;
            //Executes the update API call
            UpdateResult[] results = soapClient.Update(options, new APIObject[] { subscriber }, out requestID, out requestStatus);
```

### Sample Java Code (Axis 1.4)

The sample code below updates subscriber information and creates a new subscriber if the application cannot find the appropriate record:

```apex
public void testUpdateDataExtension() throws RemoteException {
        Subscriber subscriber = new Subscriber();
        subscriber.setEmailAddress("aruiz@example.com"); // updating to new email address.
        subscriber.setSubscriberKey("aruiz_key"); //subscriber unique, cannot update
        /*subscriber.Status = SubscriberStatus.Unsubscribed;
            SubscriberList list = new SubscriberList();
            list.ID = 12345; //List in which subscriber is there
          subscriber.Lists = new SubscriberList[] { list };*/
        Attribute attribute = new Attribute();
        attribute.setName("username");
        attribute.setValue("Angel");
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
}
```

The sample code below updates a subscriber status to Unsubscribed.

```apex
public void testUpdateSubcriberByKey() throws RemoteException {
        Soap stub = init();
        UpdateOptions updateOptions = new UpdateOptions();
        Subscriber sub = new Subscriber();
        sub.setSubscriberKey("aruiz@example.com");
        sub.setStatus(SubscriberStatus.Unsubscribed);
        UpdateRequest updateRequest = new UpdateRequest(updateOptions, new APIObject[]{sub});
        UpdateResponse updateResponse = stub.update(updateRequest);
        System.out.println("updateResponse :::: " + updateResponse.getOverallStatus());
    }
```

### Sample Java Code (CXF)

```apex
// Updates a subscriber's information (status in this example) in Marketing Cloud.
        public void testUpdateSubcriberByKey() throws RemoteException {

       try {
           Soap stub = init();

              UpdateOptions updateOptions = new UpdateOptions();

              Subscriber sub = new Subscriber();
              sub.setSubscriberKey("jdoe@example.com");
              sub.setStatus(SubscriberStatus.UNSUBSCRIBED);

              APIObject[] apiObjects = {sub};

              UpdateRequest updateRequest = new UpdateRequest();
              updateRequest.getObjects().addAll(Arrays.asList(apiObjects));
              updateRequest.setOptions(updateOptions);

              UpdateResponse updateResponse = stub.update(updateRequest);
              System.out.println("updateResponse :::: " + updateResponse.getOverallStatus());

             } catch (Exception e) {
                e.printStackTrace();  //To change body of catch statement use File | Settings | File Templates.

        }
    }
```

### Sample PHP Code

```
<?php
require('exacttarget_soap_client.php');
$wsdl = 'https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/etframework.wsdl';
      echo '<pre>';
try   {
        /* Create the Soap Client */
        $client = new Marketing CloudSoapClient($wsdl, array('trace'=>1));
        /* Set username and password here */
        $client->username = 'userid';
        $client->password = 'password';

                                /*% Marketing Cloud_Subscriber */
                 $subscriber = new Marketing Cloud_Subscriber();
                        $subscriber->EmailAddress = "aruz@example.com";

                $attribute1 = new Marketing Cloud_Attribute();
                $attribute1->Name = "Lead_ID";
                $attribute1->Value = "12345";

                 $subscriber->Attributes[] = $attribute1;

                                // Specify the list to add the subscriber to
                                /*% Marketing Cloud_SubscriberList */
                                $sublist = new Marketing Cloud_SubscriberList();
                                $sublist->ID = 123456; // specify listID
                                $sublist->Action = "update"; // specify what action to apply to subscriber on list (delete, update are other options)
                                //use this if you want to also specify list id.
                              //  $subscriber->Lists[] = new SoapVar($sublist, SOAP_ENC_OBJECT, 'SubscriberList', "http://exacttarget.com/wsdl/partnerAPI");

                        $object = new SoapVar($subscriber, SOAP_ENC_OBJECT, 'Subscriber', "http://exacttarget.com/wsdl/partnerAPI");
                              /*% Marketing Cloud_CreateRequest */
$request = new Marketing Cloud_CreateRequest();
                                // Configure Upsert Capabilities for the CreateRequest
                             /*% Marketing Cloud_CreateOptions */
$requestOptions = new Marketing Cloud_CreateOptions();
                              /*% Marketing Cloud_SaveOption */
  $saveOption = new Marketing Cloud_SaveOption();
                                $saveOption->PropertyName = "*"; // * All props
                                $saveOption->SaveAction = "UpdateAdd"; // Specify upsert save action
                                $requestOptions->SaveOptions[] = new SoapVar($saveOption, SOAP_ENC_OBJECT, 'SaveOption', "http://exacttarget.com/wsdl/partnerAPI");

                                // Apply options and object to request
                        $request->Options = new SoapVar($requestOptions, SOAP_ENC_OBJECT, 'CreateOptions', "http://exacttarget.com/wsdl/partnerAPI");
                        $request->Objects = array($object);

                                // Execute the CreateRequest
                        $results = $client->Create($request);
                        var_dump($results);
} catch (SoapFault $e) {
      var_dump($e);
}
```

The sample below uses a subscriber key.

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
    $subscriber = new Marketing Cloud_Subscriber();
                $subscriber->SubscriberKey = "012345";
    $subscriber->Lists = array();
                $ExampleAttribute1 = new Marketing Cloud_Attribute();
                $ExampleAttribute1->Name = "First Name";
                $ExampleAttribute1->Value = "Updated";

                $ExampleAttribute2 = new Marketing Cloud_Attribute();
                $ExampleAttribute2->Name = "Last Name";
                $ExampleAttribute2->Value = "ViaAPI";

                $subscriber->Attributes=array($ExampleAttribute1,$ExampleAttribute2);

    $list = new Marketing Cloud_SubscriberList();
    $list->ID = "12345";
    $subscriber->Lists[] = $list;
    $list = new Marketing Cloud_SubscriberList();
    $list->ID = "12345";
    $subscriber->Lists[] = $list;
    $object = new SoapVar($subscriber, SOAP_ENC_OBJECT, 'Subscriber', "http://exacttarget.com/wsdl/partnerAPI");
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

### Sample SOAP Call

```
<soap-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns1="http://exacttarget.com/wsdl/partnerAPI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Header>
      <wsse:Security SOAP-ENV:mustUnderstand="1" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
         <wsse:UsernameToken>
            <wsse:Username>xxx</wsse:Username>
            <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">xxx</wsse:Password>
         </wsse:UsernameToken>
      </wsse:Security>
   </SOAP-ENV:Header>
   <SOAP-ENV:Body>
      <ns1:UpdateRequest>
         <ns1:Options/>
         <ns1:Objects xsi:type="ns1:Subscriber">
            <ns1:Attributes>
               <ns1:Name>First Name</ns1:Name>
               <ns1:Value>Updated</ns1:Value>
            </ns1:Attributes>
            <ns1:Attributes>
               <ns1:Name>Last Name</ns1:Name>
               <ns1:Value>ViaAPI</ns1:Value>
            </ns1:Attributes>
            <ns1:SubscriberKey>012345</ns1:SubscriberKey>
            <ns1:Lists>
               <ns1:ID>12345</ns1:ID>
            </ns1:Lists>
            <ns1:Lists>
               <ns1:ID>12346</ns1:ID>
            </ns1:Lists>
         </ns1:Objects>
      </ns1:UpdateRequest>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```
