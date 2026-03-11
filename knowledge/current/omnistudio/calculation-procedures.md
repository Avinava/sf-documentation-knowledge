---
title: "Calculation Procedures"
domain: omnistudio
topic: calculation-procedures
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:08.620Z
keywords: [Calculation, Procedures, Note]
---

# Calculation Procedures

# Calculation Procedures

Get a list of expression sets (also known as calculation procedure) based on a search text. The API returns a maximum of ten expression set records that contain the specified keyword.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=industries_reference)

#### Note

This API has been deprecated as of API version 55.0. In API version 55.0 and later, use the new [Business APIs in Business Rules Engine](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/business_rules_engine_connect_apis.htm).

Resource

```

```

Example URI

```

```

Available version

53.0

Requires Chatter

No

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| searchKey | String | The user-entered search text to retrieve a list of expression sets. | Required | 53.0 |

Response body for GET

[Calculation Procedure List Output](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_calculation_procedure_list_output.htm "Output representation of the expression set result list.")