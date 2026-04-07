---
title: "Retrieve More Email Attributes"
domain: mc-apis
topic: retrieve-more-email-attributes
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:23.588Z
estimatedTokens: 783
keywords: [Retrieve, Email, Attributes, receiving, Why, How, Sample, NET, Code, Result, SOAP, Envelope, Items]
---

# Retrieve More Email Attributes

> This page contains information  about receiving more email attributes.

# Retrieve More Email Attributes

This page contains information about receiving more email attributes.

## Why Retrieve More Email Attributes

This call provides details regarding an email message. You can use this information to understand more about the email and understand how the email message is intended to be used. For example, retrieve the campaign ID for each send to report on tracking information by campaign. Use this information with your web analytics connector to retrieve information from Marketing Cloud and return it to your web analytics service.

## How To Retrieve More Email Attributes

Use the sample code below as a model for your own API calls. Use a RetrieveRequest with an ObjectType property of **SendAdditionalAttribute**.

### Sample .NET Code

```
// intialize variables
String requestID;
APIObject[] results;
// Create RetrieveRequest
RetrieveRequest rr = new RetrieveRequest();
rr.ObjectType = "SendAdditionalAttribute";
rr.Properties = new string[] { "Client.ID", "EmaillID","SendID","AttributeName","AttributeValue" };
// Execute RetrieveRequest
String status = integrationFramework.Retrieve(rr, out requestID, out results);
// Output the Values
Console.WriteLine(status);
Console.WriteLine(requestID);
Console.WriteLine(results.Length);
Console.WriteLine("_________Properties______________");
for (int i = 0; i < results.Length; i++)
{
    for (int x = 0; x < ((ObjectExtension)results[i]).Properties.Length; x++)
    {
        Console.WriteLine("Date:{0}\tName:{1} \t Value:{2}",
        ((ObjectExtension)results[i]).CreatedDate, ((ObjectExtension)results[i]).Properties[x].Name,
        ((ObjectExtension)results[i]).Properties[x].Value);
    }
}
```

### Result

The results contain data in name/values pairs in ObjectExtension objects.

```
_________Properties______________
Date:2/6/2008 9:42:16 PM Name:Client.ID Value:1234
Date:2/6/2008 9:42:16 PM Name:EmailID Value:2345
Date:2/6/2008 9:42:16 PM Name:SendID Value: 56414
Date:2/6/2008 9:42:16 PM Name:AttributeName Value:AdditionalEmailAttribute_1
Date:2/6/2008 9:42:16 PM Name:AttributeValue Value:CampaignName
```

### Sample SOAP Envelope

```
<Envelope xmlns="http://schemas.xmlsoap.<wbr>org/soap/envelope/" xmlns:xsi="http://www.w3.org/<wbr>2001/XMLSchema-instance">
 <Header>
    <fueloauth>YOUR_ACCESS_TOKEN</fueloauth>
 </Header>
 <Body>
   <RetrieveRequestMsg xmlns="http://exacttarget.com/<wbr>wsdl/partnerAPI">
    <RetrieveRequest>

<ObjectType>SendAdditionalAttribute</ObjectType>
      <Properties>Client.ID</Properties>
      <Properties>AttributeName</Properties>
      <Properties>AttributeValue</Properties>
      <Properties>EmailID</Properties>
      <Properties>SendID</Properties>
      <Filter xsi:type="ns1:SimpleFilterPart" xmlns:ns1="http://exacttarget.<wbr>com/wsdl/partnerAPI">
       <Property>SendID</Property>
       <SimpleOperator>equals</SimpleOperator>
       <Value>12345</Value>
      </Filter>
    </RetrieveRequest>
   </RetrieveRequestMsg>
 </Body>
</Envelope>
```

## Related Items

[Web Analytics Connector](https://help.salesforce.com/articleView?id=mc_wa_web_analytics_connector.htm&type=5)
