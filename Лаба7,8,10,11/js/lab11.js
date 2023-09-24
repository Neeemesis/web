const { createApp } = Vue;
const counterText = document.querySelector(".counter-text");

createApp({
  data() {
    return {
      posts: [

      ],
      body: '',
      date: new Intl.DateTimeFormat('ru', {
            year: "numeric", 
            month: "numeric", 
            day: "numeric", 
            hour: "numeric", 
            minute: "numeric"}).format(Date.now()),
      counterLength: false,
      counterLengthYellow: false,
      maxCharacters: 144,
    }
  },
  methods: {
    createPost() {
      const newPost = {
        id: Date.now(),
        body: this.body,
        date: this.date,
      }

      this.posts.push(newPost);
      this.body = '';
    },
  },
  computed: {
    length: function () {
    if (144 - this.body.length < 0) {
      this.counterLengthYellow = false;
      this.counterLength = true;
    } else if (144 - this.body.length <=10 && 144 - this.body.length >= 0) {
      this.counterLengthYellow = true;
      this.counterLength = false;
    } else {
      this.counterLengthYellow = false;
      this.counterLength = false;
    }

    return 144 - this.body.length;
   },
   isButtonDisabled() {
    return this.body.length === 0 || this.body.length > this.maxCharacters;
  }
  }
}).mount('#app')