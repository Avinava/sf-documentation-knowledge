---
title: "StandardObjectNameChangeEvent"
domain: object-reference
topic: standardobjectnamechangeevent
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:03.242Z
estimatedTokens: 3135
keywords: [StandardObjectNameChangeEvent, ChangeEvent, supports, Change, Data, Capture, subscribe, stream, events, receive, tied, record, changes, Salesforce, include]
---

# StandardObjectNameChangeEvent

> A ChangeEvent object is available for each object that supports Change Data Capture.
    You can subscribe to a stream of change events using Change Data Capture to receive data tied to
    record changes in Salesforce. Changes include record creation, updates to an existing record,
    deletion of a record, and undeletion of a record. A change event isn’t a Salesforce
    object—it doesn’t support CRUD operations or queries. It’s included in the object
    reference so you can discover which Salesforce objects support change events.

# StandardObjectNameChangeEvent

A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.

## Supported Calls

describeSObjects()

## Special Access Rules

-   All objects may not be available in your org. Some objects require specific feature settings and permissions to be enabled.
-   For more special access rules, if any, see the documentation for the standard object. For example, for AccountChangeEvent, see the special access rules for Account.

## Change Event Support

Change events are available for all custom objects and a subset of standard objects. Change events that correspond to custom settings are partially supported. They aren't supported in Apex triggers but are supported in other types of subscribers. For more information about standard object support, see the Objects That Support Change Events section below.

## Change Event Name

The name of a change event is based on the name of the corresponding object for which it captures the changes.

Standard Object Change Event Name

```

```

Example: AccountChangeEvent

Custom Object Change Event Name

```

```

Example: MyCustomObject\_\_ChangeEvent

## Change Event Fields

The fields that a change event can include correspond to the fields on the associated parent Salesforce object, with a few exceptions. For example, AccountChangeEvent fields correspond to the fields on Account.

The fields that a change event doesn’t include are:

-   The IsDeleted system field.
-   The SystemModStamp system field.
-   Any field whose value isn’t on the record and is derived from another record or from a formula, except roll-up summary fields, which are included. Examples are formula fields. Examples of fields with derived values include LastActivityDate and PhotoUrl.

Each change event also contains header fields. The header fields are included inside the ChangeEventHeader field. They contain information about the event, such as whether the change was an update or delete and the name of the object, like Account.

In addition to the event payload, the event schema ID is included in the schema field. Also included is the event-specific field, replayId, which is used for retrieving past events.

## Event Message Example

This example is an event message in JSON format for a new account record creation.

```

```

## API Version and Schema

When you subscribe to change events, the subscription uses the latest API version and the event messages received reflect the latest field definitions. For more information, see [API Version and Event Schema](https://developer.salesforce.com/docs/atlas.en-us.260.0.change_data_capture.meta/change_data_capture/cdc_message_structure.htm#cdc_event_schema.htm) in the Change Data Capture Developer Guide.

## Usage

For more information about Change Data Capture, see [Change Data Capture Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.change_data_capture.meta/change_data_capture/cdc_intro.htm).

## Objects That Support Change Events

These objects have associated ChangeEvent objects.

-   Account (including Person Account)
-   AccountCleanInfo
-   AccountContactRelation
-   AccountContactRole
-   ActionCadence
-   ActionCadenceStep
-   ActionCadenceStepTracker
-   ActionCadenceTracker
-   AdOrderLineAdTarget
-   AdProductTargetCategory
-   AdQuoteLineAdTarget
-   AdTargetCategory
-   AdTargetCategorySegment
-   AgentWork
-   AgentWorkSkill
-   AppExtension
-   Asset
-   AssetWarranty
-   AssetRelationship
-   AssignedResource
-   AssociatedLocation
-   AuthorizationForm
-   AuthorizationFormConsent
-   AuthorizationFormDataUse
-   AuthorizationFormText
-   Automotive Cloud. Some objects are supported. See [StandardObjectNameChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.automotive_cloud.meta/automotive_cloud/sforce_api_associated_objects_change_event.htm) in the Automotive Cloud Developer Guide.
-   BriefcaseAssignment
-   BriefcaseDefinition
-   BroadcastTopicNetwork
-   BusinessBrand
-   CalendarView
-   CallTemplate
-   Campaign
-   CampaignMember
-   CampaignMemberStatus
-   CartDeliveryGroup
-   CartItem
-   CartItemPriceAdjustment
-   CartTax
-   CartValidationOutput
-   Case
-   CaseRelatedIssue
-   ChangeRequest
-   ChangeRequestRelatedIssue
-   ChangeRequestRelatedItem
-   CollaborationGroupRecord
-   CollabTemplateMetric
-   CommerceEntitlementBuyerGroup
-   CommerceEntitlementPolicy
-   CommerceEntitlementProduct
-   CommSubscription
-   CommSubscriptionChannelType
-   CommSubscriptionConsent
-   CommSubscriptionTiming
-   ConferenceNumber
-   Consumer Goods Cloud. Some objects are supported. See [StandardObjectNameChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm) in the Consumer Goods Cloud Developer Guide.
-   Contact
-   ContactCleanInfo
-   ContentDocument
-   ContentDocumentLink
-   ContentFolder
-   ContactPointAddress
-   ContactPointConsent
-   ContactPointEmail
-   ContactPointPhone
-   ContactPointTypeConsent
-   ContentVersion
-   Contract
-   ContractLineItem
-   Conversation Reason objects: ConversationContextEntry, ConversationReason, ConversationReasonExcerpt, and ConversationReasonGroup. See [Einstein Conversation Insights](https://help.salesforce.com/s/articleView?id=sales.call_coaching.htm&type=5&language=en_US) in Salesforce Help.
-   Coupon
-   CustomFieldDisplayValue
-   DataUseLegalBasis
-   DataUsePurpose
-   DigitalSignature
-   DynamicDataCapture
-   EmailMessage
-   EmailTemplate
-   EngagementAttendee
-   EngagementChannelType
-   EngagementInteraction
-   EngagementTopic
-   Entitlement
-   Event
-   EventRelation
-   Expense
-   ExternalClientAppSettings
-   ExternalEvent
-   FieldServiceMobileSettings
-   Financial Services Cloud. Some objects are supported. See [StandardObjectNameChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm) in the Financial Services Cloud Developer Guide.
-   FlowRecord
-   FlowRecordElement
-   FlowRecordVersion
-   FlowOrchestration
-   FlowOrchestrationVersion
-   ForecastingOwnerAdjustment
-   FulfillmentOrderItemTax
-   Health Cloud. Some objects are supported. See [StandardObjectNameChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm) in the Salesforce Health Cloud Developer Guide.
-   Incident Related Item
-   Individual
-   LandingPage
-   Lead
-   LinkedArticle
-   ListEmail
-   LiveAgentSession
-   LiveChatTranscript
-   LiveChatTranscriptEvent
-   LiveChatVisitor
-   Location
-   LocationGroup
-   LocationGroupAssignment
-   Loyalty Management. Some objects are supported. See [StandardObjectNameChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.loyalty.meta/loyalty/sforce_api_associated_objects_change_event.htm) in the Loyalty Management Developer Guide.
-   Macro
-   MacroInstruction
-   MaintenanceAsset
-   MaintenancePlan
-   ManagedContent
-   Manufacturing Cloud. Some objects are supported. See [StandardObjectNameChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_associated_objects_change_event.htm) in the Manufacturing Cloud Developer Guide.
-   MarketingForm
-   MarketingLink
-   MarketSegmentActivation
-   MerchantAccount
-   MessagingEndUser
-   MessagingSession
-   Mortgage loan applicant and application objects. See [Mortgage Lending Objects Supported by Out-of-the-Box Components and Pages in Experience Builder Templates](https://developer.salesforce.com/docs/atlas.en-us.260.0.financial_services_cloud_admin_guide.meta/financial_services_cloud_admin_guide/fsc_admin_mort_community_supported_objects.htm "HTML (New Window)") in the Financial Services Cloud Administrator Guide.
-   Net Zero Cloud. Some objects are supported. See [StandardObjectNameChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_change_event.htm) in the Net Zero Cloud Developer Guide.
-   Nonprofit Cloud. Some objects are supported. See [StandardObjectNameChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/sforce_api_associated_objects_change_event.htm) in the Nonprofit Cloud Developer Guide.
-   ObjectDataImport
-   ObjectRelatedUrl
-   OperatingHours
-   Opportunity
-   OpportunityContactRole
-   OpportunityLineItem
-   OpportunitySplit
-   Order
-   OrderAdjustmentGroupSummary
-   OrderDeliveryGroupSummary
-   OrderDeliveryMethod
-   OrderItem
-   OrderItemSummary
-   OrderItemSummaryChange
-   OrderItemTaxLineItemSummary
-   OrderPaymentSummary
-   OrderSummary
-   PartyConsent
-   PaymentPage
-   PendingServiceRouting
-   Pricebook2
-   PricebookEntry
-   ProblemIncident
-   ProblemRelatedItem
-   ProcessException
-   ProcessInstance
-   ProcessInstanceStep
-   Product2
-   ProductCategory
-   ProductConsumed
-   ProductFeaturedProduct
-   ProductItem
-   ProductMedia
-   ProductRequest
-   ProductRequestLineItem
-   ProductTransfer
-   ProductWarrantyTerm
-   ProfileSkillEndorsement
-   Public Sector Solutions. Some objects are supported. See [StandardObjectNameChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.psc_api.meta/psc_api/sforce_api_associated_objects_change_event.htm "HTML (New Window)") in the Public Sector Solutions Developer Guide.
-   QuickText
-   QuickTextUsage
-   Quote
-   QuoteLineItem
-   Recommendation
-   RecordAggregationResult
-   RecordSetFilterCriteria
-   RecordSetFilterCriteriaRule
-   ResourceAbsence
-   ResourcePreference
-   ReturnOrder
-   ReturnOrderItemAdjustment
-   ReturnOrderItemTax
-   ReturnOrderLineItem
-   SalesChannel
-   ServiceAppointment
-   ServiceContract
-   ServiceCrew
-   ServiceCrewMember
-   ServiceResource
-   ServiceResourceCapacity
-   ServiceResourceSkill
-   ServiceReport
-   ServiceReportLayout
-   ServiceTerritory
-   ServiceTerritoryLocation
-   ServiceTerritoryMember
-   Shift
-   ShiftPattern
-   ShiftPatternEntry
-   Shipment
-   SkillRequirement
-   SocialPost
-   Survey
-   SurveyInvitation
-   SurveyPage
-   SurveyQuestion
-   SurveyQuestionChoice
-   SurveyQuestionResponse
-   SurveyResponse
-   SurveySubject
-   SurveyVersion
-   TenantEntitlementTransaction
-   TenantSecurityAlertRuleSelectedTenant
-   TenantSecurityApiAnomaly
-   TenantSecurityConnectedApp
-   TenantSecurityCredentialStuffing
-   TenantSecurityFeature
-   TenantSecurityHealthCheckBaselineTrend
-   TenantSecurityHealthCheckData
-   TenantSecurityHealthCheckTrend
-   TenantSecurityTenantInfo
-   TenantSecurityLicense
-   TenantSecurityLogin
-   TenantSecurityLoginIpRangeTrend
-   TenantSecurityMobilePolicyTrend
-   TenantSecurityMonitorMetric
-   TenantSecurityNotification
-   TenantSecurityNotificationRule
-   TenantSecurityPackage
-   TenantSecurityPolicy
-   TenantSecurityPolicyDeployment
-   TenantSecurityPolicySelectedTenant
-   TenantSecurityReportAnomaly
-   TenantSecuritySessionHijacking
-   TenantSecurityTransactionPolicyTrend
-   TenantSecurityTrustedIpRangeTrend
-   TenantSecurityUserAcitivity
-   TenantSecurityUserPerm
-   TenantUsageTypeMultiplier
-   Territory2AlignmentLog
-   Territory2Model
-   TimeSheet
-   TimeSheetEntry
-   TimeSlot
-   Task
-   TodayGoal
-   TaskRelation
-   User (including partner users)
-   UserAppInfo
-   UserEmailPreferredPerson
-   UserServicePresence
-   VideoCall
-   VideoCallParticipant
-   VideoCallRecording
-   VoiceCall
-   VoiceCallRecording
-   WarrantyTerm
-   WaveAutoInstallRequest
-   WebCart
-   WebCartAdjustmentBasis
-   WebCartAdjustmentGroup
-   WorkAccess
-   WorkBadge
-   WorkBadgeDefinition
-   WorkCapacityLimit
-   WorkPlan
-   WebStore
-   WebStoreBuyerGroup
-   WebStoreSearchProdSettings
-   WorkOrder
-   WorkOrderLineItem
-   WorkThanks
-   WorkType

## Code Examples

```
<Standard_Object_Name>ChangeEvent
```

```
<Custom_Object_Name>__ChangeEvent
```

```
{
  "schema": "IeRuaY6cbI_HsV8Rv1Mc5g", 
  "payload": {
    "ChangeEventHeader": {
      "entityName": "Account", 
      "recordIds": [
        "<record_ID>"
      ], 
      "changeType": "CREATE", 
      "changeOrigin": "com/salesforce/api/soap/51.0;client=SfdcInternalAPI/", 
      "transactionKey": "0002343d-9d90-e395-ed20-cf416ba652ad", 
      "sequenceNumber": 1, 
      "commitTimestamp": 1612912679000, 
      "commitNumber": 10716283339728, 
      "commitUser": "<User_ID>"
    }, 
    "Name": "Acme", 
    "Description": "Everyone is talking about the cloud. But what does it mean?", 
    "OwnerId": "<Owner_ID>", 
    "CreatedDate": "2021-02-09T23:17:59Z", 
    "CreatedById": "<User_ID>", 
    "LastModifiedDate": "2021-02-09T23:17:59Z", 
    "LastModifiedById": "<User_ID>"
  }, 
  "event": {
    "replayId": 6
  }
}
```
