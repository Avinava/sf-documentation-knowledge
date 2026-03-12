---
title: "Field Service Recordset Filter Criteria Resource"
domain: chatterapi
topic: field-service-recordset-filter-criteria-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.326Z
estimatedTokens: 249
keywords: [Service, Recordset, Filter, Criteria, Resource, records]
---

# Field Service Recordset Filter Criteria Resource

> Filter records on recordset filter criteria.

# Field Service Recordset Filter Criteria Resource

Filter records on recordset filter criteria.

Resource

```

```

Available version

53.0

HTTP methods

POST

Request body for POST

Root XML tag

recordsetFilterCriteriaInput

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| criteriaIds | String[] | Recordset filter criteria IDs. | Required | 53.0 |
| enforceSharing | Boolean | Determines whether record sharing checks are enforced (true) or not (false) during the execution of this call. | Optional | 53.0 |
| filteredObject​Name | String | Object that the filter is applied to. | Required | 53.0 |
| recordIds | String[] | List of record IDs of the filtered object. | Required | 53.0 |

Response body for POST

[Recordset Filter Criteria Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_recordset_filter_criteria_collection.htm "List of record IDs of the filtered object.")

## Code Examples

```
/connect/field-service/recordset-filter-criteria/evaluate
```

```
{
   "filteredObjectName":"ServiceAppointment",
   "criteriaIds":[
      "0hrxx00000006obAAA"
   ],
   "recordIds":[
      "08pxx0000004Ge4AAE",
      "08pxx0000004GcSAAU"
   ]
}
```

## Related Topics

- Recordset Filter Criteria Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_recordset_filter_criteria_collection.htm)
