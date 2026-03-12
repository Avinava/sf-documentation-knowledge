---
title: "Net Zero Cloud Standard Objects"
domain: netzero-cloud-dev-guide
topic: net-zero-cloud-standard-objects
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:57.921Z
estimatedTokens: 10344
keywords: [Net, Zero, Cloud, Standard, Objects, data, model, calculate, manage, carbon, footprints, organization]
---

# Net Zero Cloud Standard Objects

> The Net Zero Cloud data model provides objects and fields
  to
  calculate and manage carbon
  footprints
  for your organization.

# Net Zero Cloud Standard Objects

The Net Zero Cloud data model provides objects and fields to calculate and manage carbon footprints for your organization.

Use the objects to manage emissions factors, energy use, and scope 3 procurement.

-   **[Net Zero Cloud Overview](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_cloud_data_model.htm)**
    Learn about the objects and relationships within the Net Zero Cloud data model.
-   **[AirTravelEmssnFctr](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_airtravelemssnfctr.htm)**
    Represents the emissions factors for scope 3 commercial air travel. This object is available in API version 54.0 and later.
-   **[AirTravelEnrgyUse](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_airtravelenrgyuse.htm)**
    Represents the energy consumption related to air travel. This object is available in API version 54.0 and later.
-   **[AntiCorruptionInitSum](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_anticorruptioninitsum.htm)**
    Represents information about the initiatives taken by an organization to communicate and train the employee on anti-corruption policies and procedures. This object is available in API version 57.0 and later.
-   **[AnnualEmssnInventory](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_annualemssninventory.htm)**
    Represents information about a company's total carbon emissions for a particular year in metric tonnes of CO2e (tCO2e). These emissions are the sum of all the emissions in scope 1, scope 2, and scope 3 greenhouse gas categories. This object is available in API version 54.0 and later.
-   **[AnnualEmssnInventoryExtension](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_annualemssninventoryextension.htm)**
    Represents additional information about a company's total carbon emissions for a particular year in metric tonnes of CO2e (tCO2e). This object is available in API version 65.0 and later.
-   **[AnnualEmssnRdctnTarget](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_annualemssnrdctntarget.htm)**
    Represents information about the emissions reduction target set by a company for a particular year. This object is available in API version 54.0 and later.
-   **[AsmtQstnMaterialityTpc](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_asmtqstnmaterialitytpc.htm)**
    Represents a junction between a materiality topic and an assessment question. This object is available in API version 64.0 and later.
-   **[BiodiversitySummary](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_biodiversitysummary.htm)**
    Represents the biodiversity information that a company discloses as part of ESRS E4 - Biodiversity and ecosystems. This object is available in API version 65.0 and later.
-   **[BldgEnrgyIntensity](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_bldgenrgyintensity.htm)**
    Represents the average energy intensity by fuel type across a set of buildings. You can derive this data from published sources. Alternatively, you can do so by using energy use records as the data source and then setting up a window of time with some characteristics of the building size and type. This object is available in API version 54.0 and later.
-   **[BldgEnrgyIntensityVal](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_bldgenrgyintensityval.htm)**
    Represents the calculated average energy intensity for an individual fuel type across a set of buildings. Each record stores the fuel use intensity as a function of the floor area of the occupied space of that building. This object is available in API version 54.0 and later.
-   **[BldgSizeCategory](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_bldgsizecategory.htm)**
    Represents the building size filter criteria for the building energy intensity records. The building size filter criteria are stored as a range of floor area sizes from a minimum size to a maximum size, in units of sqft or m². The records can have overlapping minimum-maximum ranges. This object is available in API version 54.0 and later.
-   **[CleanEnergyProject](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_cleanenergyproject.htm)**
    Represents information about a project that provides credits a company can purchase to claim clean energy usage. This object is available in API version 59.0 and later.
-   **[ClimateChgEmssnFincSummary](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_climatechgemssnfincsummary.htm)**
    Represents the emissions and financial information that a company discloses as part of ESRS E1 - Climate change. This object is available in API version 65.0 and later.
-   **[ClimateChgRiskOppSummary](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_climatechgriskoppsummary.htm)**
    Represents the climate-related risks and opportunities that a company discloses as part of ESRS E1 - Climate change. This object is available in API version 65.0 and later.
-   **[ContentLink](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_contentlink.htm)**
    Represents a reference object with information about its content source. This object is available in API version 62.0 and later.
-   **[ContentSource](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_contentsource.htm)**
    Represents the data source that's referenced by an object. This object is available in API version 62.0 and later.
-   **[CrbnCreditAlloc](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_crbncreditalloc.htm)**
    Represents information about how the carbon credits are allocated by an organization to offset their emissions. This object is available in API version 56.0 and later.
-   **[CrbnCreditAllocItem](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_crbncreditallocitem.htm)**
    Represents information about carbon credit allocation and emissions related to each emission activity. This object is available in API version 56.0 and later.
-   **[CrbnCreditDistribution](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_crbncreditdistribution.htm)**
    Represents a junction between the sustainability credit and carbon credit allocation objects. To offset emissions for carbon credit allocation items, specify the emissions activity on this junction object. This object is available in API version 56.0 and later.
-   **[CrbnCreditProject](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_crbncreditproject.htm)**
    Represents information about the environmental project that generates carbon credits by removing greenhouse gasses or preventing a certain quantity of greenhouse gasses from being released. This object is available in API version 56.0 and later.
-   **[CrbnEmssnScopeAlloc](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_crbnemssnscopealloc.htm)**
    Represents the allocation of fuel consumption for different scope emissions. For an energy use record, tCO₂e is calculated and the results are classified as either Scope 1, Scope 2, or Scope 3 emission values. Each individual fuel type has its own scope allocation record. To put the tCO2e result in the correct scope, the energy use record points to the scope allocation record. This object is available in API version 54.0 and later.
-   **[CrbnEmssnScopeAllocVal](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_crbnemssnscopeallocval.htm)**
    Represents the scope allocation by fuel type. This object is available in API version 54.0 and later.
-   **[DocClauseSetAsmtQstn](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_docclausesetasmtqstn.htm)**
    Represents a junction between a document clause set and an assessment question. This object is available in API version 64.0 and later.
-   **[Disclosure](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_disclosure.htm)**
    Represents the disclosure details that a company shares, which can be included by a user in their response document. This object is available in API version 57.0 and later.
-   **[DisclosureDefinition](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_disclosuredefinition.htm)**
    Represents information that defines a disclosure type, such as details of the publisher or vendor who created or implemented the report. This object is available in API version 57.0 and later.
-   **[DisclosureDefinitionVersion](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_disclosuredefinitionversion.htm)**
    Represents the version information about the disclosure definition. This object is available in API version 57.0 and later.
-   **[DisclosureType](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_disclosuretype.htm)**
    Represents the types of disclosures that are done by an individual or an organization and the associated metadata. This object is available in API version 57.0 and later.
-   **[DisclsReportingPeriod](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_disclsreportingperiod.htm)**
    Represents a corporate reporting period that is used for stakeholder disclosure reports. This object is available in API version 57.0 and later.
-   **[DivrsEquityInclSum](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_divrsequityinclsum.htm)**
    Represents information that indicates the quantitative view of the organization based on the employee gender, age group, and other fairness indicators. This object is available in API version 57.0 and later.
-   **[EconomicPerformanceSum](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_economicperformancesum.htm)**
    Represents statistics about the direct economic value generated and distributed by an organization or the related income and expenses. This object is available in API version 57.0 and later.
-   **[ElectrLifecyclEmssnFctrSet](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_electrlifecyclemssnfctrset.htm)**
    Represents the emissions factors used to calculate greenhouse gas emissions that occur throughout the lifecycle of electricity. It includes emissions from the production of electricity and losses during the transmission and distribution of each kilowatt hour (kWh) of electricity. This object is available in API version 66.0 and later.
-   **[ElectricityEmssnFctrSet](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_electricityemssnfctrset.htm)**
    Represents the factors that are used to convert electricity usage into CO₂e, CO₂, CH₄, and N₂O values. This record holds data on the breakdown of sources of electricity by fuel type (grid mixes). This object is available in API version 54.0 and later.
-   **[EmissionsActivity](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_emissionsactivity.htm)**
    Represents a company’s emission generating activities and the greenhouse gas categories that are used to aggregate emissions for these activities. This object is available in API version 54.0 and later.
-   **[EmissionsAllocation](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_emissionsallocation.htm)**
    Represents information about the emissions from a child or partner account that are allocated to an account. This object is available in API version 58.0 and later.
-   **[EmissionsForecastFact](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_emissionsforecastfact.htm)**
    Represents information about the time periods, measures, and dimensions used to forecast the emissions of a company. The emissions forecast of the company is generated based on its business measures such as revenue or employee count, and the actual emissions data from previous years. This object is available in API version 54.0 and later.
-   **[EmploymentCompensationSummary](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_employmentcompensationsummary.htm)**
    Represents information about stakeholder engagement to assess the importance of environmental, social, and governance (ESG) issues for them. This object is available in API version 59.0 and later.
-   **[EmpBenefitSummary](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_empbenefitsummary.htm)**
    Represents statistics about benefits provided to employees and the usage of benefits. This object is available in API version 57.0 and later.
-   **[EmployeeDevelopmentSum](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_employeedevelopmentsum.htm)**
    Represents statistics about training and development provided to upskill the employees. This object is available in API version 57.0 and later.
-   **[EmployeeDemographicSum](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_employeedemographicsum.htm)**
    Represents statistics about employees based on their demographic information, such as employee count by age group, by gender, and by region. This object is available in API version 57.0 and later.
-   **[EmssnRdctnCommitment](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_emssnrdctncommitment.htm)**
    Represents information about a company's commitment to reducing its carbon emissions. This commitment is in line with the Paris Agreement’s goal to achieve a low-carbon future. For example, companies sign the Business Ambition for 1.5°C commitment letter and commit to set emission reduction targets to limit temperature rise to 1.5°C above pre-industrial levels. This object is available in API version 54.0 and later.
-   **[EmssnReductionTarget](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_emssnreductiontarget.htm)**
    Represents information about the science-based or non-science-based target set by a company to fulfill its emissions reduction commitment. This target indicates the company’s emissions reduction goal. A company’s emissions reduction goal could be to reduce carbon emissions or increase renewable energy for reaching a target metric tonnes of CO2e (tCO2e) within a specific timeframe. This object is available in API version 54.0 and later.
-   **[EnergyAttrCertCredit](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_energyattrcertcredit.htm)**
    Represents information about the energy attribute certificate credits related to energy attribute certificate purchase. This object is available in API version 59.0 and later.
-   **[EnergyAttrCertPurchase](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_energyattrcertpurchase.htm)**
    Represents information about the purchase of energy attribute certificates from the clean energy project supplier. The information includes terms of engagement and the delivery type of energy attribute certificate. This object is available in API version 59.0 and later.
-   **[EnergyAttrCreditDstr](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_energyattrcreditdstr.htm)**
    Represents a junction between energy attribute credits and stationary asset energy use indicating the quantity of credits distributed for a specific energy use. This object is available in API version 59.0 and later.
-   **[EnvironmentalRisk](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_environmentalrisk.htm)**
    Represents information about the risk that the environmental resources create for an organization. This object is available in API version 56.0 and later.
-   **[FrgtHaulingEmssnFctr](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_frgthaulingemssnfctr.htm)**
    Represents the emissions factors for scope 3 freight hauling. This object is available in API version 54.0 and later.
-   **[FrgtHaulingEnrgyUse](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_frgthaulingenrgyuse.htm)**
    Represents the energy consumption related to freight hauling. This object is available in API version 54.0 and later.
-   **[FuelType](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_fueltype.htm)**
    Represents information about the additional fuel types defined by a customer.This object is available in API version 57.0 and later.
-   **[FuelTypeSustnUom](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_fueltypesustnuom.htm)**
    Represents a mapping between the additional fuel types and their corresponding unit of measure values defined by a customer. This object is available in API version 57.0 and later.
-   **[GeneratedWaste](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_generatedwaste.htm)**
    Represents the information on the waste generated in operations, the waste generated while treating end-of-life products that were sold, and so on. This object is available in API version 54.0 and later.
-   **[GovtFinancialAsstSum](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_govtfinancialasstsum.htm)**
    Represents information about the financial assistance received from governments. This object is available in API version 57.0 and later.
-   **[GroundTravelEmssnFctr](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_groundtravelemssnfctr.htm)**
    Represents the emissions factors for scope 3 ground travel. This object is available in API version 54.0 and later.
-   **[GroundTravelEnrgyUse](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_groundtravelenrgyuse.htm)**
    Represents the energy consumption related to ground travel. This object is available in API version 54.0 and later.
-   **[InfoLibraryExternalDocument](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_infolibraryexternaldocument.htm)**
    Represents the external document that's used to collaborate on Information Library content. This object is available in API version 62.0 and later.
-   **[HotelStayEmssnFctr](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_hotelstayemssnfctr.htm)**
    Represents the emissions factors for scope 3 hotel stay. This object is available in API version 54.0 and later.
-   **[HotelStayEnrgyUse](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_hotelstayenrgyuse.htm)**
    Represents the energy consumption related to hotel stay. This object is available in API version 54.0 and later.
-   **[ImpactRiskOpportunity](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_impactriskopportunity.htm)**
    Represents an impact, risk, or opportunity that can be evaluated and scored as a part of an organization's double-materiality assessment. Also known as an IRO. This object is available in API version 63.0 and later.
-   **[ImpactRiskOpportunityScore](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_impactriskopportunityscore.htm)**
    Represents the score of an impact, risk, or opportunity for an assessment. This object is available in API version 63.0 and later.
-   **[ImpactRiskOpportunityTopic](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_impactriskopportunitytopic.htm)**
    Represents a junction between an impact risk opportunity and a materiality topic. This object is available in API version 63.0 and later.
-   **[ImpcRiskOppAssessment](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_impcriskoppassessment.htm)**
    Represents an assessment of ESG-related impacts, risks, and opportunities for an organization. This object is available in API version 63.0 and later.
-   **[ImpcRiskOppAssessmentTopic](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_impcriskoppassessmenttopic.htm)**
    Represents a junction between an impact risk opportunity assessment and a materiality topic. This object is available in API version 63.0 and later.
-   **[InflationRate](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_inflationrate.htm)**
    Represents the inflation rates that are used to adjust currency values from one year to another. This object is available in API version 54.0 and later.
-   **[ManagedCareProgramPrfm](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_managedcareprogramprfm.htm)**
    Represents the rating and enrollee retention rate according to the plan type of an average medicare advantage plan. This object is available in API version 59.0 and later.
-   **[MaterialityAssessment](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_materialityassessment.htm)**
    Represents information about stakeholder engagement to assess the importance of environmental, social, and governance (ESG) issues for them. This object is available in API version 59.0 and later.
-   **[MaterialityMatrixScore](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_materialitymatrixscore.htm)**
    Represents the materiality matrix score used to visualize all the data gathered through materiality assessment intake process. This object is available in API version 59.0 and later.
-   **[MaterialityStakeholder](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_materialitystakeholder.htm)**
    Represents information about a stakeholder who can be internal or external party having interest in a company. A stakeholder can either affect or be affected by the business. This object is available in API version 59.0 and later.
-   **[MaterialityStkhldrCatg](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_materialitystkhldrcatg.htm)**
    Represents a category to organize materiality stakeholders into groups, such as employees, shareholders, suppliers, and customers. This object is available in API version 59.0 and later.
-   **[MaterialityTopic](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_materialitytopic.htm)**
    Represents a possible topic for materiality assessment. This object is available in API version 59.0 and later.
-   **[MaterialityTopicDocClauseSet](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_materialitytopicdocclauseset.htm)**
    Represents a reference object with information about the topic and a document clause set. This object is available in API version 62.0 and later.
-   **[MaterialityTopicQstn](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_materialitytopicqstn.htm)**
    Represents the mapping between the materiality assessment topics and the materiality assessment survey questions. This object is available in API version 59.0 and later.
-   **[MaterialityTopicReference](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_materialitytopicreference.htm)**
    Represents a reference object with information about two related topics. This object is available in API version 62.0 and later.
-   **[MonthlyUsageTrkgDataGap](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_monthlyusagetrkgdatagap.htm)**
    Represents a gap in the tracking of fuel usage data for the month. This object is available in API version 64.0 and later.
-   **[OrgIncidentSummary](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_orgincidentsummary.htm)**
    Represents statistics according to various categories of incidents in an organization, such as non-compliance with laws, corruptions, health and safety, discrimination, marketing and labeling, and customer privacy. This object is available in API version 57.0 and later.
-   **[OrgPaymentPracSummary](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_orgpaymentpracsummary.htm)**
    Represents the payment practice information to external parties that an organization discloses as part of ESRS G1 - Business conduct. This object is available in API version 65.0 and later.
-   **[OthrLifecyclEmssnFctrSet](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_othrlifecyclemssnfctrset.htm)**
    Represents a collection of emissions factors used to calculate emissions that occur throughout the fuel lifecycle, from extraction to end-of-life. These fuels are used in stationary and vehicle assets other than electricity. This object is available in API version 66.0 and later.
-   **[OthrLifecyclEmssnFctrSetItem](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_othrlifecyclemssnfctrsetitem.htm)**
    Represents the individual emissions factor for a fuel used to calculate emissions that occur throughout its lifecycle, from extraction to end-of-life. This fuel is used in stationary and vehicle assets other than electricity. This object is available in API version 66.0 and later.
-   **[OtherEmssnFctrSet](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_otheremssnfctrset.htm)**
    Represents a collection of emissions and conversion factors for various data types and sources that are neither the electricity grid nor scope 3 data types. This object is available in API version 54.0 and later.
-   **[OtherEmssnFctrSetItem](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_otheremssnfctrsetitem.htm)**
    Represents the individual entries for emissions and conversion factors for various data types and sources that are neither the electricity grid nor scope 3 data types. This object is available in API version 54.0 and later.
-   **[PcmtEmssnFctrSet](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_pcmtemssnfctrset.htm)**
    Represents a collection of emission factors that are used to convert spent amounts in procurement data to carbon emissions in tonnes of carbon dioxide equivalent (tCO₂e). This object is available in API version 54.0 and later.
-   **[PcmtEmssnFctrSetItem](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_pcmtemssnfctrsetitem.htm)**
    Represents the individual emissions factors for scope 3 procurement analysis. Here, the environmentally extended input-output (EEIO) model outputs are used as the emission factors in units of tCO₂e per million spent (currency not specified). This object is available in API version 54.0 and later.
-   **[PltnImpactRiskOppSummary](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_pltnimpactriskoppsummary.htm)**
    Represents the pollution impacts, risks, and opportunities that a company discloses as part of ESRS E3 - Water and marine resources. This object is available in API version 65.0 and later.
-   **[ProductEmissionsFactor](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_productemissionsfactor.htm)**
    Represents information about the emissions factors used in quantifying the emissions by a product in the supply-chain. This object is available in API version 56.0 and later.
-   **[ProgramInitiative](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_programinitiative.htm)**
    Represents information about a sustainability initiative in a program. This object is available in API version 59.0 and later.
-   **[ProgramInitiativeEnrl](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_programinitiativeenrl.htm)**
    Represents the enrollment details of a sustainability initiative in a program. This object is available in API version 59.0 and later.
-   **[ReferenceDataLoadLog](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_referencedataloadlog.htm)**
    Represents information about the history of loading reference data for emissions factors. This object is available in API version 60.0 and later.
-   **[RefrigerantEmssnFctr](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_refrigerantemssnfctr.htm)**
    Represents the global warming potential values for individual refrigerants. Global warming potential compares the atmospheric radiative forcing of one molecule of refrigerant to that of carbon dioxide. This object is available in API version 54.0 and later.
-   **[RentalCarEmssnFctr](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_rentalcaremssnfctr.htm)**
    Represents the emissions factors for scope 3 rental car usage. This object is available in API version 54.0 and later.
-   **[RentalCarEnrgyUse](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_rentalcarenrgyuse.htm)**
    Represents the energy consumption related to rental cars. This object is available in API version 54.0 and later.
-   **[Scope3CrbnFtprnt](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_scope3crbnftprnt.htm)**
    Represents the total carbon emissions from scope 3 activities. Carbon footprint quantifies the effect of atmospheric warming, which is represented in metric tonnes of carbon dioxide equivalent (tCO₂e). This object is available in API version 54.0 and later.
-   **[Scope3EmssnSrc](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_scope3emssnsrc.htm)**
    Represents scope 3 activities that are the source of greenhouse gas emissions. This object is available in API version 54.0 and later.
-   **[Scope3PcmtItem](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_scope3pcmtitem.htm)**
    Represents the procurement (corporate spending) entry records. Procurement is considered as the amount that the organization spends on goods and services. This object is available in API version 54.0 and later.
-   **[Scope3PcmtSummary](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_scope3pcmtsummary.htm)**
    Represents the amount that the organization spends for an individual procurement category. Scope 3 procurement summary quantifies the effect on atmospheric warming, represented in tonnes of carbon dioxide equivalent (tCO₂e) by using a matched emission factor from an associated Procurement Emission Factor Item record. This object is available in API version 54.0 and later.
-   **[SearchableReferenceDocument](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_searchablereferencedocument.htm)**
    Represents documents that are referenced to search for answers during documentation authoring, such as ESG disclosures. This object is available in API version 61.0 and later.
-   **[StnryAssetAnnualFact](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_stnryassetannualfact.htm)**
    Represents the information about stationary assets and their types, which is used to quantify the related intensity. This object is available in API version 56.0 and later.
-   **[StnryAssetCrbnFtprnt](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_stnryassetcrbnftprnt.htm)**
    Represents the total carbon emissions and other environmental attributes from stationary assets. Carbon footprint quantifies the effect of atmospheric warming, which is represented in metric tonnes of carbon dioxide equivalent (tCO₂e). Additionally, it also quantifies various aspects of the energy performance of the asset. This object is available in API version 54.0 and later.
-   **[StnryAssetCrbnFtprntItm](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_stnryassetcrbnftprntitm.htm)**
    Represents the total tCO₂e emissions of individual fuel types, which are the child records of the stationary asset carbon footprint record. This object is available in API version 54.0 and later.
-   **[StnryAssetEnrgyUse](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_stnryassetenrgyuse.htm)**
    Represents the energy consumption related to stationary assets across multiple fuel types. This object is available in API version 54.0 and later.
-   **[StnryAssetEnvrSrc](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_stnryassetenvrsrc.htm)**
    Represents assets that are stationary in nature, use energy that can be recorded, and are the source of greenhouse gas emissions. This object is available in API version 54.0 and later.
-   **[StnryAssetWaterActvty](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_stnryassetwateractvty.htm)**
    Represents information about the water activities, such as withdrawal, consumption, or discharge that are related to the stationary assets. This object is available in API version 56.0 and later.
-   **[StnryAssetWaterFtprnt](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_stnryassetwaterftprnt.htm)**
    Represents information about the total volume of water from the water activities, such as withdrawal, consumption, or discharge that are related to the stationary assets. This object is available in API version 56.0 and later.
-   **[StnryAssetWtrFtprntItm](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_stnryassetwtrftprntitm.htm)**
    Represents information about the total volume of water from each water activity, such as withdrawal, consumption, or discharge related to the stationary assets. Each water activity is a child record of the stationary asset water footprint object. This object is available in API version 56.0 and later.
-   **[SocialContributionSum](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_socialcontributionsum.htm)**
    Represents information about social contributions made to political and non-political organizations belonging to financial and non-financial categories. This object is available in API version 57.0 and later.
-   **[Supplier](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_supplier.htm)**
    Represents information about the supplier that’s related to a climate-committed company. This object is available in API version 54.0 and later.
-   **[SupplierProduct](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_supplierproduct.htm)**
    Represents information that's used to track the products that are purchased from a supplier. This object is available in API version 56.0 and later.
-   **[SustainabilityCredit](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_sustainabilitycredit.htm)**
    Represents information about the sustainability credits that are a part of a sustainability purchase. This object is available in API version 56.0 and later.
-   **[SustainabilityPurchase](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_sustainabilitypurchase.htm)**
    Represents information related to the sustainability credits purchases such as carbon credits. This object is available in API version 56.0 and later.
-   **[SustainabilityScorecard](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_sustainabilityscorecard.htm)**
    Represents information about the annual sustainability scorecard of third-party organizations whose data is used to calculate scope 3 emissions. This object is available in API version 54.0 and later.
-   **[SustainabilityStakeholder](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_sustainabilitystakeholder.htm)**
    Represents the stakeholder for sustainability data, such as stakeholder for environmental, social, and governance data. This object is available in API version 64.0 and later.
-   **[SustainabilityTask](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_sustainabilitytask.htm)**
    Represents the tasks that the sustainability stakeholder does for a sustainability task group. This object is available in API version 64.0 and later.
-   **[SustainabilityTaskGroup](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_sustainabilitytaskgroup.htm)**
    Represents the group of sustainability tasks. This object is available in API version 64.0 and later.
-   **[SustainabilityUom](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_sustainabilityuom.htm)**
    Represents information about the additional unit of measure values defined by a customer. This object is available in API version 56.0 and later.
-   **[SustnMaterialUseSummary](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_sustnmaterialusesummary.htm)**
    Represents the circular economy information that a company discloses as part of ESRS E5 - Resource use and circular economy. This object is available in API version 65.0 and later.
-   **[SustnUomConversion](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_sustnuomconversion.htm)**
    Represents information about the unit of measure conversion for the additional fuel types defined by a customer. This object is available in API version 57.0 and later.
-   **[TaxDisclosureSummary](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_taxdisclosuresummary.htm)**
    Represents statistics about the disclosure of business entity information to all tax jurisdictions. This object is available in API version 57.0 and later.
-   **[VehicleAssetCrbnFtprnt](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_vehicleassetcrbnftprnt.htm)**
    Represents the total carbon emissions from vehicles. Carbon footprint quantifies the effect of atmospheric warming, which is represented in metric tonnes of carbon dioxide equivalent (tCO₂e). This object is available in API version 54.0 and later.
-   **[VehicleAssetEmssnSrc](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_vehicleassetemssnsrc.htm)**
    Represents assets that are mobile in nature, use energy that can be recorded, and are the source of greenhouse gas emissions. This object is available in API version 54.0 and later.
-   **[VehicleAssetEnrgyUse](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_vehicleassetenrgyuse.htm)**
    Represents the fuel consumption related to vehicles. This object is available in API version 54.0 and later.
-   **[WasteFootprint](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_wastefootprint.htm)**
    Represents the volume of aggregated waste and carbon emissions from waste generated either as part of operations or during the end- of- life of a product. This object is available in API version 54.0 and later.
-   **[WasteFootprintItem](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_wastefootprintitem.htm)**
    Represents the volume by waste type and disposal type of aggregated waste generated either as part of operations or during the end- of- life of a product. This object is available in API version 54.0 and later.
-   **[WstDispoEmssnFctrSet](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_wstdispoemssnfctrset.htm)**
    Represents the emissions factors for scope 3 waste handling. This object is available in API version 54.0 and later.
-   **[WstDispoEmssnFctrSetItm](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_wstdispoemssnfctrsetitm.htm)**
    Represents the individual emissions factors for scope 3 waste handling based on the waste type and disposal type. This object is available in API version 54.0 and later.
-   **[YearlyUsageTrkgDataGap](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_yearlyusagetrkgdatagap.htm)**
    Represents the percentage of gaps in the fuel usage data in a year. This object is available in API version 64.0 and later.

## Related Topics

- Net Zero Cloud Overview (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_cloud_data_model.htm)
- AirTravelEmssnFctr (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_airtravelemssnfctr.htm)
- AirTravelEnrgyUse (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_airtravelenrgyuse.htm)
- AntiCorruptionInitSum (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_anticorruptioninitsum.htm)
- AnnualEmssnInventory (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_annualemssninventory.htm)
- AnnualEmssnInventoryExtension (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_annualemssninventoryextension.htm)
- AnnualEmssnRdctnTarget (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_annualemssnrdctntarget.htm)
- AsmtQstnMaterialityTpc (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_asmtqstnmaterialitytpc.htm)
- BiodiversitySummary (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_biodiversitysummary.htm)
- BldgEnrgyIntensity (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_objects_bldgenrgyintensity.htm)
