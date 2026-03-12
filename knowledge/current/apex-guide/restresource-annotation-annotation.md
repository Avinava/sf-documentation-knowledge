---
title: "RestResource Annotation Annotation"
domain: apex-guide
topic: restresource-annotation-annotation
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:33:32.530Z
estimatedTokens: 375
keywords: [RestResource, Annotation, @RestResource, level, expose, Apex, REST, resource, URL, Guidelines]
---

# RestResource Annotation Annotation

> The @RestResource annotation is used at
    the class level and enables you to expose an Apex class as a REST
    resource.

# RestResource Annotation Annotation

The @RestResource annotation is used at the class level and enables you to expose an Apex class as a REST resource.

Some considerations when using this annotation:

-   The URL mapping is relative to https://instance.salesforce.com/services/apexrest/.
-   The URL mapping can contain a wildcard (\*).
-   The URL mapping is case-sensitive. For example, a URL mapping for my\_url matches a REST resource containing my\_url and not My\_Url.
-   To use this annotation, your Apex class must be defined as global.

## URL Guidelines

URL path mappings are as follows:

-   The path must begin with a forward slash (/).
-   The path can be up to 255 characters long.
-   A wildcard (\*) that appears in a path must be preceded by a forward slash (/). Additionally, unless the wildcard is the last character in the path, it must be followed by a forward slash (/).

The rules for mapping URLs are:

-   An exact match always wins.
-   If no exact match is found, find all the patterns with wildcards that match, and then select the longest (by string length) of those.
-   If no wildcard match is found, an HTTP response status code 404 is returned.

The URL for a namespaced class contains the namespace. For example, if your class is in namespace abc and the class is mapped to your\_url, then the API URL is modified as follows: https://instance.salesforce.com/services/apexrest/abc/your\_url/. In the case of a URL collision, the namespaced class is always used.
