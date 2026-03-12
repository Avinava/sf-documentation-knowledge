---
title: "Work with Embedded App Auto-Install Requests"
domain: bi-dev-guide-wave-templates
topic: work-with-embedded-app-auto-install-requests
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:07.440Z
estimatedTokens: 2666
keywords: [Work, Embedded, App, Auto-Install, Requests, templates, apps, any, custom, code, add, customizations, lifecycle, Apex, classes]
---

# Work with Embedded App Auto-Install Requests

> Embedded app templates can create apps without any custom code, but you can add
    customizations to your embedded app lifecycle. Create Apex classes that use the CRM Analytics
    auto-installer to create and manage auto-install requests for your embedded app.

# Work with Embedded App Auto-Install Requests

Embedded app templates can create apps without any custom code, but you can add customizations to your embedded app lifecycle. Create Apex classes that use the CRM Analytics auto-installer to create and manage auto-install requests for your embedded app.

## What Is the CRM Analytics Auto-Installer?

The CRM Analytics auto-installer is a metadata-based API that manages the lifecycle of a CRM Analytics templated app. No user access to CRM Analytics Studio and the template configuration wizard is required.

The auto-installer provides management functionality for embedded apps. Creating customized runtime functionality requires knowledge of Apex. Auto-install requests can also be managed via Analytics CLI Plugin commands or using Connect API REST calls.

## Limits and Restrictions

Concurrent Auto-Install Requests

The auto-installer uses asynchronous processing that allows a maximum of 10 Enqueued, InProgress, or AppInProgress requests at a time. Until existing requests complete their cycle or their RequestStatus is updated to Cancelled, no more requests can transition from New to Enqueued.

App-Specific Concurrent Requests

No app-specific auto-install WaveAppDelete, StartDataflow, WaveAppUpdate requests can be Enqueued until existing requests that are in progress are completed or canceled with the same folder id.

Cancellation Policy

If an auto-install request is canceled, the auto-installer attempts to abort the request, but there’s no guarantee when or if the request can be aborted.

## Auto-Installer Use Cases

These use cases show how to create customized auto-install app management using Apex code. Examples include enabling CRM Analytics in the install org, configuring the app creation settings, and creating and updating embedded apps.

CRM Analytics Enablement

Any use of a CRM Analytics templated app requires the CRM Analytics preference to be enabled before an app can be created and managed.

The CRM Analytics auto-installer can automatically enable this preference so any other auto-installer task can be taken. The auto-installer can enable or disable any of these preferences based on the Auto-Installer configuration specified by the API caller:

-   CRM Analytics Replication
-   Sharing Inheritance

Apex Example

Map<String, Object> configuration = new Map<String, Object>(); Map<String, Object> waveEnableConfiguration = new Map<String,Object>(); waveEnableConfiguration.put('replicationEnabled', true); waveEnableConfiguration.put('templatesEnabled', true); waveEnableConfiguration.put('inheritedSharingEnabled', true); configuration.put('waveEnableConfiguration', waveEnableConfiguration); WaveAutoInstallRequest newRequest = new WaveAutoInstallRequest(); newRequest.put('Name', 'Test WaveEnable request'); newRequest.put('RequestStatus', 'Enqueued'); newRequest.put('RequestType', 'WaveEnable'); newRequest.put('Configuration', JSON.serialize(configuration)); insert newRequest;

For information on auto-install requests and auto-install configuration metadata, see:

-   [WaveAutoInstallRequest](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_waveautoinstallrequest.htm) reference
-   [AutoInstallAppConfigurationRepresentation](https://developer.salesforce.com/docs/atlas.en-us.260.0.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_autoinstallrequests_id.htm#AutoInstallAppConfigurationRepresentation) reference.

App Create

The WaveAppCreate auto-install task creates a CRM Analytics app based on the TemplateApiName and values specified by the caller.

After the app creation process is complete, the auto-install request is updated automatically by the app template framework. If deleteAppOnConstructionFailure is set to true and the app fails to create, the app is automatically deleted.

Map<String, Object> configuration = new Map<String, Object>(); Map<String, Object> values = new Map<String, Object>(); values.put(‘myVariableName1’,’someValue’); Map<String, Object> appConfiguration = new Map<String,Object>(); appConfiguration.put('deleteAppOnConstructionFailure', true); appConfiguration.put('values', values); configuration.put('appConfiguration', appConfiguration); WaveAutoInstallRequest newRequest = new WaveAutoInstallRequest(); newRequest.put('Name', 'Test WaveAppCreate request'); newRequest.put(‘TemplateApiName’, 'template\_test'); newRequest.put('RequestStatus', 'Enqueued'); newRequest.put('RequestType', 'WaveAppCreate'); newRequest.put('Configuration', JSON.serialize(configuration)); insert newRequest;

App Update

The WaveAppUpdate auto-install task performs an upgrade or reset on an existing CRM Analytics app based on the TemplateApiName, the FolderId of the app, and values specified by the caller.

After the app update is completed, the app template framework automatically updates the auto-install request. If deleteAppOnConstructionFailure is set to true and the app fails to update, the app is automatically deleted.

Map<String, Object> configuration = new Map<String, Object>(); Map<String, Object> values = new Map<String, Object>(); values.put(‘myVariableName1’,’someValue’); Map<String, Object> appConfiguration = new Map<String,Object>(); appConfiguration.put('deleteAppOnConstructionFailure', true); appConfiguration.put('values', values); configuration.put('appConfiguration', appConfiguration); WaveAutoInstallRequest newRequest = new WaveAutoInstallRequest(); newRequest.put('Name', 'Test WaveAppUpdate request'); newRequest.put(‘TemplateApiName’, 'template\_test'); newRequest.put('RequestStatus', 'Enqueued'); newRequest.put('FolderId', '<folder\_id>'); newRequest.put('RequestType', 'WaveAppUpdate'); newRequest.put('Configuration', JSON.serialize(configuration)); insert newRequest;

App Delete

The WaveAppDelete auto-install task simply deletes an existing CRM Analytics app based on the TemplateApiName and FolderId that the caller specifies.

No auto-install requests can be in progress for the specified folder id when the delete request is enqueued.

WaveAutoInstallRequest newRequest = new WaveAutoInstallRequest(); newRequest.put('Name', 'Test WaveAppDelete request'); newRequest.put('RequestStatus', 'Enqueued'); newRequest.put('FolderId', '<folder\_id>'); newRequest.put('RequestType', 'WaveAppDelete'); // Not required, but best practice is to add the attribute so that related // requests are aggregated together by template api name and folder. newRequest.put(‘TemplateApiName’, 'template\_test'); insert newRequest;

Start Dataflow

The StartDataflow auto-install task executes a dataflow for the specified folder. Dataflow execution is only allowed for apps that are based on an Embedded App template.

After the dataflow is completed, the templating framework automatically marks the auto-install request as completed.

WaveAutoInstallRequest newRequest = new WaveAutoInstallRequest(); newRequest.put('Name', 'Test StartDataflow request'); newRequest.put('RequestStatus', 'Enqueued'); newRequest.put('FolderId', '<folder\_id>'); newRequest.put('RequestType', 'StartDataflow'); insert newRequest;

Guaranteed Execution Order

The CRM Analytics Auto-Install Request framework is dependent on asynchronous processing, making it impossible to assure ordering of multiple auto-install requests.

To create request ordering, that auto-installer uses auto-install request dependencies, which guarantee that one auto-install request runs and finishes before another related auto-install request executes. Auto-install request dependencies don’t guarantee that dependencies are executed before other enqueued requests that aren’t part of the dependency chain.

Auto-install requests that have dependencies on other requests must have a status of New to be auto-enqueued by the framework. Dependencies with any other status are ignored.

If any auto-install request in the request hierarchy fails for any reason (including canceled), subsequent related requests auto-fail as well.

Request dependencies have these limits:

-   A single auto-install request can depend on up to 10 other auto-install requests, directly or indirectly through the dependency chain.
-   All parent auto-install requests must exist and be in New status before the child can declare a dependency on a parent request.

//Create first request with a new status (do not enqueue yet) sObject firstRequest = Schema.getGlobalDescribe().get('WaveAutoInstallRequest').newSObject(); firstRequest.put('Name', requestName); firstRequest.put('RequestStatus', 'New'); firstRequest.put('RequestType', 'WaveAppCreate'); firstRequest.put('TemplateApiName', 'template\_test'); insert firstRequest; //Create second request with a new status. This is enqueued after the first request is done. sObject secondRequest = Schema.getGlobalDescribe().get('WaveAutoInstallRequest').newSObject(); secondRequest.put('Name', 'Dependant Request'); secondRequest.put('RequestStatus', 'New'); secondRequest.put('RequestType', 'WaveAppCreate'); secondRequest.put('TemplateApiName', 'template\_test'); //Set up configuration for the second request, containing the id from the first Map<String, Object> configuration = new Map<String, Object>(); configuration.put('parentRequestIds', new List<String>{firstRequest.Id}); secondRequest.put('Configuration', JSON.serialize(configuration)); insert secondRequest; //update the first request to enqueue. firstRequest.put('RequestStatus', 'Enqueued'); update firstRequest;

## Monitoring Auto-Install Requests

To monitor auto-install requests, use the Auto-Installed App page in Setup. For more information, see [Monitor, Update, and Delete Auto-Installed Apps](https://help.salesforce.com/s/articleView?id=analytics.bi_auto_install_overview.htm&type=5&language=en_US).

## Working with Auto-Install Requests

You can also create and manage auto-install requests using the Salesforce Analytics Plugin CLI and CRM Analytics REST API endpoints.

To use the Analytics Plugin auto-install commands, see the [autoinstall Commands](https://developer.salesforce.com/docs/atlas.en-us.260.0.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_autoinstall.htm#bi_cli_reference_analytics_autoinstall) reference.

To use the CRM Analytics REST API, see the [Auto-Install Requests List Resource](https://developer.salesforce.com/docs/atlas.en-us.260.0.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_autoinstallrequests.htm) and the [Auto-Install Requests Resource](https://developer.salesforce.com/docs/atlas.en-us.260.0.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_autoinstallrequests_id.htm) references.
