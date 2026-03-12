---
title: "DataDetPlcyDataSrchExps"
domain: object-reference
topic: datadetplcydatasrchexps
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:08.002Z
estimatedTokens: 418
keywords: [DataDetPlcyDataSrchExps, data, search, expressions, scanning, DataDetect, scan, policies, Java, regex, API, version, 64.0, later, Calls]
---

# DataDetPlcyDataSrchExps

> Represents data search expressions for scanning DataDetect scan policies
         based on Java regex. This object is available in API version 64.0 and
      later.

# DataDetPlcyDataSrchExps

Represents data search expressions for scanning DataDetect scan policies based on Java regex. This object is available in API version 64.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

When working with regex, Salesforce recommends Java 17 or later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| DataDetectPolicyId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the scan policy associated with the data search expression.This field is a relationship field.Relationship NameDataDetectPolicyRelationship TypeMaster-DetailRefers ToDataDetectPolicy |
| Expression | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRegular expression that represents sensitive data to be scanned. |
| IsCaseSensitive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDesignates whether the expression is case-sensitive (true) or not (false).The default value is false. |
| IsKeywordSearch | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDesignates whether the expression can be used as a search keyword (true) or not (false).The default value is false. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the expression. |

#### See Also

-   [*Salesforce Help*: Data Detect](https://help.salesforce.com/s/articleView?id=xcloud.einstein_data_detect.htm&type=5&language=en_US)
