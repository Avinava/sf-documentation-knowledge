---
title: "Microsites Marketing Integration Forms"
domain: chatterapi
topic: microsites-marketing-integration-forms
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.758Z
estimatedTokens: 274
keywords: [Microsites, Marketing, Integration, Forms, Save, form, Experience, Cloud, site]
---

# Microsites Marketing Integration Forms

> Save a marketing integration form for an Experience Cloud
    site.

# Microsites Marketing Integration Forms

Save a marketing integration form for an Experience Cloud site.

This API attempts to create a read-only data extension in Marketing Cloud Engagement. A Marketing Cloud Engagement admin can change the read-only setting. We recommend keeping the data extension as read-only to maintain schema consistency with the form.

Resource

```

```

Available version

53.0

HTTP methods

POST

Request body for POST

Root XML tag

<formInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| formFieldsList | Form Field Input[] | Fields for the marketing integration form. | Required | 53.0 |
| formName | String | Name of the marketing integration form. | Required | 53.0 |
| member​Identification​Code | String | The member identification code (MID) of the Marketing Cloud Engagement account associated with the form. | Required | 53.0 |

Response body for POST

[Form](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_form.htm "Marketing integration form.")

## Code Examples

```
/sites/siteId/marketing-integration/forms
```

```
{
"formFieldsList" : {
   "formFields" : [{
      "name" : "First Name",
      "type" : "Text"
      },
      {
      "name" : "Last Name",
      "type" : "Text"
      },
      {
      "name" : "Email",
      "type" : "EmailAddress"
      }]
   },
"formName" : "Contact Us Data",
"memberIdentificationCode" : "marketing-account-id"
}
```

## Related Topics

- Form Field Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_form_field_input.htm)
- Form (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_form.htm)
