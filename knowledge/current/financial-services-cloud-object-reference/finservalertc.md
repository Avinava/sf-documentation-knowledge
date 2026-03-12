---
title: "FinServ_Alert__c"
domain: financial-services-cloud-object-reference
topic: finservalertc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:29.336Z
estimatedTokens: 404
keywords: [FinServ_Alert__c, notifications, alert, advisors, their, client, accounts, FinServ, _Alert, Calls]
---

# FinServ_Alert__c

> Represents notifications to alert advisors about their client
         accounts.

# FinServ\_Alert\_\_c

Represents notifications to alert advisors about their client accounts.

## Supported Calls

create(), delete(), describeLayout(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Account__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA lookup field to an account that alerts are related to. |
| Active__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether an alert is active. |
| FinancialAccount__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe financial account that alerts are related to. |
| Message__c | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe main content of an alert. |
| MessageDescription__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAn optional description for the main content of an alert as specified in the Message__c field. This text appears below the main content. |
| Priority__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionAn indication of the urgency of an alert. Valid values:HighLowMedium |
| Severity__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of alert. Valid values:ErrorInfoWarning |
| SourceSystemId__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of a record from the external system that triggered the alert. |
