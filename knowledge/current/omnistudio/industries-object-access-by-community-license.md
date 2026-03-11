---
title: "Industries Object Access by Community License"
domain: omnistudio
topic: industries-object-access-by-community-license
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:10.297Z
keywords: [Industries, Object, Access, Community, License, Note]
---

# Industries Object Access by Community License

# Industries Object Access by Community License

A community license determines the baseline set of object access available to an Experience Cloud user. This page lists the levels of object access you can grant to Experience site users in Industries clouds under each of these licenses: Customer Community, Customer Community Plus, Partner Community, and External Apps.

| Available in: Lightning Experience |
| --- |
| Available in: Professional, Enterprise, Unlimited, and Developer Editions |
  

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=industries_reference)

#### Note

This table lists all objects provided by all Industries products. Not all of these objects are available with your specific Industries Cloud license.

Each community license can make create, read, edit, or delete permissions available to Experience Cloud users for specific data objects. Assign user permissions for data access through a profile, permission set, or both.

Each license has a "login" version that provides identical access levels. If you run into any difficulties with a login license, contact your Salesforce representative.

Objects in **bold** are automatically available to users when the license is provisioned. All other objects must be assigned in a profile or permission set.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=industries_reference)

#### Note

As a best practice, always clone the standard profile associated with a community license, and change object permissions as needed. If you want to limit the number of cloned profiles, use permission sets to assign object permissions.

|  | Customer Community | Customer Community Plus | Partner Community | External Apps |
| --- | --- | --- | --- | --- |
| Account | Read, Edit | Create, Read, Edit | Create, Read, Edit | Read, Edit |
| AccountBrand | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |
| AccountRelationship |  | Read | Read |  |
| Accreditation | Create, Read, Edit | Create, Read, Edit, Delete | Create, Read, Edit | Create, Read, Edit, Delete |
| ActionPlan |  |  | Create, Read, Edit, Delete | Create, Read, Edit, Delete |
| ActionPlanTemplate | Read | Read | Create, Read, Edit, Delete | Create, Read, Edit, Delete |
| Address | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |
| AiVisitRecommendation | Read, Edit | Read, Edit | Read, Edit | Read, Edit |
| AiVisitTaskRcmd | Read, Edit | Read, Edit | Read, Edit | Read, Edit |
| ApplicationCase |  | Create, Read, Edit, Delete |  |  |
| AppointmentTopicTimeSlot | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |
| AssessmentIndicatorDefinition | Create, Read, Edit | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |
| AssessmentTask | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |
| AssessmentTaskContentDocument | Create, Read, Edit | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |
| AssessmentTaskDefinition | Create, Read, Edit | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |
| AssessmentTaskIndDefinition | Create, Read, Edit | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |
| AssessmentTaskOrder | Create, Read, Edit | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |
| Asset | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |
| Assortment | Read | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |
| AssortmentProduct | Read | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |
| AuthApplicationAsset | Create, Read, Edit, Delete | Create, Read, Edit, Delete |  | Create, Read, Edit, Delete |
| AuthApplicationPlace | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |
| AuthLocationAccessSchedule | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |
| AuthorizationForm | Read | Read | Read | Read |
| AuthorizationFormConsent | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |
| AuthorizationFormDataUse | Read | Read | Read | Read |
| AuthorizationFormText | Read | Read | Read | Read |
| AuthorizedInsuranceLine | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |
| Award | Create, Read, Edit | Create, Read, Edit, Delete | Create, Read, Edit | Create, Read, Edit, Delete |
| BackgroundOperation | Read | Read | Read | Read |
| Benefit | Read | Read | Read | Read |
| BenefitParameterValue | Read | Read | Read | Read |
| BenefitType | Read | Read | Read | Read |
| BoardCertification | Create, Read, Edit | Create, Read, Edit, Delete | Create, Read, Edit | Create, Read, Edit, Delete |
| BusinessLicense | Create, Read, Edit | Create, Read, Edit, Delete | Create, Read, Edit | Create, Read, Edit, Delete |
| BusinessLicenseApplication | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |
| BusinessMilestone | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |
| BusinessProfile | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |
| BusinessType | Read | Read | Read | Read, Edit |
| BusRegAuthorizationType | Read | Read | Read | Read |
| BusRegAuthTypeDependency | Read | Read | Read | Read |
| BuyerAccount | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |  |
| Campaign |  |  | Create, Read, Edit |  |
| CareBarrier | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |  |
| CareBarrierDeterminant | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |  |
| CareBarrierType | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |  |
| CareDeterminant | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |  |
| CareDeterminantType | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |  |
| CareDiagnosis | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |  |
| CareInterventionType | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |  |
| CareMetricTarget | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |
| CareObservation | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |
| CarePgmProvHealthcareProvider | Read | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Read |
| CarePractnFacilityAppt | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |
| CarePreauth | Read | Read | Read | Read |
| CarePreauthItem | Read | Read | Read | Read |
| CareProgram | Read | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Read |
| CareProgramCampaign | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |
| CareProgramEligibilityRule | Read | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Read |
| CareProgramEnrollee | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |
| CareProgramEnrolleeProduct | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |
| CareProgramEnrollmentCard | Create, Read | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read |
| CareProgramGoal | Read | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Read |
| CareProgramProduct | Read | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Read |
| CareProgramProvider | Read | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Read |
| CareProgramTeamMember | Read | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Read |
| CareProviderAdverseAction | Create, Read, Edit | Create, Read, Edit, Delete | Create, Read, Edit | Create, Read, Edit, Delete |
| CareProviderFacilitySpecialty | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |
| CareProviderSearchableField | Read | Read | Read | Read |
| CareRegisteredDevice | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |
| CareRequest | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |  |
| CareRequestDrug | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |  |
| CareRequestExtension | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |  |
| CareRequestItem | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |  |
| CareRequestReviewer | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |  |
| CareSpecialty | Create, Read, Edit | Create, Read, Edit, Delete | Create, Read, Edit | Create, Read, Edit, Delete |
| CareSpecialtyTaxonomy |  | Create, Read, Edit, Delete |  | Create, Read, Edit, Delete |
| CareTaxonomy | Create, Read, Edit | Create, Read, Edit, Delete | Create, Read, Edit | Create, Read, Edit, Delete |
| Case | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |  |
| ChannelProgram |  |  | Read |  |
| ChannelProgramLevel |  |  | Read |  |
| ChannelProgramMember |  |  | Read |  |
| Claim | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |
| ClaimCase | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |  |
| ClaimCoverage | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |
| ClaimItem | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |
| ClaimParticipant | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |
| ClaimPaymentSummary | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |
| CodeSet | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |
| CommSubscription | Read | Read | Read | Read |
| CommSubscriptionChannelType | Read | Read | Read | Read |
| CommSubscriptionConsent | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |
| CommSubscriptionTiming | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |
| ComplaintCase | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |  |
| ConsumptionSchedule |  |  | Create, Read, Edit |  |
| Contact | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |
| ContactEncounter | Create, Read | Create, Read | Create, Read, Edit, Delete |  |
| ContactPointAddress | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit |
| ContactPointConsent | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |
| ContactPointEmail | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |
| ContactPointPhone | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |
| ContactPointTypeConsent | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |
| Contract | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |
| ContractLineItem |  | Create, Read, Edit | Create, Read, Edit |  |
| CourseOffering | Read | Read | Read | Read |
| CoverageBenefit | Read | Read | Read | Read |
| CoverageBenefitItem | Read | Read | Read | Read |
| CoverageType | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |
| CustomerProperty | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |
| DandBCompany |  |  | Create, Read, Edit, Delete |  |
| DataUsePurpose | Read | Read | Read | Read |
| DeliveryTask | Create, Read, Edit | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |
| DistributorAuthorization | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |
| Document | Read | Read | Read | Read |
| DocumentChecklistItem | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |
| DocumentTemplate | Read | Read | Read | Read |
| DocumentTemplateClause | Read | Read | Read | Read |
| ElectronicMediaGroup | Read | Read | Read |  |
| EngagementChannelType | Read | Read | Read | Read |
| EnrolleeBenefit | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |
| EnrollmentEligibilityCriteria | Read | Read | Read | Read |
| Entitlement | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |  |
| EntitlementContact | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |  |
| Examination | Read | Read | Read | Read |
| Expense | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |
| ExpenseReport | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |
| FulfillmentOrder | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |
| GeneratedDocument | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |
| HealthCareDiagnosis | Read | Read | Read |  |
| HealthcareFacilityNetwork | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |
| HealthcarePayerNetwork | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |
| HealthcarePractitionerFacility | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |
| HealthCareProcedure | Read | Read | Read |  |
| HealthcareProvider | Create, Read, Edit | Create, Read, Edit, Delete | Create, Read, Edit | Create, Read, Edit, Delete |
| HealthcareProviderNpi | Create, Read, Edit | Create, Read, Edit, Delete | Create, Read, Edit | Create, Read, Edit, Delete |
| HealthcareProviderSpecialty | Create, Read, Edit | Create, Read, Edit, Delete | Create, Read, Edit | Create, Read, Edit, Delete |
| HealthcareProviderTaxonomy | Create, Read, Edit | Create, Read, Edit, Delete | Create, Read, Edit | Create, Read, Edit, Delete |
| Household | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |
| Idea | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |
| IdeaTheme | Read | Read | Read | Read |
| IdentityDocument | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit |
| Image | Create, Read | Create, Read | Create, Read | Create, Read |
| Individual | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |
| IndividualApplication | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |
| InfoAuthorizationRequest | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |  |
| InspectionAssessmentInd | Read | Read | Read | Read |
| InspectionType | Read | Read | Read | Read, Edit |
| InspectionViolation |  | Read | Read |  |
| InStoreLocation | Create, Read | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |
| InsuranceClaimAsset | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |
| InsurancePolicy | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |
| InsurancePolicyAsset | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |
| InsurancePolicyCoverage | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |
| InsurancePolicyMemberAsset | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |
| InsurancePolicyParticipant | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |
| InsurancePolicySurcharge | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |
| InsurancePolicyTransaction | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |
| InsuranceProfile | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |
| JobProfile | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |
| JournalSubType | Read | Read | Read | Read |
| JournalType | Read | Read | Read | Read |
| Lead |  |  | Create, Read, Edit |  |
| LegalEntity | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |
| LoanApplicant | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |
| LoanApplicantAddress | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |
| LoanApplicantAsset | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |
| LoanApplicantDeclaration | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |
| LoanApplicantEmployment | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |
| LoanApplicantIncome | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |
| LoanApplicantLiability | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |
| LoanApplicationAsset | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |
| LoanApplicationFinancial | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |
| LoanApplicationLiability | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |
| LoanApplicationProperty | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |
| LoanApplicationTitleHolder | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |
| Location | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |
| LocationGroup | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |
| LoyaltyLedger | Read | Read | Read | Read |
| LoyaltyMemberCurrency | Read | Read | Read | Read |
| LoyaltyMemberTier | Read | Read | Read | Read |
| LoyaltyProgram | Read | Read | Read | Read |
| LoyaltyProgramCurrency | Read | Read | Read | Read |
| LoyaltyProgramMbrPromotion | Read | Read | Read | Read |
| LoyaltyProgramMember | Read | Read | Read | Read |
| LoyaltyProgramPartner | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |
| LoyaltyTier | Read | Read | Read | Read |
| LoyaltyTierBenefit | Read | Read | Read | Read |
| LoyaltyTierGroup | Read | Read | Read | Read |
| MaintenancePlan | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |  |
| MaintenanceWorkRule | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |  |
| MemberBenefit | Read | Read | Read | Read |
| MemberPlan | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |
| OccupationLicenseApplication |  | Create, Read, Edit | Create, Read, Edit |  |
| OmniDataTransform | Read | Read | Read | Read |
| OmniDataTransformItem | Read | Read | Read | Read |
| OmniESignatureTemplate | Read | Read | Read | Read |
| OmniProcess | Read | Read | Read | Read |
| OmniProcessCompilation | Read | Read | Read | Read |
| OmniProcessElement | Read | Read | Read | Read |
| OmniScriptSavedSession | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |
| OmniUiCard | Read | Read | Read | Read |
| OperatingHours | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |  |
| Opportunity |  |  | Create, Read, Edit |  |
| Order | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |
| OrderDeliveryMethod | Read, Create, Edit | Read, Create, Edit | Read | Read, Create, Edit |
| OrderSummary | Read, Edit | Read, Edit | Read, Edit | Read, Edit |
| PartnerFundAllocation |  |  | Create, Read, Edit |  |
| PartnerFundClaim |  |  | Create, Read, Edit |  |
| PartnerFundRequest |  |  | Create, Read, Edit |  |
| PartnerMarketingBudget |  |  | Create, Read, Edit |  |
| PartyConsent | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |
| PartyIncome | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |
| PartyRelatedParty | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |
| PartyRelationshipType | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |
| PersonEducation | Create, Read, Edit | Create, Read, Edit, Delete | Create, Read, Edit | Create, Read, Edit, Delete |
| PersonEmployment |  | Create, Read, Edit, Delete |  | Create, Read, Edit, Delete |
| PersonExamination | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit | Create, Read, Edit, Delete |
| PersonLifeEvent | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |
| PgmRebateTypBnftMapping | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |
| PlanBenefit | Read | Read | Read | Read |
| PlanBenefitItem | Read | Read | Read | Read |
| Polygon | Read | Read |  | Read, Create, Delete, Edit |
| PreliminaryApplicationRef | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |
| Pricebook2 | Read | Read | Read | Read |
| Producer | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |
| ProducerCommission | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |
| ProducerPolicyAssignment | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |
| Product2 | Read | Read | Read | Read |
| ProductCatalog | Read | Read | Read | Read |
| ProductCategory | Read | Read | Read | Read |
| ProductCategoryProduct | Create, Read | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |
| ProductCoverage | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |
| ProductItem | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |  |
| ProductRequest | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |  |
| ProductServiceCampaign | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |  |
| ProductTransfer | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |  |
| ProgramRebateType | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |
| ProgramRebateTypeBenefit | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |
| ProgramRebateTypeFilter | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |
| ProgramRebateTypePayout | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |
| ProgramRebateTypPayoutSrc | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |
| Promotion | Read | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |
| PromotionChannel | Read | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |
| PromotionProduct | Read | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |
| PromotionProductCategory | Create, Read | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |
| PublicComplaint | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit | Create, Read, Edit, Delete |
| PublicProgram | Read | Read | Read | Read |
| PurchaserPlan | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |
| PurchaserPlanAssn | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |
| Question | Create, Read | Create, Read | Create, Read | Create, Read |
| Quote |  |  | Create, Read, Edit |  |
| RebateMemberProductAggregate | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |
| RebatePayment | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |
| RebatePayoutAdjustment | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |
| RebateProgram | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |
| RebateProgramMember | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |
| ReceivedDocument | Read | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Read |
| RecordsetFilterCriteria | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |
| RegAuthorizationTypeProduct | Read | Read | Read | Read |
| RegulatoryAuthority | Read | Read | Read | Read |
| RegulatoryAuthorizationType | Read | Read | Read | Read |
| RegulatoryCode | Read | Read | Read | Read |
| RegulatoryCodeAssessmentInd | Read | Read | Read | Read |
| RegulatoryCodeViolation | Read | Read | Read | Read |
| RegulatoryTrxnFee | Create, Read, Edit | Create, Read, Edit |  | Create, Read, Edit |
| RegulatoryTrxnFeeItem | Create, Read, Edit | Create, Read, Edit |  | Create, Read, Edit |
| ResidentialLoanApplication | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |
| RetailLocationGroup | Create, Read | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |
| RetailStore | Create, Read | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |
| RetailStoreGroupAssignment | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |
| RetailStoreKpi | Create, Read | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |
| RetailVisitKpi | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |
| ReturnOrder | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |  |
| SalesAgreement | Read, Edit | Read, Edit | Read, Edit | Read, Edit |
| SecuritiesHolding | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |
| SerializedProduct | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |
| ServiceAppointment | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |  |
| ServiceContract |  | Create, Read, Edit | Create, Read, Edit |  |
| ServiceCrew | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |  |
| ServiceResource | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit | Read |
| ServiceTerritory | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |  |
| Shift | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |
| ShiftPattern | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |
| Shipment | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |
| SocialPost | Read | Read | Read | Read |
| Solution | Read | Read | Read |  |
| StoreActionPlanTemplate | Create, Read | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |
| StoreAssortment | Read | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |
| StoreProduct | Read | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |
| Survey | Read | Read | Read | Read |
| SurveyInvitation | Read | Read | Read | Read |
| SurveyResponse | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |
| SurveySubject | Read | Read | Read | Read |
| TimeSheet | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |
| TrainingCourseParticipant | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |
| TransactionJournal | Read | Read | Read | Read |
| TrnCourse | Read | Read | Read | Read |
| UnitOfMeasure | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |
| UnitOfMeasureConversion | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |
| VehicleUserAssignment | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |
| ViolationEnforcementAction | Read, Edit | Read, Edit | Read | Read, Edit |
| ViolationInspAssessmentInd |  | Read | Read |  |
| ViolationType | Read | Read | Read | Read |
| ViolationTypeAssessmentInd | Read | Read | Read | Read |
| Visit | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |
| VisitedParty | Create, Read | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |
| Visitor | Create, Read | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |
| VolunteerProject | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |
| Voucher | Read | Read | Read | Read |
| VoucherDefinition | Read | Read | Read | Read |
| WarrantyTerm | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |
| WebCart | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |  |
| WebStore | Read | Read | Read |  |
| WebStoreCatalog | Read | Read | Read |  |
| Wishlist | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |  |
| WorkCapacityLimit | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |  |
| WorkerCompCoverageClass | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete | Create, Read, Edit, Delete |
| WorkOrder | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |  |
| WorkPlan | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |  |
| WorkPlanSelectionRule | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |  |
| WorkPlanTemplate | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |  |
| WorkStepTemplate | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |  |
| WorkType | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |
| WorkTypeCareSpecialty | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |
| WorkTypeCodeSetBundle | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |
| WorkTypeGroup | Create, Read, Edit | Create, Read, Edit | Create, Read, Edit |  |