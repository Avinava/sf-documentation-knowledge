---
title: "ProductSvcCampaignGrpDef"
domain: mfg-api-devguide
topic: productsvccampaigngrpdef
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:56.096Z
estimatedTokens: 1735
keywords: [ProductSvcCampaignGrpDef, product, service, campaign, definitions, groups, attributes, origin, status, consequences, Helps, compliance, officers, define, scope]
---

# ProductSvcCampaignGrpDef

> Represents information about product service campaign definitions within
         groups based on attributes, such as the origin, status, or consequences of a campaign.
         Helps compliance officers define the scope and type of a product service campaign group
         before execution. This object is available in API version 65.0 and later.

# ProductSvcCampaignGrpDef

Represents information about product service campaign definitions within groups based on attributes, such as the origin, status, or consequences of a campaign. Helps compliance officers define the scope and type of a product service campaign group before execution. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ActualCompletionDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the tasks associated with the product service event are completed. |
| AdditionalInformation | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAdditional information about the product service campaign group definition. |
| ClaimCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe approximate number of claims raised for the product service event. |
| Classification | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe category of the product service, such as a recall mandated by the government or a recall initiated due to customer complaints. |
| CurrentImpact | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe current impact of the product service event. |
| CustomerContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe point of contact for all communication with the customer.This field is a relationship field.Relationship NameCustomerContactRefers ToUser |
| Description | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the product service campaign group definition. |
| ExpectedCompletionDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the tasks associated with the product service event are planned for completion. |
| ExternalDataSource | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe external data source where the product service group campaign definition is recorded. |
| ExternalId | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique identifier of the product service campaign group definition in an external system. |
| IncidentCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of incidents that have occurred for which a product service campaign needs to take place to prevent such incidences in the future, such as injuries. |
| InitiationDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the product service event is initiated. |
| InternalContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe point of contact for all communication with the manufacturer associated with a product service campaign.This field is a relationship field.Relationship NameInternalContactRefers ToUser |
| IsMajorRecall | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the recall event is major (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the product service campaign group definition. |
| PotentialRisks | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe potential risks on stakeholders, such as an automotive company or customers, that could arise due to the non-implementation of a product service campaign. |
| ReportedBy | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe agency that reported the product service event. |
| ReportingDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the product service event is reported by a relevant stakeholder. |
| ResolutionMeasures | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe measure taken to contain the product service event. |
| Severity | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe severity of the product service event, such as critical, high, medium, or low.Possible values are:CriticalHighLowMedium |
| SourceDocumentReference | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe document of reference from an external source. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe status of a product service campaign, such as new, open, withdrawn, or closed. |
| TotalImpactedUnitCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe total number of product units to be impacted by a product service campaign.This field is a calculated field. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of a product service campaign, such as a campaign for recall, upgrade or maintenance.Possible values are:MaintenanceRecallUpgrade |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ProductSvcCampaignGrpDefChangeEvent](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[ProductSvcCampaignGrpDefHistory](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- ProductSvcCampaignGrpDefChangeEvent (atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_associated_objects_change_event.htm)
- ProductSvcCampaignGrpDefHistory (atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_associated_objects_history.htm)
