---
title: "SubscriptionTopic"
domain: health-cloud-object-reference
topic: subscriptiontopic
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:35.626Z
estimatedTokens: 1242
keywords: [SubscriptionTopic, FHIR, resource, maps, InteropTopic, InteropTopicDetail, InteropTopicTriggerCriteria, InteropTopicFilterand, InteropTopicNtfcnResourceobjects, Salesforce, V4.0, Subscription, Data, Model, Mapping]
---

# SubscriptionTopic

> The SubscriptionTopic FHIR resource maps to the
   InteropTopic, InteropTopicDetail,
   InteropTopicTriggerCriteria, InteropTopicFilterand
   InteropTopicNtfcnResourceobjects in Salesforce.

# SubscriptionTopic

The SubscriptionTopic FHIR resource maps to the InteropTopic, InteropTopicDetail, InteropTopicTriggerCriteria, InteropTopicFilterand InteropTopicNtfcnResourceobjects in Salesforce.

## FHIR V4.0 - FHIR Subscription Data Model Mapping

Here’s how the fields defined by FHIR for [SubscriptionTopic](https://build.fhir.org/subscriptiontopic.html) map to the fields in Salesforce.

| SubscriptionTopic Resource | Salesforce Field | Type | Salesforce Cardinality | Notes |
| --- | --- | --- | --- | --- |
| identifier | N/A | N/A | N/A | Not supported |
| url | InteropTopic.GlobalUniqueIdentifier | TextArea | 1.1 | N/A |
| version | InteropTopic.Version | Text | 0.1 | N/A |
| versionAlgorithm[x] | N/A | N/A | N/A | Not supported |
| name | InteropTopic.Name | Text | 1.1 | N/A |
| title | InteropTopic.Title | Text | 0.1 | N/A |
| derivedFrom | InteropTopicDetail.DetailType | Picklist | 1.1 | Select Derived From as the detail type. |
| InteropTopicDetail.DetailRecordId | Lookup: CodeSet, CodeSetBundle, ContactPointEmail, ContactPointPhone, InteropTopic | 1.1 | The record from which the interoperability topic is derived from. |
| status | InteropTopic.Status | Picklist | 1.1 | N/A |
| experimental | InteropTopic.IsExperimental | Boolean | 0.1 | N/A |
| date | InteropTopic.LastRevisedDate | DateTime | 0.1 | N/A |
| publisher | InteropTopic.PublisherId | Lookup: Account | 0.1 | N/A |
| contact | InteropTopicDetail.DetailType | Picklist | 1.1 | Select Contact as the detail type. |
| InteropTopicDetail.DetailRecordId | Lookup: CodeSet, CodeSetBundle, ContactPointEmail, ContactPointPhone, InteropTopic | 1.1 | The record that has the contact details of the publisher. |
| description | InteropTopic.Description | TextArea | 0.1 | N/A |
| useContext | InteropTopic.UsageType | Picklist | 1.1 | N/A |
| jurisdiction | N/A | N/A | N/A | Not supported |
| purpose | InteropTopic.Purpose | String | 0.1 | N/A |
| copyright | InteropTopic.CopyrightInformation | TextArea | 0.1 | N/A |
| copyrightLabel | InteropTopic.CopyrightLabel | String | 0.1 | N/A |
| approvalDate | InteropTopic.ApprovalDate | DateTime | 0.1 | N/A |
| lastReviewedDate | InteropTopic.LastReviewedDate | DateTime | 0.1 | N/A |
| effectivePeriod | InteropTopic.EffectiveStartDate | DateTime | 0.1 | Since Salesforce doesn’t natively support the period data type, effectivePeriod is flattened into a set of effective start date time and effective end date time fields. |
| InteropTopic.EffectiveEndDate | DateTime | 0.1 |
| trigger | InteropTopicTriggerCriteria | Object | 1.1 | N/A |
| trigger.description | InteropTopicTriggerCriteria.Description | String | 0.1 | N/A |
| trigger.resource | InteropTopicTriggerCriteria.Resource | TextArea | 1.1 | N/A |
| trigger.supportedInteraction | InteropTopicTriggerCriteria.OperationType | Picklist | 0.1 | N/A |
| trigger.queryCriteria | N/A | N/A | N/A | Not supported |
| trigger.queryCriteria.previous | InteropTopicTriggerCriteria.PreviousResourceStatus | String | 0.1 | N/A |
| trigger.queryCriteria.resultForCreate | InteropTopicTriggerCriteria.CreateOperationResultType | Picklist | 0.1 | N/A |
| trigger.queryCriteria.current | InteropTopicTriggerCriteria.CurrentResourceStatus | String | 0.1 | N/A |
| trigger.queryCriteria.resultForDelete | InteropTopicTriggerCriteria.DeleteOperationResultType | Picklist | 0.1 | N/A |
| trigger.queryCriteria.requireBoth | InteropTopicTriggerCriteria.AreBothRsrcStsRequired | Boolean | 0.1 | N/A |
| trigger.fhirPathCriteria | InteropTopicTriggerCriteria.CriteriaExpression | TextArea | 0.1 | N/A |
| trigger.event | InteropTopicTriggerCriteria.EventCodeId | Lookup: CodeSet, CodeSetBundle | 0.1 | N/A |
| trigger.canFilterBy | InteropTopicFilter | Object | 1.1 | N/A |
| trigger.canFilterBy.description | InteropTopicFilter.Description | String | 0.1 | N/A |
| trigger.canFilterBy.resource | InteropTopicFilter.Resource | TextArea | 0.1 | N/A |
| trigger.canFilterBy.filterParamter | InteropTopicFilter.ResourceField | String | 1.1 | N/A |
| trigger.canFilterBy.filterDefinition | InteropTopicFilter.ResourceFieldUrl | TextArea | 0.1 | N/A |
| trigger.canFilterBy.comparator | InteropTopicFilter.OperatorType | Picklist | 0.1 | N/A |
| trigger.canFilterBy.modifier | InteropTopicFilter.QueryOperatorType | Picklist | 0.1 | N/A |
| trigger.notificationShape | InteropTopicNtfcnResource | Object | 1.1 | N/A |
| trigger.notificationShape.resource | InteropTopicNtfcnResource.Resource | TextArea | 1.1 | N/A |
| trigger.notificationShape.include | InteropTopicNtfcnResource.IncludedResourceFieldSpec | TextArea | 0.1 | N/A |
| trigger.notificationShape.revInclude | InteropTopicNtfcnResource.IncludedRelaRsrcFieldSpec | TextArea | 0.1 | N/A |
| trigger.notificationShape.relatedQuery | N/A | N/A | N/A | Not supported |
| trigger.notificationShape.relatedQuery.queryType | N/A | N/A | N/A | Not supported |
| trigger.notificationShape.relatedQuery.query | N/A | N/A | N/A | Not supported |
