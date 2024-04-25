Manifest of Technical Product: Fork of FileStash

1\. Introduction:

- This is a fork of <https://github.com/mickael-kerjean/filestash>. The idea is a simple POC as plain as possible of the AWS S3 browser.

2\. Purpose:

- The primary purpose of this fork is to empower users to effectively access a specific endpoint in AWS S3  bucket, **not to navigate**. An endpoint (S3 “**folder**”) to upload/download files for users with AWS programmatic access(**access key/secret access key**).

3\. Features:

- S3 Operation: Users can upload, download and remove files ONLY inside and specific S3 Bucket and folder inside de Bucket.

4\. Technology Stack:

- Container: Docker Images/Compose

- Cloud Resources: AWS S3

- Authentication: Iam user\[access key/secret access key]

5\. Design Principles:

- Policy-Centric Design: The design is based on the user's Amazon IAM policy so the user can upload/download/delete files in the Bucket and folder where the **security policy allows it**..

6\. Development Roadmap:

- Phase 1: POC Development - Implement the core docker images and docker compose and modify css to get a plain S3 browser.

- Phase 2: Implement in AWS - Implement in AWS ECS .

- Phase 3: Scale and Enhance - This is a temporary solution. A better use case is a Js browser hosted static website on Amazon S3  .

7\. Conclusion:

- We strongly believe that Filestah is a great product but is not tailored to our scenario in AWS because we have to involve too many AWS resources and increases our cost with the same performance. 

