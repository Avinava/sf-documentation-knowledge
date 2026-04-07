---
title: "Validation Checks to Publish a Journey"
domain: mc-apis
topic: validation-checks-to-publish-a-journey
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:22.498Z
estimatedTokens: 724
keywords: [Validation, Checks, Publish, Journey, cannot, become, active, receive, incoming, contacts, via, POST, events, resource, any]
---

# Validation Checks to Publish a Journey

> A journey cannot become active and receive incoming contacts via the POST /events resource or any other source until all validation tests are completed and the journey is in a running, published state.

# Validation Checks to Publish a Journey

A journey cannot become active and receive incoming contacts via the POST /events resource or any other source until all validation tests are completed and the journey is in a running, published state.

## Journey Operating States

-   **Draft**: Author-time state of a journey, when a marketer is building the journey. Journeys in this state cannot receive incoming events. This is the only state in which a journey's structure and configuration may be modified.
-   **Running/Published**: Once a marketer is pleased with the journey draft, he or she can activate the journey. This confirms that all components of the journey are in a valid state to publish. Once all components have successfully validated, the journey can receive incoming events.
-   **Running/Unpublished**: When a new version of a journey is published, the previously published version becomes unpublished. This means that the version is still running (contacts are still flowing through the journey), but no new contacts are being accepted into this version.
-   **Stopped**: A marketer can stop a journey to prevent it from accepting any further incoming events. When stopped, all contacts currently in the journey are ejected, as if they immediately reached an end of the journey, regardless of where they are currently in the journey.

## Journey Activation Checks

In order to move into the **Running/Published** state, the journey must meet each of the following requirements:

-   The entry event must be completely configured and saved.
-   The journey must contain at least one activity.
-   Each activity must be completely configured and saved.
-   The journey activity graph must be acyclic, with the exception of the wait-until activity.
-   The journey must be named.
-   If the journey contains a goal, it must be completely configured and saved.

If all the above items are satisfied, the journey goes through a validation pass. During this phase, the entry event, activities, and the goal (if defined) are validated. Additionally, any Marketing Cloud channel application activities are internally validated. For example, if a send email message activity is part of a journey and configured, the email associated with the activity must pass Automation Studio's validations, such as containing a Profile Center link.

## Causes Failure during the Activation Phase

The send email activity is used in the journey and:

-   The email does not contain a Profile Center link
-   There are errors in the email itself
-   If the email contains personalization string which isn't in the profile attributes A custom activity is used in the journey and:
-   The save method of the activity does not return a 200 HTTP response
-   The validate method of the activity does not return a 200 HTTP response
-   The publish method of the activity does not return a 200 HTTP response
