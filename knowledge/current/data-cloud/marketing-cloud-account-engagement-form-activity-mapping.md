---
title: "Marketing Cloud Account Engagement: Form Activity Mapping"
domain: data-cloud
topic: marketing-cloud-account-engagement-form-activity-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:43.653Z
keywords: [Marketing, Cloud, Account, Engagement, Form, Activity, Mapping, DLO, DMO]
---

# Marketing Cloud Account Engagement: Form Activity Mapping

# Marketing Cloud Account Engagement: Form Activity Mapping

After a data stream is deployed, the Marketing Cloud Account Engagement data bundle maps source objects from Account Engagement to data model objects (DMOs) in Data Cloud. The Form Activity object includes form engagement data from forms embedded in Account Engagement landing pages.

## DLO to DMO Mapping

These data mappings relate to the Form Activity object used with the Account Engagement connector. You can add to the data mappings, but don’t change the automatically generated mappings.

| DLO Field | DLO Field Data Type | DMO | DMO Field | Additional Details |
| --- | --- | --- | --- | --- |
| accountEngagementBusinessUnitId | text | — | — |  |
| createdAt | dateTime | Website Engagement | Engagement Date Time |  |
| engagementChannelActionStatus | text | Website Engagement | Engagement Channel Action Status |  |
| engagementChannelActionType | text | Website Engagement | Engagement Channel Action Type |  |
| engagementSourceType | text | Website Engagement | Engagement Type |  |
| externalFormId | text | — |  |  |
| externalId | text | Website Engagement | External Record Id |  |
| externalProspectId | text | — | — |  |
| externalSourceId | text | Website Engagement | External Source Id |  |
| externalVisitorId | text | — | — |  |
| id | text | Website Engagement | Website Engagement Id |  |
| interactionName | text | Website Engagement | Engagement Channel Action |  |
| ipAddress | text | Website Engagement | Device IP Address |  |
| objectType | text | — | — |  |
| polymorphicFormId | text | Website Engagement | Website Publication |  |
| polymorphicIndividualId | text | Website Engagement | Individual |  |
| prospectId | text | — | — |  |
| refreshedAt | dateTime | — | — |  |
| salesforceOrgId | text | — | — |  |
| sourceUrl | text | Website Engagement | Page URL | The URL of the page where the engagement occurred |
| title | text | Website Engagement | Page Public Title |  |
| updatedAt | dateTime | — | — |  |
| utmCampaignParameter | text | — | — |  |
| utmContentParameter | text | — | — |  |
| utmMediumParameter | text | — | — |  |
| utmSourceParameter | text | — | — |  |
| utmTermParameter | text | — | — |  |
| visitorHostname | text | — | — |  |
| visitorId | text | — | — |  |