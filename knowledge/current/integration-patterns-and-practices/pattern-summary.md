---
title: "Pattern Summary"
domain: integration-patterns-and-practices
topic: pattern-summary
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:41.214Z
estimatedTokens: 335
keywords: [Pattern, Summary, integration, patterns, contained, document]
---

# Pattern Summary

> The following table lists the integration patterns contained
in this document.

# Pattern Summary

The following table lists the integration patterns contained in this document.

## List of Patterns

| Pattern | Scenario |
| --- | --- |
| Remote Process Invocation—Request and Reply | Salesforce invokes a process on a remote system, waits for completion of that process, and then tracks state based on the response from the remote system. |
| Remote Process Invocation—Fire and Forget | Salesforce invokes a process in a remote system but doesn’t wait for completion of the process. Instead, the remote process receives and acknowledges the request and then hands off control back to Salesforce. |
| Batch Data Synchronization | Data stored in Lightning Platform is created or refreshed to reflect updates from an external system, and when changes from Lightning Platform are sent to an external system. Updates in either direction are done in a batch manner. |
| Remote Call-In | Data stored in Lightning Platform is created, retrieved, updated, or deleted by a remote system. |
| UI Update Based on Data Changes | The Salesforce user interface must be automatically updated as a result of changes to Salesforce data. |
| Data Virtualization | Salesforce accesses external data in real time. This removes the need to persist data in Salesforce and then reconcile the data between Salesforce and the external system. |

## Related Topics

- Remote Process
          Invocation—Request and Reply (atlas.en-us.integration_patterns_and_practices.meta/integration_patterns_and_practices/integ_pat_remote_process_invocation_state.htm)
- Remote Process Invocation—Fire
          and Forget (atlas.en-us.integration_patterns_and_practices.meta/integration_patterns_and_practices/integ_pat_remote_process_invocation_fire_forget.htm)
- Batch Data Synchronization (atlas.en-us.integration_patterns_and_practices.meta/integration_patterns_and_practices/integ_pat_batch_data_sync.htm)
- Remote Call-In (atlas.en-us.integration_patterns_and_practices.meta/integration_patterns_and_practices/integ_pat_remote_call_in.htm)
- UI Update Based on Data
         Changes (atlas.en-us.integration_patterns_and_practices.meta/integration_patterns_and_practices/integ_pat_ui_updates_from_data_changes.htm)
- Data
                  Virtualization (atlas.en-us.integration_patterns_and_practices.meta/integration_patterns_and_practices/integ_pat_data_virtualization.htm)
