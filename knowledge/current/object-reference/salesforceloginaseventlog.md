---
title: "SalesforceLoginAsEventLog"
domain: object-reference
topic: salesforceloginaseventlog
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:16.471Z
estimatedTokens: 313
keywords: [SalesforceLoginAsEventLog, Salesforce, LoginAs, Event, User's, login, Customer, Org, Customer's, authorized, user, API, version, 65.0, later]
---

# SalesforceLoginAsEventLog

> Salesforce LoginAs Event provides details about the Salesforce User's login
         into Customer Org as Customer's authorized user. This object is available in API
      version 65.0 and later.

# SalesforceLoginAsEventLog

Salesforce LoginAs Event provides details about the Salesforce User's login into Customer Org as Customer's authorized user. This object is available in API version 65.0 and later.

## Supported Calls

describeSObjects(), query()

## Special Access Rules

To access this object, you must have the View Event Log Object Data user permission.

## Fields

| Field | Details |
| --- | --- |
| ActualUserIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe actual user's identifier. |
| CaseIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe Salesforce case ID. |
| IpAddress | TypestringPropertiesFilter, Group, Nillable, SortDescriptionIP address of the browser. |
| OperationType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe type of operation. For example, login or logout. |
| RequestIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique ID of a single transaction. A transaction can contain one or more events. Each event in a given transaction has the same REQUEST_ID. |
| Timestamp | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe access time of Salesforce services in GMT.For example: 20130715233322.670. |
