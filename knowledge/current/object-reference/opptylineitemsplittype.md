---
title: "OpptyLineItemSplitType"
domain: object-reference
topic: opptylineitemsplittype
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:13.646Z
estimatedTokens: 893
keywords: [OpptyLineItemSplitType, opportunity, product, split, API, version, 58.0, later, Calls, Usage]
---

# OpptyLineItemSplitType

> Represents an opportunity product split type. This object is available
      in API version 58.0 and later.

# OpptyLineItemSplitType

Represents an opportunity product split type. This object is available in API version 58.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=object_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

describeSObjects(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesFilter, Group, SortDescriptionText description of the opportunity line item split type. Limit: 80 characters. |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe developer (API) name of the opportunity line item split type. |
| IsActive | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the opportunity line item split type is active (true) or not (false). The value of this field is inherited from the IsActive field of the parent OpportunitySplitType record. |
| IsTotalValidated | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the OpportunityLineItemSplit records associated with the OpportunityLineItem must have SplitPercent values that aggregate to 100% (true) or not (false). The value of this field is inherited from the IsTotalValidated field of the parent OpportunitySplitType record. |
| Language | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe language of the opportunity line item split type. |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionThe opportunity line item split type label. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. |
| OpportunitySplitTypeId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the parent OpportunitySplitType. Every OpptyLineItemSplitType must have a parent OpportunitySplitType. This field is a relationship field.Relationship NameOpportunitySplitTypeRelationship TypeLookupRefers ToOpportunitySplitType |
| SplitDataStatus | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe state of the asynchronous job to delete OpportunityLineItemSplit records when the associated OpptyLineItemSplitType record is deleted. Possible values are:DeletionFailed–The job failed the last time it ran.Ready–The job hasn't run or isn't running. OpportunityLineItemSplit records associated with the OpptyLineItemSplitType can be interacted with.ToBeDeleted–The job is running. |
| SplitEntity | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionName or ID of the entity that contains the field being split. In API version 58.0, this value is always OpportunityLineItem. |
| SplitField | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionName or ID of the field on OpportunityLineItem that is being split. If it's a standard field, then the value is the API name of the field. If it’s a custom field, the value is the custom field definition ID. |

## Usage

When an OpportunitySplitType has product splits enabled in Setup, then an OpptyLineItemSplitType record is created. For example, if there is an OpportunitySplitType record with a SplitField of Amount and product splits is enabled in Setup, then there is an OpptyLineItemSplitType record with a SplitField of TotalPrice (since the TotalPrice field rolls up to Amount).
