<template>
  <div>
      <article class="message">
          <div class="message-header">
              <p>Kontakt</p>
              <button class="delete" aria-label="delete"></button>
          </div>
          <div class="header-container">
              <h1>Hej</h1>
              <img src="../img/waving-hand.png">
          </div>
          <div class="header-container">
              <p>Vad kan vi hjälpa dig med? Skriv ett meddelande så kontaktar vi dig</p>
          </div>    
          <div class="message-body">
            <div class="field">
              <label class="label">Email</label>
              <div class="control has-icons-left has-icons-right">
                <input class="input" type="email" placeholder="Email">
                <span class="icon is-small is-left">
                  <i class="fa fa-envelope"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <label class="label">Message</label>
              <div class="control has-icons-left has-icons-right">
                <textarea class="textarea" placeholder="Meddelande"></textarea>
              </div>
            </div>
            <div class="field is-grouped">
              <div class="control">
                <button class="button is-link">Submit</button>
              </div>
              <div class="control">
                <button class="button is-text">Cancel</button>
              </div>
            </div>
          </div>
      </article>
  </div>
</template>

<script>
import 'font-awesome/css/font-awesome.css'
export default {
  name: 'Contact'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../style/_variables.scss';

  .message-header {
    background-color:$lr-green; 
    color:black;  
    align-items:start; 
    padding-left: 20px;
    p {
      font-weight:700; 
    }
  }
  .header-container {
    background-color: $lr-green; 
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


</style>
