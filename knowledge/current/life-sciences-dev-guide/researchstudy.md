---
title: "ResearchStudy"
domain: life-sciences-dev-guide
topic: researchstudy
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:44.590Z
estimatedTokens: 1796
keywords: [ResearchStudy, FHIR, resource, maps, objects, Salesforce, V4.0, Clinical, Data, Model, Mapping, research, study, include, design, execution, oversight, API, version, 61.0]
---

# ResearchStudy

> Represents the details of a research study that include its design,
         execution, and oversight. This object is available in API version 61.0 and
      later.

# ResearchStudy

Represents the details of a research study that include its design, execution, and oversight. This object is available in API version 61.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ActlFirstPtcpEnrlDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe actual date when the first participant was enrolled in the study at a participating clinical trial site. This field is available in API version 64.0 and later when Site Management is enabled. |
| ActlFstPtcpFstVstDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe actual date when the first enrolled participant across all sites had their initial study visit, as specified in the study protocol. This field is available in API version 64.0 and later when Site Management is enabled. |
| ActlFstPtcpLastVstDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe actual date when the first enrolled participant across all sites completed their final scheduled study visit, as outlined in the study protocol. This field is available in API version 64.0 and later when Site Management is enabled. |
| ActlLastPtcpEnrlDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe actual date when the final participant was enrolled in the study across all participating clinical trial sites. This field is available in API version 64.0 and later when Site Management is enabled. |
| ActlLastPtcpFstVstDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe actual date when the last enrolled participant across all sites had their initial study visit, as defined by the study protocol. This field is available in API version 64.0 and later when Site Management is enabled. |
| ActlLastPtcpLastVstDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe actual date when the last enrolled participant across all sites completed their final scheduled study visit, as outlined in the study protocol. This field is available in API version 64.0 and later when Site Management is enabled. |
| ActualFinalDbLockDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe actual date when the final database lock is implemented across the clinical trial sites. This field is available in API version 64.0 and later when Site Management is enabled. |
| BiospecRetention | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the retention of the collected participant samples in a biorepository. This field is available in API version 62.0 and later.Possible values are:None RetainedSamples With DNASamples Without DNA |
| BlindingTypeCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionBlinding Type of the Care Program.This field is a polymorphic relationship field.Relationship NameBlindingTypeCodeRefers ToCodeSet, CodeSetBundle |
| CareProgramId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe care program associated with the research study.This field is a relationship field.Relationship NameCareProgramRefers ToCareProgram |
| CareSpecialtyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe care specialty associated with the research study. This field is available in API version 62.0 and later.This field is a relationship field. |
| Description | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA detailed description of the research. |
| DiscontinuationReason | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe reason why the research was discontinued.Possible values are:Accrual Goal MetLack of ProgressTemporarily Closed as per Study DesignToxicity |
| EligibleGender | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the gender that's eligible for the research study.Possible values are:AnyFemaleMaleTransgender |
| EligibleMaximumAge | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe maximum eligibility age of a candidate for the research study. |
| EligibleMinimumAge | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe minimum eligibility age of a candidate for the research study. |
| EndDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when the research ends. |
|  |  |
| ForcstFirstPtcpEnrlDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe projected date when the first participant enrolls in the study at a participating clinical trial site. This field is available in API version 64.0 and later when Site Management is enabled. |
| ForcstFstPtcpLastVstDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe initially projected date when the first enrolled participant across all sites completes their final scheduled study visit, as defined in the study protocol. This field is available in API version 64.0 and later when Site Management is enabled. |
| ForcstFstPtcpFstVstDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe projected date when the first enrolled participant across all sites has their initial study visit, such as a screening or baseline visit. This field is available in API version 64.0 and later when Site Management is enabled. |
| ForcstLastPtcpEnrlDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe projected date when the final participant enrolls in the study across all participating clinical trial sites. This forecast is based on the planned sample size and recruitment rate. This field is available in API version 64.0 and later when Site Management is enabled. |
| ForcstLastPtcpFstVstDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe projected date when the last enrolled participant across all sites has their initial study visit, as defined by the study protocol. This field is available in API version 64.0 and later when Site Management is enabled. |
| ForcstLastPtcpLastVstDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe initially projected date when the last enrolled participant across all sites completes their final scheduled study visit, as outlined in the study protocol. This field is available in API version 64.0 and later when Site Management is enabled. |
| InclusionExclusionCriteria | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe inclusion criteria and exclusion criteria of the research study. |
| IntentType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of the research, based on the intent of its activities.Possible values are:Basic ScienceDevice FeasibilityDiagnostic StudyHealth Services ResearchPreventionScreeningSupportive CareTreatment |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the research study. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| Phase | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe current phase of the research.Possible values are:Early Phase 1Not ApplicablePhase 1Phase 1/Phase 2Phase 2Phase 2/Phase 3Phase 3Phase 4 |
| PlannedFinalDbLockDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe planned date when the final database lock is implemented across the clinical trial sites. This field is available in API version 64.0 and later when Site Management is enabled. |
| PrimaryContactInformationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe primary phone number of the candidate.This field is a relationship field.Relationship NamePrimaryContactInformationRefers ToContactPointPhone |
| ProtocolDocumentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe protocol content document associated with the research study.This field is a relationship field.Relationship NameProtocolDocumentRefers ToContentDocument |
| PublicationStatus | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe publication status of the research study's record.Possible values are:ActiveDraftRetiredUnknown |
| ResearchStudyNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe identifier of the research study. |
| ShouldAcptHealthyCandidates | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the research study should accept healthy candidates (true) or not (false).The default value is false. |
| SourceSystem | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the external system that generated the record. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe ID of the record in the external system. |
| SourceSystemModified | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date on which this item was last changed in the source system. |
| StartDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when the research starts. |
| Summary | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA brief summary of the research. |
| Title | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe human-readable name of the research study. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of research study.Possible values are:InterventionalObservational |
| UniformResourceIdentifier | TypeurlPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe canonical identifier of the research study. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ResearchStudyChangeEvent](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[ResearchStudyFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ResearchStudyHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ResearchStudyShare](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- ResearchStudyChangeEvent (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm)
- ResearchStudyFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- ResearchStudyHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
- ResearchStudyShare (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm)
