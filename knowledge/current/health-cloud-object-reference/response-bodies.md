---
title: "Response Bodies"
domain: health-cloud-object-reference
topic: response-bodies
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:34.811Z
estimatedTokens: 5698
keywords: [Bodies, resource, either, JSON, XML]
---

# Response Bodies

> A resource can return a response body in either JSON or XML format.

# Response Bodies

A resource can return a response body in either JSON or XML format.

Refer to [HTTP response code](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/connect_error_responses.htm "HTML (New Window)") to find out whether the request was successful or not, as well as the error messages for the failed requests.

-   **[Additional Attributes Output](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_additional_attributes.htm)**
    Output representation of the Additional Attributes.
-   **[Address Output](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_address_output_representation.htm)**
    The detailed address information for a facility or resource in the response.
-   **[Appointment Management Output](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_appointment_management.htm)**
    Output representation for appointment management.
-   **[Appointed Representative](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_appointed_representative_output.htm)**
    Person who is an appointed representative for the member.
-   **[Assessment Details Output](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_assessment_details_output.htm)**
    Contains metadata for the assessment record associated with a question response.
-   **[Assessment Responses Output](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_assessment_responses_output.htm)**
    Output of assessment responses.
-   **[Asset Search Result](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_asset_search_result_representation.htm)**
    Detailed information about a single asset or resource matching the search criteria.
-   **[Book Slot Chain Output](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_book_slot_chain_output.htm)**
    Output representation of the request to create service appointments.
-   **[Care Request Case](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_care_authorization_case_output.htm)**
    Case related to the care request.
-   **[Care Request Patient](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_care_authorization_patient_output.htm)**
    The patient for whom the request is being raised.
-   **[Care Authorization Request](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_care_authorization_request_output.htm)**
    Output of create or update request for care services review.
-   **[Care Authorization Request Related Record](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_care_authorization_request_related_record_resul.htm)**
    Care Authorization request related record output representation
-   **[Care Authorization Request Result](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_care_authorization_request_resul.htm)**
    Result of POST or PATCH request.
-   **[Create or Update Care Authorization Request Result](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_care_authorization_request_result.htm)**
    Response to create or update care services review request.
-   **[Care Diagnosis](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_care_diagnosis_output.htm)**
    Associated diagnosis including code type, name, and description. One or more care diagnoses can be associated with a care request.
-   **[Care Program Enrollment Result](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_care_program_enrollment_result.htm)**
    Result containing details about a single patient enrollment.
-   **[Care Request Drug](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_care_request_drug_output.htm)**
    Requested drug including name, strength, frequency, and instructions for administration. One or more drug requests can be associated with a care request.
-   **[Care Request Item](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_care_request_item_output.htm)**
    The details of a care service request, including name, modifiers, and the effective date. One or more care service requests can be associated with a care request.
-   **[Care Request](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_care_request_output.htm)**
    The general details of a care-related request including member information, admission date, decision reason, and so on. A single request can contain multiple diagnoses, services, or drugs. Care requests include prior authorizations for drugs and services, admission notifications, concurrent review of admissions, appeals, complaints, and grievances.
-   **[Care Request Reviewer Output](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_care_request_reviewer_output.htm)**
    Output representation of the care request reviewer.
-   **[Care Authorization Request Response](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_care_authorization_request_get_result.htm)**
    The response body for the Care Services Review GET request.
-   **[Create Visit Output](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_create_visit_output.htm)**
    Output representation of the create visit request.
-   **[Content Document Output](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_content_document_output.htm)**
    Content document output representation.
-   **[Custom Field Value](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_custom_field_value_output.htm)**
    The output representation of the custom field values.
-   **[Custom Type Details](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_custom_type_details.htm)**
    Output representation of the custom type details of the Omniscript elements.
-   **[Digital Verification Output](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_digital_verification_output.htm)**
    Output Representation for the digital verification API request.
-   **[Dispenser Address](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_dispenser_address_output.htm)**
    Pharmacy address.
-   **[Document Conflict Field](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_document_conflict_field.htm)**
    Output representation of the target object field with conflict.
-   **[Document Conflict Field List](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_document_conflict_field_list.htm)**
    Output representation of the target object fields with conflicts.
-   **[Document Management Result](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_document_management_result.htm)**
    Output representation of the document split request.
-   **[Document Process Output](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_document_process_output.htm)**
    Output representation of the document process creation or update request.
-   **[Error Response Output](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_errors_response.htm)**
    Error response representation.
-   **[Enrollee Product Result](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_enrollee_product_result.htm)**
    Details about the enrollee’s products.
-   **[Enrollment Card Result](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_enrollment_card_result.htm)**
    Details of the enrollment care for a single enrollee.
-   **[Error Message](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_error_output.htm)**
    A generic error message containing error code and the message text.
-   **[First Reviewer](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_first_reviewer_output.htm)**
    The name of the person who reviewed the request first.
-   **[FHIR Reference](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_fhir_reference_output.htm)**
    The output representation of the FHIR reference values.
-   **[Field Value Output](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_field_value_output.htm)**
    Represents the value of a field.
-   **[FHIR Address](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_fhir_address_output.htm)**
    The output representation of the FHIR address values.
-   **[FHIR Codeable Concept](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_fhir_codeable_concept_output.htm)**
    The output representation of the Code Set Bundle records created to represent a codeableConcept value.
-   **[FHIR Coding](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_fhir_coding_output.htm)**
    The output representation of the Code Set records created to represent a Coding value.
-   **[FHIR Human Name](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_fhir_human_name_output.htm)**
    The output representation of a PersonName record created to represent a humanName value.
-   **[FHIR Contact Point](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_fhir_contact_point_output.htm)**
    The output representation of contact details stored as a ContactPointPhone record.
-   **[FHIR Identifier](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_fhir_identifier_output.htm)**
    The output representation of the Identified records created to represent an identifier value.
-   **[FHIR Patient](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_fhir_patient_output.htm)**
    The output representation of the patient stored in Salesforce, as specified in the input request.
-   **[General Practitioner](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_general_practitioner_output.htm)**
    Member's primary or general care practitioner.
-   **[Get Resources Output](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_get_resources_output_representation.htm)**
    The response body containing the results of the resource search.
-   **[Get Slots Output](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_get_slots.htm)**
    Output representation for getting appointment slots.
-   **[Guest Referral Output](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_guest_referral_output.htm)**
    Output representation of the request to create a guest referral.
-   **[HPI Score Sync Output](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_hpi_score_sync_output.htm)**
    Output representation of the score synchronization request.
-   **[HPI Score Sync State Output](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_hpi_score_sync_state_output.htm)**
    Output representation of the score synchronization status request.
-   **[Medication Statement Output](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_med_statement_output.htm)**
    Output representation of the medication statement create request.
-   **[Medication Statement Update Output](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_med_statement_update_output.htm)**
    Output representation of medication statement update request.
-   **[Medical Director](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_medical_director_output.htm)**
    Name of the medical director who reviewed the request.
-   **[Original Denial Medical Director](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_original_denial_medical_director_output.htm)**
    The name of the medical director who denied the original request.
-   **[Referral Management Output](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_referral_management_output.htm)**
    Output representation of the request to create a patient referral.
-   **[Object Field](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_object_field.htm)**
    Output representation of of the target object field.
-   **[Object Field List](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_object_field_list.htm)**
    Output representation of the target object fields list.
-   **[OCR Document Scan Result](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_ocr_document_scan_result_id.htm)**
    Output representation of the OCR document scan result ID.
-   **[OCR Document Scan Result List](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_ocr_document_scan_result_id_list.htm)**
    Output representation of the list of the OCR document scan results IDs.
-   **[Omniscript Element Discovery Framework Output](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_os_element_discovery_framework_output.htm)**
    Output representation of the custom type details of the Omniscript elements for Discovery Framework.
-   **[Omniscript Element Property Set Output](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_os_element_property_set_output.htm)**
    Output representation of the property set configuration of the Omniscript elements.
-   **[Omniscript Elements List](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_omniscript_elements_list.htm)**
    Output representation of the details of the Omniscript elements.
-   **[Omniscript Output](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_omniscript_output.htm)**
    Output representation of the details of the Omniscript.
-   **[Patient Communication Language](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_patient_communication_language_output.htm)**
    The output representation of the PersonLanguage records that represent the communication preferences of a person.
-   **[Patient Contact Party](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_patient_contact_party_output.htm)**
    The output representation of contact parties associated with a patient.
-   **[Patient Get](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_patient_get_output.htm)**
    Output representation of details of a patient record.
-   **[Patient Upsert](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_patient_upsert_output.htm)**
    Output representation of result after a Patient FHIR resource is created.
-   **[Patient Update](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_patient_update_output.htm)**
    Output representation of result after a Patient FHIR resource is updated.
-   **[Payload Output](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_pay_load_output.htm)**
    Output representation of the details communicated to the recipient.
-   **[Previous Assessment Responses Output](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_previous_assessment_responses_output.htm)**
    The list of historical question responses retrieved for the specified assessment.
-   **[Process Definition Output](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_process_definition_output.htm)**
    Represents the Identity Verification Process Definition record.
-   **[Process Detail Output](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_process_detail_output.htm)**
    Represents the Identity Verification Process Detail record.
-   **[Program Enrollment Result](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_program_enrollment_result.htm)**
    Result containing details of all patient enrollment status. If there is success, it contains id of new records created for each patient.
-   **[Provider Search Result](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_provider_search_result_representation.htm)**
    Detailed information about a single healthcare provider matching the search criteria.
-   **[Requesting Practitioner](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_requesting_practitioner_output.htm)**
    Ordering or referring practitioner for the request.
-   **[Reopened By Output](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_reopened_by_output.htm)**
    The name of the person who reopened the care request.
-   **[Response Value Output](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_response_value_output.htm)**
    Contains the specific answer data and its sequence for a question within an assessment.
-   **[Servicing Facility](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_servicing_facility_output.htm)**
    Facility where the service is being provided.
-   **[Servicing Practitioner](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_servicing_practitioner_output.htm)**
    Practitioner administering the service.
-   **[Subscriber](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_subscriber_output.htm)**
    The primary member on the plan.
-   **[Search Field](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_search_field.htm)**
    Output representation of the search result field.
-   **[Search Output](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_search_output.htm)**
    Output representation of the search response.
-   **[Search Result](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_search_result.htm)**
    Output representation of the search result.
-   **[Search Result Header](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_search_result_header.htm)**
    Output representation of the search result header.
-   **[Selected Search Result Output](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_selected_search_result_output.htm)**
    Represents the selected search result.
-   **[Tracked Communication Output](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_tracked_communication_output.htm)**
    Output representation of tracked communications for a care request.
-   **[Transport Location](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_transport_location_output.htm)**
    Transport Location output representation
-   **[Verified Result Output](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_verified_result_output.htm)**
    Represents the required and optional fields that are verified.
-   **[Verifier Output](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_verifier_output.htm)**
    Represents a verifier.
-   **[Verification Context Output](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_verification_context_output.htm)**
    Represents the Verification Context resource output.
-   **[Verification Process Field List Output](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_verification_process_field_list_output.htm)**
    Represents the list of fields in the Identity Verification Process Field record.
-   **[Verification Process Field Output](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_verification_process_field_output.htm)**
    Represents the Identity Verification Process Field record.
-   **[Work Type Lead Time Output](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_work_type_lead_time_output.htm)**
    Output representation of a list of work types and their associated lead times.
-   **[Question Response Output](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_question_response_output.htm)**
    Contains the response values and assessment metadata for a single question.
-   **[Quota Availability](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_quota_availability.htm)**
    Output representation of a list of available quotas, and their start and end dates for a work type.
-   **[Quota Availability Date Range](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_quota_availability_date_range.htm)**
    Output representation of the date range of an available quota.

## Related Topics

- Additional Attributes Output (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_additional_attributes.htm)
- Address Output (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_address_output_representation.htm)
- Appointment Management Output (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_appointment_management.htm)
- Appointed Representative (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_appointed_representative_output.htm)
- Assessment Details Output (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_assessment_details_output.htm)
- Assessment Responses Output (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_assessment_responses_output.htm)
- Asset Search Result (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_asset_search_result_representation.htm)
- Book Slot Chain Output (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_book_slot_chain_output.htm)
- Care Request Case (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_care_authorization_case_output.htm)
- Care Request Patient (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_care_authorization_patient_output.htm)
