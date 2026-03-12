---
title: "Flow for Billing"
domain: revenue-cloud
topic: flow-for-billing
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:07.419Z
estimatedTokens: 571
keywords: [Flow, Billing, metadata, associated, application, navigates, users, series, screens, query, records, database, execute, logic, provide]
---

# Flow for Billing

> Represents the metadata associated with a flow. With Flow, you can create an
    application that navigates users through a series of screens to query and update records in the
    database. You can also execute logic and provide branching capability based on user input to
    build dynamic applications.

# Flow for Billing

Represents the metadata associated with a flow. With Flow, you can create an application that navigates users through a series of screens to query and update records in the database. You can also execute logic and provide branching capability based on user input to build dynamic applications.

## FlowActionCall

Billing exposes additional actionType values for the FlowActionCall Metadata type.

| Field Name | Field Type | Description |
| --- | --- | --- |
| actionType | InvocableActionType (enumeration of type string) | Required.The action type. Additional valid values only for Billing include:applyCredit—Apply a credit memo or credit memo line to an invoice or invoice line, respectively.unapplyCredit—Unapply a credit memo or credit memo line from an invoice or invoice line, respectively.postDraftInvoice—Update the status of an invoice from Draft to Posted for a credit memo application.postDraftInvoiceBatchRun—Update the status of a batch of invoices from Draft to Posted for a credit memo application.createBillingSchedulesFromBillingTransaction—Create one or more billing schedules for a specified billing transaction ID.recoverBillingSchedules—Recover one or more billing schedules in the Error or Processing status.generateInvoiceDocuments—Asynchronously generate PDF documents for the invoices associated with an invoice batch run record that are in the Draft or Posted status.createBillingSchedulesFromTrxn—Creates billing schedules for internal or external transaction records by calling the Create Standalone Billing Schedules API.unapplyPayment—Unapplies a payment that's already been applied to an invoice or invoice line by crediting the amount back to the payment and the invoice or invoice line.writeOffInvoices—Write off partially paid or unpaid invoices to manage pending debts and to maintain accurate financial records. This action calls the Posted Invoice List Write-Off (POST) API.assignSequences—Assigns sequence pattern values to target invoice records based on the specified sequence policy.postDraftCreditMemo—Post a draft credit memo to a credit memo record for review and approval.generateAccountStatement—Generates a comprehensive account statement for a specified account with transaction history and balance information. |
