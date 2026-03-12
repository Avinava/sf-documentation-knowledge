---
title: "Custom Address Fields"
domain: caf-dev-guide
topic: custom-address-fields
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:09.261Z
estimatedTokens: 529
keywords: [Custom, Address, store, data, structured, compound, abstraction, simplify, application, code, handles, leading, concise, understandable, addresses]
---

# Custom Address Fields

> Use the Address field type to create custom fields that store address data in a
    structured compound data type. Compound fields are an abstraction that can simplify application
    code that handles the values, leading to more concise, understandable code. With Custom Address
    Fields, custom addresses are accessible as a single, structured field, or as individual
    component fields.

# Custom Address Fields

Use the Address field type to create custom fields that store address data in a structured compound data type. Compound fields are an abstraction that can simplify application code that handles the values, leading to more concise, understandable code. With Custom Address Fields, custom addresses are accessible as a single, structured field, or as individual component fields.

| Available in: all editions |
| --- |


![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=caf_dev_guide)

#### Note

Before you enable custom address fields, review the [Custom Address Fields Requirements and Limitations](atlas.en-us.caf_dev_guide.meta/caf_dev_guide/caf_dev_limitations.htm "Before you enable Custom Address Fields, configure State and Country/Territory picklists and review the limitations of this feature."). To discuss the feature and ask questions, join the [Custom Address Fields Discussion](https://trailhead.salesforce.com/trailblazer-community/groups/0F94S000000H3KISA0) group on the Trailblazer Community.

Address compound fields are delivered for standard fields on standard objects. Now with Custom Address Fields, custom fields can mirror the standard address field behavior. End users can add and retrieve address data via these custom Address fields on standard and custom objects. Users can edit the custom address field data in records and view custom address data in list views and reports.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=caf_dev_guide)

#### Note

For custom compound fields, each component counts as one custom field toward your org’s allocations. Thus each custom address field counts as nine custom fields: one each for street, city, postal code, country code, state code, geocode accuracy level, longitude, and latitude, plus one for internal use. For more information on the allocations for your org, see [Salesforce Features and Edition Allocations](https://help.salesforce.com/s/articleView?id=xcloud.overview_limits_general.htm&type=5&language=en_US "HTML (New Window)") in Salesforce Help.

## Related Topics

- Custom Address Fields Requirements and Limitations (atlas.en-us.caf_dev_guide.meta/caf_dev_guide/caf_dev_limitations.htm)
