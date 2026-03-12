---
title: "Exposing Apex Classes as REST Web Services"
domain: apex-guide
topic: exposing-apex-classes-as-rest-web-services
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:33.892Z
estimatedTokens: 503
keywords: [Exposing, Apex, Classes, REST, Web, Services, expose, classes, external, applications, access, code, application, through, architecture., Tip]
---

# Exposing Apex Classes as REST Web Services

> You can expose your Apex classes and methods so that external applications can access
        your code and your application through the REST architecture.

# Exposing Apex Classes as REST Web Services

You can expose your Apex classes and methods so that external applications can access your code and your application through the REST architecture.

This is an overview of how to expose your Apex classes as REST web services. You'll learn about the class and method annotations and see code samples that show you how to implement this functionality.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=apexcode)

#### Tip

Apex SOAP web services allow an external application to invoke Apex methods through SOAP web services. See [Exposing Apex Methods as SOAP Web Services](atlas.en-us.apexcode.meta/apexcode/apex_web_services.htm#apex_web_services "You can expose your Apex methods as SOAP web services so that external applications can access your code and your application.").

-   **[Introduction to Apex REST](atlas.en-us.apexcode.meta/apexcode/apex_rest_intro.htm)**

-   **[Apex REST Annotations](atlas.en-us.apexcode.meta/apexcode/apex_rest_annotations_list.htm)**

-   **[Apex REST Methods](atlas.en-us.apexcode.meta/apexcode/apex_rest_methods.htm)**

-   **[Exposing Data with Apex REST Web Service Methods](atlas.en-us.apexcode.meta/apexcode/apex_rest_exposing_data.htm)**
    Invoking a custom Apex REST Web service method always uses system context. Consequently, the current user's credentials are not used, and any user who has access to these methods can use their full power, regardless of permissions, field-level security, or sharing rules. Developers who expose methods using the Apex REST annotations should therefore take care that they are not inadvertently exposing any sensitive data.
-   **[Apex REST Code Samples](atlas.en-us.apexcode.meta/apexcode/apex_rest_code_samples.htm)**


-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_web_services.htm "Exposing Apex Methods as SOAP Web Services")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_classes_email_inbound_what_is.htm "Apex Email Service")

## Related Topics

- Exposing Apex Methods as SOAP Web Services (atlas.en-us.apexcode.meta/apexcode/apex_web_services.htm)
- Introduction to Apex REST (atlas.en-us.apexcode.meta/apexcode/apex_rest_intro.htm)
- Apex REST Annotations (atlas.en-us.apexcode.meta/apexcode/apex_rest_annotations_list.htm)
- Apex REST Methods (atlas.en-us.apexcode.meta/apexcode/apex_rest_methods.htm)
- Exposing Data with Apex REST Web Service Methods (atlas.en-us.apexcode.meta/apexcode/apex_rest_exposing_data.htm)
- Apex REST Code Samples (atlas.en-us.apexcode.meta/apexcode/apex_rest_code_samples.htm)
- ← Previous (atlas.en-us.apexcode.meta/apexcode/apex_web_services.htm)
- Next → (atlas.en-us.apexcode.meta/apexcode/apex_classes_email_inbound_what_is.htm)
