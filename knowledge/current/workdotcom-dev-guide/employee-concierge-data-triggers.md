---
title: "Employee Concierge Data Triggers"
domain: workdotcom-dev-guide
topic: employee-concierge-data-triggers
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:22.519Z
estimatedTokens: 443
keywords: [Employee, Concierge, Data, Triggers, managed, package, installed, Case, objects, added, recommend, settings, Trigger, Impact, Enabling]
---

# Employee Concierge Data Triggers

> When the Employee Concierge managed package is installed, data triggers on the Employee
    and Case objects are added. We recommend using the default settings for the Employee Concierge
    triggers.

# Employee Concierge Data Triggers

When the Employee Concierge managed package is installed, data triggers on the Employee and Case objects are added. We recommend using the default settings for the Employee Concierge triggers.

## Case Trigger

When a new ticket is created, wkdw\_\_CaseTrigger automatically shares that ticket with the associated employee.

## Employee Trigger

When a new employee record is added in your org, wkdw\_\_EmployeeTrigger creates a person account. This trigger also updates an existing person account if the related employee record is edited.

## Impact of Enabling or Disabling Employee Concierge Triggers

By default, wkdw\_\_CaseTrigger and wkdw\_\_EmployeeTrigger are enabled in your org. Although it’s possible to edit these settings, we recommend using the default trigger settings. Employee Concierge features don’t work as expected unless your org uses the default trigger settings.

If wkdw\_\_CaseTrigger is disabled, any case created by or for an employee isn't automatically shared with that person. Cases created when the trigger is disabled must be manually shared for an employee to access the related tickets. Disable or re-enable this trigger using the Case Sharing Disabled option (wkdw\_\_IsCaseSharingDisabled\_\_c) found under the Custom Settings menu in your org.

If wkdw\_\_EmployeeTrigger is disabled, person account records aren’t created or updated when you add or update employee records. If you add or edit employee records after disabling the trigger, use the Concierge Settings sync option to create or update person accounts. Disable or re-enable this trigger using the Employee Person Account Sync Disabled option (wkdw\_\_IsPersonAccountSyncDisabled\_\_c) found under the Custom Settings menu in your org.
