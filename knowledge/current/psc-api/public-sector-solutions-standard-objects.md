---
title: "Public Sector Solutions Standard Objects"
domain: psc-api
topic: public-sector-solutions-standard-objects
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:29.762Z
estimatedTokens: 14151
keywords: [Sector, Solutions, Standard, Objects, data, models, provide, support, licensing, permitting, inspections, assessments, case, program, management]
---

# Public Sector Solutions Standard Objects

> The Public Sector Solutions data models provide objects and fields to support licensing
  and permitting, inspections and assessments, case and program management, benefit management,
  grantmaking, and other features for your organization. Use the objects to work with these features
  and transform the delivery of public
  services.

# Public Sector Solutions Standard Objects

The Public Sector Solutions data models provide objects and fields to support licensing and permitting, inspections and assessments, case and program management, benefit management, grantmaking, and other features for your organization. Use the objects to work with these features and transform the delivery of public services.

-   **[Accreditation](atlas.en-us.psc_api.meta/psc_api/sforce_psc_api_objects_accreditation.htm)**
    Represents the professional accreditations of a facility. For example, a joint commission accredits a facility as a general acute care hospital.
-   **[ActionPlan](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_actionplan.htm)**
    Represents the instance of an action plan, a set of tasks created from an action plan template. This object is available in API version 44.0 and later.
-   **[ActionPlanBaseTemplateAsgn](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_actionplanbasetemplateasgn.htm)**
    Represents a junction between an action plan template and a related record. An action plan template can be assigned to a job position, position, or a recruitment requisition. This object is available in API version 62.0 only.
-   **[ActionPlanItem](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_actionplanitem.htm)**
    Represents the instance of an action plan item.This object is available in API version 44.0 and later.
-   **[ActionPlanTemplate](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_actionplantemplate.htm)**
    Represents the instance of an action plan template. This object is available in API version 44.0 and later.
-   **[ActionPlanTemplateItem](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_actionplantemplateitem.htm)**
    Represents the instance of an item on an action plan template version. This object is available in API version 44.0 and later.
-   **[ActionPlanTemplateItemValue](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_actionplantemplateitemvalue.htm)**
    Represents the value associated with an action plan template item. This object is available in API version 44.0 and later.
-   **[ActionPlanTemplateVersion](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_actionplantemplateversion.htm)**
    Represents the version of an action plan template. This object is available in API version 44.0 and later.
-   **[ActionPlanTemplateAssignment](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_actionplantemplateassignment.htm)**
    Represents a junction between an action plant template's version and the target object associated with them. This object is available in API version 56.0 and later.
-   **[ActionPlanTmplItmAssessmentInd](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_actionplantmplitmassessmentind.htm)**
    Represents the action plan template items and the assessment indicator definitions associated with them.
-   **[ApplicationForm](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_applicationform.htm)**
    Represents the high level information of a submitted application. This object is available in API version 62.0 and later.
-   **[ApplicationFormEvaluation](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_applicationformevaluation.htm)**
    Represents the details of the information verification initiated for an object. This object is available in API version 62.0 and later.
-   **[ApplicationFormEvalPtcp](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_applicationformevalptcp.htm)**
    Represents information about a user or group of participants who have access to an application form evaluation. This object is available in API version 62.0 and later.
-   **[ApplicationFormParticipant](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_applicationformparticipant.htm)**
    Represents information about a user or group of participants who have access to an application form. This object is available in API version 62.0 and later.
-   **[ApplicationFormRelation](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_applicationformrelation.htm)**
    Represents the relationship between an application and the context in which it’s held. For example, a application form related to recruitment requisition. This object is available in API version 62.0 and later.
-   **[ApplicationDecision](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_applicationdecision.htm)**
    Represents a final decision performed for the specified Application. This object is available in API version 56.0 and later.
-   **[ApplicationRenderMethod](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_applicationrendermethod.htm)**
    Represents how a part of an application can be rendered. This object is available in API version 61.0 and later.
-   **[ApplicationReview](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_applicationreview.htm)**
    Represents a review performed against a specified Application. This object is available in API version 56.0 and later.
-   **[ApplicationStageDefinition](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_applicationstagedefinition.htm)**
    Represents a stage of an application. This object is available in API version 61.0 and later.
-   **[ApplicationTimeline](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_applicationtimeline.htm)**
    Represents the milestone dates in the application process. This object is available in API version 57.0 and later.
-   **[AssessmentIndicatorDefinition](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_assessmentindicatordefinition.htm)**
    Define parameters that act as markers of compliance for inspections. This object is available in API version 47.0 and later.
-   **[AssessmentIndDefinedValue](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_assessmentinddefinedvalue.htm)**
    Stores the list of acceptable values which are defined as part of assessment indicator definition for a single and multi select question. This object is available in API version 49.0 and later.
-   **[AssessmentIndValue](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_assessmentindvalue.htm)**
    Stores the list of target or captured values which are defined as part of assessment indicator definition for a single and multi select question. This object is available in API version 49.0 and later.
-   **[AssessmentTask](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_assessmenttask.htm)**
    Perform tasks in inspections to capture information. This object is available in API version 47.0 and later.
-   **[AssessmentTaskDefinition](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_assessmenttaskdefinition.htm)**
    Associate an assessment task with an assessment indicator definition. This object is available in API version 48.0 and later.
-   **[AssessmentTaskContentDocument](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_assessmenttaskcontentdocument.htm)**
    Associate content documents to visits. This object is available in API version 47.0 and later.
-   **[AssessmentTaskIndDefinition](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_assessmenttaskinddefinition.htm)**
    Associate an assessment indicator definition with an assessment task definition.This object is available in API version 48.0 and later.
-   **[AuthApplicationAsset](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_authapplicationasset.htm)**
    Information related to the association between an Asset and the Application for the license of an Asset. This object is available in API version 49.0 and later.
-   **[AuthApplicationPlace](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_authapplicationplace.htm)**
    Information related to the association between a location and its application for the license of the location. This object is available in API version 49.0 and later.
-   **[AuthLocationAccessSchedule](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_authlocationaccessschedule.htm)**
    Represents the operating hours during a specified period in which authorization is valid for a place. This object is available in API version 49.0 and later.
-   **[Award](atlas.en-us.psc_api.meta/psc_api/sforce_psc_api_objects_award.htm)**
    Represents a person's or organization's professional awards.
-   **[Benefit](atlas.en-us.psc_api.meta/psc_api/sforce_psc_api_objects_benefit.htm)**
    Represents the benefits provided by public sector agencies that aim to support citizens and their businesses. This object stores whether the benefit is for financial or service-based organizations.
-   **[BenefitAssignment](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_benefitassignment.htm)**
    Represents the enrollment information of an individual or business that is captured in an application. For example, an individual who is unemployed can raise an application requesting help from the government. If it is approved, the individual is enrolled into the unemployment insurance benefit. This object is available in API version 52.0 and later.
-   **[BenefitAssignmentAdjustment](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_benefitassignmentadjustment.htm)**
    Represents a monetary or non-monetary benefit adjustment made to an enrollee that can be disbursed in various frequencies. This object is available in API version 56.0 and later.
-   **[BenefitAssignmentAsset](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_benefitassignmentasset.htm)**
    Represents a junction between an asset and a benefit assignment. This object is available in API version 65.0 and later.
-   **[BenefitDisbursement](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_benefitdisbursement.htm)**
    Represents the allocation of an enrollee's benefit that can be made as monetary or non-monetary with different frequencies. This object is available in API version 56.0 and later.
-   **[BenefitDisbursementAdj](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_benefitdisbursementadj.htm)**
    Represents the changes of an enrollee's benefit that can be made as monetary or non-monetary with similar units of measure. This object is available in API version 56.0 and later.
-   **[BenefitItemCode](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_benefititemcode.htm)**
    Represents information about a code set or a code set bundle that identifies an item that is associated with a benefit. This object is available in API version 59.0 and later.
-   **[BenefitPrvdSearchableFld](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_benefitprvdsearchablefld.htm)**
    Represents a collection of denormalized data from certain fields in the Provider Management data model. Provider search queries this object instead of multiple objects, which improves search performance. This object is available in API version 59.0 and later.
-   **[BenefitSchedule](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_benefitschedule.htm)**
    Represents information about the plan for delivering the benefit. This object is available in API version 58.0 and later.
-   **[BenefitScheduleAssignment](atlas.en-us.psc_api.meta/psc_api/npc_pm_api_objects_benefitscheduleassignment.htm)**
    Represents the junction between Benefit Schedule and Benefit Assignment objects. This object is available in API version 59.0 and later.
-   **[BenefitSession](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_benefitsession.htm)**
    Represents information about an instance of a planned benefit delivery This object is available in API version 58.0 and later.
-   **[BenefitSpecialty](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_benefitspecialty.htm)**
    Represents a junction between a benefit and a care specialty. The object maps the benefits provided to constituents with the specialties offered by the network of service providers. This object is available in API version 59.0 and later.
-   **[BenefitType](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_benefittype.htm)**
    Represents information about the type of benefits that can be applied to an individual or a group.
-   **[BnftAsgntBnftItemCode](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_bnftasgntbnftitemcode.htm)**
    Represents a junction between a benefit assignment and a benefit item code. Indicates the benefit item assigned to the beneficiary. This object is available in API version 66.0 and later.
-   **[BoardCertification](atlas.en-us.psc_api.meta/psc_api/sforce_psc_api_objects_boardcertification.htm)**
    Represents the practitioner's board certifications such as being board-certified in cardiology and cardiovascular disease.
-   **[Budget](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_budget.htm)**
    Tracks an estimate of future revenue or expenses during a specific time period. This object is available in API version 53.0 and later.
-   **[BudgetAllocation](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_budgetallocation.htm)**
    Represents a subsection of a Budget that shows where allocated resources are being applied. This object is available in API version 53.0 and later.
-   **[BudgetCategory](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_budgetcategory.htm)**
    Represents the purpose of the budget line item. This object is available in API version 57.0 and later.
-   **[BudgetCategoryValue](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_budgetcategoryvalue.htm)**
    Captures budget values for category and time period. This object is available in API version 57.0 and later.
-   **[BudgetParticipant](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_budgetparticipant.htm)**
    Represents information about a user or group of participants who have access to a budget. This object is available in API version 59.0 and later.
-   **[BudgetPeriod](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_budgetperiod.htm)**
    Defines a distinct time interval in which the estimate applies. This object is available in API version 57.0 and later.
-   **[BusinessLicense](atlas.en-us.psc_api.meta/psc_api/sforce_psc_api_objects_businesslicense.htm)**
    Represents an authorization issued by a regulatory agency. The authorization can be granted to an organization, a contact, or a specific user.
-   **[BusinessLicenseApplication](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_businesslicenseapplication.htm)**
    Represents an application form submitted by a business owner. This object is available in API version 49.0 and later.
-   **[BusinessLicenseCodeSet](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_businesslicensecodeset.htm)**
    Represents a junction between a business license and a code set. This object is available in API version 66.0 and later.
-   **[BusinessMilestone](atlas.en-us.psc_api.meta/psc_api/sforce_psc_api_objects_businessmilestone.htm)**
    Represents the milestones of a business, such as acquisition, market listing, and expansion.
-   **[BusinessProfile](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_businessprofile.htm)**
    Represents details about the business on the license or permit application. This object is available in API version 49.0 and later.
-   **[BusinessType](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_businesstype.htm)**
    Represents a category of any activity (business or individual), such as healthcare, restaurant, or retail. This object is available in API version 49.0 and later.
-   **[BusRegAuthorizationType](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_busregauthorizationtype.htm)**
    Represents the association between authorization activity and license or permit type.
-   **[BusRegAuthTypeDependency](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_busregauthtypedependency.htm)**
    Information related to the association of permit to permit dependency in a given business context. This object is available in API version 50.0 and later.
-   **[CareBarrier](atlas.en-us.psc_api.meta/psc_api/sforce_psc_api_objects_carebarrier.htm)**
    Represents an obstacle or circumstance that prevents a constituent from getting the required care or services. This object is available in API version 61.0 and later.
-   **[CareBarrierType](atlas.en-us.psc_api.meta/psc_api/sforce_psc_api_objects_carebarriertype.htm)**
    Represents the standard, defined list of barriers maintained by an organization. This object is available in API version 61.0 and later.
-   **[CarePlan](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_careplan.htm)**
    Represents an instantiation of a care plan template for a particular individual in order to reach specific goals. This object is available in API version 55.0 and later.
-   **[CarePlanDetail](atlas.en-us.psc_api.meta/psc_api/sforce_psc_api_objects_careplandetail.htm)**
    Represents additional information associated with a care plan record. These details may be things addressed by the care plan, contributors in the care plan, supporting information, and so on. This object is available in API version 61.0 and later.
-   **[CarePlanTemplate](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_careplantemplate.htm)**
    Represents the template for a type of care plan that can be offered for a household scenario. This object is available in API version 55.0 and later.
-   **[CarePlanTemplateBenefit](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_careplantemplatebenefit.htm)**
    Represents a junction between a care plan template and a benefit. This object stores the benefit details of a care plan. This object is available in API version 55.0 and later.
-   **[CarePlanTemplateGoal](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_careplantemplategoal.htm)**
    Represents a junction between a care plan template and a goal definition. This object stores the goal details of a care plan template. This object is available in API version 55.0 and later.
-   **[CareProviderAdverseAction](atlas.en-us.psc_api.meta/psc_api/sforce_psc_api_objects_careprovideradverseaction.htm)**
    Captures adverse actions against the provider, such as malpractice lawsuits or revoked licenses.
-   **[CareProviderFacilitySpecialty](atlas.en-us.psc_api.meta/psc_api/sforce_psc_api_objects_careproviderfacilityspecialty.htm)**
    Represents all the specialties that the practitioner provides at a given location. For example, a physician who is board-certified in both spine and neuro may provide spine services at one location and neuro services at another.
-   **[CareSpecialty](atlas.en-us.psc_api.meta/psc_api/sforce_psc_api_objects_carespecialty.htm)**
    Represents a listing of provider specialty codes and descriptions.
-   **[CareSpecialtyTaxonomy](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_carespecialtytaxonomy.htm)**
    Represents a junction between a care specialty and a care taxonomy. This object is available in API version 64.0 and later.
-   **[CareTaxonomy](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_caretaxonomy.htm)**
    Represents a static list of taxonomy codes. This object is available in API version 64.0 and later.
-   **[CaseEpisode](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_caseepisode.htm)**
    Represents the episode linked to a case or a case proceeding result, where a business or person or license is the subject. This object is available in API version 58.0 and later.
-   **[CaseParticipant](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_caseparticipant.htm)**
    Represents a junction between a case, and an account or a contact. This object stores the details of the participant associated with a case. This participant could be the applicant, co-applicant, a household, or even a business account. This object is available in API version 54.0 and later.
-   **[CaseProceeding](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_caseproceeding.htm)**
    Represents a legal and formal demand for the enforcement of an individual’s rights against another party in a court of justice. This object is available in API version 58.0 and later.
-   **[CaseProceedingComplaint](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_caseproceedingcomplaint.htm)**
    Represents the association between a complaint and its corresponding case proceeding. This object is available in API version 58.0 and later.
-   **[CaseProceedingInfraction](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_caseproceedinginfraction.htm)**
    Represents the association between an infraction and its corresponding case proceeding. This object is available in API version 58.0 and later.
-   **[CaseProceedingParticipant](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_caseproceedingparticipant.htm)**
    Represents a junction between the case proceeding and a participant, such as an account or a contact. This object stores the details of a participant who is involved in a case proceeding. This object is available in API version 58.0 and later.
-   **[CaseProceedingResult](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_caseproceedingresult.htm)**
    Represents the outcome of a legal case for a participant. This object is available in API version 58.0 and later.
-   **[CaseProgram](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_caseprogram.htm)**
    Represents the junction between Case and Program objects. This object is available in API version 57.0 and later.
-   **[Claim](atlas.en-us.psc_api.meta/psc_api/sforce_psc_api_objects_claim.htm)**
    Represents the types of claims, such as life, auto, or home.
-   **[ClaimItem](atlas.en-us.psc_api.meta/psc_api/sforce_psc_api_objects_claimitem.htm)**
    Represents claim items (such as collision damage, roadside assistance, rental care) and their coverage details.
-   **[ClaimParticipant](atlas.en-us.psc_api.meta/psc_api/sforce_psc_api_objects_claimparticipant.htm)**
    Represents the participants of a claim such as those insured, the claimants, and the witnesses. The object associates claims with participant accounts.
-   **[CodeSet](atlas.en-us.psc_api.meta/psc_api/sforce_psc_api_objects_codeset.htm)**
    Represents various industry defined codes in the context of their systems and versions of those systems. These codes are used in all sorts of digital records. This object is available in API version 59.0 and later.
-   **[CodeSetBundle](atlas.en-us.psc_api.meta/psc_api/sforce_psc_api_objects_codesetbundle.htm)**
    Represents a group of code sets across multiple systems and versions. All of these code sets refer to the same conceptual entity. This object is available in API version 59.0 and later.
-   **[Competency](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_competency.htm)**
    Represents a skill, subject matter expertise, or behavior required for a job or role. This object is available in API version 64.0 and later.
-   **[ComplaintCase](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_complaintcase.htm)**
    Represents the association between a public complaint and its corresponding case. This object is available in API version 52.0 and later.
-   **[ComplaintParticipant](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_complaintparticipant.htm)**
    Represents a junction between a public complaint, and an account or a contact. This object stores the details of the participant who registers a complaint with the authorities. This participant could be the applicant, co-applicant, a household, or even a business account. This object is available in API version 54.0 and later.
-   **[Contact](atlas.en-us.psc_api.meta/psc_api/sforce_psc_api_objects_contact.htm)**
    Represents a contact, which is a person associated with an account.
-   **[ContactProfile](atlas.en-us.psc_api.meta/psc_api/sforce_psc_api_objects_contactprofile.htm)**
    Represents information about an individual, such as their ethnicity, citizenship, birth place, race, and so on.
-   **[CourseOffering](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_courseoffering.htm)**
    Represents an instance of a training course with location and date details of training courses This object is available in API version 49.0 and later.
-   **[CustodyChainEntry](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_custodychainentry.htm)**
    Represents information about an entry or event in the chain of custody. This object is available in API version 59.0 and later.
-   **[CustodyItem](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_custodyitem.htm)**
    Represents information about an item in the custody chain. This object is available in API version 59.0 and later.
-   **[CustodyItemRelation](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_custodyitemrelation.htm)**
    Represents the relationship between a custody item and the context in which it’s held. For example, a custody item related to a case or case proceeding. This object is available in API version 59.0 and later.
-   **[CustodyItemRgltyCodeVio](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_custodyitemrgltycodevio.htm)**
    Represents a junction between a custody item and the related regulatory code violation. The violation can be related to laws, regulations, or code that is associated with the custody item. This object is available in API version 59.0 and later.
-   **[DocumentChecklistItem](atlas.en-us.psc_api.meta/psc_api/sforce_psc_api_objects_documentchecklistitem.htm)**
    Represents a checklist item for a file documentation upload.
-   **[Employee2](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_employee2.htm)**
    Represents an employee within a company or an organization. This object is available in API version 62.0 and later.
-   **[Employment](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_employment.htm)**
    Represents the details of an individual's employment with an organization. This object is available in API version 62.0 and later.
-   **[EmploymentOffer](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_employmentoffer.htm)**
    Represents an employment offer for a selected candidate. This object is available in API version 62.0 and later.
-   **[EmploymentOfferVettingEval](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_employmentoffervettingeval.htm)**
    Represents a junction between an employment offer and a vetting evaluation of the offer recipient. This object is available in API version 62.0 and later.
-   **[Examination](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_examination.htm)**
    Represents information about the authorized examinations that qualify a license or permit. This object is available in API version 49.0 and later.
-   **[FundingAward](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_fundingaward.htm)**
    Represents an award given to an individual or organization to facilitate a goal related to the funder’s mission. This object is available in API version 57.0 and later.
-   **[FundingAwardAmendment](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_fundingawardamendment.htm)**
    Represents a modification to the scope or finances of a previously approved award. This object is available in API version 57.0 and later.
-   **[FundingAwardParticipant](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_fundingawardparticipant.htm)**
    Represents information about a user or group of participants who have access to a funding award. This object is available in API version 59.0 and later.
-   **[FundingAwardRequirement](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_fundingawardrequirement.htm)**
    Represents a deliverable or milestone that is needed for the award to either be approved or closed. This object is available in API version 57.0 and later.
-   **[FundingAwardRqmtSection](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_fundingawardrqmtsection.htm)**
    Represents a part of a funding award requirement to be completed or reviewed. This object is available in API version 62.0 and later.
-   **[FundingDisbursement](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_fundingdisbursement.htm)**
    Represents a payment that has been made or scheduled to be made to a funding recipient. This object is available in API version 57.0 and later.
-   **[FundingOpportunity](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_fundingopportunity.htm)**
    The pool of money available for distribution for a specific purpose. This object is available in API version 57.0 and later.
-   **[FundingOppParticipant](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_fundingoppparticipant.htm)**
    Represents information about a user or group of participants who have access to a funding opportunity. This object is available in API version 60.0 and later.
-   **[GenericVisitTask](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_genericvisittask.htm)**
    Represents information about a task that can be performed during a visit.
-   **[GenericVisitTaskContext](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_genericvisittaskcontext.htm)**
    Represents the context or purpose for a generic visit task.
-   **[GoalAssignment](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_goalassignment.htm)**
    Represents the assignment of a goal. This object is available in API version 55.0 and later.
-   **[GoalAssignmentDetail](atlas.en-us.psc_api.meta/psc_api/sforce_psc_api_objects_goalassignmentdetail.htm)**
    Represents additional information associated with a goal assignment. This object is available in API version 61.0 and later.
-   **[GoalDefinition](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_goaldefinition.htm)**
    The definition of a care plan goal in the reusable PGI library that’s a part of Integrated Care Management. When instantiated, GoalDefinition records create GoalAssignment records that serve as goals in care plans. This object is available in API version 57.0 and later.
-   **[GnrcVstKeyPerformanceInd](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_gnrcvstkeyperformanceind.htm)**
    Represents the key performance indicators that can be recorded while performing a task during a visit. You can compare the expected and actual metric values with the key performance indicator records.
-   **[GnrcVstTaskContextRelation](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_gnrcvsttaskcontextrelation.htm)**
    Represents common attributes used for a visit task and a visit task context.
-   **[HealthcareFacility](atlas.en-us.psc_api.meta/psc_api/sforce_psc_api_objects_healthcarefacility.htm)**
    Represents a healthcare facility and all its related details. These details may be physical, functional, geographic, or business details.
-   **[HealthcarePractitionerFacility](atlas.en-us.psc_api.meta/psc_api/sforce_psc_api_objects_healthcarepractitionerfacility.htm)**
    Represents the different locations in which a practitioner provides services.
-   **[HealthcareProvider](atlas.en-us.psc_api.meta/psc_api/sforce_psc_api_objects_healthcareprovider.htm)**
    Represents business-level details about the provider organization or the practitioner.
-   **[HealthcareProviderNpi](atlas.en-us.psc_api.meta/psc_api/sforce_psc_api_objects_healthcareprovidernpi.htm)**
    Represents identifiers from the National Provider Identifier that are assigned to every facility and licensed practitioner in the United States. Also includes NPI assigned date, primary mailing address on file, and so on.
-   **[HealthcareProviderSpecialty](atlas.en-us.psc_api.meta/psc_api/sforce_psc_api_objects_healthcareproviderspecialty.htm)**
    Represents specialties for a practitioner or a provider service organization. A provider can have multiple specialties such as anesthesiology and cardiovascular.
-   **[HealthcareProviderTaxonomy](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_healthcareprovidertaxonomy.htm)**
    Represents the taxonomy or subspecialty codes for a provider or facility. A provider or facility can have multiple taxonomies. This object is available in API version 64.0 and later.
-   **[IndividualApplication](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_individualapplication.htm)**
    Represents an application form submitted by an individual or organization. This object is available in API version 50.0 and later.
-   **[IndividualApplicationTask](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_individualapplicationtask.htm)**
    Represents a task related to an application. This object is available in the API version 61.0 and later.
-   **[IndividualApplnParticipant](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_individualapplnparticipant.htm)**
    Represents information about a user or group of participants who have access to a individual application. This object is available in API version 59.0 and later.
-   **[InspectionAssessmentInd](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_inspectionassessmentind.htm)**
    Represents the assessment indicators recorded during an inspection. This object is available in API version 49.0 and later.
-   **[InspectionType](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_inspectiontype.htm)**
    Represents the type of inspections related to a permit or license. This object is available in API version 49.0 and later.
-   **[InsurancePolicy](atlas.en-us.psc_api.meta/psc_api/sforce_psc_api_objects_insurancepolicy.htm)**
    Represents a type of insurance policy. This object is available in API version 59.0 and later.
-   **[InsurancePolicyTransaction](atlas.en-us.psc_api.meta/psc_api/sforce_psc_api_objects_insurancepolicytransaction.htm)**
    Represents a transaction related to a change that affects the premium of an insurance policy, such as an endorsement, renewal, or cancellation. This object is available in API version 60.0 and later.
-   **[IntakeFormSection](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_intakeformsection.htm)**
    Represents a section of an intake form such as a job application, a complaint, or a referral. This object is available in API version 63.0 and later.
-   **[IntakeFormSectionPtcp](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_intakeformsectionptcp.htm)**
    Represents information about a user or group of participants who have access to an intake form section. This object is available in API version 64.0 and later.
-   **[Interaction](atlas.en-us.psc_api.meta/psc_api/sforce_psc_api_objects_interaction.htm)**
    Represents an interaction (phone call, in-person meeting, or video conference) between two or more people (attendees), typically including at least one representative and one customer or partner.
-   **[InteractionAttendee](atlas.en-us.psc_api.meta/psc_api/sforce_psc_api_objects_interactionattendee.htm)**
    Represents an attendee of an interaction.
-   **[InteractionRelatedAccount](atlas.en-us.psc_api.meta/psc_api/sforce_psc_api_objects_interactionrelatedaccount.htm)**
    Represents a junction between an interaction and account that's related to that interaction.
-   **[InteractionSumDiscussedAccount](atlas.en-us.psc_api.meta/psc_api/sforce_psc_api_objects_interactionsumdiscussedaccount.htm)**
    Represents information about the companies discussed in an interaction.
-   **[InteractionSummary](atlas.en-us.psc_api.meta/psc_api/sforce_psc_api_objects_interactionsummary.htm)**
    Represents the summary of an interaction, including confidentiality information.
-   **[JobApplnSearchableField](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_jobapplnsearchablefield.htm)**
    Represents searchable data for job applications, enabling criteria-based search and filtering to find applications that match the user-specific criteria. This object is available in API version 62.0 and later.
-   **[JobPosition](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_jobposition.htm)**
    Represents an instance of employment in a particular position in the organization. This object is available in API version 62.0 and later.
-   **[JobPositionPayGrade](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_jobpositionpaygrade.htm)**
    Represents a junction between a job position and a position pay grade. This object is available in API version 62.0 and later.
-   **[JobPositionQualification](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_jobpositionqualification.htm)**
    Represents qualification required for a specific job position. For example, Data Visualization for a Program and Management Analyst position. This object is available in API version 64.0 and later.
-   **[JobPostingSearchableField](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_jobpostingsearchablefield.htm)**
    Object used for searching and Filtering published Job Postings. This object is available in API version 62.0 and later.
-   **[JobPstnRecruitmentRqs](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_jobpstnrecruitmentrqs.htm)**
    Represents a junction between a job position and a recruitment requisition. This object is available in API version 62.0 and later.
-   **[Location](atlas.en-us.psc_api.meta/psc_api/sforce_psc_api_objects_location.htm)**
    Represents a warehouse, service vehicle, work site, or other element of the region where your team performs field service work. You can associate activities with specific locations. Activities, such as the tasks and events related to a location, appear in the activities timeline when you view the location detail page.
-   **[Occupation](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_occupation.htm)**
    Represents a group of positions that engage in a specialized line of work and require a connected set of skills, knowledge, or qualifications. For example, the occupation of Registered Nurses in the Healthcare occupation group. This object is available in API version 62.0 and later.
-   **[OccupationGroup](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_occupationgroup.htm)**
    Represents a group of occupations that involve broadly similar functions, knowledge and skills, or materials and equipment. For example, Architecture and Engineering, Military, and Healthcare. This object is available in API version 62.0 and later.
-   **[OmniAssessmentTask](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_omniassessmenttask.htm)**
    Represents the information about an assessment task that is associated with an OmniScript. This object is available in API version 55.0 and later.
-   **[OmniDataPack](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_omnidatapack.htm)**
    For internal use only.
-   **[OmniDataTransform](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_omnidatatransform.htm)**
    For internal use only.
-   **[OmniDataTransformItem](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_omnidatatransformitem.htm)**
    For internal use only.
-   **[OmniESignature](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_omniesignature.htm)**
    For internal use only.
-   **[OmniProcess](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_omniprocess.htm)**
    For internal use only.
-   **[OmniProcessCompilation](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_omniprocesscompilation.htm)**
    For internal use only.
-   **[OmniProcessElement](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_omniprocesselement.htm)**
    For internal use only.
-   **[OmniProcessOmniAsmtTask](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_omniprocessomniasmttask.htm)**
    Represents a junction between an omni process and an omni assessment task. This object is available in API version 63.0 and later.
-   **[OmniProcessTransientData](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_omniprocesstransientdata.htm)**
    For internal use only.
-   **[OmniScriptSavedSession](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_omniscriptsavedsession.htm)**
    For internal use only.
-   **[OmniUiCard](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_omniuicard.htm)**
    For internal use only.
-   **[OperatingHours](atlas.en-us.psc_api.meta/psc_api/sforce_psc_api_objects_operatinghours.htm)**
    Represents the hours that a facility is open.
-   **[OperatingHoursHoliday](atlas.en-us.psc_api.meta/psc_api/sforce_psc_api_objects_operatinghoursholiday.htm)**
    Represents the day or hours for which a provider or practitioner facility is unavailable to offer service.
-   **[PartyCertifiedCapacity](atlas.en-us.psc_api.meta/psc_api/sforce_psc_api_objects_partycertifiedcapacity.htm)**
    Represents the information captured from the certificate of capacity, such as the party's capacity to work, a timeline for recovery, and return to work. This object is available in API version 60.0 and later.
-   **[PartyExpense](atlas.en-us.psc_api.meta/psc_api/sforce_psc_api_objects_partyexpense.htm)**
    Represents the expense incurred by an individual or account. This object is available in API version 58.0 and later.
-   **[PartyFinancialAsset](atlas.en-us.psc_api.meta/psc_api/sforce_psc_api_objects_partyfinancialasset.htm)**
    Represents the financial asset owned by an individual or account. This object is available in API version 58.0 and later.
-   **[PartyIncome](atlas.en-us.psc_api.meta/psc_api/sforce_psc_api_objects_partyincome.htm)**
    Represents all income earned by an individual. The income could be from various sources such as salary, commissions, fees, rental properties, and so on.
-   **[PartyProfile](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_partyprofile.htm)**
    Represents information about the profile of a party, such as an account. This object is available in API version 62.0 and later.
-   **[PartyProfileAddress](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_partyprofileaddress.htm)**
    Represents information about the address of the party. This object is available in API version 62.0 and later.
-   **[PayGrade](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_paygrade.htm)**
    Represents a range of positions that require sufficiently similar responsibilities and competencies, and are associated with a common pay band. This object is available in API version 62.0 and later.
-   **[PayGradeStep](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_paygradestep.htm)**
    Represents a pay range within the pay band associated with a pay grade. Pay steps enable pay raises within the pay band. This object is available in API version 62.0 and later.
-   **[PayGradeStepLocation](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_paygradesteplocation.htm)**
    Represents a junction between a pay grade step and a location. This object is available in API version 62.0 and later.
-   **[PaymentCart](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_paymentcart.htm)**
    Represents a payment cart that collects payment items before processing. Use this object to group multiple payment items (such as invoices) together for batch payment processing. The cart tracks the total amount and processing status of the payment. This object is available in API version 66.0 and later.
-   **[PaymentCartItem](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_paymentcartitem.htm)**
    Represents a line item in a payment cart. Each payment cart item is associated with a parent PaymentCart record and typically references an invoice. The Amount field on each item contributes to the TotalAmount roll-up summary on the parent PaymentCart. This object is available in API version 66.0 and later.
-   **[PaymentRequest](atlas.en-us.psc_api.meta/psc_api/sforce_psc_api_objects_paymentrequest.htm)**
    Represents a financial compensation request for goods or services provided by a third party. This object is available in API version 60.0 and later.
-   **[PaymentRequestLine](atlas.en-us.psc_api.meta/psc_api/sforce_psc_api_objects_paymentrequestline.htm)**
    Represents the line item details of the financial compensation request. This object is available in API version 60.0 and later.
-   **[PersonCompetency](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_personcompetency.htm)**
    Represents information about a competency that a person has. This object is available in API version 64.0 and later.
-   **[PersonDisability](atlas.en-us.psc_api.meta/psc_api/sforce_psc_api_objects_persondisability.htm)**
    Represents information about a person's disability. This object is available in API version 58.0 and later.
-   **[PersonEducation](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_personeducation.htm)**
    Represents information about the professional education for a person.
-   **[PersonEmployment](atlas.en-us.psc_api.meta/psc_api/sforce_psc_api_objects_personemployment.htm)**
    Represents information about a person’s employment.
-   **[PersonExamination](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_personexamination.htm)**
    Represents the examinations taken by a person. This object is available in API version 49.0 and later.
-   **[PersonLifeEvent](atlas.en-us.psc_api.meta/psc_api/sforce_psc_api_objects_personlifeevent.htm)**
    Represents the life events of an individual, such as marriage, birth of a child, birthday, engagement.
-   **[Polygon](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_polygon.htm)**
    Represents a polygon with the polygon mapping data stored as a blob. This object is available in API version 50.0 and later.
-   **[Position](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_position.htm)**
    Represents a functional role that is characterized by specific duties and responsibilities, and required skills and qualifications. This object is available in API version 62.0 and later.
-   **[PositionPayGrade](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_positionpaygrade.htm)**
    Represents a junction between a position and a pay grade. This object is available in API version 62.0 and later.
-   **[PositionQualification](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_positionqualification.htm)**
    Represents a position-based qualification. For example, Communication Skills for a Program and Management Analyst position. This object is available in API version 64.0 and later.
-   **[PreliminaryApplicationRef](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_preliminaryapplicationref.htm)**
    Represents the saved applications and pre-screening forms. This object is available in API version 49.0 and later.
-   **[Program](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_program.htm)**
    Represents information about the enrollment and disbursement of benefits in a program.
-   **[ProgramCohortMember](atlas.en-us.psc_api.meta/psc_api/npc_pm_objects_programcohortmember.htm)**
    Represents program enrollees that are part of a given cohort. This object is available in API version 61.0 and later.
-   **[ProgramEnrollment](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_programenrollment.htm)**
    Represents details of enrollment for benefits in a program. This object is available in API version 57.0 and later.
-   **[PublicApplicationParticipant](atlas.en-us.psc_api.meta/psc_api/sforce_psc_api_objects_publicapplicationparticipant.htm)**
    Represents a junction between an individual application or business license application, and an account or a contact. This object stores the details of the participants associated with an application. This participant could be the applicant, co-applicant, a household, or even a business account that is added to an application. This object is available in API version 58.0 and later.
-   **[PublicComplaint](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_publiccomplaint.htm)**
    Represents the complaints submitted by public users. This object is available in API version 49.0 and later.
-   **[RecruitmentContentSection](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_recruitmentcontentsection.htm)**
    Represents the content that you want to include in a section of a recruitment posting. This object is available in API version 62.0 and later.
-   **[RecruitmentPosting](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_recruitmentposting.htm)**
    Represents an advertisement of a vacancy that you're recruiting for and specifies when and where the advertisement is posted. This object is available in API version 62.0 and later.
-   **[RecruitmentPostingCntntSect](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_recruitmentpostingcntntsect.htm)**
    Represents a junction between a recruitment posting and a recruitment content section. This object is available in API version 62.0 and later.
-   **[RecruitmentRequisition](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_recruitmentrequisition.htm)**
    Represents a formal request to recruit for a position or a provider vacancy. This object is available in API version 62.0 and later.
-   **[RecruitmentRequisitionLoc](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_recruitmentrequisitionloc.htm)**
    Represents a junction between recruitment requisition and location This object is available in API version 62.0 and later.
-   **[RecruitmentRequisitionPtcp](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_recruitmentrequisitionptcp.htm)**
    Represents information about a user or group of participants who have access to a recruitment requisition. This object is available in API version 62.0 and later.
-   **[RecurrenceSchedule](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_recurrenceschedule.htm)**
    Represents the recurrence schedule for a benefit schedule. This object is available with Program Management in API version 57.0 and later.
-   **[ReceivedDocument](atlas.en-us.psc_api.meta/psc_api/sforce_psc_api_objects_receiveddocument.htm)**
    Contains a request for an operation to be performed on a document, such as rotating, splitting, or text extraction.
-   **[ReceivedDocumentType](atlas.en-us.psc_api.meta/psc_api/sforce_psc_api_objects_receiveddocumenttype.htm)**
    Represents a junction object between Received Document and Document Type. This object is available in API version 58.0 and later.
-   **[Referral](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_referral.htm)**
    Represents the information on client referrals in an organization. This object is available in API version 56.0 and later.
-   **[RegulatoryAuthority](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_regulatoryauthority.htm)**
    Represents an organization or government agency that provides authorization. This object is available in API version 49.0 and later.
-   **[RegulatoryAuthorizationType](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_regulatoryauthorizationtype.htm)**
    Represents the authorization issued by the regulatory body.
-   **[RegulatoryCode](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_regulatorycode.htm)**
    Represents the regulation code enforced by the regulatory body. This object is available in API version 49.0 and later.
-   **[RegulatoryCodeUse](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_regulatorycodeuse.htm)**
    Represents a junction between a set of assessment questions and the regulatory code associated with them. This object is available in API version 55.0 and later.
-   **[RegCodeAssessmentInd](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_regulatorycodeassessmentind.htm)**
    Represents the regulatory codes and the assessment indicator definitions associated with them. This object is available in API version 49.0 and later.
-   **[RegulatoryCodeViolation](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_regulatorycodeviolation.htm)**
    Represents the transactional violation data that has been identified during an inspection. This entity ties the inspection question that is violated, violation reason and the regulatory code details. This object is available in API version 49.0 and later.
-   **[RegulatoryTrxnFee](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_regulatorytrxnfee.htm)**
    Represents the association of regulatory transaction fees with your applications, inspections, or violations. This object is available in API version 51.0 and later.
-   **[RegulatoryTrxnFeeItem](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_regulatorytrxnfeeitem.htm)**
    Represents the storage of specific fee items associated with your regulatory transaction fees. This object is available in API version 51.0 and later.
-   **[RegAuthorizationTypeProduct](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_regauthorizationtypeproduct.htm)**
    Represents the association of authorization type and product. This object is available in API version 49.0 and later.
-   **[SignatureTask](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_signaturetask.htm)**
    Represents the signature-related information that a visitor captures as part of a visit. This object is available in API version 50.0 and later.
-   **[SignatureTaskLineItem](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_signaturetasklineitem.htm)**
    Represents a junction between a signature task and a digital signature captured in a visit. This object is available in API version 50.0 and later.
-   **[TagCategory](atlas.en-us.psc_api.meta/psc_api/sforce_psc_api_objects_tagcategory.htm)**
    Group similar interest tags together into tag categories.
-   **[TimeSlot](atlas.en-us.psc_api.meta/psc_api/sforce_psc_api_objects_timeslot.htm)**
    Represents a range of time on a specified day of the week during which a provider or practitioner offers service. Operating hours consist of one or more time slots. Operating hours consist of one or more time slots.
-   **[TrainingCourseParticipant](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_trainingcourseparticipant.htm)**
    Represents the trainings completed by a person. This object is available in API version 49.0 and later.
-   **[TrnCourse](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_trncourse.htm)**
    Represents information about the authorized trainings that qualify a license or permit. This object is available in API version 49.0 and later.
-   **[VettingEvaluation](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_vettingevaluation.htm)**
    Represents the evaluation of a candidate based on a vetting procedure. This object is available in API version 62.0 and later.
-   **[ViolationEnforcementAction](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_violationenforcementaction.htm)**
    Represents the action that a regulatory authority takes to address violations. This object is available in API version 49.0 and later.
-   **[ViolationType](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_violationtype.htm)**
    Represents violations types for licenses and permits. This object is available in API version 49.0 and later.
-   **[ViolationTypeUse](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_violationtypeuse.htm)**
    Represents a junction between a set of assessment questions and the violation type associated with them. This object is available in API version 55.0 and later.
-   **[ViolationTypeAssessmentInd](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_violationtypeassessmentind.htm)**
    Represents violation types associated with assessment indicator definitions. This object is available in API version 49.0 and later.
-   **[Visit](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_visits.htm)**
    Represents a visit to inspect, assess compliance, or assess an applicant’s ability to get a license or permit or inspect. This object is available in API version 47.0 and later.
-   **[Visitor](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_visitor.htm)**
    Represents the inspectors performing inspection visits. This object is available in API version 56.0 and later.
-   **[VisitedParty](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_visitedparty.htm)**
    Represents the contact person at the account that’s being visited. This object is available in API version 49.0 and later.
-   **[VolunteerProject](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_volunteerproject.htm)**
    Represents information about activities that must be carried out within a certain time frame, at a specified location, by one or more volunteers.
-   **[WorkerCompCoverageClass](atlas.en-us.psc_api.meta/psc_api/sforce_psc_api_objects_workercompcoverageclass.htm)**
    Represents the compensation coverage class that a worker belongs to. This object is available in API version 60.0 and later.

#### See Also

-   [*Salesforce Developer Guide*: Public Sector Solutions Data Models](https://developer.salesforce.com/docs/atlas.en-us.260.0.psc_api.meta/psc_api/psc_data_models_overview.htm "Salesforce Developer Guide: Public Sector Solutions Data Models - HTML (New Window)")

## Related Topics

- Accreditation (atlas.en-us.psc_api.meta/psc_api/sforce_psc_api_objects_accreditation.htm)
- ActionPlan (atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_actionplan.htm)
- ActionPlanBaseTemplateAsgn (atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_actionplanbasetemplateasgn.htm)
- ActionPlanItem (atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_actionplanitem.htm)
- ActionPlanTemplate (atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_actionplantemplate.htm)
- ActionPlanTemplateItem (atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_actionplantemplateitem.htm)
- ActionPlanTemplateItemValue (atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_actionplantemplateitemvalue.htm)
- ActionPlanTemplateVersion (atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_actionplantemplateversion.htm)
- ActionPlanTemplateAssignment (atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_actionplantemplateassignment.htm)
- ActionPlanTmplItmAssessmentInd (atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_actionplantmplitmassessmentind.htm)
