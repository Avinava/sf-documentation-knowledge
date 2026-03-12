---
title: "getCallCenterSettings() for Lightning Experience for
                Lightning Experience"
domain: api-cti
topic: getcallcentersettings-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:59.731Z
estimatedTokens: 1063
keywords: [getCallCenterSettings, Lightning, Experience, call, center, settings, associated, current, user, API, version, 38.0, later, Usage, Arguments]
---

# getCallCenterSettings() for Lightning Experience for
                Lightning Experience

> Returns the call center settings associated
                    with the current user. This method is available in API version 38.0 or
                later.

# getCallCenterSettings() for Lightning Experience for Lightning Experience

## Usage

Returns the call center settings associated with the current user. This method is available in API version 38.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| callback | function | JavaScript method executed when the API method call is completed. |

## Sample Code–HTML and JavaScript

```

```

## Response

This method is asynchronous. The response is returned in an object passed to a callback method. The response object contains the following fields.

| Name | Type | Description |
| --- | --- | --- |
| success | boolean | Returns true if the API method call was invoked successfully, false otherwise. |
| returnValue | object | If the API call is successful, the call center settings are returned.{   "/displayNameLabel":"Display Name",   "/internalNameLabel":"InternalName",   "/label":"Demo Call Center Adapter",   "/reqDialingOptions/label":"Dialing Options",   "/reqDialingOptions/reqInternationalPrefix":"01",   "/reqDialingOptions/reqInternationalPrefix/label":"International Prefix",   "/reqDialingOptions/reqInternationalPrefix/sortOrder":"2.0",   "/reqDialingOptions/reqLongDistPrefix":"1",   "/reqDialingOptions/reqLongDistPrefix/label":"Long Distance Prefix",   "/reqDialingOptions/reqLongDistPrefix/sortOrder":"1.0",   "/reqDialingOptions/reqOutsidePrefix":"9",   "/reqDialingOptions/reqOutsidePrefix/label":"Outside Prefix",   "/reqDialingOptions/reqOutsidePrefix/sortOrder":"0.0",   "/reqDialingOptions/sortOrder":"1.0",   "/reqGeneralInfo/label":"General Information",   "/reqGeneralInfo/reqAdapterUrl":"/apex/ContactCenter",   "/reqGeneralInfo/reqAdapterUrl/label":"CTI Adapter URL",   "/reqGeneralInfo/reqAdapterUrl/sortOrder":"2.0",   "/reqGeneralInfo/reqDisplayName":"Demo Call Center Adapter",   "/reqGeneralInfo/reqInternalName":"OpenCTI",   "/reqGeneralInfo/reqSalesforceCompatibilityMode":"Classic_and_Lightning",   "/reqGeneralInfo/reqSalesforceCompatibilityMode/label":"Salesforce Compatibility Mode",   "/reqGeneralInfo/reqSalesforceCompatibilityMode/sortOrder":"8.0",   "/reqGeneralInfo/reqSoftphoneHeight":"550",   "/reqGeneralInfo/reqSoftphoneHeight/label":"Softphone Height",   "/reqGeneralInfo/reqSoftphoneHeight/sortOrder":"6.0",   "/reqGeneralInfo/reqSoftphoneWidth":"400",   "/reqGeneralInfo/reqSoftphoneWidth/label":"Softphone Width",   "/reqGeneralInfo/reqSoftphoneWidth/sortOrder":"7.0",   "/reqGeneralInfo/reqStandbyUrl":"/apex/ContactCenter",   "/reqGeneralInfo/reqStandbyUrl/label":"CTI Adapter URL2",   "/reqGeneralInfo/reqStandbyUrl/sortOrder":"3.0",   "/reqGeneralInfo/reqTimeout":"10000",   "/reqGeneralInfo/reqTimeout/label":"Timeout",   "/reqGeneralInfo/reqTimeout/sortOrder":"4.0",   "/reqGeneralInfo/reqUseApi":"true",   "/reqGeneralInfo/reqUseApi/label":"Use CTI API",   "/reqGeneralInfo/reqUseApi/sortOrder":"5.0",   "/reqGeneralInfo/sortOrder":"0.0",   "/reqPhoneDemoSettings/label":"Phone Demo Settings",   "/reqPhoneDemoSettings/reqIncomingNumber":"(415) 555-1212 (tel:4155551212)",   "/reqPhoneDemoSettings/reqIncomingNumber/label":"Simulated Incoming Phone Number",   "/reqPhoneDemoSettings/reqIncomingNumber/sortOrder":"0.0",   "/reqPhoneDemoSettings/reqProvider":"DummyProvider",   "/reqPhoneDemoSettings/reqProvider/label":"CTI Provider",   "/reqPhoneDemoSettings/reqProvider/sortOrder":"1.0",   "/reqPhoneDemoSettings/reqProviderAccount":"AXXXXXXXXXXXXXXXXX",   "/reqPhoneDemoSettings/reqProviderAccount/label":"Provider Account",   "/reqPhoneDemoSettings/reqProviderAccount/sortOrder":"2.0",   "/reqPhoneDemoSettings/reqProviderAuthToken":"YYYYYYYYYYYYYYYYYY",   "/reqPhoneDemoSettings/reqProviderAuthToken/label":"Provider Auth Token",   "/reqPhoneDemoSettings/reqProviderAuthToken/sortOrder":"3.0",   "/reqPhoneDemoSettings/reqProviderCallerNumber":"415555555",   "/reqPhoneDemoSettings/reqProviderCallerNumber/label":"Provider Caller Number",   "/reqPhoneDemoSettings/reqProviderCallerNumber/sortOrder":"4.0",   "/reqPhoneDemoSettings/sortOrder":"2.0" }If the API call fails, null is returned. |
| error | array | If the API call was successful, this variable is null. If the API call failed, this variable returns an array of error messages. |

## Code Examples

```
sforce.opencti.getCallCenterSettings({
     callback: function
});
```

```
<html>
  <head>
    <script type="text/javascript" src="https://domain:port/support/api/66.0/lightning/opencti_min.js"></script>
    <script type="text/javascript">
      var callback = function(response) {
         if (response.success) {
            console.log('API method call executed successfully! returnValue:', response.returnValue);
         } else { 
            console.error('Something went wrong! Errors:', response.errors);
         } 
      };

      function getCallCenterSettings() {
          sforce.opencti.getCallCenterSettings({callback: callback});
      }
     </script>
  </head>
  <body>
    <button onclick="getCallCenterSettings();">getCallCenterSettings()</button>
  </body>
</html>
```

```
{
  "/displayNameLabel":"Display Name",
  "/internalNameLabel":"InternalName",
  "/label":"Demo Call Center Adapter",
  "/reqDialingOptions/label":"Dialing Options",
  "/reqDialingOptions/reqInternationalPrefix":"01",
  "/reqDialingOptions/reqInternationalPrefix/label":"International Prefix",
  "/reqDialingOptions/reqInternationalPrefix/sortOrder":"2.0",
  "/reqDialingOptions/reqLongDistPrefix":"1",
  "/reqDialingOptions/reqLongDistPrefix/label":"Long Distance Prefix",
  "/reqDialingOptions/reqLongDistPrefix/sortOrder":"1.0",
  "/reqDialingOptions/reqOutsidePrefix":"9",
  "/reqDialingOptions/reqOutsidePrefix/label":"Outside Prefix",
  "/reqDialingOptions/reqOutsidePrefix/sortOrder":"0.0",
  "/reqDialingOptions/sortOrder":"1.0",
  "/reqGeneralInfo/label":"General Information",
  "/reqGeneralInfo/reqAdapterUrl":"/apex/ContactCenter",
  "/reqGeneralInfo/reqAdapterUrl/label":"CTI Adapter URL",
  "/reqGeneralInfo/reqAdapterUrl/sortOrder":"2.0",
  "/reqGeneralInfo/reqDisplayName":"Demo Call Center Adapter",
  "/reqGeneralInfo/reqInternalName":"OpenCTI",
  "/reqGeneralInfo/reqSalesforceCompatibilityMode":"Classic_and_Lightning",
  "/reqGeneralInfo/reqSalesforceCompatibilityMode/label":"Salesforce Compatibility Mode",
  "/reqGeneralInfo/reqSalesforceCompatibilityMode/sortOrder":"8.0",
  "/reqGeneralInfo/reqSoftphoneHeight":"550",
  "/reqGeneralInfo/reqSoftphoneHeight/label":"Softphone Height",
  "/reqGeneralInfo/reqSoftphoneHeight/sortOrder":"6.0",
  "/reqGeneralInfo/reqSoftphoneWidth":"400",
  "/reqGeneralInfo/reqSoftphoneWidth/label":"Softphone Width",
  "/reqGeneralInfo/reqSoftphoneWidth/sortOrder":"7.0",
  "/reqGeneralInfo/reqStandbyUrl":"/apex/ContactCenter",
  "/reqGeneralInfo/reqStandbyUrl/label":"CTI Adapter URL2",
  "/reqGeneralInfo/reqStandbyUrl/sortOrder":"3.0",
  "/reqGeneralInfo/reqTimeout":"10000",
  "/reqGeneralInfo/reqTimeout/label":"Timeout",
  "/reqGeneralInfo/reqTimeout/sortOrder":"4.0",
  "/reqGeneralInfo/reqUseApi":"true",
  "/reqGeneralInfo/reqUseApi/label":"Use CTI API",
  "/reqGeneralInfo/reqUseApi/sortOrder":"5.0",
  "/reqGeneralInfo/sortOrder":"0.0",
  "/reqPhoneDemoSettings/label":"Phone Demo Settings",
  "/reqPhoneDemoSettings/reqIncomingNumber":"(415) 555-1212 (tel:4155551212)",
  "/reqPhoneDemoSettings/reqIncomingNumber/label":"Simulated Incoming Phone Number",
  "/reqPhoneDemoSettings/reqIncomingNumber/sortOrder":"0.0",
  "/reqPhoneDemoSettings/reqProvider":"DummyProvider",
  "/reqPhoneDemoSettings/reqProvider/label":"CTI Provider",
  "/reqPhoneDemoSettings/reqProvider/sortOrder":"1.0",
  "/reqPhoneDemoSettings/reqProviderAccount":"AXXXXXXXXXXXXXXXXX",
  "/reqPhoneDemoSettings/reqProviderAccount/label":"Provider Account",
  "/reqPhoneDemoSettings/reqProviderAccount/sortOrder":"2.0",
  "/reqPhoneDemoSettings/reqProviderAuthToken":"YYYYYYYYYYYYYYYYYY",
  "/reqPhoneDemoSettings/reqProviderAuthToken/label":"Provider Auth Token",
  "/reqPhoneDemoSettings/reqProviderAuthToken/sortOrder":"3.0",
  "/reqPhoneDemoSettings/reqProviderCallerNumber":"415555555",
  "/reqPhoneDemoSettings/reqProviderCallerNumber/label":"Provider Caller Number",
  "/reqPhoneDemoSettings/reqProviderCallerNumber/sortOrder":"4.0",
  "/reqPhoneDemoSettings/sortOrder":"2.0"
}
```

## Related Topics

- error
                              messages (atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_error_messages_lightning.htm)
