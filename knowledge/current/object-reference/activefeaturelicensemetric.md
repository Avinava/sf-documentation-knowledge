---
title: "ActiveFeatureLicenseMetric"
domain: object-reference
topic: activefeaturelicensemetric
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:03.970Z
estimatedTokens: 359
keywords: [ActiveFeatureLicenseMetric, number, active, assigned, purchased, feature, licenses, org, API, version, 52.0, later, Calls]
---

# ActiveFeatureLicenseMetric

> Represents the number of active, assigned, and purchased feature licenses in
         the org. This object is available in API version 52.0 and later.

# ActiveFeatureLicenseMetric

Represents the number of active, assigned, and purchased feature licenses in the org. This object is available in API version 52.0 and later.

## Supported Calls

describeSObjects(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| ActiveUserCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionNumber of users assigned this feature license who have logged in within the last 30 days. |
| AssignedUserCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionNumber of users assigned this feature license. |
| FeatureType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionType of feature license.Possible values are:AvantgoUser—AvantGo UserChatterAnswersUser—Chatter Answers UserInteractionUser—Flow UserJigsawProspectingUser—Data.com UserKnowledgeUser—Knowledge UserLiveAgentUser—Chat UserMarketingUser—Marketing UserMobileUser—Apex Mobile UserOfflineUser—Offline UserSFContentUser—Salesforce CRM Content UserSiteforceContributorUser—Site.com Contributor UserSiteforcePublisherUser—Site.com Publisher UserSupportUser—Service Cloud UserWirelessUser—Wireless UserWorkDotComUserFeature—WDC User |
| MetricsDate | TypedatePropertiesFilter, Group, SortDescriptionDate that feature license metrics were collected. |
| TotalLicenseCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of feature licenses in the organization. |
