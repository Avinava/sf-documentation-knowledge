---
title: "Email Alert Actions"
domain: api-action
topic: email-alert-actions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:58.004Z
estimatedTokens: 389
keywords: [Email, Alert, Actions, Send, emails, flows, reusing, already-configured, workflow, alerts, REST, HTTP, Inputs, Outputs]
---

# Email Alert Actions

> Send emails from flows by reusing already-configured workflow email
   alerts.

# Email Alert Actions

Send emails from flows by reusing already-configured workflow email alerts.

The email alert is already configured with the email’s contents, recipients, and sender, so the flow only has to provide the record ID. Email alerts are entity-specific. For more information about creating email alerts, see [Creating Email Alerts for Workflow, Approvals, or Milestones](https://help.salesforce.com/apex/HTViewHelpDoc?id=creating_workflow_alerts.htm&language=en_US "HTML (New Window)") in Salesforce Help. Make sure to review the [daily limits](https://help.salesforce.com/articleView?id=workflow_limits_email.htm&language=en_US "HTML (New Window)") for emails sent from email alerts.

This object is available in API version 32.0 and later.

## Supported REST HTTP Methods

URI

Get a list of available email alert actions:

/services/data/vXX.X/actions/custom/emailAlert

Get information about a specific email alert action:

/services/data/vXX.X/actions/custom/emailAlert/entity\_name/action\_name

Formats

JSON, XML

HTTP Methods

GET, HEAD, POST

Authentication

Authorization: Bearer token

## Inputs

The email alert action uses the record specified by SObjectRowId to get the information it needs. For example, if a Case was specified for the action, the action could retrieve the email address and recipient’s name from the Case object’s SuppliedEmail and SuppliedName fields, respectively.

| Input | Details |
| --- | --- |
| SObjectRowId | TypeIDDescriptionRequired. The ID of a record such as an Account. |

## Outputs

None.
