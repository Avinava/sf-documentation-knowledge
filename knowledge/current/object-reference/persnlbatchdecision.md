---
title: "PersnlBatchDecision"
domain: object-reference
topic: persnlbatchdecision
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:03.398Z
estimatedTokens: 612
keywords: [PersnlBatchDecision, batch, personalization, delivers, decisions, content, recommendations, customer, segment, API, version, 64.0, later, Calls, Usage]
---

# PersnlBatchDecision

> Represents a batch personalization that delivers personalization decisions (content or recommendations) to a customer segment. Available in API version 64.0 and later.

# PersnlBatchDecision

Represents a batch personalization that delivers personalization decisions (content or recommendations) to a customer segment. Available in API version 64.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| ActivationTriggerType | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionType of trigger that activates the batch personalization decision. The default value is None and possible values are:Automatic—Automatically On Job CompletionNone |
| BatchStatus | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionStatus of the batch personalization decision. The default value is Active and possible values are:ActiveErrorPaused |
| DataSpaceId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the data space from where batch personalization decision resources originate.Relationship NameDataSpaceRefers ToDataSpace |
| Description | TypestringPropertiesFilter, Group, Nillable, SortDescriptionText description of the batch personalization decision. |
| DeveloperName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique name of the batch personalization decision in the API. |
| ErrorCode | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe issue that’s causing an error. The default value is None and possible values are:ConfigurationMissingError—A required configuration setting is missing.DpcJobError—A problem occurred during processing.Internal Error—An internal error occurred during processing.ModelValidationError—The model is invalid.None |
| RefreshMode | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionHow the batch personalization data is refreshed. The default value is FULL_REFRESH and possible values are:FULL_REFRESH—Generates new decisions for all members in a segment.INCREMENTAL—Generates decisions only for the new members added to the segment after the last run. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionRequired. The name of the batch personalization decision. |

## Usage

PersnlBatchDecision provides details about refresh modes, model versions, and refresh states for specific market segments.
