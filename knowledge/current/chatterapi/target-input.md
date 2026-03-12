---
title: "Target Input"
domain: chatterapi
topic: target-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.950Z
estimatedTokens: 559
keywords: [Target, Input]
---

# Target Input

> Target to create.

# Target Input

Target to create.

Root XML tag

<target>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| audienceId | String | ID of the audience to assign to the target. | Required | 47.0 |
| groupName | String | Group name of the target. Groups bundle related target and audience pairs. You can have up to 2,000 groups and 500 targets per group. To determine the group name for targets of type ExperienceVariation, see Personalization Target Developer and Group Names in the Experience Cloud Developer Guide. | Required | 47.0 |
| priority | Integer | Priority of the target. Within a group, priority determines which target is returned if the user matches more than one audience. | Optional | 47.0 |
| publishStatus | String | Publish status of the target. Values are:DraftLiveWe recommend setting the publish status to Draft. If you specify Live, your changes revert after you publish the site. | Optional | 47.0 |
| targetType | String | Type of target, indicating the nature of the data being targeted. Supported values include:ExperienceVariation (version 47.0 and later)Custom object API names, such as CustomObjectName__c (version 47.0 and later)NavigationLinkSet (version 49.0 and later)Topic (version 49.0 and later)CollaborationGroup (version 49.0 and later)KnowledgeArticle (version 49.0 and later)ContentDocument (version 49.0 and later)ManagedContent (version 49.0 and later)Report (version 49.0 and later)Dashboard (version 49.0 and later)You can have up to 2,500 ExperienceVariation targets and 25,000 record targets. | Required | 47.0 |
| targetValue | String | Value of the target. If targetType is ExperienceVariation, targetValue is the developer name of the experience variation. If targetType is CustomObjectName__c, targetValue is the ID of the custom object. To determine the developer name for targets of type ExperienceVariation, see Personalization Target Developer and Group Names in the Experience Cloud Developer Guide. | Required | 47.0 |

#### See Also

-   [Target Collection Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_target_collection_input.htm "Collection of targets to create.")

## Code Examples

```
{
   "audienceId":"6AuRM0000004D5w0AE",
   "groupName":"2b8bc305-d415-49f9-8e24-814455427324",
   "priority":1,
   "publishStatus":"Draft",
   "targetType":"ExperienceVariation",
   "targetValue":"ContactSupport_ContactSupportForCalifornia_Page"
}
```

## Related Topics

- Target Collection Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_target_collection_input.htm)
