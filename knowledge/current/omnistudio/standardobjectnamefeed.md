---
title: "StandardObjectNameFeed"
domain: omnistudio
topic: standardobjectnamefeed
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:11.431Z
keywords: [StandardObjectNameFeed, Supported, Calls, Special, Access, Rules, Fields, Usage, Objects, Follow, Model]
---

# StandardObjectNameFeed

# StandardObjectNameFeed

StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.

The object name is variable and uses StandardObjectNameFeed syntax. For example, AccountFeed represents the posts and feed-tracked changes on an account record. We list the available associated feed objects at the end of this topic. For specific version information, see the documentation for the standard object.

## Supported Calls

delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

In the internal org, users can delete all feed items they created. This rule varies in communities where threaded discussions and delete-blocking are enabled. Community members can delete all feed items they created, provided the feed items don’t have content nested under them—like a comment, answer, or reply. Where the feed item has nested content, only feed moderators and users with the Modify All Data permission can delete threads.

To delete feed items they didn’t create, users must have one of these permissions:

-   Modify All Data
-   Modify All Records on the parent object, like Account for AccountFeed
-   Moderate Chatter
    
    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=industries_reference)
    
    #### Note
    
    Users with the Moderate Chatter permission can delete only the feed items and comments they can see.
    
    Only users with this permission can delete items in unlisted groups.
    

For more special access rules, if any, see the documentation for the standard object. For example, for AccountFeed, see the special access rules for Account.

## Fields

| Field | Details |
| --- | --- |
| BestCommentId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the comment marked as best answer on a question post. |
| Body | TypetextareaPropertiesNillable, SortDescriptionThe body of the post. Required when Type is TextPost. Optional when Type is ContentPost or LinkPost. |
| CommentCount | TypeintPropertiesFilter, Group, SortDescriptionThe number of comments associated with this feed item. |
| ConnectionId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionWhen a PartnerNetworkConnection modifies a record that is tracked, the CreatedBy field contains the ID of the system administrator. The ConnectionId contains the ID of the PartnerNetworkConnection. Available if Salesforce to Salesforce is enabled for your organization. |
| InsertedById | TypereferencePropertiesGroup, Nillable, SortDescriptionID of the user who added this item to the feed. For example, if an application migrates posts and comments from another application into a feed, the InsertedBy value is set to the ID of the context user. |
| isRichText | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the feed item Body contains rich text. If you post a rich text feed comment using SOAP API, set IsRichText to true and escape HTML entities from the body. Otherwise, the post is rendered as plain text.Rich text supports the following HTML tags:<p>TipThough the <br> tag isn’t supported, you can use <p>&nbsp;</p> to create lines.<a><b><code><i><u><s><ul><ol><li><img>The <img> tag is accessible only through the API and must reference files in Salesforce similar to this example: <img src="sfdc://069B0000000omjh"></img>NoteIn API version 35.0 and later, the system replaces special characters in rich text with escaped HTML. In API version 34.0 and prior, all rich text appears as a plain-text representation. |
| LikeCount | TypeintPropertiesFilter, Group, SortDescriptionThe number of likes associated with this feed item. |
| LinkUrl | TypeurlPropertiesNillable, SortDescriptionThe URL of a LinkPost. |
| NetworkScope | TypepicklistPropertiesGroup, Nillable, Restricted picklist, SortDescriptionSpecifies whether this feed item is available in the default Experience Cloud site, a specific Experience Cloud site, or all sites. This field is available in API version 26.0 and later, if digital experiences is enabled for your org.NetworkScope can have the following values:NetworkId—The ID of the Experience Cloud site in which the FeedItem is available. If left empty, the feed item is only available in the default Experience Cloud site.AllNetworks—The feed item is available in all Experience Cloud sites.Note the following exceptions for NetworkScope:Only feed items with a Group or User parent can set a NetworkId or a null value for NetworkScope.For feed items with a record parent, users can set NetworkScope only to AllNetworks.You can’t filter a feed item on the NetworkScope field. |
| ParentId | TypereferencePropertiesFilter, Group, SortDescriptionID of the record that is tracked in the feed. The detail page for the record displays the feed. |
| RelatedRecordId | TypereferencePropertiesGroup, Nillable, SortDescriptionID of the ContentVersion record associated with a ContentPost. This field is null for all posts except ContentPost. |
| Title | TypestringPropertiesGroup, Nillable, SortDescriptionThe title of the feed item. When the Type is LinkPost, the LinkUrl is the URL and this field is the link name. |
| Type | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe type of feed item. Values are:ActivityEvent—indirectly generated event when a user or the API adds a Task associated with a feed-enabled parent record (excluding email tasks on cases). Also occurs when a user or the API adds or updates a Task or Event associated with a case record (excluding email and call logging).For a recurring Task with CaseFeed disabled, one event is generated for the series only. For a recurring Task with CaseFeed enabled, events are generated for the series and each occurrence.AdvancedTextPost—created when a user posts a group announcement and, in Lightning Experience as of API version 39.0 and later, when a user shares a post.AnnouncementPost—Not used.ApprovalPost—generated when a user submits an approval.BasicTemplateFeedItem—Not used.CanvasPost—a post made by a canvas app posted on a feed.CollaborationGroupCreated—generated when a user creates a public group.CollaborationGroupUnarchived—Not used.ContentPost—a post with an attached file.CreatedRecordEvent—generated when a user creates a record from the publisher.DashboardComponentAlert—generated when a dashboard metric or gauge exceeds a user-defined threshold.DashboardComponentSnapshot—created when a user posts a dashboard snapshot on a feed.LinkPost—a post with an attached URL.PollPost—a poll posted on a feed.ProfileSkillPost—generated when a skill is added to a user’s Chatter profile.QuestionPost—generated when a user posts a question.ReplyPost—generated when Chatter Answers posts a reply.RypplePost—generated when a user creates a Thanks badge in WDC.TextPost—a direct text entry on a feed.TrackedChange—a change or group of changes to a tracked field.UserStatus—automatically generated when a user adds a post. Deprecated. |
| Visibility | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies whether this feed item is available to all users or internal users only. This field is available if Salesforce Communities are enabled for your organization.Visibility can have the following values:AllUsers—The feed item is available to all users who have permission to see the feed item.InternalUsers—The feed item is available to internal users only.Note the following exceptions for Visibility:For record posts, Visibility is set to InternalUsers for all internal users by default.External users can set Visibility only to AllUsers.On user and group posts, only internal users can set Visibility to InternalUsers. |

## Usage

A feed for an object is automatically created when a user enables feed tracking for the object. Use feeds to track changes to records. For example, AccountFeed tracks changes to an account record. Use feed objects to retrieve the content of feed fields, such as type of feed or feed ID.

Note the following SOQL restrictions. No SOQL limit if logged-in user has View All Data permission. If not, specify a LIMIT clause of 1,000 records or fewer. SOQL ORDER BY on fields using relationships is not available. Use ORDER BY on fields on the root object in the SOQL query.

## Objects That Follow This Model

These objects follow the standard pattern for associated feed objects.

-   [ActionableListMember](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_objects_actionablelistmember.htm)
-   [AirTravelEmssnFctr](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_airtravelemssnfctr.htm)
-   [AirTravelEnrgyUse](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_airtravelenrgyuse.htm)
-   [Assessment](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_assessment.htm "Stores the header data for an assessment. This object is available in API version 55.0 and later.")
-   [ApplicationReview](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud_for_grantmaking_dev_guide.meta/nonprofit_cloud_for_grantmaking_dev_guide/sforce_api_objects_applicationreview.htm)
-   AssessmentIndicatorDefinition
-   [AssessmentQuestion](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_assessmentquestion.htm "Stores the questions required for an assessment. This object is available in API version 55.0 and later.")
-   [AssessmentQuestionAssignment](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_assessmentquestionassignment.htm "Represents a junction between an assessment question set and an assessment question. This object is available in API version 55.0 and later.")
-   [AssessmentQuestionResponse](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_assessmentquestionresponse.htm "Stores the responses submitted to an assessment. This object is available in API version 55.0 and later.")
-   [AssessmentQuestionSet](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_assessmentquestionset.htm "Container object for assessment questions. This object is available in API version 55.0 and later.")
-   [AssessmentQuestionVersion](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_assessmentquestionversion.htm "Stores the question versions for the assessment questions. This object is available in API version 55.0 and later.")
-   AssetAccountParticipant
-   AssetContactParticipant
-   AssetMilestone
-   [BatchJob](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_batchjob.htm "Represents an instance of a batch job that is either running and has been run. This object is available in API version 51.0 and later.")
-   [BatchJobPartFailedRecord](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_batchjobpartfailedrecord.htm "Represents records that a batch job part couldn't successfully process. This object is available in API version 51.0 and later.")
-   [BatchJobPart](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_batchjobpart.htm "Represents one part of a batch job. This object is available in API version 51.0 and later.")
-   [BenefitSchedule](https://developer.salesforce.com/docs/atlas.en-us.244.0.nonprofit_cloud.meta/nonprofit_cloud/sforce_api_objects_benefitschedule.htm)
-   [BenefitSession](https://developer.salesforce.com/docs/atlas.en-us.244.0.nonprofit_cloud.meta/nonprofit_cloud/sforce_api_objects_benefitsession.htm)
-   [BldgEnrgyIntensity](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_bldgenrgyintensity.htm)
-   [BldgEnrgyIntensityCnfg](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/tooling_api_objects_vehassetenrgyusecnfg.htm)
-   [BldgEnrgyIntensityVal](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_bldgenrgyintensityval.htm)
-   [BldgSizeCategory](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_bldgsizecategory.htm)
-   [Budget](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud_for_grantmaking_dev_guide.meta/nonprofit_cloud_for_grantmaking_dev_guide/sforce_api_objects_budget.htm)
-   [BudgetAllocation](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud_for_grantmaking_dev_guide.meta/nonprofit_cloud_for_grantmaking_dev_guide/sforce_api_objects_budgetallocation.htm)
-   [BusinessOperationsProcess](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_businessoperationsprocess.htm "Represents the details of the business process in the organization. This object is available in API version 65.0 and later.")
-   [CmplValidationProcedure](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_cmplvalidationprocedure.htm "Group of Compliance Controls that test the business process actions for compliance. This object is available in API version 65.0 and later.")
-   [ComplianceControlVersion](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_compliancecontrolversion.htm "Represents the version of the compliance control that implements compliance requirements.. This object is available in API version 65.0 and later.")
-   [CompliancePlcyClauseVersion](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_complianceplcyclauseversion.htm "Represents the version of the Compliance Policy Clause that tracks amendments. This object is available in API version 65.0 and later.")
-   [CompliancePolicy](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_compliancepolicy.htm "Represents information on internal policies of the organization. This object is available in API version 65.0 and later.")
-   [CompliancePolicy](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_compliancepolicyclause.htm "Represents the information related to a Compliance Policy outlining specific requirements or sections. This object is available in API version 65.0 and later.")
-   [CompliancePolicyVersion](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_compliancepolicyversion.htm "Represents the version of the Compliance Policy that tracks amendments. This object is available in API version 65.0 and later.")
-   [CrbnEmssnScopeAlloc](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_crbnemssnscopealloc.htm)
-   [CrbnEmssnScopeAllocVal](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_crbnemssnscopeallocval.htm)
-   [ElectricityEmssnFctrSet](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_electricityemssnfctrset.htm)
-   [ExpressionSet](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_expressionset.htm "Represents information about an expression set. An expression set performs a series of calculations using lookups and user-defined variables and constants. This object is available in API version 55.0 and later.")
-   [ExpressionSetVersion](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_expressionsetversion.htm "Represents information about a specific version of an expression set. This object is also accessible through the UI API, which enables its use in components like Lightning Web Components (LWC). This object is available in API version 55.0 and later.")
-   [FrgtHaulingEmssnFctr](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_frgthaulingemssnfctr.htm)
-   [FrgtHaulingEnrgyUse](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_frgthaulingenrgyuse.htm)
-   [FundingAward](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud_for_grantmaking_dev_guide.meta/nonprofit_cloud_for_grantmaking_dev_guide/sforce_api_objects_fundingaward.htm)
-   [FundingAwardAmendment](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud_for_grantmaking_dev_guide.meta/nonprofit_cloud_for_grantmaking_dev_guide/sforce_api_objects_fundingawardamendment.htm)
-   [FundingAwardRequirement](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud_for_grantmaking_dev_guide.meta/nonprofit_cloud_for_grantmaking_dev_guide/sforce_api_objects_fundingawardrequirement.htm)
-   [FundingDisbursement](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud_for_grantmaking_dev_guide.meta/nonprofit_cloud_for_grantmaking_dev_guide/sforce_api_objects_fundingdisbursement.htm)
-   [FundingOpportunity](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud_for_grantmaking_dev_guide.meta/nonprofit_cloud_for_grantmaking_dev_guide/sforce_api_objects_fundingopportunity.htm)
-   [GameDefinition](https://developer.salesforce.com/docs/atlas.en-us.260.0.loyalty.meta/loyalty/sforce_api_objects_gamedefinition.htm)
-   [GameParticipant](https://developer.salesforce.com/docs/atlas.en-us.260.0.loyalty.meta/loyalty/sforce_api_objects_gameparticipant.htm)
-   [GameParticipantReward](https://developer.salesforce.com/docs/atlas.en-us.260.0.loyalty.meta/loyalty/sforce_api_objects_gameparticipantreward.htm)
-   [GeneratedWaste](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_generatedwaste.htm)
-   GenericVisitTask
-   GenericVisitTaskContext
-   GnrcVstKeyPerformanceInd
-   GnrcVstTaskContextRelation
-   [GroundTravelEmssnFctr](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_groundtravelemssnfctr.htm)
-   [GroundTravelEnrgyUse](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_groundtravelenrgyuse.htm)
-   [HotelStayEmssnFctr](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_hotelstayemssnfctr.htm)
-   [HotelStayEnrgyUse](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_hotelstayenrgyuse.htm)
-   [IndividualApplication](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud_for_grantmaking_dev_guide.meta/nonprofit_cloud_for_grantmaking_dev_guide/sforce_api_objects_individualapplication.htm)
-   [InflationRate](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_inflationrate.htm)
-   LeadLineItem
-   LeadPreferredSeller
-   [LoyaltyMemberCurrency](https://developer.salesforce.com/docs/atlas.en-us.260.0.loyalty.meta/loyalty/sforce_api_objects_loyaltymembercurrency.htm)
-   [LoyaltyProgram](https://developer.salesforce.com/docs/atlas.en-us.260.0.loyalty.meta/loyalty/sforce_api_objects_loyaltyprogram.htm)
-   [OcrDocumentScanResult](atlas.en-us.industries_reference.meta/industries_reference/intelligent_document_reader_ocrdocumentscanresult.htm "Represents the details of the information extracted from the document. This object is available in API version 55.0 and later.") (Intelligent Document Reader)
-   [OcrDocumentScanResult](atlas.en-us.industries_reference.meta/industries_reference/industries_einstein_objects_ocrdocumentscanresult.htm "Represents the details of the information extracted from the document. This object is available in API version 50.0 and later.") (Intelligent Form Reader)
-   [OmniProcessAsmtQuestionVer](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_omniprocessasmtquestionver.htm "Represents a junction between an OmniScript process and an assessment question version. This object is available in API version 55.0 and later.")
-   OpportunityPreferredSeller
-   [OtherEmssnFctrSet](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_otheremssnfctrset.htm)
-   [OtherEmssnFctrSetItem](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_otheremssnfctrsetitem.htm)
-   [PartyRelationshipGroup](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_partyrelationshipgroup.htm "Represents a group of people living together such as a household, or a group of people affiliated with each other. This object is available in API version 56.0 and later.")
-   [PcmtEmssnFctrSet](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_pcmtemssnfctrset.htm)
-   [PcmtEmssnFctrSetItem](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_pcmtemssnfctrsetitem.htm)
-   [PreliminaryApplicationRef](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud_for_grantmaking_dev_guide.meta/nonprofit_cloud_for_grantmaking_dev_guide/sforce_api_objects_preliminaryapplicationref.htm)
-   [Program](https://developer.salesforce.com/docs/atlas.en-us.244.0.nonprofit_cloud.meta/nonprofit_cloud/sforce_api_objects_program.htm)
-   [ProgramEnrollment](https://developer.salesforce.com/docs/atlas.en-us.244.0.nonprofit_cloud.meta/nonprofit_cloud/sforce_api_objects_programenrollment.htm)
-   [Promotion](https://developer.salesforce.com/docs/atlas.en-us.260.0.loyalty.meta/loyalty/sforce_api_objects_promotion.htm)
-   [PromotionChannel](https://developer.salesforce.com/docs/atlas.en-us.260.0.loyalty.meta/loyalty/sforce_api_objects_promotionchannel.htm)
-   [PromotionLimit](https://developer.salesforce.com/docs/atlas.en-us.260.0.loyalty.meta/loyalty/sforce_api_objects_promotionlimit.htm)
-   [PromotionLimitUsage](https://developer.salesforce.com/docs/atlas.en-us.260.0.loyalty.meta/loyalty/sforce_api_objects_promotionlimitusage.htm)
-   [PromotionLoyaltyPtnrProdt](https://developer.salesforce.com/docs/atlas.en-us.260.0.loyalty.meta/loyalty/sforce_api_objects_promotionloyaltyptnrprod.htm)
-   [PromotionMarketSegment](https://developer.salesforce.com/docs/atlas.en-us.260.0.loyalty.meta/loyalty/sforce_api_objects_promotionmarketsegment.htm)
-   [PromotionPartyUsage](https://developer.salesforce.com/docs/atlas.en-us.260.0.loyalty.meta/loyalty/sforce_api_objects_promotionpartyusage.htm)
-   [PromotionPartyUsageDetail](https://developer.salesforce.com/docs/atlas.en-us.260.0.loyalty.meta/loyalty/sforce_api_objects_promotionpartyusagedetail.htm)
-   [PromotionProduct](https://developer.salesforce.com/docs/atlas.en-us.260.0.loyalty.meta/loyalty/sforce_api_objects_promotionproduct.htm)
-   [PromotionProductCategory](https://developer.salesforce.com/docs/atlas.en-us.260.0.loyalty.meta/loyalty/sforce_api_objects_promotionproductcategory.htm)
-   [PromotionRuleTemplate](https://developer.salesforce.com/docs/atlas.en-us.260.0.loyalty.meta/loyalty/sforce_api_objects_promotionruletemplate.htm)
-   [RecordAlert](https://developer.salesforce.com/docs/atlas.en-us.254.0.industries_reference.meta/industries_reference/sforce_api_objects_recordalert.htm)
-   [RefrigerantEmssnFctr](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_refrigerantemssnfctr.htm)
-   [Regulation](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_regulationclause.htm "Represents the information related to a regulation or law outlining specific requirements or sections. This object is available in API version 65.0 and later.")
-   [RegulationClause](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_regulationclause.htm "Represents the information related to a regulation or law outlining specific requirements or sections. This object is available in API version 65.0 and later.")
-   [RegulationClauseVersion](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_regulationclauseversion.htm "Represents the version of the Regulation Clause that tracks amendments. This object is available in API version 65.0 and later.")
-   [RegulationVersion](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_regulationversion.htm "Represents the version of the Regulation that tracks amendments. This object is available in API version 65.0 and later.")
-   [RentalCarEmssnFctr](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_rentalcaremssnfctr.htm)
-   [RentalCarEnrgyUse](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_rentalcarenrgyuse.htm)
-   [Scope3CrbnFtprnt](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_scope3crbnftprnt.htm)
-   [Scope3EmssnSrc](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_scope3emssnsrc.htm)
-   [Scope3PcmtItem](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_scope3pcmtitem.htm)
-   [Scope3PcmtSummary](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_scope3pcmtsummary.htm)
-   [StnryAssetCrbnFtprnt](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_stnryassetcrbnftprnt.htm)
-   [StnryAssetCrbnFtprntItm](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_stnryassetcrbnftprntitm.htm)
-   [StnryAssetEnrgyUse](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_stnryassetenrgyuse.htm)
-   [StnryAssetEnvrSrc](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_stnryassetenvrsrc.htm)
-   RebateClaim
-   [VehicleAssetCrbnFtprnt](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_vehicleassetcrbnftprnt.htm)
-   [VehicleAssetEmssnSrc](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_vehicleassetemssnsrc.htm)
-   [VehicleAssetEnrgyUse](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_vehicleassetenrgyuse.htm)
-   [WasteFootprint](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_wastefootprint.htm)
-   [WasteFootprintItem](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_wastefootprintitem.htm)
-   [WstDispoEmssnFctrSet](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_wstdispoemssnfctrset.htm)
-   [WstDispoEmssnFctrSetItm](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_wstdispoemssnfctrsetitm.htm)
-   [StnryAssetEnrgyUseCnfg](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/tooling_api_objects_bldgenrgyintensitycnfg.htm)
-   [VehAssetEnrgyUseCnfg](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/tooling_api_objects_stnryassetenrgyusecnfg.htm)
-   Vehicle
-   VehicleDefinition
-   Visit