---
title: "Salesforce CRM: Case Mappings"
domain: data-cloud
topic: salesforce-crm-case-mappings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:13.491Z
estimatedTokens: 590
keywords: [Salesforce, CRM, Case, Mappings, After, data, stream, deployed, starter, bundle, automatically, maps, Sales, Cloud, Service, model, objects, DMO, Data, Cloud.]
---

# Salesforce CRM: Case Mappings

> After a data stream is deployed, the Salesforce CRM starter data
         bundle automatically maps data from Sales Cloud or Service Cloud to data model objects
         (DMO)s in Data Cloud. The Sales Cloud and Service Cloud
      bundles deploy mappings to Contact Point type DMOs. Identity Resolution uses the DMOs, which
      link multiple records into a unified customer
      profile.

# Salesforce CRM: Case Mappings

After a data stream is deployed, the Salesforce CRM starter data bundle automatically maps data from Sales Cloud or Service Cloud to data model objects (DMO)s in Data Cloud. The Sales Cloud and Service Cloud bundles deploy mappings to Contact Point type DMOs. Identity Resolution uses the DMOs, which link multiple records into a unified customer profile.

## Usage and Data Bundles

These mappings are used for various purposes within these bundles. For Service Cloud, they’re used to power Service Intelligence visualizations of contact center performance metrics.

Bundles:

-   Sales Cloud
-   Service Cloud

## DLO to DMO Mapping

These data mappings relate to the Case object included in the Salesforce CRM connector and how that data connects to DMOs.

| DLO Field | DLO Field API Name | DLO Field Data Type | DMO | DMO Field | Additional Details |
| --- | --- | --- | --- | --- | --- |
| Account |  | text | Case | Account | Foreign Key |
| Account ID | AccountId__c | text | Case | Account |  |
| Case ID | Id__c | text | Case | Case Id | Primary Key |
| Case Number | CaseNumber__c | text | Case | Case Number |  |
| Case Origin | Origin__c | text | Case | Case Creation Channel |  |
| Case Reason | Reason__c | text | Case | Case Closure Reason |  |
| Case Type | Type__c | text | Case | Case Type |  |
| Closed | IsClosed__c | text | Case | Closed |  |
| Closed Date | ClosedDate__c | dateTime | Case | Closed DateTime |  |
| Closed When Created | IsClosedOnCreate__c | text | Case | Closed when Created |  |
| Contact | ContactId__c | text | Case | Account Contact |  |
| Created Date | CreatedDate__c | dateTime | Case | Created Date |  |
| Date/Time Closed |  | dateTime | Case | Closed Date Time |  |
| Description | Description__c | text | Case | Description |  |
| Escalated | IsEscalated__c | text | Case | Escalated |  |
| Internal Comments | Comments__c | text | Case | Case Comments |  |
| Last Modified Date | LastModifiedDate__c | dateTime | Case | Last Modified Date |  |
| Owner ID | OwnerId__c | text | Case | Assigned User |  |
| Parent Case ID | ParentId__c | text | Case | Parent Case |  |
| Priority | Priority__c | text | Case | Case Priority |  |
| Status | Status__c | text | Case | Case Status |  |
| Subject | Subject__c | text | Case | Subject |  |
| Type |  | text | Case | Case Type |  |
