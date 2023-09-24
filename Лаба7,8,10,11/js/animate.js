function Animated(element) {
  this.element = element;
  this.animate = function () {
    anime({
      targets: this.element,
      translateX: function() {
        return anime.random(-500, 500);
      },
      translateY: function() {
        return anime.random(0, 500);
      },
      scale: function() {
        return anime.random(1, 3);
      },
      complete: (anim) => {
        console.log(`${this.element.className}, completed: ${anim.completed}`);
      },
    });
  }
}

const animeBlock = document.querySelector(".anime");
const elements = document.querySelectorAll('.anime__block');
  for (let item of elements) {
    const animated = new Animated(item);
    animated.animate();
  }

const animeButton = document.querySelector(".anime__button");
animeButton.addEventListener('click', function(e){
  const blocks = document.createElement('div');
  blocks.classList.add('anime__block');
  animeBlock.appendChild(blocks);
  const animatedNew = new Animated(blocks);
  animatedNew.animate();
});
