---
title: "Create a Text-Only Email"
domain: mc-apis
topic: create-a-text-only-email
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:16.223Z
estimatedTokens: 623
keywords: [Text-Only, Email, creating, via, SOAP, API, send, contain, any, images, HTML, formatting, Why, How, Sample, Envelope, Items]
---

> This page contains information  about creating a text-only email via the SOAP API. You can use the API to send an email that does not contain any images or HTML formatting.

# Create a Text-Only Email

Marketing Cloud has a new model for storing, finding, managing, creating, sharing, and distributing all content-related objects. Access the objects created with the new Content Builder tools using the REST API. Your existing SOAP API integrations only function with the Classic tools in Marketing Cloud.

This page contains information about creating a text-only email via the SOAP API. You can use the API to send an email that does not contain any images or HTML formatting.

## Why Create a Text-Only Email

You may need to send a text-only email as part of a transactional email send or when you only want to convey a simple message without using a formatted email. Note that this email goes out without the information necessary to track clicks or impressions.

## How To Create a Text-Only Email

Use the sample SOAP envelope below as a model to create your own text-only email. Replace the content where applicable with your own information.

### Sample SOAP Envelope

```
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Header>
      <wsse:Security xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
         <wsse:UsernameToken>
            <wsse:Username>USERNAME</wsse:Username>
            <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">PASSWORD</wsse:Password>
            <wsu:Created>2008-07-02T13:01:11Z</wsu:Created>
         </wsse:UsernameToken>
      </wsse:Security>
   </SOAP-ENV:Header>
   <SOAP-ENV:Body>
      <CreateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
         <Options/>
         <Objects xsi:type="Email">
            <ObjectID xsi:nil="true"/>
            <Name>Text Only in API</Name>
            <Description>Description</Description>
            <TextBody>Example email body for an email that is text only</TextBody>
            <Subject>Example Subject</Subject>
            <EmailType>Text Only</EmailType>
            <IsHTMLPaste>True</IsHTMLPaste>
         </Objects>
      </CreateRequest>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

## Related Items

[REST API](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/content-api.htm)
