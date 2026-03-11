---
title: "Exposing Data with Webservice Methods"
domain: apex-guide
topic: exposing-data-with-webservice-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:47.774Z
keywords: [Exposing, Data, Webservice, Methods, Warning]
---

# Exposing Data with Webservice Methods

# Exposing Data with Webservice Methods

Invoking a custom webservice method always uses system context. Consequently, the current user's credentials are not used, and any user who has access to these methods can use their full power, regardless of permissions, field-level security, or sharing rules. Developers who expose methods with the webservice keyword should therefore take care that they are not inadvertently exposing any sensitive data.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=apexcode)

#### Warning

Apex class methods that are exposed through the API with the webservice keyword don't enforce object permissions and field-level security by default. We recommend that you make use of the appropriate object or field describe result methods to check the current user’s access level on the objects and fields that the webservice method is accessing. See [DescribeSObjectResult Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_sobject_describe.htm) and [DescribeFieldResult Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_fields_describe.htm).

Also, sharing rules (record-level access) are enforced only when declaring a class with the with sharing keyword. This requirement applies to all Apex classes, including to classes that contain webservice methods. To enforce sharing rules for webservice methods, declare the class that contains these methods with the with sharing keyword. See [Use the with sharing, without sharing, and inherited sharing Keywords](atlas.en-us.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm "Use the with sharing or without sharing keywords on a class to specify whether sharing rules must be enforced. Use the inherited sharing keyword on a class to run the class in the sharing mode of the class that called it.").