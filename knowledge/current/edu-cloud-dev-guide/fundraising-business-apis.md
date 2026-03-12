---
title: "Fundraising Business APIs"
domain: edu-cloud-dev-guide
topic: fundraising-business-apis
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:25.678Z
estimatedTokens: 868
keywords: [Fundraising, Business, APIs, access, Salesforce, REST, endpoints, follow, similar, conventions, Connect]
---

# Fundraising Business APIs

> You can access Salesforce Fundraising APIs using REST endpoints. These REST APIs follow
    similar conventions as Connect REST APIs.

# Fundraising Business APIs

You can access Salesforce Fundraising APIs using REST endpoints. These REST APIs follow similar conventions as Connect REST APIs.

To use the Fundraising Business Process APIs:

-   [Enable Fundraising](https://help.salesforce.com/s/articleView?id=sfdo.fundraising_enable_fundraising.htm&type=5&language=en_US "HTML (New Window)") in your org.
-   Enable donor matching method. See [Configure Fundraising Settings](https://help.salesforce.com/s/articleView?id=sfdo.fundraising_configure_fundraising_settings.htm&type=5&language=en_US "HTML (New Window)"). See the [FundraisingConfig](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_fundraising_api_objects_fundraisingconfig.htm "HTML (New Window)") object to know about the donor matching method details.
-   Selet a default gift designation. See [Gift Designation](https://help.salesforce.com/s/articleView?id=sfdo.npc_fr_manage_designations.htm&type=5&language=en_US "HTML (New Window)").
-   Configure the duplicate and matching rules for the Account and Contact objets, Or set Duplicate Matching in Settings to **No Matching**. See [Customize Duplicate Management](https://help.salesforce.com/s/articleView?id=sales.duplicate_prevention_map_of_tasks.htm&type=5&language=en_US "HTML (New Window)").

The Fundraising Business Process APIs help teams create strong integrations using industry-standard tools. Use the Salesforce composite Fundraising BP API to send a single complex payload instead of making multiple calls using multiple APIs to various objects. Developer-friendly APIs don’t require a detailed and complete understanding of the NPC data model, greatly simplifying integrations. These APIs offer scalability and flexibility through features like automatic record matching, batch processing, bulk operations, and dynamic data mapping. Five robust endpoints are currently available to:

-   Create bulk gift transactions with related donor and designations

-   Create bulk gift commitments with related donor, schedule, and default designations

-   Modify the future recurring schedule on a gift commitment

-   Apply payment update metadata to gift transactions and future gift commitment installments

The Fundraising Business Process APIs are available as a standard Salesforce Connect API REST endpoint as well as through Apex.

To understand the architecture, authentication, rate limits, and how the requests and responses work, see [Connect REST API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/intro_what_is_chatter_connect.htm "HTML (New Window)").

To use Business APIs on the Postman API platform, see the [Postman collection for Fundraising](https://www.postman.com/salesforce-developers/workspace/salesforce-developers/folder/12721794-e20188c8-7bfc-475c-be7f-996a685a0cce?ctx=documentation "HTML (New Window)").

-   **[Resources](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/npc_fundraising_apis_resources.htm)**
    Learn more about the available Fundraising API resources.
-   **[Request Bodies](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/npc_fundraising_apis_requests.htm)**
    Learn more about the available Fundraising API request bodies.
-   **[Response Bodies](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/npc_fundraising_apis_responses.htm)**
    Learn more about the available Fundraising API response bodies.

## Related Topics

- Resources (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/npc_fundraising_apis_resources.htm)
- Request Bodies (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/npc_fundraising_apis_requests.htm)
- Response Bodies (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/npc_fundraising_apis_responses.htm)
