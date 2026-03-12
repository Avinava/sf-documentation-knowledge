---
title: "Pattern Selection Guide"
domain: integration-patterns-and-practices
topic: pattern-selection-guide
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:41.303Z
estimatedTokens: 877
keywords: [Pattern, Selection, matrix, tables, patterns, their, key, aspects, help, determine, best, fits, integration, requirements, categorized]
---

# Pattern Selection Guide

> The selection matrix tables list the patterns and their key aspects to help you determine
        which pattern best fits your integration requirements. The patterns are categorized using
        these dimensions.

# Pattern Selection Guide

The selection matrix tables list the patterns and their key aspects to help you determine which pattern best fits your integration requirements. The patterns are categorized using these dimensions.

| Aspect | Description |
| --- | --- |
| Type | Specifies the style of integration: Process, Data, or Virtual.Process—Process-based integrations are ways to integrate the processing of functional flow across two or more applications. These integrations typically involve a higher level of abstraction and complexity, especially for transactionality and rollback.Data—Data integrations are the integration of the information used by applications. These integrations can range from a simple table insert or upsert to complex data updates requiring referential integrity and complex translations.Virtual—Virtual integrations are where Salesforce interacts with data that resides in an external system without the need to replicate the data that’s within Salesforce. This type of integration is always triggered via an event from the Salesforce platform such as a user action, workflow, search, or record update, resulting in data integration with an external source in real time. |
| Timing | Specifies the blocking (or non-blocking) nature of the integration.Synchronous—Blocking or near-real-time requests are request/response operations. The result is returned to the caller immediately via this operation.1Asynchronous—Nonblocking, queue, or message-based requests are invoked by a one-way operation. The results and any faults are returned by invoking other one-way operations.2 The caller therefore makes the request and continues without waiting for a response. |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=integration_patterns_and_practices)

#### Note

An integration can require an external middleware or integration solution (for example, Enterprise Service Bus) depending on which aspects apply to your integration scenario.

## Integrating Salesforce with Another System

This table lists the patterns and their key aspects to help you determine which pattern best fits your requirements when your integration scenario goes from Salesforce to another system.

| Type | Timing | Key Pattern to Consider |
| --- | --- | --- |
| Process Integration | Synchronous | Remote Process Invocation—Request and Reply |
| Process Integration | Asynchronous | Remote Process Invocation—Fire and Forget |
| Data Integration | Synchronous | Remote Process Invocation—Request and Reply |
| Data Integration | Asynchronous | UI Update Based on Data Changes |
| Virtual Integration | Synchronous | Data Virtualization |

## Integrating Another System with Salesforce

This table lists the patterns and their key aspects to help you determine the pattern that best fits your requirements when your integration scenario goes from another system to Salesforce.

| Type | Timing | Key Pattern to Consider |
| --- | --- | --- |
| Process Integration | Synchronous | Remote Call-In |
| Process Integration | Asynchronous | Remote Call-In |
| Data Integration | Synchronous | Remote Call-In |
| Data Integration | Asynchronous | Batch Data Synchronization |

[1](#fnsrc_1) “Synchronous vs. Asynchronous Communication in Applications Integration,” MuleSoft, last accessed October 13, 2021, [https://www.mulesoft.com/resources/esb/applications-integration](https://www.mulesoft.com/resources/esb/applications-integration "HTML (New Window)").

[2](#fnsrc_2) Ibid.

## Related Topics

- Remote Process
                  Invocation—Request and Reply (atlas.en-us.integration_patterns_and_practices.meta/integration_patterns_and_practices/integ_pat_remote_process_invocation_state.htm)
- Remote Process
                  Invocation—Fire and Forget (atlas.en-us.integration_patterns_and_practices.meta/integration_patterns_and_practices/integ_pat_remote_process_invocation_fire_forget.htm)
- UI Update Based on Data
                  Changes (atlas.en-us.integration_patterns_and_practices.meta/integration_patterns_and_practices/integ_pat_ui_updates_from_data_changes.htm)
- Data
                Virtualization (atlas.en-us.integration_patterns_and_practices.meta/integration_patterns_and_practices/integ_pat_data_virtualization.htm)
- Remote Call-In (atlas.en-us.integration_patterns_and_practices.meta/integration_patterns_and_practices/integ_pat_remote_call_in.htm)
- Batch Data
                  Synchronization (atlas.en-us.integration_patterns_and_practices.meta/integration_patterns_and_practices/integ_pat_batch_data_sync.htm)
