---
title: "Working with Approval Processes and Process Rules"
domain: rest-api
topic: working-with-approval-processes-and-process-rules
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:36.250Z
estimatedTokens: 580
keywords: [Working, Approval, Processes, Process, Rules, examples, section, REST, API, resources, work, approval, processes, process, rules.]
---

# Working with Approval Processes and Process Rules

> The examples in this section use REST API resources to work with approval processes and
  process rules.

# Working with Approval Processes and Process Rules

The examples in this section use REST API resources to work with approval processes and process rules.

-   **[Get a List of All Approval Processes](atlas.en-us.api_rest.meta/api_rest/dome_process_approvals.htm)**
    Use the \*\*\* resource to get information about approvals.
-   **[Submit a Record for Approval](atlas.en-us.api_rest.meta/api_rest/dome_process_approvals_submit.htm)**
    Use the \*\*\* resource to submit a record or a collection of records for approval. Each call takes an array of requests.
-   **[Approve a Record](atlas.en-us.api_rest.meta/api_rest/dome_process_approvals_approve.htm)**
    Use the \*\*\* resource to approve a record or a collection of records. Each call takes an array of requests. The current user must be an assigned approver. The contextId is ID of the record to submit for approval..
-   **[Reject a Record](atlas.en-us.api_rest.meta/api_rest/dome_process_approvals_reject.htm)**
    Use the \*\*\* resource to reject a record or a collection of records. Each call takes an array of requests. The current user must be an assigned approver.
-   **[Bulk Approvals](atlas.en-us.api_rest.meta/api_rest/dome_process_approvals_bulk.htm)**
    Use the \*\*\* resource to do bulk approvals. You can specify a collection of different Process Approvals requests to have them all executed in bulk.
-   **[Get a List of Process Rules](atlas.en-us.api_rest.meta/api_rest/dome_process_rules.htm)**
    Use the \*\*\* resource to get information about process rules.
-   **[Get a Particular Process Rule](atlas.en-us.api_rest.meta/api_rest/dome_process_rules_particular.htm)**
    Use the \*\*\* resource and specify thesObjectName and workflowRuleId of the rule you want to get the metadata for.
-   **[Trigger Process Rules](atlas.en-us.api_rest.meta/api_rest/dome_process_rules_trigger.htm)**
    Use the \*\*\* resource to trigger process rules. All rules associated with the specified ID will be evaluated, regardless of the evaluation criteria. All IDs must be for records on the same object.

-   [← Previous](atlas.en-us.api_rest.meta/api_rest/using_resources_managing_user_passwords.htm "Managing User Passwords")
-   [Next →](atlas.en-us.api_rest.meta/api_rest/using_resources_event_log_files.htm "Using Event Monitoring")

## Related Topics

- Get a List of All Approval Processes (atlas.en-us.api_rest.meta/api_rest/dome_process_approvals.htm)
- Submit a Record for Approval (atlas.en-us.api_rest.meta/api_rest/dome_process_approvals_submit.htm)
- Approve a Record (atlas.en-us.api_rest.meta/api_rest/dome_process_approvals_approve.htm)
- Reject a Record (atlas.en-us.api_rest.meta/api_rest/dome_process_approvals_reject.htm)
- Bulk Approvals (atlas.en-us.api_rest.meta/api_rest/dome_process_approvals_bulk.htm)
- Get a List of Process Rules (atlas.en-us.api_rest.meta/api_rest/dome_process_rules.htm)
- Get a Particular Process Rule (atlas.en-us.api_rest.meta/api_rest/dome_process_rules_particular.htm)
- Trigger Process Rules (atlas.en-us.api_rest.meta/api_rest/dome_process_rules_trigger.htm)
- ← Previous (atlas.en-us.api_rest.meta/api_rest/using_resources_managing_user_passwords.htm)
- Next → (atlas.en-us.api_rest.meta/api_rest/using_resources_event_log_files.htm)
