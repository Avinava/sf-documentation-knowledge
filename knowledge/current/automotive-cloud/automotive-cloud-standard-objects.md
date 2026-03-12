---
title: "Automotive Cloud Standard Objects"
domain: automotive-cloud
topic: automotive-cloud-standard-objects
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:00.811Z
estimatedTokens: 6593
keywords: [Automotive, Cloud, Standard, Objects, data, model, manage, vehicles, customers, stakeholders, financial, relationships, company, dealer, groups]
---

# Automotive Cloud Standard Objects

> Automotive Cloud data model provides objects and fields to manage vehicles, customers,
    stakeholders, and financial relationships for your automotive company. Both dealer groups and
    original equipment manufacturers (OEMs) can use Automotive Cloud for varied requirements. Use
    the Automotive Cloud objects to manage vehicle definitions and vehicles, track stakeholders,
    manage leads, and report sales of vehicles and parts. Automotive Cloud is available in Lightning
    Experience.

# Automotive Cloud Standard Objects

Automotive Cloud data model provides objects and fields to manage vehicles, customers, stakeholders, and financial relationships for your automotive company. Both dealer groups and original equipment manufacturers (OEMs) can use Automotive Cloud for varied requirements. Use the Automotive Cloud objects to manage vehicle definitions and vehicles, track stakeholders, manage leads, and report sales of vehicles and parts. Automotive Cloud is available in Lightning Experience.

| Available in: Enterprise, Unlimited, and Developer Editions. |
| --- |


-   **[AccountAccountRelation](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_accountaccountrelation.htm)**
    Represents a relationship between accounts, such as a relationship between a dealer account and a household account. This object is available in API version 58.0 and later.
-   **[ActionableEventOrchestration](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_actionableeventorchestration.htm)**
    Represents the details of an actionable event and specifies how to orchestrate the processes. The record stores details such as the event type, subtype, and category, and the expression set and the context mappings related to an orchestration. This object is available in API version 63.0 and later.
-   **[ActionableEventSubtype](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_actionableeventsubtype.htm)**
    Represents the subtype of an external or internal event that's processed by the Actionable Event Orchestration framework to trigger different types of actions. This object is available in API version 62.0 and later.
-   **[ActionableEventType](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_actionableeventtype.htm)**
    Represents the type of an external or internal event that's processed by the Actionable Event Orchestration framework to trigger different types of actions. This object is available in API version 62.0 and later.
-   **[ActionableEventTypeDef](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_actionableeventtypedef.htm)**
    Represents the definition of an actionable event type so that the records can be migrated from one org to another. This object is available in API version 62.0 and later.
-   **[ActionableOrchResponseEvent](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_actionableorchresponseevent.htm)**
    Represents information about an internal or external event after actions are taken by the orchestration process and the response is recorded. This object is available in API version 62.0 and later.
-   **[ActionableOrchSourceEvent](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_actionableorchsourceevent.htm)**
    Represents information about an event on which actions are taken by the orchestration process. This object is available in API version 62.0 and later.
-   **[Appraisal](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_appraisal.htm)**
    Represents the appraisal for one or more items. This object is available in API version 63.0 and later.
-   **[AppraisalAdjustment](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_appraisaladjustment.htm)**
    Represents an adjustment for the appraisal or an appraisal item. This object is available in API version 63.0 and later.
-   **[AppraisalItem](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_appraisalitem.htm)**
    Represents an item that is appraised, such as a vehicle or an asset. This object is available in API version 63.0 and later.
-   **[AppraisalItemAddOn](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_appraisalitemaddon.htm)**
    Represents an add-on product, such as an accessory, that enhances or complements the appraised item. This object is available in API version 63.0 and later.
-   **[AppraisalItemProviderVal](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_appraisalitemproviderval.htm)**
    Represents a valuation of the item that is appraised. This object is available in API version 63.0 and later.
-   **[AssessmentIndicatorDefinition](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_assessmentindicatordefinition.htm)**
    Define parameters or metrics that act as markers of compliance for partner visit tasks. This object is available in Automotive Cloud in API version 56.0 and later.
-   **[AssetAccountParticipant](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_assetaccountparticipant.htm)**
    Represents a junction between the Asset and Account objects describing the association between a participating account and an asset. This object is available in API version 56.0 and later.
-   **[AssetContactParticipant](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_assetcontactparticipant.htm)**
    Represents a junction between the Asset and Contact objects describing the association between a participating contact and an asset. This object is available in API version 56.0 and later.
-   **[AssetMilestone](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_assetmilestone.htm)**
    Represents the key events in the lifecycle of a vehicle asset, such as manufacturing, registration, or resale. This object is available in API version 56.0 and later.
-   **[AssetTitle](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_assettitle.htm)**
    Represents information that establishes the legal ownership of an asset or a vehicle. This object is available in API version 60.0 and later.
-   **[AssetTitleParty](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_assettitleparty.htm)**
    Represents the relationship between an account, a contact, or a user and an asset title. This object is available in API version 60.0 and later.
-   **[AssetWarranty](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_assetwarranty.htm)**
    Defines the warranty terms applicable to an asset along with any exclusions and extensions. This object is available in API version 56.0 and later.
-   **[Claim](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_claim.htm)**
    Represents a warranty Claim submitted by a partner to a manufacturer, or a supplier recovery claim submitted by the manufacturer to a supplier. This object is available in API version 58.0 and later.
-   **[ClaimCoverage](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_claimcoverage.htm)**
    Represents a causal part in a defective asset that requires repair or replacement. This object is available in API version 58.0 and later.
-   **[ClaimCoveragePaymentDetail](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_claimcoveragepaymentdetail.htm)**
    Represents the claim coverage amount that must be paid to a claimant for a part replaced or replaced or a labor service performed to rectify a causal part in a defective asset. This object is available in API version 58.0 and later.
-   **[ClaimItem](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_claimitem.htm)**
    Represents a defective asset that requires repair or replacement. This object is available in API version 58.0 and later.
-   **[ClaimParticipant](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_claimparticipant.htm)**
    A junction object that associates the Claim object with the Account object. This object represents the participants of a claim. This object is available in API version 58.0 and later.
-   **[Codeset](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_codeset.htm)**
    Represents various industry defined codes in the context of their systems and versions of those systems. This object is available in API version 58.0 and later.
-   **[CodesetRelationship](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_codesetrelationship.htm)**
    Represents a relationship between a codeset and its related codeset. For example, a labor code associated with a fault code. This object is available in API version 58.0 and later.
-   **[ContactContactRelation](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_contactcontactrelation.htm)**
    Represents a relationship between contacts, such as two members in a household. This object is available in API version 57.0 and later.
-   **[DealerVehDefSearchableField](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_dealervehdefsearchablefield.htm)**
    Represents information about dealerships selling and, or, servicing vehicles for location-based searches. Helps customers find nearby dealer locations for vehicle-related purchases and services. This object is available in API version 65.0 and later.
-   **[FinancialAccount](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_financialaccount.htm)**
    Represents a financing option, such as an automotive loan or lease related to a customer. This object is available in API version 60.0 and later.
-   **[FinancialAccountAddress](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_financialaccountaddress.htm)**
    Represents an address related to a financial account. This object is available in API version 60.0 and later.
-   **[FinancialAccountBalance](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_financialaccountbalance.htm)**
    Represents the details about a financial account balance. This object is available in API version 60.0 and later.
-   **[FinancialAccountFee](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_financialaccountfee.htm)**
    Represents the charges levied on a financial account This object is available in API version 60.0 and later.
-   **[FinancialAccountMilestone](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_financialaccountmilestone.htm)**
    Represents the events in the lifecycle of a financial account. This object is available in API version 60.0 and later.
-   **[FinancialAccountParty](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_financialaccountparty.htm)**
    Represents the relationship between an account or a contact and a financial account. This object is available in API version 60.0 and later.
-   **[FinancialAccountStatement](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_financialaccountstatement.htm)**
    Represents a periodic statement summary for a financial account. This object is available in API version 60.0 and later.
-   **[FinancialAccountTransaction](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_financialaccounttransaction.htm)**
    Represents a single transaction related to a loan or a lease. This object is available in API version 60.0 and later.
-   **[FinclAcctPtyFinclAsset](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_finclacctptyfinclasset.htm)**
    Represents the financial account associated with the financial asset for a specific account or contact. This object is available in API version 60.0 and later.
-   **[Fleet](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_fleet.htm)**
    Represents a group of assets or vehicles used in commercial or transport operations. This object is available in API version 59.0 and later.
-   **[FleetAsset](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_fleetasset.htm)**
    Represents the relationship between an asset or a vehicle and the fleet to which it belongs. This object is available in API version 59.0 and later.
-   **[FleetParticipant](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_fleetparticipant.htm)**
    Represents the relationship between a fleet and a participant, such as an account, a contact, or a user. This object is available in API version 59.0 and later.
-   **[GenericVisitTask](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_genericvisittask.htm)**
    Represents information about a task that can be performed during a visit. This object is available in Automotive Cloud in API version 56.0 and later.
-   **[GenericVisitTaskContext](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_genericvisittaskcontext.htm)**
    Represents the context or purpose for a generic visit task. This object is available in Automotive Cloud in API version 56.0 and later.
-   **[GnrcVstKeyPerformanceInd](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_gnrcvstkeyperformanceind.htm)**
    Represents the key performance indicators that can be recorded while performing a task during a visit. You can compare the expected and actual metric values with the key performance indicator records. This object is available in Automotive Cloud in API version 56.0 and later.
-   **[GnrcVstTaskContextRelation](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_gnrcvsttaskcontextrelation.htm)**
    Represents common attributes used for a visit task and a visit task context. This object is available in Automotive Cloud in API version 56.0 and later.
-   **[Holiday](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_holiday.htm)**
    Represents a period during which a service resource is unavailable for appointment scheduling. Recurring holidays are not supported in Automotive Cloud. This object is available in API version 58.0 and later.
-   **[LeadLineItem](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_leadlineitem.htm)**
    Represents items such as vehicles, accessories, and parts that a lead is interested in. This object is available in API version 56.0 and later.
-   **[LeadPreferredSeller](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_leadpreferredseller.htm)**
    Represents the relationship between a lead and the dealer account that the lead selects, or the relationship between a lead and the account that provides the lead. This object is available in API version 56.0 and later.
-   **[OpportunityPreferredSeller](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_opportunitypreferredseller.htm)**
    Represents the relationship between an opportunity and a dealer account, or the relationship between an opportunity and the account that provided the lead from which the opportunity was created. This object is available in API version 56.0 and later.
-   **[PartyCreditPrflFinclAcct](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_partycreditprflfinclacct.htm)**
    Represents information about financial accounts, such as a credit card, an auto loan, or a mortgage account, reported by a credit bureau. Helps lenders to review the details of a borrower's accounts, both active and inactive. This object is available in API version 65.0 and later.
-   **[PartyCreditProfileAlert](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_partycreditprofilealert.htm)**
    Represents the alerts and triggers raised against a borrower's credit activities, such as sudden score changes, new accounts, and payment defaults. Aids in detecting fraud, identifying borrower errors, and facilitating verification processes. This object is available in API version 65.0 and later.
-   **[PartyCreditProfileInquiry](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_partycreditprofileinquiry.htm)**
    Represents the details of inquiries made by external organizations to access a borrower's credit report. Can influence a lender's opinion of a borrower's risk profile based on the type of credit inquiries received. This object is available in API version 65.0 and later.
-   **[PartyFinancialAsset](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_partyfinancialasset.htm)**
    Represents the financial assets owned by an account or a contact. This object is available in API version 60.0 and later.
-   **[PartyFinclAssetAddlOwner](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_partyfinclassetaddlowner.htm)**
    Represents an additional owner of a financial asset. This object is available in API version 60.0 and later.
-   **[PartyRelationshipGroup](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_partyrelationshipgroup.htm)**
    Represents a group of people living together such as a household, or a group of people affiliated with each other. This object is available in Automotive Cloud in API version 56.0 and later.
-   **[PartyRoleRelation](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_partyrolerelation.htm)**
    Represents information about the type of relationship between the participants in a group or household. This object is available in API version 58.0 and later.
-   **[ProductFaultCode](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_productfaultcode.htm)**
    Represents a relationship between a product or product family and the fault code. This object is available in API version 58.0 and later.
-   **[ProductLaborCode](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_productlaborcode.htm)**
    Represents a junction between the labor code that's applicable to a product or product family and the required standard effort. This object is available in API version 58.0 and later.
-   **[ProductWarrantyTerm](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_productwarrantyterm.htm)**
    Defines the relationship between a product or product family and a warranty term. This object is available in API version 56.0 and later.
-   **[PtyCrPrflFinclAcctActvty](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_ptycrprflfinclacctactvty.htm)**
    Represents information about the payments made by a borrower reported by a credit bureau. Reveals a borrower's payment behavior on past debts, indicating timely, delayed, or skipped payments. This object is available in API version 65.0 and later.
-   **[RebateClaim](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_rebateclaim.htm)**
    Represents proof of sale of a vehicle submitted by a dealer in the form of a retail delivery report. This report can also be used for rebate payout calculations. This object is available in Automotive Cloud in API version 56.0 and later.
-   **[SellerProduct](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_sellerproduct.htm)**
    Represents information about the products associated with a seller. Provides insight into product availability, production details, and the seller's role for the product, such as for sales or for service. This object is available in API version 65.0 and later.
-   **[ServiceAppointment](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_serviceappointment.htm)**
    Represents a service appointment booked through Automotive Scheduler, for test drives or vehicle services. This object is available in API version 58.0 and later.
-   **[ServiceResourceSkill](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_serviceresourceskill.htm)**
    Represents the association between a skill and a service resource. This object is available in API version 58.0 and later.
-   **[ServiceTerritory](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_serviceterritory.htm)**
    Represents a dealer location where service resources are located and service appointments are performed. This object is available in API version 58.0 and later.
-   **[ServiceTerritoryMember](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_serviceterritorymember.htm)**
    Represents a service resource who can be assigned to an appointment in a service territory. This object is available in API version 58.0 and later.
-   **[Skill](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_skill.htm)**
    Represents a skill that service resources have. For technician type service resources, the skill represents their area of expertise. For asset type service resources, the skill must be specified as Test Drive. This object is available in API version 59.0 and later.
-   **[SkillRequirement](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_skillrequirement.htm)**
    Represents a skill that is required to complete a particular work type. This object is available in API version 58.0 and later.
-   **[TelemetryActionDefinition](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_telemetryactiondefinition.htm)**
    Represents the action taken on a telemetry signal sent from a connected asset or vehicle, such as getting the current status of a vehicle or its component, or sending a request to perform a remote action on the vehicle or its component. This object is available in API version 65.0 and later.
-   **[TelemetryActionDefStep](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_telemetryactiondefstep.htm)**
    Represents a step in the action for a telemetry signal definition. This object is available in API version 65.0 and later.
-   **[TelemetryActionRelatedProcess](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_telemetryactionrelatedprocess.htm)**
    Represents the relationship between a telemetry action and a process triggered by the action such as a service catalog item definition or a product. This object is available in API version 65.0 and later.
-   **[TelemetryActnDefStepAttr](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_telemetryactndefstepattr.htm)**
    Represents the attributes of a telemetry action definition step. This object is available in API version 65.0 and later.
-   **[TelemetryDefinition](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_telemetrydefinition.htm)**
    Represents the definition of the structure of a telemetry signal sent from a connected asset or vehicle. This object is available in API version 65.0 and later.
-   **[TelemetryDefinitionVersion](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_telemetrydefinitionversion.htm)**
    Represents a version of the structure of a telemetry signal sent from a connected asset or vehicle. This object is available in API version 65.0 and later.
-   **[TimeSlot](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_timeslot.htm)**
    Represents a period of time on a specified day of the week during which an appointment can be scheduled. This object is available in API version 58.0 and later.
-   **[TransactionJournal](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_transactionjournal.htm)**
    Represents proof of sale of parts and accessories submitted by a dealer to the vehicle manufacturer. This report can also be used for rebate payout calculations. This object is available in Automotive Cloud in API version 56.0 and later.
-   **[Vehicle](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_vehicle.htm)**
    Represents information about a vehicle. This object is available in API version 56.0 and later.
-   **[VehicleDefinition](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_vehicledefinition.htm)**
    Represents information about a typical vehicle model. This object is available in API version 56.0 and later.
-   **[VehDefSearchableField](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_vehdefsearchablefield.htm)**
    Represents multiple fields from objects such as Product, Price Book, and Vehicle Definition, that are used to search a vehicle's model specifications in vehicle and asset lending. This object is available in API version 63.0 and later.
-   **[VehicleSearchableField](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_vehiclesearchablefield.htm)**
    Represents a common dataset including multiple fields and values from multiple objects and is used as the basis for inventory search related to vehicles. This object is available in API version 58.0 and later.
-   **[Visit](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_visit.htm)**
    Represents information about a visit that a manager schedules for a field rep to perform, usually at dealer locations. This object is available in Automotive Cloud in API version 56.0 and later.
-   **[WarrantyTerm](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_warrantyterm.htm)**
    Represents warranty terms defining the labor, parts, and expenses covered, along with any exchange options, provided to rectify issues with products. This object is available in Manufacturing Cloud in API version 55.0 and later.
-   **[WarrantyTermCoverage](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_warrantytermcoverage.htm)**
    Represents a junction between the warranty term coverage and a product or codeset, such as the repair code or labor code. This object is available in API version 58.0 and later.
-   **[WorkType](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_worktype.htm)**
    Represents a type of work to be performed for a dealer location. Work types are templates that associate a work group to a service territory. This object is available in API version 58.0 and later.
-   **[WorkTypeGroup](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_worktypegroup.htm)**
    Represents a grouping of work types used to categorize types of available appointments. This object is available in API version 58.0 and later.
-   **[WorkTypeGroupMember](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_worktypegroupmember.htm)**
    Represents the relationship between a work type and the work type group it belongs to. This object is available in API version 58.0 and later.

#### See Also

-   [*Salesforce Help*: Automotive Cloud Data Model](https://help.salesforce.com/s/articleView?id=ind.auto_data_model.htm&type=5&language=en_US)

## Related Topics

- AccountAccountRelation (atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_accountaccountrelation.htm)
- ActionableEventOrchestration (atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_actionableeventorchestration.htm)
- ActionableEventSubtype (atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_actionableeventsubtype.htm)
- ActionableEventType (atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_actionableeventtype.htm)
- ActionableEventTypeDef (atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_actionableeventtypedef.htm)
- ActionableOrchResponseEvent (atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_actionableorchresponseevent.htm)
- ActionableOrchSourceEvent (atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_actionableorchsourceevent.htm)
- Appraisal (atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_appraisal.htm)
- AppraisalAdjustment (atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_appraisaladjustment.htm)
- AppraisalItem (atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_objects_appraisalitem.htm)
