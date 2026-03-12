---
title: "Manage Model Refresh Jobs"
domain: bi-dev-guide-rest-sdd
topic: manage-model-refresh-jobs
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:05.064Z
estimatedTokens: 281
keywords: [Manage, Model, Refresh, Jobs, Einstein, Prediction, Service, REST, API, endpoints, retrieve, metadata, Job, Task]
---

# Manage Model Refresh Jobs

> The Einstein Prediction Service provides REST API endpoints to retrieve metadata for
    model refresh jobs.

# Manage Model Refresh Jobs

The Einstein Prediction Service provides REST API endpoints to retrieve metadata for model refresh jobs.

Model refresh jobs are configured in Model Manager. To set up model refresh jobs, see [Configure Automatic Model Refresh for a Prediction Definition](https://help.salesforce.com/s/articleView?id=analytics.bi_edd_model_manager_refresh.htm&type=5&language=en_US).

## Get Prediction Refresh Jobs

```

```

The following code shows an example [Smart Data Discovery Refresh Job Collection](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_refresh_job_collection.htm "A collection of Einstein Discovery refresh jobs.") response.

```

```

## Get Prediction Refresh Job Details

```

```

The following code shows an example response.

```

```

## Get Prediction Refresh Job Task Details

```

```

The following code shows an example [Smart Data Discovery Refresh Job](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_refresh_job.htm "An Einstein Discovery refresh job.") response.

```

```

## Code Examples

```
GET /smartdatadiscovery​/refresh-jobs
```

```
{
  "refreshJobs" : [ {
    "createdBy" : {
      "id" : "005B0000006DdetIAC",
      "name" : "YourUserName",
      "profilePhotoUrl" : "https://MyDomainName.file.force.com/profilephoto/729B0000000Eqe5/T"
    },
    "createdDate" : "2020-09-09T16:16:39.000Z",
    "endTime" : "2020-09-09T16:20:02.000Z",
    "id" : "1OXB00000008OIPOA2",
    "refreshTarget" : {
      "id" : "1ORB0000000TNXyOAO"
     },
    "refreshTasksUrl" : "/services/data/v52.0/smartdatadiscovery/refresh-jobs/1OXB00000008OIPOA2/refresh-tasks",
    "startTime" : "2020-09-09T16:16:41.000Z",
    "status" : "Success", 
    "type" : "UserTriggered",        "url" : "/services/data/v52.0/smartdatadiscovery/refresh-jobs/1OXB00000008OIPOA2"
  } ],
  "totalSize" : 1,
  "url" : "/services/data/v52.0/smartdatadiscovery/refresh-jobs"
}
```

```
GET /smartdatadiscovery/refresh-jobs​/<refreshJobId>
```

```
{
  "refreshJobs" : [ {
    "createdBy" : {
      "id" : "005B0000006DdetIAC",
      "name" : "YourUserName",
      "profilePhotoUrl" : "https://MyDomainName.file.force.com/profilephoto/729B0000000Eqe5/T"
    },
    "createdDate" : "2020-09-09T16:16:39.000Z",
    "endTime" : "2020-09-09T16:20:02.000Z",
    "id" : "1OXB00000008OIPOA2",
    "refreshTarget" : {
      "id" : "1ORB0000000TNXyOAO"
    },
    "refreshTasksUrl" : "/services/data/v52.0/smartdatadiscovery/refresh-jobs/1OXB00000008OIPOA2/refresh-tasks",
    "startTime" : "2020-09-09T16:16:41.000Z",
    "status" : "Success",
    "type" : "UserTriggered",
    "url" : "/services/data/v52.0/smartdatadiscovery/refresh-jobs/1OXB00000008OIPOA2"
  }
```

```
GET /smartdatadiscovery/refresh-jobs​/<refreshJobId>​/refresh-tasks
```

## Related Topics

- Smart Data Discovery Refresh Job Collection (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_refresh_job_collection.htm)
- Smart Data Discovery Refresh Job (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_refresh_job.htm)
