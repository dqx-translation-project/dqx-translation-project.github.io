# deepl

This will cover all the steps required to get set up with DeepL's Translate API service in order to use the Translate dialog feature in `dqxclarity`.

## Requirements

- A valid debit/credit card
  - Note that DeepL does not support debit/credit cards everywhere. Check DeepL's [supported countries](https://support.deepl.com/hc/en-us/articles/360020016339-DeepL-Pro-is-not-available-in-my-country#:~:text=Currently%2C%20DeepL%20Pro%20is%20available,our%20services%20to%20other%20countries.) page to see if you can use this. If your country is not supported, the [Google Translate API](https://github.com/dqx-translation-project/dqxclarity/wiki/Creating-a-Google-Translate-API-Key) is an alternative option.
  - This service is free as you're signing up for a free Developer account. This account is restricted to 500,000 characters translated per month. Once this limit is reached, the key will no longer work until it resets (which is monthly). 500,000 characters is a lot of text, so unless you're playing through the story for 10+ hours a day, you won't reach this limit.

## Creating an account

- Visit the [DeepL Developer](https://www.deepl.com/pro#developer) registration page and click "Sign up for free"
  - **Make sure you create a Developer account. The "for individuals and teams" key will not work with this**
- Register for an account. There are no screenshots here as the registration process is very straight forward
- Once your account has been created and you've signed up, if you aren't already, log in
- Inside of your account page, click on the "Account" tab and scroll all the way down to "Authentication Key for DeepL API"
- This key is what you will enter into `dqxclarity` for DeepL
