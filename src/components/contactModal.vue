<template>
    <div>
        <div class="modal" :class="activate">
            <div class="modal-background"></div>
            <div class="modal-card is-primary">
                <header class="modal-card-head">
                <p class="modal-card-title">Kontakt</p>
                <button class="delete" aria-label="close" @click='close'></button>
                </header>
                <section class="modal-card-body">
                <h1>Hej</h1>
                <img src="../img/waving-hand.png">
                <p>Vad kan vi hjälpa dig med? Skriv ett meddelande så kontaktar vi dig</p>
                <form action="">
                    <div class="control has-icons-left has-icons-right">
                    <input class="input " type="email" placeholder="Email">
                    <span class="icon is-left">
                        <i class="fa fa-envelope"></i>
                    </span>
                    <span class="icon is-right">
                        <i class="fa fa-check"></i>
                    </span>
                    </div>
                <textarea class="textarea" placeholder="e.g. Hello world"></textarea>
                </form>
                </section>
                <footer class="modal-card-foot">
                <a class="button is-primary is-outlined">Skicka</a>
                <button class="button is-outlined" @click='close'>Cancel</button>
                </footer>
            </div>
        </div>
    </div>

    
</template>

<script>
export default {
  name: 'contactModal',
  props: ['activate'],
  methods: {
    close () {
      this.$emit('closeRequest')
    }
  }
}
</script>

<style scoped lang="scss">
    @import '../style/_variables.scss';

    h1 {
        display:inline; 
    }
    img {
        max-width:10%; 
        margin-left:20px; 
    }
    header.modal-card-head {
        background-color:$green; 
    }
</style>
