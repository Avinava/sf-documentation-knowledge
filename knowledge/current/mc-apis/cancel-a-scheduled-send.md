---
title: "Cancel a Scheduled Send"
domain: mc-apis
topic: cancel-a-scheduled-send
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:20.529Z
estimatedTokens: 670
keywords: [Cancel, Scheduled, Send, canceling, Why, How, Sample, NET, Code, SOAP, Envelope]
---

# Cancel a Scheduled Send

> This page contains information  about canceling a scheduled send.

# Cancel a Scheduled Send

This page contains information about canceling a scheduled send.

## Why Cancel a Scheduled Send

If you no longer wish to perform a scheduled send, you can use the information in this document to cancel that send. For example, if an email message contains outdated or incorrect information, you would want to prevent that email from being sent.

## How to Cancel a Scheduled Send

Use the sample code below as a model to cancel an already scheduled send. The code cancels a single instance of a send scheduled for a future date.

### Sample .NET Code

```
Send send = new Send() { ID = sendID, IDSpecified = true };
PerformOptions performOptions = new PerformOptions();
APIObject[] performObjects = new APIObject[] { send };
PerformResult[] performResults = partnerAPI.Perform(performOptions, "cancel", performObjects, out status, out message, out requestID);
```

### Sample SOAP Envelope

```
<?xml version="1.0" encoding="UTF-8" ?>
    <SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
        <SOAP-ENV:Header>
           <wsse:Security xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
                <wsse:UsernameToken>
                    <wsse:Username>XXX</wsse:Username>
                    <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">XXX</wsse:Password>
                    <wsse:Nonce>On06D99VmKbjWKQiY6wYLk+IpIs=</wsse:Nonce>
                    <wsu:Created>2011-03-24T15:23:47Z</wsu:Created>
                </wsse:UsernameToken>
            </wsse:Security>
        </SOAP-ENV:Header>
        <SOAP-ENV:Body>
            <PerformRequestMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">
                <Options />
                <Action>cancel</Action>
                <Definitions>
                    <ns1:Definition xmlns:ns1="http://exacttarget.com/wsdl/partnerAPI" xsi:type="ns1:Send">=
                        <ns1:ModifiedDate xsi:nil="true" />
                        <ns1:ID>29605</ns1:ID>
                        <ns1:ObjectID xsi:nil="true" />
                        <ns1:NumberSent xsi:nil="true" />
                        <ns1:NumberDelivered xsi:nil="true" />
                        <ns1:SentDate xsi:nil="true" />
                    </ns1:Definition>
                </Definitions>
            </PerformRequestMsg>
        </SOAP-ENV:Body>
    </SOAP-ENV:Envelope>
```

## Code Examples

```
<?xml version="1.0" encoding="UTF-8" ?> 
    <SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
        <SOAP-ENV:Header>
           <wsse:Security xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
                <wsse:UsernameToken>
                    <wsse:Username>XXX</wsse:Username> 
                    <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">XXX</wsse:Password> 
                    <wsse:Nonce>On06D99VmKbjWKQiY6wYLk+IpIs=</wsse:Nonce> 
                    <wsu:Created>2011-03-24T15:23:47Z</wsu:Created> 
                </wsse:UsernameToken>
            </wsse:Security>
        </SOAP-ENV:Header>
        <SOAP-ENV:Body>
            <PerformRequestMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">
                <Options /> 
                <Action>cancel</Action> 
                <Definitions>
                    <ns1:Definition xmlns:ns1="http://exacttarget.com/wsdl/partnerAPI" xsi:type="ns1:Send">=
                        <ns1:ModifiedDate xsi:nil="true" /> 
                        <ns1:ID>29605</ns1:ID> 
                        <ns1:ObjectID xsi:nil="true" /> 
                        <ns1:NumberSent xsi:nil="true" /> 
                        <ns1:NumberDelivered xsi:nil="true" /> 
                        <ns1:SentDate xsi:nil="true" /> 
                    </ns1:Definition>
                </Definitions>
            </PerformRequestMsg>
        </SOAP-ENV:Body>
    </SOAP-ENV:Envelope>
```
