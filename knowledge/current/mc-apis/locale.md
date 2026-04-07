---
title: "Locale"
domain: mc-apis
topic: locale
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:17.809Z
estimatedTokens: 536
keywords: [Locale, specific, application, gives, location, subscriber, precedence, Items]
---

> The Locale object represents a specific locale in the application and gives the location of a subscriber. If both a locale ID and a locale name are given, the ID takes precedence.

# Locale

The Locale object represents a specific locale in the application and gives the location of a subscriber. If both a locale ID and a locale name are given, the ID takes precedence.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| Client | ClientID | Specifies the account ownership and context of an object. |
| CorrelationID | xsd:string | Identifies correlation of objects across several requests. |
| CreatedDate | xsd:dateTime | Read-only date and time of the object's creation. |
| CustomerKey | xsd:string | User-supplied unique identifier for an object within an object type. This property corresponds to the external key assigned to an object in Marketing Cloud. |
| ID | xsd:int | Read-only identifier for an object. Some objects use the ObjectID property as the Marketing Cloud unique ID. |
| LocaleCode | xsd:string | The name of the locale. This property accepts either a two-character locale code or a five-character locale code, with two sets of letters separated by a dash. In the latter case, the first two letters represent the language to be used, and the last two letters represent the country where the subscriber is located. For example, en-US represents English and United States, while es-ES represents Spanish and Spain. |
| ModifiedDate | Nullable`1 | Indicates the last time object information was modified. |
| ObjectID | xsd:string | System-controlled, read-only text string identifier for object. |
| ObjectState | xsd:string | Reserved for future use. |
| Owner | Owner | Describes account ownership of subscriber in an on-your-behalf account. |
| PartnerKey | xsd:string | Unique identifier provided by partner for an object. This property is accessible only via API. |
| PartnerProperties | APIProperty[] | A collection of metadata supplied by the client and stored by the system. These properties are accessible only via API. |

## Related Items

-   [English Country Names and Code Elements](http://www.iso.org/iso/english_country_names_and_code_elements)
-   [Five-Character Locale Code](http://msdn.microsoft.com/en-us/library/system.globalization.cultureinfo\(VS.80\).aspx)
