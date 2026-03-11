---
title: "Remove Bundle Members"
domain: field-service
topic: remove-bundle-members
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:12.330Z
keywords: [Remove, Bundle, Members, Add, Remote, Site, Request, Body, Example, Response]
---

# Remove Bundle Members

# Remove Bundle Members

Removes one or more service appointments from an existing bundle. This resource accepts service appointment IDs. This API is not supported in Gov Cloud. This endpoint is available in version 54.0 and later of the Salesforce API.

## Add a Remote Site

1\. From Setup, in the Quick Find box, enter Security, and then select **Remote Site Settings**.

2\. Click **New Remote Site**.

3\. Enter a name.

4\. For Remote Site URL, enter https://api.salesforce.com/

5\. Save your changes.

URI

<host\>/bundleflow/api/v1.0/bundle/remove

Format

JSON

HTTP Method

PATCH

Authentication

Authorization: Bearer <token>

If the authentication token isn’t valid, a 401 HTTP status is returned.

Headers

request.setHeader('x-sfdc-tenant-id', 'core/prod/ORG-ID\_18\_Characters');—Field Service functional domain

sf\_api\_version—Salesforce API version. Minimum version is 53.0.

Authorization—Authorization token.

Content-Type—File format. Valid value is JSON.

Referer—Org domain URL.

## Request Body

**Properties**

| Field | Type | Description |
| --- | --- | --- |
| user | String | Optional. User name of user sending the request. |
| initiate | String | Type of bundle request.Valid value: manual |
| saRequestPayloads | Array | Details of the service appointments to be removed from a bundle. |
|  | serviceAppointmentId | String | ID of a service appointment. |
|  | action | String | Bundling action performed on this service appointment.Valid values: remove |

## Example

**JSON Example**

This example shows a manual request to remove two service appointments from a bundle.

```

```

## Response Body

**Properties**

| Field | Type | Description |
| --- | --- | --- |
| bundleId | String | ID of the bundle to update. If the update isn’t successful, it’s null. |
| responsePayloads | Array | Details of the service appointment objects that are part of the bundle request. |
|  | objectName | String | Type of object.Output: ServiceAppointment |
|  | objectId | String | ID of the service appointment. |
|  | action | String | Bundling action performed on this service appointment.Valid values: remove |
|  | status | String | Status of updating the service appointment.Output: SUCCESS or FAIL |
|  | messageCode | Number | Success or error code of updating the service appointment. 0 means success. The error codes are listed in Error Responses. |
|  | message | String | Success or error message of updating the service appointment. |
| status | String | Status of the request.Output: SUCCESS or FAIL |
| messageCode | Number | Success or error code of the request. 0 means success. The error codes are listed in Error Responses. |
| message | String | Success or error message of the request. |
| messageAddionalInfo | String | More information provided by Salesforce. |

## Example

**JSON Example: Successful Response**

This example shows a successful response for removing a service appointment from a bundle.

```

```

## Example

**JSON Example: Fail Response**

This example shows the output of a request where the user entered an invalid service appointment ID.

```

```

| Code | Name | Message |
| --- | --- | --- |
| 0 | NONE | <Service Appointment ID#>: Success. |
| 1 | UNSUPPORTED_VERSION | Ask your admin to check the API version, then try again. |
| 2 | SA_PAYLOAD_SHOULD_CONTAIN_ADD_ACTIONS_ONLY | Create bundles using add actions only. |
| 3 | EMPTY_BUNDLE_POLICY | Enter an ID for the bundlePolicyId. |
| 4 | EMPTY_BUNDLE_INITIATE | Specify manual or auto for the initiate entry. |
| 5 | EMPTY_BUNDLE_SERVICE_APPOINTMENT | Add a bundle service appointment. |
| 6 | SA_PAYLOAD_DUPLICATED_SAS | Remove duplicate service appointment IDs. |
| 7 | SA_IS_BUNDLE | <Service Appointment ID#>: Is already a bundle service appointment. |
| 8 | SA_ALREADY_BUNDLED | <Service Appointment ID#>: Is a bundle member service appointment in another bundle. |
| 9 | STATUS_FORBIDDEN | <Service Appointment ID#>: Can’t be bundled in the current status. |
| 10 | SA_PAYLOAD_SHOULD_NOT_CONTAIN_MIX_ACTIONS | Send separate requests for add and remove actions. |
| 11 | SA_IS_NOT_BUNDLE | Select a bundle service appointment and try again. |
| 12 | EXCEEDED_BUNDLE_MEMBERS_LIMIT | You reached the maximum number of service appointments for this bundle. Remove some of them and try again. |
| 13 | SA_PAYLOAD_SHOULD_CONTAIN_ONLY_BUNDLE_MEMBERS | To remove bundle members from a bundle, include only service appointments that are bundle members. |
| 14 | ERROR_IN_BASIC_VALIDATIONS | We couldn’t bundle the service appointments. |
| 15 | ERROR_IN_LIMIT_VALIDATIONS | N/A |
| 16 | ERROR_IN_CRITERIA_VALIDATIONS | N/A |
| 17 | ERROR_IN_SERVICE_TERRITORY_VALIDATIONS | Confirm or revise the service territories of the selected service appointments. Or ask your admin for help. |
| 18 | ERROR_IN_RESTRICTION_VALIDATIONS | Confirm or revise the selected service appointments. Or ask your admin to check the restriction policies. |
| 19 | EXCEEDED_BUNDLE_DURATION_LIMIT | N/A |
| 20 | EMPTY_BODY | Fill in the request. |
| 21 | SA_IS_NOT_BUNDLED | <Service Appointment ID#>: Can’t remove a service appointment that isn’t in the bundle. |
| 22 | ERROR_IN_AGGREGATION | Confirm or revise the selected service appointments. Or ask your admin to check the aggregation policies. |
| 23 | ERROR_IN_PROPAGATION | Confirm or revise the selected service appointments. Or ask your admin to check the propagation policies. |
| 24 | GET_POLICY_FAILURE | Ask your admin to check the bundle policies, then try again. |
| 25 | GET_CONFIG_FAILURE | Ask your admin to check the bundle config, then try again. |
| 26 | GET_BUNDLE_INFO_FAILURE | Try again later. |
| 27 | ERROR_IN_LOGIC | We couldn’t bundle the service appointments. |
| 28 | EMPTY_BUNDLE_MEMBERS | Add bundle member service appointments. |
| 29 | EMPTY_BUNDLE_PARENT_WORK_ORDER_ID | Add the work order ID for the bundle service appointment. |
| 30 | UNBUNDLE_REQUEST_ASSIGNED_RESOURCES_NOT_COMPATiBLE | To unbundle a scheduled bundle, send assigned resources for each service appointment. |
| 31 | EMPTY_OLD_VALUES | To update a bundle, send the current values. |
| 32 | EMPTY_NEW_VALUES | To update a bundle, send the new values. |
| 33 | SA_PAYLOAD_SHOULD_CONTAIN_AT_LEAST_ONE_ADD_OR_REMOVE_ACTION | To update a bundle, send at least one add or remove action. |
| 34 | FORBIDDEN_FIELDS_IN_POLICY_OBJECT | Confirm or revise the selected service appointments. Or ask your admin to check the field names selected in the related policies. |
| 35 | EMPTY_SERVICE_TERRITORY | Add a Service Territory ID. |
| 36 | EMPTY_START_TIME | Add the interval’s start time. |
| 37 | EMPTY_END_TIME | Add the interval’s end time. |
| 38 | ERROR_IN_BUNDLE_POLICY_RFC | Confirm or revise the selected service appointments. Or ask your admin to check the recordset filter criteria in the bundle policy. |
| 39 | ERROR_IN_TIME_ZONE_VALIDATION | Select service appointments that are in the same time zone. Or ask your admin for help. |
| 40 | ERROR_IN_LOGIC_UNBUNDLE | We couldn’t unbundle the service appointment. |
| 41 | ERROR_CREATING_BUNDLE | We couldn’t bundle the service appointments. |
| 42 | ERROR_ADDING_TO_BUNDLE | We couldn’t add the service appointment to the bundle. |
| 43 | ERROR_REMOVING_FROM_BUNDLE | We couldn’t remove the service appointment from the bundle. |
| 44 | ERROR_UNBUNDLING | We couldn’t unbundle the service appointment. |
| 58 | ERROR_IN_MSW_VALIDATIONS | We can’t bundle service appointments with dependencies. Remove the dependencies and try again. |
| -500 | http error | Hmm… Something went wrong. Try again. |