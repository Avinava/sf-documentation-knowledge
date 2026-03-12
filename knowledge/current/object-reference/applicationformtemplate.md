---
title: "ApplicationFormTemplate"
domain: object-reference
topic: applicationformtemplate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:04.661Z
estimatedTokens: 843
keywords: [ApplicationFormTemplate, capture, application, metadata, template, tracking, processing, API, version, 59.0, later, Calls, Special, Access, Rules]
---

# ApplicationFormTemplate

> Represents the fields to capture application metadata as a template which is
         used in application tracking and processing. This object is available in API version
      59.0 and later.

# ApplicationFormTemplate

Represents the fields to capture application metadata as a template which is used in application tracking and processing. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available only with the EAndU Cloud Program Access permission set.

## Fields

| Field | Details |
| --- | --- |
| ApprovalFlowName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the flow that must be launched to approve the applications associated with the application form template. |
| ApplicationType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of application or template.Possible values are:ContractorEVCharger—EV ChargerEnergyEfficiency—Energy EfficiencyNewConnection—New ConnectionThe default value is NewConnection. |
| ApprovalLimitAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAmount up to which the approver has the authority to approve applications. |
| ApprovalFlowName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the flow that must be launched to approve the applications associated with the application form template. |
| ApproverId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe user who must approve the application payout.This field is a relationship field.Relationship NameApproverRelationship TypeLookupRefers ToUser |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the application form template. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the application form template. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ApplicationFormTemplateChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "HTML\" (New Window)")

Change events are available for the object.

[ApplicationFormTemplateFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "HTML\" (New Window)")

Feed tracking is available for the object.

[ApplicationFormTemplateHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[ApplicationFormTemplateOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[ApplicationFormTemplateShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.
