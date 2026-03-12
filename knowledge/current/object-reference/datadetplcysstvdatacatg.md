---
title: "DataDetPlcySstvDataCatg"
domain: object-reference
topic: datadetplcysstvdatacatg
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:08.012Z
estimatedTokens: 270
keywords: [DataDetPlcySstvDataCatg, sensitive, data, categories, DataDetect, scan, policy, API, version, 64.0, later, Calls]
---

# DataDetPlcySstvDataCatg

> Represents the sensitive data categories that the DataDetect scan policy is
         required to scan. This object is available in API version 64.0 and later.

# DataDetPlcySstvDataCatg

Represents the sensitive data categories that the DataDetect scan policy is required to scan. This object is available in API version 64.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| DataCategory | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionSensitive data category associated with the scan policy. |
| DataDetectPolicyId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the scan policy associated with the sensitive data category.This field is a relationship field.Relationship NameDataDetectPolicyRelationship TypeMaster-DetailRefers ToDataDetectPolicy |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the sensitive data category. |

#### See Also

-   [*Salesforce Help*: Data Detect](https://help.salesforce.com/s/articleView?id=xcloud.einstein_data_detect.htm&type=5&language=en_US)
