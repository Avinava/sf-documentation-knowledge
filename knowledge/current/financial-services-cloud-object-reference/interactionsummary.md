---
title: "InteractionSummary"
domain: financial-services-cloud-object-reference
topic: interactionsummary
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:30.881Z
estimatedTokens: 1202
keywords: [InteractionSummary, summary, interaction, including, confidentiality, API, version, 51.0, later, Calls, Associated, Objects]
---

# InteractionSummary

> Represents the summary of an interaction, including confidentiality
			information. This object is available in API version 51.0 and later.

# InteractionSummary

Represents the summary of an interaction, including confidentiality information. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the account related to the customer who attended the client interaction. |
| ConfidentialityType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the level of confidentiality of the information that's recorded in this interaction summary.Possible values are:ConfidentialPublic |
| InteractionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe client interaction related to the interaction summary. |
| InteractionPurpose | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the purpose of the client interaction.Possible values are:Deal ExecutionMeet and GreetQuarterly Check-In |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| MeetingNotes | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe detailed record of what transpired during the client interaction. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe title of the interaction summary, capturing the summary of the interaction. |
| NextSteps | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe next steps that were decided during the interaction. |
| Offering | TypemultipicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionThe offerings that were discussed in the client interaction.Possible values are:Debt Capital MarketsEquity Capital MarketsMergers and Acquisitions Advisory |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the record owner. |
| PartnerAccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the account related to the partner who attended the client interaction. |
| RelatedRecordId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the record such as an opportunity associated with a client interaction. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the status of the interaction summary.Possible values are:DraftPublished |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[InteractionSummaryFeed](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[InteractionSummaryHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[InteractionSummaryOwnerSharingRule](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[InteractionSummaryShare](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- InteractionSummaryFeed (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- InteractionSummaryHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
- InteractionSummaryOwnerSharingRule (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- InteractionSummaryShare (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm)
