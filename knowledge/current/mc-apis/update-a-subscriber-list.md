---
title: "Update a Subscriber List"
domain: mc-apis
topic: update-a-subscriber-list
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:25.726Z
estimatedTokens: 744
keywords: [Subscriber, sure, current, possible, call, Why, How, Sample, NET, Code, Items]
---

# Update a Subscriber List

> You can make sure the information on your subscriber list is as current as possible using the Update call.

# Update a Subscriber List

## Why Update a Subscriber List

You can make sure the information on your subscriber list is as current as possible using the Update call.

## How to Update a Subscriber List

Use the sample code below as a model for your own API call.

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
public partial class ListUpdate : System.Web.UI.Page
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
            l.ID = 12345;//required
            l.IDSpecified = true;
            l.Description = "Test List UPDATED from API";
            try
            {
                string uRequestID = String.Empty;
                string uStatus = String.Empty;
                //Call the Update method on the List object
                UpdateResult[] uResults = client.Update(new UpdateOptions(), new APIObject[] { l }, out uRequestID, out uStatus);
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

## Related Items

-   [Subscribers List](https://help.salesforce.com/articleView?id=mc_es_lists_classic_subscriber.htm&type=5)
-   [Update Method](atlas.en-us.noversion.mc-apis.meta/mc-apis/update.htm)

## Related Topics

- Update Method (atlas.en-us.noversion.mc-apis.meta/mc-apis/update.htm)
