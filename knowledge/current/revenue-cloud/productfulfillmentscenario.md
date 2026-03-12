---
title: "ProductFulfillmentScenario"
domain: revenue-cloud
topic: productfulfillmentscenario
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:11.173Z
estimatedTokens: 994
keywords: [ProductFulfillmentScenario, Represents, link, between, product, corresponding, group, fulfillment, steps, that's, necessary, fulfill, product., API, version, 61.0, later., Supported, Calls, Fields]
---

# ProductFulfillmentScenario

> Represents a link between a product and the corresponding group of
         fulfillment steps that's necessary to fulfill that product. This object is available
      in API version 61.0 and later.

# ProductFulfillmentScenario

Represents a link between a product and the corresponding group of fulfillment steps that's necessary to fulfill that product. This object is available in API version 61.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Action | TypemultipicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionFor internal use only.Valid values are:AddAmendCancelNoChangeRenew |
| ConditionData | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe condition for executing the product fulfillment scenario. The condition is defined as a rule or a set of rules in JSON format. This field is available in API version 66.0 and later. |
| FulfillmentStepDefnGroupId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe fulfillment step definition group associated with the product fulfillment scenario.This field is a relationship field.Relationship NameFulfillmentStepDefnGroupRelationship TypeLookupRefers ToFulfillmentStepDefinitionGroup |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionFor internal use only. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionFor internal use only. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the product fulfillment scenario. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionFor internal use only.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ProductClassificationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product classification associated with the product fulfillment scenario.This field is a relationship field.Relationship NameProductClassificationRelationship TypeLookupRefers ToProductClassification |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Sort, Update, Nillable (Available in API version 64.0 and later)DescriptionThe product associated with the product fulfillment scenario.This field is a relationship field.Relationship NameProductRelationship TypeLookupRefers ToProduct2 |
| SourceClassIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe source classification entity in the product fulfillment scenario. This field can store a Salesforce Product Class ID or an external identifier. This field is available in API version 65.0 and later. |
| SourceIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe source entity in the product fulfillment scenario. This field can store a Salesforce product ID or an external identifier. This field is available in API version 65.0 and later. |
| UsageType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionName of the usage type. This field is available in API version 66.0 and later.Possible values are:FulfillmentGenericInsuranceRuleAction—Insurance Rule ActionIntegrationOrchestrator—Integration OrchestratorStageManagement—Stage ManagementThe default value is Fulfillment. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ProductFulfillmentScenarioShare](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- ProductFulfillmentScenarioShare (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_share.htm)
