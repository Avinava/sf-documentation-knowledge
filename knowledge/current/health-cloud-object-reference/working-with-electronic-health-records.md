---
title: "Working With Electronic Health Records"
domain: health-cloud-object-reference
topic: working-with-electronic-health-records
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:35.150Z
estimatedTokens: 624
keywords: [Working, Electronic, Health, Records, HL7, Level, Seven, standard, exchanging, EHR, parse, data, transmitted, via, messages]
---

# Working With Electronic Health Records

> HL7 (Health Level Seven) is a standard for exchanging electronic health records (EHR).
      You can parse EHR data transmitted via HL7 data messages and store it in
      Salesforce.

# Working With Electronic Health Records

HL7 (Health Level Seven) is a standard for exchanging electronic health records (EHR). You can parse EHR data transmitted via HL7 data messages and store it in Salesforce.

Salesforce is committed to interoperability and the use of standards to facilitate the exchange of health data. As a voting member of HL7.org, Salesforce can share excerpts of HL7 standards, post the standards on Salesforce digital assets, and use HL7 organizational and “Care Connected” logos. Here we reference some of the key data elements in the HL7 standards to facilitate mapping to the Salesforce data model.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=health_cloud_object_reference)

#### Note

Elements that aren't mapped here are not yet supported. We are continuing to map additional elements.

-   **[Mapping FHIR v4.0 to Salesforce Standard Objects](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/map_fhir_overview.htm)**
    The Fast Health Interoperability Resources (FHIR) standard defined by Health Level Seven (HL7) enables healthcare systems to work seamlessly together enhancing their interoperability. The Clinical Data Model is built to align with HL7’s FHIR R4. However, because of the way the Salesforce platform works, the Salesforce implementation of FHIR R4 isn’t identical to how it’s defined by HL7. Here’s how various FHIR resources map to fields in different standard objects in Salesforce.
-   **[Store HL7 v2.3 Messages in Salesforce Standard Objects](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/map_hl7_overview.htm)**
    Like the Fast Health Interoperability Resources (FHIR) standard defined by Health Level Seven (HL7), HL7 v2.3 is also a database framework defined by HL7 to facilitate interoperability between electronic healthcare systems. Because the Clinical Data Model was built to align with FHIR v4.0, it is also compatible with its predecessor HL7 v2.3. However, because of the way the Salesforce platform works, the Salesforce implementation varies from the HL7 recommendations in certain cases such as the data types that are used.

#### See Also

-   [Electronic Health Records (Managed Package)](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_ehr.htm "Salesforce Health Cloud provides custom objects to store the data contained in the standard electronic health record (EHR) fields.")

## Related Topics

- Mapping FHIR v4.0 to Salesforce Standard Objects (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/map_fhir_overview.htm)
- Store HL7 v2.3 Messages in Salesforce Standard Objects (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/map_hl7_overview.htm)
- Electronic Health Records (Managed Package) (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_ehr.htm)
