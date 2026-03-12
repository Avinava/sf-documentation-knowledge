---
title: "Email Merge Field Services Resource"
domain: chatterapi
topic: email-merge-field-services-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.944Z
estimatedTokens: 178
keywords: [Email, Merge, Services, Resource, specific, put, template, mail, custom, link, formula, incorporate, record]
---

# Email Merge Field Services Resource

> See a list of merge fields for a specific object. A merge field is a
      field you can put in an email template, mail merge template, custom link, or formula to
      incorporate values from a record.

# Email Merge Field Services Resource

See a list of merge fields for a specific object. A merge field is a field you can put in an email template, mail merge template, custom link, or formula to incorporate values from a record.

Resource

```

```

Available version

39.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| objectApiNames | List<String> | The API names for the objects being referenced. | Required | 39.0 |

Response body for GET

[Email Merge Field](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_email_merge_field.htm "The map for objects and their merge fields.")

## Code Examples

```
/email-merge-fields
```

## Related Topics

- Email Merge Field (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_email_merge_field.htm)
