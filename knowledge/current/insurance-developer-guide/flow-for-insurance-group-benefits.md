---
title: "Flow for Insurance Group Benefits"
domain: insurance-developer-guide
topic: flow-for-insurance-group-benefits
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.918Z
estimatedTokens: 437
keywords: [Flow, Insurance, Group, Benefits, metadata, associated, application, users, series, pages, query, records, database, execute, logic]
---

# Flow for Insurance Group Benefits

> Represents the metadata associated with a flow. Use Flow to create an application that
    takes users through a series of pages to query and update records in the database. You can also
    execute logic and provide branching capability based on user input to build dynamic
    applications.

# Flow for Insurance Group Benefits

Represents the metadata associated with a flow. Use Flow to create an application that takes users through a series of pages to query and update records in the database. You can also execute logic and provide branching capability based on user input to build dynamic applications.

## FlowActionCall

Insurance Group Benefits exposes additional actionType values for the FlowActionCall Metadata type.

| Field Name | Field Type | Description |
| --- | --- | --- |
| actionType | InvocableActionType (enumeration of type string) | Required.The action type. Additional valid values only for Insurance Group Benefits include:createCtctUsrFrGrpCens—Create contacts and portal users for group census or group census members.createContractFromQuote—Create a group insurance contract from a quote.createAcctUsrFrGrpCens—Create person accounts and portal users for group census or group census members.getGroupCensusMembersAndPlans—Get the group census member records and associated plans from the content document in the specified asynchronous bulk request item record.getMbrsRatingAndContribution—Get standard and prorated insurance rates for the specified group census members and their selected plan coverages, including contributions.processMemberEnrollment—Process enrolled group census member and their selected plan to create insurance policies and related objects.saveGroupCensusMembersData—Create or update the group census member records for primary members, update the IDs of the dependent members, and create or update groups census member records for the dependent members.validateGroupCensusMembers—Validate the specified group census member records and assign default values to the specified fields. |
