---
title: "Auto-Install Request"
domain: bi-dev-guide-rest
topic: auto-install-request
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:03.996Z
estimatedTokens: 862
keywords: [Auto-Install]
---

# Auto-Install Request

> A auto-install request.

# Auto-Install Request

A auto-install request.

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| app​From​Request | Wave​Folder[] | The Analytics application that this auto-install request is associated with. | Supplemental, 50.0 | 50.0 |
| configuration | Auto​Install​Configuration[] | The configuration attributes for the auto-install request. | Supplemental, 50.0 | 50.0 |
| created​By | Wave​User | The user that created the auto-install request. | Small, 50.0 | 50.0 |
| created​Date | Date | The date and time the auto-install request was created. | Small, 50.0 | 50.0 |
| failed​Reason | Auto​Install​Request​Failed​Reason​Enum | The reason that the auto-install request failed, where applicable. Valid values are:App​Construction​FailureApp​Create​FailureApp​Installation​SkippedApp​Update​FailureCancel​FailedDelete​FailedDependency​CancelledDependency​FailureFailed​OtherFailed​To​EnqueueOrganization​IncompatibleRequest​CancelledRetriesE​xhaustedWave​Disabled | Small, 50.0 | 50.0 |
| folder​Id | String | The Analytics application folder ID for the auto-install request. | Small, 50.0 | 50.0 |
| folder​Label | String | The Analytics application folder label for the auto-install request. | Small, 50.0 | 50.0 |
| id | String | The ID for the auto-install request. | Small, 50.0 | 50.0 |
| last​Modified​By | Wave​User | The user that last modified the auto-install request. | Small, 50.0 | 50.0 |
| last​Modified​Date | Date | The date and time the auto-install request was last modified. | Small, 50.0 | 50.0 |
| parent​Requests | Auto​Install​Request[] | The collection of auto-install requests that the auto-install request depends on. | Supplemental, 50.0 | 50.0 |
| request​Log | String | The log for the auto-install request. | Big, 50.0 | 50.0 |
| request​Name | String | The user specified name for the auto-install request. | Small, 50.0 | 50.0 |
| request​Status | Auto​Install​Request​Status​Enum | The status of the auto-install request. Valid values are:App​In​ProgressCancelledEnqueuedFailedIn​ProgressNewSkippedSuccess | Small, 50.0 | 50.0 |
| request​Template | Template | The Analytics template used to create and update the app, where applicable. | Supplemental, 50.0 | 50.0 |
| request​Type | Auto​Install​Request​Type​Enum | The type of the auto-install request. Valid values are:Org​Compatibility​CheckStart​DataflowWave​App​Auto​UpdateWave​App​CreateWave​App​DeleteWave​App​UpdateWave​Enable | Small, 50.0 | 50.0 |
| template​Api​Name | String | The Analytics template API name or ID for the auto-install request. | Small, 50.0 | 50.0 |
| template​Version | String | The Analytics template version for the auto-install request. | Small, 50.0 | 50.0 |
| url | String | The URL to get the auto-install request. | Small, 50.0 | 50.0 |

#### See Also

-   [Auto-Install Requests List Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_autoinstallrequests.htm "Returns a collection of auto-install requests for Analytics embedded apps, creates an auto-install request, or deletes groups of auto-install requests by an Analytics folder ID or a template API name.")

-   [Auto-Install Request Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_autoinstallrequests_id.htm "Returns an auto-install request for an Analytics embedded app, updates, and deletes an auto-install request.")

## Related Topics

- Wave​Folder (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_wave_folder.htm)
- Auto​Install​Configuration (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_auto_install_configuration.htm)
- Wave​User (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_wave_user.htm)
- Template (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_template.htm)
- Auto-Install Requests List Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_autoinstallrequests.htm)
- Auto-Install Request Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_autoinstallrequests_id.htm)
