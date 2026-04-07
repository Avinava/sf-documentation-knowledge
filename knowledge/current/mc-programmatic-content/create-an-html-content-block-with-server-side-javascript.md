---
title: "Create an HTML Content Block with Server-Side JavaScript"
domain: mc-programmatic-content
topic: create-an-html-content-block-with-server-side-javascript
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:27.536Z
estimatedTokens: 409
keywords: [HTML, Content, Block, Server-Side, JavaScript, uses, Asset, include, email, message, process, requires, AssetType]
---

# Create an HTML Content Block with Server-Side JavaScript

> This example uses Server-Side JavaScript to create an Asset block with a type of HTML Content Block. You can include this content block in an email message. This process requires values for Name and AssetType.

# Create an HTML Content Block with Server-Side JavaScript

This example uses Server-Side JavaScript to create an Asset block with a type of HTML Content Block. You can include this content block in an email message. This process requires values for Name and AssetType.

```
<script runat="server">
// CREATE HTML CONTENT BLOCK VIA SSJS
Platform.Load("Core","1");

try {
Write("start</br>");

var asset = Platform.Function.CreateObject("Asset");

//Set AssetType (complex property)
var nameIdReference = Platform.Function.CreateObject("NameIdReference");
Platform.Function.SetObjectProperty(nameIdReference, "Id", 197); //html block type
Platform.Function.SetObjectProperty(asset, "AssetType", nameIdReference);

//Set Category (complex property) - aka Folder
var categoryNameIdReference = Platform.Function.CreateObject("CategoryNameIdReference");
Platform.Function.SetObjectProperty(categoryNameIdReference, "Id", 43660); //Use the Id value of the desired category (folder)
Platform.Function.SetObjectProperty(asset, "Category", categoryNameIdReference);

//Set Name, Content, and ContentType (simple text properties)
Platform.Function.SetObjectProperty(asset, "Name", "SSJS HTML Content Block");
Platform.Function.SetObjectProperty(asset, "Content", "<div>my new content</div>");
Platform.Function.SetObjectProperty(asset, "ContentType", "text/html");

var statusAndRequest = [0,0];
var response = Platform.Function.InvokeCreate(asset, statusAndRequest, null);

Write(response.toString() + "</br>");
Write(statusAndRequest.toString() + "</br>");
Write("end</br>");

} catch (err) {
Write(Stringify(err) + "</br>");
}
</script>
```
