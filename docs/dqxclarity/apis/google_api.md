# google translate

This will cover all the steps required to get set up with Google's Cloud Translate API service in order to use the Translate dialog feature in `dqxclarity`.

## requirements

- A valid credit card

!!! info
    This service costs nothing for the first 500,000 characters per month, but if you go over this limit, it will start to cost. 500,000 characters is a lot and unless you're spending 10+ hours a day doing only story content, you are more than fine with this limit. Pricing for this service can be found [here](https://cloud.google.com/translate/pricing) if you're interested. dqxclarity uses the "Cloud Translation - Basic" services.

## creating your google project

- Navigate to the [Google Cloud Console](https://console.cloud.google.com)
- If you aren't logged in to a Google account, you will be prompted to log in
- In the top menu, click "Select a project"

<center>![select_project](../../asset/google_api/select_project.png){ width="450" }</center>

- Click "NEW PROJECT"

<center>![new_project](../../asset/google_api/new_project.png){ width="450" }</center>

- Give the project a name recognizable to you: "DQX Translation" or something

<center>![name_your_project](../../asset/google_api/name_your_project.png){ width="450" }</center>

- This will take you back to the main dashboard

## set up your billing account

- Type "translate" at the top and select "Cloud Translation API"

<center>![search_translate](../../asset/google_api/search_translate.png){ width="450" }</center>

- Click "Enable" to enable the Cloud Translation API for your project

<center>![cloud_translation_api_image](../../asset/google_api/cloud_translation_api_image.png){ width="450" }</center>

- You will be prompted to link a billing account to your newly created project. This links a credit card (or other form of payment) to the project because you're using a billable service. For this use case, we need to set up a billing account, but will also be setting up some alerts on the account to let us know when we are about to spend money. Click "ENABLE BILLING".

<center>![billing_required](../../asset/google_api/billing_required.png){ width="450" }</center>

- Click "MANAGE BILLING ACCOUNTS"

<center>![manage_billing_accounts](../../asset/google_api/manage_billing_accounts.png){ width="450" }</center>

- Click "CREATE ACCOUNT"

<center>![create_billing_account](../../asset/google_api/create_billing_account.png){ width="450" }</center>

- Name your billing account something meaningful to you (like: "my credit card" or something) and select your country, then click "CONTINUE"

<center>![create_new_billing_account](../../asset/google_api/create_new_billing_account.png){ width="450" }</center>

- If you're using an existing Google account with existing payment methods linked to it, you will be prompted to use an existing payment method. If not, you will need to create one here

<center>![payment_methods](../../asset/google_api/payment_methods.png){ width="450" }</center>

- Once you have filled this out, click "SUBMIT AND ENABLE BILLING"
- This will take you to the billing screen (if not, click the hamburger menu > Billing)

## setting up billing alerts

- You are probably concerned with actually being billed by using this. You can set up billing alerts to let you know when things happen within your billing account (like when you're going to be charged)
- From the billing screen, click on "Budgets & alerts"

<center>![](../../asset/google_api/budgets_and_alerts.png){ width="250" }</center>

- Click "CREATE BUDGET"

<center>![create_budget](../../asset/google_api/create_budget.png){ width="450" }</center>

- Give your budget alert a name ("DQX Translation Costs" or something)

!!! note
    For services, I would leave everything selected as I want to know if I am being billed for anything

- Leave discounts and promotions checked
- Click "NEXT"

<center>![alert_scope](../../asset/google_api/alert_scope.png){ width="450" }</center>

- For the amount, the short answer is: put $10.00 USD (or whatever the equivalent is in your currency)

!!! info
    Long answer: Google provides $10 worth of credit every month against their Google Translate API. This credit is applied at the **end** of the billing cycle. What will happen is you'll see a bill for your usage, then at the end of the month, the credit will apply to your account -- up to $10. You will want to know when you've met or are about to exceed $10.00 USD as that's when you'll be charged.

<center>![alert_amount](../../asset/google_api/alert_amount.png){ width="450" }</center>

- For thresholds, I want to know when I am about to be charged as well as knowing _if_ I will be charged. Set your thresholds to something like this:

<center>![alert_actions](../../asset/google_api/alert_actions.png){ width="450" }</center>

- Keep "Email alerts to billing admins and users" checked and click "FINISH"

<center>![alert_notifications](../../asset/google_api/alert_notifications.png){ width="450" }</center>

## enabling the translation api

- Now, we need to go enable the Cloud Translate API service onto the project we made. Type "translate" at the top and click "Cloud Translation API"

<center>![search_translate](../../asset/google_api/search_translate.png){ width="450" }</center>

- Click "ENABLE"

<center>![cloud_translation_api_image](../../asset/google_api/cloud_translation_api_image.png){ width="450" }</center>

- Click "ENABLE BILLING"

<center>![billing_required](../../asset/google_api/billing_required.png){ width="450" }</center>

- Select the billing account you set up

<center>![select_your_billing_account](../../asset/google_api/select_your_billing_account.png){ width="450" }</center>

- Click "SET ACCOUNT"

## create your api credential

- Finally, we now need to create an API credential to authenticate against this API. Click the hamburger menu in the top left > APIs and Services > Credentials

<center>![create_credential](../../asset/google_api/create_credential.png){ width="450" }</center>

- Click "CREATE CREDENTIALS" at the top and click "API Key"

<center>![create_api_key](../../asset/google_api/create_api_key.png){ width="450" }</center>

- Copy this API key and put it somewhere safe. This API key is essentially your password. Click "Restrict Key" in the bottom right. As this key has power to your account, we want to make sure if it does get exposed, little harm can be done

<center>![api_key_created](../../asset/google_api/api_key_created.png){ width="450" }</center>

- Name the key something meaningful to you. In the bottom left, click "RESTRICT KEY" and type "translation" in the filter. Click "Cloud Translation API". Click "SAVE"

<center>![credential_restrictions](../../asset/google_api/credential_restrictions.png){ width="450" }</center>

!!! success
    You are all set. With the API key you previously copied, enter that into [dqxclarity](../dqxclarity.md) under the Google API section and you are good to go
