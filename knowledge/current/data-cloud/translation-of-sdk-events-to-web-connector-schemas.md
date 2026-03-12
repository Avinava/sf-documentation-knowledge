---
title: "Translation of SDK Events to Web Connector Schemas"
domain: data-cloud
topic: translation-of-sdk-events-to-web-connector-schemas
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:13.505Z
estimatedTokens: 7065
keywords: [Translation, SDK, Events, Web, Connector, Schemas, Understanding, how, Event, Structure, Salesforce, Interactions, converted, data, ingested]
---

# Translation of SDK Events to Web Connector Schemas

> Understanding how the Event Structure from the Salesforce Interactions SDK is converted
  into data that can be ingested into Data Cloud can be useful for troubleshooting
  instrumentation code. Knowing this can extend your schema to capture extra data not covered by the
  recommended schema.

# Translation of SDK Events to Web Connector Schemas

Understanding how the Event Structure from the Salesforce Interactions SDK is converted into data that can be ingested into Data Cloud can be useful for troubleshooting instrumentation code. Knowing this can extend your schema to capture extra data not covered by the recommended schema.

## Automatic Population of Required Data Cloud Fields

The Data Cloud event beacon currently requires six mandatory fields to be present on all events.

| Source Event Property | Target Schema Developer Name | Field Type | Description |
| --- | --- | --- | --- |
| - | category | text | Required. Use to define if the category is Engagement or Profile. |
| - | dateTime | datetime | Required. Supports yyyy-MM-ddTHH:mm:ss.SSSZ format only. Important for engagement events since they’re used for data partitioning. |
| - | deviceId | text | Required. The primary key for profile events. |
| - | eventId | text | Required. The primary key for engagement events. |
| - | eventType | text | Required. The developerName of an event defined in the Web Connector schema. |
| - | sessionId | text | Required. An identifier for a session. |

The Data Cloud Module automatically sets these fields on events sent to Data Cloud. You don’t have to specify them except in certain cases like Profile Event Routing or Custom Events when eventType can’t automatically be determined.

## Automatic Population of Salesforce Web SDK Fields

The Salesforce Interactions SDK automatically captures several fields as part of its [Event Structure](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_event_structure.htm "An event collected by Salesforce Interactions Web SDK contains properties that are automatically set by the system and optional properties that are set by you."). These fields are automatically attached to all profile and engagement events.

| Source Event Property | Target Schema Developer Name | Field Type | Description |
| --- | --- | --- | --- |
| interaction.name | interactionName | text | Required. A descriptive name for the interaction. |
| pageView | pageView | number | The Salesforce Interactions SDK assigns a value of either 1 (true) or 0 (false). The value indicates if an event was triggered as part of a page load or from the user interacting with the page. |
| source.channel | sourceChannel | text | The SDK channel the event was collected with. For the Salesforce Interactions SDK, this value is Web. |
| source.locale | sourceLocale | text | The locale of the current page as an ISO 639 alpha-2 language code and ISO 3166 alpha-2 country code. For example, en_US or de_DE. |
| source.pageType | sourcePageType | text | When an event is collected via the sitemap, this is the pageType of the matching configuration that triggered the event. |
| source.url | sourceUrl | text | The URL of the page the event is being sent from. |
| source.urlReferrer | sourceUrlReferrer | text | The previous URL visited by the user. |

## Cart Interaction Mapping

An Event Structure containing a [Cart Interaction](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_cart_interaction.htm "A cart interaction is where a customer modifies the contents of their online shopping cart.") is mapped to the following schema:

| Source Event Property | Target Schema Developer Name | Field Type | Description |
| --- | --- | --- | --- |
| - | category = "Engagement" | text | Required. Use to define if the category is Engagement or Profile. |
| - | dateTime | datetime | Required. Supports yyyy-MM-ddTHH:mm:ss.SSSZ format only. Important for engagement events since they’re used for data partitioning. |
| - | deviceId | text | Required. The primary key for profile events. |
| - | eventId | text | Required. The primary key for engagement events. |
| - | eventType = "cart" | text | Required. The developerName of an event defined in the Web Connector schema. |
| - | sessionId | text | Required. An identifier for a session. |
| interaction.name | interactionName | text | Required. A descriptive name for the interaction. |
| pageView | pageView | number | The Salesforce Interactions SDK assigns a value of either 1 (true) or 0 (false). The value indicates if an event was triggered as part of a page load or from the user interacting with the page. |
| source.channel | sessionId | text | The SDK channel the event was collected with. For the Salesforce Interactions SDK, this value is Web. |
| source.locale | sourceLocale | text | The locale of the current page as an ISO 639 alpha-2 language code and ISO 3166 alpha-2 country code. For example, en_US or de_DE. |
| source.pageType | sourcePageType | text | When an event is collected via the sitemap, this is the pageType of the matching configuration that triggered the event. |
| source.url | sourceUrl | text | The URL of the page the event is being sent from. |
| source.urlReferrer | sourceUrlReferrer | text | The previous URL visited by the user. |

Each [Line Item Data](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_line_item_data.htm "Line items are intended to describe purchasable items and are used in cart and order interactions.") contained in the [Cart Interaction](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_cart_interaction.htm "A cart interaction is where a customer modifies the contents of their online shopping cart.") fields interaction.lineItem or interaction.lineItems gets mapped to a child event where cartEventId is set to the eventId of the parent cart event:

| Source Event Property | Target Schema Developer Name | Field Type | Description |
| --- | --- | --- | --- |
| - | cartEventId | text | Required. The eventId of the Cart Event containing this line item. |
| - | category = "Engagement" | text | Required. Use to define if the category is Engagement or Profile. |
| - | dateTime | datetime | Required. Supports yyyy-MM-ddTHH:mm:ss.SSSZ format only. Important for engagement events since they’re used for data partitioning. |
| - | deviceId | text | Required. The primary key for profile events. |
| - | eventId | text | Required. The primary key for engagement events. |
| - | eventType = "cartItem" | text | Required. The developerName of an event defined in the Web Connector schema. |
| - | sessionId | text | Required. An identifier for a session. |
| lineItem.attributes.customFieldN | attributeCustomFieldN | any | A user-supplied value. |
| lineItem.attributes.customField0 | attributeCustomField0 | any | A user-supplied value. |
| lineItem.catalogObjectId | catalogObjectId | text | Required. A unique identifier representing the catalog object referenced in the line item. |
| lineItem.catalogObjectType | catalogObjectType | text | Required. A type name representing the catalog object referenced in the line item. |
| lineItem.currency | currency | text | The currency for the price field. |
| lineItem.price | price | number | The price of the catalog object referenced in the line item. |
| lineItem.quantity | quantity | number | The number of catalog objects in this line item. |

![Note](/docs/resources/img/en-us/252.0?doc_id=images%2Ficon_note.png&folder=c360a_api)

#### Note

Properties added to lineItem.attributes aren’t automatically defined in the recommended schema. To capture this data, manually add these properties to the schema. These properties are shown here just to demonstrate how the source properties are mapped to the target schema.

## Catalog Interaction Mapping

An [Event Structure](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_event_structure.htm "An event collected by Salesforce Interactions Web SDK contains properties that are automatically set by the system and optional properties that are set by you.") containing a [Catalog Interaction](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_catalog_interaction.htm "Use a catalog interaction to capture when a customer interacts with various tracking items. For example, a product or a blog post.") is mapped to the following schema:

| Source Event Property | Target Schema Developer Name | Field Type | Description |
| --- | --- | --- | --- |
| - | category = "Engagement" | text | Required. Use to define if the category is Engagement or Profile. |
| - | dateTime | datetime | Required. Supports yyyy-MM-ddTHH:mm:ss.SSSZ format only. Important for engagement events since they’re used for data partitioning. |
| - | deviceId | text | Required. The primary key for profile events. |
| - | eventId | text | Required. The primary key for engagement events. |
| - | eventType = "catalog" | text | Required. The developerName of an event defined in the Web Connector schema. |
| - | sessionId | text | Required. An identifier for a session. |
| interaction.catalogObject.attributes.customFieldN | attributeCustomFieldN | any | A user-supplied value. |
| interaction.catalogObject.attributes.customField0 | attributeCustomField0 | any | A user-supplied value. |
| interaction.catalogObject.id | id | text | Required. A unique id representing the catalog object. |
| interaction.catalogObject.relatedCatalogObjects.Example | relatedCatalogObjectExample0 | any | The first value in a list of related catalog object ids. |
| interaction.catalogObject.type | type | text | Required. A type name representing the catalog object. |
| interaction.name | interactionName | text | Required. A descriptive name for the interaction. |
| pageView | pageView | number | The Salesforce Interactions SDK assigns a value of either 1 (true) or 0 (false). The value indicates if an event was triggered as part of a page load or from the user interacting with the page. |
| source.channel | sessionId | text | The SDK channel the event was collected with. For the Salesforce Interactions SDK, this value is Web. |
| source.locale | sourceLocale | text | The locale of the current page as an ISO 639 alpha-2 language code and ISO 3166 alpha-2 country code. For example, en_US or de_DE. |
| source.pageType | sourcePageType | text | When an event is collected via the sitemap, this is the pageType of the matching configuration that triggered the event. |
| source.url | sourceUrl | text | The URL of the page the event is being sent from. |
| source.urlReferrer | sourceUrlReferrer | text | The previous URL visited by the user. |
| ... | relatedCatalogObjectExampleN | any | The nth value in a list of related catalog object ids. |

![Note](/docs/resources/img/en-us/252.0?doc_id=images%2Ficon_note.png&folder=c360a_api)

#### Note

Properties added to interaction.catalogObject.attributes and interaction.catalogObject.relatedCatalogObjects aren’t automatically defined in the recommended schema. To capture this data, manually add these properties to the schema. These properties are shown here just to demonstrate how the source properties are mapped to the target schema.

## Order Interaction Mapping

An [Event Structure](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_event_structure.htm "An event collected by Salesforce Interactions Web SDK contains properties that are automatically set by the system and optional properties that are set by you.") containing an [Order Interaction](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_order_interaction.htm "An order interaction is an ecommerce event that captures actions performed by a user to manage new, in progress, or completed orders.") is mapped to the following schema:

| Source Event Property | Target Schema Developer Name | Field Type | Description |
| --- | --- | --- | --- |
| - | category = "Engagement" | text | Required. Use to define if the category is Engagement or Profile. |
| - | dateTime | datetime | Required. Supports yyyy-MM-ddTHH:mm:ss.SSSZ format only. Important for engagement events since they’re used for data partitioning. |
| - | deviceId | text | Required. The primary key for profile events. |
| - | eventId | text | Required. The primary key for engagement events. |
| - | eventType = "order" | text | Required. The developerName of an event defined in the Web Connector schema. |
| - | sessionId | text | Required. An identifier for a session. |
| interaction.name | interactionName | text | Required. A descriptive name for the interaction. |
| interaction.order.currency | orderCurrency | text | The currency of the total value for the order. |
| interaction.order.attributes.customFieldN | attributeCustomFieldN | any | A user-supplied value. |
| interaction.order.attributes.customField0 | attributeCustomField0 | any | A user-supplied value. |
| interaction.order.id | orderId | text | A unique identifier representing the order. |
| interaction.order.totalValue | orderTotalValue | number | The total value of the order. |
| pageView | pageView | number | The Salesforce Interactions SDK assigns a value of either 1 (true) or 0 (false). The value indicates if an event was triggered as part of a page load or from the user interacting with the page. |
| source.channel | sessionId | text | The SDK channel the event was collected with. For the Salesforce Interactions SDK, this value is Web. |
| source.locale | sourceLocale | text | The locale of the current page as an ISO 639 alpha-2 language code and ISO 3166 alpha-2 country code. For example, en_US or de_DE. |
| source.pageType | sourcePageType | text | When an event is collected via the sitemap, this is the pageType of the matching configuration that triggered the event. |
| source.url | sourceUrl | text | The URL of the page the event is being sent from. |
| source.urlReferrer | sourceUrlReferrer | text | The previous URL visited by the user. |

Each [Line Item Data](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_line_item_data.htm "Line items are intended to describe purchasable items and are used in cart and order interactions.") contained in the [Order Interaction](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_order_interaction.htm "An order interaction is an ecommerce event that captures actions performed by a user to manage new, in progress, or completed orders.") field interaction.order.lineItems gets mapped to a child event where orderEventId is set to the eventId of the parent order order event:

| Source Event Property | Target Schema Developer Name | Field Type | Description |
| --- | --- | --- | --- |
| - | category = "Engagement" | text | Required. Use to define if the category is Engagement or Profile. |
| - | dateTime | datetime | Required. Supports yyyy-MM-ddTHH:mm:ss.SSSZ format only. Important for engagement events since they’re used for data partitioning. |
| - | eventId | text | Required. The primary key for engagement events. |
| - | eventType = "order" | text | Required. The developerName of an event defined in the Web Connector schema. |
| - | deviceId | text | Required. The primary key for profile events. |
| - | orderEventId | text | Required. The eventId of the Order Event containing this line item. |
| - | sessionId | text | Required. An identifier for a session. |
| lineItem.attributes.customFieldN | attributeCustomFieldN | any | A user-supplied value. |
| lineItem.attributes.customField0 | attributeCustomField0 | any | A user-supplied value. |
| lineItem.catalogObjectId | catalogObjectId | text | Required. A unique identifier representing the catalog object referenced in the line item. |
| lineItem.catalogObjectType | catalogObjectType | text | Required. A type name representing the catalog object referenced in the line item. |
| lineItem.currency | currency | text | The currency for the price field. |
| lineItem.price | price | number | The price of the catalog object referenced in the line item. |
| lineItem.quantity | quantity | number | The number of catalog objects in this line item. |

![Note](/docs/resources/img/en-us/252.0?doc_id=images%2Ficon_note.png&folder=c360a_api)

#### Note

The properties added to lineItem.attributes aren’t automatically defined in the recommended schema. To capture this data, manually add these properties to the schema.These properties are shown here just to demonstrate how the source properties are mapped to the target schema.

## Consent Event Mapping

Each [Consent Data](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_consent_data.htm "Consent data is used to either grant or revoke consent in Salesforce Interactions SDK. When a customer chooses to opt in to tracking these consent details are attached to the Event Structure of the first tracked event.") contained in the [Event Structure](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_event_structure.htm "An event collected by Salesforce Interactions Web SDK contains properties that are automatically set by the system and optional properties that are set by you.") consents field are mapped to the following schema:

| Source Event Property | Target Schema Developer Name | Field Type | Description |
| --- | --- | --- | --- |
| - | category = "Engagement" | text | Required. Use to define if the category is Engagement or Profile. |
| - | dateTime | datetime | Required. Supports yyyy-MM-ddTHH:mm:ss.SSSZ format only. Important for engagement events since they’re used for data partitioning. |
| - | deviceId | text | Required. The primary key for profile events. |
| - | eventId | text | Required. The primary key for engagement events. |
| - | eventType = "consentLog" | text | Required. The developerName of an event defined in the Web Connector schema. |
| - | sessionId | text | Required. An identifier for a session. |
| consent.provider | provider | text | Required. A named identifier indicating the consent management system providing the consent to the SDK. |
| consent.purpose | purpose | text | What the user is consenting to. For example, tracking. |
| consent.status | status | text | Values: Opt In or Opt Out |

## Profile Event Mapping

An [Event Structure](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_event_structure.htm "An event collected by Salesforce Interactions Web SDK contains properties that are automatically set by the system and optional properties that are set by you.") containing a [User Data](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_user_data.htm "Track profile data for a user with or without an associated interaction using Salesforce Interactions Web SDK.") is mapped to the following schema:

| Source Event Property | Target Schema Developer Name | Field Type | Description |
| --- | --- | --- | --- |
| - | category = "Profile" | text | Required. Use to define if the category is Engagement or Profile. |
| - | dateTime | datetime | Required. Supports yyyy-MM-ddTHH:mm:ss.SSSZ format only. Important for engagement events since they’re used for data partitioning. |
| - | deviceId | text | Required. The primary key for profile events. |
| - | eventId | text | Required. The primary key for engagement events. |
| - | sessionId | text | Required. An identifier for a session. |
| interaction.name | interactionName | text | Required. A descriptive name for the interaction |
| pageView | pageView | text | The Salesforce Interactions SDK sets a true or false value. The value indicates if an event was triggered as part of a page load or from the user interacting with the page. |
| source.channel | sessionId | text | The SDK channel the event was collected with. For the Salesforce Interactions SDK, this value is Web. |
| source.locale | sourceLocale | text | The locale of the current page as an ISO 639 alpha-2 language code and ISO 3166 alpha-2 country code. For example, en_US or de_DE. |
| source.pageType | sourcePageType | text | When an event is collected via the sitemap, this is the pageType of the matching configuration that triggered the event. |
| source.url | sourceUrl | text | The URL of the page the event is being sent from. |
| source.urlReferrer | sourceUrlReferrer | text | The previous URL visited by the user. |
| user.attributes.customFieldN | customFieldN | any | A user-supplied value. |
| user.attributes.customField0 | customField0 | any | A user-supplied value. |
| user.attributes.eventType | eventType | text | Required. The developerName of an event defined in the Web Connector schema. |

![Note](/docs/resources/img/en-us/252.0?doc_id=images%2Ficon_note.png&folder=c360a_api)

#### Note

Properties added to the user.attributes.eventType field are required.

## Contact Point Email Mapping

| Source Event Property | Target Schema Developer Name | Field Type | Description |
| --- | --- | --- | --- |
| - | dateTime | datetime | Required. Supports yyyy-MM-ddTHH:mm:ss.SSSZ format only. Important for engagement events since they’re used for data partitioning. |
| - | eventId | text | Required. The primary key for engagement events. |
| user.attributes.eventType | eventType = "contactPointEmail" | text | Required. The developerName of an event defined in the Web Connector schema. |
| - | sessionId | text | Required. An identifier for a session. |
| - | deviceId | text | Required. The primary key for profile events. |
| - | category = "Profile" | text | Required. Use to define if the category is Engagement or Profile. |
| interaction.name | interactionName | text | Required. A descriptive name for the interaction |
| pageView | pageView | number | The Salesforce Interactions SDK assigns a value of either 1 (true) or 0 (false). The value indicates if an event was triggered as part of a page load or from the user interacting with the page. |
| source.channel | sessionId | text | The SDK channel the event was collected with. For the Salesforce Interactions SDK, this value is Web. |
| source.locale | sourceLocale | text | The locale of the current page as an ISO 639 alpha-2 language code and ISO 3166 alpha-2 country code. For example, en_US or de_DE. |
| source.pageType | sourcePageType | text | When an event is collected via the sitemap, this is the pageType of the matching configuration that triggered the event. |
| source.url | sourceUrl | text | The URL of the page the event is being sent from. |
| source.urlReferrer | sourceUrlReferrer | text | The previous URL visited by the user. |
| user.attributes.email | email | text | The email address of the user. |
| user.attributes.eventType | eventType = "contactPointEmail" | text | Required. The developerName of an event defined in the Web Connector schema. |

## Contact Point Phone Mapping

| Source Event Property | Target Schema Developer Name | Field Type | Description |
| --- | --- | --- | --- |
| - | category = "Profile" | text | Required. Use to define if the category is Engagement or Profile. |
| - | dateTime | datetime | Required. Supports yyyy-MM-ddTHH:mm:ss.SSSZ format only. Important for engagement events since they’re used for data partitioning. |
| - | deviceId | text | Required. The primary key for profile events. |
| - | eventId | text | Required. The primary key for engagement events. |
| - | sessionId | text | Required. An identifier for a session. |
| interaction.name | interactionName | text | Required. A descriptive name for the interaction |
| pageView | pageView | number | The Salesforce Interactions SDK assigns a value of either 1 (true) or 0 (false). The value indicates if an event was triggered as part of a page load or from the user interacting with the page. |
| source.channel | sessionId | text | The SDK channel the event was collected with. For the Salesforce Interactions SDK, this value is Web. |
| source.locale | sourceLocale | text | The locale of the current page as an ISO 639 alpha-2 language code and ISO 3166 alpha-2 country code. For example, en_US or de_DE. |
| source.pageType | sourcePageType | text | When an event is collected via the sitemap, this is the pageType of the matching configuration that triggered the event. |
| source.url | sourceUrl | text | The URL of the page the event is being sent from. |
| source.urlReferrer | sourceUrlReferrer | text | The previous URL visited by the user. |
| user.attributes.eventType | eventType = "contactPointPhone" | text | Required. The developerName of an event defined in the Web Connector schema. |
| user.attributes.phoneNumber | phoneNumber | text | Required. The phone number for the user. |

## Identity Mapping

| Source Event Property | Target Schema Developer Name | Field Type | Description |
| --- | --- | --- | --- |
| - | category = "Profile" | text | Required. Use to define if the category is Engagement or Profile. |
| - | dateTime | datetime | Required. Supports yyyy-MM-ddTHH:mm:ss.SSSZ format only. Important for engagement events since they’re used for data partitioning. |
| - | deviceId | text | Required. The primary key for profile events. |
| - | eventId | text | Required. The primary key for engagement events. |
| - | sessionId | text | Required. An identifier for a session. |
| interaction.name | interactionName | text | Required. A descriptive name for the interaction |
| pageView | pageView | number | The Salesforce Interactions SDK assigns a value of either 1 (true) or 0 (false). The value indicates if an event was triggered as part of a page load or from the user interacting with the page. |
| source.channel | sessionId | text | The SDK channel the event was collected with. For the Salesforce Interactions SDK, this value is Web. |
| source.locale | sourceLocale | text | The locale of the current page as an ISO 639 alpha-2 language code and ISO 3166 alpha-2 country code. For example, en_US or de_DE. |
| source.pageType | sourcePageType | text | When an event is collected via the sitemap, this is the pageType of the matching configuration that triggered the event. |
| source.url | sourceUrl | text | The URL of the page the event is being sent from. |
| source.urlReferrer | sourceUrlReferrer | text | The previous URL visited by the user. |
| user.attributes.eventType | eventType = "identity" | text | Required. The developerName of an event defined in the Web Connector schema. |
| user.attributes.firstName | firstName | text | Required. The user’s first name. |
| user.attributes.isAnonymous | isAnonymous | text | Required. A value that indicates whether this profile event identifies a known user or an anonymous user. For example, a value of 0 to indicate an anonymous user and 1 to indicate a known user. |
| user.attributes.lastName | lastName | text | Required. The user’s last name. |

## Party Identification Mapping

| Source Event Property | Target Schema Developer Name | Field Type | Description |
| --- | --- | --- | --- |
| - | category = "Profile" | text | Required. Use to define if the category is Engagement or Profile. |
| - | dateTime | datetime | Required. Supports yyyy-MM-ddTHH:mm:ss.SSSZ format only. Important for engagement events since they’re used for data partitioning. |
| - | deviceId | text | Required. The primary key for profile events. |
| - | eventId | text | Required. The primary key for engagement events. |
| - | sessionId | text | Required. An identifier for a session. |
| interaction.name | interactionName | text | Required. A descriptive name for the interaction |
| pageView | pageView | number | The Salesforce Interactions SDK assigns a value of either 1 (true) or 0 (false). The value indicates if an event was triggered as part of a page load or from the user interacting with the page. |
| source.channel | sessionId | text | The SDK channel the event was collected with. For the Salesforce Interactions SDK, this value is Web. |
| source.locale | sourceLocale | text | The locale of the current page as an ISO 639 alpha-2 language code and ISO 3166 alpha-2 country code. For example, en_US or de_DE. |
| source.pageType | sourcePageType | text | When an event is collected via the sitemap, this is the pageType of the matching configuration that triggered the event. |
| source.url | sourceUrl | text | The URL of the page the event is being sent from. |
| source.urlReferrer | sourceUrlReferrer | text | The previous URL visited by the user. |
| user.attributes.eventType | eventType = "partyIdentification" | text | The developerName of an event defined in the Web Connector schema |
| user.attributes.IDNameWeb | IDNameWeb | text | Required. The party identification name. |
| user.attributes.IDType | IDType | text | Required. The party identification type. |
| user.attributes.userId | userId | text | Required. The user identifier in the party. |

## Related Topics

- Event Structure (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_event_structure.htm)
- Cart
     Interaction (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_cart_interaction.htm)
- Line Item Data (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_line_item_data.htm)
- Cart Interaction (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_cart_interaction.htm)
- Catalog Interaction (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_catalog_interaction.htm)
- Order Interaction (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_order_interaction.htm)
- Consent Data (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_consent_data.htm)
- User Data (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_user_data.htm)
