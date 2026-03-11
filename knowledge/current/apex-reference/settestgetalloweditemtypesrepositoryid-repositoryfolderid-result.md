---
title: "setTestGetAllowedItemTypes(repositoryId, repositoryFolderId,
      result)"
domain: apex-reference
topic: settestgetalloweditemtypesrepositoryid-repositoryfolderid-result
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.056Z
keywords: [setTestGetAllowedItemTypes, repositoryId, repositoryFolderId, result, Register, ConnectApi.ContentHubAllowedItemTypeCollection, object, returned, matching, getAllowedItemTypes, method, called, test, context., same, parameters, receive, exception., API, Version]
---

# setTestGetAllowedItemTypes(repositoryId, repositoryFolderId,
      result)

> Register a ConnectApi.ContentHubAllowedItemTypeCollection object to be returned when the
    matching getAllowedItemTypes(repositoryId,
      repositoryFolderId) method is called in a test context. Use the method with the same
    parameters or you receive an exception.

### setTestGetAllowedItemTypes(repositoryId, repositoryFolderId, result)

Register a ConnectApi.ContentHubAllowedItemTypeCollection object to be returned when the matching getAllowedItemTypes(repositoryId, repositoryFolderId) method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

40.0

#### Signature

public static Void setTestGetAllowedItemTypes(String repositoryId, String repositoryFolderId, ConnectApi.ContentHubAllowedItemTypeCollection result)

#### Parameters

repositoryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the repository.

repositoryFolderId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the repository folder.

result

Type: [ConnectApi.ContentHubAllowedItemTypeCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_content_hub_allowed_item_type_collection.htm#apex_connectapi_output_content_hub_allowed_item_type_collection "The item types that the context user is allowed to create in a repository folder.")

Object containing test data.

#### Return Value

Type: Void

#### See Also

-   [getAllowedItemTypes(repositoryId, repositoryFolderId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_getAllowedItemTypes_1 "Get the item types that the context user is allowed to create in the repository folder.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")