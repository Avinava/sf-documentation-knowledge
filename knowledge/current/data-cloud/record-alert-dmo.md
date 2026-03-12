---
title: "Record Alert DMO"
domain: data-cloud
topic: record-alert-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:14.833Z
estimatedTokens: 456
keywords: [Record, Alert, DMO, Represents, record, alerts, account., Provided, Financial, Services, Cloud, Data, Kit., API, version, later., Name, Category, Primary, Subject]
---

# Record Alert DMO

> Represents record alerts for an account. Provided in the Financial Services Cloud Data
      Kit. This DMO is available in API version 58 and later.

# Record Alert DMO

Represents record alerts for an account. Provided in the Financial Services Cloud Data Kit. This DMO is available in API version 58 and later.

## API Name

ssot\_\_RecordAlert\_\_dlm

## Category

Profile

## Primary Subject Area

Financial Account

## Primary Key Label

Record Alert ID (ssot\_Id\_c).

## Relationships

| DMO Label | DMO Field Label | Cardinality | Related DMO Label | Related DMO Field Label | Data Bundle or Origin |
| --- | --- | --- | --- | --- | --- |
| Record Alert | Account ID | Many To One (N:1) | Account | ID | Financial Services Cloud |
| Record Alert | Reference Context ID | Many To One (N:1) | Financial Account | ID | Financial Services Cloud |

## Fields

| Label | API Name | Description | Data Type | Data Bundle or Origin |
| --- | --- | --- | --- | --- |
| Account ID | ssot__AccountId__c | The associated account for which the alert is generated. | Text | Financial Services Cloud |
| Description | ssot__Description__c | Description of the record alert. | Text | Financial Services Cloud |
| Is Active | ssot__isActive__c | Indicates if the alert is active. | Text | Financial Services Cloud |
| Message Text | ssot__MessageText__c | Main content of the alert. | Text | Financial Services Cloud |
| Name | ssot__Name__c | Name of the record alert. | Text | Financial Services Cloud |
| Record Alert ID | ssot__Id__c | The primary key. | Text | Financial Services Cloud |
| Record Alert Priority | ssot__RecordAlertPriority__c | The record alert priority. | Text | Financial Services Cloud |
| Record Alert Severity | ssot__RecordAlertSeverity__c | The record alert severity. | Text | Financial Services Cloud |
| Reference Context | ssot__ReferenceContextId__c | The associated context object, for example financial account | Text | Financial Services Cloud |
