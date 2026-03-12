---
title: "Find Field Names"
domain: api-asynch
topic: find-field-names
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:59.434Z
estimatedTokens: 442
keywords: [client, build, applications, Bulk, API, sample, application, steps, part, code, included, end, Salesforce, Setup]
---

# Find Field Names

> After you set up your client, you can build client applications that use the Bulk API.
    Use the following sample to create a client application. Each section steps through part of the
    code. The complete sample is included at the end.

# Find Field Names

After you set up your client, you can build client applications that use the Bulk API. Use the following sample to create a client application. Each section steps through part of the code. The complete sample is included at the end.

You can:

-   Use the [describeSObjects()](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_calls_describesobjects.htm "HTML (New Window)") call in the SOAP API Developer Guide, or the [sObject Describe](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_sobject_describe.htm "HTML (New Window)") resource in the REST API Developer Guide.
-   Use Salesforce Setup.
-   Look up the object in [Object Reference](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_list.htm "HTML (New Window)"), which lists the field names, types, and descriptions by object.

## Use Salesforce Setup to Find Field names

To find an object’s field name in Salesforce Setup:

1.  From **Setup**, in the **Quick Find** box, enter Object Manager. Click **Object Manager**.
2.  Click on the object in the list.
3.  From the object’s management settings, click on **Fields & Relationships**.
4.  Click the field under Field Label to find the field name.

For a standard field, use the Field Name value as the field column header in your CSV file.

For a custom field, use the API Name value as the field column header in a CSV file or the field name identifier in an XML or JSON file. (To find the API Name, click the field name.)

#### See Also

-   [*Salesforce Help*: Find Object Management Settings](https://help.salesforce.com/HTViewHelpDoc?id=extend_click_find_objectmgmt_parent.htm&language=en_US)
