---
title: "Education Cloud Standard Objects"
domain: edu-cloud-dev-guide
topic: education-cloud-standard-objects
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:25.177Z
estimatedTokens: 6101
keywords: [Education, Cloud, Standard, Objects]
---

# Education Cloud Standard Objects

> This section lists standard objects available for use with Education Cloud.

# Education Cloud Standard Objects

This section lists standard objects available for use with Education Cloud.

| Available in: Lightning Experience in Performance, Enterprise, Developer, and Unlimited editions that have Education Cloud enabled. |
| --- |


Some fields may not be listed for some objects. To see the system fields for each object, see [System Fields](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/system_fields.htm "HTML (New Window)") in the Object Reference for Salesforce and Lightning Platform.

To verify the complete list of fields for an object, use a describe call from the API or inspect with an appropriate tool. For example, inspect the WSDL or use a schema viewer.

-   **[AcademicCredential](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_academiccredential.htm)**
    A credential which can be earned by learners. This object is available in API version 59.0 and later.
-   **[AcademicInterest](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_academicinterest.htm)**
    Represents a person's academic interest. This object is available in API version 62.0 and later.
-   **[AcademicOrder](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_academicorder.htm)**
    Represents a junction between an academic interval, such as an academic term, and an order. This object is available in API version 66.0 and later.
-   **[AcademicSession](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_academicsession.htm)**
    Records course offering period. Specifies time periods based on an institution’s calendar whether that is semesters, quarters, trimesters, or other terms. This object is available in API version 57.0 and later.
-   **[AcademicTerm](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_academicterm.htm)**
    Defines an academic period which may hold other more defined time periods within it to create a specific time for reporting and offerings. This object is available in API version 57.0 and later.
-   **[AcademicTermEnrollment](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_academictermenrollment.htm)**
    Represents information about a student's enrollment in an Academic Term. This object is available in API version 57.0 and later.
-   **[AcademicTermPolicyRule](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_academictermpolicyrule.htm)**
    Represents a junction between Academic Term and Expression Set objects where an expression set is used as a policy rule for the academic term. This object is available in API version 63.0 and later.
-   **[AcadTermEnrlPolicyRuleLog](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_acadtermenrlpolicyrulelog.htm)**
    Represents the log of the policy rule calculation runs for an academic term enrollment. This object is available in API version 64.0 and later.
-   **[AcademicTermRegstrnTimeline](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_academictermregstrntimeline.htm)**
    Represents the registration time window for an academic term. This object is available in API version 64.0 and later.
-   **[AcademicYear](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_academicyear.htm)**
    Defines an academic year period. This object is available in API version 57.0 and later.
-   **[ApplicationDecision](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_applicationdecision.htm)**
    Represents information about the academic standing of an applicant. This object is available in API version 57.0 and later.
-   **[ApplicationRecommendation](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_applicationrecommendation.htm)**
    Represents information about the recommendation for an individual application. This object is available in API version 57.0 and later.
-   **[ApplicationRecommender](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_applicationrecommender.htm)**
    Represents a junction between an individual application and the recommender of the application. This object is available in API version 57.0 and later.
-   **[ApplicationRenderMethod](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_applicationrendermethod.htm)**
    Represents how a part of an application can be rendered. This object is available in API version 60.0 and later.
-   **[ApplnRenderMethodAssignment](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_applnrendermethodassignment.htm)**
    Represents an assignment of the application render method to a component that's rendered in the application. This object is available in API version 60.0 and later.
-   **[ApplicationReview](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_applicationreview.htm)**
    Represents a review performed against the specified application. This object is available in API version 57.0 and later.
-   **[ApplicationSectionDefinition](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_applicationsectiondefinition.htm)**
    Represents the section of an application. This object is available in API version 59.0 and later.
-   **[ApplicationStageDefinition](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_applicationstagedefinition.htm)**
    Represents a stage of an application. This object is available in API version 59.0 and later.
-   **[ApplnStageSectionDefinition](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_applnstagesectiondefinition.htm)**
    Represents a junction between an application stage definition and application section definition. This object is available in API version 59.0 and later.
-   **[ApplicationTimeline](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_applicationtimeline.htm)**
    Represents the milestone dates in the application process. This object is available in API version 57.0 and later.
-   **[CaseTeamMemberProgram](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_caseteammemberprogram.htm)**
    Represents mapping information between Case Team Member and Program. This object is available in API version 59.0 and later.
-   **[CompetencyRelatedObject](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_competencyrelatedobject.htm)**
    Represents a junction between competency and another object. This object is available in API version 64.0 and later.
-   **[ConstituentRole](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_constituentrole.htm)**
    Contains information about roles associated with the individual. This object is available in API version 57.0 and later.
-   **[ContactProfile](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_contactprofile.htm)**
    Represents information about an individual, such as their ethnicity, citizenship, birth place, race, and so on. This object is available in API version 57.0 and later.
-   **[CourseCreditTransferAppln](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_coursecredittransferappln.htm)**
    Represents the details of a course credit transfer application. This object is available in API version 65.0 and later.
-   **[CourseOfferingParticipant](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_courseofferingparticipant.htm)**
    Represents information about a student's enrollment in a Course Offering. This object is available in API version 57.0 and later.
-   **[CourseOfrPtcpActvtyGrd](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_courseofrptcpactvtygrd.htm)**
    https://gus.lightning.force.com/lightning/r/MDS\_Entity\_\_c/a7BEE000000QYE92AO/view This object is available in API version 65.0 and later.
-   **[CourseOfferingPtcpResult](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_courseofferingptcpresult.htm)**
    Represents the outcome of a student's participation in a course. This object is available in API version 57.0 and later.
-   **[CourseOfrgRubricCriterion](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_courseofrgrubriccriterion.htm)**
    Represents an activity rubric criterion for a course offering. This object is available in API version 65.0 and later.
-   **[CourseOfferingSchedule](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_courseofferingschedule.htm)**
    Represents information about the schedule defined for a Course Offering. This object is available in API version 57.0 and later.
-   **[CourseOfferingScheduleTmpl](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_courseofferingscheduletmpl.htm)**
    Represents a template that can be used to define a course schedule. This object is available in API version 57.0 and later.
-   **[EducationalCharacteristic](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_educationalcharacteristic.htm)**
    Represents a characteristic about a student such as the student's major or student-athlete status. You can use educational characteristics to filter and search for data and customize the student experience. This object is available in API version 66.0 and later.
-   **[EducCharacteristicAssignment](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_educcharacteristicassignment.htm)**
    Represents the assignment of an educational characteristic to a student. Assignments are active for an academic interval such as an academic year or semester. This object is available in API version 66.0 and later.
-   **[EducCharacteristicType](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_educcharacteristictype.htm)**
    Represents a category of educational characteristics such as major or campus. This object is available in API version 66.0 and later.
-   **[EducCharReqAssignment](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_educcharreqassignment.htm)**
    Represents the assignment of an educational characteristic requirement to a learning or course offering. This object is available in API version 66.0 and later.
-   **[EducCharReqRelationship](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_educcharreqrelationship.htm)**
    Represents the logic between multiple educational characteristics that defines an educational characteristic requirement. This object is available in API version 66.0 and later.
-   **[EducCharRequirement](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_educcharrequirement.htm)**
    Represents a definition of the educational characteristics that are needed to meet an educational requirement. This object is available in API version 66.0 and later.
-   **[EducationalInfoRequest](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_educationalinforequest.htm)**
    Represents details about a request for information (RFI) raised by prospective students, parents, or counselors. This object is available in API version 57.0 and later.
-   **[EducInstitutionOffering](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_educinstitutionoffering.htm)**
    Represents a junction between an institution's account and other objects, such as program, learning program, and academic term. This object is available in API version 64.0 and later.
-   **[EducInstSearchableProfile](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_educinstsearchableprofile.htm)**
    Represents information about an educational institution aggregated from other objects for Criteria-Based Search and Filter. This object is available in API version 64.0 and later.
-   **[ExternalLearning](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_externallearning.htm)**
    Represents information that defines a training that is made available by an external provider as a course, program, or on-site experience, for a contact. This object is available in API version 65.0 and later.
-   **[IndividualApplicationTask](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_individualapplicationtask.htm)**
    Represents a task related to an application. This object is available in API version 59.0 and later.
-   **[IndividualApplicationTaskItem](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_individualapplicationtaskitem.htm)**
    Represents a junction between an Application Item and an Individual Application Task. This object is available in API version 62.0 and later.
-   **[InvolvementGroup](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_involvementgroup.htm)**
    Represents an involvement group in an institution. This object is available in API version 64.0 and later.
-   **[InvolvementGroupMember](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_involvementgroupmember.htm)**
    Represents a member in an institution's involvement group. This object is available in API version 64.0 and later.
-   **[LearnerPathway](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_learnerpathway.htm)**
    Represents the learner's planned path to completion of their enrolled learning programs. This object is available in API version 61.0 and later.
-   **[LearnerPathwayItem](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_learnerpathwayitem.htm)**
    Represents a requirement with completion details in the Learner Pathway. This object is available in API version 61.0 and later.
-   **[LearnerProfile](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_learnerprofile.htm)**
    Represents information about a learner's profile. This object is available in API version 63.0 and later.
-   **[LearnerProgram](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_learnerprogram.htm)**
    Represents details of a Learning Program Plan that's created for a learner. This object is available in API version 57.0 and later.
-   **[LearnerProgramRequirement](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_learnerprogramrequirement.htm)**
    Represents details of the requirement that a learner is required to complete in their assigned Learning Program Plan. This object is available in API version 57.0 and later.
-   **[LearnerProgramRqmtProgress](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_learnerprogramrqmtprogress.htm)**
    Represents information about the progress of a requirement that a learner is required to complete as a part of the assigned program plan. This object is available in API version 57.0 and later.
-   **[Learning](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_learning.htm)**
    Represents information that defines a training that can be made available as a course, program, or on-site experience, for a contact. This object is available in API version 57.0 and later.
-   **[LearningAchievement](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_learningachievement.htm)**
    Represents information about the outcome of a learning activity. This object is available in API version 57.0 and later.
-   **[LearningCourse](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_learningcourse.htm)**
    Represents information about a course that’s required in a learning framework. This object is available in API version 57.0 and later.
-   **[LearningEquivalency](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_learningequivalency.htm)**
    Represents the details of the equivalency between external and internal learnings. This object is available in API version 65.0 and later.
-   **[LearningEquivalencyLearning](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_learningequivalencylearning.htm)**
    Represents a junction between a learning equivalency and a learning. Use this object to filter learning equivalencies by learning. This object is available in API version 66.0 and later.
-   **[LearningEqvAchvMapping](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_learningeqvachvmapping.htm)**
    Represents the mapping between a learning equivalency, internal achievement group, and external achievement group. This object is available in API version 65.0 and later.
-   **[LearningFoundationItem](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_learningfoundationitem.htm)**
    Represents information about the prerequisite, co-requisite, or the recommended learning that’s required for a learning outcome. This object is available in API version 57.0 and later.
-   **[LearningOutcomeItem](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_learningoutcomeitem.htm)**
    Represents information about the mapping between the learnings and the related outcome. This object is available in API version 57.0 and later.
-   **[LearningPathwayTemplate](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_learningpathwaytemplate.htm)**
    Represents a template that a learner can apply to create a planned learning path. This object is available in API version 61.0 and later.
-   **[LearningPathwayTemplateItem](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_learningpathwaytemplateitem.htm)**
    Represents a requirement with completion details in the Learning Pathway Template. This object is available in API version 61.0 and later.
-   **[LearningPathwayTmplPgmPlan](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_learningpathwaytmplpgmplan.htm)**
    Represents a junction between Learning Program Plan and Learning Pathway Template objects. This object is available in API version 61.0 and later.
-   **[LearningProgram](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_learningprogram.htm)**
    Represents information about one or more trainings in a program that’s required to obtain a credential. This object is available in API version 57.0 and later.
-   **[LearningProgramPlan](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_learningprogramplan.htm)**
    Represents details of a plan that’s created to execute a Learning Program. This object is available in API version 57.0 and later.
-   **[LearningProgramPlanRqmt](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_learningprogramplanrqmt.htm)**
    Represents information about the requirements of a learning outcome that’s included in the learning program plan. This object is available in API version 57.0 and later.
-   **[LearningRule](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_learningrule.htm)**
    Represents a junction between the Learning and Rule (Expression Set) objects for an extensible rule on a learning. This object is available in API version 65.0 and later.
-   **[MentoringProfile](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_mentoringprofile.htm)**
    Represents information for a participant in a mentoring program. This object is available in API version 61.0 and later.
-   **[PersonAcademicCredential](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_personacademiccredential.htm)**
    Represents an Academic Credential that a person has earned. This object is available in API version 59.0 and later.
-   **[PersonAffinity](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_personaffinity.htm)**
    Represents the affinity of a person. This object is available in API version 64.0 and later.
-   **[PersonDisability](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_persondisability.htm)**
    Represents information about a person's disability. This object is available in API version 57.0 and later.
-   **[PersonPublicProfile](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_personpublicprofile.htm)**
    Represents information about a user that’s shown on their public profile. This object is available in API version 59.0 and later.
-   **[PersonPublicProfilePrefSet](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_personpublicprofileprefset.htm)**
    Represents the user’s preferences for which data is included in their directory entry, as well as if they show up at all. This object is available in API version 59.0 and later.
-   **[PersonTrait](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_persontrait.htm)**
    Represents the traits of a person. This object is available in API version 64.0 and later.
-   **[PriceBookAcademicInterval](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_pricebookacademicinterval.htm)**
    Represents a junction between a price book and an academic interval such as an academic term. This object is available in API version 66.0 and later.
-   **[PriorLearningEvaluation](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_priorlearningevaluation.htm)**
    Represents the evaluation of a learner's prior learning that can be used for a transfer. This object is available in API version 66.0 and later.
-   **[ProgramTermApplnTimeline](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_programtermapplntimeline.htm)**
    Represents a junction between Academic Term, Application Timeline, and Learning Program objects. This object is available in API version 57.0 and later.
-   **[PulseCheck](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_pulsecheck.htm)**
    Represents the wellbeing of a learner based on a primary metric or criteria at a specific date and time. This object is available in API version 62.0 and later.
-   **[PulseCheckTemplate](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_pulsechecktemplate.htm)**
    Represents a common template used to create Pulse Check records. This object is available in API version 62.0 and later.
-   **[ProviderOffering](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_provideroffering.htm)**
    Represents people or organizations associated with providing benefits to program participants. This object is available in API version 60.0 and later.
-   **[RgltyCodeRegClauseVer](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_rgltycoderegclausever.htm)**
    Represents a junction between Regulatory Code and Regulation Clause Version objects. This object is available in API version 63.0 and later.
-   **[RgltyCodeViolRegClVer](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_rgltycodeviolregclver.htm)**
    Represents a junction between Regulatory Code Violation and Regulation Clause Version objects. This object is available in API version 63.0 and later.
-   **[SuccessTeam](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_successteam.htm)**
    Records details about a success team in Salesforce Scheduler. This object is available in API version 57.0 and later.
-   **[WatchlistedLearner](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_watchlistedlearner.htm)**
    Represents information for a learner that needs to be monitored for support. This object is available in API version 62.0 and later.
-   **[WorkTypeGroupRole](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_worktypegrouprole.htm)**
    Represents a grouping of work types by roles, used to categorize types of appointments available in Salesforce Scheduler. This object is available in API version 57.0 and later.

## Related Topics

- AcademicCredential (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_academiccredential.htm)
- AcademicInterest (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_academicinterest.htm)
- AcademicOrder (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_academicorder.htm)
- AcademicSession (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_academicsession.htm)
- AcademicTerm (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_academicterm.htm)
- AcademicTermEnrollment (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_academictermenrollment.htm)
- AcademicTermPolicyRule (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_academictermpolicyrule.htm)
- AcadTermEnrlPolicyRuleLog (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_acadtermenrlpolicyrulelog.htm)
- AcademicTermRegstrnTimeline (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_academictermregstrntimeline.htm)
- AcademicYear (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_academicyear.htm)
