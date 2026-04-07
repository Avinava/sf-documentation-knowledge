---
title: "Perform a Campaign"
domain: mc-apis
topic: perform-a-campaign
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:22.922Z
estimatedTokens: 2134
keywords: [Perform, Campaign, performing, known, program, Marketing, Cloud, via, SOAP, API, Why, How, Sample, NET, Code]
---

# Perform a Campaign

> This page contains information about performing a campaign (known as a program in Marketing Cloud) via the SOAP API.

# Perform a Campaign

This page contains information about performing a campaign (known as a program in Marketing Cloud) via the SOAP API.

## Why Perform a Campaign

You can use the SOAP API to perform an existing campaign in Marketing Cloud. Specify the program contained within the account and send the call to activate that program.

## How to Perform a Campaign

Use the sample code below as a model to construct your own API call.

### Sample .NET Code

The sample code below starts a campaign and allows you to check the status of all associated tasks.

```apex
private void ButtonClick()
        {
            string status = String.Empty;
            string interactionID = PerformCampaign("3640");
            Boolean Complete = false;
            if (!interactionID.Equals(""))
            {
                do
                {
                    Complete = RetrieveCampaignStatus(interactionID, out status);
                    Thread.Sleep(1000);
                } while (!Complete);
            }
            Console.WriteLine("Status: " + status);
        }
        public string PerformCampaign(string CampaignCustomerKey)
        {
            SoapClient api = new SoapClient();
            api.ClientCredentials.UserName.UserName = "X";
            api.ClientCredentials.UserName.Password = "X";
            // Intialize the variables
            string requestID;
            string status;
            string statusmessage;
            Campaign camp = new Campaign();
            camp.CustomerKey = CampaignCustomerKey;
            PerformResult[] presult = api.Perform(new PerformOptions(), "start", new APIObject[] { camp }, out status, out statusmessage, out requestID);
            foreach (PerformResult result in presult)
            {
                return result.Task.InteractionObjectID;
            }
            return "";
        }
        public Boolean RetrieveCampaignStatus(string InteractionObjectID, out string status)
        {
            status = "OK";
            Boolean Complete = true;
            SoapClient api = new SoapClient();
            api.ClientCredentials.UserName.UserName = "X";
            api.ClientCredentials.UserName.Password = "X";
            String requestID;
            APIObject[] results;
            RetrieveRequest rr = new RetrieveRequest();
            rr.ObjectType = "AsyncActivityStatus";
            //Create the filter based on the passed in value
            SimpleFilterPart fp = new SimpleFilterPart();
            fp.SimpleOperator = SimpleOperators.equals;
            fp.Property = "ParentInteractionObjectID";
            fp.Value = new string[] { InteractionObjectID };
            rr.Filter = fp;
            //Set the properties needed in the response
            rr.Properties = new string[] { "Status", "ParentInteractionObjectID" };
            String RetrieveStatus = api.Retrieve(rr, out requestID, out results);
            // If the retrieve was successful, get the status of all the associated tasks
            if (RetrieveStatus.Equals("OK") && results.Length > 0)
            {
                foreach (ObjectExtension oe in results)
                {
                    String objectStatus = "";
                    foreach (APIProperty prop in oe.Properties)
                    {
                        if (prop.Name.Equals("Status"))
                            objectStatus = prop.Value;
                    }
                    if (!objectStatus.Equals("Complete") && !objectStatus.Equals("Completed") && !objectStatus.Equals("Error"))
                        Complete = false;
                    if (objectStatus.Equals("Error"))
                        status = "Error";
                }
            }
            else
            {
                Complete = true;
                status = "Error";
            }
            Console.WriteLine("Completed: " + Complete.ToString());
            return Complete;
        }
```

The sample code below performs a program that imports a subscriber

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
public partial class CampaignPerform : System.Web.UI.Page
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
            //Create Subscriber object [Interactions > My Programs]
            Campaign camp = new Campaign();
            camp.CustomerKey = "SampleTrackingExtract";
            try
            {
                //Call the Perform method on the ImportDefinition object
                string pStatus = String.Empty;
                string pMessage = String.Empty;
                string pRequestID = String.Empty;
                PerformResult[] pResults = client.Perform(new PerformOptions(), "Start", new InteractionBaseObject[] { camp }, out pStatus, out pMessage, out pRequestID);
                //Display Results
                lblMessage.Text += "Overall Perform Status: " + pStatus;
                lblMessage.Text += "<br/>";
                lblMessage.Text += "Number of Results: " + pResults.Length;
                lblMessage.Text += "<br/>";
                //Loop through each object returned and display the StatusMessage
                foreach (PerformResult pr in pResults)
                {
                    lblMessage.Text += "Status Message: " + pr.StatusMessage;
                    lblMessage.Text += "<br/>";
                }
            }
            catch (Exception exCreate)
            {
                //Set Message
                lblMessage.Text += "<br/><br/>PERFORM ERROR:<br/>" + exCreate.Message;
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

### Sample Java Code (Axis 1.4)

```apex
public void testStartProgram() throws RemoteException {
        try {
            Soap stub = init();
            // Create the ImportDefinition
            Campaign campaign = new Campaign();
            campaign.setCustomerKey("CODES");
            PerformRequestMsg performRequestMsg = new PerformRequestMsg();
            performRequestMsg.setAction("start");
            performRequestMsg.setOptions(new PerformOptions());
            performRequestMsg.setDefinitions(new InteractionBaseObject[]{campaign});
            PerformResponseMsg performResponseMsg = stub.perform(performRequestMsg);
            System.out.println(performResponseMsg.getOverallStatus());
        } catch (RemoteException e) {
            e.printStackTrace();  //To change body of catch statement use File | Settings | File Templates.
        } catch (IOException e) {
            e.printStackTrace();  //To change body of catch statement use File | Settings | File Templates.
        }
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
        /* Set username and password here */
        $client->username = 'XXX';
        $client->password = 'XXX';
        $pr = new Marketing Cloud_PerformRequestMsg();
        $pr->Action = "start";
        $pr->Definitions =  array();
            $def = new Marketing Cloud_Campaign();
            $def->CustomerKey = "123";
            $pr->Definitions[] = new SoapVar($def, SOAP_ENC_OBJECT, 'Campaign', "http://exacttarget.com/wsdl/partnerAPI");
        $pr->Options = NULL;
        $results = $client->Perform($pr);
            var_dump($results);
} catch (SoapFault $e) {
        var_dump($e);
}
?>
```

## Related Items

-   [Campaign Object](atlas.en-us.noversion.mc-apis.meta/mc-apis/campaign.htm)
-   [Programs](https://help.salesforce.com/articleView?id=mc_es_interactions_programs.htm&type=5)

## Related Topics

- Campaign Object (atlas.en-us.noversion.mc-apis.meta/mc-apis/campaign.htm)
