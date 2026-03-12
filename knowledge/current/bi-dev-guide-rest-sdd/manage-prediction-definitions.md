---
title: "Manage Prediction Definitions"
domain: bi-dev-guide-rest-sdd
topic: manage-prediction-definitions
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:05.060Z
estimatedTokens: 353
keywords: [Manage, Prediction, Definitions, Einstein, Service, REST, API, endpoints, definition, model, trying, predict, Salesforce, entity, associated]
---

# Manage Prediction Definitions

> The Einstein Prediction Service provides REST API endpoints to manage prediction
    definitions. A prediction definition specifies what the model is trying to predict and the
    Salesforce entity associated with the prediction. Each prediction definition has a unique id.
    Only certain attributes of a prediction definition can be modified.

# Manage Prediction Definitions

The Einstein Prediction Service provides REST API endpoints to manage prediction definitions. A prediction definition specifies what the model is trying to predict and the Salesforce entity associated with the prediction. Each prediction definition has a unique id. Only certain attributes of a prediction definition can be modified.

## Get Available Prediction Definitions

```

```

The following code shows an example [Smart Data Discovery Prediction Definition Collection](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_prediction_definition_collection.htm "A collection of Einstein Discovery prediction definitions.") response:

```

```

## Get Metadata for a Prediction Definition

```

```

The following code shows an example [Smart Data Discovery Prediction Definition](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_prediction_definition.htm "An Einstein Discovery prediction definition.") response:

```

```

The refreshConfig section describes model refresh jobs for this prediction. Model refresh jobs are configured in Model Manager as described in [Configure Automatic Model Refresh for a Prediction](https://help.salesforce.com/s/articleView?id=analytics.bi_edd_model_manager_refresh.htm&type=5&language=en_US).

## Delete a Prediction Definition

```

```

## Code Examples

```
GET ​/smartdatadiscovery​/predictiondefinitions
```

```apex
HTTP/1.1 200 OK
Date: Tue, 15 Sep 2020 21:58:01 GMT
Strict-Transport-Security: max-age=31536000; includeSubDomains
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
X-Robots-Tag: none
X-B3-TraceId: d16d33c8d031db6e
X-B3-SpanId: d16d33c8d031db6e
X-B3-Sampled: 0
Cache-Control: no-cache,must-revalidate,max-age=0,no-store,private
Set-Cookie: BrowserId=hf3WNPeeEeqhuDcd5jEV6A; domain=.salesforce.com; path=/; expires=Wed, 15-Sep-2021 21:58:01 GMT; Max-Age=31536000
Content-Type: application/json;charset=UTF-8
Vary: Accept-Encoding
Content-Encoding: gzip
Transfer-Encoding: chunked


{
  "nextPageUrl" : null,
  "predictionDefinitions" : [ {
    "countOfActiveModels" : 1,
    "countOfModels" : 1,
    "createdBy" : {
      "id" : "005B0000001nz1lIAA",
      "name" : "MyUserName",
      "profilePhotoUrl" : "https://MyDomainName.file.force.com/profilephoto/729B00000008pwV/T"
    },
    "createdDate" : "2020-04-22T01:25:19.000Z",
    "id" : "1ORB000000000bOOAQ",
    "label" : "Maximize CLV - first version",
    "lastModifiedBy" : {
      "id" : "005B0000001nz1lIAA",
      "name" : "MyUserName",
      "profilePhotoUrl" : "https://MyDomainName.file.force.com/profilephoto/729B00000008pwV/T"
    },
    "lastModifiedDate" : "2020-04-22T01:25:19.000Z",
    "modelsUrl" : "/services/data/v52.0/smartdatadiscovery/predictiondefinitions/1ORB000000000bOOAQ/models",
    "name" : "Maximize_CLV_first_version7c48e8db",
    "outcome" : {
      "goal" : "Maximize",
      "label" : "CLV",
      "name" : "CLV"
    },
    "predictionType" : "Regression",
    "status" : "Enabled",
    "url" : "/services/data/v52.0/smartdatadiscovery/predictiondefinitions/1ORB000000000bOOAQ"
  }, {
    "countOfActiveModels" : 1,
    "countOfModels" : 1,
    "createdBy" : {
      "id" : "005B0000001nz1lIAA",
      "name" : "MyUserName",
      "profilePhotoUrl" : "https://MyDomainName.file.force.com/profilephoto/729B00000008pwV/T"
    },
    "createdDate" : "2020-01-13T21:28:06.000Z",
    "id" : "1ORB00000004CAkOAM",
    "label" : "Won_Won",
    "lastModifiedBy" : {
      "id" : "005B0000001nz1lIAA",
      "name" : "MyUserName",
      "profilePhotoUrl" : "https://MyDomainName.file.force.com/profilephoto/729B00000008pwV/T"
    },
    "lastModifiedDate" : "2020-04-14T20:37:21.000Z",
    "modelsUrl" : "/services/data/v52.0/smartdatadiscovery/predictiondefinitions/1ORB00000004CAkOAM/models",
    "name" : "Won_Wone329300b",
    "outcome" : {
      "goal" : "Maximize",
      "label" : "Won",
      "name" : "Won"
    },
    "predictionType" : "Classification",
    "status" : "Enabled",
    "url" : "/services/data/v52.0/smartdatadiscovery/predictiondefinitions/1ORB00000004CAkOAM"
  }, {
    "countOfActiveModels" : 2,
    "countOfModels" : 2,
    "createdBy" : {
      "id" : "005B0000001nz1lIAA",
      "name" : "MyUserName",
      "profilePhotoUrl" : "https://MyDomainName.file.force.com/profilephoto/729B00000008pwV/T"
    },
    "createdDate" : "2020-01-17T00:24:33.000Z",
    "id" : "1ORB00000004CApOAM",
    "label" : "CLV Prediction",
    "lastModifiedBy" : {
      "id" : "005B0000001nz1lIAA",
      "name" : "MyUserName",
      "profilePhotoUrl" : "https://MyDomainName.file.force.com/profilephoto/729B00000008pwV/T"
    },
    "lastModifiedDate" : "2020-01-17T00:24:33.000Z",
    "modelsUrl" : "/services/data/v52.0/smartdatadiscovery/predictiondefinitions/1ORB00000004CApOAM/models",
    "name" : "CLV_Prediction3d72828a",
    "outcome" : {
      "goal" : "Maximize",
      "label" : "CLV",
      "name" : "CLV"
    },
    "predictionType" : "Regression",
    "status" : "Enabled",
    "url" : "/services/data/v52.0/smartdatadiscovery/predictiondefinitions/1ORB00000004CApOAM"
  }, {
    "countOfActiveModels" : 1,
    "countOfModels" : 1,
    "createdBy" : {
      "id" : "005B0000001nz1lIAA",
      "name" : "MyUserName",
      "profilePhotoUrl" : "https://MyDomainName.file.force.com/profilephoto/729B00000008pwV/T"
    },
    "createdDate" : "2020-02-04T08:28:14.000Z",
    "id" : "1ORB00000004CCCOA2",
    "label" : "CLV_CLV",
    "lastModifiedBy" : {
      "id" : "005B0000001nz1lIAA",
      "name" : "MyUserName",
      "profilePhotoUrl" : "https://MyDomainName.file.force.com/profilephoto/729B00000008pwV/T"
    },
    "lastModifiedDate" : "2020-02-04T08:28:14.000Z",
    "modelsUrl" : "/services/data/v52.0/smartdatadiscovery/predictiondefinitions/1ORB00000004CCCOA2/models",
    "name" : "CLV_CLVa7cf508c",
    "outcome" : {
      "goal" : "Maximize",
      "label" : "CLV",
      "name" : "CLV"
    },
    "predictionType" : "Regression",
    "status" : "Enabled",
    "url" : "/services/data/v52.0/smartdatadiscovery/predictiondefinitions/1ORB00000004CCCOA2"
  } ],
  "totalSize" : 4,
  "url" : "/services/data/v52.0/smartdatadiscovery/predictiondefinitions"
}
```

```
GET /smartdatadiscovery​/predictiondefinitions​/<predictionDefinitionIdOrName>
```

```apex
HTTP/1.1 200 OK
Date: Thu, 17 Sep 2020 16:27:43 GMT
Strict-Transport-Security: max-age=31536002; includeSubDomains
Public-Key-Pins-Report-Only: pin-sha256="9n0izTnSRF+W4W4JTq51avSXkWhQB8duS2bxVLfzXsY="; pin-sha256="5kJvNEMw0KjrCAu7eXY5HZdvyCS13BbA0VJG1RSP91w="; pin-sha256="njN4rRG+22dNXAi+yb8e3UMypgzPUPHlv4+foULwl1g="; max-age=86400; includeSubDomains; report-uri="https://a.forcesslreports.com/hpkp-report/00DB0000000K2Uzm";
Expect-CT: max-age=86400, report-uri="https://a.forcesslreports.com/Expect-CT-report/00DB0000000K2Uzm"
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
X-Robots-Tag: none
X-B3-TraceId: da9949518cdecb56
X-B3-SpanId: da9949518cdecb56
X-B3-Sampled: 0
Cache-Control: no-cache,must-revalidate,max-age=0,no-store,private
Set-Cookie: BrowserId=tsMTvvkCEeqU9WHivUXHfA; domain=.salesforce.com; path=/; expires=Fri, 17-Sep-2021 16:27:43 GMT; Max-Age=31536000
Content-Type: application/json;charset=UTF-8
Vary: Accept-Encoding
Content-Encoding: gzip
Transfer-Encoding: chunked


{
  "countOfActiveModels" : 1,
  "countOfModels" : 1,
  "createdBy" : {
    "id" : "005B0000004iaa7IAA",
    "name" : "Admin User",
    "profilePhotoUrl" : "https://MyDomainName.file.force.com/profilephoto/729B0000000EmIX/T"
  },
  "createdDate" : "2020-03-31T01:18:51.000Z",
  "id" : "1ORB000000000JuOAI",
  "label" : "ItalyInfo",
  "lastModifiedBy" : {
    "id" : "005B00000051RBqIAM",
    "name" : "YourUserName",
    "profilePhotoUrl" : "https://MyDomainName.file.force.com/profilephoto/729B00000003ARf/T"
  },
  "lastModifiedDate" : "2020-08-18T23:09:25.000Z",
  "modelsUrl" : "/services/data/v52.0/smartdatadiscovery/predictiondefinitions/1ORB000000000JuOAI/models",
  "name" : "ItalyInfo9461190a",
  "outcome" : {
    "goal" : "Minimize",
    "label" : "Total Cases",
    "name" : "totale_casi"
  },
  "predictionType" : "Regression",
  "pushbackField" : {
    "label" : "mypredField",
    "name" : "Custom_Opportunity__c.mypredField__c"
  },
  "refreshConfig" : {
    "isEnabled" : true,
    "recipientList" : [ {
      "displayName" : "YourUserName",
      "id" : "005B00000051RBqIAM",
      "type" : "User"
    } ],
    "schedule" : {
      "dayInWeek" : "wednesday",
      "frequency" : "monthlyrelative",
      "nextScheduledDate" : "2020-10-08T02:00:00.000Z",
      "time" : {
        "hour" : 19,
        "timeZone" : {
          "gmtOffset" : -7.0,
          "name" : "Pacific Daylight Time",
          "zoneId" : "America/Los_Angeles"
        }
      },
      "weekInMonth" : "first"
    },
    "shouldScoreAfterRefresh" : false,
    "userContext" : {
      "id" : "005B00000051RBqIAM"
    },
    "warningThresholdPercentage" : 0.05
  },
  "status" : "Enabled",
  "subscribedEntity" : "Custom_Opportunity__c",
  "url" : "/services/data/v52.0/smartdatadiscovery/predictiondefinitions/1ORB000000000JuOAI"
}
```

```
DELETE /smartdatadiscovery​/predictiondefinitions​/<predictionDefinitionIdOrName>
```

## Related Topics

- Smart Data Discovery Prediction Definition Collection (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_prediction_definition_collection.htm)
- Smart Data Discovery Prediction Definition (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_prediction_definition.htm)
