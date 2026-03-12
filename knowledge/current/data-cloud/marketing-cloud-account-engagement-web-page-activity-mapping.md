---
title: "Marketing Cloud Account Engagement: Web Page Activity Mapping"
domain: data-cloud
topic: marketing-cloud-account-engagement-web-page-activity-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:14.444Z
estimatedTokens: 694
keywords: [Marketing, Cloud, Account, Engagement, Web, Page, Activity, Mapping, After, data, stream, deployed, maps, source, objects, model, DMOs, Data, Cloud., includes]
---

# Marketing Cloud Account Engagement: Web Page Activity Mapping

> After a data stream is deployed, the Marketing Cloud Account Engagement data stream maps
  source objects from Account Engagement to data model objects (DMOs) in Data Cloud. The Web Page Activity object includes form engagement data from forms embedded
  in Account Engagement landing pages and data from Account Engagement tracking codes.

# Marketing Cloud Account Engagement: Web Page Activity Mapping

After a data stream is deployed, the Marketing Cloud Account Engagement data stream maps source objects from Account Engagement to data model objects (DMOs) in Data Cloud. The Web Page Activity object includes form engagement data from forms embedded in Account Engagement landing pages and data from Account Engagement tracking codes.

## DLO to DMO Mapping

These data mappings relate to the Web Page Activity object used with the Account Engagement connector. You can add to the data mappings, but don’t change the automatically generated mappings.

| DLO Field | DLO Field Data Type | DMO | DMO Field | Additional Details |
| --- | --- | --- | --- | --- |
| accountEngagementBusinessUnitId | text | — | — | ID of the Account Engagement Business unit, not the Salesforce org ID |
| createdAt | dateTime | Website Engagement | Created Date |  |
| createdAt | dateTime | Website Engagement | Engagement Date Time |  |
| durationInSeconds | text | — | — |  |
| engagementChannelActionStatus | text | Website Engagement | Engagement Channel Action Status |  |
| engagementChannelActionType | text | Website Engagement | Engagement Channel Action Type |  |
| engagementSourceType | text | Website Engagement | Engagement Type |  |
| externalSourceId | text | Website Engagement | External Source Id |  |
| externalId | text | Website Engagement | External Record Id |  |
| interactionName | text | Website Engagement | Engagement Channel Action |  |
| ipAddress | text | Website Engagement | Device IP Address |  |
| isPriorityPage | boolean | — | — |  |
| externalLandingPageId | text | — | — |  |
| objectType | text | — | — |  |
| polymorphicIndividualId | text | Website Engagement | Individual |  |
| externalProspectId | text | — | — |  |
| id | text | Website Engagement | Website Engagement Id |  |
| prospectId | text | — | — |  |
| visitorId | text | — | — |  |
| referrerUrl | text | Website Engagement | Referrer URL |  |
| refreshedAt | dateTime | — | — |  |
| salesforceOrgId | text | — | — |  |
| sourceDomain Name | text | Website Engagement | Domain Name |  |
| sourceUrl | text | Website Engagement | Page URL | The long (non-vanity) URL of the page where the engagement occurred, even if the vanity URL was visited |
| title | text | Website Engagement | Page Public Title |  |
| updatedAt | dateTime | — | — |  |
| utmCampaignParameter | text | — | — |  |
| utmContentParameter | text | — | — |  |
| utmMediumParameter | text | — | — |  |
| utmSourceParameter | text | — | — |  |
| utmTermParameter | text | — | — |  |
| vanityUrl | text | — | — | The vanity URL of the page where the engagement occurred, if applicable |
| visitorHostname | text | — | — |  |
| visitorId | text | — | — |  |
