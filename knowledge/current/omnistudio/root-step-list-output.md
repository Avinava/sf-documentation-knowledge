---
title: "Root Step List Output"
domain: omnistudio
topic: root-step-list-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:50.707Z
estimatedTokens: 199
keywords: [Root, Step, List, Output, representation, first, step, expression, set, version, record., Note]
---

# Root Step List Output

> Output representation of the first step of the expression set version
      record.

# Root Step List Output

Output representation of the first step of the expression set version record.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=industries_reference)

#### Note

This API has been deprecated as of API version 55.0. In API version 55.0 and later, use the new [Business APIs in Business Rules Engine](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/business_rules_engine_connect_apis.htm).

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| steps | String[] | The first step defined in the calculation procedure version record. If the first step is a branch, then the first steps in the record. | Small, 53.0 | 53.0 |
