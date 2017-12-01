<template>
  <div class="section container lrStaff">
    <h2>Mer än bara siffror</h2>
    <hr class="lrHeaderLine">

    <p class="mainText">I samband med rådgivningen möter du ofta fler medarbetare hos oss, t.ex redovisningskonsulter, företagsrådvigare, skatteexperter. Vi analyserar inte bara det föregående året, utan kan även hjälpa di gmed att se framåt och göra analyser och antaganden.</p>

    <!-- pictures of staff -->
    <div class="columns is-mobile is-multiline lrPictures">
      <div class="column is-half-mobile  is-one-quarter-tablet"> 
        <a href="#">
            <img src="http://via.placeholder.com/250x250" alt="">
        </a> 
      </div>
      <div class="column is-half-mobile  is-one-quarter-tablet">
          <img class="lrStaffMember" src="http://via.placeholder.com/250x250" alt="">
      </div>
      <div class="column is-half-mobile  is-one-quarter-tablet">
          <img class="lrStaffMember" src="http://via.placeholder.com/250x250" alt="">
      </div>
      <div class="column is-half-mobile  is-one-quarter-tablet">
          <img class="lrStaffMember" src="http://via.placeholder.com/250x250" alt="">
      </div>
      <div class="column is-half-mobile  is-one-quarter-tablet">
          <img class="lrStaffMember" src="http://via.placeholder.com/250x250" alt="">
      </div>
      <div class="column is-half-mobile  is-one-quarter-tablet">
          <img class="lrStaffMember" src="http://via.placeholder.com/250x250" alt="">
      </div>
      <div class="column is-half-mobile  is-one-quarter-tablet">
          <img class="lrStaffMember" src="http://via.placeholder.com/250x250" alt="">
      </div>
      <div class="column is-half-mobile  is-one-quarter-tablet">
          <img class="lrStaffMember" src="http://via.placeholder.com/250x250" alt="">
      </div>
      <div class="column is-half-mobile  is-one-quarter-tablet">
          <img class="lrStaffMember" src="http://via.placeholder.com/250x250" alt="">
      </div>
      <div class="column is-half-mobile  is-one-quarter-tablet">
          <img class="lrStaffMember" src="http://via.placeholder.com/250x250" alt="">
      </div>
      <div class="column is-half-mobile  is-one-quarter-tablet">
          <img class="lrStaffMember" src="http://via.placeholder.com/250x250" alt="">
      </div>
      <div class="column is-half-mobile  is-one-quarter-tablet">
        <img class="lrStaffMember" src="http://via.placeholder.com/250x250" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'lrStaff'
}
</script>

<style lang="scss">
@import '../style/_variables.scss';
  .lrHeaderLine {
        background-color: $red;
        height:5px; 
    }
  .section {
    display: flex;
    align-items: center; 
    flex-direction: column; 
  }
  .lrStaff p {
    text-align: center;
    width: 70%;
    margin-bottom: 30px;
  }
  .lrPictures {
    text-align: center; 
  }
  .lrStaffMember {
    width: 250px;
    height: auto;
    &:hover {
      filter: blur(2px) grayscale(100%);
    }
  }
</style>