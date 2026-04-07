---
title: "Create a Send Object"
domain: mc-apis
topic: create-a-send-object
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:21.040Z
estimatedTokens: 1586
keywords: [Send, creating, new, Why, How, Sample, NET, Code, Java, Axis, 1.4, SOAP, Envelope, Email]
---

# Create a Send Object

> This page contains information  about creating a new Send object.

# Create a Send Object

This page contains information about creating a new Send object.

## Why Create a Send Object

You can use the newly created Send object to conduct an email send or as part of an email send definition.

## How to Create a Send Object

Use the code below as a model to construct your own API call.

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
public partial class SendCreate : System.Web.UI.Page
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
            //Create a GUID for ESD to ensure a unique name and customer key
            string strGUID = System.Guid.NewGuid().ToString();
            Send s = new Send();
            Email em = new Email();
            em.ID = 887526;
            em.IDSpecified = true;
            s.Email = em;
            //Subscriber[] subs = new Subscriber[1];
            //subs[0] = new Subscriber();
            //subs[0].EmailAddress = "email@example.com";
            //subs[0].SubscriberKey = System.Guid.NewGuid().ToString();
            //Create the List Object for the Send Object
            s.List = new List[1];
            s.List[0] = new List();
            s.List[0].ID = 256415;
            s.List[0].IDSpecified = true;
            //s.List[0].Subscribers = subs;
            string cRequestID = String.Empty;
            string cStatus = String.Empty;
            try
            {
                //Call the Create method on the Send object
                CreateResult[] cResults = client.Create(new CreateOptions(), new APIObject[] { s }, out cRequestID, out cStatus);
                //Display Results
                lblMessage.Text += "Overall Create Status: " + cStatus;
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
                lblMessage.Text += "<br/><br/>CREATE SEND ERROR:<br/>" + exCreate.Message;
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
public void testSendEmailToList() throws RemoteException {
        Soap stub = init();
        Send send = new Send();
        send.setEmail(testGetEmailById());
        List l1= new List();
        l1.setID(new Integer(12345));
        List l2= new List();
        l2.setID(new Integer(54321));
        List[] ids = {l1,l2};
        send.setList(ids);
        send.setFromAddress("acruz@example.com");
        send.setFromName("Angel Cruz");
        APIObject[] apiObjectList = {send};
        CreateRequest createRequest = new CreateRequest(new CreateOptions(), apiObjectList);
        CreateResponse createResponse = stub.create(createRequest);
        System.out.println("CreateResponse ::: " + createResponse.getOverallStatus());
    }
    public void testSend1000EmailToList() throws RemoteException {
        Soap stub = init();
        Send send = new Send();
        Email e = new Email();
        e.setID(12345);
        send.setEmail(e);
        ArrayList arr = new ArrayList();
        for (int i = 0; i < 1000; i++) {
            Subscriber s = new Subscriber();
            s.setSubscriberKey("HUB_" + i);
            s.setEmailAddress("hub_" + i + "@example.com");
            Attribute a1 = new Attribute();
            a1.setName("username");
            a1.setValue("username_" + i);
            Attribute a2 = new Attribute();
            a2.setName("first_name");
            a2.setValue("firstname_1" + i);
            s.setAttributes(new Attribute[]{a1, a2});
            arr.add(s);
        }
        Subscriber s = new Subscriber();
        s.setSubscriberKey("ac_hub_1_");
        s.setEmailAddress("test@example.com");
        Attribute a1 = new Attribute();
        a1.setName("username");
        a1.setValue("username_1");
        Attribute a2 = new Attribute();
        a2.setName("first_name");
        a2.setValue("firstname _1");
        s.setAttributes(new Attribute[]{a1, a2});
        arr.add(s);
        List l = new List();
        Subscriber[] ss = new Subscriber[arr.size()];
        arr.toArray(ss);
        l.setSubscribers(ss);
        send.setList(new List[]{l});
        send.setFromAddress("acruz@example.com");
        send.setFromName("Angel Cruz");
        CreateOptions c = new CreateOptions();
        c.setRequestType(RequestType.Asynchronous);
        APIObject[] apiObjectList = {send};
        CreateRequest createRequest = new CreateRequest(c, apiObjectList);
        CreateResponse createResponse = stub.create(createRequest);
        System.out.println("CreateResponse ::: " + createResponse.getOverallStatus());

    }
```

### Sample SOAP Envelope - Create a Send Object Using an Email ID and a List ID

```
<soap:Body>
    <CreateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
        <Options/>
        <Objects xsi:type="Send">
            <ObjectID xsi:nil="true"/>
            <Email>
                <ID>12345</ID>
            </Email>
            <List>
                <ID>12345</ID>
            </List>
        </Objects>
    </CreateRequest>
</soap:Body>
```
