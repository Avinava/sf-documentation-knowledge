---
title: "Duplicate Rule Header"
domain: rest-api
topic: duplicate-rule-header
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:35.026Z
estimatedTokens: 351
keywords: [Duplicate, Rule, Configure, options, rules, Salesforce, uses, record, created, updated, upserted, part, Management]
---

# Duplicate Rule Header

> Configure options for duplicate rules. Salesforce uses
   duplicate rules to see if the record that is being created, updated, or upserted is a duplicate
   of an existing record. Duplicate rules are part of Duplicate Management.

# Duplicate Rule Header

Configure options for duplicate rules. Salesforce uses duplicate rules to see if the record that is being created, updated, or upserted is a duplicate of an existing record. Duplicate rules are part of Duplicate Management.

This header is available in API version 52.0 and later.

## Header Field Name and Values

The default value for all fields is false.

Field name

allowSave

Field values

-   true—allow the user to acknowledge the alert and save the duplicate record. Applicable if an alert is enabled for the action.
-   false—don't allow the user to acknowledge the alert or save the duplicate record. Applicable if an alert is enabled for the action.

Field name

includeRecordDetails

Field values

-   true—return all fields in the duplicate record.
-   false—return the duplicate record ID, but not the fields.

Field name

runAsCurrentUser

Field values

-   true—when the duplicate rule is run, use the current user's sharing rules.
-   false—when the duplicate rule is run, use the system sharing rules, not the current user's sharing rules.

Example

Allow the user to acknowledge the alert and save the duplicate record. Indicate that the duplicate field's records are returned, and that the current user's sharing rules are enforced. These duplicate management configuration options are now applied when records are created, updated, and upserted.

```

```

## Code Examples

```
Sforce-Duplicate-Rule-Header: allowSave=true; includeRecordDetails=true; runAsCurrentUser=true
```
