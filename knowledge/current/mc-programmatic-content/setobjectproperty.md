---
title: "SetObjectProperty"
domain: mc-programmatic-content
topic: setobjectproperty
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:22.783Z
estimatedTokens: 237
keywords: [SetObjectProperty, Function, Ordinal, API, receiving, assigned, **Overview**, **Syntax**, New, prop, Sample, Code]
---

> SetObjectProperty(1, 2, 3)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Object on which to set property value



    2
    string
    Required
    Property name



    3
    string
    Required
    New prop

# SetObjectProperty

## **Overview**

Sets the value of a property on a specified API object

### **Syntax**

SetObjectProperty(1, 2, 3)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Object on which to set property value |
| 2 | string | Required | Property name |
| 3 | string | Required | New property value |

## Example

```
<script runat="server">
     Platform.Function.SetObjectProperty("Subscriber","emailAdddress","jdoe@example.com");
</script>
```

## Sample Code

The sample code performs a retrieve call:

```
<script type="text/javascript">// <![CDATA[
    // Note that you can perform retrieves only in context of a landing page or platform call

    // Create an API Retrieve Request
    var RetrieveRequest = Platform.Function.CreateObject("RetrieveRequest");

    // Set the request type
    Platform.Function.SetObjectProperty(RetrieveRequest, "ObjectType", "Email");

    // Set the columns
    Platform.Function.AddObjectArrayItem(RetrieveRequest, "Properties", "Email.Name");
    Platform.Function.AddObjectArrayItem(RetrieveRequest, "Properties", "Email.ID");
    Platform.Function.AddObjectArrayItem(RetrieveRequest, "Properties", "Email.Subject");
    Platform.Function.AddObjectArrayItem(RetrieveRequest, "Properties", "Email.Status");
    Platform.Function.AddObjectArrayItem(RetrieveRequest, "Properties", "Email.CharacterSet");
    Platform.Function.AddObjectArrayItem(RetrieveRequest, "Properties", "Email.ContentCheckStatus");

    // Create a filter
    var RetrieveFilter = Platform.Function.CreateObject("SimpleFilterPart");
    // By email id
    // Platform.Function.SetObjectProperty(RetrieveFilter, "Property", "ID");
    // Platform.Function.SetObjectProperty(RetrieveFilter, "SimpleOperator", "equals");
    // Platform.Function.AddObjectArrayItem(RetrieveFilter, "Value", "5709");
    // By client id
    Platform.Function.SetObjectProperty(RetrieveFilter, "Property", "Client.ID");
    Platform.Function.SetObjectProperty(RetrieveFilter, "SimpleOperator", "equals");
    Platform.Function.AddObjectArrayItem(RetrieveFilter, "Value", "1191");

    // Add the filter to the retrieve
    Platform.Function.SetObjectProperty(RetrieveRequest, "Filter", RetrieveFilter);

    // Do the retrieve
    var StatusAndRequestID = [0,0];

    var Emails = Platform.Function.InvokeRetrieve(RetrieveRequest, StatusAndRequestID);

    // Check staus
    Platform.Response.Write("Status: " + StatusAndRequestID[0]);
    Platform.Response.Write("RequestID: " + StatusAndRequestID[1]);

    for ( var c = 0 ; c < Emails.length ; c ++ )
    {
        Platform.Response.Write(Emails[c].ID);
        Platform.Response.Write(" - ");
        Platform.Response.Write(Emails[c].Name);
        Platform.Response.Write("\r
");
    }
// ]]>
</script>
```

Last Updated: Jun 8, 2021

## Code Examples

```
SET @subscriber=CreateObject('Subscriber')
SetObjectProperty(@subscriber,'EmailAddress','user@example.com')
```

```
SET @attribute=CreateObject(Attribute)
SetObjectProperty(@attribute,'Name','First Name')
SetObjectProperty(@attribute,'Value','John')
```
