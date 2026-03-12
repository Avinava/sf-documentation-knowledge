---
title: "GlobalValueSet"
domain: tooling-api
topic: globalvalueset
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:45.807Z
estimatedTokens: 798
keywords: [GlobalValueSet, Represents, set, values, used, picklist., API, version, 39.0, later., Important, Supported, SOAP, Calls, REST, HTTP, Fields, CustomValue, Metadata]
---

# GlobalValueSet

> Represents a set of values used by a global picklist. Available from API version 39.0 or
  later.

# GlobalValueSet

Represents a set of values used by a global picklist. Available from API version 39.0 or later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_tooling)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported SOAP Calls

create(), query(), retrieve(), search(), update(), upsert()

## Supported REST HTTP Methods

Query, GET, POST, PATCH

## Fields

| Field Name | Details |
| --- | --- |
| CustomValue | TypeCustomValue[]PropertiesFilter, Group, SortDescriptionA list of the global picklist values. |
| Description | TypestringPropertiesFilter, Nillable, SortDescriptionA picklist value’s description. It’s useful to include a description for a picklist value so the reason for creating it can be tracked. Limit: 255 characters. |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe full name of the associated metadata object in the Metadata API.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance.Any global value set created in API version 57.0 or later automatically has the __gvs suffix appended to FullName. When you make any CRUD-based call with the GlobalValueSet type, you must append the suffix to the FullName field when you reference the type. |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescription |
| Sorted | TypebooleanPropertiesFilter, Group, SortDescriptionTrue if the picklist values are sorted alphabetically. |

## CustomValue Metadata

Metadata about the global value set is returned in the CustomValue field.

| Field | Type | Description |
| --- | --- | --- |
| Color | string | The color assigned to the picklist value when it’s used in charts on reports and dashboards. The color is in hexadecimal format; for example, #FF6600. If a color isn’t specified, it’s assigned dynamically upon chart generation. |
| Default | boolean | Required. Indicates whether this value is the default selection for the global picklist and the custom picklists that share its picklist value set. This field is set to true by default. |
| Description | string | A picklist value’s description. It’s useful to include a description for a picklist value so the reason for creating it can be tracked. Limit: 255 characters. |
| IsActive | boolean | Indicates whether this value is active or inactive. The default value is true. Users can select only active values from a picklist. An API retrieve operation for global picklist values returns all active and inactive values in the picklist. But retrieving the values of a non-global, unrestricted picklist returns only the active values. |
| Label | string | The global picklist value’s label, or API name. If you don’t specify the label when creating a value, it defaults to the text of the picklist value (ValueName). The ValueName isn’t used if you update the label. |
| ValueName | string | The text of the picklist value. |
