$(() => {
  const controller = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook: 'onLeave',
      duration: '200%',
    },
  })

  document
    .querySelectorAll('section.panel')
    .forEach((element) =>
      new ScrollMagic.Scene({ triggerElement: element })
        .setPin(element, { pushFollowers: false })
        .addTo(controller)
    )
})
