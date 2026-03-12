---
title: "Object Info Directory Entry"
domain: uiapi
topic: object-info-directory-entry
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:21.007Z
estimatedTokens: 330
keywords: [Info, Directory, Entry, objects, User, API, supports, context, access]
---

# Object Info Directory Entry

> An entry in the Object Info Directory, which is a directory of
      objects that User Interface API supports and that the context user can
    access.

# Object Info Directory Entry

An entry in the Object Info Directory, which is a directory of objects that User Interface API supports and that the context user can access.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| apiName | String | The API name of the object. | Small, 42.0 | 42.0 |
| keyPrefix | String | The key prefix of the object. | Small, 47.0 | 47.0 |
| label | String | The label of the object. | Small, 42.0 | 42.0 |
| labelPlural | String | The plural label of the object. | Small, 42.0 | 42.0 |
| nameFields | String[] | A list of the API names of the name fields of the object. Most objects have one name field. For example, the Order object has one name field, OrderNumber. However, objects that use a first and last name have multiple name fields. For example, the Contact object has these name fields: FirstName, LastName, and Name. | Small, 47.0 | 47.0 |
| objectInfoUrl | String | The URL to get a full object info response for this object (/ui-api/object-info/{objectApiName}). | Small, 42.0 | 42.0 |

#### See Also

-   [Object Info Directory](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_object_info_directory.htm "A directory of objects that are supported by User Interface API and available to the context user.")

## Related Topics

- Object Info Directory (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_object_info_directory.htm)
