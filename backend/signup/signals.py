from django.dispatch import Signal

#signals.facebook_post_store_likes.connect(post_likes, sender=get_user_model())
#signals.facebook_post_store_friends.connect(post_friends,
#signals.facebook_post_update.connect(post_facebook_update,
#signals.facebook_pre_update.connect(pre_facebook_update,
register_redirect = Signal(providing_args=["user"])
user_send_email = Signal(providing_args=["user"])
user_resend_activation = Signal(providing_args=["user"])
user_pending_activation = Signal(providing_args=["user"])
user_account_activated = Signal(providing_args=["user"])
new_user_created = Signal(providing_args=["user"])
new_user_cleared = Signal(providing_args=["user"])
new_user_resend_notification = Signal(providing_args=["user"])
user_needs_recovery =  Signal(providing_args=["user"])
user_password_reset =  Signal(providing_args=["user"])
log_new_user = Signal(providing_args=['level', 'message'])
facebook_strategy_new_user =  Signal(providing_args=["user"])
facebook_strategy_existing_user = Signal(providing_args=["user"])
facebook_strategy_used =  Signal(providing_args=["user"])
twitter_strategy_used = Signal(providing_args=["user"])
linkedin_strategy_used = Signal(providing_args=["user"])
facebook_authenticated = Signal(providing_args=["user"])
googleplus_strategy_used = Signal(providing_args=["user"])
googleplus_strategy_fails = Signal(providing_args=["user"])
googleplus_strategy_succeeds = Signal(providing_args=["user"])
instagram_strategy_used = Signal(providing_args=["user"])
default_strategy_used = Signal(providing_args=["user"])
default_strategy_succeeds = Signal(providing_args=["user"])
default_strategy_fails = Signal(providing_args=["user"])
facebook_strategy_fails = Signal(providing_args=["user"])
facebook_strategy_succeeds = Signal(providing_args=["user"])
new_mailchimp_subscriber = Signal(providing_args=["user"])
