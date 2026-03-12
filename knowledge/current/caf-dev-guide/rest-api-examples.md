---
title: "REST API Examples"
domain: caf-dev-guide
topic: rest-api-examples
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:09.246Z
estimatedTokens: 833
keywords: [REST, API, Examples, record, Custom, Address, data, New, Account]
---

# REST API Examples

> Use REST API to create, update, or delete a record with Custom Address Fields
    data.

# REST API Examples

Use REST API to create, update, or delete a record with Custom Address Fields data.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=caf_dev_guide)

#### Note

Before you create a custom address field, review the [Custom Address Fields Requirements and Limitations](atlas.en-us.caf_dev_guide.meta/caf_dev_guide/caf_dev_limitations.htm "Before you enable Custom Address Fields, configure State and Country/Territory picklists and review the limitations of this feature."). To discuss the feature and ask questions, join the [Custom Address Fields Discussion](https://trailhead.salesforce.com/trailblazer-community/groups/0F94S000000H3KISA0) group on the Trailblazer Community.

## Create a New Account with Data in a Custom Address Field

To create a new record, use the sObject resource. You supply the required field values in the request data, and send the request using the POST HTTP method. The response body contains the ID of the new record if the call is successful.

This example creates an Account record which includes address data stored in the Mailing Address custom address field.

Example HTTP POST method to create a new Account

```

```

Example request body newaccount.json file to create a new Account

```

```

Example response body after successfully creating a new Account

```

```

## Update Data Within a Custom Address Field on a Record

To update a record, use the sObject Rows resource. Provide the updated record information in your request data and use the PATCH method of the resource with a specific record ID to update that record. Records in a single file must be of the same object type.

This example updates the data stored in the Mailing Address custom address field for record ID 001XXXXXXXXXXXXXXX.

HTTP PATCH example for updating an Account

```

```

Example request body patchaccount.json file for updating the custom field, Mailing Address, on an Account

```

```

Example response body after successfully updating an Account

None returned

## Delete Data Within a Custom Address Field on a Record

To delete address data stored within a custom address field on a record, update the record with the sObject Rows resource. Provide the updated record information in your request data and use the PATCH method of the resource with a specific record ID to update that record. Records in a single file must be of the same object type.

This example deletes the data stored in the Mailing Address custom address field for record ID 001XXXXXXXXXXXXXXX.

HTTP PATCH example for updating an Account

```

```

Example request body patchaccount.json file for updating the custom field, Mailing Address, on an Account

```

```

Example response body after successfully updating an Account

None returned

## Delete a Record That Contains Data in a Custom Address Field

To delete records, use the sObject Rows resource. Specify the record ID and use the DELETE method of the resource to delete a record. When a record is deleted, all data for that record is deleted, including the custom address field information.

This example deletes the Account record with ID 001XXXXXXXXXXXXXXX.

HTTP DELETE example for updating an Account

```

```

Example request body

None needed

Example response body after successfully updating an Account

200 OK

## Code Examples

```
curl https://MyDomainName.my.salesforce.com/services/data/66.0/sobjects/Account -H "Authorization: Bearer token" -H "Content-Type: application/json" -d "@newaccount.json"
```

```
{
"Name" : "Acme Incorporated",
"Mailing_Address__City__s" : "Ahmedabad",
"Mailing_Address__CountryCode__s" : "IN",
"Mailing_Address__Street__s" : "102 Suryakoti",
"Mailing_Address__PostalCode__s" : "380022",
"Mailing_Address__StateCode__s": "GJ",
"Mailing_Address__Latitude__s" : "37.775",
"Mailing_Address__Longitude__s" : "-122.418",
"Mailing_Address__GeocodeAccuracy__s" : "Address"
}
```

```
{
  "id" : "001XXXXXXXXXXXXXXX",
  "errors" : [ ],
  "success" : true
}
```

```
curl https://MyDomainName.my.salesforce.com/services/data/66.0/sobjects/Account/001XXXXXXXXXXXXXXX -H "Authorization: Bearer token" -H "Content-Type: application/json" -d @patchaccount.json -X PATCH
```

```
{
"Mailing_Address__City__s" : "Surendranagar",
"Mailing_Address__CountryCode__s" : "IN",
"Mailing_Address__Street__s" : "20 Udhyog Nagar",
"Mailing_Address__PostalCode__s" : "363001",
"Mailing_Address__StateCode__s":  "GJ",
"Mailing_Address__Latitude__s" : "22.757580",
"Mailing_Address__Longitude__s" : "71.619350",
"Mailing_Address__GeocodeAccuracy__s" : "Address"
}
```

## Related Topics

- Custom Address Fields Requirements and Limitations (atlas.en-us.caf_dev_guide.meta/caf_dev_guide/caf_dev_limitations.htm)
