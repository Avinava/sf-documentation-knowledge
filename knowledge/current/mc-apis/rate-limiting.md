---
title: "Rate Limiting"
domain: mc-apis
topic: rate-limiting
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:23.241Z
estimatedTokens: 521
keywords: [Rate, Limiting, Marketing, Cloud, reserves, right, throttle, SOAP, API, calls, specific, customer, cause, slowed, system]
---

# Rate Limiting

> Marketing Cloud reserves the right to throttle SOAP API calls from a specific customer when those API calls cause slowed system performance. The throttling rate depends on the rate necessary to stabilize operations. If this throttling occurs, the business unit or user causing this issue receives HTT

# Rate Limiting

Marketing Cloud reserves the right to throttle SOAP API calls from a specific customer when those API calls cause slowed system performance. The throttling rate depends on the rate necessary to stabilize operations. If this throttling occurs, the business unit or user causing this issue receives HTTP 500 error messages communicating the limited rate until the calls causing the issue cease. Your Marketing Cloud account representative can help resolve the situation as necessary.

## Sample HTTP 500 Error Payload

```
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:wsa="http://schemas.xmlsoap.org/ws/2004/08/addressing" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
   <soap:Header>
      <wsa:Action>http://schemas.xmlsoap.org/ws/2004/08/addressing/fault</wsa:Action>
      <wsa:MessageID>urn:uuid:83defa1b-6802-439f-8a46-5331e0d23a4b</wsa:MessageID>
      <wsa:RelatesTo>urn:uuid:89a37da3-3bc0-41e7-9212-06bb4a0cf85f</wsa:RelatesTo>
      <wsa:To>http://schemas.xmlsoap.org/ws/2004/08/addressing/role/anonymous</wsa:To>
      <wsse:Security>
         <wsu:Timestamp wsu:Id="Timestamp-4f0e9ddd-3041-41d7-bd72-26a67008b0b7">
            <wsu:Created>2017-02-01T19:07:24Z</wsu:Created>
            <wsu:Expires>2017-02-01T19:12:24Z</wsu:Expires>
         </wsu:Timestamp>
      </wsse:Security>
   </soap:Header>
   <soap:Body>
      <soap:Fault>
         <faultcode>soap:Server</faultcode>
         <faultstring>Rate Limited</faultstring>
         <faultactor>https://webservice.s1.qa1.exacttarget.com/Service.asmx</faultactor>
         <detail>
            <apifault xmlns="urn:fault.partner.exacttarget.com">
               <Code>17</Code>
               <Message>Rate Limited</Message>
            </apifault>
         </detail>
      </soap:Fault>
   </soap:Body>
</soap:Envelope>
```
