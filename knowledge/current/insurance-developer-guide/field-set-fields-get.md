---
title: "Field Set Fields (GET)"
domain: insurance-developer-guide
topic: field-set-fields-get
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:40.120Z
estimatedTokens: 194
---

# Field Set Fields (GET)

> Get the fields of a field set by the field set ID and object name.

# Field Set Fields (GET)

Get the fields of a field set by the field set ID and object name.

Resource

```

```

Resource example

```

```

Available version

65.0

HTTP methods

GET

Path parameter for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| fieldSetId | String | ID of the field set to get the associated fields for. | Required | 65.0 |
| objectName | String | API name of the object to get the associated fields for. | Required | 65.0 |

Response body for GET

[Field Set Fields](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_field_set_fields.htm "Output representation of the collection of fields that are associated with a specific field set.")

## Code Examples

```
/connect/fieldset/objectName/fieldSetId/fields
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/fieldset/ClaimCoveragePaymentDetail/0182819gvahBghvdh/fields
```

## Related Topics

- Field Set Fields (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_field_set_fields.htm)
