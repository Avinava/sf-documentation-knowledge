---
title: "DataAssessmentConfigItem"
domain: tooling-api
topic: dataassessmentconfigitem
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:37.549Z
keywords: [DataAssessmentConfigItem, Supported, SOAP, Calls, REST, HTTP, Methods, Fields, Usage]
---

# DataAssessmentConfigItem

# DataAssessmentConfigItem

Represents a saved configuration for a specific vendor’s package for data assessment. This object is available in API version 40.0 and later.

## Supported SOAP Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST HTTP Methods

GET

## Fields

| Field | Details |
| --- | --- |
| DataAssessmentConfigField | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionA list of fields on the external object that a specific data package supports. |
| DataAssessmentConfigValue | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe configuration value selected for a field in DataAssessmentConfigField. |
| SobjectType | TypepicklistPropertiesCreate, Filter, Group, NillableDescriptionThe object’s API name. |

## Usage

The following example adds a new configuration for the configuration field on the external data source.

```

```