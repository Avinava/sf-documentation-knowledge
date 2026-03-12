---
title: "Tooling API
      Objects and Namespaces"
domain: tooling-api
topic: tooling-api-objects-and-namespaces
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:44.396Z
estimatedTokens: 1105
namespace: Used
keywords: [Tooling, API, Objects, Namespaces, objects, provide, programmatic, access, data, metadata., WSDL, includes, four, namespaces., Quick-Reference, Tables, System, Fields, SOQL, Limitations]
---

# Tooling API
      Objects and Namespaces

> Tooling API objects provide
    programmatic access to data and metadata. The Tooling API WSDL includes four namespaces.

**Namespace:** `Used`

# Tooling API Objects and Namespaces

Tooling API objects provide programmatic access to data and metadata. The Tooling API WSDL includes four namespaces.

| Namespace | Used for | Prefix |
| --- | --- | --- |
| sobject.tooling.soap.sforce.com | Tooling API sObjects. Some sObjects have a Metadata field defined in the mns namespace.This namespace is available in API version 37.0 and later. | ens |
| fault.tooling.soap.sforce.com | Tooling API error codes.This namespace is available in API version 37.0 and later. | fns |
| tooling.soap.sforce.com | General complex types, describe results, and all enum types in the Tooling API. | tns |
| metadata.tooling.soap.sforce.com | Objects and types that occur in both the Metadata API WSDL and the Tooling API WSDL. Elements in the two WSDLs might be defined differently. | mns |

Objects and types that are identical in the Tooling API and Metadata API WSDLs are documented in the Metadata API Developer Guide.

Objects and types that are different in the Tooling API WSDL or occur only in the Tooling API WSDL are documented in this guide.

Frequently occurring system fields are described in [System Fields](atlas.en-us.api_tooling.meta/api_tooling/tooling_system_fields.htm "Some fields are system-generated. They are on most Tooling API objects, and are read-only."). You can verify the complete list of fields for an object by generating and reviewing the Tooling API WSDL.

## Object Quick-Reference Tables, System Fields, and SOQL Limitations

Learn about objects, system fields that occur on most objects, and SOQL limitations that apply to some objects in Tooling API. An alphabetical list of objects is also available.

-   **[SOQL Operation Limitations](atlas.en-us.api_tooling.meta/api_tooling/reference_objects_soql_limits.htm)**
    Some Tooling API objects have SOQL limitations. These limitations apply to any Metadata Catalog query, which applies to all Custom Metadata Types and Metadata Catalog entities, not only the ones explicitly listed.
-   **[SOSL Operation Limitations](atlas.en-us.api_tooling.meta/api_tooling/reference_objects_sosl_limits.htm)**
    Two Tooling API objects, EntityDefinition and FieldDefinition, have some SOSL limitations. ExternalString and MetadataComponentDependency (Beta) don’t support SOSL searches.
-   **[Considerations for CRUD Operations in Active Orgs](atlas.en-us.api_tooling.meta/api_tooling/intro_crud_operations.htm)**
    CRUD operations on most Tooling API objects are allowed in active orgs in API version 41.0 and later, just as they are in other kinds of orgs. However, for performance reasons you can’t perform CRUD operations in an active org for some Tooling API objects.
-   **[Allow Metadata Save Operations to Complete with Returned Warnings](atlas.en-us.api_tooling.meta/api_tooling/tooling_metadata_save_warning.htm)**
    When a metadata save operation generates warnings, the default behavior of Tooling API is to fail the operation without returning the warnings. For objects in both the Tooling API and Metadata API WSDLs, you can indicate that you want error-free save operations to complete successfully, returning any warnings.
-   **[System Fields](atlas.en-us.api_tooling.meta/api_tooling/tooling_system_fields.htm)**
    Some fields are system-generated. They are on most Tooling API objects, and are read-only.
-   **[ApiFault Element](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_Fault_set.htm)**
    An ApiFault element contains information about a fault that occurs when processing a service request.
-   **[Programming Objects](atlas.en-us.api_tooling.meta/api_tooling/reference_objects_programming.htm)**
    Use programming objects to interact with programmatic artifacts: Apex, Visualforce, and Lightning.
-   **[Setup Objects](atlas.en-us.api_tooling.meta/api_tooling/reference_objects_setup.htm)**
    Use setup objects to interact with metadata for declarative development. For example, you can create your own version of Setup, or restrict the amount of data required to push to an app to a mobile phone.
-   **[Tooling Objects](atlas.en-us.api_tooling.meta/api_tooling/reference_objects_tooling.htm)**
    Use these objects to build tools around test results, debugging, code coverage, and more.
-   **[Operational Objects](atlas.en-us.api_tooling.meta/api_tooling/reference_objects_operational.htm)**
    Use the following objects for Tooling API operations.

## Related Topics

- System Fields (atlas.en-us.api_tooling.meta/api_tooling/tooling_system_fields.htm)
- SOQL Operation Limitations (atlas.en-us.api_tooling.meta/api_tooling/reference_objects_soql_limits.htm)
- SOSL Operation Limitations (atlas.en-us.api_tooling.meta/api_tooling/reference_objects_sosl_limits.htm)
- Considerations for CRUD Operations in Active Orgs (atlas.en-us.api_tooling.meta/api_tooling/intro_crud_operations.htm)
- Allow Metadata Save Operations to Complete with Returned Warnings (atlas.en-us.api_tooling.meta/api_tooling/tooling_metadata_save_warning.htm)
- ApiFault Element (atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_Fault_set.htm)
- Programming Objects (atlas.en-us.api_tooling.meta/api_tooling/reference_objects_programming.htm)
- Setup Objects (atlas.en-us.api_tooling.meta/api_tooling/reference_objects_setup.htm)
- Tooling Objects (atlas.en-us.api_tooling.meta/api_tooling/reference_objects_tooling.htm)
- Operational Objects (atlas.en-us.api_tooling.meta/api_tooling/reference_objects_operational.htm)
