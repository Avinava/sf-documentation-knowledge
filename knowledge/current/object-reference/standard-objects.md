---
title: "Standard Objects"
domain: object-reference
topic: standard-objects
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:12.223Z
estimatedTokens: 123604
namespace: NamespaceRegistry
keywords: [Standard, Objects, their, subset, appear, Manager]
---

# Standard Objects

> This section provides a list of standard objects and their standard
            fields. Only a subset of standard objects appear in Object Manager.

**Namespace:** `NamespaceRegistry`

# Standard Objects

This section provides a list of standard objects and their standard fields. Only a subset of standard objects appear in Object Manager.

Some fields may not be listed for some objects. To see the system fields for each object, see [System Fields](atlas.en-us.object_reference.meta/object_reference/system_fields.htm "System fields are read-only fields found on most objects. These fields are automatically updated during API operations. For example, the ID field is automatically generated during a create operation and the LastModifiedDate is automatically updated when a user modifies a record.").

To verify the complete list of fields for an object, use a describe call from the API, or inspect with an appropriate tool. For example, inspecting the WSDL or using a schema viewer.

-   **[AbnExperiment](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_abnexperiment.htm)**
    Represents an A/B/n experiment that's used with Marketing Cloud Next content, Experience Cloud websites, and platform automations. This object is available in API version 63.0 and later.
-   **[AbnExperimentCohort](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_abnexperimentcohort.htm)**
    Represents the specified audience that's participating in an A/B/n experiment. This object is available in API version 63.0 and later.
-   **[AcceptedEventRelation](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_acceptedeventrelation.htm)**
    Represents event participants (invitees or attendees) with the status Accepted for a given event.
-   **[Account](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_account.htm)**
    Represents an individual account, which is an organization or person involved with your business (such as customers, competitors, and partners).
-   **[AccountBrand](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_accountbrand.htm)**
    Represents the brand details of a Partner Account. This object is available in API version 43.0 and later.
-   **[AccountContactRelation](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_accountcontactrelation.htm)**
    Represents a relationship between a contact and one or more accounts.
-   **[AccountCleanInfo](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_accountcleaninfo.htm)**
    Stores the metadata Data.com Clean uses to determine an account record’s clean status. AccountCleanInfo helps you automate the cleaning or related processing of account records.
-   **[AccountContactRole](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_accountcontactrole.htm)**
    Represents the role that a Contact plays on an Account.
-   **[AccountInsight](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_accountinsight.htm)**
    Represents an individual insight (a key business development) related to an account record.
-   **[AccountOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_accountownersharingrule.htm)**
    Represents the rules for sharing an account with a User other than the owner.
-   **[AccountPartner](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_accountpartner.htm)**
    This object represents a partner relationship between two Account records. An AccountPartner record is created automatically when a Partner record is created for a partner relationship between two accounts. An AccountPartner record is also created automatically between an account and an opportunity’s account when a Partner record is created between an account and an opportunity.
-   **[AccountPlan](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_accountplan.htm)**
    Represents customer information with measurable objectives and executable steps to proactively manage and grow customer relationships. This object is available in API version 62.0 and later.
-   **[AccountPlanObjective](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_accountplanobjective.htm)**
    Represents strategic objectives or initiatives pursued by a relationship team with a customer to enhance customer engagement and satisfaction. This object is available in API version 62.0 and later.
-   **[AccountPlanObjectiveMeasure](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_accountplanobjectivemeasure.htm)**
    Represents the performance of target metrics for an objective associated with the account plan. This object is available in API version 62.0 and later.
-   **[AccountPlanObjMeasCalcCond](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_accountplanobjmeascalccond.htm)**
    Represents a field and value combination for filtering records to include in the calculation of a sales account plan objective measure’s current value. This object is available in API version 63.0 and later.
-   **[AccountPlanObjMeasCalcDef](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_accountplanobjmeascalcdef.htm)**
    Represents the definition of a target object, rollup field, and logic for calculating the current value of a sales account plan objective measure. This object is available in API version 63.0 and later.
-   **[AccountPlanObjMeasCalcDefLocalization](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_accountplanobjmeascalcdeflocalization.htm)**
    Represents the translated value of the definition of a target object, rollup field, and logic for calculating the current value of a sales account plan objective measure. This object is available in API version 63.0 and later when the Translation Workbench is enabled.
-   **[AccountPlanObjMeasRela](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_accountplanobjmeasrela.htm)**
    Represents a junction between an account plan objective measure and the related objects. This object is available in API version 62.0 and later.
-   **[AccountRelationship](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_accountrelationship.htm)**
    Represents a relationship of a given type between two accounts. This object is available in API version 45.0 and later.
-   **[AccountRelationshipShareRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_accountrelationshipsharerule.htm)**
    Represents the rule that determines which object records are shared, how they are shared, the account relationship type that shares the records, and the level of access granted to the records. This object is available in API version 45.0 and later.
-   **[AccountShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_accountshare.htm)**
    Represents a sharing entry on an account.
-   **[AccountTag](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_accounttag.htm)**
    Associates a word or short phrase with an Account.
-   **[AccountTeamMember](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_accountteammember.htm)**
    Represents a User who is a member of an Account team.
-   **[AccountTerritoryAssignmentRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_accountterritoryassignmentrule.htm)**
    An account assignment rule that assigns accounts to territories based on account fields. Available if Sales Territories has been enabled.
-   **[AccountTerritoryAssignmentRuleItem](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_accountterritoryassignmentruleitem.htm)**
    A row of selection criteria for an AccountTerritoryAssignmentRule object. Available if Sales Territories has been enabled.
-   **[AccountTerritorySharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_accountterritorysharingrule.htm)**
    Represents the rules for sharing an Account within a territory.
-   **[AccountUserTerritory2View](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_accountuserterritory2view.htm)**
    Represents the view of the Users in Assigned Territories related list in Lightning Experience for Sales Territories. Available in API version 42.0 and later.
-   **[ActionCadence](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_actioncadence.htm)**
    Represents the definition of a cadence. This object is available in API version 45.0 and later.
-   **[ActionCadenceRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_actioncadencerule.htm)**
    Represents the logic that a branch step uses to determine which branch an action cadence tracker follows in an action cadence. Use ActionCadenceRule to learn about a branch step, including its logic and what the next step is. This object is available in API version 48.0 and later.
-   **[ActionCadenceRuleCondition](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_actioncadencerulecondition.htm)**
    Represents the logic for a branch step. This object is available in API version 48.0 and later.
-   **[ActionCadenceStep](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_actioncadencestep.htm)**
    Represents a step in a cadence. Use ActionCadenceStep to learn which steps belong to a cadence, and how the steps are connected to each other. This object is available in API version 48.0 and later.
-   **[ActionCadenceStepTracker](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_actioncadencesteptracker.htm)**
    Represents a step in an active cadence for a specific cadence target. This object is available in API version 48.0 and later.
-   **[ActionCadenceStepVariant](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_actioncadencestepvariant.htm)**
    Represents an email template or call script variant associated with an action cadence step. Email and call steps can have up to 3 variants associated so sales teams can compare the engagement results. This object is available in API version 53.0 and later.
-   **[ActionCadenceTracker](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_actioncadencetracker.htm)**
    Represents an active cadence target. This object is available in API version 45.0 and later.
-   **[ActionCdncStpMonthlyMetric](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_actioncdncstpmonthlymetric.htm)**
    Represents the monthly engagement metrics for an action cadence step. This object is available in API version 49.0 and later.
-   **[ActionLinkGroupTemplate](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_actionlinkgrouptemplate.htm)**
    Action link templates let you reuse action link definitions and package and distribute action links. An action link is a button on a feed element. Clicking on an action link can take a user to another Web page, initiate a file download, or invoke an API call to an external server or Salesforce. Use action links to integrate Salesforce and third-party services into the feed. Every action link belongs to an action link group and action links within the group are mutually exclusive. This object is available in API version 33.0 and later.
-   **[ActionLinkTemplate](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_actionlinktemplate.htm)**
    Action link templates let you reuse action link definitions and package and distribute action links. An action link is a button on a feed element. Clicking an action link can take a user to another Web page, initiate a file download, or invoke an API call to an external server or Salesforce. Use action links to integrate Salesforce and third-party services into the feed. This object is available in API version 33.0 and later.
-   **[ActionPlan](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_actionplan.htm)**
    Represents the instance of an action plan, a set of tasks created from an action plan template. This object is available in API version 44.0 and later.
-   **[ActionPlanItem](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_actionplanitem.htm)**
    Represents the instance of an action plan item.This object is available in API version 44.0 and later.
-   **[ActionPlanTemplate](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_actionplantemplate.htm)**
    Represents the instance of an action plan template. This object is available in API version 44.0 and later.
-   **[ActionPlanTemplateItem](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_actionplantemplateitem.htm)**
    Represents the instance of an item on an action plan template version. This object is available in API version 44.0 and later.
-   **[ActionPlanTemplateItemValue](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_actionplantemplateitemvalue.htm)**
    Represents the value associated with an action plan template item. This object is available in API version 44.0 and later.
-   **[ActionPlanTemplateVersion](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_actionplantemplateversion.htm)**
    Represents the version of an action plan template. This object is available in API version 44.0 and later.
-   **[ActiveFeatureLicenseMetric](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_activefeaturelicensemetric.htm)**
    Represents the number of active, assigned, and purchased feature licenses in the org. This object is available in API version 52.0 and later.
-   **[ActivePermSetLicenseMetric](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_activepermsetlicensemetric.htm)**
    Represents the number of active, assigned, and purchased permission set licenses in the org. This object is available in API version 52.0 and later.
-   **[ActiveProfileMetric](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_activeprofilemetric.htm)**
    Represents the profile associated with the active, assigned, and purchased user licenses. This object is available in API version 52.0 and later.
-   **[ActiveScratchOrg](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_activescratchorg.htm)**
    Represents an active scratch org. This object is available in API version 41.0 and later.
-   **[ActivityFieldHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_activityfieldhistory.htm)**
    Represents a change in a field value for a tracked object or field. This object is a big object. This object is available in API version 55.0 and later.
-   **[ActivityHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_activityhistory.htm)**
    This read-only object is displayed in a related list of closed activities—past events and closed tasks—related to an object. It includes activities for all contacts related to the object. ActivityHistory fields for phone calls are only available if your organization uses Salesforce CRM Call Center.
-   **[ActivityMetric](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_activitymetric.htm)**
    Represents activities that were added to Salesforce automatically by Einstein Activity Capture and manually by users.
-   **[ActivityUsrConnectionStatus](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_activityusrconnectionstatus.htm)**
    Represents the status of the email connections for Einstein Activity Capture users. You can also see whether users accepted the required terms of service to capture emails. This object is available in API version 54.0 and later.
-   **[AdditionalNumber](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_additionalnumber.htm)**
    Represents an optional additional number for a call center. This additional number is visible in the call center's phone directory.
-   **[Address](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_address.htm)**
    Represents a mailing, billing, or home address.
-   **[AgentWork](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_agentwork.htm)**
    Represents a work assignment that’s been routed to an agent. If the work is transferred to another agent, a new AgentWork record is created. This object is available in API version 32.0 and later.
-   **[AgentWorkConversationalData](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_agentworkconversationaldata.htm)**
    Stores conversation data for agent work sessions, such as agent interactions, transfer information, and operational metrics. This object is available in API version 66.0 and later.
-   **[AgentWorkSkill](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_agentworkskill.htm)**
    Represents a skill used to route a work assignment to an agent. AgentWorkSkill is used for reporting and represents the result of a routing decision. This object is available in API version 42.0 and later.
-   **[AIApplication](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_aiapplication.htm)**
    Represents an AI application such as Einstein Prediction Builder. This object is available in API version 50.0 and later.
-   **[AIApplicationConfig](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_aiapplicationconfig.htm)**
    Additional prediction information related to an AI application. This object is available in API version 50.0 and later.
-   **[AiGenActionItem](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_aigenactionitem.htm)**
    Represents business actions suggested by generative AI. AI-generated action items are sent to either agents for automatic execution or human users for review, depending on org preference and if there are any errors in the process. This object is available in API version 64.0 and later.
-   **[AIInsightAction](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_aiinsightaction.htm)**
    Represents an Einstein prediction insight action. This object is available in API version 47.0 and later.
-   **[AIInsightFeedback](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_aiinsightfeedback.htm)**
    Represents an Einstein prediction insight feedback. This object is available in API version 47.0 and later.
-   **[AIInsightReason](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_aiinsightreason.htm)**
    Represents an Einstein prediction insight reason. This object is available in API version 47.0 and later.
-   **[AIInsightValue](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_aiinsightvalue.htm)**
    Represents an Einstein prediction insight value. This object is available in API version 47.0 and later.
-   **[AiJobRun](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_aijobrun.htm)**
    Represents an execution instance of an AI job. This object tracks the overall status and manages the lifecycle of the job from initiation to completion. This object is available in API version 63.0 and later.
-   **[AiJobRunItem](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_aijobrunitem.htm)**
    Stores an individual item associated with a parent AiJobRun, including the inputs and resulting response. This object is available in API version 63.0 and later.
-   **[AiModelLanguage](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_aimodellanguage.htm)**
    An object that stores language related information that is generated for each AI model. This object is available in API version 55.0 and later.
-   **[AIRecordInsight](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_airecordinsight.htm)**
    Represents an Einstein prediction insight. This object is available in API version 47.0 and later.
-   **[AIResearchPromptResult](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_airesearchpromptresult.htm)**
    Represents the research result generated by Agentforce or by Einstein from a standard or custom prompt template. This object is available in API version 64.0 and later.
-   **[AllowedEmailDomain](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_allowedemaildomain.htm)**
    Represents an allowed email domain for users in your organization. You can define an allowlist to restrict the email domains allowed in a user’s Email field. This object is available in API version 29.0 and later.
-   **[AlternativePaymentMethod](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_alternativepaymentmethod.htm)**
    Represents a payment method that isn’t cash, a debit card, or a credit card. This object defines methods that aren’t defined by the [CardPaymentMethod](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_cardpaymentmethod.htm "Represents a credit card or debit card payment method, which implements the PaymentMethod object. This object is available in API version 48.0 and later.") or [DigitalWallet](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_digitalwallet.htm "Represents a customer’s digital wallet service. Salesforce Payments can use a digital wallet as a payment source when processing payments through a payment gateway. This object is available in API version 48.0 and later.") objects. Examples of alternative payment methods include CashOnDeliver, Klarna, and Direct Debit. AlternativePaymentMethod functions the same as any other type of payment method for processing transactions through a payment gateway. This object is available in API version 51.0 and later.
-   **[AnalyticsChangeEventLog](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_analyticschangeeventlog.htm)**
    Analytics Change Event Logs represent route or page changes made in the CRM Analytics. This object is available in API version 61.0 and later.
-   **[AnalyticsDashboard](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_analyticsdashboard.htm)**
    Represents a Tableau Next dashboard. This object is available in API version 64.0 and later.
-   **[AnalyticsDownloadEventLog](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_analyticsdownloadeventlog.htm)**
    AnalyticsDownloadEventLog represent downloads made from lens and dashboard in the CRM Analytics. This object is available in API version 61.0 and later.
-   **[AnalyticsInteractEventLog](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_analyticsinteracteventlog.htm)**
    Analytics Interact Event Log represents route or page changes made in the CRM Analytic UI. This object is available in API version 61.0 and later.
-   **[AnalyticsLicensedAsset](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_analyticslicensedasset.htm)**
    Represents a licensed Analytics asset. In this context, Analytics is CRM Analytics, Sonic, or Mulesoft Data Path. Available in API version 52.0 and later.
-   **[AnalyticsPerfEventLog](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_analyticsperfeventlog.htm)**
    Analytics Perf Event Log helps track trends in your Analytics performance. This object is available in API version 61.0 and later.
-   **[AnalyticsVisualization](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_analyticsvisualization.htm)**
    Represents a Tableau Next viusalization. This object is available in API version 64.0 and later.
-   **[AnalyticsVizField](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_analyticsvizfield.htm)**
    Represents a Tableau Next viusalization field. This object is available in API version 65.0 and later.
-   **[AnalyticsVizViewDef](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_analyticsvizviewdef.htm)**
    Represents a Tableau Next viusalization view definition. This object is available in API version 64.0 and later.
-   **[AnalyticsWorkspace](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_analyticsworkspace.htm)**
    Represents a Tableau Next workspace. This object is available in API version 54.0 and later.
-   **[AnalyticsWorkspaceAsset](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_analyticsworkspaceasset.htm)**
    Represents a Tableau Next asset in a workspace. This object is available in API version 54.0 and later.
-   **[Announcement](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_announcement.htm)**
    Represents a Chatter group announcement. This object is available in API version 30.0 and later.
-   **[ApexCalloutEventLog](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_apexcallouteventlog.htm)**
    Apex Callout event logs contain details about callouts (external requests) during Apex code execution. This object is available in API version 55.0 and later.
-   **[ApexClass](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_apexclass.htm)**
    Represents an Apex class.
-   **[ApexComponent](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_apexcomponent.htm)**
    Represents a definition for a custom component that can be used in a Visualforce page alongside standard components such as <apex:relatedList\> and <apex:dataTable\>.
-   **[ApexEmailNotification](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_apexemailnotification.htm)**
    Stores a Salesforce user ID or external email address to be notified when unhandled Apex exceptions occur. This object is available in API version 35.0 and later.
-   **[ApexExecutionEventLog](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_apexexecutioneventlog.htm)**
    Apex Execution event logs contain details about Apex classes that are used. This object is available in API version 55.0 and later.
-   **[ApexExtlCalloutEventLog](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_apexextlcallouteventlog.htm)**
    Apex Extl Callout EventLog represent external data callouts via custom adapters for Salesforce Connect. This object is available in API version 61.0 and later.
-   **[ApexInlineEventLog](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_apexinlineeventlog.htm)**
    This object is reserved for future use. This object is available in API version 66.0 and later.
-   **[ApexLog](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_apexlog.htm)**
    Represents a debug log containing information about a transaction, including information about Apex, Visualforce, and workflow and validation rules. This object is available in API version 19.0 and later.
-   **[ApexPage](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_apexpage.htm)**
    Represents a single Visualforce page.
-   **[ApexPageInfo](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_apexpageinfo.htm)**
    Represents metadata about a single Visualforce page. This object is available in API version 48.0 and later.
-   **[ApexRestApiEventLog](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_apexrestapieventlog.htm)**
    Apex REST API event logs capture information about every Apex REST API request. This object is available in API version 55.0 and later.
-   **[ApexSoapApiEventLog](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_apexsoapapieventlog.htm)**
    Apex SOAP event logs contain details about custom SOAP web service calls. This object is available in API version 55.0 and later.
-   **[ApexTestQueueItem](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_apextestqueueitem.htm)**
    Represents a single Apex class in the Apex job queue. This object is available in API version 23.0 and later.
-   **[ApexTestResult](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_apextestresult.htm)**
    Represents the result of an Apex test method execution. This object is available in API version 23.0 and later.
-   **[ApexTestResultLimits](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_apextestresultlimits.htm)**
    Captures the Apex test limits used for a particular test method execution. An instance of this object is associated with each ApexTestResult record. This object is available in API version 37.0 and later.
-   **[ApexTestRunResult](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_apextestrunresult.htm)**
    Contains summary information about all the test methods that were run in a particular Apex job. This object is available in API version 37.0 and later.
-   **[ApexTestSuite](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_apextestsuite.htm)**
    Represents a suite of Apex classes to include in a test run. A TestSuiteMembership object associates each class with the suite. This object is available in API version 36.0 and later.
-   **[ApexTrigger](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_apextrigger.htm)**
    Represents an Apex trigger.
-   **[ApexTriggerEventLog](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_apextriggereventlog.htm)**
    Apex Trigger event logs contain details about triggers that fire in an organization. This object is available in API version 55.0 and later.
-   **[ApexTypeImplementor](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_apextypeimplementor.htm)**
    Represents Apex classes that directly or indirectly implement an interface. Using a SOQL query, this object gets information about public or global classes and only global classes for installed managed packages. This object is available in API version 54.0 and later.
-   **[ApexUnexpectedExcpEventLog](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_apexunexpectedexcpeventlog.htm)**
    Apex Unexpected Excp Event Log captures information about unexpected exceptions in Apex code execution. This object is available in API version 61.0 and later.
-   **[ApiTotalUsageEventLog](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_apitotalusageeventlog.htm)**
    API Total Usage Event Log contains details about Platform SOAP API, Platform REST API, and Bulk API requests. This object is available in API version 61.0 and later.
-   **[AppAnalyticsQueryRequest](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_appanalyticsqueryrequest.htm)**
    Represents a request for AppExchange App Analytics data.
-   **[AppDefinition](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_appdefinition.htm)**
    Represents the metadata of an app and its navigation items. Metadata is returned only for apps that the current user can access. This object is available in API version 43.0 and later.
-   **[AppExtension](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_appextension.htm)**
    Represents a connection between the Field Service mobile app and another app, typically for passing record data to the Salesforce mobile app or other apps. This object is available in API version 41.0 and later.
-   **[ApplicationFormTemplate](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_applicationformtemplate.htm)**
    Represents the fields to capture application metadata as a template which is used in application tracking and processing. This object is available in API version 59.0 and later.
-   **[AppMenuItem](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_appmenuitem.htm)**
    Represents the organization’s default settings for items in the app menu or App Launcher.
-   **[AppointmentAssignmentPolicy](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_appointmentassignmentpolicy.htm)**
    Stores information about resource assignment rules. This object is available in API version 52.0 and later.
-   **[AppointmentScheduleAggr](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_appointmentscheduleaggr.htm)**
    Records the utilization of a service resource, by date, for the Load Balancing appointment assignment policy. This object is available in API version 52.0 and later.
-   **[AppointmentScheduleLog](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_appointmentschedulelog.htm)**
    Stores service appointments of each service Resource. This object is used to calculate the utilization of a service resource for the AppointmentScheduleAggr object. This object is available in API version 52.0 and later.
-   **[AppointmentSchedulingPolicy](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_appointmentschedulingpolicy.htm)**
    Represents a set of rules for scheduling appointments using Salesforce Scheduler. This object is available in API version 45.0 and later.
-   **[AppointmentTopicTimeSlot](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_appointmenttopictimeslot.htm)**
    Represents a lookup to a work type or a work type group for a time slot This object is available in API version 52.0 and later.
-   **[Approval](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_approval.htm)**
    Represents an approval request for a Contract.
-   **[ApprovalAlertContentDef](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_approvalalertcontentdef.htm)**
    Represents the mapping that links specific user-created email templates to different notification events such as initial assignment or reassignment within an Advanced Approvals flow. This object is available in API version 66.0 and later.
-   **[ApprovalSubmission](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_approvalsubmission.htm)**
    Represents the instance of an approval request that's submitted for a record of the related object. This object is available in API version 62.0 and later.
-   **[ApprovalSubmissionDetail](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_approvalsubmissiondetail.htm)**
    ApprovalSubmissionDetail contains additional information about operations happening during the approval lifecycle. It will not hold any information that’s already captured in the existing ApprovalSubmission and ApprovalWorkItem entities. This object is available in API version 62.0 and later.
-   **[ApprovalWorkItem](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_approvalworkitem.htm)**
    Contains run-time information about each step in an approval workflow, such as assignees and their decisions regarding the object's approval. Has a master-detail relationship with ApprovalSubmission. This object is available in API version 61.0 and later.
-   **[ApprovalWorkItemCondition](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_approvalworkitemcondition.htm)**
    Represents a condition for starting and concluding an approval step that's evaluated as part of the smart approval process. This object is available in API version 64.0 and later.
-   **[ApprovalWorkItemCriteria](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_approvalworkitemcriteria.htm)**
    Represents the logic by which a smart approval request is evaluated. This object is available in API version 64.0 and later.
-   **[AppTabMember](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_apptabmember.htm)**
    Represents the list of tabs for each of the available apps. This object is available in API version 43.0 and later.
-   **[ApptBundleAggrDurDnscale](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_apptbundleaggrdurdnscale.htm)**
    Sums the duration of the bundle members, reduced by a predefined percentage. This object is available in API version 54.0 and later.
-   **[ApptBundleAggrPolicy](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_apptbundleaggrpolicy.htm)**
    Policy that defines how the property values of the bundle members are aggregated and assigned to the bundle. This object is available in API version 54.0 and later.
-   **[ApptBundleConfig](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_apptbundleconfig.htm)**
    Represents the general parameters that define the behavior of the bundle. This object is available in API version 54.0 and later.
-   **[ApptBundlePolicy](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_apptbundlepolicy.htm)**
    Policy that defines how the bundling of service appointments should be handled. This object is available in API version 54.0 and later.
-   **[ApptBundlePolicySvcTerr](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_apptbundlepolicysvcterr.htm)**
    Represents a link between the BundlePolicy and the ServiceTerritory. This object is available in API version 54.0 and later.
-   **[ApptBundlePropagatePolicy](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_apptbundlepropagatepolicy.htm)**
    Policy that defines which property values are inherited from the bundle to the bundle members or are assigned as constant values in the bundle members. This object is available in API version 55.0 and later.
-   **[ApptBundleRestrictPolicy](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_apptbundlerestrictpolicy.htm)**
    Policy that defines the restrictions that are considered while forming a bundle. This object is available in API version 54.0 and later.
-   **[ApptBundleSortPolicy](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_apptbundlesortpolicy.htm)**
    Policy that defines the properties by which the bundle members are sorted within the bundle. Can also be used in the automatic mode for determining the order of the automatic selection of bundle members. This object is available in API version 54.0 and later.
-   **[AppUsageAssignment](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_appusageassignment.htm)**
    Provides application context for a record. A record can have different allowed actions or different related objects when it’s created for different applications. For example, a Revenue Lifecycle Management order has a related RevenueLifecycleManagement AppUsageAssignment, so Salesforce knows it can create assets for that order. Available in API version 50.0 and later.
-   **[ArchiveActivity](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_archiveactivity.htm)**
    Represents metadata retrieved for a single Archive process initiated by an action. Retrieved metadata can include status tracking, start and end times, record counts, and monitoring and auditing outcomes. This object is available in API version 65.0 and later.
-   **[ArchivePolicyDefinition](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_archivepolicydefinition.htm)**
    Represents a data lifecycle policy that, in each row, defines the scope, frequency, and rules for automated archiving or purging of records from a root entity, such as Contact or Lead. This object is available in API version 65.0 and later.
-   **[Article Type \_\_DataCategorySelection \_\_DataCategorySelection](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_articletype__datacategoryselection.htm)**
    A data category selection represents a data category that classifies an article. This object is available in API version 19.0 and later.
-   **[Asset](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_asset.htm)**
    Represents an item of commercial value, such as a product sold by your company or a competitor, that a customer has purchased.
-   **[AssetAction](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_assetaction.htm)**
    Represents a change made to a lifecycle-managed asset. The fields can’t be edited. This object is available in API version 50.0 and later.
-   **[AssetActionSource](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_assetactionsource.htm)**
    Represents an optional way to record what transactions caused changes to lifecycle-managed assets. Use it to trace financial and other information about asset actions. This object supports Salesforce order products and work order line items, and transaction IDs from other systems. The fields can’t be edited. This object is available in API version 50.0 and later.
-   **[AssetAttribute](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_assetattribute.htm)**
    Stores asset attributes to track and analyze asset conditions to improve their uptime. This object is available in API version 57.0 and later.
-   **[AssetContractRelationship](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_assetcontractrelationship.htm)**
    Represents a relationship between an asset and a contract. This object is available in API version 60.0 and later.
-   **[AssetDowntimePeriod](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_assetdowntimeperiod.htm)**
    Represents a period during which an asset is not able to perform as expected. Downtime periods include planned activities, such as maintenance, and unplanned events, such as mechanical breakdown. This object is available in API version 49.0 and later.
-   **[AssetOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_assetownersharingrule.htm)**
    Represents the rules for sharing an Asset with users other than the owner. This object is available in API version 33.0 and later.
-   **[AssetRateAdjustment](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_assetrateadjustment.htm)**
    Stores the tier rate adjustments for the asset rate card entries. This object is available in API version 62.0 and later.
-   **[AssetRateCardEntry](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_assetratecardentry.htm)**
    Stores the negotiated rate card entries that are associated with an asset in Revenue Cloud. This object is available in API version 62.0 and later.
-   **[AssetRelationship](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_assetrelationship.htm)**
    Represents a non-hierarchical relationship between assets due to an asset modification; for example, a replacement, upgrade, or other circumstance. In Revenue Lifecycle Management, this object represents an asset or assets grouped in a bundle or set. This object is available in API version 41.0 and later.
-   **[AssetShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_assetshare.htm)**
    Represents a sharing entry on an Asset. This object is available in API version 33.0 and later.
-   **[AssetStatePeriod](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_assetstateperiod.htm)**
    Represents a time span when an asset has the same quantity, amount, and monthly recurring revenue (MRR). An asset has as many asset state periods as there are changes to it (asset actions) during its lifecycle. The dashboard and related pages show the current asset state period. The fields can’t be edited. This object is available in API version 50.0 and later.
-   **[AssetStatePeriodAttribute](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_assetstateperiodattribute.htm)**
    Represents a virtual object that holds the key-value pair of the asset attribute in a specified asset state period. This object is a child object of AssetStatePeriod. This object is available in API version 60.0 and later.
-   **[AssetTag](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_assettag.htm)**
    Associates a word or short phrase with an Asset.
-   **[AssetTokenEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_assettokenevent.htm)**
    The documentation has moved to [AssetTokenEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/sforce_api_objects_assettokenevent.htm "HTML (New Window)") in the Platform Events Developer Guide.
-   **[AssetWarranty](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_assetwarranty.htm)**
    Defines the warranty terms applicable to an asset along with any exclusions and extensions. This object is available in API version 50.0 and later.
-   **[AssignedResource](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_assignedresource.htm)**
    Represents a service resource who is assigned to a service appointment in Field Service and Lightning Scheduler. Assigned resources appear in the Assigned Resources related list on service appointments. This object is available in API version 38.0 and later.
-   **[AssignmentRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_assignmentrule.htm)**
    Represents an assignment rule associated with a Case or Lead.
-   **[AssociatedLocation](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_associatedlocation.htm)**
    Represents a link between an account and a location in Field Service. You can associate multiple accounts with one location. For example, a shopping center location may have multiple customer accounts.
-   **[AsyncApexJob](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_asyncapexjob.htm)**
    Represents an individual Apex sharing recalculation job, a batch Apex job, a method with the future annotation, or a job that implements Queueable or Schedulable. Use this object to query Apex batch jobs in your organization.
-   **[AsyncOperationLog](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_asyncoperationlog.htm)**
    Represents an async operations log containing progress and status information about external synchronizations to the Omnichannel Inventory service. This object is available in API version 51.0 and later.
-   **[AsyncOperationTracker](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_asyncoperationtracker.htm)**
    Represents the status of an asynchronous request initiated from the Quote, Order, and CreditMemo entities. This object is available in API version 61.0 and later.
-   **[AsyncOpSyndicationFeedFile](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_asyncopsyndicationfeedfile.htm)**
    Represents the sync status of file-related information shared with external channels such as Facebook and Instagram. This object is available in API version 64.0 and later.
-   **[AttachedContentDocument](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_attachedcontentdocument.htm)**
    This read-only object contains all ContentDocument objects associated with an object.
-   **[AttachedContentNote](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_attachedcontentnote.htm)**
    This read-only object contains all ContentNote objects associated with an object.This object is available in API version 35.0 and later.
-   **[Attachment](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_attachment.htm)**
    Represents a file that a User has uploaded and attached to a parent object.
-   **[AttachmentEventLog](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_attachmenteventlog.htm)**
    Attachment event logs contain information about attachments. This object is available in API version 65.0 and later.
-   **[AttribModel](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_attribmodel.htm)**
    Represents an attribution model used with Personalization, Attribution, and Campaign Influence, including model weights and touch type. This object is available in API version 62.0 and later.
-   **[AttribModelStage](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_attribModelStage.htm)**
    Represents a funnel stage that’s used in a predefined or custom attribution configuration. Available in API version 62.0 and later.
-   **[AttribModelStageMetric](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_attribModelStageMetric.htm)**
    Represents the engagement signal metrics that you select when you configure a funnel stage for an attribution configuration. Available in API version 63.0 and later.
-   **[AttributeDefinition](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_attributedefinition.htm)**
    Represents a product, asset, or object attribute, for example, a hardward specification or software detail. This object is available in API version 57.0 and later.
-   **[AttributePicklist](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_attributepicklist.htm)**
    Represents a custom picklist for an asset attribute. This object is available in API version 57.0 and later.
-   **[AttributePicklistValue](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_attributepicklistvalue.htm)**
    Represents the values of an asset attribute picklist. This object is available in API version 57.0 and later.
-   **[AsyncReportRunEventLog](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_asyncreportruneventlog.htm)**
    Async Report Run Event Log is used for reporting scheduled requests. This category includes dashboard refreshes, asynchronous reports, schedule reports, and analytics snapshots. This object is available in API version 61.0 and later.
-   **[Audience](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_audience.htm)**
    Represents an audience that is defined by criteria and can be assigned and used for targeting in an Experience Cloud site. This object is available in API version 44.0 and later.
-   **[AuraDefinition](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_auradefinition.htm)**
    Represents an Aura component definition, such as component markup, a client-side controller, or an event. This object is available in API version 32.0 and later.
-   **[AuraDefinitionBundle](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_auradefinitionbundle.htm)**
    Represents a Lightning Aura component definition bundle, such as a component or application bundle. A bundle contains a Lightning Aura component definition and all its related resources. This object is available in API version 32.0 and later.
-   **[AuraDefinitionBundleInfo](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_auradefinitionbundleinfo.htm)**
    For internal use only.
-   **[AuraDefinitionInfo](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_auradefinitioninfo.htm)**
    For internal use only.
-   **[AuraRequestEventLog](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_aurarequesteventlog.htm)**
    Aura Request Event Log contains details of requests to Apex methods from Aura and Lightning web components. This object is available in API version 61.0 and later.
-   **[AuthConfig](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_authconfig.htm)**
    Represents authentication options for My Domain and Experience Cloud site login pages. This object is available in API version 32.0 and later.
-   **[AuthConfigProviders](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_authconfigproviders.htm)**
    Represents an authentication provider that’s configured in an organization. AuthConfigProviders is a child of the AuthConfig object. This object is available in API version 32.0 and later.
-   **[AuthorizationForm](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_authorizationform.htm)**
    Represents the specific version and effective dates of a form that is associated with consent, such as a privacy policy or terms and conditions. This object is available in API version 46.0 and later.
-   **[AuthorizationFormConsent](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_authorizationformconsent.htm)**
    Represents the date and way in which a user consented to an authorization form. This object is available in API version 46.0 and later.
-   **[AuthorizationFormDataUse](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_authorizationformdatause.htm)**
    Represents the data use consented to in an authorization form. This object is available in API version 46.0 and later.
-   **[AuthorizationFormText](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_authorizationformtext.htm)**
    Represents an authorization form’s text and language settings. This object is available in API version 46.0 and later.
-   **[AuthProvider](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_authprovider.htm)**
    Represents an authentication provider (auth provider). An auth provider lets users log in to your Salesforce org from an external service provider, such as Facebook, Google, or GitHub. This object is available in API version 27.0 and later.
-   **[AuthProvParamFwdAllowlist](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_authprovparamfwdallowlist.htm)**
    Represents an allowlisted URL parameter that can be forwarded from authentication provider client configuration URLs to the authorization URL. Use this type to add custom functionality to authentication providers. For example, allowlist a ui\_locales parameter and use it to send a user's language preference from Salesforce to the third-party provider's login page. This object is available in API version 62..0 and later.
-   **[AuthSession](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_authsession.htm)**
    The AuthSession object represents an individual user session in your organization. This object is available in versions 29.0 and later.
-   **[AutomatedAction](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_automatedaction.htm)**
    Represents the configuration of an automated action, such as a workflow rule. This object is available in API version 57.0 and later.
-   **[AutomatedActionCondition](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_automatedactioncondition.htm)**
    Represents the logical operator details for evaluating conditions in an automated action. This object is available in API version 57.0 and later.
-   **[AutomatedActionOverride](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_automatedactionoverride.htm)**
    Represents a modified attribute of a shared automated action. For example, the modified attribute can contain customizations for your business. This object is available in API version 58.0 and later.
-   **[AutomatedActionParameter](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_automatedactionparameter.htm)**
    Represents the values or field references evaluated by the automated action. This object is available in API version 57.0 and later.
-   **[AutomatedActionReminder](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_automatedactionreminder.htm)**
    Represents a reminder to the end user to take an action in the future. This object is available in API version 58.0 and later.
-   **[BackgroundOperation](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_backgroundoperation.htm)**
    Represents a background operation in an asynchronous job queue. This object is available in API version 35.0 and later.
-   **[BackgroundOperationResult](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_backgroundoperationresult.htm)**
    Stores error messages generated when or importing data into big objects using Bulk API. This is a big object, available in API version 37.0 and later.
-   **[BatchApexErrorEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_batchapexerrorevent.htm)**
    The documentation has moved to [BatchApexErrorEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/sforce_api_objects_batchapexerrorevent.htm "HTML (New Window)") in the Platform Events Developer Guide.
-   **[BillingBatchScheduler](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_billingbatchscheduler.htm)**
    Represents a scheduled processing job that triggers recurring invoice batch runs and payment batch runs in Subscription Management. This object is available in API version 55.0 and later.
-   **[BillingPeriodItem](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_billingperioditem.htm)**
    Represents one payment period for a subscription. The billing period item is used to pass billing information to an invoice line item in Subscription Management. This object is available in API version 55.0 and later.
-   **[BillingPolicy](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_billingpolicy.htm)**
    Represents a group of billing treatments, which define the rules for how to invoice a customer for an order item. This object is available in API version 55.0 and later.
-   **[BillingSchedule](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_billingschedule.htm)**
    Stores the order item information used in the invoicing process. This object is available in API version 55.0 and later.
-   **[BillingScheduleGroup](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_billingschedulegroup.htm)**
    Represents a consolidated view of all billing schedules related to the order items generated from one asset, including new orders and amendment orders. This object is available in API version 55.0 and later.
-   **[BillingTreatment](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_billingtreatment.htm)**
    Defines how Subscription Management bills an order item. The Exclude From Billing field controls whether the order item is invoiced. Child billing treatment items control how much of the order item's balance is invoiced for each invoice across the subscription's lifecycle. Billing treatments are assigned to order items based on the parent billing policy's Billing Treatment Selection field. This object is available in API version 55.0 and later.
-   **[BillingTreatmentItem](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_billingtreatmentitem.htm)**
    A billing treatment item defines how the order item's total amount is distributed into billing schedules over the course of the order item's lifecycle. In the Subscription Management pilot, billing treatments must have only one billing treatment item, so that the billing treatment item covers 100% of the order item's total value. This object is available in API version 55.0 and later.
-   **[BlockedRedirectEventLog](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_blockedredirecteventlog.htm)**
    Blocked Redirect events capture information about blocked redirections from Salesforce to untrusted and malformed URLs. This object is available in API version 65.0 and later.
-   **[Bookmark](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_bookmark.htm)**
    Represents a link between opportunities that share common information.
-   **[BotDefinition](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_botdefinition.htm)**
    Represents a top level object for Einstein Bots or Agentforce Agents. This object is available in API version 60.0 and later.
-   **[BotVersion](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_botversion.htm)**
    Represents a version of a bot or agent defined by a BotDefinition record. This object is available in API version 63.0 and later.
-   **[BrandingSet](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_brandingset.htm)**
    Represents the definition of a set of branding properties for an Experience Builder site, as defined in the Theme panel in Experience Builder. This object is available in API version 40.0 and later.
-   **[BrandTemplate](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_brandtemplate.htm)**
    Letterhead for HTML EmailTemplate.
-   **[Brief](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_brief.htm)**
    Represents a marketing brief. A brief contains information that’s used for positioning and grounding a marketing campaign. Agentforce can help you create a campaign that best fits the goals and requirements in your brief. This object is available in API version 61.0 and later.
-   **[BriefcaseAssignment](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_briefcaseassignment.htm)**
    Represents the assignment of a briefcase definition to selected users and user groups. This object is available in API version 50.0 and later.
-   **[BriefcaseDefinition](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_briefcasedefinition.htm)**
    Represents a briefcase definition. A briefcase makes selected records available for users to view when they’re offline in the Salesforce Field Service mobile app for iOS and Android. This object is available in API version 50.0 and later.
-   **[BriefcaseRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_briefcaserule.htm)**
    Represents a rule that specifies records for a briefcase definition. This object is available in API version 50.0 and later.
-   **[BriefcaseRuleFilter](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_briefcaserulefilter.htm)**
    Represents a filter criteria for a briefcase rule. This object is available in API version 50.0 and later.
-   **[BroadcastCommAudience](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_broadcastcommaudience.htm)**
    Represents the audience that the broadcast communication is sent to. This object is available in API version 56.0 and later.
-   **[BroadcastCommunication](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_broadcastcommunication.htm)**
    Represents a broadcast communication related to an incident. This object is available in API version 56.0 and later.
-   **[BroadcastTopic](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_broadcasttopic.htm)**
    Represents a definition of a broadcast topic. A broadcast topic is associated with a list of Experience Cloud network sites for Service Cloud and collaboration rooms for Sales Cloud. The topic is created for a specific user role. Collaboration rooms are linked to Slack channels. This object is available in API version 55.0 and later.
-   **[BroadcastTopicGroup](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_broadcasttopicgroup.htm)**
    Represents a junction object that relates a group to an alert type broadcast topic. The broadcast sends the alert to this group. This object is available in API version 57.0 and later.
-   **[BroadcastTopicNetwork](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_broadcasttopicnetwork.htm)**
    Represents a link between a broadcast topic and the Experience Cloud network site for Service Cloud. This object is available in API version 56.0 and later.
-   **[BrowserPolicyViolation](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_browserpolicyviolation.htm)**
    Represents a violation that occurred within the last seven days related to the Trusted URLs and Trusted URLs for External Redirects allowlists. These violations include blocked resource requests based on your content security policy (CSP) and blocked redirections. This object is available in API version 61.0 and later.
-   **[BulkApi2EventLog](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_bulkapi2eventlog.htm)**
    Bulk API 2 event logs contain details about Bulk API 2.0 requests. This object is available in API version 61.0 and later.
-   **[BulkApiEventLog](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_bulkapieventlog.htm)**
    Bulk API event logs contain details about Bulk API requests. This object is available in API version 61.0 and later.
-   **[BulkApiRequestEventLog](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_bulkapirequesteventlog.htm)**
    The Bulk API request event captures when Bulk API requests are received to create a job, update a job, create a batch, update a batch, and when a job completes. This object is available in API version 65.0 and later.
-   **[BusinessBrand](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_businessbrand.htm)**
    Represents a unique brand for a business that belongs to a parent entity. This object is available in API version 53.0 and later.
-   **[BusinessAlert](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_businessalert.htm)**
    Represents information about insight notifications that Einstein Relationship Insights explores, such as news mentions, job updates, and relationships. This object is available in API version 57.0 and later.
-   **[BusinessAlertStatus](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_businessalertstatus.htm)**
    Represents information about the read status of an insight alert. This object is available in API version 57.0 and later.
-   **[BusinessHours](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_businesshours.htm)**
    Specifies the business hours of your support organization. Escalation rules are run only during these hours.
-   **[Business Process](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_businessprocess.htm)**
    Represents a business process. Business Processes track separate sales, lead, support, and solution lifecycles by displaying different picklist values according to each user’s profile.
-   **[BusinessProcessDefinition](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_businessprocessdefinition.htm)**
    Setup object that stores information about stages in a customer lifecycle map. The stages are associated with surveys and questions created using Salesforce Surveys. This object is reserved for internal use, and is available in API version 49.0 and later.
-   **[BusinessProcessFeedback](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_businessprocessfeedback.htm)**
    Setup object that stores information about the survey and the question associated with each stage in a customer lifecycle map. Customer lifecycle maps are used to track the scores provided by customers across their lifecycle using Salesforce Surveys. This object is reserved for internal use, and is available in API version 49.0 and later.
-   **[BusinessProcessGroup](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_businessprocessgroup.htm)**
    Setup object that stores information about customer lifecycle maps. Customer lifecycle maps are used to track the scores provided by customers across their lifecycle using Salesforce Surveys. This object is reserved for internal use, and is available in API version 49.0 and later.
-   **[BuyerAccount](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_buyeraccount.htm)**
    Represents an account that is enabled as a buyer for Lightning B2B Commerce. This object is available in API version 48.0 and later.
-   **[BuyerCriteria](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_buyercriteria.htm)**
    Represents the buyer context qualifier of locale for any buyer groups of type Market This object is available in API version 58.0 and later.
-   **[BuyerGroup](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_buyergroup.htm)**
    Associates group qualifiers (entitlements, price books, promotions, and shipping methods) with buyer members based on buyer account ID or on the localized language and currency of the market browsed in a webstore. This object is available in API version 57.0; amended to support Market in version 58.0 and later.
-   **[BuyerGroupBuyerCriteria](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_buyergroupbuyercriteria.htm)**
    Associates a buyer group that is enabled for webstores supporting multiple languages and currencies with BuyerCriteria that define those languages and currencies. This object is available in API version 58.0 and later.
-   **[BuyerGroupMember](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_buyergroupmember.htm)**
    Represents a member of a buyer group. This object is available in API version 55.0 and later.
-   **[BuyerGroupPricebook](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_buyergrouppricebook.htm)**
    Represents a buyer group price book used in Lightning B2B Commerce. This object is available in API version 48.0 and later.
-   **[BuyerGroupRelatedObject](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_buyergrouprelatedobject.htm)**
    Used to associate currencies and supported ship-to countries with a buyer group and its price books, promotions, and entitlements. Supports buyer experience when buyer group members shop in stores enabled for multiple locales. This object is available in API version 58.0 and later.
-   **[CalcProcStepRelationship](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_calcprocsteprelationship.htm)**
    Defines a parent-child relationship between two Expression Set Steps in an Expression Set Version. The label for this object is Expression Set Step Relationship. This object is available in API version 53.0 and later.
-   **[CalculatedInsightRangeBound](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_calculatedinsightrangebound.htm)**
    Stores the information required to calculate a range-bound data insight. This object is available in API version 59.0 and later.
-   **[CalculationMatrix](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_calculationmatrix.htm)**
    Matches input values to a table row and returns the row's output values. The label for this object is Decision Matrix. This object is available in API version 53.0 and later.
-   **[CalculationMatrixColumn](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_calculationmatrixcolumn.htm)**
    Defines a column in a Decision Matrix. The label for this object is Decision Matrix Column. This object is available in API version 53.0 and later.
-   **[CalculationMatrixRow](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_calculationmatrixrow.htm)**
    Defines a row in a Decision Matrix. The label for this object is Decision Matrix Row. This object is available in API version 53.0 and later.
-   **[CalculationMatrixVersion](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_calculationmatrixversion.htm)**
    Defines a version of a Decision Matrix. The label for this object is Decision Matrix Version. This object is available in API version 53.0 and later.
-   **[CalculationProcedure](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_calculationprocedure.htm)**
    Performs a series of calculations using matrix lookups and user-defined variables and constants. The label for this object is Expression Set. This object is available in API version 53.0 and later.
-   **[CalculationProcedureStep](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_calculationprocedurestep.htm)**
    Defines a step in an Expression Set. The label for this object is Expression Set Step. This object is available in API version 53.0 and later.
-   **[CalculationProcedureVariable](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_calculationprocedurevariable.htm)**
    Defines a variable in an Expression Set. The label for this object is Expression Set Variable. This object is available in API version 53.0 and later.
-   **[CalculationProcedureVersion](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_calculationprocedureversion.htm)**
    Defines a version of an Expression Set. The label for this object is Expression Set Version. This object is available in API version 53.0 and later.
-   **[Calendar](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_calendar.htm)**
    Represents a calendar. This can be a default user calendar, public calendar, resource calendar, or holiday calendar. This object is available in API version 45.0 and later.
-   **[CalendarView](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_calendarview.htm)**
    These calendars can be created and assigned to users other than the creator. Available calendars include object, shared, public, resource, and user list calendars. Object calendars represent a calendar based on a Salesforce object, either standard or custom. This object is available in API version 51.0 and later.
-   **[CallCenter](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_callcenter.htm)**
    Represents a call center, which is a logical representation of a single computer-telephony integration (CTI) system instance in an organization.
-   **[CallCenterRoutingMap](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_callcenterroutingmap.htm)**
    Stores a mapping between a user or queue in a Salesforce org to a user or queue in an external system’s call center. This object is available in API version 53.0 and later.
-   **[CallCoachingMediaProvider](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_callcoachingmediaprovider.htm)**
    Represents the media provider for call recordings. This object is available in API version 49.0 and later.
-   **[CallCtrAgentFavTrfrDest](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_callctragentfavtrfrdest.htm)**
    Represents a transfer destination that has been marked (starred) as a favorite in the Omni-Channel softphone by a contact center agent for voice call transfers. This object is available in API version 55.0 and later.
-   **[CallCtrAgentFavTrfrDestShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_callctragentfavtrfrdestshare.htm)**
    Represents a sharing entry on a favorite transfer destination in the Omni-Channel softphone for voice call transfers. This object is available in API version 55.0 and later.
-   **[CallDisposition](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_calldisposition.htm)**
    Represents a call result value that sales reps select when logging a call. This object is available in API version 47.0 and later.
-   **[CallDispositionCategory](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_calldispositioncategory.htm)**
    Represents the call outcome of a phone call that is used in reports and branching criteria for cadences. This object is available in API version 47.0 and later.
-   **[CallTemplate](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_calltemplate.htm)**
    Represents a call script for users to read when making calls.
-   **[Campaign](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_campaign.htm)**
    Represents and tracks a marketing campaign, such as a direct mail promotion, webinar, or trade show.
-   **[CampaignInfluence](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_campaigninfluence.htm)**
    Represents the association between a campaign and an opportunity in Customizable Campaign Influence. This object is available in API version 37.0 and later.
-   **[CampaignInfluenceModel](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_campaigninfluencemodel.htm)**
    This read-only object represents a campaign influence model in Customizable Campaign Influence. Use campaign influence models to group CampaignInfluence records created by a specific set of triggers and workflows that you define. The Primary Campaign Source influence model is the default model. This object is available in API version 37.0 and later.
-   **[CampaignMember](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_campaignmember.htm)**
    The CampaignMember object represents the relationship between a campaign and either a lead or a contact. If the Accounts as Campaign Members setting is enabled in an org, CampaignMember can also represent the relationship between a campaign and an account.
-   **[CampaignMemberStatus](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_campaignmemberstatus.htm)**
    One or more member status values defined for a campaign.
-   **[CampaignOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_campaignownersharingrule.htm)**
    Represents the rules for sharing a campaign with User records other than the owner or anyone above the owner in the role hierarchy.
-   **[CampaignShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_campaignshare.htm)**
    Represents a sharing entry on a Campaign.
-   **[CampaignTag](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_campaigntag.htm)**
    Associates a word or short phrase with a Campaign.
-   **[CardPaymentMethod](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_cardpaymentmethod.htm)**
    Represents a credit card or debit card payment method, which implements the PaymentMethod object. This object is available in API version 48.0 and later.
-   **[CartCheckoutSession](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_cartcheckoutsession.htm)**
    Represents a checkout session used in Lightning B2B Commerce checkout. This object is available in API version 48.0 and later.
-   **[CartDeliveryGroup](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_cartdeliverygroup.htm)**
    Represents shipping information for the delivery of items in an order against a store built with B2B Commerce or D2C Commerce. This object is available in API version 49.0 and later.
-   **[CartDeliveryGroupMethod](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_cartdeliverygroupmethod.htm)**
    Represents the selected delivery method for a cart delivery group used in Lightning B2B Commerce checkout. This object is available in API version 49.0 and later.
-   **[CartDeliveryGroupMethodAdj](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_cartdeliverygroupmethodadj.htm)**
    Represents the shipping promotion discount for a shipping method. This object is available in API version 60.0 and later.
-   **[CartItem](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_cartitem.htm)**
    Represents an item in a WebCart that’s active in a store built with B2B. Cart item can be of type Product or Charge. This object is available in API version 49.0 and later.
-   **[CartItemAttribute](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_cartitemattribute.htm)**
    Represents the attributes associated with a cart item, stored as key-value pairs. These attributes are derived from the product and carried forward to the order during checkout. This object is available in API version 66.0 and later.
-   **[CartItemPriceAdjustment](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_cartitempriceadjustment.htm)**
    Price adjustment for a cart item. This object is available in API version 52.0 and later.
-   **[CartTax](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_carttax.htm)**
    Represents taxes for a line item in a WebCart that’s active in a store built with B2B Commerce or D2C Commerce. This object is available in API version 49.0 and later.
-   **[CartValidationOutput](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_cartvalidationoutput.htm)**
    Associate errors to cart entities, such as cart line items, delivery groups, and the like, in a store built with B2B Commerce or D2C Commerce. An example error is “Out of stock.” Available in API version 49.0 and later.
-   **[Case](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_case.htm)**
    Represents a case, which is a customer issue or problem.
-   **[CaseArticle](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_casearticle.htm)**
    Represents the association between a Case and a KnowledgeArticle. This object is available in API version 20.0 and later.
-   **[CaseComment](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_casecomment.htm)**
    Represents a comment that provides additional information about the associated Case.
-   **[CaseContactRole](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_casecontactrole.htm)**
    Represents the role that a given Contact plays on a Case.
-   **[CaseHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_casehistory.htm)**
    Represents historical information about changes that have been made to the associated Case.
-   **[CaseHistory2](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_casehistory2.htm)**
    Represents historical information about owner and status changes that have been made to the associated Case. This object is available in API version 59.0 and later.
-   **[CaseMilestone](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_casemilestone.htm)**
    Represents a milestone (required step in a customer support process) on a Case. This object is available in API version 18.0 and later.
-   **[CaseOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_caseownersharingrule.htm)**
    Represents the rules for sharing a case with users other than the owner.
-   **[CaseParticipant](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_std_caseparticipant.htm)**
    Represents a junction between a case, and an account or a contact. This object stores the details of the participant associated with a case. This participant could be the applicant, co-applicant, a household, or even a business account. This object is available in API version 54.0 and later.
-   **[CaseRelatedIssue](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_caserelatedissue.htm)**
    This object acts as a junction between a customer issue (Case) and the Incident or Problem that represents an associated service failure. This object is available in API version 53.0 and later.
-   **[CaseShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_caseshare.htm)**
    Represents a sharing entry on a Case.
-   **[CaseSolution](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_casesolution.htm)**
    Represents the association between a Case and a Solution.
-   **[CaseStatus](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_casestatus.htm)**
    Represents the status of a Case, such as New, On Hold, or In Process.
-   **[CaseSubjectParticle](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_casesubjectparticle.htm)**
    Represents the Social Business Rules custom format for the **Case Subject** field on cases created from inbound social posts. This object is available in API version 41.0 and later.
-   **[CaseTag](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_casetag.htm)**
    Associates a word or short phrase with a Case
-   **[CaseTeamMember](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_caseteammember.htm)**
    Represents a case team member, who works with a team of other users to help resolve a case.
-   **[CaseTeamRole](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_caseteamrole.htm)**
    Represents a case team role. Every case team member has a role on a case, such as “Customer Contact” or “Case Manager.”
-   **[CaseTeamTemplate](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_caseteamtemplate.htm)**
    Represents a predefined case team, which is a group of users that helps resolve a case.
-   **[CaseTeamTemplateMember](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_caseteamtemplatemember.htm)**
    Represents a member on a predefined case team, which is a group of users that helps resolve cases.
-   **[CaseTeamTemplateRecord](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_caseteamtemplaterecord.htm)**
    The CaseTeamTemplateRecord object is a linking object between the Case and CaseTeamTemplate objects. To assign a predefined case team to a case (customer inquiry), create a CaseTeamTemplateRecord record and point the ParentId to the case and the TeamTemplateId to the predefined case team.
-   **[CategoryData](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_categorydata.htm)**
    Represents a logical grouping of Solution records.
-   **[CategoryNode](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_categorynode.htm)**
    Represents a tree of Solution categories.
-   **[CategoryNodeLocalization](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_categorynodelocalization.htm)**
    When the Translation Workbench is enabled for your organization, the CategoryNodeLocalization object provides the translation of the label of a solution category.
-   **[ChangeRequest](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_changerequest.htm)**
    Represents a decision to implement a formal request for a change (RFC). This object is available in API version 53.0 and later.
-   **[ChangeRequestRelatedIssue](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_changerequestrelatedissue.htm)**
    Represents a junction object that relates a ChangeRequest to an Incident or Problem due to a service failure. This object is available in API version 53.0 and later.
-   **[ChangeRequestRelatedItem](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_changerequestrelateditem.htm)**
    Represents a junction object that relates a ChangeRequest to an Asset. This object is available in API version 53.0 and later.
-   **[ChangeSetOperationEventLog](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_changesetoperationeventlog.htm)**
    Change Set Operation events contain information from change set migrations. This object is available in API version 65.0 and later.
-   **[ChannelObjectLinkingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_channelobjectlinkingrule.htm)**
    Represents a rule for linking a channel interaction with an object (such as Lead or Contact). This object is available in API version 47.0 and later.
-   **[ChannelProgram](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_channelprogram.htm)**
    Represents a channel program that vendors use to market and sell their products through channel partners. This object is available in API version 41.0 and later.
-   **[ChannelProgramLevel](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_channelprogramlevel.htm)**
    Represents a level, based on member experience, in a channel program. This object is available in API version 41.0 and later.
-   **[ChannelProgramMember](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_channelprogrammember.htm)**
    Represents a partner who is a member of a channel program. This object is available in API version 41.0 and later.
-   **[ChatterActivity](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_chatteractivity.htm)**
    ChatterActivity represents the number of posts and comments made by a user and the number of comments and likes on posts and comments received by the same user. This object is available in API version 23.0 and later.
-   **[ChatterAnswersActivity](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_chatteranswersactivity.htm)**
    Represents the reputation of a User in Chatter Answers zones.This object is available in API version 25.0 and later.
-   **[ChatterAnswersReputationLevel](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_chatteranswersreputationlevel.htm)**
    Represents a reputation level within a Chatter Answers zone. This object is available in API version 26.0 and later.
-   **[ChatterConversation](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_chatterconversation.htm)**
    Represents a private conversation in Chatter, consisting of messages that conversation members have sent or received. This object is available in API version 23.0 and later.
-   **[ChatterConversationMember](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_chatterconversationmember.htm)**
    Represents a member of a private conversation in Chatter. A member has either sent messages to or received messages from other conversation participants. This object is available in API version 23.0 and later.
-   **[ChatterExtension](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_chatterextension.htm)**
    Represents a Rich Publisher App that’s integrated with the Chatter publisher. This object is available in API version 41.0 and later.
-   **[ChatterExtensionConfig](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_chatterextensionconfig.htm)**
    Configuration for the Chatter extension for Experience Cloud sites. This object is available in API version 41.0 and later.
-   **[ChatterMessage](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_chattermessage.htm)**
    Represents a message sent as part of a private conversation in Chatter. This object is available in API version 23.0 and later.
-   **[ClientBrowser](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_clientbrowser.htm)**
    Represents a cookie added to the browser upon login, and also includes information about the browser application where the cookie was inserted. This object is available in version 28.0 and later.
-   **[CollaborationGroup](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_collaborationgroup.htm)**
    Represents a Chatter group. This object is available in API version 19.0 and later.
-   **[CollaborationGroupMember](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_collaborationgroupmember.htm)**
    Represents a member of a Chatter group. This object is available in API version 19.0 and later.
-   **[CollaborationGroupMemberRequest](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_collaborationgroupmemberrequest.htm)**
    Represents a request to join a private Chatter group. This object is available in API version 21.0 and later.
-   **[CollaborationGroupRecord](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_collaborationgrouprecord.htm)**
    Represents the records associated with Chatter groups.
-   **[CollaborationInvitation](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_collaborationinvitation.htm)**
    Represents an invitation to join Chatter, either directly or through a group. This object is available in API version 21.0 and later.
-   **[CollaborationRoom](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_collaborationroom.htm)**
    Represents a collaboration room, which links Salesforce to a Slack channel used by applications with specific use cases, such as swarming or reporting. This object is available in API version 55.0 and later.
-   **[CollabDocumentMetric](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_collabdocumentmetric.htm)**
    Represents the engagement metrics for a Quip thread (document or spreadsheet) that’s linked to a Salesforce record. This object is available in API version 50.0 and later.
-   **[CollabDocumentMetricRecord](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_collabdocumentmetricrecord.htm)**
    Represents an association between a CollabDocumentMetric and a Salesforce record.It tracks which Salesforce record, such as an Account or Contact, is linked to a Quip thread for which metrics were gathered using CollabDocumentMetric. CollabDocumentMetricRecord is available in API version 50.0 and later.
-   **[CollabTemplateMetric](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_collabtemplatemetric.htm)**
    Represents the engagement metrics for a Quip template.This object is available in API version 50.0 and later.
-   **[CollabTemplateMetricRecord](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_ccollabtemplatemetricrecord.htm)**
    Represents an association between a CollabTemplateMetric and a Salesforce record.It tracks which Salesforce record, such as an Account or Contact, is linked to a Quip template for which metrics were gathered using CollabTemplateMetric. CollabTemplateMetricRecord is available in API version 50.0 and later.
-   **[CollabUserEngagementMetric](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_collabuserengagementmetric.htm)**
    Represents the user engagement metrics for a Quip thread in a Quip template or document. This object is available in API version 50.0 and later.
-   **[CollabUserEngmtRecordLink](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_collabuserengmtrecordlink.htm)**
    Represents an association between a CollabUserEngagementMetric and a Salesforce record. It tracks which Salesforce record, such as an Account or Contact, is associated with the user engagement metric. This object is available in API version 50.0 and later.
-   **[ColorDefinition](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_colordefinition.htm)**
    Represents the color-related metadata for a custom tab. This object is available in API version 43.0 and later.
-   **[ContCalloutSummaryEventLog](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contcalloutsummaryeventlog.htm)**
    Continuation Callout Summary events contain information about all of the asynchronous callouts performed during a transaction, their response status codes, execution times, and URL endpoint destinations. This object is available in API version 65.0 and later.
-   **[CombinedAttachment](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_combinedattachment.htm)**
    This read-only object contains all notes, attachments, Google Docs, documents uploaded to libraries in Salesforce CRM content, and files added to Chatter that are associated with a record.
-   **[CommerceEntitlementBuyerGroup](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_commerceentitlementbuyergroup.htm)**
    Represents the entitlement policy for a buyer group. This object is available in API version 49.0 and later.
-   **[CommerceEntitlementPolicy](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_commerceentitlementpolicy.htm)**
    Represents an entitlement policy, which determines what products and prices a user can see. This object is available in API version 49.0 and later.
-   **[CommerceEntitlementPolicyShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_commerceentitlementpolicyshare.htm)**
    Represents the entitlement rule for sharing products and prices with users other than the owner. This object is available in API version 49.0 and later.
-   **[CommerceEntitlementProduct](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_commerceentitlementproduct.htm)**
    Represents the entitlement policy for a product. This object is available in API version 49.0 and later.
-   **[CommissionSchedule](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_commissionschedule.htm)**
    Represents a commission calculation and rate definition. Calculates commission values for a commissionable event.
-   **[CommissionScheduleAssignment](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_commissionscheduleassignment.htm)**
    Represents the commission calculation applicable to a specific product or producer for one or multiple commissionable events.
-   **[CommSubscription](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_commsubscription.htm)**
    Represents the subscription options for a specific communication. This object is available in API version 48.0 and later.
-   **[CommSubscriptionChannelType](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_commsubscriptionchanneltype.htm)**
    Represents the engagement channel through which you can reach a customer for a communication subscription. This object is available in API version 48.0 and later.
-   **[CommSubscriptionConsent](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_commsubscriptionconsent.htm)**
    Represents a customer’s consent to a communication subscription. This object is available in API version 48.0 and later.
-   **[CommSubscriptionTiming](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_commsubscriptiontiming.htm)**
    Represents a customer's timing preferences for receiving a communication subscription. This object is available in API version 48.0 and later.
-   **[Community (Zone)](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_community.htm)**
    Represents a zone that contains Idea or Question objects.
-   **[ConcurApexLimitEventLog](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_concurapexlimiteventlog.htm)**
    Concurrent Apex Limit event logs contain information about long-running concurrent Apex requests in your org that Salesforce terminated after reaching your org’s concurrency limit. Requests with an established Apex context that execute for 5 seconds are counted towards your org’s limit of concurrent long-running requests. (Asynchronous requests don’t count towards the limit.) When the long-running requests exceed the org default limit, additional long-running requests are denied. This object is available in API version 61.0 and later.
-   **[ConnectedApplication](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_connectedapplication.htm)**
    Represents a connected app and its details; all fields are read-only.
-   **[ConferenceNumber](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_conferencenumber.htm)**
    Holds the telephone number for an external event shown in the Salesforce Today feature in the Salesforce mobile app. This object is available in API version 35.0 and later.
-   **[Consumption Rate](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_consumption_rate.htm)**
    Consumption rates describe the billing rate for a range of usage within a consumption schedule. All consumption schedules require at least one consumption rate in order to rate usage on a usage product. This object is available in API version 45.0 and later.
-   **[Consumption Schedule](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_consumption_schedule.htm)**
    A consumption schedule organizes a set of consumption rates by which usage-based products are quoted and billed. This object is available in API version 45.0 and later.
-   **[Contact](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contact.htm)**
    Represents a contact, which is a person associated with an account.
-   **[ContactCenterChannel](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contactcenterchannel.htm)**
    Represents a junction object that relates a Bring Your Own Channel for Contact Center as a Service (CCaaS) messaging channel to a CallCenter object for Bring Your Own Channel for CCaaS. This object also represents the routing details for a voicemail configuration and routing information for callback requests. This object is available in API version 56.0 and later.
-   **[ContactCleanInfo](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contactcleaninfo.htm)**
    Stores the metadata Data.com Clean uses to determine a contact record’s clean status. Helps you automate the cleaning or related processing of contact records. ContactCleanInfo includes a number of bit vector fields.
-   **[ContactDailyMetric](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contactdailymetric.htm)**
    Represents the daily engagement metrics for a contact. This object is available in API version 52.0 and later.
-   **[ContactMonthlyMetric](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contactmonthlymetric.htm)**
    Represents the monthly engagement metrics for a contact. This object is available in API version 52.0 and later.
-   **[ContactPointAddress](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contactpointaddress.htm)**
    Represents a contact’s billing or shipping address, which is associated with an individual or person account. This object is available in API version 49.0 and later.
-   **[ContactPointConsent](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contactpointconsent.htm)**
    Represents a customer's consent to be contacted via a specific contact point, such as an email address or phone number. This object is available in API version 48.0 and later.
-   **[ContactPointEmail](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contactpointemail.htm)**
    Represents a contact’s email, which is associated with an individual or person account. This object is available in API version 48.0 and later.
-   **[ContactPointPhone](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contactpointphone.htm)**
    Represents a contact’s phone number, which is associated with an individual or person account. This object is available in API version 48.0 and later.
-   **[ContactPointTypeConsent](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contactpointtypeconsent.htm)**
    Represents consent for a contact point type, such as email or phone. This object is available in API version 45.0 and later.
-   **[ContactOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contactownersharingrule.htm)**
    Represents the rules for sharing a contact with a User other than the owner.
-   **[ContactRequest](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contactrequest.htm)**
    Represents a customer’s request for support to get back to them about an issue. This object is available in API version 45.0 and later.
-   **[ContactRequestShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contactrequestshare.htm)**
    Represents a list of access levels to a ContactRequest with an explanation of the access level. This object is available in API version 45.0 and later.
-   **[ContactShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contactshare.htm)**
    Represents a list of access levels to a Contact along with an explanation of the access level. For example, if you have access to a record because you own it, the ContactAccessLevel is All and RowCause is Owner.
-   **[ContactSuggestionInsight](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contactsuggestioninsight.htm)**
    Represents a suggestion for a new contact record. Available in API versions 45.0 and later.
-   **[ContactTag](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contacttag.htm)**
    Associates a word or short phrase with a Contact.
-   **[ContentAsset](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contentasset.htm)**
    Represents a Salesforce file that has been converted to an asset file in a custom app in Lightning Experience. Use asset files for org setup and configuration. Asset files can be packaged and referenced by other components. This object is available in API version 38.0 and later.
-   **[ContentBody](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contentbody.htm)**
    Represents the body of a file in Salesforce CRM Content or Salesforce Files. This object is available in API version 40.0 and later.
-   **[ContentDistribution](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contentdistribution.htm)**
    Represents information about sharing a document externally. This object is available in API version 32.0 and later.
-   **[ContentDistributionEventLog](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contentdistributioneventlog.htm)**
    Content Distribution events contain information about content distributions and deliveries to users. This object is available in API version 65.0 and later.
-   **[ContentDistributionView](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contentdistributionview.htm)**
    Represents information about views of a shared document. This read-only object is available in API version 32.0 and later.
-   **[ContentDocument](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contentdocument.htm)**
    Represents a document that was uploaded to a library in Salesforce Files or Salesforce CRM content. This object is available in versions 17.0 and later for Salesforce CRM.This object is available in API version 21.0 and later for Salesforce Files.
-   **[ContentDocumentHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contentdocumenthistory.htm)**
    Represents the history of a document. This object is available in versions 17.0 and later.
-   **[ContentDocumentLink](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contentdocumentlink.htm)**
    Represents the link between a Salesforce CRM Content document, Salesforce file, or ContentNote and where it's shared. A file can be shared with other users, groups, records, and Salesforce CRM Content libraries. This object is available in versions 21.0 and later for Salesforce CRM Content documents and Salesforce Files.
-   **[ContentDocumentListViewMapping](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contentdocumentlistviewmapping.htm)**
    Represents an association between a ListView and a Quip ContentDocument. Applies to Quip file types only. Maintains the mapping between a list view and Quip document when the list view is exported to a newly created Quip document. This object is available in API version 44.0 and later.
-   **[ContentDocumentSubscription](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contentdocumentsubscription.htm)**
    Represents a subscription for a user following or commenting on a file in a library. This object is available in API version 42.0 and later.
-   **[ContentDocLinkEventLog](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contentdoclinkeventlog.htm)**
    Content Document Link events contain sharing information for content documents. This object is available in API version 65.0 and later.
-   **[ContentFolder](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contentfolder.htm)**
    Represents a folder in a content library for adding files. This object is available in API version 34.0 and later.
-   **[ContentFolderItem](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contentfolderitem.htm)**
    Represents a file (ContentDocument) or folder (ContentFolder) that resides in a ContentFolder in a ContentWorkspace. This object is available in API version 35.0 and later.
-   **[ContentFolderLink](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contentfolderlink.htm)**
    Defines the association between a library and its root folder. This object is available in API version 34.0 and later.
-   **[ContentFolderMember](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contentfoldermember.htm)**
    Defines the association between a file and a folder. This object is available in API version 34.0 and later.
-   **[ContentHubItem](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contenthubitem.htm)**
    Represents a file or folder in a Files Connect external data source, such as Microsoft SharePoint or OneDrive for Business. This object is available in API version 33.0 and later.
-   **[ContentHubRepository](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contenthubrepository.htm)**
    Represents a Files Connect external data source such as Microsoft SharePoint or OneDrive for Business. This object is available in API version 33.0 and later.
-   **[ContentNote](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contentnote.htm)**
    Represents a note created with the enhanced note-taking tool, released in Winter ’16. This object is available in API version 32.0 and later.
-   **[ContentNotification](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contentnotification.htm)**
    Represents a notification for a file. This object is available in API version 42.0 and later.
-   **[ContentTagSubscription](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contenttagsubscription.htm)**
    Represents a subscription for a user following a tag on a file. This object is available in API version 42.0 and later.
-   **[ContentTaxonomy](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contenttaxonomy.htm)**
    Represents a content taxonomy, which is used to classify and organize Salesforce CMS content. To create a hierarchy of terms in a content taxonomy, use this object in addition to the ContentTaxonomyTerm, ContentTaxonomyRelatedTerm, and ContentTaxonomyTermRelatedTerm objects. This object is available in API version 63.0 and later.
-   **[ContentTaxonomyRelatedTerm](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contenttaxonomyrelatedterm.htm)**
    Represents the relationship between a term and the content taxonomy to which the term belongs. This object is available in API version 63.0 and later.
-   **[ContentTaxonomyTerm](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contenttaxonomyterm.htm)**
    Represents a term in a content taxonomy. Terms describe what content is or how it's used, and they’re organized in parent-child relationships in the taxonomy hierarchy. This object is available in API version 63.0 and later.
-   **[ContentTaxonomyTermRelatedTerm](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contenttaxonomytermrelatedterm.htm)**
    Represents the relationship between two terms in a content taxonomy. This object is available in API version 63.0 and later.
-   **[ContentTaxonomyTermRelationshipType](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contenttaxonomytermrelationshiptype.htm)**
    Represents the type of relationship between two terms in a content taxonomy. This object is available in API version 63.0 and later.
-   **[ContentTransferEventLog](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contenttransfereventlog.htm)**
    ContentTransferEventLog stores information about content transfer events, such as downloads, uploads, and previews. This information includes events performed on files and attachments to records. This object is available in API version 62.0 and later.
-   **[ContentUserSubscription](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contentusersubscription.htm)**
    Represents a subscription for a user following another user. This object is available in API version 42.0 and later.
-   **[ContentVersion](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contentversion.htm)**
    Represents a specific version of a document in Salesforce CRM content or Salesforce Files. This object is available in versions 17.0 and later for Salesforce CRM content documents. This object is available in versions 20.0 and later for Salesforce Files.
-   **[ContentVersionComment](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contentversioncomment.htm)**
    Represents a comment on a version of a file. This object is available in API version 42.0 and later.
-   **[ContentVersionHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contentversionhistory.htm)**
    Represents the history of a specific version of a document. This object is available in version 17.0 and later.
-   **[ContentVersionRating](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contentversionrating.htm)**
    Represents a rating on a version of a file. This object is available in API version 42.0 and later.
-   **[ContentWorkspace](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contentworkspace.htm)**
    Represents a content library. This object is available in versions 17.0 and later.
-   **[ContentWorkspaceDoc](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contentworkspacedoc.htm)**
    Represents a link between a document and a public library in Salesforce CRM Content. This object is available in versions 17.0 and later.
-   **[ContentWorkspaceMember](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contentworkspacemember.htm)**
    Represents a member of a content library. This object is available in API version 40.0 and later.
-   **[ContentWorkspacePermission](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contentworkspacepermission.htm)**
    Represents a library permission. This object is available in API version 40.0 and later.
-   **[ContentWorkspaceSubscription](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contentworkspacesubscription.htm)**
    Represents a subscription for a user following a library. This object is available in API version 42.0 and later.
-   **[ContextParamMap](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contextparammap.htm)**
    Represents optional context data for a Conversation or a ConversationParticipant. This object is available in API version 57.0 and later.
-   **[Contract](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contract.htm)**
    Represents a contract (a business agreement) associated with an Account.
-   **[ContractContactRole](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contractcontactrole.htm)**
    Represents the role that a Contact plays on a Contract.
-   **[ContractLineItem](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contractlineitem.htm)**
    Represents a product covered by a service contract (customer support agreement). This object is available in API version 18.0 and later.
-   **[ContractLineOutcome](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contractlineoutcome.htm)**
    Represents information on a contract line outcome’s captured data and other related parameters that are used when capturing data. This object is available in API version 58.0 and later.
-   **[ContractLineOutcomeData](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contractlineoutcomedata.htm)**
    Represents the contract line outcome’s captured data. It stores the data that was captured between the contract line outcome’s start date and end date. This object is available in API version 58.0 and later.
-   **[ContractStatus](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contractstatus.htm)**
    Represents the status of a Contract, such as Draft, InApproval, Activated, Terminated, or Expired.
-   **[ContractTag](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contracttag.htm)**
    Associates a word or short phrase with a Contract.
-   **[ConvAnalysisSummary](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_convanalysissummary.htm)**
    Represents the information stored for each run or refresh of Sales Signals. This object is available in API version 63.0 and later.
-   **[ConvAnalysisTopic](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_convanalysistopic.htm)**
    Represents a topic generated from the Sales Signals refresh or run. For example, a product experiencing issues due to high pricing could be a topic identified through the analysis of multiple calls. This object is available in API version 63.0 and later.
-   **[ConvAnalysisTopicEntry](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_convanalysistopicentry.htm)**
    Represents a single entry under the ConvAnalysisTopic object. An entry represents a segment of a video or voice call that is associated with a conversation analysis topic. This object is available in API version 63.0 and later.
-   **[Conversation](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_conversation.htm)**
    Represents a conversation between an end user and an agent. Available in API version 49.0 and later.
-   **[ConversationApiLog](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_conversationapilog.htm)**
    Logs of an API operation on a specific conversation object done using the Conversation Service API. This object is available in API version 63.0 and later.
-   **[ConversationContextEntry](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_conversationcontextentry.htm)**
    Represents the context of a message or an event in the chat history between an agent and a messaging user. This object is available in API version 47.0 and later.
-   **[ConversationChannelDefinition](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_conversationchanneldefinition.htm)**
    Represents a configurable definition of a conversation channel that’s implemented for Interaction Service for Bring Your Own Channel for Messaging and Bring Your Own Channel for CCaaS messaging channels. This object is available in API version 60.0 and later.
-   **[ConversationEntry](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_conversationentry.htm)**
    Represents a message or event in a voice call or messaging session. The schema on this page only applies to conversation entries for legacy chat. Refer to the ConversationEntry (Off-Core) schema in the [Messaging Object Model](https://developer.salesforce.com/docs/service/messaging-object-model/guide/overview.html) guide to see the ConversationEntry schema for Enhanced Channels. This object is available in API version 43.0 and later.
-   **[ConversationParticipant](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_conversationparticipant.htm)**
    Represents an active participant in a conversation. A new ConversationParticipant record is created each time a participant joins a conversation. This object is available in API version 49.0 and later.
-   **[ConvIntelligenceSignalRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_convintelligencesignalrule.htm)**
    Represents a conversation intelligence signal rule. The rule triggers actions based on real-time intelligence signals from your telephony system or keywords mentioned by support reps or customers. The rule contains a set of conditions (subrules) and the filter logic used to evaluate those conditions to determine whether to trigger actions. This object is available in API version 62.0 and later.
-   **[ConvIntelligenceSignalSubRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_convintelligencesignalsubrule.htm)**
    Represents a condition (subrule) within a conversation intelligence signal rule. This object is available in API version 62.0 and later.
-   **[ConvMessageSendRequest](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_convmessagesendrequest.htm)**
    Represents a request to send a template-based messaging component to a series of messaging users in an enhanced messaging channel or Messaging for In-App. This object is available in API version 60.0 and later.
-   **[ConversationVendorInfo](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_conversationvendorinfo.htm)**
    This setup object connects the partner vendor system to the Service Cloud feature. For example, for Service Cloud Voice, this object contains information about the partner telephony or Contact Center as a Service (CCaaS) partner system. For Bring Your Own Channel for Messaging this object contains information about the partner messaging system, and for Bring Your Own Channel for CCaaS, this object contains information about the CCaaS partner system. This object is available in API version 52.0 and later.
-   **[CorsWhitelistEntry](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_corswhitelistentry.htm)**
    Represents an entry in the cross-origin resource sharing (CORS) allowlist. Origins included in the allowlist can request REST resources from that Salesforce org.
-   **[Coupon](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_coupon.htm)**
    A coupon associated with a promotion. This object is available in API version 54.0 and later.
-   **[CouponCodeRedemption](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_couponcoderedemption.htm)**
    Tracks each coupon code redemption. This object is available in API version 58.0 and later.
-   **[CreditMemo](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_creditmemo.htm)**
    Represents a document that is used to reduce the amount that a buyer owes a seller under the terms of an earlier invoice. This object is available in API version 48.0 and later.
-   **[CreditMemoAddressGroup](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_creditmemoaddressgroup.htm)**
    Stores the buyer's address information, which is used to determine the amount of tax to credit to a buyer when a credit memo is issued. This object is available in API version 55.0 and later.
-   **[CreditMemoInvApplication](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_creditmemoinvapplication.htm)**
    Represents an amount applied from a credit memo to an invoice. This object is available in API version 48.0 and later.
-   **[CreditMemoLine](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_creditmemoline.htm)**
    Represents product, service, adjustment, or tax line items that were included in a credit memo. This object is available in API version 48.0 and later.
-   **[Crisis](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_crisis.htm)**
    Represents a major crisis event that affects an Employee in an InternalOrganizationUnit. This object is available in API version 48.0 and later. In API version 49.0 and later, this object supports reports, criteria-based sharing rules, and history tracking, plus you can exclude individual fields from custom page layouts.
-   **[CronJobDetail](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_cronjobdetail.htm)**
    Contains details about the associated scheduled job, such as the job’s name and type. This object is available in API version 29.0 and later.
-   **[CronTrigger](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_crontrigger.htm)**
    Contains schedule information for a scheduled job. CronTrigger is similar to a cron job on UNIX systems. This object is available in API version 17.0 and later.
-   **[CryptoProdCatgWalletGroup](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_cryptoprodcatgwalletgroup.htm)**
    Specifies if CryptoWalletGroup is in the allowlist or airdrop for the ProductCategory. A custom object between ProductCategory and CryptoWalletGroup adding the CryptoWalletGroup to allowlist or airdrop. This object is available in API version 58.0 and later.
-   **[CspTrustedSite](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_csptrustedsite.htm)**
    Represents a trusted URL. For each CspTrustedSite, you can specify Content Security Policy (CSP) directives and permissions policy directives. Each CSP directive allows Lightning components, third-party APIs, and WebSocket connections to access a resource type from the trusted URL. If the Permissions-Policy HTTP header is enabled, each permissions policy directive grants the trusted URL access to a browser feature. In API version 58.0 and earlier, CspTrustedSite included only CSP directives and was referred to as CSP Trusted Sites in Salesforce Setup. Available in API version 39.0 and later.
-   **[CspViolationEventLog](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_cspviolationeventlog.htm)**
    CSP violation events capture details about blocked resource requests from Lightning Experience pages based on your content security policy (CSP). This object is available in API version 63.0 and later.
-   **[CurrencyType](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_currencytype.htm)**
    Represents the currencies used by an organization for which the multicurrency feature is enabled.
-   **[CustExpIntlTransfSetup](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_custexpintltransfsetup.htm)**
    Stores information for different data sources that are processed for customer insights. This object is available in API version 65.0 and later.
-   **[CustomBrand](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_custombrand.htm)**
    Represents a custom branding and color scheme. This object is available in API version 28.0 and later.
-   **[CustomBrandAsset](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_custombrandasset.htm)**
    Represents a branding element in a custom branding scheme. For example, a color, logo image, header image, or footer text. A CustomBrandAsset can apply to an Experience Cloud site or to an org using the Salesforce mobile app. This object is available in API version 28.0 and later.
-   **[CustomFieldDisplayValue](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_customfielddisplayvalue.htm)**
    Stores variation details for the product attribute item view. This object is available in API version 63.0 and later.
-   **[CustomHelpMenuItem](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_customhelpmenuitem.htm)**
    Represents the items within a section of the Lightning Experience help menu that the admin added to display custom, org-specific help resources. This object is available in API version 44.0 and later.
-   **[CustomHelpMenuSection](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_customhelpmenusection.htm)**
    Represents a section of the Lightning Experience help menu that the admin added to display custom, org-specific help resources. This object is available in API version 44.0 and later.
-   **[CustomHttpHeader](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_customhttpheader.htm)**
    Represents a custom HTTP header that provides context information from Salesforce such as region, org details, or the role of the person viewing the external object. This object is available in API version 43.0 and later.
-   **[CustomMsgChannel](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_custommsgchannel.htm)**
    Represents a custom conversation channel and stores event-driven Messaging settings. Custom conversation channels are implemented for Bring Your Own Channel for Messaging and Bring Your Own Channel for CCaaS Messaging channels. This object is available in API version 63.0 and later.
-   **[CustomNotificationType](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_customnotificationtype.htm)**
    Stores information about custom notification types. This object is available in API version 47.0 and later.
-   **[CustomPermission](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_custompermission.htm)**
    Represents a permission created to control access to a custom process or app, such as sending email. This object is available in API version 31.0 and later.
-   **[CustomPermissionDependency](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_custompermissiondependency.htm)**
    Represents the dependency between two custom permissions when one custom permission requires that you enable another custom permission. This object is available in API version 32.0 and later.
-   **[Customer](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_customer.htm)**
    Represents the customer role of an individual with respect to a particular company or organization. This object is available in API version 53.0 and later.
-   **[DandBCompany](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_dandbcompany.htm)**
    Represents a Dun & Bradstreet® company record, which is associated with an account added from Data.com. This object is available in API version 25.0 and later.
-   **[Dashboard](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_dashboard.htm)**
    Represents a dashboard, which shows data from custom reports as visual components. Access is read-only. This object is available in API version 20.0 and later.
-   **[DashboardComponent](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_dashboardcomponent.htm)**
    Represents a dashboard component, which can be a chart, metric, table, or gauge on a dashboard. Access is read-only. This object is available in API version 21.0 and later.
-   **[DashboardTag](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_dashboardtag.htm)**
    Associates a word or short phrase with a Dashboard. This object is available in API version 20.0 and later.
-   **[DataAssessmentFieldMetric](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_dataassessmentfieldmetric.htm)**
    Represents summary statistics for matched, blank, and differing fields in account records of an org compared to records in Data.com. This object is available in API version 37.0 and later.
-   **[DataAssessmentMetric](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_dataassessmentmetric.htm)**
    Represents a summary of statistics for fields matched and unmatched in your account records with Data.com account records. This object is available in API version 37.0 and later.
-   **[DataAssessmentValueMetric](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_dataassessmentvaluemetric.htm)**
    Summarizes the number of fields matched for your account records with Data.com account records.This object is available in API version 37.0 and later.
-   **[DatabaseSaveEventLog](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_databasesaveeventlog.htm)**
    Database Save events track when records are created,updated, or deleted This object is available in API version 64.0 and later.
-   **[DatacloudCompany](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_datacloudcompany.htm)**
    Represents the fields for Data.com company records. This object is available in API version 30.0 or later.
-   **[DatacloudContact](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_datacloudcontact.htm)**
    The fields and properties for Data.com contact records. This object is available in API version 30.0 or later.
-   **[DatacloudDandBCompany](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_dataclouddandbcompany.htm)**
    Represents a set of read-only fields that are used to return D&B company data from Data.com API calls. This object is available in API version 30.0 or later.
-   **[DatacloudOwnedEntity](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_datacloudownedentity.htm)**
    Represents fields in the DatacloudOwnedEntity object. The DatacloudOwnedEntity object tracks user-purchased records. This object is available in API version 30.0 or later.
-   **[DatacloudPurchaseUsage](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_datacloudpurchaseusage.htm)**
    Represents an object used to identify and track Data.com record purchases. This object is available in API version 30.0 or later.
-   **[DataDetectJobObjectSession](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_datadetectjobobjectsession.htm)**
    Represents an object-specific job session that's created whenever a DataDetect scan policy job session runs on a scan policy object. This object is available in API version 63.0 and later.
-   **[DataDetectJobSession](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_datadetectjobsession.htm)**
    Represents a run of a DataDetect scan policy that's triggered manually. This object is available in API version 63.0 and later.
-   **[DataDetectPolicy](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_datadetectpolicy.htm)**
    Represents a set of parameters that specifies the types of sensitive data to be searched for in a data scan. DataDetect scan policies can also apply filters to a data scan, and select what specific objects and fields are to be scanned. This object is available in API version 60.0 and later.
-   **[DataDetectPolicyObject](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_datadetectpolicyobject.htm)**
    Represents an object of the DataDetect scan policy to be scanned. This object is available in API version 62.0 and later.
-   **[DataDetectScanResult](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_datadetectscanresult.htm)**
    Represents the results of a DataDetect scan policy data scan. This object is available in API version 63.0 and later.
-   **[DataDetectPolicyObjField](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_datadetectpolicyobjfield.htm)**
    Represents an object field of the DataDetect scan policy object to be scanned. This object is available in API version 64.0 and later.
-   **[DataDetectPolicySnapshot](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_datadetectpolicysnapshot.htm)**
    Represents the snapshot of a DataDetect scan policy and its components retrieved during a job session. This object is available in API version 64.0 and later.
-   **[DataDetPlcyDataSrchExps](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_datadetplcydatasrchexps.htm)**
    Represents data search expressions for scanning DataDetect scan policies based on Java regex. This object is available in API version 64.0 and later.
-   **[DataDetPlcyMdatScanCrit](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_datadetplcymdatscancrit.htm)**
    Represents inclusion and exclusion criteria that filter what DataDetect scan policy object fields are to be scanned based on metadata tags. This object is available in API version 64.0 and later.
-   **[DataDetPlcySstvDataCatg](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_datadetplcysstvdatacatg.htm)**
    Represents the sensitive data categories that the DataDetect scan policy is required to scan. This object is available in API version 64.0 and later.
-   **[DataEncryptionKey](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_dataencryptionkey.htm)**
    The DataEncryptionKey object is part of the Bring Your Own Key (BYOK) feature, which allows users to upload a data encryption key (DEK) using a public key generated by the Salesforce Shield Key Management Service (KMS). Customers create their own DEKs and upload them to Salesforce. Users access this entity via the API to list DEK keys for auditing purposes. They can also programmatically use this object to create the certificate and to upload key material. This object is available in API version 63.0 and later.
-   **[DataIntegrationRecordPurchasePermission](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_dataintegrationrecordpurchasepermission.htm)**
    Indicates Lightning Data purchase credits that a Salesforce admin has granted to users.
-   **[DataKitDeployEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_datakitdeployevent.htm)**
    Represents a data kit deployment event that notifies subscribers of the status of the data kit component deployment. This object is available in API version 61.0 or later.
-   **[DataKitDeploymentLog](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_datakitdeploymentlog.htm)**
    Represents the log details of a data kit component deployment. This object is available in API version 61.0 or later.
-   **[DatasetExport](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_datasetexport.htm)**
    Represents a dataset exported from CRM Analytics. When a dataset is exported, the data is converted into a .csv file and the schema is stored in a separate JSON file. These files are stored in two objects: DatasetExport and DatasetExportPart. DatasetExport acts as the header and includes the JSON schema.
-   **[DatasetExportPart](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_datasetexportpart.htm)**
    Represents a dataset exported from CRM Analytics. When a dataset is exported, the data is converted into a .csv file and the schema is stored in a separate JSON file. These files are stored in two objects: DatasetExport and DatasetExportPart. DatasetExportPart contains parts of the .csv file.
-   **[DataMaskCustomValueLibrary](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_datamaskcustomvaluelibrary.htm)**
    Represents a set of user-inputted values in a custom library in Data Mask. This object is available in API version 64.0 and later.
-   **[DataStatistics](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_datastatistics.htm)**
    For internal use only.
-   **[DataUseLegalBasis](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_datauselegalbasis.htm)**
    Represents the legal basis for contacting a customer, such as billing or contract. This object is available in API version 45.0 and later.
-   **[DataUsePurpose](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_datausepurpose.htm)**
    Represents the reason for contacting a prospect or customer, such as for billing, marketing, or surveys. This object is available in API version 45.0 and later.
-   **[DataWeaveResource](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_dataweaveresource.htm)**
    Represents the DataWeaveScriptResource class that is generated for all DataWeave scripts. This object is available in API version 58.0 and later.
-   **[DatedConversionRate](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_datedconversionrate.htm)**
    Represents the dated exchange rates used by an organization for which the multicurrency and the effective dated currency features are enabled.
-   **[DealIndirectPartner](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_dealindirectpartner.htm)**
    Represents an indirect partner’s involvement in a deal. This object is available in API version 63.0 and later.
-   **[DeclinedEventRelation](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_declinedeventrelation.htm)**
    Represents event participants (invitees or attendees) with the status Declined for a given event. This object is available in API versions 29.0 and later.
-   **[DelegatedAccount](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_delegatedaccount.htm)**
    Represents the external managed account. This object is available in API version 49.0 and later.
-   **[DeleteEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_deleteevent.htm)**
    Represents a record that has been soft deleted. Search on this object was available in API version 48.0, then removed in API version 50.0.
-   **[DeliveryEstimationSetup](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_deliveryestimationsetup.htm)**
    Shows the configuration options for the commerce delivery service offered through a web store or sales channel. Includes settings such as delivery location group, channel, fulfillment types, and default fulfillment time. This object is available in API version 61.0 and later.
-   **[DigitalSignature](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_digitalsignature.htm)**
    Represents a signature captured on a service report in field service.
-   **[DigitalWallet](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_digitalwallet.htm)**
    Represents a customer’s digital wallet service. Salesforce Payments can use a digital wallet as a payment source when processing payments through a payment gateway. This object is available in API version 48.0 and later.
-   **[DirectMessage](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_directmessage.htm)**
    Represents a direct message conversation between multiple users in Chatter. This object is available in API version 38.0 and later.
-   **[Division](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_division.htm)**
    A logical segment of your organization's data. For example, if your company is organized into different business units, you could create a division for each business unit, such as “North America,” “Healthcare,” or “Consulting.” Available only if the organization has the Division permission enabled.
-   **[DivisionLocalization](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_divisionlocalization.htm)**
    When the Translation Workbench is enabled for your organization, the DivisionLocalization object provides the translation of the label for a division.
-   **[DocAtchDownloadEventLog](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_docatchdownloadeventlog.htm)**
    Document Attachment Downloads events contain details of document and attachment downloads. This object is available in API version 65.0 and later.
-   **[Document](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_document.htm)**
    Represents a file that a user has uploaded. Unlike Attachment records, documents are not attached to a parent object.
-   **[DocumentAttachmentMap](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_documentattachmentmap.htm)**
    Maps the relationship between an EmailTemplate and its attachment, which is stored as a Document.
-   **[DocumentRecipient](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_documentrecipient.htm)**
    Connects a Service Report to a Digital Signature. This object is available in API version 55.0 and later.
-   **[DocumentTag](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_documenttag.htm)**
    Associates a word or short phrase with a Document.
-   **[Domain](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_domain.htm)**
    Read-only object that represents a custom Web address assigned to a site in your organization. This object is available in API version 26.0 and later.
-   **[DomainSite](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_domainsite.htm)**
    Read-only junction object that joins the Site and Domain objects. This object is available in API version 26.0 and later.
-   **[DsarPolicy](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_dsarpolicy.htm)**
    Represents a Data Subject Access Request (DSAR) policy created in the Privacy Center managed package. DSAR policies anonymize or transfer personal data from your org at your customer’s request. This object is available in API version 50.0 and later.
-   **[DsarPolicyLog](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_dsarpolicylog.htm)**
    Represents the history of Data Subject Access Request (DSAR) policy execution requests. This log records the status and results of executed DSAR policies for a customer. This object is available in API version 50.0 and later.
-   **[DuplicateJob](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_duplicatejob.htm)**
    Represents an instance of a job that identifies duplicates among existing records in the system.
-   **[DuplicateJobDefinition](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_duplicatejobdefinition.htm)**
    Setup object defining a job that identifies duplicate record items globally.
-   **[DuplicateJobMatchingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_duplicatejobmatchingrule.htm)**
    Represents a MatchingRule to be used with a DuplicateJob sharing the corresponding DuplicateJobMatchingRuleDefinition.
-   **[DuplicateJobMatchingRuleDefinition](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_duplicatejobmatchingruledefinition.htm)**
    Setup object specifying a MatchingRule to use with DuplicateJob instances that share a DuplicateJobDefinition.
-   **[DuplicateRecordItem](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_duplicaterecorditem.htm)**
    Represents a record that’s been identified as a duplicate. DuplicateRecordItems are included in a DuplicateRecordSet, which are processed in duplicate jobs. Use this object to create custom report types for duplicates.
-   **[DuplicateRecordSet](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_duplicaterecordset.htm)**
    Represents a group of records that have been identified as duplicates. Each duplicate record set contains one or more duplicate record items. Use this object to create custom report types and view the results of duplicate jobs.
-   **[DuplicateRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_duplicaterule.htm)**
    Represents a duplicate rule for detecting duplicate records.
-   **[DynamicDataCapture](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_dynamicdatacapture.htm)**
    DynamicDataCapture is a junction object that adds a Form tab to Work Order Overview, and to the related list of a work order, work order line item, or service appointment in the Field Service mobile app. This object is available in API version 62.0 and later.
-   **[ElectronicMediaGroup](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_electronicmediagroup.htm)**
    Represents the type of media that you can associate with a product or category.This object is available in API version 49.0 and later.
-   **[ElectronicMediaUse](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_electronicmediause.htm)**
    Represents the usage of media. This object is available in API version 49.0 and later.
-   **[EmailContent](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_emailcontent.htm)**
    Represents a marketing email asset for use with Account Engagement. This object is available in API version 50.0 and later.
-   **[EmailDomainFilter](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_emaildomainfilter.htm)**
    Represents a filter that determines whether an email relay is restricted to a specific list of domains. This object is available in API version 43.0 and later.
-   **[EmailDomainKey](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_emaildomainkey.htm)**
    Represents a domain key for an organization’s domain, used to authenticate outbound email that Salesforce sends on the organization’s behalf. This object is available in API version 28.0 and later.
-   **[EmailInsight](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_emailinsight.htm)**
    Represents an insight generated from an email interaction. EmailInsights acts as a central place to store various types of insights related to email messages. The insights stored include status, type, and time of generation. Only certain types of insights can be created based on a pre-configured list of insight types. This object is available in API version 63.0 and later.
-   **[EmailInsightAction](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_emailinsightaction.htm)**
    Represents the actions that have been taken, or could be taken, in relation to email insights. It logs different types of actions and associated metadata, helping to track and manage the activities and decisions made based on email insights. This object is available in API version 63.0 and later.
-   **[EmailMessage](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_emailmessage.htm)**
    Represents an email in Salesforce.
-   **[EmailMessageMigration](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_emailmessagemigration.htm)**
    For internal use only.
-   **[EmailMessageRelation](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_emailmessagerelation.htm)**
    Represents the relationship between an email and contacts, leads, and users. This object is available in API version 37.0 and later.
-   **[EmailRelay](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_emailrelay.htm)**
    Represents the configuration for sending an email relay. An email relay routes email sent from Salesforce through your company’s email servers. This object is available in API version 43.0 and later.
-   **[EmailRoutingAddress](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_emailroutingaddress.htm)**
    An email address used for Email-to-Case. Email routing addresses store a unique email services address provided by Salesforce and configuration options for emails received by this address.
-   **[EmailServicesAddress](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_emailservicesaddress.htm)**
    An email service address.
-   **[EmailServicesFunction](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_emailservicesfunction.htm)**
    An email service.
-   **[EmailStatus](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_emailstatus.htm)**
    Represents the status of email sent.
-   **[EmailTemplate](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_emailtemplate.htm)**
    Represents a template for an email, mass email, list email, or Sales Engagement email. Supported in first-generation managed packages only.
-   **[EmailTemplateMonthlyMetric](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_emailtemplatemonthlymetric.htm)**
    Represents the monthly engagement metrics for an email template. This object is available in API version 53.0 and later.
-   **[EmbeddedServiceDetail](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_embeddedservicedetail.htm)**
    Represents a metadata catalog object that exposes fields from the underlying Embedded Service setup objects defined in each EmbeddedServiceConfig deployment for guest users. Guest users don’t have direct access to the Embedded Service setup objects. Available in API version 39.0 and later.
-   **[EmbeddedServiceLabel](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_embeddedservicelabel.htm)**
    Represents a customized label in Embedded Chat or embedded Appointment Management.This object is available in API version 44.0 and later.
-   **[Employee](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_employee.htm)**
    Represents an employee within a company or organization. This object is available in API version 48.0 and later. In API version 49.0 and later, this object supports reports, criteria-based sharing rules, and history tracking, plus you can exclude individual fields from custom page layouts.
-   **[Employee2](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_employee2.htm)**
    Represents an employee within a company or an organization. This object is available in API version 62.0 and later.
-   **[EmployeeCrisisAssessment](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_employeecrisisassessment.htm)**
    Represents a crisis assessment of an Employee. This object is available in API version 48.0 and later. In API version 49.0 and later, this object supports reports, criteria-based sharing rules, and history tracking, plus you can exclude individual fields from custom page layouts.
-   **[EmpUserProvisioningProcess](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_empuserprovisioningprocess.htm)**
    Represents an employee-user provisioning process. This object is available in API version 52.0 and later.
-   **[EmpUserProvisionProcessErr](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_empuserprovisionprocesserr.htm)**
    Represents an employee-user provisioning process error. This object is available in API version 52.0 and later.
-   **[EnablementMeasureDefinition](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_enablementmeasuredefinition.htm)**
    Represents an Enablement measure, which specifies the job-related activity that a user performs to complete a milestone or outcome in an Enablement program. A measure identifies a source object and optional related objects, with optional field filters and filter logic, for tracking the activity. This object also represents Enablement measure information in Metadata API. This object is available in API version 56.0 and later.
-   **[EnablementProgram](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_enablementprogram.htm)**
    Represents an Enablement program, which includes exercises and measurable milestones to help users such as sales reps achieve specific outcomes related to your company’s revenue goals. This object is available in API version 56.0 and later.
-   **[EnablementProgramDefinition](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_enablementprogramdefinition.htm)**
    Represents Enablement program information in Metadata API. This object is available in API version 61.0 and later.
-   **[EnblMeasureObjectDefinition](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_enblmeasureobjectdefinition.htm)**
    Represents the criteria for an object that tracks the job-related activity for an Enablement measure in an Enablement program. A separate EnblMeasureObjectDefinition is used for a measure's source object and each optional related object. This object is available in API version 56.0 and later.
-   **[EnblPgmTaskMeasureProgress](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_enblpgmtaskmeasureprogress.htm)**
    Represents a user’s progress through the object and field requirements that an Enablement measure defines for an outcome or milestone in an Enablement program. This object is available in API version 61.0 and later.
-   **[EnblProgramSection](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_enblprogramsection.htm)**
    Represents an optional section in an Enablement program. A section can include other program items, such as milestones and exercises. This object is available in API version 60.0 and later.
-   **[EnblProgramTaskDefinition](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_enblprogramtaskdefinition.htm)**
    Represents an outcome, a milestone, or an exercise in an Enablement program. A program task is also known as a program item. This object is available in API version 60.0 and later.
-   **[EnblProgramTaskMeasure](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_enblprogramtaskmeasure.htm)**
    Represents the connection between an Enablement measure and a specific milestone or outcome in an Enablement program. This object is available in API version 61.0 and later.
-   **[EnblProgramTaskProgress](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_enblprogramtaskprogress.htm)**
    Represents a user’s progress towards completing an outcome, a milestone, or an exercise in an Enablement program. This object is available in API version 60.0 and later.
-   **[EnblProgramTaskSubCategory](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_enblprogramtasksubcategory.htm)**
    Represents a custom exercise type that an Enablement admin adds to an Enablement program in Program Builder. A custom exercise type also requires a corresponding EnblProgramTaskDefinition record for Program Builder and corresponding LearningItem and LearningItemType records for when users take the exercise in the Guidance Center. This object is available in API version 62.0 and later.
-   **[EngagementChannelType](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_engagementchanneltype.htm)**
    Represents a channel through which a customer can be reached for communication. This object is available in API version 48.0 and later.
-   **[EngagementSignal](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_engagementsignal.htm)**
    Represents data about an individual’s engagement action, such as a web click, an email response, or a PDF download. This object is available in API version 62.0 and later.
-   **[EngagementSignalCmpndMetric](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_engagementsignalcmpndmetric.htm)**
    Represents a rate metric that measures the ratio between two engagement signal metrics, such as product orders and product views to calculate a conversion rate, or email clicks and email opens to determine a click-through rate. Use this object to create complex measurements for A/B testing and web experimentation. This object is available in API version 62.0 and later.
-   **[EngagementSignalMetric](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_engagementsignalmetric.htm)**
    Represents a measurable quantity that’s derived from an engagement signal, such as the sum of revenue or a count of clicks. Use this object to track user engagement for A/B tests, machine learning model training, and attribution configurations. This object is available in API version 62.0 and later.
-   **[EnhancedLetterhead](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_enhancedletterhead.htm)**
    Represents an enhanced letterhead that can be associated with a Lightning email template that doesn’t use the Salesforce Merge Language (SML). This object is available in API version 46.0 and later.
-   **[Entitlement](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_entitlement.htm)**
    Represents the customer support an account or contact is eligible to receive. This object is available in API version 18.0 and later. Entitlements may be based on an asset, product, or service contract.
-   **[EntitlementContact](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_entitlementcontact.htm)**
    Represents a Contact eligible to receive customer support via an Entitlement. This object is available in API version 18.0 and later.
-   **[EntitlementTemplate](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_entitlementtemplate.htm)**
    Represents predefined terms of customer support for a product (Product2). This object is available in API version 18.0 and later.
-   **[EntityHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_entityhistory.htm)**
    Represents historical information about an object’s changed field values. This object is only available to users with the “View All Data” permission. This object is unavailable beginning with API version 8.0. Use the object-specific [History](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_history.xml "HTML (New Window)")objects instead.
-   **[EntityMilestone](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_entitymilestone.htm)**
    Represents a required step in a customer support process on a work order. The Salesforce user interface uses the term “object milestone. This object is available in API version 37.0 and later.
-   **[EntitySubscription](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_entitysubscription.htm)**
    Represents a subscription for a user following a record or another user. This object is available in API version 34.0 and later.
-   **[EnvironmentHubMember](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_environmenthubmember.htm)**
    Represents a member organization in the Environment Hub. This object is available in API version 29.0 and later.
-   **[Event](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_event.htm)**
    Represents an event in the calendar. In the user interface, event and task records are collectively referred to as activities.
-   **[EventLogFile](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile.htm)**
    Represents event log files for event monitoring. The event monitoring product gathers information about your Salesforce org’s operational events, which you can use to analyze usage trends and user behavior. This object is available in API version 32.0 and later. The Interval and Sequence fields are available only in API version 37.0 and later.
-   **[EventRelation](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventattendee.htm)**
    Represents a person (a user, lead, or contact) or a resource (such as a conference room) invited to an event. This object lets you add or remove invitees from an event and use the API to manage invitees’ responses to invitations. If Shared Activities is enabled, EventRelation can also represent other objects that are related to an event. EventRelation does not support triggers, workflow, or data validation rules.
-   **[EventBusSubscriber](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventbussubscriber.htm)**
    Represents a trigger, process, or flow that’s subscribed to a platform event or a change data capture event. Doesn’t include CometD or Pub/Sub API subscribers.
-   **[EventRelayConfig](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventrelayconfig.htm)**
    Represents the configuration of an event relay, which relays platform events and change data capture events from Salesforce to Amazon EventBridge. This object is available in API version 56.0 and later.
-   **[EventRelayFeedback](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventrelayfeedback.htm)**
    Represents execution state information about an event relay from Salesforce to Amazon EventBridge for platform events and change data capture events. Query this object to get information such as the event relay status and any error message. This object is available in API version 56.0 and later.
-   **[EventStagedInviteeEmail](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventstagedinviteeemail.htm)**
    Represents the relationship between an event and an email address invited to the event that doesn’t match to a user, contact, or lead record. Data about the unmatched email address is represented in StagedInviteeEmail. This object represents event-related details, such as the invitee's attendance response to the event. This object is available in API version 66.0 and later.
-   **[EventTag](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventtag.htm)**
    Associates a word or short phrase with an Event.
-   **[EventWhoRelation](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventwhorelation.htm)**
    Represents the relationship between an event and a lead or contacts. This derived object is a filtered version of the [EventRelation](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventattendee.htm "Represents a person (a user, lead, or contact) or a resource (such as a conference room) invited to an event. This object lets you add or remove invitees from an event and use the API to manage invitees’ responses to invitations. If Shared Activities is enabled, EventRelation can also represent other objects that are related to an event. EventRelation does not support triggers, workflow, or data validation rules.") object; that is, IsParent is true and IsWhat is false. It doesn’t represent relationships to invitees or to accounts, opportunities, or other objects. This object is available in API versions 29.0 and later.
-   **[Expense](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_expense.htm)**
    Represents an expense linked to a work order. Service resource technicians can log expenses, such as tools or travel costs. This object is available in API version 49.0 and later.
-   **[ExpenseReport](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_expensereport.htm)**
    Represents a report that summarizes expenses. This object is available in API version 50.0 and later.
-   **[ExpenseReportEntry](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_expensereportentry.htm)**
    Represents an entry in an expense report. This object is available in API version 50.0 and later.
-   **[ExpressionFilter](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_expressionfilter.htm)**
    Represents a logical expression that’s used to control the execution of macro instructions. This object is available in API version 46.0 and later.
-   **[ExpressionFilterCriteria](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_expressionfiltercriteria.htm)**
    Represents a condition in an expression that’s used to control the execution of macro instructions. This object is available in API version 46.0 and later.
-   **[ExpressionSetConstraintObj](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_expressionsetconstraintobj.htm)**
    Represents the association between a Product object and the constraint model tags defined in a given constraint model. This object is available in API version 63.0 and later.
-   **[ExtConvParticipantIntegDef](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_extconvparticipantintegdef.htm)**
    Represents the integration configuration for external conversation participants, used for communication between Salesforce and external messaging platforms. This object is available in API version 66.0 and later.
-   **[ExtDataShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_extdatashare.htm)**
    Represents a data share, which is a collection of Data Cloud objects that can be shared with other Data Cloud orgs or third-party partners. This object is available in API version 56.0 and later.
-   **[ExternalAccountHierarchy](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_externalaccounthierarchy.htm)**
    Represents the external account hierarchy, which works like a role-based hierarchy. Use ExternalAccountHierarchy to allow partner and customer users to share data with other external accounts in their hierarchy.This object is available in API version 49.0 and later.
-   **[ExternalAccountHierarchyHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_externalaccounthierarchyhistory.htm)**
    Represents the history of changes to values in the fields of an external account hierarchy. This object is available in API version 50.0 and later.
-   **[ExternalClientApplication](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_externalclientapplication.htm)**
    For internal use only.
-   **[ExternalDataSource](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_externaldatasource.htm)**
    Represents an external data source, which defines connection details for integration with data and content that are stored outside the Salesforce org. This object is available in API version 27.0 and later.
-   **[ExternalDataUserAuth](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_externaldatauserauth.htm)**
    Stores authentication settings for a Salesforce user to access an external system. The external system must be defined in an external data source or a named credential that’s configured to use per-user authentication. This object is available in API version 27.0 and later.
-   **[ExternalEncryptionRootKey](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_externalencryptionrootkey.htm)**
    Represents metadata about root keys stored in third-party key stores that are used to generate and secure keys that encrypt Salesforce data. This object is available in API version 58.0 and later.
-   **[ExternalEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_externalevent.htm)**
    Holds native iOS or Android calendar event details for the Salesforce Today feature in the Salesforce mobile app. This object is available in API version 35.0 and later.
-   **[ExternalEventMapping](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_externaleventmapping.htm)**
    Holds native iOS or Android calendar event details for the Salesforce Today feature in the Salesforce mobile app. This object is available in API version 35.0 and later.
-   **[ExternalSocialAccount](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_externalsocialaccount.htm)**
    Represents a managed social media account on a social network such as Facebook or Twitter. This object is available in API version 29.0 and later.
-   **[ExtKnowledgeConnector](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_extknowledgeconnector.htm)**
    Represents a connector to a third-party knowledge source for Unified Knowledge. This object is available in API version 60.0 and later.
-   **[ExtlClntAppOauthPlcyCnfg](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_extlclntappoauthplcycnfg.htm)**
    For internal use only.
-   **[ExtlClntAppOauthSettings](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_extlclntappoauthsettings.htm)**
    For internal use only.
-   **[ExtlClntAppPlcyCnfg](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_extlclntappplcycnfg.htm)**
    For internal use only.
-   **[ExtlRecShrCnct](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_extlrecshrcnct.htm)**
    Represents authentication data to make outbound calls to and inbound calls from an external system to publish events for Partner Connect. This object is available in API version 62.0 and later.
-   **[ExtlRecShrCnctAccnt](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_extlrecshrcnctaccnt.htm)**
    Represents an association between an account and an external record share connection for Partner Connect. This object is available in API version 62.0 and later.
-   **[ExtlRecShrField](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_extlrecshrfield.htm)**
    Represents an imported, exported, or updated external record share field for Partner Connect. This object is available in API version 63.0 and later.
-   **[ExtlRecShrFieldMap](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_extlrecshrfieldmap.htm)**
    Represents the external record share field mapping between the sender and receiver for Partner Connect. This object is available in API version 62.0 and later.
-   **[ExtlRecShrLead](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_extlrecshrlead.htm)**
    Represents the Lead record of a vendor org if you’re a partner. If you’re a vendor for Partner Connect, this object represents a partner org. This object is available in API version 62.0 and later.
-   **[ExtlRecShrObject](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_extlrecshrobject.htm)**
    Represents a shared object for Partner Connect. This object is available in API version 62.0 and later.
-   **[ExtlRecShrOpportunity](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_extlrecshropportunity.htm)**
    Represents the opportunity for Partner Connect in the vendor org if you’re a partner and the partner org if you’re the vendor. This object is available in API version 62.0 and later.
-   **[ExtlRecShrPcklstOptn](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_extlrecshrpcklstoptn.htm)**
    Represents a picklist option of an external record share picklist field shared between a partner and vendor for Partner Connect. This object is available in API version 62.0 and later.
-   **[ExtlRecShrPicklistMap](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_extlrecshrpicklistmap.htm)**
    Represents the external record share picklist field mapping between the partner and vendor system for Partner Connect. This object is available in API version 62.0 and later.
-   **[ExtlRecShrRecordMap](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_extlrecshrrecordmap.htm)**
    Represents the lead or opportunity being mapped between a partner and vendor for Partner Connect. This object is available in API version 62.0 and later.
-   **[FeedAttachment](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_feedattachment.htm)**
    Represents an attachment to a feed item, such as a file attachment or a link. Use FeedAttachment to add various attachments to one feed item. This object is available in API version 36.0 and later.
-   **[FeedComment](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_feedcomment.htm)**
    Represents a comment added to a feed by a user.This object is available in API version 18.0 and later.
-   **[FeedItem](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_feeditem.htm)**
    FeedItem represents an entry in the feed, such as changes in a record feed, including text posts, link posts, and content posts. This object is available in API version 21.0 and later. This object replaces FeedPost.
-   **[FeedLike](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_feedlike.htm)**
    Indicates that a user has liked a feed item. This object is available in API version 21.0 and later.
-   **[FeedPollChoice](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_feedpollchoice.htm)**
    Shows the choices for a poll posted in the feed. This object is available in API version 29.0 and later.
-   **[FeedPollVote](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_feedpollvote.htm)**
    Shows how users voted on a poll posted in the feed. This object is available in API version 29.0 and later.
-   **[FeedPost](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_feedpost.htm)**
    FeedPost represents the following types of changes in a record feed, such as AccountFeed: text posts, link posts, and content posts. This object is available in API version 18.0 through 21.0. FeedPost is no longer available in later versions. Starting with API version 21.0, use FeedItem to represent text posts, link posts, and content posts in feeds.
-   **[FeedRevision](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_feedrevision.htm)**
    Holds the revision history of a specific feed item or comment, including a list of attributes that changed for each revision. This object is available in API version 34.0 and later.
-   **[feedSignal](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_feedsignal.htm)**
    Attach feed signals, like UpDownVote, UserVerified, and Verified, to a feed post or comment. This object is available in API version 41.0 and later.
-   **[FeedTrackedChange](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_feedtrackedchange.htm)**
    Represents an individual field change or set of field changes. A FeedTrackedChange is a child object of a record feed, such as AccountFeed. This object is available in API version 18.0 and later.
-   **[FieldHistoryArchive](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_fieldhistoryarchive.htm)**
    Represents field history values for all objects that retain field history. FieldHistoryArchive is a big object, available only to users with the “Retain Field History” permission. This object is available in API version 29.0 and later.
-   **[FieldChangeSnapshot](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_fieldchangesnapshot.htm)**
    Use this virtual object to learn which opportunities' close dates changed during the specified time period. This object is available in API version 52.0 and later.
-   **[FieldPermissions](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_fieldpermissions.htm)**
    Represents the enabled field permissions for the parent PermissionSet. This object is available in API version 24.0 and later.
-   **[FieldSecurityClassification](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_fieldsecurityclassification.htm)**
    Represents a field’s data sensitivity value selected from the SecurityClassification picklist. This object is available in API version 46.0 and later.
-   **[FieldServiceMobileSettings](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_fieldservicemobilesettings.htm)**
    Represents a configuration of settings that control the Field Service iOS and Android mobile app experience. This object is available in API version 38.0 and later.
-   **[FieldServiceOrgSettings](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_fieldserviceorgsettings.htm)**
    Represents the org settings for Field Service, such as Appointment Assistant settings. If Field Service is enabled, the org contains one read-only record of this object. This object is available in API version 51.0 and later.
-   **[FileSearchActivity](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_filesearchactivity.htm)**
    Represents search activity on a file. This object is available in API version 38.0 and later.
-   **[FiscalYearSettings](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_fiscalyearsettings.htm)**
    Settings to define a custom or standard fiscal year for your organization. This object has a parent-child relationship with the Period object.
-   **[FldSvcObjChg](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_fldsvcobjchg.htm)**
    Represents a change made to one of a service appointment’s tracked fields. This object is available in API version 63.0 and later.
-   **[FldSvcObjChgDtl](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_fldsvcobjchgdtl.htm)**
    Represents the details of a change made to one of a service appointment’s tracked fields. This object is available in API version 63.0 and later.
-   **[FlexQueueItem](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_flexqueueitem.htm)**
    Represents an asynchronous Apex job in the Apex flex queue. Provides information about the job type and flex queue position of the AsyncApexJob. This object is available in API version 36.0 and later.
-   **[FlowDefinitionView](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_flowdefinitionview.htm)**
    Represents the description of a flow definition. This object is available in API version 46.0 and later.
-   **[FlowInterview](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_flowinterview.htm)**
    Represents a flow interview. A flow interview is a running instance of a flow. This object is available in API version 32.0 and later.
-   **[FlowInterviewLog](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_flowinterviewlog.htm)**
    Represents the logs of a screen flow interview. An interview is an instance of a running or previously run flow.This object is available in API version 49.0 and later.
-   **[FlowInterviewLogEntry](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_flowinterviewlogentry.htm)**
    Represents the log of a specific element that’s executed by a screen flow interview. An interview is an instance of a running or previously run flow. This object is available in API version 49.0 and later.
-   **[FlowInterviewLogOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_flowinterviewlogownersharingrule.htm)**
    Represents the rules for sharing a FlowInterviewLog with users other than the owner.This object is available in API version 49.0 and later.
-   **[FlowInterviewOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_flowinterviewownersharingrule.htm)**
    Represents the rules for sharing a FlowInterview with users other than the owner. This object is available in API version 33.0 and later.
-   **[FlowInterviewShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_flowinterviewshare.htm)**
    Represents a sharing entry on a FlowInterview. This object is available in API version 33.0 and later.
-   **[FlowNavMetricEventLog](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_flownavmetriceventlog.htm)**
    Flow Navigation Metric event logs contain metric data for flow interviews such as total execution time, number of interviews, and number of errors. This object is available in API version 61.0 and later.
-   **[FlowOrchestration](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_floworchestration.htm)**
    Represents the details of an orchestration definition. This object is available in API version 62.0 and later.
-   **[FlowOrchestrationInstance](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_floworchestrationinstance.htm)**
    Represents a run-time instance of an orchestration. This object is available in API version 53.0 and later.
-   **[FlowOrchestrationLog](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_floworchestrationlog.htm)**
    Represents logging data for a FlowOrchestrationInstance. This object is available in API version 54.0 and later.
-   **[FlowOrchestrationStageInstance](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_floworchestrationstageinstance.htm)**
    Represents a run-time instance of a stage in a run-time instance of an orchestration. This read-only object is available in API version 53.0 and later.
-   **[FlowOrchestrationStepInstance](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_floworchestrationstepinstance.htm)**
    Represents a run-time instance of a step in a run-time instance of a stage of a run-time instance of an orchestration. This read-only object is available in API version 53.0 and later.
-   **[FlowOrchestrationVersion](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_floworchestrationversion.htm)**
    Represents the version of an orchestration. This object is available in API version 62.0 and later.
-   **[FlowOrchestrationWorkItem](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_floworchestrationworkitem.htm)**
    Represents a work item associated with a run-time instance of an interactive step in a run-time instance of an orchestration. This object is available in API version 54.0 and later.
-   **[FlowRecord](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_flowrecord.htm)**
    Represents the details of a flow. This object is available in API version 58.0 and later.
-   **[FlowRecordElement](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_flowrecordelement.htm)**
    Represents a single element within a flow version. This object is available in API version 58.0 and later.
-   **[FlowRecordElementOccurrence](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_flowrecordelementoccurrence.htm)**
    Represents the execution metrics for a single element within a flow version. This object is available in API version 62.0 and later.
-   **[FlowRecordRelation](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_flowrecordrelation.htm)**
    Represents a relationship between a record and a flow interview. When a flow interview is paused, Salesforce uses the $Flow.CurrentRecord global variable in the flow to associate the interview with a record. Available in API version 42.0 and later.
-   **[FlowRecordVersion](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_flowrecordversion.htm)**
    Represents the version of a flow. This object is available in API version 58.0 and later.
-   **[FlowRecordVersionOccurrence](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_flowrecordversionoccurrence.htm)**
    Represents an instance of a recurring flow that runs on a schedule. For example, a flow that runs weekly on Wednesdays creates an occurrence each time it runs. This object is available in API version 60.0 and later.
-   **[FlowTestResult](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_flowtestresult.htm)**
    Represents the results for a flow test associated with a flow version. This object is available in API version 55.0 and later.
-   **[FlowTestView](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_flowtestview.htm)**
    Represents the description of a flow test associated with a flow definition. This object is available in API version 55.0 and later.
-   **[FlowStageRelation](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_flowstagerelation.htm)**
    Represents a relationship between a paused flow interview and its stages. When a flow interview is paused, Salesforce creates a FlowStageRelation record for each stage that’s set to the $Flow.CurrentStage or $Flow.ActiveStages global variable. Available in API version 43.0 and later.
-   **[FlowVariableView](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_flowvariableview.htm)**
    Represents a variable within the flow version. This object is available in API version 46.0 and later.
-   **[FlowVersionView](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_flowversionview.htm)**
    Represents the version of a flow definition. This object is available in API version 46.0 and later.
-   **[Folder](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_folder.htm)**
    Represents a repository for a Dashboard, Document, EmailTemplate, Macro, QuickText, or Report. Only one type of item can be contained in a folder.
-   **[FolderedContentDocument](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_folderedcontentdocument.htm)**
    Represents the relationship between a parent and child ContentFolderItem in a ContentWorkspace.
-   **[ForecastingAdjustment](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_forecastingadjustment.htm)**
    This object represents an individual forecast manager’s adjustment for a subordinate’s or child territory’s forecast via a ForecastingItem. Available in API versions 26.0 and later. This object is different from the ForecastingOwnerAdjustment object, which represents forecast users’ adjustments of their *own* forecasts, including territory forecasts they own.
-   **[ForecastingColumnDefinition](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_forecastingcolumndefinition.htm)**
    Represents a custom calculated column or a custom reference data column in a forecast type. This object is available in API version 56.0 and later.
-   **[ForecastingColumnDefinitionLocalization](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_forecastingcolumndefinitionlocalization.htm)**
    Represents the translated value of a custom calculated column or custom reference data column label when the Translation Workbench is enabled for your organization. This object is available in API version 56.0 and later.
-   **[ForecastingCustomCategory](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_forecastingcustomcategory.htm)**
    Represents a custom forecasting category used for forecast rollups. This object is available in API version 62.0 and later.
-   **[ForecastingCustomData](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_forecastingcustomdata.htm)**
    Represents forecast data from external sources to display in the forecasts page. For example, risk or last year’s revenue. This object is available in API version 58.0 and later.
-   **[ForecastingDisplayedFamily](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_forecastingdisplayedfamily.htm)**
    Represents the table in Forecasts Settings where an admin selects the product families that users can forecast on in Lightning Experience. This object is available in API version 40.0 and later.
-   **[ForecastingFact](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_forecastingfact.htm)**
    This object is read-only and links a ForecastingItem with its opportunities, such as opportunities that share the same owner or forecast category and have a closing date within the period of the forecasting item. Available in API versions 26 and greater.
-   **[ForecastingFilter](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_forecastingfilter.htm)**
    Represents the custom filter for including or excluding data from opportunity forecasts. This object is available in API version 54.0 and later.
-   **[ForecastingFilterCondition](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_forecastingfiltercondition.htm)**
    Represents the custom filter condition logic for including or excluding data from opportunity forecasts. This object is available in API version 54.0 and later.
-   **[ForecastingGroup](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_forecastinggroup.htm)**
    Represents groups used to roll up forecast totals on the forecasts page. For example, group forecasts by industry or sales type. This object is available in API version 60.0 and later.
-   **[ForecastingGroupItem](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_forecastinggroupitem.htm)**
    Represents the value within the picklist that is specified as the forecasting group for a forecast type. For example, if you have a forecasting group that identifies the industry an opportunity is part of, this object represents the value in the the industry picklist that’s chosen to be part of the group. This object is available in API version 60.0 and later.
-   **[ForecastingItem](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_forecastingitem.htm)**
    This object is read-only used for individual forecast amounts. Users see amounts based on their perspectives and forecast roles. The amounts users see include one of these values when forecasting in revenue: AmountWithoutAdjustments, AmountWithoutManagerAdjustment, ForecastAmount, OwnerOnlyAmount. The amounts users see include one of these values when forecasting in quantity: QuantityWithoutAdjustments, QuantityWithoutManagerAdjustment, ForecastQuantity, OwnerOnlyQuantity. Available in API version 26.0 and later.
-   **[ForecastingOwnerAdjustment](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_forecastingowneradjustment.htm)**
    This object represents an individual forecast user’s adjustment of their *own* forecast, including territory forecasts they own, via a ForecastingItem. Available in API versions 33.0 and later. This object is different from the ForecastingAdjustment object, which represents managers’ adjustments of *subordinates’* and child territories’ forecasts.
-   **[ForecastingQuota](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_forecastingquota.htm)**
    This object represents an individual user’s or territory’s quota for a specified time period. The Managed Quotas user permission is required for creating, updating, or deleting quotas. (Users can only edit their subordinates’ or child territories’ quotas, not their own.) The View All Forecasts permission is required to view any user's forecast, regardless of the forecast hierarchy. Available in API versions 25.0 and later. Forecast managers can view the forecasts of subordinates and territories below them in the forecast hierarchy.
-   **[ForecastingShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_forecastingshare.htm)**
    Represents forecasts shared between a forecast manager and a user. Available in API version 44.0 and later.
-   **[ForecastingSourceDefinition](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_forecastingsourcedefinition.htm)**
    Represents the object, measure, date type, and hierarchy that a forecast uses to project sales. This object is available in API version 52.0 and later.
-   **[ForecastingSrcRecJudgment](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_forecastingsrcrecjudgment.htm)**
    Represents forecast managers’ judgment of whether they consider an opportunity-related deal to be certain to close. This object is available in API version 59.0 and later.
-   **[ForecastingSubmission](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_forecastingsubmission.htm)**
    Represents a submitted forecast. This object is available in API version 62.0 and later.
-   **[ForecastingSubmissionItem](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_forecastingsubmissionitem.htm)**
    Represents the values for each forecast category in a submitted forecast. This object is available in API version 62.0 and later.
-   **[ForecastingType](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_forecastingtype.htm)**
    Used to identify the forecast type associated with ForecastingAdjustment, ForecastingOwnerAdjustment, ForecastingQuota, ForecastingFact, and ForecastingItem objects. Available in API version 30.0 and greater.
-   **[ForecastingTypeSource](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_forecastingtypesource.htm)**
    Maps a forecasting source definition to a forecast type. This object is available in API version 52.0 and later.
-   **[ForecastingUserPreference](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_forecastinguserpreference.htm)**
    Represents the forecasting selections that a user has made, such as display options, date range, forecasting type, and currency.
-   **[FormulaFunction](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_formulafunction.htm)**
    Represents a function used when building a formula, including examples and uses. This object is available in API version 47.0 and later.
-   **[FormulaFunctionAllowedType](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_formulafunctionallowedtype.htm)**
    Represents the functions that are supported in the given formula context. This object is available in API version 48.0 and later.
-   **[FormulaFunctionCategory](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_formulafunctioncategory.htm)**
    Represents the category to which a formula belongs when building a formula. This object is available in API version 47.0 and later.
-   **[FrcstCustmCatgRampRateSrc](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_frcstcustmcatgrampratesrc.htm)**
    Represents the total contract value used for custom bulk adjustments. This object is available in API version 63.0 and later.
-   **[FrcstCustmzAdjustment](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_frcstcustmzadjustment.htm)**
    Represents an individual forecast manager’s adjustment of a subordinate’s consumption forecast. Available in API version 63.0 and later. This object is different from the ForecastingAdjustment object, which represents managers’ adjustments of subordinates’ pipeline forecasts.
-   **[FrcstCustmzOwnerAdjustment](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_frcstcustmzowneradjustment.htm)**
    Represents an individual forecast user’s adjustment of their own consumption forecast. Available in API version 63.0 and later. This object is different from the ForecastingOwnerAdjustment object, which represents users’ adjustments of their pipeline forecasts.
-   **[FulfillmentOrder](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_fulfillmentorder.htm)**
    Represents a group of products, fees, and delivery charges on a single order that share the same fulfillment location, delivery method, and recipient. The FulfillmentOrderLineItems belonging to a FulfillmentOrder are associated with OrderItemSummary objects belonging to a single OrderSummary. This object is available in API version 48.0 and later.
-   **[FulfillmentOrderItemAdjustment](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_fulfillmentorderitemadjustment.htm)**
    Represents a price adjustment on a FulfillmentOrderLineItem. Corresponds to an OrderItemAdjustmentLineSummary associated with the corresponding OrderItemSummary. This object is available in API version 48.0 and later.
-   **[FulfillmentOrderItemTax](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_fulfillmentorderitemtax.htm)**
    Represents the tax on a FulfillmentOrderLineItem or FulfillmentOrderItemAdjustment. Corresponds to an OrderItemTaxLineItemSummary. This object is available in API version 48.0 and later.
-   **[FulfillmentOrderLineItem](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_fulfillmentorderlineitem.htm)**
    Represents a product or delivery charge belonging to a FulfillmentOrder. Corresponds to an OrderItemSummary. This object is available in API version 48.0 and later.
-   **[FunctionConnection](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_functionconnection.htm)**
    Represents a connection between an org and Salesforce Functions. This object is available in API version 52.0 and later.
-   **[FunctionInvocationRequest](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_functioninvocationrequest.htm)**
    Represents invocation information for a Salesforce Function. This object is available in API version 51.0 and later.
-   **[FunctionReference](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_functionreference.htm)**
    Represents a deployed Salesforce Function associated with an org. This object is available in API version 52.0 and later.
-   **[GenAIConversationSummary](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_genaiconversationsummary.htm)**
    Represents a generated summary of a voice or video call. This object is available in API version 60.0 and later.
-   **[GenAiFunctionDefinition](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_genaifunctiondefinition.htm)**
    Represents an agent action. This object is available in API version 60.0 and later.
-   **[GenAiPlannerDefinition](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_genaiplannerdefinition.htm)**
    Represents an agent planner service that uses a large language model (LLM) and a reasoning strategy to decompose a given task into smaller subtasks, identify the most suitable actions for each subtask, and invoke them. This object is available in API version 60.0 and later.
-   **[GenAiPlannerFunctionDef](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_genaiplannerfunctiondef.htm)**
    Represents a relationship between the agent planner service and agent actions. This object is available in API version 60.0 and later.
-   **[GenAiPluginDefinition](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_genaiplugindefinition.htm)**
    Represents an agent topic, which is a category of actions related to a particular job to be done by AI agents. This object is available in API version 62.0 and later.
-   **[GeoCountry](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_geocountry.htm)**
    Represents a country. This object is available in API version 56.0 and later.
-   **[GeolocationBasedAction](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_geolocationbasedaction.htm)**
    Represents a geolocation-based action, which is an action that’s triggered when a user enters, exits, or is within the area of the associated object. Available in API version 61.0 and later.
-   **[GeoState](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_geostate.htm)**
    Represents a state. This object is available in API version 57.0 and later.
-   **[GtwyProvPaymentMethodType](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_gtwyprovpaymentmethodtype.htm)**
    The gateway provider payment method type allows integrators and payment providers to choose an active payment to receive an order's payment data rather than allowing the Salesforce Order Management platform to select a default payment method. This object is available in API version 50.0 and later.
-   **[Goal](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_goal.htm)**
    The Goal object represents the components of a goal such as its name, description, and status.
-   **[GoalLink](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_goallink.htm)**
    Represents the relationship between two goals. This is a many-to-many relationship, meaning that each goal can link to many other goals.
-   **[GoogleDoc](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_googledoc.htm)**
    Represents a link to a Google Document. This object is available in API version 14.0 and later.
-   **[Group](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_group.htm)**
    A set of User records.
-   **[GroupMember](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_groupmember.htm)**
    Represents a User or Group that is a member of a public group.
-   **[GroupMembershipEventLog](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_groupmembershipeventlog.htm)**
    Group Membership events capture details about changes to public group and queue membership, such as when members are added to or removed from the public group or queue. This object is available in API version 64.0 and later.
-   **[GuestBuyerProfile](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_guestbuyerprofile.htm)**
    Represents a store's guest buyer profile, which allows unauthenticated buyers to browse the store. This object is available in API version 51.0 and later.
-   **[HashtagDefinition](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_hashtagdefinition.htm)**
    HashtagDefinition represents hashtag (#) topics in public Chatter posts and comments. Public posts and comments include those on profiles and in public groups, but not those on records or in private groups. This object is available in API version 26.0 and later.
-   **[HealthCareDiagnosis](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_healthcarediagnosis.htm)**
    Represents information related to industry-standard healthcare diagnosis codes. Before the Spring ’21 release, the Healthcare Procedure and Healthcare Diagnosis objects stored codes specifically related to procedures and diagnoses. These codes were used for prior-authorization requests and approval processes. Since the Spring’21 release, Health Cloud uses the Code Set and Code Set Bundle objects for this purpose instead.
-   **[HealthCareProcedure](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_healthcareprocedure.htm)**
    Represents information related to industry-standard healthcare procedure codes. Before the Spring ’21 release, the Healthcare Procedure and Healthcare Diagnosis objects stored codes specifically related to procedures and diagnoses. These codes were used for prior-authorization requests and approval processes. Since the Spring’21 release, Health Cloud uses the Code Set and Code Set Bundle objects for this purpose instead.
-   **[Holiday](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_holiday.htm)**
    Represents a period of time during which your customer support team is unavailable. Business hours and escalation rules associated with business hours are suspended during any holidays with which they are affiliated.
-   **[IconDefinition](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_icondefinition.htm)**
    Represents the icon-related metadata for a custom tab. This object is available in API version 43.0 and later.
-   **[Idea](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_idea.htm)**
    Represents an idea on which users are allowed to comment and vote, for example, a suggestion for an enhancement to an existing product or process. This object is available in API version 12 and later.
-   **[IdeaComment](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_ideacomment.htm)**
    Represents a comment that a user has submitted in response to an idea.
-   **[IdeaReputation](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_ideareputation.htm)**
    Represents a collection of statistics and scores derived from a user’s activity within an Ideas zone or internal organization. This object is available in API version 28.0 and later.
-   **[IdeaReputationLevel](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_ideareputationlevel.htm)**
    Represents a reputation level within an Ideas zone or internal organization and is used by the system to calculate reputation. You can create up to 25 levels per zone or internal organization. This object is available in API version 28.0 and later.
-   **[IdeaTheme](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_ideatheme.htm)**
    Represents an invitation to zone members to submit ideas that are focused on a specific topic. This object is available in API version 26 and later.
-   **[IdpEventLog](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_idpeventlog.htm)**
    Represents the Identity Provider Event Log. This log records both problems and successes with inbound SAML or OpenID Connect authentication requests from another app provider. It also records outbound SAML responses when Salesforce is acting as an identity provider. This object is available in API version 39.0 and later.
-   **[IframeWhiteListUrl](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_iframewhitelisturl.htm)**
    Represents a list of trusted external domains that you allow to frame your Embedded Service, Surveys, and Visualforce pages. This object is available in API version 45.0 and later.
-   **[Image](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_image.htm)**
    Represents the details of an image. This object is available in API version 47.0 and later.
-   **[Incident](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_incident.htm)**
    An Incident is any unplanned business interruption that has wide-sweeping impacts and requires an urgent fix. This object contains the details of the incident, documenting the history of the incident from registration to closure. This object is available in API version 53.0 and later.
-   **[IncidentRelatedItem](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_incidentrelateditem.htm)**
    Represents a junction object that relates an Incident to an Asset or Product. This object is available in API version 53.0 and later.
-   **[Individual](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_individual.htm)**
    Represents a customer’s data privacy and protection preferences. Data privacy records based on the Individual object store your customers’ preferences. Data privacy records are associated with related leads, contacts, person accounts, and users. This object is available in API version 42.0 and later.
-   **[IndividualApplicationItem](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_individualapplicationitem.htm)**
    Captures individual application input data that is used during run-time. This object is available in API version 58.0 and later.
-   **[IndividualHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_individualhistory.htm)**
    Represents the history of changes to values in the fields of a data privacy record, based on the Individual object. This object is available in versions 42.0 and later.
-   **[IndividualShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_individualshare.htm)**
    Represents a list of access levels to a data privacy record along with an explanation of the access level. For example, if you have access to a record because you own it, the IndividualAccessLevel is All and RowCause is Owner. This object is available in API version 42.0 and later.
-   **[InsufficientAccessEventLog](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_insufficientaccesseventlog.htm)**
    Insufficient Access event logs contain details about errors relating to insufficient account, case, contact, and opportunity record access. This object is available in API version 61.0 and later.
-   **[InternalOrganizationUnit](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_internalorganizationunit.htm)**
    Represents an organization that an Employee belongs to. This object is available in API version 48.0 and later. In API version 49.0 and later, this object supports reports, criteria-based sharing rules, and history tracking, plus you can exclude individual fields from custom page layouts.
-   **[InventoryItemReservation](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_inventoryitemreservation.htm)**
    Used to store inventory item reservation information for a specific product and location. This object is available in API version 60.0 and later.
-   **[InventoryReservation](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_inventoryreservation.htm)**
    Stores information about the status of cart inventory reservations in B2B and D2C Commerce. This object is available in API version 60.0 and later.
-   **[InvocableActionEventLog](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_invocableactioneventlog.htm)**
    Invocable Action events capture the calls to Salesforce Invocable Actions.This is particularly useful to monitor actions invoked during Agentforce flows. This object is available in API version 64.0 and later.
-   **[Invoice](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_invoice.htm)**
    Represents a financial document describing the total amount a buyer must pay for goods or services provided. This object is available in API version 48.0 and later.
-   **[InvoiceAddressGroup](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_invoiceaddressgroup.htm)**
    Stores the buyer's address information. This object is available in API version 50.0 and later.
-   **[InvoiceBatchRun](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_invoicebatchrun.htm)**
    Represents a batch processing job in Subscription Management or Billing (Revenue Cloud). During an invoice batch run, all billing schedules that meet the specified criteria are processed, resulting in the generation of invoices. This object is available in API version 55.0 and later.
-   **[InvoiceBatchRunCriteria](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_invoicebatchruncriteria.htm)**
    Represents a batch processing job and its required criteria in Subscription Management. During an invoice batch run, all billing schedules that meet the specified criteria are processed, resulting in the generation of invoices. This object is available in API version 55.0 and later.
-   **[InvoiceBatchRunRecovery](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_invoicebatchrunrecovery.htm)**
    Provides information about an invoice batch run recovery procedure. This object is available in API version 57.0 and later.
-   **[InvoiceDocument](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_invoicedocument.htm)**
    Tracks and displays the status of documents generated for invoices. Invoice documents are available in the related lists of invoice entity records. This object is available in API version 61.0 and later.
-   **[InvoiceLine](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_invoiceline.htm)**
    Represents the amount that a buyer must pay for a product, service, or fee. Invoice lines are created based on the amount of an order line. This object is available in API version 48.0 and later.
-   **[JobProfile](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_jobprofile.htm)**
    Represents a job profile used for shift scheduling. This object is available in API versions 47.0 and later.
-   **[JobProfileQueueGroup](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_jobprofilequeuegroup.htm)**
    JobProfileQueueGroup defines the mapping between Queue and JobProfile and configurations for capacity plans in Workforce Engagement. This object is available in API version 53.0 and later.
-   **[Knowledge\_\_Feed](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_knowledge__feed.htm)**
    Represents the feed for a knowledge article. This object is available in API version 39.0 and later.
-   **[Knowledge\_\_ka](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_knowledge__ka.htm)**
    Provides access to the concrete object that represents a Knowledge article, the parent object for article versions. This object is available in API version 39.0 and later.
-   **[Knowledge\_\_kav](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_knowledge__kav.htm)**
    Provides access to the concrete object that represents a Knowledge article version. This object is available in API version 39.0 and later.
-   **[Knowledge\_\_DataCategorySelection](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_knowledge__datacategoryselection.htm)**
    Represents a data category that classifies an article. This object is available in API version 39.0 and later.
-   **[KnowledgeableUser](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_knowledgeableuser.htm)**
    Represents a user identified as knowledgeable about a specific topic, and ranks them relative to other knowledgeable users. This object is available in API version 31.0 and later.
-   **[KnowledgeArticle](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_knowledgearticle.htm)**
    Provides read-only access to an article and the ability to delete the primary article. This object is available in API version 19.0 and later.
-   **[KnowledgeArticleEventLog](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_knowledgearticleeventlog.htm)**
    Knowledge Article View event logs contain user activity with your knowledge base. This object is available in API version 61.0 and later.
-   **[KnowledgeArticleFeedback](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_knowledgearticlefeedback.htm)**
    Represents information about feedback from users on Knowledge articles and details about assignment of feedback to the article owner or team to take action. This object is available in API version 64.0 and later.
-   **[KnowledgeArticleVersion](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_knowledgearticleversion.htm)**
    Provides a global view of standard article fields across all types of articles depending on their version. This object is available in API version 18.0 and later.
-   **[KnowledgeArticleVersionHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_knowledgearticleversionhistory.htm)**
    Enables read-only access to the full history of an article. This object is available in API version 25.0 and later.
-   **[KnowledgeArticleViewStat](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_knowledgearticleviewstat.htm)**
    Provides certain statistics related to the number of views for the specified article across all article types. The view count statistics are for published and archived articles only. View counts for draft articles aren’t tracked. This object is read-only and available in API version 20.0 and later.
-   **[KnowledgeArticleVoteStat](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_knowledgearticlevotestat.htm)**
    Provides the weighted rating for the specified article on a scale of 1 to 5 across all article types. This object is read-only and available in API version 20.0 and later.
-   **[LandingPage](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_landingpage.htm)**
    Represents an Account Engagement landing page. A landing page is a web page that a visitor reaches after clicking a link or advertisement. Landing pages can be created in Account Engagement and synced to Salesforce or created on the Landing Page object in Account Engagement Lightning App. This object is available in API version 42.0 and later.
-   **[Lead](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_lead.htm)**
    Represents a prospect or lead.
-   **[LeadCleanInfo](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_leadcleaninfo.htm)**
    Stores the metadata Data.com Clean uses to determine a lead record’s clean status. Helps you automate the cleaning or related processing of lead records.
-   **[LeadDailyMetric](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_leaddailymetric.htm)**
    Represents the daily engagement metrics for a lead. This object is available in API version 52.0 and later.
-   **[LeadMonthlyMetric](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_leadmonthlymetric.htm)**
    Represents the monthly engagement metrics for a lead. This object is available in API version 52.0 and later.
-   **[LeadOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_leadownersharingrule.htm)**
    Represents the rules for sharing a lead with users other than the owner.
-   **[LeadShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_leadshare.htm)**
    Represents a sharing entry on a Lead.
-   **[LeadStatus](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_leadstatus.htm)**
    Represents the status of a Lead record, such as Open, Qualified, or Converted.
-   **[LeadTag](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_leadtag.htm)**
    Associates a word or short phrase with a Lead.
-   **[LearningContent](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_learningcontent.htm)**
    Represents a Trailhead or enablement site (myTrailhead) module assigned to a user in Workforce Engagement or Learning Paths. This object also represents a Trailhead module or video in an Enablement program exercise. This object is available in API version 54.0 and later.
-   **[LearningItem](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_learningitem.htm)**
    Represents an item that requires users to take action, including a Learning Paths entry, an Enablement program, or an exercise with linked content in an Enablement program. For Learning Paths, users are assigned a learning item to complete. For Enablement programs and exercises, users are assigned a program or can self-enroll in shared programs. This object is available in API version 58.0 and later.
-   **[LearningItemAssignment](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_learningitemassignment.htm)**
    Represents the assignment of a Learning Paths entry to users or groups or the enrollment of an Enablement program for a specific user. This object is available in API version 58.0 and later.
-   **[LearningItemProgress](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_learningitemprogress.htm)**
    Represents the progress that a user has made towards completing an assigned learning item, such as a Learning Paths entry or Enablement program. This object is available in API version 60.0 and later.
-   **[LearningItemSubmission](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_learningitemsubmission.htm)**
    Represents a link to a resource, such as a video recording, that a user submits as part of a Feedback Request exercise in an Enablement program. For peer and manager feedback, this resource can be a recording of a user’s sales patch. For Einstein Coach feedback, this resource can be a video call, and Einstein generates feedback from the call’s transcription. This object is available in API version 59.0 and later, but Einstein Coach is available only in API version 61.0 and later.
-   **[LearningItemType](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_learningitemtype.htm)**
    Represents a custom exercise type that an Enablement user takes in an Enablement program in the Guidance Center. A custom exercise type also requires a corresponding LearningItem record for the Guidance Center and corresponding EnblProgramTaskDefinition and EnblProgramTaskSubCategory records for when admins create a program in Program Builder. This object is available in API version 62.0 and later.
-   **[LearningPractice](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_learningpractice.htm)**
    Represents a Feedback Request exercise in an Enablement program. Users can submit a sample of their work and request feedback from their peers and managers. Or, users can submit a video call and Einstein Coach generates feedback from the call’s transcription. This object is available in API version 59.0 and later, but Einstein Coach feedback is available only in API version 61.0 and later.
-   **[LegalEntity](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_legalentity.htm)**
    Represents the way an organization is structured. An organization can be a single legal entity or it can comprise more than one legal entity. This object is available in API version 48.0 and later.
-   **[LicenseDefinitionCustomPermission (Developer Preview)](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_licensedefinitioncustompermission.htm)**
    Represents a licensed custom permission that controls access to a license's features when included in a custom permission set license definition. This object is available in API version 54.0 and later.
-   **[LightningErrorEventLog](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_lightningerroreventlog.htm)**
    Lightning Error events represent errors that occurred during user interactions with Lightning Experience and the Salesforce mobile app. This object is available in API version 64.0 and later.
-   **[LightningExperienceTheme](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_lightningexperiencetheme.htm)**
    Represents information for a theme in Lightning Experience. This object is available in API Version 42.0 and later.
-   **[LightningLoggerEventLog](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_lightningloggereventlog.htm)**
    Lightning Logger Event Log provides information from observed Lightning component logs. This object is available in API version 61.0 and later.
-   **[LightningOnboardingConfig](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_lightningonboardingconfig.htm)**
    Represents the feedback provided when users switch from Lightning Experience to Salesforce Classic. Admins can customize the question, how frequently the form appears, and where the feedback is stored in Chatter from the Adoption Assistance page in Lightning Experience Setup. Available in API version 47.0 and later.
-   **[LightningPageViewEventLog](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_lightningpagevieweventlog.htm)**
    Lightning Page View event logs represent information about the page on which the event occurred in Lightning Experience and the Salesforce mobile app. A Lightning Page View event log tracks the page a user visited, how long the user spent on the page, and the load time for the page. This object is available in API version 61.0 and later.
-   **[LightningPrfmEventLog](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_lightningprfmeventlog.htm)**
    Lightning Performance events track trends in Lightning Experience and Salesforce mobile app performance. This object is available in API version 65.0 and later.
-   **[LightningToggleMetrics](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_lightningtogglemetrics.htm)**
    Represents users who switched from Lightning Experience back to Salesforce Classic. This object is available in API version 43.0 and later.
-   **[LightningUsageByAppTypeMetrics](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_lightningusagebyapptypemetrics.htm)**
    Represents number of users on Lightning Experience and Salesforce Mobile. This object is available in API version 43.0 and later.
-   **[LightningUsageByBrowserMetrics](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_lightningusagebybrowsermetrics.htm)**
    Represents Lightning Experience usage grouped by user’s browser. This object is available in API version 43.0 and later.
-   **[LightningUsageByPageMetrics](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_lightningusagebypagemetrics.htm)**
    Represents standard pages users viewed most frequently in Lightning Experience. This object is available in API version 43.0 and later.
-   **[LightningUsageByFlexiPageMetrics](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_lightningusagebyflexipagemetrics.htm)**
    Represents custom pages users viewed most frequently in Lightning Experience. This object is available in API version 43.0 and later.
-   **[LightningExitByPageMetrics](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_lightningexitbypagemetrics.htm)**
    Represents frequency metrics about the standard pages within which users switched from Lightning Experience to Salesforce Classic. This object is available in API version 44.0 and later.
-   **[LinkedArticle](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_linkedarticle.htm)**
    Represents a knowledge article that is attached to a work order, work order line item, or work type. This object is available in API version 37.0 and later.
-   **[LinkedArticleFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_linkedarticlefeed.htm)**
    Represents the comment feed on a linked article. This object is available in API version 39.0 and later.
-   **[LinkedArticleHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_linkedarticlehistory.htm)**
    Represents the history of changes made to tracked fields on a linked article. This object is available in API version 37.0 and later.
-   **[ListEmail](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_listemail.htm)**
    Represents a list email sent from Salesforce, or sent from Account Engagement and synced to Salesforce. When the list email is sent, the recipients are generated by combining recipients in ListEmailIndividualRecipients and ListEmailRecipientSource. Duplicate and other invalid recipients are removed. The result is the recipients sent any given list email. ListEmail has a one-to-many relationship with ListEmailRecipientSource and ListEmailIndividualRecipient. This object is available in API version 41.0 and later.
-   **[ListEmailIndividualRecipient](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_listemail_individual_recipient.htm)**
    For a list email in Salesforce, represents a recipient. Each record represents a link from a list email to exactly one recipient for that list email. Recipients can be contacts, leads, or campaign members. Has a one-to-many relationship with ListEmail. This object is available in API version 44.0 and later.
-   **[ListEmailMonthlyMetric](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_listemailmonthlymetric.htm)**
    Represents the monthly engagement metrics for a single list email. This object is available in API version 49.0 and later.
-   **[ListEmailRecipientSource](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_listemail_recipient_source.htm)**
    For a list email in Salesforce, represents the dynamically defined sources of recipient email addresses. Each record represents a link to a single list view or campaign that is examined when the list email is sent. Has a one-to-many relationship with ListEmail. This object is available in API version 41.0 and later.
-   **[ListView](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_listview.htm)**
    Represents a list view. A list view shows a set of records for an object, based on specific criteria. This object is available in API version 32.0 and later.
-   **[ListViewChart](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_listviewchart.htm)**
    Represents a graphical chart that’s displayed on Salesforce for Android, iOS, and mobile web list views. The chart aggregates data that is filtered based on the list view that’s currently displayed. This object is available in API version 33.0 and later and is accessible by portal users.
-   **[ListViewChartInstance](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_listviewchartinstance.htm)**
    Retrieves metadata for all standard and custom charts for a given entity in context of a given list view. This object is available in API versions 34.0 and later.
-   **[LiveAgentSession](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_liveagentsession.htm)**
    This object is automatically created for each Chat session and stores information about the session. This object is available in API versions 28.0 and later.
-   **[LiveAgentSessionHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_liveagentsessionhistory.htm)**
    This object is automatically created for each Chat session and stores information about changes made to the session. This object is available in API versions 28.0 and later.
-   **[LiveAgentSessionShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_liveagentsessionshare.htm)**
    This object is automatically created for each Chat session and stores information about the session. This object is available in API versions 28.0 and later.
-   **[LiveChatBlockingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_livechatblockingrule.htm)**
    Represents a rule for blocking chat visitors’ IP addresses from starting new chats with agents. This object is available in API version 34.0 and later.
-   **[LiveChatObjectAccessConfig](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_livechatobjectaccessconfig.htm)**
    Represents the action you can perform on a specified object by the Chat API. This object is available in API version 53.0 and later.
-   **[LiveChatObjectAccessDefinition](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_livechatobjectaccessdefinition.htm)**
    Represents the parent record for one or more LiveChatObjectAccessConfig objects. This object is available in API version 53.0 and later.
-   **[LiveChatButton](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_livechatbutton.htm)**
    Represents a button that allows visitors to request chats with Chat users. This object is available in API version 24.0 and later.
-   **[LiveChatButtonDeployment](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_livechatbuttondeployment.htm)**
    Associates an automated chat invitation with a specific deployment. This object is available in API versions 28.0 and later.
-   **[LiveChatButtonSkill](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_livechatbuttonskill.htm)**
    Represents all the skills available to a LiveChatButton except the one currently assigned. To retrieve the skill currently assigned, query LiveChatButton. This object is available in API version 25.0 and later.
-   **[LiveChatDeployment](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_livechatdeployment.htm)**
    Represents the general settings for deploying Live Agent on a website. This object is available in API version 24.0 and later.
-   **[LiveChatSensitiveDataRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_livechatsensitivedatarule.htm)**
    Represents a rule for masking or deleting data of a specified pattern. Written as a regular expression (regex). This object is available in API version 35.0 and later.
-   **[LiveChatTranscript](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_livechattranscript.htm)**
    This object is automatically created for each Live Agent chat session and stores information about the session. This object is available in API version 24.0 and later.
-   **[LiveChatTranscriptEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_livechattranscriptevent.htm)**
    Captures specific events that occur over the lifetime of a chat. This object is available in API version 24.0 and later.
-   **[LiveChatTranscriptShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_livechattranscriptshare.htm)**
    Represents a sharing entry on a LiveChatTranscript object. This object is available in API version 24.0 and later.
-   **[LiveChatTranscriptSkill](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_livechattranscriptskill.htm)**
    Represents a join between LiveChatTranscript and Skill. This object is available in API version 25.0 and later.
-   **[LiveChatUserConfig](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_livechatuserconfig.htm)**
    Represents a setting that controls the console settings for Chat users. This object is available in API version 24.0 and later.
-   **[LiveChatUserConfigProfile](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_livechatuserconfigprofile.htm)**
    Represents a join between LiveChatUserConfig and Profile. This object is available in API version 24.0 and later.
-   **[LiveChatUserConfigUser](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_livechatuserconfiguser.htm)**
    Represents a join between Live Chat User Config and User. This object is available in API version 24.0 and later.
-   **[LiveChatVisitor](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_livechatvisitor.htm)**
    Represents a website visitor who has started or tried to start a chat session. This object is available in API version 24.0 and later.
-   **[Location](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_location.htm)**
    Represents a warehouse, service vehicle, work site, or other element of the region where your team performs field service work. In API version 49.0 and later, you can associate activities with specific locations. Activities, such as the tasks and events related to a location, appear in the activities timeline when you view the location detail page. Also in API version 49.0 and later, Work.com users can view Employees as a related list on Location records. In API version 51.0 and later, this object is available for Omnichannel Inventory and represents physical locations where inventory is available for fulfilling orders.
-   **[LocationGroup](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_locationgroup.htm)**
    Represents a group of Omnichannel Inventory locations, providing an aggregate view of inventory availability across those locations. Omnichannel Inventory can create an inventory reservation for an order at the location group level, then assign the reservation to one or more locations in the group as needed. This object is available in API version 51.0 and later.
-   **[LocationGroupAssignment](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_locationgroupassignment.htm)**
    Represents the assignment of a location to a location group. This object is available in API version 51.0 and later.
-   **[LocationShippingCarrierMethod](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_locationshippingcarriermethod.htm)**
    The available shipping carrier services associated with a location or location group. Allows the assignment of different shipping methods to a specific location and enables flexibility and customization in the shipping process. This object is available in API version 61.0 and later.
-   **[LocationTrustMeasure](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_locationtrustmeasure.htm)**
    Represents the COVID safety protocols that your business follows. For example, enforcement of masks, social distancing, cleanliness, and capacity limits. This object is available in API version 50.0 and later.
-   **[LocWaitlistMsgTemplate](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_locwaitlistmsgtemplate.htm)**
    Represents a junction object connecting LocationWaitlist to MessagingTemplate. This object is available in API version 50.0 and later.
-   **[LocationWaitlist](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_locationwaitlist.htm)**
    Represents a queue created for a specific location. Multiple queues can be created for a single location. For example, you can have a queue for each sales agent or a standard queue and a queue for vulnerable groups. The specific party of people in a queue is represented by LocationWaitlistedParty. This object is available in API version 50.0 and later.
-   **[LocationWaitlistedParty](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_locationwaitlistedparty.htm)**
    Represents a specific party of people waiting in a queue. This object is available in API version 50.0 and later.
-   **[LoginAsEventLog](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_loginaseventlog.htm)**
    LoginAsEventLog contains details about when a user logs in as another user in your org. This object is available in API version 61.0 and later.
-   **[LoginEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_loginevent.htm)**
    The documentation has moved to [LoginEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/sforce_api_objects_loginevent.htm "HTML (New Window)") in the Platform Events Developer Guide.
-   **[LoginEventLog](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_logineventlog.htm)**
    Login event logs contain details about your Salesforce org's user login history. This object is available in API version 61.0 and later.
-   **[LoginGeo](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_logingeo.htm)**
    Represents the geographic location of the user’s IP address for a login event. Due to the nature of geolocation technology, the accuracy of geolocation fields (for example, country, city, postal code) may vary. This object is available in API version 34.0 and later.
-   **[LoginHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_loginhistory.htm)**
    Represents the login history for all successful and failed login attempts for organizations and enabled portals. This object is available in API version 21.0 and later.
-   **[LoginIp](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_loginip.htm)**
    Represents a validated IP address. This object is available in version 28.0 and later.
-   **[LogoutEventLog](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_logouteventlog.htm)**
    Contains details of user sessions ending or being revoked. This object is available in API version 65.0 and later.
-   **[LogoutEventStream](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_logouteventstream.htm)**
    The documentation has moved to [LogoutEventStream](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/sforce_api_objects_logouteventstream.htm "HTML (New Window)") in the Platform Events Developer Guide.
-   **[LookedUpFromActivity](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_lookedupfromactivity.htm)**
    This read-only object is displayed as a related list on an activity record (an event or a task); the list contains records that have custom lookup relationships from the activity to another object. This object is not queryable.
-   **[Macro](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_macro.htm)**
    Represents a macro, which is a set of instructions that tells the system to perform one or more tasks. This object is available in API version 32.0 and later.
-   **[MacroInstruction](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_macroinstruction.htm)**
    Represents an instruction in a macro. An instruction can specify the object that the macro interacts with, the context or publisher that the macro works within, the operation or action that the macro performs, and the target of the macro’s actions.
-   **[MacroUsage](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_macrousage.htm)**
    Represents macro usage on a record, including which macro was used, who used it, and how they used it. This object is available in API version 47.0 and later.
-   **[MailmergeTemplate](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_mailmergetemplate.htm)**
    Represents a mail merge template (a Microsoft Word document) used for performing mail merges for your organization.
-   **[MaintenanceAsset](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_maintenanceasset.htm)**
    Represents an asset covered by a maintenance plan in field service. Assets can be associated with multiple maintenance plans.
-   **[MaintenancePlan](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_maintenanceplan.htm)**
    Represents a preventive maintenance schedule for one or more assets in field service.
-   **[MaintenanceWorkRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_maintenanceworkrule.htm)**
    Represents the recurrence pattern for a maintenance record. This object is available in API version 49.0 and later.
-   **[ManagedContent](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_managedcontent.htm)**
    Represents managed content in a Salesforce CMS workspace for use in an Experience Cloud site or a channel. The ManagedContent object represents the complete instance of a managed content record. It provides a consistent identifier for the managed content so that variants of the content item can be created over time. This object is available in API version 56.0 and later.
-   **[ManagedContentChannel](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_managedcontentchannel.htm)**
    Represents the details of a CMS channel. CMS channels correspond to managed content publishing endpoints. They deliver published content from your Salesforce CMS workspaces to an audience. This object is available in API version 55.0 and later.
-   **[ManagedContentInfo](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_managedcontentinfo.htm)**
    Allows the creation of relationship to Product using ProductMedia. This object is available in API version 49.0 to 57.0. In API version 58.0 and later, use the ManagedContent object.
-   **[ManagedContentSpace](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_managedcontentspace.htm)**
    Represents the complete instance of a Salesforce CMS workspace that stores managed content. Users and groups with designated permissions can access and manage the content in a CMS workspace. This object is available in API version 56.0 and later.
-   **[ManagedContentVariant](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_managedcontentvariant.htm)**
    Represents a variant of a managed content item. This object is available in API version 56.0 and later.
-   **[MarketingForm](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_marketingform.htm)**
    Represents an Account Engagement marketing form that has been synched to Salesforce. Use forms on your website and landing pages to collect information about visitors and turn anonymous visitors into identified prospects. This object is available in API version 42.0 and later.
-   **[MarketingLink](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_marketinglink.htm)**
    Represents an Account Engagement marketing link record, either a custom redirect or a file, that has been synced to Salesforce. This object is available in API version 42.0 and later.
-   **[MatchingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_matchingrule.htm)**
    Represents a matching rule that is used to identify duplicate records. This object is available in API version 33.0 and later.
-   **[MatchingRuleItem](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_matchingruleitem.htm)**
    Represents criteria used by a matching rule to identify duplicate records. This object is available in API version 33.0 and later.
-   **[MerchAccPaymentMethodSet](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_merchaccpaymentmethodset.htm)**
    Defines an ordered list of payment methods that are available to a merchant's cudstomer during checkout. You can configure multiple payment method sets, each designated for a specific locale, payment region, or sale channel. This object is available in API version 58.0 and later.
-   **[MerchAccPaymentMethodType](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_merchaccpaymentmethodtype.htm)**
    Refers to a payment method that is in a payment method set, which is defined by the MerchAccPaymentMethodSet object. This object is available in API version 58.0 and later.
-   **[MerchantAccount](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_merchantaccount.htm)**
    A type of bank account that lets a merchant accept payments from a variety of payment methods, including credit or debit cards, or digital wallets. A Salesforce Payments merchant account is linked to an underlying payment gateway to process payments This object is available in API version 56.0 and later.
-   **[MerchantAccountEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_merchantaccountevent.htm)**
    Represents a merchant account platform event. Subscribe to these events so you can listen and respond to them when they’re published. For example, create a Salesforce Flow that is triggered when one of these events is published. This object is available in API version 59.0 and later.
-   **[MessagingChannel](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_messagingchannel.htm)**
    Represents a communication channel that an end user can use to send a message to an agent. A communication channel can be an SMS number, a Facebook page, or another supported messaging channel. This object is available in API version 40.0 and later.
-   **[MessagingChannelSkill](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_messagingchannelskill.htm)**
    Junction object that represents an association between MessagingChannel and Skill. This object is available in API version 45.0 and later.
-   **[MessagingChannelUsage](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_messagingchannelusage.htm)**
    Represents the status of an enhanced Messaging channel or of an application in a Unified Messaging channel. This object is available in API version 60.0 and later.
-   **[MessagingConfiguration](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_messagingconfiguration.htm)**
    Represents the details for a Messaging configuration. This object is available in API version 47.0 and later.
-   **[MessagingDeliveryError](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_messagingdeliveryerror.htm)**
    Represents a log of triggered outbound failures to verify when a triggered outbound has failed. This object is available in API version 44.0 and later.
-   **[MessagingEndUser](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_messagingenduser.htm)**
    Represents a single address—such as a phone number or Facebook page—communicating with a single Messaging channel. This object is available in API version 40.0 and later.
-   **[MessagingLink](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_messaginglink.htm)**
    Represents the link between a Messaging Channel and where it's shared. This object is available in API version 47.0 and later.
-   **[MessagingSession](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_messagingsession.htm)**
    Represents a session on a Messaging channel. This object is available in API version 47.0 and later.
-   **[MessagingSessionMetrics](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_messagingsessionmetrics.htm)**
    Represents a metric gathered about a specific enhanced messaging session, such as average agent response time. This object is available starting in October 2024 in API version 62.0 and later.
-   **[MessagingTemplate](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_messagingtemplate.htm)**
    Represents a Messaging template used to send pre-formatted messages. This object is available in API version 47.0 and later.
-   **[MetadataApiOpEventLog](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_metadataapiopeventlog.htm)**
    MetadataApiOpEventLog stores details of Metadata API retrieval and deployment requests. This object is available in API version 62.0 and later.
-   **[MetadataPackage](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_metadatapackage.htm)**
    Represents a package that has been developed in the org you’re logged in to. Applies to unlocked, unmanaged, first-generation, and second-generation managed packages.
-   **[MetadataPackageVersion](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_metadatapackageversion.htm)**
    Represents a package version (managed or unmanaged) that has been uploaded from the org you’re logged in to.
-   **[Metric](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_metric.htm)**
    The Metric object represents the components of a goal metric such as its name, metric type, and current value.
-   **[MetricDataLink](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_metricdatalink.htm)**
    The link between the metric and the data source, such as a report.
-   **[MigratedEmail](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_migratedemail.htm)**
    For internal use only.
-   **[MilestoneType](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_milestonetype.htm)**
    Represents a milestone (required step in a customer support process). This object is available in API version 18.0 and later.
-   **[MktJourneyDcsnSetup](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_mktjourneydcsnsetup.htm)**
    Represents a collection of Marketing Cloud Engagement journeys that you can interact with by using Salesforce Flow in Marketing Cloud. This object is available in API version 65.0 and later.
-   **[MLField](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_mlfield.htm)**
    Represents a single field in a data definition. This object is available in API version 50.0 and later.
-   **[MlIntentUtteranceSuggestion](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_mlintentutterancesuggestion.htm)**
    Represents a customer input, used for training purposes in the feedback loop process of a conversation. Admins can add these inputs to the intent training model. This object is available in API version 51.0 and later.
-   **[MLPredictionDefinition](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_mlpredictiondefinition.htm)**
    Represents a prediction definition that specifies details about the prediction. This object is available in API version 50.0 and later.
-   **[MLModel](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_mlmodel.htm)**
    Represents an AI model that can be used in Einstein Prediction Builder, Einstein Recommendation Builder, and other Einstein features. This object is available in API version 53.0 and later.
-   **[MLModelFactor](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_mlmodelfactor.htm)**
    Represents a field value that has a positive or negative effect on the model’s score. This object is available in API version 53.0 and later.
-   **[MLModelFactorComponent](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_mlmodelfactorcomponent.htm)**
    Represents information about the related MLModelFactor. For example, this object can represent a field value or a field range such as “Title = CEO” or “Annual Revenue >10000000”. This object is available in API version 53.0 and later.
-   **[MLModelMetric](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_mlmodelmetric.htm)**
    Represents a metric or statistic about the related model, such as accuracy, precision, or RSquared. Use a model’s metrics to learn about its performance and to compare it with other models. This object is available in API version 53.0 and later.
-   **[MLRecommendationDefinition](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_mlrecommendationdefinition.htm)**
    For internal use only.
-   **[MobileDeviceAppRegistration](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_mobiledeviceappregistration.htm)**
    Represents the details provided in a mobile device registration event from an app that uses the Engagement Mobile SDK. This object is available in API version 65.0 and later.
-   **[MobileSecurityAssignment](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_mobilesecurityassignment.htm)**
    Represents the assignment of mobile security policies to a profile. The policies apply to the Salesforce mobile app with Enhanced Mobile App Security enabled. This object is available in API version 54.0 and later.
-   **[MobileSecurityPolicy](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_mobilesecuritypolicy.htm)**
    Enables mobile security policies on the Salesforce mobile app with Enhanced Mobile Security. This object is available in API version 50.0 and later.
-   **[MobileSecurityUserMetric](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_mobilesecurityusermetric.htm)**
    Represents the metrics for users who have Enhanced Mobile Security policies enforced. This object is available in API version 51.0 and later.
-   **[MobileSettingsAssignment](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_mobilesettingsassignment.htm)**
    Represents the assignment of a particular field service mobile settings configuration to a user profile. This object is available in API version 41.0 and later.
-   **[MobSecurityCertPinConfig](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_mobsecuritycertpinconfig.htm)**
    Configuration of mobile security certificate pinning on the Salesforce mobile app with Enhanced Mobile Security. This object is available in API version 53.0 and later.
-   **[MobSecurityCertPinEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_mobsecuritycertpinevent.htm)**
    The event of mobile security certificate pinning on the Salesforce mobile app with Enhanced Mobile Security. This object is available in API version 53.0 and later.
-   **[MsgChannelLanguageKeyword](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_msgchannellanguagekeyword.htm)**
    Represents the consent configuration for a Messaging channel. This object is available in API version 48.0 and later.
-   **[MsgChannelUsageExternalOrg](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_msgchannelusageexternalorg.htm)**
    Represents the Enterprise ID (EID) and Business Unit (MID) for Marketing Cloud connections in a Unified Messaging channel. This object is available in API version 60.0 and later.
-   **[MyDomainDiscoverableLogin](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_mydomaindiscoverablelogin.htm)**
    Represents configuration settings when the My Domain login page type is Discovery. Login Discovery provides an identity-first login experience, where the login page contains the identifier field only. Based on the identifier entered, a handler determines how to authenticate the user. This object is available in API version 45.0 and later.
-   **[MutingPermissionSet](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_mutingpermissionset.htm)**
    Represents a set of disabled permissions and is used in conjunction with PermissionSetGroup. This object is available in API version 46.0 and later.
-   **[Name](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_name.htm)**
    Non-queryable object that provides information about foreign key traversals when the foreign key has more than one parent.
-   **[NamedCredential](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_namedcredential.htm)**
    Represents a named credential, which specifies the URL of a callout endpoint and its required authentication parameters in one definition. A named credential can be specified as an endpoint to simplify the setup of authenticated callouts. This object is available in API version 33.0 and later.
-   **[NamedCredentialEventLog](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_namedcredentialeventlog.htm)**
    The Named Credential event type captures information about Apex callouts that use named credentials as their endpoints. Use this event type to audit the installed managed packages that use named credentials. If you don’t recognize the package namespace in the named credential event log file, then you can investigate whether a security breach has occurred. This object is available in API version 65.0 and later.
-   **[NamespaceRegistry](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_namespaceregistry.htm)**
    Represents a namespace that you can link to scratch orgs that were created from your org’s Dev Hub. You use the namespace when developing, packaging, and releasing an app. You can’t create this object with the API. Use the **Link Namespace** action in the Dev Hub graphical interface to insert a NamespaceRegistry record. This object is available in API version 41.0 and later.
-   **[NavigationLinkSet](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_navigationlinkset.htm)**
    Represents the navigation menu in an Experience Cloud site. A navigation menu consists of items that users can click to go to other parts of the site. This object is available in API version 35.0 and later.
-   **[NavigationMenuItem](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_navigationmenuitem.htm)**
    Represents a single menu item in a NavigationLinkSet. Use this object to create, delete, or update menu items in your Experience Cloud site’s navigation menu. This object is available in API version 35.0 and later.
-   **[NavigationMenuItemLocalization](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_navigationmenuitemlocalization.htm)**
    Represents the translated value of a navigation menu item in an Experience Cloud site. This object is available in API version 36.0 and later.
-   **[Network](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_network.htm)**
    Represents an Experience Cloud site. Salesforce Experience Cloud lets you create branded spaces for your employees, customers, and partners. You can customize and create experiences, whether they’re communities, sites, or portals, to meet your business needs, then transition seamlessly between them. Experience Cloud sites let you share information, records, and files with coworkers and stakeholders all in one place. This object is available in API version 26.0 and later.
-   **[NetworkActivityAudit](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_networkactivityaudit.htm)**
    Represents an audit trail of moderation actions in Experience Cloud sites. This object is available in API version 30.0 and later.
-   **[NetworkAffinity](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_networkaffinity.htm)**
    Represents a junction object that associates a user profile with a Network object, that is, with an Experience Cloud site. Use NetworkAffinity to assign a default Experience Cloud site to a user profile. This object is available in API version 41.0 and later.
-   **[NetworkAuthApiSettings](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_networkauthapisettings.htm)**
    Represents the settings that control enablement, access, and security for the Headless Registration Flow, Headless Forgot Password Flow, Headless Passwordless Login Flow, and their associated APIs. This object is available in API version 58.0 and later.
-   **[NetworkDataCategory](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_networkdatacategory.htm)**
    Represents data categories in Lightning Web Runtime (LWR) Experience Cloud Sites. This object is available in API version 59.0 and later.
-   **[NetworkDiscoverableLogin](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_networkdiscoverablelogin.htm)**
    Represents the Login Discoverable page from where customers and partners log in to an Experience Cloud site. Customers and partners are users with an External Identity license or any communities license for Experience Cloud. This object is available in API version 44.0 and later.
-   **[NetworkEmailTmplAllowlist](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_networkemailtmplallowlist.htm)**
    Represents an allowlist for the one-time password (OTP) email templates that are sent to end users during the Headless Registration Flow, the Headless Passwordless Login Flow, and the Headless Forgot Password Flow. This object is available in API version 60.0 and later.
-   **[NetworkFeedResponseMetric](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_networkfeedresponsemetric.htm)**
    Represents an object that stores the date and time values of question posts. It captures information for question creation, answer creation, and when an answer is marked as best answer This object is available in API version 51.0 and later.
-   **[NetworkMember](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_networkmember.htm)**
    Represents a member of an Experience Cloud site. Members can be either users in your company or external users with portal profiles. This object is available in API version 26.0 and later.
-   **[NetworkMemberGroup](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_networkmembergroup.htm)**
    Represents a group of members in an Experience Cloud site. Members can be either users in your internal org or external users assigned portal profiles. An administrator adds members to an Experience Cloud site by adding a profile or a permission set, and any user with the profile or permission set becomes a member of the site. This object is available in API version 26.0 and later.
-   **[NetworkModeration](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_networkmoderation.htm)**
    Represents a flag on an item in a community. This object is available in API version 30.0 and later.
-   **[NetworkPageOverride](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_networkpageoverride.htm)**
    Represents information about custom pages used to override the default pages in Experience Cloud sites. You can create Experience Builder or Visualforce pages and override the default pages in a site. Using custom pages allows you to create a more personalized experience for your users. This object is available in API version 34.0 and later.
-   **[NetworkSelfRegistration](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_networkselfregistration.htm)**
    Represents the account that self-registering Experience Cloud users are associated with by default. Self-registering users in an Experience Cloud site are required to be associated with an account, which the admin must specify while setting up self-registration for the site. If an account isn’t specified, Salesforce creates person accounts (when enabled) for self-registering users. This object is available in API version 34.0 and later.
-   **[NetworkUserHistoryRecent](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_networkuserhistoryrecent.htm)**
    Represents an Experience Cloud site user’s history of accessed records. This object is available in API version 42.0 and later.
-   **[Note](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_note.htm)**
    Represents a note, which is text associated with a custom object or a standard object, such as a Contact, Contract, or Opportunity.
-   **[NoteAndAttachment](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_noteandattachment.htm)**
    This read-only object contains all notes and attachments associated with an object.
-   **[NoteTag](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_notetag.htm)**
    Associates a word or short phrase with a Note.
-   **[OauthCustomScope](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_oauthcustomscope.htm)**
    Represents a permission defining the protected data that a connected app can access from an external entity when Salesforce is the OAuth authorization provider.
-   **[OauthCustomScopeApp](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_oauthcustomscopeapp.htm)**
    Represents the name of the connected app to which the custom scope is assigned. This object is available in API version 49.0 and later.
-   **[OauthToken](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_oauthtoken.htm)**
    Represents an OAuth access token for connected app authentication. Use this object to create a user interface for token management. This object is available in API version 32.0 and later.
-   **[OauthTokenExchangeHandler](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_oauthtokenexchangehandler.htm)**
    Represents a token exchange handler. The token exchange handler also consists of an Apex class. During the OAuth 2.0 token exchange flow, the token exchange handler is used to validate tokens from an external identity provider and to map users to Salesforce. This object is available in API version 60.0 and later.
-   **[OauthTokenExchHandlerApp](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_oauthtokenexchhandlerapp.htm)**
    Represents the enablement settings for a specific Salesforce connected app or external client app that’s enabled for the token exchange handler. A handler can be enabled for multiple apps. This object is available in API version 60.0 and later.
-   **[ObjectDataImport](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_objectdataimport.htm)**
    Represents the data import status of one or more object records. This object is available in API version 57.0 and later.
-   **[ObjectDataImportReference](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_objectdataimportreference.htm)**
    Represents the relationships to the associated reference objects showing the source from which the data is imported. This object is available in API version 57.0 and later.
-   **[ObjectMetadataTag](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_objectmetadatatag.htm)**
    Represents a meta tag for a store page. Meta tags in HTML documents provide structured data used by search engines for ranking and to show content in search results. This object is available in API version 60.0 and later.
-   **[ObjectPermissions](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_objectpermissions.htm)**
    Represents the enabled object permissions for the parent PermissionSet. This object is available in API version 24.0 and later.
-   **[ObjectRelatedUrl](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_objectrelatedurl.htm)**
    Represents a URL slug for a Product or Category page on a B2B Commerce or D2C Commerce LWR site, or a custom object, account, or contact page on an enhanced LWR Experience Cloud site. This object is available in API version 57.0 and later.
-   **[ObjectTerritory2AssignmentRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_objectterritory2assignmentrule.htm)**
    Represents a territory assignment rule that’s associated with an object, such as Account. ObjectTerritory2AssignmentRuleItem can be created or deleted if the BooleanFilter field on its corresponding ObjectTerritory2AssignmentRule is null. Available if Sales Territories has been enabled.
-   **[ObjectTerritory2AssignmentRuleItem](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_objectterritory2assignmentruleitem.htm)**
    A single row of selection criteria for an ObjectTerritory2AssignmentRule object. ObjectTerritory2AssignmentRuleItem can only be created or deleted if the BooleanFilter field on its corresponding ObjectTerritory2AssignmentRule object is a null value. Available if Sales Territories has been enabled.
-   **[ObjectTerritory2Association](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_objectterritory2association.htm)**
    Represents an association (by assignment) between a territory and an object record such as an account or a lead.
-   **[ObjectUserTerritory2View](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_objectuserterritory2view.htm)**
    Represents a user and object, such as an account or lead, assigned to a territory. This object is available in API version 58.0 and later.
-   **[OmniSupervisorConfig](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_omnisupervisorconfig.htm)**
    Represents the Command Center for Service configuration for an assigned group of supervisors. This object is available in API version 41.0 and later.
-   **[OmniSupervisorConfigAction](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_omnisupervisorconfigaction.htm)**
    Represents the actions available to the supervisors of a Command Center for Service configuration. This object is available in API version 56.0 and later.
-   **[OmniSupervisorConfigGroup](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_omnisupervisorconfiggroup.htm)**
    Represents the group of reps who are visible to the supervisors of a Command Center for Service configuration. The group, if visible, appears in the Agents tab of Command Center for Service. This object is available in API version 41.0 and later.
-   **[OmniSupervisorConfigProfile](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_omnisupervisorconfigprofile.htm)**
    Represents the supervisor profiles to which a Command Center for Service configuration applies. User-level configurations override profile-level configurations. This object is available in API version 41.0 and later.
-   **[OmniSupervisorConfigQueue](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_omnisupervisorconfigqueue.htm)**
    Represents the queues that are visible to the supervisors of a Command Center for Service configuration. The queue, if visible, appears in the Queues Backlog and Assigned Work tabs of Command Center for Service. This object is available in API version 53.0 and later.
-   **[OmniSupervisorConfigSkill](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_omnisupervisorconfigskill.htm)**
    Represents the skills that are visible to the supervisors of a Command Center for Service configuration. These skills, if visible, appear in the Skills Backlog tab of Command Center for Service. This object is available in API version 53.0 and later.
-   **[OmniSupervisorConfigTab](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_omnisupervisorconfigtab.htm)**
    Represents the visible tabs specified in a Command Center for Service configuration. This object is available in API version 60.0 and later.
-   **[OmniSupervisorConfigUser](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_omnisupervisorconfiguser.htm)**
    Represents the users to whom a Command Center for Service configuration applies. User-level configurations override profile-level configurations. This object is available in API version 41.0 and later.
-   **[OpenActivity](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_openactivity.htm)**
    This read-only object is displayed in a related list of open activities—future events and open tasks—related to an object. It includes activities for all contacts related to the object. OpenActivity fields for phone calls are only available if your organization uses Salesforce CRM Call Center.
-   **[OperatingHours](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_operatinghours.htm)**
    Represents the hours in which a service territory, service resource, or account is available for work. OperatingHours is used by Field Service, Salesforce Scheduler, Salesforce Meetings, Sales Engagement, and Workforce Engagement. This object is available in API version 38.0 and later.
-   **[OperatingHoursHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_operatinghourshistory.htm)**
    Represents the history of changes made to tracked fields on an operating hours record. This object is available in API version 38.0 and later.
-   **[OperatingHoursHoliday](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_operatinghoursholiday.htm)**
    Represents the day or hours for which a service territory and service resources exclusive to the service territory are unavailable in Salesforce Scheduler. This object is available in API version 54.0 and later.
-   **[Opportunity](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_opportunity.htm)**
    Represents an opportunity, which is a sale or pending deal.
-   **[OpportunityCompetitor](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_opportunitycompetitor.htm)**
    Represents a competitor on an Opportunity.
-   **[OpportunityContactRole](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_opportunitycontactrole.htm)**
    Represents the role that a Contact plays on an Opportunity.
-   **[OpportunityContactRoleSuggestionInsight](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_opportunitycontactrolesuggestioninsight.htm)**
    Represents a suggestion for a new opportunity contact role. Available in API versions 45.0 and later.
-   **[OpportunityFieldHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_opportunityfieldhistory.htm)**
    Represents the history of changes to the values in the fields of an opportunity. This object is available in versions 13.0 and later.
-   **[OpportunityHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_opportunityhistory.htm)**
    Represents the stage history of an opportunity.
-   **[OpportunityInsight](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_opportunityinsight.htm)**
    Represents an individual insight (deal prediction, follow-up reminder, or key moment) related to an opportunity record.
-   **[OpportunityLineItem](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_opportunitylineitem.htm)**
    Represents an opportunity line item, which is a member of the list of Product2 products associated with an Opportunity.
-   **[OpportunityLineItemSchedule](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_opportunitylineitemschedule.htm)**
    Represents information about the quantity, revenue distribution, and delivery dates for a particular OpportunityLineItem.
-   **[OpportunityLineItemSplit](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_opportunitylineitemsplit.htm)**
    Represents information about an opportunity product split, including percentages, amounts, and owner. This object is available in API version 58.0 and later.
-   **[OpportunityOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_opportunityownersharingrule.htm)**
    Represents a rule for sharing an opportunity with users other than the owner.
-   **[OpportunityPartner](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_opportunitypartner.htm)**
    This object represents a partner relationship between an Account and an Opportunity. An OpportunityPartner record is created automatically when a Partner record is created for a partner relationship between an account and an opportunity.
-   **[OpportunityRelatedDeleteLog](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_opportunityrelateddeletelog.htm)**
    Represents an audit log of the deletion of opportunity-related child records, such as opportunity team members, product splits, or opportunity splits. This object is available in API version 59.0 and later.
-   **[OpportunityShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_opportunityshare.htm)**
    Represents a sharing entry on an Opportunity.
-   **[OpportunitySplit](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_opportunitysplit.htm)**
    OpportunitySplit credits one or more opportunity team members with a portion of the opportunity amount. This object is available in API version 16.0 and later for pilot customers, and version 28.0 and later for others.
-   **[OpportunitySplitType](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_opportunitysplittype.htm)**
    OpportunitySplitType provides unique labels and behavior for each split type. This object is available in API version 28.0 and later.
-   **[OpportunityStage](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_opportunitystage.htm)**
    Represents the stage of an Opportunity in the sales pipeline, such as New Lead, Negotiating, Pending, Closed, and so on.
-   **[OpportunityTag](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_opportunitytag.htm)**
    Associates a word or short phrase with an Opportunity.
-   **[OpportunityTeamMember](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_opportunityteammember.htm)**
    Represents a User on the opportunity team of an Opportunity.
-   **[OpptyLineItemSplitType](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_opptylineitemsplittype.htm)**
    Represents an opportunity product split type. This object is available in API version 58.0 and later.
-   **[Order](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_order.htm)**
    Represents an order associated with a contract or an account.
-   **[OrderAction](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderaction.htm)**
    Indicates the type of order, such as a new sale or a cancellation. This object is available in API version 55.0 and later.
-   **[OrderAdjustmentGroup](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderadjustmentgroup.htm)**
    Group containing a set of adjustments applied to an order. This object is available in API version 48.0 and later.
-   **[OrderAdjustmentGroupSummary](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderadjustmentgroupsummary.htm)**
    Represents the current properties and state of a group of related price adjustments. Associated with a set of OrderItemAdjustmentLineSummaries that apply to OrderItemSummaries belonging to one OrderSummary. Corresponds to one or more order adjustment group objects, consisting of an original object and any change objects applicable to it. This object is available in API version 48.0 and later.
-   **[OrderChangeLog](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderchangelog.htm)**
    Represents a log record of all change requests made to an order post activation. A log record is always one-to-one to change an order request. This object is available in API version 48.0 and later.
-   **[OrderChgReasonCategMap](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderchgreasoncategmap.htm)**
    The mapping between an order change reason and a service flow category. This object is available in API version 65.0 and later.
-   **[OrderDeliveryGroup](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderdeliverygroup.htm)**
    A group of order items that share a delivery method and address. The delivery method and address are used during the fulfillment process, such as shipping as a gift, downloading, picking up in store, or shipping to a standard address This object is available in API version 48.0 and later.
-   **[OrderDeliveryGroupSummary](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderdeliverygroupsummary.htm)**
    Represents the current properties and state of a group of OrderItemSummaries, belonging to one OrderSummary, to be fulfilled using the same delivery method and delivered to the same address. A single shipment can include them all, but that isn’t guaranteed. Corresponds to one or more order delivery group objects, consisting of an original object and any change objects applicable to it. This object is available in API version 48.0 and later.
-   **[OrderDeliveryMethod](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderdeliverymethod.htm)**
    Shows the customizations and options that a buyer selected for their delivery method. This object is available in API version 48.0 and later.
-   **[OrderHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderhistory.htm)**
    Represents historical information about changes that have been made to the standard fields of the associated order, or to any custom fields with history tracking enabled.
-   **[OrderItem](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderitem.htm)**
    Represents an order product that your organization sells.
-   **[OrderItemAdjustmentLineItem](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderitemadjustmentlineitem.htm)**
    An adjustment that has been made to an order item. This object is available in API version 48.0 and later.
-   **[OrderItemAdjustmentLineSummary](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderitemadjustmentlinesummary.htm)**
    Represents the current properties and state of price adjustments on an OrderItemSummary. Corresponds to one or more order item adjustment line item objects, consisting of an original object and any change objects applicable to it. This object is available in API version 48.0 and later.
-   **[OrderItemGroup](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderitemgroup.htm)**
    Stores the group information for line items in an order. It also stores the aggregated line field information (subtotal). It contains a parent-child relationship to order. This object is available in API version 62.0 and later.
-   **[OrderItemRecipient](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderitemrecipient.htm)**
    Represents a site, employee, or other entity for which services are being ordered. This includes essential details such as the recipient's name, contact information, and the specific site or location where the services will be provided. This object is available in API version 62.0 and later.
-   **[OrderItemRelationship](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderitemrelationship.htm)**
    Describes a relationship between order products. This object is available in API version 58.0 and later.
-   **[OrderItemSummary](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderitemsummary.htm)**
    Represents the current properties and state of a product or charge on an OrderSummary. Corresponds to one or more order item objects, consisting of an original object and any change objects applicable to it. This object is available in API version 48.0 and later.
-   **[OrderItemSummaryChange](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderitemsummarychange.htm)**
    Represents a change to an OrderItemSummary, usually a reduction in quantity due to a cancel or return. Corresponds to a change order item. This object is available in API version 48.0 and later.
-   **[OrderItemSummaryRelationship](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderitemsummaryrelationship.htm)**
    Junction object used to track how an original order summary (created before any exchanges have occurred) relates to other order summary objects in a chain of exchange orders. This object is available in API version 60.0 and later. An exchange order is an OrderSummary object whose SourceProcess property is set to Exchange. An original order summary can have an exchange order, which in turn can have yet another exchange order, and so on. The OrderSummaryRelationship object maintains this relationship between OrderSummary objects.
-   **[OrderItemTaxLineItem](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderitemtaxlineitem.htm)**
    The tax amount that has been applied to an order item. This object is available in API version 48.0 and later.
-   **[OrderItemTaxLineItemSummary](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderitemtaxlineitemsummary.htm)**
    Represents the current tax on an OrderItemSummary or OrderItemAdjustmentLineSummary. Corresponds to one or more order item tax line items, consisting of an original object and any change objects applicable to it. This object is available in API version 48.0 and later.
-   **[OrderItemType](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderitemtype.htm)**
    Shows whether the order product is a product line or charge line. This object is available in API version 48.0 and later.
-   **[OrderOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderownersharingrule.htm)**
    Represents a rule which determines order sharing access for the order’s owners.
-   **[OrderPaymentSummary](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderpaymentsummary.htm)**
    Represents the current properties and state of payments using a single payment method that are applied to one OrderSummary. This object is available in API version 48.0 and later.
-   **[OrderPaymentSummaryReference](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderpaymentsummaryreference.htm)**
    OrderPaymentSummaryReference is a junction object that allows an order payment summary to be shared with another order summary. This object is available in API version 60.0 and later.
-   **[OrderShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_ordershare.htm)**
    Represents a sharing entry on an Order. This object is available in API version 48.0 and later.
-   **[OrderStatus](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderstatus.htm)**
    Represents the status of the order entity. This object is available in API version 48.0 and later.
-   **[OrderSummary](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_ordersummary.htm)**
    Represents the current properties and state of an order. Corresponds to one or more order objects, consisting of an original object and any change objects applicable to it. This object is available in API version 48.0 and later.
-   **[OrderSummaryAdditionalInfo](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_ordersummaryadditionalinfo.htm)**
    Stores information related to OrderSummary including context around the order, such as inventory reservation details, order origination, and other values that Einstein uses to perform order analysis. Only reservation details can be stored in this object. This object is available in API version 58.0 and later.
-   **[OrderSummaryRelationship](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_ordersummaryrelationship.htm)**
    Junction object used to track how an original order summary (created before any exchanges have occurred) relates to other order summary objects in a chain of exchange orders. This object is available in API version 60.0 and later.
-   **[OrderSummaryRoutingSchedule](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_ordersummaryroutingschedule.htm)**
    Represents an attempt to route an order summary to one or more inventory locations for fulfillment. You can use it to schedule future attempts and to record completed attempts. This object is available in API version 51.0 and later.
-   **[Organization](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_organization.htm)**
    Represents key configuration information for an organization.
-   **[OrgDeleteRequest](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orgdeleterequest.htm)**
    Represents a request to delete a developer edition (DE) org. This object is available in API version 42.0 and later. It is available only in Developer and Database.com editions.
-   **[OrgEmailAddressSecurity](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orgemailaddresssecurity.htm)**
    Defines the assignment of a user profile to an org-wide email address. This object is available in API version 58.0 and later.
-   **[OrgMetric](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orgmetric.htm)**
    Represents a feature or metric that Salesforce Optimizer evaluates. This object is available in API version 47.0 and later.
-   **[OrgMetricScanResult](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orgmetricscanresult.htm)**
    Represents data or an item associated with a feature’s results in a Salesforce Optimizer evaluation. For example, for the Custom Field Limit feature, an OrgMetricScanResult object represents an object flagged for approaching the custom field limit. This object is available in API version 47.0 and later.
-   **[OrgMetricScanSummary](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orgmetricscansummary.htm)**
    Represents the results summary for a specific feature in a Salesforce Optimizer evaluation. This object is available in API version 47.0 and later.
-   **[OrgSnapshot](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orgsnapshot.htm)**
    Represents a snapshot of a scratch org. Snapshots capture the state of a scratch org so that you can use it to quickly spin up new scratch orgs using its configuration. This object is available in API version 61.0 and later.
-   **[OrgWideEmailAddress](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orgwideemailaddress.htm)**
    Represents an organization-wide email address for user profiles.
-   **[OSAsyncChgCompletedEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_osasyncchgcompletedevent.htm)**
    An event that allows the processing of the credit memo, invoices, and other entities after a bulk action has successfully completed. The event provides all of the values that would exist on the synchronous APIs. This object is available in API version 63.0 and later.
-   **[OutOfOffice](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_outofoffice.htm)**
    Represents a user-set value on a profile that shows when the user intends to be out of the office. This object is available in API version 41.0 and later.
-   **[OutgoingEmail](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_outgoingemail.htm)**
    For internal use only.
-   **[OutgoingEmailRelation](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_outgoingemailrelation.htm)**
    For internal use only.
-   **[OwnedContentDocument](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_ownedcontentdocument.htm)**
    Represents a file owned by a user. This object is available in version 30.0 and later.
-   **[OwnerChangeOptionInfo](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_ownerchangeoptioninfo.htm)**
    Represents default and optional actions that can be performed when a record’s owner is changed. Available in API version 35.0 and later, but to query for change owner metadata, use the OwnerChangeOptionInfo object in Tooling API instead. For more information, see [OwnerChangeOptionInfo](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_tooling.meta/api_tooling/tooling_api_objects_ownerchangeoptioninfo.htm) in the Tooling API.
-   **[PackageInstallEventLog](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_packageinstalleventlog.htm)**
    PackageInstallEventLog stores details about package installation in the organization. This object is available in API version 62.0 and later.
-   **[PackageLicense](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_packagelicense.htm)**
    Represents a license for an installed managed package. This object is available in API version 31.0 and later.
-   **[PackagePushError](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_packagepusherror.htm)**
    Represents an error encountered during a push request. The number of PackagePushError records created depends on the number of push jobs in the request that result in an error.
-   **[PackagePushJob](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_packagepushjob.htm)**
    Represents an individual push job for upgrading a package in an org from one version to another version. There can be multiple push jobs created for one push request. For example, if you want to upgrade five orgs as part of one push, you have one PackagePushRequest record and five PackagePushJob records.
-   **[PackagePushRequest](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_packagepushrequest.htm)**
    Represents the push request for upgrading a package in one or many orgs from one version to another version.
-   **[PackageSubscriber](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_packagesubscriber.htm)**
    Represents an installation of a package in an org. This object contains installation information for managed or unlocked packages developed in the org you’re logged in to.
-   **[Participant](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_participant.htm)**
    Represents a participant in a ConversationParticipant. An existing or new Participant is referenced each time a new ConversationParticipant is created. This object is available in API version 57.0 and later.
-   **[Partner](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_partner.htm)**
    Represents a partner relationship between two Account records or between an Opportunity record and an Account record.
-   **[PartnerFundAllocation](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_partnerfundallocation.htm)**
    Represents allocated funds from a partner marketing budget for channel partners. This object is available in API version 41.0 and later.
-   **[PartnerFundClaim](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_partnerfundclaim.htm)**
    Represents a claim of funds from the partner marketing budget by a channel partner. This object is available in API version 41.0 and later.
-   **[PartnerFundRequest](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_partnerfundrequest.htm)**
    Represents a request for funds from the partner marketing budget by a channel partner. This object is available in API version 41.0 and later.
-   **[PartnerMarketingBudget](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_partnermarketingbudget.htm)**
    Represents a budget that provides funds to channel partners for selling and marketing products and services. This object is available in API version 41.0 and later.
-   **[PartnerNetworkConnection](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_partnernetworkconnection.htm)**
    Represents a Salesforce to Salesforce connection between Salesforce organizations.
-   **[PartnerNetworkRecordConnection](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_partnernetworkrecordconnection.htm)**
    Represents a record shared between Salesforce organizations using Salesforce to Salesforce.
-   **[PartnerNetworkSyncLog](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_partnernetworksynclog.htm)**
    Represents the Org Sync Log tab in Salesforce, where Salesforce administrators can track the replication of record inserts and updates being performed in Organization Sync. The Connection Detail page for the replication connection also displays the Org Sync Log’s twenty most recent entries, and provides a link to the log.
-   **[PartnerRole](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_partnerrole.htm)**
    Represents a role for an account Partner, such as consultant, supplier, and so on.
-   **[PartyConsent](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_partyconsent.htm)**
    Represents consent preferences for an individual. This object is available in API version 48.0 and later.
-   **[Payment](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_payment.htm)**
    Represents a single event when a shopper makes a payment. For credit cards, this event is a payment capture or payment sale, but it doesn't appear on the shopper's credit card statement. This object is available in API version 48.0 and later.
-   **[PaymentAuthAdjustment](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_paymentauthadjustment.htm)**
    Shows information about an adjustment made to an authorized transaction. This object is available in API version 51.0 and later.
-   **[PaymentAuthorization](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_paymentauthorization.htm)**
    Represents a single payment authorization event where users can capture or reverse a payment against a reserve of funds. This object is available in API version 48.0 and later.
-   **[PaymentCredit](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_paymentcredit.htm)**
    Tracks the amount of money returned to the customer. The return can be a store credit, a gift card, or another type of credit. It's linked to the original payment record and includes the total credit amount issued. This object is available in API version 65.0 and later.
-   **[PaymentCreditLinePayment](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_paymentcreditlinepayment.htm)**
    A payment credit line payment. This object is available in API version 65.0 and later.
-   **[PaymentCreditTransaction](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_paymentcredittransaction.htm)**
    A payment credit transaction. This object is available in API version 65.0 and later.
-   **[PaymentGateway](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_paymentgateway.htm)**
    Platform object that represents the connection to an external payment gateway. This object is available in API version 48.0 and later.
-   **[PaymentGatewayLog](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_paymentgatewaylog.htm)**
    Stores information exchanged between the Salesforce payments platform and external payment gateways. Gateway logs can also record payloads from external payment entities. This object is available in API version 48.0 and later.
-   **[PaymentGatewayProvider](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_paymentgatewayprovider.htm)**
    Setup entity for payment gateways. Defines the connection to a payment gateway Apex adapter. This object is available in API version 48.0 and later.
-   **[PaymentGroup](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_paymentgroup.htm)**
    Top-level object that groups all payment transactions that are processed for an order or invoice. PaymentGroup is a standalone object, so it isn’t required for users to execute payment transactions (authorizations, captures, refunds, and sales). This object is available in API version 48.0 and later.
-   **[PaymentInitiationSource](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_paymentinitiationsource.htm)**
    Represents the originating source of a payment. This information helps other Salesforce products integrate with Salesforce Payments. This object is available in API version 63.0 and later.
-   **[PaymentIntent](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_paymentintent.htm)**
    Represents data temporarily stored during a transaction’s lifecycle that can identify the buyer, the merchant, and the amount the buyer is sending to the merchant. Data such as timestamp and amount returned can also be stored in PaymentIntent. This object is available in API version 58.0 and later.
-   **[PaymentIntentEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_paymentintentevent.htm)**
    Represents a payment intent platform event. Subscribe to these events so you can listen and respond to them when they’re published. For example, create a Salesforce Flow that is triggered when one of these events is published. This object is available in API version 59.0 and later.
-   **[PaymentLineInvoice](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_paymentlineinvoice.htm)**
    Represents a payment allocated to or unallocated from an invoice. This object is available in API version 48.0 and later.
-   **[PaymentLink](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_paymentlink.htm)**
    A link that a merchant can share with customers to collect payments for products and services. The payment link, which you can embed into a Salesforce app or send directly to a customer, directs the customer to a Pay Now payment page. The page can show a total amount owed or an itemized list or products, shipping and tax charges, and a total amount owed. The customer enters their contact and payment details, and submits their payment. The amounts are shown in the store's currency. This object is available in API version 58.0 and later.
-   **[PaymentLinkEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_paymentlinkevent.htm)**
    Represents a payment link platform event. Subscribe to these events so you can listen and respond to them when they’re published. For example, create a Salesforce Flow that is triggered when one of these events is published. This object is available in API version 59.0 and later.
-   **[PaymentMethod](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_paymentmethod.htm)**
    Represents the method that a buyer uses to compensate the seller of a good or service. Common payment methods include cash, checks, credit or debit cards, money orders, bank transfers, and online payment services. This object is available in API version 48.0 and later.
-   **[PymtSchdDistributionMethod](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_pymtschddistributionmethod.htm)**
    Indicates how the total payment is divided into partial payments. This object is available in API version 56.0 and later.
-   **[PaymentScheduleTreatmentDtl](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_paymentscheduletreatmentdtl.htm)**
    Contains configuration information for the payment schedule treatment detail. This object is available in API version 56.0 and later.
-   **[PaymentTerm](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_paymentterm.htm)**
    Defines your company's method and expectations for receiving payment. This object is available in API version 55.0 and later.
-   **[PaymentTermItem](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_paymenttermitem.htm)**
    Defines the attributes of a payment term that your company uses. The PaymentTermItem is used to determine the due date on invoices. This object is available in API version 55.0 and later.
-   **[PaymentSchedule](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_paymentschedule.htm)**
    The payment schedule represents a collection of payments that a customer wants to collect at different times for a certain record. A schedule contains one or more payment schedule items, where each item represents one payment to be processed. Each of a schedule’s items can have different payment configuration fields, such as payment methods, payment dates, and payment accounts. When a payment scheduler launches a payment run, the run evaluates active payment schedule items, and picks them up for payment processing if they align with the scheduler’s payment criteria. This object is available in API version 55.0 and later.
-   **[PaymentScheduleItem](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_paymentscheduleitem.htm)**
    A payment schedule contains one or more payment schedule items, where each item represents one payment to be processed. Each of a schedule’s items can have different payment configuration fields, such as payment methods, payment dates, and payment accounts. When a payment scheduler launches a payment run, the run evaluates active payment schedule items, and picks them up for payment processing if they align with the scheduler’s payment criteria. This object is available in API version 55.0 and later.
-   **[PaymentSchedulePolicy](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_paymentschedulepolicy.htm)**
    Contains configuration information for the payment schedule policy. This object is available in API version 56.0 and later.
-   **[PaymentScheduleTreatment](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_paymentscheduletreatment.htm)**
    Contains configuration information for the payment schedule. This object is available in API version 56.0 and later.
-   **[PendingOrderSummary](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_pendingordersummary.htm)**
    Object representing a B2C Commerce order ingested via High Scale Orders before an OrderSummary is created for it. Optimized for online transaction processing (OLTP). This object is available in API version 55.0 and later.
-   **[PendingServiceRouting](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_pendingservicerouting.htm)**
    Represents the routing details of a work item that’s waiting to be routed or assigned. This object is available in API version 40.0 and later.
-   **[PendingServiceRoutingInteractionInfo](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_pendingserviceroutinginteractioninfo.htm)**
    Represents PendingServiceRouting interaction information that’s used when work is routed to an agent. For a screen pop, it specifies which records to open when work is routed to an agent from a specific channel. PendingServiceRoutingInteractionInfo is read-only. This object is available in API version 53.0 and later.
-   **[Period](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_period.htm)**
    Represents a fiscal period defined in FiscalYearSettings.
-   **[PermissionSet](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_permissionset.htm)**
    Represents a set of permissions that’s used to grant more access to one or more users without changing their profile or reassigning profiles. This object is available in API version 22.0 and later.
-   **[PermissionSetAssignment](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_permissionsetassignment.htm)**
    Represents a user’s assignment to a permission set or permission set group. This object is available in API version 22.0 and later.
-   **[PermissionSetGroup](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_permissionsetgroup.htm)**
    Represents a group of permission sets and the permissions within them. Use permission set groups to organize permissions based on job functions or tasks. Then, you can package the groups as needed. This object is available in API version 45.0 and later.
-   **[PermissionSetGroupComponent](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_permissionsetgroupcomponent.htm)**
    A junction object that relates the PermissionSetGroup and PermissionSet objects via their respective IDs; enables permission set group recalculation to determine the aggregated permissions for the group. This object is available in API version 45.0 and later.
-   **[PermissionSetLicense](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_permissionsetlicense.htm)**
    Represents a license that’s used to enable one or more users to receive a specified permission without changing their profile or reassigning profiles. You can use permission set licenses to grant access, but not to deny access. This object is available in API version 29.0 and later.
-   **[PermissionSetLicenseAssign](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_permissionsetlicenseassign.htm)**
    Represents the association between a User and a PermissionSetLicense. This object is available in API version 29.0 and later.
-   **[PermissionSetLicenseDefinition (Developer Preview)](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_permissionsetlicensedefinition.htm)**
    Represents the definition of a custom permission set license, which entitles specified features in a package. This object is available in API version 54.0 and later.
-   **[PermissionSetTabSetting](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_permissionsettabsetting.htm)**
    Represents a permission set tab setting. Requires the View Setup permission. Use this object to query all tab settings of the permission set. This object is available in API version 45.0 and later.
-   **[PersnlBatchDecision](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_PersnlBatchDecision.htm)**
    Represents a batch personalization that delivers personalization decisions (content or recommendations) to a customer segment. Available in API version 64.0 and later.
-   **[PersonAccountOwnerPowerUser](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_personaccountownerpoweruser.htm)**
    Represents a user who can own more than 50,000 customer or partner portal accounts. Person account owner power users can own a large number of either customer or partner users. Their role can’t be changed and they must be at the root of the role hierarchy. Person account owner power user objects can't be created if deferred sharing is turned on for your org. Person account owner power user objects can be created while deferred sharing is turned off for an org. Deferred sharing can be turned back on after person account owner power user objects have been created. This object is available in API version 57.0 and later.
-   **[PersonalOrgInfo](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_personalorginfo.htm)**
    Represents the information for a Tableau Next personal org. This object is available in API version 64.0 and later.
-   **[PersonalizationDecision](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_PersonalizationDecision.htm)**
    Represents a set of targeting rules within a personalization point that determine an individual's eligibility to receive personalized content and the content to deliver. Available in API version 62.0 and later.
-   **[PersonalizationObjective](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_PersonalizationObjective.htm)**
    Represents a specific business outcome that you want to achieve when creating a recommender. Available in API version 62.0 and later.
-   **[PersonalizationPoint](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_PersonalizationPoint.htm)**
    Represents a specific touch point in an experience where a personalization decision can be made. It connects a data space, profile data graph, personalization type, and response template to deliver personalized content at that time in a customer journey. Available in API version 62.0 and later.
-   **[PersonalizationSchema](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_PersonalizationSchema.htm)**
    Represents a personalization response template that’s used when you build a personalization decision. Available in API version 62.0 and later.
-   **[PersonalizationTargetInfo](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_personalizationtargetinfo.htm)**
    Represents a target for an audience. This object is available in API version 47.0 and later.
-   **[PermissionUpdateEventLog](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_permissionupdateeventlog.htm)**
    Permission update events represent changes to object, field, and user permissions and setup entity access that occur in profiles and permission sets. The event type also tracks if you clone profiles or change whether session activation is required in permission sets or permission set groups. This object is available in API version 65.0 and later.
-   **[PersonTraining](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_persontraining.htm)**
    Represents an assignment of a learning module in Workforce Engagement. This object is available in API version 54.0 and later.
-   **[PicklistValueInfo](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_picklistvalueinfo.htm)**
    Represents the active picklist values for a given picklist field. This object is available in API version 40.0 and later.
-   **[PickTicket](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_pickticket.htm)**
    A PickTicket represents quantities of one or more products to be picked for fulfillment at a location. It can include products belonging to one or more fulfillment orders. This object is available in API version 57.0 and later.
-   **[PickTicketAssignment](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_pickticketassignment.htm)**
    Represents the association of a FulfillmentOrder with a PickTicket. A PickTicket has one PickTicketAssignment for each FulfillmentOrder containing products to be picked as part of that PickTicket. This object is available in API version 57.0 and later.
-   **[PickTicketProduct](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_pickticketproduct.htm)**
    Represents a quantity of a product to be picked as part of a PickTicket. It can include quantities for multiple FulfillmentOrders. This object is available in API version 57.0 and later.
-   **[PipelineInspectionListView](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_pipelineinspectionlistview.htm)**
    Represents a pipeline view, an intelligence view, or a saved filter. A pipeline view shows a set of opportunity records, based on specific criteria. An intelligence view shows a set of account, lead, or contact records, based on specific criteria. This object is available in API version 53.0 and later.
-   **[PipelineInspectionSumField](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_pipelineinspectionsumfield.htm)**
    Use this object to learn which field from the opportunity object is used to aggregate Pipeline Inspection metrics on a pipeline view. This object is available in API version 56.0 and later.
-   **[PipelineInspMetricConfig](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_pipelineinspmetricconfig.htm)**
    Represents the configuration of a forecast category metric that appears in the Pipeline Inspection view. This object is available in API version 55.0 and later.
-   **[PipelineInspMetricConfigLocalization](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_pipelineinspmetricconfiglocalization.htm)**
    Represents the translated label of a Pipeline Inspection metric. This object is available in API version 55.0 and later.
-   **[PlatformAction](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_platformaction.htm)**
    PlatformAction is a virtual read-only object. It enables you to query for actions displayed in the UI, given a user, a context, device format, and a record ID. Examples include standard and custom buttons, quick actions, and productivity actions.
-   **[PlatformEventUsageMetric](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_platformeventusagemetric.htm)**
    Contains usage data for event publishing and delivery to CometD and Pub/Sub API clients, empApi Lightning components, and event relays. If Enhanced Usage Metrics isn't enabled, usage data is available for the last 24 hours, ending at the last hour, and for historical daily usage. In API 58.0 and later, you can enable Enhanced Usage Metrics to get usage data by event name and client for granular time intervals. PlatformEventUsageMetric contains separate usage metrics for platform events and change data capture events. This object is available in API version 50.0 and later.
-   **[PlatformStatusAlertEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_platformstatusalertevent.htm)**
    The documentation has moved to [PlatformStatusAlertEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/sforce_api_objects_platformstatusalertevent.htm "HTML (New Window)") in the Platform Events Developer Guide.
-   **[PortalDelegablePermissionSet](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_portaldelegablepermissionset.htm)**
    PortalDelegablePermissionSet is a base platform object used to store permission sets that can be assigned by a delegated portal/external user admin (DPUA) to portal users. This object is available in API version 47.0 and later.
-   **[PresenceConfigDeclineReason](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_presenceconfigdeclinereason.htm)**
    Represents the settings for a decline reason that a presence user provides when declining work. This object is available in API version 37.0 and later.
-   **[PresenceDeclineReason](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_presencedeclinereason.htm)**
    Represents an Omni-Channel decline reason that agents can select when declining work requests. This object is available in API version 37.0 and later.
-   **[PresenceUserConfig](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_presenceuserconfig.htm)**
    Represents a configuration that determines a presence user’s settings. This object is available in API version 32.0 and later.
-   **[PresenceUserConfigProfile](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_presenceuserconfigprofile.htm)**
    Represents a configuration that determines the settings that are assigned to presence users who are assigned to a specific profile. User-level configurations override profile-level configurations. This object is available in API version 32.0 and later.
-   **[PresenceUserConfigUser](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_presenceuserconfiguser.htm)**
    Represents a configuration that determines the settings that are assigned to a presence user. These user-level configurations override profile-level configurations. This object is available in API version 32.0 and later.
-   **[PriceAdjustmentGroupShape](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_priceadjustmentgroupshape.htm)**
    Defines the business logic for a top-level price adjustment, for example, a discount applied to an entire order. This object is available in API version 57.0 and later.
-   **[PriceAdjustmentItemShape](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_priceadjustmentitemshape.htm)**
    Defines the business logic for an item-level price adjustment, for example, a discount on an order item. This object is available in API version 57.0 and later.
-   **[PriceAdjustmentSchedule](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_priceadjustmentschedule.htm)**
    Represents a series of discounts offered depending on your product's configuration, quantity, and when they’re purchased in combination with other products. This object is available in API version 47.0 and later.
-   **[PriceAdjustmentTier](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_priceadjustmenttier.htm)**
    Represents a discount tier in a price adjustment schedule. This object is available in API version 47.0 and later.
-   **[Pricebook2](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_pricebook2.htm)**
    Represents a price book that contains the list of products that your org sells.
-   **[Pricebook2History](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_pricebook2history.htm)**
    Represents historical information about changes that have been made to the standard fields of the associated Pricebook2, or to any custom fields with history tracking enabled. This object is available in API version 66.0 and later.
-   **[PricebookEntry](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_pricebookentry.htm)**
    Represents a product entry (an association between a Pricebook2 and Product2) in a price book.
-   **[PricebookEntryAdjustment](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_pricebookentryadjustment.htm)**
    Read-only junction object created when you associate a price adjustment schedule with a price book entry. This object is available in API version 47.0 and later.
-   **[PriceProtectionExecution](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_priceprotectionexecution.htm)**
    Represents an instance of running the price protection process, capturing execution time, status, and the effective date of price changes. This object is available in API version 63.0 and later.
-   **[PriceProtectExecLineItem](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_priceprotectexeclineitem.htm)**
    Represents a line item created as part of a Price Protection Execution. This object is available in API version 63.0 and later.
-   **[PriceProtectionTerm](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_priceprotectionterm.htm)**
    Represents a configuration record that defines the rules, types, and eligible conditions for price protection. This object is available in API version 63.0 and later.
-   **[PrivacyHold](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_privacyhold.htm)**
    Represents a Privacy Hold that indicates that a record should be preserved from masking or deletion by Data Management policies in Privacy Center. This object is available in API version 59.0 and later.
-   **[PrivacyHoldReason](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_privacyholdreason.htm)**
    Represents the business or legal purpose for why a record has a Privacy Hold. This object is available in API version 59.0 and later.
-   **[PrivacyJobSession](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_privacyjobsession.htm)**
    Represents the status of past, ongoing, and scheduled policy jobs in Privacy Center. This object is available in API version 59.0 and later.
-   **[PrivacyObjectSession](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_privacyobjectsession.htm)**
    Represents the status of each object being processed in past, ongoing, and scheduled policy jobs in Privacy Center. This object is available in API version 59.0 and later.
-   **[PrivacyRequest](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_privacyrequest.htm)**
    See details and monitor the status of Data Subject Access Requests made in Privacy Center. This object is available in API version 54.0 and later.
-   **[PrivacyRTBFRequest](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_privacyrtbfrequest.htm)**
    Represents a Right to Be Forgotten Request made in Privacy Center. This object is available in API version 59.0 and later.
-   **[PrivacySessionRecordFailure](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_privacysessionrecordfailure.htm)**
    Represents error messages encountered during policy job executions in Privacy Center. This object is available in API version 59.0 and later.
-   **[Problem](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_problem.htm)**
    Problems represent the root cause data of one or more incidents. This object contains all the details of a problem, documenting the history of the problem from detection to closure. This object is available in API version 53.0 and later.
-   **[ProblemIncident](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_problemincident.htm)**
    Represents a junction object that relates a Problem to an Incident. This object is available in API version 53.0 and later.
-   **[ProblemRelatedItem](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_problemrelateditem.htm)**
    Represents a junction object that relates a Problem to an Asset. This object is available in API version 53.0 and later.
-   **[ProcessDefinition](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_processdefinition.htm)**
    Represents the definition of a single approval process.
-   **[ProcessException](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_processexception.htm)**
    Represents a business exception, such as a processing failure on an order summary. A separate process is required to resolve the failure that caused the process exception before processing can continue. This object is available in API version 50.0 and later.
-   **[ProcessFlowMigration](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_processflowmigration.htm)**
    Represents a process's migrated criteria and the resulting migrated flow. This object is available in API version 58.0 and later.
-   **[ProcessInstance](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_processinstance.htm)**
    Represents an instance of a single, end-to-end approval process. Use this and the node, step, and workitem process instance objects to create approval history reports.
-   **[ProcessInstanceHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_processinstancehistory.htm)**
    This read-only object shows all steps and pending approval requests associated with an approval process (ProcessInstance).
-   **[ProcessInstanceNode](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_processinstancenode.htm)**
    Represents a step in an instance of an approval process. Compare to ProcessNode, which describes the step in a process definition. Use this object to retrieve approval history.
-   **[ProcessInstanceStep](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_processinstancestep.htm)**
    Represents one work item in an approval process (ProcessInstance).
-   **[ProcessInstanceWorkitem](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_processinstanceworkitem.htm)**
    Represents a user’s pending approval request.
-   **[ProcessNode](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_processnode.htm)**
    Describes a step in a process definition. Compare to ProcessInstanceNode, which describes a step in a running process. This object is available in API version 31.0 and later.
-   **[ProducerCommission](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_producercommission.htm)**
    Represents a producer's commission for an insurance policy. The commission can be calculated from the commissionable transactions or can be populated from an external system. This object is available in API version 51.0 and later.
-   **[Product2](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_product2.htm)**
    Represents a product that your company sells.
-   **[Product2DataTranslation](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_product2datatranslation.htm)**
    Represents the translated values of the data stored within a [Product2](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_product2.htm "Represents a product that your company sells.") record’s fields. This object is available in API version 45.0 and later.
-   **[ProductAttribute](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_productattribute.htm)**
    Represents the attributes that can be associated with a product. This object is available in API version 50.0 and later.
-   **[ProductAttributeSet](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_productattributeset.htm)**
    Represents a group of attributes that can be associated with a product. This object is available in API version 50.0 and later.
-   **[ProductAttributeSetItem](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_productattributesetitem.htm)**
    Represents a set of attributes that can be associated with a product. This object is available in API version 50.0 and later.
-   **[ProductAttributeSetProduct](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_productattributesetproduct.htm)**
    Represents the product associated with a set of attributes. This object is available in API version 50.0 and later.
-   **[ProductCatalog](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_productcatalog.htm)**
    The container that holds a Product Category hierarchy. This object is available in API version 55.0 and later.
-   **[ProductCategory](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_productcategory.htm)**
    Represents the category that products are organized in.This object is available in API version 49.0 and later.
-   **[ProductCategoryProduct](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_productcategoryproduct.htm)**
    Holds the relation between product and product category to assign products to a category. This object is available in API version 55.0 and later.
-   **[ProductCategoryDataTranslation](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_productcategorydatatranslation.htm)**
    Represents the translated values for the data stored within a [ProductCategory](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_productcategory.htm "Represents the category that products are organized in.This object is available in API version 49.0 and later.") record’s fields. This object is available in API version 46.0 and later.
-   **[ProductComponentGroup](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_productcomponentgroup.htm)**
    Represents the logical grouping of associated products in a bundle and the products’ arrangement policy (group cardinality). This object is available in API version 58.0 and later.
-   **[ProductConsumed](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_productconsumed.htm)**
    Represents an item from your inventory that was used to complete a work order or work order line item in field service.
-   **[ProductDetectedPriceChange](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_productdetectedpricechange.htm)**
    Represents a detected change in price for a product associated with a partner account. This object is available in API version 63.0 and later.
-   **[ProductEntitlementTemplate](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_productentitlementtemplate.htm)**
    Represents predefined terms of customer support (Entitlement) that users can add to products (Product2).
-   **[ProductFeaturedProduct](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_productfeaturedproduct.htm)**
    Represents the user-defined collection of featured products that are meant to cross-sell or upsell with your product. This object is available in API version 64.0 and later.
-   **[ProductItem](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_productitem.htm)**
    Represents the stock of a particular product at a particular location in field service, such as all bolts stored in your main warehouse.
-   **[ProductItemTransaction](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_productitemtransaction.htm)**
    Represents an action taken on a product item in field service. Product item transactions are auto-generated records that help you track when a product item is replenished, consumed, or adjusted.
-   **[ProductMedia](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_productmedia.htm)**
    Represents the rich media, including images and attachments, that can be added to products.This object is available in API version 49.0 and later.
-   **[ProgramProduct](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_programproduct.htm)**
    Represents a junction between Program and Product2. This will hold Product2 values related to a Program. This object is available in API version 58.0 and later.
-   **[ProductQuantityRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_productquantityrule.htm)**
    Represents the relationship between a quantity rule and a product. This object assigns quantity rules to a product. This object is available in API version 51.0 and later.
-   **[ProductRelatedComponent](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_productrelatedcomponent.htm)**
    Represents a product that is included in a product bundle, a set, or a product and an add-on. This object is available in API version 57.0 and later.
-   **[ProductRelationshipType](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_productrelationshiptype.htm)**
    Defines the relationship between two sales transaction items. For example, defines a relationship between a bundle and a bundle component. This object is available in API version 57.0 and later.
-   **[ProductRequest](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_productrequest.htm)**
    Represents an order for a part or parts in field service.
-   **[ProductRequestLineItem](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_productrequestlineitem.htm)**
    Represents a request for a part in field service. Product request line items are components of product requests.
-   **[ProductRequired](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_productrequired.htm)**
    Represents a product that is needed to complete a work order or work order line item in field service.
-   **[ProductSellingModel](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_productsellingmodel.htm)**
    Defines one method by which a product can be sold; for example, as a one-time sale, an evergreen subscription, or a term-defined subscription. If the product is sold on subscription, this object defines the subscription’s term. A product can have multiple product selling models. This object is available in API version 55.0 and later.
-   **[ProductSellingModelOption](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_productsellingmodeloption.htm)**
    A junction object between Product Selling Model and Product2. This object is available in API version 55.0 and later.
-   **[ProductServiceCampaign](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_productservicecampaign.htm)**
    Represents a set of activities to be performed on a product service campaign asset, such as a product recall for safety issues or product defects. This object is available in API version 51.0 and later.
-   **[ProductServiceCampaignItem](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_productservicecampaignitem.htm)**
    Represents a product service campaign's asset. This object is available in API version 51.0 and later.
-   **[ProductServiceCampaignItemStatus](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_productservicecampaignitemstatus.htm)**
    Represents a status for a product service campaign item in field service. This object is available in API version 51.0 and later.
-   **[ProductServiceCampaignStatus](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_productservicecampaignstatus.htm)**
    Represents a status for a product service campaign in field service. This object is available in API version 51.0 and later.
-   **[ProductTransfer](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_producttransfer.htm)**
    Represents the transfer of inventory between locations in field service.
-   **[ProductWarrantyTerm](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_productwarrantyterm.htm)**
    Defines the relationship between a product or product family and warranty term. This object is available in API version 50.0 and later.
-   **[Profile](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_profile.htm)**
    Represents a profile, which defines a set of permissions to perform different operations. Operations can include creating a custom profile or querying, adding, updating, or deleting information.
-   **[ProfileSkill](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_profileskill.htm)**
    Represents a profile skill, which describes a user’s professional knowledge. This is a global record for the organization, and users are associated through the ProfileSkillUser object.
-   **[ProfileSkillEndorsement](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_profileskillendorsement.htm)**
    Represents a detail relationship of ProfileSkillUser. An endorsement of a profile skill shows approval and support of another user’s publicly declared skill.
-   **[ProfileSkillShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_profileskillshare.htm)**
    Represents a sharing entry on a ProfileSkill.
-   **[ProfileSkillUser](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_profileskilluser.htm)**
    Represents a detail relationship of User. The object connects profile skills with users.
-   **[ProgramRebateType](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_programrebatetype.htm)**
    Represents a rebate structure associated with a Rebate Program. This object is available in API version 63.0 and later.
-   **[Promotion](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_promotion.htm)**
    Represents a promotion for B2B or D2C stores. This object is available in API version 52.0 and later.
-   **[PromotionLineItemRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_promotionlineitemrule.htm)**
    Lists compound conditions about a promotion. This object is available in API version 59.0 and later.
-   **[PromotionMarketSegment](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_promotionmarketsegment.htm)**
    Represents a market segment within B2B Commerce that promotions can be assigned to. This object is available in API version 52.0 and later.
-   **[PromotionQualifier](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_promotionqualifier.htm)**
    Represents the product, product category, or order that you want to target with your promotion qualifier in a B2B or D2C store. This object is available in API version 52.0 and later.
-   **[PromotionSegment](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_promotionsegment.htm)**
    Represents a promotion segment, which you can assign to different stores or buyer groups, allowing them to access the promotion. This object is available in API version 52.0 and later.
-   **[PromotionSegmentBuyerGroup](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_promotionsegmentbuyergroup.htm)**
    Represents a promotion segment, associated with a buyer group, and used for B2B Commerce. This object is available in API version 52.0 and later.
-   **[PromotionSegmentSalesStore](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_promotionsegmentsalesstore.htm)**
    Represents a promotion segment, associated with a store, and used for B2B Commerce. This object is available in API version 52.0 and later.
-   **[PromotionTarget](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_promotiontarget.htm)**
    Represents the product, product category, or order that you want to target with your promotion in a B2B Store or D2C store. This object is available in API version 52.0 and later.
-   **[PromotionTier](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_promotiontier.htm)**
    Represents a tier of a promotion that includes multiple tiers. A promotion can have up to 10 tiers. This object is available in API version 57.0 and later.
-   **[Prompt](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_prompt.htm)**
    Represents record details about an in-app guidance prompt or walkthrough. Available in API version 46.0 and later.
-   **[PromptAction](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_promptaction.htm)**
    Represents how the user interacted with the in-app guidance prompt or walkthrough. Available in API version 46.0 and later.
-   **[PromptError](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_prompterror.htm)**
    Represents the error or warning associated with the PromptAction. Available in API version 52.0 and later.
-   **[PromptActionOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_promptactionownersharingrule.htm)**
    Represents a rule which determines PromptAction sharing access for the owners. Available in API version 46.0 and later.
-   **[PromptActionShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_promptactionshare.htm)**
    Represents a sharing entry on a prompt action record. Available in API version 46.0 and later.
-   **[PromptLocalization](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_promptlocalization.htm)**
    Represents the translated value of a label for record details about in-app guidance when the Translation Workbench is enabled for your org. Available in API version 48.0 and later.
-   **[PromptVersion](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_promptversion.htm)**
    Represents an in-app guidance prompt or walkthrough. Available in API version 46.0 and later.
-   **[PromptVersionLocalization](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_promptversionlocalization.htm)**
    Represents the translated value of a label for-app guidance when the Translation Workbench is enabled for your org. Available in API version 48.0 and later.
-   **[Prospect](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_prospect.htm)**
    Represents a prospect. A prospect is an individual who has shared contact information, but isn't yet qualified. This object is available in API version 63.0 and later.
-   **[ProrationPolicy](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_prorationpolicy.htm)**
    Defines how the price of a subscription is divided into time periods and how the price is calculated for each time period. This object is available in API version 55.0 and later.
-   **[PublicComplaint](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_std_publiccomplaint.htm)**
    Represents the complaints submitted by public users. This object is available in API version 49.0 and later.
-   **[PurchaseQuantityRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_purchasequantityrule.htm)**
    Represents a rule that restricts the quantity of a product that can be purchased. The rule can be an increment, minimum, or maximum rule. This object is available in API version 52.0 and later.
-   **[PushTopic](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_pushtopic.htm)**
    Represents a query that is the basis for notifying Streaming API clients of changes to records in an org. This object is available in API version 21.0 and later.
-   **[QueuedExecutionEventLog](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_queuedexecutioneventlog.htm)**
    Queued Execution events contain details about queued executions—for example, batch Apex. This object is available in API version 65.0 and later.
-   **[QueueRoutingConfig](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_queueroutingconfig.htm)**
    Represents the settings that determine how work items are routed to agents. This object is available in API version 32.0 and later.
-   **[Question](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_question.htm)**
    Represents a question in a zone that users can view and reply to.
-   **[QuestionDataCategorySelection](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_questiondatacategoryselection.htm)**
    A data category selection represents a data category that classifies a question.
-   **[QuestionReportAbuse](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_questionreportabuse.htm)**
    Represents a user-reported abuse on a Question in a Chatter Answers zone. This object is available in API version 24.0 and later.
-   **[QuestionSubscription](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_questionsubscription.htm)**
    Represents a subscription for a user following a Question. This object is available in API version 24.0 and later.
-   **[QueueSobject](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_queuesobject.htm)**
    Represents the mapping between a queue Group and the types associated with the queue, including custom objects.
-   **[QuickText](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_quicktext.htm)**
    This object stores a snippet of text that allows users to send a quick response to a customer. Use quick text to create greetings, answers to common questions, short notes, and more. This object is available in API version 24.0 and later.
-   **[QuickTextUsage](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_quicktextusage.htm)**
    Represents the usage of quick text on a record, including which quick text was used, who used it, and how they used it. Quick text is a snippet of text that allows users to send a quick response to a customer. This object is available in API version 47.0 and later.
-   **[Quote](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_quote.htm)**
    Represents a quote, which is a record showing proposed prices for products and services. Available in API version 18.0 and later.
-   **[QuoteAction](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_quoteaction.htm)**
    Indicates the type of sales transaction that’s being quoted; for example, a renewal sale. This object is available in API version 59.0 and later.
-   **[QuoteAdjustmentGroup](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_quoteadjustmentgroup.htm)**
    Group containing a set of adjustments applied to a quote. This object is available in API version 58.0 and later.
-   **[QuoteDocument](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_quotedocument.htm)**
    Represents a quote in document format. Available in API version 18.0 and later.
-   **[QuoteLineGroup](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_quotelinegroup.htm)**
    Stores the group information for line items in a quote. It also stores the aggregated line field information (subtotal). It contains a parent-child relationship to quote. This object is available in API version 61.0 and later.
-   **[QuoteLineItem](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_quotelineitem.htm)**
    Represents a quote line item, which is a member of the list of Product2 products associated with a quote, along with other information about those line items on that quote. Available in API version 18.0 and later.
-   **[QuoteLineItemRecipient](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_quotelineitemrecipient.htm)**
    Represents a site, employee, or other entity for which services are being quoted. This could include details such as the recipient's name, contact information, associated site or location, and any specific requirements or preferences for the quoted services. This object is available in API version 62.0 and later.
-   **[QuoteLinePriceAdjustment](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_quotelinepriceadjustment.htm)**
    Indicates the calculated price adjustment that is applied to the quote line, for example, a calculated volume discount or the prorated value of a manual discount. Use the quote line price adjustment to inform potential customers about the type, value, and total amount of their discounts. This object is available in API version 56.0 and later.
-   **[QuoteLineRelationship](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_quotelinerelationship.htm)**
    Describes the relationship between quote line items, such as items in a bundle. When you create a QuoteLineRelationship object, it’s immutable: it can’t be edited or removed. This object is available in API version 58.0 and later.
-   **[QuoteItemTaxItem](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_quoteitemtaxitem.htm)**
    The tax that is applied to a quote line item. This object is available in API version 55.0 and later.
-   **[QuoteLineWorkSource](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_quotelineworksource.htm)**
    Represents an association between a quote and work sources, such as assets, quote line items, order products, or work type groups. This object is available in API version 63.0 and later.
-   **[QuoteRecipientGroup](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_quoterecipientgroup.htm)**
    Represents a recipient group for which offers or products with the same configuration are being added. This also includes reusing these groups to add or remove recipients. This object is available in API version 64.0 and later.
-   **[QuoteRecipientGroupMember](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_quoterecipientgroupmember.htm)**
    Represents a junction between a quote line item recipient and a quote recipient group. This object is available in API version 64.0 and later.
-   **[RecentFieldChange](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_recentfieldchange.htm)**
    Use this virtual object to see how an opportunity has changed in the past seven days. Learn the previous value of a field, who made the change, and when the change was made. This object is available in API version 52.0 and later.
-   **[RecentlyViewed](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_recentlyviewed.htm)**
    Represents records or list views that the current user has recently viewed or referenced (by viewing a related record). List views are available in API version 29.0 and later.
-   **[Recommendation](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_recommendation.htm)**
    Represents the recommendations surfaced as offers and actions for Einstein Next Best Action. This object is available in API version 45.0 and later.
-   **[RecommendationResponse](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_recommendationresponse.htm)**
    Represents the user responses to a presented offer or recommendation for Einstein Next Best Action. This object is available in API version 51.0 and later.
-   **[RecordAction](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_recordaction.htm)**
    Represents a relationship between a record and an action, such as a flow. Create a RecordAction for every action that you want to associate with a particular record. Available in API version 42.0 and later.
-   **[RecordActionHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_recordactionhistory.htm)**
    Represents the lifecycle of a RecordAction as it goes through different states. Available in API version 44.0 and later.
-   **[RecordsetFilterCriteria](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_recordsetfiltercriteria.htm)**
    Represents a set of filters that can be used to match service appointments or assets based on your criteria fields. For example, you can create recordset filter criteria so that only service appointments that satisfy the filter criteria are matched to the filtered shifts, and likewise only maintenance work rules that satisfy your criteria are matched to assets. This object is available in API version 50.0 and later. Assets and maintenance work rules are available in API version 52.0 and later.
-   **[RecordsetFilterCriteriaRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_recordsetfiltercriteriarule.htm)**
    Represents a rule using fields from the designated source object to create filters on the filtered, or target, object. RecordsetFilterCriteriaRule is associated with the RecordsetFilterCriteria object. This object is available in API version 50.0 and later.
-   **[RecordsetFltrCritMonitor](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_recordsetfltrcritmonitor.htm)**
    Monitors whether the value of an asset attribute is within the threshold of a recordset filter criteria (RFC). You can monitor one or more RFCs for an Asset. This object is available in API version 57.0 and later.
-   **[RecordType](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_recordtype.htm)**
    Represents a record type.
-   **[RecordTypeLocalization](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_recordtypelocalization.htm)**
    Represents the translated value of a label for a record type when the Translation Workbench is enabled for your organization.
-   **[RecordVisibility (Pilot)](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_recordvisibility.htm)**
    Represents the visibility attributes that determine a record’s read access. This object is read only and is available in API version 46.0 and later.
-   **[RedirectWhitelistUrl](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_redirectwhitelisturl.htm)**
    Represents a trusted URL for external user redirections. Redirections to a different Salesforce org, including its publicly served pages and content, are allowed from your Salesforce org only when the URL is a RedirectWhitelistUrl. For non-Salesforce URLs, a session setting controls whether redirections from pages and components built in Salesforce Classic are restricted to RedirectWhitelistUrl objects. Except for cross-org redirections, you can’t restrict redirections that originate from pages and components built with Lightning Experience. This object is available in API version 48.0 and later.
-   **[Refund](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_refund.htm)**
    Represents a refund made against a payment. This object is available in API version 48.0 and later.
-   **[RefundLinePayment](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_refundlinepayment.htm)**
    A refund line that has been applied to a payment. This object is available in API version 48.0 and later.
-   **[RegisteredExternalService](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_registeredexternalservice.htm)**
    Represents a registered external service used for checkout integrations by data integrators. This object is available in API version 49.0 and later.
-   **[RelatedListColumnDefinition](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_relatedlistcolumndefinition.htm)**
    Represents information about a column in a related list. A related list specifies a set of records for a related object, based on specific criteria. This object is available in API version 55.0 and later.
-   **[RelatedListDefinition](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_relatedlistdefinition.htm)**
    Represents information about a related list. A related list specifies a set of records for a related object, based on specific criteria. This object is available in API version 55.0 and later.
-   **[RemoteKeyCalloutEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_remotekeycalloutevent.htm)**
    The documentation has moved to [RemoteKeyCalloutEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/sforce_api_objects_remotekeycalloutevent.htm "HTML (New Window)") in the Platform Events Developer Guide.
-   **[Reply](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_reply.htm)**
    Represents a reply that a user has submitted to a question in an answers zone.
-   **[ReplyEmailSettings](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_replyemailsettings.htm)**
    Represents a reply mail management configuration, which is used to configure emails that are received by an email sending domain. This object is available in API version 62.0 and later.
-   **[ReplyReportAbuse](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_replyreportabuse.htm)**
    Represents a user-reported abuse on a Reply in a Chatter Answers zone. This object is available in API version 24.0 and later.
-   **[ReplyText](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_replytext.htm)**
    A text reply generated by Einstein Reply Recommendations that is based on closed chat transcripts. Admins review replies and publish them to quick text, editing them as needed. Einstein recommends relevant published replies to support agents in the Lightning Service Console, and agents can insert replies into chats or messaging sessions. This object is available in API version 49.0 and later.
-   **[Report](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_report.htm)**
    Represents a report, a set of data that meets certain criteria, displayed in an organized way. Access is read-only. This object is available in API version 20.0 and later.
-   **[ReportEventLog](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_reporteventlog.htm)**
    Report event logs contain information about what happened when a user ran a report. This event type includes all activity that's in the Report Export event type, and additional information. For example, it has user activity for reports exported as both Formatted Report and Details Only output. This object is available in API version 61.0 and later.
-   **[ReportExportEventLog](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_reportexporteventlog.htm)**
    Report Export events contain details about reports that a user exported. For example, this event type captures when a user exports a report as Details Only output. But it doesn’t capture reports that users export as Formatted Report or XLSX Detail output. For that data, see the Report event type. This object is available in API version 65.0 and later.
-   **[ReportTag](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_reporttag.htm)**
    Associates a word or short phrase with a Report. This object is available in API version 20.0 and later.
-   **[ReputationLevel](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_reputationlevel.htm)**
    Represents a reputation level defined for an Experience Cloud site. This object is available in API version 32.0 and later.
-   **[ReputationLevelLocalization](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_reputationlevellocalization.htm)**
    Represents the translated value of a reputation level. Reputation level localization only applies for reputation levels in Experience Cloud sites. This object is available in API version 35.0 and later.
-   **[ReputationPointsRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_reputationpointsrule.htm)**
    Represents the reputation point rules for an Experience Cloud site. Each rule specifies an action that members can earn points from and the points associated with those actions in a particular site. This object is available in API version 32.0 and later.
-   **[ResourceAbsence](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_resourceabsence.htm)**
    Represents a time period in which a service resource is unavailable to work in Field Service, Salesforce Scheduler, or Workforce Engagement. This object is available in API version 38.0 and later.
-   **[ResourcePreference](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_resourcepreference.htm)**
    Represents an account’s preference for a specified service resource on field service work.
-   **[RestApiEventLog](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_restapieventlog.htm)**
    REST API event logs contain details about REST-specific requests. This object is available in API version 61.0 and later.
-   **[ReturnOrder](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_returnorder.htm)**
    Represents the return or repair of inventory or products in Field Service, or the return of order products in Order Management. This object is available in API version 42.0 and later.
-   **[ReturnOrderItemAdjustment](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_returnorderitemadjustment.htm)**
    Represents a price adjustment on a return order line item. This object is available in API version 50.0 and later.
-   **[ReturnOrderItemTax](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_returnorderitemtax.htm)**
    Represents the tax on a return order line item or return order item adjustment. This object is available in API version 50.0 and later.
-   **[ReturnOrderLineItem](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_returnorderlineitem.htm)**
    Represents a specific product that is returned or repaired as part of a return order in Field service, or a specific order item that is returned as part of a return order in Order Management. This object is available in API version 42.0 and later.
-   **[ReturnOrderOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_returnorderownersharingrule.htm)**
    Represents the rules for sharing a return order with user records other than the owner or anyone above the owner in the role hierarchy. This object is available in API version 42.0 and later.
-   **[RevenueAsyncOperation](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_revenueasyncoperation.htm)**
    Represents the status of an asynchronous process initiated by a REST request in Subscription Management. This object is available in API versions 57.0 to 59.0. Use AsyncOperationTracker instead of RevenueSyncOperation in API version 59.0 and later.
-   **[RevenueTransactionErrorLog](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_revenuetransactionerrorlog.htm)**
    Contains information about errors that occurred while processing a request. The error record persists until another error with the same category, primary record, and (optionally) related record occurs. This object is available in API version 55.0 and later.
-   **[RpaFlowResultEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_rpaflowresultevent.htm)**
    Reserved for future use.
-   **[RpaRobot](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_rparobot.htm)**
    Reserved for future use.
-   **[RpaRobotAsgnMaintWindow](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_rparobotasgnmaintwindow.htm)**
    Reserved for future use.
-   **[RpaRobotAsgnSessionInf](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_rparobotasgnsessioninf.htm)**
    Reserved for future use.
-   **[RpaRobotDefinition](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_rparobotdefinition.htm)**
    Reserved for future use.
-   **[RpaRobotMaintWindow](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_rparobotmaintwindow.htm)**
    Reserved for future use.
-   **[RpaRobotMaintWindowDef](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_rparobotmaintwindowdef.htm)**
    Reserved for future use.
-   **[RpaRobotPool](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_rparobotpool.htm)**
    Reserved for future use.
-   **[RpaRobotPoolAsgnRobot](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_rparobotpoolasgnrobot.htm)**
    Reserved for future use.
-   **[RpaRobotPoolDefinition](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_rparobotpooldefinition.htm)**
    Reserved for future use.
-   **[RpaRobotPoolFlowAsgn](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_rparobotpoolflowasgn.htm)**
    Reserved for future use.
-   **[RpaRobotSessionInfo](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_rparobotsessioninfo.htm)**
    Reserved for future use.
-   **[RpaRobotSessionInfoDef](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_rparobotsessioninfodef.htm)**
    Reserved for future use.
-   **[RuleTerritory2Association](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_ruleterritory2association.htm)**
    Represents a record-assignment rule and its association to an object, such as Account. Available if Sales Territories has been enabled.
-   **[SalesAIScoreCycle](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_salesaiscorecycle.htm)**
    Represents the cycle type and ID used to score records. This object is available in API version 47.0 and later.
-   **[SalesAIScoreModelFactor](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_salesaiscoremodelfactor.htm)**
    Represents the factors that Sales Cloud Einstein uses to build a scoring model. Scoring models are used by features, such as Opportunity Scoring, to score individual records. This object is available in API version 47.0 and later.
-   **[SalesforceLoginAsEventLog](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_salesforceloginaseventlog.htm)**
    Salesforce LoginAs Event provides details about the Salesforce User's login into Customer Org as Customer's authorized user. This object is available in API version 65.0 and later.
-   **[SalesChannel](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_saleschannel.htm)**
    Represents the origin of an order. For example, a web storefront, physical store, marketplace, or mobile app. If you integrate Salesforce Order Management with Salesforce B2C Commerce, set up a SalesChannel corresponding to each Site in your B2C Commerce implementation. This object is available in API version 48.0 and later.
-   **[SalesforceContract](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_salesforcecontract.htm)**
    Read-only virtual object used in the Your Account App. Represents contract information related to your organization’s Salesforce subscription.
-   **[SalesforceInvoice](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_salesforceinvoice.htm)**
    Read-only virtual object used in the Your Account App. Represents information about your organization’s invoices with Salesforce.
-   **[SalesforcePayment](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_salesforcepayment.htm)**
    Read-only virtual object used in the Your Account App. Represents information about payments related to your organization’s Salesforce invoice.
-   **[SalesforceQuote](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_salesforcequote.htm)**
    Read-only virtual object used in the Your Account App. Represents information about your organization’s quotes with Salesforce.
-   **[SalesStoreCatalog](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_salesstorecatalog.htm)**
    Represents the catalog associated with a store. This object is available in API version 49.0 and later.
-   **[SalesTransactionItemShape](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_salestransactionitemshape.htm)**
    Defines the business logic for a sales transaction shape item, for example, an item in an order. This object is available in API version 57.0 and later.
-   **[SalesTransactionShape](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_salestransactionshape.htm)**
    Defines the business logic for a sales transaction; for example, an order, a quote, or a cart. This object is available in API version 57.0 and later.
-   **[SalesTransactionType](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_salestransactiontype.htm)**
    Represents the type of sales transaction, such as an initial, renewal, or amendment sale, and its related pricing configuration.. This object is available in API version 61.0 and later.
-   **[SalesTrxnItemRelationShape](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_salestrxnitemrelationshape.htm)**
    Describes the relationship between sales transaction shape items; for example, a bundle or set. This object is available in API version 57.0 and later.
-   **[SalesTrxnItemRelationship](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_salestrxnitemrelationship.htm)**
    Describes the relationship between sales transaction items; for example, a bundle or set. This object interface is available in API version 58.0 and later.
-   **[SalesWorkQueueSettings](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_salesworkqueuesettings.htm)**
    Represents settings used to customize work queue options for third-party scoring. Third-party scoring enables custom number fields on person accounts, contacts, and leads. You must be a Sales Engagement customer to update this object. Previously, you could only use the Einstein Intelligence Score for third-party scoring. Available starting in Version 47.0.
-   **[SandboxStatusEventLog](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_sandboxstatuseventlog.htm)**
    SandboxStatusEventLog stores details about Sandbox copies. This object is available in API version 62.0 and later.
-   **[SamlSsoConfig](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_samlssoconfig.htm)**
    Represents a SAML Single Sign-On configuration.This object is available in API version 32.0 and later.
-   **[SavedPaymentMethod](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_savedpaymentmethod.htm)**
    Represents a payment method saved by an authenticated customer. This object is available in API version 58.0 and later
-   **[SavedPaymentMethodEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_savedpaymentmethodevent.htm)**
    Represents a saved payment method platform event. Subscribe to these events so you can listen and respond to them when they’re published. For example, create a Salesforce Flow that is triggered when one of these events is published. This object is available in API version 59.0 and later.
-   **[SchedulingAdherenceDetail](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_schedulingadherencedetail.htm)**
    Represents the breakdown of daily shift adherence data by agent status. This object is available in API version 54.0 and later.
-   **[SchedulingAdherenceSummary](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_schedulingadherencesummary.htm)**
    Represents daily shift adherence data for a service resource in a service territory and job profile on a specific date. This object is available in API version 54.0 and later.
-   **[SchedulingConstraint](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_schedulingconstraint.htm)**
    Represents scheduling constraints on each service resource. This object is available in API version 50.0 and later.
-   **[SchedulingObjective](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_schedulingobjective.htm)**
    Represents business goals that the scheduling tools consider. This object is available in API version 53.0 and later.
-   **[SchedulingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_schedulingrule.htm)**
    Represents scheduling rules that are hard constraints in the scheduling logic engine. This object is available in API version 52.0 and later.
-   **[SchedulingRuleParameter](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_schedulingruleparameter.htm)**
    Represents scheduling rule parameters associated with a scheduling rule. This object is available in API version 52.0 and later.
-   **[Scontrol](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_scontrol.htm)**
    A custom s-control, which is custom content that is hosted by the system but executed by the client application.
-   **[ScontrolLocalization](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_scontrollocalization.htm)**
    The translated value of the field label for an s-control.
-   **[Scorecard](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_scorecard.htm)**
    Use scorecards to measure partner performance and establish benchmarks for channel programs within Experience Cloud. Display any report summary results that your channel account manager or executive team wants to see. This object is available in API version 40.0 and later.
-   **[ScorecardAssociation](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_scorecardassociation.htm)**
    Represents a connection between a specific scorecard and the associated account, channel program, or channel program level. This object is available in API version 41.0 and later.
-   **[ScorecardMetric](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_scorecardmetric.htm)**
    Stores information about a Salesforce report that is run and summarized to get a single value. The stored value is added as a metric to the related Scorecard object. This object is available in API version 40.0 and later.
-   **[ScoreIntelligence](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_scoreintelligence.htm)**
    For internal use only.
-   **[ScratchOrgInfo](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_scratchorginfo.htm)**
    Represents a scratch org and its audit log. Use this object to create a scratch org and keep a log of its creation and deletion. This object is available in API version 41.0 and later.
-   **[SearchActivity](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_searchactivity.htm)**
    Represents search activity on a Knowledge article. Also known as KnowledgeSearchActivity. This object is available in API version 38.0 and later.
-   **[SearchClickEventLog](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_searchclickeventlog.htm)**
    Search Click Event Log contains details about the user’s interaction with the search results. This object is available in API version 61.0 and later.
-   **[SearchEventLog](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_searcheventlog.htm)**
    Search Event Log provides details about the user’s search query. This object is available in API version 61.0 and later.
-   **[SearchLayout](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_searchlayout.htm)**
    Represents a search layout defined for an object. This object is available in API version 35.0 and later.
-   **[SearchPromotionRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_searchpromotionrule.htm)**
    Represents a promoted search term, which is one or more keywords that you associate with a Salesforce Knowledge article. When a user’s search query includes these keywords, the associated article is returned first in search results. This object is available in API version 31.0 and later.
-   **[SecurityCustomBaseline](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_securitycustombaseline.htm)**
    Provides the ability to read, create, and delete user-defined custom security baselines, which define an org’s security standards. This object is available in API version 39.0 and later.
-   **[SelfServiceUser](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_selfserviceuser.htm)**
    Represents a Contact who has been enabled to use your organization’s Self-Service portal, where he or she can obtain online support.
-   **[Seller](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_seller.htm)**
    Represents the seller role of an individual with respect to a particular company or organization. This object is available in API version 53.0 and later.
-   **[SenderEmailAddress](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_senderemailaddress.htm)**
    Represents a From address in a marketing email. This object is available in API version 63.0 and later.
-   **[ServiceAppointment](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_serviceappointment.htm)**
    Represents an appointment to complete work for a customer in Field Service, Lightning Scheduler,Intelligent Appointment Management, and Virtual Care.This object is available in API version 38.0 and later.
-   **[ServiceAppointmentStatus](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_serviceappointmentstatus.htm)**
    Represents a possible status of a service appointment in field service.
-   **[ServiceChannel](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_servicechannel.htm)**
    Represents a channel of work items that are received from your organization—for example, cases, chats, or leads. This object is available in API version 32.0 and later.
-   **[ServiceChannelFieldPriority](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_servicechannelfieldpriority.htm)**
    Represents a secondary routing priority field-value mapping. This object is available in API version 47.0 and later.
-   **[ServiceChannelStatus](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_servicechannelstatus.htm)**
    Represents the status that’s associated with a specific service channel. This object is available in API version 32.0 and later.
-   **[ServiceChannelStatusField](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_servicechannelstatusfield.htm)**
    Represents the values that you use to indicate completed and in-progress work item status for the status field in the Status-Based Capacity routing model. This object is available in API version 49.0 and later.
-   **[ServiceContract](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_servicecontract.htm)**
    Represents a customer support contract (business agreement). This object is available in API version 18.0 and later.
-   **[ServiceContractOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_servicecontractownersharingrule.htm)**
    Represents the rules for sharing a ServiceContract (customer service agreement) with users other than the owner. This object is available in API version 18.0 and later.
-   **[ServiceCrew](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_servicecrew.htm)**
    Represents a group of service resources who can be assigned to service appointments as a unit.
-   **[ServiceCrewMember](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_servicecrewmember.htm)**
    Represents a technician service resource that belongs to a service crew.
-   **[ServiceCrewOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_servicecrewownersharingrule.htm)**
    Represents the rules for sharing a service crew with user records other than the owner or anyone above the owner in the role hierarchy.
-   **[ServicePresenceStatus](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_servicepresencestatus.htm)**
    Represents a presence status that can be assigned to a service channel. This object is available in API version 32.0 and later.
-   **[ServiceReport](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_servicereport.htm)**
    Represents a report that summarizes a work order, work order line item, or service appointment.
-   **[ServiceReportLayout](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_servicereportlayout.htm)**
    Represents a service report template in field service.
-   **[ServiceRequest](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_servicerequest.htm)**
    Represents a formal request from a user for something to be provided, such as access, information, hardware, or software. This object manages the lifecycle of these tasks, which are typically low-risk, and can be fulfilled through a defined, repeatable process. For example, a Service Request can be created for an employee requesting a new laptop or a student needing a transcript. This object is available in API version 66.0 and later.
-   **[ServiceResource](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_serviceresource.htm)**
    Represents a service technician or service crew in Field Service and Salesforce Scheduler, or an agent in Workforce Engagement. This object is available in API version 38.0 and later.
-   **[ServiceResourceCapacity](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_serviceresourcecapacity.htm)**
    Represents the maximum number of scheduled hours or number of service appointments that a capacity-based service resource can complete within a specific time period. This object is available in API version 38.0 and later.
-   **[ServiceResourceCapacityHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_serviceresourcecapacityhistory.htm)**
    Represents the history of changes made to tracked fields on a service resource capacity record. This object is available in API version 38.0 and later.
-   **[ServiceResourceDataTranslation](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_serviceresourcedatatranslation.htm)**
    Represents the translated values of the data stored within a [ServiceResource](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_serviceresource.htm "Represents a service technician or service crew in Field Service and Salesforce Scheduler, or an agent in Workforce Engagement. This object is available in API version 38.0 and later.") record’s fields. This object is available in API version 54.0 and later.
-   **[ServiceResourceOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_serviceresourceownersharingrule.htm)**
    Represents the rules for sharing a service resource with user records other than the owner or anyone above the owner in the role hierarchy. This object is available in API version 38.0 and later.
-   **[ServiceResourcePreference](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_serviceresourcepreference.htm)**
    Represents the service resource scheduling preferences that are considered as a business objective in the scheduling logic engine. This object is available in API version 52.0 and later.
-   **[ServiceResourceSkill](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_serviceresourceskill.htm)**
    Represents a skill that a service resource possesses in Field Service and Lightning Scheduler. This object is available in API version 38.0 and later.
-   **[ServiceSetupProvisioning](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_servicesetupprovisioning.htm)**
    Represents a task completed by the Service Setup Assistant. This object is available in API version 52.0 and later.
-   **[ServiceTerritory](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_serviceterritory.htm)**
    Represents a geographic or functional region in which work can be performed in Field Service, Salesforce Scheduler, or Workforce Engagement. This object is available in API version 38.0 and later.
-   **[ServiceTerritoryDataTranslation](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_serviceterritorydatatranslation.htm)**
    Represents the translated values of the data stored within a [ServiceTerritory](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_serviceterritory.htm "Represents a geographic or functional region in which work can be performed in Field Service, Salesforce Scheduler, or Workforce Engagement. This object is available in API version 38.0 and later.") record’s fields. This object is available in API version 54.0 and later.
-   **[ServiceTerritoryLocation](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_serviceterritorylocation.htm)**
    Represents a location associated with a particular service territory in field service.
-   **[ServiceTerritoryMember](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_serviceterritorymember.htm)**
    Represents a service resource who can be assigned in a service territory in Field Service, Salesforce Scheduler, or Workforce Engagement. This object is available in API version 38.0 and later.
-   **[ServiceTerritoryWorkType](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_serviceterritoryworktype.htm)**
    Represents the relationship between a ServiceTerritory object and a WorkType object for Salesforce Scheduler appointments. This object is available in API version 45.0 and later.
-   **[SessionPermSetActivation](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_sessionpermsetactivations.htm)**
    The SessionPermSetActivation object represents a permission set assignment activated during an individual user session. When a SessionPermSetActivation object is inserted into a permission set, an activation event fires, allowing the permission settings to apply to the user’s specific session. This object is available in API versions 37.0 and later.
-   **[SetupAssistantStep](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_setupassistantstep.htm)**
    For internal use only.
-   **[SetupAuditTrail](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_setupaudittrail.htm)**
    Represents changes you or other admins made in your org’s Setup area for at least the last 180 days. This object is available in API version 15.0 and later.
-   **[SetupEntityAccess](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_setupentityaccess.htm)**
    Represents the enabled setup entity access settings (such as for Apex classes) for the parent PermissionSet. This object is available in API version 25.0 and later.
-   **[ShapeRepresentation](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_shaperepresentation.htm)**
    Contains information about the shape of an org. The shape of an org includes licenses and limits information. You can easily create scratch orgs based on a source org’s shape. This object is available in API version 50.0 and later.
-   **[SharingRecordCollection](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_sharingrecordcollection.htm)**
    Represents a collection of records. This object is available in API version 51.0 and later.
-   **[SharingRecordCollectionItem](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_sharingrecordcollectionitem.htm)**
    Represents a single record in a collection of records. This object is available in API version 51.0 and later.
-   **[SharingRecordCollectionMember](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_sharingrecordcollectionmember.htm)**
    Represents a user with access to a collection of records. This object is available in API version 51.0 and later.
-   **[Shift](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_shift.htm)**
    Represents a shift for service resource scheduling. Available in API versions 46.0 and later.
-   **[ShiftHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_shifthistory.htm)**
    Represents the history of changes made to tracked fields on a time sheet. Available in API versions 46.0 and later.
-   **[ShiftOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_shiftownersharingrule.htm)**
    Represents the rules for sharing a shift with user records other than the owner or anyone above the owner in the role hierarchy. Available in API versions 46.0 and later.
-   **[ShiftPattern](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_shiftpattern.htm)**
    Represents a pattern of templates for creating shifts. This object is available in API version 51.0 and later.
-   **[ShiftPatternEntry](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_shiftpatternentry.htm)**
    ShiftPatternEntry links a shift template to a shift pattern. This object is available in API version 51.0 and later.
-   **[ShiftSegment](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_shiftsegment.htm)**
    Represents a scheduled activity within a shift. This object is available in API version 55.0 and later.
-   **[ShiftSegmentType](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_shiftsegmenttype.htm)**
    Represents a type of activity scheduled within a shift. This object is available in API version 55.0 and later.
-   **[ShiftShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_shiftshare.htm)**
    Represents a sharing entry on a field service shift. Available in API versions 46.0 and later.
-   **[ShiftStatus](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_shiftstatus.htm)**
    Represents a shift, such as Tentative, Published, or Confirmed. Available in API versions 46.0 and later.
-   **[ShiftTemplate](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_shifttemplate.htm)**
    Represents a template for creating shifts. This object is available in API version 51.0 and later.
-   **[Shipment](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_shipment.htm)**
    Represents the transport of inventory in field service or a shipment of order items in Order Management.
-   **[ShipmentItem](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_shipmentitem.htm)**
    Represents an order item included in a shipment. This object is available in API version 51.0 and later.
-   **[ShippingCarrier](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_shippingcarrier.htm)**
    Shipping company or carrier responsible for transporting goods or packages. Examples include UPS, FedEx, and USPS. This object is available in API version 61.0 and later.
-   **[ShippingCarrierMethod](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_shippingcarriermethod.htm)**
    Shipping service provided by a shipping carrier. Examples include Ground, 2Day, and NextDay. Service depends on the range of transit times available for each carrier. This object is available in API version 61.0 and later.
-   **[ShippingConfigurationSet](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_shippingconfigurationset.htm)**
    Shipping configuration for a set of products in a store. This object is available in API version 59.0 and later.
-   **[ShippingConfigSetProduct](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_shippingconfigsetproduct.htm)**
    Represents a product associated with a shipping configuration. This object is available in API version 64.0 and later.
-   **[ShippingRateArea](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_shippingratearea.htm)**
    A designated geographical area that’s available for shipping. This object is available in API version 59.0 and later.
-   **[ShippingRateGroup](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_shippingrategroup.htm)**
    Available shipping rates based on shipping destination. This object is available in API version 59.0 and later.
-   **[SignupRequest](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_signuprequest.htm)**
    Represents a request for a new sign-up. SignupRequest isn’t supported in sandbox instances and will result in an error. This object is available in API version 27.0 and later.
-   **[Site](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_site.htm)**
    Represents a public website that is integrated with an org. This object is available in API version 16.0 and later.
-   **[SiteDetail](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_sitedetail.htm)**
    Represents the details of a Salesforce site or Experience Cloud site. Available in API Version 38.0 and later.
-   **[SiteDomain](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_sitedomain.htm)**
    SiteDomain is a read-only object, and a one-to-many replacement for the Site.TopLevelDomain field. This object is available in API version 21.0, and has been deprecated as of API version 26.0. In API version 26.0 and later, use the [Domain](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_domain.htm "Read-only object that represents a custom Web address assigned to a site in your organization. This object is available in API version 26.0 and later.") and [DomainSite](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_domainsite.htm "Read-only junction object that joins the Site and Domain objects. This object is available in API version 26.0 and later.") objects instead.
-   **[SiteEventLog](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_siteeventlog.htm)**
    SiteEventLog stores details of Site.com requests. Requests can originate from the browser (UI). This object is available in API version 62.0 and later.
-   **[SiteHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_sitehistory.htm)**
    Represents the history of changes to the values in the fields of a site. This object is generally available in API version 18.0 and later.
-   **[SiteIframeWhitelistUrl](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_siteiframewhitelisturl.htm)**
    Represents a list of external domains that you allow to frame your Salesforce site or Experience Cloud site pages. This object is available in API version 44.0 and later.
-   **[SiteRedirectMapping](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_siteredirectmapping.htm)**
    Represents a site redirect from an external site to an Experience Cloud site. This object is available in API version 52.0 and later.
-   **[Skill](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_skill.htm)**
    Represents a category or group of Chat users or service resources in Field Service or Workforce Engagement. This object is available in API version 24.0 and later.
-   **[SkillLevelDefinition](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_skillleveldefinition.htm)**
    Represents a skill which can be acquired by completing enablement site (myTrailhead) modules. This object is available in API version 51.0 and later.
-   **[SkillLevelProgress](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_skilllevelprogress.htm)**
    Represents training progress for a given user. This object is available in API version 51.0 and later.
-   **[SkillProfile](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_skillprofile.htm)**
    Represents a join between Skill and Profile. This object is available in API version 24.0 and later.
-   **[SkillRequirement](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_skillrequirement.htm)**
    Represents a skill that is required to complete a particular task in Field Service, Omni-Channel, Salesforce Scheduler, or Workforce Engagement. Skill requirements can be added to pending service routing objects in Omni-Channel. They can be added to work types, work orders, and work order line items in Field Service and Lightning Scheduler. And they can be added to job profiles in Workforce Engagement. This object is available in API version 38.0 and later. You also can add skill requirements to work items in Omni-Channel skills-based routing using API version 42.0 and later.
-   **[SkillUser](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_skilluser.htm)**
    Represents a join between Skill and User. This object is available in API version 24.0 and later.
-   **[SlackChannelRelatedRecord](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_slackchannelrelatedrecord.htm)**
    Represents the related record mapping between a Slack channel and a Salesforce record that’s made when you create a Salesforce channel. This object is available in API version 65.0 and later.
-   **[SlaProcess](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_slaprocess.htm)**
    Represents an entitlement process associated with an Entitlement. This object is available in API version 19.0 and later.
-   **[Snippet](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_snippet.htm)**
    Represents a snippet, which is a container for rich text that can be reused across Account Engagement emails and email templates. This object is available in API version 47.0 and later.
-   **[SnippetAssignment](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_snippetassignment.htm)**
    Represents a relationship between a snippet and a campaign. Assignments are required to use snippet content in Account Engagement emails and email templates. A snippet can be assigned to more than one campaign. This object is available in API version 47.0 and later.
-   **[SoapApiEventLog](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_soapapieventlog.htm)**
    SOAP API events contain details about your org's SOAP API request activity. This object is available in API version 61.0 and later.
-   **[SocialPersona](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_socialpersona.htm)**
    Represents a snapshot of a contact's profile on a social network such as Facebook or Twitter. This object is available in API version 22.0 and later.
-   **[SocialPost](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_socialpost.htm)**
    Represents a snapshot of a post on a social network such as a Facebook or Twitter. This object is available in API version 23.0 and later.
-   **[Solution](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_solution.htm)**
    Represents a detailed description of a customer issue and the resolution of that issue.
-   **[SolutionStatus](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_solutionstatus.htm)**
    Represents the status of a Solution, such as Draft, Reviewed, and so on.
-   **[SolutionTag](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_solutiontag.htm)**
    Associates a word or short phrase with a Solution.
-   **[SOSDeployment](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_sosdeployment.htm)**
    Represents the general settings for deploying SOS video call capability in a native mobile application. This object is available in API version 34.0 and later.
-   **[SOSSession](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_sossession.htm)**
    This object is automatically created for each SOS session and stores information about the session. This object is available in API versions 34.0 and later.
-   **[SOSSessionActivity](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_sossessionactivity.htm)**
    Captures information about specific events that occur during an SOS video call, such as when an SOS call begins or ends. This object is available in API version 34.0 and later.
-   **[StagedEmail](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_stagedemail.htm)**
    For internal use only.
-   **[StagedInviteeEmail](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_stagedinviteeemail.htm)**
    Represents an email address that is included on a calendar event but that doesn’t match an existing user, contact, or lead record. This object is available in API version 66.0 and later.
-   **[StagedUnmtchdEmailAddr](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_stagedunmtchdemailaddr.htm)**
    Represents data about an email address identified by Einstein Activity Capture that doesn’t match to an existing user, contact, or lead record. These addresses are only stored temporarily. Related to StagedUnmtchdEmailAddrRela, which represents data about the email message or calendar event activity associated with an unmatched email. This object is available in API version 66.0 and later.
-   **[StagedUnmtchdEmailAddrRela](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_stagedunmtchdemailaddrrela.htm)**
    Represents data about the message or event activity associated with an email address that Einstein Activity Capture can’t match with an existing user, contact, or lead record. Related to StagedUnmtchdEmailAddr, which represents data about the unmatched email address. This object is available in API version 66.0 and later.
-   **[Stamp](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_stamp.htm)**
    Represents a User Specialty. This object is available in API version 39.0 and later.
-   **[StampAssignment](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_stampassignment.htm)**
    Represents assignment of a User Specialty to a user. This object is available in API version 39.0 and later.
-   **[StandardInvocableActionType](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_standardinvocableactiontype.htm)**
    Represents a collection of fields to set up granular user permissions for access to a standard invocable action in Flow Builder. This object is available in API version 60.0 and later.
-   **[StandardShippingRate](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_standardshippingrate.htm)**
    Standard shipping rate for a store. This object is available in API version 59.0 and later.
-   **[StaticResource](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_staticresource.htm)**
    Represents a static resource that can be used in Visualforce markup.
-   **[StoreIntegratedService](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_storeintegratedservice.htm)**
    Represents an association between an integration and a store. This object is available in API version 49.0 and later.
-   **[StreamingChannel](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_streamingchannel.htm)**
    Represents a channel that is the basis for notifying listeners of generic Streaming API events. This object is available in API version 29.0 and later.
-   **[Salesforce Surveys Object Model](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_salesforce_surveys_object_model.htm)**
    Learn about how Salesforce Surveys objects relate to one another in Salesforce.
-   **[Survey](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_survey.htm)**
    Represents a survey.
-   **[SurveyEmailBranding](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_surveyemailbranding.htm)**
    Represents the configuration settings for invitation emails sent to survey participants for a particular survey.
-   **[SurveyEngagementContext](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_surveyengagementcontext.htm)**
    Represents the context based on which a survey invitation was sent or a survey response was received. This object is available in API version 49.0 and later.
-   **[SurveyInvitation](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_surveyinvitation.htm)**
    Represents the invitation sent to a participant to complete the survey.
-   **[SurveyPage](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_surveypage.htm)**
    Represents a page, such as the title page or a question page, in a survey.
-   **[SurveyQuestion](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_surveyquestion.htm)**
    Represents a question in a survey.
-   **[SurveyQuestionChoice](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_surveyquestionchoice.htm)**
    Represents an answer choice that a participant can select for a survey question.
-   **[SurveyQuestionResponse](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_surveyquestionresponse.htm)**
    Represents a participant’s answer to a specific question.
-   **[SurveyQuestionScore](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_surveyquestionscore.htm)**
    Represents the aggregate of responses for the following question types: date, multiple choice, picklist, radio, ranking, rating, scoring, slider, and [Net Promoter Score® (NPS®)](https://www.salesforce.com/content/dam/web/en_us/www/documents/legal/Agreements/product-specific-terms/net-promoter-and-nps.pdf).
-   **[SurveyResponse](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_surveyresponse.htm)**
    Represents information about a participant’s response to a survey, such as the status of the response, the participant’s location, and when the survey was completed.
-   **[SurveySubject](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_surveysubject.htm)**
    Represents a relationship between a survey and another object, such as an account or a case.
-   **[SurveyVersion](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_surveyversion.htm)**
    Represents a version of a survey.
-   **[SurveyVersionAddlInfo](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_surveyversionaddlinfo.htm)**
    Represents additional information about a survey version. This information defines the default settings of a survey version. This object is available in API version 49.0 and later.
-   **[SvcCatalogCategory](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_svccatalogcategory.htm)**
    Represents a group of Service Catalog items by functional area. This object is available in API version 58.0 and later.
-   **[SvcCatalogCategoryItem](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_svccatalogcategoryitem.htm)**
    Represents an association between a Service Catalog item and category. Service catalog items can be grouped into categories. This object is available in API version 58.0 and later.
-   **[SvcCatalogFilterCriteria](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_svccatalogfiltercriteria.htm)**
    Represents an eligibility rule that determines if a Service Catalog user has access to a catalog item. This object is available in API version 60.0 and later.
-   **[SvcCatalogItemDef](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_svccatalogitemdef.htm)**
    Represents a service catalog item that can be requested by a service catalog user. This object is available in API version 53.0 and later.
-   **[SvcCatalogRequest](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_svccatalogrequest.htm)**
    Represents a request made by a user using the Service Catalog. Catalog builders use this object to report on Service Catalog activity. This object is available in API version 53.0 and later.
-   **[SvcCatalogReqRelatedItem](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_svccatalogreqrelateditem.htm)**
    Represents an item related to a Service Catalog Request. This object is available in API version 53.0 and later.
-   **[Swarm](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_swarm.htm)**
    Represents a team of agents, Salesforce users, or Slack users in a Slack channel or thread dedicated to solving a problem. This problem can be related to a support case, incident, sales opportunity, or change request. This object is available in API version 55.0 and later.
-   **[SwarmMember](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_swarmmember.htm)**
    Represents a Salesforce member, such as an agent, of a swarm. This object is available in API version 55.0 and later.
-   **[TabDefinition](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_tabdefinition.htm)**
    Represents a custom tab. Returns only the tabs that the current user has access to. This object is available in API version 43.0 and later.
-   **[TagDefinition](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_tagdefinition.htm)**
    Defines the attributes of child Tag objects.
-   **[Task](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_task.htm)**
    Represents a business activity such as making a phone call or other to-do items. In the user interface, Task and Event records are collectively referred to as activities.
-   **[TaskPriority](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_taskpriority.htm)**
    Represents the importance or urgency of a task, such as High, Normal, or Low.
-   **[TaskRelation](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_taskrelation.htm)**
    Represents the relationship between a task and a lead, contacts, and other objects related to the task. If Shared Activities is enabled, this object doesn’t support triggers, workflow, or data validation rules. This object is available in API version 24.0 and later.
-   **[TaskStatus](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_taskstatus.htm)**
    Represents the status of a task, such as Not Started, Completed, or Closed.
-   **[TaskTag](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_tasktag.htm)**
    Associates a word or short phrase with a task .
-   **[TaskWhoRelation](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_taskwhorelation.htm)**
    Represents the relationship between a task and a lead or contacts. This object is available in API version 29.0 and later.
-   **[TaxEngine](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_taxengine.htm)**
    A tax engine represents both an instance of a tax engine provider as well as the merchant credentials for that specific instance. When Subscription Management calculates tax on an order item, it sends a request through Subscription Management Tax Calculation API to an external tax engine. The Salesforce tax engine record contains information passed to the external tax engine, such as This object is available in API version 55.0 and later.
-   **[TaxEngineInteractionLog](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_taxengineinteractionlog.htm)**
    A record of a communication with an external tax engine following a tax calculation request. This object is available in API version 55.0 and later.
-   **[TaxEngineProvider](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_taxengineprovider.htm)**
    Represents general information about a service that manages a tax engine, such as the ID of the tax adapter Apex class in Salesforce, and the engine’s namespace prefix. Tax engine providers have a one-to-many relationship with tax engines, where the tax engine record represents a specific configuration of a tax engine that can be assigned to multiple order items. This object is available in API version 55.0 and later.
-   **[TaxGeoConfig](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_taxgeoconfig.htm)**
    Represents a tax configuration associated with a GeoCountry. This object is available in API version 57.0 and later.
-   **[TaxPolicy](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_taxpolicy.htm)**
    A tax policy contains a group of tax treatments, where each treatment represents parameters to determine how a particular product is taxed for a transaction line item. Tax policies are related to products, which pass the policy on to the resulting order items. When you activate an order, Subscription Management assigns a tax treatment to each order item based on the tax policy's DefaultTaxTreatmentId, then uses the tax treatment to calculate tax. This object is available in API version 55.0 and later.
-   **[TaxRate](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_taxrate.htm)**
    Represents a tax rate for a tax code and country. This object is available in API version 56.0 and later.
-   **[TaxTreatment](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_taxtreatment.htm)**
    A tax treatment contains details about how Salesforce and external engines calculate taxes, and the tax engine to use for tax calculation. The IsTaxable field determines whether tax is calculated for the product in the transaction. The tax code, tax engine, and product code are sent via API to the external tax calculation service. When you invoice an order item that has a tax treatment, the invoice line inherits the tax treatment from the order item’s related billing schedule. The invoice line’s TaxCode field is populated based on the code that the tax engine used for calculation. This object is available in API version 55.0 and later.
-   **[TenantScrAIPrmptInjection](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_tenantscraiprmptinjection.htm)**
    Stores generative AI prompt injection data. This object is available in API version 65.0 and later.
-   **[TenantSecret](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_tenantsecret.htm)**
    This object stores an encrypted organization-specific key fragment that’s used with the primary secret (KDF seed) to produce org-specific data encryption keys. This object is available in API version 34.0 and later.
-   **[TenantSecurityAIGtwyUsage](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_tenantsecurityaigtwyusage.htm)**
    Stores Einstein generative AI gateway usage data. This object is available in API version 65.0 and later.
-   **[TenantSecurityAlertRuleSelectedTenant](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_tenantsecurityalertruleselectedtenant.htm)**
    Stores information about a Security Center alert rule for tenants. This object is available for Security Center subscribers in API version 55.0 and later.
-   **[TenantSecurityApiAnomaly](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_tenantsecurityapianomaly.htm)**
    Stores detected anomalies in how users typically make API calls. Fore more information, see [Threat Detection](https://help.salesforce.com/s/articleView?language=en_US&type=5&id=sf.real_time_em_threat_detection.htm). This object is available to Security Center subscribers in API version 53.0 and later.
-   **[TenantSecurityCertificate](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_tenantsecuritycertificate.htm)**
    Stores metric details related to public key certificate information. The certificate binds the public key to the identity of an entity. This object is available in API version 63.0 and later.
-   **[TenantSecurityConnectedApp](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_tenantsecurityconnectedapp.htm)**
    Stores the details for a connected app that was added to or removed from a Security Center tenant. This object is available to Security Center subscribers in API version 53.0 and later.
-   **[TenantSecurityConfigAgent](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_tenantsecurityconfigagent.htm)**
    Stores metric details related to implemented Agentforce Agents This object is available in API version 65.0 and later.
-   **[TenantSecurityCredentialStuffing](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_tenantsecuritycredentialstuffing.htm)**
    Stores when a user successfully logs in to Salesforce during an identified credential stuffing attack. For more information, see [Threat Detection](https://help.salesforce.com/s/articleView?language=en_US&type=5&id=sf.real_time_em_threat_detection.htm). This object is available to Security Center subscribers in API version 53.0 and later.
-   **[TenantSecurityCustomMetricSetup](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_tenantsecuritycustommetricsetup.htm)**
    Represents the configuration for a custom metric within Security Center. This object is available in API version 61.0 and later.
-   **[TenantSecurityCustomMetricDetail](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_tenantsecuritycustommetricdetail.htm)**
    Stores TenantSecurityCustomMetricStat drill down details. This object is available in API version 62.0 and later.
-   **[TenantSecurityCustomMetricStat](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_tenantsecuritycustommetricstat.htm)**
    Represents custom metric data within Security Center. This object is available in API version 61.0 and later.
-   **[TenantSecurityEncryptedField](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_tenantsecurityencryptedfield.htm)**
    Represents fields encrypted under your Shield Platform Encryption policy. This object is available in API version 61.0 and later.
-   **[TenantSecurityGuestUserAnomaly](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_tenantsecurityguestuseranomaly.htm)**
    Represents metric details for guest user anomaly events detected by Threat Detection. This object is available in API version 60.0 and later.
-   **[TenantSecurityEncryptionPolicy](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_tenantsecurityencryptionpolicy.htm)**
    Stores tenant encryption policy status. This object is available in API version 58.0 and later.
-   **[TenantSecurityFeature](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_tenantsecurityfeature.htm)**
    Stores org features across all tenants in Security Center. This object is available in API version 57.0 and later.
-   **[TenantSecurityHealthCheckBaselineTrend](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_tenantsecurityhealthcheckbaselinetrend.htm)**
    Stores metric details related to Health Check baseline settings. The Health Check detail page in Security Center displays scores and settings for all your tenants in one place. Use this object to get details about which metrics are collected and for which tenants, and changes made to the Health Check baseline. This object is available to Security Center subscribers in API version 54.0 and later.
-   **[TenantSecurityHealthCheckDetail](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_tenantsecurityhealthcheckdetail.htm)**
    Stores the details of Health Check scores for a connected tenant. The Health Check detail page in Security Center displays scores and settings for all your tenants in one place. Use this object to get settings and risks per tenant on a selected date. This object is available to Security Center subscribers in API version 53.0 and later.
-   **[TenantSecurityHealthCheckTrend](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_tenantsecurityhealthchecktrend.htm)**
    Stores the history of Security Health Check scores for a connected tenant within Security Center. Health Check in Security Center displays Health Check scores and the average risk settings for all your tenants in one place. This object belongs to the parent tenant and stores Health Check data pushed from child tenants. This object is available for Security Center subscribers in API version 53.0 and later.
-   **[TenantSecurityLicense](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_tenantsecuritylicense.htm)**
    Stores license usage information within Security Center. This object is available in API version 59.0 and later.
-   **[TenantSecurityLogin](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_tenantsecuritylogin.htm)**
    Stores the login details of a single user to a tenant, grouped by date and type. You can query this object to find out how many times the user logged in to a specific tenant using a specific login type (for example, username/password or SSO). This object is available to Security Center subscribers in API version 53.0 and later.
-   **[TenantSecurityLoginIpRangeTrend](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_tenantsecurityloginiprangetrend.htm)**
    Stores details of changes related to login IP ranges in Security Center. This object is available in API version 59.0 and later.
-   **[TenantSecurityMobilePolicyTrend](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_tenantsecuritymobilepolicytrend.htm)**
    Stores metrics related to changes in mobile security policies across all tenants in Security Center. This object is available to Security Center subscribers in API version 54.0 and later.
-   **[TenantSecurityMonitorMetric](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_tenantsecuritymonitormetric.htm)**
    Stores the daily count and daily count change for a metric within Security Center. This object is available to Security Center subscribers in API version 53.0 and later.
-   **[TenantSecurityNotification](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_tenantsecuritynotification.htm)**
    Stores information about notifications that were triggered in Security Center as a function of the Alerts feature. For more information, see [Create Alerts for Security Changes](https://help.salesforce.com/s/articleView?id=xcloud.security_center_create_alerts.htm&type=5&language=en_US). This object is available to Security Center subscribers in API version 54.0 and later.
-   **[TenantSecurityNotificationRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_tenantsecuritynotificationrule.htm)**
    Stores an alert configured in the Security Center Alerts feature to notify recipients of changes made to security settings. For more information, see [Create Alerts for Security Changes](https://help.salesforce.com/s/articleView?id=xcloud.security_center_create_alerts.htm&type=5&language=en_US). This object is available to Security Center subscribers in API version 53.0 and later.
-   **[TenantSecurityMetricDetailLink](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_tenantsecuritymetricdetaillink.htm)**
    Represents the link between the metric count and metric drill down. This object is available in API version 48.0 and later.
-   **[TenantSecurityPackage](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_tenantsecuritypackage.htm)**
    Stores details about managed and unmanaged packages that are added, updated, or removed from a tenant in Security Center. Use this object to identify whether new packages are installed, upgraded, or uninstalled from your connected tenants. This object is available to Security Center subscribers in API version 53.0 and later.
-   **[TenantSecurityPolicy](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_tenantsecuritypolicy.htm)**
    Stores security policies created and deployed in Security Center. For more information, see [Define and Deploy Security Policies](https://help.salesforce.com/s/articleView?id=xcloud.security_center_deploy_policies.htm&type=5&language=en_US). This object is available to Security Center subscribers in API version 54.0 and later.
-   **[TenantSecurityPolicyDeployment](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_tenantsecuritypolicydeployment.htm)**
    Stores the status of deployments of a Security Center policy on a tenant. For more information, see [Define and Deploy Security Policies](https://help.salesforce.com/s/articleView?id=xcloud.security_center_deploy_policies.htm&type=5&language=en_US). This object is available to Security Center subscribers in API version 54.0 and later.
-   **[TenantSecurityPolicySelectedTenant](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_tenantsecuritypolicyselectedtenant.htm)**
    Stores the list of tenants selected for a Security Center policy. For more information, see [Define and Deploy Security Policies](https://help.salesforce.com/s/articleView?id=xcloud.security_center_deploy_policies.htm&type=5&language=en_US). This object is available to Security Center subscribers in API version 54.0 and later.
-   **[TenantSecurityReportAnomaly](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_tenantsecurityreportanomaly.htm)**
    Stores anomalies in how users run or export reports, including unsaved reports, as detected by Threat Detection. For more information, see [Threat Detection](https://help.salesforce.com/s/articleView?language=en_US&type=5&id=sf.real_time_em_threat_detection.htm). This object is available to Security Center subscribers in API version 53.0 and later.
-   **[TenantSecuritySessionHijacking](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_tenantsecuritysessionhijacking.htm)**
    Stores information about session hijacking events as detected by Threat Detection within connected tenants in Security Center. For more information, see [Threat Detection](https://help.salesforce.com/s/articleView?language=en_US&type=5&id=sf.real_time_em_threat_detection.htm). This object is available for Security Center subscribers in API version 53.0 and later.
-   **[TenantSecurityTenantInfo](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_tenantsecuritytenantinfo.htm)**
    Stores information on changes related to the tenant history. This object is available in API version 56.0 and later.
-   **[TenantSecurityTransactionPolicyTrend](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_tenantsecuritytransactionpolicytrend.htm)**
    Stores changes to the count of Transaction Security Policies for a connected tenant within Security Center. This object is available for Security Center subscribers in API version 55.0 and later.
-   **[TenantSecurityTrigTransactionSecurityPol](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_tenantsecuritytrigtransactionsecuritypol.htm)**
    Stores metric details related to Transaction Security Policy triggering events. This object is available in API version 63.0 and later.
-   **[TenantSecurityTrustedIpRangeTrend](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_tenantsecuritytrustediprangetrend.htm)**
    Stores details of changes related to trusted IP ranges in Security Center.This object is available for Security Center subscribers in API version 54.0 and later.
-   **[TenantSecurityUserActivity](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_tenantsecurityuseractivity.htm)**
    Stores details related to how a user interacts with a tenant. Use this object to determine whether to reevaluate a user’s access to your org for security purposes. You can check whether a user has never logged in, hasn’t been active for 90 days, has a frozen account, or isn’t using multi-factor authentication. This object is available to Security Center subscribers in API version 53.0 and later.
-   **[TenantSecurityUserPerm](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_tenantsecurityuserperm.htm)**
    Stores information on permissions assigned to a user. Use this object to see which tenants a user is assigned to. This object is available to Security Center subscribers in API version 53.0 and later.
-   **[TenantUsageEntitlement](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_tenantusageentitlement.htm)**
    Represents a data structure that contains information about the features or functionalities that a Salesforce org has access to. This object is available in API version 28.0 and later.
-   **[Territory](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_territory.htm)**
    Represents a flexible collection of accounts and users where the users have at least read access to the accounts, regardless of who owns the accounts. Available if Sales Territories has been enabled.
-   **[TerritoryMgmtObjectConfig](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_territorymgmtobjectconfig.htm)**
    Represents territory management settings and defaults for a particular object. This object is available in API version 56.0 and later.
-   **[Territory2](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_territory2.htm)**
    Represents a sales territory. Available if Sales Territories has been enabled.
-   **[Territory2AlignmentLog](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_territory2alignmentlog.htm)**
    Represents the start and end status of a territory assignment rule run job. This object is available in API version 54.0 and later.
-   **[Territory2Model](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_territory2model.htm)**
    Represents a territory model. Available if Sales Territories has been enabled.
-   **[Territory2ModelHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_territory2modelhistory.htm)**
    Represents the history of changes to the values in the fields on a territory model. Available if Sales Territories has been enabled.
-   **[Territory2ObjectExclusion](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_territory2objectexclusion.htm)**
    Represents the objects that aren’t included in territory assignment rule runs, even when they meet assignment rule criteria. This object is available in API version 54.0 and later.
-   **[Territory2ObjSharingConfig](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_territory2objsharingconfig.htm)**
    Represents the sharing access level of objects assigned to a particular territory. This object is available in API version 56.0 and later.
-   **[Territory2Type](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_territory2type.htm)**
    Represents a category for territories (Territory2). Every Territory2 must have a Territory2Type. Available only if Sales Territories has been enabled for your organization.
-   **[TerritoryAdminAssignment](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_territoryadminassignment.htm)**
    Represents designated team members who can administer specific territories and their descendants. This object is available in API version 63.0 and later.
-   **[TestSuiteMembership](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_testsuitemembership.htm)**
    Associates an Apex class with an ApexTestSuite. This object is available in API version 36.0 and later.
-   **[ThirdPartyAccountLink](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_thirdpartyaccountlink.htm)**
    Represents the list of external users who authenticated using an authentication provider. This object is available in API version 32.0 and later.
-   **[ThreatDetectionFeedback](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_threatdetectionfeedback.htm)**
    Represents feedback provided by a user about a Threat Detection event that occurred in your org. The feedback specifies whether the event was malicious, suspicious, not a threat, or unknown. Each ThreatDetectionFeedback object is associated with one of these Threat Detection storage events: ApiAnomalyEventStore, CredentialStuffingEventStore, ReportAnomalyEventStore, or SessionHijackingEventStore. This object is available in API version 49.0 and later.
-   **[TimeSheet](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_timesheet.htm)**
    Represents a schedule of a service resource’s time in Field Service or Workforce Engagement. This object is available in API v47.0 and later.
-   **[TimeSheetEntry](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_timesheetentry.htm)**
    Represents a span of time that a service resource spends on a field service task. This object is available in API version 47.0 and later.
-   **[TimeSlot](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_timeslot.htm)**
    Represents a period of time on a specified day of the week during which work can be performed in Field Service, Salesforce Scheduler, or Workforce Engagement. Operating hours consist of one or more time slots. This object is available in API version 38.0 and later.
-   **[TimeSlotHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_timeslothistory.htm)**
    Represents the history of changes made to tracked fields on a time slot. This object is available in API version 38.0 and later.
-   **[TodayGoal](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_todaygoal.htm)**
    Sets the quarterly sales goal on the performance chart. This object is available in API version 35.0 and later.
-   **[Topic](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_topic.htm)**
    Represents a topic on a Chatter post or record. This object is available in API version 28.0 and later.
-   **[TopicAssignment](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_topicassignment.htm)**
    Represents the assignment of a topic to a specific feed item, record, or file. This object is available in API version 28.0 and later.
-   **[TopicLocalization](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_topiclocalization.htm)**
    Represents the translated version of a topic name. Topic localization applies only to navigational and featured topics in Experience Cloud sites. This object is available in API version 33.0 and later.
-   **[TopicUserEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_topicuserevent.htm)**
    Represents an action (such as comment, post, like, or share) made by a user on a topic. This object is available in API version 42.0 and later.
-   **[TopInsight](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_topinsight.htm)**
    For internal use only.
-   **[TransactionSecurityPolicy](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_transactionsecurity.htm)**
    Represents a transaction security policy definition.
-   **[TransactionSecurityEventLog](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_transactionsecurityeventlog.htm)**
    Transaction Security event logs contain details about policy execution. Legacy transaction security policy details are supported in API version 38.0 and later. Enhanced transaction security policy details are supported in API version 61.0 and later.
-   **[Translation](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_translation.htm)**
    The Translation object represents the languages enabled for translation in your Salesforce org. This object is available in API version 47.0 and later.
-   **[TravelMode](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_travelmode.htm)**
    Represents a travel mode used for travel time calculations. The records include information about the type of transportation (such as Car or Walking), whether a vehicle can take toll roads, and whether a vehicle is transporting hazardous materials. This object is available in API version 54.0 and later.
-   **[TwoFactorInfo](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_twofactorinfo.htm)**
    Stores a user’s secret for multi-factor operations. Use this object when customizing multi-factor authentication in your organization. (Note that multi-factor authentication was formerly called two-factor authentication.) This object is available in API version 32.0 and later.
-   **[TwoFactorMethodsInfo](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_twofactormethodsinfo.htm)**
    Stores information about which identity verification methods a user has registered. This object is available in API version 37.0 and later.
-   **[TwoFactorTempCode](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_twofactortempcode.htm)**
    Stores information about a user’s temporary verification code for confirming their identity when logging in. This object is available in API version 37.0 and later.
-   **[UiAgentInteractionEventLog](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_uiagentinteractioneventlog.htm)**
    This log tracks client side interactions and events with the Agentforce panel. It is limited to Salesforce Lightning Experience, Salesforce Mobile, and Conversation Preview within Agentforce Builder. This object is available in API version 65.0 and later.
-   **[UiFormulaCriterion](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_uiformulacriterion.htm)**
    Represents a filter that helps define component visibility on a Lightning page. This object is available in API version 47.0 and later.
-   **[UiFormulaRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_uiformularule.htm)**
    Represents a set of one or more filters that define the conditions under which a component displays on a Lightning page. This object is available in API version 47.0 and later.
-   **[UiTelemetryNavTmEventLog](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_uitelemetrynavtmeventlog.htm)**
    UI Telemetry Navigation Timing events capture network performance metrics related to page navigation. The event extends from the UI Telemetry Resource Timing Event and includes requests initiated with either the [Fetch API](https://fetch.spec.whatwg.org/) or the [XMLHttpRequest API](https://xhr.spec.whatwg.org/). This object is available in API version 64.0 and later.
-   **[UiTelemetryRsrcTmEventLog](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_uitelemetryrsrctmeventlog.htm)**
    UI Telemetry Resource Timing events capture network performance metrics related to loading an application’s resources. The event includes requests initiated with either the [Fetch API](https://fetch.spec.whatwg.org/) or the [XMLHttpRequest API](https://xhr.spec.whatwg.org/). This object is available in API version 64.0 and later.
-   **[UndecidedEventRelation](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_undecidedeventrelation.htm)**
    Represents event participants (invitees or attendees) with the status Not Responded for a given event. This object is available in API versions 29.0 and later.
-   **[UnifiedActivity](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_unifiedactivity.htm)**
    Represents an activity that is automatically captured from Einstein Activity Capture (EAC) or other activity data, such as calls, manually logged tasks, and emails. This object consists of fields common to all types of activity-related objects such as Event, Task, EmailMessage, VoiceCall, VideoCall, and so on. This object is available for reports and dashboards in the Winter ’24 release and later.
-   **[UnifiedActivityInsight](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_unifiedactivityinsight.htm)**
    Represents an insight related to a unified activity. This object is available for reports and dashboards in the Winter ’24 release and later.
-   **[UnifiedActivityParticipant](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_unifiedactivityparticipant.htm)**
    Represents a participant in an activity. For example, a participant in a voice call is someone who initiated the call or someone who received the call.This object is available for reports and dashboards in the Winter ’24 release and later.
-   **[UnifiedActivityRelation](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_unifiedactivityrelation.htm)**
    Represents a relationship between an activity and a related record that’s a target or topic of the activity. For example, a related record can be an opportunity, account, and so on. This object is available for reports and dashboards in the Winter ’24 release and later.
-   **[UnifiedActvtyInsightKeyword](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_unifiedactvtyinsightkeyword.htm)**
    Represents a keyword in a communication that triggered the activity insight. This object is available for reports and dashboards in the Winter ’24 release and later.
-   **[UnifiedEmail](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_unifiedemail.htm)**
    Represents an email that was captured or synced from an EmailMessage or Task record. This object is available for reports and dashboards in the Winter ’24 release and later.
-   **[UnifiedEmailParticipant](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_unifiedemailparticipant.htm)**
    Represents a participant in an email. This object is available for reports and dashboards in the Winter ’24 release and later.
-   **[UnifiedMeeting](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_unifiedmeeting.htm)**
    Represents a meeting that was captured or synced from an Event record. This object is available for reports and dashboards in the Winter ’24 release and later.
-   **[UnifiedMeetingParticipant](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_unifiedmeetingparticipant.htm)**
    Represents a participant in a meeting. This object is available for reports and dashboards in the Winter ’24 release and later.
-   **[UnifiedTask](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_unifiedtask.htm)**
    Represents a business activity such as a to-do item. This object is available for reports and dashboards in the Winter ’24 release and later.
-   **[UnifiedTaskParticipant](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_unifiedtaskparticipant.htm)**
    Represents a participant in a task. This object is available for reports and dashboards in the Winter ’24 release and later.
-   **[UnifiedVideoCall](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_unifiedvideocall.htm)**
    Represents a video call that is captured or synced from the VideoCall or Task record. This object is available for reports and dashboards in the Winter ’24 release and later.
-   **[UnifiedVideoCallParticipant](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_unifiedvideocallparticipant.htm)**
    Represents a participant in a video call. This object is available for reports and dashboards in the Winter ’24 release and later.
-   **[UnifiedVoiceCall](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_unifiedvoicecall.htm)**
    Represents a voice call that is captured or synced from a VoiceCall or Task record. This object is available for reports and dashboards in the Winter ’24 release and later.
-   **[UnifiedVoiceCallParticipant](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_unifiedvoicecallparticipant.htm)**
    Represents a participant in a voice call. This object is available for reports and dashboards in the Winter ’24 release and later.
-   **[UnitOfMeasure](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_unitofmeasure.htm)**
    Defines the units and systems of units used to express and account for quantities. This object is available in API version 61.0 and later.
-   **[UriEventLog](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_urieventlog.htm)**
    URI events contain details about user interaction with the web browser UI. This object is available in API version 61.0 and later.
-   **[UsageImpactFactor](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_usageimpactfactor.htm)**
    Represents a collection of fields to set up the Usage Impact Factors used across jurisdictions and programs.This object is available in API version 58.0 and later.
-   **[UsageImpactGroup](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_usageimpactgroup.htm)**
    Represents a collection of fields to set up the Usage Impact Groups used across jurisdictions and programs. This object is available in API version 58.0 and later.
-   **[UsageImpactGroupFactor](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_usageimpactgroupfactor.htm)**
    Represents a junction between an Usage Impact Group version and Usage Impact Factor. This object is available in API version 58.0 and later.
-   **[UsageImpactGroupPgmMeasure](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_usageimpactgrouppgmmeasure.htm)**
    Represents a junction between the program, product, and Usage Impact Group version. This object is available in API version 58.0 and later.
-   **[UsageImpactGroupVersion](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_usageimpactgroupversion.htm)**
    Represents a collection of fields to set up the versions of Usage Impact Groups. This object is available in API version 58.0 and later.
-   **[User](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_user.htm)**
    Represents a user in your organization.
-   **[UserAccessChange](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_useraccesschange.htm)**
    Represents a change related to user access. This object is available in API version 57.0 and later.
-   **[UserAccessPolicy](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_useraccesspolicy.htm)**
    Represents a user access policy. This object is available in API version 57.0 and later.
-   **[UserAccountTeamMember](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_useraccountteammember.htm)**
    Represents a User on the default account team of another User.
-   **[UserAppInfo](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_userappinfo.htm)**
    Stores the last Lightning app logged in to. If the user hasn’t logged into Salesforce or if the user lost access to the last accessed app, the UserAppInfo object stores a Null value. This object is available in API version 38.0 and later.
-   **[UserAppMenuCustomization](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_userappmenucustomization.htm)**
    Represents an individual user’s settings for items in the app menu or App Launcher. This object is available in API version 35.0 and later.
-   **[UserAppMenuItem](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_userappmenuitem.htm)**
    Represents the organization-wide settings for items in the app menu or App Launcher that the requesting user has access to in Setup. This object is available in API version 35.0 and later.
-   **[UserAuthCertificate](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_userauthcertificate.htm)**
    Represents a user authentication certificate in your org. A user certificate is a unique PEM-encoded X.509 digital certificate to authenticate individual users to your org. This object is available in API version 45.0 and later.
-   **[UserConfigTransferButton](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_userconfigtransferbutton.htm)**
    Represents the association between a Chat configuration and a live chat button. This association allows users associated with a specific configuration to transfer chats to a button queue.
-   **[UserConfigTransferSkill](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_userconfigtransferskill.htm)**
    Represents the association between a Chat configuration and a skill. This association allows users associated with a specific configuration to transfer chats to agents who have that skill.
-   **[UserCustomBadge](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_usercustombadge.htm)**
    Represents a custom badge for a user. This object is available in API version 38.0 and later.
-   **[UserCustomBadgeLocalization](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_usercustombadgelocalization.htm)**
    Represents the translated version of a custom badge for a user. This object is available in API version 38.0 and later.
-   **[UserDailyMetric](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_userdailymetric.htm)**
    Represents the daily engagement metrics for a user. This object is available in API version 52.0 and later.
-   **[UserDailyMetricOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_userdailymetricownersharingrule.htm)**
    Represents the rules for sharing the user daily metric with users other than the owner.
-   **[UserDefinedLabel](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_userdefinedlabel.htm)**
    Represents a label created by a user to help organize, track, and find records. This object is available in API version 61.0 and later.
-   **[UserDefinedLabelAssignment](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_userdefinedlabelassignment.htm)**
    Represents a relationship between a record label and the item the user assigned it to. This object is available in API version 61.0 and later.
-   **[UserDevice](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_userdevice.htm)**
    Represents information unique to a device. Available in API version 43.0 and later.
-   **[UserDeviceApplication](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_userdeviceapplication.htm)**
    Represents information on applications installed on a device that is accessing Salesforce. Available in API version 43.0 and later.
-   **[UserDeviceHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_userdevicehistory.htm)**
    Represents tracking information on the UserDevice sObject. This object is available in API version 50.0 and later.
-   **[UserEmailCalendarSync](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_useremailcalendarsync.htm)**
    Represents the user assignments of an Einstein Activity Capture configuration. This object is available in API version 49.0 and later.
-   **[UserEmailPreferredPerson](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_useremailpreferredperson.htm)**
    Represents a mapping for a user’s preferred record for an email address when multiple records match an email field.This object is available in API version 44.0 and later.
-   **[UserEmailPreferredPersonShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_useremailpreferredpersonshare.htm)**
    Represents a sharing entry on a UserEmailPreferredPerson object. Sharing is not customizable for UserEmailPreferredPerson records.This object is available in API version 44.0 and later.
-   **[UserLicense](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_userlicense.htm)**
    Represents a user license in your organization. A user license entitles a user to specific functionality and determines the profiles and permission sets available to the user.
-   **[UserListView](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_userlistview.htm)**
    Represents the customizations a user made to a list view. This object is available in API version 32.0 and later.
-   **[UserListViewCriterion](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_userlistviewcriterion.htm)**
    Represents the criterion for a user’s customized list view. The criterion consists of the filters or sort order a user added to a list view for the Salesforce Mobile app. This object is available in API version 32.0 and later.
-   **[UserLocationAssignment](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_userlocationassignment.htm)**
    Represents the assignment between a location and a user. This object is available in API version 57.0 and later.
-   **[UserLogin](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_userlogin.htm)**
    Represents the settings that affect a user’s ability to log into an organization. To access this object, you need the UserPermissions.ManageUsers permission. This object is available in API version 29.0 and later.
-   **[UserMembershipSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_usermembershiprule.htm)**
    Represents the rules for sharing user records from a source group to a target group. A user record contains details about a user. Users who are members of the source group can be shared with members of the target group. The source and target groups can be based on roles, portal roles, public groups, or territories. This object is available in API version 26.0 and later.
-   **[UserMonthlyMetric](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_usermonthlymetric.htm)**
    Represents the monthly engagement metrics for a user. This object is available in API version 52.0 and later.
-   **[UserMonthlyMetricOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_usermonthlymetricownersharingrule.htm)**
    Represents the rules for sharing the user monthly metric with users other than the owner.
-   **[UserPackageLicense](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_userpackagelicense.htm)**
    Represents a license for an installed managed package, assigned to a specific user. This object is available in API version 31.0 and later.
-   **[UserPermissionAccess](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_userpermissionaccess.htm)**
    Represents the permissions accessibility for a current user. Available in API version 41.0 and later.
-   **[UserPrioritizedRecord](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_userprioritizedrecord.htm)**
    Represents records that Pipeline Inspection, Account Intelligence, Contact Intelligence, and Lead Intelligence users flag as important for tracking in pipeline and intelligence views and filters. This object is available in API version 53.0 and later.
-   **[UserPreference](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_userpreference.htm)**
    Represents a functional preference for a specific user in your organization.
-   **[UserProfile](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_userprofile.htm)**
    Represents a Chatter user profile.
-   **[UserProvAccount](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_userprovaccount.htm)**
    Represents information that links a Salesforce user account with an account in a third-party (target) system, such as Google, for users of connected apps with Salesforce user provisioning enabled. This object is available in API version 33.0 and later.
-   **[UserProvAccountStaging](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_userprovaccountstaging.htm)**
    Temporarily stores user account information while a user completes the User Provisioning Wizard. This information that is stored in the UserProvAccount object when you click the button to collect and analyze accounts on the target system.
-   **[UserProvMockTarget](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_userprovmocktarget.htm)**
    Represents an entity for testing user data before committing the data to a third-party system for user provisioning.
-   **[UserProvisioningConfig](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_userprovisioningconfig.htm)**
    Represents information for a flow to use during a user provisioning request process, such as the attributes for an update. This object is available in API version 34.0 and later.
-   **[UserProvisioningLog](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_userprovisioninglog.htm)**
    Represents messages generated during the process of provisioning users for third-party applications. This object is available in API version 33.0 and later.
-   **[UserProvisioningRequest](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_userprovisioningrequest.htm)**
    Represents an individual provisioning request to create, update, or delete a single user account in a third-party service system (or another Salesforce organization). This object is available in API version 33.0 and later.
-   **[UserRecordAccess](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_userrecordaccess.htm)**
    Represents a user’s access to a set of records. This object is read only and is available in API version 24.0 and later. This object doesn’t consider whether a user’s access is blocked by a restriction rule.
-   **[UserRelatedRecordContent](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_userrelatedrecordcontent.htm)**
    Represents the link between a managed content record, an account, event, or opportunity record, and a user record. This object is reserved for future use.
-   **[UserRole](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_role.htm)**
    Represents a user role in your organization.
-   **[UserServicePresence](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_userservicepresence.htm)**
    Represents a presence user’s real-time presence status. This object is available in API version 32.0 and later.
-   **[UserSetupEntityAccess](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_usersetupentityaccess.htm)**
    Represents the enabled custom permissions of the running user. This object is available in API version 48.0 and later.
-   **[UserShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_usershare.htm)**
    Represents a sharing entry on a user record. This object is available in API version 26.0 and later.
-   **[UserSharedFeature](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_usersharedfeature.htm)**
    For internal use only.
-   **[UserTeamMember](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_userteammember.htm)**
    Represents a single User on the default opportunity team of another User.
-   **[UserTerritory](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_userterritory.htm)**
    Represents a User who has been assigned to a Territory.
-   **[UniqueQueryEventLog](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_uniquequeryeventlog.htm)**
    Unique Query events capture specific search queries (SOQL), filter IDs, and report IDs that are processed, along with the underlying database queries (SQL). This object is available in API version 65.0 and later.
-   **[UserTerritory2Association](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_userterritory2association.htm)**
    Represents an association (by assignment) between a territory and a user record. Available only if Sales Territories has been enabled.
-   **[UserTerritory2AssocLog](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_userterritory2assoclog.htm)**
    Represents a log of when a user is assigned and unassigned from a territory. This object is available in API version 57.0 and later.
-   **[UserUIPreference](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_useruipreference.htm)**
    Represents user preferences for Salesforce components. This object is available in API version 63.0 and later.
-   **[UserWorkList](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_userworklist.htm)**
    Represents a list of work items in the My List tab for Sales Engagement users.
-   **[UserWorkListItem](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_userworklistitem.htm)**
    Represents an individual work item in the My List tab for Sales Engagement users.
-   **[VendorCallCenterStatusMap](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_vendorcallcenterstatusmap.htm)**
    Stores a mapping between a call center vendor agent status and a Salesforce presence status for an associated call center. This object is available in API version 54.0 and later.
-   **[VerificationHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_verificationhistory.htm)**
    Represents the past six months of your org users’ attempts to verify their identity. This object is available in API version 36.0 and later.
-   **[VisualforceAccessMetrics](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_visualforceaccessmetrics.htm)**
    Represents summary statistics for Visualforce pages.
-   **[VisualforceRequestEventLog](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_visualforcerequesteventlog.htm)**
    Visualforce Request events contain details of Visualforce requests. Requests can originate from the browser (UI). This object is available in API version 61.0 and later.
-   **[VideoCall](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_videocall.htm)**
    Represents a video call.
-   **[VideoCallInsight](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_videocallinsight.htm)**
    Represents the video call insight data associated with a video call. Each record represents the call insight of a specific recording or transcript within a call. This object is available in API version 66.0 and later.
-   **[VideoCallInsightAction](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_videocallinsightaction.htm)**
    Represents a suggested follow-up action derived from a video call insight. VideoCallInsightAction manages recommended steps—such as sending an email, creating a task, or scheduling a meeting—that address specific moments, including competitor mentions, pricing discussions, or objections. This object is available in API version 66.0 and later.
-   **[VideoCallInsightReason](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_videocallinsightreason.htm)**
    Represents the video call insight reason that contains the insight keyword, insight moments associated with a keyword, and the number of keyword occurrences. This object is available in API version 66.0 and later.
-   **[VideoCallParticipant](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_videocallparticipant.htm)**
    Represents a participant in a video call. Participant information can come from the video call provider (for example, Zoom), or Salesforce. This object is available in API version 51.0 and later.
-   **[VideoCallRecording](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_videocallrecording.htm)**
    Represents a recording from a video call, such as a video recording, a voice recording, or a transcript. Video call recordings aren’t saved in Salesforce. This object is available in API version 51.0 and later.
-   **[VideoCallRecordingStructure](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_videocallrecordingstructure.htm)**
    Represents the structure of a video call recording, having relation to a video call participant, speaking order, start offset, and end offset. This object is available in API version 65.0 and later.
-   **[VoiceCall](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_voicecall.htm)**
    Represents a call in Service Cloud Voice, Sales Dialer, or other supported voice connectors. For Service Cloud Voice, this can be a phone or Voice over Internet Protocol (VoIP) call. This object is available in API version 40.0 and later.
-   **[VoiceCallInsight](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_voicecallinsight.htm)**
    Represents the voice call insight data associated with a voice call. Each record represents the call insight of a specific recording or transcript within a call. This object is available in API version 66.0 and later.
-   **[VoiceCallInsightAction](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_voicecallinsightaction.htm)**
    Represents a suggested follow-up action derived from a voice call insight. VoiceCallInsightAction manages recommended steps—such as sending an email, creating a task, or scheduling a meeting—that address specific moments, including competitor mentions, pricing discussions, or objections. This object is available in API version 66.0 and later.
-   **[VoiceCallInsightReason](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_voicecallinsightreason.htm)**
    Represents the voice call insight reason that contains the insight keyword, insight moments associated with a keyword, and the number of keyword occurrences. This object is available in API version 66.0 and later.
-   **[VoiceCallMetrics](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_voicecallmetrics.htm)**
    Represents metrics for a VoiceCall lifecycle event, aggregated daily. This object is available in API version 56.0 and later.
-   **[VoiceCallList](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_voicecalllist.htm)**
    Represents a prioritized list of numbers to call.
-   **[VoiceCallListItem](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_voicecalllistitem.htm)**
    Represents a single phone number in a prioritized call list.
-   **[VoiceCallQualityFeedback](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_voicecallqualityfeedback.htm)**
    Represents feedback given by a Sales Dialer user about the quality of a VoiceCall .
-   **[VoiceCallRecording](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_voicecallrecording.htm)**
    Represents a call recording in Service Cloud Voice and Sales Dialer. Call recordings for Service Cloud Voice with Amazon Connect and for Service Cloud Voice with Partner Telephony from Amazon Connect are stored in S3 buckets on your Amazon Web Services (AWS) account and can be accessed via AWS. Call recordings for Sales Dialer are saved as files in Salesforce.
-   **[VoiceCoaching](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_voicecoaching.htm)**
    Represents a call that is using call monitoring.
-   **[VoiceLocalPresenceNumber](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_voicelocalpresencenumber.htm)**
    Represents a phone number with the same area code as the person who’s being called.
-   **[VoiceMailContent](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_voicemailcontent.htm)**
    Represents a voicemail message left by a caller to the context user.
-   **[VoiceMailGreeting](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_voicemailgreeting.htm)**
    Represents a custom greeting message that plays upon reaching a user’s voicemail. This object is available in API version 41.0 and later.
-   **[VoiceMailMessage](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_voicemailmessage.htm)**
    Represents a prerecorded voicemail message.
-   **[VoiceOrgSetting](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_voiceorgsetting.htm)**
    Represents the org's customized voice settings. This object is available in API version 46.0 and later.
-   **[VoiceUserLine](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_voiceuserline.htm)**
    Represents a user’s forwarding phone number.
-   **[VoiceUserPreferences](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_voiceuserpreferences.htm)**
    Represents the number the user displays when making outbound calls. This object is available in API version 41.0 and later.
-   **[VoiceVendorInfo](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_voicevendorinfo.htm)**
    Represents information about the Service Cloud Voice or Sales Dialer provider’s vendor.
-   **[VoiceVendorLine](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_voicevendorline.htm)**
    Represents a user’s phone number reserved with the vendor.
-   **[Vote](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_vote.htm)**
    Represents a vote that a user has made on a Knowledge Article, Idea, or Reply.
-   **[WarrantyTerm](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_warrantyterm.htm)**
    Represents warranty terms defining the labor, parts, and expenses covered, along with any exchange options, provided to rectify issues with products. This object is available in API version 50.0 and later.
-   **[WaveAutoInstallRequest](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_waveautoinstallrequest.htm)**
    Provides access to the concrete object that represents a CRM Analytics auto-install request. The auto-install request tracks the progress of CRM Analytics applications created from CRM Analytics templates by the automated process user. This object is available in API version 38.0 and later.
-   **[WebCart](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_webcart.htm)**
    Represents an online shopping cart for a store built with B2B Commerce or D2C Commerce, with total amounts for products, shipping and handling, and taxes. This object is available in API version 49.0 and later.
-   **[WebCartAdjustmentBasis](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_webcartadjustmentbasis.htm)**
    Coupons that trigger promotions for the cart. When a customer tries to add a coupon to the cart, the store looks for promotions associated with the coupon. If a promotion results in a price adjustment, a WebCartAdjusmentBasis record is created. This object is available in API version 54.0 and later.
-   **[WebCartAdjustmentGroup](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_webcartadjustmentgroup.htm)**
    Group of price adjustments for a cart. This object is available in API version 52.0 and later.
-   **[WebCartHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_webcarthistory.htm)**
    WebCartHistory represents the history of changes to the values in the fields of the WebCart object.
-   **[WebLink](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_weblink.htm)**
    Represents a custom link to a URL or Scontrol.
-   **[WebLinkLocalization](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_weblinklocalization.htm)**
    Represents the translated value of the field label for a custom link to a URL or s-control when the Translation Workbench is enabled for your organization.
-   **[WebStore](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_webstore.htm)**
    Represents a B2B or D2C store. This object is available in API version 49.0 and later.
-   **[WebstoreBuyerGroup](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_webstorebuyergroup.htm)**
    Associates a webstore with a buyer group. Supports dynamically changing locales when buyers shop in orgs that are enabled for multiple languages and currencies. This object is available in API version 58.0 and later.
-   **[WebStoreCatalog](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_webstorecatalog.htm)**
    Represents the collection of products associated with a store. This object is available in API version 49.0 and later.
-   **[WebStoreInventorySource](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_webstoreinventorysource.htm)**
    Used to configure the inventory source for a webstore. This object is available in API version 57.0 and later.
-   **[WebStoreMessageContent](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_webstoremessagecontent.htm)**
    Represents the assocation of a managed content message record in CMS to a web store, along with other attributes that specify the application and intent of the message content. This object is available in API version 61.0 and later.
-   **[WebStoreNetwork](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_webstorenetwork.htm)**
    Represents the relationship between a web store and an experience site. This object is available in API version 49.0 and later.
-   **[WebStorePricebook](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_webstorepricebook.htm)**
    Represents a store price book used in Lightning B2B Commerce. This object is available in API version 48.0 and later.
-   **[WebStoreSearchProdSettings](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_webstoresearchprodsettings.htm)**
    Search settings for a WebStore product search. This object is available in API version 47.0 and later.
-   **[WebStoreShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_webstoreshare.htm)**
    Represents a sharing entry on a B2B or D2C store. This object is available in API version 45.0 and later.
-   **[Wishlist](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_wishlist.htm)**
    Represents a buyer-created list of [WishlistItem](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_wishlistitem.htm "Represents an item on a Wishlist in a store built with B2B Commerce for Lightning. Available in API version 49.0 and later.")s in a store that’s built with B2B Commerce on Lightning. Available in API version 49.0 and later.
-   **[WishlistItem](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_wishlistitem.htm)**
    Represents an item on a Wishlist in a store built with B2B Commerce for Lightning. Available in API version 49.0 and later.
-   **[WorkAccess](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_workaccess.htm)**
    Used to grant or restrict user access to give badge definitions. Each badge definition record must have one WorkAccess record.
-   **[WorkAccessShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_workaccessshare.htm)**
    Used to control Givers of WorkBadgeDefinition records.
-   **[WorkBadge](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_workbadge.htm)**
    Represents information about who the badge was given to and which badge was given. A WorkBadge record is created for each recipient of a WorkBadgeDefinition.
-   **[WorkBadgeDefinition](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_workbadgedefinition.htm)**
    Represents the attributes of a badge including the badge name, description, and image. Each WorkBadge record must have a lookup to a WorkBadgeDefinition since badge attributes (like badge name) are derived from the WorkBadgeDefinition object.
-   **[WorkCapacityAvailability](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_workcapacityavailability.htm)**
    Represents the available work capacity for a specific time and service territory. This object is available in API version 59.0 and later.
-   **[WorkCapacityLimit](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_workcapacitylimit.htm)**
    Represents the capacity limit in a specific service territory for a workstream or for the whole service territory in a given period. This object is available in API version 59.0 and later.
-   **[WorkCapacityUsage](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_workcapacityusage.htm)**
    Represents the capacity usage in a specific service territory for a workstream or for the whole service territory in a given period. This object is available in API version 59.0 and later.
-   **[WorkCoaching](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_workcoaching.htm)**
    Represents a single coaching relationship between two users. One of the users is defined as the coach and the other is defined as a coachee. WorkCoaching is feed-enabled so there is a private feed available to the coach and coachee.
-   **[WorkDemographic](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_workdemographic.htm)**
    Represents the field values used to specify slices in the workload forecasting and capacity planning. This object is available in API version 49.0 and later.
-   **[WorkFeedback](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_workfeedback.htm)**
    Represents the answer to a question that a person was asked via a feedback request. Also used to store offered feedback without linking it to a particular question.
-   **[WorkFeedbackQuestion](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_workfeedbackquestion.htm)**
    Represents a free-form text type or multiple choice question within a set of questions.
-   **[WorkFeedbackQuestionSet](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_workfeedbackquestionset.htm)**
    Represents a set of questions being asked. The question set is used to link all the individual requests where different recipients were asked the same set of questions on the same subject.
-   **[WorkFeedbackRequest](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_workfeedbackrequest.htm)**
    Represents a single feedback request on a subject or topic (question) to a single recipient in the feedback application. In the case of offered feedback, WorkFeedbackRequest represents feedback that is offered about a subject. In the performance application, WorkFeedbackRequest represents a request for feedback on a set of questions from a question set, on a subject—for the recipient to complete and submit.
-   **[WorkforceCapacity](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_workforcecapacity.htm)**
    Represents the time series for actual or forecasted workforce allocation. This object is available in API version 51.0 and later.
-   **[WorkforceCapacityUnit](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_workforcecapacityunit.htm)**
    Represents the number of resources allocated or needed for a specific set of work items at a timestamp within a specific duration. This object is available in API version 51.0 and later.
-   **[WorkGoal](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_workgoal.htm)**
    Represents the components of a goal, such as its description and associated metrics. This object has been deprecated as of API version 35.0. Use the [Goal](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_goal.htm#sforce_api_objects_Goal "The Goal object represents the components of a goal such as its name, description, and status.") object to query information about WDC goals.
-   **[WorkGoalCollaborator](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_workgoalcollaborator.htm)**
    Represents collaborators on a WorkGoal object. This doesn’t include WorkGoal followers, which is handled by Chatter Feed Follow functionality. This object has been deprecated as of API version 35.0. Use the [Goal](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_goal.htm#sforce_api_objects_Goal "The Goal object represents the components of a goal such as its name, description, and status.") object to query information about WDC goals.
-   **[WorkGoalCollaboratorHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_workgoalcollaboratorhistory.htm)**
    Represents the history of changes to the values in the fields in a WorkGoalCollaborator object. Access is read-only.
-   **[WorkGoalHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_workgoalhistory.htm)**
    Represents the history of changes to the values in the fields of a WorkGoal. Access is read-only. This object has been deprecated as of API version 35.0. Use the GoalHistory object to query historical information for WDC goals.
-   **[WorkGoalLink](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_workgoallink.htm)**
    Represents the relationship between two goals (many to many relationship). This object has been deprecated as of API version 35.0. Use the [GoalLink](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_goallink.htm#sforce_api_objects_GoalLink "Represents the relationship between two goals. This is a many-to-many relationship, meaning that each goal can link to many other goals.") object to query information about the relationship between two WDC goals.
-   **[WorkGoalShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_workgoalshare.htm)**
    Represents a sharing entry on a WorkGoal object. This object has been deprecated as of API version 35.0. Use the GoalShare object to query information about sharing for WDC goals.
-   **[Workload](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_workload.htm)**
    Represents the time series for work item volume and average handle time from aggregation and forecasting processes. This object is available in API version 49.0 and later.
-   **[WorkloadUnit](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_workloadunit.htm)**
    Represents the number of work items and average handle time in a specific time interval. This object is available in API version 49.0 and later.
-   **[WorkOrder](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_workorder.htm)**
    Represents field service work to be performed for a customer. This object is available in API version 36.0 and later.
-   **[WorkOrderHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_workorderhistory.htm)**
    Represents the history of changes made to tracked fields on a work order. This object is available in API version 36.0 and later.
-   **[WorkOrderLineItem](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_workorderlineitem.htm)**
    Represents a subtask on a work order in field service. This object is available in API version 36.0 and later.
-   **[WorkOrderLineItemHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_workorderlineitemhistory.htm)**
    Represents the history of changes made to tracked fields on a work order line item. This object is available in API version 36.0 and later.
-   **[WorkOrderLineItemStatus](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_workorderlineitemstatus.htm)**
    Represents a possible status of a work order line item in field service.
-   **[WorkOrderShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_workordershare.htm)**
    Represents a sharing entry on a work order. This object is available in API version 36.0 and later.
-   **[WorkOrderStatus](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_workorderstatus.htm)**
    Represents a possible status of a work order in field service.
-   **[WorkPerformanceCycle](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_workperformancecycle.htm)**
    Represents feedback that is gathered to assess the performance of a specific set of employees.
-   **[WorkPlan](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_workplan.htm)**
    Represents a work plan for a work order or work order line item. This object is available in API version 52.0 and later.
-   **[WorkPlanSelectionRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_workplanselectionrule.htm)**
    Represents a rule that selects a work plan for a work order or work order line item. This object is available in API version 52.0 and later.
-   **[WorkPlanTemplate](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_workplantemplate.htm)**
    Represents a template for a work plan. This object is available in API version 52.0 and later.
-   **[WorkPlanTemplateEntry](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_workplantemplateentry.htm)**
    Represents an object that associates a work step template with a work plan template. This object is available in API version 52.0 and later.
-   **[WorkReward](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_workreward.htm)**
    Used to store reward codes tied to a Reward Fund. Reward Funds must have at least one WorkReward record.
-   **[WorkRewardFund](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_workrewardfund.htm)**
    Represents a Reward Fund and describes the Reward Fund attributes.
-   **[WorkRewardFundType](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_workrewardfundtype.htm)**
    Represents the type of WorkRewardFund object.
-   **[WorkStep](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_workstep.htm)**
    Represents a work step in a work plan. This object is available in API version 52.0 and later.
-   **[WorkStepStatus](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_workstepstatus.htm)**
    Represents a picklist for a status category on a work step. This object is available in API version 52.0 and later.
-   **[WorkStepTemplate](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_worksteptemplate.htm)**
    Represents a template for a work step. This object is available in API version 52.0 and later.
-   **[WorkThanks](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_workthanks.htm)**
    Represents the source and message of a thanks post.
-   **[WorkType](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_worktype.htm)**
    Represents a type of work to be performed in Field Service and Lightning Scheduler. Work types are templates that can be applied to work order or work order line items. This object is available in API version 38.0 and later.
-   **[WorkTypeGroup](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_worktypegroup.htm)**
    Represents a grouping of work types used to categorize types of appointments available in Lightning Scheduler, or to define scheduling limits in Field Service. This object is available in API version 45.0 and later.
-   **[WorkTypeGroupMember](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_worktypegroupmember.htm)**
    Represents the relationship between a work type and the work type group it belongs to. This object is available in API version 45.0 and later.

## Related Topics

- System Fields (atlas.en-us.object_reference.meta/object_reference/system_fields.htm)
- AbnExperiment (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_abnexperiment.htm)
- AbnExperimentCohort (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_abnexperimentcohort.htm)
- AcceptedEventRelation (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_acceptedeventrelation.htm)
- Account (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_account.htm)
- AccountBrand (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_accountbrand.htm)
- AccountContactRelation (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_accountcontactrelation.htm)
- AccountCleanInfo (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_accountcleaninfo.htm)
- AccountContactRole (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_accountcontactrole.htm)
- AccountInsight (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_accountinsight.htm)
