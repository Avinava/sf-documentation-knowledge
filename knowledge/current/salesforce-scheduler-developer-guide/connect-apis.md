---
title: "Connect APIs"
domain: salesforce-scheduler-developer-guide
topic: connect-apis
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:43.554Z
estimatedTokens: 639
keywords: [Connect, APIs, Salesforce, Scheduler, REST, service, territories, consolidated, availability, resource, appointments]
---

# Connect APIs

> Use Salesforce Scheduler Connect REST APIs to get service territories, get consolidated
    availability of each service resource within specified territories, and create service
    appointments.

# Connect APIs

Use Salesforce Scheduler Connect REST APIs to get service territories, get consolidated availability of each service resource within specified territories, and create service appointments.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_scheduler_developer_guide)

#### Note

Salesforce Scheduler is built on the Salesforce platform (also known as Lighting Experience). The Salesforce platform specific API rate limits apply to the Salesforce Scheduler Connect APIs. The rate limit for the Connect APIs is per user, per application, per hour limit. Salesforce Scheduler Connect APIs are better equipped to handle a large number of requests and can support the rate limit of 10000 per user, per application, per hour. For more information on Lightning platform common limits and allocations, see [Connect REST API Limits](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/intro_rate_limits.htm "HTML (New Window)").

The following is a list of Connect APIs available within the Salesforce Scheduler platform.

-   **[Resources](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/resources_connect_ls.htm)**

-   **[Connect REST API Request Bodies](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/connect_requests.htm)**
    To perform a POST, PATCH, or PUT request, pass query parameters or create a request body formatted in either XML or JSON. This chapter lists the request bodies. The query parameters are listed with each resource.
-   **[Connect REST API Response Bodies](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/connect_responses.htm)**
    The successful execution of a request to a Connect REST API resource can return a response body in either JSON or XML format.

#### See Also

-   [Connect REST API Developer Guide: Connect REST API Introduction](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/intro_what_is_chatter_connect.htm "Connect REST API Developer Guide: Connect REST API Introduction - HTML (New Window)")

-   [Salesforce Developer Limits and Allocations Quick Reference: About This Quick Reference](https://developer.salesforce.com/docs/atlas.en-us.260.0.salesforce_app_limits_cheatsheet.meta/salesforce_app_limits_cheatsheet/salesforce_app_limits_overview.htm "Salesforce Developer Limits and Allocations Quick Reference: About This Quick Reference - HTML (New Window)")

## Related Topics

- Resources (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/resources_connect_ls.htm)
- Connect REST API Request Bodies (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/connect_requests.htm)
- Connect REST API Response Bodies (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/connect_responses.htm)
