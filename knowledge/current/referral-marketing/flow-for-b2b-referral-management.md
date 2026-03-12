---
title: "Flow for B2B Referral Management"
domain: referral-marketing
topic: flow-for-b2b-referral-management
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:35.744Z
estimatedTokens: 247
keywords: [Flow, B2B, Referral, Management, metadata, associated, application, users, series, pages, query, records, database, execute, logic]
---

# Flow for B2B Referral Management

> Represents the metadata associated with a flow. Use Flow to create an application that
    takes users through a series of pages to query and update records in the database. You can also
    execute logic and provide branching capability based on user input to build dynamic
    applications.

# Flow for B2B Referral Management

Represents the metadata associated with a flow. Use Flow to create an application that takes users through a series of pages to query and update records in the database. You can also execute logic and provide branching capability based on user input to build dynamic applications.

## FlowActionCall

B2B Referral Management exposes additional actionType values for the FlowActionCall Metadata type.

| Field Name | Field Type | Description |
| --- | --- | --- |
| actionType | InvocableActionType (enumeration of type string) | Required.The action type. Additional valid values only for B2B Referral Management include:enrollAdvocateB2bReferralProm—Enroll an existing or new customer as an advocate for a referral promotion. Available in API version 64.0 and later.processB2bReferralEvent—Create referral event records when an advocate refers a friend, or when referred friends sign up or make a purchase. Available in API version 64.0 and later. |
