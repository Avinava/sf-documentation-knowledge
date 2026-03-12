---
title: "TenantSecurityTrigTransactionSecurityPol"
domain: object-reference
topic: tenantsecuritytrigtransactionsecuritypol
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:18.086Z
estimatedTokens: 1016
keywords: [Stores, metric, Transaction, Security, Policy, triggering, events, API, version, 63.0, later, Calls, Special, Access, Rules]
---

# TenantSecurityTrigTransactionSecurityPol

> Stores metric details related to Transaction Security Policy
         triggering events. This object is available in API version 63.0 and later.

# TenantSecurityTrigTransactionSecurityPol

Stores metric details related to Transaction Security Policy triggering events. This object is available in API version 63.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

This object is read only.

## Fields

| Field | Details |
| --- | --- |
| ApexClass | TypeStringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the Apex class used to evaluate the policy. |
| ApexIdentifier | TypeStringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the Apex code used to evaluate the policy. |
| ClientIp | TypeStringPropertiesFilter, Group, Nillable, SortDescriptionThe IP address of the client that’s using Salesforce services. A Salesforce internal IP, such as a login from AppExchange, is shown as “Salesforce.com IP”. |
| DetailIdentifier | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe ID of the individual detail record. This field is unique within your organization. |
| FlowIdentifier | TypeStringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the flow used to evaluate the policy. |
| FlowName | TypeStringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the Flow used to evaluate the policy. |
| LoginKey | TypeStringPropertiesFilter, Group, Nillable, SortDescriptionThe string that ties together all events in a given user’s login session. It starts with a login event and ends with either a logout event or the user session expiring. |
| MetricIdentfier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the type of metric that was counted. This field is unique within your organization. |
| MetricsType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe type of data collected. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe name of the metric for which data is being collected. |
| Policy Identifier | TypeStringPropertiesFilter, Group, Nillable, SortDescriptionThe 15-character ID of the policy being evaluated. |
| PolicyName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the policy being evaluated. |
| PolicyOutcome | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe result of the transaction policy. |
| PolicyType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe real time action selected for the policy. |
| RequestIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique ID of a single transaction. A transaction can contain one or more events. Each event in a given transaction has the same RequestIdentifier. |
| RowVersion | TypestringPropertiesFilter, Group, SortDescription |
| SessionKey | TypestringPropertiesFilter, Group, SortDescriptionThe user’s unique session ID. You can use this value to identify all user events within a session. When a user logs out and logs in again, a new session is started. |
| Tenant | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe ID of the tenant of this triggered the Transaction Security Policy event. |
| TenantName | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe name of the tenant where this triggered Transaction Security Policy happened. |
| Timestamp | TypedateTimePropertiesFilter, Group, idLookup, SortDescriptionThe access time of Salesforce services in GMT. Milliseconds are the most granular setting. |
| Triggered Timestamp | TypedateTimePropertiesFilter, Group, idLookup, SortDescriptionThe time at which the Transaction Security event was generated. |
| Uri | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe URI of the page that’s receiving the request. |
| UserIdentifier | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe 15-character ID of the user who’s using Salesforce services through the UI or the API. |
| Username | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe username of the user who’s using Salesforce services through the UI or the API. |
