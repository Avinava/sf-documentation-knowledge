---
title: "CareProgramSite"
domain: life-sciences-dev-guide
topic: careprogramsite
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:45.452Z
estimatedTokens: 3522
keywords: [CareProgramSite, care, program, site, API, version, 61.0, later, Calls, Associated, Objects]
---

# CareProgramSite

> Represents the details about the care program site. This object is
      available in API version 61.0 and later.

# CareProgramSite

Represents the details about the care program site. This object is available in API version 61.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ActlFirstPtcpEnrlDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe actual date when the first participant was enrolled in the study at the site. This field is available in API version 64.0 and later when Site Management is enabled. |
| ActlFstPtcpFstVstDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe actual date when the first enrolled participant at the site had their initial study visit, as specified in the study protocol. This field is available in API version 64.0 and later when Site Management is enabled. |
| ActlFstPtcpLastVstDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe actual date when the first enrolled participant at the site completed their final scheduled study visit, as outlined in the study protocol. This field is available in API version 64.0 and later when Site Management is enabled. |
| ActlLastPtcpEnrlDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe actual date when the last participant was enrolled in the study at the site. This field is available in API version 64.0 and later when Site Management is enabled. |
| ActualPtcpEnrollmentCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe actual number of participants that are enrolled for the research study at the site. This field is available in API version 62.0 and later when Site Management is enabled. |
| ActualPtcpEnrollmentDrtn | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe actual number of days spent enrolling participants at the site. This field is available in API version 62.0 and later when Site Management is enabled. |
| ActualPtcpEnrollmentRate | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe actual rate of participant enrollment at the site. This field is available in API version 64.0 and later when Site Management is enabled. |
| ActlLastPtcpFstVstDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe actual date when the last enrolled participant at the site had their initial study visit, as defined by the study protocol. This field is available in API version 64.0 and later when Site Management is enabled. |
| ActlLastPtcpLastVstDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe actual date when the last enrolled participant at the site completed their final scheduled study visit, as outlined in the study protocol. This field is available in API version 64.0 and later when Site Management is enabled. |
| CareProgramId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe care program associated with the research study that's conducted at the specified site.This field is a relationship field.Relationship NameCareProgramRefers ToCareProgram |
| ClnclTrialAgreeSignedDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the clinical trial agreement for the site was signed. This field is available in API version 64.0 and later when Site Management is enabled. |
| ClnclTrialAgreeTrnarndDrtn | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe time taken to execute the clinical trial agreement. This field is available in API version 62.0 and later when Site Management is enabled. |
| ForcstFirstPtcpEnrlDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe projected date when the first participant enrolls in the study at the site. This field is available in API version 64.0 and later when Site Management is enabled. |
| ForcstFstPtcpFstVstDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe projected date when the first enrolled participant at the site has their initial study visit, such as a screening or a baseline visit. This field is available in API version 64.0 and later when Site Management is enabled. |
| ForcstFstPtcpLastVstDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe initially projected date when the first enrolled participant at the site completes their final scheduled study visit, as defined in the study protocol. This field is available in API version 64.0 and later when Site Management is enabled. |
| ForcstLastPtcpEnrlDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe projected date when the final participant enrolls in the study at the site. This field is available in API version 64.0 and later when Site Management is enabled. |
| ForcstLastPtcpFstVstDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe projected date when the last enrolled participant at the site has their initial study visit, as defined by the study protocol. This field is available in API version 64.0 and later when Site Management is enabled. |
| ForcstLastPtcpLastVstDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe initially projected date when the last enrolled participant at the site completes their final scheduled study visit, as outlined in the study protocol. This field is available in API version 64.0 and later when Site Management is enabled. |
| HealthCareFacilityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe health care facility associated with the care program site.This field is a relationship field.Relationship NameHealthCareFacilityRefers ToHealthcareFacility |
| InvestigatorId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe investigator who is responsible for conducting the research study at the healthcare facility. This field is available in API version 63.0 and later when Site Management is enabled.This field is a relationship field.Relationship NameInvestigatorRefers ToHealthcareProvider |
| InvtglProductReleaseDrtn | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of days between the start of the site activation process to the release of the investigational product at the site. This field is available in API version 62.0 and later when Site Management is enabled. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| LocationId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe location associated with the care program site.This field is a relationship field.Relationship NameLocationRefers ToLocation |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the care program site. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the object assigned to the territory.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| PlannedPtcpEnrollmentRate | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe planned rate of participant enrollment, based on the estimates by the investigator at the site. |
| PredictedPtcpEnrollmentRate | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe predicted rate of participant enrollment at the site. |
| ProjectedPtcpEnrlCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of participants that are expected to enroll for the research study at the site. This field is available in API version 62.0 and later when Site Management is enabled. |
| ProjectedPtcpEnrlDrtn | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe projected number of days to enroll participants at the site. This field is available in API version 62.0 and later when Site Management is enabled. |
| ProtocolDeviationCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of protocol deviations reported during the research study at the site. This field is available in API version 62.0 and later when Site Management is enabled. |
| QualVstToInitVstDrtn | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of days between the site qualification visit and site initiation visit. This field is available in API version 62.0 and later when Site Management is enabled. |
| RandomizedParticipantCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of participants randomly assigned to different study groups at the site. This field is available in API version 62.0 and later when Site Management is enabled. |
| RegulatoryDocTurnaroundDrtn | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe turnaround time for the preparation of the regulatory documents for IRB or the ethics committee submission. This field is available in API version 62.0 and later when Site Management is enabled. |
| ResearchStudyId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe research study associated with the care program site.This field is a relationship field.Relationship NameResearchStudyRefers ToResearchStudy |
| RsrchStudyCmplPtcpCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of participants who completed the research study at the site. This field is available in API version 62.0 and later when Site Management is enabled. |
| ScreenedParticipantCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of participants screened for the research study at the site. This field is available in API version 62.0 and later when Site Management is enabled. |
| SeriousAdverseEventCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of serious adverse events reported during the research study at the site. This field is available in API version 62.0 and later when Site Management is enabled. |
| SiteActivatedDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the site was activated for the research study. This field is available in API version 64.0 and later when Site Management is enabled. |
| SiteClosedOutDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the site was closed out for the research study. This field is available in API version 64.0 and later when Site Management is enabled. |
| SiteIdentifiedDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the site was identified for the feasibility for conducting research study. This field is available in API version 64.0 and later when Site Management is enabled. |
| SiteActvToFirstPtcpDrtn | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of days between the site activation and the first participant visit to the site. This field is available in API version 62.0 and later when Site Management is enabled. |
| SiteActvToLastPtcpDrtn | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of days between the site activation and the last participant visit to the site. This field is available in API version 62.0 and later when Site Management is enabled. |
| SponsorRepresentativeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe representative of the sponsor for the site during the research study. This field is available in API version 62.0 and later when Site Management is enabled.This field is a relationship field.Relationship NameSponsorRepresentativeRefers ToContact |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe status of the care program site.Possible values are:InactiveRecruitment ClosedRecruitment OngoingTrial CompletedTrial OngoingTrial Upcoming |
| TeamId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe team associated with the care program site.This field is a relationship field.Relationship NameTeamRefers ToTeam |
| UnitOfMeasureId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unit of measure for selected duration. This field is available in API version 62.0 and later when Site Management is enabled.This field is a relationship field.Relationship NameUnitOfMeasureRefers ToUnitOfMeasure |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CareProgramSiteOwnerSharingRule](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[CareProgramSiteShare](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- CareProgramSiteOwnerSharingRule (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_ownersharingrule.htm)
- CareProgramSiteShare (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm)
