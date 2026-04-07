---
title: "REST API Permission IDs and Scopes"
domain: mc-apis
topic: rest-api-permission-ids-and-scopes
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:23.366Z
estimatedTokens: 7341
keywords: [REST, API, Permission, IDs, Scopes, Review, path, Marketing, Cloud, Installed, Packages, scope, resource, Integration]
---

# REST API Permission IDs and Scopes

> Review the permission ID, the path to the permission in Marketing Cloud, and the Installed Packages scope for each REST API resource. Review API Integration Permission Scopes.

# REST API Permission IDs and Scopes

Review the permission ID, the path to the permission in Marketing Cloud, and the Installed Packages scope for each REST API resource. Review [API Integration Permission Scopes](https://developer.salesforce.com/docs/atlas.en-us.mc-app-development.meta/mc-app-development/data-access-permissions.htm).

| Permission ID | Resource | Path to User Permission | API Permission Scope |
| --- | --- | --- | --- |
| 5 | POST /address/v1/validateEmail | Email > Content > Email > View | email_read |
| 9 | POST /messaging/v1/messageDefintionSend/{key}/send | Email > Content > Email > Send | email_send |
| 48 | GET /messaging/v1/domainverification | Email > Content > Microsite Layout > View | saved_content_read |
| 48 | POST /messaging/v1/domainverification | Email > Content > Microsite Layout > View | saved_content_read |
| 48 | POST /messaging/v1/domainverification/bulk/insert | Email > Content > Microsite Layout > View | saved_content_read |
| 48 | POST /messaging/v1/domainverification/update | Email > Content > Microsite Layout > View | saved_content_read |
| 48 | POST /messaging/v1/domainverification/delete | Email > Content > Microsite Layout > View | saved_content_read |
| 48 | POST /messaging/v1/domainverification/push | Email > Content > Microsite Layout > View | saved_content_read |
| 97 | GET /data/v1/async/{requestId}/results | Email > Subscribers > Data Extension > View | data_extensions_read |
| 97 | GET /data/v1/async/{requestId}/status | Email > Subscribers > Data Extension > View | data_extensions_read |
| 98 | POST /data/v1/async/dataextensions/{id}/rows | Email > Subscribers > Data Extension > Update | data_extensions_write |
| 98 | POST /hub/v1/dataevents/key:{key}/rowset | Email > Subscribers > Data Extension > Update | data_extensions_write |
| 98 | PUT /data/v1/async/dataextensions/{id}/rows | Email > Subscribers > Data Extension > Update | data_extensions_write |
| 98 | PUT /hub/v1/dataevents/key:{key}/rows/{primaryKeys} | Email > Subscribers > Data Extension > Update | data_extensions_write |
| 98 | PUT /hub/v1/dataevents/key:{key}/rows/{primaryKeys}/column/{col... | Email > Subscribers > Data Extension > Update | data_extensions_write |
| 152 | POST /messaging/v1/email/messages/{messageKey} | Email > Interactions > Messages > Triggered > Create | email_send |
| 152 | POST /messaging/v1/email/messages | Email > Interactions > Messages > Triggered > Create | email_send |
| 152 | POST /messaging/v1/email/definitions | Email > Interactions > Messages > Triggered > Create | email_write |
| 153 | GET /messaging/v1/email/messages/{messageKey} | Email > Interactions > Messages > Triggered > View | email_read |
| 153 | GET /messaging/v1/email/messages/?type=notSent | Email > Interactions > Messages > Triggered > View | email_read |
| 153 | GET /messaging/v1/email/definitions/{definitionKey}/queue | Email > Interactions > Messages > Triggered > View | email_read |
| 153 | GET /messaging/v1/email/definitions/{definitionKey} | Email > Interactions > Messages > Triggered > View | email_read |
| 153 | GET /messaging/v1/email/definitions | Email > Interactions > Messages > Triggered > View | email_read |
| 154 | PATCH /messaging/v1/email/definitions/{definitionKey} | Email > Interactions > Messages > Triggered > Update | email_write |
| 154 | DELETE /messaging/v1/email/definitions/{definitionKey}/queue | Email > Interactions > Messages > Triggered > Update | email_write |
| 155 | DELETE /messaging/v1/email/definitions/{definitionKey} | Email > Interactions > Messages > Triggered > Delete | email_write |
| 161 | POST /messaging/v1/sms/definitions | Mobile Connect > SMS Message > Schedule And Send Message | sms_write |
| 162 | GET /sms/definitions/{definitionKey} | Mobile Connect > SMS Message > Schedule And Send Message | sms_read |
| 162 | GET /sms/definitions | Mobile Connect > SMS Message > Schedule And Send Message | sms_read |
| 162 | GET /sms/definitions/{definitionKey}/queue | Mobile Connect > SMS Message > Schedule And Send Message | sms_read |
| 163 | DELETE /sms/definitions/{definitionKey}/queue | Mobile Connect > SMS Message > Schedule And Send Message | sms_write |
| 163 | PATCH /sms/definitions/{definitionKey} | Mobile Connect > SMS Message > Schedule And Send Message | sms_write |
| 164 | DELETE /sms/definitions/{definitionKey} | Mobile Connect > SMS Message > Schedule And Send Message | sms_write |
| 165 | GET /sms/messages/{messageKey} | Mobile Connect > SMS Message > Schedule And Send Message | tracking_events_read, sms_read |
| 165 | GET /sms/messages | Mobile Connect > SMS Message > Schedule And Send Message | tracking_events_read, sms_read |
| 166 | POST /sms/messages/{messageKey} | Mobile Connect > SMS Message > Schedule And Send Message | sms_send |
| 166 | POST /sms/messages | Mobile Connect > SMS Message > Schedule And Send Message | sms_send |
| 263 | POST platform/v1/key | Email > Admin > External Object Sources > File Location > Create | file_location_create |
| 264 | GET platform/v1/key | Email > Admin > External Object Sources > File Location > View | file_location_view |
| 264 | POST /sms/messages | Email > Admin > External Object Sources > File Location > View | file_location_view |
| 264 | POST /sms/messages | Email > Admin > External Object Sources > File Location > View | file_location_view |
| 264 | POST /sms/messages | Email > Admin > External Object Sources > File Location > View | file_location_view |
| 266 | DELETE platform/v1/key/{keyId} | Email > Admin > External Object Sources > File Location > Delete | file_location_delete |
| 444 | GET /hub/v1/campaigns | Salesforce Marketing Cloud > Campaigns > Access | campaign_read |
| 444 | GET /hub/v1/campaigns/{id} | Salesforce Marketing Cloud > Campaigns > Access | campaign_read |
| 444 | GET /hub/v1/campaigns/{id}/assets | Salesforce Marketing Cloud > Campaigns > Access | campaign_read |
| 444 | GET /hub/v1/campaigns/{id}/assets/{assetId} | Salesforce Marketing Cloud > Campaigns > Access | campaign_read |
| 449 | POST /sms/v1/automation/importSend | Automation Studio > General > Access | automations_read |
| 449 | POST /sms/v1/contacts/queueImport/{id} | Automation Studio > General > Access | automations_read |
| 479 | DELETE /hub/v1/campaigns/{id} | Salesforce Marketing Cloud > Campaigns > Delete | campaign_write |
| 600 | GET /messaging/v1/domainverification | Administration > General > Access | email_write |
| 600 | POST /messaging/v1/domainverification | Administration > General > Access | email_write |
| 600 | POST /messaging/v1/domainverification/bulk/insert | Administration > General > Access | email_write |
| 600 | POST /messaging/v1/domainverification/update | Administration > General > Access | email_write |
| 600 | POST /messaging/v1/domainverification/delete | Administration > General > Access | email_write |
| 600 | POST /messaging/v1/domainverification/push | Administration > General > Access | email_write |
| 1006 | GET /sms/v1/automation/importSend/{tokenid}/status | Mobile Connect > General > Access | sms_read |
| 1006 | GET /sms/v1/contacts/queueImport/{id}/status/{tokenId} | Mobile Connect > General > Access | sms_read |
| 1006 | GET /sms/v1/contacts/refreshList/{id}/status/{tokenId} | Mobile Connect > General > Access | sms_read |
| 1006 | GET /sms/v1/messageContact/{messageId}/deliveries/{tokenId} | Mobile Connect > General > Access | sms_read |
| 1006 | GET /sms/v1/messageContact/{messageId}/history/{tokenId}/mobile... | Mobile Connect > General > Access | sms_read |
| 1006 | GET /sms/v1/messageList/{id}/deliveries/{tokenId} | Mobile Connect > General > Access | sms_read |
| 1006 | GET /sms/v1/queueMO/deliveries/{tokenId} | Mobile Connect > General > Access | sms_read |
| 1006 | GET /sms/v1/queueMO/history/{tokenId} | Mobile Connect > General > Access | sms_read |
| 1006 | POST /sms/v1/automation/importSend | Mobile Connect > General > Access | sms_read |
| 1006 | POST /sms/v1/automation/importSend/{id}/deliveryReport | Mobile Connect > General > Access | sms_read |
| 1006 | POST /sms/v1/contacts/queueImport/{id} | Mobile Connect > General > Access | sms_read |
| 1006 | POST /sms/v1/contacts/refreshList/{id} | Mobile Connect > General > Access | sms_read |
| 1006 | POST /sms/v1/contacts/subscriptions | Mobile Connect > General > Access | sms_read |
| 1006 | POST /sms/v1/messageList/{id}/deliveryReport/{tokenId} | Mobile Connect > General > Access | sms_read |
| 1007 | DELETE /sms/v1/keyword/{keyword}/{longCode} | Mobile Connect > General > Administer SMS Channel | sms_write |
| 1007 | DELETE /sms/v1/keyword/{keyword}/{shortCode}/{countryCode} | Mobile Connect > General > Administer SMS Channel | sms_write |
| 1007 | DELETE /sms/v1/keyword/{keywordId} | Mobile Connect > General > Administer SMS Channel | sms_write |
| 1007 | POST /sms/v1/keyword | Mobile Connect > General > Administer SMS Channel | sms_write |
| 1008 | POST /sms/v1/message/optin | Mobile Connect > SMS Message > Create And Edit | sms_write |
| 1010 | GET /sms/v1/messageContact/{messageId}/deliveries/{tokenId} | Mobile Connect > SMS Message > Schedule And Send Message | sms_send |
| 1010 | POST /sms/v1/automation/importSend | Mobile Connect > SMS Message > Schedule And Send Message | sms_send |
| 1010 | POST /sms/v1/messageContact/{id}/send | Mobile Connect > SMS Message > Schedule And Send Message | sms_send |
| 1010 | POST /sms/v1/messageList/{id}/send | Mobile Connect > SMS Message > Schedule And Send Message | sms_send |
| 1010 | POST /sms/v1/queueMO | Mobile Connect > SMS Message > Schedule And Send Message | sms_send |
| 1012 | DELETE /sms/v1/keyword/{keywordId} | Mobile Connect > SMS Message > Create Keyword From Message Template | sms_write |
| 1012 | POST /sms/v1/keyword | Mobile Connect > SMS Message > Create Keyword From Message Template | sms_write |
| 1018 | GET /contacts/v1/attributeSetDefinitions/{id} | Salesforce Marketing Cloud > IMH Contacts > Access | list_and_subscribers_read |
| 1018 | GET /contacts/v1/attributeSets/name:{name} | Salesforce Marketing Cloud > IMH Contacts > Access | list_and_subscribers_read |
| 1018 | GET /contacts/v1/contacts/actions/delete/status?operationID= | Salesforce Marketing Cloud > IMH Contacts > Access | list_and_subscribers_read |
| 1018 | GET /contacts/v1/contacts/actions/restrict/status?operationID= | Salesforce Marketing Cloud > IMH Contacts > Access | list_and_subscribers_read |
| 1018 | GET /contacts/v1/contacts/analytics/deleterequests/summary | Salesforce Marketing Cloud > IMH Contacts > Access | list_and_subscribers_read |
| 1018 | GET /contacts/v1/contacts/analytics/deleterequests | Salesforce Marketing Cloud > IMH Contacts > Access | list_and_subscribers_read |
| 1018 | GET /contacts/v1/contacts/deleteOperations | Salesforce Marketing Cloud > IMH Contacts > Access | list_and_subscribers_read |
| 1018 | GET /contacts/v1/customObject/{id}/isUsedInContacts | Salesforce Marketing Cloud > IMH Contacts > Access | list_and_subscribers_read |
| 1018 | GET /contacts/v1/customobjectfield/{id}/relationships | Salesforce Marketing Cloud > IMH Contacts > Access | list_and_subscribers_read |
| 1018 | GET /contacts/v1/schema | Salesforce Marketing Cloud > IMH Contacts > Access | list_and_subscribers_read |
| 1018 | GET /contacts/v1/schemas/{schemaId}/attributeGroups | Salesforce Marketing Cloud > IMH Contacts > Access | list_and_subscribers_read |
| 1018 | GET /contacts/v1/schemas/{schemaId}/attributeGroups/{id} | Salesforce Marketing Cloud > IMH Contacts > Access | list_and_subscribers_read |
| 1018 | PATCH /contacts/v1/attributeSets/{id} | Salesforce Marketing Cloud > IMH Contacts > Access | list_and_subscribers_read |
| 1018 | PATCH /contacts/v1/contacts | Salesforce Marketing Cloud > IMH Contacts > Access | list_and_subscribers_read |
| 1018 | POST /contacts/v1/addresses/email/search | Salesforce Marketing Cloud > IMH Contacts > Access | list_and_subscribers_read |
| 1018 | POST /contacts/v1/attributes/search | Salesforce Marketing Cloud > IMH Contacts > Access | list_and_subscribers_read |
| 1018 | POST /contacts/v1/contacts/preferences | Salesforce Marketing Cloud > IMH Contacts > Access | Contacts_access |
| 1018 | POST /contacts/v1/contacts/id:{contactId}/Preferences | Salesforce Marketing Cloud > IMH Contacts > Access | Contacts_access |
| 1018 | GET /contacts/v1/contacts/id:{contactId}/Preferences | Salesforce Marketing Cloud > IMH Contacts > Access | Contacts_access |
| 1018 | POST /contacts/v1/contacts/preferences/search?ReferenceType={ReferenceType} | Salesforce Marketing Cloud > IMH Contacts > Access | Contacts_access |
| 1018 | GET /contacts/v1/contacts/key:{contactKey}/Preferences | Salesforce Marketing Cloud > IMH Contacts > Access | Contacts_access |
| 1018 | POST /interaction/v1/events | Salesforce Marketing Cloud > Contacts > Read Contact Data | list_and_subscribers_read |
| 1020 | PATCH /contacts/v1/attributeSets/{id} | Salesforce Marketing Cloud > IMH Contacts > Add | list_and_subscribers_write |
| 1020 | PATCH /contacts/v1/contacts | Salesforce Marketing Cloud > IMH Contacts > Add | list_and_subscribers_write |
| 1020 | POST /contacts/v1/addresses/email/search | Salesforce Marketing Cloud > IMH Contacts > Add | list_and_subscribers_write |
| 1020 | POST /contacts/v1/attributeGroups/population | Salesforce Marketing Cloud > IMH Contacts > Add | list_and_subscribers_write |
| 1020 | POST /contacts/v1/attributes/search | Salesforce Marketing Cloud > IMH Contacts > Add | list_and_subscribers_write |
| 1020 | POST /contacts/v1/attributeSets/{id} | Salesforce Marketing Cloud > IMH Contacts > Add | list_and_subscribers_write |
| 1020 | POST /contacts/v1/contactEvents | Salesforce Marketing Cloud > IMH Contacts > Add | list_and_subscribers_write |
| 1020 | POST /contacts/v1/contacts | Salesforce Marketing Cloud > IMH Contacts > Add | list_and_subscribers_write |
| 1020 | POST /contacts/v1/contacts/actions/delete?type=ids | Salesforce Marketing Cloud > IMH Contacts > Add | list_and_subscribers_write |
| 1020 | POST /contacts/v1/contacts/actions/delete?type=keys | Salesforce Marketing Cloud > IMH Contacts > Add | list_and_subscribers_write |
| 1020 | POST /contacts/v1/contacts/actions/delete?type=listReference | Salesforce Marketing Cloud > IMH Contacts > Add | list_and_subscribers_write |
| 1020 | POST /contacts/v1/contacts/actions/delete/configSettings | Salesforce Marketing Cloud > IMH Contacts > Add | list_and_subscribers_write |
| 1020 | POST /contacts/v1/contacts/actions/delete/options | Salesforce Marketing Cloud > IMH Contacts > Add | list_and_subscribers_write |
| 1020 | POST /contacts/v1/contacts/actions/restrict?type=ids | Salesforce Marketing Cloud > IMH Contacts > Add | list_and_subscribers_write |
| 1020 | POST /contacts/v1/contacts/actions/restrict?type=keys | Salesforce Marketing Cloud > IMH Contacts > Add | list_and_subscribers_write |
| 1020 | POST /contacts/v1/contacts/actions/restrict?type=listReference | Salesforce Marketing Cloud > IMH Contacts > Add | list_and_subscribers_write |
| 1020 | POST /contacts/v1/establish | Salesforce Marketing Cloud > IMH Contacts > Add | list_and_subscribers_write |
| 1020 | POST /contacts/v1/operations/delete/{operationID}/retry | Salesforce Marketing Cloud > IMH Contacts > Add | list_and_subscribers_write |
| 1020 | POST /contacts/v1/operations/restrict/{operationID}/retry | Salesforce Marketing Cloud > IMH Contacts > Add | list_and_subscribers_write |
| 1021 | POST /hub/v1/campaigns | Salesforce Marketing Cloud > Campaigns > Create And Edit | campaign_write |
| 1022 | DELETE /hub/v1/campaigns/{id}/assets/{assetId} | Salesforce Marketing Cloud > Campaigns > Associate | campaign_write |
| 1022 | POST /hub/v1/campaigns/{id}/assets | Salesforce Marketing Cloud > Campaigns > Associate | campaign_write |
| 1220 | DELETE /interaction/v1/eventDefinitions/{id} | Journey Builder > General > Access, View | journeys_read |
| 1220 | DELETE /interaction/v1/interactions/{id} | Journey Builder > General > Access, View | journeys_read |
| 1220 | GET /interaction/v1/eventDefinitions | Journey Builder > General > Access, View | journeys_read |
| 1220 | GET /interaction/v1/eventDefinitions/{id} | Journey Builder > General > Access, View | journeys_read |
| 1220 | GET /interaction/v1/interactions | Journey Builder > General > Access, View | journeys_read |
| 1220 | GET /interaction/v1/interactions/{id} | Journey Builder > General > Access, View | journeys_read |
| 1220 | GET /interaction/v1/interactions/{id}/audit/{action} | Journey Builder > General > Access, View | journeys_read |
| 1220 | GET /interaction/v1/interactions/publishStatus/{statusId} | Journey Builder > General > Access, View | journeys_read |
| 1220 | POST /interaction/v1/eventDefinitions | Journey Builder > General > Access, View | journeys_read |
| 1220 | POST /interaction/v1/events | Journey Builder > General > Access, View | journeys_read |
| 1220 | POST /interaction/v1/interactions | Journey Builder > General > Access, View | journeys_read |
| 1220 | POST /interaction/v1/interactions/contactexit | Journey Builder > General > Access, View | journeys_read |
| 1220 | POST /interaction/v1/interactions/contactexit/status | Journey Builder > General > Access, View | journeys_read |
| 1220 | POST /interaction/v1/interactions/contactMembership | Journey Builder > General > Access, View | journeys_read |
| 1220 | POST /interaction/v1/interactions/publishAsync/{id}?versionNumbe... | Journey Builder > General > Access, View | journeys_read |
| 1220 | POST /interaction/v1/interactions/stop/{id}?versionNumber={versi... | Journey Builder > General > Access, View | journeys_read |
| 1220 | PUT /interaction/v1/eventDefinitions/{id} | Journey Builder > General > Access, View | journeys_read |
| 1220 | PUT /interaction/v1/interactions | Journey Builder > General > Access, View | journeys_read |
| 1220 | POST /interaction/v1/interactions/pause/{definitionID}?versionNumber={versionNumber} | Journey Builder > General > Access, View | journeys_read |
| 1220 | POST /interaction/v1/interactions/pause/key:{definitionKey}?versionNumber={versionNumber} | Journey Builder > General > Access, View | journeys_read |
| 1220 | POST /interaction/v1/interactions/resume/{definitionID}?versionNumber={versionNumber} | Journey Builder > General > Access, View | journeys_read |
| 1220 | POST /interaction/v1/interactions/resume/key:{definitionKey}?versionNumber={versionNumber} | Journey Builder > General > Access, View | journeys_read |
| 1279 | GET /push/v1/application/{appId} | Mobile Push > General > Access | push_read |
| 1279 | GET /push/v1/application/{appId}/key | Mobile Push > General > Access | push_read |
| 1279 | GET /push/v1/contacts/refreshList/{id}/status/{tokenId} | Mobile Push > General > Access | push_read |
| 1279 | GET /push/v1/location | Mobile Push > General > Access | push_read |
| 1279 | GET /push/v1/location/{locationId} | Mobile Push > General > Access | push_read |
| 1279 | GET /push/v1/message | Mobile Push > General > Access | push_read |
| 1279 | GET /push/v1/message/{messageID} | Mobile Push > General > Access | push_read |
| 1279 | GET /push/v1/messageApp/{messageId}/deliveries/{tokenId} | Mobile Push > General > Access | push_read |
| 1279 | GET /push/v1/messageContact/{messageId}/deliveries/{tokenId} | Mobile Push > General > Access | push_read |
| 1279 | GET /push/v1/messageList/{messageId}/deliveries/{tokenId} | Mobile Push > General > Access | push_read |
| 1279 | GET /push/v1/messageTag/{messageId}/deliveries/{tokenId} | Mobile Push > General > Access | push_read |
| 1280 | DELETE /push/v1/application/{appId}/key | Mobile Push > General > Administer Mobile Push | push_write |
| 1282 | DELETE /push/v1/application/{appId}/key/{key} | Mobile Push > Message > Delete | push_write |
| 1282 | DELETE /push/v1/location/{locationId} | Mobile Push > Message > Delete | push_write |
| 1282 | DELETE /push/v1/message/{messageId} | Mobile Push > Message > Delete | push_write |
| 1283 | POST /push/v1/contacts/refreshList/{id} | Mobile Push > Message > Schedule And Send Message | push_send |
| 1283 | POST /push/v1/location | Mobile Push > Message > Schedule And Send Message | push_send |
| 1283 | POST /push/v1/message | Mobile Push > Message > Schedule And Send Message | push_send |
| 1283 | POST /push/v1/messageApp/{messageId}/send | Mobile Push > Message > Schedule And Send Message | push_send |
| 1283 | POST /push/v1/messageBatch/{messageid}/send | Mobile Push > Message > Schedule And Send Message | push_send |
| 1283 | POST /push/v1/messageContact/{messageId}/send | Mobile Push > Message > Schedule And Send Message | push_send |
| 1283 | POST /push/v1/messageList/{messageId}/send | Mobile Push > Message > Schedule And Send Message | push_send |
| 1283 | POST /push/v1/messageTag/{messageId}/send | Mobile Push > Message > Schedule And Send Message | push_send |
| 1283 | PUT /push/v1/application/{appId}/key | Mobile Push > Message > Schedule And Send Message | push_send |
| 1283 | PUT /push/v1/application/{appId}/key/{key} | Mobile Push > Message > Schedule And Send Message | push_send |
| 1283 | PUT /push/v1/location/{locationId} | Mobile Push > Message > Schedule And Send Message | push_send |
| 1283 | PUT /push/v1/message/{messageId} | Mobile Push > Message > Schedule And Send Message | push_send |
| 1348 | POST /hub/v1/objects/{objectTypeName}/tags/ | Interactive Marketing Hub > Tags > Associate/Disassociate | tags_write |
| 1418 | POST /asset/v1/content/assets | Content Builder > Assets > Create | saved_content_write |
| 1420 | GET /asset/v1/content/assets | Content Builder > Assets > View | documents_and_images_read |
| 1420 | GET /asset/v1/content/assets/{id} | Content Builder > Assets > View | documents_and_images_read |
| 1420 | GET /asset/v1/content/assets/{id}/channelviews/{viewname} | Content Builder > Assets > View | documents_and_images_read |
| 1420 | GET /asset/v1/content/assets/{id}/file | Content Builder > Assets > View | documents_and_images_read |
| 1420 | GET /asset/v1/content/assets/{id}/salutations | Content Builder > Assets > View | documents_and_images_read |
| 1420 | GET /asset/v1/content/assets/salutations | Content Builder > Assets > View | documents_and_images_read |
| 1420 | POST /asset/v1/content/assets/query | Content Builder > Assets > View | documents_and_images_read |
| 1421 | PATCH /asset/v1/content/assets/{id} | Content Builder > Assets > Update | documents_and_images_write |
| 1421 | PUT /asset/v1/content/assets/{id} | Content Builder > Assets > Update | documents_and_images_write |
| 1422 | DELETE /asset/v1/content/assets/{id} | Content Builder > Assets > Delete | documents_and_images_write |
| 1430 | POST /asset/v1/content/categories | Content Builder > Folders > Create | documents_and_images_write |
| 1430 | PUT /asset/v1/content/categories/{id} | Content Builder > Folders > Create | documents_and_images_write |
| 1431 | GET /asset/v1/content/categories | Content Builder > Folders > View | documents_and_images_read |
| 1431 | GET /asset/v1/content/categories/{id} | Content Builder > Folders > View | documents_and_images_read |
| 1434 | DELETE /asset/v1/content/categories/{id} | Content Builder > Folders > Delete | documents_and_images_write |
| 1503 | PATCH /hub/v1/approvals/{id} | Workflows and Approvals > Approval > Approval Items > Create and Edit | approvals_write |
| 1503 | POST /hub/v1/approvals | Workflows and Approvals > Approval > Approval Items > Create and Edit | approvals_write |
| 1509 | PATCH /hub/v1/approvals/settings | Interactive Marketing Hub > Approvals > Enable for Any Channel | approvals_write |
| 1611 | POST /contacts/v1/addresses/count/ | Contacts > Audiences > Read > View All Contacts | audiences_read |
| 1611 | POST /contacts/v1/addresses/search/{attributeName}/ | Contacts > Audiences > Read > View All Contacts | audiences_read |
| 1612 | POST /contacts/v1/contacts/actions/delete?type=ids | Contact Builder > Delete Contacts | list_and_subscribers_write |
| 1612 | POST /contacts/v1/contacts/actions/delete?type=keys | Contact Builder > Delete Contacts | list_and_subscribers_write |
| 1612 | POST /contacts/v1/contacts/actions/delete?type=listReference | Contact Builder > Delete Contacts | list_and_subscribers_write |
| 1612 | POST /contacts/v1/contacts/actions/delete/configSettings | Contact Builder > Delete Contacts | list_and_subscribers_write |
| 1612 | POST /contacts/v1/contacts/actions/delete/options | Contact Builder > Delete Contacts | list_and_subscribers_write |
| 1612 | POST /contacts/v1/contacts/actions/restrict?type=ids | Contact Builder > Delete Contacts | list_and_subscribers_write |
| 1612 | POST /contacts/v1/contacts/actions/restrict?type=keys | Contact Builder > Delete Contacts | list_and_subscribers_write |
| 1612 | POST /contacts/v1/contacts/actions/restrict?type=listReference | Contact Builder > Delete Contacts | list_and_subscribers_write |
| 1612 | POST /contacts/v1/operations/delete/{operationID}/retry | Contact Builder > Delete Contacts | list_and_subscribers_write |
| 1612 | POST /contacts/v1/operations/restrict/{operationID}/retry | Contact Builder > Delete Contacts | list_and_subscribers_write |
| 1631 | GET /hub/v1/approvals | Workflows and Approvals > Approval > Approval Items > View | approvals_read |
| 1631 | GET /hub/v1/approvals/{id} | Workflows and Approvals > Approval > Approval Items > View | approvals_read |
| 1631 | GET /hub/v1/approvals/{id}/roles | Workflows and Approvals > Approval > Approval Items > View | approvals_read |
| 1631 | GET /hub/v1/approvals/settings | Workflows and Approvals > Approval > Approval Items > View | approvals_read |
| 1644 | POST /hub/v1/objects/{objectTypeName}/tags/delete | Salesforce Marketing Cloud > Tags > View | tags_read |
| 1644 | POST /hub/v1/nestedtags | Salesforce Marketing Cloud > Tags > View | tags_read |
| 1644 | GET /hub/v1/nestedtags | Salesforce Marketing Cloud > Tags > View | tags_read |
| 1644 | GET /hub/v1/nestedtags/{tagId} | Salesforce Marketing Cloud > Tags > View | tags_read |
| 1644 | PUT /hub/v1/nestedtags/{tagId} | Salesforce Marketing Cloud > Tags > View | tags_read |
| 1644 | PATCH /hub/v1/nestedtags/{tagId} | Salesforce Marketing Cloud > Tags > View | tags_read |
| 1644 | DELETE /hub/v1/nestedtags/{tagId} | Salesforce Marketing Cloud > Tags > View | tags_read |
| 1343 | POST /hub/v1/nestedtags | Salesforce Marketing Cloud > Tags > Create | tags_create |
| 1344 | PUT /hub/v1/nestedtags/{tagId} | Salesforce Marketing Cloud > Tags > Edit | tags_edit |
| 1344 | PATCH /hub/v1/nestedtags/{tagId} | Salesforce Marketing Cloud > Tags > Edit | tags_edit |
| 1345 | DELETE /hub/v1/nestedtags/{tagId} | Salesforce Marketing Cloud > Tags > Delete | tags_delete |
| 1688 | POST /platform/v1/ens-callbacks | Event Notifications > Callbacks > Create | event_notification_callback_create |
| 1689 | GET /platform/v1/ens-callbacks/{callbackId} | Event Notifications > Callbacks > View | event_notification_callback_read |
| 1689 | GET /platform/v1/ens-callbacks | Event Notifications > Callbacks > View | event_notification_callback_read |
| 1690 | PUT /platform/v1/ens-callbacks | Event Notifications > Callbacks > Update | event_notification_callback_update |
| 1690 | POST /platform/v1/ens-verify | Event Notifications > Callbacks > Update | event_notification_callback_update |
| 1690 | PUT /platform/v1/ens-regenerate | Event Notifications > Callbacks > Update | event_notification_callback_update |
| 1691 | DELETE /platform/v1/ens-callbacks/{callbackId} | Event Notifications > Callbacks > Delete | event_notification_callback_delete |
| 1692 | POST /platform/v1/ens-subscriptions | Event Notifications > Subscriptions > Create | event_notification_subscription_create |
| 1693 | GET /platform/v1/ens-subscriptions/{subscriptionId} | Event Notifications > Subscriptions > View | event_notification_subscription_read |
| 1693 | GET /platform/v1/ens-subscriptions-by-cb/{callbackId} | Event Notifications > Subscriptions > View | event_notification_subscription_read |
| 1694 | PUT /platform/v1/ens-subscriptions | Event Notifications > Subscriptions > Update | event_notification_subscription_update |
| 1695 | DELETE /platform/v1/ens-subscriptions/{subscriptionId} | Event Notifications > Subscriptions > Delete | event_notification_subscription_delete |
| 1707 | GET /data/v1/audit/auditEvents | Audit Logging > API Access | tracking_events_read |
| 1707 | GET /data/v1/audit/securityEvents | Audit Logging > API Access | tracking_events_read |
| No permission required | GET /interaction/v1/rest | None | None |
| No permission required | GET /platform/v1/endpoints | None | None |
| No permission required | GET /platform/v1/endpoints/{endpointType} | None | None |
| No permission required | GET /platform/v1/tokenContext | None | None |
| No permission required | GET YOUR_SUBDOMAIN.auth.marketingcloudapis.com/v2/discovery | None | None |
| No permission required | GET YOUR_SUBDOMAIN.auth.marketingcloudapis.com/v2/userinfo | None | None |
| No permission required | POST YOUR_SUBDOMAIN.auth.marketingcloudapis.com/v2/authorize | None | None |
| No permission required | POST YOUR_SUBDOMAIN.auth.marketingcloudapis.com/v2/token | None | None |
| No permission required | POST /YOUR_SUBDOMAIN.auth.marketingcloudapis.com/v1/requestToken | None | None |
