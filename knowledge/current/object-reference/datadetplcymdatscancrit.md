---
title: "DataDetPlcyMdatScanCrit"
domain: object-reference
topic: datadetplcymdatscancrit
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:08.007Z
estimatedTokens: 444
keywords: [DataDetPlcyMdatScanCrit, inclusion, exclusion, criteria, filter, DataDetect, scan, policy, scanned, metadata, tags, API, version, 64.0, later]
---

# DataDetPlcyMdatScanCrit

> Represents inclusion and exclusion criteria that filter what DataDetect scan
         policy object fields are to be scanned based on metadata tags. This object is
      available in API version 64.0 and later.

# DataDetPlcyMdatScanCrit

Represents inclusion and exclusion criteria that filter what DataDetect scan policy object fields are to be scanned based on metadata tags. This object is available in API version 64.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Criteria | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionDefines category of inclusion or exclusion criteria applied to fields during scan policy creation. Valid values are:ComplianceCategory—Compliance acts, definitions, or regulations related to the field's data.DataSensitivity—Level of data sensitivity related to the field's data.FieldUsage—Data planned for deprecation, or intended to be hidden, related to the active and visible field's data. |
| DataDetectPolicyId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the policy associated with the data search expression.This field is a relationship field.Relationship NameDataDetectPolicyRelationship TypeMaster-DetailRefers ToDataDetectPolicy |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the criteria. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionDefines what criteria, inclusion or exclusion, is applied to a field in the policy scan object. |
| Value | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionValue of the criteria applied to filters. |

#### See Also

-   [*Salesforce Help*: Data Detect](https://help.salesforce.com/s/articleView?id=xcloud.einstein_data_detect.htm&type=5&language=en_US)
