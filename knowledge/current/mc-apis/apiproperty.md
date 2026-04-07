---
title: "APIProperty"
domain: mc-apis
topic: apiproperty
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:20.150Z
estimatedTokens: 260
keywords: [APIProperty, associates, pair, none, objects, associated, provide, DataExtension, Items]
---

# APIProperty

> The APIProperty object associates more information about an object in a name/value pair. An object can have none, one, or many APIProperty objects associated with it. Use this property to provide information for values on a DataExtension object.

# APIProperty

The APIProperty object associates more information about an object in a name/value pair. An object can have none, one, or many APIProperty objects associated with it. Use this property to provide information for values on a DataExtension object.

Use the PartnerProperties property on an APIObject to define the information available via the APIProperty. PartnerProperties can be created and retrieved. A PartnerProperties cannot be used as a filter value for a RetrieveRequest.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| Name | xsd:string | Name of the object or property. |
| Value | xsd:string | Defines value to be used in filter or other object. In filters, the BETWEEN operator requires two Values. IN can handle multiple Values. All other operators require only one Value. isNull and isNotNull ignores any supplied values and don't return an error. |

## Related Items

[Add Data to a Data Extension](atlas.en-us.noversion.mc-apis.meta/mc-apis/adding_data_to_data_extension_object.htm)

## Related Topics

- Add Data to a Data Extension (atlas.en-us.noversion.mc-apis.meta/mc-apis/adding_data_to_data_extension_object.htm)
