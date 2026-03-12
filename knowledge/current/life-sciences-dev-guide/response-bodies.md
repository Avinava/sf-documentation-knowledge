---
title: "Response Bodies"
domain: life-sciences-dev-guide
topic: response-bodies
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:43.771Z
estimatedTokens: 4037
keywords: [Bodies, resource, either, JSON, XML]
---

# Response Bodies

> A resource can return a response body in either JSON or XML format.

# Response Bodies

A resource can return a response body in either JSON or XML format.

Refer to [HTTP response code](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/connect_error_responses.htm "HTML (New Window)") to find out whether the request was successful or not, as well as the error messages for the failed requests.

-   **[Account User Territory Info](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_account_user_territory_info.htm)**
    The details of the users and the territories associacted with the account.
-   **[Account Manual Alignment Output](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_customer_manual_alignment_output_representation.htm)**
    Represents the output for the request to align customer account manually.
-   **[Appointed Representative](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_appointed_representative_output.htm)**
    Person who is an appointed representative for the member.
-   **[Book Slot Chain Output](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_book_slot_chain_output.htm)**
    Output representation of the request to create service appointments.
-   **[Care Request Case](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_care_authorization_case_output.htm)**
    Case related to the care request.
-   **[Care Request Patient](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_care_authorization_patient_output.htm)**
    The patient for whom the request is being raised.
-   **[Care Authorization Request](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_care_authorization_request_output.htm)**
    Output of create or update request for care services review.
-   **[Care Authorization Request Related Record](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_care_authorization_request_related_record_resul.htm)**
    Care Authorization request related record output representation
-   **[Care Authorization Request Result](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_care_authorization_request_resul.htm)**
    Result of POST or PATCH request.
-   **[Create or Update Care Authorization Request Result](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_care_authorization_request_result.htm)**
    Response to create or update care services review request.
-   **[Care Diagnosis](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_care_diagnosis_output.htm)**
    Associated diagnosis including code type, name, and description. One or more care diagnoses can be associated with a care request.
-   **[Care Program Enrollment Result](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_care_program_enrollment_result.htm)**
    Result containing details about a single patient enrollment.
-   **[Care Request Drug](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_care_request_drug_output.htm)**
    Requested drug including name, strength, frequency, and instructions for administration. One or more drug requests can be associated with a care request.
-   **[Care Request Item](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_care_request_item_output.htm)**
    The details of a care service request, including name, modifiers, and the effective date. One or more care service requests can be associated with a care request.
-   **[Care Request](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_care_request_output.htm)**
    The general details of a care-related request including member information, admission date, decision reason, and so on. A single request can contain multiple diagnoses, services, or drugs. Care requests include prior authorizations for drugs and services, admission notifications, concurrent review of admissions, appeals, complaints, and grievances.
-   **[Care Request Reviewer Output](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_care_request_reviewer_output.htm)**
    Output representation of the care request reviewer.
-   **[Care Authorization Request Response](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_care_authorization_request_get_result.htm)**
    The response body for the Care Services Review GET request.
-   **[Create Visit Output](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_create_visit_output.htm)**
    Output representation of the create visit request.
-   **[Content Document Output](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_content_document_output.htm)**
    Content document output representation.
-   **[Content Management Output](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_content_management_output.htm)**
    Represents the information about the job status and any associated messages returned for Content Management APIs.
-   **[Custom Field Value](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_custom_field_value_output.htm)**
    The output representation of the custom field values.
-   **[Customer Account Merge Output](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_merge_customer_account_output.htm)**
    Output representation of the response for a successful account merge operation.
-   **[Digital Verification Output](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_digital_verification_output.htm)**
    Output Representation for the digital verification API request.
-   **[Dispenser Address](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_dispenser_address_output.htm)**
    Pharmacy address.
-   **[Download Provider Output](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_download_provider_output.htm)**
    The response representation containing the status of the provider download request and the resulting data.
-   **[Document Conflict Field](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_document_conflict_field.htm)**
    Output representation of the target object field with conflict.
-   **[Document Conflict Field List](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_document_conflict_field_list.htm)**
    Output representation of the target object fields with conflicts.
-   **[Document Management Result](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_document_management_result.htm)**
    Output representation of the document split request.
-   **[Document Process Output](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_document_process_output.htm)**
    Output representation of the document process creation or update request.
-   **[Error Response Output](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_errors_response.htm)**
    Error response representation.
-   **[Enrollee Product Result](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_enrollee_product_result.htm)**
    Details about the enrollee’s products.
-   **[Enrollment Card Result](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_enrollment_card_result.htm)**
    Details of the enrollment care for a single enrollee.
-   **[Error Message](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_error_output.htm)**
    A generic error message containing error code and the message text.
-   **[First Reviewer](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_first_reviewer_output.htm)**
    The name of the person who reviewed the request first.
-   **[FHIR Reference](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_fhir_reference_output.htm)**
    The output representation of the FHIR reference values.
-   **[Field Value Output](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_field_value_output.htm)**
    Represents the value of a field.
-   **[FHIR Address](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_fhir_address_output.htm)**
    The output representation of the FHIR address values.
-   **[FHIR Codeable Concept](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_fhir_codeable_concept_output.htm)**
    The output representation of the Code Set Bundle records created to represent a codeableConcept value.
-   **[FHIR Coding](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_fhir_coding_output.htm)**
    The output representation of the Code Set records created to represent a Coding value.
-   **[FHIR Human Name](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_fhir_human_name_output.htm)**
    The output representation of a PersonName record created to represent a humanName value.
-   **[FHIR Contact Point](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_fhir_contact_point_output.htm)**
    The output representation of contact details stored as a ContactPointPhone record.
-   **[FHIR Identifier](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_fhir_identifier_output.htm)**
    The output representation of the Identified records created to represent an identifier value.
-   **[FHIR Patient](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_fhir_patient_output.htm)**
    The output representation of the patient stored in Salesforce, as specified in the input request.
-   **[General Practitioner](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_general_practitioner_output.htm)**
    Member's primary or general care practitioner.
-   **[Medical Director](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_medical_director_output.htm)**
    Name of the medical director who reviewed the request.
-   **[Merge Customer Account with Status Output](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_merge_customer_account_with_status_output.htm)**
    The response body for the merge customer account with status request.
-   **[Original Denial Medical Director](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_original_denial_medical_director_output.htm)**
    The name of the medical director who denied the original request.
-   **[Object Field](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_object_field.htm)**
    Output representation of of the target object field.
-   **[Object Field List](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_object_field_list.htm)**
    Output representation of the target object fields list.
-   **[OCR Document Scan Result](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_ocr_document_scan_result_id.htm)**
    Output representation of the OCR document scan result ID.
-   **[OCR Document Scan Result List](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_ocr_document_scan_result_id_list.htm)**
    Output representation of the list of the OCR document scan results IDs.
-   **[Patient Communication Language](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_patient_communication_language_output.htm)**
    The output representation of the PersonLanguage records that represent the communication preferences of a person.
-   **[Patient Contact Party](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_patient_contact_party_output.htm)**
    The output representation of contact parties associated with a patient.
-   **[Patient Get](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_patient_get_output.htm)**
    Output representation of details of a patient record.
-   **[Patient Upsert](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_patient_upsert_output.htm)**
    Output representation of result after a Patient FHIR resource is created.
-   **[Patient Update](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_patient_update_output.htm)**
    Output representation of result after a Patient FHIR resource is updated.
-   **[Payload Output](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_pay_load_output.htm)**
    Output representation of the details communicated to the recipient.
-   **[Presentation Page Product Output](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_presentation_page_products_output.htm)**
    Represents the output for Presentation Page Products API.
-   **[Program Enrollment Result](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_program_enrollment_result.htm)**
    Result containing details of all patient enrollment status. If there is success, it contains id of new records created for each patient.
-   **[Rejected Merge Request Output](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_response_rejected_merge_request_representation.htm)**
    A merge request that was rejected due to invalid input.
-   **[Requesting Practitioner](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_requesting_practitioner_output.htm)**
    Ordering or referring practitioner for the request.
-   **[Reopened By Output](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_reopened_by_output.htm)**
    The name of the person who reopened the care request.
-   **[Sample Limits Validation Response Output](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_sample_limits_validation_response_output.htm)**
    Output representation for a sample limits validation request.
-   **[Search Results Output](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_provider_search.htm)**
    Output representation for provider search request.
-   **[Servicing Facility](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_servicing_facility_output.htm)**
    Facility where the service is being provided.
-   **[Servicing Practitioner](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_servicing_practitioner_output.htm)**
    Practitioner administering the service.
-   **[Subscriber](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_subscriber_output.htm)**
    The primary member on the plan.
-   **[Tracked Communication Output](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_tracked_communication_output.htm)**
    Output representation of tracked communications for a care request.
-   **[Transport Location](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_transport_location_output.htm)**
    Transport Location output representation
-   **[Verifier Output](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_verifier_output.htm)**
    Represents a verifier.
-   **[Work Type Lead Time Output](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_work_type_lead_time_output.htm)**
    Output representation of a list of work types and their associated lead times.

## Related Topics

- Account User Territory Info (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_account_user_territory_info.htm)
- Account Manual Alignment Output (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_customer_manual_alignment_output_representation.htm)
- Appointed Representative (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_appointed_representative_output.htm)
- Book Slot Chain Output (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_book_slot_chain_output.htm)
- Care Request Case (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_care_authorization_case_output.htm)
- Care Request Patient (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_care_authorization_patient_output.htm)
- Care Authorization Request (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_care_authorization_request_output.htm)
- Care Authorization Request Related Record (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_care_authorization_request_related_record_resul.htm)
- Care Authorization Request Result (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_care_authorization_request_resul.htm)
- Create or Update Care Authorization Request Result (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_care_authorization_request_result.htm)
