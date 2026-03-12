---
title: "Assignment Rule Header"
domain: rest-api
topic: assignment-rule-header
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:35.139Z
estimatedTokens: 338
keywords: [Assignment, Rule, Header, header, request, applied, creating, updating, Accounts, Cases, Leads., enabled, active, assignment, rules, used., disabled, applied., valid, AssignmentRule]
---

# Assignment Rule Header

> The Assignment Rule header is a request header applied when creating or updating
    Accounts, Cases, or Leads. If enabled, the active assignment rules are used. If disabled, the
    active assignment rules are not applied. If a valid AssignmentRule ID is provided, the
    AssignmentRule is applied. If the header is not provided with a request, REST API defaults to
    using the active assignment rules.

# Assignment Rule Header

The Assignment Rule header is a request header applied when creating or updating Accounts, Cases, or Leads. If enabled, the active assignment rules are used. If disabled, the active assignment rules are not applied. If a valid AssignmentRule ID is provided, the AssignmentRule is applied. If the header is not provided with a request, REST API defaults to using the active assignment rules.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_rest)

#### Note

This header also gets applied when making REST API calls that indirectly result in creating or updating Accounts, Cases, or Leads. For example, if you use this header with a call that updates a record, and the update executes an Apex trigger that updates a Case, the assignment rules would be applied.

## Header Field Name and Values

Field name

Sforce-Auto-Assign

Field values

-   TRUE. Active assignment rules are applied for created or updated Accounts, Cases, or Leads.
-   FALSE. Active assignment rules are not applied for created or updated Accounts, Cases, or Leads.
-   Valid AssignmentRule ID. The given AssignmentRule is applied for created Accounts, Cases, or Leads.

TRUE and FALSE are not case-sensitive.

If the header is not provided in the request, the default value is TRUE.

Example

Sforce-Auto-Assign: FALSE
