---
title: "Delete a Row from a Data Extension"
domain: mc-apis
topic: delete-a-row-from-a-data-extension
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:16.627Z
estimatedTokens: 1460
keywords: [Row, Extension, regarding, deletion, via, SOAP, API, Why, How, Sample, NET, Code, PHP, Envelope, Items]
---

> This page contains information  regarding the deletion of a row from a data extension via the SOAP API.

# Delete a Row from a Data Extension

This page contains information regarding the deletion of a row from a data extension via the SOAP API.

## Why Delete a Row from a Data Extension

If you use the SOAP API to maintain your data extensions, you may have to delete a row from a data extension at some point. For example, you may have to remove a subscriber from a publication or suppression list. The information in this document helps you set up your sample code and successfully remove the row from the data extension.

## How To Delete a Row from a Data Extension

Use the sample SOAP envelope to set up your own call to delete a row from a data extension. Please note that at least one field must be specified as a primary key in order to perform the delete operation.

### Sample .NET Code

```apex
public partial class DataExtensionObjectDelete : System.Web.UI.Page
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
            //Create a DataExtensionObject which is really a row
            DataExtensionObject deo = new DataExtensionObject();
            deo.CustomerKey = "810f461c-231a-440a-8543-837460be6c7a";//External Key of the Data Extension from the UI

            //You must set the Primary Key to be deleted
            deo.Keys = new APIProperty[1];

            deo.Keys[0] = new APIProperty();
            deo.Keys[0].Name = "subscriber_key";
            deo.Keys[0].Value = "subscriber_key";

            try
            {
                string dRequestID = String.Empty;
                string dStatus = String.Empty;

                //Call the Delete method on the DataExtensionObject object
                DeleteResult[] dResults = client.Delete(new DeleteOptions(), new APIObject[] { deo }, out dRequestID, out dStatus);

                //Display Results
                lblMessage.Text += "Overall Status: " + dStatus;
                lblMessage.Text += "<br/>";
                lblMessage.Text += "Number of Results: " + dResults.Length;
                lblMessage.Text += "<br/>";

                //Loop through each object returned and display the StatusMessage
                foreach (DeleteResult dr in dResults)
                {
                    lblMessage.Text += "Status Message: " + dr.StatusMessage;
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

### Sample PHP Code

```
<?php
require('exacttarget_soap_client.php');
$wsdl = 'https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/etframework.wsdl';
try {
/* Create the Soap Client */
$client = new Marketing CloudSoapClient($wsdl, array('trace'=>1));
/* Set username and password here */
$client->username = 'ccc';
$client->password = 'ccc';
$deo = new Marketing Cloud_DataExtensionObject();
$deo->CustomerKey = "FIRST SEND";
$key = new Marketing Cloud_APIProperty();
$key->Name = "EMAIL";
$key->Value = "test@example.com";
$deo->Keys = array($key);
$object = new SoapVar($deo, SOAP_ENC_OBJECT, 'DataExtensionObject', "http://exacttarget.com/wsdl/partnerAPI" <http://exacttarget.com/wsdl/partnerAPI%22>);
$request = new Marketing Cloud_DeleteRequest();
$request->Options = NULL;
$request->Objects = array($object);
$results = $client->Delete($request);
var_dump($results);
} catch (SoapFault $e) {
var_dump($e);
}
?>
```

### Sample SOAP Envelope

```
<s:Envelope xmlns:s="http://www.w3.org/2003/05/soap-envelope" xmlns:a="http://schemas.xmlsoap.org/ws/2004/08/addressing" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
   <s:Header>
      <a:Action s:mustUnderstand="1">Delete</a:Action>
      <a:MessageID>urn:uuid:d5c8c2ee-384e-4492-af18-b01e0d438b62</a:MessageID>
      <a:ReplyTo>
         <a:Address>http://schemas.xmlsoap.org/ws/2004/08/addressing/role/anonymous</a:Address>
      </a:ReplyTo>
      <a:To s:mustUnderstand="1">https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/Service.asmx</a:To>
      <o:Security s:mustUnderstand="1" xmlns:o="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
         <o:UsernameToken u:Id="uuid-c10e3bda-13ef-4868-bacd-6e760cd45cf2-1">
            <o:Username>USERNAME</o:Username>
            <o:Password>PASSWORD</o:Password>
         </o:UsernameToken>
      </o:Security>
   </s:Header>
   <s:Body xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
      <DeleteRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
         <Options></Options>
         <Objects xsi:type="DataExtensionObject">
            <ObjectID xsi:nil="true"></ObjectID>
            <CustomerKey>FIRST SEND</CustomerKey>
            <Keys>
               <Key>
                  <Name>EMAIL</Name>
                  <Value>test@example.com</Value>
               </Key>
            </Keys>
         </Objects>
      </DeleteRequest>
   </s:Body>
</s:Envelope>
```

## Related Items

[Publication and Suppression Lists](https://help.salesforce.com/articleView?id=mc_es_publication_lists.htm&type=5)
