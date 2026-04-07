---
title: "Create an HTML Content Block with AMPScript"
domain: mc-programmatic-content
topic: create-an-html-content-block-with-ampscript
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:22.107Z
estimatedTokens: 316
keywords: [HTML, Content, Block, AMPScript, uses, Asset, include, email, message, process, requires, AssetType]
---

> This example uses AMPscript to create an Asset block with a type of HTML Content Block. You can include this content block in an email message. This process requires values for Name and AssetType.

# Create an HTML Content Block with AMPScript

This example uses AMPscript to create an Asset block with a type of HTML Content Block. You can include this content block in an email message. This process requires values for Name and AssetType.

```
%%[/* CREATE THE HTML CONTENT BLOCK VIA AMPSCRIPT*/]%%
%%[Set @asset = CreateObject("Asset")]%%

%%[/* Set AssetType (complex property) */]%%
%%[SET @nameIdReference = CreateObject("NameIdReference")]%%
%%[SetObjectProperty(@nameIdReference, "Id", 197); /* html block type */ ]%%
%%[SetObjectProperty(@asset, "AssetType", @nameIdReference)]%%

%%[/* Set Category (complex property) - aka Folder */]%%
%%[SET @categoryNameIdReference = CreateObject("CategoryNameIdReference")]%%
%%[SetObjectProperty(@categoryNameIdReference, "Id", 564334) /* Use the Id value of the desired category (folder) */]%%
%%[SetObjectProperty(@asset, "Category", @categoryNameIdReference)]%%

%%[/* Set Name, Content, and ContentType (simple text properties) */]%%
%%[SetObjectProperty(@asset,"Name","AMPSCRIPT HTML Content Block")]%%
%%[SetObjectProperty(@asset,"Content","<div>my new content</div>")]%%
%%[SetObjectProperty(@asset,"ContentType","text/html")]%%

%%[Set @StatCode = InvokeCreate(@asset, @StatMessage, @ErrorCode)]%%
```
