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
                    <input class="input" pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$" type="email" placeholder="Email">
                    <span class="icon is-left">
                        <i class="fa fa-envelope"></i>
                    </span>
                    <span class="icon is-right">
                        <i class="fa fa-check"></i>
                    </span>
                    </div>
                <textarea class="textarea" placeholder="Meddelande"></textarea>
                </form>
                </section>
                <footer class="modal-card-foot">
                <a class="button is-primary is-outlined">Skicka</a>
                <button class="button is-danger is-outlined" @click='close'>Cancel</button>
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
    @import '../style/main.scss';
    /* this styling for IE to position the modal right */
    .modal > .modal-card {
        margin-left: auto;
        margin-right: auto;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
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
    input {
        background-color:$white; 
    }
    input:valid  {
        border: 2px solid $green; 
    }
    input:valid > .is-right.fa-check {
        color: $green; 
    }
    input:invalid {
        border: 2px solid $red; 
    }
    form {
        margin-top:20px; 
    }
</style>
