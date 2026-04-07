---
title: "Check Agent Availability"
domain: service-sdk-ios
topic: check-agent-availability
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:28.077Z
estimatedTokens: 664
keywords: [Check, Agent, Availability, starting, session, chat, agents, provide, users, accurate, expectations]
---

> Before starting a session, you can check the availability
            of your chat agents and then provide your users with more accurate
        expectations.

# Check Agent Availability

Before starting a session, you can check the availability of your chat agents and then provide your users with more accurate expectations.

![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=service_sdk_ios)

#### Important

The legacy chat product is scheduled for retirement on February 14, 2026, and is in maintenance mode until then. During this phase, you can continue to use chat, but we no longer recommend that you implement new chat channels. To avoid service interruptions to your customers, migrate to [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US) before that date. Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time. Learn about chat retirement in [Help](https://help.salesforce.com/s/articleView?id=001790618&type=1&language=en_US).

![Warning](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_warning.png&folder=service_sdk_ios)

#### Warning

If you use the [Permitted Domains setting in your Chat deployment](https://help.salesforce.com/articleView?id=live_agent_deployment_settings.htm&type=0&language=en_US), you’ll get unreliable information from the chat availability check in the SDK. For instance, the agent availability status may always return false. If you want to use Permitted Domains for your web chat deployment, we strongly advise that you create a separate deployment for the Service SDK.

To check whether agents are available, call the [determineAvailabilityWithConfiguration](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCSChat.html#/c:objc\(cs\)SCSChat\(im\)determineAvailabilityWithConfiguration:completion:) method on the [chatCore](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCServiceCloud.html#/c:objc\(cs\)SCServiceCloud\(py\)chatCore) property, similar to how you [start a chat session](atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/live_agent_basic_setup.htm "To add Chat to your iOS app, create an SCSChatConfiguration object and pass it to the showChat method.").

In Swift:

```

```

In Objective-C:

```

```

To understand the algorithm used for the estimated wait time, see the estimated wait time documentation in the [Chat REST API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.live_agent_rest.meta/live_agent_rest/live_agent_rest_estimated_wait_time.htm).

## Code Examples

```
let config = SCSChatConfiguration(liveAgentPod: "YOUR-POD-NAME",
                                  orgId: "YOUR-ORG-ID",
                                  deploymentId: "YOUR-DEPLOYMENT-ID",
                                  buttonId: "YOUR-BUTTON-ID")

ServiceCloud.shared().chatCore.determineAvailability(with: config,
                           completion: { (error: Error?, 
                                          available: Bool, 
                                          estimatedWaitTime: TimeInterval) in

  if (error != nil) {
    // TO DO: Handle error
  }
  else if (available) {
    // TO DO: Enable chat button...

    // Optionally, use the estimatedWaitTime to
    // show an estimated wait time until an agent
    // is available. This value is only valid if 
    // SCSChatConfiguration.queueStyle is set to
    // EstimatedWaitTime. Estimate is returned
    // in seconds.
  } 
  else {
    // TO DO: Disable button or warn user that no agents are available
  }

})
```

```
SCSChatConfiguration *config =
  [[SCSChatConfiguration alloc] initWithLiveAgentPod:@"YOUR-POD-NAME"
                                               orgId:@"YOUR-ORG-ID"
                                        deploymentId:@"YOUR-DEPLOYMENT-ID"
                                            buttonId:@"YOUR-BUTTON-ID"];

[[SCServiceCloud sharedInstance].chatCore 
                 determineAvailabilityWithConfiguration:config 
                     completion:^(NSError *error, BOOL available, 
                                  NSTimeInterval estimatedWaitTime) {

  if (error != nil) {
    // TO DO: Handle error
  }
  else if (available) {
    // TO DO: Enable chat button...

    // Optionally, use the estimatedWaitTime to
    // show an estimated wait time until an agent
    // is available. This value is only valid if 
    // SCSChatConfiguration.queueStyle is set to
    // EstimatedWaitTime. Estimate is returned
    // in seconds.
  } 
  else {
    // TO DO: Disable button or warn user that no agents are available
  }

});
```

## Related Topics

- start a chat session (atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/live_agent_basic_setup.htm)
