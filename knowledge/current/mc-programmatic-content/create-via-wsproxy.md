---
title: "Create via WSProxy"
domain: mc-programmatic-content
topic: create-via-wsproxy
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:22.826Z
estimatedTokens: 2182
keywords: [via, WSProxy, item, several, items, call, createItem, createBatch, functions, DataExtension, Multiple, Automation, Activity, Start, Extract]
---

> To create a single item or several items of the same type in a single call, use the createItem and createBatch functions.

# Create via WSProxy

To create a single item or several items of the same type in a single call, use the createItem and createBatch functions.

-   For the first parameter, both functions take the object type to perform the action on. For example, Email or DataExtension.
-   The second parameter is a JS object which represents the fields and values to set on the object when created. For batch operations, the second parameter is passed in as an Array of objects instead of a single item.
-   The third parameter is optional and includes any properties to be set using the SOAP CreateOptions object.

## Example: Create a Single DataExtension Object

This example creates a single DataExtension object with two fields: ID and Name.

```
var prox = new Script.Util.WSProxy();

var guid = Platform.Function.GUID();
var name = "my test de - " + guid;

var de = {
    Name: name,
    CustomerKey: guid,
    Description: "Another DE added via SSJS",
    Fields: [{
        FieldType: "Text",
        Name: "ID",
        MaxLength: 36,
        IsPrimaryKey: true,
        IsNillable: false,
        IsRequired: true
    },
    {
        FieldType: "Text",
        Name: "Name",
        MaxLength: 200
    }],
    CategoryID: 101377
}

var res = prox.createItem("DataExtension", de);
```

## Example: Create Multiple DataExtension Objects

This example creates two similar data extensions using the createBatch function.

```
var prox = new Script.Util.WSProxy();
var guid = Platform.Function.GUID();
var name = "my test de - 1 - " + guid;

var de1 = {
    Name: name,
    CustomerKey: guid,
    Description: "Another DE added via SSJS",
    Fields: [{
        FieldType: "Text",
        Name: "ID",
        MaxLength: 36,
        IsPrimaryKey: true,
        IsNillable: false,
        IsRequired: true
    },
    {
        FieldType: "Text",
        Name: "Name",
        MaxLength: 200
    }],
    CategoryID: 101377
}
guid = Platform.Function.GUID();
name = "my test de - 2 - " + guid;

var de2 = {
    Name: name,
    CustomerKey: guid,
    Description: "Another DE added via SSJS",
    Fields: [{
        FieldType: "Text",
        Name: "ID",
        MaxLength: 36,
        IsPrimaryKey: true,
        IsNillable: false,
        IsRequired: true
    },
    {
        FieldType: "Text",
        Name: "Name",
        MaxLength: 200
    }],
    CategoryID: 101377
}
var res = prox.createBatch("DataExtension", [ de1, de2 ]);
```

## Example Response

In both single and batch operations, the results contain three properties from the SOAP CreateResult object: “Status”, “RequestID”, and “Results”. The createItem method returns one item, and the createBatch method returns as many items as were passed into the method.

```
{
    "Status": "OK",
    "RequestID": "fb768ddc-6670-4183-8b9d-4f0d5518bb2e",
    "Results": [...]
}
```

## Example: Create an Automation Activity

This example creates an automation activity and includes the Raw SOAP Wrapper which corresponds with the WSProxy call.

```
<script runat="server">

/*
RAW SOAP WRAPPER:
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:wsa="http://schemas.xmlsoap.org/ws/2004/08/addressing" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
   <soapenv:Header>
      <wsse:Security soapenv:mustUnderstand="1">
         <wsse:UsernameToken>
            <wsse:Username>${#Project#username}</wsse:Username>
            <wsse:Password>${#Project#pw}</wsse:Password>
         </wsse:UsernameToken>
      </wsse:Security>
   </soapenv:Header>
   <soapenv:Body>
      <CreateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
         <Options/>
         <Objects xsi:type="Automation">
            <Client>
               <ID>${#Project#BU}</ID>
            </Client>
            <Name>Example Automation</Name>
            <CustomerKey>ExampleAutomation</CustomerKey>
            <Description>My Automation Example</Description>
            <AutomationTasks>
               <AutomationTask>
                  <PartnerKey xsi:nil="true"/>
                  <ObjectID xsi:nil="true"/>
                  <Name>Task 1</Name>
                  <Activities>
                     <Activity>
                        <PartnerKey xsi:nil="true"/>
                        <ObjectID>c7ccca24-4567-4317-b8d0-3874d69c130c</ObjectID>
                        <Name>Query 1</Name>
                        <ActivityObject xsi:type="QueryDefinition">
                           <PartnerKey xsi:nil="true"/>
                           <ObjectID>c7ccca24-4567-4317-b8d0-3874d69c130c</ObjectID>
                           <CustomerKey>ExampleQueryActivity</CustomerKey>
                           <Name>Example Query Activity</Name>
                        </ActivityObject>
                     </Activity>
                  </Activities>
               </AutomationTask>
            </AutomationTasks>
            <AutomationType>scheduled</AutomationType>
         </Objects>
      </CreateRequest>
   </soapenv:Body>
</soapenv:Envelope>
*/

    /* Initialize the WSProxy Object */
    var api = new Script.Util.WSProxy();

    /* Set ClientID */
    api.setClientId({
        "ID": Platform.Function.AuthenticatedMemberID(),
        "UserID": Platform.Function.AuthenticatedEmployeeID()
    });

    /* Build Query Object */
    var automation = {
        Name: 'Example Automation',
        CustomerKey: 'ExampleAutomation',
        Description: 'My Automation Example',
        AutomationTasks: [
            {
                Name: 'Task 1',
                Activities: [
                    {
                        ObjectID: 'c7ccca24-4567-4317-b8d0-3874d69c130c',
                        Name: 'Query 1',
                        ActivityObject: {
                            "__Type__": "QueryDefinition",
                            ObjectID: 'c7ccca24-4567-4317-b8d0-3874d69c130c',
                            Name: 'Example Query Activity',
                            CustomerKey: 'ExampleQueryActivity'
                        }
                    }
                ]
            }
        ],
        'AutomationType': 'Scheduled'
    };

    /* Create via API */
    var res = api.createItem('Automation', automation);
</script>
```

## Example: Create and Start a Data Extract

The WSProxy object only allows for Update and Perform, at this time, so you can’t create a data extract with WSProxy directly. Update is only for the top level object (like the name of the Extract or the customerkey).

However, you can use the following REST endpoint to create a Data Extract.

Endpoint for Data Extract Creation:

```
POST /automation/v1/dataextracts
Host: .rest.marketingcloudapis.com
Authorization: Bearer

Content-Type: application/json

{
   "name": "myDataExtract",
   "key": "myDataExtract",
   "description": "",
   "dataExtractTypeId": "",
   "fileSpec": "myDataExtract.zip",
   "intervalType": 0,
   "dataFields": [
      { "name": "ColumnDelimiter", "type": "string", "value": "," },
      { "name": "DECustomerKey", "type": "string", "value": "myDataExtension" },
      { "name": "HasColumnHeaders", "type": "bool", "value": "True" },
      { "name": "TextQualified", "type": "bool", "value": "True" },
      { "name": "UsesLineFeed", "type": "bool", "value": "False" }
   ]
}
```

For the dataExtractTypeId the Id for a Data Extension Extract is: bb94a04d-9632-4623-be47-daabc3f588a6.

Endpoint for Data Extract Type ID:

```
GET /automation/v1/dataextracttypes
Host: .rest.marketingcloudapis.com
Authorization: Bearer
Content-Type: application/json
```

You also need to know where to put the identifier for the DE you want to target. This can be found in the dataFields array inside the DECustomerKey object. Inside the 'value' property, you will write the CustomerKey of your target DE.

Create the Data Extract and perform it (you can use the WSProxy or REST API to start it), using the examples below as a guide.

Endpoint to start Data Extract:

```
POST /automation/v1/dataextracts//actions/start
Host: .rest.marketingcloudapis.com
Authorization: Bearer
```

WSProxy for starting Extract:

```
<script runat=server>
    Platform.Load("Core","1.1.1");
    var prox = new Script.Util.WSProxy();
    var action = "Start";
    var props = {ObjectID: "”}}"};
    var opts = {};
    var data = prox.performItem("DataExtractActivity", props, action, opts);
</script>
```

After creating the Extract, use File Transfers to move the extracts from your repository to the correct FTP directory.
