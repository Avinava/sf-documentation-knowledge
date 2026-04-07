---
title: "Create a Data Extension"
domain: mc-apis
topic: create-a-data-extension
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:16.124Z
estimatedTokens: 11149
keywords: [Extension, store, subscribers, Marketing, Cloud, How, Sample, NET, Code, PHP, Java, Axis, 1.4, Ruby, Rails, Sendable, SOAP, Non-Nullable, Different, Creating, Retention, Options, Setting, Decimal, Date, Date-type, Items]
---

> Use a data extension to store information about your subscribers in Marketing Cloud.

# Create a Data Extension

Use a data extension to store information about your subscribers in Marketing Cloud.

## How To Create a Data Extension

This example creates a data extension to import or store data. After the data extension is created, associate it with an import definition. This example maps EmailAddress field of the data extension to Marketing Cloud field EmailAddress to create a data extension used to store the audience of an email send.

While you can create a data extension with an external key larger than 36 characters, doing so may cause problems when using the data extension in conjunction with other processes (especially if working with the UI, which truncates the external key to the first 36 characters). Limit your data extension external keys to 36 characters to help ensure all further processes function correctly.

### Sample .NET Code

```apex
private void CreateDE()
        {
            SoapClient ETClient = new SoapClient();
            ETClient.ClientCredentials.UserName.UserName = "X";
            ETClient.ClientCredentials.UserName.Password = "X";
            DataExtension de = new DataExtension();
            de.Name = "API Created Data Extension";
            de.CustomerKey = "API Created Data Extension";
            de.IsSendable = true;
            de.IsSendableSpecified = true;
            de.SendableDataExtensionField = new DataExtensionField();
            de.SendableDataExtensionField.Name = "EMAIL";
            de.SendableSubscriberField = new Marketing CloudClient.Attribute();
            de.SendableSubscriberField.Name = "Email Address";
            List<DataExtensionField> fields = new List<DataExtensionField>();
            //Create the Primary Key field named EMAIL
            DataExtensionField field = new DataExtensionField();
            field.Name = "EMAIL";
            field.FieldType = DataExtensionFieldType.EmailAddress;
            field.FieldTypeSpecified = true;
            field.IsRequired = true;
            field.IsRequiredSpecified = true;
            field.IsPrimaryKey = true;
            field.IsPrimaryKeySpecified = true;
            fields.Add(field);
            // Create a field for first name
            field = new DataExtensionField();
            field.Name = "FIRST NAME";
            field.FieldType = DataExtensionFieldType.Text;
            field.FieldTypeSpecified = true;
            fields.Add(field);
            // Create a field for first name
            field = new DataExtensionField();
            field.Name = "LAST NAME";
            field.FieldType = DataExtensionFieldType.Text;
            field.FieldTypeSpecified = true;
            fields.Add(field);
            de.Fields = fields.ToArray();
            string sStatus = "";
            string sRequestId = "";
            CreateResult[] aoResults = ETClient.Create(new CreateOptions(), new APIObject[] { de }, out sRequestId, out sStatus);
            Console.WriteLine("Status: " + sStatus);
            Console.WriteLine("Request ID: " + sRequestId);
        }
```
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
public partial class DataExtensionCreate : System.Web.UI.Page
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
            //Create a GUID to ensure a unique subscriber key
            string strGUID = System.Guid.NewGuid().ToString();
            //Create DataExtension object [Subscribers > Data Extensions > Data Extensions]
            DataExtension de = new DataExtension();
            de.CustomerKey = strGUID;
            de.Name = strGUID;
            //Is this data base table going to house Subscribers?
            //de.IsSendable = true;
            //de.IsSendableSpecified = true;
            de.Fields = new DataExtensionField[2];
            //1
            //Set the column parameters
            de.Fields[0] = new DataExtensionField();
            de.Fields[0].Name = "FirstName";
            de.Fields[0].FieldType =  DataExtensionFieldType.Text;
            de.Fields[0].FieldTypeSpecified = true;
            de.Fields[0].IsRequired = false;
            de.Fields[0].IsRequiredSpecified = true;
            de.Fields[0].IsPrimaryKey = false;
            de.Fields[0].IsPrimaryKeySpecified = true;
            de.Fields[0].MaxLength = 200;//If this is the Primary Key MaxLength is required.
            de.Fields[0].MaxLengthSpecified = true;
            //2
            //Set the column parameters
            de.Fields[1] = new DataExtensionField();
            de.Fields[1].Name = "LastName";
            de.Fields[1].FieldType = DataExtensionFieldType.Text;
            de.Fields[1].FieldTypeSpecified = true;
            de.Fields[1].IsRequired = false;
            de.Fields[1].IsRequiredSpecified = true;
            de.Fields[1].IsPrimaryKey = false;
            de.Fields[1].IsPrimaryKeySpecified = true;
            de.Fields[1].MaxLength = 200;//If this is the Primary Key MaxLength is required.
            de.Fields[1].MaxLengthSpecified = true;
            try
            {
                string cRequestID = String.Empty;
                string cStatus = String.Empty;
                //Call the Create method on the Subscriber object
                CreateResult[] cResults = client.Create(new CreateOptions(), new APIObject[] { de }, out cRequestID, out cStatus);
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

### Sample PHP Code

```
<?php
require('exacttarget_soap_client.php');

$wsdl = 'https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/etframework.wsdl';

try          {

        /* Create the Soap Client */
        $client = new Marketing CloudSoapClient($wsdl, array('trace'=>1));

        /* Set username and password here */
        $client->username = 'XXXXX';
        $client->password = 'XXXXX';

                                $newde = new Marketing Cloud_DataExtension();
                                $newde->Name = "New DE";
                                $newde->CustomerKey = "New DE";
                                $newde->IsSendable = true;
                                $newde->IsTestable = false;
                                $newde->SendableDataExtensionField = new Marketing Cloud_DataExtensionField();
                                $newde->SendableDataExtensionField->Name = 'EMAIL';
                                $newde->SendableSubscriberField = new Marketing Cloud_Attribute();
                                $newde->SendableSubscriberField->Name = 'Email Address';

                                $newde->Fields = array();
                                $emailfield = new Marketing Cloud_DataExtensionField();
                                $emailfield->Name = 'EMAIL';
                                $emailfield->IsPrimaryKey = true;
                                $emailfield->IsRequired = true;
                                $emailfield->FieldType = Marketing Cloud_DataExtensionFieldType::EmailAddress;
                                $newde->Fields[] = $emailfield;

                                $fnamefield = new Marketing Cloud_DataExtensionField();
                                $fnamefield->Name = 'First Name';
                                $fnamefield->IsPrimaryKey = false;
                                $fnamefield->FieldType = Marketing Cloud_DataExtensionFieldType::Text;
                                $newde->Fields[] = $fnamefield;

                                $lnamefield = new Marketing Cloud_DataExtensionField();
                                $lnamefield->Name = 'Last Name';
                                $lnamefield->IsPrimaryKey = false;
                                $lnamefield->FieldType = Marketing Cloud_DataExtensionFieldType::Text;
                                $newde->Fields[] = $lnamefield;

                                $object = new SoapVar($newde, SOAP_ENC_OBJECT, 'DataExtension', "http://exacttarget.com/wsdl/partnerAPI");
                                $request = new Marketing Cloud_CreateRequest();
                                $request->Options = NULL;
                                $request->Objects = array($object);

                                $results = $client->Create($request);
                                var_dump($results);

} catch (Exception  $e) {
                var_dump($e);
}
?>
```

### Sample Java Code (Axis 1.4)

```apex
/**
* Creating DataExtension which is used for sending email.
* Capture Data Extension System Generated ObjectID. This is used to associate
* with an EmailSendDefinition object.
*
* @throws RemoteException
*/
public void testCreateDataExtensionMarket2Lead() throws RemoteException {
        Soap_PortType stub = init();
        DataExtension dataExtension = new DataExtension();
        dataExtension.setName("DataExtensionFromAPI");
        dataExtension.setCustomerKey("DataExtensionFromAPI");
        //Field 1::
        DataExtensionField field1 = new DataExtensionField();
        field1.setName("EmailAddress");
        field1.setCustomerKey("EmailAddress_Key");
        field1.setFieldType(DataExtensionFieldType.EmailAddress);
        //Field 2::
        DataExtensionField field2 = new DataExtensionField();
        field2.setName("ChannelUser");
        field2.setCustomerKey("ChannelUser_Key");
        field2.setFieldType(DataExtensionFieldType.Text);
        DataExtensionField field3 = new DataExtensionField();
        field3.setName("ChannelUser_EmailAddress");
        field3.setCustomerKey("ChannelUser_EmailAddress_Key");
        field3.setFieldType(DataExtensionFieldType.EmailAddress);
        DataExtensionField field4 = new DataExtensionField();
        field4.setName("Demographic_Address");
        field4.setCustomerKey("Demographic_Address_Key");
        field4.setFieldType(DataExtensionFieldType.Text);
        //This is required if you are using DataExtension to send emails.
        dataExtension.setSendableDataExtensionField(field1);
        dataExtension.setSendableSubscriberField(new Attribute("Email Address", ""));
        dataExtension.setIsSendable(true);
        dataExtension.setFields(new DataExtensionField[]{field1, field2, field3, field4});
        //dataExtension.setTemplate(dataExtensionTemplate);
        CreateRequest createRequest = new CreateRequest();
        createRequest.setObjects(new APIObject[]{dataExtension});
        createRequest.setOptions(new CreateOptions());
        CreateResponse createResponse = stub.create(createRequest);
  System.out.println("CreateResponse:::"  +
createResponse.getOverallStatus());
    }
```

This sample code demonstrates how to create a data extension using the subscriber key feature:

```apex
public void testCreateDataExtensionTest() throws RemoteException {
    Soap stub = init();
    DataExtension dataExtension = new DataExtension();
    dataExtension.setName("UsingAPI_For_Test_1");
    dataExtension.setCustomerKey("UsingAPI_For_Test_1");
    //Field 1::
    DataExtensionField field1 = new DataExtensionField();
    field1.setName("EmailAddress");
    field1.setCustomerKey("EmailAddress_Key");
    field1.setFieldType(DataExtensionFieldType.EmailAddress);
    //Field 2::
    DataExtensionField field2 = new DataExtensionField();
    field2.setName("ChannelUser");
    field2.setCustomerKey("ChannelUser_Key");
    field2.setFieldType(DataExtensionFieldType.Text);
    DataExtensionField field3 = new DataExtensionField();
    field3.setName("ChannelUser_EmailAddress");
    field3.setCustomerKey("ChannelUser_EmailAddress_Key");
    field3.setFieldType(DataExtensionFieldType.Text);
    DataExtensionField field4 = new DataExtensionField();
    field4.setName("Demographic_Address");
    field4.setCustomerKey("Demographic_Address_Key");
    field4.setFieldType(DataExtensionFieldType.Text);
    Attribute a = new Attribute();
    a.setName("Subscriber Key");
    a.setValue("");
    dataExtension.setSendableDataExtensionField(field1);
    dataExtension.setSendableSubscriberField(a);
    dataExtension.setIsSendable(true);
    dataExtension.setFields(new DataExtensionField[]{field1, field2, field3, field4});
    //dataExtension.setTemplate(dataExtensionTemplate);
    CreateRequest createRequest = new CreateRequest();
    createRequest.setObjects(new APIObject[]{dataExtension});
    createRequest.setOptions(new CreateOptions());
    CreateResponse createResponse = stub.create(createRequest);
    System.out.println("CreateResponse ::: " + createResponse.getOverallStatus());
}
```

### Sample Ruby on Rails Code

```
require 'rubygems'
gem 'soap4r'
require 'soap/wsdlDriver'
require 'soap/header/simplehandler'
require 'defaultDriver.rb'
require 'authStub.rb'
#Async create options
#options = CreateOptions.new(nil,nil,nil,nil,nil,nil,nil,nil,'Asynchronous')
options = nil
#Data Extension Create
de = []
deFields = [
  DataExtensionField.new(nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,'EmailAddress',nil,nil,nil,1,1,1,1,1,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,200,nil,nil,1,nil,nil,0,nil,nil,nil,0,nil,nil,nil,nil,0,1,'Text',nil),
  DataExtensionField.new(nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,'FirstName',nil,nil,nil,true,1,1,1,1,nil,nil,nil,nil,nil,nil,nil,nil,nil,'Valued Subscriber',nil,200,nil,nil,0,nil,nil,1,nil,nil,nil,0,nil,nil,nil,nil,1,0,'Text',nil),
  DataExtensionField.new(nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,'PhoneNumber',nil,nil,nil,1,1,1,1,1,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,200,nil,nil,0,nil,nil,0,nil,nil,nil,0,nil,nil,nil,nil,2,0,'Phone',nil)
]
5.times do |i|
  deName = "APITestDe#{i}"
  deDesc = deName + ' Created through the API'
  de.push(DataExtension.new(nil,nil,nil,nil,nil,nil,nil,deName,nil,nil,deName,deDesc,false,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,[*deFields],nil,nil,nil))
end
apiObj = de
resp = $driver.create(CreateRequest.new(options,[*apiObj]))
```

### Sample Ruby on Rails Code for Create a Sendable Data Extension

```
require 'rubygems'
gem 'soap4r'
require 'soap/wsdlDriver'
require 'soap/header/simplehandler'
require 'defaultDriver.rb'
require 'authStub.rb'
#Async create options
#options = CreateOptions.new(nil,nil,nil,nil,nil,nil,nil,nil,'Asynchronous')
options = nil
#Data Extension Create
de = []
deFields = [
  DataExtensionField.new(nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,'EmailAddress',nil,nil,nil,1,1,1,1,1,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,1,nil,nil,0,nil,nil,nil,0,nil,nil,nil,nil,0,1,'EmailAddress',nil),
  DataExtensionField.new(nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,'FirstName',nil,nil,nil,1,1,1,1,1,nil,nil,nil,nil,nil,nil,nil,nil,nil,'Valued Subscriber',nil,200,nil,nil,0,nil,nil,1,nil,nil,nil,0,nil,nil,nil,nil,1,0,'Text',nil),
  DataExtensionField.new(nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,'PhoneNumber',nil,nil,nil,1,1,1,1,1,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,200,nil,nil,0,nil,nil,0,nil,nil,nil,0,nil,nil,nil,nil,2,0,'Phone',nil)
]
sendDeField = DataExtensionField.new(nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,'EmailAddress',nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil,nil)
sendAttField = Attribute.new('Subscriber Key',nil,nil)
2.times do |i|
  deName = "APITestSendDe#{i}"
  deDesc = deName + ' Created through the API'
  de.push(DataExtension.new(nil,nil,nil,nil,nil,nil,nil,deName,nil,nil,deName,deDesc,1,0,sendDeField,sendAttField,nil,nil,nil,nil,nil,nil,nil,[*deFields],nil,nil,nil))
end
apiObj = de
resp = $driver.create(CreateRequest.new(options,[*apiObj]))
```

### Sample SOAP Create Request

```
<soapenv:Body>
    <CreateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
        <Options></Options>
        <Objects xmlns:ns1="http://exacttarget.com/wsdl/partnerAPI" xsi:type="ns1:DataExtension">
            <CustomerKey>DataExtensionFromAPI</CustomerKey>
            <Name>DataExtensionFromAPI</Name>
            <IsSendable>true</IsSendable>
            <SendableDataExtensionField>
                <CustomerKey>EmailAddress_Key</CustomerKey>
                <Name>EmailAddress</Name>
                <FieldType>EmailAddress</FieldType>
            </SendableDataExtensionField>
            <SendableSubscriberField>
                <Name>Email Address</Name>
                <Value></Value>
            </SendableSubscriberField>
            <Fields>
                <Field>
                    <CustomerKey>EmailAddress_Key</CustomerKey>
                    <Name>EmailAddress</Name>
                    <FieldType>EmailAddress</FieldType>
                </Field>
                <Field>
                    <CustomerKey>ChannelUser_Key</CustomerKey>
                    <Name>ChannelUser</Name>
                    <FieldType>Text</FieldType>
                </Field>
                <Field>
                    <CustomerKey>ChannelUser_EmailAddress_Key</CustomerKey>
                    <Name>ChannelUser_EmailAddress</Name>
                    <FieldType>EmailAddress</FieldType>
                </Field>
                <Field>
                    <CustomerKey>Demographic_Address_Key</CustomerKey>
                    <Name>Demographic_Address</Name>
                    <FieldType>Text</FieldType>
                </Field>
            </Fields>
        </Objects>
    </CreateRequest>
</soapenv:Body>
```

### Sample SOAP Create Response

```
<soap:Body>
        <CreateResponse xmlns="http://exacttarget.com/wsdl/partnerAPI">
            <Results>
                <StatusCode>OK</StatusCode>
                <StatusMessage>Data Extension created.</StatusMessage>
                <OrdinalID>0</OrdinalID>
                <NewID>0</NewID>
                <NewObjectID>1a3e2c14-580e-de11-b30f-001cc494ae9e</NewObjectID>
                <Object xsi:type="DataExtension">
                    <ObjectID>1a3e2c14-580e-de11-b30f-001cc494ae9e</ObjectID>
                    <CustomerKey>DataExtensionFromAPI</CustomerKey>
                    <Name>DataExtensionFromAPI</Name>
                    <IsSendable>true</IsSendable>
                    <SendableDataExtensionField>
                        <ObjectID xsi:nil="true"/>
                        <CustomerKey>EmailAddress_Key</CustomerKey>
                        <Name>EmailAddress</Name>
                        <FieldType>EmailAddress</FieldType>
                    </SendableDataExtensionField>
                    <SendableSubscriberField>
                        <Name>Email Address</Name>
                        <Value/>
                    </SendableSubscriberField>
                    <Fields>
                        <Field>
                            <ObjectID xsi:nil="true"/>
                            <CustomerKey>EmailAddress_Key</CustomerKey>
                            <Name>EmailAddress</Name>
                            <FieldType>EmailAddress</FieldType>
                        </Field>
                        <Field>
                            <ObjectID xsi:nil="true"/><CustomerKey>ChannelUser_Key</CustomerKey>
                            <Name>ChannelUser</Name>
                            <FieldType>Text</FieldType>
                        </Field>
                        <Field>
                            <ObjectID xsi:nil="true"/>
                            <CustomerKey>ChannelUser_EmailAddress_Key</CustomerKey>
                            <Name>ChannelUser_EmailAddress</Name>
                            <FieldType>EmailAddress</FieldType>
                        </Field>
                        <Field>
                            <ObjectID xsi:nil="true"/><CustomerKey>Demographic_Address_Key</CustomerKey>
                            <Name>Demographic_Address</Name>
                            <FieldType>Text</FieldType>
                        </Field>
                    </Fields>
                </Object>
            </Results>
         <RequestID>27a2d45f-0eef-4118-b4de-fde288b09657</RequestID>
         <OverallStatus>OK</OverallStatus>
      </CreateResponse>
   </soap:Body>
```

### Sample SOAP Request with Non-Nullable Fields

The SOAP envelope below creates a data extension with a non-nullable field by including IsPrimaryKey and IsRequired values.

```
<soapenv:Body>
    <CreateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
        <Options/>
        <Objects xsi:type="ns2:DataExtension" xmlns:ns2="http://exacttarget.com/wsdl/partnerAPI">
            <CustomerKey>yoni_test_10</CustomerKey>
            <Name>yoni_test_1</Name>
            <Description>Created from API on 2010-02-08</Description>
            <IsSendable>true</IsSendable>
            <IsTestable>true</IsTestable>
            <SendableDataExtensionField xsi:type="ns2:DataExtensionField">
                <Name>userid</Name>
                <FieldType>EmailAddress</FieldType>
            </SendableDataExtensionField>
            <SendableSubscriberField>
                <Name>Subscriber Key</Name>
                <Value/>
            </SendableSubscriberField>
            <Fields>
                <Field xsi:type="ns2:DataExtensionField">
                    <CustomerKey>userid</CustomerKey>
                    <Name>userid</Name>
                    <Label>userid</Label>
                    <IsRequired>true</IsRequired>
                    <IsPrimaryKey>true</IsPrimaryKey>
                    <FieldType>EmailAddress</FieldType>
                </Field>
                <Field xsi:type="ns2:DataExtensionField">
                    <CustomerKey>geoid</CustomerKey>
                    <Name>geoid</Name>
                    <DataType>Number</DataType>
                    <Label>geoid</Label>
                    <FieldType>Number</FieldType>
                </Field>
                <Field xsi:type="ns2:DataExtensionField">
                    <CustomerKey>order</CustomerKey>
                    <Name>order</Name>
                    <DataType>Number</DataType>
                    <Label>order</Label>
                    <FieldType>Number</FieldType>
                </Field>
                <Field xsi:type="ns2:DataExtensionField">
                    <CustomerKey>url</CustomerKey>
                    <Name>url</Name>
                    <DataType>Text</DataType>
                    <Label>url</Label>
                    <MaxLength>1000</MaxLength>
                    <IsNillable>true</IsNillable>
                    <IsPrimaryKey>false</IsPrimaryKey>
                    <FieldType>Text</FieldType>
                </Field>
                <Field xsi:type="ns2:DataExtensionField">
                    <CustomerKey>time</CustomerKey>
                    <Name>time</Name>
                    <DataType>Date</DataType>
                    <Label>time</Label>
                    <IsNillable>true</IsNillable>
                    <IsPrimaryKey>false</IsPrimaryKey>
                    <FieldType>Date</FieldType>
                </Field>
            </Fields>
        </Objects>
    </CreateRequest>
</soapenv:Body>
```

### Sample SOAP Create Request Using Different Field Types

The sample SOAP envelope below includes an example of data extension field types.

```
<soapenv:Body>
      <CreateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
         <Options/>
         <Objects xsi:type="DataExtension">
            <PartnerKey xsi:nil="true"/>
            <ObjectID xsi:nil="true"/>
            <Name>FieldTypeTest</Name>
            <IsSendable>false</IsSendable>
            <Fields>
               <Field>
                  <Name>EmailAddress_type</Name>
                  <FieldType>EmailAddress</FieldType>
                  <IsPrimaryKey>true</IsPrimaryKey>
                  <IsRequired>true</IsRequired>
               </Field>
               <Field>
                  <Name>Text_type</Name>
                  <FieldType>Text</FieldType>
                  <IsRequired>false</IsRequired>
               </Field>
               <Field>
                  <Name>Date_type</Name>
                  <FieldType>Date</FieldType>
                  <DefaultValue>getdate()</DefaultValue>
                  <IsRequired>true</IsRequired>
               </Field>
               <Field>
                  <Name>Decimal_type</Name>
                  <FieldType>Decimal</FieldType>
                  <IsRequired>true</IsRequired>
                  <Precision>10</Precision>
                  <Scale>2</Scale>
               </Field>
               <Field>
                  <Name>Boolean_type</Name>
                  <FieldType>Boolean</FieldType>
                  <DefaultValue>true</DefaultValue>
                  <IsRequired>true</IsRequired>
               </Field>
               <Field>
                  <Name>Number_type</Name>
                  <FieldType>Number</FieldType>
                  <IsRequired>false</IsRequired>
               </Field>
               <Field>
                  <Name>Phone_type</Name>
                  <FieldType>Phone</FieldType>
                  <IsRequired>false</IsRequired>
               </Field>
               <Field>
                  <Name>Locale_type</Name>
                  <FieldType>Locale</FieldType>
                  <IsRequired>false</IsRequired>
               </Field>
            </Fields>
            <CustomerKey>FieldTypeTest</CustomerKey>
         </Objects>
      </CreateRequest>
   </soapenv:Body>
```

### Sample SOAP Request Creating a Data Extension with Data Retention Options

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
            <wsse:Username>XXXX</wsse:Username>
            <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">XXXX</wsse:Password>
         </wsse:UsernameToken>
      </wsse:Security>
   </soap:Header>
   <soap:Body>
      <CreateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
         <Options>
            <SaveOptions/>
         </Options>
         <Objects xsi:type="DataExtension">
            <ObjectID xsi:nil="true"/>
            <CustomerKey>12345</CustomerKey>
            <Name>12345</Name>
            <Description>12345</Description>
            <IsSendable>true</IsSendable>
            <IsTestable>false</IsTestable>
            <DataRetentionPeriodLength>48</DataRetentionPeriodLength>
            <DataRetentionPeriod>Days</DataRetentionPeriod>
            <RowBasedRetention>false</RowBasedRetention>
            <ResetRetentionPeriodOnImport>true</ResetRetentionPeriodOnImport>
            <DeleteAtEndOfRetentionPeriod>false</DeleteAtEndOfRetentionPeriod>
            <Fields>
               <Field>
                  <ObjectID xsi:nil="true"/>
                  <Name>D_Body</Name>
                  <Description>D_Body</Description>
                  <IsNillable>false</IsNillable>
                  <IsPrimaryKey>false</IsPrimaryKey>
                  <FieldType>Text</FieldType>
                  <DefaultValue></DefaultValue>
               </Field>
               <Field>
                  <ObjectID xsi:nil="true"/>
                  <Name>D_F1</Name>
                  <Description>D_F1</Description>
                  <MaxLength>100</MaxLength>
                  <IsNillable>false</IsNillable>
                  <IsPrimaryKey>false</IsPrimaryKey>
                  <FieldType>Text</FieldType>
                  <DefaultValue></DefaultValue>
               </Field>
               <Field>
                  <ObjectID xsi:nil="true"/>
                  <Name>D_F2</Name>
                  <Description>D_F2</Description>
                  <MaxLength>100</MaxLength>
                  <IsNillable>false</IsNillable>
                  <IsPrimaryKey>false</IsPrimaryKey>
                  <FieldType>Text</FieldType>
                  <DefaultValue></DefaultValue>
               </Field>
               <Field>
                  <ObjectID xsi:nil="true"/>
                  <Name>D_F3</Name>
                  <Description>D_F3</Description>
                  <MaxLength>100</MaxLength>
                  <IsNillable>false</IsNillable>
                  <IsPrimaryKey>false</IsPrimaryKey>
                  <FieldType>Text</FieldType>
                  <DefaultValue></DefaultValue>
               </Field>
               <Field>
                  <ObjectID xsi:nil="true"/>
                  <Name>D_F4</Name>
                  <Description>D_F4</Description>
                  <MaxLength>100</MaxLength>
                  <IsNillable>false</IsNillable>
                  <IsPrimaryKey>false</IsPrimaryKey>
                  <FieldType>Text</FieldType>
                  <DefaultValue></DefaultValue>
               </Field>
               <Field>
                  <ObjectID xsi:nil="true"/>
                  <Name>D_F5</Name>
                  <Description>D_F5</Description>
                  <MaxLength>100</MaxLength>
                  <IsNillable>false</IsNillable>
                  <IsPrimaryKey>false</IsPrimaryKey>
                  <FieldType>Text</FieldType>
                  <DefaultValue></DefaultValue>
               </Field>
               <Field>
                  <ObjectID xsi:nil="true"/>
                  <Name>D_From Email</Name>
                  <Description>D_From Email</Description>
                  <MaxLength>320</MaxLength>
                  <IsNillable>false</IsNillable>
                  <IsPrimaryKey>false</IsPrimaryKey>
                  <FieldType>Text</FieldType>
                  <DefaultValue></DefaultValue>
               </Field>
               <Field>
                  <ObjectID xsi:nil="true"/>
                  <Name>D_From Name</Name>
                  <Description>D_From Name</Description>
                  <MaxLength>1024</MaxLength>
                  <IsNillable>false</IsNillable>
                  <IsPrimaryKey>false</IsPrimaryKey>
                  <FieldType>Text</FieldType>
                  <DefaultValue></DefaultValue>
               </Field>
               <Field>
                  <ObjectID xsi:nil="true"/>
                  <Name>D_Subject</Name>
                  <Description>D_Subject</Description>
                  <MaxLength>1024</MaxLength>
                  <IsNillable>false</IsNillable>
                  <IsPrimaryKey>false</IsPrimaryKey>
                  <FieldType>Text</FieldType>
                  <DefaultValue></DefaultValue>
               </Field>
               <Field>
                  <ObjectID xsi:nil="true"/>
                  <Name>Email Address</Name>
                  <Description>Email Address</Description>
                  <MaxLength>100</MaxLength>
                  <IsNillable>false</IsNillable>
                  <IsPrimaryKey>false</IsPrimaryKey>
                  <FieldType>EmailAddress</FieldType>
               </Field>
               <Field>
                  <ObjectID xsi:nil="true"/>
                  <Name>Subscriber Key</Name>
                  <Description>Subscriber Key</Description>
                  <MaxLength>100</MaxLength>
                  <IsNillable>false</IsNillable>
                  <IsPrimaryKey>false</IsPrimaryKey>
                  <FieldType>Text</FieldType>
                  <DefaultValue></DefaultValue>
               </Field>
               <Field>
                  <ObjectID xsi:nil="true"/>
                  <Name>D_FileAttachmentFileName1</Name>
                  <Description>D_FileAttachmentFileName1</Description>
                  <MaxLength>1024</MaxLength>
                  <IsNillable>false</IsNillable>
                  <IsPrimaryKey>false</IsPrimaryKey>
                  <FieldType>Text</FieldType>
                  <DefaultValue></DefaultValue>
               </Field>
               <Field>
                  <ObjectID xsi:nil="true"/>
                  <Name>D_FileAttachmentPhysicalFile1</Name>
                  <Description>D_FileAttachmentPhysicalFile1</Description>
                  <MaxLength>1024</MaxLength>
                  <IsNillable>false</IsNillable>
                  <IsPrimaryKey>false</IsPrimaryKey>
                  <FieldType>Text</FieldType>
                  <DefaultValue></DefaultValue>
               </Field>
               <Field>
                  <ObjectID xsi:nil="true"/>
                  <Name>D_FileAttachmentFileName2</Name>
                  <Description>D_FileAttachmentFileName2</Description>
                  <MaxLength>1024</MaxLength>
                  <IsNillable>false</IsNillable>
                  <IsPrimaryKey>false</IsPrimaryKey>
                  <FieldType>Text</FieldType>
                  <DefaultValue></DefaultValue>
               </Field>
               <Field>
                  <ObjectID xsi:nil="true"/>
                  <Name>D_FileAttachmentPhysicalFile2</Name>
                  <Description>D_FileAttachmentPhysicalFile2</Description>
                  <MaxLength>1024</MaxLength>
                  <IsNillable>false</IsNillable>
                  <IsPrimaryKey>false</IsPrimaryKey>
                  <FieldType>Text</FieldType>
                  <DefaultValue></DefaultValue>
               </Field>
               <Field>
                  <ObjectID xsi:nil="true"/>
                  <Name>D_FileAttachmentFileName3</Name>
                  <Description>D_FileAttachmentFileName3</Description>
                  <MaxLength>1024</MaxLength>
                  <IsNillable>false</IsNillable>
                  <IsPrimaryKey>false</IsPrimaryKey>
                  <FieldType>Text</FieldType>
                  <DefaultValue></DefaultValue>
               </Field>
               <Field>
                  <ObjectID xsi:nil="true"/>
                  <Name>D_FileAttachmentPhysicalFile3</Name>
                  <Description>D_FileAttachmentPhysicalFile3</Description>
                  <MaxLength>1024</MaxLength>
                  <IsNillable>false</IsNillable>
                  <IsPrimaryKey>false</IsPrimaryKey>
                  <FieldType>Text</FieldType>
                  <DefaultValue></DefaultValue>
               </Field>
               <Field>
                  <ObjectID xsi:nil="true"/>
                  <Name>D_FileAttachmentFileName4</Name>
                  <Description>D_FileAttachmentFileName4</Description>
                  <MaxLength>1024</MaxLength>
                  <IsNillable>false</IsNillable>
                  <IsPrimaryKey>false</IsPrimaryKey>
                  <FieldType>Text</FieldType>
                  <DefaultValue></DefaultValue>
               </Field>
               <Field>
                  <ObjectID xsi:nil="true"/>
                  <Name>D_FileAttachmentPhysicalFile4</Name>
                  <Description>D_FileAttachmentPhysicalFile4</Description>
                  <MaxLength>1024</MaxLength>
                  <IsNillable>false</IsNillable>
                  <IsPrimaryKey>false</IsPrimaryKey>
                  <FieldType>Text</FieldType>
                  <DefaultValue></DefaultValue>
               </Field>
               <Field>
                  <ObjectID xsi:nil="true"/>
                  <Name>D_FileAttachmentFileName5</Name>
                  <Description>D_FileAttachmentFileName5</Description>
                  <MaxLength>1024</MaxLength>
                  <IsNillable>false</IsNillable>
                  <IsPrimaryKey>false</IsPrimaryKey>
                  <FieldType>Text</FieldType>
                  <DefaultValue></DefaultValue>
               </Field>
               <Field>
                  <ObjectID xsi:nil="true"/>
                  <Name>D_FileAttachmentPhysicalFile5</Name>
                  <Description>D_FileAttachmentPhysicalFile5</Description>
                  <MaxLength>1024</MaxLength>
                  <IsNillable>false</IsNillable>
                  <IsPrimaryKey>false</IsPrimaryKey>
                  <FieldType>Text</FieldType>
                  <DefaultValue></DefaultValue>
               </Field>
               <Field>
                  <ObjectID xsi:nil="true"/>
                  <Name>D_URLAttachmentURL1</Name>
                  <Description>D_URLAttachmentURL1</Description>
                  <MaxLength>1024</MaxLength>
                  <IsNillable>false</IsNillable>
                  <IsPrimaryKey>false</IsPrimaryKey>
                  <FieldType>Text</FieldType>
                  <DefaultValue></DefaultValue>
               </Field>
               <Field>
                  <ObjectID xsi:nil="true"/>
                  <Name>D_URLAttachmentFileName1</Name>
                  <Description>D_URLAttachmentFileName1</Description>
                  <MaxLength>1024</MaxLength>
                  <IsNillable>false</IsNillable>
                  <IsPrimaryKey>false</IsPrimaryKey>
                  <FieldType>Text</FieldType>
                  <DefaultValue></DefaultValue>
               </Field>
               <Field>
                  <ObjectID xsi:nil="true"/>
                  <Name>D_URLAttachmentURL2</Name>
                  <Description>D_URLAttachmentURL2</Description>
                  <MaxLength>1024</MaxLength>
                  <IsNillable>false</IsNillable>
                  <IsPrimaryKey>false</IsPrimaryKey>
                  <FieldType>Text</FieldType>
                  <DefaultValue></DefaultValue>
               </Field>
               <Field>
                  <ObjectID xsi:nil="true"/>
                  <Name>D_URLAttachmentFileName2</Name>
                  <Description>D_URLAttachmentFileName2</Description>
                  <MaxLength>1024</MaxLength>
                  <IsNillable>false</IsNillable>
                  <IsPrimaryKey>false</IsPrimaryKey>
                  <FieldType>Text</FieldType>
                  <DefaultValue></DefaultValue>
               </Field>
               <Field>
                  <ObjectID xsi:nil="true"/>
                  <Name>D_URLAttachmentURL3</Name>
                  <Description>D_URLAttachmentURL3</Description>
                  <MaxLength>1024</MaxLength>
                  <IsNillable>false</IsNillable>
                  <IsPrimaryKey>false</IsPrimaryKey>
                  <FieldType>Text</FieldType>
                  <DefaultValue></DefaultValue>
               </Field>
               <Field>
                  <ObjectID xsi:nil="true"/>
                  <Name>D_URLAttachmentFileName3</Name>
                  <Description>D_URLAttachmentFileName3</Description>
                  <MaxLength>1024</MaxLength>
                  <IsNillable>false</IsNillable>
                  <IsPrimaryKey>false</IsPrimaryKey>
                  <FieldType>Text</FieldType>
                  <DefaultValue></DefaultValue>
               </Field>
               <Field>
                  <ObjectID xsi:nil="true"/>
                  <Name>D_URLAttachmentURL4</Name>
                  <Description>D_URLAttachmentURL4</Description>
                  <MaxLength>1024</MaxLength>
                  <IsNillable>false</IsNillable>
                  <IsPrimaryKey>false</IsPrimaryKey>
                  <FieldType>Text</FieldType>
                  <DefaultValue></DefaultValue>
               </Field>
               <Field>
                  <ObjectID xsi:nil="true"/>
                  <Name>D_URLAttachmentFileName4</Name>
                  <Description>D_URLAttachmentFileName4</Description>
                  <MaxLength>1024</MaxLength>
                  <IsNillable>false</IsNillable>
                  <IsPrimaryKey>false</IsPrimaryKey>
                  <FieldType>Text</FieldType>
                  <DefaultValue></DefaultValue>
               </Field>
               <Field>
                  <ObjectID xsi:nil="true"/>
                  <Name>D_URLAttachmentURL5</Name>
                  <Description>D_URLAttachmentURL5</Description>
                  <MaxLength>1024</MaxLength>
                  <IsNillable>false</IsNillable>
                  <IsPrimaryKey>false</IsPrimaryKey>
                  <FieldType>Text</FieldType>
                  <DefaultValue></DefaultValue>
               </Field>
               <Field>
                  <ObjectID xsi:nil="true"/>
                  <Name>D_URLAttachmentFileName5</Name>
                  <Description>D_URLAttachmentFileName5</Description>
                  <MaxLength>1024</MaxLength>
                  <IsNillable>false</IsNillable>
                  <IsPrimaryKey>false</IsPrimaryKey>
                  <FieldType>Text</FieldType>
                  <DefaultValue></DefaultValue>
               </Field>
            </Fields>
            <SendableDataExtensionField>
               <ObjectID xsi:nil="true"/>
               <Name>Email Address</Name>
            </SendableDataExtensionField>
            <SendableSubscriberField>
               <Name>Email Address</Name>
            </SendableSubscriberField>
         </Objects>
      </CreateRequest>
   </soap:Body>
</soap:Envelope>
```

### Sample SOAP Request Setting Decimal Field Types in a Data Extension

When creating a field with the Decimal data type in a data extension, you must set the precision and the scale of the field.

```
<Field>
                  <ObjectID xsi:nil="true"/>
                  <CustomerKey>PaymentAmount_Key</CustomerKey>
                  <Name>PaymentAmount</Name>
                  <IsRequired>true</IsRequired>
                  <FieldType>Decimal</FieldType>
                  <Precision>19</Precision>
                  <Scale>2</Scale>
</Field>
```

### Sample SOAP Request Creating a Date Value in a Date-type Field

Note that the time must be passed in 24-hour format.

```
<CreateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
    <Options/>
    <Objects xsi:type="DataExtensionObject">
        <ObjectID xsi:nil="true"/>
        <CustomerKey>DateFormatTest</CustomerKey>
        <Properties>
            <Property>
                <Name>DateField</Name>
                <Value><![CDATA[01/02/2011 16:00:00]]></Value>
            </Property>
        </Properties>
    </Objects>
</CreateRequest>
```

## Related Items

-   [Data Extensions](https://help.salesforce.com/articleView?id=mc_es_data_extension_data_relationships_classic.htm&type=5)
-   [Import Definition](atlas.en-us.noversion.mc-apis.meta/mc-apis/starting_an_import_definition_via_the_web_service_api.htm)
-   [Subscriber Key](https://help.salesforce.com/articleView?id=mc_es_subscriber_key.htm&type=5)

## Related Topics

- Import Definition (atlas.en-us.noversion.mc-apis.meta/mc-apis/starting_an_import_definition_via_the_web_service_api.htm)
