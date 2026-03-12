---
title: "HealthcareFacility"
domain: life-sciences-dev-guide
topic: healthcarefacility
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:43.260Z
estimatedTokens: 4593
keywords: [HealthcareFacility, healthcare, facility, may, physical, functional, geographic, business, API, version, 51.0, later, Calls, Additional, Objects]
---

# HealthcareFacility

> Represents a healthcare facility and all its related details. These details may
      be physical, functional, geographic, or business details. This object is available in API
    version 51.0 and later.

# HealthcareFacility

Represents a healthcare facility and all its related details. These details may be physical, functional, geographic, or business details. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypeMaster-detail referencePropertiesCreate, Filter, Group, SortDescriptionReferences the business account of the facility.Referenced ObjectsAccount |
| AreResearchStudiesConducted | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether research studies are conducted in the healthcare facility (true) or not (false). This field is available in API version 63.0 when Site Management is enabled.The default value is false. |
| AvailabilityExceptions | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe times when the facility isn’t available. Only non-standard time-offs are recorded in this field.ExamplesFacility time off because of a natural disaster. |
| AverageActualPtcpEnrlDrtn | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe average actual number of days spent enrolling participants at the site. This field is available in API version 62.0 and later when Site Management is enabled. |
| AverageActlPtcpEnrlRate | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe average actual participant enrollment rate for all research studies at the site. This field is available in API version 64.0 and later when Site Management is enabled. |
| AverageOpdPatientCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe average count of the patients that visit the OPD at the healthcare facility. This field is available in API version 62.0 and later when Site Management is enabled. |
| AvgActualPtcpEnrlCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe average actual number of participants that are enrolled for the research study at the site. This field is available in API version 62.0 and later when Site Management is enabled. |
| AvgClnclTrialAgreeDrtn | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe average time taken to execute the clinical trial agreement. This field is available in API version 62.0 and later when Site Management is enabled. |
| AvgInvtglProductReleaseDrtn | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe average number of days between the start of the site activation process to the release of the investigational product at the site. This field is available in API version 62.0 and later when Site Management is enabled. |
| AvgProjectedPtcpEnrlCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe average number of participants that are expected to enroll for the research study at the site. This field is available in API version 62.0 and later when Site Management is enabled. |
| AvgProjectedPtcpEnrlDrtn | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe average projected number of days to enroll participants at the site. This field is available in API version 62.0 and later when Site Management is enabled. |
| AvgProtocolDeviationCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe average number of protocol deviations reported during the research study at the site. This field is available in API version 62.0 and later when Site Management is enabled. |
| AvgQualVstToInitVstDrtn | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe average number of days between the site qualification visit and site initiation visit. This field is available in API version 62.0 and later when Site Management is enabled. |
| AvgRegltyDocTrnarndDrtn | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe average turnaround time for the preparation of the regulatory documents for Institutional Review Board (IRB) or the Ethics Committee (EC) submission. This field is available in API version 62.0 and later when Site Management is enabled. |
| AvgRsrchEthicalReviewDrtn | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the average duration required for an approval for the clinical trial at the heathcare facility from the Institutional Review Board (IRB) or Ethics Committee (EC). This field is available in API version 62.0 and later when Site Management is enabled.Possible values are:30 - 60 Days61 - 90 Days91 - 120 DaysGreater than 120 DaysLess than 30 Days |
| AvgSiteActvToFstPtcpDrtn | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe average number of days between the site activation and the first participant visit to the site. |
| AvgSiteActvToLastPtcpDrtn | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe average number of days between the site activation and the last participant visit to the site. This field is available in API version 62.0 and later when Site Management is enabled. |
| Classification | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the classification of the healthcare facility, such as Previous Partner, Key Opinion Leader, and Novice Member. This field is available in API version 63.0 and later when Site Management is enabled.Possible values are:Key Opinion LeaderNovice Member.Previous Partner |
| ClinicalTrialAgreementType | TypemultipicklistPropertiesCreate, Filter, Nillable, Restricted picklist, UpdateDescriptionSpecifies the type of clinical trial agreement that can be done with the healthcare facility. This field is available in API version 62.0 and later when Site Management is enabled.Possible values are:Tetra-PartiteTripartite |
| HealthcareProviderId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe healthcare provider associated with the facility.This field is a relationship field. This field is available in API version 62.0 and later when Site Management is enabled.Relationship NameHealthcareProviderRefers ToHealthcareProvider |
| InvestigationalProductType | TypemultipicklistPropertiesCreate, Filter, Nillable, Restricted picklist, UpdateDescriptionSpecifies the type of investigational product available at the healthcare facility. This field is available in API version 62.0 and later when Site Management is enabled.Possible values are:BiologicDeviceDiagnosticDrugOthersPalliativeVaccine |
| InvtglProdtDestructionCpbl | TypemultipicklistPropertiesCreate, Filter, Nillable, Restricted picklist, UpdateDescriptionSpecifies the type of Investigational Product disposal capability. This field is available in API version 62.0 and later when Site Management is enabled.Possible values are:Off-SiteOn-SiteOthers |
| InvtglProdtPreparationCpbl | TypemultipicklistPropertiesCreate, Filter, Nillable, Restricted picklist, UpdateDescriptionSpecifies the list of handling equipment available at the facility for the investigational product. This field is available in API version 62.0 and later when Site Management is enabled.Possible values are:Extemporaneous PreparationHorizontal Laminar Flow HoodNon-Vented Glove BoxOtherVented Glove BoxVertical Laminar Flow Hood |
| InvtglProductStorageCpbl | TypemultipicklistPropertiesCreate, Filter, Nillable, Restricted picklist, UpdateDescriptionSpecifies the features of the investigational product store available at the healthcare facility. This field is available in API version 62.0 and later when Site Management is enabled.Possible values are:Access ControlledBack-Up PowerMinimum and Maximum Temperature MonitoringTemperature AlarmTemperature MonitoringTemperature Monitoring Log Generation |
| IsAfflWithSiteMgmtOrg | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the healthcare facility is affiliated to the site management organization. This field is available in API version 62.0 and later when Site Management is enabled.The default value is false. |
| FacilityTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe system-defined code that represents the type of the facility in terms of that functions performed.Referenced ObjectsCodeSetBundle |
| IsAlwaysOpen | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the facility is open during all hours. |
| IsDedResearchStudyRoomAvl | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether a dedicated room is available at the healthcare facility to conduct the research study. This field is available in API version 62.0 and later when Site Management is enabled.The default value is false. |
| IsDedRsrchStdyMntrRmAvl | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether a dedicated room is available at the healthcare facility to monitor the research study. This field is available in API version 62.0 and later when Site Management is enabled.The default value is false. |
| IsGoodClnclPracTrnPrvd | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether good clinical practice training is provided at the healthcare facility. This field is available in API version 62.0 and later when Site Management is enabled.The default value is false. |
| IsPgxSpcmnCollAvl | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the pharmacogenoic specimen collection is available at the healthcare facility. This field is available in API version 62.0 and later when Site Management is enabled.The default value is false. |
| IsPkpdSpcmnCollStrgAvl | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether PKPD specimen collection and storage is available at the healthcare facility. This field is available in API version 62.0 and later when Site Management is enabled.The default value is false. |
| IsRsrchEthicalRvwSbmsSupp | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the facility supports the regulatory document submission to the Institutional Review Board (IRB) or Ethics Committee (EC). This field is available in API version 62.0 and later when Site Management is enabled.The default value is false. |
| IsRsrchStudyMtrlStoreAvl | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether a store is available at the healthcare facility to keep the research study materials, such as laboratory kits. This field is available in API version 62.0 and later when Site Management is enabled.The default value is false. |
| IsSatelliteSite | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the healthcare facility is a satellite site of another healthcare facility (true) or not (false). This field is available in API version 62.0 and later when Site Management is enabled.The default value is false. |
| IsTrainingProvided | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether a training is provided to the research staff at the healthcare facility. This field is available in API version 62.0 and later when Site Management is enabled.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe last date that the record was referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe last date that the record was viewed. |
| LicensedBedCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of licensed beds the facility has. |
| LocationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReferences the location record representing the facility’s geolocation.Referenced ObjectsLocation |
| LocationType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of the facility in terms of its physical structure.Possible values are:BuildingFacilityHouseICU Ward |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the healthcare facility record. |
| ParentHealthcareFacilityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe parent facility that the facility is a part of.ExamplesThe hospital that an ER wing is a part of.Referenced ObjectsHealthcareFacility |
| PatientAgeRange | TypemultipicklistPropertiesCreate, Filter, Nillable, Restricted picklist, UpdateDescriptionSpecifies the age range of the patients at the healthcare facility. This field is available in API version 62.0 and later when Site Management is enabled.Possible values are:18 to 64Greater than or Equal to 65Less than or Equal to 17 |
| RegulatoryViolationCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of regulatory violations reported during the research study at the site. This field is available in API version 62.0 and later when Site Management is enabled. |
| ResearchStudyMethod | TypemultipicklistPropertiesCreate, Filter, Nillable, Restricted picklist, UpdateDescriptionSpecifies the method of conducting the study at the healthcare facility. This field is available in API version 62.0 and later when Site Management is enabled.Possible values are:HybridTraditionalVirtual |
| ResearchStudyPhase | TypemultipicklistPropertiesCreate, Filter, Nillable, Restricted picklist, UpdateDescriptionSpecifies the phases under which the study is conducted. This field is available in API version 62.0 and later when Site Management is enabled.Possible values are:Phase 1Phase 2Phase 3Phase 4 |
| ResearchStudyStartYear | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe start year of the research study at the healthcare facility. This field is available in API version 62.0 and later when Site Management is enabled. |
| ResearchStudyType | TypemultipicklistPropertiesCreate, Filter, Nillable, Restricted picklist, UpdateDescriptionSpecifies the type of research study conducted at the healthcare facility. This field is available in API version 62.0 and later when Site Management is enabled.Possible values are:Expanded AccessInterventionalObservational |
| RsrchEthicalRvwComteType | TypemultipicklistPropertiesCreate, Filter, Nillable, Restricted picklist, UpdateDescriptionSpecifies the type of the Institutional Review Board (IRB) or Ethics Committee (EC). This field is available in API version 62.0 and later when Site Management is enabled.Possible values are:30 - 60 Days61 - 90 Days91 - 120 DaysGreater than 120 DaysLess than 30 Days |
| SourceSystem | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe source system from where the record was brought into Salesforce. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe identifier of the record in its source system. |
| SourceSystemModified | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the record was last modified in its source system. |
| UnitOfMeasureId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unit of measure that’s used to calculate the duration of a specific activity at the facility. This field is available in API version 62.0 and later when Site Management is enabled.This field is a relationship field.Relationship NameUnitOfMeasureRefers ToUnitOfMeasure |

## Additional Information for HealthcareFacility in Other Objects

In addition to creating a record using these fields, you can add more details to your HealthcareFacility record by creating records in certain other objects, and referencing your HealthcareFacility record as the parent record. Here’s the list of objects you can associate to HealthcareFacility in this way, the type of information they add, and the field they use to reference HealthcareFacility.

| Object | Type of Information | Reference Field |
| --- | --- | --- |
| Identifier | Associates an identifier value to the facility. | ParentRecordId |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[HealthcareFacilityChangeEvent](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 59.0)

Change events are available for the object.

[HealthcareFacilityFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[HealthcareFacilityHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- HealthcareFacilityChangeEvent (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm)
- HealthcareFacilityFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- HealthcareFacilityHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
