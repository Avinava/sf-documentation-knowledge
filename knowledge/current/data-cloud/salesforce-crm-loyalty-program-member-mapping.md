---
title: "Salesforce CRM: Loyalty Program Member Mapping"
domain: data-cloud
topic: salesforce-crm-loyalty-program-member-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:43.205Z
keywords: [Salesforce, CRM, Loyalty, Program, Member, Mapping, Data, Bundle, DLO, DMO]
---

# Salesforce CRM: Loyalty Program Member Mapping

# Salesforce CRM: Loyalty Program Member Mapping

These data mappings are for the Loyalty Program Member DLO found in the Loyalty Management bundle of the Salesforce CRM Connector for Data Cloud. This data includes information about a member of the loyalty program and their individual or corporate membership details.

## Data Bundle

-   Loyalty Management

## DLO to DMO Mapping

These data mappings relate to the Loyalty Program Member object included in the Salesforce CRM connector and how that data connects to DMOs. Learn more about the DLOs in the [Loyalty Management Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.248.0.loyalty.meta/loyalty/loyalty_api_overview.htm).

| DLO Field | DLO Field Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- |
| Account ID | reference | Loyalty Program Member | Account |
| Associated Corporate Membership ID | reference | Loyalty Program Member | Related Corporate Program Member |
| Contact ID | reference | Loyalty Program Member | Party |
| Contact ID | reference | Loyalty Program Member | Account Contact |
| Created Date | reference | Loyalty Program Member | Created Date |
| Enrollment Channel | datetime | Loyalty Program Member | Enrollment Channel |
| Enrollment Date | picklist | Loyalty Program Member | Enrollment Date |
| Loyalty Program Member ID | date | Loyalty Program Member |  |
| Last Activity Date | id | Loyalty Program Member | Last Activity Date |
| Last Modified Date | date | Loyalty Program Member | Last Modified Date |
| Loyalty Program ID | reference | Loyalty Program Member | Loyalty Program |
| Membership End Date | date | Loyalty Program Member | Membership Expiration Date |
| Membership Last Renewal Date | datetime | Loyalty Program Member | Last Renewal Date |
| Membership Number | string | Loyalty Program Member | Membership Number |
| Member Status | picklist | Loyalty Program Member | Loyalty Program Member Status |
| Member Type | picklist | Loyalty Program Member | Loyalty Member Type |
| Referred By ID | reference | Loyalty Program Member | Referred by Member |
| Statement Frequency | picklist | Loyalty Program Member | StatementFrequencyTimeUOM |
| Statement Last Generated Date | datetime | Loyalty Program Member | Statement Last Generated Date |