---
title: "Retrieve Rows from a Data Extension"
domain: mc-programmatic-content
topic: retrieve-rows-from-a-data-extension
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:27.313Z
estimatedTokens: 408
keywords: [Retrieve, Rows, Data, Extension, AMPscript, contained, landing, interact, web, service, API, pull, back, segment, subscribers, sample, code, displays, retrieved]
---

# Retrieve Rows from a Data Extension

> This sample code shows the sample code within a landing page. The table displays the data retrieved from the data extension.

# Retrieve Rows from a Data Extension

This sample code shows the sample code within a landing page. The table displays the data retrieved from the data extension.

```
<html>
    <head>
    </head>
    <body>
        <table style= "border: 1px solid black">
            <tr>
                <td>requestID</td>
                <td>conversationID</td>
                <td>overallStatusCode</td>
                <td>statusCode</td>
                <td>statusMessage</td>
                <td>errorCode</td>
                <td>requestType</td>
                <td>sequenceCode</td>
                <td>resultDetailXML</td>
            </tr>
            <script runat=server>
                Platform.Load("Core","1");
                var layouts = DataExtension.Init("ImportResults").Rows.Retrieve();
                for (var i = 0; i < layouts.length; i++)
                {
                    Write("<tr>");
                    Write("<td>" + layouts[i].requestID + "</td>");
                    Write("<td>" + layouts[i].conversationID + "</td>");
                    Write("<td>" + layouts[i].overallStatusCode + "</td>");
                    Write("<td>" + layouts[i].statusCode + "</td>");
                    Write("<td>" + layouts[i].statusMessage + "</td>");
                    Write("<td>" + layouts[i].errorCode + "</td>");
                    Write("<td>" + layouts[i].requestType + "</td>");
                    Write("<td>" + layouts[i].sequenceCode + "</td>");
                    Write("<td><pre>" + layouts[i].resultDetailXML + "</pre></td>");
                    Write("</tr>");
                }
                //Write(Stringify(layouts));
            </script>
        </table>
    </body>
</html>
```

## Code Examples

```
%%[
VAR @retrieveRequest, @simpleFilterPart, @subscribers, @i, @currentSub, @currentSubAttribs, @j, @currentSubAttrib, @filter
VAR @properties, @Field1, @Field2, @numofProperties, @currentProp

/* Create and populate a RetrieveRequest */
SET @retrieveRequest = CreateObject("RetrieveRequest")
SetObjectProperty(@retrieveRequest, "ObjectType", "DataExtensionObject[ExampleDataExtension]")

AddObjectArrayItem(@retrieveRequest, "Properties","Field1")
AddObjectArrayItem(@retrieveRequest, "Properties","Field2")

/* Execute the Retrieve */
SET @emails = InvokeRetrieve(@retrieveRequest)

SET @emailCount = RowCount(@emails)
/* Iterate over the subscribers */

]%%
<br /><br />

%%[
FOR @i = 1 to @emailCount DO
    SET @currentSub = Row(@emails, @i)
    SET @properties = Field(@currentSub,"Properties")
    Set @numofProperties = ROWCOUNT(@properties)

FOR @j = 1 to @numofProperties DO

    SET @currentProp = Row(@properties, @j)
    Set @Field1= FIELD(@currentProp ,"Name") 
    Set @Field2= FIELD(@currentProp ,"Value") 

]%%

%%[if @j == @numofProperties then ]%%
<b>%%=v(@Field2)=%%</b>
%%[else]%%
%%=v(@count)=%%:
%%[endif]%%

%%[
NEXT @j
]%%
<br /><br />
%%[
NEXT @i
]%%
```
