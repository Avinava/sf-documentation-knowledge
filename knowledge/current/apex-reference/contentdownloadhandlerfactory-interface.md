---
title: "ContentDownloadHandlerFactory Interface"
domain: apex-reference
topic: contentdownloadhandlerfactory-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:40.680Z
keywords: [ContentDownloadHandlerFactory, Interface, Returns, ContentDownloadHandler, given, list, content, IDs, download, context., getContentDownloadHandler, var1, var2, Signature, Parameters, Return, Value]
---

# ContentDownloadHandlerFactory Interface

> Returns a ContentDownloadHandler for a given list of content IDs and a
      download context.

### getContentDownloadHandler(var1, var2)

Returns a ContentDownloadHandler for a given list of content IDs and a download context.

#### Signature

public Sfc.ContentDownloadHandler getContentDownloadHandler(List<Id> var1, Sfc.ContentDownloadContext var2)

#### Parameters

var1

Type: List<Id>

var2

Type: [Sfc.ContentDownloadContext](atlas.en-us.apexref.meta/apexref/apex_enum_Sfc_ContentDownloadContext.htm#apex_enum_Sfc_ContentDownloadContext "This enum specifies the download context.")

#### Return Value

Type: [Sfc.ContentDownloadHandler](atlas.en-us.apexref.meta/apexref/apex_class_Sfc_ContentDownloadHandler.htm#apex_class_Sfc_ContentDownloadHandler "Use ContentDownloadHandler to define a custom download handler that controls how content is downloaded.")