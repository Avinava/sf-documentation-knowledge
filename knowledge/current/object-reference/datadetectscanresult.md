---
title: "DataDetectScanResult"
domain: object-reference
topic: datadetectscanresult
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:07.996Z
estimatedTokens: 350
keywords: [DataDetectScanResult, results, DataDetect, scan, policy, data, API, version, 63.0, later, Calls]
---

# DataDetectScanResult

> Represents the results of a DataDetect scan policy data scan. This
      object is available in API version 63.0 and later.

# DataDetectScanResult

Represents the results of a DataDetect scan policy data scan. This object is available in API version 63.0 and later.

## Supported Calls

describeSObjects(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| CreatedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTime and date when an instance of PII is added to the scan result. |
| DataDetectJobSessionId | TypereferencePropertiesFilter, Group, SortDescriptionID of the job session associated with the scan policy.This field is a relationship field.Relationship NameDataDetectJobSessionRelationship TypeLookupRefers ToDataDetectJobSession |
| FieldName | TypestringPropertiesFilter, Group, SortDescriptionUDD name from standard fields, or custom field ID from custom fields. |
| NamedEntityCount | TypeintPropertiesFilter, Group, SortDescriptionNumber of times PII is found. |
| NamedEntityType | TypestringPropertiesFilter, Group, SortDescriptionType of PII found in the record of the scan policy object. |
| ObjectName | TypestringPropertiesFilter, Group, SortDescriptionKeyPrefix of the scan policy object that contains PII. |
| RecordIdentifier | TypestringPropertiesFilter, Group, SortDescriptionUnique identifier for the record. |

#### See Also

-   [*Salesforce Help*: Data Detect](https://help.salesforce.com/s/articleView?id=xcloud.einstein_data_detect.htm&type=5&language=en_US)
