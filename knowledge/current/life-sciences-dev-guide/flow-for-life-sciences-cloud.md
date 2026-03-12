---
title: "Flow for Life Sciences Cloud"
domain: life-sciences-dev-guide
topic: flow-for-life-sciences-cloud
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:43.681Z
estimatedTokens: 437
keywords: [Flow, Life, Sciences, Cloud, metadata, associated, application, users, series, pages, query, records, database, run, logic]
---

# Flow for Life Sciences Cloud

> The Flow for Life Sciences Cloud represents the metadata associated with a flow. Use
    Flow to create an application that takes users through a series of pages to query and update the
    records in the database. You can also run logic and provide branching capability based on user
    input to build dynamic applications.

# Flow for Life Sciences Cloud

The Flow for Life Sciences Cloud represents the metadata associated with a flow. Use Flow to create an application that takes users through a series of pages to query and update the records in the database. You can also run logic and provide branching capability based on user input to build dynamic applications.

## FlowActionCall

Life Sciences Cloud exposes additional actionType values for the FlowActionCall metadata type.

| Field Name | Field Type | Description |
| --- | --- | --- |
| actionType | InvocableActionType (enumeration of type string) | Required.The action type. Additional valid values for Life Sciences Cloud are:assignCndtToResearchStudyGroup—Assign candidates, enrolled in the clinical trials through randomization to research study comparison groups.generateResearchStudyBlocks—Generate research study randomization block records to link each block with a specific research study comparison group by using the randomization process.getContextData—Retrieves the context data that is passed as an input to a prompt template that generates a summary of the data.processCriteriaMatchingResp—Parses a GPT-generated JSON response to evaluate each inclusion and exclusion criterion for a given Research Study Candidate, determining whether each criterion is matched or not. This action stores the GPT response in the Care Program Enrollment Evaluation Result entity and computes the number of matched inclusion criteria and exclusion criteria, returning these counts as output.serializeHierarchicalContextData—Serializes the hierarchical context data from the Apex embeddedai__RecordApexRepresentation records that are passed as input to a prompt template that generates a summary of the data. |
