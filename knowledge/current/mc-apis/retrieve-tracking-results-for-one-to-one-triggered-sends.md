---
title: "Retrieve Tracking Results for One-to-One Triggered Sends"
domain: mc-apis
topic: retrieve-tracking-results-for-one-to-one-triggered-sends
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:23.712Z
estimatedTokens: 3742
keywords: [Retrieve, Tracking, Results, One-to-One, Triggered, retrieving, Prerequisites, Why, How, Items]
---

# Retrieve Tracking Results for One-to-One Triggered Sends

> This page contains information  about retrieving tracking results for one-to-one triggered sends.

# Retrieve Tracking Results for One-to-One Triggered Sends

This page contains information about retrieving tracking results for one-to-one triggered sends.

## Prerequisites

You must use a send logging data extension and either use an existing triggered send definition or create a new triggered send definition.

## Why Retrieve Tracking Results for One-to-one Triggered Sends

The procedures and code contained in this document allow you to retrieve tracking information that is not otherwise available via Marketing Cloud or the SOAP API.

## How to Retrieve Tracking Results for One-to-one Triggered Sends

Follow the steps below to configure your send logging data extension, update and run your triggered send definition, and retrieve the applicable tracking data:

Create a new profile attribute - the example code below names the attribute **UniqueID**, but you can change the name as appropriate.

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
            <o:UsernameToken u:Id="uuid-05561d8a-6ec8-4bb4-aa71-e4c0c6f385c8-1">
                <o:Username>
                    <!-- Removed-->
                </o:Username>
                <o:Password>
                    <!-- Removed-->
                </o:Password>
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
                    <ObjectID xsi:nil="true">
                    </ObjectID>
                    <Name>UniqueID</Name>
                    <PropertyType>string</PropertyType>
                </Configuration>
            </Configurations>
        </ConfigureRequestMsg>
    </s:Body>
</s:Envelope>
```

Modify your existing send Log data extension to have a field named **UniqueID**.

```
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <soapenv:Header>
       <wsse:Security soapenv:mustUnderstand="1" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
          <wsse:UsernameToken wsu:Id="UsernameToken-5501096" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
             <wsse:Username>XXX</wsse:Username>
             <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">XXXX</wsse:Password>
          </wsse:UsernameToken>
       </wsse:Security>
    </soapenv:Header>
    <soapenv:Body>
       <UpdateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
          <Options/>
          <Objects xsi:type="ns1:DataExtension" xmlns:ns1="http://exacttarget.com/wsdl/partnerAPI">
             <CustomerKey>SendLog</CustomerKey><!-- This is the customer key of your Send Log which is not always be simply "SendLog" since you can create it with whatever key you like -->
             <Fields>
                <Field>
                   <Name>UniqueID</Name>
                   <MaxLength>200</MaxLength>
                   <IsRequired>false</IsRequired>
                </Field>
             </Fields>
          </Objects>
       </UpdateRequest>
    </soapenv:Body>
 </soapenv:Envelope>
```

If you don't have a send log data extension, you can create a new data extension.

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
       <CreateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
          <Options/>
          <Objects xsi:type="ns1:DataExtension" xmlns:ns1="http://exacttarget.com/wsdl/partnerAPI">
             <Name>SendLog</Name>
             <Template>
                <ObjectID>c3af0d64-1867-de11-8767-001e0bcf2c98</ObjectID> <!-- This is a static value used for all accounts for the TriggeredSendDataExtension Template-->
             </Template>
             <Fields>
                <Field>
                   <Name>UniqueID</Name>
                   <FieldType>Text</FieldType>
                </Field>
             </Fields>
          </Objects>
       </CreateRequest>
    </soapenv:Body>
 </soapenv:Envelope>
```

Update an existing triggered send definition or create a new one, and be sure to set the **IsSendLogging** property to **true**.

```
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <soapenv:Header>
       <wsse:Security soapenv:mustUnderstand="1" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
          <wsse:UsernameToken wsu:Id="UsernameToken-33340097" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
             <wsse:Username>xxx</wsse:Username>
             <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">xxx</wsse:Password>
          </wsse:UsernameToken>
       </wsse:Security>
    </soapenv:Header>
    <soapenv:Body>
       <CreateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
          <Options/>
          <Objects xsi:type="TriggeredSendDefinition">
             <ObjectID xsi:nil="true"/>
                 <CustomerKey>API Example for SendLogging</CustomerKey>
                 <Name>API Example for Send Logging</Name>
                 <SendClassification>
                     <CustomerKey>2239</CustomerKey>
                     <ObjectID xsi:nil="true"/>
                 </SendClassification>
                 <Email>
                     <ObjectID xsi:nil="true"/>
                     <ID>3099626</ID>
                 </Email>
                 <IsSendLogging>true</IsSendLogging>
         </Objects>
      </CreateRequest>
   </soapenv:Body>
</soapenv:Envelope>
```

Trigger an email using the triggered send definition from step 4 with Send Logging passing in a value for the UniqueID attribute. You need to publish/start the triggered send definition after creating/updating it in order for you to trigger an email to it.

```
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:wsa="http://schemas.xmlsoap.org/ws/2004/08/addressing" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
    <soap:Header>
        <wsa:Action>Create</wsa:Action>
        <wsa:MessageID>urn:uuid:bd9bc23b-42da-4c2e-b4c1-b1e822f520a6</wsa:MessageID>
    <wsa:ReplyTo>
        <wsa:Address>http://schemas.xmlsoap.org/ws/2004/08/addressing/role/anonymous</wsa:Address>
    </wsa:ReplyTo>
    <wsa:To>https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/Service.asmx</wsa:To>
        <wsse:Security soap:mustUnderstand="1">
            <wsse:UsernameToken wsu:Id="SecurityToken-884da619-59bb-4db6-834d-138322342442">
                <wsse:Username>USER</wsse:Username>
                    <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">PASSWORD</wsse:Password>
            </wsse:UsernameToken>
        </wsse:Security>
    </soap:Header>
    <soap:Body>
        <CreateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
         <Options/>
             <Objects xsi:type="TriggeredSend">
                 <ObjectID xsi:nil="true"/>
                     <TriggeredSendDefinition>
                         <ObjectID xsi:nil="true"/>
                         <CustomerKey>API Example for Send Logging</CustomerKey>
                     </TriggeredSendDefinition>
                     <Subscribers>
                         <ObjectID xsi:nil="true"/>
                         <EmailAddress>help@example.com</EmailAddress>
                         <SubscriberKey>help@example.com</SubscriberKey>
                     <Attributes>
                          <Name>UniqueID</Name>
                          <Value>111-111-2323123-21312321-213213</Value>
                     </Attributes>
             </Subscribers>
         </Objects>
        </CreateRequest>
    </soap:Body>
</soap:Envelope>
```

Use the Retrieve method to retrieve the JobID, BatchID, and SubscriberID for that specific send fromthe send log data extension.

```
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:wsa="http://schemas.xmlsoap.org/ws/2004/08/addressing" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
    <soap:Header>
        <wsa:Action>Retrieve</wsa:Action>
        <wsa:MessageID>urn:uuid:53d6622b-2a5d-4f1a-aaba-98a8150ccd36</wsa:MessageID>
        <wsa:ReplyTo>
            <wsa:Address>http://schemas.xmlsoap.org/ws/2004/08/addressing/role/anonymous</wsa:Address>
        </wsa:ReplyTo>
        <wsa:To>https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/Service.asmx</wsa:To>
        <wsse:Security soap:mustUnderstand="1">
            <wsse:UsernameToken wsu:Id="SecurityToken-ba7fd607-ee1d-48e4-90d1-8d950bbc1a67">
                <wsse:Username>XXXX</wsse:Username>
                <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">XXXX</wsse:Password>
            </wsse:UsernameToken>
        </wsse:Security>
    </soap:Header>
    <soap:Body>
        <RetrieveRequestMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">
            <RetrieveRequest>
                <ObjectType>DataExtensionObject[SendLog]</ObjectType>
                <Properties>JobID</Properties>
                <Properties>BatchID</Properties>
                <Properties>SubscriberID</Properties>
                <Filter xsi:type="SimpleFilterPart">
                    <Property>UniqueID</Property>
                    <SimpleOperator>equals</SimpleOperator>
                    <DateValue>111-111-2323123-21312321-213213</DateValue>
                </Filter>
            </RetrieveRequest>
        </RetrieveRequestMsg>
    </soap:Body>
</soap:Envelope>
```

Use the three properties from step 6 to perform a retrieve on whatever tracking event you are looking for. The examples shows SentEvent, but you can modify the code to retrieve opens, clicks, unsubs, and the events.

```
<s:Envelope xmlns:s="http://www.w3.org/2003/05/soap-envelope" xmlns:a="http://schemas.xmlsoap.org/ws/2004/08/addressing" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
    <s:Header>
        <a:Action s:mustUnderstand="1">Retrieve</a:Action>
        <a:MessageID>urn:uuid:a5d11696-c5ea-4656-97b5-e29843b3a2c2</a:MessageID>
            <a:ReplyTo>
                <a:Address>http://schemas.xmlsoap.org/ws/2004/08/addressing/role/anonymous</a:Address>
            </a:ReplyTo>
        <a:To s:mustUnderstand="1">https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/Service.asmx</a:To>
        <o:Security s:mustUnderstand="1" xmlns:o="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
            <o:UsernameToken u:Id="uuid-ac86ed04-c3da-4fde-8bed-9521580ed207-1">
                <o:Username>xxx</o:Username>
                <o:Password>xxx</o:Password>
            </o:UsernameToken>
        </o:Security>
    </s:Header>
    <s:Body xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
        <RetrieveRequestMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">
            <RetrieveRequest>
                <ObjectType>SentEvent</ObjectType>
                <Properties>SubscriberKey</Properties>
                <Properties>EventDate</Properties>
                <Filter xsi:type="ComplexFilterPart">
                    <LeftOperand xsi:type="SimpleFilterPart">
                        <Property>SendID</Property>
                        <SimpleOperator>equals</SimpleOperator>
                        <Value>10980375</Value>
                    </LeftOperand>
                    <LogicalOperator>AND</LogicalOperator>
                    <RightOperand xsi:type="SimpleFilterPart">
                        <Property>BatchID</Property>
                        <SimpleOperator>equals</SimpleOperator>
                        <Value>5</Value>
                    </RightOperand>
                    <AdditionalOperands>
                        <Operand xsi:type="SimpleFilterPart">
                            <Property>SubscriberID</Property>
                            <SimpleOperator>equals</SimpleOperator>
                            <Value>199672583</Value>
                        </Operand>
                    </AdditionalOperands>
                </Filter>
            </RetrieveRequest>
        </RetrieveRequestMsg>
    </s:Body>
</s:Envelope>
```

## Related Items

-   [Send Logging](https://help.salesforce.com/articleView?id=mc_es_send_logging.htm&type=5)
-   [Retrieve Method](atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieve.htm)

## Related Topics

- Retrieve Method (atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieve.htm)
