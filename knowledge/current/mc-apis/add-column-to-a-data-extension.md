---
title: "Add Column to a Data Extension"
domain: mc-apis
topic: add-column-to-a-data-extension
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:15.123Z
estimatedTokens: 826
keywords: [Add, Column, Extension, adding, new, Why, How, Sample, Java, Code, Axis, 1.4, PHP, SOAP, Envelope, Items]
---

> This page contains information  about adding a new column to an existing data extension.

# Add Column to a Data Extension

This page contains information about adding a new column to an existing data extension.

## Why Add a New Column to an Existing Data Extension

Depending on your data storage needs, you might need to add more information to a data extension in a column not currently included in that data extension. This procedure allows you to add more information regarding your subscribers to an existing data extension without having to create a new data extension or transfer data into that data extension.

## How To Add a New Column to an Existing Data Extension

Use the sample code below to create your own API calls to add the new column.

### Sample Java Code (Axis 1.4)

```apex
public void testUpdateDataExtension() throws RemoteException {
    Soap stub = init();
    DataExtension dataExtension = new DataExtension();
    dataExtension.setCustomerKey("CustomerKey");
    DataExtensionField f = new DataExtensionField();
    f.setName("HTMLContent");
    f.setCustomerKey("HTMLContent_Key");
    f.setMaxLength(new Integer(4000));
    dataExtension.setFields(new DataExtensionField[]{f});
    UpdateOptions updateOptions = new UpdateOptions();
    SaveOption option = new SaveOption();
    option.setPropertyName("DataExtension");
    option.setSaveAction(SaveAction.UpdateOnly);
    updateOptions.setSaveOptions(new SaveOption[]{option});
    UpdateRequest updateRequest = new UpdateRequest(updateOptions, new APIObject[]{dataExtension});
    UpdateResponse updateResponse = stub.update(updateRequest);
    System.out.println("updateResponse :::: " + updateResponse.getOverallStatus());
}
```

### Sample PHP Code

Use the example code in the PHP API Starter Kit.

### Sample SOAP Envelope

```
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <soapenv:Header>
        <wsse:Security soapenv:mustUnderstand="1" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
            <wsse:UsernameToken wsu:Id="UsernameToken-5501096" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
                <wsse:Username>XXX</wsse:Username>
                <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">XXX</wsse:Password>
            </wsse:UsernameToken>
        </wsse:Security>
    </soapenv:Header>
    <soapenv:Body>
        <UpdateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
            <Options />
            <Objects xsi:type="ns1:DataExtension" xmlns:ns1="http://exacttarget.com/wsdl/partnerAPI">
                <CustomerKey>8533EC32-5E12-4599-B279-0369EFCB38E3</CustomerKey>
                <Fields>
                    <Field>
                        <Name>New Field</Name>
                        <MaxLength>200</MaxLength>
                        <IsRequired>true</IsRequired>
                    </Field>
                </Fields>
            </Objects>
        </UpdateRequest>
    </soapenv:Body>
</soapenv:Envelope>
```

## Related Items

[PHP API Starter Kit](http://help.marketingcloud.com/globalassets/documentation/apistarterkits/php-apistarterkit-v1.zip)
