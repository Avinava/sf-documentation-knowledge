---
title: "ContentDownloadHandler Class"
domain: apex-reference
topic: contentdownloadhandler-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:20.936Z
estimatedTokens: 704
namespace: Sfc
keywords: [ContentDownloadHandler, define, custom, download, handler, controls, how, content, downloaded., downloadErrorMessage, isDownloadAllowed, redirectUrl]
---

# ContentDownloadHandler Class

> Use ContentDownloadHandler to define a custom download handler that
      controls how content is downloaded.

**Namespace:** `Sfc`

# ContentDownloadHandler Class

Use ContentDownloadHandler to define a custom download handler that controls how content is downloaded.

## Namespace

[Sfc](atlas.en-us.apexref.meta/apexref/apex_namespace_Sfc.htm#apex_namespace_Sfc "The Sfc namespace contains classes used in Salesforce Files.")

-   **[ContentDownloadHandler Properties](atlas.en-us.apexref.meta/apexref/apex_class_Sfc_ContentDownloadHandler.htm#apex_Sfc_ContentDownloadHandler_properties)**


## ContentDownloadHandler Properties

The following are properties for ContentDownloadHandler.

-   **[downloadErrorMessage](atlas.en-us.apexref.meta/apexref/apex_class_Sfc_ContentDownloadHandler.htm#apex_Sfc_ContentDownloadHandler_downloadErrorMessage)**
    A customized error message explaining why the download isn’t allowed.
-   **[isDownloadAllowed](atlas.en-us.apexref.meta/apexref/apex_class_Sfc_ContentDownloadHandler.htm#apex_Sfc_ContentDownloadHandler_isDownloadAllowed)**
    Indicates whether or not download is allowed.
-   **[redirectUrl](atlas.en-us.apexref.meta/apexref/apex_class_Sfc_ContentDownloadHandler.htm#apex_Sfc_ContentDownloadHandler_redirectUrl)**
    The URL the user is redirected to when the download action isn't available, for applying Information Rights Management (IRM) control, virus scanning, or other behavior.

### downloadErrorMessage

A customized error message explaining why the download isn’t allowed.

#### Signature

public String downloadErrorMessage {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

This message is used if a redirectUrl is not provided. If the download is not allowed, Salesforce will throw a ContentCustomizedDownloadException exception that contains the downloadErrorMessage.

### isDownloadAllowed

Indicates whether or not download is allowed.

#### Signature

public Boolean isDownloadAllowed {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### redirectUrl

The URL the user is redirected to when the download action isn't available, for applying Information Rights Management (IRM) control, virus scanning, or other behavior.

#### Signature

public String redirectUrl {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The URL must be a valid relative URL. For example, the redirect can be a custom Visualforce page such as “/apex/IRMControl”. URLs with no path, such as “www.domain.com”, results in an InvalidParameterValueException.

## Related Topics

- Sfc (atlas.en-us.apexref.meta/apexref/apex_namespace_Sfc.htm)
- ContentDownloadHandler Properties (atlas.en-us.apexref.meta/apexref/apex_class_Sfc_ContentDownloadHandler.htm)
- downloadErrorMessage (atlas.en-us.apexref.meta/apexref/apex_class_Sfc_ContentDownloadHandler.htm)
- isDownloadAllowed (atlas.en-us.apexref.meta/apexref/apex_class_Sfc_ContentDownloadHandler.htm)
- redirectUrl (atlas.en-us.apexref.meta/apexref/apex_class_Sfc_ContentDownloadHandler.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
