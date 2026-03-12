---
title: "Personalization Class"
domain: apex-reference
topic: personalization-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:18.674Z
estimatedTokens: 6196
namespace: ConnectApi
keywords: [Personalization, Create, audience., Note, createAudience, communityId, audience, API, Version, Requires, Chatter, createTargets, target, deleteAudience, audienceId, deleteTarget, targetId, getAudience, includeAudienceCriteria, Guest]
---

# Personalization Class

> Create an audience.

**Namespace:** `ConnectApi`

# Personalization Class

Get assigned personalization audiences that match the user context. Create, get, update, and delete an audience. Get personalization targets that match the user context, based on the assigned audiences that include the user. Create and update targets. Get and delete a target.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

Personalization varies what the user can see in the browser but doesn’t secure data in any way. To prevent users accessing sensitive data, use standard Salesforce security features, such as sharing rules and permission sets.

## Personalization Methods

These methods are for Personalization. All methods are static.

-   **[createAudience(communityId, audience)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Personalization_static_methods.htm#apex_ConnectAPI_Personalization_createAudience_2)**
    Create an audience.
-   **[createTargets(communityId, target)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Personalization_static_methods.htm#apex_ConnectAPI_Personalization_createTargets_3)**
    Create targets.
-   **[deleteAudience(communityId, audienceId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Personalization_static_methods.htm#apex_ConnectAPI_Personalization_deleteAudience_1)**
    Delete an audience.
-   **[deleteTarget(communityId, targetId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Personalization_static_methods.htm#apex_ConnectAPI_Personalization_deleteTarget_1)**
    Delete a target.
-   **[getAudience(communityId, audienceId, includeAudienceCriteria)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Personalization_static_methods.htm#apex_ConnectAPI_Personalization_getAudience_2)**
    Get an audience.
-   **[getAudienceBatch(communityId, audienceIds)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Personalization_static_methods.htm#apex_ConnectAPI_Personalization_getAudienceBatch_1)**
    Get audience information for a comma-separated list of audience IDs.
-   **[getAudiences(communityId, ipAddress, domain, userId, publishStatus, includeAudienceCriteria, targetTypes, recordId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Personalization_static_methods.htm#apex_ConnectAPI_Personalization_getAudiences_1)**
    Get a list of assigned audiences that match the user context and record information.
-   **[getAudiences(communityId, ipAddress, domain, userId, publishStatus, includeAudienceCriteria, targetTypes)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Personalization_static_methods.htm#apex_ConnectAPI_Personalization_getAudiences_2)**
    Get a list of assigned audiences that match the user context.
-   **[getTarget(communityId, targetId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Personalization_static_methods.htm#apex_ConnectAPI_Personalization_getTarget_2)**
    Get a target.
-   **[getTargetBatch(communityId, targetIds)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Personalization_static_methods.htm#apex_ConnectAPI_Personalization_getTargetBatch_1)**
    Get target information for a comma-separated list of target IDs.
-   **[getTargets(communityId, ipAddress, domain, userId, publishStatus, recordId, targetTypes, includeAudience, includeAllMatchingTargetsWithinGroup, groupNames)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Personalization_static_methods.htm#apex_ConnectAPI_Personalization_getTargets_1)**
    Get a list of targets that match the user context, based on the assigned audiences that include the user.
-   **[updateAudience(communityId, audienceId, audience)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Personalization_static_methods.htm#apex_ConnectAPI_Personalization_updateAudience_3)**
    Update an audience.
-   **[updateTargets(communityId, target)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Personalization_static_methods.htm#apex_ConnectAPI_Personalization_updateTargets_2)**
    Update targets.

### createAudience(communityId, audience)

Create an audience.

#### API Version

48.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.Audience createAudience(String communityId, ConnectApi.AudienceInput audience)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the Experience Cloud site.

audience

Type: [ConnectApi.AudienceInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_audience.htm "A personalization audience.")

A ConnectApi.AudienceInput object that defines the audience.

#### Return Value

Type: [ConnectApi.Audience](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_audience.htm "A personalization audience.")

### createTargets(communityId, target)

Create targets.

#### API Version

48.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.TargetCollection createTargets(String communityId, ConnectApi.TargetCollectionInput target)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the Experience Cloud site.

target

Type: [ConnectApi.TargetCollectionInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_target_collection.htm "Collection of targets to create.")

A ConnectApi.TargetCollectionInput object that defines the targets.

#### Return Value

Type: [ConnectApi.TargetCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_target_collection.htm "List of personalization targets.")

### deleteAudience(communityId, audienceId)

Delete an audience.

#### API Version

48.0

#### Requires Chatter

No

#### Signature

public static Void deleteAudience(String communityId, String audienceId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the Experience Cloud site.

audienceId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the audience.

#### Return Value

Type: Void

### deleteTarget(communityId, targetId)

Delete a target.

#### API Version

48.0

#### Requires Chatter

No

#### Signature

public static Void deleteTarget(String communityId, String targetId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the Experience Cloud site.

targetId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the target.

#### Return Value

Type: Void

### getAudience(communityId, audienceId, includeAudienceCriteria)

Get an audience.

#### API Version

48.0

#### Available to Guest Users

48.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.Audience getAudience(String communityId, String audienceId, Boolean includeAudienceCriteria)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the Experience Cloud site.

audienceId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the audience.

includeAudienceCriteria

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to include audience criteria (true) or not (false). If unspecified, defaults to false.

#### Return Value

Type: [ConnectApi.Audience](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_audience.htm "A personalization audience.")

### getAudienceBatch(communityId, audienceIds)

Get audience information for a comma-separated list of audience IDs.

#### API Version

48.0

#### Available to Guest Users

48.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.BatchResult\[\] getAudienceBatch(String communityId, List<String\> audienceIds)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the Experience Cloud site.

audienceIds

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

Comma-separated list of audience IDs.

#### Return Value

Type: [ConnectApi.BatchResult](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_batch_result.htm "The result of an operation returned by a batch method.")\[\]

The ConnectApi.BatchResult.getResult() method returns a [ConnectApi.Audience](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_audience.htm "A personalization audience.") object and errors for audiences that didn’t load.

### getAudiences(communityId, ipAddress, domain, userId, publishStatus, includeAudienceCriteria, targetTypes, recordId)

Get a list of assigned audiences that match the user context and record information.

#### API Version

51.0

#### Available to Guest Users

51.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.AudienceCollection getAudiences(String communityId, String ipAddress, String domain, String userId, ConnectApi.PublishStatus publishStatus, Boolean includeAudienceCriteria, List<String\> targetTypes, String recordId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

ipAddress

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

IP address of the user. If null, no audiences with location criteria are returned.

domain

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the user’s Salesforce custom domain. If null, no audiences with domain criteria are returned.

userId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the user. If null, defaults to the ID of the context user.

publishStatus

Type: [ConnectApi.PublishStatus](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#PublishStatusEnum)

Publish status of the audience. Values are:

-   Draft
-   Live

If null, defaults to Live.

includeAudienceCriteria

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to include audience criteria (true) or not (false). If unspecified, defaults to false.

targetTypes

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

Comma-separated list of target types to filter the results. Supported values include:

-   ExperienceVariation (version 48.0 and later)
-   Custom object API names, such as CustomObjectName\_\_c (version 48.0 and later)
-   NavigationLinkSet (version 49.0 and later)
-   Topic (version 49.0 and later)
-   CollaborationGroup (version 49.0 and later)
-   KnowledgeArticle (version 49.0 and later)
-   ContentDocument (version 49.0 and later)
-   ManagedContent (version 49.0 and later)
-   Report (version 49.0 and later)
-   Dashboard (version 49.0 and later)

If null, all target types are returned.

recordId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the record for field based criteria. If null, all applicable audiences with field based criteria are returned.

#### Return Value

Type: [ConnectApi.AudienceCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_audience_collection.htm "Collection of personalization audiences.")

### getAudiences(communityId, ipAddress, domain, userId, publishStatus, includeAudienceCriteria, targetTypes)

Get a list of assigned audiences that match the user context.

#### API Version

48.0

#### Available to Guest Users

48.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.AudienceCollection getAudiences(String communityId, String ipAddress, String domain, String userId, ConnectApi.PublishStatus publishStatus, Boolean includeAudienceCriteria, List<String\> targetTypes)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the Experience Cloud site.

ipAddress

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

IP address of the user. If null, no audiences with location criteria are returned.

domain

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the user’s Salesforce custom domain. If null, no audiences with domain criteria are returned.

userId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the user. If null, defaults to the ID of the context user.

publishStatus

Type: [ConnectApi.PublishStatus](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#PublishStatusEnum)

Publish status of the audience. Values are:

-   Draft
-   Live

If null, defaults to Live.

includeAudienceCriteria

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to include audience criteria (true) or not (false). If unspecified, defaults to false.

targetTypes

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

Comma-separated list of target types to filter the results. Supported values include:

-   ExperienceVariation (version 48.0 and later)
-   Custom object API names, such as CustomObjectName\_\_c (version 48.0 and later)
-   NavigationLinkSet (version 49.0 and later)
-   Topic (version 49.0 and later)
-   CollaborationGroup (version 49.0 and later)
-   KnowledgeArticle (version 49.0 and later)
-   ContentDocument (version 49.0 and later)
-   ManagedContent (version 49.0 and later)
-   Report (version 49.0 and later)
-   Dashboard (version 49.0 and later)

If null, all target types are returned.

#### Return Value

Type: [ConnectApi.AudienceCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_audience_collection.htm "Collection of personalization audiences.")

### getTarget(communityId, targetId)

Get a target.

#### API Version

48.0

#### Available to Guest Users

48.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.Target getTarget(String communityId, String targetId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the Experience Cloud site.

targetId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the target.

#### Return Value

Type: [ConnectApi.Target](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_target.htm "Personalization target information.")

### getTargetBatch(communityId, targetIds)

Get target information for a comma-separated list of target IDs.

#### API Version

48.0

#### Available to Guest Users

48.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.BatchResult\[\] getTargetBatch(String communityId, List<String\> targetIds)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

targetIds

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

Comma-separated list of target IDs.

#### Return Value

Type: [ConnectApi.BatchResult](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_batch_result.htm "The result of an operation returned by a batch method.")

The ConnectApi.BatchResult.getResult() method returns a [ConnectApi.Target](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_target.htm "Personalization target information.") object and errors for targets that didn’t load.

### getTargets(communityId, ipAddress, domain, userId, publishStatus, recordId, targetTypes, includeAudience, includeAllMatchingTargetsWithinGroup, groupNames)

Get a list of targets that match the user context, based on the assigned audiences that include the user.

#### API Version

48.0

#### Available to Guest Users

48.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.TargetCollection getTargets(String communityId, String ipAddress, String domain, String userId, ConnectApi.PublishStatus publishStatus, String recordId, List<String\> targetTypes, Boolean includeAudience, Boolean includeAllMatchingTargetsWithinGroup, List<String\> groupNames)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the Experience Cloud site.

ipAddress

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

IP address of the user. If null, no audiences with location criteria are returned.

domain

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the user’s Salesforce custom domain. If null, no audiences with domain criteria are returned.

userId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the user. If null, the default is the ID of the context user.

publishStatus

Type: [ConnectApi.PublishStatus](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#PublishStatusEnum)

Publish status of the target. Values are:

-   Draft
-   Live

recordId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the record, if you want to specify field based criteria in audiences.

targetTypes

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

Comma-separated list of target types to filter the results. Supported values include:

-   ExperienceVariation (version 48.0 and later)
-   Custom object API names, such as CustomObjectName\_\_c (version 48.0 and later)
-   NavigationLinkSet (version 49.0 and later)
-   Topic (version 49.0 and later)
-   CollaborationGroup (version 49.0 and later)
-   KnowledgeArticle (version 49.0 and later)
-   ContentDocument (version 49.0 and later)
-   ManagedContent (version 49.0 and later)
-   Report (version 49.0 and later)
-   Dashboard (version 49.0 and later)

If null, all target types are returned.

includeAudience

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to include the matching audience (true) or not (false). If null, the default is false.

includeAllMatchingTargetsWithinGroup

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to include all the matching targets within a target group (true) or not (false). If null, the default is false. If false, the first matching target within each group, based on priority within the group, is returned.

groupNames

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

A comma-separated list of group names. Groups bundle related target and audience pairs.

#### Return Value

Type: [ConnectApi.TargetCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_target_collection.htm "List of personalization targets.")

### updateAudience(communityId, audienceId, audience)

Update an audience.

#### API Version

48.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.Audience updateAudience(String communityId, String audienceId, ConnectApi.AudienceInput audience)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the Experience Cloud site.

audienceId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the audience.

audience

Type: [ConnectApi.AudienceInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_audience.htm "A personalization audience.")

A ConnectApi.AudienceInput object that defines the updates to the audience.

#### Return Value

Type: [ConnectApi.Audience](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_audience.htm "A personalization audience.")

### updateTargets(communityId, target)

Update targets.

#### API Version

48.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.TargetCollection updateTargets(String communityId, ConnectApi.TargetCollectionUpdateInput target)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the Experience Cloud site.

target

Type: [ConnectApi.TargetCollectionUpdateInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_target_collection_update.htm "Collection of targets to update.")

A ConnectApi.TargetCollectionUpdateInput object that defines the updates for the targets.

#### Return Value

Type: [ConnectApi.TargetCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_target_collection.htm "List of personalization targets.")

## Related Topics

- ConnectApi (atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm)
- createAudience(communityId, audience) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Personalization_static_methods.htm)
- createTargets(communityId, target) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Personalization_static_methods.htm)
- deleteAudience(communityId, audienceId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Personalization_static_methods.htm)
- deleteTarget(communityId, targetId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Personalization_static_methods.htm)
- getAudience(communityId, audienceId, includeAudienceCriteria) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Personalization_static_methods.htm)
- getAudienceBatch(communityId, audienceIds) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Personalization_static_methods.htm)
- getAudiences(communityId, ipAddress, domain, userId, publishStatus, includeAudienceCriteria, targetTypes, recordId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Personalization_static_methods.htm)
- getAudiences(communityId, ipAddress, domain, userId, publishStatus, includeAudienceCriteria, targetTypes) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Personalization_static_methods.htm)
- getTarget(communityId, targetId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Personalization_static_methods.htm)
