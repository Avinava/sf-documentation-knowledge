---
title: "Create the GetMaxCount Action for Email Send Definitions"
domain: mc-apis
topic: create-the-getmaxcount-action-for-email-send-definitions
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:16.338Z
estimatedTokens: 1190
keywords: [GetMaxCount, Action, Email, Send, Definitions, including, performing, definition, How, Sample, SOAP]
---

> This page contains information  about including the GetMaxCount action when performing an email send definition.

# Create the GetMaxCount Action for Email Send Definitions

This page contains information about including the GetMaxCount action when performing an email send definition.

## What Is the GetMaxCount Action for Email Send Definitions

The GetMaxCount action delivers the total number of active users that could be reached by the send specified in the email send definition. Submit GetMaxCount as an action with your email send definition.

## How to Create the GetMaxCount Action for Email Send Definition

Use the sample code below as a model for your own sample code. Note that the GetMaxCount action is specified in the Action note in the SOAP request envelope, and the SOAP response envelope contains the count in the Task node.

### Sample SOAP Request

```
<?xml version="1.0" encoding="UTF-8"?>
    <SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
        <SOAP-ENV:Header>
            <wsse:Security xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
                <wsu:Timestamp>
                    <wsu:Created>2011-03-31T03:05:00Z</wsu:Created>
                    <wsu:Expires>2011-03-31T03:10:00Z</wsu:Expires>
                </wsu:Timestamp>
                <wsse:UsernameToken>
                    <wsse:Username>XXX</wsse:Username>
                    <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">XXX</wsse:Password>
                    <wsse:Nonce>R89eC5u7P7a9ZtROw3kAWE4CJes=</wsse:Nonce>
                    <wsu:Created>2011-03-31T03:05:00Z</wsu:Created>
                </wsse:UsernameToken>
            </wsse:Security>
        </SOAP-ENV:Header>
        <SOAP-ENV:Body>
            <PerformRequestMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">
                <Options/>
                <Action>getmaxcount</Action>
                <Definitions>
                    <ns1:Definition xmlns:ns1="http://exacttarget.com/wsdl/partnerAPI" xsi:type="ns1:EmailSendDefinition">
                        <ns1:ModifiedDate xsi:nil="true"/>
                        <ns1:ObjectID>d4cf1d8e-435b-e011-9d80-001cc494c760</ns1:ObjectID>
                    </ns1:Definition>
                </Definitions>
            </PerformRequestMsg>
        </SOAP-ENV:Body>
    </SOAP-ENV:Envelope>
```

### Sample SOAP Response

```
<?xml version="1.0" encoding="UTF-8"?>
    <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:wsa="http://schemas.xmlsoap.org/ws/2004/08/addressing" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
        <soap:Header>
            <wsa:Action>PerformResponse</wsa:Action>
            <wsa:MessageID>urn:uuid:97bfc885-4d3c-4616-957e-5678a2d3e32f</wsa:MessageID>
            <wsa:RelatesTo>urn:uuid:a6243153-d210-4420-9166-206419385729</wsa:RelatesTo>
            <wsa:To>http://schemas.xmlsoap.org/ws/2004/08/addressing/role/anonymous</wsa:To>
            <wsse:Security>
                <wsu:Timestamp wsu:Id="Timestamp-c32dd136-c28c-4cab-8ce7-823352a64579">
                    <wsu:Created>2011-03-31T03:05:00Z</wsu:Created>
                    <wsu:Expires>2011-03-31T03:10:00Z</wsu:Expires>
                </wsu:Timestamp>
            </wsse:Security>
        </soap:Header>
        <soap:Body>
            <PerformResponseMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">
                <Results>
                    <Result>
                        <StatusCode>OK</StatusCode>
                        <StatusMessage>Task status message holds the requested value.</StatusMessage>
                        <Object xsi:type="EmailSendDefinition">
                            <ModifiedDate xsi:nil="true"/>
                            <ObjectID>d4cf1d8e-435b-e011-9d80-001cc494c760</ObjectID>
                        </Object>
                        <Task>
                            <StatusCode>OK</StatusCode>
                            <StatusMessage>3</StatusMessage>
                        </Task>
                    </Result>
                </Results>
                <OverallStatus>OK</OverallStatus>
                <OverallStatusMessage/>
                <RequestID>0de9651b-4647-4e9f-9e85-cc4536a75fbb</RequestID>
            </PerformResponseMsg>
        </soap:Body>
    </soap:Envelope>
```
