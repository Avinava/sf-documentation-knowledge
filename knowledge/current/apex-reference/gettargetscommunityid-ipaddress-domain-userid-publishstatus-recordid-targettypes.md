---
title: "getTargets(communityId, ipAddress, domain, userId,
      publishStatus, recordId, targetTypes, includeAudience, includeAllMatchingTargetsWithinGroup,
      groupNames)"
domain: apex-reference
topic: gettargetscommunityid-ipaddress-domain-userid-publishstatus-recordid-targettypes
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.546Z
keywords: [getTargets, communityId, ipAddress, domain, userId, publishStatus, recordId, targetTypes, includeAudience, includeAllMatchingTargetsWithinGroup, groupNames, Get, list, targets, match, user, context, based, assigned, audiences]
---

# getTargets(communityId, ipAddress, domain, userId,
      publishStatus, recordId, targetTypes, includeAudience, includeAllMatchingTargetsWithinGroup,
      groupNames)

> Get a list of targets that match the user context, based on the
      assigned audiences that include the user.

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