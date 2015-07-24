export default function() {
  // this.transition(
  //   this.hasClass('magical'),
  //   this.use('fade')
  // );

  let duration = 500;

  this.transition(
      this.hasClass('slider'),
      this.use('explode', {
        matchBy: 'data-image-id',
        use: ['fly-to', {duration}]
      }
    )
  );

}
