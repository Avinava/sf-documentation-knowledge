---
title: "Process Approvals"
domain: rest-api
topic: process-approvals
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:44:25.499Z
keywords: [Process, Approvals]
---

# Process Approvals

# Process Approvals

Accesses all approval processes. Can also be used to submit a particular record if that entity supports an approval process and one has already been defined. Records can be approved and rejected if the current user is an assigned approver.

-   **[Get Process Approvals](atlas.en-us.api_rest.meta/api_rest/resources_process_approvals_get.htm)**  
    Gets a list of all approval processes. This resource is available in REST API version 30.0 and later.
-   **[Submit, Approve, or Reject Process Approvals](atlas.en-us.api_rest.meta/api_rest/resources_process_approvals_post.htm)**  
    Submits a particular record both if its entity supports an approval process and the entity has a defined approval process. Records can be approved and rejected if the current user is an assigned approver. This resource is available in REST API version 30.0 and later.
-   **[Return HTTP Headers for Process Approvals](atlas.en-us.api_rest.meta/api_rest/resources_process_approvals_head.htm)**  
    Returns only the headers that are returned by sending a GET request to the process approvals resource. This gives you a chance to see returned header values of the GET request before retrieving the content. This resource is available in REST API version 30.0 and later.

-   [← Previous](atlas.en-us.api_rest.meta/api_rest/resources_knowledge_support.htm "Support Knowledge with REST API")
-   [Next →](atlas.en-us.api_rest.meta/api_rest/resources_process_rules.htm "Process Rules")