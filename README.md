# gulp-mailgun

This is my first attempt at writing a gulp plugin, so there is still probably quite a lot to do here. As such, be prepared for hinkiness, issues, and for things to break in expected, and unexpected, manners.

Things that I know that I need to figure out:

- Testing

## Basic Implemenation

Include the plugin in your project:

```
sendmail = require('gulp-mailgun');
```

Usage would be similar to this:

```
gulp.task('sendmail', function () {
  gulp.src( '*/*.html') // Modify this to select the HTML file(s)
  .pipe(sendmail({
    key: 'enter-your-api-key-here', // Enter your Mailgun API key here
    sender: 'from@test.com',
    recipient: 'to@test.com',
    subject: 'This is a test email'
  }));
});
```

## Feedback

Long story short with this, things will likely break, or not be as reliable as you would expect from other packages you've used. Whilst I've been using gulp.js for quite some time, this is my first time writing a package. If you run into anything problematic, or see a way by which to improve things, please get in touch here or [on twitter](https://twitter.com/HerrWulf) and I'll do my best to help.

## Credit

After having seen [Lee Munroe's](https://github.com/leemunroe/grunt-email-design) grunt-based process for HTML email development. I'm a gulp.js user, and wanted to get something similar going that fitted with my workflow. After a [tweet](https://twitter.com/leemunroe/status/479336210587209729) from Lee last night I decided to see what I could come up with.

Long story short, I ripped apart quite a few of the grunt-based packages Lee's workflow made use of, and got something working, which you see before you.