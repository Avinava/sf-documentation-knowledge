---
title: "Process Rule for an sObject"
domain: rest-api
topic: process-rule-for-an-sobject
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:35.639Z
estimatedTokens: 506
keywords: [Process, Rule, sObject, Accesses, active, workflow, retrieve, record, HEAD, HTTP, POST, trigger]
---

# Process Rule for an sObject

> Accesses an active workflow rule for an sObject. Use the GET method to retrieve the
        record or fields. Use the HEAD method to retrieve information in HTTP headers. Use the POST
        method to trigger the workflow rule.

# Process Rule for an sObject

Accesses an active workflow rule for an sObject. Use the GET method to retrieve the record or fields. Use the HEAD method to retrieve information in HTTP headers. Use the POST method to trigger the workflow rule.

Cross-object workflow rules can’t be invoked using REST API.

To access all workflow rules, use the [Process Rules](atlas.en-us.api_rest.meta/api_rest/resources_process_rules.htm "Accesses a list of all active workflow rules. Use the GET method to retrieve records or fields. Use the HEAD method to retrieve information in HTTP headers. Use the POST method to trigger all active workflow rules.") resource. To access a specific workflow rule that is associated with a specific sObject, use the [Process Rule List for an sObject](atlas.en-us.api_rest.meta/api_rest/resources_process_rules_object.htm "Accesses a list of all active workflow rules for an sObject. Use the GET method to retrieve records or fields. Use the HEAD method to retrieve information in HTTP headers.") resource.

-   **[Get a Process Rule for an sObject](atlas.en-us.api_rest.meta/api_rest/resources_process_rule_object_get.htm)**
    Gets the fields of a specific workflow rule for a specific sObject.
-   **[Trigger a Process Rule for an sObject](atlas.en-us.api_rest.meta/api_rest/resources_process_rule_object_post.htm)**
    Triggers an active workflow rule regardless of the evaluation criteria.
-   **[Return HTTP Headers for a Process Rule of an sObject](atlas.en-us.api_rest.meta/api_rest/resources_process_rule_object_head.htm)**
    Returns only the headers that are returned by sending a GET request to the process rules resource for a specific process rule of an sObject. This gives you a chance to see returned header values of the GET request before retrieving the content.

-   [← Previous](atlas.en-us.api_rest.meta/api_rest/resources_process_rules.htm "Process Rules")
-   [Next →](atlas.en-us.api_rest.meta/api_rest/resources_process_rules_object.htm "Process Rule List for an sObject")

## Related Topics

- Process Rules (atlas.en-us.api_rest.meta/api_rest/resources_process_rules.htm)
- Process Rule List for an sObject (atlas.en-us.api_rest.meta/api_rest/resources_process_rules_object.htm)
- Get a Process Rule for an sObject (atlas.en-us.api_rest.meta/api_rest/resources_process_rule_object_get.htm)
- Trigger a Process Rule for an sObject (atlas.en-us.api_rest.meta/api_rest/resources_process_rule_object_post.htm)
- Return HTTP Headers for a Process Rule of an sObject (atlas.en-us.api_rest.meta/api_rest/resources_process_rule_object_head.htm)
- ← Previous (atlas.en-us.api_rest.meta/api_rest/resources_process_rules.htm)
- Next → (atlas.en-us.api_rest.meta/api_rest/resources_process_rules_object.htm)
