---
title: "Manage Models"
domain: bi-dev-guide-rest-sdd
topic: manage-models
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:05.047Z
estimatedTokens: 173
keywords: [Manage, Models, Einstein, Prediction, Service, REST, API, endpoints, model, unique, evaluate, predictors, predictions, improvements, allow]
---

# Manage Models

> The Einstein Prediction Service provides REST API endpoints to manage models. Each
    model has a unique id. A model is used to evaluate predictors and return predictions and
    improvements. These REST endpoints allow you to make updates to model metadata, but not update
    the actual predictive model.

# Manage Models

The Einstein Prediction Service provides REST API endpoints to manage models. Each model has a unique id. A model is used to evaluate predictors and return predictions and improvements. These REST endpoints allow you to make updates to model metadata, but not update the actual predictive model.

## Get Available Models

```

```

This code shows an example response of a [Smart Data Discovery Model Collection](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_model_collection.htm "A collection of Einstein Discovery prediction definitions.").

```

```

## Get Metadata for a Model

```

```

## Delete a Model

```

```

## Code Examples

```
GET /smartdatadiscovery​/predictiondefinitions​/<predictionDefinitionIdOrName>​/models
```

```apex
HTTP/1.1 200 OK
Date: Thu, 30 Jan 2020 17:34:12 GMT
Strict-Transport-Security: max-age=31536000; includeSubDomains
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
X-Robots-Tag: none
Cache-Control: no-cache,must-revalidate,max-age=0,no-store,private
Set-Cookie: BrowserId=uqyLl0OGEeq2RPW2iPHbvQ; domain=.salesforce.com; path=/; expires=Fri, 29-Jan-2021 17:34:12 GMT; Max-Age=31536000
Content-Type: application/json;charset=UTF-8
Vary: Accept-Encoding
Content-Encoding: gzip
Transfer-Encoding: chunked


{
  "models" : [ {
    "actionableVariables" : [ {
      "label" : "Type",
      "name" : "Type",
      "type" : "Text"
    }, {
      "label" : "Ownership",
      "name" : "Ownership",
      "type" : "Text"
    }, {
      "label" : "Rating",
      "name" : "Rating",
      "type" : "Text"
    }, {
      "label" : "Division",
      "name" : "Division",
      "type" : "Text"
    }, {
      "label" : "AccountScore",
      "name" : "AccountScore",
      "type" : "Text"
    } ],
    "createdBy" : {
      "id" : "005B0000002zz1lIAA",
      "name" : "MyUserName",
      "profilePhotoUrl" : "https://MyDomainName.file.force.com/profilephoto/729B00000009ttx/T"
    },
    "createdDate" : "2020-01-17T00:24:35.000Z",
    "fieldMappingList" : [ {
      "modelField" : {
        "label" : "CloseDate",
        "name" : "CloseDate",
        "type" : "Date"
      }
    }, {
      "modelField" : {
        "label" : "Industry",
        "name" : "Industry",
        "type" : "Text"
      }
    }, {
      "modelField" : {
        "label" : "StartDate",
        "name" : "StartDate",
        "type" : "Date"
      }
    }, {
      "modelField" : {
        "label" : "Ownership",
        "name" : "Ownership",
        "type" : "Text"
      }
    }, {
      "modelField" : {
        "label" : "Type",
        "name" : "Type",
        "type" : "Text"
      }
    }, {
      "modelField" : {
        "label" : "Rating",
        "name" : "Rating",
        "type" : "Text"
      }
    }, {
      "modelField" : {
        "label" : "BillingState",
        "name" : "BillingState",
        "type" : "Text"
      }
    }, {
      "modelField" : {
        "label" : "Division",
        "name" : "Division",
        "type" : "Text"
      }
    }, {
      "modelField" : {
        "label" : "AccountScore",
        "name" : "AccountScore",
        "type" : "Text"
      }
    } ],
    "filters" : [ ],
    "id" : "1OtB00000004CApKAM",
    "label" : "CLV",
    "lastModifiedBy" : {
      "id" : "005B0000002zz1lIAA",
      "name" : "MyUserName",
      "profilePhotoUrl" : "https://MyDomainName.file.force.com/profilephoto/729B00000009ttx/T"
    },
    "lastModifiedDate" : "2020-01-17T00:24:35.000Z",
    "model" : {
      "id" : "1OTB000000000ajOAA"
    },
    "modelType" : "Regression",
    "name" : "CLV",
    "predictionDefinitionUrl" : "/services/data/v52.0/smartdatadiscovery/predictiondefinitions/1ORB00000004CApOAM",
    "sortOrder" : 0,
    "status" : "Enabled",
    "url" : "/services/data/v52.0/smartdatadiscovery/predictiondefinitions/1ORB00000004CApOAM/models/1OtB00000004CApKAM"
  }, {
    "actionableVariables" : [ {
      "label" : "Industry",
      "name" : "Industry",
      "type" : "Text"
    }, {
      "label" : "Type",
      "name" : "Type",
      "type" : "Text"
    }, {
      "label" : "Ownership",
      "name" : "Ownership",
      "type" : "Text"
    }, {
      "label" : "Rating",
      "name" : "Rating",
      "type" : "Text"
    }, {
      "label" : "Division",
      "name" : "Division",
      "type" : "Text"
    } ],
    "createdBy" : {
      "id" : "005B0000002zz1lIAA",
      "name" : "MyUserName",
      "profilePhotoUrl" : "https://MyDomainName.file.force.com/profilephoto/729B00000009ttx/T"
    },
    "createdDate" : "2020-01-17T00:26:14.000Z",
    "fieldMappingList" : [ {
      "modelField" : {
        "label" : "CloseDate",
        "name" : "CloseDate",
        "type" : "Date"
      }
    }, {
      "modelField" : {
        "label" : "Industry",
        "name" : "Industry",
        "type" : "Text"
      }
    }, {
      "modelField" : {
        "label" : "StartDate",
        "name" : "StartDate",
        "type" : "Date"
      }
    }, {
      "modelField" : {
        "label" : "Ownership",
        "name" : "Ownership",
        "type" : "Text"
      }
    }, {
      "modelField" : {
        "label" : "Type",
        "name" : "Type",
        "type" : "Text"
      }
    }, {
      "modelField" : {
        "label" : "Rating",
        "name" : "Rating",
        "type" : "Text"
      }
    }, {
      "modelField" : {
        "label" : "BillingState",
        "name" : "BillingState",
        "type" : "Text"
      }
    }, {
      "modelField" : {
        "label" : "Division",
        "name" : "Division",
        "type" : "Text"
      }
    }, {
      "modelField" : {
        "label" : "AccountScore",
        "name" : "AccountScore",
        "type" : "Text"
      }
    } ],
    "filters" : [ ],
    "id" : "1OtB00000004CAqKAM",
    "label" : "CLV",
    "lastModifiedBy" : {
      "id" : "005B0000002zz1lIAA",
      "name" : "MyUserName",
      "profilePhotoUrl" : "https://MyDomainName.file.force.com/profilephoto/729B00000009ttx/T"
    },
    "lastModifiedDate" : "2020-01-17T00:26:14.000Z",
    "model" : {
      "id" : "1OTB000000000ajOAA"
    },
    "modelType" : "Regression",
    "name" : "CLV",
    "predictionDefinitionUrl" : "/services/data/v52.0/smartdatadiscovery/predictiondefinitions/1ORB00000004CApOAM",
    "sortOrder" : 1,
    "status" : "Enabled",
    "url" : "/services/data/v52.0/smartdatadiscovery/predictiondefinitions/1ORB00000004CApOAM/models/1OtB00000004CAqKAM"
  } ],
  "totalSize" : 2,
  "url" : "/services/data/v52.0/smartdatadiscovery/predictiondefinitions/1ORB00000004CApOAM/models"
}
```

```
GET /smartdatadiscovery​/predictiondefinitions​/<predictionDefinitionIdOrName>​/models/<modelId>
```

```
DELETE /smartdatadiscovery​/predictiondefinitions​/<predictionDefinitionIdOrName>​/models/<modelId>
```

## Related Topics

- Smart Data Discovery Model Collection (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_model_collection.htm)
