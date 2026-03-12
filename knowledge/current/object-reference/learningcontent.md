---
title: "LearningContent"
domain: object-reference
topic: learningcontent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:11.677Z
estimatedTokens: 835
keywords: [LearningContent, Trailhead, enablement, site, myTrailhead, module, assigned, user, Workforce, Engagement, Learning, Paths, video, program, exercise]
---

# LearningContent

> Represents a Trailhead or enablement site (myTrailhead) module assigned to a
         user in Workforce Engagement or Learning Paths. This object also represents a Trailhead
         module or video in an Enablement program exercise. This object is available in API
      version 54.0 and later.

# LearningContent

Represents a Trailhead or enablement site (myTrailhead) module assigned to a user in Workforce Engagement or Learning Paths. This object also represents a Trailhead module or video in an Enablement program exercise. This object is available in API version 54.0 and later.

## Supported Calls

describeSObjects(), query()

## Special Access Rules

-   The org must have a Workforce Engagement license.
-   The user must have at least one Workforce Engagement permission set assigned to them: Workforce Engagement Admin, Workforce Engagement Analyst, Workforce Engagement Planner, Workforce Engagement Agent.
-   For an enablement site (myTrailhead) module, the org must have a Sales Enablement license.
-   For a Trailhead module or video in an Enablement program, the org must have an Enablement license.

## Fields

| Field | Details |
| --- | --- |
| ApiName | TypestringPropertiesFilter, Group, NillableDescriptionThe module's human-readable API name, such as pure-aloe-sales-strategies. |
| AvailablePointCount | TypeintPropertiesGroup, NillableDescriptionThe maximum points that a user can earn on their profile by completing the module. This value is the sum of points that the content creator assigns to the module’s units. |
| ContainsAssessmentType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklistDescriptionSpecifies the type of assessment that the content’s units include.Possible values are:MultipleChoiceQuiz—All the content’s units have multiple-choice quizzes.HandsOnChallenge—At least one unit has a hands-on challenge. |
| ContentType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklistDescriptionThe type of content assigned to the user.Possible values are:All—The content is any supported type.Module—The content is a Trailhead or enablement site (myTrailhead) module.VideoLesson—The content is a video that's specified in the Enablement workspace in Digital Experiences and is used in an Enablement program. |
| ContentUrl | TypeurlPropertiesGroup, NillableDescriptionThe absolute URL to the content, such as https://purealoe.my.trailhead.com/en/content/sales-team-enablement/modules/pure-aloe-sales-strategies. |
| Description | TypestringPropertiesNillableDescriptionThe module’s description. |
| DurationCount | TypeintPropertiesGroup, NillableDescriptionThe total time, in minutes, for a learner to complete all units in the module. This value is the sum of the estimated times that the content creator assigns to the module’s units. |
| ExternalId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe GUID that Trailhead uses to reference the module. |
| ImageUrl | TypeurlPropertiesGroup, NillableDescriptionThe absolute URL to the module’s badge art image file. |
| IsPublic | TypebooleanPropertiesDefaulted on create, Filter, GroupDescriptionIndicates whether the content is public Trailhead content (true) or private enablement site (myTrailhead) content (false).The default value is false. |
| Title | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe module’s title. |

#### See Also

-   [PersonTraining](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_persontraining.htm "Represents an assignment of a learning module in Workforce Engagement. This object is available in API version 54.0 and later.")

## Related Topics

- PersonTraining (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_persontraining.htm)
