## Notes
Visit either [paulbanel.com](https://www.paulbanel.com) or [ultrapabs.com](https://www.ultrapabs.com).
Built with Angular on the [Ionic Framework](https://ionicframework.com/getting-started#cli).
Deployed as a static site using [Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html).


### To test
1. Run `ng test` from root.

### To Deploy
1. Run `ionic build --prod` from root to build the app files.
2. Run `sh ./remove-svg.sh` from root to remove unused icons.
2. Replace files on S3 bucket with those remaining in `/www`.

### TODO

* [] projects, races to json
* [] prettier error page
