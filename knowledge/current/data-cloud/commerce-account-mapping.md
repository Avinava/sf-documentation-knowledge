---
title: "Commerce: Account Mapping"
domain: data-cloud
topic: commerce-account-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:42.857Z
keywords: [Commerce, Account, Mapping, DLO, DMO]
---

# Commerce: Account Mapping

# Commerce: Account Mapping

After a data stream is deployed, the Commerce starter data bundle automatically maps data from Commerce Cloud to data model objects (DMO)s in Data Cloud. Account data indicates how a shopper interacts with a store. For example, billing and shipping information.

## DLO to DMO Mapping

These data mappings relate to the Account object included in the Salesforce Commerce connector and how that data connects to DMOs.

| DLO Field | DLO Field Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- |
| Id | ID | Account | id |
| AccountNumber | string | Account | AccountNumber |
| Description | textarea | Account | Description |
| LastActivityDate | date | Account | LastActivityDate |
| Name | string | Account | Name |
| ParentId | picklist | Account | ParentAccountId |
| Type | picklist | Account | AccountTypeId |
| CreatedDate | dateTime | Account | CreatedDate |
| LastModifiedDate | dateTime | Account | LastModifiedDate |