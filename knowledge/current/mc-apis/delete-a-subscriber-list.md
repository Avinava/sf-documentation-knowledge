---
title: "Delete a Subscriber List"
domain: mc-apis
topic: delete-a-subscriber-list
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:16.637Z
estimatedTokens: 1533
keywords: [Subscriber, longer, want, action, subscribers, remove, itself, further, conducted, Sample, NET, Code, PHP, SOAP, Envelope, Items]
---

> If you no longer want to use a subscriber list, you can delete it. This action does not delete the subscribers on that list, but it does remove the list itself so that no further sends can be conducted with that list.

# Delete a Subscriber List

If you no longer want to use a subscriber list, you can delete it. This action does not delete the subscribers on that list, but it does remove the list itself so that no further sends can be conducted with that list.

When you delete a subscriber list, your account also loses all tracking information related to that subscriber list. For this reason, Marketing Cloud recommends leaving the list intact and creating new lists via new opt-in procedures.

Use the sample code below as a model to construct your own API call.

### Sample .NET Code

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
public partial class ListDelete : System.Web.UI.Page
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
            //Create List object [Subscribers > My Subscribers > My Lists]
            List l = new List();
            l.ID = 1007548;//required
            l.IDSpecified = true;
            try
            {
                string dRequestID = String.Empty;
                string dStatus = String.Empty;
                //Call the Delete method on the List object
                DeleteResult[] dResults = client.Delete(new DeleteOptions(), new APIObject[] { l }, out dRequestID, out dStatus);
                //Display Results
                lblMessage.Text += "Overall Status: " + dStatus;
                lblMessage.Text += "<br/>";
                lblMessage.Text += "Number of Results: " + dResults.Length;
                lblMessage.Text += "<br/>";
                //Loop through each object returned and display the StatusMessage
                foreach (DeleteResult ur in dResults)
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

### Sample PHP Code

```
<?php
      /* Create the Soap Client */
            require('exacttarget_soap_client.php');

                  $wsdl = 'https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/etframework.wsdl';
      try   {
             $client = new Marketing CloudSoapClient($wsdl, array('trace'=>1));
            /* Set username and password here */
            $client->username = "xxxxx";
            $client->password = "xxxxx";

                        /* point to client level account */
                        $objClient = new Marketing Cloud_ClientID();
                        $objClient->ID = "12345";     // the account ID of the subaccount

                        /* set up email template push */
                        $objET = new Marketing Cloud_List();
                        $objET->ID = "12345"; //List ID of the List you want to Delete
                        //Specifiy the client property on the email object
                        $objET->Client = $objClient;
                        $object = new SoapVar($objET, SOAP_ENC_OBJECT, 'List', "http://exacttarget.com/wsdl/partnerAPI");
                  $reqET = new Marketing Cloud_DeleteRequest();
                        $reqET->Options = $objOpt;
                        $reqET->Objects = array($object);

                        $resET = $client->Delete($reqET);

var_dump($resET);                                     ;
      } catch (SoapFault $e) {
        die("Caught SOAP error, failing. ".$e->getMessage());
      }
?>
```

### Sample SOAP Envelope

```
<?xml version="1.0" encoding="utf-8"?>
<s:Envelope xmlns:a="http://schemas.xmlsoap.org/ws/2004/08/addressing" xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">
        <s:Header>
            <a:Action s:mustUnderstand="1">Delete</a:Action>
            <a:MessageID>urn:uuid:12345</a:MessageID>
            <ActivityId CorrelationId="12345" xmlns="http://schemas.microsoft.com/2004/09/ServiceModel/Diagnostics">123456</ActivityId>
            <a:ReplyTo>
                <a:Address>http://schemas.xmlsoap.org/ws/2004/08/addressing/role/anonymous</a:Address>
            </a:ReplyTo>
            <a:To s:mustUnderstand="1">https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/Service.asmx</a:To>
    <o:Security s:mustUnderstand="1" xmlns:o="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
        <o:UsernameToken u:Id="uuid-b82c6428-caa1-49fc-986b-dc613c990c49-1">
            <o:Username>XXXXX</o:Username>
            <o:Password>XXXXX</o:Password>
        </o:UsernameToken>
    </o:Security>
        </s:Header>
        <s:Body xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
            <DeleteRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
                <Options></Options>
                <Objects xmlns:q1="http://exacttarget.com/wsdl/partnerAPI" xsi:type="q1:List">
                    <q1:ID>12345</q1:ID>
                    <q1:ObjectID xsi:nil="true"></q1:ObjectID>
                </Objects>
            </DeleteRequest>
        </s:Body>
</s:Envelope>
```

## Related Items

[Subscriber Lists](https://help.salesforce.com/articleView?id=mc_es_lists_classic_subscriber.htm&type=5)
