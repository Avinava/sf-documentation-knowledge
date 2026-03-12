---
title: "Salesforce CRM: Group Member Mapping"
domain: data-cloud
topic: salesforce-crm-group-member-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:13.888Z
estimatedTokens: 193
keywords: [Salesforce, CRM, Group, Member, Mapping, data, mappings, GroupMember, DLO, found, Services, bundle, Connector, Cloud, Usage]
---

# Salesforce CRM: Group Member Mapping

> These data mappings are for the GroupMember DLO found in the Services bundle of the
  Salesforce CRM Connector for Data Cloud.

# Salesforce CRM: Group Member Mapping

These data mappings are for the GroupMember DLO found in the Services bundle of the Salesforce CRM Connector for Data Cloud.

## Usage and Data Bundle

These mappings are used to power Service Intelligence visualizations of contact center performance metrics.

Bundle:

-   Service Cloud

## DLO to DMO Mapping

These data mappings relate to the Group Member object included in the Salesforce CRM connector and how that data connects to DMOs.

| DLO Field | DLO Field API Name | DLO Field Data Type | DMO | DMO Field | Additional Details |
| --- | --- | --- | --- | --- | --- |
| Group ID | GroupId__c | text | User Group | User Group |  |
| Group Member ID | Id__c | text | User Group | User Group Relationship ID | Primary Key |
