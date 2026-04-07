---
title: "Android Logging Framework"
domain: mobile-sdk
topic: android-logging-framework
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:29.401Z
estimatedTokens: 1297
keywords: [Android, Logging, Framework, Mobile, SDK, developers, easily, logs, app, components, Logger, Component, Customize, Output]
---

# Android Logging Framework

> Mobile SDK
  provides a logging framework that allows developers to easily create logs for app components.

# Android Logging Framework

Mobile SDK provides a logging framework that allows developers to easily create logs for app components.

With this framework, you can

-   Output logs to both console and file.
-   Output logs for your custom components and Mobile SDK components.
-   Log at a component level. For example, Mobile Sync and SmartStore use separate loggers. You can also create custom loggers for your own components.
-   Set logging levels, such as ERROR, DEBUG, and VERBOSE.
-   Configure logging levels per component. For example, you can set Mobile Sync to the ERROR level and SmartStore to VERBOSE.

Using the logging framework is like playing tunes on a juke box. To obtain and use a logger instance:

1.  **Browse the tunes**—Obtain a list of your app’s available components. This runtime-only step isn’t necessary if you already know the name of the component.
2.  **Make your selection**—Pass the name of a component to the framework. To “play” your selection, Mobile SDK returns a logger instance for the chosen component. It doesn’t matter whether the logger exists—Mobile SDK creates one if necessary.
3.  **Bust a move**—Set the logging level, write a line to the log, limit the number of log lines, turn logging off or on.

Not a perfect analogy, but hopefully you get the point. To get the details, continue reading.

## Create a Logger for Your Component

A component represents a virtual domain in your app’s functionality. The component can represent your entire app or just a portion of its feature set. You devise a name for the component when you create the logger. You can then use the logger to document any notable conditions arising in the component’s domain.

To create a logger for your own component, you don’t have to override, extend, or implement anything. Instead, you request a logger from the logging framework using the name of your component. If the logger isn’t already in the components list, the logging framework creates a singleton logger and adds the component to the list. Otherwise, it returns the existing logger. All threads share this logger.

You can create a single logger or multiple loggers. For example, to log all messages from your app at the same level, create a single logger that uses your app name. One logger is often sufficient for an app. However, if you want to differentiate logging levels between various parts of your app, you can create more loggers with component-based names. Be careful not to go overboard—you don’t want excessive logging activity to degrade your app’s performance.

You request loggers through the following objects.

-   **Android:** com.salesforce.androidsdk.analytics.logger.SalesforceLogger

Use the following APIs to get loggers for custom components or standard Mobile SDK components.

**Android**

```

```

For example:

```

```

## Get All Components

The following SalesforceLogger method returns a list of the names of all components that are currently associated with a logger. If you don’t know the names of Mobile SDK internal components, your code can discover them at runtime in this list. You can use this list, for instance, to turn off logging for all components. How your app uses this information is up to your business logic.

**Android**

```

```

## Customize Logger Output

Once you get a logger instance, you can control the type and quantity of information the logger outputs.

-   **Set a Component’s Log Level**

    Each app component can have its own logger instance and its own log level. The default log level is DEBUG for a debug build and ERROR for a release build. Use the following APIs to set a component’s log levels.

    **Android**

    ```

    ```

    Android loggers use an internal public enum that mirrors the Android default log levels. For example:

    ```

    ```

-   **Write a Log Line**

    The following APIs can be used to write a log line using the new framework. The log line is automatically written to both console and file, unless file logging is disabled for that component.

    **Android**

    ```

    ```

    ```

    ```

-   **Enable or Disable File Logging**

    The logging framework logs messages to both console and file by default. File logging can be disabled if necessary, using the following APIs.

    **Android**

    ```

    ```

    Enable file logging:

    ```

    ```

    In this API, maxSize represents the maximum number of log lines that the file can hold before the log lines are rolled.


## Mobile SDK Logging Components

Mobile SDK provides a default logger for each of its standard components. This architecture allows you to control the log level of each component independently of other components. For example, you could set the log level of Mobile Sync to INFO while the log level of SmartStore is set to ERROR.

Here are lists of the standard component loggers in Mobile SDK.

**Android**

-   SalesforceAnalyticsLogger
-   SalesforceSDKLogger
-   SmartStoreLogger
-   MobileSyncLogger
-   SalesforceReactLogger
-   SalesforceHybridLogger

Each of these logging components has convenience methods for adjusting log levels and logging messages associated with those core components.

## Code Examples

```apex
public synchronized static SalesforceLogger getLogger(String componentName, Context context);
```

```
SalesforceLogger.getLogger(”MyComponent”, context);
```

```apex
public synchronized static Set<String> getComponents();
```

```apex
public void setLogLevel(Level level);
```

```
logger.setLogLevel(Level.INFO);
```
