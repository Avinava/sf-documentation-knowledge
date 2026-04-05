---
title: "Industries Common Component Metadata"
domain: revenue-cloud
topic: industries-common-component-metadata
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-05T00:23:22.403Z
estimatedTokens: 342
keywords: [Industries, Common, Component, Metadata, deployment, components, Revenue, Cloud, including, setup, paths, configuration]
---

# Industries Common Component Metadata

> This table provides the metadata deployment reference for Industries common components
    in Revenue Cloud, including setup paths and configuration details.

# Industries Common Component Metadata

This table provides the metadata deployment reference for Industries common components in Revenue Cloud, including setup paths and configuration details.

| Type | Label | Setup Path | Details |
| --- | --- | --- | --- |
| Setup | Context Service | Context Service > Context Service Settings | Enable |
| Permission Sets | Permission Sets | Setup > Users > Permission Sets | Data Pipeline User |
| Permission Sets | Permission Sets | Setup > Users > Permission Sets | Data Cloud Admin |
| Data Processing Engine (DPE) Definition | datasources -> sourceName | v{}/tooling/sobjects/BatchCalcJobDefinition | Read permission to the user who is creating the Data Processing Engine (DPE) with the data sources and fields. |
| Data Processing Engine (DPE) Definition | datasources -> sourceName | v{}/tooling/sobjects/BatchCalcJobDefinition | Read permission to the Analytics Integration User with the data sources and fields. |
| Data Processing Engine (DPE) Definition | writebacks -> targetObjectName | v{}/tooling/sobjects/BatchCalcJobDefinition | Create, update, or delete permission on the targetObjectName object based on the operationType value defined in the writebacks. |
| Data Processing Engine (DPE) Definition | writebacks -> writebackUser | v{}/tooling/sobjects/BatchCalcJobDefinition | Delete this value if it exists. |
