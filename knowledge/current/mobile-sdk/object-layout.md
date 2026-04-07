---
title: "Object Layout"
domain: mobile-sdk
topic: object-layout
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:27.357Z
estimatedTokens: 248
keywords: [Android, Layout, metadata, iOS]
---

> Gets layout metadata for the specified object type and parameters.

# Object Layout

Gets layout metadata for the specified object type and parameters.

## Parameters

-   API version (string, optional)
-   Object API name (string, required)
-   Form factor (string, optional)—“Large” (default), “Medium”, or “Small”
-   Layout type (string, optional)—”Full” (default) or “Compact”
-   Mode (string, optional)—”View” (default, “Create”, or “Edit”
-   Record type ID (string, optional)—The ID of the RecordType object for the new record. If not provided, the default record type is used.

## iOS

Swift

```

```

Objective-C

```

```

## Android

Kotlin

fun getRequestForObjectLayout(apiVersion: String?, objectAPIName: String?, formFactor: String?, layoutType: String?, mode: String?, recordTypeId: String?): RestRequest

Java

```

```

## See Also

-   [“Get Record Layout Metadata” in *User Interface API Developer Guide*](https://developer.salesforce.com/docs/atlas.en-us.260.0.uiapi.meta/uiapi/ui_api_resources_record_layout.htm "HTML (New Window)")

## Code Examples

```
requestForLayout(withObjectAPIName:formFactor:layoutType:mode:recordTypeId:apiVersion:)
```

```
- (SFRestRequest *)
requestForLayoutWithObjectAPIName:(nonnull NSString *)objectAPIName 
                       formFactor:(nullable NSString *)formFactor 
                       layoutType:(nullable NSString *)layoutType 
                             mode:(nullable NSString *)mode 
                     recordTypeId:(nullable NSString *)recordTypeId 
                       apiVersion:(nullable NSString *)apiVersion;
```

```apex
public static RestRequest getRequestForObjectLayout(
    String apiVersion, String objectAPIName, String formFactor, 
    String layoutType, String mode, String recordTypeId)
```
