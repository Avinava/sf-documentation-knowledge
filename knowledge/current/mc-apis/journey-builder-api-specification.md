---
title: "Journey Builder API Specification"
domain: mc-apis
topic: journey-builder-api-specification
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:22.525Z
estimatedTokens: 356
keywords: [Journey, Builder, API, Specification, includes, commonly, REST, resources, Interaction, Service, Items]
---

# Journey Builder API Specification

> The following table includes the most commonly used REST resources that make up the Interaction Service of the Journey Builder API.

# Journey Builder API Specification

The following table includes the most commonly used REST resources that make up the Interaction Service of the Journey Builder API.

| Logical Name | HTTP Method | Resource |
| --- | --- | --- |
| Get Event Definitions | GET | /eventDefinitions |
| Get Event Definition | GET | /eventDefinitions/key:{key} or /eventDefinitions/{id} |
| Create Event Definition | POST | /eventDefinitions |
| Update Event Definition | PUT | /eventDefinitions/key:{key} or /eventDefinitions/{id} |
| Delete Event Definition | DELETE | /eventDefinitions/key:{key} or /eventDefinitions/{id} |
| Fire Entry Event | POST | /events |
| Get Discovery Document | GET | /rest |
| Get Journey by ID | GET | /interactions/{id} |
| Get Collection of Journeys | GET | /interactions |
| Create or Save Journey | POST | /interactions |
| Update Journey Version | PUT | /interactions |
| Delete Journey by ID | DELETE | /interactions/{id} |
| Publish Journey Version Async | POST | /interactions/publishAsync/{id}?versionNumber={versionNumber} |
| Get Publish Status | GET | /interactions/publishStatus/{statusId} |
| Stop Journey | POST | /interactions/stop/{id}?versionNumber={versionNumber} |
| Get Journey Audit Log | GET | /interactions/{id}/audit/{action} or /interactions/{key}/audit/{action} |

## Related Items

[Get Started with Journey Builder](atlas.en-us.noversion.mc-apis.meta/mc-apis/get-started-jb.htm)

## Related Topics

- Get Event Definitions (atlas.en-us.noversion.mc-apis.meta/mc-apis/routes.htm)
- Get Event Definition (atlas.en-us.noversion.mc-apis.meta/mc-apis/routes.htm)
- Create Event Definition (atlas.en-us.noversion.mc-apis.meta/mc-apis/createEventDefinition.htm)
- Update Event Definition (atlas.en-us.noversion.mc-apis.meta/mc-apis/routes.htm)
- Delete Event Definition (atlas.en-us.noversion.mc-apis.meta/mc-apis/routes.htm)
- Fire Entry Event (atlas.en-us.noversion.mc-apis.meta/mc-apis/postEvent.htm)
- Get Discovery Document (atlas.en-us.noversion.mc-apis.meta/mc-apis/routes.htm)
- Get Journey by ID (atlas.en-us.noversion.mc-apis.meta/mc-apis/routes.htm)
- Get Collection of Journeys (atlas.en-us.noversion.mc-apis.meta/mc-apis/routes.htm)
- Create or Save Journey (atlas.en-us.noversion.mc-apis.meta/mc-apis/routes.htm)
