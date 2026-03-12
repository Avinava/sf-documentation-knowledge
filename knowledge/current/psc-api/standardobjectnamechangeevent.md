---
title: "StandardObjectNameChangeEvent"
domain: psc-api
topic: standardobjectnamechangeevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:32.697Z
estimatedTokens: 2540
keywords: [StandardObjectNameChangeEvent, ChangeEvent, supports, Change, Data, Capture, subscribe, stream, events, receive, tied, record, changes, Salesforce, include]
---

# StandardObjectNameChangeEvent

> A ChangeEvent object is available for each object that supports Change Data Capture.
    You can subscribe to a stream of change events using Change Data Capture to receive data tied to
    record changes in Salesforce. Changes include record creation, updates to an existing record,
    deletion of a record, and undeletion of a record. A change event isn’t a Salesforce
    object—it doesn’t support CRUD operations or queries. It’s included in the object
    reference so you can discover which Salesforce objects support change events.

# StandardObjectNameChangeEvent

A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.

## Supported Calls

describeSObjects()

## Special Access Rules

-   Not all objects may be available in your org. Some objects require specific feature settings and permissions to be enabled.
-   For more special access rules, if any, see the documentation for the standard object. For example, for AccountChangeEvent, see the special access rules for Account.

## Change Event Name

Change events are available for all custom objects and a subset of standard objects. The name of a change event is based on the name of the corresponding object for which it captures the changes.

Standard Object Change Event Name

```

```

Example: AccountChangeEvent

Custom Object Change Event Name

```

```

Example: MyCustomObject\_\_ChangeEvent

## Change Event Fields

The fields that a change event can include correspond to the fields on the associated parent Salesforce object, with a few exceptions. For example, AccountChangeEvent fields correspond to the fields on Account.

The fields that a change event doesn’t include are:

-   The IsDeleted system field.
-   The SystemModStamp system field.
-   Any field whose value isn’t on the record and is derived from another record or from a formula, except roll-up summary fields, which are included. Examples are formula fields. Examples of fields with derived values include LastActivityDate and PhotoUrl.

Each change event also contains header fields. The header fields are included inside the ChangeEventHeader field. They contain information about the event, such as whether the change was an update or delete and the name of the object, like Account.

In addition to the event payload, the event schema ID is included in the schema field. Also included is the event-specific field, replayId, which is used for retrieving past events.

## Event Message Example

The following example is an event message in JSON format for a new account record creation.

```

```

## API Version and Schema

When you subscribe to change events, the subscription uses the latest API version and the event messages received reflect the latest field definitions. For more information, see [API Version and Event Schema](https://developer.salesforce.com/docs/atlas.en-us.260.0.change_data_capture.meta/change_data_capture/cdc_message_structure.htm#cdc_event_schema.htm) in the Change Data Capture Developer Guide.

## Usage

For more information about Change Data Capture, see [Change Data Capture Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.change_data_capture.meta/change_data_capture/cdc_intro.htm).

## Objects That Support Change Events

The following objects have associated ChangeEvent objects.

-   [Accreditation](atlas.en-us.psc_api.meta/psc_api/sforce_psc_api_objects_accreditation.htm "Represents the professional accreditations of a facility. For example, a joint commission accredits a facility as a general acute care hospital.")
-   [Award](atlas.en-us.psc_api.meta/psc_api/sforce_psc_api_objects_award.htm "Represents a person's or organization's professional awards.")
-   [BenefitAssignmentAsset](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_benefitassignmentasset.htm "Represents a junction between an asset and a benefit assignment. This object is available in API version 65.0 and later.")
-   [BoardCertification](atlas.en-us.psc_api.meta/psc_api/sforce_psc_api_objects_boardcertification.htm "Represents the practitioner's board certifications such as being board-certified in cardiology and cardiovascular disease.")
-   [BusinessLicense](atlas.en-us.psc_api.meta/psc_api/sforce_psc_api_objects_businesslicense.htm "Represents an authorization issued by a regulatory agency. The authorization can be granted to an organization, a contact, or a specific user.")
-   [BusinessLicenseApplication](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_businesslicenseapplication.htm "Represents an application form submitted by a business owner. This object is available in API version 49.0 and later.")
-   [CareProviderAdverseAction](atlas.en-us.psc_api.meta/psc_api/sforce_psc_api_objects_careprovideradverseaction.htm "Captures adverse actions against the provider, such as malpractice lawsuits or revoked licenses.")
-   [CareProviderFacilitySpecialty](atlas.en-us.psc_api.meta/psc_api/sforce_psc_api_objects_careproviderfacilityspecialty.htm "Represents all the specialties that the practitioner provides at a given location. For example, a physician who is board-certified in both spine and neuro may provide spine services at one location and neuro services at another.")
-   [CareSpecialtyTaxonomy](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_carespecialtytaxonomy.htm "Represents a junction between a care specialty and a care taxonomy. This object is available in API version 64.0 and later.")
-   [CareTaxonomy](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_caretaxonomy.htm "Represents a static list of taxonomy codes. This object is available in API version 64.0 and later.")
-   [CodeSet](atlas.en-us.psc_api.meta/psc_api/sforce_psc_api_objects_codeset.htm "Represents various industry defined codes in the context of their systems and versions of those systems. These codes are used in all sorts of digital records. This object is available in API version 59.0 and later.")
-   [CodeSetBundle](atlas.en-us.psc_api.meta/psc_api/sforce_psc_api_objects_codesetbundle.htm "Represents a group of code sets across multiple systems and versions. All of these code sets refer to the same conceptual entity. This object is available in API version 59.0 and later.")
-   [HealthcareProvider](atlas.en-us.psc_api.meta/psc_api/sforce_psc_api_objects_healthcareprovider.htm "Represents business-level details about the provider organization or the practitioner.")
-   [HealthcareProviderNpi](atlas.en-us.psc_api.meta/psc_api/sforce_psc_api_objects_healthcareprovidernpi.htm "Represents identifiers from the National Provider Identifier that are assigned to every facility and licensed practitioner in the United States. Also includes NPI assigned date, primary mailing address on file, and so on.")
-   [HealthcareProviderSpecialty](atlas.en-us.psc_api.meta/psc_api/sforce_psc_api_objects_healthcareproviderspecialty.htm "Represents specialties for a practitioner or a provider service organization. A provider can have multiple specialties such as anesthesiology and cardiovascular.")
-   [HealthcareProviderTaxonomy](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_healthcareprovidertaxonomy.htm "Represents the taxonomy or subspecialty codes for a provider or facility. A provider or facility can have multiple taxonomies. This object is available in API version 64.0 and later.")
-   [IndividualApplication](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_individualapplication.htm "Represents an application form submitted by an individual or organization. This object is available in API version 50.0 and later.")
-   [InsurancePolicy](atlas.en-us.psc_api.meta/psc_api/sforce_psc_api_objects_insurancepolicy.htm "Represents a type of insurance policy. This object is available in API version 59.0 and later.")
-   [OperatingHours](atlas.en-us.psc_api.meta/psc_api/sforce_psc_api_objects_operatinghours.htm "Represents the hours that a facility is open.")
-   [PartyIncome](atlas.en-us.psc_api.meta/psc_api/sforce_psc_api_objects_partyincome.htm "Represents all income earned by an individual. The income could be from various sources such as salary, commissions, fees, rental properties, and so on.")
-   [PartyExpense](atlas.en-us.psc_api.meta/psc_api/sforce_psc_api_objects_partyexpense.htm "Represents the expense incurred by an individual or account. This object is available in API version 58.0 and later.")
-   [PartyFinancialAsset](atlas.en-us.psc_api.meta/psc_api/sforce_psc_api_objects_partyfinancialasset.htm "Represents the financial asset owned by an individual or account. This object is available in API version 58.0 and later.")
-   [PersonEmployment](atlas.en-us.psc_api.meta/psc_api/sforce_psc_api_objects_personemployment.htm "Represents information about a person’s employment.")
-   [ReceivedDocumentType](atlas.en-us.psc_api.meta/psc_api/sforce_psc_api_objects_receiveddocumenttype.htm "Represents a junction object between Received Document and Document Type. This object is available in API version 58.0 and later.")
-   [RegulatoryCode](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_regulatorycode.htm "Represents the regulation code enforced by the regulatory body. This object is available in API version 49.0 and later.")
-   [RegulatoryCodeViolation](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_regulatorycodeviolation.htm "Represents the transactional violation data that has been identified during an inspection. This entity ties the inspection question that is violated, violation reason and the regulatory code details. This object is available in API version 49.0 and later.")
-   [TimelineObjectDefinition](https://developer.salesforce.com/docs/atlas.en-us.260.0.psc_api.meta/psc_api/tooling_api_objects_timelineobjectdefinition.htm)
-   [TimeSlot](atlas.en-us.psc_api.meta/psc_api/sforce_psc_api_objects_timeslot.htm "Represents a range of time on a specified day of the week during which a provider or practitioner offers service. Operating hours consist of one or more time slots. Operating hours consist of one or more time slots.")
-   [ViolationType](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_violationtype.htm "Represents violations types for licenses and permits. This object is available in API version 49.0 and later.")

## Code Examples

```
<Standard_Object_Name>ChangeEvent
```

```
<Custom_Object_Name>__ChangeEvent
```

```
{
  "schema": "IeRuaY6cbI_HsV8Rv1Mc5g", 
  "payload": {
    "ChangeEventHeader": {
      "entityName": "Account", 
      "recordIds": [
        "<record_ID>"
      ], 
      "changeType": "CREATE", 
      "changeOrigin": "com/salesforce/api/soap/51.0;client=SfdcInternalAPI/", 
      "transactionKey": "0002343d-9d90-e395-ed20-cf416ba652ad", 
      "sequenceNumber": 1, 
      "commitTimestamp": 1612912679000, 
      "commitNumber": 10716283339728, 
      "commitUser": "<User_ID>"
    }, 
    "Name": "Acme", 
    "Description": "Everyone is talking about the cloud. But what does it mean?", 
    "OwnerId": "<Owner_ID>", 
    "CreatedDate": "2021-02-09T23:17:59Z", 
    "CreatedById": "<User_ID>", 
    "LastModifiedDate": "2021-02-09T23:17:59Z", 
    "LastModifiedById": "<User_ID>"
  }, 
  "event": {
    "replayId": 6
  }
}
```

## Related Topics

- Accreditation (atlas.en-us.psc_api.meta/psc_api/sforce_psc_api_objects_accreditation.htm)
- Award (atlas.en-us.psc_api.meta/psc_api/sforce_psc_api_objects_award.htm)
- BenefitAssignmentAsset (atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_benefitassignmentasset.htm)
- BoardCertification (atlas.en-us.psc_api.meta/psc_api/sforce_psc_api_objects_boardcertification.htm)
- BusinessLicense (atlas.en-us.psc_api.meta/psc_api/sforce_psc_api_objects_businesslicense.htm)
- BusinessLicenseApplication (atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_businesslicenseapplication.htm)
- CareProviderAdverseAction (atlas.en-us.psc_api.meta/psc_api/sforce_psc_api_objects_careprovideradverseaction.htm)
- CareProviderFacilitySpecialty (atlas.en-us.psc_api.meta/psc_api/sforce_psc_api_objects_careproviderfacilityspecialty.htm)
- CareSpecialtyTaxonomy (atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_carespecialtytaxonomy.htm)
- CareTaxonomy (atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_caretaxonomy.htm)
