---
title: "Create a Subscriber Attribute"
domain: mc-apis
topic: create-a-subscriber-attribute
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:21.077Z
estimatedTokens: 2543
keywords: [Subscriber, Attribute, creating, Why, How, Sample, NET, Code, PropertyDefinition, Restricted, Deleting, Java, Axis, 1.4, CXF]
---

# Create a Subscriber Attribute

> This page contains information  about creating a subscriber attribute.

# Create a Subscriber Attribute

This page contains information about creating a subscriber attribute.

## Why Create a Subscriber Attribute

Subscriber attributes contain specific information about your subscribers, such as first and last name, gender, and geographical location. You can assign specific information as part of a subscriber attribute to be used as part of sends or subscriber management. Use the information to better target your sends and include only the subscribers you wish in certain groups. For example, you can create a subscriber attribute called Sales Region, assign subscribers to those regions, then conduct sends to specific groups instead of all subscribers.

## How To Create a Subscriber Attribute

Use the sample code below as models for your own API calls. The number of subscriber attributes that can be created on an account is defined during account configuration. More subscriber attributes cannot be added to an account without re-configuring the number available for the account. Contact your Marketing Cloud representative for more information about changing the number of subscriber attributes available on your account.

### Sample .NET Code

```apex
using System;
using System.Configuration;
using System.Data;
using System.Web;
using etAPI;
public partial class SubscriberAttributeCreate : System.Web.UI.Page
{
    //Global Variables
    private SoapClient client = new SoapClient();
    protected void btnSubmit_Click(object sender, EventArgs e)
    {
        try
        {
            //Create Subscriber object [Subscribers > My Subscribers > Profile Management]
            PropertyDefinition pd = new PropertyDefinition();
            pd.Name = "FromAPI";
            pd.PropertyType = PropertyType.@string;
            pd.PropertyTypeSpecified = true;
            pd.IsEditable = true;
            pd.IsEditableSpecified = true;
            try
            {
                string status = String.Empty;
                string statusMess = String.Empty;
                string requestID = String.Empty;
                //Call the Create method on the PropertyDefinition object
                ConfigureResult[] results = null;
                results = client.Configure(null, "create", new APIObject[] { pd }, out status, out statusMess, out requestID);
                //Display Results
                lblMessage.Text += "Overall Status: " + status;
                lblMessage.Text += "<br />";
                lblMessage.Text += "Number of Results: " + results.Length;
                lblMessage.Text += "<br />";
                //Loop through each object returned and display the StatusMessage
                foreach (ConfigureResult cr in results)
                {
                    lblMessage.Text += "Status Message: " + cr.StatusMessage;
                    lblMessage.Text += "<br />";
                }
            }
            catch (Exception exCreate)
            {
                //Set Message
                lblMessage.Text += "<br /><br />CREATE ERROR:<br />" + exCreate.Message;
            }
        }
        catch (Exception exc)
        {
            //Set Message
            lblMessage.Text += "<br /><br />###ERROR<br />" + exc.Message;
        }
    }
}
```

### Sample Code for Creating a Subscriber Attribute

```
PropertyDefinition propDef = new PropertyDefinition();
propDef.Name = "CollegeName";
propDef.PropertyType = PropertyType.@string;
propDef.PropertyTypeSpecified = true;
propDef.IsEditable = true;
propDef.IsEditableSpecified = true;
// Call the Configure command with the Action "create"
ConfigureResult[] results = exacttarget.Configure(null, "create", new APIObject[] { propDef }, out status, out message, out requestID);
// Output the results
Console.WriteLine(status);
Console.WriteLine(message);
Console.WriteLine(results[0].ErrorCode);
Console.WriteLine(results[0].StatusCode);
Console.WriteLine(results[0].StatusMessage);
Console.WriteLine(results[0].Object.ID); // id of the attribute
```

### Sample PropertyDefinition for a Subscriber Attribute with Restricted Values

```
PropertyDefinition propDef = new PropertyDefinition();
propDef.Name = "MaxEducation";
propDef.PropertyType = PropertyType.@string;
propDef.PropertyTypeSpecified = true; // .NET only
propDef.IsRestrictedPicklist = true;
propDef.IsRestrictedPicklistSpecified = true; // .NET only
propDef.PicklistItems = new PicklistItem[3];
propDef.PicklistItems[0] = new PicklistItem();
propDef.PicklistItems[0].Value = "High School"; // default value
propDef.PicklistItems[0].IsDefaultValue = true;
propDef.PicklistItems[0].IsDefaultValueSpecified = true; // .NET only
propDef.PicklistItems[1] = new PicklistItem();
propDef.PicklistItems[1].Value = "Bachelors";
propDef.PicklistItems[2] = new PicklistItem();
propDef.PicklistItems[2].Value = "Masters";
```

### Sample Code for Deleting a Subscriber Attribute

```
PropertyDefinition propDef = new PropertyDefinition();
propDef.ID = 1234;
propDef.IDSpecified = true; //.NET only
// Call the Configure command with the Action "delete"
ConfigureResult[] results = integrationFramework.Configure(null, "delete", new APIObject[] { propDef }, out status, out message, out requestID);
// Output the results
Console.WriteLine(status); // OK, Error, or Has Error
```

### Sample Java Code (Axis 1.4)

The sample code below demonstrates how to create attributes for On Your Behalf and Lock and Publish accounts.

```apex
public void testCreateAttributeForSubscriber() throws RemoteException {
        AccountTestCase accountTestCase = new AccountTestCase();
        Account account = accountTestCase.retrieveAccountByPartnerKey();
        Soap stub = init();
        ConfigureRequestMsg configureRequestMsg = new ConfigureRequestMsg();
        PropertyDefinition definition = new PropertyDefinition();
        //create special Attribute under profile management, this attribute does not hold html content
        definition.setName("HTML__html");
        definition.setPropertyType(PropertyType.value1);
        //Set ClientID to create attribute on sub-account
        ConfigureOptions options = new ConfigureOptions();
        ClientID clientID = new ClientID();
        clientID.setPartnerClientKey(account.getPartnerKey());
        options.setClient(clientID);  //this creates attribute in sub-account
        //definition.setClient(clientID); //this creates attribute in parent-account
        configureRequestMsg.setOptions(options);
        configureRequestMsg.setAction("Create");
        APIObject[] objects = {definition};
        configureRequestMsg.setConfigurations(objects);
        //API call to create to Attribute....
        ConfigureResponseMsg responseMsg = stub.configure(configureRequestMsg);
        assertNotNull(responseMsg.getOverallStatusMessage());
}
```

### Sample Java Code (CXF)

The code below creates a new attribute for subscribers:

```apex
// Creates new attributes in Marketing Cloud
        public void testCreateAttributeForSubscriber() throws RemoteException {
try {
            Soap stub = init();

              PropertyDefinition definition = new PropertyDefinition();
              //create special Attribute under profile management, this attribute holds html content
              definition.setName("API_CREATED");
              definition.setPropertyType(PropertyType.STRING);

              //Set ClientID to create attribute on sub-account
              ConfigureOptions options = new ConfigureOptions();
             //ClientID clientID = new ClientID();
              //clientID.setPartnerClientKey(account.getCustomerKey());
              //options.setClient(clientID);  //this creates attribute in sub-account
              //definition.setClient(clientID); //this creates attribute in parent-account
       ConfigureRequestMsg.Configurations configuration = new ConfigureRequestMsg.Configurations();
       configuration.getConfiguration().addAll(Arrays.asList(definition));

       ConfigureRequestMsg configureRequestMsg = new ConfigureRequestMsg();
       configureRequestMsg.setOptions(options);
       configureRequestMsg.setAction("Create");
       configureRequestMsg.setConfigurations(configuration);
       //API call to create to Attribute....
       ConfigureResponseMsg responseMsg = stub.configure(configureRequestMsg);
       assertNotNull(responseMsg.getOverallStatusMessage());

    } catch (Exception e) {
                e.printStackTrace();  //To change body of catch statement use File | Settings | File Templates.

        }
    }
```

### Sample SOAP Envelope

```
<s:Envelope xmlns:s="http://www.w3.org/2003/05/soap-envelope" xmlns:a="http://schemas.xmlsoap.org/ws/2004/08/addressing" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
 <s:Header>
  <a:Action s:mustUnderstand="1">Configure</a:Action>
  <a:MessageID>urn:uuid:730473d2-bc0c-4a96-bcb5-36000c55dc33</a:MessageID>
  <a:ReplyTo>
   <a:Address>http://schemas.xmlsoap.org/ws/2004/08/addressing/role/anonymous</a:Address>
  </a:ReplyTo>
  <a:To s:mustUnderstand="1">https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/Service.asmx</a:To>
  <o:Security s:mustUnderstand="1" xmlns:o="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
   <u:Timestamp u:Id="_0">
    <u:Created>2009-09-16T15:53:40.216Z</u:Created>
    <u:Expires>2009-09-16T15:58:40.216Z</u:Expires>
   </u:Timestamp>
   <o:UsernameToken u:Id="uuid-05561d8a-6ec8-4bb4-aa71-e4c0c6f385c8-1">
    <o:Username>XXXXX</o:Username>
    <o:Password>XXXXX</o:Password>
   </o:UsernameToken>
  </o:Security>
 </s:Header>
 <s:Body xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <ConfigureRequestMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">
   <Options>
   </Options>
   <Action>Create</Action>
   <Configurations>
    <Configuration xsi:type="PropertyDefinition">
     <PartnerKey xsi:nil="true">
     </PartnerKey>
     <ObjectID xsi:nil="true">
     </ObjectID>
     <Name>New_Attribute_Name</Name>
     <PropertyType>string</PropertyType>
    </Configuration>
   </Configurations>
  </ConfigureRequestMsg>
 </s:Body>
</s:Envelope>
```
