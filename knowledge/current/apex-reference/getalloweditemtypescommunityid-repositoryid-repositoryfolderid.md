---
title: "getAllowedItemTypes(communityId, repositoryId,
      repositoryFolderId)"
domain: apex-reference
topic: getalloweditemtypescommunityid-repositoryid-repositoryfolderid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.055Z
keywords: [getAllowedItemTypes, communityId, repositoryId, repositoryFolderId, Get, item, types, context, user, allowed, create, repository, folder, Experience, Cloud, site., API, Version, Requires, Chatter]
---

# getAllowedItemTypes(communityId, repositoryId,
      repositoryFolderId)

> Get the item types that the context user is allowed to create in the repository folder in
    an Experience Cloud site.

### getAllowedItemTypes(communityId, repositoryId, repositoryFolderId)

Get the item types that the context user is allowed to create in the repository folder in an Experience Cloud site.

#### API Version

39.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ContentHubAllowedItemTypeCollection getAllowedItemTypes(String communityId, String repositoryId, String repositoryFolderId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

repositoryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the repository.

repositoryFolderId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the repository folder.

#### Return Value

Type: [ConnectApi.ContentHubAllowedItemTypeCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_content_hub_allowed_item_type_collection.htm#apex_connectapi_output_content_hub_allowed_item_type_collection "The item types that the context user is allowed to create in a repository folder.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with setTest). Use the set test method with the same parameters or the code throws an exception.

#### See Also

-   [setTestGetAllowedItemTypes(communityId, repositoryId, repositoryFolderId, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_setTestGetAllowedItemTypes_3 "Register a ConnectApi.ContentHubAllowedItemTypeCollection object to be returned when the matching getAllowedItemTypes(communityId, repositoryId, repositoryFolderId) method is called in a test context. Use the method with the same parameters or you receive an exception.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")