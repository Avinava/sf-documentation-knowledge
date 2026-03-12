---
title: "StaticDynamicValMapping"
domain: agentforce
topic: staticdynamicvalmapping
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:16.269Z
estimatedTokens: 647
keywords: [StaticDynamicValMapping, mapping, configuration, dynamic, picklist, source, target, API, version, 65.0, later, SOAP, Calls, REST]
---

# StaticDynamicValMapping

> Represents the mapping configuration between values of a dynamic picklist on
         a source object to the values of a static picklist on a target object. This object is
      available in API version 65.0 and later.

# StaticDynamicValMapping

Represents the mapping configuration between values of a dynamic picklist on a source object to the values of a static picklist on a target object. This object is available in API version 65.0 and later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Fields

| Field | Details |
| --- | --- |
| Attribute | TypetextareaPropertiesCreate, UpdateDescriptionThe additional details related to the specific event for which the static and dynamic values are mapped. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. This field is automatically generated, but you can supply your own value if you create the record using the API. When creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance may slow while Salesforce generates one for each record. |
| DynamicValue | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe dynamic picklist field value which needs to be mapped. |
| DynamicValueObject | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe object on which there's a dynamic picklist for which values are mapped. |
| DynamicValueObjectField | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe dynamic picklist field for which values are mapped. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language of the record. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe UI label of the record. |
| StaticValue | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe static picklist field value which needs to be mapped. |
| StaticValueObject | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe object on which there's a static picklist for which values are mapped.Possible values are:SrvcMgmntRecEvntAsgnt |
| StaticValueObjectField | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe static picklist field for which values are mapped.Possible values are:Usage |
