---
title: "Test and Troubleshoot"
domain: mobile-offline
topic: test-and-troubleshoot
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:34:56.530Z
estimatedTokens: 321
keywords: [Test, Troubleshoot, MAGE, app, action, virtual, device, simulator, emulator, Validate, Best, Practices]
---

# Test and Troubleshoot

> MAGE allows you to see and test your app in action through a virtual device simulator
    or emulator.

# Test and Troubleshoot

MAGE allows you to see and test your app in action through a virtual device simulator or emulator.

## Test and Validate

-   The agent uses the CLI to open your app on a local iOS Simulator or Android Emulator.
-   The app streams logs, network requests, and error messages back to the AI agent. This enables "conversational debugging" where the agent analyzes live behavior and provides live feedback to suggest fixes.
-   After a feature is finished building, the agent asks: "Would you like to make changes? Or keep going?". You determine when a feature is complete.

## Troubleshoot and Best Practices

-   When requesting an app, include as much detail as possible in your first prompt.
    -   Bad example: "Make a mobile app."
    -   Good example: "Generate an iOS app for field technicians by using the Mobile SDK. It must allow them to view their daily schedule and log service calls."
-   If you’re modifying the generated iOS code manually later, make sure that you add new files to the .xcodeproj file. The tool handles this automatically during generation to prevent "file not found" errors.
-   Make sure you set up your local simulators (Xcode/Android Studio) and run them before starting the generation process for the smoothest experience.
