---
title: "Salesforce CRM: Member Benefit Mapping"
domain: data-cloud
topic: salesforce-crm-member-benefit-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:43.269Z
keywords: [Salesforce, CRM, Member, Benefit, Mapping, Data, Bundle, DLO, DMO]
---

# Salesforce CRM: Member Benefit Mapping

# Salesforce CRM: Member Benefit Mapping

These data mappings are for the Journal type DLO found in the Loyalty Management bundle of the Salesforce CRM Connector for Data Cloud. A benefit that has been assigned to a member. Members are assigned benefits based on their tier or based on their engagement with the loyalty program.

## Data Bundle

-   Loyalty Management

## DLO to DMO Mapping

These data mappings relate to the Journal type object included in the Salesforce CRM connector and how that data connects to DMOs. Learn more about the DLOs in the [Loyalty Management Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.248.0.loyalty.meta/loyalty/loyalty_api_overview.htm).

| DLO Field | DLO Field Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- |
| Benefit ID | reference | MemberBenefit | Loyalty Benefit |
| Created Date | dateTime | MemberBenefit | Created Date |
| Member Benefit ID | id | MemberBenefit | Member Benefit Id |
| End Date | date | MemberBenefit | End Date |
| Last Modified Date | dateTime | MemberBenefit | Last Modified Date |
| Member ID | reference | MemberBenefit | Loyalty Program Member |
| Start Date | date | MemberBenefit | Start Date |
| Status | picklist | MemberBenefit | Member Benefit Status |