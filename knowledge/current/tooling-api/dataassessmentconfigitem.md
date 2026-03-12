---
title: "DataAssessmentConfigItem"
domain: tooling-api
topic: dataassessmentconfigitem
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:45.066Z
estimatedTokens: 246
keywords: [DataAssessmentConfigItem, Represents, saved, configuration, specific, vendor’s, package, data, assessment., API, version, 40.0, later., Supported, SOAP, Calls, REST, HTTP, Fields, Usage]
---

# DataAssessmentConfigItem

> Represents a saved configuration for a
            specific vendor’s package for data assessment. This object is available in API
        version 40.0 and later.

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

## Code Examples

```
{
"SobjectType" : "01Ixx0000003S4f", //External object Id or api name
"DataAssessmentConfigField" : "00Nxx000001DRL8", //Custom field Id or api name
"DataAssessmentConfigValue" : "Salesforce" // value
}
```
