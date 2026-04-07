---
title: "Start an Email Send Definition Test Send"
domain: mc-apis
topic: start-an-email-send-definition-test-send
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:25.228Z
estimatedTokens: 1300
keywords: [Start, Email, Send, Definition, Test, starting, Why, How, AMPscript, Sample, Call, Descriptions, Items]
---

# Start an Email Send Definition Test Send

> This page contains information  about starting a test send using an email send definition.

# Start an Email Send Definition Test Send

This page contains information about starting a test send using an email send definition.

## What is an Email Send Definition Test Send

An email send definition test send allows you to see the results of an email message sent via an email send definition before sending it to a larger subscriber audience.

You can conduct a test send using the SOAP API or include AMPscript as part of your email send definition to create a test send for that email send definition.The sample code on this page is equivalent to clicking the **Test Send** button in email send definition in Marketing Cloud. This sends the designated email to the test audience designated in the email send definition. You need a test audience defined in addition to the send audience for this code to work.Not all sendable objects can be used for test sends.

## Why Start an Email Send Definition Test Send

This test lets you evaluate and modify your message as necessary before sending it to the intended recipients.

## How to Start an Email Send Definition Test Send

Use the sample code below as a model for your own code to build the test send. The first SOAP envelope creates the email send definition, while the second SOAP envelope performs the test itself. Note that you need the IsTestObject property set to **true** in order to conduct the test send. Once you have completed this step, you can start the test.

```
<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <Header>
        <fueloauth>YOUR_ACCESS_TOKEN</fueloauth>
    </Header>
    <Body>
        <CreateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
            <Options/>
            <Objects xsi:type="EmailSendDefinition">
                <PartnerKey xsi:nil="true"/>
                <ModifiedDate xsi:nil="true"/>
                <ObjectID xsi:nil="true"/>
                <Name>zzzszz1sddd</Name>
                <CustomerKey>zzzszz1sddd</CustomerKey>
                <SendClassification>
                    <PartnerKey xsi:nil="true"/>
                    <ModifiedDate xsi:nil="true"/>
                    <ObjectID xsi:nil="true"/>
                    <CustomerKey>312</CustomerKey>
                </SendClassification>
                <SendDefinitionList>
                    <PartnerKey xsi:nil="true"/>
                    <ModifiedDate xsi:nil="true"/>
                    <ObjectID xsi:nil="true"/>
                    <CustomObjectID>6ab6b991-18a8-e011-a29b-001cc494c760</CustomObjectID>
                    <DataSourceTypeID>CustomObject</DataSourceTypeID>
                </SendDefinitionList>
                <SendDefinitionList>
                    <PartnerKey xsi:nil="true"/>
                    <ModifiedDate xsi:nil="true"/>
                    <ObjectID xsi:nil="true"/>
                    <CustomObjectID>6ab6b991-18a8-e011-a29b-001cc494c760</CustomObjectID>
                    <DataSourceTypeID>CustomObject</DataSourceTypeID>
                    <IsTestObject>true</IsTestObject>
                </SendDefinitionList>
                <Email>
                    <PartnerKey xsi:nil="true"/>
                    <ModifiedDate xsi:nil="true"/>
                    <ID>298</ID>
                    <ObjectID xsi:nil="true"/>
                </Email>
            </Objects>
        </CreateRequest>
    </Body>
</Envelope>
<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
 <Header>
      <fueloauth>YOUR_ACCESS_TOKEN</fueloauth>
 </Header>
 <Body>
   <PerformRequestMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">
    <Action>test</Action>
    <Definitions>
      <Definition xsi:type="EmailSendDefinition">
       <CustomerKey>zzzszz1sddd</CustomerKey>
      </Definition>
    </Definitions>
   </PerformRequestMsg>
 </Body>
</Envelope>
```

### How to Start an Email Send Definition Test Send Using AMPscript

Use the sample code below as a model to create your own calls.

#### Sample AMPscript Call

Use the sample AMPscript call below to start a test send using an email send definition:

`SET @statcode = InvokePerform(@esd,"test",@statusperform)`

#### Parameter and Return Value Descriptions

The sample AMPscript call uses the following variables:

-   @esd - The API object to be performed (in this case, the EmailSendDefinition object)
-   "test" - The action to be performed (in this case, "test" refers to starting a test send)
-   @statusperform - The output parameter that returns the API status message
-   @statcode - The return value of the InvokePerform function (in this case, the API status code)

You can control whether the call to an email send definition is a test send or a regular send by changing the action in the call. If you specify "test", the call goes out as a test send. If you specify "start", the call goes out as a regular send.

## Related Items

-   [Ampscript Guide](https://developer.salesforce.com/docs/atlas.en-us.mc-programmatic-content.meta/mc-programmatic-content/index.htm)
-   [Start an Email Send Definition](atlas.en-us.noversion.mc-apis.meta/mc-apis/starting_an_email_send_definition.htm)

## Related Topics

- Start an Email Send Definition (atlas.en-us.noversion.mc-apis.meta/mc-apis/starting_an_email_send_definition.htm)
