---
title: "Supported Objects"
domain: uiapi
topic: supported-objects
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:20.090Z
estimatedTokens: 598
keywords: [Objects, User, API, supports, custom, external, standard]
---

# Supported Objects

> User Interface API supports all custom objects and external objects
      and many standard objects.

# Supported Objects

User Interface API supports all custom objects and external objects and many standard objects.

To get a directory of objects that are supported by the API and accessible to the context user, use the [/ui-api/object-info](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_object_info_directory.htm#ui_api_resources_object_info_directory "Get a directory of objects that are supported by User Interface API and accessible to the context user. The directory includes a /ui-api/object-info/{objectApiName} resource for each supported object.") resource.

To understand how the API operates on supported objects, let’s look at some examples.

This resource gets object metadata. It operates on any supported object.

```

```

This example gets Account metadata.

```

```

This resource gets record data and metadata. It operates on any supported object record.

```

```

This example gets data and metadata to display an Opportunity record.

```

```

Most User Interface API resources support these objects. Related lists resources support every object supported by User Interface API. The list views and most recently used list views resources support smaller sets of objects. For a list of all supported objects, see [All Supported Objects](atlas.en-us.uiapi.meta/uiapi/ui_api_all_supported_objects.htm "User Interface API supports many standard objects as well as all custom and external objects.").

-   **[All Supported Objects](atlas.en-us.uiapi.meta/uiapi/ui_api_all_supported_objects.htm)**
    User Interface API supports many standard objects as well as all custom and external objects.
-   **[List View Supported Objects](atlas.en-us.uiapi.meta/uiapi/ui_api_list_view_supported_objects.htm)**
    List views support a subset of the standard objects that User Interface API supports.
-   **[Most Recently Used List View Supported Objects](atlas.en-us.uiapi.meta/uiapi/ui_api_mru_list_view_supported_objects.htm)**
    Most recently used (MRU) list views support a subset of the standard objects that User Interface API supports.

#### See Also

-   [Get a Directory of Supported Objects](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_object_info_directory.htm "Get a directory of objects that are supported by User Interface API and accessible to the context user. The directory includes a /ui-api/object-info/{objectApiName} resource for each supported object.")

## Code Examples

```
GET /ui-api/object-info/{objectApiName}
```

```
GET /ui-api/object-info/Account
```

```
GET /ui-api/record-ui/{recordIds}
```

```
GET /ui-api/record-ui/006RM000002XCd1YAG
```

## Related Topics

- /ui-api/object-info (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_object_info_directory.htm)
- All Supported Objects (atlas.en-us.uiapi.meta/uiapi/ui_api_all_supported_objects.htm)
- List View Supported Objects (atlas.en-us.uiapi.meta/uiapi/ui_api_list_view_supported_objects.htm)
- Most Recently Used List View Supported Objects (atlas.en-us.uiapi.meta/uiapi/ui_api_mru_list_view_supported_objects.htm)
- Get a Directory of Supported Objects (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_object_info_directory.htm)
