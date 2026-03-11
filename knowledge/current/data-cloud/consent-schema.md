---
title: "Consent Schema"
domain: data-cloud
topic: consent-schema
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:42.218Z
keywords: [Consent, Schema]
---

# Consent Schema

# Consent Schema

Consent Management is used to either grant or revoke consent in the Engagement Mobile SDK. When a customer opts in to tracking, the mobile application sends a consentLog event indicating the choice along with other events that got collected. When a customer opts out, a consentLog event is sent containing their choice and no other events are sent to Data Cloud.

| Source Event Property | Target Schema Developer Name | Field Type | Description | CIM Object / Attribute |
| --- | --- | --- | --- | --- |
| <Automatically Assigned> | eventId | text | Required. Typically the primary key for the engagement events. | Privacy Consent Log /Privacy Consent Log Id |
| <Automatically Assigned> | dateTime | datetime | Required. Used for data partitioning for engagement events. ISO8601 supported format. | Privacy Consent Log /Privacy Consent Activity Date Time |
| <Automatically Assigned> | eventType = "consentLog" | text | Required. The developerName of an event defined in the Web Connector schema. | - |
| <Automatically Assigned> | sessionId | text | Required. The identifier of the session. | - |
| <Automatically Assigned> | deviceId | text | Required. Typically the primary key for profile events. | - |
| <Automatically Assigned> | category = "Engagement" | text | Required. Possible values are:EngagementProfile | Privacy Consent Log /Privacy Consent Log Category |
| consent.status | status | text | Required. Possible values are:Opt InOpt Out | Privacy Consent Log /Privacy Consent Status |
| consent.provider | provider | text | A named identifier indicating the consent management system providing the consent to the SDK | - |
| consent.purpose | purpose | text | What the user is consenting to. For example: Tracking | Privacy Consent Log /Consent Action |