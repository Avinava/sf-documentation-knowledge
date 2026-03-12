---
title: "PersonalizationTargetInfo"
domain: object-reference
topic: personalizationtargetinfo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:14.829Z
estimatedTokens: 345
keywords: [PersonalizationTargetInfo, target, audience, API, version, 47.0, later, Calls]
---

# PersonalizationTargetInfo

> Represents a target for an audience. This object is available in API
    version 47.0 and later.

# PersonalizationTargetInfo

Represents a target for an audience. This object is available in API version 47.0 and later.

## Supported Calls

describeSObjects(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| ContainerId | TypereferencePropertiesFilter, Group, SortDescriptionID of the Experience Cloud site or org that contains the target. |
| DraftRowId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the draft PersonalizationTargetInfo. |
| GroupName | TypestringPropertiesFilter, Group, SortDescriptionGroup name of the target. Groups bundle related targets.You can have up to 2,000 groups and 500 targets per group. |
| PublishStatus | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionPublish status of the target.Possible values are:DraftLive |
| TargetType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe type of the target.Possible values are:ExperienceVariationNavigationLinkSetTopicCollaborationGroupKnowledgeArticleContentDocumentManagedContentReportDashboardCustom objectsYou can have up to 2,500 ExperienceVariation targets and 25,000 record targets. |
| TargetValue | TypestringPropertiesFilter, Group, SortDescriptionValue of the target. For ExperienceVariation, this is the developer name of the Experience Variation or the record ID for the object. |
