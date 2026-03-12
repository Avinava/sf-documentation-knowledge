---
title: "Program Enrollment Result"
domain: life-sciences-dev-guide
topic: program-enrollment-result
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:42.890Z
estimatedTokens: 160
keywords: [Program, Enrollment, Result, containing, patient, status, there, success, new, records, created]
---

# Program Enrollment Result

> Result containing details of all patient enrollment status. If there
      is success, it contains id of new records created for
      each patient.

# Program Enrollment Result

Result containing details of all patient enrollment status. If there is success, it contains id of new records created for each patient.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| careProgramEnrollmentResults | Care Program Enrollment Result[] | A list containing the results of all the patient enrollments. | Small, 46.0 | 46.0 |
| error | Error Message | Error output containing the code and the message text. | Small, 46.0 | 46.0 |
| isSuccess | Boolean | Indicates whether the enrollment was successful. | Small, 46.0 | 46.0 |

## Related Topics

- Care Program Enrollment Result (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_care_program_enrollment_result.htm)
- Error Message (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_error_output.htm)
