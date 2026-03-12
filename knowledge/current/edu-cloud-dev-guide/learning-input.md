---
title: "Learning Input"
domain: edu-cloud-dev-guide
topic: learning-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.827Z
estimatedTokens: 851
keywords: [Learning, Input, representation, define, instructional, made, course, program, on-site, experience, contact]
---

# Learning Input

> Input representation of the details that define an instructional object, which can be
    made available as a course, program, or an on-site experience for a contact.

# Learning Input

Input representation of the details that define an instructional object, which can be made available as a course, program, or an on-site experience for a contact.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| academicLevel | String | Academic level of the learning.Applicable for both learning program and learning course. | Optional | 62.0 |
| active | Boolean | Indicates whether the learning is active (true) or not (false).Applicable for both learning program and learning course. | Optional | 62.0 |
| active​FromDate | String | Start date of the learning's active period.Applicable for both learning program and learning course. | Optional | 62.0 |
| activeToDate | String | End date of the learning's active period.Applicable for both learning program and learning course. | Optional | 62.0 |
| cipCode | String | Classification of the instructional programming code that identifies the program or field of study.Applicable for both learning program and learning course. | Optional | 62.0 |
| courseLevel​Description | String | General type or level of instruction provided by the learning course.Applicable for learning course only. | Optional | 62.0 |
| courseNumber | String | Numeric ID of the course.Applicable for learning course only. | Optional | 62.0 |
| description | String | Description of the learning.Applicable for both learning program and learning course. | Optional | 62.0 |
| duration | Double | Allocated duration to complete the learning.Applicable for both learning program and learning course. | Optional | 62.0 |
| durationUnit | String | Unit of the duration that’s allocated to complete the learning.Applicable for both learning program and learning course. | Optional | 62.0 |
| fieldOfStudy | String | Field of study of the learning course.Applicable for learning course only. | Optional | 62.0 |
| learningId | String | ID of the learning.Applicable for both learning program and learning course. | Required | 62.0 |
| learningCourse​CustomFields | Map<String, Object> | Custom fields on the learning course.Applicable for learning course only. | Optional | 62.0 |
| learning​CourseId | String | ID associated with the learning course.Applicable for learning course only. | Optional | 62.0 |
| learningProgram​CustomFields | Map<String, Object> | Custom fields on the learning program.Applicable for learning program only. | Optional | 62.0 |
| learning​ProgramId | String | ID associated with the learning program.Applicable for learning program only. | Optional | 62.0 |
| name | String | Name of the learning.Applicable for both learning program and learning course. | Optional | 62.0 |
| provider | String | Account foreign key identifier of the institution that provides the learning.Applicable for both learning program and learning course. | Optional | 62.0 |
| subject​Abbreviation | String | Abbreviation for the subject of the learning course.Applicable for learning course only. | Optional | 62.0 |
| topLevel​Program | Boolean | Indicates whether the learning program is a top-level program (true) or not (false).Applicable for learning program only. | Optional | 62.0 |
| type | String | Type of learning record.Valid values are:Learning ProgramLearning CourseApplicable for both learning program and learning course. | Required | 62.0 |

## Code Examples

```
{
"type": "Learning Course",
        "name": "Advanced Data Structures and Algorithms",
        "provider": "001LT000009puL0YAI",
        "description": "This course covers advanced concepts in data structures and algorithms, with a focus on efficient problem-solving and coding techniques.",
        "courseLevelDescription": "Graduate-level course focusing on advanced data structures and algorithms.",
        "subjectAbbreviation": "CS",
        "fieldOfStudy": "Computer Science",
        "courseNumber": 601,
        "active": true,
        "activeFromDate": "2024-09-01T00:00:00.00Z",
        "activeToDate": "2025-12-31T23:59:62.00Z",
        "duration": 4,
        "durationUnit": "Credit Hours",
        "cipCode": "11.0101",
        "academicLevel": "Graduate"
}
```
