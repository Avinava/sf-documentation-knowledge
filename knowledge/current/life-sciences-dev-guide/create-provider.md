---
title: "Create Provider"
domain: life-sciences-dev-guide
topic: create-provider
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:42.999Z
estimatedTokens: 3245
keywords: [Provider, API, creates, healthcare, records, along, corresponding, Account, facilities, Contact, practitioners, manage, practitioner, credentials, Cases]
---

# Create Provider

> This API creates healthcare provider records along with the
            corresponding Account records (for facilities) or Contact records (for practitioners).
            You can also use it to manage information about practitioner credentials.

# Create Provider

This API creates healthcare provider records along with the corresponding Account records (for facilities) or Contact records (for practitioners). You can also use it to manage information about practitioner credentials.

-   **[Use Cases](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_create_provider_api.htm#hc_create_provider_api_use_cases)**
    The Create Provider API is mainly intended to support the operations of payer employees who handle provider records, such as credentialing specialists.
-   **[Prerequisites](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_create_provider_api.htm#hc_create_provider_api_api)**
    Notes about lookups
-   **[Supported Fields](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_create_provider_api.htm#hc_create_provider_api_fields)**
    The Create provider API supports all standard and custom fields.
-   **[Resources](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_create_provider_api.htm#hc_create_provider_api_resource)**
    Details and JSON samples
-   **[Code Samples](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_create_provider_api.htm#hc_create_provider_api_samples)**
    Here are some JSON samples that you can use as a starting point to build request bodies and interpret responses.
-   **[Error Handling](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_create_provider_api.htm#hc_create_provider_api_errors)**
    This API supports bulk transactions, but Healthcare Provider records are committed one at a time. An input request can succeed in full or in part. Each provider included in the request succeeds or fails on its own.

## Use Cases

The Create Provider API is mainly intended to support the operations of payer employees who handle provider records, such as credentialing specialists.

### Credentialing Specialist

Goals:

-   Create provider records.
-   Collect and store credential-related data.

Activities:

-   When the provider has gone through the lead process, add maximum credential information to it so supervisor can make an approval decision.
-   When a new provider is added to the Health Plan Network, add its contact to the system so call center agent can direct patients to that new provider.
-   When new information is received about a provider, edit its contact info so the provider information is up to date.

Success Measures:

-   Account, Contact, and HealthCareProvider records are created.
-   Records in related entities (optionally, for example in License, Person Education, Operating Hours, Specialty records) can be created if customer provides values in the JSON.
-   Data created can be viewed and edited according to user’s access permission.

## Prerequisites

Notes about lookups

To ensure uniqueness, when you create a HealthcareProviderSpecialty record with a SpecialtyId lookup field, a CareSpecialty record must exist with the CareSpecialty.SpecialtyCode field populated.

When you create a HealthcareProviderTaxonomy record, a CareTaxonomy.TaxonomyCode field must exist.

When you create a HealthcareFacilityNetworkSame record, a HealthcarePayerNetwork.Code field must exist.

You can look up to Operating Hours records if they exist, or create Operating Hours records via API.

For all other lookups, information should be provided in this format:

```

```

In this example,

-   AccountId is the API name of the lookup field you want to populate.
-   referenceField is the field on the lookup object to establish the relationship. You can choose any reference field for these lookups as long as the values are unique.
-   value is the value of the referenceField.

When a single request includes multiple lookups to an object, use the same reference field for all those lookups.

For example, suppose you have created custom lookup fields to the Account object in HealthcareProviderSpecialty and healthcareTaxonomy. The lookup fields are called C\_Account1 and C\_Account2. Account1 record has its sourceSystem field set to A1, and Account2 record has the sourceSystem field set to A2. You want C\_Account1 to be populated with the Account1 record and C\_Account2 to be populated with Account2. The reference field to find the account record is SourceSystem. If sourceSystem is A1, you get the Account1 record, and if sourceSystem is A2 you get the Account2 record.

HealthcareFacilityNetwork has lookups to Account, Practitioner and HealthcarePractitionerFacility. You can create a HealthcareFacilityNetwork record in an input request in any of these ways:

-   Create a record with an account lookup for the facility you are creating.
-   Create a record with a practitioner lookup for the practitioner you are creating.
-   Create a record with a lookup to HealthcarePractitionerFacility for a practitioner at a given facility.

Apex is not directly supported. However, you can call this API using the [HttpRequest Apex](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_restful_http_httprequest.htm) class.

## Supported Fields

The Create provider API supports all standard and custom fields.

Any field that is required in the object specification is required in JSON request bodies for this API.

All fields specified in your JSON request body must be writable. The user must have read-write access.

If no user input is provided, the Name field is populated automatically using this format:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=life_sciences_dev_guide)

#### Note

-   Users can edit the Name field after it has been auto-populated.
-   When a user enters data from the UI, the Name field is not auto-populated.

If person accounts are enabled, use the recordType parameter in your input to identify a person account.

If you are updating a practitioner record that has already been created, you only need practitioner ID, not Account or Contact.

## Resources

Details and JSON samples

Resource

```

```

Available version

49.0 and later

Authentication

Authorization: Bearer **token**

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=life_sciences_dev_guide)

#### Note

The Lightning Platform REST API supports OAuth 2.0 (an open protocol to allow secure API authorization). See [Authorize Apps with OAuth](https://help.salesforce.com/articleView?id=remoteaccess_authenticate.htm&language=en_US "HTML (New Window)") in Salesforce Help for more details.

HTTP methods

POST

### Supported Objects

| Object | Required | Auto-filled Name field | Required Fields | Input/Output JSON key name |
| --- | --- | --- | --- | --- |
| Account (for facility) or Contact (for practitioner) | No | NA |  | account/contact |
| AccountContactRelationship | No | Yes |  | providerAffliations |
| Accreditation | No | Yes | Name | accreditations |
| Award | No | Yes | Name | awards |
| BoardCertification | No | Yes | Name | boardCertifications |
| BusinessLicense | No | Yes | Name | businessLicenses |
| CareProviderAdverseAction | No | Yes | Name | careProviderAdverseActions |
| CareProviderFacilitySpecialty | No | Yes | Name | facilitySpecialties |
| ContactProfile | No | Yes |  | contactProfile |
| HealthcareFacilityNetwork | No | Yes | Name | facilityNetworks |
| HealthcarePractitionerFacility | No | Yes | Name | practitionerFacilities |
| HealthcareProvider | Yes | Yes | Name | healthcareProvider |
| HealthcareProviderNpi | No | Yes | Name | npi |
| HealthcareProviderSpecialty | No | Yes | Name | specialties |
| HealthcareProviderTaxonomy | No | Yes | Name | taxonomies |
| HealthcareProviderService | No | Yes |  | providerServices |
| HlthCareProvTreatedCondition | No | Yes |  | treatedConditions |
| Identifier | No |  |  |  |
| OperatingHours | No | Yes | Name, TimeZone | operatingHours |
| PersonEducation (Practioner only) |  | Yes | Name | personEducations |
| PersonEmployment (Practitioner only) |  | Yes | Name, RelatedPerson (Account/Contact) | personEmployments |
| TimeSlots | No | No | OperatingHours, StartTime, EndTime, DayOfWeek | TimeSlots |

## Code Samples

Here are some JSON samples that you can use as a starting point to build request bodies and interpret responses.

-   Associate a practitioner with a facility. Each Contact record must have an associated Account record.
-   Use the API name of the field, such as RecordType, not the label, such as Record Type.
-   Strings with trailing spaces aren’t supported.
-   The comments in these samples aren't meant to be valid JSON.

### Sample Input: Create a Practitioner

```

```

### Sample Input - Create a Practitioner from an Existing Contact

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=life_sciences_dev_guide)

#### Note

In the sample input, the reference field can be any unique field.

```

```

### Sample Input - Create a Practitioner as a Person Account

```

```

### Sample Input - Create a Practitioner to Be Synced for Provider Search

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=life_sciences_dev_guide)

#### Note

To use the following code sample, ensure that the org has:

-   A facility Account record (Id 001RM000005J5UTYA0 in the code sample)
-   CareSpecialty records (SpecialtyCode 15 and 22 in the code sample)

```

```

### Sample Input - Create a Facility

```

```

### Sample Input - Create a Facility from an Existing Account

```

```

### Sample Input - Create a Facility to Be Synced for Provider Search

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=life_sciences_dev_guide)

#### Note

To use the following code sample, ensure that the org has a Specialty record (SpecialtyCode 15 in the code sample).

```

```

### Sample Input - Create a Practitioner with All Possible Related Objects

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=life_sciences_dev_guide)

#### Note

Before you use the code sample, create existing lookup records in your org for the following objects:

-   Care Specialty
-   Care Taxonomy
-   Operating Hours
-   Healthcare Payer Network
-   Account for Healthcare Practitioner Facility

```

```

### Sample Output Response for Creating a Practitioner with All Possible Related Objects

```

```

### Sample Output Response - Partial Success

```

```

## Error Handling

This API supports bulk transactions, but Healthcare Provider records are committed one at a time. An input request can succeed in full or in part. Each provider included in the request succeeds or fails on its own.

For each record requested, HealthcareProvider creation is rolled back, along with any Account or Contact records created, at the first error for the request. If one related object fails, the remaining related objects are not attempted.

For example, if an input request contains 50 provider records and 10 of those records fail, the remaining 40 records are created. You only need to resubmit the failed providers, not the whole request.

### Response Codes

| Error Code | Http Status Code | Error Message |
| --- | --- | --- |
| Bad Request | 400 | Your request contains invalid data types. Correct the value in section <section name>, field <JSON key>. |
| INSUFFICIENT_ACCESS | 403 | You don't have permission to perform this action on <object name> records. Contact your Salesforce admin for help. |
| "ResourceApiException CANNOT_INSERT_UPDATE_ACTIVATE_ENTITY" |  | Account: bad field names on insert/update call: Namea |
| "ResourceApiException CANNOT_INSERT_UPDATE_ACTIVATE_ENTITY" |  | sObject type 'HealthcareProvider' is not supported. If you are attempting to use a custom object, be sure to append the '__c' after the entity |
| "ResourceApiException CANNOT_INSERT_UPDATE_ACTIVATE_ENTITY" |  | Required fields are missing: [Name] |
| Exception |  | Invalid format of the given date-time object <input date/time> |
| Bad Request | 400 | There is no input in the request body. Resubmit the request with valid input in the request body. |
| Bad Request | 400 | We couldn't parse the JSON input. Restructure the JSON and try again. |
| Too Many Requests | 429 | Your request contains <XXX> records. Reduce the number of records to fewer than <YYY> and try again. |
| Wrong Record Type |  | An Account record is required for a facility. Resubmit the request with an Account record. |
| Too Many Record Types |  | Resubmit the request with an Account record or a Contact record but not both. |
| Specify Provider Type |  | Provider type is not specified. Resubmit the request indicating provider type as facility or practitioner. |
| Bad Request | 400 | "Out of Array of allowed Values(picklist) - for static picklist" |
|  |  | PersonAccount isnt enabled in the org, if input request is for a PA |
|  |  | Lookup not found, Specialty Code for eg |
| Bad Request | 400 | Missing required fields on standard objects |

## Code Examples

```
"AccountId":{ 
      "value":"101",
      "referenceField":"HCGA__SourceSystemId__c"
      }
```

```
HealthcareProviderSpecialty entity: Jimmy James Specialty - 10-20-20 11:22:33
```

```
/connect/health/providers
```

```
{
    "providers": [{
        "type": "practitioner",
        "contact": {
            "fields": {
                "FirstName": "Rachel",
                "LastName": "Green",
                "Description" : "Rachel is a specialist surgeon."
            }
        },
        "healthcareProvider": {
            "fields": {
                "ProviderType": "Medical Doctor",
                "ProviderClass": "Solo Practitioner"
            }
        }
    }]
}
```

```
{
    "providers": [{
        "type": "practitioner",
        "contact": {
            "id": {
                "value": "003RM000007FnBvYAK",
                "referenceField": "Id"
            }
        },
        "healthcareProvider": {
            "fields": {
                "ProviderType": "Physician",
                "EffectiveFrom": "2019-01-01 00:00:00"
            }
        }
    }]
}
```

## Related Topics

- Use Cases (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_create_provider_api.htm)
- Prerequisites (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_create_provider_api.htm)
- Supported Fields (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_create_provider_api.htm)
- Resources (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_create_provider_api.htm)
- Code Samples (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_create_provider_api.htm)
- Error Handling (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_create_provider_api.htm)
