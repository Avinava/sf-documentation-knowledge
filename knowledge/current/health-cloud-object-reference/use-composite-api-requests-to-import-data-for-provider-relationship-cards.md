---
title: "Use Composite API Requests to Import Data for Provider Relationship Cards"
domain: health-cloud-object-reference
topic: use-composite-api-requests-to-import-data-for-provider-relationship-cards
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:34.142Z
estimatedTokens: 520
keywords: [Composite, API, Requests, Import, Data, Provider, Relationship, Cards, you’re, setting, show, practitioner, link, multiple, records]
---

# Use Composite API Requests to Import Data for Provider Relationship Cards

> If you’re setting up provider relationship cards to show practitioner information,
        you can use Composite API requests to create and link multiple records.

# Use Composite API Requests to Import Data for Provider Relationship Cards

If you’re setting up provider relationship cards to show practitioner information, you can use Composite API requests to create and link multiple records.

## Usage

You can create records individually by using the Lightning Platform SOAP API or REST API. Or you can use the [Composite resource](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_composite_composite.htm "HTML (New Window)") in REST API to create and link multiple records with a single API call. This approach lets you create 200 records per call.

## Example

Let’s say we want to add healthcare provider Dr. Scott Kaplan to your records. This example shows how to use a single API call to create Account, Contact, HealthcareProvider, PersonEducation, HealthcareProviderNpi, HealthcarePractitionerFacility, HealthcareProviderSpeciality, HealthcareFacilityNetwork, and HealthcareProviderTaxonomy records with Dr. Scott Kaplan's data. It also shows how to use a composite request to link records using Dr. Kaplan’s contactId as the practitionerId.

In this example, we assume that there are two Specialty records with SpecialtyCode Neurology and Cardiology, a PayerNetwork record with code United Healthcare, and a Taxonomy record with TaxonomyCode Critical Care. Setting allOrNone to True rolls back your request if a single record creation fails.

Execute this example using a composite request:

```

```

Example request body of the composite.json file.

```

```

Here’s a sample response:

```

```

In this example, Account ID 001RM000004MkdJYAS and Contact ID 0bYRM0000004CAG2A2 were created on execution. The same Contact ID is used as the PractitionerId where applicable.

#### See Also

-   [*Salesforce Help*: Set Up Provider Relationship Cards to Show Practitioner Information](https://help.salesforce.com/s/articleView?id=ind.admin_provider_cards.htm&type=5&language=en_US "Salesforce Help: Set Up Provider Relationship Cards to Show Practitioner
    Information - HTML (New Window)")

## Code Examples

```
curl https://yourInstance.salesforce.com/services/data/v47.0/composite/ -H "Authorization: Bearer token” -H "Content-Type: application/json" -d "@composite.json"
```

```
{
"allOrNone" : true,
"compositeRequest" : [
  {
  "method" : "POST",
  "url" : "/services/data/v47.0/sobjects/Account",
  "referenceId" : "scottKaplanAccount",
  "body" : { "Name" : "Dr. Scott Kaplan" }
  },
  {
  "method" : "POST",
  "url" : "/services/data/v47.0/sobjects/Contact",
  "referenceId" : "scottKaplanContact",
  "body" : { 
    "FirstName" : "Scott",
    "LastName" : "Kaplan",
    "AccountId" : "@{scottKaplanAccount.id}"    
    }
  },
  {
  "method" : "POST",
  "url" : "/services/data/v47.0/sobjects/HealthcareProvider",
  "referenceId" : "scottKaplanProvider",
  "body" : { "Name" : "Dr. Scott Kaplan",
             "PractitionerId" : "@{scottKaplanContact.id}"
           }
  },
  {
  "method" : "POST",
  "url" : "/services/data/v47.0/sobjects/PersonEducation",
  "referenceId" : "scottKaplanPersonEducation",
  "body" : { 
             "Name":  "Dr. Scott Kaplan",             
             "ContactId" : "@{scottKaplanContact.id}"
           }
  },
  {
  "method" : "POST",
  "url" : "/services/data/v47.0/sobjects/HealthcareProviderNpi",
  "referenceId" : "scottKaplanNpi",
  "body" : { 
             "Name":  "Dr. Scott Kaplan",
             "Npi" : "1558444601",
             "PractitionerId" : "@{scottKaplanContact.id}",
             "NpiType" : "Individual"
           }
  },
  {
  "method" : "POST",
  "url" : "/services/data/v47.0/sobjects/HealthcarePractitionerFacility",
  "referenceId" : "scottKaplanPractitionerFacility",
  "body" : { 
             "Name":  "Palo Alto Medical Foundation",
             "PractitionerId" : "@{scottKaplanContact.id}"
           }
  },
  {
  "method" : "POST",
  "url" : "/services/data/v47.0/sobjects/HealthcareProviderSpecialty",
  "referenceId" : "hcProviderSpecialtyRef1",
  "body" : { 
             "Name":  "Cardiology",
             "Specialty" : {
                "SpecialtyCode" : "Cardiology"
             },
             "PractitionerId" : "@{scottKaplanContact.id}"
           }
  },
  {
  "method" : "POST",
  "url" : "/services/data/v47.0/sobjects/HealthcareProviderSpecialty",
  "referenceId" : "scottKaplanSpeciality2",
  "body" : { 
             "Name":  "Neurology",
             "Specialty" : {
                "SpecialtyCode" : "Neurology"
             },
             "PractitionerId" : "@{scottKaplanContact.id}"
           }
  },
  {
  "method" : "POST",
  "url" : "/services/data/v47.0/sobjects/HealthcareFacilityNetwork",
  "referenceId" : "scottKaplanFacilityNetwork",
  "body" : { 
             "Name":  "United Healthcare",
             "PayerNetwork" : {
                "Code" : "United Healthcare" 
             },
             "PractitionerId" : "@{scottKaplanContact.id}"
           }
  },
  {
  "method" : "POST",
  "url" : "/services/data/v47.0/sobjects/HealthcareProviderTaxonomy",
  "referenceId" : "scottKaplanTaxonomy",
  "body" : { 
             "Name":  "Critical care",
             "Taxonomy" : {
                "TaxonomyCode" : "Critical Care"
             },
             "PractitionerId" : "@{scottKaplanContact.id}"
           }
  }

  ]
}
```

```
{
    "compositeResponse": [{
        "body": {
            "id": "001RM000004MkdJYAS",
            "success": true,
            "errors": []
        },
        "httpHeaders": {
            "Location": "/services/data/v47.0/sobjects/Account/001RM000004MkdJYAS"
        },
        "httpStatusCode": 201,
        "referenceId": "scottKaplanAccount"
    }, {
        "body": {
            "id": "003RM000006Ev2AYAS",
            "success": true,
            "errors": []
        },
        "httpHeaders": {
            "Location": "/services/data/v47.0/sobjects/Contact/003RM000006Ev2AYAS"
        },
        "httpStatusCode": 201,
        "referenceId": "scottKaplanContact"
    }, {
        "body": {
            "id": "0bYRM0000004CAG2A2",
            "success": true,
            "errors": []
        },
        "httpHeaders": {
            "Location": "/services/data/v47.0/sobjects/HealthcareFacilityNetwork/0bYRM0000004CAG2A2"
        },
        "httpStatusCode": 201,
        "referenceId": "scottKaplanFacilityNetwork"
    }, {
        "body": {
            "id": "0bPRM0000004CAB2A2",
            "success": true,
            "errors": []
        },
        "httpHeaders": {
            "Location": "/services/data/v47.0/sobjects/HealthcareProviderTaxonomy/0bPRM0000004CAB2A2"
        },
        "httpStatusCode": 201,
        "referenceId": "scottKaplanTaxonomy"
    }]
}
```
