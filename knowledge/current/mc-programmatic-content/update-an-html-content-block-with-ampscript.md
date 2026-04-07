---
title: "Update an HTML Content Block with AMPScript"
domain: mc-programmatic-content
topic: update-an-html-content-block-with-ampscript
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:24.331Z
estimatedTokens: 371
keywords: [HTML, Content, Block, AMPScript, uses, Asset]
---

> This example uses AMPscript to update an Asset block with a type of HTML Content Block.

# Update an HTML Content Block with AMPScript

This example uses AMPscript to update an Asset block with a type of HTML Content Block.

```
%%[/* UPDATE THE HTML CONTENT BLOCK VIA AMPSCRIPT*/]%%
%%[Set @asset = CreateObject("Asset")]%%

%%[SetObjectProperty(@asset, "ID", 215470); /* Use the Id from the Content block to be modified */]%%
%%[SetObjectProperty(@asset, "IDSpecified", "true"); /* This is required by the API to denote you are specifying an existing object */]%%

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
%%[SetObjectProperty(@asset,"Content","<div>my UPDATED content</div>")]%%
%%[SetObjectProperty(@asset, "CustomerKey", "1b147813-4820-4138-bcd2-610493abcb76")]%%
%%[SetObjectProperty(@asset,"ContentType","text/html")]%%

%%[Set @StatCode = InvokeUpdate(@asset, @StatMessage, @ErrorCode)]%%
```
