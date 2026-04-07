---
title: "Check Agent Availability"
domain: service-sdk-android
topic: check-agent-availability
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:32.473Z
estimatedTokens: 652
keywords: [Check, Agent, Availability, starting, session, chat, agents, provide, users, accurate, expectations, instance, hide, disable, button]
---

# Check Agent Availability

> Before starting a session, you can check the availability of your chat agents and then
    provide your users with more accurate expectations. For instance, when no agents are available,
    you can hide or disable the button to contact an agent

# Check Agent Availability

Before starting a session, you can check the availability of your chat agents and then provide your users with more accurate expectations. For instance, when no agents are available, you can hide or disable the button to contact an agent

![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=service_sdk_android)

#### Important

The legacy chat product is scheduled for retirement on February 14, 2026, and is in maintenance mode until then. During this phase, you can continue to use chat, but we no longer recommend that you implement new chat channels. To avoid service interruptions to your customers, migrate to [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US) before that date. Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time. Learn about chat retirement in [Help](https://help.salesforce.com/s/articleView?id=001790618&type=1&language=en_US).

To check whether agents are available, create an [AgentAvailabilityClient](https://forcedotcom.github.io/ServiceSDK-Android/releases/chat/4.3.1/api/reference/com/salesforce/android/chat/core/AgentAvailabilityClient.html) object and asynchronously check the [AvailabilityState](https://forcedotcom.github.io/ServiceSDK-Android/releases/chat/4.3.1/api/reference/com/salesforce/android/chat/core/model/AvailabilityState.html) status.

In Java:

```

```

In Kotlin:

```

```

To understand the algorithm used for the estimated wait time, see the estimated wait time documentation in the [Chat REST API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.live_agent_rest.meta/live_agent_rest/live_agent_rest_estimated_wait_time.htm).

You can also use this API to get an updated Chat server before starting a session to determine whether a server has changed for your pod. Call the getLiveAgentPod method from the [AvailabilityState](https://forcedotcom.github.io/ServiceSDK-Android/releases/chat/4.3.1/api/reference/com/salesforce/android/chat/core/model/AvailabilityState.html) object you get back from the [AgentAvailabilityClient](https://forcedotcom.github.io/ServiceSDK-Android/releases/chat/4.3.1/api/reference/com/salesforce/android/chat/core/AgentAvailabilityClient.html). If the server has changed, update this configuration value in the future to prevent an unnecessary round-trip request.

## Code Examples

```apex
// Build a configuration object
ChatConfiguration chatConfiguration = 
  new ChatConfiguration.Builder(ORG_ID, BUTTON_ID, 
                                DEPLOYMENT_ID, LIVE_AGENT_POD)
  .build();

// Create an agent availability client
Boolean requestEstimatedWaitTime = false; // Don’t request if we don’t plan to use it
AgentAvailabilityClient client = ChatCore.configureAgentAvailability(chatConfiguration, requestEstimatedWaitTime);

// Check agent availability
client.check().onResult(new Async.ResultHandler<AvailabilityState>() {
  @Override
  public void handleResult (Async<?> async, @NonNull AvailabilityState state) {

    switch (state.getStatus()) {
      case AgentsAvailable: {
        // TO DO: Handle the case where agents are available

        // Optionally, use the estimatedWaitTime to
        // show an estimated wait time until an agent
        // is available. This value is only valid
        // if you request it from the
        // configureAgentAvailability call above.
        // Estimate is returned in seconds.
        Integer ewt = state.getEstimatedWaitTime();

        break;
      }
      case NoAgentsAvailable: {
        // TO DO: Handle the case where no agents are available
        break;
      }
      case Unknown: {
        break;
      }
    }
});
```

```
// Build a configuration object
val chatConfiguration = ChatConfiguration.Builder(ORG_ID, BUTTON_ID,
     DEPLOYMENT_ID, LIVE_AGENT_POD).build()

// Create an agent availability client
val requestEstimatedWaitTime = false // Don’t request if we don’t plan to use it
val client = ChatCore.configureAgentAvailability(chatConfiguration, requestEstimatedWaitTime)

// Check agent availability
client.check().onResult(object: Async.ResultHandler<AvailabilityState> {
  override fun handleResult(operation: Async<*>?, result: AvailabilityState) {
    when (result.getStatus()) {
      AvailabilityState.Status.AgentsAvailable -> {
        // TO DO: Handle the case where agents are available

        // Optionally, use the estimatedWaitTime to
        // show an estimated wait time until an agent
        // is available. This value is only valid
        // if you request it from the
        // configureAgentAvailability call above.
        // Estimate is returned in seconds.
        val ewt = result.getEstimatedWaitTime()
      }
      AvailabilityState.Status.NoAgentsAvailable -> {
        // TO DO: Handle the case where no agents are available
      }
    }
  }
})
```
