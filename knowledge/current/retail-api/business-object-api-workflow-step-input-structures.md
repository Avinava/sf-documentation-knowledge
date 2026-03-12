---
title: "Business Object API Workflow Step Input Structures"
domain: retail-api
topic: business-object-api-workflow-step-input-structures
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:36.775Z
estimatedTokens: 5609
keywords: [Business, API, Workflow, Step, Input, Structures, technical]
---

# Business Object API Workflow Step Input Structures

> The following table provides technical details related to each workflow
        step.

# Business Object API Workflow Step Input Structures

The following table provides technical details related to each workflow step.

| Workflow Step Name | Record Type | Path | Required? | Description | Maximum Length (String) |
| --- | --- | --- | --- | --- | --- |
| handleAttachmentsForDerive2 | Boolean | .DeriveAttachments | FALSE | Boolean flag. If enabled, attachments will be derived, if false, attachments won’t be derived | NA |
| handleManualInputs | String | [*].KPI | TRUE | The name of the KPI for which the value must be set. | 80 |
| handleManualInputs | String | [*].Product | FALSE | Product ID(SFID or external ID) to set the KPI Value to. If not set, the KPI value is set as total for the promotion/tactic. | 260 |
| handleManualInputs | Number | [*].Value | TRUE | Numeric value. Value to set to the KPI. | NA |
| handleManualInputs2 | String | [*].KPI | TRUE | The name of the KPI for which the value must be set. | 80 |
| handleManualInputs2 | Number | [*].Value | TRUE | Numeric value. Value to set to the KPI. | NA |
| handleManualInputs2 | String | [*].Product | FALSE | Product ID(SFID or external ID) to set the KPI Value to. If not set, the KPI value is set as total for the promotion/tactic. | 260 |
| loadCategoryShareLO | String | .Id | TRUE | SFDC Id or External Id of the source promotion to be copied. | 40 |
| loadPromotionAttachmentsForCopy | String | .Id | TRUE | SFDC Id or External Id of the source promotion to be copied. | 40 |
| loadPromotionAttachmentsForCopy | Boolean | .CopyAttachments | FALSE | Boolean flag. If enabled, attachments will be loaded, if false, attachments won’t be loaded | NA |
| loadPromotionAttachmentsForCopy2 | String | .Id | TRUE | SFDC Id or External Id of the source promotion to be copied. | 40 |
| loadPromotionAttachmentsForCopy2 | Boolean | .CopyAttachments | FALSE | Boolean flag. If enabled, attachments will be loaded, if false, attachments won’t be loaded | NA |
| loadPromotionBOForCopy | String | .Id | TRUE | SFDC Id or External Id of the source promotion to be copied. | 40 |
| loadPromotionBOForCopy2 | String | .Id | TRUE | SFDC Id or External Id of the source promotion to be copied. | 40 |
| loadPromotionDefaults | String | .Id | FALSE | SFID or External Id of the promotion. | 40 |
| loadPromotionDefaults | String | .PromotionTemplate | TRUE | Name or SFID of the Promotion Template. | 40 |
| loadPromotionDefaults(update) | String | .PromotionTemplate | FALSE | Name or SID of the Promotion Template | 40 |
| loadPromotionDefaults(update) | String | .Id | TRUE | SFID or External Id of the promotion to be updated. | 40 |
| loadPromotionDefaults(update)2 | String | .PromotionTemplate | FALSE | Name or SID of the Promotion Template | 40 |
| loadPromotionDefaults(update)2 | String | .Id | TRUE | SFID or External Id of the promotion to be updated. | 40 |
| loadPromotionDefaults2 | String | .PromotionTemplate | TRUE | Name or SFID of the Promotion Template. | 40 |
| loadPromotionDefaults2 | String | .Id | FALSE | SFID or External Id of the promotion. | 40 |
| loadPromotionForDerive2 | String | .Id | TRUE | SFID or External Id of the promotion to be derived. | 40 |
| loadPromotionForDerive2 | String | .PromotionTemplate | TRUE | Name or SID of the Promotion Template to use for derivation. | 40 |
| loadTacticDefaults | String | .TacticTemplate | TRUE | Name or SFID of the tactic template. | 40 |
| loadTacticDefaults | String | .Id | FALSE | SFID or External Id of the tactic. | 40 |
| loadTacticDefaults(update) | String | .Id | TRUE | SFID or ExternalId of the tactic | 40 |
| loadTacticDefaults(update) | String | .TacticTemplate | FALSE | Name or SFID of the tactic template. | 40 |
| loadTacticDefaults(update)2 | String | .Id | TRUE | SFID or ExternalId of the tactic | 40 |
| loadTacticDefaults(update)2 | String | .TacticTemplate | FALSE | Name or SFID of the tactic template. | 40 |
| loadTacticDefaults2 | String | .TacticTemplate | TRUE | Name or SFID of the tactic template. | 50 |
| loadTacticDefaults2 | String | .Id | FALSE | SFID or External Id of the tactic. | 40 |
| loadTacticsLOForCopy | String | .Id | TRUE | SFDC Id or External Id of the source promotion to be copied. | 40 |
| loadTacticsLOForCopy2 | String | .Id | TRUE | SFDC Id or External Id of the source promotion to be copied. | 40 |
| mapPromotionValues | String | .Comment | FALSE | Comment | 255 |
| mapPromotionValues | String | .Slogan | TRUE | Slogan | 80 |
| mapPromotionValues(Update) | String | .Slogan | FALSE | Slogan | 80 |
| mapPromotionValues(Update) | String | .Comment | FALSE | Comment | 255 |
| mapPromotionValues(Update)2 | String | .Slogan | FALSE | Slogan | 80 |
| mapPromotionValues(Update)2 | String | .Comment | FALSE | Comment | 255 |
| mapPromotionValues2 | String | .Slogan | TRUE | Slogan | 80 |
| mapPromotionValues2 | String | .Comment | FALSE | Comment | 255 |
| mapPromotionValuesForCopy2 | String | .Slogan | FALSE | Slogan | 80 |
| mapTacticValues | String | .CompensationModel | FALSE | Compensation Model | 255 |
| mapTacticValues | Number | .Amount | FALSE | Tactic Amount | NA |
| mapTacticValues2 | String | .CompensationModel | FALSE | Compensation Model | 255 |
| mapTacticValues2 | Number | .Amount | FALSE | Tactic Amount | NA |
| movePromotionTimeframe | Number | .AddYears | FALSE | Amount of years to move the promotion timeframe. If not set, a default value of 1 will be used. | NA |
| movePromotionTimeframe2 | String | .InStoreDateFrom | FALSE | Promotion's new In Store Date From. If specified, all promotion dates will be shifted by the difference in days between the input Date and the Promotion current Date From date. | 10 |
| movePromotionTimeframe2 | Number | .AddYears | FALSE | Amount of years to move the promotion timeframe. If not set, a default value of 1 will be used. | NA |
| setProductFilter | String | .Criteria.Brand[*] | FALSE | The External Ids of manual brands that must be included in the promotion. | 255 |
| setProductFilter | String | .IncludedProducts[*] | FALSE | The External Ids of manual products that must be included. | 255 |
| setProductFilter | String | .Criteria.Subcategory[*] | FALSE | The External Ids of manual sub categories that must be included in the promotion. | 255 |
| setProductFilter | String | .Criteria.Category[*] | FALSE | The External Ids of manual categories that must be included in the promotion. | 255 |
| setProductFilter | String | .ExcludedProducts[*] | FALSE | The External Ids of manual products to be excluded. | 255 |
| setProductFilter | String | .Criteria.Flavor[*] | FALSE | The External Ids of manual flavors that must be included in the promotion. | 255 |
| setProductFilter | String | .Criteria.Package[*] | FALSE | The External Ids of manual packages that must be included in the promotion. | 255 |
| setProductFilter2 | String | .Criteria.Flavor[*] | FALSE | The External Ids of manual flavors that must be included in the promotion. | 255 |
| setProductFilter2 | String | .Criteria.Package[*] | FALSE | The External Ids of manual packages that must be included in the promotion. | 255 |
| setProductFilter2 | String | .IncludedProducts[*] | FALSE | The External Ids of manual products that must be included. | 255 |
| setProductFilter2 | String | .Criteria.Subcategory[*] | FALSE | The External Ids of manual sub categories that must be included in the promotion. | 255 |
| setProductFilter2 | String | .Criteria.Brand[*] | FALSE | The External Ids of manual brands that must be included in the promotion. | 255 |
| setProductFilter2 | String | .Criteria.Category[*] | FALSE | The External Ids of manual categories that must be included in the promotion. | 255 |
| setProductFilter2 | String | .ExcludedProducts[*] | FALSE | The External Ids of manual products to be excluded. | 255 |
| setPromotionAnchor | String | .PromotionTemplate | TRUE | Name or SFID of the Promotion Template. | 40 |
| setPromotionAnchor | String | .AnchorAccountSet | FALSE | Name or SFID of the customer set. | 40 |
| setPromotionAnchor | String | .Id | FALSE | SFDC Id or External Id of the source promotion to be copied. | 40 |
| setPromotionAnchor | String | .AnchorAccount | FALSE | SFID or External Id of the customer. | 40 |
| setPromotionAnchor(Update) | String | .Id | FALSE | SFDC Id or External Id of the source promotion to be copied. | 40 |
| setPromotionAnchor(Update) | String | .AnchorAccount | FALSE | SFID or External Id of the customer. | 40 |
| setPromotionAnchor(Update) | String | .AnchorAccountSet | FALSE | Name or SFID of the customer set. | 40 |
| setPromotionAnchor(Update) | String | .PromotionTemplate | FALSE | Name or SID of the Promotion Template | 40 |
| setPromotionAnchor(Update)2 | String | .Id | FALSE | SFDC Id or External Id of the source promotion to be copied. | 40 |
| setPromotionAnchor(Update)2 | String | .AnchorAccountSet | FALSE | Name or SFID of the customer set. | 40 |
| setPromotionAnchor(Update)2 | String | .PromotionTemplate | FALSE | Name or SID of the Promotion Template | 40 |
| setPromotionAnchor(Update)2 | String | .AnchorAccount | FALSE | SFID or External Id of the customer. | 40 |
| setPromotionAnchor2 | String | .AnchorAccount | FALSE | SFID or External Id of the customer. | 40 |
| setPromotionAnchor2 | String | .PromotionTemplate | TRUE | Name or SFID of the Promotion Template. | 40 |
| setPromotionAnchor2 | String | .AnchorAccountSet | FALSE | Name or SFID of the customer set. | 40 |
| setPromotionAnchor2 | String | .Id | FALSE | SFDC Id or External Id of the source promotion to be copied. | 40 |
| setPromotionAnchorForCopy2 | String | .AnchorAccount | FALSE | SFID or External Id of the customer. | 40 |
| setPromotionAnchorForCopy2 | String | .AnchorAccountSet | FALSE | Name or SFID of the customer set. | 40 |
| setPromotionAnchorForDerive2 | String | .AnchorAccount | TRUE | SFID or External Id of the customer. | 40 |
| setPromotionDates | String | .OrderDateThru | FALSE | Order Date Thru | 10 |
| setPromotionDates | String | .DateFrom | TRUE | Date | 10 |
| setPromotionDates | String | .DeliveryDateFrom | FALSE | Shipment Date From | 10 |
| setPromotionDates | String | .OrderDateFrom | FALSE | Order Date From | 10 |
| setPromotionDates | String | .CommitDate | FALSE | Commit Date | 10 |
| setPromotionDates | String | .PlacementDateFrom | FALSE | In-store Date From | 10 |
| setPromotionDates | String | .DeliveryDateThru | FALSE | Shipment Date Thru | 10 |
| setPromotionDates | String | .PlacementDateThru | FALSE | In-store Date Thru | 10 |
| setPromotionDates | String | .DateThru | TRUE | Date | 10 |
| setPromotionDates(update) | String | .OrderDateThru | FALSE | Promotion Order Date Thru | 10 |
| setPromotionDates(update) | String | .CommitDate | FALSE | Promotion Commit Date | 10 |
| setPromotionDates(update) | String | .PlacementDateFrom | FALSE | Promotion In-store Date From | 10 |
| setPromotionDates(update) | String | .DeliveryDateThru | FALSE | Promotion Shipment Date Thru | 10 |
| setPromotionDates(update) | String | .DeliveryDateFrom | FALSE | Promotion Shipment Date From | 10 |
| setPromotionDates(update) | String | .OrderDateFrom | FALSE | Promotion Order Date From | 10 |
| setPromotionDates(update) | String | .PlacementDateThru | FALSE | Promotion In-store Date Thru | 10 |
| setPromotionDates(update) | String | .DateFrom | FALSE | Promotion Date From | 10 |
| setPromotionDates(update) | String | .DateThru | FALSE | Promotion Date Thru | 10 |
| setPromotionDates(update)2 | String | .OrderDateFrom | FALSE | Promotion Order Date From | 10 |
| setPromotionDates(update)2 | String | .PlacementDateFrom | FALSE | Promotion In-store Date From | 10 |
| setPromotionDates(update)2 | String | .DeliveryDateThru | FALSE | Promotion Shipment Date Thru | 10 |
| setPromotionDates(update)2 | String | .CommitDate | FALSE | Promotion Commit Date | 10 |
| setPromotionDates(update)2 | String | .OrderDateThru | FALSE | Promotion Order Date Thru | 10 |
| setPromotionDates(update)2 | String | .DeliveryDateFrom | FALSE | Promotion Shipment Date From | 10 |
| setPromotionDates(update)2 | String | .PlacementDateThru | FALSE | Promotion In-store Date Thru | 10 |
| setPromotionDates(update)2 | String | .DateFrom | FALSE | Promotion Date From | 10 |
| setPromotionDates(update)2 | String | .DateThru | FALSE | Promotion Date Thru | 10 |
| setPromotionDates2 | String | .OrderDateThru | FALSE | Order Date Thru | 10 |
| setPromotionDates2 | String | .OrderDateFrom | FALSE | Order Date From | 10 |
| setPromotionDates2 | String | .PlacementDateThru | FALSE | In-store Date Thru | 10 |
| setPromotionDates2 | String | .DeliveryDateThru | FALSE | Shipment Date Thru | 10 |
| setPromotionDates2 | String | .DateThru | TRUE | Date | 10 |
| setPromotionDates2 | String | .DateFrom | TRUE | Date | 10 |
| setPromotionDates2 | String | .PlacementDateFrom | FALSE | In-store Date From | 10 |
| setPromotionDates2 | String | .CommitDate | FALSE | Commit Date | 10 |
| setPromotionDates2 | String | .DeliveryDateFrom | FALSE | Shipment Date From | 10 |
| setPromotionTemplateForDerive2 | String | .PromotionTemplate | TRUE | Name or SID of the Promotion Template to use for derivation. | 40 |
| setTacticConditionCreationDefinitions | String | [*].AdditionalKPI2 | FALSE | KPI definition used to provide additional information for the condition. | 80 |
| setTacticConditionCreationDefinitions | String | [*].AdditionalKPI3 | FALSE | KPI definition used to provide additional information for the condition. | 80 |
| setTacticConditionCreationDefinitions | String | [*].AdditionalKPI1 | FALSE | KPI definition used to provide additional information for the condition. | 80 |
| setTacticConditionCreationDefinitions | Boolean | [*].DuplicateCheck | FALSE | Determines whether the system should check for duplicate internal conditions. | NA |
| setTacticConditionCreationDefinitions | String | [*].Maintenance | FALSE | Defines the action on the conditions generated by the tactic. | 255 |
| setTacticConditionCreationDefinitions | String | [*].MeasureCode | FALSE | Defines the override measure code used to generate the condition. | 4 |
| setTacticConditionCreationDefinitions | String | [*].ChangeRule | FALSE | Determines the rule to handle past conditions. | 255 |
| setTacticConditionCreationDefinitions | String | [*].ProductLevel | FALSE | Defines the product level at which condition is generated. | 255 |
| setTacticConditionCreationDefinitions | String | [*].SourceKPI | TRUE | KPI Definition used for generating conditions. | 80 |
| setTacticConditionCreationDefinitions | String | [*].AllowedProductLevels | FALSE | When product level is empty in the input, the system considers only the levels allowed by this field while automatically determining the product level at which conditions are generated. When empty, the system considers all product levels as valid product levels for condition generation. | 160 |
| setTacticConditionCreationDefinitions | String | [*].Targets | FALSE | Defines the targets to which the conditions are written. | 40 |
| setTacticConditionCreationDefinitions(update) | String | [*].SourceKPI | FALSE | KPI Definition used for generating conditions. | 80 |
| setTacticConditionCreationDefinitions(update) | String | [*].AdditionalKPI1 | FALSE | KPI definition used to provide additional information for the condition. | 80 |
| setTacticConditionCreationDefinitions(update) | String | [*].AdditionalKPI3 | FALSE | KPI definition used to provide additional information for the condition. | 80 |
| setTacticConditionCreationDefinitions(update) | String | [*].Targets | FALSE | Defines the targets to which the conditions are written. | 40 |
| setTacticConditionCreationDefinitions(update) | String | [*].AdditionalKPI2 | FALSE | KPI definition used to provide additional information for the condition. | 80 |
| setTacticConditionCreationDefinitions(update) | String | [*].AllowedProductLevels | FALSE | When product level is empty in the input, the system considers only the levels allowed by this field while automatically determining the product level at which conditions are generated. When empty, the system considers all product levels as valid product levels for condition generation. | 160 |
| setTacticConditionCreationDefinitions(update) | String | [*].ProductLevel | FALSE | Defines the product level at which condition is generated. | 255 |
| setTacticConditionCreationDefinitions(update) | String | [*].ChangeRule | FALSE | Determines the rule to handle past conditions. | 255 |
| setTacticConditionCreationDefinitions(update) | String | [*].MeasureCode | FALSE | Defines the override measure code used to generate the condition. | 4 |
| setTacticConditionCreationDefinitions(update) | String | [*].Maintenance | FALSE | Defines the action on the conditions generated by the tactic. | 255 |
| setTacticConditionCreationDefinitions(update) | Boolean | [*].DuplicateCheck | FALSE | Determines whether the system should check for duplicate internal conditions. | NA |
| setTacticConditionCreationDefinitions(update) | String | [*].UniqueMeasureCode | FALSE | Concatenation of Tactic Id and Editable code of Source KPI Definition. Alternatively, this field may hold SFID of TCCD. | 22 |
| setTacticConditionCreationDefinitions(update)2 | String | [*].Maintenance | FALSE | Defines the action on the conditions generated by the tactic. | 255 |
| setTacticConditionCreationDefinitions(update)2 | Boolean | [*].DuplicateCheck | FALSE | Determines whether the system should check for duplicate internal conditions. | NA |
| setTacticConditionCreationDefinitions(update)2 | String | [*].UniqueMeasureCode | FALSE | Concatenation of Tactic Id and Editable code of Source KPI Definition. Alternatively, this field may hold SFID of TCCD. | 22 |
| setTacticConditionCreationDefinitions(update)2 | String | [*].AdditionalKPI1 | FALSE | KPI definition used to provide additional information for the condition. | 80 |
| setTacticConditionCreationDefinitions(update)2 | String | [*].AdditionalKPI3 | FALSE | KPI definition used to provide additional information for the condition. | 80 |
| setTacticConditionCreationDefinitions(update)2 | String | [*].Targets | FALSE | Defines the targets to which the conditions are written. | 40 |
| setTacticConditionCreationDefinitions(update)2 | String | [*].AdditionalKPI2 | FALSE | KPI definition used to provide additional information for the condition. | 80 |
| setTacticConditionCreationDefinitions(update)2 | String | [*].AllowedProductLevels | FALSE | When product level is empty in the input, the system considers only the levels allowed by this field while automatically determining the product level at which conditions are generated. When empty, the system considers all product levels as valid product levels for condition generation. | 160 |
| setTacticConditionCreationDefinitions(update)2 | String | [*].SourceKPI | FALSE | KPI Definition used for generating conditions. | 80 |
| setTacticConditionCreationDefinitions(update)2 | String | [*].ProductLevel | FALSE | Defines the product level at which condition is generated. | 255 |
| setTacticConditionCreationDefinitions(update)2 | String | [*].ChangeRule | FALSE | Determines the rule to handle past conditions. | 255 |
| setTacticConditionCreationDefinitions(update)2 | String | [*].MeasureCode | FALSE | Defines the override measure code used to generate the condition. | 4 |
| setTacticConditionCreationDefinitions2 | Boolean | [*].DuplicateCheck | FALSE | Determines whether the system should check for duplicate internal conditions. | NA |
| setTacticConditionCreationDefinitions2 | String | [*].Maintenance | FALSE | Defines the action on the conditions generated by the tactic. | 255 |
| setTacticConditionCreationDefinitions2 | String | [*].ChangeRule | FALSE | Determines the rule to handle past conditions. | 255 |
| setTacticConditionCreationDefinitions2 | String | [*].ProductLevel | FALSE | Defines the product level at which condition is generated. | 255 |
| setTacticConditionCreationDefinitions2 | String | [*].SourceKPI | TRUE | KPI Definition used for generating conditions. | 80 |
| setTacticConditionCreationDefinitions2 | String | [*].AllowedProductLevels | FALSE | When product level is empty in the input, the system considers only the levels allowed by this field while automatically determining the product level at which conditions are generated. When empty, the system considers all product levels as valid product levels for condition generation. | 160 |
| setTacticConditionCreationDefinitions2 | String | [*].AdditionalKPI2 | FALSE | KPI definition used to provide additional information for the condition. | 80 |
| setTacticConditionCreationDefinitions2 | String | [*].Targets | FALSE | Defines the targets to which the conditions are written. | 40 |
| setTacticConditionCreationDefinitions2 | String | [*].AdditionalKPI3 | FALSE | KPI definition used to provide additional information for the condition. | 80 |
| setTacticConditionCreationDefinitions2 | String | [*].AdditionalKPI1 | FALSE | KPI definition used to provide additional information for the condition. | 80 |
| setTacticConditionCreationDefinitions2 | String | [*].MeasureCode | FALSE | Defines the override measure code used to generate the condition. | 4 |
| setTacticDates | String | .ShipmentDateThru | FALSE | Shipment Date Thru | 10 |
| setTacticDates | String | .DateThru | FALSE | Date Thru | 10 |
| setTacticDates | String | .DateFrom | FALSE | Date From | 10 |
| setTacticDates | String | .InStoreDateThru | FALSE | In Store Date Thru | 10 |
| setTacticDates | String | .InStoreDateFrom | FALSE | In Store Date From | 10 |
| setTacticDates | String | .ShipmentDateFrom | FALSE | Shipment Date From | 10 |
| setTacticDates2 | String | .InStoreDateFrom | FALSE | In Store Date From | 10 |
| setTacticDates2 | String | .InStoreDateThru | FALSE | In Store Date Thru | 10 |
| setTacticDates2 | String | .DateFrom | FALSE | Date From | 10 |
| setTacticDates2 | String | .ShipmentDateThru | FALSE | Shipment Date Thru | 10 |
| setTacticDates2 | String | .ShipmentDateFrom | FALSE | Shipment Date From | 10 |
| setTacticDates2 | String | .DateThru | FALSE | Date Thru | 10 |
| movePromotionTimeframeDerive2 | String | .InStoreDateFrom | FALSE | Promotion's new In Store Date From. If specified, all promotion dates will be shifted by the difference in days between the input Date and the Promotion current Date From date. | 10 |
