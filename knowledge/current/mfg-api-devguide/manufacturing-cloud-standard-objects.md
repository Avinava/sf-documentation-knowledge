---
title: "Manufacturing Cloud Standard Objects"
domain: mfg-api-devguide
topic: manufacturing-cloud-standard-objects
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:55.224Z
estimatedTokens: 8818
keywords: [Manufacturing, Cloud, Standard, Objects, data, model, manage, sales, agreements, account, forecasts, business, negotiations, planning, integrated]
---

# Manufacturing Cloud Standard Objects

> Manufacturing Cloud data model provides objects and fields to create and manage sales
    agreements and account forecasts. Use the objects for business negotiations and planning, and
    get an integrated sales experience.

# Manufacturing Cloud Standard Objects

Manufacturing Cloud data model provides objects and fields to create and manage sales agreements and account forecasts. Use the objects for business negotiations and planning, and get an integrated sales experience.

Manufacturing Cloud is available in Lightning Experience.

Available in: Enterprise, Unlimited, and Developer Editions.

-   **[AccountForecast](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_accountforecast.htm)**
    Represents the rolling forecast record of a particular account. The forecast is prepared using data directly from sales agreements, orders, and opportunities. This object is available in API version 47.0 and later.
-   **[AccountForecastAdjustment](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_accountforecastadjustment.htm)**
    Represents the manual adjustments made to forecast values for a particular account. This object is available in API version 47.0 and later.
-   **[AccountForecastPeriodMetric](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_accountforecastperiodmetric.htm)**
    Represents records of account metrics which vary by period but are not specific for a product. This object is available in API version 47.0 and later.
-   **[AccountProductForecast](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_accountproductforecast.htm)**
    Represents the cumulative values for planned quantities, opportunities, and orders of a sales agreement for a given product across all periods in that rolling time period. This object is available in API version 47.0 and later.
-   **[AccountProductPeriodForecast](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_accountproductperiodforecast.htm)**
    Represents the quantity and revenue information of opportunities, sales agreements, orders, and resultant forecasted quantities for a product in a particular time period of the forecast rolling period. Other than the fields AdjustedForecastQuantity and AdjustedForecastRevenue, no other fields of this object can be updated. This object is available in API version 47.0 and later.
-   **[AcctMgrPeriodicTargetDstr](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/manufacturing_standard_object_account_manager_periodic_target_distribution.htm)**
    Represents the target value of each period of an account manager target. It is a foreign key to either an account manager target and an account manager target distribution. It has twelve fields for periods and twelve corresponding fields to hold the target value. This object is available in API version 49.0 and later.
-   **[AcctMgrTarget](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/manufacturing_standard_object_account_manager_target.htm)**
    Represents a target created by an account manager. It stores the fiscal year, measure, target value, start date, end date, and assignment information of an account manager target. This object is available in API version 49.0 and later.
-   **[AcctMgrTargetDstr](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/manufacturing_standard_object_account_manager_target_distribution.htm)**
    Represents the account, product, and price book associated to an account manager target. It is a child object of the [AcctMgrTarget](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/manufacturing_standard_object_account_manager_target.htm "Represents a target created by an account manager. It stores the fiscal year, measure, target value, start date, end date, and assignment information of an account manager target. This object is available in API version 49.0 and later.") object. This object is available in API version 49.0 and later.
-   **[AcctMgrTargetMeasure](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/manufacturing_standard_object_account_manager_target_measure.htm)**
    Represents the type of measure for an account manager target. This object is a dynamic pick list table, which is referenced in account manager target. It is available in API version 49.0 and later.
-   **[AdvAcctForecastAdjPeriod](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_advacctforecastadjperiod.htm)**
    Represents details about the adjustment period of the advanced account forecast values. This object is available in API version 53.0 and later.
-   **[AdvAcctForecastDimension](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_advacctforecastdimension.htm)**
    Represents information about the dimensions selected for an advanced account forecast set. This object is available in API version 53.0 and later.
-   **[AdvAcctForecastDimSource](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_advacctforecastdimsource.htm)**
    Represents information about the dimensions that can be used by advanced account forecast sets to generate advanced account forecast records. This object is available in API version 53.0 and later.
-   **[AdvAcctFrcstDisplayGroup](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_advacctfrcstdisplaygroup.htm)**
    Represents information about the groups for the advanced account forecast set measures or dimensions. This object is available in API version 54.0 and later.
-   **[AdvAcctFrcstDplyGroupItem](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_advacctfrcstdplygroupitem.htm)**
    Represents information about the items associated with a display group for an advanced account forecast set. This object is available in API version 54.0 and later.
-   **[AdvAccountForecastFact](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_advaccountforecastfact.htm)**
    Represents information about the generated advanced account forecast records. This object is available in API version 53.0 and later.
-   **[AdvAcctForecastFactAdj](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_advacctforecastfactadj.htm)**
    Represents information about adjustments made to advanced account forecast fact records. This object is available in API version 53.0 and later.
-   **[AdvAcctForecastMeasureDef](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_advacctforecastmeasuredef.htm)**
    Represents information about the measures to be displayed in the advanced account forecasts grid for the forecast set. This object is available in API version 53.0 and later.
-   **[AdvAccountForecastPeriod](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_advaccountforecastperiod.htm)**
    Represents information about the periods for which advanced account forecasting is applied. This object is available in API version 53.0 and later.
-   **[AdvAcctForecastPeriodGroup](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_advacctforecastperiodgroup.htm)**
    Represents information about advanced account forecast period records. This is the parent object of all the related advanced account forecast period records. This object is available in API version 53.0 and later.
-   **[AdvAccountForecastSet](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_advaccountforecastset.htm)**
    Represents a collection of fields to set up an advanced account forecast set. This object is available in API version 53.0 and later.
-   **[AdvAcctForecastSetPartner](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_advacctforecastsetpartner.htm)**
    Represents a junction between an advanced account forecast set and an account. This object is available in API version 53.0 and later.
-   **[AdvAcctForecastSetUse](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_advacctforecastsetuse.htm)**
    Represents a junction between an advanced account forecast set and another object whose record serves as the context for generating forecasts. For example, a manufacturing program or a Sustainability Cloud object’s record can be the context for generating forecasts. This object is available in API version 55.0 and later.
-   **[AssetAccountParticipant](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_assetaccountparticipant.htm)**
    Represents a junction between the Asset and Account objects describing the association between a participating account and an asset. This object is available in API version 59.0 and later.
-   **[AssetContactParticipant](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_assetcontactparticipant.htm)**
    Represents a junction between the Asset and Contact objects describing the association between a participating contact and an asset. This object is available in API version 59.0 and later.
-   **[AssetMilestone](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_assetmilestone.htm)**
    Represents the key events in the lifecycle of an asset, such as manufacturing, registration, or resale. This object is available in API version 58.0 and later.
-   **[AssetWarranty](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_assetwarranty.htm)**
    Defines the warranty terms applicable to an asset along with any exclusions and extensions. This object is available in Manufacturing Cloud in API version 55.0 and later.
-   **[Claim](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_claim.htm)**
    Represents a warranty Claim submitted by a partner to a manufacturer, or a supplier recovery claim submitted by the manufacturer to a supplier. This object is available in Manufacturing Cloud in API version 58.0 and later.
-   **[ClaimCoverage](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_claimcoverage.htm)**
    Represents a causal part in a defective asset that requires repair or replacement. This object is available in Manufacturing Cloud in API version 58.0 and later.
-   **[ClaimCoveragePaymentDetail](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_claimcoveragepaymentdetail.htm)**
    Represents the claim coverage amount that must be paid to a claimant for a part replaced or replaced or a labor service performed to rectify a causal part in a defective asset. This object is available in Manufacturing Cloud in API version 58.0 and later.
-   **[ClaimItem](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_claimitem.htm)**
    Represents a defective asset that requires repair or replacement. This object is available in Manufacturing Cloud in API version 58.0 and later.
-   **[ClaimParticipant](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_claimparticipant.htm)**
    A junction object that associates the Claim object with the Account object. This object represents the participants of a claim. This object is available in Manufacturing Cloud in API version 58.0 and later.
-   **[CodeSet](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_codeset.htm)**
    Represents various industry defined codes in the context of their systems and versions of those systems. This object is available in Manufacturing Cloud in API version 58.0 and later.
-   **[CodesetRelationship](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_codesetrelationship.htm)**
    Represents a relationship between a codeset and its related codeset. For example, a labor code associated with a fault code. This object is available in Manufacturing Cloud in API version 58.0 and later.
-   **[EngagementAttendee](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_engagement_attendee.htm)**
    Represents information about an attendee of an engagement. For example, when a customer initiates an engagement interaction by calling a service representative to inquire about an insurance claim, this object stores information about the customer and the service representative. This object is available in API version 55.0 and later
-   **[EngagementInteraction](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_engagement_interaction.htm)**
    Represents information about an interaction between a service representative or any other specialist in an organization and the organization’s customer. Engagement interactions can be initiated through communication channels and can cover one or more topics. For example, a customer can initiate an engagement interaction by calling a service representative to inquire about an insurance claim. This object is available in API version 55.0 and later.
-   **[Fleet](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_fleet.htm)**
    Represents a group of assets used in commercial, service, or transport operations in the manufacturing industry. This object is available in API version 59.0 and later.
-   **[FleetAsset](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_fleetasset.htm)**
    Represents the relationship between an asset and the fleet to which it belongs. This object is available in API version 59.0 and later.
-   **[FleetParticipant](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_fleetparticipant.htm)**
    Represents the relationship between a fleet and a participant, such as an account, a contact, or a user. This object is available in API version 59.0 and later.
-   **[EngagementTopic](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_engagement_topic.htm)**
    Represents information about the topics discussed by a customer and other attendees during an engagement. For example, when a customer initiates an engagement interaction by calling a service representative to inquire about an insurance claim, the topic of the engagement is Claim. This object is available in API version 55.0 and later.
-   **[GnrcVstKeyPerformanceInd](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/mfg_sforce_api_objects_gnrcvstkeyperformanceind.htm)**
    Represents the key performance indicators that can be recorded while performing a task during a visit. You can compare the expected and actual metric values with the key performance indicator records. This object is available in Manufacturing Cloud in API version 56.0 and later.
-   **[GenericVisitTask](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/mfg_sforce_api_objects_genericvisittask.htm)**
    Represents information about a task that can be performed during a visit. This object is available in Manufacturing Cloud in API version 56.0 and later.
-   **[GenericVisitTaskContext](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/mfg_sforce_api_objects_genericvisittaskcontext.htm)**
    Represents the context or purpose for a generic visit task. This object is available in Manufacturing Cloud in API version 56.0 and later.
-   **[GnrcVstTaskContextRelation](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/mfg_sforce_api_objects_gnrcvsttaskcontextrelation.htm)**
    Represents common attributes used for a visit task and a visit task context. This object is available in Manufacturing Cloud in API version 56.0 and later.
-   **[InventoryCntSerializedProdt](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_inventorycntserializedprodt.htm)**
    Represents a serialized product in an inventory count. This object is available in API version 63.0 and later.
-   **[InventoryCountAssessment](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_inventorycountassessment.htm)**
    Represents an inventory count performed at a location. This object is available in API version 63.0 and later.
-   **[InventoryCountPlan](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_inventorycountplan.htm)**
    Represents a plan to count inventory at a location. This object is available in API version 63.0 and later.
-   **[InventoryCountPlanItem](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_inventorycountplanitem.htm)**
    Represents a product in an inventory plan. Inventory Count Plan Item is the child object of Inventory Count Plan. This object is available in API version 63.0 and later.
-   **[InventoryCountProductItem](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_inventorycountproductitem.htm)**
    Represents the inventory count of a product at a location. Inventory Count Product Item is a child object of Inventory Count. This object is available in API version 63.0 and later.
-   **[InventoryCntProdtBatchItem](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_inventorycntprodtbatchitem.htm)**
    Represents the inventory count of a batch of a product at a location. This object is available in API version 55.0 and later.
-   **[InventoryReplenishmentPolicy](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_inventoryreplenishmentpolicy.htm)**
    Represents a policy for replenishing inventory when the inventory quantity reaches a minimum level. This object is available in API version 63.0 and later.
-   **[ManufacturingProgram](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_manufacturingprogram.htm)**
    Represents information about a manufacturing program. For example, Verican X program for Verican Account to manufacture auto components for their upcoming concept vehicle, staring from 01-Jan-2022 and valid until 01-Dec-2024. This object is available in API version 55.0 and later.
-   **[MfgProgramCpntFrcstFact](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_mfgprogramcpntfrcstfact.htm)**
    Represents information about the generated manufacturing program component forecast records. This object is available in API version 55.0 and later.
-   **[MfgProgramForecastFact](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_mfgprogramforecastfact.htm)**
    Represents information about the generated manufacturing program forecast records. This object is available in API version 55.0 and later.
-   **[MfgProgramTemplate](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_mfgprogramtemplate.htm)**
    Represents information about the templates associated with a manufacturing program. This object is available in API version 55.0 and later.
-   **[MfgPgmCpntFrcstFactOpptySchd](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_mfgpgmcpntfrcstfactopptyschd.htm)**
    Represents a junction between the forecast and opportunity line item schedule objects, providing details on the relationship between forecast data and corresponding sales order schedules. This object is available in API version 55.0 and later.
-   **[MfgProgramTemplateItem](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_mfgprogramtemplateitem.htm)**
    Represents information about the transformation type associated with a manufacturing program template. This object is available in API version 55.0 and later.
-   **[MfgProgramVariantFrcstFact](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_mfgprogramvariantfrcstfact.htm)**
    Represents information about the generated manufacturing program product variant forecast records. This object is available in API version 55.0 and later.
-   **[ProductConsumed](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_productconsumed.htm)**
    Represents an item from your product inventory that was used to complete a work order or work order line item. This object is available in API version 60.0 and later.
-   **[ProductConsumedState](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_productconsumedstate.htm)**
    Represents an action taken to associate a serialized product with a product transfer. The new state is a result of the action. A product transfer state record is created when serialized products are attached to the product transfer. This object is available in API version 60.0 and later.
-   **[ProductFaultCode](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_productfaultcode.htm)**
    Represents a relationship between a product or product family and the fault code. This object is available in API version 58.0 and later.
-   **[ProductInventoryBatchSearchableField](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_productinventorybatchsearchfield.htm)**
    Represents production batch data used for inventory search, including batch item details for a specific location. This data serves as the basis for Criteria-Based and Filter Search, which combines batch details with standard inventory dimensions. This object is available in API version 47.0 and later.
-   **[ProductInvSearchableField](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_productinvsearchablefield.htm)**
    Represents a dataset on inventory information that's the basis for searching product inventory. Contains multiple fields from Product Item and related objects. This object is available in API version 62.0 and later.
-   **[ProductItem](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_productitem.htm)**
    Represents the stock of a product at a particular inventory location, such as a warehouse or a distribution lot. Product item records represent your inventory. A product item is associated with an inventory location and stores the quantity of products at that location. This object is available in API version 60.0 and later.
-   **[ProductItemTransaction](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_productitemtransaction.htm)**
    Represents an action taken on a product item. Product item transactions track when a product is consumed, replenished, adjusted, or transferred. Product item transactions are auto-generated records that specify the quantity of products impacted by the action. This object is available in API version 60.0 and later.
-   **[ProductLaborCode](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_productlaborcode.htm)**
    Represents a junction between the labor code that's applicable to a product or product family and the required standard effort. This object is available in API version 58.0 and later.
-   **[ProductRelatedMaterial](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_productrelatedmaterial.htm)**
    Represents information about the components of a product. This object is available in API version 55.0 and later.
-   **[ProductRequest](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_productrequest.htm)**
    Represents a request or an order for products to and from specific inventory locations. This object is available in API version 60.0 and later.
-   **[ProductRequestLineItem](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_productrequestlineitem.htm)**
    Represents a product that’s requested as a part of a product request. Product request line items are components of product requests. Each line item is associated with a specific product being requested. This object is available in API version 60.0 and later.
-   **[ProductRequired](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_productrequired.htm)**
    Represents a product that is needed to complete a work order or work order line item. This object is available in API version 60.0 and later.
-   **[ProductRqmtSpec](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_productrqmtspec.htm)**
    Defines a complete set of requirements. It captures key information such as the associated Account and Contact, tracks its overall lifecycle status, and acts as the parent for all related requirement items and their versions.
-   **[ProductRqmtSpecItem](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_productrqmtspecitem.htm)**
    Represents a specific and measurable requirement within a requirement specification for a requested product. Defines what must be delivered and how to verify its fulfilment.
-   **[ProductRqmtSpecVersion](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_productrqmtspecversion.htm)**
    Represents a specific, numbered snapshot of a Requirement Specification at a particular time, outlining the purpose, scope, constraints, and validation methods.
-   **[ProductServiceCampaign](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_productservicecampaign.htm)**
    Represents a set of activities to be performed for a product service campaign. For example, a recall of products due to potential safety hazards or an upgrade of products to comply with legal regulations. This object is available in API version 61.0 and later.
-   **[ProductServiceCampaignItem](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_productservicecampaignitem.htm)**
    Represents an item, such as an asset or a serialized product, that’s included in a product service campaign. This object is available in API version 61.0 and later.
-   **[ProductSvcCampaignDef](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_productsvccampaigndef.htm)**
    Represents information about the product or part that is impacted in a product service campaign. Stores the granular details related to product faults, facilitating efficient execution of the product service campaign. This object is available in API version 65.0 and later.
-   **[ProductSvcCampaignGrpDef](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_productsvccampaigngrpdef.htm)**
    Represents information about product service campaign definitions within groups based on attributes, such as the origin, status, or consequences of a campaign. Helps compliance officers define the scope and type of a product service campaign group before execution. This object is available in API version 65.0 and later.
-   **[ProdtSvcCmpnGrpDefCausalItm](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_prodtsvccmpngrpdefcausalitm.htm)**
    Represents information about the impacted item that caused the service campaign to be initiated, such as an airbag that needs to be repaired or replaced. Stores the granular details related to the causal item, facilitating efficient execution of the product service campaign. This object is available in API version 65.0 and later.
-   **[ProdtSvcCmpnGrpDefPtnr](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_prodtsvccmpngrpdefptnr.htm)**
    Represents information about the coordinating partner, such as a supplier or a distributor, that needs to be communicated regarding a particular product service campaign. Stores the granular details related to the partner, such as the channel of communication with them, facilitating efficient execution of the product service campaign. This object is available in API version 65.0 and later.
-   **[ProdtSvcCmpnDefPtnrInv](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_prodtsvccmpndefptnrinv.htm)**
    Represents information about the partner-held inventory of the items that are impacted by a product service campaign. Stores the granular details, such as inventory status and impacted unit count, facilitating simplified tracking and efficient execution of the product service campaign. This object is available in API version 65.0 and later.
-   **[ProdtSvcCmpnDefRelaCausalItm](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_prodtsvccmpndefrelacausalitm.htm)**
    Represents information about the cause associated with a product service campaign definition. Helps to efficiently identify and map faulty parts to the products that need to be repaired or replaced through the product service campaign. This object is available in API version 65.0 and later.
-   **[ProdtSvcCmpnPreferredPartner](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_prodtsvccmpnpreferredpartner.htm)**
    Represents information about the most appropriate partner to execute a product service campaign within a specific geographic area. Helps to map and allocate service providers to minimize costs and turnaround time,facilitating efficient execution of the product service campaign. This object is available in API version 65.0 and later.
-   **[ProdtSvcCmpnWorkType](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_prodtsvccmpnworktype.htm)**
    Represents information about the eligible work types that can be associated with a product service campaign. Helps to identify and track the work types related to the impacted items, facilitating efficient execution of the product service campaign. This object is available in API version 65.0 and later.
-   **[ProductTransfer](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_producttransfer.htm)**
    Represents the transfer or the movement of a product item between two inventory locations. This object is available in API version 60.0 and later.
-   **[ProductTransferState](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_producttransferstate.htm)**
    Represents an action taken to associate a serialized product with a product transfer. The new state is a result of the action. A product transfer state record is created when serialized products are attached to the product transfer. This object is available in API version 60.0 and later.
-   **[ProductWarrantyTerm](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_productwarrantyterm.htm)**
    Defines the relationship between a product or product family and a warranty term. This object is available in Manufacturing Cloud in API version 55.0 and later.
-   **[ReturnOrder](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_returnorder.htm)**
    Represents the repair, return, or recall of product items. This object is available in API version 60.0 and later.
-   **[ReturnOrderLineItem](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_returnorderlineitem.htm)**
    Represents a product that is returned, recalled, or repaired as part of a return order. This object is available in API version 60.0 and later.
-   **[SalesAgreement](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_salesagreement.htm)**
    Represents a long-term agreement between a buyer and a seller to negotiate price and volume of products.This object is available in API version 47.0 and later.
-   **[SalesAgreementProduct](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_salesagreementproduct.htm)**
    Represents the total quantity or amount and the default pricing information of a product or category across the total time period of the sales agreement.This object is available in API version 47.0 and later.
-   **[SalesAgreementProdSchdAdj](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_salesagreementprodschdadjustment.htm)**
    Represents the manual adjustments made to metric values for a sales agreement product schedule. This object is available in API version 47.0 and later.
-   **[SalesAgreementProductSchedule](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_salesagreementproductschedule.htm)**
    Represents the quantity or amount and the pricing information of a product or category for a particular schedule of the sales agreement. This object is available in API version 47.0 and later.
-   **[SalesAgreeProductAttribute](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_salesagreeproductattribute.htm)**
    Represents a virtual object that stores the key-value pairs for attributes of sales agreement products. This object is available in API version 60.0 and later.
-   **[SalesContractLine](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_salescontractline.htm)**
    Stores a contract's product information, including price, quantity, and components covered. This object is available in API version 59.0 and later.
-   **[SampleRequest](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_samplerequest.htm)**
    Represents a request for product samples, including customer account details, request date and status.
-   **[SampleRequestItem](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_samplerequestitem.htm)**
    Represents information on items associated with a sample request, including details such as product, custom specifications, quantity and price.
-   **[SerializedProduct](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_serializedproduct.htm)**
    Records serial numbers for each product in an inventory. This object is available in API version 60.0 and later.
-   **[SerializedProductTransaction](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_serializedproducttransaction.htm)**
    Represents a change in the state of a serialized product. This object is available in API version 60.0 and later.
-   **[Shipment](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_shipment.htm)**
    Represents a product item that’s in transit between two inventory locations. This object is available in API version 60.0 and later.
-   **[ShipmentItem](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_shipmentitem.htm)**
    Represents a product that’s included in a shipment. This object is available in API version 60.0 and later.
-   **[Supplier](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_supplier.htm)**
    Represents information about a supplier that a manufacturer procures product parts and components from. This object is available in API version 59.0 and later.
-   **[SupplierProduct](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_supplierproduct.htm)**
    Represents information about a product that’s procured from a supplier. This object is available in API version 59.0 and later.
-   **[Visit](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_visit.htm)**
    Represents information about a visit that a manager schedules for a field rep to perform, usually at distributor, supplier, and partner locations. This object is available in API version 56.0 and later.
-   **[WarrantyTerm](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_warrantyterm.htm)**
    Represents warranty terms defining the labor, parts, and expenses covered, along with any exchange options, provided to rectify issues with products. This object is available in Manufacturing Cloud in API version 55.0 and later.
-   **[WarrantyTermCoverage](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_warrantytermcoverage.htm)**
    Represents a junction between the warranty term coverage and a product or codeset, such as the repair code or labor code. This object is available in API version 58.0 and later.
-   **[WorkOrderDiagnosis](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_workorderdiagnosis.htm)**
    Represents the diagnosis details of the Work Order that the user records during depot repair.

## Related Topics

- AccountForecast (atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_accountforecast.htm)
- AccountForecastAdjustment (atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_accountforecastadjustment.htm)
- AccountForecastPeriodMetric (atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_accountforecastperiodmetric.htm)
- AccountProductForecast (atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_accountproductforecast.htm)
- AccountProductPeriodForecast (atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_accountproductperiodforecast.htm)
- AcctMgrPeriodicTargetDstr (atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/manufacturing_standard_object_account_manager_periodic_target_distribution.htm)
- AcctMgrTarget (atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/manufacturing_standard_object_account_manager_target.htm)
- AcctMgrTargetDstr (atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/manufacturing_standard_object_account_manager_target_distribution.htm)
- AcctMgrTargetMeasure (atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/manufacturing_standard_object_account_manager_target_measure.htm)
- AdvAcctForecastAdjPeriod (atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_advacctforecastadjperiod.htm)
