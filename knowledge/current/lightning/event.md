---
title: "Event"
domain: lightning
topic: event
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.761Z
estimatedTokens: 842
keywords: [Event, work, events, communicate, components]
---

# Event

> Event contains methods to work with events. Use
  an event to communicate between components.

# Event

Event contains methods to work with events. Use an event to communicate between components.

## Methods

-   **[fire()](atlas.en-us.lightning.meta/lightning/ref_jsapi_event_fire.htm)**
    Fires an event.
-   **[getEventType()](atlas.en-us.lightning.meta/lightning/ref_jsapi_event_getEventType.htm)**
    Returns the type of the event. Possible values are 'COMPONENT' or 'APPLICATION'.
-   **[getName()](atlas.en-us.lightning.meta/lightning/ref_jsapi_event_getName.htm)**
    Returns an event’s name.
-   **[getParam()](atlas.en-us.lightning.meta/lightning/ref_jsapi_event_getParam.htm)**
    Returns the value of an event’s parameter.
-   **[getParams()](atlas.en-us.lightning.meta/lightning/ref_jsapi_event_getParams.htm)**
    Returns the value of all an event’s parameters.
-   **[getPhase()](atlas.en-us.lightning.meta/lightning/ref_jsapi_event_getPhase.htm)**
    Returns the current phase of an event. Returns undefined if the event hasn’t been fired yet. Possible return values for application and component events are "capture", "bubble", and "default" once fired. A value event returns "default" once it’s fired.
-   **[getSource()](atlas.en-us.lightning.meta/lightning/ref_jsapi_event_getSource.htm)**
    Returns the source component that fired an event.
-   **[getSourceEvent()](atlas.en-us.lightning.meta/lightning/ref_jsapi_event_getSourceEvent.htm)**
    Returns the source event that fired this event, if it was fired by an event binding, such as {!e.myEvent}.
-   **[getType()](atlas.en-us.lightning.meta/lightning/ref_jsapi_event_getType.htm)**
    Returns the type of the event’s definition, such as 'c:myEvent'.
-   **[pause()](atlas.en-us.lightning.meta/lightning/ref_jsapi_event_pause.htm)**
    Pauses an event. Event handlers aren’t processed until Event.resume() is called. The handling process pauses in the current position of the event handler processing sequence. If the event is already paused, this method does nothing. This method throws an error if it’s called in the "default" phase.
-   **[preventDefault()](atlas.en-us.lightning.meta/lightning/ref_jsapi_event_preventDefault.htm)**
    Prevents the default phase execution for this event. This method throws an error if it’s called in the "default" phase.
-   **[resume()](atlas.en-us.lightning.meta/lightning/ref_jsapi_event_resume.htm)**
    Resumes event handling for this event from the same position in the event handler processing sequence from which it was previously paused. If the event isn’t paused, this method does nothing. This method throws an error if it’s called in the "default" phase. Any remaining event handlers might execute in the current call stack or might be deferred and executed in a new call stack. Therefore, the exact timing behavior is not predictable.
-   **[setParam()](atlas.en-us.lightning.meta/lightning/ref_jsapi_event_setParam.htm)**
    Sets a parameter for an event. This method doesn’t modify an event that has already been fired.
-   **[setParams()](atlas.en-us.lightning.meta/lightning/ref_jsapi_event_setParams.htm)**
    Sets parameters for an event. This method doesn’t modify an event that has already been fired.
-   **[stopPropagation()](atlas.en-us.lightning.meta/lightning/ref_jsapi_event_stopPropagation.htm)**
    Sets whether the event can bubble or not. This method throws an error if called in the "default" phase.

## Related Topics

- fire() (atlas.en-us.lightning.meta/lightning/ref_jsapi_event_fire.htm)
- getEventType() (atlas.en-us.lightning.meta/lightning/ref_jsapi_event_getEventType.htm)
- getName() (atlas.en-us.lightning.meta/lightning/ref_jsapi_event_getName.htm)
- getParam() (atlas.en-us.lightning.meta/lightning/ref_jsapi_event_getParam.htm)
- getParams() (atlas.en-us.lightning.meta/lightning/ref_jsapi_event_getParams.htm)
- getPhase() (atlas.en-us.lightning.meta/lightning/ref_jsapi_event_getPhase.htm)
- getSource() (atlas.en-us.lightning.meta/lightning/ref_jsapi_event_getSource.htm)
- getSourceEvent() (atlas.en-us.lightning.meta/lightning/ref_jsapi_event_getSourceEvent.htm)
- getType() (atlas.en-us.lightning.meta/lightning/ref_jsapi_event_getType.htm)
- pause() (atlas.en-us.lightning.meta/lightning/ref_jsapi_event_pause.htm)
