---
title: "Salesforce CRM: Account Mappings"
domain: data-cloud
topic: salesforce-crm-account-mappings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:13.472Z
estimatedTokens: 967
keywords: [Salesforce, CRM, Account, Mappings, After, data, stream, deployed, starter, bundle, automatically, maps, Sales, Cloud, Service, model, objects, DMO, Data, Cloud.]
---

# Salesforce CRM: Account Mappings

> After a data stream is deployed, the Salesforce CRM starter data
         bundle automatically maps data from Sales Cloud or Service Cloud to data model objects
         (DMO)s in Data Cloud. The Sales Cloud and Service Cloud
      bundles deploy mappings to Contact Point type DMOs. Identity Resolution uses the DMOs, which
      link multiple records into a unified customer
      profile.

# Salesforce CRM: Account Mappings

After a data stream is deployed, the Salesforce CRM starter data bundle automatically maps data from Sales Cloud or Service Cloud to data model objects (DMO)s in Data Cloud. The Sales Cloud and Service Cloud bundles deploy mappings to Contact Point type DMOs. Identity Resolution uses the DMOs, which link multiple records into a unified customer profile.

## Usage and Data Bundles

These mappings are used for various purposes within these bundles.

Bundles:

-   Financial Services
-   Sales Cloud
-   Service Cloud

See the Financial Services Cloud Developer Guide for descriptions of these DSO fields.

## DLO to DMO Mapping

These data mappings relate to the Account object included in the Salesforce CRM connector and how that data connects to DMOs.

| DLO Field | DLO Field API Name | DLO Field Data Type | DMO | DMO Field Name | Additional Details |
| --- | --- | --- | --- | --- | --- |
| Account Description | Description__c | text | Account | Account Description |  |
| Account Id | Id_c | text | Account | Account Id | Primary Key |
| Sales Phone | Foreign Key |
| Bill Contact Address | Foreign Key |
| Contact Point Address | Contact Point Address Id | Primary Key |
| Contact Point Phone | Contact Point Phone Id | Primary Key |
| Account Name | Name_c | text | Account | Account Name |  |
| Account Number | AccountNumber__c | text | Account | Account Number |  |
| Account Phone | Phone__c | text | Contact Point Phone | Telephone Number |  |
| Billing City | BillingCity__c | text | Contact Point Address | City Name |  |
| Billing Country | BillingCountry__c | text | Contact Point Address | Country Name |  |
| Billing Latitude | BillingLatitude__c | number | Contact Point Address | Geo Latitude |  |
| Billing Longitude | BillingLongitude__c | number | Contact Point Address | Geo Latitude |  |
| Billing Zip/Postal Code | BillingPostalCode__c | text | Contact Point Address | Postal Code Text |  |
| Billing State/Province | BillingState__c | text | Contact Point Address | State Province Name |  |
| Billing Street | BillingStreet__c | text | Contact Point Address | Address Line 1 |  |
| Client Category | FinServ__ClientCategory_c | picklist | Financial Customer | Customer Category | Used with Financial Services. |
| Contact ID |  | text | Contact Point Phone | Party | Foreign Key |
| Contact Point Address | Foreign Key |
| Contact Point Phone | Foreign Key |
| Created Date | CreatedDate__c | dateTime | Account | Created Date |  |
| Description |  | text | Account | Account Description | Used with Financial Services. |
| Household Policies | FinServ__HouseHoldPolicies_c | picklist | Financial Customer |  | Used with Financial Services. |
| Id |  | id | Account | Account Id | Used with Financial Services. |
| Financial Customer | Account |
| Financial Customer Id |
| Investment Experiene | FinServ__InvestmentExperience_c | picklist | Financial Customer | Investment Experience Level | Used with Financial Services. |
| Last Activity | LastActivityDate__c | date | Account | Last Activity Date |  |
| Last Modified Date | LastModifiedDate__c | dateTime | Account | Last Modified Date |  |
| Name |  | text | Account | Account Name | Used with Financial Services |
| Next Interaction | FinServ__NextInteraction__c | date | Account | Next Interaction Date | Used with Financial Services |
| Next Review | FinServ__NextReview__c | date | Account | Next. Review Date | Used with Financial Services |
| Parent Account ID | ParentId__c | text | Account | Parent Account | Foreign Key |
| Review Frequency | FinServ__ReviewFrequency__c | picklist | Account | Review Frequency | Used with Financial Services |
| Service Model | FinServ__ServiceModel_c | picklist | Financial Customer | Customer Service Level | Used with Financial Services |
| Type |  | text | Account | Account Type | Foreign Key |
