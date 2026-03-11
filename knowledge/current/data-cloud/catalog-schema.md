---
title: "Catalog Schema"
domain: data-cloud
topic: catalog-schema
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:42.210Z
keywords: [Catalog, Schema, Note]
---

# Catalog Schema

# Catalog Schema

Map an Engagement Mobile SDK catalog event to the catalog schema.

| Source Event Property | Target Schema Developer Name | Field Type | Description | CIM Object / Attribute |
| --- | --- | --- | --- | --- |
| <Automatically Assigned> | eventId | text | Required. Typically the primary key for the engagement events. | Product Browse Engagement / Product Browse Engagement Id |
| <Automatically Assigned> | dateTime | datetime | Required. Used for data partitioning for engagement events. ISO8601 supported format. | Product Browse Engagement / Created Date, Last Modified Date, Engagement Date Time |
| <Automatically Assigned> | eventType = "catalog" | text | Required. The developerName of an event defined in the Web Connector schema. | - |
| <Automatically Assigned> | sessionId | text | Required. An identifier for a session. | - |
| <Automatically Assigned> | deviceId | text | Required. Typically the primary key for profile events. | Product Browse Engagement / Individual |
| <Automatically Assigned> | category = "Engagement" | text | Required. Possible values are:EngagementProfile | - |
| <Automatically Assigned> | interactionName: "View Catalog Object" \| "Comment Catalog Object" \| "View Catalog Object Detail" \| "Favorite Catalog Object" \| "Share Catalog Object" \| "Review Catalog Object" \| "Quick View Catalog Object" | text | Required. A descriptive name for the event. | Engagement / Engagement Channel Action |
| <Automatically Assigned> | channel = "mobile" | text | The SDK event channel. For Engagement Mobile SDK the value is mobile. | Engagement / Engagement Channel Type |
| catalogObject.type | type | text | Required. A type name representing the catalog object | - |
| catalogObject.id | id | text | Required. A unique identifier representing the catalog object. | Product Browse Engagement / Product |
| catalogObject.attributes.customField0 | attributeCustomField0 | any | A user-supplied value. | - |
| catalogObject.attributes.customFieldN | attributeCustomFieldN | any | A user-supplied value. | - |
| catalogObject.relatedCatalogObjects.Example | relatedCatalogObjectExample0 | any | The first value in a list of related catalog object identifiers. | - |
| - | relatedCatalogObjectExampleN | any | The n-th value in a list of related catalog object identifiers. | - |
| <Automatically Assigned if Location Tracking is allowed> | longitude | number | The longitudinal coordinate in decimal degrees reported by the device at the time the event was captured. | Engagement / Device Longitude |
| <Automatically Assigned if Location Tracking is allowed> | latitude | number | The latitudinal coordinate in decimal degrees reported by the device at the time the event was captured. | Engagement / Device Latitude |

![Note](/docs/resources/img/en-us/252.0?doc_id=images%2Ficon_note.png&folder=c360a_api)

#### Note

Properties added to catalogObject.attributes and catalogObject.relatedCatalogObjects aren’t automatically defined in the recommended schema. They’re shown to demonstrate how the source properties are mapped to the target schema. Manually add the properties to the schema.