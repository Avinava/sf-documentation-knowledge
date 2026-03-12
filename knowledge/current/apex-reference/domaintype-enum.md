---
title: "DomainType Enum"
domain: apex-reference
topic: domaintype-enum
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:29.566Z
estimatedTokens: 482
keywords: [DomainType, Specifies, domain, System.Domain., Usage, Values]
---

# DomainType Enum

> Specifies the domain type for a System.Domain.

# DomainType Enum

Specifies the domain type for a [System.Domain](atlas.en-us.apexref.meta/apexref/apex_class_System_Domain.htm#apex_class_System_Domain "Represents an existing domain hosted by Salesforce that serves the org or its content. Contains methods to obtain information about these domains, such as the domain type, My Domain name, and sandbox name.").

## Usage

Use the DomainType enum to obtain the type of a domain parsed through the [System.DomainParser](atlas.en-us.apexref.meta/apexref/apex_class_System_DomainParser.htm#apex_class_System_DomainParser "Use the DomainParser class to parse a domain that Salesforce hosts for the org and extract information about the domain.") class.

## Enum Values

The following are the values of the System.DomainType enum. These values only apply to Salesforce-hosted domains.

| Value | Description |
| --- | --- |
| CMS_DOMAIN | Content Management System (CMS) public channel domains. |
| CONTENT_DOMAIN | Domains that serve content (files) stored in Salesforce. |
| CUSTOMER_360_ADMIN_DOMAIN | Customer 360 Data Manager domains. |
| CUSTOMER_360_DOMAIN | Customer 360 Data Manager Admin domains. |
| EXPERIENCE_CLOUD_SITES_BUILDER_DOMAIN | Experience Builder for Experience Cloud sites domains. |
| EXPERIENCE_CLOUD_SITES_DOMAIN | Salesforce-hosted domains that serve Experience Cloud sites. |
| EXPERIENCE_CLOUD_SITES_LIVE_PREVIEW_DOMAIN | Experience Builder Live Preview domains. |
| EXPERIENCE_CLOUD_SITES_PREVIEW_DOMAIN | Experience Builder Preview domains. |
| LIGHTNING_CONTAINER_COMPONENT_DOMAIN | Lightning Container Component domains. |
| LIGHTNING_DOMAIN | Domains that serve Lighting pages. |
| ORG_MY_DOMAIN | My Domain login domains. |
| SALESFORCE_SITES_DOMAIN | Salesforce-hosted domains that serve Salesforce Sites. |
| SETUP_DOMAIN | The Salesforce-hosted domain that serves Setup pages. |
| VISUALFORCE_DOMAIN | Domains that serve Visualforce pages. |

## Related Topics

- System.Domain (atlas.en-us.apexref.meta/apexref/apex_class_System_Domain.htm)
- System.DomainParser (atlas.en-us.apexref.meta/apexref/apex_class_System_DomainParser.htm)
