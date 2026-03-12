---
title: "Customize Error Messages"
domain: voice-pt-developer-guide
topic: customize-error-messages
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:22.008Z
estimatedTokens: 1463
keywords: [Customize, Error, Messages, Improve, rep, efficiency, displaying, custom, Omni-Channel, utility, whenever, telephony, action, fails, generic]
---

# Customize Error Messages

> Improve rep efficiency by displaying custom error messages in the Omni-Channel
        utility whenever a telephony action fails. By default, generic labels are
        displayed.

# Customize Error Messages

Improve rep efficiency by displaying custom error messages in the Omni-Channel utility whenever a telephony action fails. By default, generic labels are displayed.

Custom error messages can be displayed in response to failed telephony actions. For example, you can display a custom error message in response to a failed acceptCall action. Here’s an example of how the custom error message flow works when the acceptCall telephony action fails.

1.  The rep tries to accept the call.
2.  Salesforce passes this information to the Connector API (vendorConnector), which in turn passes the information to your telephony provider.
3.  The Connector API responds.
4.  If the error is of type CustomError, Salesforce displays a custom error message. Otherwise, the default error string for MESSAGE\_TYPE.ACCEPT\_CALL is displayed.

Here’s a sample, taken from the [baseConnector.js file in GitHub](https://github.com/salesforce/scv-connector-base/blob/master/src/main/baseConnector.js).

```

```

Custom error messages can also be displayed at any time based on the publishError event type (eventType). Here’s an example of how the custom error message flow works with publishError MUTE\_TOGGLE event type.

1.  The rep mutes the call.
2.  Salesforce passes this information to the Connector API (vendorConnector), which in turn passes the information to your telephony provider.
3.  The Connector API responds.
4.  If the error is of type CustomError, Salesforce displays a custom error message. Otherwise, the default error string for ERROR\_TYPE.CAN\_NOT\_MUTE\_ALL is displayed.

Here’s a sample, taken from the [baseConnector.js file in GitHub](https://github.com/salesforce/scv-connector-base/blob/master/src/main/baseConnector.js).

```

```

After you create a custom error message, whenever you invoke an API, a promise object is returned. If the promise resolves to a failure, Salesforce looks for a CustomError object to the promise response. If a CustomError object exists in the response, Salesforce displays the custom error. Otherwise, the default error message is displayed.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=voice_pt_developer_guide)

#### Note

If a CustomError object exists in the promise response but Salesforce can’t find the labelName, the following message appears, and Salesforce doesn’t fall back to the generic error message, “We couldn’t find \[namespace.customErrorLabel\].”

Whenever you create a custom error message, perform a test to ensure the message appears when the appropriate telephony action or event fails. Perform the test through the Errors section of your demo connector phone simulator. You can find out more about the Errors section in the [remote.html file of the demo connector in GitHub](https://github.com/salesforce-misc/byo-demo-connector/blob/main/public/remote.html):

```

```

## Create Custom Error Messages

There are two ways to create custom error messages:

-   Create the custom labels for the error messages through the UI by following the steps in the [Custom Labels](https://help.salesforce.com/s/articleView?id=platform.cl_about.htm&type=5&language=en_US) page.
-   Create the custom labels for the error messages yourself, distribute them in a managed package to AppExchange, and finally deploy the managed package in your org. See the CustomError Connector API object for more information.

After you create a custom error message, perform a test to ensure the message appears when the appropriate telephony action or event fails.

## Test Custom Error Messages

You can only test one custom error message at a time. Repeat these steps for each custom error message you want to test.

To test the custom error messages you configured:

1.  In the Errors section of your demo connector phone simulator, select **Display on error** to display the message during the simulation.
2.  In the text box, enter the custom label you want to test. The custom label must be in the format <namespace>.<labelName>, where namespace is the name of the Salesforce org’s namespace prefix, and labelName is the name of the custom label in your org. If you don’t have a namespace, set the value to c. For example, c.cannotMuteLabel.
3.  Simulate the telephony action or event in the Omni-Channel utility and view the error message to make sure the customized version appears.
4.  Deselect **Display or error** after you're done testing your custom error messages.

#### See Also

-   [*Salesforce Help:* Custom Labels](https://help.salesforce.com/s/articleView?id=platform.cl_about.htm&type=5&language=en_US "Salesforce Help: Custom Labels - HTML (New Window)")

-   [*Service Cloud Connector API Reference*: publishError](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_base_publisherror.hm "Service Cloud Connector API Reference: publishError - HTML (New Window)")

-   [*Service Cloud Connector API Reference*: customError](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_customerror.hm "Service Cloud Connector API Reference: customError - HTML (New Window)")

-   [Create and Deploy Your Package](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_deploy_package.htm "Use these commands to create, update, and install the package.")

-   [Test Your Implementation with the Voice Call Simulator](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_test_implementation.htm "The Voice Call Simulator component helps you get comfortable with Service Cloud Voice. As you set up Service Cloud Voice, use the simulator to walk through a variety of call scenarios.")

## Code Examples

```
} catch (e) {
  isSupervisorConnected = false;
  if (e instanceof CustomError) {
    dispatchCustomError(e, constants.MESSAGE_TYPE.ACCEPT_CALL);
  } else {
    dispatchInfo(constants.INFO_TYPE.CAN_NOT_ACCEPT_THE_CALL, {messagetype: constants.MESSAGE_TYPE.ACCEPT_CALL, additionalInfo: e});
  }
}
```

```
} catch (e) {
  if (e instanceof CustomError) {
    dispatchCustomError(e, constants.MESSAGE_TYPE.MUTE);
  } else {
    dispatchError(constants.ERROR_TYPE.CAN_NOT_MUTE_CALL, e, constants.MESSAGE_TYPE.MUTE);
  }
}
```

```
<div class="slds-checkbox">
  <input type="checkbox" name="options" id="throwErrorCheckbox"></input>
  <label class="slds-checkbox__label" for="throwErrorCheckbox">
  <span class="slds-checkbox_faux"></span>
  <span class="slds-form-element__label">Display an error</span>
  </label>
</div>
```

## Related Topics

- Create and Deploy Your Package (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_deploy_package.htm)
- Test Your Implementation with the Voice Call Simulator (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_test_implementation.htm)
