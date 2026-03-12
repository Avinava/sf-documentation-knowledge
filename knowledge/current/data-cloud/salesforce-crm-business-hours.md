---
title: "Salesforce CRM: Business Hours"
domain: data-cloud
topic: salesforce-crm-business-hours
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:13.869Z
estimatedTokens: 554
keywords: [Salesforce, CRM, Business, Hours, data, mappings, BusinessHours, DLO, found, Services, bundle, Connector, Cloud, Usage, DMO]
---

# Salesforce CRM: Business Hours

> These data mappings are for the BusinessHours DLO found in the Services bundle of the
  Salesforce CRM Connector for Data Cloud.

# Salesforce CRM: Business Hours

These data mappings are for the BusinessHours DLO found in the Services bundle of the Salesforce CRM Connector for Data Cloud.

## Usage and Data Bundle

These mappings are used to power Service Intelligence visualizations of contact center performance metrics.

Bundle:

-   Service Cloud

## DLO to DMO Mapping

These data mappings relate to the Business Hours object included in the Salesforce CRM connector and how that data connects to DMOs.

| DLO Field | DLO Field API Name | DLO Field Data Type | DMO | DMO Field Name | Additional Details |
| --- | --- | --- | --- | --- | --- |
| Active | IsActive__c | text | Operating Hours | Is Active |  |
| Business Hours ID | Id__c | text | Operating Hours | Operating Hours ID | Primary Key |
| Business Hours Name | Name__c | text | Operating Hours | Name |  |
| Default Business Hours | IsDefault__c | text | Operating Hours | Is Default |  |
| Friday End | FridayEndTime__c | text | Operating Hours | Friday End Time |  |
| Friday Start | FridayStartTime__c | text | Operating Hours | Friday Start Time |  |
| Monday End | MondayEndTime__c | text | Operating Hours | Monday End Time |  |
| Monday Start | MondayStartTime__c | text | Operating Hours | Monday Start Time |  |
| Saturday End | SaturdayEndTime__c | text | Operating Hours | Saturday End Time |  |
| Saturday Start | SaturdayStartTime__c | text | Operating Hours | Saturday Start Time |  |
| Sunday End | SundayEndTime__c | text | Operating Hours | Sunday End Time |  |
| Sunday Start | SundayStartTime__c | text | Operating Hours | Sunday Start Time |  |
| Thursday End | ThursdayEndTime__c | text | Operating Hours | Thursday End Time |  |
| Thursday Start | ThursdayStartTime__c | text | Operating Hours | Thursday Start Time |  |
| TimeZoneSidKey | TimeZoneSidKey__c | text | Operating Hours | Time Zone |  |
| Tuesday End | TuesdayEndTime__c | text | Operating Hours | Tuesday End Time |  |
| Tuesday Start | TuesdayStartTime__c | text | Operating Hours | Tuesday Start Time |  |
| Wednesday End | WednesdayEndTime__c | text | Operating Hours | Wednesday End Time |  |
| Wednesday Start | WednesdayStartTime__c | text | Operating Hours | Wednesday Start Time |  |
