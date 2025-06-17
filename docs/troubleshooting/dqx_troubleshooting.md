# general dqx troubleshooting

- [Installation](#installation)
    - [I copied my game from one drive to another and now it doesn't work](#i-copied-my-game-from-one-drive-to-another-and-now-it-doesnt-work)
    - [Do I need my VPN to be running all the time?](#do-i-need-my-vpn-to-be-running-all-the-time)
    - [Why is the DQX download so slow?](#why-is-the-dqx-download-so-slow)
    - [How do I install the rest of the versions?](#how-do-i-install-the-rest-of-the-versions)
    - [I keep receiving an error while patching the game](#i-keep-receiving-an-error-while-patching-the-game)
    - [Does DQX work on the Steam Deck?](#does-dqx-work-on-the-steam-deck)
    - [What VPNs are recommended to play?](#what-vpns-are-recommended-to-play)
    - [Where is the default installation location for DQX?](#where-is-the-default-installation-location-for-dqx)
- [General DQX](#general-dqx)
    - [Why does my account keep getting restricted, making me change my password?](#why-does-my-account-keep-getting-restricted-making-me-change-my-password)
    - [Why do I see question marks (????) in the game's launcher?](#why-do-i-see-question-marks-in-the-games-launcher)
    - [Why do I get error EXCEPTION\_ACCESS\_VIOLATION in game?](#why-do-i-get-error-exception_access_violation-in-game)
    - [Why do I get error INVALID\_CALL\_1 in game?](#why-do-i-get-error-invalid_call_1-in-game)
    - [Why do I get error EINVAL \[invalid argument\]?](#why-do-i-get-error-einval-invalid-argument)
    - [My game crashes when I open a quest in the quest log](#my-game-crashes-when-i-open-a-quest-in-the-quest-log)
- [Tooling](#tooling)
    - [Why do I need to install Python?](#why-do-i-need-to-install-python)
    - [Does dqxclarity work on the Switch?](#does-dqxclarity-work-on-the-switch)
    - [Does dqxclarity work on the Steam deck?](#does-dqxclarity-work-on-the-steam-deck)
    - [How much of the game is in English?](#how-much-of-the-game-is-in-english)
    - [Who is working on this project?](#who-is-working-on-this-project)
    - [I don't have a credit card and can't use DeepL or Google Translate](#i-dont-have-a-credit-card-and-cant-use-deepl-or-google-translate)

## Installation

### I copied my game from one drive to another and now it doesn't work

Things you can try:

- Make sure the shortcut you're using to launch the game is updated to the new path
  - Generate a new shortcut or update the old one

### Do I need my VPN to be running all the time?

If you're located outside of the US or Japan, your VPN must be enabled during play.

The exception to this is during patching/downloading the game. Your VPN does not need to be turned on during these times.

### Why is the DQX download so slow?

DQX's servers are hosted in Tokyo, Japan, so you will experience some slowness. As of recently, the launcher no longer throttles download speeds, but you may still experience some slowness due to the physical distance from the download server.

### How do I install the rest of the versions?

- When purchasing the expansions physically, the game ships with a DVD rom that has the installations
- When purchasing the game digitally, the third party that you purchased it from should provide you a link to download the expansions

In the event you can't obtain the expansions --

Distributing the installations is a grey area and this site will not be responsible for taking down the shared installation link used by the community. You can join the Dragon Quest X Worldwide [discord server](https://discord.gg/dragonquestx) and type `!installer` in any channel to get access to a mediafire link that has the installation executables to the game's expansions.

### I keep receiving an error while patching the game

Generally, this is due to a connection issue between you and the download servers. If the download is interrupted, you do not need to re-download the entire game again. The patcher will pick up where it left off, starting at 0% again, but with a smaller differential. If this continues, keep restarting the patcher until it has completed.

If there is a specific error message attached to the error, it's best to check the remaining FAQs on this page, Google the error code or ask for help in the Dragon Quest X Worldwide [discord server](https://discord.gg/dragonquestx) for volunteer assistance.

### Does DQX work on the Steam Deck?

Both DQX and dqxclarity can run natively on the Steam Deck. See the [installation guide](../steamdeck.md) on how to set them up.

### What VPNs are recommended to play?

There are a few free VPNs that people have used with success:

- [ProtonVPN](https://protonvpn.com/)
- [Softether](https://www.softether.org/)

Although free VPNs work, connectivity stability is iffy. If you want a more stable connection, paying for a VPN generally gives a better experience.

Here are a list of paid VPNs people have used and recommend:

- [Mudfish](https://mudfish.net/)
- [Mullvad](https://mullvad.net/)
- [Express VPN](https://www.expressvpn.com/)

When connecting to these VPNs, you must connect to a server in either the United States or Japan. These are the only two locations that DQX works without a VPN.

### Where is the default installation location for DQX?

`C:\Program Files (x86)\SquareEnix\DRAGON QUEST X`

## General DQX

### Why does my account keep getting restricted, making me change my password?

There's a 99% chance you're using a VPN when you're experiencing this problem. The reason for this is that the VPN server you're connecting to is not at a consistent location, which is causing DQX to flag your login as suspicious.

To remedy this problem, sign your DQX account up for multi-factor authentication (MFA) -- also known as one time password (OTP).

[dqxabbey](https://dqxabbey.com/pages/resources/otp_guide.html) has a guide on how to set this up.

### Why do I see question marks (????) in the game's launcher?

DQX is a Japanese game and is trying to render Japanese chracters, but your computer doesn't know how to render these symbols. In reality, the question marks are not necessary to enjoy the game and usually prompts like "Do you want to exit"? "A new controller has been detected", etc. These messages are still in Japanese, but are now legible.

If you insist on fixing this, there are a few solutions:

- Install [Locale Emulator](https://xupefei.github.io/Locale-Emulator/). Although support for this tool has been discontinued, this emulates the Japanese language in an executable to show Japanese symbols without having to change your computer's region
- (Not recommended) Installing the Japanese language pack and changing your computer's region to Japanese (thus, all of your computer text will now be in Japanese)

### Why do I get error EXCEPTION_ACCESS_VIOLATION in game?

There are too many reasons why this error might come up, but here are a few reasons:

- Graphics driver is out of date
- dqxclarity generated an error or uncommonly wrote to some memory it shouldn't have
- General game integrity issues that a re-install might fix

You can try rebooting your computer to see if the error goes away.

### Why do I get error INVALID_CALL_1 in game?

See the dqxclarity [faq page](../dqxclarity.md#every-time-i-encounter-a-loading-screen-or-change-zones-the-game-throws-an-error-or-crashes).

### Why do I get error EINVAL [invalid argument]?

This is likely due to an old or corrupt version of the dat mod.

When dqxclarity is launched with "Update Translated Game Files", it automatically downloads the files and places them in your DQX directory. You will want to re-launch dqxclarity with this checked in order to grab the latest dat mod.

### My game crashes when I open a quest in the quest log

In dqxclarity, disable "Enable Community Logging". This is a bug with an unknown fix at this time.

## Tooling

### Why do I need to install Python?

dqxclarity uses the Python programming language to run. It is required and will not work without it.

### Does dqxclarity work on the Switch?

No, dqxclarity is strictly PC only.

### Does dqxclarity work on the Steam deck?

Yes, see the [installation guide](../steamdeck.md) on how to set it up.

### How much of the game is in English?

As of this writing (February 2024), any files found in the game files are either hand translated or machine translated. All of the main story has been hand translated by various contributors. Most of the gaidens (stories supporting the main story) are machine translated. All of the things you interact with (menus, spells, skills, items, housing, monster/npc names) have been hand translated. Any text that is server side is machine translated as it is encountered in game.

### Who is working on this project?

The project contributors mainly consist of:

- Serany (main developer)
- Shobu (main translator)

We've also received contributions from various members of the DQX community on translation efforts.

### I don't have a credit card and can't use DeepL or Google Translate

dqxclarity has a "Free Google Translate" option that uses Google's free mobile translation API. Although the translation quality is not as good as a proper API from either DeepL or Google, it's serviceable enough if you don't have a credit card or are on the fence about signing up for an actual DeepL/Google account.
