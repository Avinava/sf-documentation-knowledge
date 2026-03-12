---
title: "Contact Encounter
    (POST)"
domain: life-sciences-dev-guide
topic: contact-encounter-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:43.020Z
estimatedTokens: 2322
keywords: [Contact, Encounter, POST, Load, encounters, system]
---

# Contact Encounter
    (POST)

> Load details of contact encounters into the system.

# Contact Encounter (POST)

Load details of contact encounters into the system.

Prerequisites

-   This API must be used only for person account-enabled orgs.
-   Ensure that you have access to the Contact Encounter fields and the Contact Encounter Participants fields in your org.

Contact Tracing Encounters and Participants

-   To create a new encounter, set the referenceID field to null.
-   To update an existing encounter with details of new encounter participants, pass the referenceID of the encounter in the payload.
-   A single payload can have a maximum of 5 encounters.
-   A single payload can have a maximum of 50 participants per encounter.
-   Encounter participants are not mandatory. If a participant is specified, the participant type is mandatory. If the participant type is set to lead, the participant’s first name and last name are mandatory.

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

Request body

JSON example

```

```

Properties

| Name | Type | Description |
| --- | --- | --- |
| contactTracingEncounters.​referenceId | String | The ID of an existing contact encounter record in the Salesforce system. |
| contactTracingEncounters.​name | String | Required. The name for the encounter. |
| contactTracingEncounters.​estimatedParticipantCount | Integer | The estimated number of participants in the encounter. |
| contactTracingEncounters.​startDateTime | DateTime | Required. The start date and time of the encounter. Must be in YYYY-MM-DDT HH:MM:SS format. For example, 2020-05-18T09:15:00. |
| contactTracingEncounters.​duration | Integer | Required. The duration of the encounter in minutes. |
| contactTracingEncounters.​description | String | The description for the encounter. |
| contactTracingEncounters.​participants | List | The list of participants for the contact encounter. Each element in the list represents ContactEncounterParticipant. Valid values are:leademployeepatientNoteOnly one value is allowed. |
| contactTracingEncounters.​participants.participantType | String | Required. The encounter participant type. Valid values are:Lead— A new lead is created with the specified participant record type. If the record type does not exist in the org, an error message is returned. If the record type is not provided n the payload, the default record type (triage) is used.Employee— The system performs a lookup to the person account and the record type is ignored. This lookup can be done in the following ways:Using the referenceId that corresponds to the Salesforce record ID.Using sourceSystemId. For an employee, this ID is typically the employee ID or employee number. If a match is found, the contact encounter participant record is created with the contact field lookup pointing to the matched person account. If a match is not found, this record is rejected and an error message is provided in the response.Patient—The system performs a lookup to the person account and the record type is ignored. This lookup can be done in the following ways:Using the referenceId that corresponds to the Salesforce record ID.Using sourceSystemId. For a patient, this ID is the patient ID from an external source system. If a match is found, the contact encounter participant record is created with the contact_id lookup pointing to the matched person account. If a match is not found, this record is rejected and an error message is provided in the response.NoteOnly one value is allowed. |
| contactTracingEncounters.​participants.referenceId | String | The ID of an existing patient or employee record in the Salesforce system. If a payload has both the referenceID and the sourceSystemID, the referenceID is used for the patient or the employee lookup. |
| contactTracingEncounters.​participants.sourceSystemId | String | For a patient, the patient ID from an external source system at participant level. For an employee, the employee number representing the employee record in the Salesforce or the external system. If a payload has both the referenceID and the sourceSystemID, the referenceID is used for the patient or employee lookup. |
| contactTracingEncounters.​participants.recordTypeName | String | The name for the record type. The value for this field must be exactly the same as the label of the record type in the user interface. This field is used only when contactTracingEncounters.​participants.participantType is set to lead. |
| contactTracingEncounters.​participants.startTime | DateTime | The time when the encounter started. |
| contactTracingEncounters.​participants.duration | Integer | Required. The duration of the encounter in minutes. |
| contactTracingEncounters.​participants.firstName | String | Required. The first name of the participant. This field is used only when contactTracingEncounters.​participants.participantType is set to lead.NoteIf participants.referenceId is provided, this field is optional. |
| contactTracingEncounters.​participants.lastName | String | Required. The last name of the encounter participant. This field is used only when contactTracingEncounters.​participants.participantType is set to lead.NoteIf participants.referenceId is provided, this field is optional. |
| contactTracingEncounters.​participants.age | Integer | The age of the encounter participant. |
| contactTracingEncounters.​participants.phoneNumber | String | The phone number of the encounter participant. This field is used only when contactTracingEncounters.​participants.participantType is set to lead. |
| contactTracingEncounters.​participants.emailAddress | String | The email address of the encounter participant. This field is used only when contactTracingEncounters.​participants.participantType​ is set to lead. |
| contactTracingEncounters.​participants.address | String | The address of the encounter participant. This field is used only when contactTracingEncounters.​participants.participantType ​is set to lead. |
| contactTracingEncounters.​participants.address.city | String | The city of the encounter participant. This field is used only when contactTracingEncounters.​participants.participantType ​is set to lead. |
| contactTracingEncounters.​participants.address.state | String | The state of the encounter participant. This field is used only when contactTracingEncounters.​participants.participantType ​is set to lead. |
| contactTracingEncounters.​participants.address.country | String | The country of the encounter participant. This field is used only when contactTracingEncounters.​participants.participantType ​is set to lead. |
| contactTracingEncounters.​participants.address.postalCode | String | The postal code of the encounter participant. This field is used only when contactTracingEncounters.​participants.participantType ​is set to lead. |
| contactTracingEncounters.​participants.address.street | String | The street of the encounter participant. This field is used only when contactTracingEncounters.​participants.participantType ​is set to lead. |
| contactTracingEncounters.​location | Object (reference to location) | Identifies the location of the encounter. |
| contactTracingEncounters.​location.name | String | Required. The name of the location where the encounter took place. If the encounter location name already exists in the system, the existing location record is used and the following location fields are ignored:contactTracingEncounters.​location.descriptioncontactTracingEncounters.​location.latitudecontactTracingEncounters.​location.longitudecontactTracingEncounters.​location.encounteraddress.citycontactTracingEncounters.​location.encounteraddress.statecontactTracingEncounters.​location.encounteraddress.countrycontactTracingEncounters.​location.encounteraddress.postalCodecontactTracingEncounters.​location.encounteraddress.street |
| contactTracingEncounters.​location.description | String | The description of the location where the encounter took place. |
| contactTracingEncounters.​location.latitude | String | The latitude coordinate of the location where the encounter took place. |
| contactTracingEncounters.​location.longitude | String | The longitude coordinate of the location where the encounter took place. |
| contactTracingEncounters.​location.encounteraddress.city | String | The city where the encounter took place. |
| contactTracingEncounters.​location.encounteraddress.state | String | The state where the encounter took place. |
| contactTracingEncounters.​location.encounteraddress.country | String | The country where the encounter took place. |
| contactTracingEncounters.​location.encounteraddress.postalCode | String | The postal code of the location where the encounter took place. |
| contactTracingEncounters.​location.encounteraddress.street | String | The street where the encounter took place. |

Response body

JSON example

```

```

## Code Examples

```
/services/data/vXX.X/contact-tracing
```

```
{
    contactTracingEncounters: [
        {
            "referenceId":"0haRM000000000BYAQ",
            "name":"SF All Hands Q2"
            "estimatedParticipantCount": 10,
            "startDateTime" : "2020-06-20T00:00:00Z",
            "duration": 12,
            "description" : "held in SF tower",
            "participants" : [
                {
                    "participantType": "lead",
                    "recordTypeName": "triage",
                    "startTime": "2020-06-20T00:00:00Z",
                    "duration": 12,
                    "firstName" : "Leo",
                    "lastName" : "Machado",
                    "age" : 24,
                    "phoneNumber" : "24323322",
                    "emailAddress" : "lee.lo@mail.com",
                    "address":{
                        "city":"Seattle",
                        "state":"Washington",
                        "country":"US",
                        "postalCode":"11404",
                        "street":"Richmond St"
                    }
                },
                {
                    "participantType": "patient"
                    "referenceId":"001RM000004iUi8YAE",
                    "sourceSystemId":"211453",
                    "startTime": "2020-06-20T00:00:00Z",
                    "duration": 10,
                    "age" : 34
                }
            ],
            "location" : {
                "name":"Seattle County",
                "description":"Gala event",
                "latitude" : "47.6" ,
                "longitude": "122.3",
                "encounterAddress":{
                        "city":"Seattle",
                        "state":"Washington",
                        "country":"US",
                        "postalCode":"11404",
                        "street":"Dutch St"
                    }
            }

        }
    ]
    
}
```

```
{
  "encounters" : [ {
    "created" : false,
    "id" : "0haxx00000000rFAAQ",
    "location" : null,
    "participants" : [ {
      "created" : true,
      "employee" : null,
      "errors" : null,
      "id" : "0hbxx00000000G9AAI",
      "lead" : {
        "created" : true,
        "id" : "00Qxx000002TST8EAO"
      },
      "patient" : null
    }, {
      "created" : true,
      "employee" : null,
      "errors" : null,
      "id" : "0hbxx00000000GAAAY",
      "lead" : {
        "created" : true,
        "id" : "00Qxx000002TST9EAO"
      },
      "patient" : null
    }, {
      "created" : true,
      "employee" : null,
      "errors" : null,
      "id" : "0hbxx00000000GBAAY",
      "lead" : null,
      "patient" : {
        "created" : false,
        "id" : "001xx000003GZ6tAAG"
      }
    } ]
  } ],
  "errors" : null,
  "status" : null,
  "success" : true
}
```
