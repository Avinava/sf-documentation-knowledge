---
title: "Support Undo and Redo"
domain: mc-app-development
topic: support-undo-and-redo
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:21.471Z
estimatedTokens: 570
keywords: [Support, Undo, Redo, Build, activities, entry, sources, Journey, Builder’s, feature, Writing, System, User, Action, Intent, Messages, Items]
---

> Build your custom activities and entry sources to support Journey Builder’s undo/redo feature.

# Support Undo and Redo

Build your custom activities and entry sources to support Journey Builder’s undo/redo feature.

Users can undo or redo up to 50 actions they perform on the Journey Builder canvas, including canvas actions and journey settings. When users undo or redo a change, this modifies the journey payload. Update or build your solutions with the understanding that users may undo or redo the activity's configuration.

## Writing to Your Data System

The most important implication of the undo/redo feature concerns custom entry sources and activities that have write access to an external data system. Your architecture should explicitly support or guard against Journey Builder’s capability to modify data values within Marketing Cloud. If your custom activities or entry sources write to an external data source, update your solution to explicitly take into account the changes to the journey configuration that occur due to undo/redo. If this action is not allowed, present users with meaningful error messages within the custom configuration screen and at validation time.

## History Objects

The undo/redo feature is enabled by actions committed against the journey model at design time. Configuration is recorded each time a user completes an action on the canvas.

All journey changes by users create history objects. These objects represent snapshots of the entire journey after each change, but they contain only the data stored within Journey Builder. Your solution must tolerate reverts to journey configuration. If it does not, users may encounter errors because configurations are out of sync.

## User Action Intent Messages

This feature includes a messaging system used to tag the intent of the ixn model sets, so when users hover over one of the history buttons, they see a description of what the undo or redo action changes. Activity configuration is currently tracked based on completion of the configuration model. You don’t need to make any changes to support this functionality at this time.

## Related Items

-   [Undo a Canvas Action](http://help.marketingcloud.com/en/documentation/journey_builder/undo_a_canvas_action/)
-   [Redo a Canvas Action](http://help.marketingcloud.com/en/documentation/journey_builder/redo_a_canvas_action/)
