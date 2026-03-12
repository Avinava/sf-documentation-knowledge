---
title: "Flow for Fundraising"
domain: nonprofit-cloud
topic: flow-for-fundraising
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:01.269Z
estimatedTokens: 773
keywords: [Flow, Fundraising, metadata, associated, application, navigates, users, series, screens, query, records, database, execute, logic, provide]
---

# Flow for Fundraising

> Represents the metadata associated with a flow. With Flow, you can create an
    application that navigates users through a series of screens to query and update records in the
    database. You can also execute logic and provide branching capability based on user input to
    build dynamic applications.

# Flow for Fundraising

Represents the metadata associated with a flow. With Flow, you can create an application that navigates users through a series of screens to query and update records in the database. You can also execute logic and provide branching capability based on user input to build dynamic applications.

## FlowActionCall

Fundraising exposes additional actionType values for the FlowActionCall Metadata type. For more information on Flow and FlowActionCall metadata type, see [Flow](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_visual_workflow.htm).

| Field Name | Field Type | Description |
| --- | --- | --- |
| actionType | InvocableActionType (enumeration of type string) | Required. The action type. Additional valid values only for Business Rules Engine include:closeGiftCommitment—Updates the status of a gift commitment to closed and updates the status for each of its unpaid and failed gift transactions. This value is available in API version 59.0 and later.manageCustomGiftCmtSchds—Creates or updates up to 15 custom gift commitment schedule records and their associated gift transaction records. This value is available in API version 59.0 and later.manageFundraisingDefinitions—Runs up to three predefined Data Processing Engine (DPE) definitions in a single action. Use this invocable action to process the Donor Gift Summary, Outreach Summary, and Gift Designation definitions. This value is available in API version 64.0 and later.manageGiftDefaultDesignations—Creates and manages Gift Default Designation records for a gift entry associated with a campaign, opportunity, or gift commitment. This value is available in API version 59.0 and later.manageGiftTrxnDesignations—Creates and manages Gift Transaction Designation records for a gift transaction. This value is available in API version 59.0 and later.manageRcrGiftCmtSchd—Creates or updates a recurring type of gift commitment schedule record and creates the first upcoming gift commitment transaction record. This value is available in API version 59.0 and later.processGiftEntries—Processes, singly or as part of a batch, a specified gift entry ID, creating related donor, gift transaction, gift transaction designation, and gift soft credit records. This value is available in API version 59.0 and later.pauseGiftCommitmentSchedule—Pauses a gift commitment schedule for a specified period of time. This value is available in API version 59.0 and later.processGiftCommitment—Updates the status and other relevant fields for a gift commitment based on the statuses of the associated gift transactions and the current gift commitment schedule. This value is available in API version 59.0 and later.resumeGiftCommitmentSchedule—Resumes a paused gift commitment schedule on a specified date. This value is available in API version 59.0 and later.updateProcessedGiftEntries—Updates the status of a specified gift entry record that is already processed. If the processing fails, the failure reason is updated. This value is available in API version 59.0 and later. |
