---
title: "FlowOrchestrationWorkItem"
domain: object-reference
topic: floworchestrationworkitem
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:10.398Z
estimatedTokens: 2357
keywords: [FlowOrchestrationWorkItem, work, item, associated, run-time, instance, interactive, step, orchestration, API, version, 54.0, later, Calls, Special]
---

# FlowOrchestrationWorkItem

> Represents a work item associated with a run-time instance of an interactive
         step in a run-time instance of an orchestration. This object is available in API
      version 54.0 and later.

# FlowOrchestrationWorkItem

Represents a work item associated with a run-time instance of an interactive step in a run-time instance of an orchestration. This object is available in API version 54.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update()

## Special Access Rules

An assignee can see all work item records assigned to them. If sharing rules are defined for FlowOrchestrationWorkItem, they determine access to specific orchestration work item records for users other than the assignee. Or the user must have the View All Data permission.

## Fields

| Field | Details |
| --- | --- |
| AssigneeId | TypereferencePropertiesFilter, Group, Sort, UpdateDescriptionThe ID of the user, group, or queue assigned to the orchestration work item.This field is a polymorphic relationship field.Relationship NameAssigneeRelationship TypeLookupRefers ToGroup (Type = Regular), Group (Type = Queue), User |
| Description | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe description of the orchestration work item. |
| ElapsedTimeSinceAsgntInSec | TypelongPropertiesFilter, Group, Nillable, SortDescriptionWhen status is Assigned, the number of seconds that have passed since the work item was last assigned. When status is Completed, this value is null. This field is available in API version 63.0 and later. |
| ElapsedTimeSinceCreationInSec | TypelongPropertiesFilter, Group, Nillable, SortDescriptionWhen status is Assigned, the number of seconds that have passed since the work item was created. When status is Completed, this value is null. This field is available in API version 63.0 and later. |
| Label | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe label of the orchestration work item. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent time a user viewed a record related to the orchestration work item. This field is available in API version 55.0 and later. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent time a user viewed the orchestration work item. This field is available in API version 55.0 and later. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe API name of the orchestration work item. |
| OwnerId | TypereferencePropertiesFilter, Group, Sort, UpdateDescriptionWhen the assignee is an internal user: the ID of the internal userWhen the assignee is a credentialed Experience Cloud site visitor: the ID of the credentialed Experience Cloud site visitorWhen the assignee is a group or queue: the ID of the automated process userThis field is available in API version 56.0 and later.Relationship NameOwnerRelationship TypeLookupRefers ToUser |
| RelatedRecordId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the context record, such as an account, case, or expense, that the orchestration work item is related to. An assigned user completes the associated orchestration work item on the page for this record.This field is a polymorphic relationship field.Relationship NameRelatedRecordRelationship TypeLookupRefers ToAll objects except AccountContactRelation, AccountTeamMember, ActiveScratchOrg, ActivityMetric, ActivityMetricRollup,CampaignMember, CartCheckoutSession, CartDeliveryGroup, CartDeliveryGroupMethod, ChatterActivity,CollaborationGroupMember, ContentDesignKit, ContentDesignKitVersion, ConversationBroadcastEntry,ConversationReason, ConversationReasonExcerpt, ConversationReasonGroup, CustomPersonDataTemplate,ElectronicMediaGroup, EngagementScore, Event, FeedItem, FlowOrchestrationWorkItem, FtestDelPlatform1,FtestDelPlatform2, FtestFormulaFieldRefSql,HighScaleSample, HighScaleSampleItem, LegalEntity, LocationWaitlist, LocationWaitlistedParty,LocWaitlistMsgTemplate, ManagedContentVersion, MessagingEndUser, MessagingSession, MLModel,MLModelFactor, MLModelFactorComponent, NetworkMember, NetworkMemberChunk, OpportunityContactRole,OpportunityLineItem, OpportunityScore, OpportunityTeamMember, OrgSnapshot, PaymentTermItem,RequestsForAccessSIQ, ScoreIntelligence, ScratchOrgInfo, SharingRecordCollection, SharingRecordCollectionItem,SharingRecordCollectionMember, StreamActivityAccess, Survey, SurveyMessagingChannel, SurveyPage,SurveyQuestionChoice, SurveyVersion, Task, TenantSecurityAlertRuleSelectedTenant, TenantSecurityApiAnomaly,TenantSecurityConnectedApp, TenantSecurityCredentialStuffing, TenantSecurityHealthCheckBaselineTrend,TenantSecurityHealthCheckDetail, TenantSecurityHealthCheckTrend, TenantSecurityLogin, TenantSecurityMetricDetail,TenantSecurityMetricDetailLink, TenantSecurityMobilePolicyTrend, TenantSecurityMonitorMetric,TenantSecurityNotification, TenantSecurityNotificationRule, TenantSecurityPackage, TenantSecurityPolicy,TenantSecurityPolicyChangeLog, TenantSecurityPolicyDeployment, TenantSecurityPolicySelectedTenant,TenantSecurityReportAnomaly, TenantSecuritySessionHijacking, TenantSecurityTenantChangeLog,TenantSecurityTenantInfo, TenantSecurityTrustedIpRangeTrend, TenantSecurityUserActivity, TenantSecurityUserPerm,TenantSecurityWebsite, TopicAssignment, UserExternalCredential, VoiceCall |
| ScreenFlow | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe screen flow associated with the orchestration work item.Possible values are:healthcloud_pm_flows__AcceptSlotsindustries_automotive__AutoIVindustries_mfg_service__MfgIvomnichannel_chat__QueuesChatomnichannel_chat__SkillsChatomnichannel_messaging__MsgRoutingomnichannel_voice__VoiceRoutingopencti__SCV_Basic_Routing_Flowruntime_appointmentbooking__Flowruntime_appointmentbooking__Guest_Flowruntime_appointmentbooking__In_Cancelruntime_appointmentbooking__In_Modifyruntime_appointmentbooking__In_Newruntime_appointmentbooking__Inv_Bookruntime_appointmentbooking__Inv_Genruntime_appointmentbooking__Out_Modifyruntime_commerce_adj__Discount_Itemruntime_commerce_exc__Exchange_Flowruntime_commerce_oms__Cancel_Itemruntime_commerce_oms__Create_OSruntime_commerce_oms__Create_PEruntime_commerce_oms__Return_Itemruntime_commerce_rma__Create_COruntime_commerce_rma__Return_Item_RMAruntime_commerce_rs__Reship_FOruntime_industries_recurrence__Orchruntime_industries_recurrence__Schdlrsales_channel__BroadcastArchivesales_channel__DealWonsales_channel__DealsToWatchsales_channel__HighPriorityCaseNotifsales_channel__NotificationsSubflowsales_channel__OpptyChgNotifsales_channel__OpptyCloseDateNotifsales_channel__OpptyCreateMatchActsales_channel__OpptyNextStepNotifsales_channel__OpptyStageNotChgNotifsales_channel__SelectFeaturedChannelssales_channel__SetupBroadcastChannelsales_channel__filter_userssales_channel__get_single_usersales_channel__invite_to_channelsales_channel__slack_sales_AccountRoomsales_channel__slack_sales_DealRoomsetup_bot__IntroBotAddCaseCommentsetup_bot__IntroBotCreateCasesetup_bot__IntroBotCreateLeadsetup_bot__IntroBotLookupCasesetup_bot__IntroBotPreChatContextsetup_order_bot__IntroBotLookupOrdersetup_service_experience__Create_Casesetup_service_experience__Reset_Pwdsetup_service_experience__Verify_Cust |
| ScreenFlowInputs | TypetextareaPropertiesNillableDescriptionThe input parameters required by the screen flow. |
| Status | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe status of the work item.Valid values are:AssignedCompleted |
| StepInstanceId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the flow orchestration step associated with the orchestration work item.This field is a relationship field.Relationship NameStepInstanceRelationship TypeLookupRefers ToFlowOrchestrationStepInstance |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[FlowOrchestrationWorkItemFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[FlowOrchestrationWorkItemHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[FlowOrchestrationWorkItemOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[FlowOrchestrationWorkItemShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- FlowOrchestrationWorkItemFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- FlowOrchestrationWorkItemHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- FlowOrchestrationWorkItemOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- FlowOrchestrationWorkItemShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
