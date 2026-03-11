---
title: "Salesforce CRM: Lead Mappings"
domain: data-cloud
topic: salesforce-crm-lead-mappings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:43.166Z
keywords: [Salesforce, CRM, Lead, Mappings, Usage, Data, Bundles, DLO, DMO, Mapping]
---

# Salesforce CRM: Lead Mappings

# Salesforce CRM: Lead Mappings

After a data stream is deployed, the Salesforce CRM starter data bundle automatically maps data from Sales Cloud or Service Cloud to data model objects (DMO)s in Data Cloud. The Sales Cloud and Service Cloud bundles deploy mappings to Contact Point type DMOs. Identity Resolution uses the DMOs, which link multiple records into a unified customer profile.

## Usage and Data Bundles

These mappings are used for various purposes within these bundles.

Bundles:

-   Sales Cloud
-   Service Cloud

## DLO to DMO Mapping

These data mappings relate to the Lead object included in the Salesforce CRM connector and how that data connects to DMOs.

| DLO Field | DLO Field Data Type | DMO Object | DMO Field | Additional Details |
| --- | --- | --- | --- | --- |
| City | text | Lead | City |  |
| Contact Point Address | City Name |  |
| Company | text | Lead | Company Name |  |
| Converted | boolean | Lead | Is Converted |  |
| Converted Account Id | text | Lead | Converted To Account | Foreign Key |
| Converted Contact Id | text | Lead | Converted To AccountContact | Foreign Key |
| Converted Date | date | Lead | Converted Date |  |
| Converted Opportunity Id | text | Lead | Converted to Opportunity | Foreign Key |
| Country | text | Contact Point Address | Country Name |  |
| Lead | Country Name |  |
| Created Date | dateTime | Individual | Created Date |  |
| Lead | Created Date |  |
| Description | text | Lead | Description |  |
| Email | text | Contact Point Email | Email Address |  |
| Email Bounced Date | dateTime | Lead | EmailBouncedDate |  |
| Contact Point Email | Email Latest Bounce Date Time |  |
| Email Bounced Reason | text | Lead | EmailBouncedReason |  |
| Contact Point Email | Email Latest Bounce Reason Text |  |
| First Name | text | Individual | First Name |  |
| Full Name | text | Individual | Person Name |  |
| Industry | text | Lead | Industry |  |
| Last Activity | date | Lead | Last Activity Date |  |
| Last Modified Date | dateTime | Lead | Last Modified Date |  |
| Individual | Last Modified Date |  |
| Last Name | text | Individual | Last Name |  |
| Lead Id | text | Lead | Lead Id | Primary Key |
| Contact Point Email | Foreign Key |
| Phone Contact Point | Foreign Key |
| Contact Point Email | Contact Point Email Id | Primary Key |
| Party | Foreign Key |
| Contact Point Phone | Contact Point Phone Id | Primary Key |
| Party | Foreign Key |
| Individual | Individual Id | Primary Key |
| Contact Point Address | Contact Point Address Id | Primary Key |
| Contact Point Address | Party | Foreign Key |
| Lead Source | text | Lead | Lead Source | Foreign Key |
| Lead Status | text | Lead | Status | Foreign Key |
| Phone | text | Contact Point Phone | Telephone Number |  |
| Photo Url | text | Lead | Photo URL |  |
| Individual | Photo URL |  |
| Rating | text | Lead | Lead Rating | Foreign Key |
| Salutation | text | Individual | Salutation |  |
| State/Province | text | Contact Point Address | State Province Name |  |
| Lead | State Province Name |  |
| Street | text | Lead | Street Name |  |
| Contact Point Address | Address Line 1 |  |
| Website | text | Lead | Website |  |
| Zip/Postal Code | text | Lead | Postal Code | Foreign Key |
| Contact Point Address | Postal Code Text | Foreign Key |