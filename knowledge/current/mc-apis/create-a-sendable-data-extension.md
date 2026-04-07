---
title: "Create a Sendable Data Extension"
domain: mc-apis
topic: create-a-sendable-data-extension
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:16.193Z
estimatedTokens: 6842
keywords: [Sendable, Extension, conjunction, publication, suppression, send, email, SMS, messages, subscribers, require, extensions, Why, How, Sample, NET, Code, Java, Axis, 1.4, PHP, SOAP, Envelope, Items]
---

> Use a sendable data extension in conjunction with publication and suppression lists to send email and SMS messages to your subscribers. SMS messages require the use of data extensions and publication and suppression lists.

# Create a Sendable Data Extension

## Why Create a Sendable Data Extension

Use a sendable data extension in conjunction with publication and suppression lists to send email and SMS messages to your subscribers. SMS messages require the use of data extensions and publication and suppression lists.

## How to Create a Sendable Data Extension

Use the sample code below as a model to create your own API calls.

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
public partial class DataExtensionSendableCreate : System.Web.UI.Page
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
            de.IsSendable = true;
            de.IsSendableSpecified = true;
            //The Name of the Column in the DE to map to ET
            de.SendableDataExtensionField = new DataExtensionField();
            de.SendableDataExtensionField.FieldType = DataExtensionFieldType.Text;
            de.SendableDataExtensionField.Name = "subscriber_key";
            //The Name of the Attribute in Marketing Cloud to Send to
            de.SendableSubscriberField = new etAPI.Attribute();
            de.SendableSubscriberField.Name = "Subscriber Key";//If Subscriber Key is turned on this must be Subscriber Key
            de.Fields = new DataExtensionField[3];
            //1
            //Set the column parameters
            de.Fields[0] = new DataExtensionField();
            de.Fields[0].Name = "subscriber_key";
            de.Fields[0].FieldType =  DataExtensionFieldType.Text;
            de.Fields[0].FieldTypeSpecified = true;
            de.Fields[0].IsRequired = true;
            de.Fields[0].IsRequiredSpecified = true;
            de.Fields[0].IsPrimaryKey = true;
            de.Fields[0].IsPrimaryKeySpecified = true;
            de.Fields[0].MaxLength = 200;//If this is the Primary Key MaxLength is required.
            de.Fields[0].MaxLengthSpecified = true;
            //2
            //Set the column parameters
            de.Fields[1] = new DataExtensionField();
            de.Fields[1].Name = "email_address";
            de.Fields[1].FieldType = DataExtensionFieldType.EmailAddress;
            de.Fields[1].FieldTypeSpecified = true;
            de.Fields[1].IsRequired = true;
            de.Fields[1].IsRequiredSpecified = true;
            //3
            //Set the column parameters
            de.Fields[2] = new DataExtensionField();
            de.Fields[2].Name = "full_name";
            de.Fields[2].FieldType = DataExtensionFieldType.Text;
            de.Fields[2].FieldTypeSpecified = true;
            de.Fields[2].IsRequired = false;
            de.Fields[2].IsRequiredSpecified = true;
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

### Sample Java Code (Axis 1.4)

This code sample requires that the Subscriber Key feature be enabled for your account. Please contact your Marketing Cloud relationship manager for more information about enabling this feature.

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
}
```

### Sample PHP Code

```
<?php require('exacttarget_soap_client.php');="" require('s1_creds.php');="" $wsdl='https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/etframework.wsdl' ;="" try{="" $client="new" exacttargetsoapclient($wsdl,="" array('trace'=""?>1));
    $client->username = $username;
    $client->password = $password;
    $newde = new Marketing Cloud_DataExtension();
    $newde->Name = "New DETEST";
    $newde->CustomerKey = "New DETEST";
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
            <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">XXXXX</wsse:Password>
         </wsse:UsernameToken>
      </wsse:Security>
   </soap:Header>
   <soap:Body>
      <CreateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
         <Options>
            <SaveOptions/>
         </Options>
         <Objects xsi:type="DataExtension">
            <PartnerKey xsi:nil="true"/>
            <ObjectID xsi:nil="true"/>
            <CustomerKey>02_2010-02-26-08_42_30_762_851628611</CustomerKey>
            <Name>02_2010-02-26-08_42_30_762_851628611</Name>
            <Description>02_2010-02-26-08_42_30_762_851628611</Description>
            <IsSendable>true</IsSendable>
            <IsTestable>false</IsTestable>
            <DataRetentionPeriodLength>48</DataRetentionPeriodLength>
            <DataRetentionPeriodUnitOfMeasure>0</DataRetentionPeriodUnitOfMeasure>
            <RowBasedRetention>false</RowBasedRetention>
            <ResetRetentionPeriodOnImport>true</ResetRetentionPeriodOnImport>
            <DeleteAtEndOfRetentionPeriod>false</DeleteAtEndOfRetentionPeriod>
            <Fields>
               <Field>
                  <PartnerKey xsi:nil="true"/>
                  <ObjectID xsi:nil="true"/>
                  <Name>D_Body</Name>
                  <Description>D_Body</Description>
                  <IsRequired>true</IsRequired>
                  <IsPrimaryKey>false</IsPrimaryKey>
                  <FieldType>Text</FieldType>
                  <DefaultValue></DefaultValue>
               </Field>
               <Field>
                  <PartnerKey xsi:nil="true"/>
                  <ObjectID xsi:nil="true"/>
                  <Name>D_F1</Name>
                  <Description>D_F1</Description>
                  <MaxLength>100</MaxLength>
                  <IsRequired>true</IsRequired>
                  <IsPrimaryKey>false</IsPrimaryKey>
                  <FieldType>Text</FieldType>
                  <DefaultValue></DefaultValue>
               </Field>
               <Field>
                  <PartnerKey xsi:nil="true"/>
                  <ObjectID xsi:nil="true"/>
                  <Name>D_F2</Name>
                  <Description>D_F2</Description>
                  <MaxLength>100</MaxLength>
                  <IsRequired>true</IsRequired>
                  <IsPrimaryKey>false</IsPrimaryKey>
                  <FieldType>Text</FieldType>
                  <DefaultValue></DefaultValue>
               </Field>
               <Field>
                  <PartnerKey xsi:nil="true"/>
                  <ObjectID xsi:nil="true"/>
                  <Name>D_F3</Name>
                  <Description>D_F3</Description>
                  <MaxLength>100</MaxLength>
                  <IsRequired>true</IsRequired>
                  <IsPrimaryKey>false</IsPrimaryKey>
                  <FieldType>Text</FieldType>
                  <DefaultValue></DefaultValue>
               </Field>
               <Field>
                  <PartnerKey xsi:nil="true"/>
                  <ObjectID xsi:nil="true"/>
                  <Name>D_F4</Name>
                  <Description>D_F4</Description>
                  <MaxLength>100</MaxLength>
                  <IsRequired>true</IsRequired>
                  <IsPrimaryKey>false</IsPrimaryKey>
                  <FieldType>Text</FieldType>
                  <DefaultValue></DefaultValue>
               </Field>
               <Field>
                  <PartnerKey xsi:nil="true"/>
                  <ObjectID xsi:nil="true"/>
                  <Name>D_F5</Name>
                  <Description>D_F5</Description>
                  <MaxLength>100</MaxLength>
                  <IsRequired>true</IsRequired>
                  <IsPrimaryKey>false</IsPrimaryKey>
                  <FieldType>Text</FieldType>
                  <DefaultValue></DefaultValue>
               </Field>
               <Field>
                  <PartnerKey xsi:nil="true"/>
                  <ObjectID xsi:nil="true"/>
                  <Name>D_From Email</Name>
                  <Description>D_From Email</Description>
                  <MaxLength>320</MaxLength>
                  <IsRequired>true</IsRequired>
                  <IsPrimaryKey>false</IsPrimaryKey>
                  <FieldType>Text</FieldType>
                  <DefaultValue></DefaultValue>
               </Field>
               <Field>
                  <PartnerKey xsi:nil="true"/>
                  <ObjectID xsi:nil="true"/>
                  <Name>D_From Name</Name>
                  <Description>D_From Name</Description>
                  <MaxLength>1024</MaxLength>
                  <IsRequired>true</IsRequired>
                  <IsPrimaryKey>false</IsPrimaryKey>
                  <FieldType>Text</FieldType>
                  <DefaultValue></DefaultValue>
               </Field>
               <Field>
                  <PartnerKey xsi:nil="true"/>
                  <ObjectID xsi:nil="true"/>
                  <Name>D_Subject</Name>
                  <Description>D_Subject</Description>
                  <MaxLength>1024</MaxLength>
                  <IsRequired>true</IsRequired>
                  <IsPrimaryKey>false</IsPrimaryKey>
                  <FieldType>Text</FieldType>
                  <DefaultValue></DefaultValue>
               </Field>
               <Field>
                  <PartnerKey xsi:nil="true"/>
                  <ObjectID xsi:nil="true"/>
                  <Name>Email Address</Name>
                  <Description>Email Address</Description>
                  <MaxLength>100</MaxLength>
                  <IsRequired>true</IsRequired>
                  <IsPrimaryKey>false</IsPrimaryKey>
                  <FieldType>EmailAddress</FieldType>
               </Field>
               <Field>
                  <PartnerKey xsi:nil="true"/>
                  <ObjectID xsi:nil="true"/>
                  <Name>Subscriber Key</Name>
                  <Description>Subscriber Key</Description>
                  <MaxLength>100</MaxLength>
                  <IsRequired>true</IsRequired>
                  <IsPrimaryKey>false</IsPrimaryKey>
                  <FieldType>Text</FieldType>
                  <DefaultValue></DefaultValue>
               </Field>
               <Field>
                  <PartnerKey xsi:nil="true"/>
                  <ObjectID xsi:nil="true"/>
                  <Name>D_FileAttachmentFileName1</Name>
                  <Description>D_FileAttachmentFileName1</Description>
                  <MaxLength>1024</MaxLength>
                  <IsRequired>true</IsRequired>
                  <IsPrimaryKey>false</IsPrimaryKey>
                  <FieldType>Text</FieldType>
                  <DefaultValue></DefaultValue>
               </Field>
               <Field>
                  <PartnerKey xsi:nil="true"/>
                  <ObjectID xsi:nil="true"/>
                  <Name>D_FileAttachmentPhysicalFile1</Name>
                  <Description>D_FileAttachmentPhysicalFile1</Description>
                  <MaxLength>1024</MaxLength>
                  <IsRequired>true</IsRequired>
                  <IsPrimaryKey>false</IsPrimaryKey>
                  <FieldType>Text</FieldType>
                  <DefaultValue></DefaultValue>
               </Field>
               <Field>
                  <PartnerKey xsi:nil="true"/>
                  <ObjectID xsi:nil="true"/>
                  <Name>D_FileAttachmentFileName2</Name>
                  <Description>D_FileAttachmentFileName2</Description>
                  <MaxLength>1024</MaxLength>
                  <IsRequired>true</IsRequired>
                  <IsPrimaryKey>false</IsPrimaryKey>
                  <FieldType>Text</FieldType>
                  <DefaultValue></DefaultValue>
               </Field>
               <Field>
                  <PartnerKey xsi:nil="true"/>
                  <ObjectID xsi:nil="true"/>
                  <Name>D_FileAttachmentPhysicalFile2</Name>
                  <Description>D_FileAttachmentPhysicalFile2</Description>
                  <MaxLength>1024</MaxLength>
                  <IsRequired>true</IsRequired>
                  <IsPrimaryKey>false</IsPrimaryKey>
                  <FieldType>Text</FieldType>
                  <DefaultValue></DefaultValue>
               </Field>
               <Field>
                  <PartnerKey xsi:nil="true"/>
                  <ObjectID xsi:nil="true"/>
                  <Name>D_FileAttachmentFileName3</Name>
                  <Description>D_FileAttachmentFileName3</Description>
                  <MaxLength>1024</MaxLength>
                  <IsRequired>true</IsRequired>
                  <IsPrimaryKey>false</IsPrimaryKey>
                  <FieldType>Text</FieldType>
                  <DefaultValue></DefaultValue>
               </Field>
               <Field>
                  <PartnerKey xsi:nil="true"/>
                  <ObjectID xsi:nil="true"/>
                  <Name>D_FileAttachmentPhysicalFile3</Name>
                  <Description>D_FileAttachmentPhysicalFile3</Description>
                  <MaxLength>1024</MaxLength>
                  <IsRequired>true</IsRequired>
                  <IsPrimaryKey>false</IsPrimaryKey>
                  <FieldType>Text</FieldType>
                  <DefaultValue></DefaultValue>
               </Field>
               <Field>
                  <PartnerKey xsi:nil="true"/>
                  <ObjectID xsi:nil="true"/>
                  <Name>D_FileAttachmentFileName4</Name>
                  <Description>D_FileAttachmentFileName4</Description>
                  <MaxLength>1024</MaxLength>
                  <IsRequired>true</IsRequired>
                  <IsPrimaryKey>false</IsPrimaryKey>
                  <FieldType>Text</FieldType>
                  <DefaultValue></DefaultValue>
               </Field>
               <Field>
                  <PartnerKey xsi:nil="true"/>
                  <ObjectID xsi:nil="true"/>
                  <Name>D_FileAttachmentPhysicalFile4</Name>
                  <Description>D_FileAttachmentPhysicalFile4</Description>
                  <MaxLength>1024</MaxLength>
                  <IsRequired>true</IsRequired>
                  <IsPrimaryKey>false</IsPrimaryKey>
                  <FieldType>Text</FieldType>
                  <DefaultValue></DefaultValue>
               </Field>
               <Field>
                  <PartnerKey xsi:nil="true"/>
                  <ObjectID xsi:nil="true"/>
                  <Name>D_FileAttachmentFileName5</Name>
                  <Description>D_FileAttachmentFileName5</Description>
                  <MaxLength>1024</MaxLength>
                  <IsRequired>true</IsRequired>
                  <IsPrimaryKey>false</IsPrimaryKey>
                  <FieldType>Text</FieldType>
                  <DefaultValue></DefaultValue>
               </Field>
               <Field>
                  <PartnerKey xsi:nil="true"/>
                  <ObjectID xsi:nil="true"/>
                  <Name>D_FileAttachmentPhysicalFile5</Name>
                  <Description>D_FileAttachmentPhysicalFile5</Description>
                  <MaxLength>1024</MaxLength>
                  <IsRequired>true</IsRequired>
                  <IsPrimaryKey>false</IsPrimaryKey>
                  <FieldType>Text</FieldType>
                  <DefaultValue></DefaultValue>
               </Field>
               <Field>
                  <PartnerKey xsi:nil="true"/>
                  <ObjectID xsi:nil="true"/>
                  <Name>D_URLAttachmentURL1</Name>
                  <Description>D_URLAttachmentURL1</Description>
                  <MaxLength>1024</MaxLength>
                  <IsRequired>true</IsRequired>
                  <IsPrimaryKey>false</IsPrimaryKey>
                  <FieldType>Text</FieldType>
                  <DefaultValue></DefaultValue>
               </Field>
               <Field>
                  <PartnerKey xsi:nil="true"/>
                  <ObjectID xsi:nil="true"/>
                  <Name>D_URLAttachmentFileName1</Name>
                  <Description>D_URLAttachmentFileName1</Description>
                  <MaxLength>1024</MaxLength>
                  <IsRequired>true</IsRequired>
                  <IsPrimaryKey>false</IsPrimaryKey>
                  <FieldType>Text</FieldType>
                  <DefaultValue></DefaultValue>
               </Field>
               <Field>
                  <PartnerKey xsi:nil="true"/>
                  <ObjectID xsi:nil="true"/>
                  <Name>D_URLAttachmentURL2</Name>
                  <Description>D_URLAttachmentURL2</Description>
                  <MaxLength>1024</MaxLength>
                  <IsRequired>true</IsRequired>
                  <IsPrimaryKey>false</IsPrimaryKey>
                  <FieldType>Text</FieldType>
                  <DefaultValue></DefaultValue>
               </Field>
               <Field>
                  <PartnerKey xsi:nil="true"/>
                  <ObjectID xsi:nil="true"/>
                  <Name>D_URLAttachmentFileName2</Name>
                  <Description>D_URLAttachmentFileName2</Description>
                  <MaxLength>1024</MaxLength>
                  <IsRequired>true</IsRequired>
                  <IsPrimaryKey>false</IsPrimaryKey>
                  <FieldType>Text</FieldType>
                  <DefaultValue></DefaultValue>
               </Field>
               <Field>
                  <PartnerKey xsi:nil="true"/>
                  <ObjectID xsi:nil="true"/>
                  <Name>D_URLAttachmentURL3</Name>
                  <Description>D_URLAttachmentURL3</Description>
                  <MaxLength>1024</MaxLength>
                  <IsRequired>true</IsRequired>
                  <IsPrimaryKey>false</IsPrimaryKey>
                  <FieldType>Text</FieldType>
                  <DefaultValue></DefaultValue>
               </Field>
               <Field>
                  <PartnerKey xsi:nil="true"/>
                  <ObjectID xsi:nil="true"/>
                  <Name>D_URLAttachmentFileName3</Name>
                  <Description>D_URLAttachmentFileName3</Description>
                  <MaxLength>1024</MaxLength>
                  <IsRequired>true</IsRequired>
                  <IsPrimaryKey>false</IsPrimaryKey>
                  <FieldType>Text</FieldType>
                  <DefaultValue></DefaultValue>
               </Field>
               <Field>
                  <PartnerKey xsi:nil="true"/>
                  <ObjectID xsi:nil="true"/>
                  <Name>D_URLAttachmentURL4</Name>
                  <Description>D_URLAttachmentURL4</Description>
                  <MaxLength>1024</MaxLength>
                  <IsRequired>true</IsRequired>
                  <IsPrimaryKey>false</IsPrimaryKey>
                  <FieldType>Text</FieldType>
                  <DefaultValue></DefaultValue>
               </Field>
               <Field>
                  <PartnerKey xsi:nil="true"/>
                  <ObjectID xsi:nil="true"/>
                  <Name>D_URLAttachmentFileName4</Name>
                  <Description>D_URLAttachmentFileName4</Description>
                  <MaxLength>1024</MaxLength>
                  <IsRequired>true</IsRequired>
                  <IsPrimaryKey>false</IsPrimaryKey>
                  <FieldType>Text</FieldType>
                  <DefaultValue></DefaultValue>
               </Field>
               <Field>
                  <PartnerKey xsi:nil="true"/>
                  <ObjectID xsi:nil="true"/>
                  <Name>D_URLAttachmentURL5</Name>
                  <Description>D_URLAttachmentURL5</Description>
                  <MaxLength>1024</MaxLength>
                  <IsRequired>true</IsRequired>
                  <IsPrimaryKey>false</IsPrimaryKey>
                  <FieldType>Text</FieldType>
                  <DefaultValue></DefaultValue>
               </Field>
               <Field>
                  <PartnerKey xsi:nil="true"/>
                  <ObjectID xsi:nil="true"/>
                  <Name>D_URLAttachmentFileName5</Name>
                  <Description>D_URLAttachmentFileName5</Description>
                  <MaxLength>1024</MaxLength>
                  <IsRequired>true</IsRequired>
                  <IsPrimaryKey>false</IsPrimaryKey>
                  <FieldType>Text</FieldType>
                  <DefaultValue></DefaultValue>
               </Field>
            </Fields>
            <SendableDataExtensionField>
               <PartnerKey xsi:nil="true"/>
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

## Related Items

-   [Sendable Data Extension](https://help.salesforce.com/articleView?id=mc_es_data_extension_data_relationships_classic.htm&type=5)
-   [Publication Lists](https://help.salesforce.com/articleView?id=mc_es_publication_lists.htm&type=5)
-   [Suppression Lists](https://help.salesforce.com/articleView?id=mc_es_suppression_lists.htm&type=5)
-   [Subscriber Key](https://help.salesforce.com/articleView?id=mc_es_subscriber_key.htm&type=5)
