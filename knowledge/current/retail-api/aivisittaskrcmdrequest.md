---
title: "AiVisitTaskRcmdRequest"
domain: retail-api
topic: aivisittaskrcmdrequest
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:37.514Z
estimatedTokens: 992
keywords: [AiVisitTaskRcmdRequest, responses, visit, task, recommendations, API, version, 51.0, later, Calls, Associated, Objects]
---

# AiVisitTaskRcmdRequest

> Represents the request parameters and responses of visit task recommendations.
     This object is available in API version
    51.0
    and later.

# AiVisitTaskRcmdRequest

Represents the request parameters and responses of visit task recommendations. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AcceptedCount | TypeintPropertiesCreate, Filter, Group, Nillable, SortDescriptionNumber of recommendations created by this recommendation request that are accepted. |
| ErrorMessage | TypetextareaPropertiesCreate, NillableDescriptionDetails of why the visit task recommendations weren't generated. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last referenced a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identification of the task. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the user associated with this record. |
| RecommendationCount | TypeintPropertiesCreate, Filter, Group, Nillable, SortDescriptionNumber of recommendations created for the request. |
| RecommendationResponse | TypetextareaPropertiesCreate, NillableDescriptionJSON data containing the recommendations. |
| RecommendationStrategyName | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionName of the visit recommendation strategy. |
| RejectedCount | TypeintPropertiesCreate, Filter, Group, Nillable, SortDescriptionNumber of recommendations created by this recommendation request that are rejected. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, SortDescriptionStatus of the visit task recommendation request. The default value is QUEUED.Possible values are:COMPLETEDFAILEDIN_PROGRESSQUEUED |
| TargetRecordList | TypetextareaPropertiesCreateDescriptionList of targets for which recommendations are required. |
| TargetRecordObjectName | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionThe type of targets for which activities are recommended.Possible values are:AiVisitRecommendationVisit |

## Associated Objects

This object has the following associated objects. Unless noted, they’re available in the same API version as this object.

[AiVisitTaskRcmdRequestFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed_einstein.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed is available for the object.

[AiVisitTaskRcmdRequestHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history_einstein.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the object.

[AiVisitTaskRcmdRequestOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule_einstein.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rule is available for the object.

[AiVisitTaskRcmdRequestShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share_einstein.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- AiVisitTaskRcmdRequestFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed_einstein.htm)
- AiVisitTaskRcmdRequestHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history_einstein.htm)
- AiVisitTaskRcmdRequestOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule_einstein.htm)
- AiVisitTaskRcmdRequestShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share_einstein.htm)
