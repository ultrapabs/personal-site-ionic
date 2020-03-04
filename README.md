## Notes
* Visit either [paulbanel.com](http://www.paulbanel.com) or [ultrapabs.com](http://www.ultrapabs.com).
* Built with Angular on the [Ionic Framework](https://ionicframework.com/getting-started#cli).
* Deployed as a static site using [Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html).


### To Test
1. Run `ng test` from root.

### To Deploy
1. Run `ionic build --prod` from root to build the app files.
2. Run `sh ./remove-svg.sh` from root to remove unused icons.
3. Replace files on S3 bucket with those remaining in `/www`.
4. Run invalidation on Cloudfront to clear cache.

### TODO

* projects, races to json
* prettier error page
