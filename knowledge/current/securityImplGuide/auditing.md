---
title: "Auditing"
domain: securityImplGuide
topic: auditing
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:45.102Z
estimatedTokens: 274
keywords: [Auditing, system, critical, diagnosing, potential, real, security, issues, Salesforce, features, don't, secure, organization, themselves, someone]
---

# Auditing

> Auditing provides information about use of the system, which can be critical in
        diagnosing potential or real security issues. Salesforce auditing features don't secure your
        organization by themselves. Have someone in your organization perform regular audits to
        detect potential abuse.

# Auditing

Auditing provides information about use of the system, which can be critical in diagnosing potential or real security issues. Salesforce auditing features don't secure your organization by themselves. Have someone in your organization perform regular audits to detect potential abuse.

To verify that your system is secure, monitor for unexpected changes or usage trends.

Record Modification Fields

All objects include fields to store the name of the user who created the record and who last modified the record. These fields provide basic auditing information.

Login History

You can review a list of successful and failed login attempts to your organization for the past 6 months.

Field History Tracking

You can enable auditing for individual fields, which automatically track any changes in the values of selected fields. Although auditing is available for all custom objects, only some standard objects allow field-level auditing.

Setup Audit Trail

Administrators can view a Setup Audit Trail, which logs when modifications are made to your organization's configuration.
