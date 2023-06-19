$('.btn-order').click(()=> {
  const timeline = anime.timeline({
        easing: 'easeInSine',
      })
  
      timeline.add({
        targets: '.btn-order .default',
        opacity: [1, 0],
        duration: 200
      })

      timeline.add({
        targets: '.btn-order',
        height: ['50px', '6px'],
        duration: 400
      })
  
      timeline.add({
        targets: '.car',
        opacity: [0, 1]
      }, '-=600')

      timeline.add({
        targets: '.box',
        translateX: [0, '210px'],
        duration: 300
      })

      timeline.add({
        targets: '.box',
        translateY: [0, '90px'],
        duration: 300
      })

      timeline.add({
        targets: '.light',
        opacity: [0, 1],
        duration: 200
      })

      timeline.add({
        targets: '.car',
        translateX: [0, '130px'],
        duration: 800,
        easing: 'easeInQuart',
      })
  
      timeline.add({
        targets: '.car',
        opacity: [1, 0]
      }, '-=600')

      timeline.add({
        targets: '.btn-order',
        height: ['6px', '50px'],
        duration: 400
      })
  
      timeline.add({
        targets: '.btn-order .complited',
        opacity: [0, 1],
        duration: 200
      })
  
      timeline.add({
        targets: '.complited svg',
        strokeDashoffset: ['16px', 0],
        duration: 300
      })
})