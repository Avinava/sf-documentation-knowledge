---
title: "ConnectApi.ManagedContentSpace"
domain: apex-reference
topic: connectapimanagedcontentspace
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:39.194Z
keywords: [ConnectApi.ManagedContentSpace, See]
---

# ConnectApi.ManagedContentSpace

# ConnectApi.ManagedContentSpace

Managed content space.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| apiName | String | API name of the managed content space. | 61.0 |
| createdBy | String | ID of the user who created the managed content space. | 55.0 |
| createdDate | Datetime | Date when the managed content space was created. | 55.0 |
| defaultLanguage | String | Default language of the managed content space. | 55.0 |
| description | String | Description of the managed content space. | 55.0 |
| fullyQualifiedName | String | Fully qualified name of the managed content space. | 63.0 |
| id | String | ID of the managed content space. | 55.0 |
| isEnhancedSpace | Boolean | Specifies whether the space is enhanced (true) or not (false). | 60.0 |
| lastModifiedBy | String | ID of the user who last modified the managed content space. | 55.0 |
| lastModifiedDate | Datetime | Date when the managed content space was last modified. | 55.0 |
| name | String | Name of the managed content space. | 55.0 |
| rootFolderId | String | ID of the root folder of the managed content space. | 55.0 |
| spaceType | ConnectApi.​ManagedContent​SpaceBase​Type | Base type of the managed content space. | 64.0 |

#### See Also

-   [getManagedContentSpace(contentSpaceId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContentSpaces_static_methods.htm#apex_ConnectAPI_ManagedContentSpaces_getManagedContentSpace_2 "Get a managed content space.")
    
-   [patchManagedContentSpace(contentSpaceId, ManagedContentSpaceUpdateInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContentSpaces_static_methods.htm#apex_ConnectAPI_ManagedContentSpaces_patchManagedContentSpace_3 "Update the name or description of a managed content space.")
    
-   [postManagedContentSpace(ManagedContentSpaceInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContentSpaces_static_methods.htm#apex_ConnectAPI_ManagedContentSpaces_postManagedContentSpace_2 "Create a managed content space.")
    
-   [ConnectApi.ManagedContentSpaceCollectionRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_space_collection.htm "Collection of managed content spaces.")