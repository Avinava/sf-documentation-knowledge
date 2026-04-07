---
title: "Use Complex Filter Parts"
domain: mc-apis
topic: use-complex-filter-parts
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:25.790Z
estimatedTokens: 1098
keywords: [Complex, Filter, Parts, ComplexFilterParts, SimpleFilterParts, nested, together, produce, sophisticated, filtering, scenarios, Sample, NET, Code, SOAP]
---

# Use Complex Filter Parts

> ComplexFilterParts and SimpleFilterParts can be nested together to produce sophisticated filtering scenarios.

# Use Complex Filter Parts

ComplexFilterParts and SimpleFilterParts can be nested together to produce sophisticated filtering scenarios.

### Sample .NET Code

The sample code below shows how to create this nesting scenario.

This code represents the following business logic:

-   Retrieve all subscribers
    -   (Where the Subscriber's SubscriberKey property is IN (or one of) the string values "1", "2", or "8" OR
    -   Where the Subscriber's SubscriberKey property is IN (or one of) the string values "3", "6", or "12") AND
    -   Where the Subscriber's Status property equals Active

The object structure of this business logic is:

-   ComplexFilterPart
((SubscriberKey in"1", "2", or "8" OR SubscriberKey in"3", "6", or "12") AND (Status = Active))-   ComplexFilterPart ((SubscriberKey in "1", "2", or "8") or(SubscriberKey in"3", "6", or "12"))
    -   SimpleFilterPart (SubscriberKey in"1", "2", or "8")
    -   OR
    -   SimpleFilterPart (SubscriberKey in"3", "6", or "12")
-   AND
-   SimpleFilterPart (Status = Active)

```
SimpleFilterPart sfp1 = new SimpleFilterPart();
            sfp1.Property = "SubscriberKey";
            sfp1.SimpleOperator = SimpleOperators.IN;
            sfp1.Value = new String[] { "1", "2", "8" };
            SimpleFilterPart sfp2 = new SimpleFilterPart();
            sfp2.Property = "SubscriberKey";
            sfp2.SimpleOperator = SimpleOperators.IN;
            sfp2.Value = new String[] { "3", "6", "12" };
            ComplexFilterPart cfp1 = new ComplexFilterPart();
            cfp1.LeftOperand = sfp1; // Simple Filter
            cfp1.LogicalOperator = LogicalOperators.OR;
            cfp1.RightOperand = sfp2; // Simple Filter
            SimpleFilterPart sfp3 = new SimpleFilterPart();
            sfp3.Property = "Status";
            sfp3.SimpleOperator = SimpleOperators.equals;
            sfp3.Value = new string[] { SubscriberStatus.Active };
            ComplexFilterPart cfp2 = new ComplexFilterPart();
            cfp2.LeftOperand = cfp1; // Complex Filter
            cfp2.LogicalOperator = LogicalOperators.AND;
            cfp2.RightOperand = sfp3; // Simple Filter
```

### Sample SOAP Envelope

The sample code below retrieves all active subscribers created after the specified date:

```
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <soapenv:Header>
      <wsse:Security soapenv:mustUnderstand="1" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
         <wsse:UsernameToken wsu:Id="UsernameToken-32259181" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
            <wsse:Username>XXXXX</wsse:Username>
            <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">XXXXX</wsse:Password>
         </wsse:UsernameToken>
      </wsse:Security>
   </soapenv:Header>
   <soapenv:Body>
      <RetrieveRequestMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">
         <RetrieveRequest>
            <ObjectType>Subscriber</ObjectType>
            <Properties>ID</Properties>
            <Properties>CreatedDate</Properties>
            <Properties>Client.ID</Properties>
            <Properties>EmailAddress</Properties>
            <Properties>SubscriberKey</Properties>
            <Properties>Status</Properties>
            <Properties>UnsubscribedDate</Properties>
            <Properties>EmailTypePreference</Properties>
            <Filter xsi:type="par:ComplexFilterPart" xmlns:par="http://exacttarget.com/wsdl/partnerAPI">
               <LeftOperand xsi:type="par:SimpleFilterPart">
                  <Property>Status</Property>
                  <SimpleOperator>equals</SimpleOperator>
                  <Value>Active</Value>
               </LeftOperand>
               <LogicalOperator>AND</LogicalOperator>
               <RightOperand xsi:type="par:SimpleFilterPart">
                  <Property>CreatedDate</Property>
                  <SimpleOperator>greaterThan</SimpleOperator>
                  <DateValue>2010-11-15T11:25:54.617-07:00</DateValue>
               </RightOperand>
            </Filter>
         </RetrieveRequest>
      </RetrieveRequestMsg>
   </soapenv:Body>
</soapenv:Envelope>
```
