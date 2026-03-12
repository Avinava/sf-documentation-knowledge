---
title: "ContentDownloadHandlerFactory Interface"
domain: apex-reference
topic: contentdownloadhandlerfactory-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:29.971Z
estimatedTokens: 561
namespace: Sfc
keywords: [ContentDownloadHandlerFactory, provide, factory, Salesforce, call, instances, custom, ContentDownloadHandler, Usage, getContentDownloadHandler, var1, var2, Implementation]
---

# ContentDownloadHandlerFactory Interface

> Use this interface to provide a class factory that Salesforce can call
      to create instances of your custom ContentDownloadHandler.

**Namespace:** `Sfc`

# ContentDownloadHandlerFactory Interface

Use this interface to provide a class factory that Salesforce can call to create instances of your custom ContentDownloadHandler.

## Namespace

[Sfc](atlas.en-us.apexref.meta/apexref/apex_namespace_Sfc.htm#apex_namespace_Sfc "The Sfc namespace contains classes used in Salesforce Files.")

## Usage

ContentDownloadHandler getContentDownloadHandler(List<ID> ids, ContentDownloadContext context);

-   **[ContentDownloadHandlerFactory Methods](atlas.en-us.apexref.meta/apexref/apex_interface_Sfc_ContentDownloadHandlerFactory.htm#apex_Sfc_ContentDownloadHandlerFactory_methods)**

-   **[ContentDownloadHandlerFactory Example Implementation](atlas.en-us.apexref.meta/apexref/apex_interface_Sfc_ContentDownloadHandlerFactory.htm#apex_interface_Sfc_ContentDownloadHandlerFactory_Example)**


## ContentDownloadHandlerFactory Methods

The following are methods for ContentDownloadHandlerFactory.

-   **[getContentDownloadHandler(var1, var2)](atlas.en-us.apexref.meta/apexref/apex_interface_Sfc_ContentDownloadHandlerFactory.htm#apex_Sfc_ContentDownloadHandlerFactory_getContentDownloadHandler)**
    Returns a ContentDownloadHandler for a given list of content IDs and a download context.

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

## ContentDownloadHandlerFactory Example Implementation

This example creates a class that implements the Sfc.ContentDownloadHandlerFactory interface and returns a download handler that blocks downloading content to mobile devices.

```

```

## Code Examples

```apex
// Allow customization of the content Download experience
public class ContentDownloadHandlerFactoryImpl implements Sfc.ContentDownloadHandlerFactory {

  public Sfc.ContentDownloadHandler getContentDownloadHandler(List<ID> ids, Sfc.ContentDownloadContext context) {
    Sfc.ContentDownloadHandler contentDownloadHandler = new Sfc.ContentDownloadHandler();

    if(context == Sfc.ContentDownloadContext.MOBILE) {
      contentDownloadHandler.isDownloadAllowed = false;
      contentDownloadHandler.downloadErrorMessage = 'Downloading a file from a mobile device is not allowed.';
      return contentDownloadHandler;
    }
    contentDownloadHandler.isDownloadAllowed = true;
    return contentDownloadHandler;
  }
}
```

## Related Topics

- Sfc (atlas.en-us.apexref.meta/apexref/apex_namespace_Sfc.htm)
- ContentDownloadHandlerFactory Methods (atlas.en-us.apexref.meta/apexref/apex_interface_Sfc_ContentDownloadHandlerFactory.htm)
- ContentDownloadHandlerFactory Example Implementation (atlas.en-us.apexref.meta/apexref/apex_interface_Sfc_ContentDownloadHandlerFactory.htm)
- getContentDownloadHandler(var1, var2) (atlas.en-us.apexref.meta/apexref/apex_interface_Sfc_ContentDownloadHandlerFactory.htm)
- Sfc.ContentDownloadContext (atlas.en-us.apexref.meta/apexref/apex_enum_Sfc_ContentDownloadContext.htm)
- Sfc.ContentDownloadHandler (atlas.en-us.apexref.meta/apexref/apex_class_Sfc_ContentDownloadHandler.htm)
