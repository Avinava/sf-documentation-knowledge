---
title: "Sample Scenarios"
domain: salesforce-record-access-under-the-hood
topic: sample-scenarios
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:43.090Z
estimatedTokens: 864
keywords: [Sample, Scenarios, show, data, that’s, essential, they, don’t, tables, Salesforce, uses, calculating, record, access, Scenario]
---

# Sample Scenarios

> The scenarios only show data that’s
essential to the example; they don’t show all of the fields
and tables Salesforce uses for calculating record access.

# Sample Scenarios

The following scenarios use simplified tables to illustrate how Salesforce recalculates the Object Sharing and Group Maintenance tables according to various record access changes, and uses those calculations to determine record access. Yellow highlights indicate data that grants access to the sample account record.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_record_access_under_the_hood)

#### Note

The scenarios only show data that’s essential to the example; they don’t show all of the fields and tables Salesforce uses for calculating record access.

In these scenarios, the organization-wide default settings are Private for all objects, and the role hierarchy and users are as follows.

![Hierarchy and roles](/docs/resources/img/en-us/260.0?doc_id=images%2Fhierarchy_and_roles.png&folder=salesforce_record_access_under_the_hood)

Salesforce generates the following groups to support the record access inheritance the role hierarchy establishes.

![Groups](/docs/resources/img/en-us/260.0?doc_id=images%2Frole_and_subs_groups.png&folder=salesforce_record_access_under_the_hood)

## Scenario 1

Maria creates an account record (A1) for Acme. Under the hood, Salesforce creates a new account record for Acme and an owner sharing row for Maria in the Account Sharing table. Marc, because he is above Maria in the role hierarchy and an indirect member of Maria's Sales Executive role group, inherits access.

![Scenario 1](/docs/resources/img/en-us/260.0?doc_id=images%2Fscenario1.png&folder=salesforce_record_access_under_the_hood)

## Scenario 2

Maria manually shares the Acme account record with Bob. Under the hood, Salesforce creates a sharing row in the Account Sharing table for Bob. Both Maria and Marc have access to the record, because they are above Bob in the role hierarchy and indirect members of Bob's East Sales Rep role group.

For manual record sharing, programmatic record sharing, and team sharing, the Object Sharing table creates rows the same way but with different row causes.

![Scenario 2](/docs/resources/img/en-us/260.0?doc_id=images%2Fscenario2.png&folder=salesforce_record_access_under_the_hood)

## Scenario 3

An administrator creates a sharing rule that shares the Sales Executive’s records with the users in the Services Executive role and their subordinates. Under the hood, Salesforce creates a sharing row in the Account Sharing table for the Services Exec RoleAndSubordinates group, giving Frank and Sam access to the Acme record.

![Scenario 3](/docs/resources/img/en-us/260.0?doc_id=images%2Fscenario3.png&folder=salesforce_record_access_under_the_hood)

## Scenario 4

Maria changes the owner of the Acme record to Wendy. When a record owner changes, Salesforce deletes its associated sharing rows with Manual row causes, so Bob loses access to the record. Also, because Maria, the Sales Executive, no longer owns the record, the rule from Scenario 3 no longer applies. Under the hood, Salesforce deletes the sharing row for the Services Exec RoleAndSubordinates group from Scenario 3, causing Frank and Sam to lose access to the Acme record. Salesforce also replaces Maria’s name with Wendy’s in the Account Sharing table.

The red ovals in this diagram indicate the many fields this seemingly minor change affects.

![Scenario 4](/docs/resources/img/en-us/260.0?doc_id=images%2Fscenario4.png&folder=salesforce_record_access_under_the_hood)
