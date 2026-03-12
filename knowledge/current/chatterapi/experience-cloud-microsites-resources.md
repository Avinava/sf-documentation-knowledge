---
title: "Experience Cloud Microsites Resources"
domain: chatterapi
topic: experience-cloud-microsites-resources
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:15.760Z
estimatedTokens: 233
keywords: [Experience, Cloud, Microsites, Resources, save, submit, marketing, integration, forms, site]
---

# Experience Cloud Microsites Resources

> Get, save, and submit marketing integration forms for an Experience Cloud
      site.

# Experience Cloud Microsites Resources

Get, save, and submit marketing integration forms for an Experience Cloud site.

Experience Cloud Microsites resources make calls to the Marketing Cloud Engagement REST API to create, query, and insert data to the data extension object. If the API returns errors, Connect REST API error messages include the [error code and message](https://developer.salesforce.com/docs/atlas.en-us.noversion.mc-apis.meta/mc-apis/error-handling.htm) from Marketing Cloud Engagement.

Available resources are:

| Resource | Description |
| --- | --- |
| /sites/siteId/marketing-integration/forms | Save a marketing integration form for an Experience Cloud site. |
| /sites/siteId/marketing-integration/forms/formId | Get a marketing integration form for an Experience Cloud site. |
| /sites/siteId/marketing-integration/forms/formId/data | Submit a marketing integration form for an Experience Cloud site. |

## Related Topics

- /sites/siteId/marketing-integration/forms (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_marketing_integration_forms.htm)
- /sites/siteId/marketing-integration/forms/formId (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_marketing_integration_form.htm)
- /sites/siteId/marketing-integration/forms/formId/data (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_marketing_integration_form_data.htm)
