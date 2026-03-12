---
title: "Learning Status"
domain: edu-cloud-dev-guide
topic: learning-status
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:25.099Z
estimatedTokens: 349
keywords: [Learning, Status, Output, representation, learner's, academic, course, program]
---

# Learning Status

> Output representation of the details of the learner's status related to an academic
    course or a program.

# Learning Status

Output representation of the details of the learner's status related to an academic course or a program.

Sample Output

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| academicSeason | String | Season in which this learning is taken or will be taken. | Small, 62.0 | 62.0 |
| academicTerm​EnrollmentId | String | ID for academic term enrollment. | Small, 62.0 | 62.0 |
| academic​TermId | String | ID for the academic term. | Small, 62.0 | 62.0 |
| academicYear | String | Year in which this learning is taken or will be taken. | Small, 62.0 | 62.0 |
| durationUnit | String | Unit of measurement for completion of the course. | Small, 62.0 | 62.0 |
| learningId | String | Unique ID of the learning course or program. | Small, 62.0 | 62.0 |
| letterGrade | String | Letter grade awarded to the learner for completing the course. | Small, 62.0 | 62.0 |
| numericGrade | Double | Numeric grade awarded to the learner for completing the course. | Small, 62.0 | 62.0 |
| resultStatus | String | Type or status of the learner's result.Valid values are:PassFail | Small, 62.0 | 62.0 |
| status | String | Status of the learning.Valid values are:CompletedEnrolledPlannedUnplanned | Small, 62.0 | 62.0 |
| unitsEarned | Double | Units of value awarded for completing the course. | Small, 62.0 | 62.0 |

## Code Examples

```
{
  "academicSeason": "Fall",
  "academicTermEnrollmentId": "0atxx000000001aAAA",
  "academicTermId": "0atxx000000001bBBB",
  "academicYear": "2023-2024",
  "durationUnit": "Credit Hours",
  "learningId": "0tyxx00000002t3AAA",
  "letterGrade": "A",
  "numericGrade": 95.5,
  "resultStatus": "Pass",
  "status": "Completed",
  "unitsEarned": 3.0
}
```
