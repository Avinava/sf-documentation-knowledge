---
title: "FinServ_Education__c"
domain: financial-services-cloud-object-reference
topic: finserveducationc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:37.124Z
estimatedTokens: 269
keywords: [FinServ_Education__c, individual’s, educational, background, FinServ, _Education]
---

> Represents an individual’s educational background.

# FinServ\_Education\_\_c

Represents an individual’s educational background.

## Supported Calls

create(), delete(), describeLayout(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Contact__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe individual’s contact record. |
| EducationLevel__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLevel of education. Valid values:Declined to CommentGraduateHigh SchoolPost Graduate |
| GraduationDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate of graduation from the corresponding education level. |
| Institution__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of the educational institution that awarded the degree. |
| SourceSystemId__c | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionID that uniquely identifies the individual in an external data source. |
