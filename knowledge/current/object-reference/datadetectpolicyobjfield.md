---
title: "DataDetectPolicyObjField"
domain: object-reference
topic: datadetectpolicyobjfield
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:07.985Z
estimatedTokens: 232
keywords: [DataDetectPolicyObjField, DataDetect, scan, policy, scanned, API, version, 64.0, later, Calls]
---

# DataDetectPolicyObjField

> Represents an object field of the DataDetect 
      scan policy object to be scanned. This object is available in API 
      version 64.0 and later.

# DataDetectPolicyObjField

Represents an object field of the DataDetect scan policy object to be scanned. This object is available in API version 64.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| DataDetectPolicyObjectId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the scan policy object associated with the scan policy object's field.This field is a relationship field.Relationship NameDataDetectPolicyObjectRelationship TypeMaster-DetailRefers ToDataDetectPolicyObject |
| FieldName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionName of the scan policy object field. |

#### See Also

-   [*Salesforce Help*: Data Detect](https://help.salesforce.com/s/articleView?id=xcloud.einstein_data_detect.htm&type=5&language=en_US)
