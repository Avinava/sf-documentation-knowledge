---
title: "Adding Data to Data Extension Object"
domain: mc-apis
topic: adding-data-to-data-extension-object
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:15.119Z
estimatedTokens: 3832
keywords: [Adding, Extension, Why, Add, How, Sample, NET, Code, Java, Axis, 1.4, SOAP, Envelope, Items]
---

> This page contains information  about adding data to an existing data extension object.

# Adding Data to Data Extension Object

This page contains information about adding data to an existing data extension object.

## Why Add Data to a Data Extension Object

You can add more data to an existing data extension object as part of adding new records to your data extension. What information you add depends on the nature of the data extension.

## How to Add Data to a Data Extension Object

Use the sample code below as a model for your own API call.

### Sample .NET Code

```apex
/**
* Code to Add Data to DataExtension Object.
* DE Name: Definition_Key
* @johndoe
*/
     public void testAddDataToExtension()
        {
            DataExtensionObject extensionObject1 = new DataExtensionObject();
            APIProperty property1 = new APIProperty();
            property1.Name = "EmailAddress";
            property1.Value = "johndoe@example.com";
            APIProperty property2 = new APIProperty();
            property2.Name = "FirstName";
            property2.Value = "John";
            APIProperty property3 = new APIProperty();
            property3.Name = "LastName";
            property3.Value = "Doe";
            APIProperty property4 = new APIProperty();
            property4.Name = "PrimaryKey";
            property4.Value = "PrimaryKey";
            extensionObject1.Properties = new APIProperty[] {property1, property2, property3, property4};
            extensionObject1.CustomerKey = "Definition_Key";
            APIObject[] objects = new APIObject[] {extensionObject1};
            string requestId = null;
            CreateResult[] results =
                soapClient.Create(new CreateOptions(), objects, out requestId, out overallStatus);
            Console.WriteLine("done.....");
        }
```

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
public partial class DataExtensionObjectUpSert : System.Web.UI.Page
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
            deo.CustomerKey = "12345";//External Key of the Data Extension from the UI
            deo.Properties = new APIProperty[3];//Number of the Columns in the Data Extension
            deo.Properties[0] = new APIProperty();
            deo.Properties[0].Name = "subscriber_key";//Name of the first Column
            deo.Properties[0].Value = "12345";//Value to be inserted in above column
            deo.Properties[1] = new APIProperty();
            deo.Properties[1].Name = "email_address";//Name of the second Column
            deo.Properties[1].Value = "help@example.com";//Value to be inserted in above column
            deo.Properties[2] = new APIProperty();
            deo.Properties[2].Name = "full_name";//Name of the third Column
            deo.Properties[2].Value = "angel cruz";//Value to be inserted in above column
            //Create the CreateOptions object for the Create method
            UpdateOptions uo = new UpdateOptions();
            uo.SaveOptions = new SaveOption[1];
            uo.SaveOptions[0] = new SaveOption();
            uo.SaveOptions[0].SaveAction = SaveAction.UpdateAdd;//This set this call to act as an UpSert, meaning if the Subscriber doesn't exist it Creates one. If the Subscriber exists, it updates it.
            uo.SaveOptions[0].PropertyName = "*";
            try
            {
                string uRequestID = String.Empty;
                string uStatus = String.Empty;
                //Call the Update method on the DataExtensionObject object
                UpdateResult[] uResults = client.Update(uo, new APIObject[] { deo }, out uRequestID, out uStatus);
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
            catch (Exception exCreate)
            {
                //Set Message
                lblMessage.Text += "<br/><br/>UPDATE ERROR:<br/>" + exCreate.Message;
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

### Sample Java Code (Axis 1.4) - Adding Information to a Data Extension Object

```apex
/**
* Add data to DataExtension
*
* @throws RemoteException
*/
public void testAddDataToExtension() throws RemoteException {
    CreateRequest createRequest = new CreateRequest();
    DataExtensionObject dataExtensionObject = new DataExtensionObject();
    dataExtensionObject.setCustomerKey("UsingAPI_For_Test_1");
    //Column values
    APIProperty apiProperty1 = new APIProperty();
    apiProperty1.setName("EmailAddress");
    apiProperty1.setValue("acruz@example.com");
    APIProperty apiProperty2 = new APIProperty();
    apiProperty2.setName("ChannelUser");
    apiProperty2.setValue("Test Name");
    APIProperty apiProperty4 = new APIProperty();
    apiProperty4.setName("ChannelUser_EmailAddress");
    apiProperty4.setValue("Test Name");
    APIProperty apiProperty3 = new APIProperty();
    apiProperty3.setName("Demographic_Address");
    apiProperty3.setValue("Test Name");
    APIProperty[] apiProperties = new APIProperty[]{apiProperty1, apiProperty3, apiProperty4};
    dataExtensionObject.setProperties(apiProperties);
    Soap stub = init();
    createRequest.setOptions(new CreateOptions());
    createRequest.setObjects(new APIObject[]{dataExtensionObject});
    CreateResponse createResponse = stub.create(createRequest);
    if (createResponse != null)
    System.out.println("Response ::: " + createResponse.getClass());
}
/**
* Add data to DataExtension
*
* @throws RemoteException
*/
public void testVolumeOnDataToExtension() throws RemoteException {
    CreateRequest createRequest = new CreateRequest();
    //Column values
    ArrayList a = new ArrayList();
    for (int i = 20000; i < 20500; i++) {
    DataExtensionObject dataExtensionObject = new DataExtensionObject();
    dataExtensionObject.setCustomerKey("Volume_Test_Key");
    APIProperty apiProperty1 = new APIProperty();
        apiProperty1.setName("EmailAddress");
    apiProperty1.setValue("acruz@example.com");
    APIProperty apiProperty2 = new APIProperty();
    apiProperty2.setName("Key");
    apiProperty2.setValue("Key" + i);
    APIProperty apiProperty3 = new APIProperty();
    apiProperty3.setName("First_Name");
    apiProperty3.setValue("First_Name_First_Name_First_Name_First_Name_First");
    APIProperty apiProperty4 = new APIProperty();
    apiProperty4.setName("Last_Name");
    apiProperty4.setValue("Last_Name_Last_Name_Last_Name_Last_Name_Last_Name");
    APIProperty apiProperty5 = new APIProperty();
    apiProperty5.setName("Full_Name");
    apiProperty5.setValue("First_Name_First_Name_First_Name_First_Name_First" + "Last_Name_Last_Name_Last_Name_Last_Name_Last_Name");
    String str_256 = "256256256256256256256256256256256256256256256256256256256256256256256256256256256256256256256256256256256256256256256256256256256256256256256256256256256256256256256256256256256256256256256256256256256256256256256256256256256256256256256256256256256256256";
    String str_1000 = "100010001000100010001000100010001000100010001000100010001000100010001000100010001000100010001000100010001000100010001000100010001000100010001000100010001000100010001000100010001000100010001000100010001000100010001000100010001000100010001000100010001000100010001000100010001000100010001000100010001000100010001000100010001000100010001000100010001000100010001000100010001000100010001000100010001000100010001000100010001000100010001000100010001000100010001000100010001000100010001000100010001000100010001000100010001000100010001000100010001000100010001000100010001000100010001000100010001000100010001000100010001000100010001000100010001000100010001000100010001000100010001000100010001000100010001000100010001000100010001000100010001000100010001000100010001000100010001000100010001000100010001000100010001000100010001000100010001000100010001000100010001000100010001000100010001000100010001000100010001000100010001000100010001000100010001000100010001000100010001000100010001000100010001000100010001000100";
    String str_1500 = "15001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150015001500150";
    APIProperty apiProperty6 = new APIProperty();
    apiProperty6.setName("Desc1");
    apiProperty6.setValue(str_256);
    APIProperty apiProperty7 = new APIProperty();
    apiProperty7.setName("Desc2");
    apiProperty7.setValue(str_256);
    APIProperty apiProperty8 = new APIProperty();
    apiProperty8.setName("Desc3");
    apiProperty8.setValue(str_256);
    APIProperty apiProperty9 = new APIProperty();
    apiProperty9.setName("Desc4");
    apiProperty9.setValue(str_1000);
    APIProperty apiProperty10 = new APIProperty();
    apiProperty10.setName("Desc5");
    apiProperty10.setValue(str_1000);
    APIProperty apiProperty11 = new APIProperty();
    apiProperty11.setName("Desc6");
    apiProperty11.setValue(str_1000);
    APIProperty apiProperty12 = new APIProperty();
    apiProperty12.setName("Desc7");
    apiProperty12.setValue(str_1500);
    APIProperty apiProperty13 = new APIProperty();
    apiProperty13.setName("Desc8");
    apiProperty13.setValue(str_1500);
    APIProperty[] apiProperties = new APIProperty[]{apiProperty1, apiProperty2, apiProperty3, apiProperty4, apiProperty5, apiProperty6, apiProperty7, apiProperty8, apiProperty9, apiProperty10, apiProperty11, apiProperty12, apiProperty13};
    dataExtensionObject.setProperties(apiProperties);
    ClientID clientID = new ClientID();
    clientID.setID(219481);
    dataExtensionObject.setClient(clientID);
    a.add(dataExtensionObject);
    }
    APIObject[] apiObjects = new APIObject[a.size()];
    a.toArray(apiObjects);
    Soap stub = init();
    CreateOptions options = new CreateOptions();
    options.setRequestType(RequestType.Asynchronous);
    createRequest.setOptions(options);
    createRequest.setObjects(apiObjects);
    System.out.println("StartTime ::: " + getFormatedDate(new Date()));
    CreateResponse createResponse = stub.create(createRequest);
    System.out.println("EndTime ::: " + getFormatedDate(new Date()));
    if (createResponse != null)
    System.out.println("Response ::: " + createResponse.getOverallStatus());
}
```

By default, this call uses an AddOnly save action, so do not specify a save action in the call.

### SOAP Envelope

```
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:wsa="http://schemas.xmlsoap.org/ws/2004/08/addressing" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
     <soap:Header>
          <wsse:Security soap:mustUnderstand="1">
               <wsse:UsernameToken wsu:Id="SecurityToken-6421ac0b-a454-42a3-99f7-a77ace024446">
                                                      <wsse:Username>XXXXX</wsse:Username>
                    <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">XXXXX</wsse:Password>
               </wsse:UsernameToken>
          </wsse:Security>
     </soap:Header>
     <soap:Body>
          <CreateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
               <Options/>
                    <Objects xsi:type="DataExtensionObject">
                         <PartnerKey xsi:nil="true"/>
                         <ObjectID xsi:nil="true"/>
                         <CustomerKey>Definition_Key</CustomerKey>
                         <Properties>
                              <Property>
                                   <Name>EmailAddress</Name>
                                   <Value>johndoe@example.com</Value>
                        </Property>
                        <Property>
                        <Name>FirstName</Name>
                           <Value>John</Value>
                        </Property>
                        <Property>
                           <Name>LastName</Name>
                           <Value>Doe</Value>
                        </Property>
                        <Property>
                           <Name>PrimaryKey</Name>
                           <Value>PrimaryKey</Value>
                        </Property>
                    </Properties>
                 </Objects>
        </CreateRequest>
    </soap:Body>
</soap:Envelope>
```

## Related Items

[Data Extensions](https://help.salesforce.com/articleView?id=mc_es_data_extension_data_relationships_classic.htm&type=5)
