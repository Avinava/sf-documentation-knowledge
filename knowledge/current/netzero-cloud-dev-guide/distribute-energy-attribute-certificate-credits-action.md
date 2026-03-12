---
title: "Distribute Energy Attribute Certificate Credits Action"
domain: netzero-cloud-dev-guide
topic: distribute-energy-attribute-certificate-credits-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:57.227Z
estimatedTokens: 761
keywords: [Distribute, Energy, Attribute, Certificate, Credits, Action, Claim, renewable, electricity, usage, stationary, asset, records, assists, sustainability]
---

# Distribute Energy Attribute Certificate Credits Action

> Claim
   renewable electricity usage in stationary asset energy use records. This action assists
   sustainability managers by allocating renewable energy certificates to these records,
   streamlining the process of claiming renewable electricity and reducing CO2
   emissions.

# Distribute Energy Attribute Certificate Credits Action

Claim renewable electricity usage in stationary asset energy use records. This action assists sustainability managers by allocating renewable energy certificates to these records, streamlining the process of claiming renewable electricity and reducing CO2 emissions.

This action is available in API version 60.0 and later.

## Special Access Rules

To access the Distribute Energy Attribute Certificate Credits action, you must have NZCMngEnrgyAttrCertCr org permission enabled. Admin can control user access to this feature in an org using MngEnrgyAttrCertCredit user permission.

## Supported REST HTTP Methods

URI

/services/data/v54.0/actions/standard/dstrEnergyAttrCertCredits

Formats

JSON, XML

HTTP Methods

GET, HEAD, POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| allocationMethod | TypestringDescriptionRequired. The method used to allocate the specified credits. Valid values are:DefaultEquallyHighestEmissionsFirstHighestFactorFirstStartDateAscStartDateDesc |
| city | TypestringDescriptionThe city for which the stationary asset energy use records are filtered. |
| country | TypestringDescriptionThe country for which the stationary asset energy use records are filtered. |
| endDate | TypedateDescriptionThe end date to filter stationary asset energy use records. This is a required field when the Stationary Asset Energy Use IDs list is not specified.Valid date format is YYYY-MM-DD. |
| energyAttributeCertCreditIds | TypestringDescriptionA comma-separated list of energy attribute certificate credit record IDs to be distributed. |
| energyAttributeCertPurchaseId | TypestringDescriptionThe ID of the energy attribute certificate purchase record to retrieve energy attribute certificate credit records. |
| parentCompanyId | TypestringDescriptionThe account ID of the parent company to retrieve stationary asset energy use records. |
| startDate | TypedateDescriptionThe start date to filter stationary asset energy use records. This is a required field when the Stationary Asset Energy Use IDs list is not specified.Valid date format is YYYY-MM-DD. |
| state | TypestringDescriptionThe state for which the stationary asset energy use records are filtered. |
| stnryAssetCrbnFtprntId | TypestringDescriptionThe ID of the stationary asset carbon footprint record to retrieve stationary asset energy use records. |
| stationaryAssetEnergyUseIds | TypestringDescriptionA comma-separated list of stationary asset energy user record IDs for credit assignment |

## Outputs

| Output | Details |
| --- | --- |
| actionDetails | TypestringDescriptionAdditional details about the action's execution. |

## Example

GET

This example shows how to get information about the Distribute Energy Attribute Certificate Credits action type.

```

```

POST

Here’s a request to retrieve records of Stationary Asset Energy Use by applying search filters based on credit IDs.

```

```

Here’s a response for this action.

```

```

## Code Examples

```
curl --include --request GET \
--header "Authorization: Authorization: Bearer 00DR...xyz" \
--header "Content-Type: application/json" \
"https://instance.salesforce.com/services/data/v51.0/actions/standard/dstrEnergyAttrCertCredits"
```

```
{
  "inputs": [
    {
      "allocationMethod": "equally",
      "startDate": "2015-01-01",
      "endDate": "2015-12-31",
      "state": "California",
      "city": "San Francisco",
      "energyAttributeCertCreditIds": [
        "16Uxx0000004MRkEAM",
        "16Uxx0000002MRTkEAN"
      ]
    }
  ]
}
```

```
[
  {
    "actionName": "dstrEnergyAttrCertCredits",
    "errors": null,
    "isSuccess": true,
    "outputValues": {
      "actionDetails": "The distribution process is in progress. Wait for the process to complete"
    },
    "version": 1
  }
]
```
