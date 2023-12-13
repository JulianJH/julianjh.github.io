function activateAudio(e) {
  if (
    (showMessageInConsole("Activating audio..."),
      (audio_activate_timer = 0),
      e++,
      !html5_audio_enabled)
  )
    if (!sceneLoaded && e < 10)
      audio_activate_timer = setTimeout(activateAudio, 5e3, e);
    else if (sceneLoaded) {
      html5_audio_enabled = !0;
      try {
        msSpeak(botid, "");
      } catch (e) {
        (html5_audio_enabled = !1),
          showMessageInConsole("Could not play a blank audio");
      }
    }
}

function toogleSpeaker() {
  activateAudio(), customizeToogleSpeaker();
}

function setSpeaker() {
  try {
    hasSpeaker
      ? ($(".BotSound").show().css("float", speakFloat),
        $("Body").prepend(
          '<script class="bg-script" src="' +
          base_url +
          '/libraries/TTS/TTS.js"></script>'
        ))
      : $(".BotSound").hide();
  } catch (e) {
    showMessageInConsole("error at setSpeaker: " + e);
  }
}
