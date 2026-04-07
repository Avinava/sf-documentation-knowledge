---
title: "Submit a Triggered Send Definition Using the Asynchronous API"
domain: mc-apis
topic: submit-a-triggered-send-definition-using-the-asynchronous-api
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:25.238Z
estimatedTokens: 1733
keywords: [Submit, Triggered, Send, Definition, Asynchronous, API, regarding, submitting, definitions, Why, How, Sample, NET, Code, SOAP]
---

# Submit a Triggered Send Definition Using the Asynchronous API

> This page contains information  regarding submitting triggered send definitions using the asynchronous API.

# Submit a Triggered Send Definition Using the Asynchronous API

This page contains information regarding submitting triggered send definitions using the asynchronous API.

## Why Submit a Triggered Send Definition Using the Asynchronous API

By using the asynchronous API, you can assign priorities to your API calls or sequence and schedule them for a later date. The asynchronous API also holds calls in queue until it processes them, meaning that the system does not lose your calls in case of an unplanned outage. The asynchronous nature of the calls also prevents unintentional call replays.

## How to Submit a Triggered Send Definition Using the Asynchronous API

Use the sample code below as a model to submit your own triggered send definition call to the asynchronous API:

### Sample .NET Code

```
//Create a new Subscriber to send the TriggerSend to
Subscriber newSub = new Subscriber();
newSub.EmailAddress = emailAddress;
newSub.SubscriberKey = emailAddress;
//Create Subscriber Attributes
newSub.Attributes = new Attribute[2];
//Attribute 1
newSub.Attributes[0] = new Attribute();
newSub.Attributes[0].Name = "FromName";
newSub.Attributes[0].Value = "From John Doe";
//Attribute 2
newSub.Attributes[1] = new Attribute();
newSub.Attributes[1].Name = "HTML__Content";
newSub.Attributes[1].Value = "<b>Sent Asynchronously!</b>";
//Create a TriggeredSend that uses an existing TriggeredSendDefinition
TriggeredSend ts = new TriggeredSend();
ts.TriggeredSendDefinition = new TriggeredSendDefinition();
ts.TriggeredSendDefinition.CustomerKey = "ETWSEX_TSD";
ts.TriggeredSendDefinition.Priority = "High";//This is another feature
//Instantiate the CreateOptions object for the create call of TSD
CreateOptions cOptionsTS = new CreateOptions();
cOptionsTS.RequestType = RequestType.Asynchronous;
cOptionsTS.RequestTypeSpecified = true;
cOptionsTS.QueuePriority = Priority.High;
cOptionsTS.QueuePrioritySpecified = true;
ts.Subscribers = new Subscriber[] { newSub };
try
{
    //Create the TriggeredSend
    string tsRequestID = "";
    string tsStatus = "";
    CreateResult[] tsResults = client.Create(cOptionsTS, new APIObject[] { ts }, out tsRequestID, out tsStatus);
    TriggeredSendCreateResult tsCreateResults = tsResults[0] as TriggeredSendCreateResult;
    //Check for Error
    if (tsStatus != "OK") { throw new Exception(); }
}
catch (Exception exCreate)
{
}
```

### Sample SOAP Envelope

```
<s:Envelope xmlns:s="http://www.w3.org/2003/05/soap-envelope" xmlns:a="http://schemas.xmlsoap.org/ws/2004/08/addressing" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
   <s:Header>
      <o:Security s:mustUnderstand="1" xmlns:o="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
         <o:UsernameToken u:Id="uuid-f4119202-0c6f-4383-9872-4745b39f24f6-1">
            <o:Username>XXXXX</o:Username>
            <o:Password>XXXXX</o:Password>
         </o:UsernameToken>
      </o:Security>
   </s:Header>
   <s:Body xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
      <CreateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
         <Options>
            <RequestType>Asynchronous</RequestType>
            <QueuePriority>High</QueuePriority>
         </Options>
         <Objects xsi:type="TriggeredSend">
            <PartnerKey xsi:nil="true"/>
            <ObjectID xsi:nil="true"/>
            <TriggeredSendDefinition>
               <PartnerKey xsi:nil="true"/>
               <ObjectID xsi:nil="true"/>
               <CustomerKey>ETWSEX_TSD</CustomerKey>
            </TriggeredSendDefinition>
            <Subscribers>
               <PartnerKey xsi:nil="true"/>
               <ObjectID xsi:nil="true"/>
               <EmailAddress>example@example.com</EmailAddress>
               <SubscriberKey>example@example.comm</SubscriberKey>
               <Attributes>
                  <Name>FromName</Name>
                  <Value>From John Doe</Value>
               </Attributes>
               <Attributes>
                  <Name>HTML__Content</Name>
                  <Value>&lt;b>Sent Asynchronously!&lt;/b></Value>
               </Attributes>
            </Subscribers>
         </Objects>
      </CreateRequest>
   </s:Body>
</s:Envelope>
```

Setting the priority on a triggered sendrequires that more functionality be enabled for your account. Contact your Marketing Cloud representative for more details on this feature and to enable this feature for your account.

## How to Retrieve the Status

Use the sample code below as a model to retrieve the status of the triggered send API call:

### Sample .NET Code

```
//Check the ResultItem
//Create the filter, passing in the RequestID of the TriggeredSend
SimpleFilterPart sfp = new SimpleFilterPart();
sfp.Property = "RequestID";
sfp.SimpleOperator = SimpleOperators.equals;
sfp.Value = new string[] { requestID };
//Create a String Array of Properties to Retreive for the Object
string[] oProps = new string[] { "RequestType", "ErrorCode", "StatusCode" };
//Create RetreiveRequest Object
RetrieveRequest rr = new RetrieveRequest();
rr.ObjectType = "ResultItem";
rr.Properties = oProps;
rr.Filter = sfp;
//Call the Retrieve Method for the RetrieveRequest Object
APIObject[] rResults;
string rStatus = "";
string rRequestID = "";
rStatus = client.Retrieve(rr, out rRequestID, out rResults);
```

### Sample SOAP Envelope

```
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <soapenv:Header>
      <wsse:Security soapenv:mustUnderstand="1" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
         <wsse:UsernameToken wsu:Id="UsernameToken-24440876" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
            <wsse:Username>XXXXX</wsse:Username>
            <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">XXXXX</wsse:Password>
         </wsse:UsernameToken>
      </wsse:Security>
   </soapenv:Header>
   <soapenv:Body>
      <RetrieveRequestMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">
         <RetrieveRequest>
            <ObjectType>ResultItem</ObjectType>
            <Properties>RequestType</Properties>
            <Properties>ErrorCode</Properties>
            <Properties>StatusCode</Properties>
            <Filter xsi:type="ns1:SimpleFilterPart" xmlns:ns1="http://exacttarget.com/wsdl/partnerAPI">
               <Property>RequestID</Property>
               <SimpleOperator>equals</SimpleOperator>
               <Value>F9168C5E-CEB2-4faa-B6BF-329BF39FA1E4</Value>
            </Filter>
         </RetrieveRequest>
      </RetrieveRequestMsg>
   </soapenv:Body>
</soapenv:Envelope>
```
