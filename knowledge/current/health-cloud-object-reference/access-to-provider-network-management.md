---
title: "Access to Provider Network Management"
domain: health-cloud-object-reference
topic: access-to-provider-network-management
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:34.138Z
estimatedTokens: 450
keywords: [Access, Provider, Network, Management, standard, objects, users, Health, Cloud, Platform, permission, licenses, Foundation]
---

# Access to Provider Network Management

> The provider network management standard objects are available to users with the Health
    Cloud Platform and Provider Network Management permission set licenses and the Health Foundation
    permission set.

# Access to Provider Network Management

The provider network management standard objects are available to users with the Health Cloud Platform and Provider Network Management permission set licenses and the Health Foundation permission set.

The provider network management data model is available in API version 52.0 and later. You must have the Health Cloud Provider Network Management Add On license, which contains the Health Cloud Provider Network Management platform license and the Health Cloud Provider Network Management user permission set license.

Some of the objects are available in your org even before enabling this org pref because they’re part of other data models in Health Cloud or other Salesforce products. These objects need the Health Cloud Provider Network Management Add On license to be enabled before you can use them:

-   Application Case
-   Individual Application
-   Insurance Policy
-   Person Employment
-   Provider Network Tier
-   Provider Network Contract
-   Care Fee Schedule Item
-   Fee Schedule Definition
-   Contract Payment Agreement
-   Standard Care Fee Agreement
-   Categorized Care Fee Agreement
-   Capitation Care Fee Agreement
-   Shared Saving Payment Agreement
-   Percentile Care Fee Agreement
-   Bundled Care Fee Agreement
-   Preventive Care Agreement

And these fields are added to existing objects when you enable the Health Cloud Provider Network Management Add On license.

Business License

-   IsPrimaryLicense
-   IssueDate
-   LicenseNumber

Care Provider Adverse Action

-   ActionIssueDate
-   IncidentDate
-   IncidentReportedDate
-   InsurancePolicyNumber
-   InsuranceProviderName
-   PenaltyAmount
-   RegulatoryBody
-   RegulatoryBodyType

Person Education

-   InstitutionAddress
-   ProgramName
-   CertificateIdentifier
