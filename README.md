# Google-Apps-Scripts
Gapps scripts that are useful to me, and hopefully others can benefit from them too.
 * [1.mail_filter_w_query_and_time](#mail_filter_w_query_and_time)
   * ```Script for filtering and deleting mails based on query and time.```
  
## Setup:
1. Go to your Gapps scripts [Dashboard](https://script.google.com/home).
2. Click "<b>New > New script</b>".
3. Copy the content from the script to your "<b>Untitled project</b>".
4. Hit "<b>Ctrl+S</b>". Enter new project name.
5. Click "<b>Publish > Deploy as web app...</b>".
6. Enter Project version, Execute the app as, Who has access to the app.
7. Click "<b>Deploy</b>".
8. Click "<b>Review Permissions</b>".
9. Select your gmail account. Click "<b>Allow</b>".
10. Copy the "<b>Current web app URL</b>".

## Usage:
```google-chrome $link```

## Debugging:
### mail_filter_w_query_and_time
  * #### Change the QUERY to a valid gmail seach query.
  ```cs
  Line 6 - var err_threads = GmailApp.search('subject:date from:david {has:netflix has:chill}');
  ```
  * #### Change the TIME to ```[0.0, 1.0,..., 12.0,..., 23.0, 24.0]```
  ```cs
  Line 17 - if (r_h[i] == "0.0"){
  ```

## Contributions:
Contributions are welcome — send a pull request! This repo is a work in progress.
