---
title: "getAudiences(communityId, ipAddress, domain, userId,
            publishStatus, includeAudienceCriteria, targetTypes)"
domain: apex-reference
topic: getaudiencescommunityid-ipaddress-domain-userid-publishstatus-includeaudiencecri
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.546Z
keywords: [getAudiences, communityId, ipAddress, domain, userId, publishStatus, includeAudienceCriteria, targetTypes, Get, list, assigned, audiences, match, user, context., API, Version, Available, Guest, Users]
---

# getAudiences(communityId, ipAddress, domain, userId,
            publishStatus, includeAudienceCriteria, targetTypes)

> Get a list of assigned audiences that match the user
        context.

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