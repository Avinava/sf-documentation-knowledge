---
title: "Test SOAP Envelopes"
domain: mc-apis
topic: test-soap-envelopes
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:20.659Z
estimatedTokens: 3102
keywords: [Test, SOAP, Envelopes, testing, ensure, correct, coding, interact, Marketing, Cloud, API, Why, How, Simple, Sample, Describe, Call]
---

> This page contains information  about testing SOAP envelopes. You can test SOAP envelopes to ensure correct coding before using them to interact with the Marketing Cloud SOAP API.

# Test SOAP Envelopes

This page contains information about testing SOAP envelopes. You can test SOAP envelopes to ensure correct coding before using them to interact with the Marketing Cloud SOAP API.

## Why Test SOAP Envelopes

Testing ensures that your SOAP envelopes are correctly formed and function as expected when submitted to the SOAP API. Doing so also helps prevent the amount of unexpected API issues and reduce potential occurrences of data loss or corruption.

## How to Test SOAP Envelopes

Follow the instructions below to test your SOAP envelopes using Mozilla's Firefox browser.

[Download the Poster extension for Firefox.](https://addons.mozilla.org/en-US/firefox/addon/poster/)**Post**

You can also use a more full-featured tool like SOAPUI. You can download this tool and install it on your computer for use in testing SOAP envelopes. Find detailed instructions on [http://www.soapui.org/](http://www.soapui.org/).

### Simple Headers

The examples below use POST over HTTPS and interact with the SOAP API. For the purposes of this example, post the sample SOAP to with URL below with an HTTP Header of SOAPAction and a value of Create:

```
https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/Service.asmx
```
```
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
xmlns:xsd="http://www.w3.org/2001/XMLSchema"
xmlns:wsa="http://schemas.xmlsoap.org/ws/2004/08/addressing"
xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"
xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd"
xmlns:ns1="http://exacttarget.com/wsdl/partnerAPI">
    <soap:Header>
        <wsse:Security soap:mustUnderstand="1">
            <wsse:UsernameToken xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
                <wsse:Username>username</wsse:Username>
                <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">password</wsse:Password>
            </wsse:UsernameToken>
        </wsse:Security>
    </soap:Header>
    <soap:Body>
        <ns1:CreateRequest>
            <ns1:Options />
                <ns1:Objects xsi:type="ns1:TriggeredSend">
                    <ns1:TriggeredSendDefinition>
                        <ns1:CustomerKey>1223</ns1:CustomerKey>
                    </ns1:TriggeredSendDefinition>
                    <ns1:Subscribers>
                        <ns1:EmailAddress>acruz@example.com</ns1:EmailAddress>
                        <ns1:SubscriberKey>acruz@example.com</ns1:SubscriberKey>
                        <ns1:Attributes>
                            <ns1:Name>HTML__XMLValues</ns1:Name>
                            <ns1:Value>&lt;root&gt;&lt;content&gt;&lt;![CDATA[acruz@example.com]]&gt;&lt;/content&gt;&lt;/root&gt;</ns1:Value>
                        </ns1:Attributes>
                    </ns1:Subscribers>
                </ns1:Objects>
        </ns1:CreateRequest>
    </soap:Body>
</soap:Envelope>
```

#### Sample Describe Call Request

```
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:wsa="http://schemas.xmlsoap.org/ws/2004/08/addressing" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
        <soap:Header>
          <wsa:Action>Describe</wsa:Action>
          <wsa:MessageID>urn:uuid:68885a65-9639-4ed2-a781-3497abc6255a</wsa:MessageID>
          <wsa:ReplyTo>
            <wsa:Address>http://schemas.xmlsoap.org/ws/2004/08/addressing/role/anonymous</wsa:Address>
          </wsa:ReplyTo>
          <wsa:To>https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/Service.asmx</wsa:To>
          <wsse:Security soap:mustUnderstand="1">
            <wsu:Timestamp wsu:Id="Timestamp-e9bfb46d-3812-4ed1-be88-b8f305e8edbf">
              <wsu:Created>2008-04-29T21:46:14Z</wsu:Created>
              <wsu:Expires>2008-04-29T21:51:14Z</wsu:Expires>
            </wsu:Timestamp>
            <wsse:UsernameToken xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd" wsu:Id="SecurityToken-6de49383-e395-4bc9-af00-6081bcbbb99b">
              <wsse:Username>username</wsse:Username>
              <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">password</wsse:Password>
              <wsse:Nonce>sKFZbJfwdlcorxbb09IBtg==</wsse:Nonce>
              <wsu:Created>2008-04-29T21:46:14Z</wsu:Created>
            </wsse:UsernameToken>
          </wsse:Security>
        </soap:Header>
        <soap:Body>
          <DefinitionRequestMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">
            <DescribeRequests>
              <ObjectDefinitionRequest>
                <ObjectType>Subscriber</ObjectType>
              </ObjectDefinitionRequest>
            </DescribeRequests>
          </DefinitionRequestMsg>
        </soap:Body>
      </soap:Envelope>
```

#### Sample Describe Call Response

```
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:wsa="http://schemas.xmlsoap.org/ws/2004/08/addressing" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
        <soap:Header>
          <wsa:Action>DescribeResponse</wsa:Action>
          <wsa:MessageID>urn:uuid:ced5aed0-e29b-498a-b395-cbeee9bbd505</wsa:MessageID>
          <wsa:RelatesTo>urn:uuid:68885a65-9639-4ed2-a781-3497abc6255a</wsa:RelatesTo>
          <wsa:To>http://schemas.xmlsoap.org/ws/2004/08/addressing/role/anonymous</wsa:To>
          <wsse:Security>
            <wsu:Timestamp wsu:Id="Timestamp-1590d1e1-1bb3-418d-a53d-4383c8be7e79">
              <wsu:Created>2008-04-29T21:46:18Z</wsu:Created>
              <wsu:Expires>2008-04-29T21:51:18Z</wsu:Expires>
            </wsu:Timestamp>
          </wsse:Security>
        </soap:Header>
        <soap:Body>
          <DefinitionResponseMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">
            <ObjectDefinition>
              <ObjectType>Subscriber</ObjectType>
              <Properties>
                <ObjectID xsi:nil="true" />
                <Name>ID</Name>
                <DataType>Int32</DataType>
                <IsUpdatable>true</IsUpdatable>
                <IsRetrievable>true</IsRetrievable>
              </Properties>
              <Properties>
                <ObjectID xsi:nil="true" />
                <Name>CreatedDate</Name>
                <DataType>DateTime</DataType>
                <IsUpdatable>true</IsUpdatable>
                <IsRetrievable>true</IsRetrievable>
              </Properties>
              <Properties>
                <ObjectID xsi:nil="true" />
                <Name>Client.ID</Name>
                <DataType>Int32</DataType>
                <IsRetrievable>true</IsRetrievable>
              </Properties>
              <Properties>
                <ObjectID xsi:nil="true" />
                <Name>Client.PartnerClientKey</Name>
                <DataType>String</DataType>
                <IsRetrievable>true</IsRetrievable>
              </Properties>
              <Properties>
                <ObjectID xsi:nil="true" />
                <Name>EmailAddress</Name>
                <DataType>String</DataType>
                <IsUpdatable>true</IsUpdatable>
                <IsRetrievable>true</IsRetrievable>
              </Properties>
              <Properties>
                <ObjectID xsi:nil="true" />
                <Name>SubscriberKey</Name>
                <DataType>String</DataType>
                <IsUpdatable>true</IsUpdatable>
                <IsRetrievable>true</IsRetrievable>
              </Properties>
              <Properties>
                <ObjectID xsi:nil="true" />
                <Name>UnsubscribedDate</Name>
                <DataType>DateTime</DataType>
                <IsUpdatable>true</IsUpdatable>
                <IsRetrievable>true</IsRetrievable>
              </Properties>
              <Properties>
                <ObjectID xsi:nil="true" />
                <Name>Status</Name>
                <DataType>SubscriberStatus</DataType>
                <IsUpdatable>true</IsUpdatable>
                <IsRetrievable>true</IsRetrievable>
              </Properties>
              <Properties>
                <ObjectID xsi:nil="true" />
                <Name>EmailTypePreference</Name>
                <DataType>EmailType</DataType>
                <IsUpdatable>true</IsUpdatable>
                <IsRetrievable>true</IsRetrievable>
              </Properties>
              <Properties>
                <ObjectID xsi:nil="true" />
                <Name>Attributes</Name>
                <DataType>Attribute[]</DataType>
                <IsUpdatable>true</IsUpdatable>
                <IsRetrievable>false</IsRetrievable>
              </Properties>
              <Properties>
                <ObjectID xsi:nil="true" />
                <Name>PartnerType</Name>
                <DataType>String</DataType>
                <IsUpdatable>true</IsUpdatable>
                <IsRetrievable>false</IsRetrievable>
              </Properties>
              <Properties>
                <ObjectID xsi:nil="true" />
                <Name>Lists</Name>
                <DataType>SubscriberList[]</DataType>
                <IsUpdatable>true</IsUpdatable>
                <IsRetrievable>false</IsRetrievable>
              </Properties>
              <Properties>
                <ObjectID xsi:nil="true" />
                <Name>GlobalUnsubscribeCategory</Name>
                <DataType>GlobalUnsubscribeCategory</DataType>
                <IsUpdatable>true</IsUpdatable>
                <IsRetrievable>false</IsRetrievable>
              </Properties>
              <Properties>
                <ObjectID xsi:nil="true" />
                <Name>SubscriberTypeDefinition</Name>
                <DataType>SubscriberTypeDefinition</DataType>
                <IsUpdatable>true</IsUpdatable>
                <IsRetrievable>false</IsRetrievable>
              </Properties>
              <Properties>
                <ObjectID xsi:nil="true" />
                <Name>Client</Name>
                <DataType>ClientID</DataType>
                <IsUpdatable>true</IsUpdatable>
                <IsRetrievable>false</IsRetrievable>
              </Properties>
              <Properties>
                <ObjectID xsi:nil="true" />
                <Name>PartnerProperties</Name>
                <DataType>APIProperty[]</DataType>
                <IsUpdatable>true</IsUpdatable>
                <IsRetrievable>false</IsRetrievable>
              </Properties>
              <Properties>
                <ObjectID xsi:nil="true" />
                <Name>ModifiedDate</Name>
                <DataType>DateTime</DataType>
                <IsUpdatable>true</IsUpdatable>
                <IsRetrievable>false</IsRetrievable>
              </Properties>
              <Properties>
                <ObjectID xsi:nil="true" />
                <Name>ObjectID</Name>
                <DataType>String</DataType>
                <IsUpdatable>true</IsUpdatable>
                <IsRetrievable>false</IsRetrievable>
              </Properties>
              <Properties>
                <ObjectID xsi:nil="true" />
                <Name>CustomerKey</Name>
                <DataType>String</DataType>
                <IsUpdatable>true</IsUpdatable>
                <IsRetrievable>false</IsRetrievable>
              </Properties>
              <Properties>
                <ObjectID xsi:nil="true" />
                <Name>Owner</Name>
                <DataType>Owner</DataType>
                <IsUpdatable>true</IsUpdatable>
                <IsRetrievable>false</IsRetrievable>
              </Properties>
            </ObjectDefinition>
            <RequestID>9ca967d4-b2d4-4927-9863-5cb0f2a28712</RequestID>
          </DefinitionResponseMsg>
        </soap:Body>
```
