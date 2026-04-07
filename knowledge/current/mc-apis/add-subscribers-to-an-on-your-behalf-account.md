---
title: "Add Subscribers to an On-Your-Behalf Account"
domain: mc-apis
topic: add-subscribers-to-an-on-your-behalf-account
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:15.143Z
estimatedTokens: 1641
keywords: [Add, Subscribers, On-Your-Behalf, Account, accounts, allow, send, email, central, administrator, user, Adding, level, ensures, messages, admin, creates, sent, appropriate, Sample, NET, Code, SOAP, Envelope, Items]
---

> On-Your-Behalf accounts allow you to send email from a central administrator account to subscribers with the From information of the On-Your-Behalf user. Adding subscribers at the On-Your-Behalf level ensures that the messages the admin creates are only sent to the appropriate subscribers.

# Add Subscribers to an On-Your-Behalf Account

On-Your-Behalf accounts allow you to send email from a central administrator account to subscribers with the From information of the On-Your-Behalf user. Adding subscribers at the On-Your-Behalf level ensures that the messages the admin creates are only sent to the appropriate subscribers.

Use the sample code below to construct your own call to add subscribers to an On-Your-Behalf account.

### Sample .NET Code

The sample code uses the ChannelMemberID attribute to identify the account in which to add the subscriber. You can also use the ClientID to identify the account, if you wish.

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
public partial class SubscriberCreate : System.Web.UI.Page {
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
            sub.EmailAddress = "help@example.com";//required
            sub.EmailTypePreference = EmailType.Text;//EmailType.HTML is the default this only needs to be set to override to Text
            sub.EmailTypePreferenceSpecified = true;
            //Create an Array of Lists
            sub.Lists = new SubscriberList[1];//If a list is not specified the Subscriber is added to the "All Subscribers" List
            sub.Lists[0] = new SubscriberList();
            sub.Lists[0].ID = 123;//Available in the UI via List Properties
            sub.Lists[0].IDSpecified = true;
            //add ChannelMemberID through attribute
            sub.Attributes = new etAPI.Attribute[1];
            sub.Attributes[0] = new etAPI.Attribute();
            sub.Attributes[0].Name = "ChannelMemberID";
            sub.Attributes[0].Value = 123;
            //Create the CreateOptions object for the Create method
            CreateOptions co = new CreateOptions();
            co.SaveOptions = new SaveOption[1];
            co.SaveOptions[0] = new SaveOption();
            co.SaveOptions[0].SaveAction = SaveAction.UpdateAdd;//This set this call to act as an Upsert, meaning if the Subscriber doesn't exist it creates one. If the subscriber exists, it updates it.
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

### Sample SOAP Envelope

```
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:wsa="http://schemas.xmlsoap.org/ws/2004/08/addressing" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
    <soap:Header>
        <wsa:Action>Create</wsa:Action>
        <wsa:MessageID>urn:uuid:168bbf3d-394e-4656-ae57-2e96b4b568ae</wsa:MessageID>
        <wsa:ReplyTo>
            <wsa:Address>http://schemas.xmlsoap.org/ws/2004/08/addressing/role/anonymous</wsa:Address>
        </wsa:ReplyTo>
        <wsa:To>https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/Service.asmx</wsa:To>
        <wsse:Security soap:mustUnderstand="1">
            <wsse:UsernameToken wsu:Id="SecurityToken-d19fb7b0-ec6d-49a8-8fd3-796819ec7306">
                <wsse:Username>XXXXX</wsse:Username>
                <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">XXXX</wsse:Password>
            </wsse:UsernameToken>
        </wsse:Security>
    </soap:Header>
    <soap:Body>
        <CreateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
            <Objects xsi:type="Subscriber">
                <ObjectID xsi:nil="true">
                </ObjectID>
                <EmailAddress>help@example.com</EmailAddress>
                <Attributes>
                    <Name>ChannelMemberID</Name>
                    <Value>123</Value>
                </Attributes>
                <!-- Lists tag is optional. If not included they are added to All Subscribers only -->
                <Lists>
                    <ID>123</ID>
                    <ObjectID xsi:nil="true" />
                </Lists>
            </Objects>
        </CreateRequest>
    </soap:Body>
</soap:Envelope>
```

## Related Items

[CliendID](atlas.en-us.noversion.mc-apis.meta/mc-apis/clientid.htm)

## Related Topics

- CliendID (atlas.en-us.noversion.mc-apis.meta/mc-apis/clientid.htm)
