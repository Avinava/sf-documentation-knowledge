---
title: "setTestGetItemType(communityId, repositoryId,
      repositoryItemTypeId, result)"
domain: apex-reference
topic: settestgetitemtypecommunityid-repositoryid-repositoryitemtypeid-result
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.056Z
keywords: [setTestGetItemType, communityId, repositoryId, repositoryItemTypeId, result, Register, ConnectApi.ContentHubItemTypeDetail, object, returned, matching, getItemType, method, called, test, context., same, parameters, receive, exception., API]
---

# setTestGetItemType(communityId, repositoryId,
      repositoryItemTypeId, result)

> Register a ConnectApi.ContentHubItemTypeDetail
    object to be returned when the matching getItemType(communityId,
      repositoryId, repositoryItemTypeId) method is called in a test context. Use the
    method with the same parameters or you receive an exception.

### setTestGetItemType(communityId, repositoryId, repositoryItemTypeId, result)

Register a ConnectApi.ContentHubItemTypeDetail object to be returned when the matching getItemType(communityId, repositoryId, repositoryItemTypeId) method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

40.0

#### Signature

public static Void setTestGetItemType(String communityId, String repositoryId, String repositoryItemTypeId, ConnectApi.ContentHubItemTypeDetail result)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

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

-   [getItemType(communityId, repositoryId, repositoryItemTypeId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_getItemType_2 "Get information about an item type associated with a repository in an Experience Cloud site.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")