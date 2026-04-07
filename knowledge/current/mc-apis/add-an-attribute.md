---
title: "Add an Attribute"
domain: mc-apis
topic: add-an-attribute
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:20.087Z
estimatedTokens: 991
keywords: [Add, Attribute, adding, via, SOAP, API, Why, How, Sample, NET, Code, PHP, Java, Axis, 1.4]
---

# Add an Attribute

> This page contains information  about adding an attribute via the SOAP API.

# Add an Attribute

This page contains information about adding an attribute via the SOAP API.

## Why Add an Attribute

You can add an attribute in order to retain more information about your subscriber. This information gives you more information with which to better target or exclude subscribers from your sends.

## How To Add an Attribute

Use the sample code below as a model to construct your own API calls. You need to know the following information to create an attribute:

-   The name of the attribute
-   The data type of the attribute
-   Any applicable default value
-   Whether the attribute accepts send time values
-   Any required picklist options
-   Minimum and maximum lengths
-   Whether the attribute is required
-   Whether the attribute is read-only
-   Whether the attribute is hidden

You cannot create an attribute using the name of an already-existing attribute. When an attribute has been added to any list, it is available on all of the lists.

### Sample .NET Code

```
// Initiate the variables string requestID = null; string status = null; string message = null;
// Create the PropertyDefinition object
PropertyDefinition propDef = new PropertyDefinition();
propDef.Name = "Company"; //Attribute Name
propDef.PropertyType = PropertyType.@string; //Attribute type [@string .net specific way to utilize our enumeration of string.]
propDef.PropertyTypeSpecified = true;
propDef.IsEditable = true; //indicating the attribute is editable in the Marketing Cloud default profile center
propDef.IsEditableSpecified = true;
String requestId = null;
String status = null;
String message = null;
// Call the Configure command with the Action "create"
ConfigureResult[] results = client.Configure(null, "create", new APIObject[] { propDef }, out status, out message, out requestId);
//CreateResult[] results = client.Create(new CreateOptions(), apiObjects, out requestId, out status);
if (status == "Error")
        {
            lblMessage.Text = "Could not create attribute.  " + results[0].StatusMessage;
        }
        else
        {
            lblMessage.Text = status;
        }
```

### Sample PHP Code

```
<?php
require('exacttarget_soap_client.php');
$wsdl = 'https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/etframework.wsdl';
try{
echo "1";
/* Create the Soap Client */
$client = new Marketing CloudSoapClient($wsdl, array('trace'=>1));
/* Set username and password here */
$client->username = 'xxx';
$client->password = 'xxx';
//Create List Configuration Object
$pd = new Marketing Cloud_PropertyDefinition(); $pd->Name = 'BusinessAddress'; $pd->PropertyType = Marketing Cloud_PropertyType::string; $object = new SoapVar($pd, SOAP_ENC_OBJECT,'PropertyDefinition', "http://exacttarget.com/wsdl/partnerAPI");
$lstConf = new Marketing Cloud_ConfigureRequestMsg();
$lstConf->Configurations = array();
$lstConf->Configurations[] = $object;
$lstConf->Action = 'Create' ;
$results = $client->Configure($lstConf); var_dump($results); } catch (SoapFault $e) { var_dump($e); } ?>
```

### Sample Java Code (Axis 1.4)

```apex
public void testAddSubscriber() throws RemoteException {
        Soap stub = init();
        Subscriber subscriber = new Subscriber();
        subscriber.setEmailAddress("acruz@example.com");
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
