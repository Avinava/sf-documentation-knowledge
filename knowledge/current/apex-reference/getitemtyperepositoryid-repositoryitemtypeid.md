---
title: "getItemType(repositoryId,
    repositoryItemTypeId)"
domain: apex-reference
topic: getitemtyperepositoryid-repositoryitemtypeid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.055Z
keywords: [getItemType, repositoryId, repositoryItemTypeId, Get, information, item, type, associated, repository., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage, See]
---

# getItemType(repositoryId,
    repositoryItemTypeId)

> Get information about an item type associated with a repository.

### getItemType(repositoryId, repositoryItemTypeId)

Get information about an item type associated with a repository.

#### API Version

39.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ContentHubItemTypeDetail getItemType(String repositoryId, String repositoryItemTypeId)

#### Parameters

repositoryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the repository.

repositoryItemTypeId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the repository item type.

#### Return Value

Type: [ConnectApi.ContentHubItemTypeDetail](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_content_hub_item_type_detail.htm#apex_connectapi_output_content_hub_item_type_detail "The details of an item type associated with a repository folder.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with setTest). Use the set test method with the same parameters or the code throws an exception.

#### See Also

-   [setTestGetItemType(repositoryId, repositoryItemTypeId, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_setTestGetItemType_1 "Register a ConnectApi.ContentHubItemTypeDetail object to be returned when the matching getItemType(repositoryId, repositoryItemTypeId) method is called in a test context. Use the method with the same parameters or you receive an exception.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")