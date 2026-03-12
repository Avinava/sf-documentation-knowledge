---
title: "Salesforce CRM: Agent Work Skill Mapping"
domain: data-cloud
topic: salesforce-crm-agent-work-skill-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:13.860Z
estimatedTokens: 252
keywords: [Salesforce, CRM, Agent, Work, Skill, Mapping, data, mappings, AgentWorkSkill, DLO, found, Services, bundle, Connector, Cloud]
---

# Salesforce CRM: Agent Work Skill Mapping

> These data mappings are for the AgentWorkSkill DLO found in the Services bundle of the
  Salesforce CRM Connector for Data Cloud.

# Salesforce CRM: Agent Work Skill Mapping

These data mappings are for the AgentWorkSkill DLO found in the Services bundle of the Salesforce CRM Connector for Data Cloud.

## Usage and Data Bundle

These mappings are used to power Service Intelligence visualizations of contact center performance metrics.

Bundle:

-   Service Cloud

## DLO to DMO Mapping

These data mappings relate to the Agent Work Skills object included in the Salesforce CRM connector and how that data connects to DMOs.

| DLO Field Label | DLO Field API Name | DLO Field Data Type | DMO | DMO Field Name | Additional Details |
| --- | --- | --- | --- | --- | --- |
| Agent Work ID | AgentWorkId__c | text | Agent Work Skill | Agent Work |  |
| Agent Work Skill ID | Id__c | text | Agent Work Skill | Agent Work Skill ID | Primary Key |
| Name | Name__c | text | Agent Work Skill | Name |  |
| Skill ID | SkillId__c | text | Agent Work Skill | Skill |  |
| SkillLevel | SkillLevel__c | number | Agent Work Skill | Skill Level |  |
