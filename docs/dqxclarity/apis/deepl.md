# deepl

This will cover all the steps required to get set up with DeepL in order to use the Translate dialog feature in [dqxclarity](../../dqxclarity.md). This is used to enable live translation of server-side text in game as it is encountered.

!!! warning "Policy change"

    DeepL recently changed their [DeepL API developer policy](https://support.deepl.com/hc/en-us/articles/360021200939-DeepL-API-plans) where they no longer reset the number of characters you get each month. Once you use 1,000,000 characters in total, your account has reached its cap and you must upgrade to a Growth account.

## Requirements

- A **valid** debit/credit card

!!! warning "Supported countries"
    Check DeepL's [supported countries](https://support.deepl.com/hc/en-us/articles/360020016339-Countries-where-DeepL-paid-plans-are-available) page to see if your billing country is supported. If your country is not on this list, you will receive errors during sign-up. [Google Translate API](./google_api.md) is an alternative option in this case.

## Creating an account

- Visit the [DeepL API](https://www.deepl.com/en/pro#api) registration page and click "Sign up for free" under the "Developer" card on the left
- Register for an account. There are no screenshots here as the registration process is very straight forward
- Once your account has been created and you've signed up, if you aren't already, log in
- Inside of your account page, click on the "Account" tab and scroll all the way down to "Authentication Key for DeepL API"
- This key is what you will enter into dqxclarity for DeepL

## Character limit

This service is "free" as you're signing up for a free Developer account. Your DeepL account is restricted to translating 500,000 characters per month (1,000,000 **total**). Once the monthly limit is reached, your authentication key will no longer allow you to translate anything until it resets. Resets happen monthly and are on the following month of your initial sign-up date. Once the 1,000,000 character cap has been reached, you will no longer be able to translate any new text without upgrading to a Growth account.

!!! info

    500,000 characters is a lot of text, so unless you're playing through the story and all side quests for 10+ hours a day, it will take you quite a while to reach this limit.
