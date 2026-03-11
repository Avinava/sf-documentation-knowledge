---
title: "setTestGetItemType(repositoryId, repositoryItemTypeId,
      result)"
domain: apex-reference
topic: settestgetitemtyperepositoryid-repositoryitemtypeid-result
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.056Z
keywords: [setTestGetItemType, repositoryId, repositoryItemTypeId, result, Register, ConnectApi.ContentHubItemTypeDetail, object, returned, matching, getItemType, method, called, test, context., same, parameters, receive, exception., API, Version]
---

# setTestGetItemType(repositoryId, repositoryItemTypeId,
      result)

> Register a ConnectApi.ContentHubItemTypeDetail
    object to be returned when the matching getItemType(repositoryId,
      repositoryItemTypeId) method is called in a test context. Use the method with the
    same parameters or you receive an exception.

### setTestGetItemType(repositoryId, repositoryItemTypeId, result)

Register a ConnectApi.ContentHubItemTypeDetail object to be returned when the matching getItemType(repositoryId, repositoryItemTypeId) method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

40.0

#### Signature

public static Void setTestGetItemType(String repositoryId, String repositoryItemTypeId, ConnectApi.ContentHubItemTypeDetail result)

#### Parameters

repositoryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the repository.

repositoryItemTypeId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the repository item type.

result

Type: [ConnectApi.ContentHubItemTypeDetail](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_content_hub_item_type_detail.htm#apex_connectapi_output_content_hub_item_type_detail "The details of an item type associated with a repository folder.")

Object containing test data.

#### Return Value

Type: Void

#### See Also

-   [getItemType(repositoryId, repositoryItemTypeId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_getItemType_1 "Get information about an item type associated with a repository.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")