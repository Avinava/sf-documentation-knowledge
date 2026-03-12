---
title: "ResearchStudyProtocolInfo"
domain: life-sciences-dev-guide
topic: researchstudyprotocolinfo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:47.342Z
estimatedTokens: 677
keywords: [ResearchStudyProtocolInfo, research, study, protocol, document, API, version, 62.0, later, Calls]
---

# ResearchStudyProtocolInfo

> Represents details of the research study protocol document. This object
      is available in API version 62.0 and later.

# ResearchStudyProtocolInfo

Represents details of the research study protocol document. This object is available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Content | TypetextareaPropertiesCreate, UpdateDescriptionThe content text for the research study protocol. |
| ContentType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of the content stored.Possible values are:AbbreviationsAdverse Events ClassificationAdverse Events DefinitionAdverse Events Participant ReportingAdverse Events ReportingAnalysis Dataset CriteriaAnalysis Population CriteriaBackgroundBiospecimen Sample RetentionClinical Masking DescriptionClinical MonitoringConfidentiality and PrivacyConflict of Interest PolicyData Handling and Record KeepingDosage JustificationEnd of Study ProcedureEvent Assessment Frequency and Time PeriodGender Eligibility DescriptionInformed Consent ProcessIntervention BenefitsIntervention ComplianceIntervention DiscontinuationIntervention Dosing and AdministrationIntervention PreparationIntervention RisksIntervention Risks and Benefits AssessmentsIntervention Storage and StabilityLost to Follow-upPregnancy ReportingPrimary Endpoint AnalysisProtocol DeviationsPublication and Data Sharing PolicyQuality Assurance and ControlSafety AnalysisSafety OversightSample Size DeterminationSecondary Endpoint AnalysisSerious Adverse Events DefinitionSerious Adverse Events ReportingSpecial Interest ReportingStatistical Analysis SummaryStudy DesignStudy Discontinuation and ClosureStudy PopulationStudy Population DescriptionStudy Record Retention PeriodStudy Scientific RationaleSubgroup AnalysisSummary |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last referenced a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the research study protocol information. |
| ResearchStudyId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe research study associated with the content.This field is a relationship field.Relationship NameResearchStudyRelationship TypeMaster-detailRefers ToResearchStudy (the master object) |
