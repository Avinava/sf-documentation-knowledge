---
title: "Create Referral Action"
domain: health-cloud-object-reference
topic: create-referral-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:33.833Z
estimatedTokens: 381
keywords: [Referral, Action, patient, record, consists, multiple, objects, account, clinical, service, detail, REST, HTTP, Inputs, Outputs]
---

# Create Referral Action

> Create a patient referral record. A patient referral consists of
      multiple objects, such as an account, clinical service request, and clinical service request
      detail.

# Create Referral Action

Create a patient referral record. A patient referral consists of multiple objects, such as an account, clinical service request, and clinical service request detail.

This action is available in API version 59.0 and later for users with the Health Cloud license.

## Supported REST HTTP Methods

URI

/services/data/vXX.X/actions/standard/createReferral

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| matchDuplicates | TypeBooleanDescriptionIndicates whether to match a duplicate record that has the highest matching confidence (true) or not (false). |
| performers | TypeString[]DescriptionRequired. Comma-separated list of IDs of the organizations or practitioners who perform the service. |
| referralDetailsRecords | TypeReferenceDescriptionCollection of ClinicalServiceRequestDetails records that contain the referral information. |
| referralNotes | TypeStringDescriptionReferral notes. |
| referralRecord | TypeReferenceDescriptionRequired. ClinicalServiceRequest record that contains referral information. |
| requesterId | TypeStringDescriptionRequired. ID of the provider requesting the service. |
| subjectRecord | TypeReferenceDescriptionRequired. Account details of the patient being referred. |

## Outputs

| Output | Details |
| --- | --- |
| referralIds | TypeString[]DescriptionList of IDs of the new referral records. |

## Example

**Sample Request**

```

```

**Sample Response**

```

```

## Code Examples

```
{
   "inputs":[
      {
         "subjectRecord":{
            "Id":"001RM000005bZVvYAM",
            "FirstName":"Joe",
            "LastName":"Clark"
         },
         "requesterId":"001RM000005bZW0YAM",
         "performers":[
            "001RM000005bZW5YAM"
         ],
         "referralRecord":{
            "Priority":"Routine",
            "Status":"Draft",
            "Type":"Plan"
         },
         "matchDuplicates":false,
         "referralNotes":"This is an urgent request",
         "referralDetails":[
            {
               "detailType":"Insurance",
               "detailRecordType":"Member Plan",
               "detailRecordId":"0SqRM00000000N10AI"
            }
         ]
      }
   ]
}
```

```
{
  "errors": null,
  "isSuccess": true,
  "outputValues": {
    "referralIds": [
      "0lvxx00004000001AAB"
    ]
  }
}
```
