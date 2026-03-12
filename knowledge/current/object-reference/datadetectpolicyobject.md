---
title: "DataDetectPolicyObject"
domain: object-reference
topic: datadetectpolicyobject
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:07.981Z
estimatedTokens: 256
keywords: [DataDetectPolicyObject, DataDetect, scan, policy, scanned, API, version, 62.0, later, Calls]
---

# DataDetectPolicyObject

> Represents an object of the DataDetect scan policy to be 
      scanned. This object is available in API version 62.0 and later.

# DataDetectPolicyObject

Represents an object of the DataDetect scan policy to be scanned. This object is available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| DataDetectPolicyId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the scan policy associated with this scan policy object.This field is a relationship field.Relationship NameDataDetectPolicyRelationship TypeMaster-DetailRefers ToDataDetectPolicy |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the scan policy object. |
| ObjectReference | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionName of the scan policy object to be scanned. |

#### See Also

-   [*Salesforce Help*: Data Detect](https://help.salesforce.com/s/articleView?id=xcloud.einstein_data_detect.htm&type=5&language=en_US)
