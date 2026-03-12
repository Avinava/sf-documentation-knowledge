---
title: "Process Rule List for an sObject"
domain: rest-api
topic: process-rule-list-for-an-sobject
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:35.658Z
estimatedTokens: 484
keywords: [Process, Rule, sObject, Accesses, active, workflow, rules, retrieve, records, HEAD, HTTP]
---

# Process Rule List for an sObject

> Accesses a list of all active workflow rules for an sObject. Use the GET method to
        retrieve records or fields. Use the HEAD method to retrieve information in HTTP
        headers.

# Process Rule List for an sObject

Accesses a list of all active workflow rules for an sObject. Use the GET method to retrieve records or fields. Use the HEAD method to retrieve information in HTTP headers.

Cross-object workflow rules can’t be invoked using REST API.

To access all workflow rules, use the [Process Rules](atlas.en-us.api_rest.meta/api_rest/resources_process_rules.htm "Accesses a list of all active workflow rules. Use the GET method to retrieve records or fields. Use the HEAD method to retrieve information in HTTP headers. Use the POST method to trigger all active workflow rules.") resource. To access a specific workflow rule that is associated with a specific sObject, use the [Process Rule for an sObject](atlas.en-us.api_rest.meta/api_rest/resources_process_rule_object.htm "Accesses an active workflow rule for an sObject. Use the GET method to retrieve the record or fields. Use the HEAD method to retrieve information in HTTP headers. Use the POST method to trigger the workflow rule.") resource.

-   **[Get Process Rules for an sObject](atlas.en-us.api_rest.meta/api_rest/resources_process_rules_object_get.htm)**
    Gets all active workflow rules for an sObject. This resource is available in REST API version 30.0 and later.
-   **[Return HTTP Headers for Process Rules of an sObject](atlas.en-us.api_rest.meta/api_rest/resources_process_rules_object_head.htm)**
    Returns only the headers that are returned by sending a GET request to the process rules resource for all process rules of an sObject. This gives you a chance to see returned header values of the GET request before retrieving the content. This resource is available in REST API version 30.0 and later.

-   [← Previous](atlas.en-us.api_rest.meta/api_rest/resources_process_rule_object.htm "Process Rule for an sObject")
-   [Next →](atlas.en-us.api_rest.meta/api_rest/resources_opportunitylineitemschedules.htm "Product Schedules")

## Related Topics

- Process Rules (atlas.en-us.api_rest.meta/api_rest/resources_process_rules.htm)
- Process Rule for an sObject (atlas.en-us.api_rest.meta/api_rest/resources_process_rule_object.htm)
- Get Process Rules for an sObject (atlas.en-us.api_rest.meta/api_rest/resources_process_rules_object_get.htm)
- Return HTTP Headers for Process Rules of an sObject (atlas.en-us.api_rest.meta/api_rest/resources_process_rules_object_head.htm)
- ← Previous (atlas.en-us.api_rest.meta/api_rest/resources_process_rule_object.htm)
- Next → (atlas.en-us.api_rest.meta/api_rest/resources_opportunitylineitemschedules.htm)
