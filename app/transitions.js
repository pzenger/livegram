export default function() {
  let duration = 500;

  this.transition(
    this.hasClass('slider'),
    this.use('explode', {
      matchBy: 'data-image-id',
      use: ['fly-to', {
        duration
      }]
    }, {
      use: ['fade', {
        duration: duration / 2
      }]
    })
  );

  this.transition(
    this.hasClass('pic-container'),
    this.toValue(true),
    this.use('crossFade', { duration: duration * 2 }),
    this.debug()
  );

}
