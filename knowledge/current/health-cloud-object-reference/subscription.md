---
title: "Subscription"
domain: health-cloud-object-reference
topic: subscription
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:35.613Z
estimatedTokens: 678
keywords: [Subscription, FHIR, resource, maps, InteropTopicSubscription, InteropTopicSubscriptionDtl, InteropTopicSubcrParameter, InteropTopicSubcrFilterobjects, Salesforce, V4.0, Data, Model, Mapping]
---

# Subscription

> The Subscription FHIR resource maps to the
   InteropTopicSubscription, InteropTopicSubscriptionDtl,
   InteropTopicSubcrParameter, and
  InteropTopicSubcrFilterobjects in Salesforce.

# Subscription

The Subscription FHIR resource maps to the InteropTopicSubscription, InteropTopicSubscriptionDtl, InteropTopicSubcrParameter, and InteropTopicSubcrFilterobjects in Salesforce.

## FHIR V4.0 - FHIR Subscription Data Model Mapping

Here’s how the fields defined by FHIR for [Subscription](https://build.fhir.org/subscription.html) map to the fields in Salesforce.

| subscription Resource | Salesforce Field | Type | Salesforce Cardinality | Notes |
| --- | --- | --- | --- | --- |
| identifier | N/A | N/A | N/A | Not supported |
| name | InteropTopicSubscription. Name | Text | 0.1 | N/A |
| status | InteropTopicSubscription.Status | Picklist | 0.1 | While FHIR defines status as a code, the Salesforce implementation of InteropTopicSubscription.Status is a picklist. |
| topic | InteropTopicSubscription.InteropTopicId | Lookup: InteropTopic | 1.1 | N/A |
| contact | InteropTopicSubscriptionDtl.DetailType | Picklist | 1.1 | Select Contact as the picklist value. |
| InteropTopicSubscriptionDtl.DetailRecordId | Lookup: ContactPointPhone, ContatcPointEmail | 1.1 | Reference an email or phone number as the contact record. |
| end | N/A | N/A | N/A | Not supported |
| managingEntity | InteropTopicSubscription.SubscribedById | Lookup: Account, HealthcareProvider | 1.1 | N/A |
| reason | InteropTopicSubscription.Reason | Text | 0.1 | N/A |
| filterBy | InteropTopicSubcrFilter | Object | 1.1 | N/A |
| filterBy.resource | N/A | N/A | N/A | Not supported |
| filterBy.filterParameter | InteropTopicSubcrFilter.InteropTopicFilterId | Lookup: InteropTopicFilter | 1.1 | N/A |
| filterBy.comparator | InteropTopicSubcrFilter.OperatorType | Picklist | 0.1 | N/A |
| filterBy.modifier | InteropTopicSubcrFilter.QueryOperatorType | Picklist | 0.1 | N/A |
| filterBy.value | InteropTopicSubcrFilter.Value | String | 1.1 | N/A |
| filterBy.event | N/A | N/A | N/A | Not supported |
| channelType | InteropTopicSubscription.ChannelTypeCodeId | Lookup: CodeSet | 1.1 | N/A |
| endpoint | InteropTopicSubscription.ChannelIdentifier | TextArea | 0.1 | N/A |
| parameter | InteropTopicSubcrParameter | Object | 1.1 | N/A |
| parameter.name | InteropTopicSubcrParameter.ParameterName | String | 1.1 | N/A |
| parameter.value | InteropTopicSubcrParameter.ParameterValue | TextArea | 1.1 | N/A |
| heartbeatPeriod | InteropTopicSubscription.CheckInInterval | Integer | 0.1 | N/A |
| timeout | InteropTopicSubscription.NotificationTimeout | Integer | 0.1 | N/A |
| contentType | InteropTopicSubscription.PayloadFormatType | Picklist | 0.1 | N/A |
| content | InteropTopicSubscription.PayloadContentType | Picklist | 0.1 | N/A |
| maxCount | InteropTopicSubscription.MaximumEventCount | Integer | 0.1 | N/A |
