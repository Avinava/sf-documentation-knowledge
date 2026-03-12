---
title: "Get Life Sciences Configuration Field Names and Values"
domain: life-sciences-dev-guide
topic: get-life-sciences-configuration-field-names-and-values
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:43.825Z
estimatedTokens: 412
keywords: [Life, Sciences, Configuration, key-value, pairs, their, records, category, REST, HTTP, Inputs, Outputs]
---

# Get Life Sciences Configuration Field Names and Values

> Gets key-value pairs of field names and their values for Life
            Sciences configuration records of a given category.

# Get Life Sciences Configuration Field Names and Values

Gets key-value pairs of field names and their values for Life Sciences configuration records of a given category.

This action is available in API version 65.0 and later.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/getLifeSciCnfgFieldNmAndVal

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| userId | TypeStringDescriptionRequiredID of the user for whom the configuration record is fetched. |
| categoryName | TypeStringDescriptionRequiredName of the category whose configuration record is fetched. The category type is always hierarchy. |
| fieldNamesList | TypeList<String>DescriptionOptionalThe comma-delimited list of field names of the configuration record that’s fetched. If this parameter is empty, the invocable action returns all the fields of the given category of configuration record for the specified user. |

## Outputs

| Output | Details |
| --- | --- |
| configurationFieldOutputRepresentations | TypeList<Apex>DescriptionCollection of Apex RestApi.LsConfigFieldOutput records that contain key-value pairs of field names and their values belonging to the active configuration record that was fetched. |

## Example

This sample request is for the Get Life Sciences Configuration Field Names and Values action.

```

```

This sample input is for calling the Get Life Sciences Configuration Field Names and Values action from the Apex code.

```

```

This sample response is for the Get Life Sciences Configuration Field Names and Values action.

```

```

## Code Examples

```
{
  "inputs": [
    {
    	"userId" : "005xx00000114xxYAA",
    	"categoryName": "ProviderSummarization",
    	"fieldnamesList" : ["ProviderSummaryConfiguration"]
    }
  ]
}
```

```apex
Invocable.Action action = Invocable.Action.createStandardAction('getLifeSciCnfgFieldNmAndVal');
action.setInvocationParameter('userId', '005xx00000114xxYAA');
action.setInvocationParameter('categoryName', 'ProviderSummarization');
List<Invocable.Action.Result> results = action.invoke();
System.debug('result = ' + results);
```

```
[
    {
        "actionName": "getLifeSciCnfgFieldNmAndVal",
        "errors": null,
        "invocationId": null,
        "isSuccess": true,
        "outcome": null,
        "outputValues": {
            "configurationFieldOutputRepresentations": [
                {
                    "value": "lsc4ce__providersummary",
                    "name": "ProviderSummaryConfiguration"
                }
            ]
        },
        "sortOrder": -1,
        "version": 1
    }
]
```
