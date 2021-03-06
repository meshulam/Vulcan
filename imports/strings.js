import { addStrings } from 'meteor/vulcan:core';

// See default strings in packages/vulcan-i18n-en-us/lib/en_US.js

addStrings('en', {
  "posts.new_post": "New Post",
  "posts.edit": "Edit",
  "posts.edit_success": "Post “{title}” edited.",
  "posts.delete": "Delete",
  "posts.delete_confirm": "Delete post “{title}”?",
  "posts.delete_success": "Post “{title}” deleted.",
  "posts.title": "Title",
  "posts.url": "URL",
  "posts.body": "Body",
  "posts.categories": "Categories",
  "posts.no_more": "No more posts",
  "posts.no_results": "No posts to display.",
  "posts.search": "Search",
  "posts.view": "Sort",
  "posts.created_message": "Post created.",
  "posts.rate_limit_error": "Please wait {value} seconds before submitting again.",
  "posts.postedAt": "Posted at",
  "posts.dateNotDefined": "Date not defined",
  "posts.subscribed_posts" : "Posts subscribed to",
  "posts.max_per_day": "Sorry, you cannot submit more than {value} posts per day.",
  "accounts.error_token_expired": "Invalid password reset token",
});
