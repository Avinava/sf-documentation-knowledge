---
title: "Get Started with the Service Cloud Connector API"
domain: service-connector-api-developer-guide
topic: get-started-with-the-service-cloud-connector-api
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:45.333Z
estimatedTokens: 926
keywords: [Started, Service, Cloud, Connector, API, Contact, Center, CCaaS, telephony, system, Salesforce, org, pass, receive, events]
---

# Get Started with the Service Cloud Connector API

> The Connector API is the interface between your Contact Center as a Service (CCaaS)
        or telephony system and your Salesforce org. This API allows you to pass information to
        Salesforce and receive events back from Salesforce.

# Get Started with the Service Cloud Connector API

The Connector API is the interface between your Contact Center as a Service (CCaaS) or telephony system and your Salesforce org. This API allows you to pass information to Salesforce and receive events back from Salesforce.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=service_connector_api_developer_guide)

#### Important

The Connector API is for partners who are implementing Bring Your Own Channel for CCaaS or Service Cloud Voice with Partner Telephony.

## The Basics

To use the Connector API, you must call initializeConnector() (imported from Github) as the first step during the window load process. This function is part of the [Base Connector API](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_api_base.htm "The Base Connector API allows you to initialize the API and send information to Salesforce when events occur with your Contact Center as a Service (CCaaS) or telephony system.") and ensures that Salesforce can reliably establish two-way communication with the connector without any timing issues.

The [initializeConnector()](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_base_initializeconnector.htm "Initializes the Salesforce Connector API Base.") function takes your Connector API interface implementation as a parameter. Salesforce holds onto the connector implementation object during the entire session and this object must implement the required [Connector API Methods](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_api_interface.htm "The Connector API methods are what you implement in order to be notified when messaging or telephony events occur within the Salesforce org."). If the connector requires loading any resources, we recommend that you do this outside of the connector object, so that they can be loaded asynchronously without delaying the call to initializeConnector(). After you call initializeConnector(), Salesforce calls the [init()](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_init.htm "Initialize the Connector API Interface.") method on the Connector API interface with call center configuration information. This method returns a promise and can asynchronously load any resources before resolving the promise.

```

```

```

```

## Best Practices

Returning JavaScript promises in the connector greatly reduces the need to produce events or errors. Instead, the connector simply returns a resolved or rejected promise. A Connector API interface implementation must return a promise that resolves to a value of a specific type.

Here are some sample promises along with type checking.

```

```

For telephony systems, if you’re using callbacks, you can convert them to promises as shown here:

```

```

#### See Also

-   [Service Cloud Base Connector API](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_api_base.htm "The Base Connector API allows you to initialize the API and send information to Salesforce when events occur with your Contact Center as a Service (CCaaS) or telephony system.")

-   [Service Cloud Connector API Methods](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_api_interface.htm "The Connector API methods are what you implement in order to be notified when messaging or telephony events occur within the Salesforce org.")

## Code Examples

```
<!-- Sample connector HTML --> 
<html>
    <body>
        <div id="iframe" style="display: none;"></div>
    </body>
    <script type="module" src="connectordemo.js"></script>
</html>
```

```
import { initializeConnector } from 'scv-connector-base';
import { Sdk } from './vendor-sdk';

const connector = new PartnerConnectorInterfaceImplementation();

// Calling the Connector API Base
window.addEventListener('load', () => {
    /**
    * initializeConnector should be called as early as possible
    * to allow Salesforce to reliably establish communication
    * with the connector
    */ 
    initializeConnector(connector);
});

// Connector API interface implementation
export class PartnerConnectorInterfaceImplementation {
    constructor(state) {
        this.sdk = new Sdk(state);
    }

    /**
     * Called by Salesforce to initialize the connector
     * @param {object} callCenterConfig - SFDC Contact Center Settings
     */
    init(callCenterConfig) {
        return new Promise(( resolve, reject ) => {
            this.sdk.performSSO(callCenterConfig).then( (success) => {
                if (success) resolve(new InitResult({}));
                else reject("Failed to perform SSO");
            });
        });
    }
}
```

```
// Base connector
try {     
    const result = await vendorConnector.setAgentStatus(agentStatus);

    // Validate result is of type GenericResult else throw error
    dispatchEvent(constants.EVENT_TYPE.SET_AGENT_STATUS_RESULT, { success });
} catch (e) {
    dispatchError(constants.ERROR_TYPE.CAN_NOT_SET_AGENT_STATUS, e);
}

// Connector
setAgentStatus(agentStatus) {
   return this.sdk.setAgentStatus(agentStatus).then((success) => {
        return new GenericResult({success});
   });
}

// Vendor
setAgentStaus(agentStatus) {
    return new Promise((resolve, reject) => {
        // Perform backend operations
        if (success) {
            resolve();
        } else {
            reject();
        }
    });
}
```

```
// Callback
function setAgentStatus(agentStatus) {
    getAgent().setAgentStatus(agentStatus, {
        success: (success) => {
            getTelephonyEventEmitter().emit(Constants.EVENT_TYPE.SET_AGENT_STATUS_RESULT, { success });
        },
        failure: (response) => {
            getTelephonyEventEmitter().emit(Constants.EVENT_TYPE.SET_AGENT_STATUS_RESULT, { success: false });
        }
    });
}

// Promise
function setAgentStatus(agentStatus) {
    return new Promise((resolve, reject) => {
        getAgent().setAgentStatus(agentStatus, {
            success: (success) => {
                resolve({ success });
            },
            failure: (response) => {
                reject();
            }
        });
    });
}
```

## Related Topics

- Base Connector API (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_api_base.htm)
- initializeConnector() (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_base_initializeconnector.htm)
- Connector API Methods (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_api_interface.htm)
- init() (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_init.htm)
- Service Cloud Base Connector API (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_api_base.htm)
- Service Cloud Connector API Methods (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_api_interface.htm)
