---
title: "AiVisitTaskRcmd"
domain: retail-api
topic: aivisittaskrcmd
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:37.505Z
estimatedTokens: 1041
keywords: [AiVisitTaskRcmd, visit, task, recommendations, accepted, rejected, sales, manager, API, version, 51.0, later, Calls, Associated, Objects]
---

# AiVisitTaskRcmd

> Represents the visit task recommendations. These recommendations can be
      accepted or rejected by a sales manager.  This object is available in API version 51.0
    and later.

# AiVisitTaskRcmd

Represents the visit task recommendations. These recommendations can be accepted or rejected by a sales manager. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AiVisitTaskRcmdRequestId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionID of the visit task recommendation request associated with this record. |
| IsLatest | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, SortDescriptionIndicates if the recommendation is the latest recommendation. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last referenced a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the visit task recommendation. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the user associated with this record. |
| RecommendationDecision | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionStatus of the recommendation request.Possible values are:ACCEPTED—ScheduledACCEPTED_FAILED—Failed to ScheduleACCEPTED_PENDING—Scheduling In ProgressRECOMMENDED—RecommendedREJECTED—Ignored |
| RecommendationDecisionComment | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionDetails about why a recommendation was accepted or rejected. |
| RecommendationReason | TypetextareaPropertiesCreate, NillableDescriptionDetails about why this task or KPI is recommended. |
| RuleScore | TypedoublePropertiesCreate, Filter, Nillable, SortDescriptionThe score provided by the recommendation strategy. |
| TargetRecordId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe target record for which this recommendation is requested. |
| TargetRecordObjectName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe type of targets for which activities are recommended. |
| TemplateRecordId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe link to the record used as a template. |
| TemplateRecordObjectName | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe object name of the template record. |

## Associated Objects

This object has the following associated objects. Unless noted, they’re available in the same API version as this object.

[AiVisitTaskRcmdFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed_einstein.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed are available for the object.

[AiVisitTaskRcmdHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history_einstein.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the object.

[AiVisitTaskRcmdOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule_einstein.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rule is available for the object.

[AiVisitTaskRcmdShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share_einstein.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- AiVisitTaskRcmdFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed_einstein.htm)
- AiVisitTaskRcmdHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history_einstein.htm)
- AiVisitTaskRcmdOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule_einstein.htm)
- AiVisitTaskRcmdShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share_einstein.htm)
