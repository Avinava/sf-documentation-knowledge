---
title: "Update a Data Extension with a Null Field Value"
domain: mc-apis
topic: update-a-data-extension-with-a-null-field-value
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:25.718Z
estimatedTokens: 789
keywords: [Data, Extension, how, SOAP, API, nullable, Why, Sample, Code, NET, Envelope]
---

# Update a Data Extension with a Null Field Value

> This page contains information on how to use the SOAP API to update a nullable field in a data extension to a null value.

# Update a Data Extension with a Null Field Value

This page contains information on how to use the SOAP API to update a nullable field in a data extension to a null value.

## Why Update a Data Extension Object with a Null Field Value

After assigning a value to a nullable field within a data extension, it may be necessary to return that field to a null value. When a call does not provide a value for a field in an update request, that field retains the current value. In order to overwrite the value of a field with a null value, the call must explicitly state that null value using the NullAPIProperty type.

## Sample Code

Use the sample code to update a nullable field in a data extension to a null value.

## Sample .NET Code

```apex
private void UpdateDEFieldToNull()
{
    SoapClient Marketing Cloud SOAPClient = new SoapClient();
    Marketing Cloud SOAPClient.ClientCredentials.UserName.UserName = "XXXXX";
    Marketing Cloud SOAPClient.ClientCredentials.UserName.Password = "XXXXX";
    string requestID;
    string status;
    DataExtensionObject DEO = new DataExtensionObject();
    DEO.CustomerKey = "ExampleDE";
    APIProperty EmailProperty = new APIProperty();
    EmailProperty.Name = "EMAIL";
    EmailProperty.Value = "example@example.com";
    APIProperty NumberProperty = new NullAPIProperty();
    NumberProperty.Name = "NumberField";
    DEO.Properties = new APIProperty[] { EmailProperty, NumberProperty };
    UpdateResult[] cresults = Marketing Cloud SOAPClient.Update(new UpdateOptions(), new APIObject[] { DEO }, out requestID, out status);
    foreach (UpdateResult result in cresults)
    {
        Console.WriteLine(result.StatusMessage);
    }
    Console.WriteLine(requestID + ": " + status);
}
```

## Sample SOAP Envelope

```
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:wsa="http://schemas.xmlsoap.org/ws/2004/08/addressing" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
   <soap:Header>
      <wsse:Security soap:mustUnderstand="1">
         <wsse:UsernameToken>
            <wsse:Username>XXXXX</wsse:Username>
            <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">XXXXX</wsse:Password>
         </wsse:UsernameToken>
      </wsse:Security>
   </soap:Header>
   <soap:Body>
      <UpdateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
         <Options/>
         <Objects xsi:type="DataExtensionObject">
            <CustomerKey>ExampleDE</CustomerKey>
            <Properties>
               <Property>
                  <Name>EMAIL</Name>
                  <Value>example@example.com</Value>
               </Property>
               <Property xsi:type="NullAPIProperty">
                  <Name>NumberField</Name>
               </Property>
            </Properties>
         </Objects>
      </UpdateRequest>
   </soap:Body>
</soap:Envelope>
```
