---
title: "Flow for Insurance Policy Administration"
domain: insurance-developer-guide
topic: flow-for-insurance-policy-administration
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.934Z
estimatedTokens: 368
keywords: [Flow, Insurance, Policy, Administration, metadata, associated, application, users, series, pages, query, records, database, execute, logic]
---

# Flow for Insurance Policy Administration

> Represents the metadata associated with a flow. Use Flow to create an application that
    takes users through a series of pages to query and update records in the database. You can also
    execute logic and provide branching capability based on user input to build dynamic
    applications.

# Flow for Insurance Policy Administration

Represents the metadata associated with a flow. Use Flow to create an application that takes users through a series of pages to query and update records in the database. You can also execute logic and provide branching capability based on user input to build dynamic applications.

## FlowActionCall

Insurance Policy Administration exposes additional actionType values for the FlowActionCall Metadata type.

| Field Name | Field Type | Description |
| --- | --- | --- |
| actionType | InvocableActionType (enumeration of type string) | Required.The action type. Additional valid values only for Insurance Policy Administration include:cancelInsurancePolicy—Cancel an insurance policy by using a set of user inputs that represent policy details.createOutOfSeqPlcyEndorsement—Create an out-of-sequence endorsement for an insurance policy.endorseInsurancePolicy—Endorse an insurance policy by using a set of user inputs that represent policy details.endorseMultiRootInsPolicy—getInsurancePolicy—Get the details of an insurance policy.issueInsurancePolicy— Issue an insurance policy by using a set of user inputs that represent policy details.issueMultiRootInsPolicy—reinstateInsurancePolicy—Reinstate a previously canceled insurance policy.renewInsurancePolicy—Renew an insurance policy by using a set of user inputs that represent policy details.renewMultiRootInsPolicy—renewInsurancePolicies—Renew insurance policies in bulk. |
