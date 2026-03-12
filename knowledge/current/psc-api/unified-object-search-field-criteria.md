---
title: "Unified Object Search Field Criteria"
domain: psc-api
topic: unified-object-search-field-criteria
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:30.273Z
estimatedTokens: 211
keywords: [Unified, Search, Criteria, Input, representation]
---

# Unified Object Search Field Criteria

> Input representation to search the unified object search field
      criteria.

# Unified Object Search Field Criteria

Input representation to search the unified object search field criteria.

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| searchCriteriaFieldName | String | Name of the field by which the user wants to sort search results. | Required | 58.0 |
| searchCriteriaFieldOperator | String | Comparison type for the search values. Possible values are:EqualsGreaterThanGreaterThanOrEqualInLessThanLessThanOrEqualStartsWithNotEqualsNotInRange | Required | 58.0 |
| searchCriteriaFieldType | String | Search category. Possible values are:DistanceNumberText | Required | 58.0 |
| searchFieldCriteriaValueList | Object[] | List of field values for a specific search criteria field based on which search results are filtered. | Optional | 58.0 |
