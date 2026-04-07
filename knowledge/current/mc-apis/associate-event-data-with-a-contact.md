---
title: "Associate Event Data with a Contact"
domain: mc-apis
topic: associate-event-data-with-a-contact
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:15.258Z
estimatedTokens: 1056
keywords: [Associate, Event, Contact, collection, behavioral, either, action, customer, taken, something, happened, Examples, actions, opening, email, subscribing, newsletter, participating, survey, making, purchase, calling, Sample, SOAP, Envelope, Items]
---

> An event is the collection of behavioral data that describes either an action a customer has taken or something that has happened to the customer. Examples of actions a
customer has taken are opening an email, subscribing to a newsletter, participating in a survey, making a purchase, or calling in t

# Associate Event Data with a Contact

An event is the collection of behavioral data that describes either an action a customer has taken or something that has happened to the customer. Examples of actions a customer has taken are opening an email, subscribing to a newsletter, participating in a survey, making a purchase, or calling in to a call center. Events that happen to a customer include things like having an email sent to them, being included in a direct mail campaign, receiving a call from a rep. All of the data that is collected about customer events is organized and related back to the contact record in Contact Builder. The event data can be used for filtering, personalization and driving customer journeys.

Use this sample SOAP envelope with the ContactEvent object to associate event data with a contact. To batch multiple items in a single request, include multiple objects that each contain data. Don't include multiple AttributeSets in one object.

## Sample SOAP Envelope

```
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
 <SOAP-ENV:Header>
  <wsse:Security xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
   <wsu:Timestamp>
    <wsu:Created>2016-09-02T13:42:09Z</wsu:Created>
    <wsu:Expires>2016-09-02T13:47:09Z</wsu:Expires>
   </wsu:Timestamp>
   <wsse:UsernameToken>
    <wsse:Username>xxxxxxxxx</wsse:Username>
    <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">xxxxx</wsse:Password>
    <wsse:Nonce EncodingType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-soap-message-security-1.0#Base64Binary">cs5vIFv5flSerLrzOy0AqCtVBrY=</wsse:Nonce>
    <wsu:Created>2016-09-02T13:42:09Z</wsu:Created>
   </wsse:UsernameToken>
  </wsse:Security>
 </SOAP-ENV:Header>
 <SOAP-ENV:Body>
  <CreateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
   <Options>
     <RequestType>Synchronous</RequestType>
   </Options>
   <ns1:Objects xmlns:ns1="http://exacttarget.com/wsdl/partnerAPI" xsi:type="ns1:ContactEvent">
    <ns1:PartnerKey xsi:nil="true" />
    <ns1:ModifiedDate xsi:nil="true" />
    <ns1:ObjectID xsi:nil="true" />
    <ns1:EventDefinitionKey>externalkeyforprods4</ns1:EventDefinitionKey>
    <ns1:Data>
     <ns1:AttributeSet>
      <ns1:PartnerKey xsi:nil="true" />
      <ns1:ModifiedDate xsi:nil="true" />
      <ns1:ObjectID xsi:nil="true" />
      <ns1:Name>2015-06 Event to Group DE</ns1:Name>
      <ns1:Items>
       <ns1:Item>
        <ns1:Values>
         <ns1:Value>
          <ns1:Name>ContactKey</ns1:Name>
          <ns1:Value>MultiObjects1</ns1:Value>
         </ns1:Value>
         <ns1:Value>
          <ns1:Name>Name</ns1:Name>
          <ns1:Value>MultiObjects1</ns1:Value>
         </ns1:Value>
        </ns1:Values>
       </ns1:Item>
      </ns1:Items>
     </ns1:AttributeSet>
    </ns1:Data>
   </ns1:Objects>
   <ns2:Objects xmlns:ns2="http://exacttarget.com/wsdl/partnerAPI" xsi:type="ns2:ContactEvent">
    <ns2:PartnerKey xsi:nil="true" />
    <ns2:ModifiedDate xsi:nil="true" />
    <ns2:ObjectID xsi:nil="true" />
    <ns2:EventDefinitionKey>externalkeyforprods4</ns2:EventDefinitionKey>
    <ns2:Data>
     <ns2:AttributeSet>
      <ns2:PartnerKey xsi:nil="true" />
      <ns2:ModifiedDate xsi:nil="true" />
      <ns2:ObjectID xsi:nil="true" />
      <ns2:Name>2015-06 Event to Group DE</ns2:Name>
      <ns2:Items>
       <ns2:Item>
        <ns2:Values>
         <ns2:Value>
          <ns2:Name>ContactKey</ns2:Name>
          <ns2:Value>MultiObjects2</ns2:Value>
         </ns2:Value>
         <ns2:Value>
          <ns2:Name>Name</ns2:Name>
          <ns2:Value>MultiObjects2</ns2:Value>
         </ns2:Value>
        </ns2:Values>
       </ns2:Item>
      </ns2:Items>
     </ns2:AttributeSet>
    </ns2:Data>
   </ns2:Objects>
  </CreateRequest>
 </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

## Related Items

[ContactEvent Object](atlas.en-us.noversion.mc-apis.meta/mc-apis/contactevent.htm)

## Related Topics

- ContactEvent Object (atlas.en-us.noversion.mc-apis.meta/mc-apis/contactevent.htm)
