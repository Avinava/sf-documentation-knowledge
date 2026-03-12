---
title: "Send Real-Time Signals"
domain: voice-pt-developer-guide
topic: send-real-time-signals
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:22.232Z
estimatedTokens: 731
keywords: [Send, Real-Time, Signals, Voice, resiliency, ensures, calls, number, conversations, over, limit, background, service, affected]
---

# Send Real-Time Signals

> Voice resiliency ensures that calls can still go through when the number of conversations
        is over limit or when the background service is affected.

# Send Real-Time Signals

Voice resiliency ensures that calls can still go through when the number of conversations is over limit or when the background service is affected.

Add support for sending real-time signals so that Salesforce can ingest the signals from your partner telephony system.

Perform the steps in this document to support sending real-time signals, giving administrators the ability to set up intelligent signals when they configure Conversation Intelligence rules. In the following steps, you will add support for sending real-time signals, implement the IntelligenceServiceProvider Apex interface and related classes, and then create and deploy the managed package for distribution to customers.

After the customer installs the managed package in their org, they can set the intelligence signal source and signal types when they create a Conversation Intelligence rule.

To add support for sending real-time signals, follow these instructions.

1.  When you import the ConversationVendorInfo record, set the CapabilitiesSupportsIntelligence field to true to enable the feature.
2.  Using the following code blocks as guides, implement the service\_cloud\_voice.IntelligenceServiceProvider Apex interface and related classes.

    IntelligenceServiceProvider Apex Interface. Implement this interface to add support for sending real-time signals.

    ```

    ```

    IntelligenceServiceRequest Apex Class. The following class definition represents the shape of the request payload that is needed for the IntelligenceServiceResponse getSupportedIntelligenceServicesAndSignalTypes method.

    ```

    ```

    IntelligenceServiceResponse Apex Class. This class definition represents the shape of the response that is returned from the IntelligenceServiceResponse getSupportedIntelligenceServicesAndSignalTypes method.

    ```

    ```

    IntelligenceServiceAndSignalsInfo Apex Class. This class definition represents an individual instance of an intelligence service along with a list of the supported signal types. The IntelligenceServiceResponse class contains this class.

    ```

    ```

    IntelligenceSignalType Apex Class. This enum represents the list of supported intelligence signal types. This class is used in the IntelligenceServiceAndSignalsInfo Apex class.

    ```

    ```

    Sample Implementation. Use the following sample to add your implementation to the IntelligenceServiceProvider class:

    ```

    ```

3.  Prepare the managed package.

    -   If you’ve never deployed a managed package for Service Cloud Voice, deploy the managed package now.
    -   If you’ve deployed a managed package for Service Cloud Voice before, update the managed packages with your implementation of the IntelligenceServiceProvider class.

    After you prepare the managed package, copy the URL and send it to your customer, who will use it to install the managed package in their org.

## Code Examples

```apex
global interface IntelligenceServiceProvider {
  /**
   * This method is to get a map of supported intelligence services and corresponding signal types
   * @return IntelligenceServiceResponse
   */
  IntelligenceServiceResponse getSupportedIntelligenceServicesAndSignalTypes(IntelligenceServiceRequest intelligenceServiceRequest);
}
```

```apex
global with sharing class IntelligenceServiceRequest {
  private ContactCenterInfo contactCenterInfo;
  /**
   * Constructor for creating IntelligenceServiceRequest
   * @param contactCenterInfo contact center info
   */
  global IntelligenceServiceRequest(ContactCenterInfo contactCenterInfo) {
    this.contactCenterInfo = contactCenterInfo;
  }
  global ContactCenterInfo getContactCenterInfo() {
    return contactCenterInfo;
  }
}
```

```apex
global with sharing class IntelligenceServiceResponse extends PartnerResponse {
  private List<IntelligenceServiceAndSignalsInfo> intelligenceServiceAndSignalsInfos;
  /**
   * Constructor for creating IntelligenceServiceResponse
   * @param intelligenceServiceInfos Map of supported intelligence services and corresponding signal types
   */
  global IntelligenceServiceResponse(boolean success, String errorMessage, List<IntelligenceServiceAndSignalsInfo> intelligenceServiceAndSignalsInfos) {
  super(success, errorMessage);
  this.intelligenceServiceAndSignalsInfos = intelligenceServiceAndSignalsInfos;
  }
  /**
   * @return supported intelligence services and corresponding signal types
   */
  global List<IntelligenceServiceAndSignalsInfo> getIntelligenceServiceAndSignalsInfos() {
    return this.intelligenceServiceAndSignalsInfos;
  }
}
```

```apex
global with sharing class IntelligenceServiceAndSignalsInfo {
  private String service;
  private String masterLabel;
  private Set<IntelligenceSignalType> signalTypes;
  /**
   * Constructor for creating IntelligenceServiceInfo.
   * @param List of Services and Supported SignalTypes for the Service.
   */
  global IntelligenceServiceAndSignalsInfo(String service, String masterLabel, Set<IntelligenceSignalType> signalTypes) {
    this.service = service;
    this.masterLabel = masterLabel;
    this.signalTypes = signalTypes;
  }
  global String getService() {
    return this.service;
  }
  global String getMasterLabel() {
    return this.masterLabel;
  }
  global Set<IntelligenceSignalType> getSignalTypes() {
    return this.signalTypes;
  }
}
```

```apex
global enum IntelligenceSignalType {
  Category,
  Sentiment
}
```
