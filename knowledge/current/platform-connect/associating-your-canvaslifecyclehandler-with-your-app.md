---
title: "Associating Your CanvasLifecycleHandler with Your App"
domain: platform-connect
topic: associating-your-canvaslifecyclehandler-with-your-app
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:27.405Z
estimatedTokens: 170
keywords: [Associating, CanvasLifecycleHandler, App, you’ve, created, Apex, implementation, associate, canvas, adding, configuration, settings]
---

# Associating Your CanvasLifecycleHandler with Your App

> After you’ve created an Apex implementation class for CanvasLifecycleHandler, you
  need to associate it with your canvas app by adding the class name to your canvas app
  configuration settings.

# Associating Your CanvasLifecycleHandler with Your App

After you’ve created an Apex implementation class for CanvasLifecycleHandler, you need to associate it with your canvas app by adding the class name to your canvas app configuration settings.

Use the following steps to associate a Canvas.CanvasLifecycleHandler implementation with your canvas app.

1.  From Setup, enter Apps in the Quick Find box, then select **Apps**.
2.  Under Connected Apps, select the canvas app that you need to modify and click **Edit**.
3.  On the connected app edit page, under Canvas App Settings, add the Apex CanvasLifecycleHandler class name that you created into the Lifecycle Class field.
