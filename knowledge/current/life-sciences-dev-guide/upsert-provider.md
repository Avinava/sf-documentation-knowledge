---
title: "Upsert Provider"
domain: life-sciences-dev-guide
topic: upsert-provider
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:43.554Z
estimatedTokens: 2327
keywords: [Upsert, Provider, JSON, samples, starting, point, building, bodies, interpreting, responses, Cases, Resources, Objects, Code, Sample]
---

# Upsert Provider

> Here are some JSON samples you can use as a starting point for
            building request bodies and interpreting responses.

# Upsert Provider

This business-level API enables you to upsert data in Salesforce to represent a practitioner and all the objects and fields in the Provider data model relevant to a Practitioner, such as NPI, provider specialty, and provider taxonomy.

Use this API to support single record create (such as CAQH integration) for multiple providers, along with all their associated data.

## Use Cases

Upsert means updating data in healthcare provider record fields and inserting new fields with a single call. For example, you may want to update the operating hours of an existing provider account at the same time as you specify provider type.

-   When a group of providers is up for re-credentialing due to changes in specialty or board certifications, bulk-update existing provider records.
-   When Hospital Group ABC acquires Hospital Group XYZ, move the providers' affiliation from ABC to XYZ.
-   When Hospital Group ABC extends its hours with an additional working day at one of its locations, bulk-update the operating hours for all the providers serving that location.

-   **[Supported Fields](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_upsert_provider_api.htm#hc_create_provider_api_fields)**
    The upsert provider API supports all standard and custom fields.
-   **[Resources](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_upsert_provider_api.htm#hc_upsert_provider_api_resource)**
    Details and JSON samples
-   **[Code Samples](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_upsert_provider_api.htm#hc_upsert_provider_api_samples)**
    Here are some JSON samples you can use as a starting point for building request bodies and interpreting responses.
-   **[Error Handling](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_upsert_provider_api.htm#hc_upsert_provider_api_errors)**
    This API supports bulk transactions, but Healthcare Provider records are committed one at a time. An input request can succeed in full or in part. Each provider included in the request succeeds or fails on its own.

## Supported Fields

The upsert provider API supports all standard and custom fields.

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

52.0 and later

Authentication

Authorization: Bearer **token**

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=life_sciences_dev_guide)

#### Note

The Lightning Platform REST API supports OAuth 2.0 (an open protocol to allow secure API authorization). See [Authorize Apps with OAuth](https://help.salesforce.com/articleView?id=remoteaccess_authenticate.htm&language=en_US "HTML (New Window)") in Salesforce Help for more details.

HTTP methods

PATCH

### Supported Objects

| Object | Required | Auto-filled Name field | Required Fields | Input/Output JSON key name |
| --- | --- | --- | --- | --- |
| Account (for facility) or Contact (for practitioner) | No | NA |  | account/contact |
| Accreditation | No | Yes | Name | accreditations |
| Award | No | Yes | Name | awards |
| BoardCertification | No | Yes | Name | boardCertifications |
| BusinessLicense | No | Yes | Name | businessLicenses |
| CareProviderAdverseAction | No | Yes | Name | careProviderAdverseActions |
| CareProviderFacilitySpecialty | No | Yes | Name | facilitySpecialties |
| HealthcareFacilityNetwork | No | Yes | Name | facilityNetworks |
| HealthcarePractitionerFacility | No | Yes | Name | practitionerFacilities |
| HealthcareProvider | Yes | Yes | Name | healthcareProvider |
| HealthcareProviderNpi | No | Yes | Name | npi |
| HealthcareProviderSpecialty | No | Yes | Name | specialties |
| HealthcareProviderTaxonomy | No | Yes | Name | taxonomies |
| Identifier | No |  |  |  |
| OperatingHours | No | Yes | Name, TimeZone | operatingHours |
| PersonEducation (Practioner only) |  | Yes | Name | personEducations |
| PersonEmployment (Practitioner only) |  | Yes | Name, RelatedPerson (Account/Contact) | personEmployments |
| TimeSlots | No | No | OperatingHours, StartTime, EndTime, DayOfWeek | TimeSlots |

## Code Samples

Here are some JSON samples you can use as a starting point for building request bodies and interpreting responses.

You can create either a practitioner or a facility. A facility is always associated with an account. A practitioner can be associated with a contact or a person account.

-   You can edit up to 25 provider records at a time.
-   Use the API name of the field (such as RecordType), not the label (such as "Record Type").
-   Strings with trailing spaces are not supported.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=life_sciences_dev_guide)

#### Note

The comments in these samples are for documentation purposes only and aren't meant to be valid JSON.

### Sample Input: Update an Existing Practitioner Field and Insert New Practitioner Fields

Here's what your JSON request body might look like when you change the last name on a practitioner's person account, and also specify that the practitioner is a doctor in a solo practice.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=life_sciences_dev_guide)

#### Note

In this case, we are creating a practitioner as a person account.

### Sample Input: Update an Existing Facility and Practitioner Field for a Provider and Insert New Fields

Here's what it might look like when you change the last name of a practitioner and also specify that the practitioner is a doctor in a solo practice. (A solo practice is treated as a facility with a single practitioner attached to it.)

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=life_sciences_dev_guide)

#### Note

In this case, we are creating a practitioner as a contact on an account. If we had set type to practitioner and specified an account, we would be creating a person account.

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
HealthcareProviderSpecialty entity: Jimmy James Specialty - 10-20-20 11:22:33
```

```
/connect/health/providers
```

```
{
   "providers":[      
      {
         "type":"practitioner",
         "account":{
            "id":{
               "value":"001B000001MVfilIAD",
               "referenceField":"Id"
            },
            "fields":{
               "LastName":"Stewart1"
            }
         }
         "healthcareProvider":{
            "fields":{
               "ProviderType":"Medical Doctor",
               "ProviderClass":"Solo Practitioner"
            }
         }
      }
   ]
}
```

```
{
   "providers":[
      {
         "type":"facility",
         "account":{
            "id":{
               "value":"001B000001MVfhEIAT",
               "referenceField":"Id"
            },
            "fields":{
               "Name":"Public Hospital 1"
            }
         },
         "healthcareProvider":{            
            "fields":{
               "ProviderType":"Medical Doctor",
               "ProviderClass":"Solo Practitioner"
            }
         }
      },
      {
         "type":"practitioner",
         "contact":{
            "id":{
               "value":"003B000000IqubiIAB",
               "referenceField":"Id"
            },
            "fields":{
               "LastName":"King1"
            }
         },
         "healthcareProvider":{
            "fields":{
               "ProviderType":"Medical Doctor",
               "ProviderClass":"Solo Practitioner"
            }
         }
      }
   ]
}
```

## Related Topics

- Supported Fields (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_upsert_provider_api.htm)
- Resources (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_upsert_provider_api.htm)
- Code Samples (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_upsert_provider_api.htm)
- Error Handling (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_upsert_provider_api.htm)
