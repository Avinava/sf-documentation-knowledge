---
title: "id_verification Namespace"
domain: health-cloud-object-reference
topic: idverification-namespace
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:32.704Z
estimatedTokens: 1653
namespace: The
keywords: [id_verification, classes, Health, Cloud, verify, caller’s, identity, _verification]
---

# id_verification Namespace

> The id_verification namespace
      provides an interface and classes for Health Cloud to verify the caller’s
    identity.

**Namespace:** `The`

# id\_verification Namespace

The id\_verification namespace provides an interface and classes for Health Cloud to verify the caller’s identity.

For example, the call center agent can ask the person to confirm their social security number, birth date, insurance details, or driver’s license number.

The person contacting the call center could be a patient, a parent or guardian if the patient’s a minor, the authorized representative of a patient, or a provider. No matter who the caller is, if they want sensitive information, an agent must verify the caller’s identity first. If the inquiry concerns information in the public domain (for example, the location of a hospital), then verification isn’t required.

The following are the classes in the id\_verification namespace.

-   **[FieldValue Class](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_FieldValue.htm#apex_class_id_verification_FieldValue)**
    Contains a key-value pair represented by the developer name and value of the field. The key-value pair is used for both search results and verification.
-   **[IdentityVerificationExt Interface](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_interface_id_verification_IdentityVerificationExt.htm#apex_interface_id_verification_IdentityVerificationExt)**
    The IdentityVerificationExt interface enables you to verify a caller’s identity.
-   **[ProcessDefinition Class](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_ProcessDefinition.htm#apex_class_id_verification_ProcessDefinition)**
    Contains the verification process definition, including the list of process details.
-   **[ProcessDetail Class](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_ProcessDetail.htm#apex_class_id_verification_ProcessDetail)**
    Contains the verification process details.
-   **[SearchFilter Class](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchFilter.htm#apex_class_id_verification_SearchFilter)**
    Contains data filters that is applied in object-based search.
-   **[SearchFilters Class](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchFilters.htm#apex_class_id_verification_SearchFilters)**
    Contains a list of data filters to be applied for object-based search.
-   **[SearchRequest Class](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchRequest.htm#apex_class_id_verification_SearchRequest)**
    Contains information about the search request data. The search request represents search filters for object-based search, search terms for text-based search, and the verification context that includes the process definition, process details, and process fields.
-   **[SearchResult Class](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchResult.htm#apex_class_id_verification_SearchResult)**
    Contains the contract of search results in tabular format for either the object-based or text-based search.
-   **[SearchResultHeader Class](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchResultHeader.htm#apex_class_id_verification_SearchResultHeader)**
    Contains information about the search result header field list. This list represents the metadata information of the columns that are part of the search result.
-   **[SearchResultRow Class](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchResultRow.htm#apex_class_id_verification_SearchResultRow)**
    Contains information about the search result row field list. This list represents the column values for a specific row that are part of the search result.
-   **[SelectedSearchResult Class](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SelectedSearchResult.htm#apex_class_id_verification_SelectedSearchResult)**
    Contains the details of the record that has been selected for verification.
-   **[SelectedVerifiedResult Class](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SelectedVerifiedResult.htm#apex_class_id_verification_SelectedVerifiedResult)**
    Contains information about the verified object that is used for the secondary search.
-   **[VerificationContext Class](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerificationContext.htm#apex_class_id_verification_VerificationContext)**
    Contains information about the verification context, including the process definition, selected search result, selected verified result, and verified result.
-   **[VerificationProcessField Class](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerificationProcessField.htm#apex_class_id_verification_VerificationProcessField)**
    Contains details of the fields used for both search and the verification process.
-   **[VerificationProcessFieldList Class](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerificationProcessFieldList.htm#apex_class_id_verification_VerificationProcessFieldList)**
    Contains information about the list of fields used for both search and the verification process.
-   **[VerifiedDetails Class](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerifiedDetails.htm#apex_class_id_verification_VerifiedDetails)**
    Contains details about the verified object that is used for secondary search, including the process that’s used to verify the search object.
-   **[VerifiedResult Class](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerifiedResult.htm#apex_class_id_verification_VerifiedResult)**
    Contains information about the verification result that includes the required verifiers and optional verifiers and the verification status.
-   **[Verifier Class](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_Verifier.htm#apex_class_id_verification_Verifier)**
    Contains a list of input representations for verifier fields, including the optional and required fields.

## Related Topics

- FieldValue Class (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_FieldValue.htm)
- IdentityVerificationExt Interface (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_interface_id_verification_IdentityVerificationExt.htm)
- ProcessDefinition Class (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_ProcessDefinition.htm)
- ProcessDetail Class (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_ProcessDetail.htm)
- SearchFilter Class (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchFilter.htm)
- SearchFilters Class (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchFilters.htm)
- SearchRequest Class (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchRequest.htm)
- SearchResult Class (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchResult.htm)
- SearchResultHeader Class (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchResultHeader.htm)
- SearchResultRow Class (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchResultRow.htm)
