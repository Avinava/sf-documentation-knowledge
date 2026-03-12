---
title: "Recordset Filter Criteria Input"
domain: chatterapi
topic: recordset-filter-criteria-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.676Z
estimatedTokens: 183
keywords: [Recordset, Filter, Criteria, Input, applied, records, service, appointment]
---

# Recordset Filter Criteria Input

> A set of recordset filter criteria applied to records, such as
      service appointment records.

# Recordset Filter Criteria Input

A set of recordset filter criteria applied to records, such as service appointment records.

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

## Code Examples

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
