---
title: "DataDetectPolicy"
domain: object-reference
topic: datadetectpolicy
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:07.976Z
estimatedTokens: 531
keywords: [DataDetectPolicy, sensitive, data, searched, scan, DataDetect, policies, apply, filters, select, specific, objects, scanned, API, version]
---

# DataDetectPolicy

> Represents a set of parameters that specifies the types of sensitive data to
         be searched for in a data scan. DataDetect scan policies can also apply filters to a data
         scan, and select what specific objects and fields are to be scanned. This object is
      available in API version 60.0 and later.

# DataDetectPolicy

Represents a set of parameters that specifies the types of sensitive data to be searched for in a data scan. DataDetect scan policies can also apply filters to a data scan, and select what specific objects and fields are to be scanned. This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDescription of the scan policy. |
| EndTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTime and date when the data scan completes. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the scan policy. |
| OwnerId | TypereferencePropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe UserID of the person who owns the record. This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ScanType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionDesignates whether the data scan type is AIInference or PatternMatching.The default value is PatternMatching. |
| StartTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTime and date when the data scan begins. Data scans can start anytime within a 30-day window from the current date. |

## Associated Objects

This object has this associated object. If the API version isn't specified, it's available in the same API version as this object. Otherwise, it's available in the specified API version and later.

[DataDetectPolicyShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.

#### See Also

-   [*Salesforce Help*: Data Detect](https://help.salesforce.com/s/articleView?id=xcloud.einstein_data_detect.htm&type=5&language=en_US)
