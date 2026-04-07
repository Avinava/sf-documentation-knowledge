---
title: "ForcePlugin Class"
domain: mobile-sdk
topic: forceplugin-class
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:24.896Z
estimatedTokens: 199
keywords: [ForcePlugin, classes, thecom.salesforce.androidsdk.phonegap, package, intended, hybrid, app, support, implement, Javascript, plug-ins, native, code, base, Mobile, SDK, require, own, plug-in, Mob]
---

> All classes in thecom.salesforce.androidsdk.phonegap package
   are intended for hybrid app support. Most of these classes implement Javascript plug-ins that
   access native code. The base class for these Mobile SDK plug-ins is
    ForcePlugin. If you require your own Javascript plug-in in
   a Mob

# ForcePlugin Class

All classes in thecom.salesforce.androidsdk.phonegap package are intended for hybrid app support. Most of these classes implement Javascript plug-ins that access native code. The base class for these Mobile SDK plug-ins is ForcePlugin. If you require your own Javascript plug-in in a Mobile SDK app, extend ForcePlugin, and implement the abstract execute() function.

ForcePlugin extends CordovaPlugin, which works with the Javascript framework to let you create a Javascript module that can call into native functions. PhoneGap provides the bridge on both sides: you create a native plug-in with CordovaPlugin and then you create a Javascript file that mirrors it. Cordova calls the plug-in’s execute() function when a script calls one of the plug-in’s Javascript functions.
