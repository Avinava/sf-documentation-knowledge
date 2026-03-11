---
title: "Process Rules"
domain: rest-api
topic: process-rules
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:44:25.522Z
keywords: [Process, Rules]
---

# Process Rules

# Process Rules

Accesses a list of all active workflow rules. Use the GET method to retrieve records or fields. Use the HEAD method to retrieve information in HTTP headers. Use the POST method to trigger all active workflow rules.

To access all workflow rules that are associated with a specific sObject, use the [Process Rule List for an sObject](atlas.en-us.api_rest.meta/api_rest/resources_process_rules_object.htm "Accesses a list of all active workflow rules for an sObject. Use the GET method to retrieve records or fields. Use the HEAD method to retrieve information in HTTP headers.") resource. To access a specific workflow rule that is associated with a specific sObject, use the [Process Rule for an sObject](atlas.en-us.api_rest.meta/api_rest/resources_process_rule_object.htm "Accesses an active workflow rule for an sObject. Use the GET method to retrieve the record or fields. Use the HEAD method to retrieve information in HTTP headers. Use the POST method to trigger the workflow rule.") resource.

Cross-object workflow rules can’t be invoked using REST API.

-   **[Get Process Rules](atlas.en-us.api_rest.meta/api_rest/resources_process_rules_get.htm)**  
    Gets all active workflow rules. This resource is available in REST API version 30.0 and later.
-   **[Trigger Process Rules](atlas.en-us.api_rest.meta/api_rest/resources_process_rules_post.htm)**  
    Triggers all active workflow rules. All rules associated with the specified ID are evaluated, regardless of the evaluation criteria. All IDs must be for records on the same object. This resource is available in REST API version 30.0 and later.
-   **[Return HTTP Headers for Process Rules](atlas.en-us.api_rest.meta/api_rest/resources_process_rules_head.htm)**  
    Returns only the headers that are returned by sending a GET request to the process rules resource. This gives you a chance to see returned header values of the GET request before retrieving the content. This resource is available in REST API version 30.0 and later.

-   [← Previous](atlas.en-us.api_rest.meta/api_rest/resources_process_approvals.htm "Process Approvals")
-   [Next →](atlas.en-us.api_rest.meta/api_rest/resources_process_rule_object.htm "Process Rule for an sObject")