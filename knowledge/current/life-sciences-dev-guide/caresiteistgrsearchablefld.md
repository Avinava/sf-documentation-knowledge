---
title: "CareSiteIstgrSearchableFld"
domain: life-sciences-dev-guide
topic: caresiteistgrsearchablefld
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:45.568Z
estimatedTokens: 2279
keywords: [CareSiteIstgrSearchableFld, clinical, trial, investigator, associated, site, API, version, 63.0, later, Calls]
---

# CareSiteIstgrSearchableFld

> Represents information about the clinical trial investigator associated with
         a site. This object is available in API version 63.0 and later.

# CareSiteIstgrSearchableFld

Represents information about the clinical trial investigator associated with a site. This object is available in API version 63.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ActiveStudyCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe count of active research studies performed by the investigator for a specialty. |
| AverageActualPtcpEnrlDrtn | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe average actual number of days for enrollment of participants at the site. |
| AverageOpdPatientCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe average count of the patients who visit the OPD at the healthcare facility. |
| AvgActualPtcpEnrlCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe average number of participants who enrolled for the research study at the site. |
| AvgClnclTrialAgreeDrtn | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe average time taken to execute the clinical trial agreement. |
| AvgInvtglProductReleaseDrtn | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe average number of days between the start of the site activation process to the release of the investigational product at the site. |
| AvgQualVstToInitVstDrtn | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe average number of days between the site qualification visit and site initiation visit. |
| AvgRgltyDocTrnarndDrtn | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe average turnaround time for the preparation of the regulatory documents for Institutional Review Board (IRB) or the Ethics Committee (EC) submission. |
| AvgSiteActvToFstPtcpDrtn | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe average number of days between the site activation and the first participant visit to the site. |
| AvgSiteActvToLastPtcpDrtn | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe average number of days between the site activation and the last participant visit to the site. |
| CompletedStudyCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe count of research studies completed by the investigator for a specialty. |
| HealthcareFacilityCity | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe city where the healthcare facility is located. |
| HealthcareFacilityClsfn | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe classification of the healthcare facility, such as Previous Partner, Key opinion Leader, and New Member. |
| HealthcareFacilityCountry | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe country where the healthcare facility is located. |
| HealthcareFacilityId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe healthcare facility associated with the site investigator.This field is a relationship field.Relationship NameHealthcareFacilityRefers ToHealthcareFacility |
| HealthcareFacilityName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the healthcare facility associated with the site investigator. |
| HealthcareFacilitySpecialty | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe healthcare specialty associated with the healthcare facility. |
| HealthcareFacilityState | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe state where the healthcare facility is located. |
| HealthcareFacilityType | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of the healthcare facility associated with the site investigator, such as Government. |
| HlthcrFacilRsrchStudyExprc | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe total years of experience of the healthcare facility in conducting research studies. |
| InvestigatorClassification | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe classification of the investigator, such as Previous Partner, Key Opinion Leader, and New Member. |
| InvestigatorId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe investigator who conducts the research study at the healthcare facility.This field is a relationship field.Relationship NameInvestigatorRefers ToHealthcareProvider |
| InvestigatorName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the investigator who conducts the research study at the healthcare facility. |
| InvestigatorTherapeuticArea | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe therapeutic areas that an investigator specializes in, for example, Oncology and Cardiology. |
| InvestigatorType | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of the investigator who conducts the research study at the healthcare facility, such as Investigator or Sub investigator. |
| InvtglProdtDestructionCpbl | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe type of investigational product disposal capability. |
| InvtglProdtPreparationCpbl | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionSpecifies the list of handling equipment available at the facility for the investigational product. |
| InvtglProductStorageCpbl | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe features of the investigational product storage available at the healthcare facility. |
| IsAfflWithSiteMgmtOrg | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the healthcare facility is affiliated to a site management organization (true) or not (false).The default value is false. |
| IsHealthcareFacilAcrdtAvl | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the healthcare facility is accredited to a healthcare accreditation body (true) or not (false).The default value is false. |
| IsIstgrLicenseAvailable | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the investigator has a license to conduct clinical trials (true) or not (false).The default value is false. |
| IsIstgrPublicationAvailable | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the investigator has published articles related to the research study (true) or not (false).The default value is false. |
| IsSatelliteSiteAssociated | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether satellite sites are associated with the healthcare facility (true) or not (false).The default value is false. |
| LaboratoryCapability | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe imaging and the non-imaging laboratory capabilities in the healthcare facility, such as X-ray and blood tests. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the care site investigator searchable field. |
| OverallFacilityScore | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe overall score for the healthcare facility based on criteria such as facility experience and licenses. |
| OverallInvestigatorScore | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe overall score of the investigator based on criteria, such as experience and licenses. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the care site investigator searchable field record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| PatientAgeRange | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe age range of the patients at the healthcare facility. |
| SuppInvtglProductType | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe type of investigational product supported at the healthcare facility. |
| SupportedStudyPhase | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe phases of the research study that are supported at the healthcare facility. |
| SupportedStudyType | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe type of research study supported at the healthcare facility. |
