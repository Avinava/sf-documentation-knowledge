---
title: "Update Column Properties for a Data Extension"
domain: mc-apis
topic: update-column-properties-for-a-data-extension
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:25.734Z
estimatedTokens: 888
keywords: [Column, Data, Extension, updating, Why, How, Sample, NET, File, SOAP, Envelope]
---

# Update Column Properties for a Data Extension

> This page contains information  about updating the properties of a column within an existing data extension.

# Update Column Properties for a Data Extension

This page contains information about updating the properties of a column within an existing data extension.

## Why Update Column Properties for an Existing Data Extension

You can update column properties in an existing data extension to change how the data extension handles information. For example, you can change the number of characters allowed within a field as necessary.

## How to Update Column Properties for an Existing Data Extension

Note that you must specify the ObjectID for the DataExtensionField object to ensure you update the correct field. Otherwise, the SOAP API tries to add the update as a new column with the same name as the existing column and produces an error. Use the Retrieve method on the DataExtensionField object to vind the ObjectID value. Use the sample code below as a model for your own API calls:

### Sample .NET File

```apex
private void UpdateDataExtensionField()
{
    SoapClient framework = new SoapClient();
    framework.ClientCredentials.UserName.UserName = "ccc";
    framework.ClientCredentials.UserName.Password = "ccc";

    String requestID;
    String status;
    DataExtension de = new DataExtension();
    // Specify the unique identifier for the data extension where the field exists
    de.CustomerKey = "ExampleDataExtension";

    DataExtensionField def = new DataExtensionField();
    // Specify the unique identifier for the field in the data extension to update
    def.ObjectID = "239a63a4-e5a3-4bca-9f72-f731f793a47a";

    // Specify the values for the field that need changed
    def.Name = "NewNameForField";
    def.MaxLength = 50;
    de.Fields = new DataExtensionField[] { def };

    UpdateResult[] uoResults = framework.Update(new UpdateOptions(), new APIObject[] { de }, out requestID, out status);

    Console.WriteLine("Status: " + status);
    Console.WriteLine("Request ID: " + requestID);
}
```

### Sample SOAP Envelope

```
<soap:envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
   <soap:header>
      <wsse:security soap:mustunderstand="1" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
         <wsse:usernametoken wsu:id="UsernameToken-1" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
            <wsse:username>ccc</wsse:username>
            <wsse:password type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">ccc</wsse:password>
         </wsse:usernametoken>
      </wsse:security>
   </soap:header>
   <soap:body>
      <updaterequest xmlns="http://exacttarget.com/wsdl/partnerAPI" xmlns:ns2="urn:fault.partner.exacttarget.com">
         <objects xsi:type="DataExtension" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
            <PartnerKey xsi:nil="true"></PartnerKey>
            <ModifiedDate xsi:nil="true"></ModifiedDate>
            <ObjectID xsi:nil="true"></ObjectID>
            <CustomerKey>ExampleDataExtension</CustomerKey>
            <fields>
               <field>
                  <PartnerKey xsi:nil="true"></PartnerKey>
                  <ModifiedDate xsi:nil="true"></ModifiedDate>
                  <ObjectID>239a63a4-e5a3-4bca-9f72-f731f793a47a</ObjectID>
                  <Name>FieldOne</Name>
                  <DefaultValue></DefaultValue>
                  <MaxLength>80</MaxLength>
               </field>
            </fields>
         </objects>
      </updaterequest>
   </soap:body>
</soap:envelope>
```
