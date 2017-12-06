<template>
  <div>
      <button class="circle" @click='openModal()'>
        <i class="fa fa-commenting fa-4x" aria-hidden="true"></i>
      </button>
      <contactModal :activate="addActive" @closeRequest='close'></contactModal>
  </div>
</template>

<script>
import 'font-awesome/css/font-awesome.css'
import contactModal from '@/components/contactModal'

export default {
  name: 'Contact',
  components: {contactModal},
  data: function () {
    return {
      isOpen: false,
      addActive: ''
    }
  },
  methods: {
    toggle: function () {
      this.isOpen = !this.isOpen
    },
    openModal: function () {
      this.addActive = 'is-active'
    },
    close () {
      this.addActive = ''
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../style/main.scss';               

  .message-header {
    background-color:$green; 
    color:black;  
    align-items:start; 
    padding-left: 20px;
    p {
      font-weight:700; 
    }
  }
  .header-container {
    background-color: $green; 
    color:black; 
    padding: 20px 20px;
  }

  .message {
    width:30%; 
    margin:20px; 
  }

  .header-container h1, .header-container img { 
    display:inline;   
  }
  .header-container img {
    margin-left:20px; 
  }

  img {
    max-width: 16%;  
    }

  h1 {
    font-size:40px 
  }
  /* style for the contact bubble */
  .circle {
    transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    border-radius: 50%;
    width: 80px;
    height: 80px; 
    background-color: $green; 
    color:white; 
    border: 3px solid white; 
    &:hover {
      background-color: rgba(0, 81, 146, .8);
      border-radius: 50%;
      transform: scale(1.1);
      transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  }
  .circle:hover > .fa-commenting {
    color: $green;
  }
}

</style>
