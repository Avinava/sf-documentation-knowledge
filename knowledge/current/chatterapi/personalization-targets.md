---
title: "Personalization Targets"
domain: chatterapi
topic: personalization-targets
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.281Z
estimatedTokens: 888
keywords: [Personalization, Targets, match, user, context, assigned, audiences, include]
---

# Personalization Targets

> Get a list of targets that match the user context, based on the
      assigned audiences that include the user. Create and update targets.

# Personalization Targets

Get a list of targets that match the user context, based on the assigned audiences that include the user. Create and update targets.

Resource

```

```

Available version

47.0

HTTP methods

GET, POST, PATCH

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| domain | String | Name of the user’s Salesforce custom domain. If not specified, no audience targets with domain criteria are returned. | Optional | 47.0 |
| groupNames | String[] | A comma-separated list of group names. Groups bundle related target and audience pairs. If you’re specifying group names, you must also specify a single targetTypes value. | Optional | 48.0 |
| includeAll​MatchingTargets​WithinGroup | Boolean | Specifies whether to include all the matching targets within a target group (true) or not (false). If not specified, the default is false. If false, the first matching target within each group, based on priority within the group, is returned. | Optional | 47.0 |
| includeAudience | Boolean | Specifies whether to include the matching audience (true) or not (false). If not specified, the default is false. | Optional | 47.0 |
| ipAddress | String | IP address of the user. If not specified, no audience targets with location criteria are returned. | Optional | 47.0 |
| publishStatus | String | Publish status of the target. Values are:DraftLiveIf not specified, the default is Live. | Optional | 47.0 |
| recordId | String | ID of the record, if you want to specify field based criteria in audiences. | Optional | 47.0 |
| targetTypes | String[] | Comma-separated list of target types to filter the results. Supported values include:ExperienceVariation (version 47.0 and later)Custom object API names, such as CustomObjectName__c (version 47.0 and later)NavigationLinkSet (version 49.0 and later)Topic (version 49.0 and later)CollaborationGroup (version 49.0 and later)KnowledgeArticle (version 49.0 and later)ContentDocument (version 49.0 and later)ManagedContent (version 49.0 and later)Report (version 49.0 and later)Dashboard (version 49.0 and later)If not specified, all target types are returned. | Required if specifying groupNames; otherwise optional | 47.0 |
| userId | String | ID of the user. If not specified, the default is the ID of the context user. | Optional | 47.0 |

Request body for POST

Create targets using POST with the [Target Collection Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_target_collection_input.htm "Collection of targets to create.").

Root XML tag

<targetCollection>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| targets | Target Input[] | List of targets to create. | Required | 47.0 |

Request body for PATCH

Update targets, such as assigning audiences to targets, using PATCH with the [Target Collection Update Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_target_collection_update_input.htm "Collection of targets to update.").

Root XML tag

<targetCollection>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| targets | Target Update Input[] | List of targets to update. | Required | 47.0 |

Response body for GET, POST, and PATCH

[Target Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_target_collection.htm "List of personalization targets.")

## Code Examples

```
/connect/communities/communityId/personalization/targets
```

```
{
   "targets": [{
      "audienceId":"6AuRM0000004D5w0AE",
      "groupName":"2b8bc305-d415-49f9-8e24-814455427324",
      "priority":1,
      "publishStatus":"Draft",
      "targetType":"ExperienceVariation",
      "targetValue":"ContactSupport_ContactSupportForCalifornia_Page"
      }
   ]
}
```

```
{
   "targets": [{
      "audienceId":"6AuRM0000004D5w0AE",
      "priority":1,
      "targetId":"6AtRM0000000II30AM"
      }
   ]
}
```

## Related Topics

- Target Collection Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_target_collection_input.htm)
- Target Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_target_input.htm)
- Target Collection Update Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_target_collection_update_input.htm)
- Target Update Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_target_update_input.htm)
- Target Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_target_collection.htm)
