---
title: "Simulation Version Info Input"
domain: omnistudio
topic: simulation-version-info-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:08.553Z
keywords: [Simulation, Version, Info, Input, Note]
---

# Simulation Version Info Input

# Simulation Version Info Input

Input information of the version details to run simulation.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=industries_reference)

#### Note

This API has been deprecated as of API version 55.0. In API version 55.0 and later, use the new [Business APIs in Business Rules Engine](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/business_rules_engine_connect_apis.htm).

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| configurationVersionId | String | The ID of the expression set version record. | Required | 53.0 |
| effectiveDate | String | The expression set version that's active on this date is simulated. When multiple versions are active on the effective date, the version with higher priority is executed. | Optional | 53.0 |