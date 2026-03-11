---
title: "Getting Information About My Organization"
domain: rest-api
topic: getting-information-about-my-organization
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:44:25.833Z
keywords: [Getting, Information, Organization]
---

# Getting Information About My Organization

# Getting Information About My Organization

The examples in this section use REST API resources to retrieve organization-level information, such as a list of all objects available in your organization.

-   **[List Available REST API Versions](atlas.en-us.api_rest.meta/api_rest/dome_versions.htm)**  
    Use the Versions resource to list summary information about each REST API version currently available, including the version, label, and a link to each version's root. You don’t need authentication to retrieve the list of versions.
-   **[List Org Limits](atlas.en-us.api_rest.meta/api_rest/dome_limits.htm)**  
    Use the \*\*\* resource to list your org limits.
-   **[List Available REST Resources](atlas.en-us.api_rest.meta/api_rest/dome_discoveryresource.htm)**  
    Use the \*\*\* resource to list the resources available for the specified API version. This provides the name and URI of each additional resource.
-   **[Get a List of Objects](atlas.en-us.api_rest.meta/api_rest/dome_describeGlobal.htm)**  
    Use the Describe Global resource to list the objects available in your org and available to the logged-in user. This resource also returns the org encoding, as well as maximum batch size permitted in queries.
-   **[Get a List of Objects If Metadata Has Changed](atlas.en-us.api_rest.meta/api_rest/describe_global_with_ifmodified_header.htm)**  
    Use the Describe Global resource and the If-Modified-Since HTTP header to determine if an object’s metadata has changed.

-   [Next →](atlas.en-us.api_rest.meta/api_rest/using_resources_working_with_object_metadata.htm "Working with Object Metadata")