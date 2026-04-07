---
title: "Life Sciences Cloud Standard Objects"
domain: life-sciences-dev-guide
topic: life-sciences-cloud-standard-objects
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:37:57.409Z
estimatedTokens: 26181
keywords: [Life, Sciences, Cloud, Standard, rich, store, specialized]
---

> Life Sciences Cloud provides a rich set of objects to store and access specialized
      Life Sciences information.

# Life Sciences Cloud Standard Objects

Life Sciences Cloud provides a rich set of objects to store and access specialized Life Sciences information.

To verify the complete list of fields for an object, you can use a describe call from the API, or inspect with an appropriate tool, for example, inspecting the WSDL or using a schema viewer.

-   **[Accreditation](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_accreditation.htm)**
    Represents the professional accreditations of a facility. For example, a joint commission accredits a facility as a general acute care hospital.
-   **[ActionableList](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_actionablelist.htm)**
    Represents an actionable list. This object is available in API version 65.0 and later.
-   **[ActionPlan](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_actionplan_pec.htm)**
    Standard and custom fields extend the standard ActionPlan object to represent an instance of the compliance program assigned to an account.
-   **[ActionPlanItem](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_actionplanitem.htm)**
    Standard and custom fields extend the standard ActionPlanItem object to represent the junction between Action Plan and Provider Engagement Compliance Cycle.
-   **[AccountPlanParticipant](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_accountplanparticipant.htm)**
    Represents the team members participating in the account plan. This object is available in API version 65.0 and later.
-   **[AccountPlanProduct](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_accountplanproduct.htm)**
    Represents all the products associated with an account plan or its objectives. This object is available in API version 65.0 and later.
-   **[AccountPlanRelaObjAnalysis](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_accountplanrelaobjanalysis.htm)**
    Represents the strategic analysis done on objects related to the account plan. This object helps to identify internal and external factors that could potentially affect the plan, its objectives, or any related objects. This object is available in API version 65.0 and later.
-   **[AccountPlanRelationship](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_accountplanrelationship.htm)**
    Represents the relationship between multiple account plans for key account management. This object is available in API version 65.0 and later.
-   **[AccountPlanStakeholder](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_accountplanstakeholder.htm)**
    Represents the key individuals who can influence an account's actions or have a vested interest in its outcomes. This object is available in API version 65.0 and later.
-   **[AccountPlanStkhldrAction](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_accountplanstkhldraction.htm)**
    Represents a junction between an account plan stakeholder and an action. Stores information about an action for an account plan that's associated with a stakeholder. This object is available in API version 65.0 and later.
-   **[AccountPlanStkhldrProduct](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_accountplanstkhldrproduct.htm)**
    Represents a junction between an account plan stakeholder and a product. Stores information about the products associated with a stakeholder for an account plan. This object is available in API version 65.0 and later.
-   **[AcctPlanPtcpStakeholder](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_acctplanptcpstakeholder.htm)**
    Represents a junction between an account plan participant and an account plan stakeholder. Stores information about the account plan participant who collaborates with the account plan stakeholder for performing account plan tasks. This object is available in API version 65.0 and later.
-   **[ActionableListFilterCriteria](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_actionablelistfiltercriteria.htm)**
    Represents a logical expression containing filter conditions to include or exclude data from the dataset that's associated with the actionable list. This object is available in API version 65.0 and later.
-   **[ActionPlanStatusPeriod](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_actionplanstatusperiod.htm)**
    Represents the historical changes to the status of an action plan.
-   **[ActionPlanTemplate](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_actionplantemplate.htm)**
    Represents the instance of an action plan template. In Life Sciences cloud, this object is available in API version 65.0 and later.
-   **[ActionPlanTemplateAssignment](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_actionplantemplateassignment.htm)**
    Represents the association of an action plan template with its related care plan template, goal, or problem definition. When instantiated, the action plan generates the corresponding intervention tasks and links them to the appropriate record, such as a condition, goal, or care plan.
-   **[ActionPlanTemplateItemValue](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_actionplantemplateitemvalue.htm)**
    Standard and custom fields extend the standard ActionPlanTemplateItemValue object to represent the value associated with an action plan template item.
-   **[ActionPlanTemplateItem](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_actionplantemplateitem.htm)**
    Represents the instance of an item on an action plan template version. This object is available in API version 64.0 and later in Key Account Management feature in the Life Sciences Cloud.
-   **[ActionPlanTemplateVersion](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_actionplantemplateversion_pec.htm)**
    Represents the version of an action plan template.
-   **[ActivityPlan](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_activityplan.htm)**
    Represents the user's activity goals for the cycle. This object is available in API version 65.0 and later.
-   **[ActivityPlanTerritory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_activityplanterritory.htm)**
    Represents the territory details associated with an activity plan. This object is available in API version 65.0 and later.
-   **[ActivityTiming](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_r4_api_objects_activitytiming.htm)**
    Represents detailed information about an activity that’s repeated in regular intervals over a period of time. This object is available in API version 52.0 and later.
-   **[Address](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_address.htm)**
    Represents a mailing, billing, or home address.
-   **[AdverseEventAction](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_adverseeventaction.htm)**
    Preventive actions that contributed to avoiding the adverse event or Ameliorating actions taken after the adverse event occured in order to reduce the extent of harm. This object is available in API version 61.0 and later.
-   **[AdverseEventCause](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_adverseeventcause.htm)**
    Describes the entity that is suspected to have caused the adverse event. This object is available in API version 61.0 and later.
-   **[AdverseEventContribFactor](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_adverseeventcontribfactor.htm)**
    The contributing factors suspected to have increased the probability or severity of the adverse event. This object is available in API version 61.0 and later.
-   **[AdverseEventEntry](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_adverseevententry.htm)**
    Represents the event related to unintended/anticipated effects on research participants. This object is available in API version 61.0 and later.
-   **[AdverseEventOutcome](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_adverseeventoutcome.htm)**
    Type of outcome from the adverse event. This object is available in API version 61.0 and later.
-   **[AdverseEventParty](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_adverseeventparty.htm)**
    Indicates who or what participated in the adverse event and how they were involved. This object is available in API version 61.0 and later.
-   **[AdverseEventSupportInfo](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_adverseeventsupportinfo.htm)**
    Supporting information relevant to the event. This object is available in API version 61.0 and later.
-   **[AdverseEvntResultingEffect](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_adverseevntresultingeffect.htm)**
    Effect on the subject due to this event. This object is available in API version 61.0 and later.
-   **[AdvTherapyFieldOptOverride](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_advtherapyfieldoptoverride.htm)**
    Represents a list of fields with changed optionality, based on certain parameters. This object is available in API version 59.0 and later.
-   **[AllergyIntolerance](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_r4_api_objects_AllergyIntolerance.htm)**
    Represents a clinical assessment of a patient’s allergy or intolerance. This object is available in API version 51.0 and later.
-   **[AppAlert](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_appalert.htm)**
    Represents an alert message at the object, tab, or global level. This object is available in API version 65.0 and later.
-   **[AppAlertTerritory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_appalertterritory.htm)**
    Represents a junction between an Alert and a Territory where the alert is sent. This object is available in API version 65.0 and later.
-   **[AppAlertUserResponse](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_appalertuserresponse.htm)**
    Represents the user action for an alert. This object is available in API version 65.0 and later.
-   **[Applicant](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_applicant.htm)**
    Specify the care program enrollee represented as an applicant. This object is available in API version 59.0 and later.
-   **[AssessmentEnvelope](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_assessmentenvelope.htm)**
    Represents information about an envelope that contains the assessments related to a user. For example, you can create an envelope that contains assessments for a patient or a caregiver related to depression or anxiety. This object is available in API version 58.0 and later.
-   **[AssessmentEnvelopeItem](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_assessmentenvelopeitem.htm)**
    Represents information about an item in an envelope that contains the assessments related to a user. For example, you can create an item that contains an assessment for depression or anxiety. This object is available in API version 58.0 and later.
-   **[AssessmentTask](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_assessmenttask.htm)**
    Perform activities such as patient registration or order authorization to capture information.
-   **[AuthorNote](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_r4_api_objects_authornote.htm)**
    Stores notes associated with different types of records along with information about the author of the note and the time the note was authored. The author isn’t necessarily the person who created a record. The author is the person who provided the information in the note. This object is available in API version 52.0 and later.
-   **[Award](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_award_hc.htm)**
    Represents a person's or organization's professional awards.
-   **[BatchJob](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_batchjob.htm)**
    Represents an instance of a batch job that is either running and has been run. This object is available in Life Sciences Cloud API version 65.0 and later.
-   **[BatchJobPart](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_batchjobpart.htm)**
    Represents one part of a batch job. This object is available in Life Sciences Cloud in API version 65.0 and later.
-   **[Benefit](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_benefit.htm)**
    Represents information about benefits associated with the financial assistance program. Benefits are mapped to the members based on the program rules. This object is available in API version 51.0 and later.
-   **[BenefitType](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_benefittype.htm)**
    Represents information about the type of benefits, such as Financial Assistance Program, available to the care program enrollee. This object is available in API version 51.0 and later.
-   **[BoardCertification](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_boardcertification.htm)**
    Represents the practitioner's board certifications such as being board-certified in cardiology and cardiovascular disease.
-   **[BusinessLicense](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_businesslicense.htm)**
    Represents the licenses of a party role like healthcare provider or producer.
-   **[BusinessLicenseProduct](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_businesslicenseproduct.htm)**
    Represents the licenses required to be linked to a product for the healthcare provider. This object is available in API version 65.0 and later.
-   **[CareBarrier](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_carebarrier.htm)**
    Represents the circumstances or obstacles affecting a patient or member. Available in API version 45.0 and later.
-   **[CareBarrierDeterminant](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_carebarrierdeterminant.htm)**
    Represents the relationship of a barrier to a determinant for a patient or member. Available in API version 45.0 and later.
-   **[CareBarrierType](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_carebarriertype.htm)**
    Represents the standard, defined list of barriers maintained by an organization. Available in API version 45.0 and later.
-   **[CareBenefitVerifyRequest](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_carebenefitverifyrequest.htm)**
    Request for verification of benefits. This object is available in API version 53.0 and later.
-   **[CareDeterminant](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_caredeterminant.htm)**
    Represents the determinants of health for a patient such as availability of safe housing, adequate employment, or local food markets. Available in API version 45.0 and later.
-   **[CareDeterminantType](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_caredeterminanttype.htm)**
    Represents the standard, defined list of determinants of health maintained by an organization, including the domain and type. Available in API version 45.0 and later.
-   **[CareInterventionType](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_careinterventiontype.htm)**
    Represents the standard, defined list of interventions maintained by an organization. Available in API version 45.0 and later.
-   **[CarePerformer](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_r4_api_objects_CarePerformer.htm)**
    Represents the person performing care in observations, procedure, and immunizations. This person may be a physician, the patient’s contact, or anyone who administered any sort of care to the patient in the context of the concerned care event. This object is available in API version 51.0 and later.
-   **[CarePgmEnrleeStatusPeriod](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_carepgmenrleestatusperiod.htm)**
    Represents the historical changes to the status or stage of a care program enrollee. This object is available in API version 61.0 and later.
-   **[CarePgmEnrolleeWkOrdStep](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_carepgmenrolleewkordstep.htm)**
    Represents information about the step in a work order that's executed for the care program enrollee. This object is available in API version 58.0 and later.
-   **[CarePgmEnrolleeWorkOrder](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_carepgmenrolleeworkorder.htm)**
    Represents information about the work order that's executed for the care program enrollee. This object is available in API version 58.0 and later.
-   **[CarePgmEnrollmentEvalRslt](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_carepgmenrollmentevalrslt.htm)**
    Represents the result of an evaluation done to assess the eligibility of a participant enrolling for a research study or care program. This object is available in API version 62.0 and later.
-   **[CarePgmProvHealthcareProvider](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_carepgmprovhealthcareprovider.htm)**
    Represents a junction object identifying the primary healthcare professional associated with a care program provider and to look up all healthcare professionals for care program providers. This object is available in API version 49.0 and later.
-   **[CarePgmTeamMbrRolePeriod](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_carepgmteammbrroleperiod.htm)**
    Represents the historical changes in the role of a care program team member. This object is available in API version 61.0 and later.
-   **[CarePreauth](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_carepreauth.htm)**
    Represents the details of preauthorizations for care under a member’s plan.
-   **[CarePreauthItem](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_carepreauthitem.htm)**
    Represents the details of items included in a preauthorization for care under a member’s plan.
-   **[CareProgram](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_careprogram.htm)**
    Represents a set of activities, such as a patient therapy, financial assistance, education, wellness, or fitness plan, offered to participants by an employer or insurer.
-   **[CareProgramAssistance](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_careprogramassistance.htm)**
    Represents a junction between Care Program and Program objects. This object is available in API version 61.0 and later.
-   **[CareProgramCampaign](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_careprogramcampaign.htm)**
    Represents a relationship between the Care Program object and the Campaign object. This junction object enables admins to associate one or more campaigns to a program.
-   **[CareProgramDetail](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_careprogramdetail.htm)**
    Represents the detail records related to the care program. This object is available in API version 61.0 and later.
-   **[CareProgramEligibilityRule](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_careprogrameligibilityrule.htm)**
    Represents a rule defining the criteria for patient care program enrollment eligibility. This entity creates an association between Care Program and an Enrollment Eligibility Criteria.
-   **[CareProgramEnrollee](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_careprogramenrollee.htm)**
    Represents a participant enrolled in a care program.
-   **[CareProgramEnrolleeProduct](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_careprogramenrolleeproduct.htm)**
    Represents the affiliation between a care program enrollee and a care program product, a care program provider, or both.
-   **[CareProgramEnrollmentCard](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_careprogramenrollmentcard.htm)**
    Represents a care program membership card that includes a membership number or enrollment code.
-   **[CareProgramGoal](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_careprogramgoal.htm)**
    Represents a business or clinical goal related to a care program.
-   **[CareProgramProduct](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_careprogramproduct.htm)**
    Represents the affiliation between a care program and a care program product, care program provider, or both.
-   **[CareProgramProvider](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_careprogramprovider.htm)**
    Represents a business account that is the service provider for a care program product.
-   **[CareProgramSite](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_careprogramsite.htm)**
    Represents the details about the care program site. This object is available in API version 61.0 and later.
-   **[CareProgramSiteContract](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_careprogramsitecontract.htm)**
    Represents the association of a care program site and a contract. This object is available in API version 62.0 and later.
-   **[CareProgramStatusPeriod](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_careprogramstatusperiod.htm)**
    Represents the historical changes to the status of a care program. This object is available in API version 61.0 and later.
-   **[CareProgramTeamMember](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_careprogramteammember.htm)**
    Represents a person who delivers services under a program, such as a program manager or care coordinator.
-   **[CareProviderAdverseAction](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_careprovideradverseaction.htm)**
    Captures adverse actions against the provider, such as malpractice lawsuits or revoked licences. This object is available in API version 47.0 and later.
-   **[CareProviderFacilitySpecialty](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_careproviderfacilityspecialty.htm)**
    Represents all the specialties that the practitioner provides at a given location. For example, a physician who is board-certified in both spine and neuro may provide spine services at one location and neuro services at another.
-   **[CareProviderSearchableField](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_careprovidersearchablefield.htm)**
    This object holds denormalized data from certain fields in the Provider Relationship Management data model. Provider search APIs query this object instead of multiple objects, which improves search performance. This object is available in API version 47.0 and later.
-   **[CareProviderSearchConfig](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_careprovidersearchconfig.htm)**
    Represents fields that can appear in provider search results. Use this object to specify fields in arbitrary objects (source) that are made available in the search object (target). This object is available in API version 48.0 and later.
-   **[CareRegisteredDevice](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_r4_api_objects_careregistereddevice.htm)**
    Represents a device or device registration information for a patient or a care program enrollee. This object is available in API version 49.0 and later.
-   **[CareService](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_careservice.htm)**
    Represents a healthcare treatment, service, or procedure offered by a provider, practitioner, or facility. This object is available in API version 59.0 and later.
-   **[CareSiteIstgrSearchableFld](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_caresiteistgrsearchablefld.htm)**
    Represents information about the clinical trial investigator associated with a site. This object is available in API version 63.0 and later.
-   **[CareSpecialty](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_carespecialty.htm)**
    Represents a listing of provider specialty codes and descriptions. For example, 02 - Physician/General Surgery.
-   **[CareSpecialtyTaxonomy](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_carespecialtytaxonomy.htm)**
    The junction object between CareSpecialty and CareTaxonomy. This object is available in API version 52.0 and later.
-   **[CareSystemFieldMapping](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_caresystemfieldmapping.htm)**
    Represents a mapping from source system fields to Salesforce target entities and attributes.
-   **[CareTaxonomy](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_caretaxonomy.htm)**
    Represents a static list of taxonomy codes.
-   **[ClinicalAlert](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_r4_api_objects_ClinicalAlert.htm)**
    Represents a warning or notification of significance related to different healthcare entities. The subject of the alert may be a patient, a location, a provider, a procedure, or even a medication. This object is available in API version 51.0 and later.
-   **[ClinicalDetectedIssue](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_r4_api_objects_ClinicalDetectedIssue.htm)**
    Represents information about a detected issue resulting from a clinical activity. This object is available in API version 55.0 and later.
-   **[ClinicalDetectedIssueDetail](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_r4_api_objects_ClinicalDetectedIssueDetail.htm)**
    Represents additional information about a clinical detected issue. This object is available in API version 55.0 and later.
-   **[ClinicalEncounter](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_r4_api_objects_ClinicalEncounter.htm)**
    Represents a healthcare related encounter of a patient with a care provider. This is a broad object that covers multiple phases of a patient’s healthcare service experience, all the way from pre-admission to stay to discharge, and everything in between. This object is available in API version 51.0 and later.
-   **[ClinicalEncounterDiagnosis](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_r4_api_objects_ClinicalEncounterDiagnosis.htm)**
    Represents a diagnosis related to a clinical encounter. This object is a child object of ClinicalEncounter. This object is available in API version 51.0 and later.
-   **[ClinicalEncounterFacility](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_r4_api_objects_ClinicalEncounterFacility.htm)**
    Represents information about the different facilities involved in an encounter, the time spent at those facilies, and other relevant details. This is a child object of ClinicalEncounter. This object is available in API version 51.0 and later.
-   **[ClinicalEncounterIdentifier](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_r4_api_objects_ClinicalEncounterIdentifier.htm)**
    Represents the identifier information for a clinical encounter. This object is a child object of ClinicalEncounter. This object is available in API version 51.0 and later.
-   **[ClinicalEncounterProvider](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_r4_api_objects_ClinicalEncounterProvider.htm)**
    Represents the providers involved in an encounter. This object is a child object of ClinicalEncounter. This object is available in API version 51.0 and later.
-   **[ClinicalEncounterReason](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_r4_api_objects_ClinicalEncounterReason.htm)**
    Represents the reasons for why the encounter was required. This object is a child object of ClinicalEncounter. This object is available in API version 51.0 and later.
-   **[ClinicalEncounterSvcRequest](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_r4_api_objects_ClinicalEncounterSvcRequest.htm)**
    Represents the service requests related to a clinical encounter. This object is a child object of ClinicalEncounter. This object is available in API version 51.0 and later.
-   **[ClinicalServiceRequest](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_r4_api_objects_ClinicalServicerequest.htm)**
    Represents requests for a procedure or diagnostic service that needs to be planned, proposed, or performed as part of the patient’s healthcare. This object is available in API version 51.0 and later.
-   **[ClinicalServiceRequestDetail](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_r4_api_objects_ClinicalServiceRequestDetail.htm)**
    Associates records from different objects to a clinical service request record to add more information to it. This is a multi-object junction object. This object is available in API version 51.0 and later.
-   **[CodeSet](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_r4_api_objects_CodeSet.htm)**
    Represents various industry defined codes in the context of their systems and versions of those systems. These codes are used in all sorts of digital records. This object is available in API version 50.0 and later.
-   **[CodeSetBundle](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_r4_api_objects_CodeSetBundle.htm)**
    Represents a group of code sets across multiple systems and versions. All of these code sets refer to the same conceptual entity. This object is available in API version 50.0 and later.
-   **[CommSubConsentCmplSnpsht](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_commsubconsentcmplsnpsht.htm)**
    Represents the snapshot of compliance information that’s captured at the time of consent of the communication subscription. This object is available in API version 65.0 and later.
-   **[CommSubscription](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_commsubscription.htm)**
    Standard and custom fields extend the standard Communication Subscription object to represent a customer’s subscription preferences for a specific communication. This object is available in API version 65.0 and later.
-   **[CommSubscriptionConsent](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_commsubscriptionconsent.htm)**
    Standard and custom fields extend the standard Communication Subscription Consent object to represent a customer’s consent to a communication subscription. This object is available in API version 65.0 and later.
-   **[ComplianceStatementDef](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_compliancestatementdef.htm)**
    Used to ensure adherence to regulatory requirements during health care provider engagements. Stores essential compliance information that's displayed across multiple use cases, including visits and consent capture. Compliance statements can be configured to require acknowledgement, have an optional acknowledgement, or be purely informational. Their intended audience can vary from the accounts that are being engaged with to the end user themselves.
-   **[ContactPointBestContactTime](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_contactpointbestcontacttime.htm)**
    Represents the optimal time to visit associated contact point addresses. This object is available in API version 65.0 and later.
-   **[ContactPointConsent](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_contactpointconsent.htm)**
    Standard and custom fields extend the standard Contact Point Consent object to represent information about a customer's consent to be contacted via a specific contact point. This object is available in API version 65.0 and later.
-   **[ContactPointSocial](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_contactpointsocial.htm)**
    Represents social media identifiers or contact points for an individual or account. This object is available in API version 65.0 and later.
-   **[CoverageBenefit](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_coveragebenefit.htm)**
    Represents the benefits provided to a covered member by a purchaser’s plan.
-   **[CoverageBenefitItem](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_coveragebenefititem.htm)**
    Specific service covered by the insurance plan. This object is available in API version 53.0 and later.
-   **[CoverageBenefitItemLimit](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_coveragebenefititemlimit.htm)**
    Allows you to track details associated with a specific benefit as it relates to expenditures, limits, coverage levels, eligibility, and exclusion. This object is available in API version 53.0 and later.
-   **[CustodyChainEntry](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_custodychainentry.htm)**
    Represents information about an entry or event in the chain of custody. This object is available in API version 59.0 and later.
-   **[CustodyItem](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_custodyitem.htm)**
    Represents information about an item in the custody chain. This object is available in API version 59.0 and later.
-   **[CustodyVerfcTypeOverride](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_custodyverfctypeoverride.htm)**
    Represents information about the verification of an entry in the chain of custody. This object is available in API version 59.0 and later.
-   **[CustomObjectParticipant](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_customobjectparticipant.htm)**
    Standard and custom fields extend the standard CustomObjectParticipant object to represent information about the individual collaborating on or who needs to be informed of the Medical Insight.
-   **[DataUsePurpose](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_datausepurpose.htm)**
    Standard and custom fields extend the standard Data Use Purpose object to represent information about the reason for contacting a prospect or customer. This object is available in API version 65.0 and later.
-   **[DeviceSyncSummary](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_devicesyncsummary.htm)**
    Represents a summary of the synchronized data from a mobile device. This object is available in API version 65.0 and later.
-   **[DeviceSyncTransaction](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_devicesynctransaction.htm)**
    Represents a set of related data items to synchronize from a mobile device. This object is available in API version 65.0 and later.
-   **[DeviceSyncTransactionLog](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_devicesynctransactionlog.htm)**
    Represents a log with information about the synchronized data from a mobile device. This object is available in API version 65.0 and later.
-   **[DeviceSyncTransactionRecord](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_devicesynctransactionrecord.htm)**
    Represents a single data item to synchronize from a mobile device. This object is available in API version 65.0 and later.
-   **[DiagnosticSummary](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_r4_api_objects_DiagnosticSummary.htm)**
    Represents the findings, interpretations, and summaries of tests performed on patients. This object is available in API version 51.0 and later.
-   **[DiagnosticSummaryDetail](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_r4_api_objects_diagnosticsummarydetail.htm)**
    Represents additional information associated with document reference-type DiagnosticSummary records. This additional information may be related documents, authors, or related encounters. This object is available in API version 52.0 and later.
-   **[DigitalSignature](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_digitalsignature.htm)**
    Life Sciences Cloud fields extend the standard DigitalSignature object to represent a signature. This object is available in API version 65.0 and later.
-   **[DigitalSignatureRequest](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_digitalsignaturerequest.htm)**
    Reserved for future use.
-   **[DigitalVerfSetupDetail](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_digitalverfsetupdetail.htm)**
    Stores contextual details of a digital verification setup, such as the user who does the verification, and the messages that display at the time of verification. This object is available in API version 60.0 and later.
-   **[DigitalVerification](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_digitalverification.htm)**
    Stores information about the verification of a related record. This object is available in API version 60.0 and later.
-   **[DigitalVerificationSetup](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_digitalverificationsetup.htm)**
    Stores information about a digital verification setup, such as the number of signatures needed and the record action that's related to the verification. This object is available in API version 60.0 and later.
-   **[DocumentTemplate](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_documenttemplate.htm)**
    Represents information about dynamic document generation. This object is available in API version 56.0 and later.
-   **[EnrollmentEligibilityCriteria](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_enrollmenteligibilitycriteria.htm)**
    Represents criteria that define patient enrollment eligibility for one or more care programs.
-   **[Expense](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_expense.htm)**
    Life Sciences Cloud fields extend the standard Expense object to represent expenses related to a visit. This object is available in API version 65.0 and later.
-   **[ExpenseParticipant](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_expenseparticipant.htm)**
    Represents a participant in an expence and is used in expense allocation. This object is available in API version 65.0 and later..
-   **[ExpenseType](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_expensetype.htm)**
    The ExpenseType object is a category that's used to classify an expense that occurs. This object is available in API version 65.0 and later.
-   **[Formulary](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_formulary.htm)**
    Represents the details of the formulary covered by the payer's health insurance plan. This object is available in API version 65.0 and later.
-   **[FormularyItem](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_formularyitem.htm)**
    Represents details of products within the formulary, including the drug tier, coverage, and copay. This object is available in API version 65.0 and later.
-   **[GoalAssignment](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_goalassignment.htm)**
    Represents the goals that are part of a care plan.
-   **[GoalDefinition](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_goaldefinition.htm)**
    Represents a goal or a business objective that’s used as a reference. When instantiated, GoalDefinition records create GoalAssignment records that serve as goals in care plans.
-   **[GoalDefinitionProduct](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_goaldefinitionproduct.htm)**
    Represents a junction between a goal definition and a product. Stores information about the goal definition that defines the business objective for a product. This object is available in API version 65.0 and later.
-   **[HealthcareFacility](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_r4_api_objects_HealthCareFacility.htm)**
    Represents a healthcare facility and all its related details. These details may be physical, functional, geographic, or business details. This object is available in API version 51.0 and later.
-   **[HealthcareFacilityNetwork](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_healthcarefacilitynetwork.htm)**
    Represents a junction object identifying the insurance network that a location or business entity is a part of. Network participation records are also stored in this object.
-   **[HealthcarePayerNetwork](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_healthcarepayernetwork.htm)**
    Represents an insurance network group. For example, an insurance company’s exclusive provider organization (EPO) plans.
-   **[HealthcarePractitionerFacility](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_healthcarepractitionerfacility.htm)**
    Represents the different locations in which a practitioner provides services.
-   **[HealthcareProvider](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_healthcareprovider.htm)**
    Represents business-level details about the healthcare organization or the practitioner.
-   **[HealthcareProviderNpi](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_healthcareprovidernpi.htm)**
    Represents identifiers from the National Provider Identifier that are assigned to every facility and licensed practitioner in the United States. Also includes NPI assigned date, primary mailing address on file, and so on.
-   **[HealthcareProviderService](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_healthcareproviderservice.htm)**
    Represents a junction object between a HealthcareService and a HealthcareProvider or HealthcareFacility or HealthcarePractitionerFacility. This object is available in API version 59.0 and later.
-   **[HealthcareProviderSpecialty](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_healthcareproviderspecialty.htm)**
    Represents specialties for a practitioner or a service provider organization. A provider can have multiple specialties such as anesthesiology and cardiovascular.
-   **[HealthcareProviderTaxonomy](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_healthcareprovidertaxonomy.htm)**
    Represents taxonomy or subspecialty codes for a practitioner or facility. A provider or facility can have multiple taxonomies.
-   **[HealthcareServiceDetail](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_healthcareservicedetail.htm)**
    Represents a junction object between a CareService and a CodeSetBundle. For example, this object links a healthcare service such as physical therapy to a set of related codes. This object is available in API version 59.0 and later.
-   **[HealthCondition](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_r4_api_objects_HealthCondition.htm)**
    Represents a clinical condition, problem, or any clinically relevant occurrence that is a matter of concern. This object is available in API version 51.0 and later.
-   **[HealthConditionDetail](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_r4_api_objects_healthconditiondetail.htm)**
    This child object is used to associate body site and laterality codes to HealthCondition records. This object is available in API version 52.0 and later.
-   **[HlthCareProvTreatedCondition](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_hlthcareprovtreatedcondition.htm)**
    Represents a junction object between a healthcare provider, facility, or practitioner and a problem definition that's related to a health condition, such as disease or illness. For example, this object links a doctor to the treatment of diabetes, or a facility to the treatment of spinal injuries. This object is available in API version 59.0 and later.
-   **[Identifier](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_r4_api_objects_Identifier.htm)**
    Represents identifier information for multiple objects. This object is available in API version 51.0 and later.
-   **[IndicatorAssignment](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_indicatorassignment.htm)**
    Represents the assignment of an indicator definition that's used to measure the performance of an outcome or a related activity. This object is available in API version 59.0 and later.
-   **[IndicatorDefinition](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_indicatordefinition.htm)**
    Represents information about the indicator assignment and the process of measuring and calculating the indicator results. This object is available in API version 59.0 and later.
-   **[IndicatorPerformancePeriod](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_indicatorperformanceperiod.htm)**
    Represents information about a specified time period including the frequency at which indicator results should be calculated and the baseline value of the indicator. This object is available in API version 59.0 and later.
-   **[IndicatorResult](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_indicatorresult.htm)**
    Represents the result of an indicator assignment for the specified time period that can be used to track the performance of the indicator. This object is available in API version 59.0 and later.
-   **[Inquiry](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_inquiry.htm)**
    Represents the details of an inquiry logged by a sales representative or other user. This object is available in API version 65.0 and later.
-   **[InquiryQuestion](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_inquiryquestion.htm)**
    Represents a question asked by a healthcare professional (HCP) during an inquiry. This object is available in API version 65.0 and later.
-   **[InquiryQuestionAnswer](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_inquiryquestionanswer.htm)**
    Represents the answer provided by the Medical Science Liaison (MSL) to the inquiry question. This object is available in API version 65.0 and later.
-   **[IntegrationJobRun](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_integrationjobrun.htm)**
    Represents the statistical details of asynchronous integration jobs that are run on the system. This object is available in API version 65.0 and later.
-   **[InventoryCntProdtBatchItem](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_inventorycntprodtbatchitem.htm)**
    Represents the inventory count of a product batch at a location. The inventory count product batch item is a child object of inventory count assessment. This object is available in API version 65.0 and later.
-   **[InventoryCountAssessment](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_inventorycountassessment.htm)**
    Represents an inventory count performed at a location. This object is available in API version 65.0 and later.
-   **[InventoryOperation](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_inventoryoperation.htm)**
    Represents operations performed on the inventory, such as transfers, disbursements, or adjustments. This object is available in API version 65.0 and later.
-   **[LifeSciAccountListColumn](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifesciaccountlistcolumn.htm)**
    Represents the information of the columns selected from accounts or its supported direct relationship objects in account filters. This object is available in API version 65.0 and later.
-   **[LifeSciAccountListMember](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifesciaccountlistmember.htm)**
    Represents information about account static lists and routine. This object is available in API version 65.0 and later.
-   **[LifeSciAcctGrpAssignment](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifesciacctgrpassignment.htm)**
    Represents a junction between an account and actionable list. This object is available in API version 65.0 and later.
-   **[LifeSciAcctListFilterCrit](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifesciacctlistfiltercrit.htm)**
    Stores the rules and conditions derived from the Account object or its supported direct relationship objects to filter Life Sciences accounts. This object is available in API version 65.0 and later.
-   **[LifeSciDataChangeDef](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifescidatachangedef.htm)**
    Represents the object for which the data change request is configured. This object is available in API version 65.0 and later.
-   **[LifeSciDataChangeRequest](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifescidatachangerequest.htm)**
    Represents the data change requests for the all objects. This object is available in API version 65.0 and later.
-   **[LifeSciDataChgDefMngFld](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifescidatachgdefmngfld.htm)**
    Represents the fields for which the data change request is configured for all objects. This object is available in API version 65.0 and later.
-   **[LifeSciDataChgDefRecType](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifescidatachgdefrectype.htm)**
    Represents the management of data validation for the object by record type.
-   **[LifeSciDataChgPersonaDef](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifescidatachgpersonadef.htm)**
    Represents the configuration of data updates for the object by persona.
-   **[LifeSciDocTemplateVersion](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifescidoctemplateversion.htm)**
    Stores version-specific template information.
-   **[LifeSciEmailTemplate](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifesciemailtemplate.htm)**
    Represents a collection of pre-designed and approved email templates that end users send to healthcare professionals (HCPs). These templates help users create and send consistent, professional emails quickly and efficiently. This object is available in API version 65.0 and later.
-   **[LifeSciEmailTmplFragment](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifesciemailtmplfragment.htm)**
    Represents a collection of reusable components that can be inserted into email templates, allowing end users to create custom and modular emails tailored to their needs. This object is available in API version 65.0 and later.
-   **[LifeSciEmailTmplRelaFrgmt](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifesciemailtmplrelafrgmt.htm)**
    Represents the connectors that link email templates and fragments together. This object is available in API version 65.0 and later.
-   **[LifeSciEmailTmplSnapshot](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifesciemailtmplsnapshot.htm)**
    Stores the different versions of an email template for tracking purposes. This object is available in API version 65.0 and later.
-   **[LifeScienceAccountList](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifescienceaccountlist.htm)**
    Represents the type of account lists, such as filter, static list, and routine. This object is available in API version 65.0 and later.
-   **[LifeScienceAccountListObject](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifescienceaccountlistobject.htm)**
    Represents the object that is referenced in the provider account list. This object is available in API version 65.0 and later.
-   **[LifeScienceCustomScript](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifesciencecustomscript.htm)**
    Represents a custom script associated with a Life Science stage object within a workflow. Use a custom script to implement the validation logic for the stage object. This object is available in API version 65.0 and later.
-   **[LifeScienceDocument](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifesciencedocument.htm)**
    Represents a signed document and stores document fields.
-   **[LifeScienceDocumentTemplate](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifesciencedocumenttemplate.htm)**
    Stores the template name and general information about the template.
-   **[LifeScienceEmail](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifescienceemail.htm)**
    Represents a collection of sendable messages that manages the creation, sending, and tracking of email communications. This object stores the details of each email, including the content, the status of sending attempts, and any responses received. This object is available in API version 65.0 and later.
-   **[LifeScienceMobileApp](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifesciencemobileapp.htm)**
    Represents information about a mobile device associated with a user. This object is available in API version 65.0 and later.
-   **[LifeScienceTriggerHandler](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifesciencetriggerhandler.htm)**
    Represents a collection of fields to set up the trigger handlers to run for each Life Sciences object. This object is available in API version 65.0 and later.
-   **[LifeSciMarketableProduct](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifescimarketableproduct.htm)**
    Represents information about all products a Life Science company manufactures, markets, sells, or competes with, including brands, indications, and therapeutic areas. It also represents additional information on physical products that are sampled, ordered, or distributed as promotional items. This object is available in API version 65.0 and later.
-   **[LifeSciMetadataAssignment](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifescimetadataassignment.htm)**
    Represents the assignments for a Life Sciences configuration record. This object is a child of LifeSciMetadataRecord. This object is available in API version 65.0 and later.
-   **[LifeSciMetadataCategory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifescimetadatacategory.htm)**
    Represents the category that Life Sciences configuration records are organized into. This object is available in API version 65.0 and later.
-   **[LifeSciMetadataFieldValue](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifescimetadatafieldvalue.htm)**
    Represents a field value for a Life Sciences configuration record. This object is a child of LifeSciMetadataRecord. This object is available in API version 65.0 and later.
-   **[LifeSciMetadataRecord](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifescimetadatarecord.htm)**
    Represents a configuration record for Life Sciences. This object is a child of LifeSciMetadataCategory. This object is available in API version 65.0 and later.
-   **[LifeSciMobileMetadataRecord](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifescimobilemetadatarecord.htm)**
    Represents the metadata created for the mobile application. This object is available in API version 65.0 and later.
-   **[LifeSciProductAcctRstrc](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifesciproductacctrstrc.htm)**
    Represents information about product use limitations for an account. Product restrictions help facilitate compliance with product detailing and sampling regulations and company policies. This object is available in API version 65.0 and later.
-   **[LifeSciStageAction](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifescistageaction.htm)**
    Represents the configuration of an action performed as part of a workflow. This object is available in API version 65.0 and later.
-   **[LifeSciStageObject](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifescistageobject.htm)**
    Represents an object associated with a workflow. This object is available in API version 65.0 and later.
-   **[LifeSciStageOperation](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifescistageoperation.htm)**
    Represents the criteria to evaluate in determining the applicable permissions and available actions for a specific step in a workflow. This object is available in API version 65.0 and later.
-   **[LifeSciStageOperationAction](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifescistageoperationaction.htm)**
    Represents a junction between a stage operation and a stage action. This object defines a set of available stage actions in the context of a specific stage operation. This object is available in API version 65.0 and later.
-   **[LifeSciStageOperationCondn](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifescistageoperationcondn.htm)**
    Represents a logical expression for applying an operation in a workflow. This object is available in API version 65.0 and later.
-   **[LifeSciStagePath](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifescistagepath.htm)**
    Represents information about the steps associated with a workflow and the path from one step in the workflow to the next. This object is available in API version 65.0 and later.
-   **[LifeSciStageValue](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifescistagevalue.htm)**
    Represents an individual step within a workflow. This object is available in API version 65.0 and later.
-   **[Location](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_lsclocation.htm)**
    Standard and custom fields extend the standard Location object to represent information about a user responsible for the location. This object is available in API version 65.0 and later.
-   **[MedicalInsight](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_medicalinsight.htm)**
    Represents the important information observed or heard through various outlets like meetings, calls, or research, which is used to inform strategies for better patient care.
-   **[MedicalInsightAccount](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_medicalinsightaccount.htm)**
    Represents the account that provided the medical insight.
-   **[MedicalInsightGoalDef](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_medicalinsightgoaldef.htm)**
    Represents the goal needed to address the medical insight.
-   **[MedicalInsightProduct](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_medicalinsightproduct.htm)**
    Represents the product related to the medical insight.
-   **[Medication](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_r4_api_objects_Medication.htm)**
    Represents detailed information about different medications. This object is available in API version 51.0 and later.
-   **[MedicationDispense](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_r4_api_objects_medicationdispense.htm)**
    Represents the dispense of a medication to a patient in response to a medication request or order. This object also includes the instructions for how the medication is to be administered This object is available in API version 54.0 and later.
-   **[MedicationRequest](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_r4_api_objects_MedicationRequest.htm)**
    Represents a request or order for the supply of medication, along with information about how it should be administered. This object is available in API version 51.0 and later.
-   **[MedicationStatement](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_r4_api_objects_MedicationStatement.htm)**
    Represents a record of medication that the patient is currently taking or has taken in the past. This object is available in API version 51.0 and later.
-   **[MedicationStatementDetail](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_r4_api_objects_medicationstatementdetail.htm)**
    Represents additional information associated with MedicationStatement records. This object is available in API version 54.0 and later.
-   **[MedicinalIngredient](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_r4_api_objects_medicinalingredient.htm)**
    MedicinalIngredient is a child object of Medication that represents substances or drugs that are used as ingredients in the medication. This object is available in API version 52.0 and later.
-   **[Member](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/health_member.htm)**
    A member is a person who is the primary subscriber, a dependent, or anyone else who is covered under the insurance plan.
-   **[MemberPlan](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_memberplan.htm)**
    Represents details about the insurance coverage for a member or subscriber.
-   **[MergeRequest](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_mergerequest.htm)**
    Represents the details related to tracking the merge history of records. It maps the losing record (deleted as result of merge) to the winning records (remains after merge). This object is available in API version 65.0 and later.
-   **[Outcome](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_outcome.htm)**
    Represents information about the expected change in participants that is driven by the organization's activity. This object is available in API version 59.0 and later.
-   **[OutcomeActivity](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_outcomeactivity.htm)**
    Represents a junction between Outcome and the object that's related to the activity undertaken by an organization to achieve that outcome. This object is available in API version 59.0 and later.
-   **[PartyIndicatorResult](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_partyindicatorresult.htm)**
    Represents information about a party for which the indicator result is calculated. This object is available in API version 62.0 and later.
-   **[PartyPublication](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_partypublication.htm)**
    Represents the details of a party's publication.
-   **[PatientHealthReaction](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_r4_api_objects_PatientHealthReaction.htm)**
    Represents a patient’s adverse reaction to an allergy, intolerance, or immunization. This object is available in API version 51.0 and later.
-   **[PatientImmunization](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_r4_api_objects_PatientImmunization.htm)**
    Represents information about a patient’s immunizations. This object is available in API version 51.0 and later.
-   **[PatientImmunizationProtocol](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_r4_api_objects_patientimmunizationprotocol.htm)**
    Represents the protocol followed by a provider for a patient’s immunization and its related details. The protocol defines the set of recommendations that are followed while a vaccine is administered. This object is a child of the PatientImmunization object. This object is available in API version 56.0 and later.
-   **[PatientMedicalProcedure](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_r4_api_objects_patientmedicalprocedure.htm)**
    Represents detailed information about a healthcare procedure the patient has undergone, is undergoing or will undergo. This object is available in API version 51.0 and later.
-   **[PatientMedicalProcedureDetail](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_r4_api_objects_PatientMedicalProcedureDetail.htm)**
    Associates records from different objects to a patient medical procedure record to add more information to the procedure record. This is a multi-object junction object. This object is available in API version 51.0 and later.
-   **[PatientMedicationDosage](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_r4_api_objects_PatientMedicationDosage.htm)**
    Represents dosage information for medication. This object is primarily used to add dosage information in MedicationStatement, MedicationRequest, or MedicationDispense records. This object is available in API version 51.0 and later.
-   **[Payer](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/health_payer.htm)**
    A payer is a health insurance company that helps cover the cost of member care. payer is represented by records on the Account object.
-   **[PersonEducation](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_personeducation.htm)**
    Represents information about professional education for a person in a provider role.
-   **[PersonEmployment](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_personemployment.htm)**
    Represents information about a person’s employment.
-   **[PlanBenefit](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_planbenefit.htm)**
    Represents the standard benefits available under a plan that the purchaser offers to their members.
-   **[PlanBenefitItem](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_planbenefititem.htm)**
    Represents the details of a benefit available under a purchaser’s plan that is offered to their members.
-   **[Presentation](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_presentation.htm)**
    Represents a collection of presentations, each with various attributes such as activation dates, the ability to be sent by email, associated tags, and gestures. This object is available in API version 65.0 and later.
-   **[PresentationClickStrmEntry](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_presentationclickstrmentry.htm)**
    Represents the collection of clickstream data captured while the presentation is being used or shown across different forums. This object is available in API version 65.0 and later.
-   **[PresentationForum](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_presentationforum.htm)**
    Represents the details of the forums (call, meetings, order) where the presentation was presented. This object is available in API version 65.0 and later.
-   **[PresentationLinkedPage](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_presentationlinkedpage.htm)**
    Represents the connection between a presentation and its associated presentation pages. This object is available in API version 65.0 and later.
-   **[PresentationPage](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_presentationpage.htm)**
    Represents a collection of pages that can be used within a presentation. Each page can contain multiple slides. Pages can be reused across different presentations. This object is available in API version 65.0 and later.
-   **[PresentationPageProduct](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_presentationpageproduct.htm)**
    Represents the link between a presentation page and a product, and may also include a connection to related product message (product guidance). This object is available in API version 65.0 and later.
-   **[PresentationPartyAccess](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_presentationpartyaccess.htm)**
    Represents the access-sharing details of a presentation with a healthcare professional, including an expiration date for that access. This object is available in API version 65.0 and later.
-   **[Pricebook2](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_hc_pricebook2.htm)**
    Represents a price book that contains the list of products that your org sells.
-   **[Pricebookentry](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_hc_pricebookentry.htm)**
    Represents a product entry (an association between a price book and product) in a price book.
-   **[Product2](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_hc_product2.htm)**
    Represents a product that your org sells.
-   **[ProductAvailabilityProjection](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_productavailabilityprojection.htm)**
    Represents the projected product quantity available at an inventory location at various points in time. Records for this object are automatically created by Intelligent Sales. This object is available in API version 55.0 and later.
-   **[ProductionBatch](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_productionbatch.htm)**
    Represents the batch of homogeneous products manufactured in the same production line. This object is available in API version 65.0 and later.
-   **[ProductBatchItem](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_productbatchitem.htm)**
    Represents the details about the product items in each batch. This object is available in API version 65.0 and later.
-   **[ProductFulfillmentLocation](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_hc_productfulfillmentlocation.htm)**
    Associates a business account and a product inventory with the responsible field rep. This object is available in API version 49.0 and later.
-   **[ProductItem](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_hc_productitem.htm)**
    Represents the stock of a particular product at a particular location in field service, such as all bolts stored in your main warehouse.
-   **[ProductTransfer](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_hc_producttransfer.htm)**
    Represents the transfer of inventory between locations in field service.
-   **[ProductDisbursement](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_productdisbursement.htm)**
    Represents details about the product being disbursed. This object is available in API version 65.0 and later.
-   **[ProductGuidance](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_productguidance.htm)**
    Represents information about key product messages, product objectives, or other information that can assist or guide users when working with the product. This object is available in API version 65.0 and later.
-   **[ProductItemTransaction](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_productitemtransaction.htm)**
    Standard and custom fields extend the standard Product Item Transaction object to represent information about an action taken on a product item. This object is available in API version 65.0 and later.
-   **[ProductRequest](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_productrequest.htm)**
    Represents a device request made as part of a care program. Standard and custom fields extend the standard Product Request object to represent information about sample orders. This object is available in API version 65.0 and later in Samples Management feature.
-   **[ProductRequestLineItem](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_productrequestlineitem.htm)**
    A junction object between ProductRequest and ProductTransfer This object is available in API version 50.0 and later. This object is available in API version 65.0 and later in Samples Management feature.
-   **[ProductRequired](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_hc_productrequired.htm)**
    Represents a product that is needed to complete a visit.
-   **[ProductTerrDtlAvailability](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_productterrdtlavailability.htm)**
    Represents the details of the products aligned to territories. This object is an extension of the information stored in the Product Territory Availability object and is used for internal purposes. This object is available in API version 65.0 and later.
-   **[ProductTerritoryAvailability](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_productterritoryavailability.htm)**
    Represents information about the products aligned to territories. This object is available in API version 65.0 and later.
-   **[ProductTransfer](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_producttransfer.htm)**
    Standard and custom fields extend the standard Product Transfer object to represent information about the transfer of inventory between locations. This object is available in API version 65.0 and later.
-   **[ProgramEnrlEligibilityCrit](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_programenrleligibilitycrit.htm)**
    Represents a junction between Program and Enrollment Eligibility Criteria objects. This object is available in API version 61.0 and later.
-   **[ProgramEnrollment](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_programenrollment.htm)**
    Represents details of enrollment for benefits in a program. This object is available in API version 57.0 and later.
-   **[ProgramRecommendationRule](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_programrecommendationrule.htm)**
    Represents the eligibility criteria and recommendation for a program. This object is available in API version 61.0 and later.
-   **[ProviderAcctProductInfo](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_provideracctproductinfo.htm)**
    Represents specific information for healthcare professionals or healthcare organizations at the territory and product levels. This information is used for segmentation and product-level rankings. This object is available in API version 65.0 and later.
-   **[ProviderAcctTerritoryInfo](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_provideracctterritoryinfo.htm)**
    Represents the engagement data between an account and a user within an assigned territory, which includes next provider visit date, preferred address, and planned activities. This object is available in API version 65.0 and later.
-   **[ProviderActivityGoal](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_provideractivitygoal.htm)**
    Represents the goals for the provider accounts. This object is available in API version 65.0 and later.
-   **[ProviderActivityGoalMeasure](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_provideractivitygoalmeasure.htm)**
    Represents the goal measurement for an activity type. This object is available in API version 65.0 and later.
-   **[ProviderActivityMeasureType](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_provideractivitymeasuretype.htm)**
    Represents the details of the activity goal measure type. This object is available in API version 65.0 and later.
-   **[ProviderActvtyPlanAdjusment](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_provideractvtyplanadjusment.htm)**
    Represents the details of the adjustment requests for an activity plan. This object is available in API version 65.0 and later.
-   **[ProviderAffiliation](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_provideraffiliation.htm)**
    Represents the relationship between two healthcare professionals or healthcare organizations. This object is available in API version 65.0 and later.
-   **[ProviderAffiliationProduct](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_provideraffiliationproduct.htm)**
    Represents the relationship between two healthcare professionals, where one influences the other regarding a product. This object is available in API version 65.0 and later.
-   **[ProviderSampleLimit](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_providersamplelimit.htm)**
    Represents sample limits and remaining quantity applied to a given account and product. This object is available in API version 65.0 and later.
-   **[ProviderSampleLimitTemplate](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_providersamplelimittemplate.htm)**
    Setup object that represents the definition and rules of sample limits templates. This object is available in API version 65.0 and later.
-   **[ProviderSearchSyncLog](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_providersearchsynclog.htm)**
    Represents a log with information about the provider search data sync status of a healthcare provider record. This object is available in API version 49.0 and later.
-   **[ProviderSmplLmtTmplAssignment](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_providersmpllmttmplassignment.htm)**
    Junction that relates sample limit templates to products. This object is available in API version 65.0 and later.
-   **[ProviderVisit](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_providervisit.htm)**
    Represents the details of a field user's visit to a health care provider. For example, a sales representative visiting a health care provider to discuss product usage and efficacy to enhance adoption. This object is available in API version 65.0 and later.
-   **[ProviderVisitChangedEvent](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_providervisitchangedevent.htm)**
    Represents an event for a data manipulation operation performed on a provider visit record. This object is available in API version 65.0 and later.
-   **[ProviderVisitDtlProductMsg](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_providervisitdtlproductmsg.htm)**
    Represents delivered messages and reactions from the health care provider for products discussed during a visit. This object is available in API version 65.0 and later.
-   **[ProviderVisitMarketingItem](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_providervisitmarketingitem.htm)**
    Represents marketing items provided to the health care provider as part of a visit. This object is available in API version 65.0 and later.
-   **[ProviderVisitProdDetailing](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_providervisitproddetailing.htm)**
    Represents products discussed during a visit with a health care provider, including key details such as the product brand, therapeutic area, and other relevant information. This object is available in API version 65.0 and later.
-   **[ProviderVisitProdDiscussion](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_providervisitproddiscussion.htm)**
    Represents any additional notes or information regarding the products discussed during a visit to a health care provider. This object is available in API version 65.0 and later.
-   **[ProviderVisitRqstSample](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_providervisitrqstsample.htm)**
    Represents sample products requested to be shipped to the health care provider during a visit. This object is available in API version 65.0 and later.
-   **[PrvdAccountTerritorySummary](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_prvdaccountterritorysummary.htm)**
    Represents the summaries generated for a provider account for the terrories it is aligned to. This object is available in API version 65.0 and later.
-   **[PrvdAccountUserGroupInfo](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_prvdaccountusergroupinfo.htm)**
    Represents the classification values for the provider account user group. This object is available in API version 65.0 and later.
-   **[PrvdActvtyGoalMeasureProdt](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_prvdactvtygoalmeasureprodt.htm)**
    Represents the details of the products associated with the activity goal measure. This object is available in API version 65.0 and later.
-   **[PrvdActvtyPlanAdjProdt](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_prvdactvtyplanadjprodt.htm)**
    Represents the details of the products associated with the provider activity plan adjustment. This object is available in API version 65.0 and later.
-   **[PrvdEngmtComplianceCycle](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_prvdengmtcompliancecycle.htm)**
    Represents the duration and progress of compliance cycles for a provider, which captures essential metadata to ensure effective monitoring and management of compliance-related activities.
-   **[PrvdVstSmplLmtDiscrepancy](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_prvdvstsmpllmtdiscrepancy.htm)**
    Represents discrepancies that occur when samples or sample shipment requests exceed a sample limit. This object is available in API version 65.0 and later.
-   **[PrvdVstSmplLmtTransaction](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_prvdvstsmpllmttransaction.htm)**
    Represents samples or sample shipment requests captured in a visit. This object is available in API version 65.0 and later.
-   **[Purchaser](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/health_purchaser.htm)**
    A purchaser is the organization (an employer) that is providing medical insurance plans for their members (employees).
-   **[Purchaser Payer Association](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/health_purchaser_payer_association.htm)**
    An association that records the purchasers who purchase plans from payers. This association is represented by records on the AccountAccountRelation object.
-   **[PurchaserPlan](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_purchaserplan_bv.htm)**
    Represents the payer plan that a purchaser makes available to its members and members’ dependents.
-   **[PurchaserPlanAssn](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_purchaserplanassn.htm)**
    Represents a junction object that associates the purchaser to the plans they offer to members.
-   **[ReceivedDocument](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_receiveddocument.htm)**
    Contains a request for an operation to be performed on a document, such as rotating, splitting, or text extraction. This object is available in API version 50.0 and later.
-   **[ReceivedDocumentType](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_receiveddocumenttype.htm)**
    Represents a junction object between Received Document and Document Type. This object is available in API version 58.0 and later.
-   **[RecordAction](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_recordaction.htm)**
    Represents a relationship between a record and an action, such as a flow. Create a RecordAction for every action that you want to associate with a particular record. Available in API version 42.0 and later.
-   **[RecordAlert](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_recordalert.htm)**
    Represents an alert message about a specific record and tracks the status and active period of the alert. This object is available in API version 65.0 and later.
-   **[ResearchStdyCmprGroupCndt](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_researchstdycmprgroupcndt.htm)**
    Represents the junction between a research study control group and a research study candidate. This object is available in API version 61.0 and later.
-   **[ResearchStdyCndtStatusPrd](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_researchstdycndtstatusprd.htm)**
    Represents the time duration during which a research study candidate is assigned a specific status. This object is available in API version 61.0 and later.
-   **[ResearchStdyRandomization](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_researchstdyrandomization.htm)**
    Represents the randomization algorithm configuration defined for a research study. This object is available in API version 61.0 and later.
-   **[ResearchStdySearchableField](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_researchstdysearchablefield.htm)**
    Represents a common dataset that includes multiple fields and values from multiple objects and serves as the basis for searches related to research studies. This object is available in API version 61.0 and later.
-   **[ResearchStudy](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_researchstudy.htm)**
    Represents the details of a research study that include its design, execution, and oversight. This object is available in API version 61.0 and later.
-   **[ResearchStudyCandidate](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_researchstudycandidate.htm)**
    Represents the details of the research participant which includes the associated account and the status of the subject. This object is available in API version 61.0 and later.
-   **[ResearchStudyCmprGroup](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_researchstudycmprgroup.htm)**
    Represents the details of a research study comparison group. This object is available in API version 61.0 and later.
-   **[ResearchStudyProtocolInfo](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_researchstudyprotocolinfo.htm)**
    Represents details of the research study protocol document. This object is available in API version 62.0 and later.
-   **[ResearchStudyRelation](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_researchstudyrelation.htm)**
    Represents different related research studies. This object is available in API version 61.0 and later.
-   **[ResearchStudyRndmBlockSlot](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_researchstudyrndmblockslot.htm)**
    Represents the individual randomization block items corresponding to a Research Study Randomization Block This object is available in API version 61.0 and later.
-   **[RsrchStdyRandomizationBlock](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_rsrchstdyrandomizationblock.htm)**
    Represents the details of a block that’s generated through the parameters specified in the research study randomization. This object is available in API version 61.0 and later.
-   **[RsrchStdyRandomizationCrit](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_rsrchstdyrandomizationcrit.htm)**
    Represents the criteria definition for grouping the candidates participating in the research study. This object is available in API version 61.0 and later.
-   **[SerializedProduct](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_sforce_api_objects_serializedproduct.htm)**
    Records serial numbers for each individual product in an inventory. This object is available in API version 50.0 and later.
-   **[ServiceAppointmentGroup](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_serviceappointmentgroup.htm)**
    Stores information about a group of related service appointments. This object is available in API version 56.0 and later.
-   **[ServiceTerritoryRelationship](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_serviceterritoryrelationship.htm)**
    Represents the relationship between service territories based on work types performed. This object is available in API version 56.0 and later.
-   **[Sprint](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_sprint.htm)**
    Represents a specific timeframe within which account action plans are executed within key account management. This object is available in API version 65.0 and later.
-   **[Subject](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_subject.htm)**
    Represents a topic of a managed event. This object is available in API version 65.0 and later.
-   **[SubjectAssignment](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_subjectassignment.htm)**
    Represents a junction between a subject and the inquiry that the subject belongs to. This object is available in API version 65.0 and later.
-   **[SurveyQstnResponseOffline](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_surveyqstnresponseoffline.htm)**
    Represents a participant’s answer to a specific survey question, for both offline and staging environments. This object is available in API version 65.0 and later.
-   **[SurveyResponse](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_surveyresponse.htm)**
    Standard and custom fields extend the standard Survey Response object to represent information about a participant’s response to a survey. This object is available in API version 65.0 and later.
-   **[SurveyResponseOffline](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_surveyresponseoffline.htm)**
    Represents information about a participant’s offline survey response, including the response status, participant location, and completion time, for both offline and staging environments. This object is available in API version 65.0 and later.
-   **[Team](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_team.htm)**
    Represents the team of members associated with an organization. This object is available in API version 58.0 and later.
-   **[TeamMember](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_teammember.htm)**
    Represents the member associated with a team. This object is available in API version 58.0 and later.
-   **[TerrGeoAssignmentRule](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_terrgeoassignmentrule.htm)**
    Represents alignment rules that assign accounts to specific territories based on geocodes. This object is available in API version 65.0 and later.
-   **[TerritoryAccountScore](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_territoryaccountscore.htm)**
    Stores the intelligent provider scores to help users better recognize the top accounts in their territories. This object is available in API version 65.0 and later.
-   **[TerritoryAcctProdMsgScore](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_territoryacctprodmsgscore.htm)**
    Stores the intelligent product message score on the territory accounts to identify the most relevant message to deliver in their visits. This object is available in API version 65.0 and later.
-   **[TerritoryAcctRcmdAction](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_territoryacctrcmdaction.htm)**
    Represents the recommended engagement actions for the account at territory level. This object is available in API version 65.0 and later.
-   **[TerritoryBusinessPlan](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_territorybusinessplan.htm)**
    Represents the detailed, strategic outline of vital customer information. This object is used to effectively manage and expand customer relationships within a specific territory. This object is available in API version 65.0 and later.
-   **[TerritoryContentTmplAsgnt](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_territorycontenttmplasgnt.htm)**
    Stores a link between a territory and a template allowing for the assignment of relevant content to specific territories. This object is available in API version 65.0 and later.
-   **[TerritoryProdtQtyAllocation](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_territoryprodtqtyallocation.htm)**
    Represents the quantity allocation of a product to a given territory so that the system validates against the remaining quantity or maximum disbursement limit. This object is available in API version 65.0 and later.
-   **[TerritoryUserDowntime](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_territoryuserdowntime.htm)**
    Defines the blocks of time during normal business hours for various types of reasons when sales representatives are out of their territories. This object is available in API version 65.0 and later.
-   **[TerrProvAffilAssignRule](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_terrprovaffilassignrule.htm)**
    Represents a rule for aligning the affiliated accounts to the existing set of aligned accounts, based on their role, specialty, and account type. This object is available in API version 65.0 and later.
-   **[TimePeriod](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_timeperiod.htm)**
    Represents the time period that's used to calculate the indicator performance and result.
-   **[UnitOfMeasure](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_unitofmeasure.htm)**
    Represents the unit of measures for care metrics and care observations. This object is available in API version 49.0 and later.
-   **[UserAdditionalInfo](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_useradditionalinfo.htm)**
    Represents information about a user such as additional identifiers, user preferences, and a return address. This object is available in API version 65.0 and later.
-   **[UserReaction](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_userreaction.htm)**
    Represents the reaction from users to the medical insight, like upvote and downvote, which is used to identify trending insights.
-   **[VideoCall](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_videocall.htm)**
    Standard and custom fields extend the standard VideoCall object to represent a video call. The VideoCall object stores important information about the video session, including the meeting ID for connection, video call duration, associated participants, linked recordings, and vendor-specific attributes, ensuring a seamless and organized approach to managing video call data. This object is available in API version 65.0 and later.
-   **[VideoCallParticipant](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_videocallparticipant.htm)**
    Standard and custom fields extend the standard VideoCallParticipant object to represent a participant of a video call. Participant information can come from the video call provider (for example, Zoom), or Salesforce. This object is available in API version 65.0 and later.
-   **[VideoCallPtcpRequest](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_videocallptcprequest.htm)**
    Represents information about remote signature request for video call participants, including key details such as status, type, and other relevant information for tracking and managing the signature process. This object is available in API version 65.0 and later.
-   **[VideoCallPtcpSession](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_videocallptcpsession.htm)**
    Represents information about participants during remote sessions, including duration, device type, operating system, and browser. It logs reconnections separately, offering a comprehensive view of each participant's experience. This object is available in API version 65.0 and later.
-   **[VideoCallRecording](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_videocallrecording.htm)**
    Standard and custom fields extend the standard VideoCallRecording object to represent a recording from a video call, such as a video recording, a voice recording, or a transcript. This object is availavle in API version 65.0 and later.
-   **[Visit](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_visit.htm)**
    Track information related to a field rep’s visit to a health care provider.
-   **[VisitedParty](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_visitedparty.htm)**
    Represents the contact person at the account that’s being visited. This object is available in API version 49.0 and later.
-   **[Visitor](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_visitor.htm)**
    Represents the sales reps performing visits.
-   **[WorkProcedure](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_workprocedure.htm)**
    Represents information about a procedure or process that's part of a program, such as a care program in Health Cloud or Life Sciences Cloud.
-   **[WorkProcedureStep](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_workprocedurestep.htm)**
    Represents information about the work type that's a part of a work procedure.
-   **[WorkTypeExtension](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_worktypeextension.htm)**
    Represents additional information about a work type.
-   **[WorkTypeStep](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_worktypestep.htm)**
    Represents each step within a work type.
-   **[WorkTypeStepLdTimeOvride](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_worktypestepldtimeovride.htm)**
    Represents the lead time that's used to override the default lead time required for the work procedure, work type, or work type step that's performed at a service territory in a country. This object is available in API version 59.0 and later.
-   **[WorkTypeSvcTerrSchdPrio](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_worktypesvcterrschdprio.htm)**
    Represents the priority of the combination of the service territory, work type, and work procedure while fetching appointment slots. This object is available in API version 59.0 and later.

#### See Also

-   [*Object Reference for the Salesforce Platform*: Overview of Salesforce Objects and Fields](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_concepts.htm "Object Reference for the Salesforce Platform: Overview of Salesforce Objects
    and Fields  - HTML (New Window)")

-   [*SOAP API Developer Guide*: Introduction to SOAP API](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_quickstart_intro.htm "SOAP API Developer Guide: Introduction to SOAP API - HTML (New Window)")

-   [*Industries Common Resources Developer Guide*: Discovery Framework Standard Objects](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/discovery_framework_standard_objects.htm "Industries Common Resources Developer Guide: Discovery Framework Standard
    Objects - HTML (New Window)")

-   [*Industries Common Resources Developer Guide*: Intelligent Form Reader Standard Objects](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/form_reader_standard_objects_overview.htm "Industries Common Resources Developer Guide: Intelligent Form Reader Standard
    Objects - HTML (New Window)")

## Related Topics

- Accreditation (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_accreditation.htm)
- ActionableList (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_actionablelist.htm)
- ActionPlan (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_actionplan_pec.htm)
- ActionPlanItem (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_actionplanitem.htm)
- AccountPlanParticipant (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_accountplanparticipant.htm)
- AccountPlanProduct (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_accountplanproduct.htm)
- AccountPlanRelaObjAnalysis (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_accountplanrelaobjanalysis.htm)
- AccountPlanRelationship (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_accountplanrelationship.htm)
- AccountPlanStakeholder (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_accountplanstakeholder.htm)
- AccountPlanStkhldrAction (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_accountplanstkhldraction.htm)
