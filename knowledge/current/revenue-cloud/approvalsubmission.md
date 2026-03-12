---
title: "ApprovalSubmission"
domain: revenue-cloud
topic: approvalsubmission
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:09.348Z
estimatedTokens: 1797
keywords: [ApprovalSubmission, Represents, instance, approval, request, that's, submitted, record, related, object., API, version, 62.0, later., Supported, Calls, Special, Access, Rules, Fields]
---

# ApprovalSubmission

> Represents the instance of an approval request that's submitted for a record
         of the related object. This object is available in API version 62.0 and
      later.

# ApprovalSubmission

Represents the instance of an approval request that's submitted for a record of the related object. This object is available in API version 62.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

This object is available in Enterprise, Unlimited, and Developer Editions of Revenue Cloud.

## Fields

| Field | Details |
| --- | --- |
| Comments | TypetextareaPropertiesNillableDescriptionThe comments about the request that's submitted for approval. |
| DoesSendApprovalEmail | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionRequired. Indicates whether approval request emails are sent to approvers and delegates (true) or not (false).The default value is false. |
| FlowOrchestrationInstanceId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the flow orchestration instance record that's associated with the approval.This field is a relationship field.Relationship NameFlowOrchestrationInstanceRefers ToFlowOrchestrationInstance |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe auto-generated name for the approval submission. |
| OwnerId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the user or the group that owns the approval submission record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| RelatedRecordId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionRequired. The ID of the related record that's submitted for approval.This field is a polymorphic relationship field.Relationship NameRelatedRecordRefers ToAccount, AdAvailabilityViewConfig, Address, AnalyticsUserAttrFuncTkn, ApprovalSubmission, ApprovalSubmissionDetail, ApprovalWorkItem, Asset, AssetAction, AssetActionSource, AssetContractRelationship, AssetRateAdjustment, AssetRateCardEntry, AssetRelationship, AssetStatePeriod, AssociatedLocation, AsyncOperationTracker, AttrPicklistExcludedValue, AttributeAdjustmentCondition, AttributeBasedAdjRule, AttributeBasedAdjustment, AttributeCategory, AttributeCategoryAttribute, AttributeDefinition, AttributePicklist, AttributePicklistValue, AuthorizationForm, AuthorizationFormConsent, AuthorizationFormDataUse, AuthorizationFormText, BatchJob, BatchJobPart, BatchJobPartFailedRecord, BundleBasedAdjustment, BusinessBrand, Case, CaseComment, ChannelProgram, ChannelProgramLevel, ChannelProgramMember, CollaborationGroup, CommSubscription, CommSubscriptionChannelType, CommSubscriptionConsent, CommSubscriptionTiming, Contact, ContactPointAddress, ContactPointConsent, ContactPointEmail, ContactPointPhone, ContactPointTypeConsent, ContactRequest, ContextDefinitionSync, Contract, ContractItemPrice, ContractItemPriceAdjTier, CostBook, CostBookEntry, Customer, DTRecordsetReplica, DataUseLegalBasis, DataUsePurpose, DecisionTblFileImportData, DelegatedAccount, DocGenerationQueryResult, DocTemplateSectionCondition, DocumentEnvelope, DocumentGenerationProcess, DocumentRecipient, DocumentTemplate, DocumentTemplateContentDoc, DocumentTemplateSection, DocumentTemplateToken, DuplicateRecordItem, DuplicateRecordSet, EmailMessage, EngagementChannelType, ExpressionSetConstraintObj, ExternalEventMapping, FlowOrchestrationInstance, FulfillmentOrder, FulfillmentOrderItemAdjustment, FulfillmentOrderItemTax, FulfillmentOrderLineItem, GeneratedDocument, GeneratedDocumentSection, Idea, Image, Individual, IntegrationProviderDcsnRqmt, IntegrationProviderExecution, Lead, Location, LocationTrustMeasure, ManagedContentVariant, ObjectStateDefinition, ObjectStateTransition, ObjectStateValue, Obligation, Opportunity, OpportunityRelatedDeleteLog, Order, OrderAction, OrderAdjustmentGroup, OrderDeliveryGroup, OrderDeliveryMethod, OrderItem, OrderItemAdjustmentLineItem, OrderItemDetail, OrderItemRateAdjustment, OrderItemRateCardEntry, OrderItemRecipient, OrderItemRelationship, OrderItemTaxLineItem, OrgMetricScanResult, OrgMetricScanSummary, Organization, PartnerFundAllocation, PartnerFundClaim, PartnerFundRequest, PartnerMarketingBudget, PartyConsent, PriceBookEntryDerivedPrice, PriceBookRateCard, PricingAdjBatchJob, PricingAdjBatchJobLog, PricingApiExecution, PricingProcessExecution, ProcessException, Product2, ProductAttributeDefinition, ProductCatalog, ProductCategory, ProductCategoryDisqual, ProductCategoryProduct, ProductCategoryQualification, ProductClassification, ProductClassificationAttr, ProductComponentGroup, ProductComponentGrpOverride, ProductConfigFlowAssignment, ProductConfigurationFlow, ProductConfigurationRule, ProductDisqualification, ProductPriceHistoryLog, ProductPriceRange, ProductQualification, ProductRampSegment, ProductRelComponentOverride, ProductUsageGrant, ProfileSkill, ProfileSkillEndorsement, ProfileSkillUser, PromptAction, PromptError, QuickText, QuickTextUsage, Quote, QuoteLineDetail, QuoteLineItem, QuoteLineItemRecipient, QuoteLineRateAdjustment, QuoteLineRateCardEntry, RateAdjustmentByAttribute, RateAdjustmentByTier, RateCard, RateCardEntry, RatingFrequencyPolicy, SalesTransactionType, Seller, Shipment, ShipmentItem, Site, SocialPersona, SocialPost, Solution, StreamingChannel, TableauHostMapping, Topic, UnitOfMeasure, UnitOfMeasureClass, UsageGrantRenewalPolicy, UsageGrantRolloverPolicy, UsageResource, UsageResourceBillingPolicy, User, UserEsignVendorIdentifier, UserLicense, UserLocalWebServerIdentity, UserProvisioningRequest, WorkBadge, WorkBadgeDefinition, WorkOrder, WorkOrderLineItem, WorkThanks |
| RelatedRecordObjectName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionRequired. The type of record that was submitted for approval. |
| Status | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionRequired. The status of the approval.Valid values are:ApprovedCanceledErroredInProgressRecalledRejectedSuspended |
| SubmittedById | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionRequired. The ID of the user who submitted the record for approval.This field is a relationship field.Relationship NameSubmittedByRefers ToUser |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ApprovalSubmissionOwnerSharingRule](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[ApprovalSubmissionShare](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- ApprovalSubmissionOwnerSharingRule (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_ownersharingrule.htm)
- ApprovalSubmissionShare (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_share.htm)
