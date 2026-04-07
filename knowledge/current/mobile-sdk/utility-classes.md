---
title: "Utility Classes"
domain: mobile-sdk
topic: utility-classes
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:29.556Z
estimatedTokens: 161
keywords: [Utility, Classes, Though, util, package, internal, several, benefit, third-party, developers]
---

# Utility Classes

> Though most of the classes in the util package are for internal use, several of them can also benefit third-party
developers.

# Utility Classes

Though most of the classes in the util package are for internal use, several of them can also benefit third-party developers.

| Class | Description |
| --- | --- |
| EventsObservable | See the source code for a list of all events that Mobile SDK for Android propagates. |
| EventsObserver | Implement this interface to eavesdrop on any event. This functionality is useful if you’re doing something special when certain types of events occur. |
| UriFragmentParser | You can directly call this static helper class. It parses a given URI, breaks its parameters into a series of key/value pairs, and returns them in a map. |
