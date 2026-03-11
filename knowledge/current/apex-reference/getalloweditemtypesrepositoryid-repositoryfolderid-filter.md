---
title: "getAllowedItemTypes(repositoryId, repositoryFolderId,
      filter)"
domain: apex-reference
topic: getalloweditemtypesrepositoryid-repositoryfolderid-filter
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.055Z
keywords: [getAllowedItemTypes, repositoryId, repositoryFolderId, filter, Get, item, types, filtered, type, context, user, allowed, create, repository, folder., API, Version, Requires, Chatter, Signature]
---

# getAllowedItemTypes(repositoryId, repositoryFolderId,
      filter)

> Get the item types, filtered by type, that the context user is allowed to create in the
    repository folder.

### getAllowedItemTypes(repositoryId, repositoryFolderId, filter)

Get the item types, filtered by type, that the context user is allowed to create in the repository folder.

#### API Version

39.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ContentHubAllowedItemTypeCollection getAllowedItemTypes(String repositoryId, String repositoryFolderId, ConnectApi.ConnectContentHubItemType filter)

#### Parameters

repositoryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the repository.

repositoryFolderId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the repository folder.

filter

Type: [ConnectApi.ContentHubItemType](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#ContentHubItemTypeEnum)

Item types. Values are:

-   Any—Includes files and folders.
-   FilesOnly—Includes files only.
-   FoldersOnly—Includes folders only.

#### Return Value

Type: [ConnectApi.ContentHubAllowedItemTypeCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_content_hub_allowed_item_type_collection.htm#apex_connectapi_output_content_hub_allowed_item_type_collection "The item types that the context user is allowed to create in a repository folder.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with setTest). Use the set test method with the same parameters or the code throws an exception.

#### Example

This example calls getAllowedItemTypes(repositoryId, repositoryFolderId, ConnectApi.ContentHubItemType.FilesOnly) to get the first ConnectApi.ContentHubItemTypeSummary.id of a file. The context user can create allowed files in a repository folder in the external system.

```

```

#### See Also

-   [setTestGetAllowedItemTypes(repositoryId, repositoryFolderId, filter, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_setTestGetAllowedItemTypes_2 "Register a ConnectApi.ContentHubAllowedItemTypeCollection object to be returned when the matching getAllowedItemTypes(repositoryId, repositoryFolderId, filter) method is called in a test context. Use the method with the same parameters or you receive an exception.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")