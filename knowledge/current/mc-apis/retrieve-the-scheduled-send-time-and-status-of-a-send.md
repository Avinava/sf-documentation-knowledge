---
title: "Retrieve the Scheduled Send Time and Status of a Send"
domain: mc-apis
topic: retrieve-the-scheduled-send-time-and-status-of-a-send
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:23.694Z
estimatedTokens: 538
keywords: [Retrieve, Scheduled, Send, Time, Status, retrieving, Why, How, Sample, SOAP, Envelope]
---

# Retrieve the Scheduled Send Time and Status of a Send

> This page contains information  about retrieving the scheduled send time and status of a scheduled send.

# Retrieve the Scheduled Send Time and Status of a Send

This page contains information about retrieving the scheduled send time and status of a scheduled send.

## Why Retrieve the Scheduled Send Time and Status of a Send

You can use the retrieved information to learn when a specific send job is sent to subscribers and take any necessary action, such as cancelling a send or scheduling a send to follow up on the original send.

## How to Retrieve the Scheduled Send Time and Status of a Send

Use the sample code below as a model for your own API call.

### Sample SOAP Envelope

```
<soapenv:Body>
      <RetrieveRequestMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">
         <RetrieveRequest>
            <Options>
            </Options>
            <ObjectType>Send</ObjectType>
            <Properties>ID</Properties>
            <Properties>Client.ID</Properties>
            <Properties>Email.ID</Properties>
            <Properties>SendDate</Properties>
            <Properties>FromName</Properties>
            <Properties>Duplicates</Properties>
            <Properties>InvalidAddresses</Properties>
            <Properties>ExistingUndeliverables</Properties>
            <Properties>ExistingUnsubscribes</Properties>
            <Properties>HardBounces</Properties>
            <Properties>SoftBounces</Properties>
            <Properties>OtherBounces</Properties>
            <Properties>UniqueClicks</Properties>
            <Properties>UniqueOpens</Properties>
            <Properties>NumberSent</Properties>
            <Properties>Unsubscribes</Properties>
            <Properties>MissingAddresses</Properties>
            <Properties>Subject</Properties>
            <Properties>PreviewURL</Properties>
            <Properties>SentDate</Properties>
            <Properties>EmailName</Properties>
            <Properties>Status</Properties>
            <Filter xsi:type="SimpleFilterPart">
               <Property>ID</Property>
               <SimpleOperator>equals</SimpleOperator>
               <Value>123456789</Value>
            </Filter>
         </RetrieveRequest>
      </RetrieveRequestMsg>
   </soapenv:Body>
```
