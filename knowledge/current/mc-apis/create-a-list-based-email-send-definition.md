---
title: "Create a List-Based Email Send Definition"
domain: mc-apis
topic: create-a-list-based-email-send-definition
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:21.169Z
estimatedTokens: 2842
keywords: [List-Based, Email, Send, Definition, creating, subscribers, Why, How, Sample, NET, Code, Retrieve, Classification, PHP, Perform]
---

# Create a List-Based Email Send Definition

> This page contains information on creating an email send definition. You can use the email send definition to send an email to a list of subscribers.

# Create a List-Based Email Send Definition

This page contains information on creating an email send definition. You can use the email send definition to send an email to a list of subscribers.

## Why Create an Email Send Definition

By creating an email send definition using the SOAP API, you can send an email to a list of subscribers from your development environment or other system. You can specify all the parameters necessary for an email send and have them stored so that the send can be initiated multiple times without having to setup the parameters again. You must setup an email send definition to send to a data extension through the API.

## How to Create an Email Send Definition

Use the sample code below as a model to create your own code.

You can have your account updated to use the following information to retrieve default sender profiles, default delivery profiles, and default transactional and commercial send classifications.

This functionality is available only for accounts created after October 7, 2011, and it must be enabled for your accout before you can use it. Please contact your Marketing Cloud representative for more information.

-   New customer key for default sender profile = DEFAULT
-   New customer key for default delivery profile = DEFAULT
-   New customer key for default transactional send classification = Default Transactional
-   New customer key for default commercial send classification = Default Commercial

### Sample .NET Code

#### Create the Email Send Definition

```apex
/**
        * How to create User_Initiated_Send definition aka Email Send Definition in Marketing Cloud
        */
        public void createEmailSendDefinition()
        {
            EmailSendDefinition definition = new EmailSendDefinition();

            definition.Name = "Definition_Name";
            definition.CustomerKey = "Definition_Key"; //this is Unique identifier
            definition.CategoryID = 12345;
            definition.CategoryIDSpecified = true;
            //RetrieveEmail or if you defined email with Name get ID
            Email email = new Email();
            email.ID = 3496734;
            email.IDSpecified = true;
            definition.Email = email; //Associate Email with defintion.
            definition.SendClassification = retrieveSendClassifications(); //(Refer code sample)
            definition.SendDefinitionList = new SendDefinitionList[1];
            definition.SendDefinitionList[0] = new SendDefinitionList();
            //Define the data extension on the send using the ObjectID of the data extension.
            //If only the Name/Customer of the data extension is known then perform a Retrieve to find the ObjectID
            definition.SendDefinitionList[0].CustomObjectID = "8699590d-8962-de11-8767-001e0bcf2c98";
            definition.SendDefinitionList[0].DataSourceTypeID = DataSourceTypeEnum.CustomObject;
            definition.SendDefinitionList[0].DataSourceTypeIDSpecified = true;

            // If sending to List use this code
            /*
            defintion.SendDefinitionList[0].SendDefinitionListType = SendDefinitionListTypeEnum.SourceList;
            defintion.SendDefinitionList[0].List = new List();
            defintion.SendDefinitionList[0].List.ID = 12321312;
            defintion.SendDefinitionList[0].List.IDSpecified = true;
            defintion.SendDefinitionList[0].DataSourceTypeID = DataSourceTypeEnum.List;
            defintion.SendDefinitionList[0].DataSourceTypeIDSpecified = true;
            /*

            //Un-Comment if All objects belong to Child-Account
            /*
            ClientID clientID = new ClientID();
            ClinetID.ID= 810234;
            clientID.IDSpecified = true;
            clientID.PartnerClientKey = "partnerkey_subaccount_2"; //this is sub-accounts partner-key
            //Tell system to create this definition in Sub-account
            definition.Client = clientID;
            */

            definition.IsMultipart = true;
            definition.IsMultipartSpecified = true;
            APIObject[] createObjects = { definition };
            String requestId = null;
            String overallStatus = null;
            CreateResult[] results =
                soapClient.Create(new CreateOptions(), createObjects, out requestId, out overallStatus);
            Console.Write("Results ::: " + overallStatus);
        }
```

#### Retrieve Send Classification

```apex
public SendClassification retrieveSendClassifications()
        {
            String[] props = {
                                 "ObjectID", "Name", "Description", "CustomerKey", "SenderProfile.CustomerKey",
                                 "Client.ID"
                                 , "Client.PartnerClientKey", "PartnerKey"
                             };
            RetrieveRequest request = new RetrieveRequest();
            request.ObjectType = "SendClassification";
            request.Properties = props;
           // Use Cleind-Id object if you are acting on Sub-account.
            ClientID clientID = new ClientID();
           //clientID.PartnerClientKey = "partnerkey_subaccount_2"; //Same as Account.PartnerKey
            clientID.ID = 225115;
            clientID.IDSpecified = true;
            ClientID[] clientIDs = {clientID};
            request.ClientIDs = clientIDs;
            //Default Transactional
            SimpleFilterPart filterPart = new SimpleFilterPart();
            //By default account comes with 2 classifications, one: Commercial two: Transactional
            String[] filterValues = {"Default Commercial"};
            filterPart.Property = "Name";
            filterPart.SimpleOperator = SimpleOperators.equals;
            filterPart.Value = filterValues;
            request.Filter = filterPart;

            String requestId = null;
            APIObject[] results;
            soapClient.Retrieve(request, out requestId, out results);
            SendClassification classification = null;
            if (results != null)
            {
                classification = (SendClassification) results[0];
                Console.Write("Results ::: " + results.Length);
            }
            return classification;
        }
```

#### Retrieve Email Send Definition

```apex
// Create the request object
RetrieveRequest request = new RetrieveRequest();
request.ObjectType = "EmailSendDefinition";
request.Properties = new string[] { "Name",
                                    "Description",
                                    "Email.ID",
                                    "CategoryID", // New for 135.5
                                    "SendDefinitionList"
                                   };
// Invoke the Web Service
APIObject[] results;
proxy = Marketing Cloud.Integration.Helper.GetInterfaceProxy(mobjETPrincipal);
string status = proxy.Retrieve(request, ref requestID, out results);
// Print out overall results
System.Text.StringBuilder sb = new System.Text.StringBuilder();
sb.Append("Retrieve Send");
sb.AppendFormat("
Overall result: {0}.  RequestID: {1}", status, requestID);
Console.WriteLine(sb.ToString());
 // Print out results for each new object created
for (int cntr = 0; cntr < results.Length; cntr++)
{
    sb.Append(string.Format("
Index {0}", cntr));
    EmailSendDefinition ESD = results[cntr] as EmailSendDefinition;
    sb.Append("
 ID: " + ESD.Name);
    sb.Append("
 Name: " + ESD.Description);
    sb.Append("
 EmailID: " + ESD.Email.ID);
    sb.Append("
 CategoryID: " + ESD.CategoryID);
    // Get SendDefinitionLists for each EmailSendDefinition
    foreach (SendDefinitionList SDL in ESD.SendDefinitionList)
    {
        sb.Append("
 SendDefinitionListType ID: " + SDL.SendDefinitionListType);
        sb.Append("
 SendDefinitionList ID: " + SDL.List.ID);
    }
    sb.Append("
");
}  Console.WriteLine(sb.ToString());
```

### Sample PHP Code

#### Create Email Send Definition

```
<?php
require('../../00 Includes/exacttarget_soap_client.php');
$wsdl = 'https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/etframework.wsdl';
try{
        /* Create the Soap Client */
        $client = new Marketing CloudSoapClient($wsdl, array('trace'=>1));
        /* Set username and password here */
            $client->username = '<username>';'
            $client->password = '<password>';
            /* Create the list object to associate with the send */
            $list = new Marketing Cloud_List();
            $list->ID = "12345";
            /* Create the send definition list object to associate with the send */
            /* You could also create a data extension object and use that instead */
            $senddeflist = new Marketing Cloud_SendDefinitionList();
            $senddeflist->List = $list;
            $senddeflist->DataSourceTypeID = "List"; // in this example, we are sending to a list
            /* Create the email object that is associated with the send */
            $email = new Marketing Cloud_Email();
            $email->ID = "12345";
            /* Create the send classification that is associated with this send */
            $sendclass = new Marketing Cloud_SendClassification();
            $sendclass->CustomerKey = "test";
            /* Create the email send definition object */
            $esd = new Marketing Cloud_EmailSendDefinition();
            $esd->SendDefinitionList = $senddeflist;
            $esd->Email = $email;
            $esd->Name = "API Created2";
            $esd->SendClassification = $sendclass;
            $object = new SoapVar($esd, SOAP_ENC_OBJECT, 'EmailSendDefinition', "http://exacttarget.com/wsdl/partnerAPI");
            /* Create the email send definition in Marketing Cloud*/
            $request = new Marketing Cloud_CreateRequest();
            $request->Options = NULL;
            $request->Objects = array($object);
            $results = $client->Create($request);
            /* Output the results */
            var_dump($results);
} catch (SoapFault $e) {
var_dump($e);
}
?>
```

#### Perform Email Send Definition

```
<?php
require('../../00 Includes/exacttarget_soap_client.php');
$wsdl = 'https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/etframework.wsdl';
try{
        /* Create the Soap Client */
        $client = new Marketing CloudSoapClient($wsdl, array('trace'=>1));
        /* Set username and password here */
        $client->username = '<username>';
        $client->password = '<password>';
            // Create the Perform Request and set the action to 'start'
            $pr = new Marketing Cloud_PerformRequestMsg();
            $pr->Action = "start";

            // Define the customer/external key for the email send definition we want to start
            $esd = new Marketing Cloud_EmailSendDefinition();            $esd->CustomerKey = "12345"; // unique identifier for the Email Send Definition
            // Define the definition for the Perform request
            $pr->Definitions =  array();
            $pr->Definitions[] = new SoapVar($esd, SOAP_ENC_OBJECT, 'EmailSendDefinition', "http://exacttarget.com/wsdl/partnerAPI");
            $pr->Options = NULL;
            // Perform/Start the Email Send Definition
            $results = $client->Perform($pr);
            echo '<pre>';
            var_dump($results);
            echo '</pre>';
} catch (SoapFault $e) {
    var_dump($e);
}
?>
```

## Code Examples

```apex
// Create the request object   
RetrieveRequest request = new RetrieveRequest();
request.ObjectType = "EmailSendDefinition";
request.Properties = new string[] { "Name",   
                                    "Description",   
                                    "Email.ID",
                                    "CategoryID", // New for 135.5
                                    "SendDefinitionList"                                         
                                   };
// Invoke the Web Service   
APIObject[] results;
proxy = Marketing Cloud.Integration.Helper.GetInterfaceProxy(mobjETPrincipal);
string status = proxy.Retrieve(request, ref requestID, out results);
// Print out overall results   
System.Text.StringBuilder sb = new System.Text.StringBuilder();
sb.Append("Retrieve Send");
sb.AppendFormat("
Overall result: {0}.  RequestID: {1}", status, requestID);
Console.WriteLine(sb.ToString());
 // Print out results for each new object created   
for (int cntr = 0; cntr < results.Length; cntr++)
{
    sb.Append(string.Format("
Index {0}", cntr));
    EmailSendDefinition ESD = results[cntr] as EmailSendDefinition;
    sb.Append("
 ID: " + ESD.Name);
    sb.Append("
 Name: " + ESD.Description);
    sb.Append("
 EmailID: " + ESD.Email.ID);
    sb.Append("
 CategoryID: " + ESD.CategoryID);
    // Get SendDefinitionLists for each EmailSendDefinition
    foreach (SendDefinitionList SDL in ESD.SendDefinitionList)
    {
        sb.Append("
 SendDefinitionListType ID: " + SDL.SendDefinitionListType);
        sb.Append("
 SendDefinitionList ID: " + SDL.List.ID);
    }
    sb.Append("
");
}  Console.WriteLine(sb.ToString());
```
