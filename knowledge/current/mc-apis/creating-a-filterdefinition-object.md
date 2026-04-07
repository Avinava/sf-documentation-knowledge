---
title: "Creating a FilterDefinition Object"
domain: mc-apis
topic: creating-a-filterdefinition-object
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:21.001Z
estimatedTokens: 2733
keywords: [Creating, FilterDefinition, separate, data, source, subscriber, extension, sample, code, below, model, own, API, call, DataFilter]
---

# Creating a FilterDefinition Object

> Use the FilterDefinition object to separate out information for a data source, such as a subscriber list or a data extension. Use the sample code below as a model for creating your own API call.

# Creating a FilterDefinition Object

Use the FilterDefinition object to separate out information for a data source, such as a subscriber list or a data extension. Use the sample code below as a model for creating your own API call.

The FilterDefinition object contains the following important properties:

All date values for a simple filter part must go into the DateValue collection.

-   **ObjectID** - The Marketing Cloud application generates a unique identifier for this property upon creation.
-   **CustomerKey** - A client-supplied identifier for the filter. This must be unique across all FilterDefinitions owned by the client.
-   **Name** - The name of the filter must be unique, but do not use the name for lookup purposes.
-   **Description** - The description of the filter.
-   **DataSource**\- Specifies whether the filter is list-based or data-extension-based. If the filter is based on a data extension, supply a DataExtension object. Otherwise, leave this value null and the filter uses profile attributes.
-   **DataFilter**\- This property specifies the rules associated with the filter. You can include measures here.

### DataFilter Valid Values for Specific Data Types

| Data Type | Valid Values |
| --- | --- |
| Boolean | True or False |
| Date | ShortDate (date with no time) |
| List | Not supported |
| Numeric | Bigint |

### DataFilter Valid SimpleOperator Types

| Data Type | Valid Values |
| --- | --- |
| Boolean | Equals |
| Date | equalsnotEqualsisAnniversaryisNotAnniversarygreaterThangreaterThanAnniversarylessThanlessThanAnniversary |
| List | equalsnotEquals |
| Numeric | equalsnotEqualsgreaterThangreaterThanOrEqual |
| Text | equalsnotEqualsgreaterThangreaterThanOrEquallessThanlessThanOrEqualexistsInStringexistsInStringAsAWordnotExistsInStringbeginsWith |

### Sample .NET Code to Create a FilterDefinition Object

```
DataExtension de = new DataExtension();
de.CustomerKey = "DE_UserSubscription"; // External key of data extension
FilterDefinition fd = new FilterDefinition();
fd.DataSource = de;
fd.Name = "A new Filter Definition";
fd.CustomerKey = "A_new_Filter_Definition";
fd.Description = "A new Filter Definition";
// Set up complex filter parts
ComplexFilterPart cfp = new ComplexFilterPart();
// set up simple filter parts
SimpleFilterPart sfpA = new SimpleFilterPart();
SimpleFilterPart sfpB = new SimpleFilterPart();
SimpleFilterPart sfpC = new SimpleFilterPart();
SimpleFilterPart sfpD = new SimpleFilterPart();
sfpA.Property = "opt_in"; // boolean
sfpA.SimpleOperator = SimpleOperators.equals;
sfpA.Value = new string[] { "true" };

sfpB.Property = "pub_id"; // number
sfpB.SimpleOperator = SimpleOperators.equals;
sfpB.Value = new string[] { "1" };
sfpC.Property = "pub_type"; // text
sfpC.SimpleOperator = SimpleOperators.equals;
sfpC.Value = new string[] { "A" };
sfpD.Property = "subscribed"; // boolean
sfpD.SimpleOperator = SimpleOperators.equals;
sfpD.Value = new string[] { "true" };
// Joins the rules together
cfp.LeftOperand = sfpA;
cfp.LogicalOperator = LogicalOperators.AND;
cfp.RightOperand = sfpB;
cfp.AdditionalOperands = new FilterPart[2];
cfp.AdditionalOperands[0] = sfpC;
cfp.AdditionalOperands[1] = sfpD;

// Associate the complex filter with the FilterDefinition
fd.DataFilter = cfp;
// Execute CreateRequest
CreateResult[] results = integrationFramework.Create(null, new APIObject[] { fd }, out requestID, out status);
// Output the Values
Console.WriteLine(status);
Console.WriteLine(requestID);
Console.WriteLine(results.Length);
foreach (CreateResult result in results)
{
      Console.WriteLine(result.ErrorCode);
      Console.WriteLine(result.StatusCode);
      Console.WriteLine(result.StatusMessage);
      Console.WriteLine(result.NewObjectID);
}
```

The sample code below sets up a filter definition with a complex filter based on the criteria below:

```
Criteria 1  =
1 - test_cell = "CELL1"
AND
2 - division_permalink = "chicago"

Criteria 2 =
1 - status = "active"
OR
2 - status = "bounced"
```

Using this criteria, the API performs the call on the test\_subject\_line data extension:

```
// Create Filter
DataExtension fde = new DataExtension();
fde.CustomerKey = "test_subject_line"; // External key of data extension
FilterDefinition fd = new FilterDefinition();
fd.DataSource = fde;
fd.Name = "SUBJECT LINE";
fd.CustomerKey = "SUBJECT_LINE";
fd.Description = "description";
SimpleFilterPart sfpA = new SimpleFilterPart();
sfpA.Property = "test_cell"; // boolean
sfpA.SimpleOperator = SimpleOperators.equals;
sfpA.Value = new string[] {"CELL1"};
SimpleFilterPart sfpC = new SimpleFilterPart();
sfpC.Property = "division_permalink"; // boolean
sfpC.SimpleOperator = SimpleOperators.equals;
sfpC.Value = new string[] { "chicago" };
ComplexFilterPart cfp1 = new ComplexFilterPart();
cfp1.LeftOperand = sfpA;
cfp1.LogicalOperator = LogicalOperators.AND;
cfp1.RightOperand = sfpC;
// SFP for status = active or bounced
SimpleFilterPart sfpB1 = new SimpleFilterPart();
sfpB1.Property = "status"; // boolean
sfpB1.SimpleOperator = SimpleOperators.equals;
sfpB1.Value = new string[] { "active" };
SimpleFilterPart sfpB2 = new SimpleFilterPart();
sfpB2.Property = "status"; // boolean
sfpB2.SimpleOperator = SimpleOperators.equals;
sfpB2.Value = new string[] { "bounced" };
ComplexFilterPart cfp2 = new ComplexFilterPart();
cfp2.LeftOperand = sfpB1;
cfp2.LogicalOperator = LogicalOperators.OR;
cfp2.RightOperand = sfpB2;
ComplexFilterPart cfp3 = new ComplexFilterPart();
cfp3.LeftOperand = cfp1;
cfp3.LogicalOperator = LogicalOperators.AND;
cfp3.RightOperand = cfp2;
fd.DataFilter = cfp3;
// Execute CreateRequest
CreateResult[] results2 = client.Create(null, new APIObject[] { fd }, out requestID2, out status2);
if (status2.Equals("OK"))
{
lblMessage.Text = "Call is : " + status2;
}
else
{
lblMessage.Text = "Error Creating Data Extension: " + results2;
}
```

### Sample .NET Code toUpdate a FilterDefinition Object

The update call supports both CustomerKey and ObjectID as identifiers to specify which FilterDefinition to update. The API requires both the DataExtension and DataFilter to update a FilterDefinition object.

```
DataExtension de = new DataExtension();
de.CustomerKey = "DE_UserSubscription"; // External key of data extension
FilterDefinition fd = new FilterDefinition();
fd.DataSource = de;
fd.CustomerKey = "A_new_Filter_Definition"; // Update using customer key
// Simple
ComplexFilterPart cfp = new ComplexFilterPart();
SimpleFilterPart sfpA = new SimpleFilterPart();
SimpleFilterPart sfpB = new SimpleFilterPart();
SimpleFilterPart sfpC = new SimpleFilterPart();
SimpleFilterPart sfpD = new SimpleFilterPart();
sfpA.Property = "opt_in";
sfpA.SimpleOperator = SimpleOperators.equals;
sfpA.Value = new string[] { "true" };
sfpB.Property = "pub_id";
sfpB.SimpleOperator = SimpleOperators.equals;
sfpB.Value = new string[] { "1" };
sfpC.Property = "pub_type";
sfpC.SimpleOperator = SimpleOperators.equals;
sfpC.Value = new string[] { "A" };
sfpD.Property = "subscribed";
sfpD.SimpleOperator = SimpleOperators.equals;
sfpD.Value = new string[] { "true" };
cfp.LeftOperand = sfpA;
cfp.LogicalOperator = LogicalOperators.AND;
cfp.RightOperand = sfpB;
cfp.AdditionalOperands = new FilterPart[2];
cfp.AdditionalOperands[0] = sfpC;
cfp.AdditionalOperands[1] = sfpD;
fd.DataFilter = cfp;
// Execute UpdateRequest
UpdateResult[] results = integrationFramework.Update(null, new APIObject[] { fd }, out requestID, out status);
// Output the Values
Console.WriteLine(status);
Console.WriteLine(requestID);
Console.WriteLine(results.Length);
foreach (UpdateResult result in results)
{
      Console.WriteLine(result.ErrorCode);
}
```

### Sample SOAP Envelope - Create a Filter Definition Using Profile Attributes

```
<?xml version="1.0" encoding="UTF-8"?>
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
 <SOAP-ENV:Header>
  <wsse:Security xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
   <wsu:Timestamp>
   </wsu:Timestamp>
   <wsse:UsernameToken>
    <wsse:Username>XXXXX</wsse:Username>
    <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">XXXXX</wsse:Password>
    <wsse:Nonce>eSTcdVv9GBJGgiTLlEPDuRnpTXk=</wsse:Nonce>
    <wsu:Created>2011-05-20T14:57:13Z</wsu:Created>
   </wsse:UsernameToken>
  </wsse:Security>
 </SOAP-ENV:Header>
 <SOAP-ENV:Body>
  <CreateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
   <Options/>
   <ns1:Objects xmlns:ns1="http://exacttarget.com/wsdl/partnerAPI" xsi:type="ns1:FilterDefinition">
    <ns1:ModifiedDate xsi:nil="true"/>
    <ns1:ObjectID xsi:nil="true"/>
    <ns1:Name>PAFilterDef20110520105713606</ns1:Name>
    <ns1:DataFilter xsi:type="ns1:SimpleFilterPart">
     <ns1:Property>Gender</ns1:Property>
     <ns1:SimpleOperator>equals</ns1:SimpleOperator>
     <ns1:Value>Female</ns1:Value>
    </ns1:DataFilter>
   </ns1:Objects>
  </CreateRequest>
 </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

### Sample SOAP Envelope - Create a Filter Definition For a Data Extension

```
<?xml version="1.0" encoding="UTF-8"?>
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
 <SOAP-ENV:Header>
  <wsse:Security xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
   <wsu:Timestamp>
   </wsu:Timestamp>
   <wsse:UsernameToken>
    <wsse:Username>XXXXX</wsse:Username>
    <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">XXXXX</wsse:Password>
    <wsse:Nonce>XC5M431QfCJQ+bjcVmj4idjZC/A=</wsse:Nonce>
    <wsu:Created>2011-05-20T14:55:36Z</wsu:Created>
   </wsse:UsernameToken>
  </wsse:Security>
 </SOAP-ENV:Header>
 <SOAP-ENV:Body>
  <CreateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
   <Options/>
   <ns1:Objects xmlns:ns1="http://exacttarget.com/wsdl/partnerAPI" xsi:type="ns1:FilterDefinition">
    <ns1:ModifiedDate xsi:nil="true"/>
    <ns1:ObjectID xsi:nil="true"/>
    <ns1:Name>FDDE20110520105536886</ns1:Name>
    <ns1:DataSource xsi:type="ns1:DataExtension">
     <ns1:ModifiedDate xsi:nil="true"/>
     <ns1:ObjectID>756e860f-f182-e011-afb3-001cc494c760</ns1:ObjectID>
    </ns1:DataSource>
    <ns1:DataFilter xsi:type="ns1:SimpleFilterPart">
     <ns1:Property>Gender</ns1:Property>
     <ns1:SimpleOperator>equals</ns1:SimpleOperator>
     <ns1:Value>Female</ns1:Value>
    </ns1:DataFilter>
   </ns1:Objects>
  </CreateRequest>
 </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```
