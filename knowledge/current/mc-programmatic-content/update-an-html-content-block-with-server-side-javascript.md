---
title: "Update an HTML Content Block with Server-Side JavaScript"
domain: mc-programmatic-content
topic: update-an-html-content-block-with-server-side-javascript
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:24.087Z
estimatedTokens: 475
keywords: [HTML, Content, Block, Server-Side, JavaScript, uses, Asset]
---

> This example uses Server-Side JavaScript to update an Asset block with a type of HTML Content Block.

# Update an HTML Content Block with Server-Side JavaScript

This example uses Server-Side JavaScript to update an Asset block with a type of HTML Content Block.

```
<script runat="server">
// UPDATE HTML CONTENT BLOCK VIA SSJS
Platform.Load("Core","1");

try {
Write("start</br>");

var asset = Platform.Function.CreateObject("Asset");
Platform.Function.SetObjectProperty(asset, "ID", 215469); // Use the Id from the Content block to be modified
Platform.Function.SetObjectProperty(asset, "IDSpecified", "true"); // This is required by the API to denote you are specifying an existing object

//Set AssetType (complex property)
var nameIdReference = Platform.Function.CreateObject("NameIdReference");
Platform.Function.SetObjectProperty(nameIdReference, "Id", 197); //html block type
Platform.Function.SetObjectProperty(asset, "AssetType", nameIdReference);

//Set Category (complex property) - aka Folder
var categoryNameIdReference = Platform.Function.CreateObject("CategoryNameIdReference");
Platform.Function.SetObjectProperty(categoryNameIdReference, "Id", 564334); //Use the Id value of the desired category (folder)
Platform.Function.SetObjectProperty(asset, "Category", categoryNameIdReference);

//Set Updated Name,Content,CustomerKey,ContentType (simple text properties)
Platform.Function.SetObjectProperty(asset, "Name", "SSJS HTML Content Block");
Platform.Function.SetObjectProperty(asset, "Content", "<div>my UPDATED content</div>");
Platform.Function.SetObjectProperty(asset, "CustomerKey", "863bbbcd-8702-4f15-9dc4-e84f2bb8c074");
Platform.Function.SetObjectProperty(asset, "ContentType", "text/html");

var statusAndRequest = [0,0];
var response = Platform.Function.InvokeUpdate(asset, statusAndRequest, null);

Write(response.toString() + "</br>");
Write(statusAndRequest.toString() + "</br>");
Write("end</br>");

} catch (err) {
Write(Stringify(err) + "</br>");
}
</script>
```
